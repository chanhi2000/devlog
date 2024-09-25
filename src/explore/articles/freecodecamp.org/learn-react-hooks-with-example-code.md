---
lang: ko-KR
title: "Learn React Hooks – Common Hooks Explained with Code Examples"
description: "Article(s) > Learn React Hooks – Common Hooks Explained with Code Examples"
icon: fa-brands fa-react
category: 
  - Node.js
  - React.js
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - node
  - nodejs
  - node-js
  - react
  - reactjs
  - react-js
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Learn React Hooks – Common Hooks Explained with Code Examples"
    - property: og:description
      content: "Learn React Hooks – Common Hooks Explained with Code Examples"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/learn-react-hooks-with-example-code.html
prev: /programming/js-react/articles/README.md
date: 2024-09-25
isOriginal: false
author: Prankur Pandey
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1727212733982/7c9b8ae3-e8ac-4e20-b154-7edc60a6985a.avif
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "React.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-react/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="Learn React Hooks – Common Hooks Explained with Code Examples"
  desc="Web development is a popular field in the tech industry. It involves building web software using HTML, CSS, and JavaScript – sometimes with the help of various frameworks and libraries. Using libraries and frameworks allows developers to focus more o..."
  url="https://freecodecamp.org/news/learn-react-hooks-with-example-code/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1727212733982/7c9b8ae3-e8ac-4e20-b154-7edc60a6985a.avif"/>

<!-- TODO: 작성 -->

<!-- 
<p>Web development is a popular field in the tech industry. It involves building web software using HTML, CSS, and JavaScript – sometimes with the help of various frameworks and libraries.</p>
<p>Using libraries and frameworks allows developers to focus more on the development while the tools take care of certain functionality in the background. And React.js is a popular JavaScript library for building front-end applications.</p>
<p>In this article, you’ll learn about the backbone of React which is <strong>Hooks,</strong> and how they can make your life easier as a developer.</p>
<h2 id="heading-what-well-cover">What We’ll Cover:</h2>
<ul>
<li><p><a class="post-section-overview" href="#heading-prerequisites">Prerequisites:</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-getting-started">Getting Started</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-what-are-hooks">What are Hooks?</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-types-of-react-hooks">Types of React Hooks</a></p>
<ul>
<li><p><a class="post-section-overview" href="#heading-state-management-hooks">State Management Hooks</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-effect-hooks">Effect Hooks</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-ref-hook">Ref Hook</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-performance-hooks">Performance Hooks</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-context-hook">Context Hook</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-transition-hook">Transition Hook</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-some-random-hooks">Some Random Hooks</a></p>
</li>
</ul>
</li>
<li><p><a class="post-section-overview" href="#heading-conclusion">Conclusion</a></p>
</li>
</ul>
<h2 id="heading-prerequisites">Prerequisites:</h2>
<ul>
<li><p>You should know the basics of JavaScript.</p>
</li>
<li><p>You should also know the basics of React, like setting up an app, updating it, and using state.</p>
</li>
</ul>
<h2 id="heading-getting-started">Getting Started</h2>
<p>So you've decided to build a React app—congratulations! 🎉 But as you dive into the world of React hooks, you might find yourself feeling overwhelmed. With a plethora of hooks available, figuring out which ones to use and when can be a bit daunting.</p>
<p>Well, don’t worry – in this guide, I’ll break down every major hook so you can see how they fit together. We’ll also discuss which ones you'll use more frequently versus more rarely.</p>
<p>By the end of this article, you'll have a comprehensive map of React hooks and their practical applications.</p>
<h2 id="heading-what-are-hooks"><strong>What are Hooks?</strong></h2>
<p>In JavaScript, we use variables to store data and later perform operations on that data.</p>
<p>Hooks in React work similarly, but they are designed to manage state in <strong>functional components</strong>. Instead of manually declaring a single variable, hooks like <code>useState</code> give us a way to declare stateful values along with a setter function to update that state.</p>
<p>Here’s a simple example:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Initialize state and state updater</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>You clicked <span class="token punctuation">{</span>count<span class="token punctuation">}</span> times<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>In this code, I use the <code>useState</code> hook to declare a piece of state called <code>count</code> and set its initial value to 0. The <code>setCount</code> function allows us to update this state. Every time the button is clicked, we use <code>setCount</code> to increase <code>count</code> by 1. When the state updates, React re-renders the component to reflect the change.</p>
<p>Unlike declaring <code>let count = 0</code>, using <code>useState</code> lets React remember the state across renders and ensures that the UI updates correctly.</p>
<h2 id="heading-types-of-react-hooks">Types of React Hooks</h2>
<p>To make things easier, you can think of React hooks as falling into eight major categories:</p>
<ul>
<li><p><strong>State Management Hooks</strong> – For handling state.</p>
</li>
<li><p><strong>Effect Hooks</strong> – For side effects.</p>
</li>
<li><p><strong>Ref Hooks</strong> – For referencing JavaScript values or DOM elements.</p>
</li>
<li><p><strong>Performance Hooks</strong> – For optimizing performance.</p>
</li>
<li><p><strong>Context Hooks</strong> – For accessing React context.</p>
</li>
<li><p><strong>Transition Hooks</strong> – For smoother user experiences.</p>
</li>
<li><p><strong>Some Random Hooks</strong> – Special-purpose hooks.</p>
</li>
<li><p><strong>New Hooks (React 19)</strong> – Cutting-edge tools introduced in the latest React version.</p>
</li>
</ul>
<p>In React, you can also build custom hooks for different use cases. Every hook starts with the <code>use</code> keyword – even custom hooks start with this structure. This keyword is reserved for Hooks in React.</p>
<p>Let’s explore these hooks in detail.</p>
<h3 id="heading-state-management-hooks"><strong>State Management Hooks</strong></h3>
<h4 id="heading-1-usestate"><strong>1.</strong> <code>useState</code></h4>
<p>The <code>useState</code> hook is the bread and butter of React. It’s the most commonly used hook, and it’s key for managing state in functional components. With <code>useState</code>, you can capture user inputs, show or hide components, and manage numbers, like in an ecommerce app with a shopping cart.</p>
<p><code>useState</code> is versatile and straightforward: you initialize it with a value, and it returns a state variable and an updater function.</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Initialize state and state updater</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">You clicked </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text"> times</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Click me</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation</strong>: <code>useState</code> initializes the state (count) and provides a function (<code>setCount</code>) to update that state.</p>
<h4 id="heading-2-usereducer"><strong>2.</strong> <code>useReducer</code></h4>
<p>When <code>useState</code> isn’t enough, <code>useReducer</code> comes into play. This hook is perfect for managing complex state logic.</p>
<p>It uses a reducer function to simplify state updates and is especially useful when multiple state variables are interdependent or when actions need to be dispatched.</p>
<p>Think of it as an upgrade for managing more complicated state scenarios. Here’s an example:</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">'increment'</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">'decrement'</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Count: </span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'increment'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'decrement'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">-</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation</strong>: <code>useReducer</code> is useful for managing complex state updates, like handling multiple related actions.</p>
<p><strong>3.</strong> <code>useSyncExternalStore</code><br><code>useSyncExternalStore</code> is a hook for integrating non-React state stores into your React components.</p>
<p>While not commonly used, it’s crucial if you’re building your own state management library from scratch.</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useSyncExternalStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> externalStore <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">subscribe</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">getSnapshot</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Clock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token function">useSyncExternalStore</span><span class="token punctuation">(</span>externalStore<span class="token punctuation">.</span>subscribe<span class="token punctuation">,</span> externalStore<span class="token punctuation">.</span>getSnapshot<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>time<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation</strong>: <code>useSyncExternalStore</code> lets you connect your React component to non-React data sources, like global stores.</p>
<h3 id="heading-effect-hooks"><strong>Effect Hooks</strong></h3>
<p><strong>1.</strong> <code>useEffect</code><br>The <code>useEffect</code> hook performs side effects on your components. Whether you’re interacting with the DOM or fetching data, <code>useEffect</code> is your go-to. It runs after each render by default, but you can customize its behavior using a dependency array.</p>
<p>But you should consider using more specialized tools or libraries like React Query for event-based or render-based side effects.</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">DataFetcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Empty dependency array means it runs once on mount</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>data <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">'Loading...'</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation</strong>: The <code>useEffect</code> hook fetches data when the component mounts. The effect will only run one time when the array is empty.</p>
<p><strong>2.</strong> <code>useLayoutEffect</code><br><code>useLayoutEffect</code> works similarly to <code>useEffect</code> but runs synchronously right after the DOM has been updated. It’s used for operations that need to happen before the browser paints the UI, like measuring elements.</p>
<p>Use it sparingly, as it runs less frequently than <code>useEffect</code>. Here’s an example:</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useLayoutEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Measure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> divRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>divRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>divRef<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Measure me!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation</strong>: <code>useLayoutEffect</code> measures DOM elements before the browser repaints.</p>
<p><strong>3.</strong> <code>useInsertionEffect</code><br>Exclusively for CSS-in-JS library developers, <code>useInsertionEffect</code> runs before <code>useEffect</code> and <code>useLayoutEffect</code> to ensure that CSS styles are inserted properly. It’s niche, but crucial for maintaining style integrity in complex applications.</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useInsertionEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">StyledComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'Hover over me!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useInsertionEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> style <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'style'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    style<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      .hovered {
        color: red;
        font-size: 24px;
        transition: color 0.3s ease;
      }
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hovered<span class="token punctuation">"</span></span>
      <span class="token attr-name">onMouseEnter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">'You hovered over me!'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onMouseLeave</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">'Hover over me!'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation</strong>: The <code>useInsertionEffect</code> hook is used to inject styles into the DOM at runtime, making the component’s styling dynamic and scoped only to that component.</p>
<h3 id="heading-ref-hook"><strong>Ref Hook</strong></h3>
<p>1. <code>useRef</code><br><code>useRef</code> allows you to persist values across renders without causing re-renders. It's perfect for storing mutable values or referencing DOM elements. Whether you’re handling intervals, storing a DOM node, or keeping track of the previous state, <code>useRef</code> has you covered.</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">FocusInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> inputRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFocus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleFocus<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Focus Input</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation:</strong> This React code uses <code>useRef</code> to create a reference to an input element. When the button is clicked, the <code>handleFocus</code> function triggers the input field to gain focus using <code>inputRef.current.focus()</code>.</p>
<h3 id="heading-performance-hooks"><strong>Performance Hooks</strong></h3>
<p><strong>1.</strong> <code>useMemo</code><br>For optimizing performance, <code>useMemo</code> is your friend. It caches the results of expensive computations and only recalculates when dependencies change. This can significantly improve performance, especially in scenarios involving heavy calculations.</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ExpensiveCalculation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> expensiveComputation <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> count <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Expensive Computation: </span><span class="token punctuation">{</span>expensiveComputation<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Increase Count</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation:</strong>This React code uses <code>useMemo</code> to optimize an expensive calculation (<code>count * 100</code>). The calculation only re-runs when <code>count</code> changes. The button increments <code>count</code>, triggering a UI update with the new result.</p>
<p><strong>2.</strong> <code>useCallback</code><br><code>useCallback</code> is similar to <code>useMemo</code>, but it focuses on memoizing callback functions. This is useful for preventing unnecessary re-renders of child components by keeping functions stable across renders.</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Click me</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> handleClick <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Clicked'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Child</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Count: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Increase Count</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation:</strong> This React code uses <code>useCallback</code> to memoize the <code>handleClick</code> function, preventing re-creation on every render. The <code>Child</code> component uses this function for its button. The parent updates <code>count</code> independently.</p>
<h3 id="heading-context-hook"><strong>Context Hook</strong></h3>
<p>1. <code>useContext</code><br>The <code>useContext</code> hook simplifies accessing context values. It reads the value from the nearest context provider and works seamlessly across nested components. This makes it easier to manage global states or themes.</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useContext<span class="token punctuation">,</span> createContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">'light'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ThemedButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ThemeContext.Provider</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ThemedButton</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ThemeContext.Provider</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation</strong>: This React code uses <code>createContext</code> to create a <code>ThemeContext</code>. <code>useContext</code> accesses the context value, displaying it in the button. The <code>App</code> component provides "dark" as the theme to <code>ThemedButton</code>.</p>
<h3 id="heading-transition-hook"><strong>Transition Hook</strong></h3>
<p>1. <code>useTransition</code><br><code>useTransition</code> lets you mark specific state updates as low-priority, enhancing the user experience by keeping the app more responsive during intensive computations or transitions. This improves the user experience by making the app more responsive.</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">TransitionComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isPending<span class="token punctuation">,</span> startTransition<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useTransition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">startTransition</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevCount</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> prevCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Increase Count</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>isPending <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span> <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Count: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation:</strong> This code uses <code>useTransition</code> to increment <code>count</code> without blocking the UI. While the state updates, <code>isPending</code> shows "Loading...". Clicking the button triggers a smooth, non-blocking state transition.</p>
<h3 id="heading-some-random-hooks"><strong>Some Random Hooks</strong></h3>
<p><strong>1.</strong> <code>useDeferredValue</code><br>Similar to <code>useTransition</code>, <code>useDeferredValue</code> helps in deferring state updates to keep the app responsive. It schedules updates to happen at an optimal time, enhancing the user experience without manual intervention.</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useDeferredValue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">DeferredComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> deferredValue <span class="token operator">=</span> <span class="token function">useDeferredValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Deferred Value: </span><span class="token punctuation">{</span>deferredValue<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation</strong>: <code>useDeferredValue</code> delays the update of <code>deferredValue</code> to ensure that the UI remains responsive.</p>
<p><strong>2.</strong> <code>useDebugValue</code><br><code>useDebugValue</code> is a hook primarily for debugging. It lets you label custom hooks in React DevTools, making it easier to track and debug your hooks.</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx">
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useDebugValue<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">useCustomHook</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useDebugValue</span><span class="token punctuation">(</span>value <span class="token operator">?</span> <span class="token string">"Has Value"</span> <span class="token operator">:</span> <span class="token string">"No Value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> value<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">DebugComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">const</span> customValue <span class="token operator">=</span> <span class="token function">useCustomHook</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token literal-property property">Value</span><span class="token operator">:</span> <span class="token punctuation">{</span>customValue<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation:</strong> This code uses <code>useDebugValue</code> to show "Has Value" or "No Value" in React DevTools based on <code>value</code>. <code>useCustomHook</code> is used in <code>DebugComponent</code> to track the input state and display it dynamically.</p>
<p><strong>3.</strong> <code>useId</code><br><code>useId</code> generates unique IDs for elements, ensuring that form inputs and labels are properly linked without conflicts. It’s particularly useful when dealing with dynamically repeated elements.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useId <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">FormComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">useId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span>Name<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>Code explanation</strong>: <code>useId</code> ensures that form elements have unique IDs, avoiding potential conflicts.</p>
<h2 id="heading-conclusion">Conclusion</h2>
<p>React hooks can seem overwhelming at first, but with this guide, you’re well-equipped to handle them. Mastering these hooks improves your React skills and makes your development process smoother and more efficient.</p>
<p>For a deeper dive and hands-on practice, check out my comprehensive React Bootcamp, where you’ll find interactive challenges, videos, and cheat sheets to reinforce your knowledge.</p>
-->

---

<TagLinks />