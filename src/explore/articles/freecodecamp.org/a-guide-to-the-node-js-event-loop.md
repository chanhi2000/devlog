---
lang: ko-KR
title: A Guide to the Node.js Event Loop
description: Article(s) > A Guide to the Node.js Event Loop
icon: fa-brands fa-node
category: 
  - Node.js
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - node
  - nodejs
  - node-js
head:
  - - meta:
    - property: og:title
      content: Article(s) > A Guide to the Node.js Event Loop
    - property: og:description
      content: A Guide to the Node.js Event Loop
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/a-guide-to-the-node-js-event-loop.html
prev: /programming/js-node/articles/README.md
date: 2024-05-28
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w2000/2024/05/Node.js-event-loop.jpg
---

# {{ $frontmatter.title }} 관련

```
component VPCard
{
  "title": "Node.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-node/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="A Guide to the Node.js Event Loop"
  desc="Node.js is an open-source JavaScript runtime environment that allows you to run JavaScript outside the browser. Although Node.js is single-threaded, it has an event loop that makes it multi-threaded. The Node.js event loop is a crucial mechanism in Node.js that makes Node.js programs run concurrently and asynchronously. Mastering the Node.js..."
  url="https://freecodecamp.org/news/a-guide-to-the-node-js-event-loop/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w2000/2024/05/Node.js-event-loop.jpg"/>

Node.js is an open-source JavaScript runtime environment that allows you to run JavaScript outside the browser. Although Node.js is single-threaded, it has an event loop that makes it multi-threaded.

The Node.js event loop is a crucial mechanism in Node.js that makes Node.js programs run concurrently and asynchronously. Mastering the Node.js event loop helps a Node.js developer understand how Node.js programs run under the hood.

In this article, you will learn the basics of the event loop, starting with threads and processes, then how the JavaScript event loop works, and finally, how the Node.js event loop works.

---

## What are Threads and Process?

To master the Node.js event loop, you must understand processes and threads.

A programmer can write programs that perform different tasks with different programming languages. While some programming languages can run just one task at a time, other programming languages can run several tasks simultaneously.

A process involves several tasks running in a program from start to finish, while a thread is the running of an individual task.

A process consists of all the steps a program takes to run till completion. It is a currently executing program. A program may have one or more independent processes, each having its own memory space or address. A process may have one or more threads in it.

A thread is a single unit of execution that is part of a process, like a task in a program. A thread has a thread ID, a register set, and a stack. A thread also shares its code section, data section, operating system resources, and memory space with other threads in a process.

The code below contains an `isNumberEven` function that checks if a number is even and an `isNumberOdd` function that checks if a number is odd. A process involves running this code from start to finish, while a thread involves running individual functions.

```js
function isNumberEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isNumberOdd(number) {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

isNumberEven(6);
isNumberOdd(1);
```

### What are Single-threads and Multi-threads?

All programming languages have a runtime engine that runs their code. Some runtime engines are single-threaded (which means they can only run one thread at a time), while some are multi-threaded (which means they can run more than one thread at a time).

The diagram below shows a single-threaded process and a multi-threaded process:

![Single-threaded and Multi-threaded Processes](https://hackmd.io/_uploads/SJkCXfQTa.jpg)

A single-threaded programming language has a single-threaded runtime engine that runs tasks in a program sequentially. A multi-threaded programming language has a multi-threaded runtime engine that runs tasks in a program simultaneously. A multi-threaded runtime engine is more performant than a single-threaded runtime engine.

Programming languages like Java, C#, and so on are multi-threaded, while languages like JavaScript, Python, and so on are single-threaded.

Single-threaded programming languages are synchronous, which means they run the task in their programs sequentially. JavaScript is synchronous, but its event loop makes it asynchronous.

In the upcoming sections, you will learn how the JavaScript event loop works and then master the Node.js event loop.

---

## How the JavaScript Event Loop Works

You must understand how the JavaScript runtime engine runs JavaScript code for you to understand the JavaScript event loop. 

The JavaScript runtime engine consists primarily of the:

- Memory heap and
- Call stack

The memory heap is where variables declared in the program are allocated memory space, and the call stack is where the runtime engine stores functions in the program for execution.

The JavaScript runtime engine runs the code below synchronously and in this step-by-step process:

It allocates memory space for all the variables in the code.

- It executes the `exponentiation` function after pushing onto the call stack.
- It executes the `validatePassword` function after pushing it onto the call stack.

```js
function exponentiation(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function validatePassword(password) {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isValidLength = password.length >= 8;

  if (hasUppercase && hasLowercase && hasNumber && isValidLength) {
    return "password is valid";
  } else {
    return "password is invalid";
  }
}

exponentiation(5, 3);
validatePassword("Ab01234");
```

If your code contains a blocking function, which is a function that takes a lot of time to run, the function will block other functions from running until it completes. Users can’t interact with a website that has a blocking function as part of its code while the function runs.

The code below contains the `fibonacci` function, which takes time to run. The runtime engine starts running the `factorial` function first, then the `fibonacci` function, during which the `findMin` function can’t run.

```js
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function fibonacci(num) {
  if (num <= 1) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function findMin(numbers) {
  if (!numbers || numbers.length === 0) {
    throw new Error("Empty array provided");
  }

  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

let numbers = [4, 2, 8, 1, 6];

factorial(5);

fibonacci(45);

findMin(numbers);
```

To make the program in the example above run asynchronously, you should make the `fibonacci` function non-blocking with JavaScript web APIs. 

JavaScript web APIs do not run on the main thread but instead create their threads, which enables them to run concurrently and not block the execution of other functions in your code.

You can use these JavaScript web APIs to make your functions non-blocking:

<SiteInfo
  name="setTimeout() global function - Web APIs | MDN"
  desc="Learn about the global setTimeout() function, including its syntax, code examples, specifications, and browser compatibility."
  url="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout"
  logo="https://developer.mozilla.org/favicon-48x48.cbbd161b.png"
  preview="https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png"/>

<SiteInfo
  name="Ajax - MDN Web Docs Glossary: Definitions of Web-related terms | MDN"
  desc="Asynchronous JavaScript and XML (Ajax, or AJAX) is a web development technique in which a web app fetches content from the server by making asynchronous HTTP requests, and uses the new content to update the relevant parts of the page without requiring a full page load. This can make the page more responsive, because only the parts that need to be updated are requested."
  url="https://developer.mozilla.org/en-US/docs/Glossary/AJAX"
  logo="https://developer.mozilla.org/favicon-48x48.cbbd161b.png"
  preview="https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png"/>

<SiteInfo
  name="Introduction to the DOM - Web APIs | MDN"
  desc="The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications."
  url="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
  logo="https://developer.mozilla.org/favicon-48x48.cbbd161b.png"
  preview="https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png"/>

So, if you add a `setTimeout` to your code like this:

```js
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function fibonacci(num) {
  if (num <= 1) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function findMin(numbers) {
  if (!numbers || numbers.length === 0) {
    throw new Error("Empty array provided");
  }

  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

let numbers = [4, 2, 8, 1, 6];

factorial(5);

setTimeout(fibonacci(45), 3000);

findMin(numbers);
```

The `factorial` and `findMin` functions will run on the main thread, while the `fibonacci` function runs concurrently on a separate thread.

To properly understand how the program above runs, you must understand how the JavaScript event loop works. The JavaScript event loop is a mechanism by which tasks in a JavaScript program run asynchronously.

The JavaScript event loop has a callback queue that stores functions that take time to execute.

The event loop sends functions that execute immediately to the callback queue for execution and sends blocking functions to web API threads for execution. 

Then, the event loop sends the blocking function back to the callback queue when the set time elapses. The event loop then checks if the call stack is empty before pushing the function in the callback queue to the call stack for execution.

The diagram below explains how the event loop in JavaScript works:

![The JavaScript event loop](https://hackmd.io/_uploads/B1AMVMQpa.jpg)

The code above that contains `factorial`, `fibonacci`, and `findMin` functions is executed like this after adding a `setTimeout` function.

The event loop pushes the `factorial` function onto the call stack for execution. Then, the event loop pushes the `fibonacci` function onto the call stack, but the `fibonacci` function has a `setTimeout` function that prevents it from executing immediately. So, the event loop pushes the `fibonacci` function to a separate thread for web APIs to run concurrently. 

Then, the event loop pushes the `findMin` function onto the call stack for execution. When the time set in the `setTimeout` elapses, the event loop pushes the `fibonacci` function to the call stack for execution.

---

## How The Node.js Event Loop Works

Node.js is a JavaScript runtime environment that enables JavaScript to run outside the browser, like on the command line interface, servers, and hardware.

Node.js has an event loop that is similar to the JavaScript event loop. The Node.js event loop and the JavaScript event loop have a call stack and a callback queue. The Node.js event loop is implemented and managed by a library named [<FontIcon icon="fas fa-globe"/>libuv](https://libuv.org/) written in C.

The Node.js event loop has six phases, which are:

- Timer phase
- Pending Callbacks Phase
- Idle Phase
- Poll Phase
- Check Phase
- Close Callbacks Phase

The diagram below shows how the Node.js event loop works:

![The Node.js event loop](https://hackmd.io/_uploads/SkiVEMXTp.jpg)

There is a microtask queue that exists outside of the Node.js event loop. The microtask queue consists of the `nextTick queue` and the `Promise queue`. The `nextTick queue` runs the `process.nextTick` function, while the `Promise queue` runs `.then`, `.catch`, and other promises.

In the upcoming sections, you will learn about each phase of the Node.js event loop.

### Timer Phase

There are three timers in Node.js: `setTimeout`, `setInterval`, and `setImmediate`. `setTimeout` and `setInterval` run in the timer phase. The code sample below runs during the timer phase:

```js
setTimeout(() => {
  console.log("setTimeout callback executed");
}, 1000);

setInterval(() => {
  console.log("setInterval callback executed");
}, 2000);
```

### Pending Callbacks Phase

I/O operations execute in the poll phase of the event loop. During the poll phase, some specific I/O operations callbacks defer to the pending phase of the next iteration of the event loop. I/O operations callbacks deferred from the previous iteration run in the pending callbacks phase.

The code sample below runs during the ‘pending callbacks’ phase:

```js
const fs = require("fs");

fs.readFile(__filename, (err, data) => {
  if (err) throw err;
  console.log("File data:", data);
});
```

### Idle Phase

The idle phase is not a normal phase of the Node.js event loop. It is a period whereby the event loop has nothing to do but perform background tasks like checking for low-priority results or running garbage collection.

To skip the idle phase and not perform background tasks, you can call the `idle.ignore()` method from the [<FontIcon icon="fa-brands fa-npm"/>idle-gc](https://npmjs.com/package/idle-gc) package in your code.

```js
const { idle } = require("idle-gc");

idle.ignore();
```

The `idle.ignore()` method ensures that the code continues to run without any idle period till completion. However, due to the performance issues it causes, the `idle.ignore()` method should be used sparingly.

### Poll Phase

The poll phase is where I/O operations execute. I/O operations transfer data to or from a computer. The event loop checks for new I/O operations and executes them in the poll queue.

The code sample below runs during the poll phase:

```js
const http = require("http");

http.get("http://jsonplaceholder.typicode.com/posts/1", (res) => {
  console.log("HTTP request response received");
  res.on("data", (chunk) => {
    // Do something with the data
  });
});
```

### Check Phase

The check phase is where the `setImmediate` timer runs. The Node.js event loop goes to the check phase when there is a `setImmediate` in the program, and the poll phase becomes idle or when the poll phase completes.

The code sample below runs during the check phase:

```js
setImmediate(() => {
  console.log("setImmediate callback executed");
});
```

### Close Callbacks Phase

The close callbacks phase is the last phase of the Node.js event loop. The close callback phase is where callbacks from the close event of a socket and the closing of an `HTTP` server run.

The code sample below runs during the check phase:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
  server.close(() => {
    console.log('Server closed');
  });
});
```

---

## Conclusion

The Node.js event loop is the mechanism that enables asynchronous programming in Node.js. 

As a Node.js developer, you can understand how your Node.js code runs under the hood if you master the Node.js event loop. 

This article explained processes and threads, the JavaScript event loop, and the Node.js event loop.

---

<TagLinks />