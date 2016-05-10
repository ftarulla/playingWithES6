var add1 = x => x + 1;

console.log(add1(1)); // 2

var allplus1 = [1,2,3].map(e => e + 1);
console.log(allplus1);  // 2,3,4

var allplus1_v2 = [1,2,3].map(add1);
console.log(allplus1_v2); // 2,3,4

var addn = n => (x => x + n);
console.log([1,2,3].map(addn(10))); //11,12,13
