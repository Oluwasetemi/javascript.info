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
  }
);
