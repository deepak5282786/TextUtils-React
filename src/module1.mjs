// import dza from "./module2.mjs";
// import { p, c, d, e } from "./module2.mjs";

// console.log(dza);
// console.log(p);
// console.log(c);
// console.log(d);
// console.log(e);
const str = "i have  learned something new today";

const str1 = str.split(" ");
// console.log(str1);

//[ 'i', 'have', '', 'learned', 'something', 'new', 'today' ]

const newStr = str1.map((ele) => {
  return ele.charAt(0).toUpperCase();
});
console.log(newStr);
// const str2 = newStr.join(" ");
// console.log(str2);
