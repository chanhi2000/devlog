---
lang: ko-KR
title: What are Type Predicates in TypeScript? Explained with Code examples
description: Article(s) > What are Type Predicates in TypeScript? Explained with Code examples
icon: iconfont icon-typescript
category: 
  - Node.js
  - TypeScript
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - typsecript
  - ts
head:
  - - meta:
    - property: og:title
      content: Article(s) > What are Type Predicates in TypeScript? Explained with Code examples
    - property: og:description
      content: What are Type Predicates in TypeScript? Explained with Code examples
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/what-are-type-predicates-in-typescript/.html
prev: /programming/ts/articles/README.md
date: 2024-09-10
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725630140316/a95bd310-5465-4d0c-85fe-e42b91c2452e.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "TypeScript > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/ts/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="What are Type Predicates in TypeScript? Explained with Code examples"
  desc="Type predicates are an interesting syntactical feature in TypeScript. While they appear in the same place as return type annotations, they look more like short affirmative sentences than typical annotations. This gives you greater control over type c..."
  url="https://freecodecamp.org/news/what-are-type-predicates-in-typescript//"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725630140316/a95bd310-5465-4d0c-85fe-e42b91c2452e.jpeg"/>

<!-- TODO: 작성 -->

<!--
<p>Type predicates are an interesting syntactical feature in TypeScript. While they appear in the same place as return type annotations, they look more like short affirmative sentences than typical annotations. This gives you greater control over type checking.</p>
<p>With the release of TypeScript 5.5, working with type predicates has become more intuitive now because it can infer them automatically in many cases. But if you're navigating slightly older code-bases, you're likely to encounter handwritten type predicates more often.</p>
<p>In this article, we will briefly explore what type predicates are and why they are useful. Let's start by looking at the problem they solve.</p>
<h2 id="heading-the-problem">The Problem</h2>
<p>The best way to understand the usefulness of type predicates, I believe, is by noticing the problems that arise when we don't have them:</p>
<pre class="language-ts" tabindex="0"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">padLeft</span><span class="token punctuation">(</span>padding<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span> input<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isString</span><span class="token punctuation">(</span>padding<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> padding <span class="token operator">+</span> input<span class="token punctuation">;</span>
        <span class="token comment">//   ^</span>
        <span class="token comment">// string | number</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">" "</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>padding<span class="token punctuation">)</span> <span class="token operator">+</span> input<span class="token punctuation">;</span> <span class="token comment">// Opps type error here</span>
                 <span class="token comment">//   ^</span>
                 <span class="token comment">// string | number</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Here, the return type of <code>isString</code> is set to <code>boolean</code>, and we use it in a function called <code>padLeft</code> to add padding to the left of an input string. The <code>padding</code> can be either a given string or a specified number of space characters.</p>
<p>You might be wondering why I hard-coded the return type to <code>boolean</code>. This is to illustrate the problem. If you don't add any return type annotation and use the latest version of TypeScript, you won't notice any issue here. For now, bear with me – we'll discuss the version-related differences shortly.</p>
<p>The function will work smoothly at runtime, but TypeScript cannot perform any type narrowing with <code>isString</code>. As a result, the type of <code>padding</code> remains <code>string | number</code> both inside and outside the <code>if</code> statement. This leads to a conflict with <code>repeat</code>'s expectation for its first argument, causing the type error.</p>
<h2 id="heading-the-solution-enter-type-predicates">The Solution: Enter Type Predicates</h2>
<p>Even if you are unfamiliar with the term predicate, you have likely used them before. Predicates in programming are simply functions that return a boolean to answer a yes/no question. Several JavaScript built-in array methods, such as <code>filter</code>, <code>find</code>, <code>every</code>, and <code>some</code>, use predicates to help with decision-making.</p>
<p>Type predicates are a way to make predicates more useful for type narrowing. We can fix the problem by using a type predicate as the return type:</p>
<pre class="language-ts" tabindex="0"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> value <span class="token keyword">is</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Here the type predicate is <code>value is string</code>. It is saying three things:</p>
<ul>
<li><p>The function is a predicate. So TypeScript will show an error if you try to return anything other than a Boolean value.</p>
</li>
<li><p>If it returns <code>true</code>, then <code>value</code> is of type string.</p>
</li>
<li><p>If it returns <code>false</code>, then <code>value</code> is not of type string.</p>
</li>
</ul>
<p>Type predicates let you create user-defined type guards. Type guards are logical checks that let you refine types to more specific types, aka narrow them. So, the above function is also a user-defined type guard.</p>
<p>Here is the full code:</p>
<pre class="language-ts" tabindex="0"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> value <span class="token keyword">is</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">padLeft</span><span class="token punctuation">(</span>padding<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span> input<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isString</span><span class="token punctuation">(</span>padding<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> padding <span class="token operator">+</span> input<span class="token punctuation">;</span>
        <span class="token comment">//   ^</span>
        <span class="token comment">// string</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">" "</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>padding<span class="token punctuation">)</span> <span class="token operator">+</span> input<span class="token punctuation">;</span>
                 <span class="token comment">//   ^</span>
                 <span class="token comment">// number</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Here, TypeScript correctly narrows the type of <code>padding</code> inside the <code>if</code> statement and outside of it.</p>
<p>Now let's briefly look at how type predicates worked before TypeScript 5.5 and what this version has improved.</p>
<h2 id="heading-type-predicates-before-typescript-55">Type Predicates Before TypeScript 5.5</h2>
<p>In our previous example, if we don't specify any return type, it will be inferred as <code>boolean</code>:</p>
<pre class="language-ts" tabindex="0"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">padLeft</span><span class="token punctuation">(</span>padding<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span> input<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isString</span><span class="token punctuation">(</span>padding<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> padding <span class="token operator">+</span> input<span class="token punctuation">;</span>
        <span class="token comment">//   ^</span>
        <span class="token comment">// string | number</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">" "</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>padding<span class="token punctuation">)</span> <span class="token operator">+</span> input<span class="token punctuation">;</span> <span class="token comment">// Opps type error here</span>
                 <span class="token comment">//   ^</span>
                 <span class="token comment">// string | number</span>
<span class="token punctuation">}</span>
</code></pre>
<p>As a result, we have the same error as when we manually wrote the return type <code>boolean</code>. <a target="_blank" href="https://www.typescriptlang.org/play/?ts=5.4.5#code/GYVwdgxgLglg9mABDAzgZSgJxmA5gCgDcBDAGxAFMAuRcAazDgHcwBKRAbwFgAoRRTBSghMSKAE8ADhTjBEJchUQBeVYgBEKLDlzqA3LwC+vXqEiwEiScQAmAGQrAo+azZs6aYEAFsARhUxEAB9ELWw8ABpkMEkQKBownXZuPmQ5fFQMcIJXdzxWZN5+fkFhUStbPNxEAGpo2KgDVONU0pEkdQ0AOkFpYmdcpNr6uKbDIA">Here is the TypeScript playground link</a> for the above code fragment. Go and hover of the functions or variables for a better feeling of the types. Then see how writing the type predicate solves the problem.</p>
<p>If we don't specify the type predicate, using methods like <code>filter</code> can also result in incorrect type detection:</p>
<pre class="language-ts" tabindex="0"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> numsOrStrings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'world'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//      ^</span>
<span class="token comment">//    strings: (string | number)[]</span>

<span class="token keyword">const</span> strings <span class="token operator">=</span> numsOrStrings<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>isString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      ^</span>
<span class="token comment">//    strings: (string | number)[]</span>
</code></pre>
<p>Now let's see how TypeScript 5.5 improves the situation.</p>
<h2 id="heading-type-predicates-after-typescript-55">Type Predicates After TypeScript 5.5</h2>
<p>One of the top features of TypeScript 5.5 is it can infer type predicates by analyzing the function body. So if you are using TypeScript 5.5 or later, you don't have to write the type predicate as the return type of <code>isString</code>. TypeScript does it for you, and code like what you see in the example below works perfectly fine:</p>
<pre class="language-ts" tabindex="0"><code class="language-ts"><span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">padLeft</span><span class="token punctuation">(</span>padding<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span> input<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isString</span><span class="token punctuation">(</span>padding<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> padding <span class="token operator">+</span> input<span class="token punctuation">;</span>
        <span class="token comment">//   ^</span>
        <span class="token comment">// string</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">" "</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>padding<span class="token punctuation">)</span> <span class="token operator">+</span> input<span class="token punctuation">;</span> <span class="token comment">// Opps type error here</span>
                 <span class="token comment">//   ^</span>
                 <span class="token comment">// number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> numsOrStrings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'world'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> strings <span class="token operator">=</span> numsOrStrings<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>isString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      ^</span>
<span class="token comment">//    strings: string[]</span>

<span class="token keyword">const</span> numbers <span class="token operator">=</span> numsOrStrings<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token function">isString</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      ^</span>
<span class="token comment">//    numbers: number[]</span>
</code></pre>
<p>I haven't yet found a situation where I'm unhappy with the automatic inference of type predicates. If you do find one, you can always write your own manually.</p>
<h2 id="heading-further-study">Further Study</h2>
<p>In this article, we briefly explored type predicates in TypeScript. If you're interested in learning more and understanding the edge cases, here are the official guides:</p>
<ul>
<li><p><a target="_blank" href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#inferred-type-predicates">What's New → TypeScript 5.5 → Inferred Type Predicates</a></p>
</li>
<li><p><a target="_blank" href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates">Handbook → Narrowing → Using type predicates</a></p>
</li>
</ul>
<p>Thanks for reading! See you next time!</p>
<p>Cover photo background is from <a target="_blank" href="https://unsplash.com/@monaeendra?utm_content=creditCopyText&amp;utm_medium=referral&amp;utm_source=unsplash">Mona Eendra</a> on <a target="_blank" href="https://unsplash.com/photos/flowers-beside-yellow-wall-vC8wj_Kphak?utm_content=creditCopyText&amp;utm_medium=referral&amp;utm_source=unsplash">Unsplash</a></p>
-->
---

<TagLinks />