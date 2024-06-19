import React from "react";

function HigherOrderFunctions() {
  // || HIGHER ORDER FUNCTIONS - IS A FUNCTION THAT TAKES A FUNCTION AS AN ARGUMENT OR RETURNS OR BOOTH

  // map
  let numbers = [1, 2, 3];
  let num = numbers.map((number) => number * 2);
  console.log(num);

  // setTimeout
  setTimeout(() => console.log("Hello World"), 1000);

  return <div>HigherOrderFunctions</div>;
}

export default HigherOrderFunctions;
