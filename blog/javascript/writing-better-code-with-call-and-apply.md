---
title: "JavaScript - Call & Apply"
description: Javascript Call and Apply features
date: 2021-09-16
slug: javascript-call-and-apply
authors: arunatebel
tags: [javascript, call, apply]
hide_table_of_contents: false
---

The `prototype` of the Javascript `Function` object exposes two valuable methods named `call()` and `apply()`. In this article, we will see how to use these two methods effectively in our code. The content and some examples of this article are based on the  MDN documentation of the [`Function.prototype.call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) and [`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply).
<!--truncate-->

First, let's understand what each of these methods does.

# .call()

### What it does

The `call()` function is used (as the name suggests) to call a function by providing `this` context to it. It allows us to call a function by explicitly providing which object to be used for the occurrences of `this`, inside the particular function.

To get a better idea about *why* such a method exists, consider the below example.

```javascript
function sayHello() {
    console.log(`Hello, ${this.name}`);
}

sayHello(); // Hello, undefined
```

As you can see, `this` inside the function refers to the global scope. In the above code, the `sayHello` function tries to find a variable called `name` in the global scope. Since no such variable exists, it prints out `undefined`. If we had defined a variable called `name` in the global scope, this function will manage to work as expected as shown below.

```javascript
const name = 'archeun';
function sayHello() {
    console.log(`Hello, ${this.name}`);
}

sayHello(); // Hello, archeun
```

>
If we used the `strict` mode in the above code, it will actually throw a runtime error since `this` will be undefined.

The drawback here is that the `sayHello` function **assumes** the scope for `this` variable and we do not have control over it. The function will behave differently depending on the lexical scope that we execute it in. This is where the `call()` method comes in handy. As you know, it allows us to explicitly *inject* the object that we need to use for the `this` variable inside the function.

Consider the below example.

```javascript
const name = 'archeun';
function sayHello() {
    console.log(`Hello, ${this.name}`);
}

sayHello(); // Hello, archeun

const visitor = {
    name: 'My lord!'
}

/**
 * The first parameter of the call method is,
 * the object to be used for the `this` context inside the function.
 * So when the `sayHello` function encounters `this.name`, it now knows
 * to refer to the `name` key of the `visitor` object we passed
 * to the `call` method.
 */
sayHello.call(visitor); // Hello, My lord!

/**
 * Here we do not provide the `this` context.
 * This is identical to calling sayHello().
 * The function will assume the global scope for `this`.
 */
sayHello.call(); // Hello, archeun
```

Other than the `this` context that is passed as the first parameter of the `call()` method, it also accepts the arguments for the callee function. After the first argument, all the other arguments we pass to the `call()` method will be passed as the arguments to the callee function.

```javascript
function sayHello(greetingPrefix) {
    console.log(`${greetingPrefix}, ${this.name}`);
}

const visitor = {
    name: 'My lord!'
}

/**
 * Here `Hello` will be passed as the argument to the
 * `greetingPrefix` parameter of the `sayHello` function
 */
sayHello.call(visitor, 'Hello'); // Hello, My lord!

/**
 * Here `Howdy` will be passed as the argument to the
 * `greetingPrefix` parameter of the `sayHello` function
 */
sayHello.call(visitor, 'Howdy'); // Howdy, My lord!
```

### Ways to use it

#### 1. Reusable context-free functions

We can write a single function and call it under different `this` contexts.

```javascript
function sayHello(greetingPrefix) {
    console.log(`${greetingPrefix}, ${this.name}`);
}

const member = {
    name: 'Well-known member'
}

const guest = {
    name: 'Random guest'
}

/**
 * `sayHello` function will refer to the `member` object
 * whenever it encouneters `this`
 */
sayHello.call(member, 'Hello'); // Hello, Well-known member

/**
 * `sayHello` function will refer to the `guest` object
 * whenever it encouneters `this`
 */
sayHello.call(guest, 'Howdy'); // Howdy, Random guest
```

As you can see, if properly used, this improves code reusability and maintainability.

#### 2. Constructor chaining

We can use the `call()` method to chain the constructors of objects created through functions. A function can adopt another function as its constructor when creating an object using that function. As shown in the below example, both the `Dog` and `Fish` calls the `Animal` function to initialize their common attributes, namely `name` and `noOfLegs`.

```javascript
function Animal(name, noOfLegs) {
    this.name = name;
    this.noOfLegs = noOfLegs;
}

function Dog(name, noOfLegs) {
    // Reuse Animal function as the Dog constructor
    Animal.call(this, name, noOfLegs);
    this.category = 'mammals';
}

function Fish(name, noOfLegs) {
    // Reuse Animal function as the Fish constructor
    Animal.call(this, name, noOfLegs);
    this.category = 'fish';
}

const tiny = new Dog('Tiny', 4);
const marcus = new Fish('Marcus', 0);

console.log(tiny); // {name: "Tiny", noOfLegs: 4, category: "mammals"}
console.log(marcus); // {name: "Marcus", noOfLegs: 0, category: "fish"}
```

This is also a variant of code reuse. This pattern also enables us to write code that is close to OOP principles in other languages.

#### 3. Invoke anonymous functions with objects

Anonymous functions inherit the lexical scope that they are called in. We can use the `call()` method to explicitly inject `this` scope to an anonymous function. Consider the below example.

```javascript
const animals = [
    { type: 'Dog', name: 'Tiny', sound: 'Bow wow' },
    { type: 'Duck', name: 'Marcus', sound: 'Quack' }
];

for (let i = 0; i < animals.length; i++) {
    /**
     * This anonymous function now has access to each animal object
     * through `this`.
     */
    (function (i) {
        this.makeSound = function () {
            console.log(`${this.name} says ${this.sound}!`);
        }
        this.makeSound();
    }).call(animals[i], i);
}

// Tiny says Bow wow!
// Marcus says Quack!
```

Here we did not have to implement a dedicated function to attach the `makeSound` method to each animal object. This prevented us from writing and naming an one-time used utility function.

Those are a few ways we can effectively use the `call()` method to make our code clean, reusable, and maintainable.

# .apply()

### What it does

`apply()` is almost identical to the `call()` method when it comes to the functionality. The only difference is that it accepts a single array-like object as its second argument.

```javascript
/**
 * After `this` context argument
 * `call` accepts a list of individual arguments.
 * Therefore, if `args` is an array, we can use the
 * `ES6` spread operator to pass individual elements
 * as the list of arguments
 */
func.call(context, ...args);

/**
 * After `this` context argument
 * `apply` accepts a single array-like object
 * as its second argument.
 */
func.apply(context, args);
``` 

Other than how `apply()` handles the callee arguments, the functionality is identical to the `call()` method. But, due to this difference, we can use it for different kinds of use cases than `call()`.

### Ways to use it

#### 1. To concatanate (append) arrays

`Array.prototype.push` function can be used to push an element to the end of an array. For eg:

```javascript
const numbers = [1, 2, 3, 4];
numbers.push('a', 'b', 'c'); // push elements on by one

console.log(numbers); // [1, 2, 3, 4, "a", "b", "c"]
```

What if you wanted to push all the elements of one array to another. Like below

```javascript
const numbers = [1, 2, 3, 4];
const letters = ['a', 'b', 'c'];

numbers.push(letters);

console.log(numbers); // [1, 2, 3, 4, ["a", "b", "c"]]
```

That did not do what we wanted. It appended the entire `letters` array as a single element to the `numbers` array. We could have used the `concat()` method, but it will create a copy of an array and return it. We don't need that too. We also can loop over the `letters` array and individually push each element too. But there is a more elegant way.

The solution is to use the `apply()` method as below.

```javascript
const numbers = [1, 2, 3, 4];
const letters = ['a', 'b', 'c'];

numbers.push.apply(numbers, letters);

console.log(numbers); // [1, 2, 3, 4, "a", "b", "c"]
```

If we had the privilege to use the `ES6` spread operator we could have achieved this by doing,

```javascript
const numbers = [1, 2, 3, 4];
const letters = ['a', 'b', 'c'];

numbers.push(...letters);

console.log(numbers); // [1, 2, 3, 4, "a", "b", "c"]
```

#### 2. Using `apply()` with built-in functions that accept list of arguments

With any function that accepts a list of arguments, such as `Math.max` we can effectively use apply. Consider the below.

If you wanted to find out the min and max values of an array of numbers, the below is the old-school way of doing it.

```javascript
let min = +Infinity;
let max = -Infinity;
const numbers = [4, 5, 1, 2, 8, 3, 4, 6, 3];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log(`Min: ${min}, Max: ${max}`); // Min: 1, Max: 8
```

We can achieve the same with `apply()` in a more elegant way as below.

```javascript
const numbers = [4, 5, 1, 2, 8, 3, 4, 6, 3];

min = Math.min.apply(null, numbers);
max = Math.max.apply(null, numbers);

console.log(`Min: ${min}, Max: ${max}`); // Min: 1, Max: 8
```

Same as in the previous case, if we can use the `ES6` spread operator we can achieve the same by doing the below.

```javascript
const numbers = [4, 5, 1, 2, 8, 3, 4, 6, 3];

min = Math.min(...numbers);
max = Math.max(...numbers);

console.log(`Min: ${min}, Max: ${max}`); // Min: 1, Max: 8
```

By now, you might have a better understanding of the `call()` and `apply()` methods with regards to their functionality and effective usage. When used carefully these two methods will help to write better-looking reusable code.

Please leave a comment if you have anything to add or discuss :) 
