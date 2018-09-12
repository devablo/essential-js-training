# JavaScript Basics

## JavaScript Language

* Always been functional programming languages
* ES6 has improved functional programming

## Functional Programming

TBC

## Arrow Functions (Fat Arrows)

* Compact Syntax for defining Functions
* Same as Lambda in C#
* Format

``` javascript
    (params) => expression
    e.g. (x,y) => x + y
```

* Lexically Binds 'this'
* Don't have to create self closures

## Iterators

* for of

``` javascript
    function* foo(){
      yield 1;
      yield 2;
    }

    for (let o of foo()) {
      console.log(o);
      // expected output: 1

      break; // closes iterator, triggers return
    }
```

* for in

``` javascript
    // to be defined
```

* Implement your own iterator

## Generators

* uses the function*(params) definition '*'
* must use yield in the method

## Array Comprehensions (Short forming Array Expressions)

TBC

## Variable Declarations & Scoping

**var** is function/global scoped and is has hoisted behavior in JavaScript
Variable declarations, wherever they occur, are processed before any code is executed. The scope of a variable declared with var is its current execution context, which is either the enclosing function or, for variables declared outside any function, global. If you re-declare a JavaScript variable, it will not lose its value.

**let** is block, statement or expression scoping and does not have hoisting behaviour

**const** is block-scoped, much like variables defined using the let statement. The value of a constant cannot change through re-assignment, and it can't be redeclared.

A **block** statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of curly brackets and may optionally be labelled:

``` javascript
      LabelIdentifier: {
        StatementList
      }
```

## Functions

Function params - arguments keyword used for implicit function params
Function Rest Parameters - The last param in a function and packaged into an array prefixed with ...

``` javascript
    function(name, ...numbers) {}
```

## Spread Operator

Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

    ...[1,2,3]
    function(a,b,c)

## Template literals

* String concatination
* Used backticks and ${} for place holders

    e.g. return `Hello ${name}`;

## ASSIGNMENTS AND EXPRESSIONS

Destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

## CLASSES

### Objects

Every JavaScript object has a **prototype**. The prototype is also an object.
All JavaScript objects inherit the properties and methods from their prototype and prototype inheritance

### **prototype**

- call
-- Using call to invoke a function and specifying the context for 'this'
-- Using call to invoke an anonymous function
-- Using call to chain constructors for an object
- e.g. expect(User.prototype.HelloWorld.call(user)).toBe("Hello World");
- assign
- toString

### **class** keyword
- conform with other OO languages and keywords
- Class is defintion and blueprint
- Objects are instances with State
- Same as creating objects with prototype in JavaScript just easier to do now
- constructor always called on new instance of object
- Can check instance type using instanceof
-- e.g. var isInstance = e instanceof Employee;

### class **inheritance**

- extend keyword used (e.g. class Employee extends Person)
- in constructor call super(args) on base
- to override you just have the same method or property name and params (Signature)
- to override method or property and still use parent class you can use super (e.g. super.Method())