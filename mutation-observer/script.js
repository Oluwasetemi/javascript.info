console.log("working");
const watch = document.querySelector("p");
console.log(watch);

let observer = new MutationObserver(callback);

function callback(payload) {
  console.log(payload);
}

observer.observe(watch, {
  childList: true, // observe direct children
  subtree: true, // and lower descendants too
  characterDataOldValue: true, // pass old data to callback
});
