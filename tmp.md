## 1. What is hoisting? TDZ? example?

- Hoisting is a default behaviour or mechanism in javascript which allows some of the variable and function are available to use before there declaration.
- It is a time gap between where let and const variable are hoisted to its initialization.

---

Hoisting and the Temporal Dead Zone (TDZ) are important concepts in JavaScript related to variable and function declarations.

### Hoisting

**Hoisting** is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compile phase. This means you can reference variables and functions before they are actually declared in the code.

Here's how hoisting works with different declarations:

1. **Variables:**

   - **`var`**: Variables declared with `var` are hoisted and initialized with `undefined`. You can use them before their actual declaration, but their value will be `undefined` until the declaration is reached.

   ```javascript
   console.log(x); // Output: undefined
   var x = 5;
   console.log(x); // Output: 5
   ```

   - **`let` and `const`**: Variables declared with `let` and `const` are also hoisted, but they are not initialized. Accessing them before their declaration results in a ReferenceError due to the Temporal Dead Zone (TDZ).

   ```javascript
   console.log(y); // ReferenceError: Cannot access 'y' before initialization
   let y = 10;
   ```

2. **Functions:**

   - **Function Declarations**: Function declarations are hoisted with both their definition and implementation. You can call them before they appear in the code.

   ```javascript
   greet(); // Output: "Hello!"

   function greet() {
     console.log("Hello!");
   }
   ```

   - **Function Expressions**: Function expressions (including those using `var`, `let`, and `const`) are not hoisted in the same way. Only the variable declaration is hoisted, not the assignment.

   ```javascript
   sayHi(); // TypeError: sayHi is not a function

   var sayHi = function () {
     console.log("Hi!");
   };
   ```

### Temporal Dead Zone (TDZ)

The **Temporal Dead Zone (TDZ)** refers to the time between the beginning of a block (or a script) and the point where the variable declared with `let` or `const` is initialized. During this time, accessing the variable results in a ReferenceError.

Here's an example using `let` and `const`:

```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 1;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 2;
```

### Complete Example

Here’s a complete example showing how hoisting and TDZ behave with different types of declarations and function expressions:

```javascript
// Hoisting with var
console.log(a); // Output: undefined
var a = 3;
console.log(a); // Output: 3

// Hoisting with let (TDZ)
try {
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
} catch (e) {
  console.error(e.message);
}
let b = 4;

// Hoisting with const (TDZ)
try {
  console.log(c); // ReferenceError: Cannot access 'c' before initialization
} catch (e) {
  console.error(e.message);
}
const c = 5;

// Function Declaration
console.log(add(2, 3)); // Output: 5
function add(x, y) {
  return x + y;
}

// Function Expression
try {
  console.log(subtract(5, 3)); // TypeError: subtract is not a function
} catch (e) {
  console.error(e.message);
}
var subtract = function (x, y) {
  return x - y;
};
```

In this example:

- `var a` is hoisted and initialized with `undefined` but becomes `3` after its declaration.
- `let b` and `const c` are hoisted but not initialized, causing a ReferenceError if accessed before initialization.
- Function declarations are hoisted with their definition, so `add()` can be called before it's defined.
- Function expressions are only hoisted with the variable declaration, not the function definition, leading to errors if called before their definition.

Understanding hoisting and the TDZ helps prevent bugs related to variable and function declarations, ensuring smoother development in JavaScript.

## 2. What is closure with an example?

- Accessing the function variables even the function exection is completed or out of scope that is known as closure.

```
function main() {
    var a = 10;
    function m1() {
        var b = 20;
        console.log(a);
    }
    return m1;
}
let outer = main();
outer();
```

- Closure provides a means to encapsulate data within functions, allowing for controlled access to that data while keeping it hidden from the outside scope

---

## What is a Closure?

- Closure is a combination of function bundled together with it's lexical environment. It is a function that references variables in the outer scope from it's inner scope.
- To know more about Closures we need to know about Lexical scope.

### What is Lexical scope?

- A Lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration.
- But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

```
function foo() {
  var name = 'Roadside Coder'; // name is a local variable created by foo
  function displayName() { <----- A Closure // displayName() is the inner function
    alert(name); // variable used which is declared in the parent function
  }
  displayName();
}
foo();
```

- Scope can be globally or locally defined. We have block scopes also now with ES6.

```
// Global scope in here
var foo= function(){
     // local scope in here
}
```

### Why do we use Closures?

- Closures makes it possible for a function to have "private" variables.
- JavaScript closure is used to control what is and isn't in scope in a particular function, along with which variables are shared between sibling functions in the same containing scope.

```
function makeFunc() {
  var name = 'Roadside Coder';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

### Closure Scope chain

Closures have three scopes :

- Local Scope (Own scope)
- Outer Functions Scope
- Global Scope
  > If an outer function is a nested function then the outer function's scope includes the enclosing scope of the outer function which creates a chain of function scopes.

## Mostly asked Interview Questions for Closures

### 1. What are the advantages of Closures?

There are several advantages of using closures in JavaScript. Some of them are:

- Closure enables the use of nested functions that are used to get the values created in the execution context of that of the parent function.
- They can prove as a perfect solution while solving a problem of hierarchy in any program.
- They have huge importance as far as functional programming is concerned. It solves the for loop problem of functional programming.
- It is also used to simulate private scope for variables.

### 2. What is the difference between closure and scope?

- When you declare a variable in a function, you can only access it in the function.
- These variables are said to be scoped to the function.
- If you define any inner function within another function, this inner function is called a closure.
- It retains access to the variables created in the outer function.

---

- Whereas a scope in JavaScript defines what variables you have access to.
- There are two kinds of scope – global scope and local scope.

### 3. What will be the output for the following code snippet?

```
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // Output ?
  }
  console.log(count); // Output?
})();
```

**Solution : **

- `1` and `0` is logged to the console.
- The first statement `let count = 0` declares a variable count.
- `immediate()` is a closure that captures the `count` variable from the outer scope. Inside of the `immediate()` function scope `count` is `0`.
- However, inside the conditional, another `let count = 1` declares a local variable `count`, which overwrites `count` from outer the scope. The first `console.log(count)`logs `1`.
- The second `console.log(count)` logs `0`, since here `count` variable is accessed from the outer scope.

### 4. Can you create a function named createBase to show the below functionality?

```
var addSix = createBase(6);
addSix(10);// returns 16
addSix(21);// returns 27
```

Solution :

- You can create a closure to keep the value passed to the function createBase even after the inner function is returned.
- The inner function that is being returned is created within an outer function, making it a closure, and it has access to the variables within the outer function, in this case the variable baseNumber.

```
function createBase(baseNumber) {
  return function(N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + N;
  }
}

var addSix = createBase(6);
addSix(10);
addSix(21);
```

### 5.How do you optimise time using closures?

```
function find(index) {
    let a = [];
  for (let i = 0; i < 1000000; i++) { a[i]= i*i }

  console.log(a[index])
}

console.time("6");
find(6); // this takes 37ms
console.timeEnd("6");
console.time("12");
find(12); // this takes 135ms
console.timeEnd("12");
```

Solution :

```
function find() {
let a = [];
for (let i = 0; i < 1000000; i++) {
 a[i]= i*i
}

return function (index) {
    console.log(a[index])
    }
}

const closure = find()
console.time("6");
closure(6); // this takes 0.25 ms
console.timeEnd("6");
console.time("12");
closure(12) // this takes 0.025ms
console.timeEnd("12");
```

### 6. What will be the output for the following?

```
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
```

**Solution : ** 333

### 7. How would you use a closure to create a private counter?

- You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.

```
function counter() {
  var _counter = 0;
    // return an object with several functions that allow you
    // to modify the private _counter variable
    return {
      add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter;
        }
  }
}

// error if we try to access the private variable like below// _counter;// usage of our counter function
var c = counter();
c.add(5);
c.add(9);

// now we can access the private variable in the following way
c.retrieve();// => The counter is currently at: 14
```

### 8. What is module pattern?

```
var Module = (function() {
    function privateMethod() {
        // do something
    }

    return {
        publicMethod: function() {
            // can call privateMethod();
        }
    };
})();
```

- The return statement of the Module contains our public functions.
- The private functions are just those that are not returned. Not returning functions makes them inaccessible outside of the Module namespace.
- But our public functions can access our private functions which make them handy for helper functions, AJAX calls, and other things.

```
Module.publicMethod(); // works
Module.privateMethod(); // Uncaught ReferenceError: privateMethod is not defined
```

- One convention is to begin private functions with an underscore, and returning an anonymous object containing our public functions.
- This makes them easy to manage in a long object.
- This is how it looks:

```
var Module = (function () {
    function _privateMethod() {
        // do something
    }
    function publicMethod() {
        // do something
    }
    return {
        publicMethod: publicMethod,
    }
})();
```

### 9. Rewrite the function in such a way the output gets printed once even though the function is called multiple times.

```
let view
function likeTheVideo(){
    view="Roadside Coder"
    console.log( "Subscribe to", view)
}

likeTheVideo(); // Subscribe to Roadside Coder
likeTheVideo(); // Subscribe to Roadside Coder
likeTheVideo(); // Subscribe to Roadside Coder
likeTheVideo(); // Subscribe to Roadside Coder
```

#### Solution :

```
let view;
function likeTheVideo(){
    let called = 0;

    return function(){
        if(called>0){
            console.log("Already Subscribed");
        }
        else{
            view="Roadside Coder"
            called++;
            console.log( "Subscribe to", view)
        }
    }
}

let isSubscribe = likeTheVideo()

isSubscribe() // Subscribe to Roadside Coder
isSubscribe() // Already Subscribed
```

### 10. Write the polyfill for "\_.once" method in lodash.

```
function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  };
}

// Usage
const hello = once(() => console.log("hello"));

hello();
hello();
```

### 11. Write the polyfill for "\_.memoize" method in lodash.

```
function memoize(func) {
  let res = {};

  return function (...args) {
    const argsIndex = JSON.stringify(args);
    if (!res[argsIndex])
             res[argsIndex] = func(...args);
    return res[argsIndex];
  };
}

const clumsysquare = memoize((num) => {
  for (let i = 1; i <= 100000000; i++) {}

  return num * 2;
});

console.time("First call");
console.log(clumsysquare(9467));
console.timeEnd("First call");

// use the same value two times
console.time("Second call");
console.log(clumsysquare(9467));
console.timeEnd("Second call");
```

## 3. Function Curring?

### What is Currying?

- Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).
- Basically Currying doesn’t call a function. It just transforms a function. They are constructed by chaining closures by immediately returning their inner functions simultaneously.

### Convert f(a, b) into f(a)(b).

```
/*f(a,b) implementation */
function f(a,b) {
    return "Works"
}
```

```
/*f(a)(b) implementation */
function f(a) {
    return (b) => {
         "Works"
    }
}
console.log(f(1)(2)) // works
console.log(f(1)); /* (b) => {return "Works" } */
```

### Why should currying be used?

- It makes a function pure which makes it expose to less errors and side effects.
- It helps in avoiding the same variable again and again.
- It is a checking method that checks if you have all the things before you proceed.
- It divides one function into multiple functions so that one handles one set of responsibility.

### How does currying work?

- Currying is a function that takes multiple arguments as input.
- It transform the function into a number of functions where every function will accept one argument.

```
/*Simple function*/
const add = (a, b, c)=>{
    return a+ b + c
}
console.log(add(1,2 ,3)); // 6

/* Curried Function */
const addCurry = (a) => { // takes one argument
    return (b)=>{                 //takes second argument
        return (c)=>{             //takes third argument
            return a+b+c
        }
    }
}
console.log(addCurry(1)(2)(3)); //6
```

### Convert sum(2,6,1) to sum(2)(6)(1)

```
function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
/* you can call it in two ways*/
1️⃣ console.log(sum(1)(2)(3)); //6

2️⃣ const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6
```

#### Output

```
console.log(sum1);
```

#### Solution

```
(b) => {
        return (c) => {
            return a + b + c
        }
    }
```

- Why such output? 👆🏻 Because you passed only one argument.Hence, it will return the other two functions expecting other 2 arguments.

```
console.log(sum2); // (c) => {return a + b + c }
```

### Evaluate(”sum”)(2)(4) ⇒ 2+4 = 6 on basis of input given to first param.

1. Create a curried function named sum that take an argument as operation

```
function sum(operation){
}
```

2. You see it takes two arguments (”sum”)**(2)(4)**meaning it has 2 nested functions

```
function sum(operation) {
    return (a) => {
        return (b) => {
        }
    }
}
```

3. Now we to do operation basis on the first argument "operation"

```
function sum(operation) {
    return (a) => {
        return (b) => {
        if(operation === "sum")
                  return a + b;
                    else if(operation === "multiply")
                    return a * b;
                    else if(operation === "divide")
                    return a / b;
                    else if(operation === "subtract")
                    return a - b;
                    else return "No / Invalid Operation Selected"
        }
    }
}
```

### Write a currying function that takes infinite arguments.

```
/*Straightforward and time-taking solution*/
const sum = function(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                ...
                ...
                ...
                return a + b + c + d + ... n;
            }
        }
    }
}
```

- The above solution is not much of an optimised solution.
- Let's see a recursive solution to solve the above question.👇🏼

```
//recursive solution
const sum = function(a) {
    return function(b) {
        if (b) {
            return sum(a + b);
        } else {
            return a;
        }
    }
}
```

1. It will keep returning a function until arguments are provided.
2. If there are no more arguments specified, we simply return the value of 'a' which is the added total result.

### Currying vs Partial application

- Normally how do we write a curried function 👇🏼

```
function sum(a) {
    return (b, c) => {
        return a * b * c
    }
}
```

- Let's see the partial application of the same function sum 👇🏼

```
function sum(a) {
    return (b, c) => {
        return a * b * c
    }
}
```

- How can this function be called?

```
let x = sum(10);
x(1,2);
x(20,30);
x(40,50);
// OR
sum(10)(1,2);
sum(10)(20,30);
sum(10)(40,50);
```

- We concluded that the above function named sum expected 3 arguments and had 2 nested functions (Partial Application) unlike previous implementation where the function expected 3 arguments and had 3 nested functions.(currying)
- Partial application transforms a function into another function with smaller arity.

### How can we manipulate DOM using currying?

```
<div>
  <h1 id="header">Hello Rock</h1>
</div>
```

- I want browser to show "Hello Dwayne" instead of "Hello Piyush".
  Steps:

1. Take the id of the element as one argument and the content inside the element as another argument.

```
const updateElemText = id => content => document.querySelector(`#${id}`).textContent= content;
```

2. Now call the function with element id and and the content

```
const updateHeaderText = updateElemText('header');
updateHeaderText('Hello Dwayne!');
```

### Write a function curry() that converts f(a,b,c) into a curried function f(a)(b)(c) .

```
function curry(func) {
  // args takes arguments in the form of array eg - [a, b, c]
  return function curriedFunc(...args) {
    //check if current args passed equals the number of args function expects
    if(args.length >= func.length) {
      // if yes, we spread args elements to pass into func (spread). This is our base case.
      return func(...args)
    } else {
      /* if not, we return a function that collects the next arguments passed in next and
      we recursively call curriedFunc, accumulating and spreading the values of args first and then
      the values of next. next will take into consideration a variable amount of next arguments
      e.g (1, 2) (1) (1,2,3) */
      return function(...next) {
        return curriedFunc(...args,...next);
      }
    }
  }
}

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'
```

### Write a function curry() that converts f(a,b,c) into a curried function f(a)(b)(c) with placeholder ( \_ ) support.

```
function curry(func) {

  return function curried(...args) {   // we need to return a function to make it curry-able.

    // 1. If the arguments are extra then eliminate them
    // we don't want to pass 6 arguments when the expected is 3.
    // it will interfere with our placeholder logic
    const sanitizedArgs = args.slice(0, func.length);

    // see if placeholder is available in arguments
    const hasPlaceholder = sanitizedArgs.some(arg => arg == curry.placeholder);

    // if no placeholder and arguements are equal to what expected then it is normal function call
    if(!hasPlaceholder && sanitizedArgs.length == func.length) {
      return func.apply(this, sanitizedArgs);
    }

    // else we need to replace placeholders with actual values
    // we call helper function `mergeArgs` for this
    // we pass first and next arguments to helper function
    return function next(...nextArgs) {
      return curried.apply(this, mergeArgs(sanitizedArgs, nextArgs));
    }

  }
}

function mergeArgs(args, nextArgs) {

  let result = [];

  // iterate over args (because we need to replace from it)
  // in each iteration, if we find element == curry.placeholder
  // then we replace that placeholder with first element from nextArgs
  // else we put current element
  args.forEach((arg, idx) => {
    if(arg == curry.placeholder) {
      result.push(nextArgs.shift());
    } else {
      result.push(arg);
    }
  });

  // we merge both, because there might be chance that args < nextArgs
  return [...result, ...nextArgs];
}

curry.placeholder = Symbol()
```

## 4. type error and reference errro?

### ReferenceError

- A ReferenceError occurs when you try to use a variable that doesn't exist at all.

```
console.log(x); // ReferenceError: x is not defined
let x = 10;

console.log(y); // undefined
var y = 20;

console.log(add(2, 3)); // 5
function add(a, b) {
  return a + b;
}
```

### TypeError

- A TypeError occurs when the variable exists, but the operation you're trying to perform is not appropriate for the type of value it contains.

## Q5. this keyword?

In JavaScript, the `this` keyword is a fundamental concept that refers to the context in which a function or method is executed.

### 1. **Global Context**

In the global context (outside of any function or object method), `this` refers to the global object.

- **In a browser environment**, `this` refers to the `window` object.
- **In Node.js**, `this` refers to the `global` object.

**Example:**

```javascript
console.log(this); // In a browser, this logs the Window object
```

### 2. **Function Context**

When `this` is used inside a regular function (not an arrow function), it refers to the object that called the function.

- **In non-strict mode**, `this` refers to the global object (or `window` in browsers) if the function is called directly.
- **In strict mode**, `this` is `undefined` if the function is called directly.

**Example:**

```javascript
function showThis() {
  console.log(this);
}

showThis(); // Logs the global object in non-strict mode, undefined in strict mode
```

**Strict mode example:**

```javascript
"use strict";

function showThis() {
  console.log(this);
}

showThis(); // Logs undefined
```

### 3. **Method Context**

When `this` is used inside an object method, it refers to the object that owns the method.

**Example:**

```javascript
const person = {
  name: "Alice",
  greet() {
    console.log("Hello, " + this.name);
  },
};

person.greet(); // Logs: Hello, Alice
```

### 4. **Constructor Functions**

In a constructor function (or class method), `this` refers to the newly created instance of the constructor.

**Example:**

```javascript
function Person(name) {
  this.name = name;
}

const alice = new Person("Alice");
console.log(alice.name); // Logs: Alice
```

### 5. **Arrow Functions**

Arrow functions have a lexical `this`, meaning they inherit `this` from the surrounding context where they are defined. They do not have their own `this`.

**Example:**

```javascript
const person = {
  name: "Alice",
  greet() {
    const innerFunction = () => {
      console.log("Hello, " + this.name);
    };
    innerFunction();
  },
};

person.greet(); // Logs: Hello, Alice
```

### 6. **Event Handlers**

In event handlers, `this` refers to the element that triggered the event.

**Example:**

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  console.log(this); // Logs the button element
});
```

### 7. **`call`, `apply`, and `bind` Methods**

You can explicitly set the value of `this` using `call()`, `apply()`, or `bind()`.

- **`call()`**: Calls a function with a given `this` value and arguments.

  ```javascript
  function greet() {
    console.log("Hello, " + this.name);
  }

  const person = { name: "Alice" };
  greet.call(person); // Logs: Hello, Alice
  ```

- **`apply()`**: Similar to `call()`, but arguments are passed as an array.

  ```javascript
  function greet(greeting) {
    console.log(greeting + ", " + this.name);
  }

  const person = { name: "Alice" };
  greet.apply(person, ["Hello"]); // Logs: Hello, Alice
  ```

- **`bind()`**: Creates a new function with `this` bound to the provided value.

  ```javascript
  function greet() {
    console.log("Hello, " + this.name);
  }

  const person = { name: "Alice" };
  const boundGreet = greet.bind(person);
  boundGreet(); // Logs: Hello, Alice
  ```

### Summary

- `this` depends on the context of the function or method it is used in.
- In global context: `this` refers to the global object.
- In a function: `this` refers to the global object (non-strict) or `undefined` (strict mode).
- In a method: `this` refers to the object that owns the method.
- In a constructor: `this` refers to the newly created instance.
- In arrow functions: `this` is inherited from the surrounding context.
- In event handlers: `this` refers to the element that triggered the event.

Understanding `this` is crucial for working with JavaScript's object-oriented and functional programming features effectively.

## Q6. Function Method? why? call, apply, bind? with syntax and example?
