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

- Null is an empty value or internal absence of object value.

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
- Triple equal to operator will check the values as well as datatype.
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

## Q. Write a program to check weather is a perfect Number or not?

```
let sum = 0;
let sum = 0;
let n = 28;
for (let i = 1; i < n; i++) {
  if (n % i == 0) {
    sum += i;
  }
}
if (sum == n) {
  console.log(n + " is a perfect number");
} else {
  console.log(n + " is not a perfect number");
}
```

#### Output

```
28 is a perfect number
```

## Q. Write a program to print first 10 fibonacci Number?

```
let a = 0;
let b = 1;

for (let i = 0; i < 10; i++) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
}

```

#### Output

```
0
1
1
2
3
5
8
13
21
34
```

## Q. Write a program to print fibonacci series within a range?

```
let n = 50;
let start = 5;
let n1 = 0;
let n2 = 1;

while (true) {
  let sum = n1 + n2;
  n1 = n2;
  n2 = sum;
  if (sum >= n) break;
  if (sum >= start) {
    console.log(sum);
  }
}

```

#### Output

```
5
8
13
21
34
```

## Q. Write a program to check given number is belongs to fibonacci series or not?

```
function isFibonacci(n) {
  let a = 0,
    b = 1;
  while (b < n) {
    let temp = a;
    a = b;
    b = temp + b;
  }
  return b === n;
}

let num = 13;
if (isFibonacci(num)) {
  console.log(`${num} is a Fibonacci number`);
} else {
  console.log(`${num} is not a Fibonacci number`);
}

```

#### Output

```
13 is a Fibonacci number
```

## Q. Write a program to print 5 alternate fibonacci number?

```
function main(n) {
  let a = 0;
  let b = 1;
  for (let i = 1; i <= n * 2; i++) {
    let c = a + b;
    a = b;
    b = c;
    if (i % 2 == 0) {
      continue;
    } else {
      console.log(b);
    }
  }
}
main(5);
```

#### Output

```
1
3
8
21
55
```

## Q. Write a program for sum of digit in a given number?

```
function sum(n) {
  let sum = 0;
  while (n != 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

let num = 12345;
console.log("Sum of digits in " + num + " is " + sum(num));
```

#### Output

```
Sum of digits in 12345 is 15
```

## Q. Write a program to count number of digit in a given number?

```
function count(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let num = 145;
console.log(`Number of digits in ${num} is ${count(num)}`);
```

#### Output

```
Number of digits in 145 is 3
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

- Object is a physical entity or a real world entity.
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

1. dot notation
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
- In regular function call(declaration and expression) this keyword refers to undefined in strict mode else it points to window object.
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

- apply method is use to set this keyword value explicitly.
- By using apply method we can call a function by passing owner object as an argument.
- apply method is similar to call method but the difference is the function argument must be passed as an array.

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
fun.apply(travles_2, ["Raj", 10]);
// let a = fun.bind(travels_3, "Pranay", 23);
// a();

let a = fun.bind(travels_3, "Pranay");
a(1);
a(2);
a(3);
```

## Hoisting

- Hoisting is a default behaviour or mechanism in javascript which allows some of the variable and function are available to use before there declaration.

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
- const variables must be initialized at the time of declaration.
- const varaiables cannot be re-initialized.
- const varaiables are hoisted, but they will be TDZ.
- const variables are block scoped.

## What is Temporal Dead Zone?

- It is a time gap between where let and const variable are hoisted to its initialization.

```
console.log(a);
console.log("Hello");
console.log("Hi");
let a = 10;
```

### Pure Function

- A Function which produces always same output for same input is known as pure function.
- Pure Function doesn't modify the state(data).
- Pure Function doesn't have any side effects which means pure function doesn't modify external data.

```
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(3, 5)); // 8
console.log(add(3, 5)); // 8
```

### Impure Function

- A function which produces different output for same inputs is known as impure function.
- Impure function modify the data.
- Impure function has side effects which means impure function modifty external data.

```
let sum = 0;
function add(n1) {
    sum += n1;
    return sum;
}
console.log(add(3)); // 3
console.log(add(3)); // 6
```

## Default Parameter / Optional Parameter

- Default parameter is introduced in ES6 version.
- In javascript we can call a parameters function with less number of argument.
- The default parameter's allows us to provide inital values or function parameters if no arguments are passed to functional parameter's when it is called.

```
main();
function main() {
  let output_1 = add();
  console.log("Output_1 = " + output_1);

  let output_2 = add(1);
  console.log("Output_2 = " + output_2);

  let output_3 = add(1, 2);
  console.log("Output_3 = " + output_3);

  let output_4 = add(1, 2, 3);
  console.log("Output_4 = " + output_4);

  function add(a = 0, b = 0, c = 0) {
    return a + b + c;
  }
}
```

#### Output

```
Output_1 = 0
Output_2 = 1
Output_3 = 3
Output_4 = 6
```

## Recursion

- A function calling it self is known as recursion.

```
main();
funciton main() {
    m1();
}
function m1() {
    console.log("m1 is executing!!!");
    m1(); // Recursive Call
}
```

```
main();
function main() {
    console.log("main starts");
    m1(1);
    console.log("main ends");
}
function m1(i) {
    console.log(i);
    if (i == 3) return;
    m1 (i + 1);
    console.log(i);
}
```

#### Output

```
main starts
1
2
3
2
1
main ends
```

```
main();
function main() {
  console.log("main starts");
  m1(1);
  console.log("main ends");
}
function m1(i) {
  console.log(i);
  if (i == 3) return;
  m1(i + 1);
  m1(i + 1);
  console.log(i);
}
```

#### Output

```
main starts
1
2
3
3
2
2
3
3
2
1
main ends
```

## Write a program to print 1 to 10 number without using loop?

```
main();
function main() {
  m1(1);
}
function m1(i) {
  console.log(i);
  if (i == 10) return;
  m1(i + 1);
}
```

#### Output

```
1
2
3
4
5
6
7
8
9
10
```

## Factorial using recursion?

```
fact();
function fact(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * fact(n - 1);
}

```

## Write a program sum of 1 to 10 number using recursion?

```
function rSum(n) {
  if (n <= 1) return n;
  return n + rSum(n - 1);
}

let sum = rSum(10);
console.log(sum); // Output: 55

```

## Write a program to print first 10 fibonnaci number using recursion?

```
function fact(n) {
  if (n <= 1) return n;
  return fact(n - 1) + fact(n - 2);
}

for (let i = 0; i < 10; i++) {
  console.log(fact(i));
}
```

## Document Object Model (DOM)

Document => File\
Object => Tag\
Model => Structure

- DOM is a structural representation of HTML elements as an object.
- When the web pages is load to browser then the browser will create object for every HTML element.
- Once the dom tree is created we can access the element from dom tree by using javascript and we can manupulate it.
- Manupulation are we can create HTML elments dynamically.
- We can addd css style dynamically.
- We can change the content of HTML elements dynamically.
- We can set and remove attribute dynamically.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Header One</h1>
    <p>
      Shop In Flipkart
      <a href="https://www.flipkart.com">Click Here</a>
    </p>
  </body>
</html>
```

![](https://i.ibb.co/1mzwqLT/2024-07-11-17-20-06-AI-Eraser.png)

![](https://i.ibb.co/N2x09Ff/2024-07-11-17-20-34-AI-Eraser.png)

```
<html>
  <head>
    Welcome to js
  </head>
  <body></body>
</html>
```

![](https://i.ibb.co/F4bX3bW/2024-07-11-17-20-48-AI-Eraser.png)

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <h2>Header Two</h2>
    <div id="brand-list">
      <h1>Automobile Brands</h1>
      <ul>
        <li>Lamborghini</li>
        <li>Buggatti</li>
        <li>Ferrari</li>
        <li>Ford</li>
      </ul>
    </div>
    <script>
      console.log(document);
      console.log(window.document);
    </script>
  </body>
</html>

```

- Document is a object which is created when the HTML file is loaded to browser.
- Document is a property of window object.

### Accessing the element from DOM tree

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <h2>Header Two</h2>
    <div id="brand-list">
      <h1>Automobile Brands</h1>
      <ul>
        <li>Lamborghini</li>
        <li>Buggatti</li>
        <li>Ferrari</li>
        <li>Ford</li>
      </ul>
    </div>
    <a href="">1</a>
    <a href="">2</a>
    <script>
      console.log(document.title);
      console.log(document.head);
      console.log(document.body);
      console.log(document.links);
      console.log(document.body.h1);
    </script>
  </body>
</html>
```

- h1 is not a property of body object.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 class="one">Header</h1>
    <h2 class="two">Header Two</h2>
    <div id="brand-list">
      <h1>Automobile Brands</h1>
      <ul>
        <li>Lamborghini</li>
        <li class="s">Buggatti</li>
        <li>Ferrari</li>
        <li class="s">Ford</li>
      </ul>
    </div>
    <a href="">1</a>
    <a href="">2</a>
    <script>
      let h1Tag = document.getElementById("one");
      console.log(h1Tag);

      let tagSelector = document.getElementsByTagName("li");
      console.log(tagSelector);

      let classSelector = document.getElementsByClassName("s");
      console.log(classSelector);
    </script>
  </body>
</html>
```

- If the id doesnt match the tag name it will return null.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 class="one">Header</h1>
    <h2 class="two">Header Two</h2>
    <div id="brand-list">
      <h1>Automobile Brands</h1>
      <ul>
        <li>Lamborghini</li>
        <li class="s">Buggatti</li>
        <li>Ferrari</li>
        <li class="s">Ford</li>
      </ul>
    </div>
    <a href="">1</a>
    <a href="">2</a>
    <script>
      let anySelector_1 = document.querySelector(".j");
      console.log(anySelector_1);

      let anySelector_2 = document.querySelectorAll(".j");
      console.log(anySelector_2);
    </script>
  </body>
</html>
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="one">Welcome to DOM</h1>
    <h2 id="two"></h2>
    <script>
      let h1Tag = document.getElementById("one");
      let text_1 = h1Tag.textContent;
      console.log(text_1);

      let h2Tag = document.querySelector("#two");
      h2Tag.textContent = "DammnIt";
    </script>
  </body>
</html>

```

```
<html>
<head>
</head>
    <body>
        <div>
            <h1 id="display-text">Print Message</h1>
            <br>
            <button onclick="printMsg();">Click Here</button>
        </div>
    </body>
    <script>
    functiona printMsg() {
        let displayTag = document.getElementById('display-text)
        dispayTag.textContent = "Good Evening";
        dispayTag.style.color = "blud";
    }
    </script>
</html>
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      div {
        background-color: yellow;
      }
      h1 {
        color: red;
        text-align: center;
        margin-bottom: 20px;
      }
      .button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      button {
        padding: 10px 15px;
      }
    </style>
  </head>
  <body>
    <div>
      <h1 id="h1">Print Message</h1>
      <div class="button">
        <button id="hi" onclick="hi();">Hi</button>
        <button id="hello" onclick="hello();">Hello</button>
        <button id="bye" onclick="bye();">Bye</button>
      </div>
    </div>
    <script>
      function hi() {
        let h1Tag = document.getElementById("h1");
        h1Tag.textContent = "hi";
      }
      function hello() {
        let h1Tag = document.getElementById("h1");
        h1Tag.textContent = "hello";
      }
      function bye() {
        let h1Tag = document.getElementById("h1");
        h1Tag.textContent = "bye";
      }
    </script>
  </body>
</html>

```

![](https://i.ibb.co/NT5jDcs/2024-07-12-17-01-22-AI-Eraser.png)
![](https://i.ibb.co/4Wsh2by/2024-07-12-17-03-25-AI-Eraser.png)

### Javascript Event

- Event is an action which we perform on browser.

### Event Handling

- We can handle event in 3 ways:

1. Using Inline Event Handling.
2. Using Event Properties.
3. Using addEventListener() method.
4. Select the tag on which you need to apply the event.

```
let tag = document.getElementById(" ");

tag.onClick = function () {

}
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      div {
        background: yellow;
        text-align: center;
      }
      h1 {
        color: red;
      }
      button {
        padding: 10px 15px;
      }
    </style>
  </head>
  <body>
    <div>
      <h1 id="display-text">Print Message</h1>
      <br />
      <button onclick="hiMsg();">Hi</button>
      <button id="hello-btn">Hello</button>
      <button id="bye-btn">Bye</button>
    </div>
    <script>
      let displayTag = document.getElementById("display-text");

      function hiMsg() {
        displayTag.textContent = "Hi";
      }

      let helloBtn = document.getElementById("hello-btn");
      helloBtn.onclick = function () {
        displayTag.textContent = "Hello";
      };

      let byeBtn = document.getElementById("bye-btn");
      byeBtn.addEventListener(
        "click",
        function () {
          displayTag.textContent = "Bye";
        },
        false
      );
    </script>
  </body>
</html>

```

## What is event handler?

- Event handler is a function which will get called when the event is perform on the browser.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="display">
      <br />
      <p>Lorem, ipsum. <span style="display: none">dolor sit</span> amet.</p>
    </div>
    <script>
      let displayTag = document.querySelector("#display");
      console.log(displayTag.textContent);
      console.log(displayTag.innerText);
      console.log(displayTag.innerHTML);
    </script>
  </body>
</html>
```

#### Output

```


      Lorem, ipsum. dolor sit amet.
    index.html



Lorem, ipsum. amet. index.html

      <br>
      <p>Lorem, ipsum. <span style="display: none">dolor sit</span> amet.</p>
```

- Text Content Property will consider the spaces.
- Inner text property will not consider the spaces.
- Text Content property will not consider the style.
- Inner text property will consider the style.
- Inner html property returns the html elements which are present inside selected tag.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="display"></div>
    <script>
      let displayTag = document.querySelector("#display");
      let htmlCode = "<h1>Header One</h1>";
      console.log(htmlCode, typeof htmlCode);
      displayTag.textContent = htmlCode;
      displayTag.innerText = htmlCode;
      displayTag.innerHTML = htmlCode;
    </script>
  </body>
</html>
```

## Web Storage

- Web Storage is an API which is provide by browser.
- By using web storage we can store some application data inside browser.
- There are 2 types of storages:

1. local Storage
2. session Storage

- Local storage and session storage are the properties of window object\
  ![](https://i.ibb.co/hd7NYyV/2024-07-15-17-16-55-AI-Eraser.png)

```
<script>
  let empName = "Rock";
  localStorage.setItem("ename", empName);
  let getData = localStorage.getItem("ename");
  console.log("Get Data = " + getData);
  localStorage.removeItem("ename");
</script>
```

```
setItem(key, value);  => Create/update
getItem(key);         => Read
removeItem(key);      => Delete
```

| localStorage                                     | sessionStorage                                     |
| ------------------------------------------------ | -------------------------------------------------- |
| localStorage is webpage specific.                | sessionStorage is tab specific.                    |
| Using localstorage we can store data permanently | Using session storage we can store data temporarly |

## Attribute Methods

### object.hasAttribute() => true/false

- This method is use to check the existance of attribute.
- hasAttribute method returns the boolean value.

### object.getAttribute() => Value of given Attribute

- It is use to get the value of attributes.

### object.setAttribute() => New Value

- It is use to set new value to attribute.

### object.removeAttribute()

- It is use to remove the attribute from elements.

### object.attributes

- Attributes property retruns the collection of attributes.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>New Tab</title>
    <style>
      #one {
        color: blue;
      }
      .abc {
        color: red;
      }
      #two {
        color: green;
      }
    </style>
  </head>
  <body>
    <div align="center" class="abc" id="one">
      <p>Attribute Methods</p>
    </div>
    <script>
      let divTag = document.querySelector("div");
      console.log(divTag.hasAttribute("align"));
      console.log(divTag.getAttribute("class"));
      divTag.setAttribute("id", "two");
      divTag.removeAttribute("class");
    </script>
  </body>
</html>

```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>New Tab</title>
    <style>
      .one {
        color: blue;
      }
      .two {
        background: yellow;
      }
      .three {
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="one two">
      <p>Attribute Methods</p>
    </div>
    <script>
      let divTag = document.querySelector("div");
      console.log(divTag.getAttribute("class"));
      //   divTag.setAttribute("class", "three");❌
      divTag.classList.add("three");
      divTag.classList.remove("two");
    </script>
  </body>
</html>

```

## Arrays

- Javascript arrays are treated as object which is use to store collection of elements.
- Javascript arrays are heterogeneous which means we can store any type of value.
- In javascript array can be created in 2 ways:

1. Using bracket [ ]
2. Using array constructor:- new Array()

- In javascript arrays are having dynamic size which can be increase or decrease it is not fixed.

* Arrays are store in heap memory.
* Arrays are reference type.

```
main();
function main() {
  let num_1 = [1, 2, 3, 4];
  console.log(num_1);

  let num_2 = new Array(10, 20, 30, 40, 50);
  console.log(num_2);
}

```

```
main();
function main() {
  let num_1 = [1, 2, 3, 4];
  console.log(num_1);
  console.log(`size = ${num_1.length}`);

  num_1.length = 2;
  console.log(num_1);

  num_1.length = 4;
  console.log(num_1);
}

```

#### Output

```
[ 1, 2, 3, 4 ]
size = 4
[ 1, 2 ]
[ 1, 2, <2 empty items> ]
```

```
main();
function main() {
  let arr = new Array();
  arr[13] = 10;
  console.log(arr[0]);
  console.log(arr.length);
}

```

#### Output

```
undefined
14
```

```
main();
function main() {
  let arr = new Array();
  arr[0] = 10;
  arr[1] = 20;
  arr[2] = 30;
  arr[3] = 40;
  arr[4] = 50;

  console.log(arr);
  console.log("----Normal For Loop----");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  console.log("----For In Loop----");
  for (let i in arr) {
    console.log(arr[i]);
  }

  console.log("----For Of Loop----");
  for (let i of arr) {
    console.log(i);
  }
}

```

#### Output

```
[ 10, 20, 30, 40, 50 ]
----Normal For Loop----
10
20
30
40
50
----For In Loop----
10
20
30
40
50
----For Of Loop----
10
20
30
40
50
```

```
main();
function main() {
  let arr_1 = [10, 20, 30, 40, 50];
  let arr_2;
  arr_2 = arr_1;
  arr_2[2] = 200;

  console.log(arr_1[2], arr_2[2]);
}
```

#### Output

```
200 200
```

```
main();
function main() {
  let a = m1();
  console.log(a);
  for (let n1 of a) {
    console.log(n1);
  }
}
function m1() {
  console.log("m1 starts");
  console.log("m1 ends");
  return [1, 2, 3, 4, 5];
}

```

#### Output

```
m1 starts
m1 ends
[ 1, 2, 3, 4, 5 ]
1
2
3
4
5
```

```
main();
function main() {
  let a = [10, 20, 30, 40];
  m1(a);
  for (let val of a) {
    console.log(val);
  }
}
function m1(a) {
  console.log("m1 starts");
  a[1] = 100;
  for (let val of a) {
    console.log(val);
  }
  console.log("m1 ends");
}

```

#### Output

```
m1 starts
10
100
30
40
m1 ends
10
100
30
40
```

## De-Structuring(ES6)

- The way of unpacking the values from an object or an array into seperate variables is known as de-structuring.
- De-structuring is introduced in ES 6 version.
- We can perform object de-structuring and array de-structuring.
- Object de-structuring must be done with curly bracket "{}".
- Array de-structruing must be done with square bracket "[]".
- While performing object de-structring the variable name should be same as object keys.
- While perfroming array de-structring the variable name can be anything.

```
let student = {
  stuId: 101,
  sname: "Rajesh",
  gender: "Male",
  address: {
    street: "Aswath nagar",
    landmark: "Beside lakshmi Ladies pg",
    pincode: 560037,
    city: "Bangalore",
    state: "Karnataka",
  },
};
let scity = student.address.city;
let sstate = student.address.state;
console.log(`Student City = ${scity}, Student State = ${sstate}`);

// Object DeStructuring

let { city, state } = student.address;
console.log(`Student City = ${city}, Student State = ${state}`);

let arr = [10, 20, 30, 40, 50];
let val_1 = arr[0];
let val_2 = arr[1];
console.log(`val_1 = ${val_1}, val_2 = ${val_2}`);

// Array Destructuring
let [n1, n2] = arr;
console.log(`val_1 = ${n1}, val_2 = ${n2}`);

```

#### Output

```
Student City = Bangalore, Student State = Karnataka
Student City = Bangalore, Student State = Karnataka
val_1 = 10, val_2 = 20
val_1 = 10, val_2 = 20
```

## Module

- Module are use to write huge amount of javascript code into seperate files.
- Modules makes code easy to read and maintain.
- Modules are depends on the type attributes

```
<script type=module></script>
```

- A variable are function can be export it in 2 ways:

1. default export
2. named export

- One javascript file must have only one default export.
- A javascript file can have multiple named export.
- While importing named export a variable or function must be constructed within curly brackets.
- While importing default export we can use without curly bracket.

### Note

Javascript modules works with only with server.

### index.js

```
import add from "./one.js";
import { sub, mul } from "./two.js";

let output_1 = add();
console.log(output_1);

let output_2 = sub();
console.log(output_2);

let output_3 = mul();
console.log(output_3);
```

### one.js

```
function add() {
  let a = 1;
  let b = 2;
  let res = a + b;
  return res;
}
export default add;
```

### two.js

```
export function sub() {
  let a = 10;
  let b = 2;
  let res = a - b;
  return res;
}

export function mul() {
  let a = 10;
  let b = 2;
  let res = a * b;
  return res;
}

// export {sub, mul};
```

#### Output

```
3
8
20
```

## Array Methods

1. Push
2. Pop
3. Shift
4. Unshift
5. Slice
6. Splice
7. ForEach
8. Map
9. Filter
10. find
11. includes
12. indexOf
13. lastIndexOf
14. concat
15. toString
16. join

```
arr.push(); // add a new Element to existing array in the end
arr.pop(); // remove an element from existing array in the end and return it
arr.unshift(); // add a new Element to existing array in the begining
arr.shift(); // removes the first element from an existing array and returns it.
```

## array.slice()

- Slice method is use to extract the part of an array.

#### Syntax

```
arr.slice(startIndex, endIndex);
```

- Slice method will not change original array.

```
main();
function main() {
  let arr = [1, 2, 3, 4, 5, 6];
  console.log(arr);
  let slicedArr_1 = arr.slice(1, 4);
  console.log(slicedArr_1);
  console.log(arr);
}
```

#### Output

```
[ 1, 2, 3, 4, 5, 6 ]
[ 2, 3, 4 ]
[ 1, 2, 3, 4, 5, 6 ]
```

```
main();
function main() {
  let arr = [1, 2, 3, 4, 5, 6];
  console.log(arr);
  let slicedArr_1 = arr.slice(-4, -2);
  console.log(slicedArr_1);
  console.log(arr);
}
```

#### Output

```
[ 1, 2, 3, 4, 5, 6 ]
[ 3, 4 ]
[ 1, 2, 3, 4, 5, 6 ]
```

```
arr[length - 1];
arr.slice(-1);
```

## Q. Write a program to print sum of number in a given array?

```
let arr = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum); // 150
```

## Q. Write a program to add sum of even number in a given array?

```
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
}

let arr = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(sum(arr)); // 20
```

## Q. Find greatest elment in a given array?

```
let arr = [10, 20, 30, 40, 50, 60];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max); // 60
```

## Shallow Copy

It is use to store the reference of the array.

```
let arr = [1, 2, 3, 4];
let num = arr.slice();
num[2] = 100;
console.log(arr[2]); // 3
console.log(num[2]); // 100
```

## array.splice()

- Splice method is use to extract the part of an array.

```
arr.splice(index, no. of elements to be removed, new Elements);
```

- Splice method effects or changes the orignial array.

```
main();
function main() {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  let splicedArr_1 = arr.splice(2);
  console.log(splicedArr_1);
  console.log(arr);
}
// [3, 4, 5, 6, 7]
// [(1, 2)]
```

## array.forEach()

- Foreach method is a higher order function.
- Foreach method is use to loop an array and perfrom some operation on array elements.

* Foreach method will return undefined.

```
arr.forEach(arg);
// arg => function

function (val, index, array) {

}
```

```
main();
function main() {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  arr.forEach(function (val, index, array) {
    console.log(val, index, array);
  });
}

```

#### Output

```
1 0 [1, 2, 3, 4, 5, 6, 7]
2 1 [1, 2, 3, 4, 5, 6, 7]
3 2 [1, 2, 3, 4, 5, 6, 7]
4 3 [1, 2, 3, 4, 5, 6, 7]
5 4 [1, 2, 3, 4, 5, 6, 7]
6 5 [1, 2, 3, 4, 5, 6, 7]
7 6 [1, 2, 3, 4, 5, 6, 7]
```

```
const coding = ["js", "ruby", "java", "python", "cpp"];
const value = coding.forEach((item) => {
  return item;
});
console.log(value);
```

#### Output

```
js
ruby
java
python
cpp
undefined
```

```
let salaries = [20000, 30000, 40000];
salaries.forEach(function (sal, i) {
  let incSal = Math.trunc(sal / 10);
  salaries[i] = sal + incSal;
});
console.log(salaries);

```

## array.map()

- Array map method is a higher order function which takes a call back function with three parameter element, index and array reference where index and array reference are optional.
- Map method is use to iterate array from starting element to the last element and returns a new updated array according to the passing expression.

- Map method returns a new array with the same length of original array.

#### Syntax

```
let result = arr.map((element, index, arrayRef) => {
  return expression;
})
```

```
let num = [1, 2, 3, 4];
let result = num.map((element, i, arrRef) => {
  console.log(element, i, arrRef);
  return element * 10;
});
console.log(num); // [ 1, 2, 3, 4 ]
console.log(result); // [ 10, 20, 30, 40 ]
```

```
let students = [
  {
    name: "A",
    age: 20,
    address: "Bnglr",
  },
  {
    name: "B",
    age: 18,
    address: "Munbai",
  },
  {
    name: "C",
    age: 18,
    address: "Delhi",
  },
];
let newStudents = students.map((element) => {
  if (element.name == "B") {
    element.address = "Pune";
  }
  return element;
});
console.log(newStudents);
```

#### Output

```
[
  { name: 'A', age: 20, address: 'Bnglr' },
  { name: 'B', age: 18, address: 'Pune' },
  { name: 'C', age: 18, address: 'Delhi' }
]
```

```
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumber = myNumbers.map((num) => num + 10);
console.log(newNumber);
```

#### Output

```
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
```

## array.filter()

- Array filter method is a higher order function which takes a call back function with three parameter element, index and array reference where index and array reference are optional.
- Filter method iterates the array from starting element to end element and returns a new filtered array according to the given condition.
- Filter method can reduce the array size.
- Filter method returns a new array which is the sub array of original array.

#### Syntax

```
let result = arr.filter((element, index, arrayRef) => {
  return conction;
})
```

```
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 4);
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]
```

```
let arr = [1, 2, 3, 4];
let evenArr = arr.filter((element, index, arrayRef) => {
  if (element % 2 == 0) {
    return element;
  }
});
console.log(evenArr); // [ 2, 4 ]
```

```
let arr = [1, 2, 3, 4];
let oddArr = arr.filter((e) => e % 2 != 0);
console.log(oddArr); // [ 1, 3 ]
```

```
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
console.log(newNums);
```

#### Output

```
[ 5, 6, 7, 8, 9, 10 ]
```

```
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter(
  (bk) => bk.publish > 1995 && bk.genre === "History"
);
console.log(userBooks);

```

#### Output

```
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
```

## array.find()

- Array find method is a higher order function which takes a call back function with three parameter element, index and array reference where index and array reference are optional.
- Find method returns the first match element according to the passing condition, if no element match the condition it returns undefined.

#### Syntax

```
let result = arr.find((element, index, arrayRef) => {
  return condition;
});
```

```
let arr = [1, 2, 3, 4, 5];
let result = arr.find((element, i) => {
  console.log(element); // 1 2 3 4
  return element > 3;
});
console.log(result); // 4
```

## array.includes()

- Include method except 2 arguments search element and start index where startIndex is the optional.
- It is use to search an element inside the array and returns a boolean result according to the presence of the element.

#### Syntax

```
arr.includes(searchElement, startIndex);
```

```
const fruits = ["apple", "mango", "kiwi", "grapes"];
let result = fruits.includes("kiwi");
console.log(result); // true
let result1 = fruits.includes("orange");
console.log(result1); // false

let result2 = fruits.includes("mange", 2); // false
```

## array.indexOf()

- IndexOf method is use to search the index number of even element from the array.
- IndexOf method based on forward searching that means it search from the element from 0th index to the last index.
- If there is no element presented in the array it returns -1 as a result.

#### Syntax

```
let result = arr.indexOf(searchElement, StartIndex);
```

```
const num = [10, 20, 30, 40];
let result = num.indexOf(20);
console.log(result); // 1
```

```
const num = [10, 20, 30, 40, 20];
let result = num.indexOf(20);
console.log(result); // 1

let result1 = num.indexOf(50);
console.log(result1); // -1

let result2 = num.indexOf(20, 2);
console.log(result2); // 4
```

## array.lastIndexOf()

- LastIndexOf method return the index number of last match element of the array.

- If there is no matched element presented it will return -1.

- It is based on backward search.

#### Syntax

```
let result = arr.lastIndexOf(searchElement, StartIndex);
```

```
const num = [10, 20, 30, 40, 20];
let reuslt = num.lastIndexOf(20);
console.log(reuslt); // 4

let result1 = num.lastIndexOf(50);
console.log(result1); // -1

let result2 = num.lastIndexOf(20, 2);
console.log(result2); // 1
```

## array.concat()

- Concat use to merge multiple array into a single array.

```
let arr1 = [1, 2, 3, 4];
let arr2 = [6, 7, 8, 9];
let arr3 = ["a", "b", "c"];
let result = arr1.concat(arr2, arr3);
console.log(result); // [1, 2, 3, 4, 6, 7, 8, 9, 'a', 'b', 'c']
console.log(arr1); // [ 1, 2, 3, 4 ]
```

## array.toString()

- toString method converts an array to a string.

```
let arr = [1, 2, 3, 4, 5];
let result = arr.toString();
console.log(result, typeof result); // 1,2,3,4,5 string
```

## array.join()

- Join method use to convert an array to a string.
- Join method takes an argument which is the seperator between 2 elements.

#### Syntax

```
let result = arr.join(seperator)
```

```
let arr = [1, 2, 3, 4, 5];
let reuslt = arr.join("k");
console.log(reuslt); // 1k2k3k4k5
```

## Q. difference between foreach and map in js?

The main differences between forEach and map in JavaScript are:

| forEach                                                                                                                                                              | map                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| forEach is an array method used to iterate over each element of an array and perform a function on each element.                                                     | map is also an array method used to iterate over each element of an array and create a new array from the results of applying a function to each element. |
| It executes a provided function once for each array element, but it doesn't return a new array.                                                                      | It returns a new array populated with the results of calling a provided function on every element in the calling array.                                   |
| forEach is typically used when you want to perform side effects (like logging, modifying other variables, or interacting with the DOM) for each element in an array. | map is used when you want to transform elements in an array in a structured and functional way, creating a new array with modified or mapped values.      |

- forEach does not return anything (returns undefined), whereas map returns a new array created by applying the provided function to each element of the original array.
- forEach operates on each element independently, allowing you to perform operations but without producing a new array. map, on the other hand, applies a transformation function to each element and collects the results into a new array.

## Spread Operator

- Spread Operator is introduced in ES6 version.
- Spread Operator is use to spread array elements as a functional
  arguments.
- Using spread operator we can merge object properties.

```
...variableName
```

```
let val = Math.max(21, 1, 24, 3, 7, 9); // 24
let maxVa = Math.max(arr); // Nan
let val_2 = Math.max(...arr); // 24
```

```
let arr = [1, 2, 3, 4, 5, 6, 7];
let maxValue = Math.max(...arr);
console.log(maxValue); // 7
```

#### Deep Copy

```
let arr_1 = arr;
let_1 [2] = "Rajhesh"
let arr_2 = [...arr];
```

```
let moreLays = {
  id: 1,
  name: "Lays",
  flavour: "Salt",
  price: 5
};

let dmartLays = {
  id: 1,
  name: "Lays",
  flavour: "Salt",
  price: 5
};❌

let dmartLays = {...moreLays, price: 4};✅
```

## Q. Write a program to find second highest in an array?

```
let numbers = [7, 11, 69, 101, 108, 102, 102, 108];

let max = 0;
let secondmax = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    secondmax = max;
    max = numbers[i];
  } else if (numbers[i] > secondmax && numbers[i] != max) {
    secondmax = numbers[i];
  }
}

console.log(secondmax);
```

## Q. Write a program to check the element is present in the array or not?

```
let numbers = [7, 11, 69, 101, 108, 102, 102, 108];
let x = 102;
let flag = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == x) {
    flag = 1;
    break;
  }
}

if (flag == 1) {
  console.log("Element found");
} else {
  console.log("Element not found");
}
```

```
let numbers = [10, 20, 30, 40, 50];
let x = 102;
let flag = 0;

let low = 0;
let high = numbers.length - 1;

while (low <= high) {
  let mid = Math.trunc((low + high) / 2);
  if (numbers[mid] == x) {
    flag = 1;
    break;
  } else if (numbers[mid] < x) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

if (flag == 1) {
  console.log("Element found");
} else {
  console.log("Element not found");
}
```

## Storing Non-primitive Data type in localstorage

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      let emp_1 = { id: 101, name: "Satish" };
      let emp_2 = { id: 102, name: "Rajesh" };
      let emps = [emp_1, emp_2];
      localStorage.setItem("employees", JSON.stringify(emps));
      let getData = JSON.parse(localStorage.getItem("employees"));
      console.log(getData, typeof getData);
    </script>
  </head>
  <body>
    <h1>JS Storage</h1>
  </body>
</html>
```

## array.reduce()

- reduce an array element into single value.

#### Syntax

```
arr.reduce(callback function, Initial value of accumulator);
```

```
arr.reduce(function(acc, val, i, arr) {
  return value;
}, 0);
```

## Class (ES-6)

- Class is a blueprint of objects.
- Class in javascript used as a template to create multiple objects with similar properties and methods.

#### Syntax

```
class className {
  constructor() { // a javascript class can only have one constructor function

  }
}
```

```
// class
class Animal {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  // method
  printName() {
    console.log(this.name);
  }
}
const animal1 = new Animal("dog", "5", "black");
console.log(animal1);
animal1.printName();
const animal2 = new Animal("cat", "2", "orange");
console.log(animal2);
animal2.printName();
```

#### Output

```
Animal { name: 'dog', age: '5', color: 'black' }
dog
Animal { name: 'cat', age: '2', color: 'orange' }
cat
```

## Inheritance

- Inherit the property and method from parent classes inside an child class.

* For Inheritance we are using extends keyword and super method.

#### Syntax

```
class Child extends Parent {
  constructor() {
    super();
  }
}
```

```
// class
class Animal {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  // method
  printName() {
    console.log(this.name);
  }
}
// child Class
class Dog extends Animal {
  constructor(name, age, color, breed) {
    super(name, age, color);
    this.breed = breed;
  }
  // methods
  printBreed() {
    console.log(`${this.name} is a ${this.breed}`);
  }
}
const dog1 = new Dog("tom", "5yrs", "gray", "Labra");
console.log(dog1);
dog1.printName();
dog1.printBreed();
```

#### Output

```
Dog { name: 'tom', age: '5yrs', color: 'gray', breed: 'Labra' }
tom
tom is a Labra
```

## Timer Function

- There are 2 timer function:

1. setTimeout
2. setInterval

### setTimeout

- setTimeout is a higher order function which is use to execute a callback function for only once after specified time interval.

#### Syntax

```
setTimeout(arg1, arg2);
arg1 => function
arg2 => time in ms
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      setTimeout(function () {
        console.log("Its working");
      }, 2000);
    </script>
  </head>
  <body>
    JS Timer Function
  </body>
</html>

```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      console.log("Go To Your College And Apply For Degree Certificates!!!");
      let student = ["Satish", "B.Tech"];
      setTimeout(
        function (name, deg) {
          console.log(
            `Hi, ${name} You ${deg} degree cerfificates has been created Successfully`
          );
        },
        2000,
        ...student
      );
      console.log("Your Degree Certificates Are Creating!!!");
    </script>
  </head>
  <body>
    JS Timer Function
  </body>
</html>
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      let interval = setTimeout(function () {
        console.log("Its working");
      }, 2000);

      clearTimeout(interval);
    </script>
  </head>
  <body>
    JS Timer Function
  </body>
</html>
```

### setInterval

- setInterval is a higher order function which is use to execute a callback function again and again for specified time interval.

#### Syntax

```
setInterval(arg1, arg2);
arg1 => function
arg2 => time in ms
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      let count = 0;
      let interval = setInterval(function () {
        count++;
        console.log(count);
      }, 1000);
      clearInterval(interval);
    </script>
  </head>
  <body>
    <h1>JS Timer Function</h1>
  </body>
</html>
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      let count = 0;
      let interval = setInterval(function () {
        count++;
        console.log(count);
      }, 1000);
      setTimeout(function () {
        clearInterval(interval);
      }, 5000);
    </script>
  </head>
  <body>
    <h1>JS Timer Function</h1>
  </body>
</html>
```

## Asynchronous

- By default javascript is a synchronous and single threaded programming language (synchronous means line by line code execution. Single threaded means performing one task at a time because of javascript single callstack architecture engine)
- But we can make javascript asynchronous by three ways:

1. using callback
2. using promises
3. using async and await

### Using Callbacks

- Callbacks are use to handle asynchronous code for example timer function, ajax request, etc.

#### Example

```
<!DOCTYPE html>
<html lang="en">
  <body>
    <script>
      // callbacks
      console.log("start");
      setTimeout(() => {
        console.log("hi1");
      }, 100);
      setTimeout(() => {
        console.log("hi2");
      }, 0);
      console.log("end");
    </script>
  </body>
</html>
```

#### Output

```
start
end
hi2
hi1
```

## Callback Hell

- Callback hell is a situation where multiple callback are nested on each other to create a pyramid structure of callback, this type of code can reduce the readability and maintainablity of the code.
- Some times it can result unexpected output as each of the callback are depends on the previous one result.
- To prevent callback hell we are using promises or async and await to handle asynchronous code more frequently.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      setTimeout(() => {
        console.log("1st timeout");
        setTimeout(() => {
          console.log("2nd timeout");
          setTimeout(() => {
            console.log("last timeout");
          }, 1000);
        }, 2000);
      }, 500);
    </script>
  </body>
</html>
```

## Promise

![Promise](https://i.ibb.co/TLXZhKC/2024-08-01-11-56-33-AI-Eraser.png)

- Promise is introduce in ES6 features to handle the asynchronous code and get rid of callback hell.
- Promise return a single value sometimes in near future.
- Promise return an object with 3 states:

1. Pending
2. FullFilled
3. Rejected

- The main uses of promise are where an execution takes more time then normal operation and we have to wait for that result like data fetching, bigger calculation and network communication(API calling), etc.

> ### Pending State
>
> Pending state means the promise is made but the result is yet to come.

> ### FullFilled State
>
> FullFilled state refers that the promise is settled with successful data.

> ### Rejected State
>
> The promise is settled with an error.

- For consumming the promise we are using 3 inbuilt method

1. then()
2. catch()
3. finally()

- If the promise is fullfilled it execute the then method and if the promise the rejected it execute the catch method implicitly.
- Finally method execute in both fullfilled and rejected state after the promise settled.

#### Syntax

```
let myPromise = new Promise((resolve, reject) => {
  // code to be executed
})
```

```
myPromise.then((data) => {})
myPromise.catch((error) => {})
myPromise.finally(() => {})
```

```
<!DOCTYPE html>
<html lang="en">
  <body>
    <script>
      console.log("starts");
      let myPromise = new Promise((resolve, reject) => {
        let age = 20;
        setTimeout(() => {
          if (age > 18) {
            resolve("Eligible for voting");
          } else {
            reject("Not eligible");
          }
        }, 2000);
      });
      console.log(myPromise);
      myPromise
        .then((data) => console.log(data))
        .catch((err) => console.loog(err))
        .finally(() => console.log("Promise is completed"));
      console.log("end");
    </script>
  </body>
</html>
```

## Async and Await

- Async and await keyword are introduced in ES8 feature to handle the asynchronous code more frequently and with more synchronous manner.
- Async keyword use to convert any function into a asynchronous function.
- The await keyword can only use inside a async function to wait for the promise to be settled.
- An async function returns a promise object.
- To handle error inside an async function we have to use try, catch and finally blocks.

#### Syntax

```
async function getData() {
  try {
      let result = await Promise
  console.log(result);
  } catch(error) {
    console.log(error);
  }
}
getData();
```

#### Exception Handling

- We can handle the exception using try, catch and finally blocks inside an async function.
- If any error occurs in the async function then it will be caught by the catch block and will be logged in the console.

```
try {
  do // throw new Error()
} catch (error) {

} finnally {
  // code to be executed after try and catch block
}
```

```
<!DOCTYPE html>
<html lang="en">
  <body>
    <script>
      console.log("starts");

      async function main() {
        try {
          let age = 20;
          let result = await new Promise((resolve, reject) => {
            setTimeout(() => {
              if (age > 18) {
                resolve("Eligible for voting");
              } else {
                reject("Not eligible");
              }
            }, 2000);
          });
          console.log(result);
        } catch (error) {
          console.log(error);
        } finally {
          console.log("Promise is completed");
        }
      }

      main();

      console.log("end");
    </script>
  </body>
</html>
```

## Synchronous Programming

- Since the javascript is synchronous programming language and single threaded at a time only one statement will be executed.
- In synchronous programming code will be executed line by line.
- Synchronous programs are blocking code.

```
main();
function main() {
  console.log("starts");
  m1();
  console.log("ends);
}
function m1(){
  console.log("m1 starts");
  console.log("m1 ends");
}
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      console.log("Synchronous Programming");
      alert("Working");
      console.log("Asynchronous Programming");
    </script>
  </head>
  <body></body>
</html>
```

## Asynchronous Programming

- In asynchronous programming code doesnot stop the execution of next line.
- Asynchronous programming are non-blocking code.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      console.log("Synchronous Programming");
      setTimeout(function () {
        alert("Working");
      }, 3000);
      console.log("Asynchronous Programming");
    </script>
  </head>
  <body></body>
</html>
```

## Fetch();

- fetch() is a inbuilt method is JS.
- fetch() is used to perfrom http request to the server.
- fetch is a provided based api which returns a promise responses as a result.
- fetch always return JSON response to get data from JSON response we have to use response JSON.

#### Syntax:

```
fetch(url, {
  method: "GET", // or "POST", "PUT", "DELETE", etc.
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
```

- fetch() takes two arguments, 1st is URL 2nd is a object with method, headers and body property.
- By default fetch api makes get request to the server.
- If we need any other http request we have to use 2nd argument By defining that method.
- Body property is use to send data to the server from client.

#### Example // using promise method

```
// Define the URL
let url = "https://jsonplaceholder.typicode.com/users";

// Using Promises
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Using Async/Await
async function getData() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
```

## Promise

- Promise is an object which is use to store the future result of asynchronous operation.
- Promise are introduced in ES 6 version.
- While creating a promise executer function is compulsory.
- The executer function will be called immediately when the promise is created.

```
let p1 = new Promise(function () {
  console.log("Executer Function!!!");
});
```

- Every promise, promises some result.
- Every promise will have three states:

1. Pending(undefined)
2. FullFilled(data)
3. Rejected(error)

- Initially when the promise is created it in a pending state.
- In pending state the data returned by the promise is undefined.

```
let p1 = new Promise(function (success, failure) {
  //   success([1, 2, 3, 4, 5]);
  failure("Something went wrong");
});
console.log(p1);
```

- The state of promise change to settled when the promise is either resolved or rejected.
- If the promise is resolved then it returns the resolved data other wise if the promise is rejected then returns rejected data.

```
function getData(success, failure) {
  let dataReceived = true;
  if (dataReceived) {
    success([1, 2, 3]);
  } else {
    failure("Error");
  }
}
getData(abc, xyz);
function abc(msg) {
  console.log(msg);
}
function xyz(msg) {
  console.log(msg);
}
```

#### Output

```
[ 1, 2, 3 ]
```

```
// Producing Code
let p1 = new Promise(function (resolve, reject) {
  let fetchData = true;
  if (fetchData) resolve([1, 2, 3, 4, 5]);
  else reject("Something went wrong!!!");
});
// Consuming Data
p1.then((data) => {
  console.log(data);
});

p1.catch((err) => {
  console.error(err);
});
```

#### Output

```
[ 1, 2, 3, 4, 5 ]
```

## Event Propagation

![Event Propagation](https://i.ibb.co/mTYHDwD/2024-08-08-11-24-40-AI-Eraser.png)

- Searching for the targeted event inside the dom tree known as event propagation, this process defines how the events are flowing in a web page.
- Event propagation is mainly divided into 2 types:

1. Event Bubbling
2. Event Capturing

## Event Bubbling / Bubbling phase

- Searching for the targeted event from least most child element to top most parent element known as event bubbling.
- This is the default behaviour of every event inside a web page.
- In this phase first the event of child element is triggered then all the connected parent elements event get triggered one by one.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box1 {
        padding: 50px;
        background: yellowgreen;
      }
      #box2 {
        padding: 20px;
        background: red;
      }
      button {
        padding: 10px;
        background: blue;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <div class="box1">
      <div id="box2">
        <button>Click Here</button>
      </div>
    </div>
    <script>
      let box1 = document.querySelector(".box1");
      let box2 = document.getElementById("box2");
      let btn = document.querySelector("button");
      console.log(box1, box2, btn);

      box1.addEventListener("click", () => {
        console.log("box1 is clicked");
      });
      box2.addEventListener("click", () => {
        console.log("box2 is clicked");
      });
      btn.addEventListener("click", () => {
        console.log("btn is clicked");
      });
    </script>
  </body>
</html>
```

## Event Capturing

- Looking for the targeted event from top most parent element to the list most child element known as event capturing.
- In this phase the event of top most parent element will triggered first then all connected children element's events are going to trigger.
- To achieve the capturing phase we have to use the third optional argument of `addEventListener function` as true.

#### Syntax

```
element.addEventListener("event", () => {}, capturing);
// capturing => true/false
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box1 {
        padding: 50px;
        background: yellowgreen;
      }
      #box2 {
        padding: 20px;
        background: red;
      }
      button {
        padding: 10px;
        background: blue;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <div class="box1">
      <div id="box2">
        <button>Click Here</button>
      </div>
    </div>
    <script>
      let box1 = document.querySelector(".box1");
      let box2 = document.getElementById("box2");
      let btn = document.querySelector("button");
      console.log(box1, box2, btn);

      box1.addEventListener(
        "click",
        () => {
          console.log("box1 is clicked");
        },
        true
      );
      box2.addEventListener(
        "click",
        () => {
          console.log("box2 is clicked");
        },
        { capture: true }
      );
      btn.addEventListener(
        "click",
        () => {
          console.log("btn is clicked");
        },
        true
      );
    </script>
  </body>
</html>
```

## Stoping the propagation / Targeting Phase

- Triggering only the targeted event without any default propagation behaviour known as targeting phase.
- For stopging the propagation we are using a predefined function `event.stopPropagation()`

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box1 {
        padding: 50px;
        background: yellowgreen;
      }
      #box2 {
        padding: 20px;
        background: red;
      }
      button {
        padding: 10px;
        background: blue;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <div class="box1">
      <div id="box2">
        <button>Click Here</button>
      </div>
    </div>
    <script>
      let box1 = document.querySelector(".box1");
      let box2 = document.getElementById("box2");
      let btn = document.querySelector("button");
      console.log(box1, box2, btn);

      box1.addEventListener("click", (event) => {
        console.log("box1 is clicked");
      });
      box2.addEventListener("click", (event) => {
        console.log("box2 is clicked");
      });
      btn.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("btn is clicked");
      });
    </script>
  </body>
</html>
```

## Event Delegation

- Event Delegation is bascially a pattern to handle events efficiently.
- Instead of adding an event listener to each and every similar element,
  we can add an event listener to a parent element and call and event on a particular target using the target property of the event object.
- Event delegation is a powerful technique to handle the events more efficiently which improves the performance and readability of the code.
- This technique based upon the event bubbling phase

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="parent">
      <button id="btn1">Button 1</button>
      <button id="btn2">Button 2</button>
      <button id="btn3">Button 3</button>
    </div>
    <script>
      let div = document.querySelector(".parent");
      div.addEventListener("click", (event) => {
        let id = event.target.id;
        if (id == "btn1") {
          console.log("btn 1 is clicked");
        } else if (id == "btn2") {
          console.log("btn 2 is clicked");
        } else if (id == "btn3") {
          console.log("btn 3 is clicked");
        }
      });
    </script>
  </body>
</html>
```

## Prototype

- In javascript every object has built-in property which is prototype.
- In javascript inheritance is achieved through prototypes.
- Inheritance means aquring property from one object to another object.
- We can implement prototype inheritance in 3 ways:

1. Function Constructor
2. Class(ES6)
3. Object.create()

```
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.__proto__);
console.log(Array.prototype);
console.log(arr.__proto__ == Array.prototype);

let obj = { id: 1, name: "Satish" };
console.log(obj);
console.log(obj.__proto__);
console.log(Object.prototype);
console.log(obj.__proto__ == Object.prototype);
```

#### Output

```
[ 1, 2, 3, 4, 5 ]
Object(0) []
Object(0) []
true
{ id: 1, name: 'Satish' }
[Object: null prototype] {}
[Object: null prototype] {}
true
```

## Prototype Chaining

```
let arr = [1, 2, 3, 4, 5];
console.log(arr.__proto__.__proto__);

let obj = { id: 1, name: "Satish" };

function main() {
  console.log("main starts");
}
main();

console.log(main.__proto__);
console.log(Function.prototype);

console.log(main.__proto__.__proto__.__proto__);
```

## Function Constructor

- Function Constructor is a normal function which is called with `new` keyword.
- Function Constructor is use to create multiple objects.
- While creating function constructor we should not use arrow function(because arrow function doesn't have its own this keyword).
- When ever we call a function with new keyword 4 will happen implicitly

1. Empty object will be created `{ }`
2. this keyword points to the newly created object.
3. The newly created object link to prototpye object.
4. Automatically it returns the reference of newly created object.

```
function Student() {
  console.log(this); // Student {}
}
let s1 = new Student();
console.log(s1); //  Student {}
```

```
function Student() {
  console.log("Ctt Is Executing!!");
}
new Student(); // Ctt Is Executing
new Student(); // Ctt Is Executing
new Student(); // Ctt Is Executing
new Student(); // Ctt Is Executing
```

- Constructer will be executed every time when the object is created.

```
function Student(id, name, phno) {
  this.id = id;
  this.name = name;
  this.phno = phno;
}
let s1 = new Student(1, "Satish", 1234567890);
console.log(s1.name); // Satish
let s2 = s1;
s2.name = "Rajesh";
console.log(s1.name); // Rajesh
console.log(s2.name); // Rajesh
```

```
function Student(name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
}
let s1 = new Student("Satish", 2000);
let s2 = new Student("Rajesh", 1999);
let s3 = "Abhay";
console.log(s1 instanceof Student); // true
console.log(s2 instanceof Student); // true
console.log(s3 instanceof Student); // false
```

```
function Student(name, bithYear) {
  this.name = name;
  this.birthYear = bithYear;
  this.calcAge = function () {
    let currentYear = new Date().getFullYear();
    let age = currentYear - this.birthYear;
    console.log(age);
  };
}

let s1 = new Student("Satish", 2000);
console.log(s1); // Student { name: 'Satish', birthYear: 2000, calcAge: [Function (anonymous)] }
s1.calcAge();    // 24
let s2 = new Student("Rajesh", 1999);
console.log(s2); // Student { name: 'Rajesh', birthYear: 1999, calcAge: [Function (anonymous)] }
s2.calcAge();    // 25
```

```
function Student(name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
}
Student.prototype.calcAge = function () {
  let currentYear = new Date().getFullYear();
  let age = currentYear - this.birthYear;
  console.log(age);
};
let s1 = new Student("Satish", 2000);
let s2 = new Student("Rajesh", 1999);
s1.calcAge(); // 24
s2.calcAge(); // 25
```

```
class Student {
  constructor() {
    console.log(this); // Student {}
    console.log("ctt is executing!!!"); // ctt is executing!!!
  }
}
let s1 = new Student();
console.log(s1); // Student {}
```

```
let Student = class {
  constructor() {
    console.log(this); // Student {}
    console.log("ctt is executing!!!"); // ctt is executing!!!
  }
}
let s1 = new Student();
console.log(s1); // Student {}
```

In javascript class can be declared in 2 ways:

1. Class Declaration
2. Class Expression

- Class are First Class Citizen
- Class are are not Hoisting
- Class are in Strict Mode

```
class A {
  static m1() {
    console.log("static m1 is executing!!!");
  }
  m2() {
    console.log("non-static m2 is executing!!!");
  }
}
A.m1(); // static m1 is executing!!!
let a1 = new A();
a1.m2(); // non-static m2 is executing!!!
```

## Types of Variable

In oops there are 3 types of variables

1. local variable
2. static variable
3. non-static variable

### local variable

The variable which is created inside the method is known as local variable.

### static variable

The variable which is created inside the class and outside the method with static keyword is known as static variable.

### non-static variable

The variable which is created inside the class and outside the method without using static keyword is known as non-static variable.

### Note

While creating static and non static variables we should not use any keywords such as let, const, var.

```
class B {
  static m1() {
    let a = 1; // local var
    a++;
    ++a;
    console.log("a value is " + a); // a value is 3
  }
}
B.m1();
```

```
class C {
  static a = 1; // static var
  b = 2; // non-static var

  display() {
    console.log(C.a); // 1
    console.log(this.b); // 2
  }
}
let c1 = new C();
c1.display();
```

- For static variable only one copy of memory will be created(at the time of class loading)
- For non static variable memory will be created for each and every object creation.

```
class D {
  static a = 0;
}
console.log(D.a); // 0
D.a = 1;
console.log(D.a); // 1
D.a = 2;
console.log(D.a); // 2
```

```
class C {
  b = 0;
}
let c1 = new C();
c1.b = 1;
console.log(c1.b); // 1

let c2 = new C();
// c2.b = 2;
console.log(c2.b); // 0
```

```
class Student {
  sname = null;
  phno = null;
  static institute = "jspiders";
  static count = 0;

  static getCount() {
    return Student.count;
  }

  displayDetails() {
    console.log(`${this.sname}, ${this.phno}`);
  }
}
console.log(Student.getCount()); // 0
let s1 = new Student();
s1.sname = "Satish";
s1.phno = 1234567890;
Student.count++;
s1.displayDetails(); // Satish, 1234567890

console.log(Student.getCount()); // 1
let s2 = new Student();
s2.sname = "Rajesh";
s2.phno = 1234567890;
Student.count++;
s2.displayDetails(); // Rajesh, 1234567890

console.log(Student.getCount()); // 2
```

## Constructor

- Constructor is a special method which is use to initalize object members.
- Constructor will be executed for every object creation.
- In javascript we can not create more then one constructor inside one class.
- Since we can not create more then one constructor, constructor overloading is not possible in javascript.

## Constructor Overloading

- Creating multiple constructors in same class with different arguments is known as constructor overloading.

```
class Student {
  static count = 0;
  constructor(sname, phno) {
    this.sname = sname;
    this.phno = phno;
    Student.count++;
  }
}
let s1 = new Student("Satish", 1234567890);
console.log(s1); // Student { sname: 'Satish', phno: 1234567890 }
let s2 = new Student("Rajesh", 1234567890);
console.log(s2); // Student { sname: 'Rajesh', phno: 1234567890 }

console.log("Numbers of students joined: " + Student.count); // Numbers of students joined: 2
```
