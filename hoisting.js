/////////////////////////////////
/* being able to initialize variable before declaration is called hoisting */
// x = 5
//  console.log(x)

// var x;

///////////////////////////////
/* ReferenceError: Cannot access 'x' before initialization in case of let */

// try{
//     x=5;

//     console.log(x)

//     let x;

// }catch(err){
//     console.log(err);
// }

///////////////////////////////

/* SyntaxError: Missing initializer in const declaration in case of const */
// x=5;

// console.log(x);

// const x;

///////////////////////////////

/* hoisting only works for declaration but not for initialization */
var x = 5;

console.log(x + y); /*here y is undefined so the output is NaN*/

var y = 10;
