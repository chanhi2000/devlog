---
lang: ko-KR
title: "What is Speedy Web Compiler? SWC Explained With Examples"
description: "Article(s) > What is Speedy Web Compiler? SWC Explained With Examples"
icon: iconfont icon-nextjs
category: 
  - Node.js
  - Next.js
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
      content: "Article(s) > What is Speedy Web Compiler? SWC Explained With Examples"
    - property: og:description
      content: "What is Speedy Web Compiler? SWC Explained With Examples"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/what-is-speedy-web-compiler.html
prev: /programming/js-node/articles/README.md
date: 2024-09-04
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725290113209/260f00cb-5bfe-4260-8e45-0c61a1897cae.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Next.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-next/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

<SiteInfo
  name="What is Speedy Web Compiler? SWC Explained With Examples"
  desc="In the evolving landscape of JavaScript development, the need for efficient and powerful tooling has become increasingly important. Developers rely on tools like compilers and bundlers to transform their code, optimize performance, and ensure compati..."
  url="https://freecodecamp.org/news/what-is-speedy-web-compiler/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725290113209/260f00cb-5bfe-4260-8e45-0c61a1897cae.png"/>

In the evolving landscape of JavaScript development, the need for efficient and powerful tooling has become increasingly important.

Developers rely on tools like [<FontIcon icon="fa-brands fa-wikipedia-w"/>**compilers**](https://en.wikipedia.org/wiki/Compiler) and [<FontIcon icon="fas fa-globe"/>**bundlers**](https://codejourney.net/what-is-a-javascript-bundler/) to transform their code, optimize performance, and ensure compatibility across different environments.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1725287352931/41e13dc3-100e-4f75-87df-98342df4beb2.png)

These tools are essential for modern JavaScript applications, enabling developers to write clean, maintainable code while leveraging the latest language features.

This article will help you understand what Speedy Web Compiler (SWC) is and how it helps optimize the performance of your web apps.

[[toc]]

---

## What is Speedy Web Compiler?

First, let me break it down.

SWC stands for Speedy Web Compiler, and when broken down:

- **Speedy**: This means it's fast! SWC processes and transforms JavaScript code, making it efficient to use in big projects.
- **Web**: It’s all about web development. It focuses on improving how JavaScript (the language of the web) handles it.
- **Compiler**: It takes code written in one form and transforms it into another form that can be better understood or used by computers.

---

## Background of SWC

[<FontIcon icon="iconfont icon-github"/>`kdy1`](https://github.com/kdy1), a South Korean developer and maintainer of [<FontIcon icon="iconfont icon-nextjs"/>Next.js](https://nextjs.org/), created SWC as a faster tool for handling JavaScript code.

The motivation was the need for speed and efficiency, as web projects grow larger and more complex.

With numerous websites and apps depending on JavaScript, SWC helps developers save time and work more efficiently.

---

## How Speedy Web Compiler Works

SWC uses [<FontIcon icon="fa-brands fa-rust"/>Rust](https://rust-lang.org/), a programming language known for its speed and safety.

SWC works by taking your JavaScript or TypeScript code and transforming it into a version that can run efficiently in various environments.

Understanding how SWC achieves this involves examining its core steps: parsing, transforming, and generating code.

### How Does SWC Parse Code?

The first step in the compilation process is parsing.

Begins by **reading** and analyzing the code to understand its structure.

This is akin to taking a complex sentence and breaking it down into its grammatical components—subject, verb, object, etc.

![Illustration of Code parsing into forming abstract syntax tree](https://cdn.hashnode.com/res/hashnode/image/upload/v1725287153049/b7ec431c-24db-4c7a-9fb0-ef3ce0d92921.png)

In technical terms, SWC converts your code into an [<FontIcon icon="fa-brands fa-wikipedia-w"/>**Abstract Syntax Tree (AST)**](https://en.wikipedia.org/wiki/Abstract_syntax_tree).

The AST is a tree-like representation of the source code, where each node in the tree corresponds to a construct occurring in the code, such as expressions, statements, and functions.

This tree structure allows SWC to process and understand the code’s logic in a way that is both efficient and scalable.

### How Does SWC Transform Code?

After creating the AST, SWC moves on to the transformation phase.

This is where the magic happens—SWC applies various optimizations and changes to the code based on the target environment.

For instance, if you're targeting older browsers that don't support modern JavaScript features, SWC will transform your ES6+ code into a backward-compatible version.

![Yellow gear with two circular arrows surrounding it, accompanied by the text 'Transformation of AST' on a dark background.](https://cdn.hashnode.com/res/hashnode/image/upload/v1725287185279/371d2ac2-e919-4f25-8caf-01d4157fd290.png)

During this phase, SWC also handles TypeScript transformations. It strips away TypeScript-specific syntax, such as types and interfaces, converting the code into pure JavaScript that gets executed by any JavaScript engine.

SWC can apply custom transformations based on plugins or specific configurations, making it highly versatile.

### How Does SWC Generate Optimized Code?

After the transformations are complete, SWC proceeds to the final step: code generation.

In this step, SWC takes the transformed AST and converts it back into executable code.

In contrast, this process is not just a reversal of the parsing process.

SWC takes special care to generate code that is both functionally correct and optimized for performance.

![Yellow line drawing of a coding window with a wrench and gear icon, above text that reads 'Generation of Optimized Code' on a black background.](https://cdn.hashnode.com/res/hashnode/image/upload/v1725287212996/af724e34-6473-4104-8244-e35c1be6a3c0.png)

For instance, SWC might remove dead code (code that will never be executed) or inline certain functions to reduce overhead.

The goal is to produce code that is as clean and efficient as possible, ensuring that it runs quickly and reliably in production environments.

---

## Benefits of Using Speedy Web Compiler

### Performance

One of the major benefits of using SWC is its outstanding speed. SWC achieves this exceptional speed by using Rust.

Developers can expect a significant performance improvement when compiling their code for large projects or codebases.

![Illustration of a stopwatch inside a web browser window, with motion lines indicating speed. The text below reads 'Faster Loading Times.](https://cdn.hashnode.com/res/hashnode/image/upload/v1725287254910/9c4827d9-81db-488d-bdb8-6b0806ddfd67.png)

This speed greatly reduces build times, enhancing the efficiency and responsiveness of the development process. It is so fast, you might think it’s late for a meeting!

### Optimized Output

SWC compiles your code and guarantees that the output is highly optimized for performance in production environment by removing dead code, in-lining functions, and reducing the size of the output.

This makes using SWC cost-effective, saving you from extra expenses during production.

The result is a leaner, faster, and more efficient code that can enhance loading times and performance in web applications.

### Compatibility

SWC is fully compatible with modern JavaScript libraries and frameworks.

You do not have to worry about using ES6+ or TypeScript. This makes SWC a versatile choice for your projects.

---

## How to Set Up Speedy Web Compiler

### Installation

To install SWC in your JavaScript or TypeScript project, follow these steps:

::: tabs

@tab:active 1. Initialize your project

If you haven't already, start by initializing a new project. In your terminal, run:

```sh
npm init -y
```

@tab 2. Install SWC with `npm`:

Run the following command to download the pre-built binaries:

```sh
npm install -D @swc/cli @swc/core
```

@tab 3. Create a JavaScript file:

Create a `src/index.js` file with some code:

```js
const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet("World"));
```

@tab 4. Compile with SWC:

Run SWC from the command line to compile your JavaScript file:

```sh
npx swc src/index.js -o dist/index.js
```

@tab 5. Resulting Code:

The resulting JavaScript code in <FontIcon icon="fas fa-folder-open"/>`dist/`<FontIcon icon="fa-brands fa-js"/>`index.js` will look like this:

```js
"use strict";
var greet = function(name) {
    return "Hello, " + name + "!";
};
console.log(greet("World"));
```

:::

This is the transpiled ES5 code produced by SWC, suitable for environments that require backward compatibility with older JavaScript versions.

---

## SWC Integration in Popular Frameworks

If you are using Next.js, Deno, Vite, Remix, Parcel, or Turbopack, SWC is already integrated.

::: note

![Logos of various web development frameworks and tools on a black background, which include: Deno, Vite, Next.js, Remix, Turbopack, and an open cardboard box.](https://cdn.hashnode.com/res/hashnode/image/upload/v1725287305286/e0a1e681-4531-402c-ae41-1f8c5f1318c8.png)

Notable improvements were made on Next.js, a popular React framework, since version 12 (Source: [<FontIcon icon="iconfont icon-nextjs"/>Next.js 12: The SDK for the Web](https://nextjs.org/blog/next-12))

:::

---

## Conclusion

In the constantly changing realm of JavaScript development, having the correct tools can make a significant difference.

SWC, the [<FontIcon icon="fas fa-globe"/>Speedy Web Compiler](http://swc.rs), distinguishes itself as a strong solution for converting and optimizing JavaScript and TypeScript code.

Its impressive speed, owing to its Rust-based implementation, along with its efficient management of code transformations and optimizations, positions it as a powerful tool for modern web development.

---

<TagLinks />