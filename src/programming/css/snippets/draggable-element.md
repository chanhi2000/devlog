---
lang: ko-KR
title: Draggable Element
description: Snippets > Draggable Element
icon: iconfont icon-view
category: 
  - CSS
  - Snippets
tag: 
  - css
  - scss
  - sass
  - snippets
  - drag
prev: /programming/css/snippets/README.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CSS > Snippets",
  "desc": "Snippets",
  "link": "/programming/css/snippets/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

::: normal-demo Draggable Element

```html
<div id="container">
  <div id="draggable-elem">
    <p>Drag Me</p>
  </div>
</div>

```

```css
body {
  padding: 0;
  margin: 0;
  background: linear-gradient(135deg, #a3d0f1, #021560);
}
#container {
  height: 100vh;
  width: 100vw;
  position: relative;
}
#draggable-elem {
  position: absolute;
  background-color: #ffffff;
  font-size: 1.6em;
  width: 7em;
  height: 7em;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  display: grid;
  place-items: center;
  font-family: "Poppins", sans-serif;
  border-radius: 0.3em;
  cursor: move;
}
```

```js
// Select the draggable element by its ID
let draggableElem = document.getElementById("draggable-elem");

// Initialize variables to store initial mouse coordinates and movement state
let initialX = 0,
  initialY = 0;
let moveElement = false;

// Define an object to store event types for mouse and touch interactions
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

// Initialize a variable to store the type of input device (mouse or touch)
let deviceType = "";

// Function to detect touch device by attempting to create a TouchEvent
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch"; // If successful, set deviceType to "touch"
    return true;
  } catch (e) {
    deviceType = "mouse"; // If unsuccessful, set deviceType to "mouse"
    return false;
  }
};

isTouchDevice(); // Detect the type of input device

// Event listener for the start of dragging (mousedown or touchstart)
draggableElem.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault(); // Prevent default behavior of the event

  // Store initial x and y coordinates based on the type of input device
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

  // Set moveElement flag to true to indicate that dragging has started
  moveElement = true;
});

// Event listener for dragging movement (mousemove or touchmove)
draggableElem.addEventListener(events[deviceType].move, (e) => {
  // Check if dragging is in progress
  if (moveElement) {
    e.preventDefault(); // Prevent default behavior of the event

    // Calculate new x and y coordinates based on the type of input device
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    // Update the position of the draggable element relative to the initial position
    draggableElem.style.top =
      draggableElem.offsetTop - (initialY - newY) + "px";
    draggableElem.style.left =
      draggableElem.offsetLeft - (initialX - newX) + "px";

    // Update initial coordinates for the next movement calculation
    initialX = newX;
    initialY = newY;
  }
});

// Event listener for the end of dragging (mouseup or touchend)
draggableElem.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    // Set moveElement flag to false to indicate that dragging has ended
    moveElement = false;
  })
);

// Event listener to stop movement when the mouse leaves the draggable area
draggableElem.addEventListener("mouseleave", stopMovement);

// Additional event listener to ensure movement stops on touchend event
draggableElem.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});
```

:::

---

<TagLinks />