---
lang: ko-KR
title: 01 Concepts
description: 🦀Wasm by Example (for Rust) > 01 Concepts
tags: ["crashcourse", "wasm", "rust", "assemblyscript", "c", "cpp"]
meta:
  - name: 🦀Wasm by Example (for Rust)
    content: 🦀Wasm by Example (for Rust) > 01 Concepts
  - property: og:title
    content: 🦀Wasm by Example (for Rust)
  - property: og:description
    content: 01 Concepts
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/rust-wasm-by-example/01-concepts.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

Examples that express some of the major underlying concepts in WebAssembly. Some of these examples are not the most convenient or productive way for building projects with WebAssembly. However, these minimal examples are great for learning, or developing straightforward / lower-level parts of an application.

---

## Introduction

```card
title: Wasm By Example - Introduction
desc: Introduction
link: https://wasmbyexample.dev/examples/introduction/introduction.all.en-us.html
logo: https://wasmbyexample.dev/Web_Assembly_Logo.svg
color: rgba(136,103,249,0.2)
```

Let's do a brief introduction into major concepts of WebAssembly:

- WebAssembly is a compile-targeted language for running bytecode on the web.
- Relative to Javascript, WebAssembly offers predictable performance. It is not inherently __faster__ than Javascript, but it __can be faster than JavaScript__ in the correct use case. Such as __computationally intensive tasks__, like nested loops or handling large amounts of data. Therefore, __WebAssembly is a complement to JavaScript, and not a replacement.__
- WebAssembly is extremely portable. WebAssembly runs on: all major web browsers, V8 runtimes like [<FontIcon icon="iconfont icon-nodeJS"/>Node.js](https://nodejs.org/en), and independent Wasm runtimes like [Wasmtime](https://wasmtime.dev/), [<FontIcon icon="iconfont icon-github"/>`bytecodealliance/lucet`](https://github.com/bytecodealliance/lucet), and [<FontIcon icon="iconfont icon-github"/>`wasmerio/wasmer`](https://github.com/wasmerio/wasmer).
- WebAssembly has Linear Memory, in other words, one big expandable array. And in the context of Javascript, synchronously accessible by Javascript and Wasm.
- WebAssembly can export functions and constants, And in the context of Javascript, synchronously accessible by Javascript and Wasm.
- WebAssembly, in its current MVP, only handles integers and floats. However, tools and libraries exist to make passing high-level data types convenient.

With that, let's take a look at our [Hello World](#hello-world) to see some of the concepts in action.

---

## Hello World!

```card
title: Wasm By Example - Hello World!
desc: Hello World!
link: https://wasmbyexample.dev/examples/hello-world/hello-world.rust.en-us.html
logo: https://wasmbyexample.dev/Web_Assembly_Logo.svg
color: rgba(136,103,249,0.2)
```

__Before getting started, be sure to check out all of the languages available, by clicking the "languages" dropdown in the header.__

### Overview

For our first program, we will be doing a "Hello world" type of program in [Rust](https://www.rust-lang.org/) and [<FontIcon icon="iconfont icon-github"/>`rustwasm/wasm-pack`](https://github.com/rustwasm/wasm-pack).

To keep things simple with Wasm's limitations mentioned [in the introduction example](https://wasmbyexample.dev/example-redirect?exampleName=introduction&programmingLanguage=all), instead of displaying a string, we will add two numbers together and display the result. Though, it is good to keep in mind, in later examples, a lot of these limitations will be abstracted away by your WebAssembly Language of choice (In this case, Rust). It is also highly recommended you take a look at the [wasm-pack QuickStart Guide](https://github.com/rustwasm/wasm-pack#-quickstart-guide), as it will be referenced a lot in this example.

### Project Setup

So first, Let's get [rust installed](https://www.rust-lang.org/tools/install), which includes [cargo](https://doc.rust-lang.org/cargo/index.html). Then, using cargo, let's install wasm-pack, which we will need later:

```sh
cargo install wasm-pack
```

Next, let's create our rust crate in our current directory using cargo:

```sh
cargo init
```

Then, let's edit our new <FontIcon icon="iconfont icon-file"/>`Cargo.toml` to implement [wasm-pack](https://github.com/rustwasm/wasm-pack#-quickstart-guide) as mentioned in their quickstart:

```toml
[package]
name = "hello-world"
version = "0.1.0"
authors = ["Your Name <your@name.com>"]
edition = "2018"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

Lastly, let's take a quick peek inside at the <FontIcon icon="iconfont icon-folder"/>`src/` directory. Since we are building a library (`lib`) to be used by a larger application, __we need to rename the <FontIcon icon="iconfont icon-folder"/>`src/`<FontIcon icon="fas fa-gear"/>`main.rs` to <FontIcon icon="iconfont icon-folder"/>`src/`<FontIcon icon="fas fa-gear"/>`lib.rs`.__ Go ahead and do that now before moving forward.

Now that we have our project and environment setup, let's go ahead and start the actual implementation.

### Implementation

Let's go ahead and replace <FontIcon icon="iconfont icon-folder"/>`src/`<FontIcon icon="fas fa-gear"/>`lib.rs` with the required `use` call as mentioned in the quickstart, as well as our add function:

```rs
// The wasm-pack uses wasm-bindgen to build and generate JavaScript binding file.
// Import the wasm-bindgen crate.
use wasm_bindgen::prelude::*;

// Our Add function
// wasm-pack requires "exported" functions
// to include #[wasm_bindgen]
#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
  return a + b;
}
```

Then, let's compile our crate using wasm-pack, into a wasm module. Then run the following command, taking note of the [`--target web`](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target). The wasm-pack tool has support for a lot of different output types, especially for bundlers like Webpack or Rollup. But, since we want an ES6 module in our case, we use the `web` target below:

```sh
wasm-pack build --target web
```

This will output a <FontIcon icon="iconfont icon-folder"/>`pkg/` directory containing our wasm module, wrapped in a js object. Next, lets create an <FontIcon icon="iconfont icon-nodeJS"/>`index.js` JavaScript file, and import the outputted ES6 module in our <FontIcon icon="iconfont icon-folder"/>`pkg/` directory. Then, we will call our exported `add()` function:

::: note Note

In this example, we are using the exported function from the wasm module directly to help highlight the WebAssembly API. `wasm-bindgen` generates JavaScript bindings code that can be imported as an ES6 import, and is the recommended way to work with your Rust Wasm modules. These JavaScript bindings are shown in the "Passing High Level Data Types with `wasm-bindgen`" example.

:::

```js
// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "./pkg/hello_world.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const helloWorld = await init("./pkg/hello_world_bg.wasm");

  // Call the Add function export from wasm, save the result
  const addResult = helloWorld.add(24, 24);

  // Set the result onto the body
  document.body.textContent = `Hello World! addResult: ${addResult}`;
};
runWasm();
```

Lastly, lets load our ES6 Module, <FontIcon icon="iconfont icon-nodeJS"/>`index.js` Javascript file in our <FontIcon icon="fas fa-file-code"/>`index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World - Rust</title>
    <script type="module" src="./index.js"></script>
  </head>
  <body></body>
</html>
```

And we should have a working Wasm Add (Hello World) program! Congrats!

You should have something similar to the demo ([Source Code](https://wasmbyexample.dev/source-redirect?path=examples/hello-world/demo/rust)) below:

### Demo

::: normal-demo Demo

```html
<html>
<head>
  <meta charset="UTF-8">
  <title>Hello World - Rust</title>
  <link rel="preload" href="./index.js" as="script">
</head>

<body>Hello World! addResult: 48</body>
</html>
```

:::

Next let's take a deeper look at WebAssembly [Exports](#Exports).

---

## Exports

```card
title: Wasm By Example - Exports
desc: Exports
link: https://wasmbyexample.dev/examples/exports/exports.rust.en-us.html
logo: https://wasmbyexample.dev/Web_Assembly_Logo.svg
color: rgba(136,103,249,0.2)
```

### Overview

In our [Hello World Example](#hello-world), we called a function exported from WebAssembly, in our Javascript. Let's dive a little deeper into exports and how they are used.

### Implementation

If you haven't done so already, you should set up your project following the steps laid out in the [Hello World Example](#hello-world) example.

First, let's add the following to our <FontIcon icon="iconfont icon-folder"/>`src/`<FontIcon icon="fas fa-gear"/>`lib.rs` file:

```rs
// The wasm-pack uses wasm-bindgen to build and generate JavaScript binding file.
// Import the wasm-bindgen crate.
use wasm_bindgen::prelude::*;

// This exports an add function.
// It takes in two 32-bit integer values
// And returns a 32-bit integer value.
#[wasm_bindgen]
pub fn call_me_from_javascript(a: i32, b: i32) -> i32 {
  return add_integer_with_constant(a, b);
}

// A NOT exported constant
// Rust does not support exporting constants
// for Wasm (that I know of).
const ADD_CONSTANT: i32 = 24;

// A NOT exported function
// It takes in two 32-bit integer values
// And returns a 32-bit integer value.
fn add_integer_with_constant(a: i32, b: i32) -> i32 {
  return a + b + ADD_CONSTANT;
}`
```

Then, let's compile that using [<FontIcon icon="iconfont icon-github"/>`rustwasm/wasm-pack`](https://github.com/rustwasm/wasm-pack), which will create a <FontIcon icon="iconfont icon-folder"/>`pkg/` directory:

```sh
wasm-pack build --target web
```

Next, lets create an <FontIcon icon="iconfont icon-nodeJS"/>`index.js` file to load and run our wasm output. Let's import the wasm initialization module from <FontIcon icon="iconfont icon-folder"/>`pkg/`<FontIcon icon="iconfont icon-nodeJS"/>`exports.js` that was generated by wasm-pack. Then, let's call the module passing in the path to our wasm file at <FontIcon icon="iconfont icon-folder"/>`pkg/`<FontIcon icon="iconfont icon-file"/>`exports_bg.wasm` that was generated by wasm-pack. Then, let's go ahead and call out exported functions, and explore what functions were NOT exported:

::: note NOTE

In this example, we are using the exported function from the wasm module directly to help highlight the WebAssembly API. `wasm-bindgen` generates JavaScript bindings code that can be imported as an ES6 import, and is the reccomended way to work with your Rust Wasm modules. These JavaScript bindings are shown in the "Passing High Level Data Types with `wasm-bindgen`" example.

:::

```rs
import wasmInit from "./pkg/exports.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const rustWasm = await wasmInit("./pkg/exports_bg.wasm");

  // Call the Add function export from wasm, save the result
  const result = rustWasm.call_me_from_javascript(24, 24);

  console.log(result); // Should output '72'
  console.log(rustWasm.ADD_CONSTANT); // Should output 'undefined'
  console.log(rustWasm.add_integer_with_constant); // Should output 'undefined'
};
runWasm();
```

Lastly, lets load our ES6 Module, <FontIcon icon="iconfont icon-nodeJS"/>`index.js` Javascript file in our <FontIcon icon="fas fa-file-code"/>`index.html`. And you should get something similar to the demo ([Source Code](https://wasmbyexample.dev/source-redirect?path=examples/exports/demo/rust)) below!

### Demo

::: normal-demo Demo

```html
<html>
<head>
  <meta charset="UTF-8">
  <title>Hello World - Rust</title>
</head>
<body>
  <script type="module" src="./index.js"></script>
  <pre style="border: 1px solid black;">
  DOM Console:
 
  72
   
  undefined
   
  undefined
  </pre>
</body>
</html>
```

:::

Next let's take a look at [WebAssembly Linear Memory](#webassembly-linear-memory).

---

## WebAssembly Linear Memory

```card
title: Wasm By Example - WebAssembly Linear Memory
desc: WebAssembly Linear Memory
link: https://wasmbyexample.dev/examples/webassembly-linear-memory/webassembly-linear-memory.rust.en-us.html
logo: https://wasmbyexample.dev/Web_Assembly_Logo.svg
color: rgba(136,103,249,0.2)
```

---

## Importing Javascript Functions Into WebAssembly

```card
title: Wasm By Example - Importing Javascript Functions Into WebAssembly
desc: Importing Javascript Functions Into WebAssembly
link: https://wasmbyexample.dev/examples/importing-javascript-functions-into-webassembly/importing-javascript-functions-into-webassembly.rust.en-us.html
logo: https://wasmbyexample.dev/Web_Assembly_Logo.svg
color: rgba(136,103,249,0.2)
```

---

<TagLinks />