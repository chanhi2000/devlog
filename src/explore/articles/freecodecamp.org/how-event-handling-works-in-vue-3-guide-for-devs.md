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
<p>Event handling in Vue 3 allows developers to respond to user interactions like clicks, key presses, form submissions, and more.</p>
<p>Vue provides simple and flexible ways to manage these interactions, enabling you to build dynamic and engaging applications.</p>
<h3 id="heading-in-this-guide-well-cover">In this guide, we'll cover:</h3>
<ul>
<li><p>Basic event handling (for example, <code>click</code> events)</p>
</li>
<li><p>Event modifiers like <code>.prevent</code>, <code>.once</code>, and <code>.stop</code></p>
</li>
<li><p>Custom events between parent and child components</p>
</li>
<li><p>Handling events in forms</p>
</li>
<li><p>Keyboard events</p>
</li>
<li><p>The basics of <code>emit</code></p>
</li>
<li><p>The basics of <code>v-model</code></p>
</li>
</ul>
<p>By the end, you'll be able to handle a wide range of events and improve user interaction in your Vue applications.</p>
<h3 id="heading-basic-event-handling">Basic Event Handling</h3>
<p>Vue makes it easy to handle basic events like <code>click</code>, <code>input</code>, and <code>submit</code> directly in your template. You can use the <code>@</code> symbol (short for <code>v-on</code>) to listen for events on DOM elements.</p>
<h4 id="heading-example-handling-a-click-event">Example: Handling a Click Event</h4>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClick<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
import { ref } from 'vue';

const message = ref('Hello, Vue 3!');

function handleClick() {
  message.value = 'Button Clicked!';
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h4 id="heading-code-explanation">Code explanation:</h4>
<ul>
<li><p><code>@click="handleClick"</code>: The <code>@</code> symbol is shorthand for <code>v-on</code>. It listens for the <code>click</code> event and calls the <code>handleClick</code> method when the button is clicked.</p>
</li>
<li><p><code>message.value = 'Button Clicked!'</code>: In Vue 3's Composition API, <code>ref</code> creates reactive variables. When the button is clicked, the <code>message</code> reacts to variable updates, and the change is reflected in the DOM automatically.</p>
</li>
</ul>
<p>This simple mechanism of listening to events and binding methods is foundational to handling user interactions in Vue.</p>
<h3 id="heading-event-modifiers">Event Modifiers</h3>
<p>Vue event modifiers allow you to control how events are handled, preventing default behavior or stopping propagation, for example. Common event modifiers include <code>.prevent</code>, <code>.stop</code>, <code>.once</code>, <code>.capture</code>, and <code>.passive</code>.</p>
<h4 id="heading-1-the-prevent-modifier">1. The <code>.prevent</code> Modifier</h4>
<p>The <code>.prevent</code> modifier calls <code>event.preventDefault()</code>, preventing the default behavior of events like form submission.</p>
<h5 id="heading-example-using-prevent-to-handle-form-submission">Example: Using <code>.prevent</code> to Handle Form Submission</h5>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">@submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSubmit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inputValue<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ output }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
import { ref } from 'vue';

const inputValue = ref('');
const output = ref('');

function handleSubmit() {
  output.value = `Form submitted with value: ${inputValue.value}`;
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h4 id="heading-code-explanation-1">Code explanation:</h4>
<ul>
<li><p><code>@submit.prevent</code>: Prevents the form from refreshing the page when submitted, allowing the <code>handleSubmit</code> function to process the form data instead.</p>
</li>
<li><p><code>v-model="inputValue"</code>: Two-way data binding between the form input and the <code>inputValue</code> reactive variable. It updates in real time as the user types.</p>
</li>
</ul>
<p><strong>When to use</strong> <code>.prevent</code><strong>:</strong> Use <code>.prevent</code> when handling forms or other elements where you want to prevent the default behavior, such as preventing links from navigating.</p>
<h4 id="heading-2-the-stop-modifier">2. The <code>.stop</code> Modifier</h4>
<p>The <code>.stop</code> modifier calls <code>event.stopPropagation()</code>, preventing the event from bubbling up to parent elements.</p>
<h5 id="heading-example-prevent-event-bubbling">Example: Prevent Event Bubbling</h5>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleDivClick<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleButtonClick<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
import { ref } from 'vue';

const message = ref('');

function handleDivClick() {
  message.value = 'Div clicked!';
}

function handleButtonClick() {
  message.value = 'Button clicked!';
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h4 id="heading-code-explanation-2">Code explanation:</h4>
<ul>
<li><code>.stop</code>: Clicking the button only triggers <code>handleButtonClick</code> and prevents the click from propagating to the parent <code>div</code>. Without <code>.stop</code>, clicking the button would also trigger <code>handleDivClick</code>.</li>
</ul>
<p><strong>When to use</strong> <code>.stop</code><strong>:</strong> Use it to prevent parent elements from reacting to child element events.</p>
<h4 id="heading-3-the-once-modifier">3. The <code>.once</code> Modifier</h4>
<p>The <code>.once</code> modifier ensures that the event listener is only called once.</p>
<h5 id="heading-example-handling-a-click-event-once">Example: Handling a Click Event Once</h5>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.once</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClickOnce<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Click Me Once<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
import { ref } from 'vue';

const message = ref('');

function handleClickOnce() {
  message.value = 'Button clicked once!';
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h4 id="heading-code-explanation-3">Code explanation:</h4>
<ul>
<li><code>.once</code>: The <code>handleClickOnce</code> method is triggered the first time the button is clicked. Subsequent clicks do nothing because the event listener is removed after the first execution.</li>
</ul>
<p><strong>When to use</strong> <code>.once</code><strong>:</strong> Use it for actions that should only happen once, such as a one-time form submission.</p>
<h4 id="heading-4-the-capture-modifier">4. The <code>.capture</code> Modifier</h4>
<p>The <code>.capture</code> modifier makes the event handler trigger during the capture phase rather than the bubbling phase.</p>
<h5 id="heading-example-handling-an-event-in-the-capture-phase">Example: Handling an Event in the Capture Phase</h5>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click.capture</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClickCapture<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClickButton<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
import { ref } from 'vue';

const message = ref('');

function handleClickCapture() {
  message.value = 'Click event captured!';
}

function handleClickButton() {
  message.value = 'Button clicked!';
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h4 id="heading-code-explanation-4">Code explanation:</h4>
<ul>
<li><code>.capture</code>: The click on the parent <code>div</code> is handled first, before the child button’s click event, because the <code>capture</code> phase happens before the bubbling phase.</li>
</ul>
<p><strong>When to use</strong> <code>.capture</code><strong>:</strong> Useful when you need to intercept an event before it reaches its target.</p>
<h3 id="heading-custom-events">Custom Events</h3>
<p>In Vue, child components can emit custom events to communicate with parent components. This pattern is commonly used to pass data or trigger methods in parent components.</p>
<h4 id="heading-example-emitting-and-handling-custom-events">Example: Emitting and Handling Custom Events</h4>
<p><code>ParentComponent.vue</code>:</p>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">@custom-event</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleCustomEvent<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ parentMessage }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const parentMessage = ref('');

function handleCustomEvent(payload) {
  parentMessage.value = `Received custom event with payload: ${payload}`;
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p><code>ChildComponent.vue</code>:</p>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>emitCustomEvent<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Emit Custom Event<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
import { defineEmits } from 'vue';

const emit = defineEmits();

function emitCustomEvent() {
  emit('custom-event', 'Hello from ChildComponent');
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h4 id="heading-code-explanation-5">Code explanation:</h4>
<ul>
<li><p><code>defineEmits()</code>: This is used in the child component to define custom events. Here, the child emits a <code>custom-event</code> with a payload of <code>'Hello from ChildComponent'</code>. (<a target="_blank" href="https://asfakahmedsblog.hashnode.dev/understanding-vuejs-emit-a-complete-guide">you can learn more details of emit from here</a>)</p>
</li>
<li><p><strong>Event Handling in Parent</strong>: The parent component listens for <code>custom-event</code> and responds by updating its <code>parentMessage</code> with the event payload.</p>
</li>
</ul>
<p><strong>When to use custom events:</strong> Use them for communication between parent and child components, especially for passing data from child to parent.</p>
<h3 id="heading-event-handling-in-forms">Event Handling in Forms</h3>
<p>Vue’s <code>v-model</code> simplifies handling form inputs by creating two-way data binding between the form field and a data variable.</p>
<h4 id="heading-example-handling-input-and-form-submission">Example: Handling Input and Form Submission</h4>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">@submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSubmit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formData.name<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formData.email<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ formOutput }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
import { ref } from 'vue';

const formData = ref({ name: '', email: '' });
const formOutput = ref('');

function handleSubmit() {
  formOutput.value = `Submitted Name: ${formData.value.name}, Email: ${formData.value.email}`;
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h4 id="heading-code-explanation-6">Code explanation:</h4>
<ul>
<li><p><code>v-model="</code><a target="_blank" href="http://formData.name"><code>formData.name</code></a><code>"</code>: This binds the input field directly to the <a target="_blank" href="http://formData.name"><code>formData.name</code></a> variable, allowing automatic updates as the user types. (<a target="_blank" href="https://asfakahmedsblog.hashnode.dev/understanding-vuejs-v-model-a-complete-guide">you can learn more details of v-model from here</a>)</p>
</li>
<li><p>The <code>handleSubmit</code> method processes the form data and displays it in the paragraph below the form.</p>
</li>
</ul>
<h3 id="heading-keyboard-events">Keyboard Events</h3>
<p>Vue also makes it easy to handle keyboard events such as <code>keydown</code>, <code>keyup</code>, and <code>keypress</code>.</p>
<h4 id="heading-example-handling-keyboard-events">Example: Handling Keyboard Events</h4>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">@keydown.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEnterKey<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Press Enter<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
import { ref } from 'vue';

const message = ref('');

function handleEnterKey() {
  message.value = 'Enter key pressed!';
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h4 id="heading-code-explanation-7">Code explanation:</h4>
<ul>
<li><code>@keydown.enter</code>: Listens for the <code>enter</code> keypress and triggers the <code>handleEnterKey</code> function when pressed. This is useful for form submissions or other actions that should be triggered by a specific key press.</li>
</ul>
<h3 id="heading-wrapping-up">Wrapping Up</h3>
<p>Event handling in Vue 3 is pretty straightforward and flexible. From basic click events to custom events and form handling, Vue's event system allows you to create interactive, dynamic applications.</p>
<p>By using event modifiers and custom events, you can fine-tune how events are handled in your app. Understanding these techniques will enable you to create responsive, user-friendly interfaces.</p>
-->

---

<TagLinks />