async function f() {
  return 1;
}

f().then(console.log); // 1

// The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically
async function fPromise() {
  return Promise.resolve(1);
}

fPromise().then(console.log); // 1

async function fAsyncAwait() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  const result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

fAsyncAwait();

async function showAvatar() {
  // read our JSON
  const response = await fetch('/article/promise-chaining/user.json');
  const user = await response.json();

  // read github user
  const githubResponse = await fetch(
    `https://api.github.com/users/${user.name}`
  );
  const githubUser = await githubResponse.json();

  // show the avatar
  const img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = 'promise-avatar-example';
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();

// accept thenables and catch
// class methods can be prepended with async

async function f() {

  try {
      let response = await fetch('http://no-such-url');
      let user = await response.json();
  } catch(err) {
    console.log(err); // TypeError: failed to fetch
  }
}

f();

f().catch(alert); // TypeError: failed to fetch // (*)
