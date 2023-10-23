---
title: "JavaScript - Inheritance Part I"
description: An introduction to inheritance in JavaScript
date: 2021-06-19
slug: javascript-inheritance-part-1
authors: arunatebel
tags: [javascript, inheritance]
hide_table_of_contents: false
---

### Learning Outcomes

In this post, we will find out why JavaScript inheritance looks different compared to other programming languages. We will cover the below topics.

- How do other programming languages model inheritance?
- Introduction to inheritance in Javascript

### Why inheritance in JavaScript is confusing

While JavaScript has gained huge popularity over the past decade, developers still struggle on understanding how it models *inheritance*. This is due to the unconventional way that JavaScript approaches this OOP concept.

Let's see *why*, by starting from the basics.

In simpler terms, we say that a language supports OOP if it implements the below principles.

- Polymorphism
- Inheritance
- Encapsulation
- Abstraction

*I will not dig into the details, since I assume that you already have a basic understanding of the above topics (CS 101 ;))*

In most programming languages, the above OOP principles are supported by exposing a `class` (or a similar) construct and a few related keywords like `new`, `extends`, and `implements` etc. The developers then have a properly defined way of structuring their class hierarchy, along with the other OOP principles mentioned above.

For eg: one would model inheritance in python like below. This classic example shows how the Bird inherits some properties and functionality from the Animal while implementing its own properties and functionality.

Get a bit familiar with the below simple code. We will use this snippet in the latter part of this article to see how we can achieve inheritance with JavaScript.

I used python here since the syntax of it goes closely to pseudocode so that everyone will understand the concepts without struggling.

```python
class Animal:
    noOfEyes = 2
    noOfLegs = 4

    def makeSound(self):
        pass

class Bird(Animal): # Bird extends from Animal
    pos = 0 # Bird has an additional attribute
    noOfLegs = 2 # Bird modifies it's parents attributes

    # Bird extends functionality that is there in the Animal
    def makeSound(self):
        print('tweet tweet!')

    # Bird implements new functionality that is not there in the Animal
    def fly(self, to): 
        self.pos = to

bird = Bird()
print(f"The bird has {bird.noOfEyes} eyes") # The bird has 2 eyes
bird.makeSound() # tweet tweet!
print(f"Bird was initially at {bird.pos}") # Bird was initially at 0
bird.fly(42) # bird.pos = 42
print(f"Bird flew to {bird.pos}") # Bird flew to 42
``` 

As seen above, the language syntax, keywords, and constructs make it easy and straightforward to model inheritance in almost all of the languages compared to JavaScript. But in JavaScript, there is no concept called *Classes*. Even though ES2015 introduced the `class` keyword, it is just syntactic sugar to the ordinary way of how the language models inheritance under the hood. So what exactly does JavaScript offer us to implement inheritance?

### Prototypal inheritance

JavaScript introduces the concepts called *prototypes*, and *prototype chaining* to facilitate inheritance.

>
While other programming languages have class-based inheritance, Javascript has a prototype-based inheritance.

There are a few words/terms related to this concept that sound identical but differ drastically. This is the reason that developers find it hard to grasp this concept. Let's see what this means.

In order to achieve inheritance,

- a parent-child (or superclass-subclass) relationship should be defined
- child *may* inherit some properties and functionality from its parent
- child *may* override/modify its parents' properties and functionality
- child *may* contain specific properties and functionality of its own

We saw above, how other programming languages achieve the above capabilities. Now we will see how JavaScript tries to achieve the same.

In JavaScript, almost everything is an Object. The only exceptions are the primitives. Compared to other programming languages, we do not need to define a blueprint (`class`) first and then create object instances out of it in JavaScript.

But, there are two ways to create an object in JavaScript. Let's find out those two ways and how we can use inheritance in both of these cases.

### Creating objects with `{...}` notation

One (and the most familiar) way of creating an object in JavaScript is the one below. I will align the code with our Animal-Bird example so that we can clearly see how this evolves.

```javascript
const Animal = {
  noOfEyes: 2,
  noOfLegs: 4,

  makeSound() {
    // do make sound
  },
};
```
Similarly, we can create the Bird object including only the properties and functionality that are specific to the Bird, like below.

```javascript
const Bird = {
  noOfLegs: 2,
  pos: 0,

  makeSound() {
    alert('tweet tweet!');
  },

  fly(to) {
    this.pos = to;
  },
};
```
Great, but we should now inherit the properties and functionality from the Animal object into the Bird. We do not have any special keyword like `extends` to be used in this simple object creation syntax. Then how do we do it?

This is where JavaScript offers us the `Object.setPrototypeOf()` (or `__proto__` (deprecated but widely used)). Let's first use the widely used `__proto__` approach.

In order to tell JavaScript that our Bird object inherits from the Animal object, we have to do the below modification to the Bird object.

```javascript
Bird.__proto__ = Animal; // Bird should inherit from the Animal
```
What this basically tells is that the Bird object has the `prototype` of an Animal. In other words, the Bird object will inherit the properties and functionality of the Animal object.

> Following the ECMAScript standard, the notation `someObject.[[Prototype]]` is used to designate the prototype of `someObject`. Therefore, from this point onward the notation `someObject.[[Prototype]]` will be used to mean that the `someObject` has the prototype of another object. This is to reduce the confusion between the actual `prototype` attribute of JavaScript functions which will be introduced in a subsequent post.


Now, we can see the magic in action.

```javascript
// We create the Animal object
const Animal = {
  noOfEyes: 2,
  noOfLegs: 4,

  makeSound() {
    // do make sound
  },
};

/**
 * We create the Bird object. But still we have not specified that
 * the Bird inherits from the Animal
 */
const Bird = {
  noOfLegs: 2,
  pos: 0,

  makeSound() {
    console.log('tweet tweet!');
  },

  fly(to) {
    this.pos = to;
  },
};

// At this point, noOfEyes in not a property of the Bird.
console.log(Bird.noOfEyes); // undefined

/**
 * We tell JavaScript that the Bird should inherit from the Animal.
 * JavaScript will do its 'magic' and do the necessary linking.
 */
Bird.__proto__ = Animal;

// Now the Bird has derived access to the noOfEyes property from the Animal
console.log(Bird.noOfEyes); // 2
```

Perfect!, we achieved the same functionality we had in our python script above. But we have a minor issue using the non-standard `__proto__` attribute, and let's address it now.

The `__proto__` is considered non-standard now, according to the  [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) ,

>
Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, maybe in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The recommended way is to use the `Object.setPrototypeOf()` call. We are almost there. Only a minor change is necessary as below.

Instead of,
```javascript
Bird.__proto__ = Animal;
```
We should now use,
```javascript
Object.setPrototypeOf(Bird, Animal);
```

The complete example will look like below now.
```javascript
// We create the Animal object
const Animal = {
  noOfEyes: 2,
  noOfLegs: 4,

  makeSound() {
    // do make sound
  },
};

/**
 * We create the Bird object. But still we have not specified that
 * the Bird inherits from the Animal
 */
const Bird = {
  noOfLegs: 2,
  pos: 0,

  makeSound() {
    alert('tweet tweet!');
  },

  fly(to) {
    this.pos = to;
  },
};

// At this point, noOfEyes in not a property of the Bird.
console.log(Bird.noOfEyes); // undefined

/**
 * We tell JavaScript that the Bird should inherit from the Animal.
 * JavaScript will do its 'magic' and do the necessary linking.
 */
Object.setPrototypeOf(Bird, Animal);

// Now the Bird has derived access to the noOfEyes property from the Animal
console.log(Bird.noOfEyes); // 2
```

Cool!

You might be wondering now whether the Animal object inherits from anything. Or in other words, whether it has a `[[Prototype]]` of any parent object. The answer is yes! Any object in JavaScript has the `[[Prototype]]` of the `Object.prototype` (we will dig deep into `Object.prototype` in the next post of this series) unless it has a user-defined prototype. In addition, the `[[Prototype]]` of the `Object.prototype` will be `null`, eventually stopping the prototype chain.

Due to this chaining, whenever an attribute is accessed or a method is called upon an object, JavaScript will keep looking for the particular attribute or the method in the entire prototype chain gradually, until it finds the `[[Prototype]]` of the `Object.prototype` which will be `null`. This is called the **prototype chaining**.

Let's look at how this works using our code example by introducing another object to the chain called, Parrot.

```javascript
// We create the Animal object
const Animal = {
  noOfEyes: 2,
  noOfLegs: 4,

  makeSound() {
    // do make sound
  },
};

/**
 * We create the Bird object. But still we have not specified that
 * the Bird inherits from the Animal
 */
const Bird = {
  noOfLegs: 2,
  pos: 0,

  makeSound() {
    console.log('tweet tweet!');
  },

  fly(to) {
    this.pos = to;
  },
};

/**
 * We create the Bird object. But still we have not specified that
 * the Bird inherits from the Animal
 */
const Parrot = {

  makeSound() {
    console.log('creek creek!');
  },

};

// Bird inherits from Animal
Object.setPrototypeOf(Bird, Animal);

// Parrot inherits from Bird
Object.setPrototypeOf(Parrot, Bird);

/**
 * Parrot has it's own version of the makeSound implementation. Execute it!
 * Same applies to properties too.
 */
Parrot.makeSound(); // creek creek!

/**
 * Parrot does not have it's own value for the noOfLegs.
 * JavaScript will climb up in the prototype chain looking for this property.
 * Parrot has the prototype of the Bird and JavaScript sees noOfLegs inside the Bird.
 * So, the Bird's noOfLegs value will be used here.
 */
console.log(Parrot.noOfLegs); // 2

/**
 * Parrot does not have it's own value for the noOfEyes.
 * JavaScript will climb up in the prototype chain looking for this property.
 * Parrot has the prototype of the Bird, but JavaScript doesn't see noOfEyes inside the Bird either.
 * It does not stop their and climb up further in the prototype chain.
 * Bird has the prototype of the Animal and JavaScript sees noOfEyes inside the Animal.
 * So, the Animal's noOfEyes value will be used here.
 */
console.log(Parrot.noOfEyes); // 2

/**
 * Parrot does not have it's own value for the hairColor.
 * JavaScript will climb up in the prototype chain looking for this property.
 * Parrot has the prototype of the Bird,
 *      but JavaScript doesn't see hairColor inside the Bird either.
 * It does not stop their and climb up further in the prototype chain.
 * Bird has the prototype of the Animal,
 *      but JavaScript doesn't see hairColor inside the Animal either.
 * Animal has the prototype of the Object.prototype,
 *      but JavaScript doesn't see hairColor inside the Object.prototype either.
 * Object.prototype has null as the prototype,
 *      so Javascript will stop looking further
 * So, hairColor will be undefined here
 */
console.log(Parrot.hairColor); // 2
```

This is how prototypes and prototype chaining basically work in JavaScript.

We looked at the easy way of creating objects (`{...}` notation) and that also made it easy for us to understand the inheritance. But we have a few other concepts to talk about before concluding inheritance, objects, and prototypes.

The other way of creating objects in JavaScript is using the `new` keyword along with constructor functions (or else the built-in `Object.create` static method). Even though the concept is the same, it requires a bit more understanding of some characteristics of JavaScript in order to fully understand how inheritance works when objects are created in that way.

We have to discuss concepts like,
- The `new` keyword and constructor functions
- `prototype` property of functions
- What is the difference between `__proto__` or (`[[Prototype]]`) and `prototype` in functions

I think those topics will fit well into a separate article. Therefore, let's discuss them in my next blog post in this series. If you have any feedback please let me know in the comments section. :)

Thank you.