# Q1. What is hoisting? TDZ? example?

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

# Q2. What is closure with an example?

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

# Mostly asked Interview Questions for Closures

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
// Output: 3 3 3
```

### 7. How would you use a closure to create a private counter?

- You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.

```
function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function (increment) {
      _counter += increment;
    },
    retrieve: function () {
      return "The counter is currently at: " + _counter;
    },
  };
}

// error if we try to access the private variable like below// _counter;// usage of our counter function
var c = counter();
c.add(5);
c.add(9);

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14
```

### 8. What is module pattern?

```
var Module = (function () {
  function privateMethod() {
    // do something
  }

  return {
    publicMethod: function () {
      // can call privateMethod();
    },
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

# Q3. Function Curring?

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

# Q4. Type Error and Reference Error?

### TypeError

A `TypeError` occurs when an operation is performed on a value of an inappropriate type. This often happens when a value is not of the expected type for an operation or function.

#### Example 1: Calling a Method on Undefined

```javascript
let obj = undefined;
obj.someMethod(); // TypeError: Cannot read property 'someMethod' of undefined
```

In this case, you’re trying to call `someMethod` on `obj`, but `obj` is `undefined`, and `undefined` does not have a method called `someMethod`.

#### Example 2: Incorrect Argument Type

```javascript
function multiply(x, y) {
  return x * y;
}

console.log(multiply(2, "3")); // Output: '63'
```

While this doesn’t throw a `TypeError` directly, it shows how type mismatches can lead to unexpected results. `x` is a number and `y` is a string; JavaScript coerces `y` into a number for the multiplication. If you were performing an operation that strictly requires both arguments to be numbers, you might encounter a `TypeError`.

#### Example 3: Accessing a Property of a Non-Object

```javascript
let number = 123;
console.log(number.length); // TypeError: Cannot read property 'length' of undefined
```

Here, `number` is a number, and numbers do not have a `length` property. Trying to access `.length` on a number results in a `TypeError`.

### ReferenceError

A `ReferenceError` occurs when code references a variable that hasn’t been declared. This typically happens if you try to use a variable before it’s been declared or if there’s a typo in the variable name.

#### Example 1: Using an Undeclared Variable

```javascript
console.log(x); // ReferenceError: x is not defined
```

Here, `x` has not been declared or defined anywhere before this `console.log` call, resulting in a `ReferenceError`.

#### Example 2: Using a Variable Before Declaration (with `let` or `const`)

```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;
```

The `ReferenceError` occurs because `let` and `const` declarations are not hoisted in the same way as `var`. Accessing `a` before it’s initialized results in an error.

#### Example 3: Typo in Variable Name

```javascript
let user = { name: "Alice" };
console.log(user.namee); // ReferenceError: namee is not defined
```

Here, `namee` is a typo. The correct property is `name`, so attempting to access `namee` results in a `ReferenceError` because it doesn’t exist on the `user` object.

### Summary

- **TypeError**: Signals that an operation was performed on a value of the wrong type, e.g., calling a method on `undefined` or performing an operation on an incorrect type.
- **ReferenceError**: Signals that a variable or reference was used before it was declared, e.g., trying to access an undeclared variable or referencing a variable before its initialization.

Understanding these errors can help you debug your code more effectively by identifying the root cause of the issue.

# Q5. this Keyword?

The value of `this` is determined by how a function is called (runtime binding). So, there are two types of binding when it comes to object binding in JS, one is implicit and other is explicit.

### Implicit Binding

Implicit Binding is applied when you invoke a function in an Object using the dot notation. this in such scenarios will point to the object using which the function was invoked. Or simply the object on the left side of the dot.

### Explicit Binding

In Explicit Binding, you can force a function to use a certain object as its this. Explicit Binding can be applied using call(), apply(), and bind().

## Interview Questions on "this"

## Question 1 - Explain ‘this’ keyword?

- In the English language, we use the pronoun ‘this’ to reference something:

- Like suppose we have a bucket of fruits, when we say “this” inside of it so that will mean the bucket itself.

- Fruits are kept in `this` bucket

- Similarly, in the JavaScript language, the ‘this’ keyword is used to reference something — an object!

- It can't be set by assignment during execution, and it may be different each time the function is called.

### Global

So for example if we console.log `this` here, we get the window object.

```
let a = 5

console.log(this.a); //undefined
```

### This inside a function

- Normally it targets the window object.
  In it, `this` points to the owner of the function call, I repeat, THE FUNCTION CALL, and NOT the function itself. The same function can have different owners in different scenarios.

```
function myFunction() {
    console.log(this)
}
myFunction(); // window object
```

- **What about Arrow Functions? **
  It takes it's `this` from the outer “normal” function, this won't make much sense now, since as you can see it’s also pointing to window object.

```
const myFun=()=> {
    console.log(this)
}
myFun(); // window object
```

- So lets see the behaviour of `this` inside of an Object

### Method inside object

```
let user = {
  name: "Piyush",
  age: 24,
    getDetails() {
        console.log(this.name); //Piyush
    }
};
```

### What happens when we have functions inside a nested object key?

```
let user = {
  name: "Piyush",
  age: 24,
    childObj:{
        newName:"Roadside Coder",
        getDetails() {
            console.log(this.newName, "and" ,this.name);
        }
    }
};
```

let us know in the comments what will be the output of `user.childObj.getDetails()`?

### What if the same functions are arrow functions inside the object?

```
let user = {
  name: "Piyush",
  age: 24,
    getDetails: () => {
        console.log(this.name);
    }
};
```

Does `user.getDetails()` give you any output? Well it is empty since it points to window object.

```
let user = {
  name: "Piyush",
  age: 24,
    getDetails() {
        const nestedArrow = () => console.log(this.name); //Piyush
        nestedArrow();
    }
};
```

`user.getDetails()` gives "Piyush" as the output since it points to the parent's context i.e. the user object.

### Class / Constructors

```
class user {
    constructor(n){
        this.name = n
    }
    getName(){
        console.log(this.name);
    }
}

const User = new user("Piyush") // => This will generate a user object from the above class
User.getName();
```

## Question -2 Give the output of the following snippet.

```
const user = {
  firstName: 'Piyush!',
  getName() {
    const firstName = 'Jen!';
    return this.firstName;
  }
};
console.log(user.getName()); // What is logged?
```

`Piyush!` is logged to the console. `user.getName()` is a method invocation, that's why `this` inside the method equals `object`.

There's also a variable declaration `const firstName = 'Jen!'` inside the method. The variable doesn't influence anyhow the value of `this.firstName`.

## Question 3 -What is the result of accessing its `ref`? Why?

```
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?
```

`Answer`: an error.

That’s because rules that set `this` do not look at object definition. Only the moment of call matters.

Here the value of `this` inside `makeUser()` is `undefined`, because it is called as a function, not as a method with “dot” syntax.

The value of `this` is one for the whole function, code blocks and object literals do not affect it.

So `ref: this` actually takes current `this` of the function.

We can rewrite the function and return the same `this` with `undefined` value:

#### Follow up -

```
function makeUser() {
  return {
    name: "Piyush Agarwal",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // Piyush Agarwal
```

You make ref a method and then there will be no error. You will get the output as `Piyush Agarwal`.

## Question 4 -What logs to console the following code snippet?

```
const user = {
  name: "Piyush Agarwal!",
  logMessage() {
    console.log(this.name);
  },
}; // What is logged?
setTimeout(user.logMessage, 1000);


```

After a delay of 1 second, `undefined` is logged to console.

While `setTimeout()` function uses the `object.logMessage` as a callback, still, it invokes `object.logMessage` as a regular function, rather than a method.

And during a regular function invocation _this_ equals the global object which is `window` in the case of the browser environment.

That's why `console.log(this.message)` inside `logMessage` method logs `window.message`, which is `undefined`.

How can you fix this code so that 'Piyush Agarwal!' is logged to console?
Write your solution in a comment below!

### Question 5 -What logs to console of the following code snippet?

```
const user = {
  name: "Piyush",
  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`;
  },
};
console.log(user.greet());
// What is logged?
console.log(user.farewell());
 // What is logged?


```

'Hello, Piyush!' and 'Goodbye, undefined!' are logged to console.

When calling `object.greet()`, inside the method `greet()` `this` value equals `object`because `greet` is a regular function. Thus `object.greet()` returns `'Hello,Piyush!'`.

But `farewell()` is an arrow function, so _[this_ value inside of an arrow function]_always_ equals `this` of the outer scope.

The outer scope of `farewell()` is the global scope, where `this` is the global object. Thus `object.farewell()` actually returns `'Goodbye, ${window.name}!'`, which evaluates to `'Goodbye, undefined!'`.

### Question 6: Create an object `calculator` with three methods:

- `read()` prompts for two values and saves them as object properties with names `a` and `b` respectively.
- `sum()` returns the sum of saved values.
- `mul()` multiplies saved values and returns the result.

#### Example :

```

let calculator = {
  // ... your code ...
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

```

```
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
```

```
var length = 4;
function callback() {
  console.log(this.length);
} // What is logged?
const object = {
  length: 5,
  method(callback) {
    callback();
  },
};
object.method(callback, 1, 2);
```

`4` is logged to console.

`callback()` is called using regular function invocation inside `method()`. Since this value during a regular function invocation equals the global object, `this.length` is evaluated as `window.length` inside `callback()` function.

The first statement `var length = 4`, being in the outermost scope, creates a property `length` on the global object: `window.length` becomes `4`.

Finally, inside the `callback()` function `this.length` evaluates as `window.length` — `4` being logged to console.

## Question 8 -What is the output of the following code snippet?

```
var length = 4;
function callback() {
  console.log(this.length);
} // What is logged?
const object = {
  length: 5,
  method() {
    arguments0;
  },
};
object.method(callback, 1, 2);
```

`3` is logged to console.

`obj.method(callback, 1, 2)` is invoked with 3 arguments: `callback`, `1` and `2`. As result the `arguments` special variable inside `method()` is an array-like object of the following structure:

```
{ 0: callback, 1: 1, 2: 2, length: 3 }
```

Because `arguments[0]()` is a method invocation of `callback` on `arguments` object, `this` inside the `callback` equals `arguments`. As result `this.length` inside `callback()` is same as `arguments.length` — which is `3`.

## Question-9 Write the implementation of this calc()

```
const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total); // What is logged?
```

```
var calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};
```

# Q6. Function Method? why? call, apply, bind? with syntax and example?

- Functions are the building blocks of JavaScript, empowering developers to create reusable and modular code. They play a pivotal role in JavaScript’s versatility, enabling us to define logic, structure data, and execute actions within our programs.
- They are first-class citizens, which means they can be assigned to variables, passed as arguments to other functions, and even returned from functions. Here are some fundamental roles that functions play in JavaScript:

1. `Abstraction`: Functions allow you to abstract complex logic into reusable, named blocks of code, promoting code organization and maintainability.
2. `Modularity`: By encapsulating functionality within functions, you can create modular and easily maintainable codebases. Each function can have a specific purpose and can be tested independently.
3. `Callbacks`: Functions are commonly used as callbacks in asynchronous programming, enabling you to execute code after specific events or operations complete.
4. `Method Definitions`: Functions are often used to define methods within objects, providing behavior and functionality to objects.
5. `Scope and Closures`: Functions introduce scope in JavaScript, allowing you to control variable visibility. They also enable the creation of closures, which can capture and preserve variables’ state.

### Introduction to Call, Apply, and Bind Methods

While functions in JavaScript are powerful on their own, the `call`, `apply`, and `bind` methods further extend their capabilities. These methods are associated with functions and allow you to manipulate how a function is invoked and the context in which it executes.

- `call`: The `call` method invokes a function with a specified `this` value and individual arguments passed as separate arguments. It allows you to borrow functions from one object and invoke them in the context of another.
- `apply`: Similar to `call`, the `apply` method invokes a function with a specified `this` value, but it takes an array or an array-like object as its second argument, allowing you to pass a variable number of arguments to the function.
- `bind`: The `bind` method creates a new function that, when called, has its `this` value set to a specific value and prepends any provided arguments to the original function's arguments list. It is often used to create functions with preset contexts or partially applied arguments.

### The Call Method

The `call` method is used to invoke a function with a specified `this` value and arguments provided individually. It allows you to change the context in which a function runs, effectively borrowing functions from one object and running them in the context of another. The primary purposes of the `call` method are:

1. Setting the `this` Value: You can explicitly set the `this` value for a function, ensuring it operates within the desired context.
2. Passing Arguments: You can pass arguments to the function individually, allowing for flexibility in argument handling.
3. Function Borrowing: `call` enables you to borrow methods or functions from one object and use them in the context of another object.

#### Syntax for Using the Call Method

The syntax for using the `call` method is straightforward:

```

functionName.call(thisArg, arg1, arg2, ...);

```

- `functionName`: The function you want to call.
- `thisArg`: The value to be used as `this` when the function is executed.
- `arg1, arg2, ...`: Individual arguments to be passed to the function.

### Examples Demonstrating How to Use Call to Invoke Functions

```
function greet() {
console.log(`Hello, ${this.name}!`);
}
const person = {name: 'Alice'};
greet.call(person); // Output: Hello, Alice!

```

### Borrowing Functions

- You can also use `call` to borrow functions from one object and use them in the context of another. In this example, we borrow the `sayHello` method from `person1` and use it with `person2`:

```
const person1 = {
name: "Bob",
sayHello: function () {
console.log(`Hello, ${this.name}!`);
},
};

const person2 = {
name: "Charlie",
};
person1.sayHello(person2); // Output: Hello, Charlie!
```

### Passing Arguments

- The `call` method allows you to pass arguments individually. Here, we define a function `sum` that calculates the sum of two numbers:

```
function sum(a, b) {
console.log(`Sum: ${a + b}`);
}

sum.call(null, 5, 7); // Output: Sum: 12
```

- In this example, `null` is used as the `this` value since we don't require a specific context for the `sum` function.

- The `call` method's ability to dynamically set the `this` value and pass arguments makes it a versatile tool in JavaScript development. Whether you're dealing with method borrowing, context manipulation, or dynamic argument handling, `call` provides a clear and concise way to achieve your goals.

### The Apply Method

The `apply` method is used to invoke a function with a specified `this` value and arguments provided as an array or an array-like object. It serves a similar purpose to `call`, but its ability to accept an array of arguments offers added flexibility.

The primary purposes of the `apply` method are:

1. Setting the `this` Value: You can explicitly set the `this` value for a function, just like with `call`.
2. Passing Arguments as an Array: `apply` allows you to pass a variable number of arguments to a function in the form of an array.
3. Function Borrowing with Variable Arguments: It enables you to borrow functions with variable-length argument lists from one object and use them in the context of another.

#### Syntax for Using the Apply Method

```
functionName.apply(thisArg, [arg1, arg2, ...]);
```

- `functionName`: The function you want to call.
- `thisArg`: The value to be used as this when the function is executed.
- `[arg1, arg2, ...]`: An array or an array-like object containing the arguments to be passed to the function.

### Examples Illustrating How to Use Apply with Functions and Arrays

- You can use `apply` to set the `this` value for a function, just like with `call`. In this example, we set the `this` value for the `greet` function:

```
function greet() {
console.log(`Heloo, ${this.name}!`);
}
const person = { name: "David" };
greet.apply(person); // Output: Hello, David
```

### Borrowing Functions with Variable Arguments

`apply` is particularly useful when dealing with functions that accept a variable number of arguments. Here, we create a function `calculate` that accepts a callback function and an array of arguments:

```
function calculate(callback, args) {
return callback.apply(null, args);
}

function sum(a, b) {
return a + b;
}

const arguments = [5, 7];
const result = calculate(sum, arguments);

console.log(`Result: ${result}`); // Output: Result: 12
```

- In this example, the `calculate` function uses `apply` to pass the elements of the `arguments` array as individual arguments to the `sum` function.

### Applying Functions to Arrays

The `apply` method can also be useful when working with arrays. Here, we use `apply` to find the maximum value in an array of numbers:

```

const numbers = [4, 9, 2, 8, 5];
const max = Math.max.apply(null, numbers);
console.log(`Maximum: ${max}`); // Output: Maximum: 9

```

- In this case, `apply` allows us to apply the `Math.max` function to the `numbers` array, finding the maximum value without manually spreading the array elements as arguments.
- The `apply` method's ability to pass an array of arguments makes it a versatile tool for dealing with functions that accept variable arguments or for applying functions to arrays and array-like objects.

### The Bind Method

The `bind` method is used to create a new function with a specified `this` value and optional preset arguments. This new function, often referred to as a "bound function," retains the same code body as the original function but operates with the predefined context and arguments.

The primary purposes of the bind method are:

1. `Preserving Context`: It allows you to ensure that a function always executes in a specific context, regardless of how it’s called.
2. `Partial Function Application`: `bind` enables you to create new functions by pre-filling some of the function's arguments. This is particularly useful when you need to reuse a function with certain arguments fixed.

#### Syntax for Using the Bind Method

```
const newFunction = functionName.bind(thisArg, arg1, arg2, ...);
```

- `functionName`: The function you want to bind.
- `thisArg`: The value to be used as `this` when the new function is executed.
- `arg1, arg2, ...`: Optional arguments to be preset for the new function.

#### Examples Showing How to Create New Functions Using Bind

In this example, we create a bound function `printMessage` that always runs in the context of the `person` object, ensuring that `this` refers to `person`:

```
const person = {name: 'Alice'};

function greet() {
console.log(`Hello, ${this.name}!`);
}
const printMessage = greet.bind(person);
printMessage(); // Output: Hello, Alice!
```

The `bind` method allows us to "fix" the context of the `greet` function to `person`, making it context-independent.

#### Partial Function Application

`bind` is also valuable for creating new functions with preset arguments. In this example, we create a `multiplyBy` function that multiplies numbers by a preset factor:

```
function multiply(factor, number) {
  return factor * number;
}
const double = multiply.bind(null, 2);
console.log(double(5)); // Output: 10
console.log(double(8)); // Output: 16
```

In this case, we’ve created a new function, `double`, by binding `multiply` with a `factor` argument preset to `2`. This results in a reusable function that effectively doubles any number passed to it.

#### Creating Event Handlers

`bind` is often used in event handling to ensure that event handlers have the correct context when executed. In this example, we create an event handler that logs a message with the clicked element's `id`:

```
const button = document.getElementById('myButton');
function logId() {
console.log(`Clicked element ID: ${this.id}`);
}
button.addEventListener('click', logIn.bind(button));
```

Here, we bind the `logId` function to the `button` element, ensuring that `this` refers to the button element when the event handler is executed.

The `bind` method's ability to create new functions with predefined contexts and arguments enhances code reusability and context control. Whether you need to fix context issues or create specialized functions, `bind` empowers you to tailor your functions to specific use cases.

### Key Differences between Call, Apply, and Bind

#### 1. Invocation and Immediate Execution:

- `call`: The `call` method immediately invokes the function with the specified `this` value and individual arguments.
- `apply`: Like `call`, the `apply` method immediately invokes the function but accepts arguments as an array or array-like object.
- `bind`: The `bind` method doesn't immediately invoke the function. Instead, it creates a new function with the specified `this` value and, optionally, preset arguments. The new function must be called separately.

#### 2. Argument Handling:

- `call`: Accepts arguments individually as a comma-separated list.
- `apply`: Accepts arguments as an array or array-like object.
- `bind`: Can preset arguments when creating the new function, but additional arguments can be passed when the new function is invoked.

#### 3. Immediate vs. Deferred Execution:

- `call` and `apply` execute the function immediately upon invocation.
- `bind` returns a new function that can be invoked at a later time. It defers execution until the new function is called.

### When to Choose One Method over the Others

The choice between `call`, `apply`, and `bind` depends on the specific requirements of your code:
`call`:

- Use `call` when you want to invoke a function immediately with a specific `this` value and individual arguments.
- Suitable for scenarios where you need to borrow a method from one object and execute it in the context of another.
- Helpful for functions with a fixed number of arguments.
  `apply`:

* Choose `apply` when you need to invoke a function immediately but want to pass a variable number of arguments in the form of an array.
* Useful when working with functions that accept variable-length argument lists.
* Especially handy when dealing with arrays or array-like objects.
  `bind`:
* Opt for `bind` when you want to create a new function with a preset `this` value and, optionally, preset arguments.
* Ideal for preserving context, ensuring that a function always runs in a specific context, regardless of how it’s called.
* Useful for partial function application, where you create specialized functions by fixing some arguments.
  By understanding the differences and nuances of `call`, `apply`, and `bind`, you can leverage these methods effectively to enhance your JavaScript code's flexibility and control.

### Function Context and `this` Keyword

In JavaScript, the `this` keyword refers to the current execution context, often associated with the object that called the function. The behavior of this can be complex and context-dependent. `call`, `apply`, and `bind` provide control over this context:

1. `call`: When you use `call`, you explicitly set the `this` value for the invoked function. It allows you to immediately change the function's context to the specified object.
2. `apply`: Similar to `call`, `apply` sets the `this` value but accepts an array or array-like object as arguments. This allows you to pass a variable number of arguments while changing the context.
3. `bind`: `bind` creates a new function with a fixed `this` value. It doesn't immediately invoke the function; instead, it prepares the function to run in the specified context when called later.

### Illustrative Examples of Changing the Context of a Function

In this example, we have two objects, `person1` and `person2`, each with a `name` property. We define a `greet` function and use `call` to change its context to `person2`:

```
const person1 = {name: 'Alice'};
const person2 = {name: 'Bob'};
function greet() {
console.log(`Hello, ${this.name}`);
}
greet.call(person1); // Output: Hello, Alice!
greet.call(person2); // Output: Hello, Bob!
```

Using `call`, we can greet both `person1` and `person2` with the same `greet` function while changing the context.

#### Changing Context with Bind

In this example, we create a bound function `logName` that always logs the `name` property of the `person` object:

```
const person = {name: 'Charlie'};
function logName() {
console.log(`My name is ${this.name}.`);
}
const logPersonName = logName.bind(person);
logPersonName(); // Output: My name is Charlie.
```

With `bind`, we ensure that `logName` maintains its context tied to the `person` object, even when called separately.

Using Apply with a Different Context

Here, we create a function `introduce` that takes an array of names and logs them in the context of the `speaker` object using `apply`:

```
const speaker = {name: 'David'};
function introduce(names) {
console.log(`I am ${this.name}. Let me introduce you to ${names.join(', ')}.`);
}
const friends = ['Emily', 'Fiona', 'George'];
introduce.apply(speaker, [friends]);

// Output: I am David. Let me introduce you to Emily, Fiona, George.
```

`apply` allows us to pass an array of names and change the context of `introduce` to the `speaker` object.

# Q7. Explain Array Method? Slice vs splice? filter vs find? map vs find vs reducer? return type of array.push() and array.unshift()?

## Array Methods

Array methods are functions that operate on arrays, performing various operations such as manipulating elements, searching, and transforming data. Here, we'll explore some essential array methods, their differences, and return types.

### Slice vs Splice

`Slice()`: Returns a shallow copy of a portion of an array into a new array object.

#### Syntax

```
arr.slice(start, end)
```

#### Example

```
const arr = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(1, 3);
console.log(slicedArr); // Output: [2, 3]
```

`Splice()`: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

#### Syntax

```
arr.splice(start, deleteCount, item1, item2, ...)
```

#### Example

```
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, "new");
console.log(arr); // Output: [1, 'new', 4, 5]
```

### Filter vs Find

`Filter()`: Creates a new array with all elements that pass the test implemented by the provided function.

#### Syntax

```
arr.filter(callback(element, index, array))
```

#### Example

```
const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.filter((num) => num > 3);
console.log(filteredArr); // Output: [4, 5]
```

`Find()`: Returns the first element in the array that satisfies the provided testing function.

#### Syntax

```
arr.find(callback(element, index, array))
```

#### Example

```
const arr = [1, 2, 3, 4, 5];
const foundElement = arr.find(num => num > 3);
console.log(foundElement); // Output: 4
```

### Map vs Find vs Reduce

`Map()`: Creates a new array populated with the results of calling a provided function on every element in the calling array.

#### Syntax

```
arr.map(callback(element, index, array))
```

#### Example

```
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map((num) => num * 2);
console.log(mappedArr); // Output: [2, 4, 6, 8, 10]
```

`Find()`: Returns the first element in the array that satisfies the provided testing function. (Same as above)
`Reduce()`: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

#### Syntax

```
arr.reduce(callback(accumulator, currentValue, index, array), initialValue)
```

#### Example

```
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 15
```

### Return Type of Array.push() and Array.unshift()

`push()`: Adds one or more elements to the end of an array and returns the new length of the array.

#### Syntax

```
arr.push(element1, element2, ...)
```

#### Example

```
const arr = [1, 2, 3];
const newLength = arr.push(4, 5);
console.log(newLength); // Output: 5 console.log(arr); // Output: [1, 2, 3, 4, 5]
```

`unshift()`: Adds one or more elements to the beginning of an array and returns the new length of the array.

#### Syntax

```
arr.unshift(element1, element2, ...)
```

#### Example

```
const arr = [1, 2, 3];
const newLength = arr.unshift(4, 5);
console.log(newLength); // Output: 5
console.log(arr); // Output: [4, 5, 1, 2, 3]
```

- `slice()` returns a new array, while `splice()` modifies the original array.
- `filter()` returns a new array, while `find()` returns a single element.
- `map()` returns a new array, while `reduce()` returns a single value.
- `push()` and `unshift()` return the new length of the array.

# 8. All Array Method?

### 1. `push(...items)`

- Adds one or more elements to the end of an array and returns the new length of the array.
- Example: `arr.push(4, 5); // Adds 4 and 5 to the end of arr`

```
let arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // Output: [1, 2, 3, 4, 5]
```

### 2. `pop()`

- Removes the last element from an array and returns that element. This method changes the length of the array.
- Example: `arr.pop(); // Removes the last element from arr`

```
let arr = [1, 2, 3, 4];
let lastElement = arr.pop();
console.log(lastElement); // Output: 4
console.log(arr); // Output: [1, 2, 3]
```

### 3. `shift()`

- Removes the first element from an array and returns that element. This method changes the length of the array.
- Example: `arr.shift(); // Removes the first element from arr`

```
let arr = [1, 2, 3, 4];
let firstElement = arr.shift();
console.log(firstElement); // Output: 1
console.log(arr); // Output: [2, 3, 4]
```

### 4. `unshift(...items)`

- Adds one or more elements to the beginning of an array and returns the new length of the array.
- Example: `arr.unshift(1, 2); // Adds 1 and 2 to the beginning of arr`

```
let arr = [2, 3, 4];
arr.unshift(0, 1);
console.log(arr); // Output: [0, 1, 2, 3, 4]
```

### 5. `concat(...arrays)`

- Merges two or more arrays into a new array without changing the existing arrays.
- Example: `let newArr = arr1.concat(arr2); // Merges arr1 and arr2 into newArr`

```
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);
console.log(newArr); // Output: [1, 2, 3, 4]
```

### 6. `slice(start, end)`

- Returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included). The original array is not modified.
- Example: `arr.slice(1, 3); // Creates a new array with elements from index 1 to 2 of arr`

```
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 4);
console.log(slicedArr); // Output: [2, 3, 4]
```

### 7. `splice(start, deleteCount, ...items)`

- Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. `start` is the index to start changes, `deleteCount` is the number of elements to remove, and `items` are elements to add.
- Example: `arr.splice(2, 1, 'a', 'b'); // Removes 1 element at index 2 and adds 'a' and 'b'`

```
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 'a', 'b');
console.log(arr); // Output: [1, 2, 'a', 'b', 5]
```

### 8. `join(separator)`

- Joins all elements of an array into a string, separated by the specified separator (default is a comma).
- Example: `arr.join('-'); // Joins elements of arr with '-' as separator`

```
let arr = ['Hello', 'world'];
let str = arr.join(' ');
console.log(str); // Output: "Hello world"
```

### 9. `reverse()`

- Reverses the elements of an array in place (the first element becomes the last, and so on).
- Example: `arr.reverse(); // Reverses the order of elements in arr`

```
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // Output: [3, 2, 1]
```

10. `sort(compareFunction)`

    - Sorts the elements of an array in place and returns the array. By default, elements are sorted as strings. The `compareFunction` can be used to sort numbers or strings in a specific order.
    - Example (ascending): `arr.sort((a, b) => a - b); // Sorts numbers in ascending order`
    - Example (descending): `arr.sort((a, b) => b - a); // Sorts numbers in descending order`
    - Example (strings): `arr.sort(); // Sorts strings alphabetically`

- Ascending (numbers):

```
let arr = [5, 3, 8, 1];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [1, 3, 5, 8]
```

11. **`map(callback)`**

    - Creates a new array with the results of calling a provided function on every element in the calling array.
    - Example: `arr.map(x => x * 2); // Creates a new array with each element doubled`

12. **`filter(callback)`**

    - Creates a new array with all elements that pass the test implemented by the provided function.
    - Example: `arr.filter(x => x > 10); // Creates a new array with elements greater than 10`

13. **`find(callback)`**

    - Returns the first element in the array that satisfies the provided testing function. Otherwise, returns `undefined`.
    - Example: `arr.find(x => x > 10); // Finds the first element greater than 10`

14. **`indexOf(searchElement, fromIndex)`**

    - Returns the first index at which a given element can be found in the array, or -1 if it is not present. `fromIndex` is the position to start the search.
    - Example: `arr.indexOf(5); // Returns the index of the first occurrence of 5`

15. **`lastIndexOf(searchElement, fromIndex)`**

    - Returns the last index at which a given element can be found in the array, or -1 if it is not present. `fromIndex` is the position to start the search backwards.
    - Example: `arr.lastIndexOf(5); // Returns the index of the last occurrence of 5`

16. **`reduce(callback, initialValue)`**

    - Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. `initialValue` is optional and specifies the initial value of the accumulator.
    - Example: `arr.reduce((acc, curr) => acc + curr, 0); // Sums all elements in the array`

17. **`includes(searchElement, fromIndex)`**

    - Determines whether an array contains a certain element, returning `true` or `false` as appropriate. `fromIndex` is the position to start the search.
    - Example: `arr.includes(5); // Returns true if 5 is in the array`

18. **`forEach(callback)`**

    - Executes a provided function once for each array element.
    - Example: `arr.forEach(x => console.log(x)); // Logs each element in the array`

19. **`from(arrayLike, mapFunction, thisArg)`**

    - Creates a new, shallow-copied `Array` instance from an array-like or iterable object. `mapFunction` can be used to transform elements, and `thisArg` is the value to use as `this` when executing `mapFunction`.
    - Example: `Array.from('hello'); // Creates an array ['h', 'e', 'l', 'l', 'o']`

20. **`flat(depth)`**

    - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    - Example: `arr.flat(1); // Flattens the array one level deep`

21. **`toString()`**

    - Returns a string representing the elements of the array. The elements are separated by commas.
    - Example: `arr.toString(); // Converts the array to a string`

22. **`delete`**

    - Note: `delete` is not a method of arrays but a JavaScript operator that removes an element from an array (leaves a `hole`).
    - Example: `delete arr[2]; // Deletes the element at index 2 but leaves a hole in the array`

23. **`copyWithin(target, start, end)`**

    - Shallow copies part of an array to another location in the same array without modifying its length.
    - Example: `arr.copyWithin(0, 3, 5); // Copies elements from index 3 to 4 to the beginning of the array`

24. **`toSplice()`**
    - Note: There is no standard `toSplice` method for arrays. It might be a typo or confusion with `splice()`.

Each of these methods provides different functionality for manipulating and querying arrays, making JavaScript arrays powerful and flexible.

# 8. Selector in javascript? difference between getElementById and querySelector? difference between getElementByClassName and getElementByTagName and querySelectorAll?

Selectors are methods used to access and manipulate DOM (Document Object Model) elements.

### 1. `getElementById`

- **Usage**: `document.getElementById('id')`
- **Returns**: A single element (the first element with the specified ID) or `null` if no element with that ID exists.
- **Performance**: Fast, as IDs are unique within a document.
- **Example**:
  ```html
  <div id="myDiv">Hello World</div>
  <script>
    const element = document.getElementById("myDiv");
    console.log(element.textContent); // "Hello World"
  </script>
  ```

### 2. `querySelector`

- **Usage**: `document.querySelector('selector')`
- **Returns**: The first element that matches the specified CSS selector or `null` if no matching element is found.
- **Flexibility**: Can use any valid CSS selector (ID, class, tag, attribute selectors, etc.).
- **Example**:
  ```html
  <div class="myClass">Hello</div>
  <script>
    const element = document.querySelector(".myClass");
    console.log(element.textContent); // "Hello"
  </script>
  ```

### **Differences between `getElementById` and `querySelector`**

- **Return Type**: `getElementById` returns a single element or `null`, while `querySelector` also returns a single element or `null`, but allows for more complex selectors.
- **Performance**: `getElementById` is faster because it specifically looks for an ID. `querySelector` is more versatile but can be slightly slower due to the complexity of CSS selectors.

---

### 3. `getElementsByClassName`

- **Usage**: `document.getElementsByClassName('className')`
- **Returns**: A live HTMLCollection of all elements with the specified class name. If no elements match, it returns an empty collection.
- **Live Collection**: The collection updates automatically when the document changes.
- **Example**:
  ```html
  <div class="myClass">One</div>
  <div class="myClass">Two</div>
  <script>
    const elements = document.getElementsByClassName("myClass");
    console.log(elements.length); // 2
  </script>
  ```

### 4. `getElementsByTagName`

- **Usage**: `document.getElementsByTagName('tagName')`
- **Returns**: A live HTMLCollection of all elements with the specified tag name.
- **Live Collection**: Like `getElementsByClassName`, this collection updates automatically.
- **Example**:
  ```html
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <script>
    const elements = document.getElementsByTagName("p");
    console.log(elements.length); // 2
  </script>
  ```

### 5. `querySelectorAll`

- **Usage**: `document.querySelectorAll('selector')`
- **Returns**: A static NodeList of all elements that match the specified CSS selector. If no elements match, it returns an empty NodeList.
- **Static Collection**: The collection does not update automatically when the document changes.
- **Example**:
  ```html
  <div class="myClass">One</div>
  <div class="myClass">Two</div>
  <script>
    const elements = document.querySelectorAll(".myClass");
    console.log(elements.length); // 2
  </script>
  ```

### **Differences between `getElementsByClassName`, `getElementsByTagName`, and `querySelectorAll`**

- **Return Type**:
  - `getElementsByClassName` and `getElementsByTagName` return live HTMLCollections.
  - `querySelectorAll` returns a static NodeList.
- **Selector Flexibility**:

  - `getElementsByClassName` and `getElementsByTagName` can only search by class name or tag name, respectively.
  - `querySelectorAll` can use any valid CSS selector, allowing for more complex queries (like `div.myClass`, `p:nth-child(2)`, etc.).

- **Performance**:
  - `getElementsByClassName` and `getElementsByTagName` can be faster in some cases because they are optimized for those specific searches, but `querySelectorAll` is more powerful for complex selectors.

### Summary Table

| Method                   | Returns                  | Live Collection | Selector Flexibility |
| ------------------------ | ------------------------ | --------------- | -------------------- |
| `getElementById`         | Single element or `null` | No              | ID only              |
| `querySelector`          | Single element or `null` | No              | Any CSS selector     |
| `getElementsByClassName` | Live HTMLCollection      | Yes             | Class name only      |
| `getElementsByTagName`   | Live HTMLCollection      | Yes             | Tag name only        |
| `querySelectorAll`       | Static NodeList          | No              | Any CSS selector     |

In JavaScript, when you work with the DOM, you'll often encounter two types of collections: **HTMLCollection** and **NodeList**. Both of these are collections of DOM nodes, but they have some differences in how they behave and how you interact with them. Let's explore these collections in detail.

### HTMLCollection

**Definition**: An `HTMLCollection` is a collection of HTML elements. It is typically returned by methods like `getElementsByClassName`, `getElementsByTagName`, and `children`.

#### Characteristics:

- **Live Collection**: `HTMLCollection` is live, meaning it automatically updates when the DOM changes. If elements are added or removed from the document, the `HTMLCollection` will reflect those changes.
- **Indexed**: Elements can be accessed by their index (like an array), or by their `id` or `name` attributes.
- **Array-like**: Although it looks like an array, it is not a true array. It lacks methods like `forEach`, `map`, and others available on actual arrays.

#### Example of Using HTMLCollection:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTMLCollection Example</title>
  </head>
  <body>
    <div class="example">Item 1</div>
    <div class="example">Item 2</div>
    <div class="example">Item 3</div>
    <script>
      const elements = document.getElementsByClassName("example");

      console.log(elements.length); // Output: 3

      // Accessing elements using their index
      for (let i = 0; i < elements.length; i++) {
        console.log(elements[i].textContent);
      }

      // Adding a new element (to show live update)
      const newDiv = document.createElement("div");
      newDiv.className = "example";
      newDiv.textContent = "Item 4";
      document.body.appendChild(newDiv);

      console.log(elements.length); // Output: 4 (live update)
    </script>
  </body>
</html>
```

### NodeList

**Definition**: A `NodeList` is a collection of nodes that can include elements, text nodes, comments, etc. It is returned by methods like `querySelectorAll`, `childNodes`, and `getElementsByName`.

#### Characteristics:

- **Static or Live**: `NodeList` can be either live or static, depending on how it was created. For example, `childNodes` returns a live `NodeList`, while `querySelectorAll` returns a static `NodeList`.
- **Array-like**: Like `HTMLCollection`, a `NodeList` is also array-like but is not a true array. However, static `NodeList` can use `forEach`.
- **Can Include Non-Element Nodes**: A `NodeList` may contain any type of node (including text nodes and comments), while an `HTMLCollection` contains only element nodes.

#### Example of Using NodeList:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NodeList Example</title>
  </head>
  <body>
    <div class="example">Item A</div>
    <div class="example">Item B</div>
    <div class="example">Item C</div>
    <script>
      const elements = document.querySelectorAll(".example");

      console.log(elements.length); // Output: 3

      // Using forEach to iterate through NodeList
      elements.forEach((element) => {
        console.log(element.textContent);
      });

      // Adding a new element (NodeList remains static)
      const newDiv = document.createElement("div");
      newDiv.className = "example";
      newDiv.textContent = "Item D";
      document.body.appendChild(newDiv);

      console.log(elements.length); // Output: 3 (no live update)
    </script>
  </body>
</html>
```

### Key Differences Between HTMLCollection and NodeList

| Feature                | HTMLCollection                                               | NodeList                         |
| ---------------------- | ------------------------------------------------------------ | -------------------------------- |
| **Return Methods**     | `getElementsByClassName`, `getElementsByTagName`, `children` | `querySelectorAll`, `childNodes` |
| **Type of Nodes**      | Only element nodes                                           | Can include all node types       |
| **Live or Static**     | Always live                                                  | Can be live or static            |
| **Array Methods**      | Lacks methods like `forEach`                                 | Static NodeList has `forEach`    |
| **Accessing Elements** | Access via index or `item()` method                          | Access via index                 |

### Conclusion

When working with the DOM, choosing between `HTMLCollection` and `NodeList` depends on your specific needs. If you need a live collection of elements, use `HTMLCollection`. If you want a static collection or need to select with CSS selectors, use `NodeList`. Understanding these differences helps you manipulate the DOM more effectively.

# 9. difference between innerHTML VS innerText vs textContent?

In JavaScript, `innerHTML`, `innerText`, and `textContent` are properties used to access or modify the content of DOM elements. Each of these properties serves a different purpose, and understanding their differences is crucial for effectively manipulating the DOM. Here's a detailed comparison:

### 1. `innerHTML`

- **Definition**: `innerHTML` gets or sets the HTML markup contained within an element. It allows you to read or modify the HTML structure inside an element.
- **Usage**: Can be used to insert or retrieve HTML tags, elements, and their attributes.
- **Example**:

  ```html
  <div id="myDiv">Hello <strong>World</strong></div>
  <script>
    const div = document.getElementById("myDiv");
    console.log(div.innerHTML); // Output: "Hello <strong>World</strong>"

    // Modify the inner HTML
    div.innerHTML = "New <em>Content</em>";
  </script>
  ```

- **Considerations**:
  - Using `innerHTML` can expose your application to XSS (Cross-Site Scripting) vulnerabilities if you are inserting user-generated content without sanitization.
  - It can cause reflow and repaint in the browser, as it parses the HTML string and updates the DOM.

### 2. `innerText`

- **Definition**: `innerText` gets or sets the text content of an element, including formatting. It retrieves the visible text, ignoring any HTML tags, and takes into account CSS styles that affect visibility (like `display: none`).
- **Usage**: Useful when you want to work with the text that is actually rendered on the page.
- **Example**:

  ```html
  <div id="myDiv">Hello <strong>World</strong></div>
  <script>
    const div = document.getElementById("myDiv");
    console.log(div.innerText); // Output: "Hello World"

    // Modify the inner text
    div.innerText = "New Content";
  </script>
  ```

- **Considerations**:
  - `innerText` is not the same as `textContent` because it respects styles that may hide text.
  - When you set `innerText`, it will replace the entire text content of the element, including any child elements.

### 3. `textContent`

- **Definition**: `textContent` gets or sets the text content of an element, but unlike `innerText`, it retrieves all text, including that in hidden elements. It does not parse HTML and treats the text as plain text.
- **Usage**: Best used when you need to get or set all the text inside an element, regardless of its formatting or visibility.
- **Example**:

  ```html
  <div id="myDiv">Hello <strong>World</strong></div>
  <script>
    const div = document.getElementById("myDiv");
    console.log(div.textContent); // Output: "Hello World"

    // Modify the text content
    div.textContent = "New Content";
  </script>
  ```

- **Considerations**:
  - `textContent` is generally faster than `innerHTML` because it does not parse HTML and simply retrieves or sets plain text.
  - When you set `textContent`, any existing child elements are removed and replaced with the new text.

### Summary of Differences

| Feature          | `innerHTML`                       | `innerText`                                      | `textContent`                         |
| ---------------- | --------------------------------- | ------------------------------------------------ | ------------------------------------- |
| **Type**         | HTML markup (can contain tags)    | Visible text (ignores HTML tags)                 | Plain text (ignores formatting)       |
| **Retrieval**    | Retrieves HTML, including tags    | Retrieves text as it appears on the page         | Retrieves all text (including hidden) |
| **Modification** | Can insert HTML content           | Replaces text (affects formatting)               | Replaces text (removes child nodes)   |
| **Performance**  | Slower due to HTML parsing        | Slower than `textContent` (style considerations) | Faster due to no parsing              |
| **XSS Risk**     | Higher risk if user input is used | Lower risk                                       | Lower risk                            |

### Conclusion

- Use **`innerHTML`** when you need to work with HTML content, but be cautious of XSS risks.
- Use **`innerText`** when you want to work with text as it is rendered in the browser, taking styles into account.
- Use **`textContent`** when you need to retrieve or set all the text within an element without any HTML formatting and with better performance.

# 10. DOM? BOM? Window?

The terms **DOM**, **BOM**, and **Window** refer to different aspects of web APIs that allow you to interact with web pages and the browser environment. Here’s a breakdown of each term and their differences:

### 1. DOM (Document Object Model)

- **Definition**: The **DOM** is a programming interface for web documents. It represents the structure of a document (such as HTML or XML) as a tree of objects, allowing developers to access and manipulate elements and their content.
- **Structure**: In the DOM, every element, attribute, and piece of text is represented as a node in a tree structure. The document itself is the root node.
- **Interactivity**: The DOM allows JavaScript to change the document structure, style, and content dynamically in response to user interactions or other events.
- **Example**:
  ```html
  <div id="myDiv">Hello, <span>World!</span></div>
  <script>
    const myDiv = document.getElementById("myDiv");
    console.log(myDiv.textContent); // Output: "Hello, World!"
    myDiv.style.color = "blue"; // Change text color to blue
  </script>
  ```

### 2. BOM (Browser Object Model)

- **Definition**: The **BOM** is a set of objects that allow JavaScript to interact with the browser itself. It provides methods to manipulate the browser window and handle tasks such as controlling the browser’s navigation, managing cookies, and handling browser events.
- **Components**: Common components of the BOM include:
  - **`window`**: Represents the browser window and is the global context for JavaScript execution.
  - **`navigator`**: Contains information about the browser (e.g., browser name, version).
  - **`location`**: Provides information about the current URL and allows redirection.
  - **`history`**: Provides access to the browser session history.
- **Example**:

  ```javascript
  // Redirect to a new URL
  window.location.href = "https://www.example.com";

  // Get the browser's user agent
  console.log(navigator.userAgent); // Output: User agent string
  ```

### 3. Window

- **Definition**: The **Window** object is a part of both the DOM and BOM. It represents the current browser window or tab and serves as the global context for JavaScript code. When you open a web page, the browser creates a `window` object that contains all the other objects, including the DOM and BOM objects.
- **Global Object**: In the global scope, `window` acts as the global object, meaning that any global variables and functions are properties of the `window` object.
- **Properties and Methods**: The `window` object has many properties and methods for interacting with the browser, including:
  - **`window.alert()`**: Displays an alert dialog box.
  - **`window.setTimeout()`**: Executes a function after a specified delay.
  - **`window.innerWidth`**: Gets the width of the viewport.
- **Example**:

  ```javascript
  // Display an alert
  window.alert("Welcome to my website!");

  // Access the viewport dimensions
  console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
  ```

### Key Differences

| Feature               | DOM                                     | BOM                                          | Window                                        |
| --------------------- | --------------------------------------- | -------------------------------------------- | --------------------------------------------- |
| **Definition**        | Represents the document structure       | Represents the browser environment           | Represents the browser window/tab             |
| **Focus**             | Content and structure of the document   | Browser-related functions and properties     | Global context for JavaScript execution       |
| **Components**        | Elements, attributes, and text nodes    | `window`, `navigator`, `location`, `history` | Main object containing all other objects      |
| **Manipulation**      | Change HTML, CSS, and content           | Control browser behavior and navigation      | Access global variables and functions         |
| **Example Use Cases** | Modify elements, create event listeners | Change URL, manage history, access cookies   | Display alerts, get dimensions, manage timers |

### Conclusion

- The **DOM** is focused on the structure and content of web documents, enabling you to manipulate HTML and XML.
- The **BOM** provides access to browser-related functionalities that extend beyond the document itself.
- The **Window** object is the global context in which JavaScript operates, combining aspects of both the DOM and BOM. Understanding these concepts helps in effectively working with web pages and enhancing user interactions.

# Topic

# 1. Events

Events are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken (that is, some code running) when the event occurs. Events are fired inside the browser window, and tend to be attached to a specific item that resides in it. This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur.

For example:

- The user selects, clicks, or hovers the cursor over a certain element.
- The user chooses a key on the keyboard.
- The user resizes or closes the browser window.
- A web page finishes loading.
- A form is submitted.
- A video is played, paused, or ends.
- An error occurs.

### An example: handling a click event

In the following example, we have a single `<button>` in the page:

```
<button>Change color</button>
```

```
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```

# 2. Type of events declaration and difference between them

In JavaScript, events are actions or occurrences that happen in the system you’re programming, and handling these events properly is crucial for creating interactive web applications. There are different ways to declare and handle events in JavaScript. Here’s a breakdown of the main types and their differences:

### 1. **Inline Event Handlers**

These are event handlers defined directly within the HTML elements using attributes.

```html
<button onclick="alert('Button clicked!')">Click me</button>
```

**Pros:**

- Simple and straightforward for small scripts.
- No need to use JavaScript code externally.

**Cons:**

- Not ideal for complex logic or when the same event handler is needed across multiple elements.
- Mixing HTML with JavaScript can make the code harder to maintain.

### 2. **DOM Level 0 Event Handlers**

These are handlers assigned directly to the element properties in JavaScript.

```html
<button id="myButton">Click me</button>

<script>
  document.getElementById("myButton").onclick = function () {
    alert("Button clicked!");
  };
</script>
```

**Pros:**

- Keeps JavaScript code separate from HTML.
- Easier to manage and update JavaScript logic.

**Cons:**

- Overwrites any previously assigned event handler for the same event type.

### 3. **DOM Level 2 Event Listeners**

These are handlers registered using the `addEventListener` method, introduced in DOM Level 2. This method allows for multiple handlers to be attached to a single event.

```html
<button id="myButton">Click me</button>

<script>
  document.getElementById("myButton").addEventListener("click", function () {
    alert("Button clicked!");
  });
</script>
```

**Pros:**

- Multiple event listeners can be attached to the same event on the same element.
- Provides more control over event propagation and handling.
- Better separation of concerns, as event handling code is kept out of HTML.

**Cons:**

- Slightly more verbose than inline or DOM Level 0 methods.

### 4. **Event Delegation**

Event delegation involves setting up an event listener on a parent element rather than individual child elements. This is useful for handling events on dynamically created elements.

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<script>
  document.getElementById("myList").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      alert("List item clicked: " + event.target.textContent);
    }
  });
</script>
```

**Pros:**

- Efficiently handles events for many elements with a single listener.
- Useful for dynamically added elements.

**Cons:**

- Requires careful management of event propagation and target checking.

### Summary of Differences:

- **Inline Event Handlers:** Embedded in HTML, quick to implement but less maintainable.
- **DOM Level 0 Event Handlers:** Set directly on elements via properties, less flexible due to overwriting issues.
- **DOM Level 2 Event Listeners:** Use `addEventListener` for flexible and maintainable event handling with multiple handlers.
- **Event Delegation:** Handles events at a higher level (on parent elements), useful for dynamic content and improving performance.

Using the `addEventListener` method is generally recommended for modern JavaScript applications due to its flexibility and adherence to best practices.

# 3. Bubbling

Event bubbling is a key concept in JavaScript event handling. It describes the process by which an event propagates from a child element up through its ancestor elements in the DOM hierarchy. Understanding event bubbling helps in effectively managing events, particularly when dealing with nested elements.

### How Event Bubbling Works

When an event is triggered on an element, it first triggers the event handler on that element itself. Then, the event bubbles up to its parent element, and so on, until it reaches the root of the document.

For example, consider the following HTML structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event Bubbling Example</title>
  </head>
  <body>
    <div id="parent">
      <button id="child">Click me!</button>
    </div>

    <script>
      document.getElementById("parent").addEventListener("click", function () {
        alert("Parent clicked!");
      });

      document.getElementById("child").addEventListener("click", function () {
        alert("Child clicked!");
      });
    </script>
  </body>
</html>
```

Here’s what happens when you click the button:

1. **Child Click Handler:** The click event is first handled by the `child` element. The alert saying "Child clicked!" is displayed.
2. **Parent Click Handler:** After the child’s event handler completes, the event bubbles up to the `parent` element. The alert saying "Parent clicked!" is then displayed.

### Key Points of Event Bubbling

1. **Event Order:** Events bubble up from the target element to the root of the document. If you have nested elements, the innermost element’s event handler is executed first, followed by its ancestors.
2. **Propagation Control:** You can stop the event from bubbling up by calling `event.stopPropagation()` within an event handler. This is useful when you want to prevent ancestor elements from handling the same event.

   ```javascript
   document.getElementById("child").addEventListener("click", function (event) {
     alert("Child clicked!");
     event.stopPropagation(); // Stops the event from bubbling up to the parent
   });
   ```

3. **Event Capturing:** While bubbling is the default behavior, you can also use event capturing (or trickling), where the event starts from the root and trickles down to the target element. Event capturing is less commonly used but can be specified with `addEventListener` by passing `true` as the third argument:

   ```javascript
   document.getElementById("parent").addEventListener(
     "click",
     function () {
       alert("Parent clicked!");
     },
     true
   ); // This uses capturing phase
   ```

### Practical Uses of Event Bubbling

- **Event Delegation:** Event bubbling is particularly useful in event delegation, where you attach a single event listener to a parent element rather than multiple listeners on individual child elements. This approach improves performance and simplifies event management, especially for dynamic content.

  ```javascript
  document.getElementById("parent").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      alert("Button inside parent clicked!");
    }
  });
  ```

- **Handling Events in Complex UIs:** Bubbling allows you to manage events in complex user interfaces where multiple elements are nested. By attaching a handler to a parent element, you can efficiently manage and respond to events from any child element.

### Summary

Event bubbling is a fundamental concept in JavaScript that involves the propagation of events from the target element up through its ancestor elements in the DOM. It allows for flexible and efficient event handling and is especially useful in event delegation and managing complex UIs. Understanding how and when to use event bubbling can help you write more effective and maintainable event-driven code.

# 4. Capturing

Event capturing, also known as event trickling, is one of the phases of event propagation in JavaScript. While event bubbling handles events as they propagate from a target element up to the root, event capturing starts from the root and propagates down to the target element. This allows you to intercept events before they reach the target element.

### How Event Capturing Works

1. **Event Capturing Phase:** When an event is triggered, the event capturing phase starts at the root of the document and travels down through the DOM tree to the target element. This is the first phase of event propagation.

2. **Target Phase:** After the event reaches the target element, it enters the target phase where event handlers attached directly to the target element are executed.

3. **Event Bubbling Phase:** Finally, the event enters the bubbling phase, where it bubbles up from the target element back to the root of the document.

### Example of Event Capturing

Consider the following HTML structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event Capturing Example</title>
  </head>
  <body>
    <div id="grandparent">
      <div id="parent">
        <button id="child">Click me!</button>
      </div>
    </div>

    <script>
      document.getElementById("grandparent").addEventListener(
        "click",
        function () {
          alert("Grandparent clicked!");
        },
        true
      ); // `true` indicates capturing phase

      document.getElementById("parent").addEventListener(
        "click",
        function () {
          alert("Parent clicked!");
        },
        true
      ); // `true` indicates capturing phase

      document.getElementById("child").addEventListener("click", function () {
        alert("Child clicked!");
      });
    </script>
  </body>
</html>
```

Here’s what happens when you click the button:

1. **Capturing Phase:** The click event starts from the root and travels down:

   - `grandparent` element's event listener is triggered first (since it uses capturing phase).
   - `parent` element’s event listener is triggered next (also in the capturing phase).

2. **Target Phase:** The event then reaches the `child` element, where its event listener is triggered.

3. **Bubbling Phase:** If the event were to bubble up, it would trigger the event handlers on `parent` and `grandparent` again, but in the bubbling phase. However, in this example, only capturing handlers are set for `parent` and `grandparent`, so this phase is not illustrated here.

### Key Points of Event Capturing

- **Event Propagation Order:** The order is root -> target -> leaf, where event handlers attached with capturing (`true` as the third argument) are executed before those in the bubbling phase.
- **Usage:** Capturing is less commonly used compared to bubbling. It's useful for scenarios where you need to intercept events before they reach specific target elements. This can be helpful for setting up global event handlers or applying pre-processing before the event reaches the target.

- **Adding Event Listeners in Capturing Phase:** To add an event listener in the capturing phase, you pass `true` as the third argument to `addEventListener`.

  ```javascript
  element.addEventListener("event", handler, true); // Capturing phase
  ```

### Summary

Event capturing is part of the event propagation process that allows events to be intercepted as they travel down from the root of the DOM to the target element. While it is less commonly used than event bubbling, capturing provides an additional layer of control and is useful for certain scenarios where you need to handle or preprocess events before they reach specific elements.

# 5. What is event.StopPropagation() & why we need it

`event.stopPropagation()` is a method in JavaScript that is used to prevent the propagation of an event from continuing through the event phases. Specifically, it stops the event from bubbling up the DOM tree during the event bubbling phase or from capturing down the DOM tree during the event capturing phase.

### How `event.stopPropagation()` Works

When an event occurs, it goes through the following phases:

1. **Capturing Phase:** The event starts from the root and travels down to the target element.
2. **Target Phase:** The event reaches the target element where it was initially triggered.
3. **Bubbling Phase:** The event bubbles up from the target element to the root.

By default, the event will propagate through these phases, triggering any event listeners attached to the ancestor elements. `event.stopPropagation()` prevents this further propagation.

### Example

Consider the following HTML structure and JavaScript code:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>stopPropagation Example</title>
  </head>
  <body>
    <div id="parent" style="padding: 20px; background-color: lightblue;">
      Parent
      <button id="child">Click me!</button>
    </div>

    <script>
      document.getElementById("parent").addEventListener("click", function () {
        alert("Parent clicked!");
      });

      document
        .getElementById("child")
        .addEventListener("click", function (event) {
          alert("Child clicked!");
          event.stopPropagation(); // Stops the event from bubbling up to the parent
        });
    </script>
  </body>
</html>
```

Here’s what happens when you click the button:

1. **Child Click Handler:** The click event triggers the `child` element's event handler, which displays "Child clicked!" and calls `event.stopPropagation()`.
2. **Propagation Stopped:** The `event.stopPropagation()` method prevents the event from bubbling up to the `parent` element. As a result, the `parent` element's event handler is not triggered, and you don't see the "Parent clicked!" alert.

### Why We Need `event.stopPropagation()`

1. **Prevent Unintended Behavior:** Sometimes, multiple event handlers might be attached at different levels of the DOM. If you want to prevent an event from affecting parent elements or other elements in the hierarchy, you can use `event.stopPropagation()`.

2. **Event Delegation:** In event delegation, you might attach a single event handler to a parent element to handle events for its child elements. If you need to prevent a child element's event from affecting the parent or triggering other handlers, `event.stopPropagation()` can be used.

3. **Component Isolation:** In complex applications with multiple interactive components, you might want to isolate events within a component. Using `event.stopPropagation()` ensures that the event handling remains confined to the component or specific area without affecting others.

4. **Avoiding Duplicate Actions:** Preventing further propagation can help avoid duplicate actions or conflicts where multiple handlers might otherwise process the same event.

### Important Considerations

- **Does Not Stop Default Behavior:** `event.stopPropagation()` does not prevent the default action associated with the event (e.g., following a link or submitting a form). To prevent the default action, you need to use `event.preventDefault()`.

- **Use Judiciously:** Overusing `event.stopPropagation()` can make debugging and understanding event flow more difficult. It’s best used when you have a clear need to stop event propagation, rather than as a general practice.

### Summary

`event.stopPropagation()` is a method used to halt the propagation of an event through the DOM tree, either during the capturing or bubbling phases. It is useful for preventing unintended interactions with ancestor elements, isolating events within components, and controlling complex event handling scenarios. However, it should be used thoughtfully to avoid complicating event management.
