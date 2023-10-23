---
title: "JavaScript - Object property descriptors"
description: An introduction to the JavaScript object property descriptors
date: 2021-09-01
slug: javascript-object-property-descriptors
authors: arunatebel
tags: [javascript, objects, property-descriptors]
hide_table_of_contents: false
---

A JavaScript object is composed of a set of `property`: `value` pairs, where the
`property` is a `string` and the `value` can be any valid JavaScript data type. Here is an example.

```javascript
const user = {
  name: 'John',
};
``` 
## Javascript Object Property Descriptors
Most of the time, developers deal with the `value` part of the object properties. We define object property values in a variety of ways ranging from strings, numbers, objects, and functions, etc. But we care less about the characteristics of the `property` part. Generally what we know about an object `property` is that,
<!--truncate-->

- They *must* be strings (even though we can use numeric values for object properties  in our code, they are automatically converted into strings at the run time)
- Once a property is defined on an object, we can access the value of it using the dot notation (`user.name`), the square bracket notation (`user['name']`), or using the ES6 object destructuring mechanism (`const { username } = user`)

The above knowledge is enough for us to deal with most of our day-to-day JavaScript needs. But, JavaScript provides us a beautiful way of defining the characteristics of the object properties too. Let's see what are they.

Let's start with the simplest one.

### Setting a default value for a property

You may be thinking now, *why this is such a big deal?* We all know how to define a default value of an object property right? Here is how we do it every day.

```javascript
const user = {
  // 'John' is the default value of the `name` property of the user object
  username: 'John',
  // 19 is the default value of the `age` property of the user object
  age: 19,
};

/**
 * We can also create new properties dynamically on the user object and define
 * default values. Here, 'male' is the default value of the `gender` property
 * of the user object.
 */
user.gender = 'male';
```

Nice! That is the easy way of doing stuff. But what if I told you there is another way of defining the properties of a JavaScript object?

JavaScript `Object` has a built-in method called `defineProperty` that can be used to create properties for an object and define some characteristics of those properties. According to the  [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), below is the documentation of the `defineProperty` function.

>
#### Parameters
`obj`  The object on which to define the property.
>
`prop` - The name or Symbol of the property to be defined or modified.
>
`descriptor` - The descriptor for the property being defined or modified.
#### Return value
The object that was passed to the function.

Here is how we can use the `defineProperty` function.

```javascript
const user = {
  // 'John' is the default value of the `name` property of the user object
  username: 'John',
  // 19 is the default value of the `age` property of the user object
  age: 19,
};

/**
 * We can also create new properties dynamically on the user object and define
 * default values. Here, 'male' is the default value of the `gender` property
 * of the user object.
 */
user.gender = 'male';

/**
 * Here, we use the `defineProperty` method built-in to the
 * JavaScript Object data type to define the `hairColor` property of the
 * `user` object. While defining it, we provide 'black' as the default value.
 * This will be identical to doing user.hairColor = 'black'
 */
Object.defineProperty(user, 'hairColor', {
  value: 'black',
});

console.log(user.hairColor); // 'black'
```
Cool, right?

But there are a few more characteristics other than the default value that we can define on object properties if we use the `defineProperty` function. Those characteristics are referred to as *descriptors*. That is because they *describe* the characteristics of an object property. Below are the javascript property descriptors.

`value`

- The value associated with the property. Can be any valid JavaScript value (number, object, function, etc). Defaults to `undefined`. This is the descriptor that we used in the above example.

`writable`

- `true` if the value associated with the property may be changed with an assignment operator. Defaults to `false`.

`enumerable`

- `true` if and only if this property shows up during enumeration of the properties on the corresponding object. Defaults to `false`.

`configurable`

- `true` if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object. Defaults to `false`.

As you can see, those descriptors are like the **metadata** of a property of an object. They control to how extent the *value* of the particular object *property* can be accessed/altered/configured.

Now, let's see them in action.

Since we already saw the `value` descriptor, let's start with `writable`.

### `writable`

We can use `writable` descriptor to specify whether the value of a particular object property can be changed or not once it is defined.

We can set it to `true` if the value associated with the property may be changed with an assignment operator. If not specified, defaults to `false`.

Let's see it from an example. Below, we define a property called `uid` in the `user` object and make it non-writable.

 ```javascript
const user = {
  username: 'John',
  age: 19,
};

/**
 * Here we defined the `uid` attribute and provide a default value.
 * It is not necessary to specify `writable: false`, since the
 * default value of `writable` descriptor is `false`.
 * But for clarity I have put it explicitly.
 */
Object.defineProperty(user, 'uid', {
  value: 'user042',
  writable: false,
});

/**
 * This will silently fail as long as we do not use 'strict mode'.
 * If we use 'strict mode', this statement will throw an error.
 */
user.uid = 'user007';

/**
 * This will still print 'user042', since the above
 * value assignment has no effect.
 */
console.log(user.uid);
```

Similarly, if we specified `writable: true`, the value assignment will be effective and the code will print out `user007`.

### `enumerable`

This descriptor controls how enumerating (looping or iterating) through the object properties will be effective for a particular object property. We can specify `true` if and only if this property shows up during enumeration of the properties on the corresponding object. Defaults to `false`.

Let's grasp the importance of this descriptor now.

For eg: let's say you want to have a special property called `persist` on the `user` object in our example above. But unlike other properties which are scalar values, you want this property to be a function. So now the `user` object is like below.

```javascript
const user = {
  username: 'John',
  age: 19,
  persist: () => {
    // logic goes here...
  },
};
```

There is nothing wrong until someone iterates through the above object properties using a loop, as below.

```javascript
const user = {
  username: 'John',
  age: 19,
  persist: () => {
    // logic goes here...
  },
};

for (const key in user) {
  if (Object.hasOwnProperty.call(user, key)) {
    console.log(user[key]);
  }
}

/**
 * These will be printed to the console
 *
 * John
 * 19
 * [Function: persist]
 *
 */
```

As you can see, the `persist` function is also logged into the console (as it string value). Usually, we need to prevent this from happening. For eg: someone who is looping through the properties of the `user` object to display its value in a UI, need to write a conditional logic to omit the `persist` key. That is bad.

So, in order to prevent this scenario, the creator of the `user` object can specifically tell JavaScript that the `persist` property should not be **visible** in any enumeration of the properties of the `user` object, by setting the `enumerable` descriptor of the `persist` property to `false`.

With this example, I can show you that the `defineProperty` can be used not only to *create* new properties (and specify their descriptors), but also to *define* descriptors of already existing properties too.

Building on top of the last example, let's see how we can set the `enumerable` descriptor of the `persist` property to `false`.

```javascript
const user = {
  username: 'John',
  age: 19,
  persist: () => {
    // logic goes here...
  },
};

/** 
 * Here we use defineProperty function to alter the descriptor of 
 * the existing property `persist`
 */
Object.defineProperty(user, 'persist', {
  enumerable: false,
});

for (const key in user) {
  if (Object.hasOwnProperty.call(user, key)) {
    console.log(user[key]);
  }
}

/**
 * These will be printed to the console.
 * 
 * John
 * 19
 *
 */
```
As you can see, we no longer see the ugly `[Function: persist]` printed into the console. Perfect!

Now let's move onto our last descriptor

### `configurable`

As we saw in the previous example, after the `persist` property was defined on the `user` object, we were able to use `defineProperty` function to make it non-enumarable. While this is a cool feature, sometimes we *really* do not need somebody else to change any descriptors of the properties of our objects. For eg: even though we (the owner of the `user` object) made `persist` to `enumerable: false`, anybody can revert it back inside *their* code to be `enumerable: true`, as below.

```javascript
const user = {
  username: 'John',
  age: 19,
  persist: () => {
    // logic goes here...
  },
};

// We make `persist` non-enumerable
Object.defineProperty(user, 'persist', {
  enumerable: false,
});

for (const key in user) {
  if (Object.hasOwnProperty.call(user, key)) {
    console.log(user[key]);
  }
}

// John
// 19

// Uh, oh. Somebody can change it back later!!
Object.defineProperty(user, 'persist', {
  enumerable: true,
});

for (const key in user) {
  if (Object.hasOwnProperty.call(user, key)) {
    console.log(user[key]);
  }
}

// John
// 19
// [Function: persist] <-- oops, it's back!
```

As shown above, we do not have full control over the descriptors after we define them. In order to address this problem, JavaScript has provided the `configurable` descriptor. If we make a particular object property `configurable: false`, nobody can change any descriptor of that property afterward! That perfectly settles down everything, right?

So in the above example, while setting `enumarable` of `persist` to `false`, we also can set `configurable` to be `false` and it will prevent somebody from changing it back again. Below is the code.

```javascript
const user = {
  username: 'John',
  age: 19,
  persist: () => {
    // logic goes here...
  },
};

/**
 * We make `persist` non-enumerable and also non-configurable
 */
Object.defineProperty(user, 'persist', {
  enumerable: false,
  configurable: false,
});

for (const key in user) {
  if (Object.hasOwnProperty.call(user, key)) {
    console.log(user[key]);
  }
}

// John
// 19

/**
 * Now the nice thing here is, this function call will actually
 * throw an error even without the 'strict mode' on.
 * The javascript runtime will throw the below error if we
 * execute this code.
 *
 *      Object.defineProperty(user, 'persist', {
 *             ^
 *      TypeError: Cannot redefine property: persist
 *
 * So nobody can redefine the 'persist' property anymore!
 */
Object.defineProperty(user, 'persist', {
  enumerable: true,
});

for (const key in user) {
  if (Object.hasOwnProperty.call(user, key)) {
    console.log(user[key]);
  }
}

// John
// 19
```

This makes the object descriptors more useful.

#### Note
In addition to preventing changes to the descriptors, `configurable: false` will also prevent the particular property from deleting from that object.

There are two caveats related to the `configurable` descriptor though.

- Setting `configurable: false` will not prevent the value of that particular property from being changed. We should explicitly set `writable: false` to prevent that.
- Even though we set `configurable: false`, there is an exception such that we can set `writable: false` afterward. This is reasonable since we are making the restriction tighter here, it should be allowed.

This is the basic idea about JavaScript object property descriptors! But as per the specification, there are two other descriptors in addition to the above 4 that are identified as *accessor descriptors*. They are `get` and `set`. They basically define functions that act as *getters* and *setters* of a particular object property. They are almost similar to the other descriptors we talked about. Therefore, if you are interested please have a look at the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) to get an understanding.

Hope you have gained the fundamental idea about **JavaScript Object Property Descriptors now** :)

Thank you for reading!
