// Object.keys, values, entries

// Transforming objects -Object.fromEntries(obj)
const prices = {
  banana: 1,
  orange: 2,
  meat: 4
};

const result = Object.entries(prices);
console.log(result);

console.log(Object.fromEntries(result));

const doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

doublePrices;
