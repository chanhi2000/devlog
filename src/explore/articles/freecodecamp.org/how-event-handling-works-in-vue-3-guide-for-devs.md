---
lang: ko-KR
title: "How Event Handling Works in Vue 3: A Guide for Developers"
description: "Article(s) > How Event Handling Works in Vue 3: A Guide for Developers"
icon: fa-brands fa-vuejs
category: 
  - Node.js
  - Vue.js
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - node
  - nodejs
  - node-js
  - vue
  - vuejs
  - vue-js
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How Event Handling Works in Vue 3: A Guide for Developers"
    - property: og:description
      content: "How Event Handling Works in Vue 3: A Guide for Developers"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-event-handling-works-in-vue-3-guide-for-devs.html
prev: /programming/js-vue/articles/README.md
date: 2024-09-11
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w1000/2024/07/how-event-handling-works-in-vue-3-guide-for-devs.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Vue.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-vue/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How Event Handling Works in Vue 3: A Guide for Developers"
  desc="Event handling in Vue 3 allows developers to respond to user interactions like clicks, key presses, form submissions, and more. Vue provides simple and flexible ways to manage these interactions, enabling you to build dynamic and engaging application..."
  url="https://freecodecamp.org/news/how-event-handling-works-in-vue-3-guide-for-devs/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725980520061/87728aa1-f3c5-451d-9f11-5163f527d029.png"/>

<!-- TODO: 작성 -->

<!-- 
Event handling in Vue 3 allows developers to respond to user interactions like clicks, key presses, form submissions, and more.

Vue provides simple and flexible ways to manage these interactions, enabling you to build dynamic and engaging applications.

### -in-this-guide-well-cover">In this guide, we'll cover:

- Basic event handling (for example, `click` events)
<li>Event modifiers like `.prevent`, `.once`, and `.stop`
<li>Custom events between parent and child components
<li>Handling events in forms
<li>Keyboard events
<li>The basics of `emit`
<li>The basics of `v-model`

By the end, you'll be able to handle a wide range of events and improve user interaction in your Vue applications.

### -basic-event-handling">Basic Event Handling

Vue makes it easy to handle basic events like `click`, `input`, and `submit` directly in your template. You can use the `@` symbol (short for `v-on`) to listen for events on DOM elements.

<h4 id="heading-example-handling-a-click-event">Example: Handling a Click Event</h4>
```xml
<</span>template</span>></span></span>
  <</span>div</span>></span></span>
    <</span>button</span> @click</span>=</span>"</span>handleClick"</span></span>></span></span>Click Me</</span>button</span>></span></span>
    <</span>p</span>></span></span>{{ message }}</</span>p</span>></span></span>
  </</span>div</span>></span></span>
</</span>template</span>></span></span>

<</span>script</span> setup</span>></span></span>
import { ref } from 'vue';

const message = ref('Hello, Vue 3!');

function handleClick() {
  message.value = 'Button Clicked!';
}
</</span>script</span>></span></span>
```

<h4 id="heading-code-explanation">Code explanation:</h4>
- `@click="handleClick"`: The `@` symbol is shorthand for `v-on`. It listens for the `click` event and calls the `handleClick` method when the button is clicked.
<li>`message.value = 'Button Clicked!'`: In Vue 3's Composition API, `ref` creates reactive variables. When the button is clicked, the `message` reacts to variable updates, and the change is reflected in the DOM automatically.

This simple mechanism of listening to events and binding methods is foundational to handling user interactions in Vue.

### -event-modifiers">Event Modifiers

Vue event modifiers allow you to control how events are handled, preventing default behavior or stopping propagation, for example. Common event modifiers include `.prevent`, `.stop`, `.once`, `.capture`, and `.passive`.

<h4 id="heading-1-the-prevent-modifier">1. The `.prevent` Modifier</h4>
The `.prevent` modifier calls `event.preventDefault()`, preventing the default behavior of events like form submission.

<h5 id="heading-example-using-prevent-to-handle-form-submission">Example: Using `.prevent` to Handle Form Submission</h5>
```xml
<</span>template</span>></span></span>
  <</span>form</span> @submit.prevent</span>=</span>"</span>handleSubmit"</span></span>></span></span>
    <</span>input</span> type</span>=</span>"</span>text"</span></span> v-model</span>=</span>"</span>inputValue"</span></span> /></span></span>
    <</span>button</span> type</span>=</span>"</span>submit"</span></span>></span></span>Submit</</span>button</span>></span></span>
  </</span>form</span>></span></span>
  <</span>p</span>></span></span>{{ output }}</</span>p</span>></span></span>
</</span>template</span>></span></span>

<</span>script</span> setup</span>></span></span>
import { ref } from 'vue';

const inputValue = ref('');
const output = ref('');

function handleSubmit() {
  output.value = `Form submitted with value: ${inputValue.value}`;
}
</</span>script</span>></span></span>
```

<h4 id="heading-code-explanation-1">Code explanation:</h4>
- `@submit.prevent`: Prevents the form from refreshing the page when submitted, allowing the `handleSubmit` function to process the form data instead.
<li>`v-model="inputValue"`: Two-way data binding between the form input and the `inputValue` reactive variable. It updates in real time as the user types.

**When to use** `.prevent`**:** Use `.prevent` when handling forms or other elements where you want to prevent the default behavior, such as preventing links from navigating.

<h4 id="heading-2-the-stop-modifier">2. The `.stop` Modifier</h4>
The `.stop` modifier calls `event.stopPropagation()`, preventing the event from bubbling up to parent elements.

<h5 id="heading-example-prevent-event-bubbling">Example: Prevent Event Bubbling</h5>
```xml
<</span>template</span>></span></span>
  <</span>div</span> @click</span>=</span>"</span>handleDivClick"</span></span>></span></span>
    <</span>button</span> @click.stop</span>=</span>"</span>handleButtonClick"</span></span>></span></span>Click Me</</span>button</span>></span></span>
  </</span>div</span>></span></span>
  <</span>p</span>></span></span>{{ message }}</</span>p</span>></span></span>
</</span>template</span>></span></span>

<</span>script</span> setup</span>></span></span>
import { ref } from 'vue';

const message = ref('');

function handleDivClick() {
  message.value = 'Div clicked!';
}

function handleButtonClick() {
  message.value = 'Button clicked!';
}
</</span>script</span>></span></span>
```

<h4 id="heading-code-explanation-2">Code explanation:</h4>
- `.stop`: Clicking the button only triggers `handleButtonClick` and prevents the click from propagating to the parent `div`. Without `.stop`, clicking the button would also trigger `handleDivClick`.

**When to use** `.stop`**:** Use it to prevent parent elements from reacting to child element events.

<h4 id="heading-3-the-once-modifier">3. The `.once` Modifier</h4>
The `.once` modifier ensures that the event listener is only called once.

<h5 id="heading-example-handling-a-click-event-once">Example: Handling a Click Event Once</h5>
```xml
<</span>template</span>></span></span>
  <</span>button</span> @click.once</span>=</span>"</span>handleClickOnce"</span></span>></span></span>Click Me Once</</span>button</span>></span></span>
  <</span>p</span>></span></span>{{ message }}</</span>p</span>></span></span>
</</span>template</span>></span></span>

<</span>script</span> setup</span>></span></span>
import { ref } from 'vue';

const message = ref('');

function handleClickOnce() {
  message.value = 'Button clicked once!';
}
</</span>script</span>></span></span>
```

<h4 id="heading-code-explanation-3">Code explanation:</h4>
- `.once`: The `handleClickOnce` method is triggered the first time the button is clicked. Subsequent clicks do nothing because the event listener is removed after the first execution.

**When to use** `.once`**:** Use it for actions that should only happen once, such as a one-time form submission.

<h4 id="heading-4-the-capture-modifier">4. The `.capture` Modifier</h4>
The `.capture` modifier makes the event handler trigger during the capture phase rather than the bubbling phase.

<h5 id="heading-example-handling-an-event-in-the-capture-phase">Example: Handling an Event in the Capture Phase</h5>
```xml
<</span>template</span>></span></span>
  <</span>div</span> @click.capture</span>=</span>"</span>handleClickCapture"</span></span>></span></span>
    <</span>button</span> @click</span>=</span>"</span>handleClickButton"</span></span>></span></span>Click Me</</span>button</span>></span></span>
  </</span>div</span>></span></span>
  <</span>p</span>></span></span>{{ message }}</</span>p</span>></span></span>
</</span>template</span>></span></span>

<</span>script</span> setup</span>></span></span>
import { ref } from 'vue';

const message = ref('');

function handleClickCapture() {
  message.value = 'Click event captured!';
}

function handleClickButton() {
  message.value = 'Button clicked!';
}
</</span>script</span>></span></span>
```

<h4 id="heading-code-explanation-4">Code explanation:</h4>
- `.capture`: The click on the parent `div` is handled first, before the child button’s click event, because the `capture` phase happens before the bubbling phase.

**When to use** `.capture`**:** Useful when you need to intercept an event before it reaches its target.

### -custom-events">Custom Events

In Vue, child components can emit custom events to communicate with parent components. This pattern is commonly used to pass data or trigger methods in parent components.

<h4 id="heading-example-emitting-and-handling-custom-events">Example: Emitting and Handling Custom Events</h4>
`ParentComponent.vue`:

```xml
<</span>template</span>></span></span>
  <</span>ChildComponent</span> @custom-event</span>=</span>"</span>handleCustomEvent"</span></span> /></span></span>
  <</span>p</span>></span></span>{{ parentMessage }}</</span>p</span>></span></span>
</</span>template</span>></span></span>

<</span>script</span> setup</span>></span></span>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const parentMessage = ref('');

function handleCustomEvent(payload) {
  parentMessage.value = `Received custom event with payload: ${payload}`;
}
</</span>script</span>></span></span>
```

`ChildComponent.vue`:

```xml
<</span>template</span>></span></span>
  <</span>button</span> @click</span>=</span>"</span>emitCustomEvent"</span></span>></span></span>Emit Custom Event</</span>button</span>></span></span>
</</span>template</span>></span></span>

<</span>script</span> setup</span>></span></span>
import { defineEmits } from 'vue';

const emit = defineEmits();

function emitCustomEvent() {
  emit('custom-event', 'Hello from ChildComponent');
}
</</span>script</span>></span></span>
```

<h4 id="heading-code-explanation-5">Code explanation:</h4>
- `defineEmits()`: This is used in the child component to define custom events. Here, the child emits a `custom-event` with a payload of `'Hello from ChildComponent'`. (<a href="https://asfakahmedsblog.hashnode.dev/understanding-vuejs-emit-a-complete-guide">you can learn more details of emit from here</a>)
<li>**Event Handling in Parent**: The parent component listens for `custom-event` and responds by updating its `parentMessage` with the event payload.

**When to use custom events:** Use them for communication between parent and child components, especially for passing data from child to parent.

### -event-handling-in-forms">Event Handling in Forms

Vue’s `v-model` simplifies handling form inputs by creating two-way data binding between the form field and a data variable.

<h4 id="heading-example-handling-input-and-form-submission">Example: Handling Input and Form Submission</h4>
```xml
<</span>template</span>></span></span>
  <</span>form</span> @submit.prevent</span>=</span>"</span>handleSubmit"</span></span>></span></span>
    <</span>input</span> v-model</span>=</span>"</span>formData.name"</span></span> placeholder</span>=</span>"</span>Name"</span></span> /></span></span>
    <</span>input</span> v-model</span>=</span>"</span>formData.email"</span></span> placeholder</span>=</span>"</span>Email"</span></span> /></span></span>
    <</span>button</span> type</span>=</span>"</span>submit"</span></span>></span></span>Submit</</span>button</span>></span></span>
  </</span>form</span>></span></span>
  <</span>p</span>></span></span>{{ formOutput }}</</span>p</span>></span></span>
</</span>template</span>></span></span>

<</span>script</span> setup</span>></span></span>
import { ref } from 'vue';

const formData = ref({ name: '', email: '' });
const formOutput = ref('');

function handleSubmit() {
  formOutput.value = `Submitted Name: ${formData.value.name}, Email: ${formData.value.email}`;
}
</</span>script</span>></span></span>
```

<h4 id="heading-code-explanation-6">Code explanation:</h4>
- `v-model="`<a href="http://formData.name">`formData.name`</a>`"`: This binds the input field directly to the <a href="http://formData.name">`formData.name`</a> variable, allowing automatic updates as the user types. (<a href="https://asfakahmedsblog.hashnode.dev/understanding-vuejs-v-model-a-complete-guide">you can learn more details of v-model from here</a>)
<li>The `handleSubmit` method processes the form data and displays it in the paragraph below the form.

### -keyboard-events">Keyboard Events

Vue also makes it easy to handle keyboard events such as `keydown`, `keyup`, and `keypress`.

<h4 id="heading-example-handling-keyboard-events">Example: Handling Keyboard Events</h4>
```xml
<</span>template</span>></span></span>
  <</span>input</span> @keydown.enter</span>=</span>"</span>handleEnterKey"</span></span> placeholder</span>=</span>"</span>Press Enter"</span></span> /></span></span>
  <</span>p</span>></span></span>{{ message }}</</span>p</span>></span></span>
</</span>template</span>></span></span>

<</span>script</span> setup</span>></span></span>
import { ref } from 'vue';

const message = ref('');

function handleEnterKey() {
  message.value = 'Enter key pressed!';
}
</</span>script</span>></span></span>
```

<h4 id="heading-code-explanation-7">Code explanation:</h4>
- `@keydown.enter`: Listens for the `enter` keypress and triggers the `handleEnterKey` function when pressed. This is useful for form submissions or other actions that should be triggered by a specific key press.

### -wrapping-up">Wrapping Up

Event handling in Vue 3 is pretty straightforward and flexible. From basic click events to custom events and form handling, Vue's event system allows you to create interactive, dynamic applications.

By using event modifiers and custom events, you can fine-tune how events are handled in your app. Understanding these techniques will enable you to create responsive, user-friendly interfaces.

-->

---

<TagLinks />