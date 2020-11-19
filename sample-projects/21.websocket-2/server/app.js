var express = require("express");
let app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const path = require("path");

// const indexHtmlPath = path.join(__dirname, "..", "client", "index.html");
// console.log(indexHtmlPath)
// Routing
app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req, res) => {
//   res.sendFile(indexHtmlPath);
// });

let numberOfUsers = 0;

io.on("connection", (socket) => {
  console.log("client connected");
  let addedUser = false;
  // when the client emit 'new message', this listens and executes
  socket.on("new message", (data) => {
    // we tell the client to execute 'new message'
    socket.broadcast.emit("new message", {
      username: socket.username,
      message: data,
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on("add user", (username) => {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    ++numberOfUsers;
    addedUser = true;
    socket.emit("login", {
      numberOfUsers: numberOfUsers,
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit("user joined", {
      username: socket.username,
      numberOfUsers: numberOfUsers,
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on("typing", () => {
    socket.broadcast.emit("typing", {
      username: socket.username,
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on("stop typing", () => {
    socket.broadcast.emit("stop typing", {
      username: socket.username,
    });
  });

  // when the user disconnects.. perform this
  socket.on("disconnect", () => {
    if (addedUser) {
      --numberOfUsers;

      // echo globally that this client has left
      socket.broadcast.emit("user left", {
        username: socket.username,
        numberOfUsers: numberOfUsers,
      });
    }
  });

  // socket.broadcast.emit("a user join");

  // io.emit("some event", {
  //   someProperty: "some value",
  //   otherProperty: "other value",
  // }); // This will emit the event to all connected sockets

  // socket.broadcast.emit("hi");

  // // use the connection
  // socket.on("chat message", (message) => {
  //   console.log(`message: ${message}`);
  //   io.emit("chat message", message);
  // });

  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
  // });
});

// Broadcast a message to connected users when someone connects or disconnects.
// Add support for nicknames.
// Don’t send the same message to the user that sent it. Instead, append the message directly as soon as he/she presses enter.
// Add “{user} is typing” functionality.
// Show who’s online.
// Add private messaging.
// Share your improvements!

http.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
