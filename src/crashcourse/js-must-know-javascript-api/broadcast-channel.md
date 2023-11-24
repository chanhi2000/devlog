---
lang: ko-KR
title: Broadcast Channel API
description: 🧶Must Know JavaScript API > Broadcast Channel API
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🧶Must Know JavaScript API > Broadcast Channel API
    content: Broadcast Channel API
  - property: og:title
    content: Broadcast Channel API
  - property: og:description
    content: 🧶Must Know JavaScript API > Broadcast Channel API
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/js-must-know-javascript-api/broadcast-channel.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

When our web pages need to share data between different browser windows, we may need to use technologies such as WebSocket or WebRTC. However, these technologies can be too complicated. The browser comes with Broadcast Channel API that allows us to easily share data between different browser windows without using complicated technologies.

This article will introduce the basic and advanced usage of Broadcast Channel API, and provide sample code to help readers better understand and use the API.

## 🏝 What is the Broadcast Channel API?

The Broadcast Channel API is a browser Web API that allows us to create a channel __capable of broadcasting data to multiple documents or browser windows.__ The channel enables data sharing between different browser windows. We can send messages to the channel and other windows can listen to the channel to receive messages.

## 🎨 How to use Broadcast Channel API?

### Basic usage

The basic way to use the Broadcast Channel API is very simple. We just need to create a `BroadcastChannel` instance and use the `postMessage()` method to send a message to the channel. The following is a simple example:

```js
// Create a broadcast channel named "my_channel"
const myChannel = new BroadcastChannel("my_channel")

// send a message to this channel
myChannel.postMessage("Hello world!")
```

Then listen to that channel in other windows to receive messages from that channel. The following is a simple example:

```js
// listen to a broadcast channel named "my_channel"
const myChannel = new BroadcastChannel("my_channel")
// Listen to the channel and handle messages
myChannel.onmessage = function (event) {
  console.log(event.data)
}
```

The `BroadcastChannel` instance also provides some other methods and events, such as the `close()` method and the `close` event. The full documentation can be found at [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel).

### Advanced Usage

The Broadcast Channel API also provides some advanced usage methods, such as using `ArrayBuffer` and `Transferable Objects` to pass large data, using the `MessageEvent.source` property to identify the source of the message, and using the `MessageEvent.ports` property to pass communication channels via the `postMessage()` method. The following is an example of passing data using `ArrayBuffer` and `Transferable Objects`:

```js
// Create a broadcast channel named "my_channel"
const myChannel = new BroadcastChannel("my_channel")
// Create an ArrayBuffer containing the data you want to send
const buffer = new ArrayBuffer(1024)
// Send a message containing the ArrayBuffer to the channel
myChannel.postMessage(buffer, [buffer])
```

Then receive the message in another window and get the `ArrayBuffer` from the `MessageEvent.data` property:

```js
// Listen to the broadcast channel named "my_channel"
const myChannel = new BroadcastChannel("my_channel")
// Listen to the channel and handle messages
myChannel.onmessage = function (event) {
  const buffer = event.data
  // ...
}
```

The Broadcast Channel API also provides other advanced uses, see the documentation for details.

---

## 🧭 Compatibility

The Broadcast Channel API is well-compatible and will work in most modern browsers. The details are as follows:

- Chrome 54+ ✅
- Firefox 38+ ✅
- Safari 10+ ✅
- Opera 41+ ✅
- Edge 16+ ✅
- iOS Safari 10.0–10.2+ ✅
- Android Browser 67+ ✅
- Chrome for Android 59+ ✅

::: Note

⚠️ Note that the Broadcast Channel API does not currently support Internet Explorer. If your site needs to support Internet Explorer, you may need to use other technologies or libraries to implement data sharing.

![photo by Can I Use](https://miro.medium.com/v2/resize:fit:1400/0*uGhU8f98l6301eib)

:::

---

## 📋 Broadcast Channel API Pros and Cons

Its advantages include 🍇:

1. __Passing Data__: Provides a reliable way for independent JavaScript applications to pass data within the same site in the same browser.
2. __Fast Transfer Speed__: Provides faster data transfer speeds with high-speed connections.
3. __Real-time__: Provides real-time, low-latency data transfer.
4. __Reliability__: Enables recovery in case of small packet loss or accidental loss.

However, the Broadcast Channel API also has the following drawbacks:

1. __Same source only__: Broadcast Channel API can only communicate within the same browser same site. This means that while different sites can be opened within the same browser, they cannot communicate using the Broadcast Channel API.
2. __Limited by browser support__: Like most Web APIs, the Broadcast Channel API is limited by the support and compatibility of different browsers and platforms.
3. __Requires common API usage__: Different JavaScript applications need to know how to use the Broadcast Channel API to share data. If developers do not have the necessary knowledge, then the API may not be used as expected.

---

## 👍 Real-world development examples

Next, a real-world development example.

__Case Requirement__: The Broadcast Channel API is used to broadcast messages between different browser tabs of the same origin to other tabs. All tabs will display the same result, and if any tab changes the result, the other tabs will also display the changed result.

The implementation code is as follows:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Broadcast Channel Example</title>
  </head>
  <body>
    <h2>Broadcast Channel Example</h2>
    <div id="result">Result: <span></span></div>
    <script>
      // Create a new Broadcast Channel with name
      const channel = new BroadcastChannel("resultChannel");
      const resultEl = document.querySelector("#result span");
      // Option 1 Base
      // Listen for messages from the channel
      channel.onmessage = (e) => {
        resultEl.innerText = e.data;
      };
      // Option 2 - Using addEventListener
      // channel.addEventListener('message', e => {
      //    resultEl.innerText = e.data;
      // });
      // Listen for changes on the input
      const inputEl = document.createElement("input");
      inputEl.type = "text";
      inputEl.addEventListener("input", (e) => {
        const val = e.target.value;
        // Broadcast the change to other tabs
        channel.postMessage(val);
        resultEl.innerText = val;
      });
      // Insert the input element
      document.body.appendChild(inputEl);
    </script>
  </body>
</html>
```

In the above sample code, we create a Broadcast Channel named `resultChannel` and use the `channel.postMessage()` function to broadcast the changed value of the input box to all browser tabs. When one tab changes the result, all tabs will display the changed result. In addition, we demonstrate two different methods of listening for messages (`onmessage` and `addEventListener`) and how to send messages to the Broadcast Channel.

---

## 🍭 Repository Recommendations

A few Github open-source projects based on the Broadcast Channel API wrapper are recommended:

1. [broadcast-channel](https://github.com/pubkey/broadcast-channel) — This project is an easy-to-use Broadcast Channel API wrapper with 1500+ ⭐️.
2. [react-broadcast-channel](https://github.com/ReactTraining/react-broadcast) — This project is a Broadcast Channel API wrapper for React applications with 1300+ ⭐️.

---

## 🎯 Summary

The Broadcast Channel API is a Web API that enables easy sharing of data between different browser windows. We hope this article will help readers to use this API better.



<TagLinks />