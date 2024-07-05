# Javascript Features

- JavaScript is a high-level programming language.

- JavaScript is a just-in-time (JIT) compiled language.

- JavaScript is an implicitly semicoloned programming language.

- JavaScript is a dynamically type programming language.

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

![JIT](https://i.ibb.co/vhY8sty/Untitled-Project.jpg)

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
function functionName() { // function- Keyword; functionName- Identifier

}
functionName(); // function Call
```

### Example

```
function print() {
    console.log("Hello World");
}
print();
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
function main() {
    console.log("main starts");
    m1();
    console.log("main ends");
}
function m1() {
    console.log("m1 starts");
    console.log("m1 ends");
}
console.log("Hello");
```

- Javascript is an implicit semicoloned programming language.

> Which means when we are not using semi-colon in the end of the statements, then JS will be added automatically

## Variable

- Variable is a container which is use to store a single value.

#### Syntax

```
keyword varName;
varName = value;
```

#### Example

```
let a;
a = 10;
console.log('a'); // a
console.log(a); // 10
```

- To create a variable we have 3 keyword like var, let, const.
- let and const keyword are introduced in ES6 version in the year of 2015.
- Variable can not be re-declared, but variable can be re-initialized.
- Variable memory is temporary.

#### Example

```
main();
function main() {
    let a;
    a = 10;
    console.log(a); // 10
    a = 20;
    console.log(a); // 20
}
```

```
main();
function main() {
    let a;
    console.log(a); // undefined
}
```

- If we create a variable without initialization then default value is assigned by JS engine is undefined.

```
studentDetails();
function studentDetails() {
    let stuName, stuId, stuPh;
    stuName = "Rohit";
    stuId = 101;
    stuPh = 9999;
    console.log(stuName);               // Rohit
    console.log(stuId);                 // 101
    console.log(stuPh);                 // 9999
    console.log(stuId, stuName, stuPh); // 101 Rohit 9999
}
```

```
main();
function main() {
    let a = 10;
    console.log(a); // 10
    a = "Rohit";
    console.log(a); // Rohit
    a = true;
    console.log(a); // true
}
```

- Javascript is Dynamic type programming language which means at the time of variable declaration we no need to use declaration.
- In Dynamic type programming language the Data types of a variable will be assigned at run time.

There are 2 types of Data types-

1. Primitive type (number, string, boolean, undefined, null, big-int, symbol)
2. Non-primitive type (object, array, regular expression, class name)

### Number Data Type

- Number data type is used to store any numberic value (either decimal or non-decimal values)

#### Example

```
let a = 10;
console.log(a, typeof a);
a = 10.05;
console.log(a, typeof a);
```

### String Data Type

- String Data type is used to store a single letters or group of letters.
- In Javascript a string can be enclosed within single quote(' ') or double quote(" ") or back tick(` `) operator.

#### Example

```
let sname = "Abi";
console.log(sname, typeof sname);
sname = "nash";
console.log(sname, typeof sname);
sname = `Rautaray`;
console.log(sname, typeof sname);
```

### Boolean Data type

- Boolean datatype is used to store true or false values.

#### Example

```
let ename = "Abi";
let isMarried = true;
console.log(isMarried, typeof isMarried);
```

### Undefined Datatype

- If we create a variable without initialization then the default value is undefined.
- Undefined values Datatype is undefined.

#### Example

```
let gender;
console.log(gender);
```

### Null

- Null is an empty value or internenal absence of object value.

#### Example

```
let isAlive = null;
console.log(isAlive, typeof isAlive); // null 'object'
```

- It's a bug

### Note

- Javascript is multi-paradigm programming language which means we can write programming in procedual oriented or object oriented.

### Big Int

- Big Int datatype is used to store very large number which cannot store in number datatype.
- To represent Big Int datatype we need to use 'n';

#### Example

```
let n1 = 10n;
console.log(n1, typeof n1);
```

| Store maximum number of value syntax |
| ------------------------------------ |
| Number = MAX_SAFE_INTEGER            |

- Big Int datatype introduced in ES-11 version.

### Symbol

- Symbol datatype is introduced in ES 6version.
- Symbol datatype is used to create unique identifiers for objects.

## Operators

### Arithmatic Operators

```
+ => Add
- => Sub
* => Mul
/ => Quotient
% => Reminder
```

### Math

Math.trunc()
trunc => Remove Decimal
Math.trunc(a/b); // 2

### To Remove Last Digit

```
main();
function main() {
    let n = 9746;
    console.log(Math.trunc(n / 10)); // 974 // removing last one digit
    console.log(Math.trunc(n / 100)); // 97
    console.log(Math.trunc(n / 1000)); // 9
}
```

### To get Last Digit

```
let n = 1234;
console.log(n % 10); // 4
console.log(n % 100); // 34
console.log(n % 1000); // 234
```

### Compound Assignment Operator

```
let a = 1;
a = a + 1;
console.log(a);
```

a += 1 means +1 (positive 1) assign ni a value.

### Concatination

- Joining or combining two or more operands is known as concatination.
- To perform concatination we use (+) operator.
- For concatination at least one operand should be string type

```
number + number => Addition
number + string => concatination
string + number => concatination
string + string => concatination
```

```
1 + 1 => 2                        // number
1 + "css" => "1css"               // string
"html" + 1 => "html1"             // string
"java" + "script" => "javascript" // string
```

#### Example

```
1 + 2 + "Hi" => "3Hi"
1 + 2 + "Hi" + 3 + "Hello" + 4 => "3Hi3Hello4"
```

#### Example

```
1 + "A" => "1A"
```

- But in Java A value consider as character and A values takes as ASCII values.

#### Example

```
let a = 1;
let str = " a value is ";
let res = str + a;
console.log(res);
let b = 10;
console.log("b value is " + b);
console.log(`a value is ${a}`);
```

### Template Literal String (ES 6)

#### Example

```
`      ${expression}`
```

## Q. Write a program to perfrom addition of two numbers?

```
main();
function main() {
    let a = 5;
    let b = 10;
    console.log(`addition of two number is:- ${a + b}`);
}
```

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

- In javascript we use 'prompt' function to take input from the user at run time.

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
        console.log(`${a} + ${b} = ${a + b}`);
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

- The values which return the false when we converting into boolean type those values are known as falsy values.
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

## Logical Operator

- In AND(&&) operator if first condition is true then it will check second condition.
- If first condition is false it wont check second condition.

```
let a = 5;
console.log(!a > 5); // (false > 5); (0 > 5); false
```

```
function main() {
    let a = 5;
    let b = 6;
    console.log(a++ > 5 && b++ > 5);
    console.log(a, b);
}
main();
```

#### Output

```
false
6 6
```

- In OR(||) operator if first condition is false then it will check second condition.
- If first condition is true it wont check sedond condition.

```
let a = 5;
let b = 6;
console.log(a++ >= 5 || b++ >= 5);
console.log(a, b);
```

```
true
6 6
```

## Bitwise Operator

- Bitwise '&' and '|' operator can be use for logical operations.
- Bitwise '&' operator will check both the expression always and return binary output.

```
console.log(false && false);
console.log(false & true);
console.log(true & true);
```

#### Output

```
false
0
1
```

```
console.log(0 && 1);                 // (false && true) => 0
console.log(NaN && "Hi");            // (false && "Hi") => NaN
console.log("Hi" && "Hello");        // (true && true) => Hello
console.log("Java" && 0);            // (true && false) => 0
console.log("Vinod" && undefined);   // (true && false) => undefined
console.log(1 && "Hi");              // (true && true) => Hi
console.log(NaN || null || "Vinod"); // (null || "Vinod") => (null || "Vinod") => (false || true) => Vinod

```

## Looping Statement

1. for
2. while
3. do-while
4. for in loop
5. for of loop

## For Loop

#### Syntax

```
for (initilization; condition; increment/decrement) {

}
```

```
for (let n = 1; n <= 10; n++) {
    console.log(n);
}
```

## Q1. Print 5 to 25?

```
for (let i = 5; i <= 25; i++) {
    console.log(i);
}
```

## Q2. Print -5 to 25?

```
for (let i = -5; i <= 25; i++) {
    console.log(i);
}
```

## Q3. Print 5 to -25?

```
for (let i = 5; i >= -25; i--) {
    console.log(i);
}
```

## Q4. Print -5 to -25?

```
for (let i = -5; i >= -25; i--) {
    console.log(i);
}
```

## Q. Write a program to print even number between 10 to 25?

```
for (let i = 10; i<= 25; i++) {
    if(i %2 == 0) {
        console.log(i);
    }
}
```

#### Output

```
10
12
14
16
18
20
22
24
```

```
main();
function main() {
    let str = '';
    for (let n = 10; n <= 25; n++) {
        if (n % 2 == 0) {
            if (n < 24) {
                str = str+n + ", ";
            } else {
                str = str +n;
            }
        }
    }
    console.log(str);
}
```

```
10, 12, 14, 16, 18, 20, 22, 24
```

## Q. Write a program to find factorial for a given number?

```
let num = 5
let fact = 1;
for (let n = 2; n <= num; n++) {
    fact = fact * n;
}
console.log(fact); // 120
```

## Q. Write a program to print multiplication table of given number?

```
let num = 5;
for (let n = 1; n <= 10; n++) {
    console.log(`${num} * ${n} = ${num * n}`);
}
```

#### Output

```
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
```

## Q. Write a program to sum 1 to 10 digit?

```
let sum = 0;
for (let n = 1; n <= 10; n++) {
    sum += n;
}
console.log(sum);  // 55
```

```
main();
function main() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) break;
        console.log(i);
    }
    console.log("outside for loop")
}
console.log("outside main function");
```

#### Output

```
1
outside for loop
outside main function
```

- Break statement can be use within looping statement.
- Break statement is use to terminate the current loop.

```
main();
function main() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2== 0) continue;
        console.log(i);
    }
    console.log("outside for loop");
}
console.log("outside main function");
```

#### Output

```
1
3
5
7
9
outside for loop
outside main function
```

- Continue is use to skip the current iteration and go to next.

```
main();
function main() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) return;
        console.log(i);
    }
    console.log("outside for loop");
}
console.log("outside main funciton");
```

#### Output

```
1
outside main funciton
```

- Return is use to terminate the function.

## Q. Write a program is divisible by prime or not?

```
let a = 8;
let flag = 0;
for (let i = 2; i < a; i++) {
    if (a % i == 0) {
        flag = 1;
        break;
    }
}
if (flag == 1) {
    console.log(a + " is not prime");
} else {
    console.log(a + " is prime");
}
```

#### Output

```
8 is not prime
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
m1 is executing!!
m1 is executing!!
i value is 10
j value is  200
m1 is executing!!
10

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
| Function Declaration can be accessable before its declaration.               | Function Expression cannot be accessible before its declaration.   |
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

![JRE](https://vahid.blog/post/2021-03-21-understanding-the-javascript-runtime-environment-and-dom-nodes/jsRuntimeEnvironment_hufc6622042c18be00aa4535dddfa9305a_166610_1200x1200_fit_q75_lanczos.jpg)

- JS runtime is an enviroment which is a collection of necessary components in order to execute javascript code.
- Javascirpt engine is a collection of program's which is use to run javascript program's.
- Call Stack is the place where javascript code get's executed with the help of execution context.
- Heap is an unstructured memory pool which is used to store javascript object's.
- Web API's are use to provide additional functionality to javascript program's (WEB API is not part to javasctipt langauge it is part of browser).
- Callback Queue is a data structure which is used to store callback function's which are ready to be executed.
- Micortask Queue is use to store the callback function's which has higher priority then the callback function's which are waiting inside callback queue.
- Event loop is use to push the call back function's which are waiting inside weather callback queue or micro task queue to callstack execution.
  ***

* In javascript before executing one line of code only memory will be created for each variable and function.
* If the variable is created var keyword the initail value is undefined.
* If the vairable is created with let or const keyword's then the initial value is uninitialized.
* For function declaraction initial value is actual function.
* For function expression or arraow function's the initial value is depends on the keyword.
* Execution context is a container which is use to execute javascript code.
* The new execution context will be create for every function call.
* The every exection context has two component:-

1. memory component
2. Code exection component

```
var a = 10;
var b = 20;
function add(n1, n2) {
    var res = 0;
    res = n1 + n2;
    return res;
}
var c = add(a, b);
var d = add(c, b);
```

### Global Execution Context

| Memory       | Code |
| ------------ | ---- |
| a:undefined  | 10   |
| b: undefined | 20   |
| add:{=}      |      |
| c:undefined  |      |
| d:undefined  |      |

##### add(10, 20)

| M                        | C        |
| ------------------------ | -------- |
| arguments {0: 10, 1: 20} |          |
| res:undfined             | ~~0~~ 30 |

| Memory       | Code |
| ------------ | ---- |
| a:undefined  | 10   |
| b: undefined | 20   |
| add:{=}      |      |
| c:undefined  | 30   |
| d:undefined  |      |

##### add(30, 20)

| M                       | C        |
| ----------------------- | -------- |
| arguments{0: 30, 1: 20} |          |
| res:undefined           | ~~0~~ 50 |

| Memory       | Code |
| ------------ | ---- |
| a:undefined  | 10   |
| b: undefined | 20   |
| add:{=}      |      |
| c:undefined  | 30   |
| d:undefined  | 50   |

```
var a;
console.log(a); // undefined
```

```
let a;
console.log(a); // uninitialized
```

## Objects

- Object is an physical entity or an real world entity.
- Object is a collection of properties(state) and methods(behaviour).
- In javascript we can create object in 2 ways:-

## 1. Object Literal

#### Syntax

```
let refVar = {
    key: value,
    key: value
}
```

## 2. Using object Constructor

#### Syntax

```
let refVar = new Object();
```

2 ways to access object keys:-

1. got notation
2. square notation

```
let student = {
  id: 101,
  firstName: "Satish",
  lastName: "Kumar",
  gender: "Male",
  birthYear: 2000,
  age: 24,
};
let stuName = `${student.firstName} ${student.lastName}`;
console.log(stuName); // Satish Kumar

let year = student["birthYear"];
console.log(year); // 2000
```

- If we try to access non existing properties from an object then default value is return

```
let student = {
  id: 101,
  firstName: "Satish",
  lastName: "Kumar",
  gender: "Male",
  birthYear: 2000,
  age: 24,
};
console.log(student.firstName); // Satish
console.log(student.address); // undefined
console.log(student["info"]) // undefined
```

```
let student = {
  id: 101,
  8: "Eight",
  firstName: "Satish",
  lastName: "Kumar",
  "full Name": "Satish Kumar",
  gender: "Male",
  birthYear: 2000,
  age: 24,
};
console.log(student["full Name"]); // Satish Kumar
console.log(student["8"]); // Eight
```

```
let student = {
  id: 101,
  firstName: "Satish",
  lastName: "Kumar",
  gender: "Male",
  birthYear: 2000,
  age: 24,
};
let info = prompt("Search Student Data..?");
if (student[info]) {
    console.log(`You are Searching For Student ${info} => ${student[info]}`);
} else {
    console.log("Invalid Search");
}
```

## Dot Notation

- By using dot notation we can access only valid identifiers.
- Using dot notation we can access only static properites.

## Square Notation

- By using [] square notation we can access invalid identifiers also.

```
objRef["full Name"]
obj["6"]
```

- Using [] notation we can access dynamic properties.

```
let user_1 = { id: 1, name: "Satish", city: "UP" };
let user_2 = user_1;
user_2.city = "Bangalore";
console.log(user_1.city); // Bangalore
console.log(user_2.city); // Bangalore
```

Every execution context can be associated with the object that object is having three properties:-

1. Variable Object / Environment
2. Scope Chain
3. This

## Variable Object / Environment

- Variable Object is a property of execution context which contain all the variables, function arguments and inner functions declaration information.

```
function studentDetials(id, name) {
    let instituteName = "Jspiders";
    const branchName = "Marathahailli";
    var course = "MERN";

    function printDetails() {
        console.log(`Student Name = ${name}, Student Course = ${course}`);
    }
    printDetails();
    let welcome = function() {
        console.log(`Hi ${name}, Welcome to ${instituteName}`);
    }
    welcome();

    var greet = () => {
        console.log(`Hey ${name}, Good Evening`);
    }
    greet();
}
studentDetails(101, "Satish");
```

#### G.E.C

| Memory                             | Code |
| ---------------------------------- | ---- |
| variableObject:{studentDetails{=}} |      |

#### StudentDetails(101, "Satish")

| Memory                                           | Code |
| ------------------------------------------------ | ---- |
| variableObject:{arguments: {1:101, 1: "Satish"}} |      |
| instituteName: uninitialized                     |      |
| branch: uninitialized                            |      |
| course: undefined                                |      |
| printDetials: {=}                                |      |
| welcome: unitialized                             |      |
| greet: undefined                                 |      |
| }                                                |      |

## Scopes

- Accessibility of a varaible is called scope.
- There are three types of scope:

1. Global
2. Function Scope / Local Scope
3. Block Scope

### Global Scope

- Top level code has global scope.
- Top level code means the variable and functions which are not present inside any other functions or block is known as global variable and functions.

### Function Scope / Local Scope

- Function scope is also know as local scope.
- The variables and functions which are present inside any other function are only accessible within that function.

### Block level SCOPE

- Blocks started creating scope from ES6 version.
- The variables which are created using let or const keyword within that block only.

## What is scope chain?

- When ever we use a variable in javascript, JS engine looks for that variable in current scope if it is not avaible then it goes to outer scope and then this process continues till global scope.

```
let a = 10;
{
    let a = 20;
    {
        let a = 30;
        {
            let a = 40;
            console.log(a);
        }
    }
}
```

## Lexical Environment

- Lexical environement is created for every exection context.
- Lexical envinronment is local memory along with its parent lexical envinronment reference.

Lexical Environment = local memory + its parent

```
function main() {
    var a = 10;
    function m1() {
        var b = 20;
        console.log(a);
    }
    m1();
}
main();
```

#### G.E.C

| Memroy              | Code |
| ------------------- | ---- |
| varObje:{main: {=}} |      |

#### main()

| Memory      | Code |
| ----------- | ---- |
| a: undefine |      |
| m1: {=}     |      |

#### m1

| Memory | Code |
| ------ | ---- |
|        |      |

## What is Lexical Scope?

- The variables which created outside the function can be accessible within the function.

## Closures

- Accessing the function variables even the function exection is completed or out of scope that is known as closure.

OR

- A clouser is a combination of a function bundled together with reference to its lexical environment.

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

## Strict Mode

- By using strict mode we can maintain secured javascript code which means we can avoid the small mistack which is done by developer.
- To run javascript code in strict mode we need to write "use strict".

```
"use strict";
let ename = "Satish";
let hasDrivingLic= false;
let passTest = true;

if (passTest) {
    hasDrivingLi = true;
}
console.log(hasDrivingLic);

function main(a, b, a) {
    console.log(a, b); // 30 20
}
main(10, 20, 30);
```

## What is this keyword?

- this keyword is a special variable which will be created for every execution context.
- this keyword value is assigned at runtime.
- In global context this refers to window object.
- In regular function call(declaration and expression) this keyword refers to window object in strict mode else it points to undefined.
- Arrow function doesn't have its own this keyword if we use this keyword in arrow functions then it refers to the value of its parent scope this value.

```
"use strict";
let a = this;
console.log(a);

let main = function () {
    console.log(this);
}
main();

console.log(this);
let main = () => {
    console.log(this);
}
```

In method call this keyword points to current object(current object means on which object reference the method is called)

```
let employee = {
    eid: 101,
    ename: "Rahul",
    birthYear: 2000,
    calcAge: function() {
        console.log(this);
        let d1 = new Date();
        let currYear = d1.getFullYear();
        return currYear - this.birthYear;
    }
}
let age = employee.calcAge();
console.log(`Employee Age = ${age}`);
```

```
let employee = {
    eid: 101,
    ename: "Rahul",
    birthYear: 2000,
    calcAge: function() {
        let a = this;
        function calc() {
            console.log(a.bithYear);
        }
        calc();
    }
}
let age = employee.calcAge();
console.log(`Employee Age = ${age}`);
```

```
let employee = {
    eid: 101,
    ename: "Rahul",
    birthYear: 2000,
    calcAge: function() {
        let calc = () => {
            console.log(this.birthYear);
        }
        clac();
    }
}
let age = employee.calcAge();
console.log(`Employee Age = ${age}`);
```

## Arguments Object

- Arguments object is a local variable which is available in all the functions.
- Arguments object contains all the function parameters which are passed at function call.
- Inside argument object the values are stored in index format.

### Note

- Argument object is not an array.
- Argument object will not created in arrow function.
- Arrow function does't have argument object.

```
main();
function main() {
    add(1, 2);
    add(10, 20, 30);
}
function add() {
    let size = arguments.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arguments[i];
    }
    console.log("Sum = " +sum);
}
```

## Rest Parameter

- Rest parameter's makes a function to accept any number of arguments as an array.
- To represent rest parameter we have to use "...varName".
- This parameter are introduced in ES6 version.

```
main();
function main() {
  add(1, 2);
  add(10, 20, 30, 1, 2, 3);
}
function add(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(`Sum = ${sum}`);
}

```

## Overloading

- Creating multiple function with same name but different arguments is known as function overloading.

```
main();
function main() {
    add(1, 2);
}
function add(a, b) {
    console.log(a + b);
}
function add(a, b, c) {
    console.log(a + b + c);
}
```

#### Output

```
NaN // because c is not defined
```

```
let travels_1 = {
    travelsId: "OR101",
    travelsName: "Orange",
    bookings: [],
    book: function (name, seatNo) {
        console.log(`${name} is booked seat in ${this.travelsName} travels with seat number ${seatNo}`);
        let obj = {passenger: `${name}, ${this.travelsId}, ${seatNo}`};

        this.bookings.push(obj);
    }
};
console.log(travels_1.bookings);
travels_1.book("Rajesh", 41);
travels_1.book("Raj", 42);
console.log(travels_1.bookings);
```

- In javascript function's are treated as objects.
- There are 3 methods for function's:

1. f/n.call()
2. f/n.apply()
3. f/n.bind()

## call method

- By using call method we can set this keyword value explicitly.
- By using call method we can call a function by passing owner object as an argument.

```
let travels_1  = {
    travelsId: "OR101",
    travelsName: "Orange",
    bookings: [],
};
let travles_2 = {
    travelsId: "VRL101",
    travelsName: "VRL",
    bookings: []
};
let travels_3  = {
    travelsId: "ICT101",
    travelsName: "Intercity",
    bookings: []
};
let fun = function(name, seatNo) {
    console.log(`${name} is booked seat in ${this.travelsName} travels with seat number ${seatNo}`);

    let obj = {passenger: `${name}, ${this.travelsId}, ${seatNo}`};

    this.bookings.push(obj);
};
fun.call(travels_1, "Rajesh", 1);
fun.call(travels_2, "Rajesh", 10);
fun.call(travels_3, "Satish", 40);
```

## apply method

- appy method is use to set this keyword value explicitly.
- By using appy method we can call a function by passing owner object as an argument.
- apply method is similar to call method but the differnce is the function argument must be passed as an array.

```
let travels_1  = {
    travelsId: "OR101",
    travelsName: "Orange",
    bookings: [],
};
let travles_2 = {
    travelsId: "VRL101",
    travelsName: "VRL",
    bookings: []
};
let travels_3  = {
    travelsId: "ICT101",
    travelsName: "Intercity",
    bookings: []
};
let fun = function(name, seatNo) {
    console.log(`${name} is booked seat in ${this.travelsName} travels with seat number ${seatNo}`);

    let obj = {passenger: `${name}, ${this.travelsId}, ${seatNo}`};

    this.bookings.push(obj);
};
fun.call(travels_1, "Rajesh", 1);
fun.apply(travels_2, ["Raj", 10]);
```

## bind method

- bind method is use to set this keyword value explicity.
- bind method is similar to call and apply method but bind method doesnt execute function immediatley instead of that it returns a copy of that function that function can be called again and again.
- By using bind method we can preset some parameter values.

```
let travels_1  = {
    travelsId: "OR101",
    travelsName: "Orange",
    bookings: [],
};
let travles_2 = {
    travelsId: "VRL101",
    travelsName: "VRL",
    bookings: []
};
let travels_3  = {
    travelsId: "ICT101",
    travelsName: "Intercity",
    bookings: []
};
let fun = function(name, seatNo) {
    console.log(`${name} is booked seat in ${this.travelsName} travels with seat number ${seatNo}`);

    let obj = {passenger: `${name}, ${this.travelsId}, ${seatNo}`};

    this.bookings.push(obj);
};
fun.call(travels_1, "Rajesh", 1);
fun.apply(travels_2, ["Raj", 10]);
// let a = fun.bind(travels_3, "Pranay", 23);
// a();

let a = fun.bind(travels_3, "Pranay");
a(1);
a(2);
a(3);
```

## Hoisting

- Hoisting is a default behaviour or mechanism in javascript which allows some of the variable and function are availble to use before there declaration.

|                      | Hoisted            | Innitial Value | Scope           |
| -------------------- | ------------------ | -------------- | --------------- |
| var                  | yes                | undefined      | functino        |
| let, const           | yes(TDZ)           | uninitalized   | Block           |
| Declaration          | yes                | Acutal F/n     | function sceope |
| Expression/Arrow F/n | Depends On keyword |

## let

- let keyowrd is introduced in ES6 version
- let variables cannot be re-declared, but it can be re-initialized.
- let variables are hoisted, but they will be TDZ.
- let variables are block scoped.

## var

- var keyword is introduced in older version.
- var variables can be re-declared, it can be re-initialized.
- var variables are hoisted and the value is undefined.
- var variables are function scoped.

## const

- const keyword introduced in ES6;
- const variables must be initialized at declaration only.
- const varaiables cannot be re-initialized.
- const varaiables are hoisted, but they will be TDZ.
- const variables are block scoped.
