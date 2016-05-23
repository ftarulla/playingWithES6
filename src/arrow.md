
![alt text](https://raw.githubusercontent.com/ftarulla/playingWithES6/master/resources/walpaper-Green-Arrow-Wallpaper-HD3891-with-Green-Arrow-Wallpaper-HD3891.jpg "Arrow Functions")

# Arrow Functions
JavaScript *is* (and *always was*) all about objects.
Everything is an object and in this particular case __functions are objects__.

> *JavaScript is not a functional programming language like Lisp or Haskell, but the fact that JavaScript can manipulate functions as objects means that we can use functional programming techniques in JavaScript.*
>
>JavaScript: The Definitive Guide (ch.8.8)

## A new (and simple) way to write anonymous functions.
Let start with a simple function:
```js
function addOne(n) {
  return n + 1;
}
```
In ECMAScript6 it can be written like:
```js
var addOne = n => n + 1;
```

## Lexical `this`
In JavaScript, the invocation context (`this` value) is bounded when the function is invoked.
> _JavaScript functions can be invoked in four ways:_
* as functions,
* as methods,
* as constructors, and
* indirectly through their call() and apply() methods.
>
>JavaScript: The Definitive Guide (ch.8.2)

That is why in some situations, `this` may appear to be *something else*:

```js
var Timer = function() {
  return {
    displayText: "It's time!!",
    start: function(ms) {
      setTimeout(function() {
        console.log(this.displayText);
      }, ms)
    }
  };
};

var timer = new Timer();
timer.start(2000);
```
In this example, the timer (after 1 second) displays `undefined`. And that's the **correct** behaviour ... although we want it to do something else! And the mistake arises with the position of `this` in the code, ie. its lexical position, and the fact that `this` is the **invocation context**.

The solution to this *binding problem* is to declare a new variable, assign the context to that variable and then, thanks to JavaScript closures (JavaScript: The Definitive Guide, ch.8.6), the variable (ie. the context that we want) can be accessed when the function is invoked.

```js
var TimerFixed = function() {
  return {
    displayText: "It's time!!",
    start: function(ms) {
      var self = this;
      setTimeout(function() {
        console.log(self.displayText);
      }, ms)
    }
  };
};

var timerFixed = new TimerFixed();
timerFixed.start(2000);
```

Now in ECMAScript6 we could use an **arrow function**:
```js
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
```
As we can see in the above example, the arrow function bound `this` to the enclosing context, ie. now we have a lexical this.

## Lexical arguments
Being consistent with `this`, the arguments variable is a reference to the arguments' object of the enclosing scope. Let's see an example:
```js
var foo = function() {
  console.log("Arguments of foo:");
  console.log(arguments); // { '0': 'hello', '1': 'world', '2': 123 }

  ((n) => {
    console.log("Arguments of inner anonymous function:");
    console.log(arguments); // { '0': 'hello', '1': 'world', '2': 123 }
  })(42);
}
foo('hello', 'world', 123);
```

##References
* __You-Dont-Know-JS__
https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch2.md
* __Mozilla Developer Network__
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
