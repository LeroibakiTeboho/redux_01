import React from "react";

function FirstClassCitizens() {
  function sayHello() {
    return "Hello World";
  }

  // || JAVASCRIPT FUNCTIONS ARE FIRST CLASS CITIZENS (WE CAN TREAT THEM LIKE ANY OTHER VARIABLES)

  let fn = sayHello;
  // passing reference / not calling

  console.log(fn());
  // calling a function

  // calling a function inside function
  function greet(fnMessage) {
    console.log(fnMessage);
  }

  // passing reference
  greet(sayHello);

  function sayHello2() {
    return function () {
      return "function inside function";
    };
  }

  let f = sayHello2();
  let message = f();

  console.log("last: " + message);

  return <div></div>;
}

export default FirstClassCitizens;
