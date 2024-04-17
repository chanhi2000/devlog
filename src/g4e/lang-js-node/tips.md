---
lang: ko-KR
title: Tips
description: Node.js > Tips
icon: fas fa-lightbulb
category:
  - Node.js
  - Tips
tag: 
  - js
  - node
  - nodejs
  - tips
  - snippets
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## One-liner

::: tabs

@tab:active Capitalize Text

```js
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const name = "robert";
capitalize(name) 
// Result: "Robert"
```

@tab Calculate Percent

```js
const calculatePercent = (value, total) => Math.round((value / total) * 100)

const questionsCorrect = 6;
const questionTotal = 11;
calculatePercent(questionsCorrect, questionsTotal); 
// Result: 55
```

@tab Get a Random Element

```js
const getRandomItem = (items) =>  items[Math.floor(Math.random() * items.length)];

const items = ["Nicely done!", "Good job!", "Good work!", "Correct!"];
getRandomItem(items); 
// Result: "Good job!"
```

@tab Remove Duplicate Elements

```js
const removeDuplicates = (arr) => [...new Set(arr)];

const friendList = ["Jeff", "Jane", "Jane", "Rob"];
removeDuplicates(friendList); 
// Result: ['Jeff', 'Jane', 'Rob']
```

@tab Sort Elements By Certain Property

```js
const sortBy = (arr, key) => arr.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);

const lessons = [{ position: 1, name: "Intro" }, { position: 0, name: "Basics" }];
sortBy(lessons, 'position'); 
// Result:
// {position: 0, name: 'Basics'},
// {position: 1, name: 'Intro'}
```

@tab Check If Arrays/Objects are Equal

```js
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

isEqual([1, '2'], [1, 2]); // Result: false
isEqual([1, 2], [1, 2]); // Result: true
```

@tab Count Number of Occurrences

```js
const countOccurrences = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

const pollResponses = ["Yes", "Yes", "No"];
const response = "Yes";
countOccurrences(pollResponses, response); 
// Result: 2
```

@tab Wait for a Certain Amount of Time

```js
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

wait(2000).then(() => goToSignupPage());
```

@tab Use the Pluck Property from Array of Objects

```js
const pluck = (objs, key) => objs.map((obj) => obj[key]);

const users = [{ name: "Abe", age: 45 }, { name: "Jennifer", age: 27 }];
pluck(users, 'name');
// Result: ['Abe', 'Jennifer']
```

@tab Insert an Element at a Certain Position

```js
const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)];

const items = [1, 2, 4, 5];
// insert the number 3 at index 2:
insert(items, 2, 3); 
// Result: [1, 2, 3, 4, 5]
```

:::

---

## Number

::: tabs

@tab:active Truncate an Array

```js
let array = [0, 1, 2, 3, 4, 5];
array.length = 3;
// Result: [0, 1, 2]
```

@tab Last Item in Array

```js
let array = [0, 1, 2, 3];
array.slice(-1);
// Result: [3]
```

@tab Convert to Boolean

```js
const isTrue = !0;
const alsoFalse = !!0;

// Result: true
// typeof isTrue: "boolean",
```

@tab Convert to String

```js
const val = 5 + "";
// Result: "5"
// typeof val: "string",
```

@tab Convert to Int

```js
let int = "15";
int = +int;
// Result: 15
// typeof  int: "number"
```

@tab Convert Float to Int

```js
const int = 19.8 | 0;
// Result: 19
// typeof int: "number"
```

@tab Remove Last Digit

```js
const int = 1553 / 10 | 0;;
// Result: 155
// typeof int: "number"
```

@tab Random number in a given range

```js
const randomNumberInAGivenRange = (num1, num2) => Math.random() * (num2 - num1) + num1;

console.log(randomNumberInAGivenRange(50, 100));
```

:::

---

## Performance

### `console.time()`

```js
// Our test function runs a big for-loop
function test() {
    let number = 0;
    for (let i=0; i<999999; i++) 
      number += 5;
}


console.time("Test function");     // Start measuring time
test();                            // Call our test function
console.timeEnd("Test function");  // stop measuring time

/*
 default: 1.205810546875ms
 (value may vary depnding on browser, etc.)
 */
```

### `performance.now()`

```js
let start = performance.now();     // Timestamp before execution
test();                            // Call our test function
let end  = performance.now();      // Timestamp after execution
// Calculate the time taken (in ms)
let ms = end - start;
console.log(ms);
/*
 default: 1.205810546875ms
 */

```


<TagLinks />