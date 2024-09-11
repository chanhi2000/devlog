---
lang: ko-KR
title: How to Build an Expense Tracker with HTML, CSS, and JavaScript
description: Article(s) > How to Build an Expense Tracker with HTML, CSS, and JavaScript
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
      content: Article(s) > How to Build an Expense Tracker with HTML, CSS, and JavaScript
    - property: og:description
      content: How to Build an Expense Tracker with HTML, CSS, and JavaScript
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-to-build-an-expense-tracker-with-html-css-and-javascript.html
prev: /programming/js/articles/README.md
date: 2024-09-11
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1726055511234/dcaa759f-58f9-477d-92da-c8b98b71d310.png
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
  name="How to Build an Expense Tracker with HTML, CSS, and JavaScript"
  desc="Building projects is a great way to practice and improve your web development skills. And that's what we'll do in this in-depth tutorial: build a practical project using HTML, CSS, and JavaScript. If you often find yourself wondering where all your m..."
  url="https://freecodecamp.org/news/how-to-build-an-expense-tracker-with-html-css-and-javascript/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1726055511234/dcaa759f-58f9-477d-92da-c8b98b71d310.png"/>

<!-- TODO: 작성 -->

<!-- 
<p>Building projects is a great way to practice and improve your web development skills. And that's what we'll do in this in-depth tutorial: build a practical project using HTML, CSS, and JavaScript.</p>
<p>If you often find yourself wondering where all your money went or how you managed to spend so much, then this project is for you. I created a simple expense tracker to help manage my own finances, and I decided to share a step-by-step tutorial with the developer community.</p>
<p>In this tutorial, we'll walk through the process of building a basic expense tracker from scratch. Whether you're new to web development or looking to enhance your skills, this project will provide you with practical experience in HTML, CSS, and JavaScript.</p>
<p>By the end, you'll have a fully functional tool to track your income, manage expenses, and maintain a clear overview of your finances within a sleek and user-friendly interface.</p>
<p>We'll start by setting up the structure of the tracker, move on to styling it to make it visually appealing, and finally, we'll implement the functionality that will bring it to life.</p>
<h3 id="heading-table-of-contents">Table of Contents</h3>
<ol>
<li><p><a class="post-section-overview" href="#heading-setting-up-the-html-structure">Setting Up the HTML Structure</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-setting-up-the-html-structure">Styling the Expense Tracker</a> <a class="post-section-overview" href="#heading-styling-the-expense-tracker-with-css">wi</a><a class="post-section-overview" href="#heading-setting-up-the-html-structure">th CSS</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-setting-up-the-html-structure">Implementing Function</a><a class="post-section-overview" href="#heading-styling-the-expense-tracker-with-css">ality wit</a><a class="post-section-overview" href="#heading-setting-up-the-html-structure">h JavaScript</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-setting-up-the-html-structure">Enhancing the U</a><a class="post-section-overview" href="#heading-styling-the-expense-tracker-with-css">ser E</a><a class="post-section-overview" href="#heading-implementing-functionality-with-javascript">xp</a><a class="post-section-overview" href="#heading-styling-the-expense-tracker-with-css">erience</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-setting-up-the-html-structure">Testing and Debugging</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-setting-up-the-html-structure">Concl</a><a class="post-section-overview" href="#heading-enhancing-the-user-experience">us</a><a class="post-section-overview" href="#heading-setting-up-the-html-structure">ion</a></p>
</li>
</ol>
<h3 id="heading-prerequisites">Prerequisites</h3>
<p>To get the most out of this tutorial, having a basic understanding of HTML, CSS, and JavaScript will be beneficial. Familiarity with creating simple web pages and handling basic DOM manipulation in JavaScript will help you follow along more easily.</p>
<p>But if you're new to these technologies, don't worry – I'll guide you through each step with detailed explanations.</p>
<h2 id="heading-setting-up-the-html-structure">Setting Up the HTML Structure</h2>
<p>First of all, we need to set up the basic HTML structure. This will serve as the foundation for everythin<a class="post-section-overview" href="#heading-enhancing-the-user-experience">g</a> else we'll build. Don’t worr<a class="post-section-overview" href="#heading-testing-and-debugging">y</a> if you’re new to HTML. I'll guide you through each step.</p>
<h3 id="heading-1-create-a-basic-html-template">1. Create a Basic HTML Template</h3>
<p>Start by creating a new file and naming it <code>index.html</code>. This file will hold the structure of our expense tracker. Every HTML file starts with a basic template, which includes the <code>&lt;!DOCTYPE html&gt;</code> declaration, the <code>&lt;html&gt;</code> tag, and the head and body sections.</p>
<p>Here’s what your initial HTML template should look like:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Expense Tracker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h3 id="heading-2-adding-a-container">2. Adding a Container</h3>
<p>Inside the <code>&lt;body&gt;</code> tag, let’s start by adding a <code>div</code> element with a class of <code>container</code>. This container will hold all the content of our expense tracker, such as the title, input fields, and summary. We use a container to center everything on the page and make sure our layout looks neat.</p>
<p>Here’s how you can do it:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- All content will go here --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h3 id="heading-3-add-the-expense-tracker-title">3. Add the Expense Tracker Title</h3>
<p>Now, let’s add a title to our expense tracker. We’ll use the <code>&lt;h1&gt;</code> tag for this, which is typically used for the main heading on a webpage.</p>
<p>Add the following code inside the <code>container</code> div:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Expense Tracker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>This heading will display prominently at the top of your page, letting users know what the application is about.</p>
<h3 id="heading-4-setting-up-sections-for-income-and-expenses">4. Setting Up Sections for Income and Expenses</h3>
<p>Next, we'll add sections for income and expenses. These sections will include input fields where users can enter their income and expense details.</p>
<p>Start by adding two <code>div</code> elements, each with a class of <code>section</code>. One section will be for income, and the other for expenses. Here’s the code:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>section<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Income<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Income input fields will go here --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>section<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Expenses<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Expense input fields will go here --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>The <code>&lt;h2&gt;</code> tags inside these sections serve as subheadings to label each section. We’ll add input fields in the next step.</p>
<h3 id="heading-5-adding-input-fields">5. Adding Input Fields</h3>
<p>Now, let’s add input fields for the income section. Users will need to enter a description (for example, “Salary”) and an amount. Each input field will be wrapped in a <code>div</code> with a class of <code>input-group</code> for easy styling later.</p>
<p>While this example uses Nigerian Naira (₦) for the currency, you can easily adapt it to any currency you prefer. Simply replace the currency symbol in the placeholder or any labels to match your needs.</p>
<p>Here’s how you can add the input fields:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>income-description<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Description<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>income-description<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e.g. Salary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>income-amount<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Amount (₦)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>income-amount<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e.g. 100000<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>Do the same for the expenses section, but this time, we’ll also add a dropdown for the category of the expense:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>expense-description<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Description<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>expense-description<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e.g. Rent<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>expense-category<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Category<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>expense-category<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Housing<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Housing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Food<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Food<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Transportation<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Transportation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Entertainment<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Entertainment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Others<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Others<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>expense-amount<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Amount (₦)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>expense-amount<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e.g. 50000<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h3 id="heading-6-add-a-button-to-each-section">6. Add a Button to Each Section</h3>
<p>Finally, we need a button in each section that users will click to add their income or expense to the tracker. Place a <code>button</code> element inside each section like this:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addIncome()<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Add Income<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>And for the expenses section:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addExpense()<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Add Expense<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h3 id="heading-7-displaying-the-transaction-history">7. Displaying the Transaction History</h3>
<p>After the income and expenses sections, we need a place to display the transaction history. We’ll use a table for this, as it’s a clean and organized way to present data.</p>
<p>Add the following code after the expenses section:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Transaction History<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Description<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Category<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Amount (₦)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Type<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- Column for delete button --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transaction-history<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- Transactions will appear here --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h3 id="heading-8-adding-a-summary-section">8. Adding a Summary Section</h3>
<p>At the bottom of the container, let’s add a summary section that shows the total income, total expenses, and the balance.</p>
<p>Here’s the code for the summary:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>summary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Budget Summary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Total Income: ₦<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>total-income<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Total Expenses: ₦<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>total-expenses<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Balance: ₦<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>balance<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h3 id="heading-9-adding-a-clear-all-button">9. Adding a Clear All Button</h3>
<p>Lastly, include a button that will allow users to clear all the data in one click. This is particularly useful if they want to reset everything.</p>
<p>Here’s how to add the clear button:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clear-button-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clearAll()<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Clear All<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h3 id="heading-10-putting-it-all-together">10. Putting It All Together</h3>
<p>When you put all the pieces together, your HTML structure should look like this:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Creative Budget Planner<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Expense Tracker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>section<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Income<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>income-description<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Description<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>income-description<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e.g. Salary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>income-amount<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Amount (₦)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>income-amount<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e.g. 100000<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addIncome()<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Add Income<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>section<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Expenses<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>expense-description<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Description<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>expense-description<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e.g. Rent<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>expense-category<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Category<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>expense-category<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Housing<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Housing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Food<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Food<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Transportation<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Transportation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Entertainment<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Entertainment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Others<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Others<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>expense-amount<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Amount (₦)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>expense-amount<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e.g. 50000<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addExpense()<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Add Expense<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Transaction History<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Description<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Category<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Amount (₦)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Type<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transaction-history<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!-- Transactions will appear here --&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>summary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Budget Summary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Total Income: ₦<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>total-income<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Total Expenses: ₦<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>total-expenses<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Balance: ₦<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>balance<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clear-button-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clearAll()<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Clear All<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<div class="embed-wrapper">
        <iframe width="100%" height="350" src="https://codepen.io/joanayebola/embed/NWZEvLy" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="CodePen embed" scrolling="no" allowtransparency="true" allowfullscreen="true" loading="lazy"></iframe></div>
<p> </p>
<h2 id="heading-styling-the-expense-tracker-with-css">Styling the Expense Tracker with CSS</h2>
<p>Now that we have our HTML structure in place, it’s time to make our expense tracker visually appealing by adding some CSS. We’ll start with basic styling and then move on to more specific details to ensure everything looks neat and user-friendly.</p>
<h3 id="heading-1-setting-up-the-css-file">1. Setting Up the CSS File</h3>
<p>First, create a new file named <code>styles.css</code> in the same directory as your <code>index.html</code> file. Link this CSS file to your HTML by adding the following line inside the <code>&lt;head&gt;</code> section of <code>index.html</code>:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styles.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>This line tells your HTML file to use the styles defined in <code>styles.css</code>.</p>
<h3 id="heading-2-styling-the-body">2. Styling the Body</h3>
<p>Let’s start by adding some basic styles to the <code>&lt;body&gt;</code> to set a nice background color, font, and layout. Open <code>styles.css</code> and add the following code:</p>
<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f4f4f4<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<ul>
<li><p><strong>font-family:</strong> We’re using a simple and clean font.</p>
</li>
<li><p><strong>background-color:</strong> A light grey background will give our tracker a soft look.</p>
</li>
<li><p><strong>display, justify-content, align-items, height:</strong> These properties center the content vertically and horizontally.</p>
</li>
</ul>
<h3 id="heading-3-styling-the-container">3. Styling the Container</h3>
<p>Next, we’ll style the <code>.container</code> to give it a clean, organized look:</p>
<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<ul>
<li><p><strong>background-color:</strong> White makes the content stand out against the grey background.</p>
</li>
<li><p><strong>padding:</strong> Adds space inside the container so the content isn’t touching the edges.</p>
</li>
<li><p><strong>border-radius:</strong> Rounds the corners for a modern look.</p>
</li>
<li><p><strong>box-shadow:</strong> Adds a subtle shadow to lift the container off the page slightly.</p>
</li>
<li><p><strong>max-width and width:</strong> Ensures the container is responsive and doesn’t exceed a certain width.</p>
</li>
</ul>
<h3 id="heading-4-styling-the-headings">4. Styling the Headings</h3>
<p>Let’s style the headings to make them more visually distinct:</p>
<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">h1, h2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<ul>
<li><p><strong>color:</strong> A dark grey color for the text will keep it readable.</p>
</li>
<li><p><strong>text-align:</strong> Centers the headings to create a balanced layout.</p>
</li>
<li><p><strong>margin-bottom:</strong> Adds space below the headings.</p>
</li>
</ul>
<h3 id="heading-5-styling-the-input-groups">5. Styling the Input Groups</h3>
<p>Now, let’s style the input fields and labels within the <code>.input-group</code> class:</p>
<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">.input-group</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.input-group label</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.input-group input,
.input-group select</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<ul>
<li><p><strong>margin-bottom:</strong> Adds space between input groups.</p>
</li>
<li><p><strong>display: block:</strong> Ensures the labels take up the full width.</p>
</li>
<li><p><strong>width:</strong> Makes the input fields and select elements responsive.</p>
</li>
<li><p><strong>padding, border, border-radius:</strong> Creates a more polished look for the inputs.</p>
</li>
<li><p><strong>box-sizing:</strong> Ensures padding is included in the element’s total width.</p>
</li>
</ul>
<h3 id="heading-6-styling-the-buttons">6. Styling the Buttons</h3>
<p>Let’s give the buttons a more interactive and appealing look:</p>
<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">.button-group button,
.clear-button-group button</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #FF69B4<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button-group button:hover,
.clear-button-group button:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #FF1493<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<ul>
<li><p><strong>background-color:</strong> A vibrant pink for the buttons to make them stand out.</p>
</li>
<li><p><strong>color:</strong> White text for contrast against the pink background.</p>
</li>
<li><p><strong>border, padding, border-radius:</strong> No border, ample padding, and rounded corners for a modern look.</p>
</li>
<li><p><strong>cursor:</strong> Changes the cursor to a pointer on hover, indicating the button is clickable.</p>
</li>
<li><p><strong>hover:</strong> Darkens the button color when hovered for a subtle interaction effect.</p>
</li>
</ul>
<h3 id="heading-7-styling-the-transaction-history-table">7. Styling the Transaction History Table</h3>
<p>We’ll also style the transaction history table to ensure it’s easy to read and visually consistent with the rest of the tracker:</p>
<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">.table-container</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">table</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">th, td</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">th</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #FF69B4<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">td</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">td button</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #FF1493<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">td button:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #C71585<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<ul>
<li><p><strong>border-collapse:</strong> Ensures there’s no gap between table borders.</p>
</li>
<li><p><strong>padding, border-bottom:</strong> Adds padding inside table cells and a border under each row for separation.</p>
</li>
<li><p><strong>background-color for th:</strong> Matches the buttons for a cohesive design.</p>
</li>
<li><p><strong>td button:</strong> Adds a delete button inside table cells, styled similarly to the other buttons.</p>
</li>
</ul>
<h3 id="heading-8-styling-the-summary-section">8. Styling the Summary Section</h3>
<p>Finally, let’s style the summary section to make it stand out:</p>
<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">.summary</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #FFB3FF<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.summary p</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 10px 0<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.summary span</span> <span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<ul>
<li><p><strong>background-color:</strong> A soft pink background helps distinguish the summary from the rest of the content.</p>
</li>
<li><p><strong>padding, border-radius:</strong> Adds spacing and rounded corners.</p>
</li>
<li><p><strong>text-align:</strong> Centers the text within the summary.</p>
</li>
<li><p><strong>font-size, font-weight:</strong> Increases the font size and weight to make the totals and balance more prominent.</p>
</li>
</ul>
<h3 id="heading-9-putting-it-all-together">9. Putting It All Together</h3>
<p>Here’s how your <code>styles.css</code> file should look with all the styles combined:</p>
<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f4f4f4<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1, h2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.input-group</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.input-group label</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.input-group input,
.input-group select</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button-group button,
.clear-button-group button</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #FF69B4<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button-group button:hover,
.clear-button-group button:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #FF1493<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.table-container</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">table</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">th, td</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">th</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #FF69B4<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">td</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">td button</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #FF1493<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">td button:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #C71585<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.summary</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #FFB3FF<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.summary p</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 10px 0<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.summary span</span> <span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>With this CSS, your expense tracker should now look clean, modern, and easy to use. You can always tweak the colors, fonts, or layout to better suit your style or branding.</p>
<div class="embed-wrapper">
        <iframe width="100%" height="350" src="https://codepen.io/joanayebola/embed/rNEQzqb" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="CodePen embed" scrolling="no" allowtransparency="true" allowfullscreen="true" loading="lazy"></iframe></div>
<p> </p>
<h2 id="heading-how-to-implement-functionality-with-javascript">How to Implement Functionality with JavaScript</h2>
<p>Now that we have our HTML structure and CSS styling in place, it’s time to bring our expense tracker to life using JavaScript. We’ll add functionality so users can add expenses, view a summary, and remove items from the list.</p>
<h3 id="heading-1-setting-up-the-javascript-file">1. Setting Up the JavaScript File</h3>
<p>First, create a new file named <code>script.js</code> in the same directory as your <code>index.html</code> file. Link this JavaScript file to your HTML by adding the following line just before the closing <code>&lt;/body&gt;</code> tag in <code>index.html</code>:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>script.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>This line tells your HTML file to execute the JavaScript code from <code>script.js</code>.</p>
<h3 id="heading-2-defining-variables">2. Defining Variables</h3>
<p>Let’s start by defining some variables to reference key elements in our HTML. Open <code>script.js</code> and add the following code:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> expenseForm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'expense-form'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> expenseInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'expense-input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> amountInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'amount-input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> categoryInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'category-input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> transactionList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'transaction-list'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> totalExpense <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'total-expense'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> totalIncome <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'total-income'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> balance <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'balance'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Here’s what each variable does:</p>
<ul>
<li><p><strong>expenseForm:</strong> References the form where users enter new expenses.</p>
</li>
<li><p><strong>expenseInput:</strong> References the input field for the expense description.</p>
</li>
<li><p><strong>amountInput:</strong> References the input field for the expense amount.</p>
</li>
<li><p><strong>categoryInput:</strong> References the dropdown for selecting the expense category.</p>
</li>
<li><p><strong>transactionList:</strong> References the table where we’ll display the transactions.</p>
</li>
<li><p><strong>totalExpense, totalIncome, balance:</strong> Reference the elements showing the summary of expenses, income, and balance.</p>
</li>
</ul>
<h3 id="heading-3-adding-an-expense">3. Adding an Expense</h3>
<p>Next, let’s create a function that handles the addition of a new expense when the form is submitted:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">expenseForm<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> description <span class="token operator">=</span> expenseInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> amount <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>amountInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> category <span class="token operator">=</span> categoryInput<span class="token punctuation">.</span>value<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>description <span class="token operator">===</span> <span class="token string">''</span> <span class="token operator">||</span> <span class="token function">isNaN</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span> <span class="token operator">||</span> amount <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Please enter a valid expense description and amount.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">addTransaction</span><span class="token punctuation">(</span>description<span class="token punctuation">,</span> amount<span class="token punctuation">,</span> category<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">updateSummary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">clearInputs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">addTransaction</span><span class="token punctuation">(</span><span class="token parameter">description<span class="token punctuation">,</span> amount<span class="token punctuation">,</span> category</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> transactionRow <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'tr'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    transactionRow<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>description<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;
        &lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>category<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;
        &lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>amount<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;
        &lt;td&gt;&lt;button class="delete-btn"&gt;Delete&lt;/button&gt;&lt;/td&gt;
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

    transactionList<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>transactionRow<span class="token punctuation">)</span><span class="token punctuation">;</span>

    transactionRow<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.delete-btn'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        transactionRow<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">updateSummary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Here’s what’s happening in this code:</p>
<ul>
<li><p><code>event.preventDefault()</code><strong>:</strong> Prevents the form from refreshing the page when submitted.</p>
</li>
<li><p><code>addTransaction</code><strong>:</strong> Adds a new transaction to the table.</p>
</li>
<li><p><code>updateSummary</code><strong>:</strong> Updates the total expenses, income, and balance.</p>
</li>
<li><p><code>clearInputs</code><strong>:</strong> Clears the form inputs after the transaction is added.</p>
</li>
<li><p><strong>delete button:</strong> Allows users to remove a transaction from the list.</p>
</li>
</ul>
<h3 id="heading-4-updating-the-summary">4. Updating the Summary</h3>
<p>To keep track of the total expenses, income, and balance, we’ll create an <code>updateSummary</code> function:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">updateSummary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> totalExpenses <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> totalIncomes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> transactions <span class="token operator">=</span> transactionList<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'tr'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    transactions<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">transaction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> amount <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>transaction<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> category <span class="token operator">=</span> transaction<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>textContent<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>category <span class="token operator">===</span> <span class="token string">'Income'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            totalIncomes <span class="token operator">+=</span> amount<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            totalExpenses <span class="token operator">+=</span> amount<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    totalExpense<span class="token punctuation">.</span>textContent <span class="token operator">=</span> totalExpenses<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    totalIncome<span class="token punctuation">.</span>textContent <span class="token operator">=</span> totalIncomes<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    balance<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token punctuation">(</span>totalIncomes <span class="token operator">-</span> totalExpenses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>This function loops through each transaction in the table:</p>
<ul>
<li><p><code>totalExpenses</code> <strong>and</strong> <code>totalIncomes</code><strong>:</strong> Calculated by summing the amounts in each category.</p>
</li>
<li><p><code>totalExpense</code><strong>,</strong> <code>totalIncome</code><strong>,</strong> <code>balance</code><strong>:</strong> Updated with the calculated values.</p>
</li>
</ul>
<h3 id="heading-5-clearing-form-inputs">5. Clearing Form Inputs</h3>
<p>To reset the form after adding a transaction, we’ll create a <code>clearInputs</code> function:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">clearInputs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    expenseInput<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    amountInput<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    categoryInput<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'Expense'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>This function simply clears the values of the form inputs.</p>
<h3 id="heading-6-putting-it-all-together">6. Putting It All Together</h3>
<p>Here’s what your <code>script.js</code> file should look like with all the code combined:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> expenseForm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'expense-form'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> expenseInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'expense-input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> amountInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'amount-input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> categoryInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'category-input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> transactionList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'transaction-list'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> totalExpense <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'total-expense'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> totalIncome <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'total-income'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> balance <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'balance'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

expenseForm<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> description <span class="token operator">=</span> expenseInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> amount <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>amountInput<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> category <span class="token operator">=</span> categoryInput<span class="token punctuation">.</span>value<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>description <span class="token operator">===</span> <span class="token string">''</span> <span class="token operator">||</span> <span class="token function">isNaN</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span> <span class="token operator">||</span> amount <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Please enter a valid expense description and amount.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">addTransaction</span><span class="token punctuation">(</span>description<span class="token punctuation">,</span> amount<span class="token punctuation">,</span> category<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">updateSummary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">clearInputs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">addTransaction</span><span class="token punctuation">(</span><span class="token parameter">description<span class="token punctuation">,</span> amount<span class="token punctuation">,</span> category</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> transactionRow <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'tr'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    transactionRow<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>description<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;
        &lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>category<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;
        &lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>amount<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;
        &lt;td&gt;&lt;button class="delete-btn"&gt;Delete&lt;/button&gt;&lt;/td&gt;
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

    transactionList<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>transactionRow<span class="token punctuation">)</span><span class="token punctuation">;</span>

    transactionRow<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.delete-btn'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        transactionRow<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">updateSummary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">updateSummary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> totalExpenses <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> totalIncomes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> transactions <span class="token operator">=</span> transactionList<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'tr'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    transactions<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">transaction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> amount <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>transaction<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> category <span class="token operator">=</span> transaction<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>textContent<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>category <span class="token operator">===</span> <span class="token string">'Income'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            totalIncomes <span class="token operator">+=</span> amount<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            totalExpenses <span class="token operator">+=</span> amount<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    totalExpense<span class="token punctuation">.</span>textContent <span class="token operator">=</span> totalExpenses<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    totalIncome<span class="token punctuation">.</span>textContent <span class="token operator">=</span> totalIncomes<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    balance<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token punctuation">(</span>totalIncomes <span class="token operator">-</span> totalExpenses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clearInputs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    expenseInput<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    amountInput<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    categoryInput<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'Expense'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<div class="embed-wrapper">
        <iframe width="100%" height="350" src="https://codepen.io/joanayebola/embed/rNEQzQb" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="CodePen embed" scrolling="no" allowtransparency="true" allowfullscreen="true" loading="lazy"></iframe></div>
<p> </p>
<h3 id="heading-7-testing-the-expense-tracker">7. Testing the Expense Tracker</h3>
<p>With all the code in place, open your <code>index.html</code> file in a web browser. Try adding some expenses and incomes to see how they appear in the transaction table. You should see the total expenses, total income, and balance update automatically as you add and delete transactions.</p>
<p>Congratulations! You’ve now implemented a fully functional expense tracker using JavaScript. This tracker is a simple but powerful tool for managing personal finances, and you can further expand it by adding features like data persistence, additional categories, or more detailed reporting.</p>
<h2 id="heading-how-to-enhance-the-user-experience">How to Enhance the User Experience</h2>
<p>Now that the core functionality of our expense tracker is up and running, it’s time to improve the user experience. Adding small details and thoughtful enhancements can make your application more intuitive, interactive, and enjoyable to use.</p>
<p>Here are some ideas for enhancing the user experience of our expense tracker:</p>
<h3 id="heading-1-adding-real-time-feedback">1. Adding Real-Time Feedback</h3>
<p>It’s helpful for users to receive feedback as they interact with your application. Let’s add a notification feature to confirm that a transaction was successfully added. We’ll do this by showing a brief message after a transaction is submitted.</p>
<p>In your HTML, add a <code>div</code> below the form for the notification message:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>notification<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>In your CSS, style the notification to make it more visible:</p>
<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">#notification</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #28a745<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.hidden</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Now, in your JavaScript file, we’ll show this notification for a few seconds after a transaction is added:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">showNotification</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> notification <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'notification'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    notification<span class="token punctuation">.</span>textContent <span class="token operator">=</span> message<span class="token punctuation">;</span>
    notification<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'hidden'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        notification<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'hidden'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Notification will disappear after 2 seconds</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Update the <code>addTransaction</code> function to show this notification when a new transaction is added:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token function">addTransaction</span><span class="token punctuation">(</span>description<span class="token punctuation">,</span> amount<span class="token punctuation">,</span> category<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">showNotification</span><span class="token punctuation">(</span><span class="token string">'Transaction added successfully!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">updateSummary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">clearInputs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>This way, each time a user submits a transaction, they get immediate feedback.</p>
<h3 id="heading-2-displaying-a-balance-indicator">2. Displaying a Balance Indicator</h3>
<p>To give users a clearer visual understanding of their financial status, you can implement a balance indicator. This could be a simple color change for the balance display depending on whether the balance is positive or negative.</p>
<p>In your CSS, add styles for different balance states:</p>
<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">.positive</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #28a745<span class="token punctuation">;</span> <span class="token comment">/* Green for positive balance */</span>
<span class="token punctuation">}</span>

<span class="token selector">.negative</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #dc3545<span class="token punctuation">;</span> <span class="token comment">/* Red for negative balance */</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Then, in your <code>updateSummary</code> function, apply the appropriate class based on the balance:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">updateSummary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> totalExpenses <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> totalIncomes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> transactions <span class="token operator">=</span> transactionList<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'tr'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    transactions<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">transaction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> amount <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>transaction<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> category <span class="token operator">=</span> transaction<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>textContent<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>category <span class="token operator">===</span> <span class="token string">'Income'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            totalIncomes <span class="token operator">+=</span> amount<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            totalExpenses <span class="token operator">+=</span> amount<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    totalExpense<span class="token punctuation">.</span>textContent <span class="token operator">=</span> totalExpenses<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    totalIncome<span class="token punctuation">.</span>textContent <span class="token operator">=</span> totalIncomes<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> currentBalance <span class="token operator">=</span> totalIncomes <span class="token operator">-</span> totalExpenses<span class="token punctuation">;</span>
    balance<span class="token punctuation">.</span>textContent <span class="token operator">=</span> currentBalance<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Apply positive/negative class</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentBalance <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        balance<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'negative'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        balance<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'positive'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        balance<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'positive'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        balance<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'negative'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Now, when users are in the positive, the balance will show up in green. If they are in the negative, it will appear in red.</p>
<h3 id="heading-3-preserving-data-with-local-storage">3. Preserving Data with Local Storage</h3>
<p>One major enhancement is saving the transactions even after the page is refreshed. For this, we can use the browser’s local storage. By saving the transactions in local storage, the tracker will retain the data between sessions.</p>
<p>First, modify the <code>addTransaction</code> function to store the transactions in local storage:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">addTransaction</span><span class="token punctuation">(</span><span class="token parameter">description<span class="token punctuation">,</span> amount<span class="token punctuation">,</span> category</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> transaction <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> description<span class="token punctuation">,</span>
        <span class="token literal-property property">amount</span><span class="token operator">:</span> amount<span class="token punctuation">,</span>
        <span class="token literal-property property">category</span><span class="token operator">:</span> category
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> transactions <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'transactions'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    transactions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>transaction<span class="token punctuation">)</span><span class="token punctuation">;</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'transactions'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>transactions<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> transactionRow <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'tr'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    transactionRow<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>description<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;
        &lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>category<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;
        &lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>amount<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;
        &lt;td&gt;&lt;button class="delete-btn"&gt;Delete&lt;/button&gt;&lt;/td&gt;
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    transactionList<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>transactionRow<span class="token punctuation">)</span><span class="token punctuation">;</span>

    transactionRow<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.delete-btn'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        transactionRow<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">removeTransaction</span><span class="token punctuation">(</span>transaction<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">updateSummary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Next, create a <code>removeTransaction</code> function to handle deletion from local storage:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">removeTransaction</span><span class="token punctuation">(</span><span class="token parameter">transactionToRemove</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> transactions <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'transactions'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    transactions <span class="token operator">=</span> transactions<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">transaction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">!</span><span class="token punctuation">(</span>transaction<span class="token punctuation">.</span>description <span class="token operator">===</span> transactionToRemove<span class="token punctuation">.</span>description <span class="token operator">&amp;&amp;</span>
                 transaction<span class="token punctuation">.</span>amount <span class="token operator">===</span> transactionToRemove<span class="token punctuation">.</span>amount <span class="token operator">&amp;&amp;</span>
                 transaction<span class="token punctuation">.</span>category <span class="token operator">===</span> transactionToRemove<span class="token punctuation">.</span>category<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'transactions'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>transactions<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>To load saved transactions when the page is loaded, create a <code>loadTransactions</code> function:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">loadTransactions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> transactions <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'transactions'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    transactions<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">transaction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">addTransaction</span><span class="token punctuation">(</span>transaction<span class="token punctuation">.</span>description<span class="token punctuation">,</span> transaction<span class="token punctuation">.</span>amount<span class="token punctuation">,</span> transaction<span class="token punctuation">.</span>category<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">updateSummary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> loadTransactions<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Now, each time the page loads, the saved transactions are retrieved from local storage and displayed in the table.</p>
<h3 id="heading-4-how-to-improve-form-ux">4. How to Improve Form UX</h3>
<p>Let’s make the form more user-friendly by automatically focusing on the description input field when the page loads and clearing the form fields when a user submits a transaction. We can also restrict the amount field to only accept numbers.</p>
<p>To automatically focus on the description field:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    expenseInput<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>To restrict the amount input to numbers only, you can add the following attribute to the <code>amount-input</code> in your HTML:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>amount-input<span class="token punctuation">"</span></span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0.01<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h3 id="heading-5-using-icons-for-better-ui">5. Using Icons for Better UI</h3>
<p>Consider replacing the 'Delete' button text with an icon to improve the visual appeal. You can use an icon library like Font Awesome to add a trash icon.</p>
<p>First, include Font Awesome in your HTML file by adding this line inside the <code>&lt;head&gt;</code> section:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>Then, in your <code>addTransaction</code> function, replace the delete button with an icon:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">transactionRow<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>description<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;
    &lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>category<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;
    &lt;td&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>amount<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td&gt;
    &lt;td&gt;&lt;button class="delete-btn"&gt;&lt;i class="fas fa-trash"&gt;&lt;/i&gt;&lt;/button&gt;&lt;/td&gt;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre>
<p>This little tweak makes your tracker look more modern and visually appealing.</p>
<h2 id="heading-testing-and-debugging">Testing and Debugging</h2>
<p>After implementing the functionality and enhancing the user experience, it’s crucial to test the expense tracker thoroughly to ensure everything works as expected. Testing helps you catch any bugs or issues before they become a problem for users.</p>
<p>In this section, we’ll go over some basic testing and debugging strategies to make sure our expense tracker is solid.</p>
<h3 id="heading-1-testing-basic-functionality">1. Testing Basic Functionality</h3>
<p>Start by testing the core features of your expense tracker:</p>
<ul>
<li><p><strong>Adding Transactions</strong>: Enter a few transactions and ensure they appear correctly in the table, with the description, category, and amount displayed properly.</p>
</li>
<li><p><strong>Deleting Transactions</strong>: Test the delete functionality by removing transactions and verifying that they are deleted both from the table and from local storage.</p>
</li>
<li><p><strong>Updating the Summary</strong>: Check that the total income, total expenses, and balance update correctly as you add and remove transactions.</p>
</li>
</ul>
<p>If any of these functionalities don’t work as expected, double-check the relevant code sections. Ensure that the JavaScript functions are correctly manipulating the DOM and updating local storage.</p>
<h3 id="heading-2-cross-browser-testing">2. Cross-Browser Testing</h3>
<p>Your expense tracker should work consistently across different web browsers. Test the application on multiple browsers like Chrome, Firefox, Safari, and Edge. Make sure the layout, functionality, and styling are consistent across all platforms.</p>
<p>If you encounter any browser-specific issues, you might need to adjust your CSS or JavaScript. For instance, some CSS properties might behave differently on different browsers, so ensure compatibility or provide fallbacks.</p>
<h3 id="heading-3-mobile-responsiveness">3. Mobile Responsiveness</h3>
<p>Test your expense tracker on various devices to ensure it’s fully responsive. Open the application on your phone or use the browser’s developer tools to simulate different screen sizes. Check how the layout adapts, and make sure the tracker is usable on smaller screens.</p>
<p>Look out for issues like:</p>
<ul>
<li><p>Text or buttons being too small or hard to tap.</p>
</li>
<li><p>The layout breaking or elements overlapping.</p>
</li>
<li><p>The form fields not fitting the screen.</p>
</li>
</ul>
<p>If you spot any problems, consider adjusting your CSS to improve the mobile experience. You might need to use media queries to tweak the layout for smaller screens.</p>
<h3 id="heading-4-testing-edge-cases">4. Testing Edge Cases</h3>
<p>Think about how users might interact with the expense tracker in unexpected ways. Consider testing the following edge cases:</p>
<ul>
<li><p><strong>Empty Inputs</strong>: Try submitting a transaction with empty fields. Does your form validation prevent this? Ensure that your <code>required</code> attributes and JavaScript validations are working.</p>
</li>
<li><p><strong>Negative Amounts</strong>: Enter negative numbers in the amount field. Does the tracker handle this correctly? You may want to restrict the input to prevent negative values.</p>
</li>
<li><p><strong>Large Numbers</strong>: Test with very large numbers in the amount field. Does the application handle large values without breaking?</p>
</li>
<li><p><strong>Duplicate Transactions</strong>: Add the same transaction multiple times. Does your tracker manage duplicates gracefully?</p>
</li>
</ul>
<p>By testing these edge cases, you can identify and address potential bugs before they affect users.</p>
<h3 id="heading-5-debugging-common-issues">5. Debugging Common Issues</h3>
<p>If you run into issues while testing, debugging is your next step. Here are some common problems you might encounter and how to troubleshoot them:</p>
<ul>
<li><p><strong>JavaScript Errors</strong>: If something isn’t working, check the browser’s console for any JavaScript errors. The console will usually provide information about what went wrong and which line of code caused the issue.</p>
</li>
<li><p><strong>Layout Problems</strong>: If the layout doesn’t look right, inspect the elements using the browser’s developer tools. Check the CSS properties being applied and see if there are any issues with margins, padding, or Flexbox/Grid settings.</p>
</li>
<li><p><strong>Data Not Persisting</strong>: If transactions aren’t being saved or loaded correctly, revisit the local storage code. Make sure you’re correctly saving and retrieving data, and that the JSON is being parsed and stringified properly.</p>
</li>
<li><p><strong>Event Listeners Not Firing</strong>: If buttons or other interactive elements aren’t working, ensure that your event listeners are properly attached. Double-check the selectors and make sure the elements exist when you’re trying to attach the listeners.</p>
</li>
</ul>
<h3 id="heading-6-user-testing">6. User Testing</h3>
<p>Finally, consider asking others to test your expense tracker. They might use the application in ways you didn’t anticipate, helping you identify usability issues or bugs that you missed. Watch how they interact with the tracker and gather feedback on any confusing elements or unexpected behaviors.</p>
<h3 id="heading-conclusion">Conclusion</h3>
<p>Building an expense tracker from scratch is not only a great way to sharpen your web development skills but also provides you with a practical tool to manage your finances.</p>
<p>Throughout this tutorial, we’ve walked through the entire process, from setting up the HTML structure to styling it with CSS, adding functionality with JavaScript, enhancing the user experience, and testing and debugging the final product.</p>
<p>By following these steps, you’ve created a fully functional expense tracker that allows you to easily add, view, and delete transactions, while keeping track of your income and expenses. You’ve also learned how to handle data persistence with local storage, ensuring that your data remains available even after a page refresh.</p>
<p>Remember, the principles and techniques you’ve applied here can be extended to more complex projects. Whether you’re looking to add more features to this tracker or take on a new challenge, the skills you’ve gained will be invaluable.</p>
<p>Thank you for following along with this tutorial. I hope you found it helpful and that you feel more confident in your ability to build web applications.</p>
<p>If you have any questions or suggestions, feel free to reach out on <a target="_blank" href="https://ng.linkedin.com/in/joan-ayebola">LinkedIn</a>. If you enjoyed this content, consider <a target="_blank" href="https://www.buymeacoffee.com/joanayebola">buying me a coffee</a> to support the creation of more developer-friendly contents.</p>
-->

---

<TagLinks />