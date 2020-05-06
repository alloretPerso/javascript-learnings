"use strict";
(function () {
  let greeting = (function () {
    let message = "Hello";
    let getMessage = function () {
      return message;
    };
    return {
      getMessage: getMessage,
    };
  })();

  display("hello");
  display(greeting.getMessage());

  greeting = () => {
    //Consumer
    return "Hello world";
  };
  display(greeting());
  let greet = (val) => {
    return "Hello " + val;
  };
  display(greet("world in arrow"));

  let person1 = { name: "John", age: 22 };
  let person2 = { name: "Mary", age: 26 };

  let sayHi = function () {
    console.log("Hi, " + this.name);
  };
  //sayHi.call(person1);
  //sayHi.call(person2);
})();
