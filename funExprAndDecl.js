/* function expression,cannot be hoisted,name is not necessary, can be IIFE */
let hello = function () {
  console.log("Hello");
};

let hello2 = function greet() {
  console.log("Hello");
};

///IIFE ///

(function () {
  console.log("Hello");
})();

/* function declaration, since it is a declaration it is hoisted, name is necessary */

function hello1() {
  console.log("Hello");
}
