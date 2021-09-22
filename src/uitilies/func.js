function add(x, y) {
  return x + y;
}

function mulitply(x, y) {
  return x * y;
}

function subtrac(x, y) {
  return x - y;
}

const numbs = [43, 54, 67, 23, 65];

let sum = 0;

for (const num of numbs) {
  sum += num;
}
// console.log(sum);

const reducer = (previous, current) => previous + current;

numbs.reduce(reducer, 0);

const products = [
  { name: "Alta", price: 50 },
  { name: "Nail palis", price: 90 },
  { name: "Makeup box", price: 490 },
];

const productTotal = products.reduce(
  (previous, current) => previous + current.price,
  0
);
console.log(productTotal);

export { add, mulitply, subtrac };
