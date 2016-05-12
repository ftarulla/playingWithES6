
/*******************************************************************************
 * References
 *  - https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#arrow-functions
 *  - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

/*******************************************************************************
 * A new (and simple) way to write anonymous functions.
 */

var add1 = x => x + 1;

console.log(add1(1)); // 2
console.log([1,2,3].map(e => e + 1));  // 2,3,4
console.log([1,2,3].map(add1)); // 2,3,4

var addn = n => (x => x + n);
console.log([1,2,3].map(addn(10))); //11,12,13

/*******************************************************************************
 * Not Just Shorter Syntax, But this ... lexical this!!
 *
 * https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md#not-just-shorter-syntax-but-this
 */

// Example 1
var Controller = function() {
  return {
    foo: 'bar',
    bla: function() {
      (function() {
        console.log(this); // global
        console.log(this.foo);
      })();
    }
  }
};
var controller = new Controller();
controller.bla(); // undefined

var ControllerFix = function() {
  return {
    foo: 'bar',
    bla: function() {
      var self = this;  // Binding THIS
      (function() {
        console.log(self); // {foo: 'bar', bla: [Function]}
        console.log(self.foo);
      })();
    }
  }
};
var controllerFix = new ControllerFix();
controllerFix.bla(); // undefined

// => is a syntactic stand-in for var self = this.
var Controller2 = function() {
  return {
    foo: 'bar',
    bla: function() {
      (() => { //Lexical this in the arrow function
        console.log(this); // {foo: 'bar', bla: [Function]}
        console.log(this.foo);
      })();
    }
  }
};
var controller2 = new Controller2();
controller2.bla(); // 'bar'

//Example 2
var Timer = function() {
  return {
    displayText: "It's time!!",
    start: function(ms) {
      setTimeout(function() {
        console.log(this.displayText); // undefined
      }, ms)
    }
  };
};
var timer = new Timer();
timer.start(1000);

var TimerFixed = function() {
  return {
    displayText: "It's time!!",
    start: function(ms) {
      var self = this;
      setTimeout(function() {
        console.log(self.displayText); // It's time!!
      }, ms)
    }
  };
};
var timerFixed = new TimerFixed();
timerFixed.start(1000);

var Timer2 = function() {
  return {
    displayText: "It's time!!",
    start: function(ms) {
      setTimeout(() => {
        console.log(this.displayText); // It's time!!
      }, ms)
    }
  };
};
var timer2 = new Timer2();
timer2.start(1000);


/*******************************************************************************
 * And what about the arguments?
 *
 */
