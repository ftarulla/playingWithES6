
![alt text](http://orig02.deviantart.net/573d/f/2010/232/2/b/rpg_class_peices_by_knickolaus.png "RPG classes")

# Classes
JavaScript *is* all about objects ;) So, to arrange knowledge it uses ... well ... objects. But, one may ask: how are those objects *related* in a way that we can arrange knowledge? And the answer is simple: __prototyping__

JavaScript doesn't use __classes__ , it uses __prototypes__!!

## How does a Prototype/Prototypal work?
In a prototype-based knowledge-ordering, objects can share its behaviour by being the prototype of another object. An example of such a language is Self (http://www.selflanguage.org/)
In Self an object is a collection of slots, which are the accessors methods that returns and sets values. Each object can have one or more slots called parent. This slot is a pointer to another object (the prototype!) and when an object receives a message and does not understand it, then it can __delegate__ the message to its prototype. (note: __delegate__ vs __forwarding__ please, please, read this article: http://www.saturnflyer.com/blog/jim/2012/07/06/the-gang-of-four-is-wrong-and-you-dont-understand-delegation/)

In JavaScript, this (*unique*) slot is called ... any guess¿? yep, it's called __[[Prototype]]__!! and it has a similar way of working as Self.

*work in progress*



##References
* __You-Dont-Know-JS__
https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md
https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20%26%20beyond/ch3.md
* __Mozilla Developer Network__
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
* __ECMA-262 by Dmitry Soshnikov. JavaScript.The core.__
http://dmitrysoshnikov.com/ecmascript/javascript-the-core/
