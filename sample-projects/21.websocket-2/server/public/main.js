window.onload = function () {
  var FADE_TIME = 150; // ms
  let TYPING_TIMER_LENGTH = 400; // ms
  let COLORS = [
    "#e21400",
    "#91580f",
    "#f8a700",
    "#f78b00",
    "#58dc00",
    "#287b00",
    "#a8f07a",
    "#4ae8c4",
    "#3b88eb",
    "#3824aa",
    "#a700ff",
    "#d300e7",
  ];

  // Initialize variables
  let $window = window;
  let $usernameInput = document.querySelector(".usernameInput"); // Input for username
  let $messages = document.querySelector(".messages"); // Messages area
  let $inputMessage = document.querySelector(".inputMessage"); // Input message input box

  let $loginPage = document.querySelector(".login.page"); // The login page
  let $chatPage = document.querySelector(".chat.page"); // The chatroom page

  // Prompt for setting a username
  let username;
  let connected = false;
  let typing = false;
  let lastTypingTime;
  let $currentInput = $usernameInput;

  let socket = io();

  const addParticipantsMessage = (data) => {
    let message = "";
    if (data.numberOfUsers === 1) {
      message += "there's 1 participant";
    } else {
      message += "there are " + data.numberOfUsers + " participants";
    }
    log(message);
  };

  // Sets the client's username
  const setUsername = () => {
    username = cleanInput($usernameInput.value.trim());
    username = username.textContent;

    // If the username is valid
    if (username) {
      fadeOut($loginPage);
      show($chatPage);
      // $loginPage.removeEventListener("click");
      $currentInput = $inputMessage;

      // Tell the server your username
      socket.emit("add user", username);
    }
  };

  // Sends a chat message
  const sendMessage = () => {
    let message = $inputMessage.value;
    // Prevent markup from being injected into the message
    message = cleanInput(message);
    message = message.textContent;
    // if there is a non-empty message and a socket connection
    if (message && connected) {
      $inputMessage.value = "";
      addChatMessage({
        username: username,
        message: message,
      });
      // tell server to execute 'new message' and send along one parameter
      socket.emit("new message", message);
    }
  };

  // Log a message
  const log = (message, options) => {
    let li = document.createElement("li");
    li.classList.add("log");
    // li.style.display = 'block';
    // console.log(message)
    li.textContent = message;
    let $el = li;
    addMessageElement($el, options);
  };

  // Adds the visual chat message to the message list
  const addChatMessage = (data, options) => {
    // Don't fade the message in if there is an 'X was typing'
    let $typingMessages = getTypingMessages(data);
    options = options || {};
    if ($typingMessages.length !== 0) {
      options.fade = false;
      $typingMessages.forEach(each => each.remove());
    }

    let span = document.createElement("span");
    span.classList.add("username");
    span.textContent = data.username;
    span.style.color = getUsernameColor(data.username);
    let $usernameDiv = span;

    let spanMessage = document.createElement("span");
    spanMessage.classList.add("messageBody");
    spanMessage.textContent = data.message;

    let $messageBodyDiv = spanMessage;

    let typingClass = data.typing ? "typing" : "not-typing";

    let $messageDiv = document.createElement("li");
    $messageDiv.dataset["username"] = data.username;
    $messageDiv.classList.add(typingClass);
    $messageDiv.append($usernameDiv, $messageBodyDiv);

    addMessageElement($messageDiv, options);
  };

  // Adds the visual chat typing message
  const addChatTyping = (data) => {
    data.typing = true;
    data.message = "is typing";
    addChatMessage(data);
  };

  // Removes the visual chat typing message
  const removeChatTyping = (data) => {
    getTypingMessages(data);
    // fadeOut(el);
    // remove element
  };

  // Adds a message element to the messages and scrolls to the bottom
  // el - The element to add as a message
  // options.fade - If the element should fade-in (default = true)
  // options.prepend - If the element should prepend
  //   all other messages (default = false)
  const addMessageElement = (el, options) => {
    let $el = el;

    // Setup default options
    if (!options) {
      options = {};
    }
    if (typeof options.fade === "undefined") {
      options.fade = true;
    }
    if (typeof options.prepend === "undefined") {
      options.prepend = false;
    }

    // Apply options
    if (options.fade) {
      // hide($el);
      fadeIn($el);
    }
    if (options.prepend) {
      $messages.prepend($el);
    } else {
      $messages.append($el);
    }
    $messages.scrollTop = $messages.scrollHeight;
  };

  // Prevents input from having injected markup
  const cleanInput = (input) => {
    let div = document.createElement("div");
    div.innerHTML = input;
    return div;
  };

  // Updates the typing event
  const updateTyping = () => {
    if (connected) {
      if (!typing) {
        typing = true;
        socket.emit("typing");
      }
      lastTypingTime = new Date().getTime();

      setTimeout(() => {
        let typingTimer = new Date().getTime();
        let timeDiff = typingTimer - lastTypingTime;
        if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
          socket.emit("stop typing");
          typing = false;
        }
      }, TYPING_TIMER_LENGTH);
    }
  };

  // Gets the 'X is typing' messages of a user
  // FIX:
  const getTypingMessages = (data) => {
    let typings = Array.from(document.querySelectorAll(".typing"));
    typings.filter((typing, i) => {
      return typing.dataset.username === data.username
    })
    return typings;

  };

  // Gets the color of a username through our hash function
  const getUsernameColor = (username) => {
    if (!username) return;
    // Compute hash code
    let hash = 7;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    // Calculate color
    let index = Math.abs(hash % COLORS.length);
    return COLORS[index];
  };

  // Keyboard events

  $window.addEventListener("keydown", (event) => {
    // Auto-focus the current input when a key is typed
    if (!(event.ctrlKey || event.metaKey || event.altKey)) {
      if ($currentInput) {
        $currentInput.focus();
      }
    }
    // When the client hits ENTER on their keyboard
    if (event.which === 13) {
      if (username) {
        sendMessage();
        socket.emit("stop typing");
        typing = false;
      } else {
        setUsername();
      }
    }
  });

  $inputMessage.addEventListener("input", () => {
    updateTyping();
  });

  // Click events

  // Focus input when clicking anywhere on login page
  $loginPage.click(() => {
    $currentInput.focus();
  });

  // Focus input when clicking on the message input's border
  $inputMessage.click(() => {
    $inputMessage.focus();
  });

  // Socket events

  // Whenever the server emits 'login', log the login message
  socket.on("login", (data) => {
    connected = true;
    // Display the welcome message
    let message = "Welcome to Socket.IO Chat – ";
    log(message, {
      prepend: true,
    });
    addParticipantsMessage(data);
  });

  // Whenever the server emits 'new message', update the chat body
  socket.on("new message", (data) => {
    addChatMessage(data);
  });

  // Whenever the server emits 'user joined', log it in the chat body
  socket.on("user joined", (data) => {
    log(data.username + " joined");
    addParticipantsMessage(data);
  });

  // Whenever the server emits 'user left', log it in the chat body
  socket.on("user left", (data) => {
    log(data.username + " left");
    addParticipantsMessage(data);
    removeChatTyping(data);
  });

  // Whenever the server emits 'typing', show the typing message
  socket.on("typing", (data) => {
    addChatTyping(data);
  });

  // Whenever the server emits 'stop typing', kill the typing message
  socket.on("stop typing", (data) => {
    removeChatTyping(data);
  });

  socket.on("disconnect", () => {
    log("you have been disconnected");
  });

  socket.on("reconnect", () => {
    log("you have been reconnected");
    if (username) {
      socket.emit("add user", username);
    }
  });

  socket.on("reconnect_error", () => {
    log("attempt to reconnect has failed");
  });
};

function fadeOut(el) {
  el.classList.add("hide-fade-out");
  el.classList.remove("show-fade-out");
}

function fadeIn(el) {
  el.classList.add("show-fade-in");
  el.classList.remove("hide-fade-in");
}

function hide(el) {
  el.style.display = "none";
}

function show(el) {
  el.style.display = "block";
}
