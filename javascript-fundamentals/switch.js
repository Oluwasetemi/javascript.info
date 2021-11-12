// convert the dice game to a switch statement

function ask(question, yes, no, mul, div, err) {
  const ops = prompt(question);
  console.log(ops);
  switch (ops) {
    case '+': {
      const num1 = +prompt('Enter the number1');
      const num2 = +prompt('Enter the number2');
      yes(num1, num2);
      break;
    }
    case '-':
      {
        const num1 = +prompt('Enter the number1');
        const num2 = +prompt('Enter the number2');
        no(num1, num2);
      }
      break;
    case '*':
      {
        const num1 = +prompt('Enter the number1');
        const num2 = +prompt('Enter the number2');
        mul(num1, num2);
      }
      break;
    case '/': {
      const num1 = +prompt('Enter the number1');
      const num2 = +prompt('Enter the number2');
      div(num1, num2);
      break;
    }
    default:
      err();
      break;
  }
}
ask(
  'Enter an operator ?',
  (a, b) => {
    alert(a + b);
  },
  (a, b) => {
    alert(a - b);
  },
  (a, b) => {
    alert(a * b);
  },
  (a, b) => {
    alert(a / b);
  },
  () => {
    alert('try again later');
  },
);

// switch die game
// Language: javascript

const random = Math.floor(Math.random() * 6) + 1;

console.log(random);

switch (random) {
  case 1:
    console.log('You got 1');
    break;
  case 2:
    console.log('You got 2');
    break;
  case 3:
    console.log('You got 3');
    break;
  case 4:
    console.log('You got 4');
    break;
  case 5:
  case 6:
    console.log('You got 5 or 6');
    break;
  default:
    console.log('the dies fell out of the ludo board')
    break;
}
