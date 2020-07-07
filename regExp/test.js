function parse(expr) {
  const regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;

  const result = expr.match(regexp);

  if (!result) return [];
  result.shift();

  return result;
}

console.log(parse('-1.23 * 3.45'));

const str = `He said: "She's the one!".`;

const regexp = /(?<quote>['"])(.*?)\k<quote>/g;

console.log(str.match(regexp));
