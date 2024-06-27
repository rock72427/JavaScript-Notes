# Javascript Features

- JavaScript is a high-level programming language.

- JavaScript is a just-in-time (JIT) compiled language.

- JavaScript is an implicitly semicoloned programming language.

- JavaScript is a dynamically typed programming language means variable types are determined at runtime and can change as the program executes.

---

- Javascritp was developed by Breden Eich in the year of 1994 at "Netscape Navigator".

- Javascript and java both are not same.

- To Release latest version ECMA company release ES6 in 2015.

- From that time onwords we can call javascript as ECMA Script.

- JS is now number 1 programming language because it used for frontend as well as backend.

| Frontend   | Backend    |
| ---------- | ---------- |
| React JS   | Node JS    |
| Angular JS | Express JS |
|            | Mongo DB   |

- JS was introduced to create dynamic web pages and to intract with users.

- Javascript is a High Level Programming Language.

  > which means user understable programming langauge

- Javascript is a Just in time programming language.
  > J.I.T compilation means converting highlevel code into machine level code at once and execute immediately.

![JIT](https://i.ibb.co/GnbWDmF/Whats-App-Image-2024-06-13-at-2-58-19-PM-removebg-preview.png)

Javascritp code can be attached to HTML page in 2 ways:-

1. Internal JS
2. External JS

## Internal JS

Internal JS means writing script code into HTML document.

```
<html>
    <head>
        <title>New</title>
        <script>
            console.log("Hello World");
        </script>
    </head>
    <body></body>
</html>
```

## Function

- Function is a set of statement which is used to perform some task.

- To execute function statement Function call is compulsory.

```
Function FunctionName() { // Function- Keyword; FunctionName- Identifier

}
FunctionName(); // Function Call
```

### Example

```
Function Pring() {
    console.log("Hello World");
}
Pring();
```

### Identifiers

- The names which are given by programmers is know as identifiers

```
var names
class names
```

### Rules for Identifiers

- Identifier should not shart with digit
- Identifier should not contian any special character except "$" and "\_".
- Keyword should not be used for identifiers.

```
main  ✅
m1    ✅
m2    ✅
num1  ✅
num$1 ✅
$num1 ✅
1m    ❌
num@1 ❌
@num  ❌

else  ❌
this  ❌
if    ❌
for   ❌
```

### Example

```
main();
Function main() {
    console.log("main starts);
    m1();
    console.log("main ends");
}
Function m1() {
    console.log("m1 starts");
    console.log("m1 ends");
}
console.log("Hello");
```

- Javascript is implicit semicoloned programming language.

> Which means when we are not using semi-colon in the end of the statements, then JS will be added automatically

## Conditional Statements

- By using conditional statement we can skip block of code.
- There are 4 type of conditional statement

1. if
2. if-else
3. else-if
4. switch

#### Syntax of if

```
if (condition) {

}
```

```
<html>
    <body>
        <script>
            let num = 5;
            if (num % 2 == 0) {
                console.log(num + " = is a even number");
            }
        </script>
    </body>
</html>
```

```
<html>
    <body>
        <script>
            let a = 10;
            let b = 20;
            let c;
            if (a > b) {
                c = a;
            } else {
                c = b;
            }
            console.log(c + " = is greater");
        </script>
    </body>
</html>
```

## Unary Operator

++ Increment operator\
-- Decrement operator

```
Post Increment var++
Pre Increment ++var
```

```
Post Decrement var--
Pre Decrement --var
```

```
let a = 0;
a++;
console.log(a); // 1
```

```
let a = 0;
++a;
console.log(a); // 1
```

```
let a = 1;
let b = 0;
b = ++a;
console.log(a, b); // 2 2
```

```
let a = 1;
a = a++;
console.log(a); // 1
```

```
let a = 1;
a = ++a;
console.log(a); // 2
```

```
let a = 1;
let b = 0;
b = a++;
console.log(a, b); // 4 6
```

```
let a = 1;
a = a++;
console.log(a); // 1
a = a++ ;
console.log(a); // 1
a = ++a;
console.log(a); // 2
a = ++a;
console.log(a); // 3
```

```
let a = 1;
console.log(a++); // 1
console.log(a++); // 2
console.log(++a); // 4
console.log(++a); // 5
```

## Q. How to take user input at run time?

- In javascript we use 'prompt' function to take input from the use at run time.

```
<script>
    main();
    function main() {
        let n1 = prompt("Enter n1 value");
        console.log(n1);
    }
</script>
```

```
<script>
    main();
    function main() {
        let a = Number(prompt("Enter a value"));
        let b = Number(prompt("Enter b value"));
        console.log(a + " + " + b " = " + (a + b));
        let n1 = "10";
        console.log(n1, typeof n1);
        n1 = Number(n1);
        console.log(n1, typeof n1);
    }
</script>
```

#### Explict Conversion

```
Number("10"); 10 number
Number("JSP"); NaN number
Number(true); 1 number
```

```
console.log(1 + 2); // 3
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("10" * 2); // 20
console.log("10" - "3"); // 7
console.log("Hi" + 1); // Hi1
console.log("Hi" * 1); // NaN
```

## Type Conversion

Converting one type to another type manually or explicitly is known as type conversion.

```
Number("23"); // 23
```

### Coersion

Converting one type to another type automatically of implicitly is known as type coersion.

```
"10" * 2 -> 20
"1" + 2 -> "12"
```

### String()

```
String(23) // "23"
String(true) // "true"
```

### Boolean()

#### Falsy values

```
Boolean(0) false
Boolean(" ") false
Boolean(undefined) false
Boolean(null) false
Boolean(NaN) false
Boolean(false) false
```

#### Truthy Values

```
Boolean(1) true
Boolean("JSP") true
Boolean(true) true
Boolean([1, 2, 3]) true
```

#### Falsy Values

- The values which returs the false when we converting into boolean type those values are known as falsy values.
- There are 6 falsy values one is 0, " "(empty string), undefined, null, NaN, false.

#### Truthy Values

- The values which returns true when we convert into boolean type those values are known as truthy values.
- Apart from falsy values all other values are truthy values.

For conversion purpose we can use '+' operator.

```
let a = +("10");
console.log(a, typeof a);
```

#### Output

```
10 number
```

#### Even or Odd

```
<script>
    main();
    function main() {
        let n = Number(prompt("Enter Number"));
        if (n % 2 == 0)
            console.log(n + " is even number");
        else
            console.log(n + " is odd number");
    }
</script>
```

```
<script>
    main();
    function main() {
        let n = 5;
        if (n % 2 == 0) {
            n++;
            ++n;
        }
        n++;
        console.log("n value is " +n);
    }
</script>
```

#### Output

```
n value is 6
```

```
<script>
    main();
    function main() {
        let n = 13;
        if (n % 2 == 0) {
            n++;
            ++n;
            n++;
            console.log("n value is " + n);
        }
    }
</script>
```

## Relationl Operator

Relational Operator also known as comparission operator.

```
5 > 5 false
5 < 5 false
5 >= 5 true
5 <= 5 true
5 == 5 true
5 != false
```

#### Comparision

```
>
<
>=
<=
==
!=
===
!==
```

Output of relational operator is in Boolean type.

```
<script>
    main();
    function main() {
        let a = 5;
        let b = "5";
        if (a === b)
            console.log("Javascript is Easy !!");
        else
            console.log("Javascript is very very Easy!!");
    }
</script>
```

#### Output

```
Javascript is very very Easy!!
```

## ==

- Double equal to is a normal comparision operator.
- Double equal to operator will check only the values but not data types.
- In case of double equal to operator type coersion happens internally.

## ===

- Triple equal is a strictly comparision operator.
- Triple equal to operator will check the values as datatype.
- Type corsion will not happen is case of triple equal to.

```
console.log(1 > 2 > 3); // (false > 3); (0 > 3); false
console.log(1 < 2 < 3); // (true < 3); (1 < 3); true
```

## Function

- Function is set of statements which is use to perform some specific task.

### Advantages

1. Resuability of code
2. Increaese Code Readability
3. In Javascript we can create function in three ways

- Function Declaration
- Function Expression
- Arrow Function

### Function Declaration

Creating a function with function keyword followed by function name is know as function declaration.

#### Syntax

```
function functionName()
{

}
functionName();
```

Function Declaration can be called before its declaration.

```
main(); // function call
function main() {

}
```

```
main();
function main() {
    m1();
    console.log("main starts");
    m1();
    console.log("main ends");
    m1();
}
function m1() {
    console.log("m1 starts");
    console.log("m1 ends");
}
```

#### Output

```
m1 starts
m1 ends
main starts
m1 starts
m1 ends
main ends
m1 starts
m1 ends
```

### Function with Return Statement

- Return statement is use to returns the cursor to its calling function.
- A javascript function can return any type of value (because of dynamic programming language).
- If a function is not returning any value then writing 'return' statement is optional.

```
main();
function main() {
    console.log("main starts");
    let a = m1();
    console.log("a value is " + a);
    console.log("main ends");
    return;
}
function m1() {
    console.log("m1 starts");
    console.log("m1 ends");
    return 1;
}
```

- When a javascript function is not returning any value then by default is return undefined.

```
main();
function main() {
    console.log("main starts");
    m1();
    console.log("main ends");
    return;
}
function m1() {
    console.log("m1 starts");
    return;
    console.log("m1 ends");
}
```

```
function m1() {
    if (cond) {
        line-1;
        return;
        line-2; // unreachable
    }
    line-3
}
```

```
function m2() {
    for (let i = 1; i <= 10; i++) {
        statement-1;
        break;
        statement-2; // unreachable
    }
}
```

The statement which will never execute through out the program those statement are unreachable program.

```
main();
function main() {
    let i = m1();
    let j = m1() * 20;
    console.log("i value is " + i);
    console.log("j value is  " + j);
    console.log(m1());
}
function m1() {
    console.log("m1 is executing!!");
    return 10;
}
```

#### Output

```
m1 is executing
m1 is executing
i value is 10
j value is 200
```

### First Class Citizen

- Javascript functions are treated as first class citizen.
- First Class Citizen means

1. A function can be passed as an argument to another function.
2. A function can be stored into a variable.
3. A function can return another function.
4. A function can be stored into a data structure.

### Function with paramenters

```
function add(a, b) { // (a, b) Formal Parameters

}
add(10, 20); // Actual Parameters or Arguments
```

- The paramenters which we create at function declaration is known as formal parameters.
- The parameters which we pass at function call is known as actual parameters.

```
main();
function main() {
    console.log("main starts");
    // m1(10, 20);
    // m1(1);
    // m1();
    m1(1, 2, 3, 4, 5);
    console.log("main ends");
}
function m1(a, b) {
    console.log("m1 starts");
    console.log(a);
    console.log(b);
    console.log("m1 ends");
}
```

- A parameterise function that can be called with equal number of arguments or less number of argument or more number of arguments.
- In case of less number of arguments default value will be assigned for formal parameters.
- In case of more number of arguments it ignores unwanted values.

```
main();
function main() {
    let a = 10;
    m1(a);
    console.log(a);
}
function m1(a) {
    a = a * 20;
    console.log(a);
}
```

```
main();
function main() {
    let i = 0;
    let j = 0;
    j = m1(++i);
    console.log("i = " + i + " , j = " + j);
}
function m1(a) {
    return a++;
}
```

```
main();
function main() {
    let i = 0;
    let j = 0;
    j = m1(++i) + m1(i++);
    console.log(i, j);
}
function m1(a) {
    return a++;
}
```

```
main();
function main() {
    let output = calc(10, 20, mul); // passing function as an argument
    console.log("Output = " + output);
}
function calc(n1, n2, callType) {
    let res = callType(n1, n2);
    return res;
}
function calc(n1, n2, callType) {
    let res = calType(n1, n2);
    return res;
}
function sum(a, b) {
    return a + b;
}
function mul(a, b) {
    return a * b;
}
```

## Q.What is Callback Function?

- The function which is passed as an argument to another function in known as callback function.

## Q.What is High Order Function?

- The function which is accepting another function as a argument the function is known as high order function.

#### Example

```
calc(10, 20, sum);
```

Here sum is Callback Function and calc is High Order Function.

OR

- A function which is returning another function is known as higher order function.

```
function outer() {
    let a = 10;
    function inner() {
        let b = 20;
        console.log(b);
        // inner();
        // return a;
        return inner;
    }
    let output = outer();
    console.log(output);
}
```

### Function Expression

Creating a function (which can be named function or anonymous function) and storing in a variable.

#### Example

```
let greet = function() {
    console.log("Hi");
    console.log("Hello");
}
console.log(greet);
greet();
```

### Anonymous Function

A function without a name is known as anonymous function.

| Function Declaration                                                         | Function Expression                                                |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Function Declaration can be accessable before its declaration.               | Function Expression cannot be accessible.                          |
| Since Function Declaration is a block of code we can not end with semicolon. | Since Function Expression is a variable we can end with semicolon. |

### Arrow Function

- Arrow Function are introduced in ES6 version.
- Arrow Functions are use to create anonymouse functions in simple way.

#### Syntax

```
let greet = () => {

}
greet();
```

- Arrow Function cannot be accessible before its initilazation.

## JS Runtime Environment

![JRE](https://i.ibb.co/rwscvVR/Whats-App-Image-2024-06-27-at-1-48-13-PM.jpg)

- JS runtime is an enviroment which is collection of necessary components in order to execute javascript code.
- Javascirpt engine is a collection of program's which is use to run javascript program's.
- Call Stack is the place where javascript code get's executed with the help of execution context.
- Heap is an unstructured memory pool which is used to store javascript object's.
- Web API's are use to provide additional functionality to javascript program's (WEB API is not part to javasctipt langauge it is part of browser).
- Callback Queue is a data structure which is used to store callback function's which are ready to be executed.
- Micortask Queue is use to store the callback function's which has higher priority then the callback function's which are waiting inside callback queue.
- Event loop is use to push the call back function's which are waiting inside weather callback queue or micro task queue to callstack execution.
