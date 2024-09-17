---
lang: ko-KR
title: "JavaScript Timer – How to Set a Timer Function in JS"
description: "Article(s) > JavaScript Timer – How to Set a Timer Function in JS"
icon: fa-brands fa-js
category: 
  - JavaScript
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - js
  - javascript
head:
  - - meta:
    - property: og:title
      content: "Article(s) > JavaScript Timer – How to Set a Timer Function in JS"
    - property: og:description
      content: "JavaScript Timer – How to Set a Timer Function in JS"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/javascript-timer-how-to-set-a-timer-function-in-js.html
prev: /programming/js/articles/README.md
date: 2024-09-16
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1726513174015/54470912-08b3-4a23-9a0c-9b6f9b57617b.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "JavaScript > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="JavaScript Timer – How to Set a Timer Function in JS"
  desc="In Javascript, the timer function prevents your code from running everything at once when an event triggers or the page loads. This gives you more control over the timing of your program's actions and can enhance the user experience by creating smoot..."
  url="https://freecodecamp.org/news/javascript-timer-how-to-set-a-timer-function-in-js/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1726513174015/54470912-08b3-4a23-9a0c-9b6f9b57617b.jpeg"/>

<!-- TODO: 작성 -->

<!-- 
<p>In Javascript, the timer function prevents your code from running everything at once when an event triggers or the page loads. This gives you more control over the timing of your program's actions and can enhance the user experience by creating smoother interactions or animations.  </p>
<p>In this tutorial, you'll learn how to use the set timer functions.</p>
<h2 id="heading-how-to-set-a-timer-function"><strong>How to Set a Timer Function</strong></h2>
<p>There are various ways of setting a timer function, such as the <code>setTimeout</code>, <code>setInterval</code>, <code>clearTimeout</code>, and <code>setImmediate</code> functions. You'll learn about each of them in this article.</p>
<h3 id="heading-how-to-use-settimeout-and-setinterval"><strong>How to Use</strong> <code>setTimeout</code> <strong>and</strong> <code>setInterval</code></h3>
<p>The <code>setTimeout</code> function executes an expression after a specified delay in milliseconds while the <code>setInterval</code> function executes an expression after a specified interval in milliseconds.</p>
<p>You can use the <code>setTimeout()</code> function when you want to execute code block with a specific delay, but just once.</p>
<p>The setTimeout function is denoted by <code>setTimeout()</code>. Here's an example of how you can use it:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token comment">// Execute a function after 3 seconds</span>
⁠ <span class="token keyword">const</span> timeoutId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Timeout executed after 3 seconds'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The above code block shows how to use the <code>setTimeout</code> syntax to execute a function after 3 seconds. The name of the variable is <code>timeoutId</code> which stores the execution of the setTimeout. The time set is 3000 milliseconds (or 3 seconds).</p>
<p>You can use the <code>setInterval()</code> function when you want to execute a code block repeatedly but at specific intervals – for instance, when animating elements.</p>
<p>The setInterval function is denoted by <code>setInterval()</code>. Here's how you can use it:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token comment">// Execute a function every 1 second</span>
<span class="token keyword">const</span> intervalId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Interval executed every 1 second'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The above code block shows how to use the <code>setInterval</code> syntax to execute a function after 1 second. The name of the variable is <code>intervalId</code> which stores the execution of the setInterval. The time is set to 1000 milliseconds (1 second).</p>
<h3 id="heading-how-to-use-cleartimeout-and-clearinterval"><strong>How to Use</strong> <code>clearTimeout</code> <strong>and</strong> <code>clearInterval</code></h3>
<p>The <code>clearTimeout</code> function cancels a timeout previously scheduled with  the <code>setTimeout</code> function. <code>clearInterval</code> cancels an interval previously set with ⁠<code>setInterval</code> .</p>
<p>The clearTimeout function is denoted by <code>clearTimeout();</code>. It accepts an argument that stores the <code>setTimeout</code> function.</p>
<p>Here's an example of how it works:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> timeoutId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Timeout executed after 3 seconds'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeoutId<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Timeout cleared'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>clearTimeout</code> function takes the variable name <code>timeoutID</code> which stores the <code>setTimeout</code> function and clears the function.</p>
<p>The <code>clearInterval function</code> is denoted by <code>clearInterval();</code>.  It accepts an argument that stores the <code>setInterval</code> function under the block of the <code>setTimeout</code> function.</p>
<p>Here's an example of how it works:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> intervalId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Interval executed every 1 second'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>intervalId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Interval cleared. Function will no longer execute.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In the above code block, the <code>setTimeout</code> function is introduced. The <code>clearInterval</code> function is passed into the code block, the argument <code>intervalId</code> is passed, and then the function is executed. </p>
<p>Another timer function is <code>setImmediate</code> which executes a function asynchronously as soon as possible after the current code block finishes executing. But it’s not universally supported across all browsers, so it’s rarely used.</p>
<h2 id="heading-wrapping-up">Wrapping Up</h2>
<p>It's important to know how to use JavaScript timer functions and when to apply them to your code. And remember that the timer is set to milliseconds, so whatever number you use, divide it by 1000 to determine how many seconds it is.</p>
<p>If you have any questions, you can reach out to me on <a target="_blank" href="https://twitter.com/HeritageAlabi1">Twitter</a> 💙.</p>
-->

---

<TagLinks />