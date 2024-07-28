// steps involved in solving the problem

// click event listener on the field
window.field.onclick = function (event) {
  // move the ball using the event.clientX/event.clientY
  // get the exact top and left of the position that was clicked
    // get the boundClientRectangle of the field
  const fieldCoords = window.field.getBoundingClientRect();

    // get the ball coordinates
  const ballTop = event.clientY - fieldCoords.top - field.clientTop - ball.offsetHeight/2;
  const ballLeft = event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth / 2;

  const ballCoords = {
    top: ballTop,
    left: ballLeft,
  }
  // perfect condition from question
  // The ball must not cross field boundaries
  // top
  if (ballCoords.top < 0) {
    ballCoords.top = 0;
  }
  // bottom
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    console.log('exceed bottom')
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }
  // left
  if (ballCoords.left < 0) {
    ballCoords.left = 0;
  }
  // right
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    console.log('exceed right')
    ballCoords.left = field.clientWidth - ball.clientWidth;

  }

  window.ball.style.top = `${ballCoords.top}px`
  window.ball.style.left = `${ballCoords.left}px`
}