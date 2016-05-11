
// https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#arrow-functions

var add1 = x => x + 1;

console.log(add1(1)); // 2

console.log([1, 2, 3].map(e => e + 1)); // 2,3,4

console.log([1, 2, 3].map(add1)); // 2,3,4

var addn = n => x => x + n;
console.log([1, 2, 3].map(addn(10))); //11,12,13

// => is a syntactic stand-in for var self = this.
var Controller = function () {
  return {
    foo: 'bar',
    bla: function () {
      (function () {
        console.log(this); // global
        console.log(this.foo);
      })();
    }
  };
};
var controller = new Controller();
controller.bla(); // undefined

var ControllerFix = function () {
  return {
    foo: 'bar',
    bla: function () {
      var self = this;
      (function () {
        console.log(self); // {foo: 'bar', bla: [Function]}
        console.log(self.foo);
      })();
    }
  };
};
var controllerFix = new ControllerFix();
controllerFix.bla(); // undefined

var Controller2 = function () {
  return {
    foo: 'bar',
    bla: function () {
      (() => {
        //Lexical this in the arrow function
        console.log(this); // {foo: 'bar', bla: [Function]}
        console.log(this.foo);
      })();
    }
  };
};
var controller2 = new Controller2();
controller2.bla(); // 'bar'