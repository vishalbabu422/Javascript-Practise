/* closure is a function that remembers its lexical scoping even after the function that has created it has stopped executing . retains access of variables from its outside function. Advantages : Encapsulation and state mgmt. Uses: callbacks,setTimeOut */
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

let add = outer()

add()
add()
add()