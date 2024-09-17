---
lang: ko-KR
title: How to Handle Side Effects in Jest – A Guide to Effective Mocking
description: Article(s) > How to Handle Side Effects in Jest – A Guide to Effective Mocking
icon: fa-brands fa-node
category: 
  - Node.js
  - Express.js
  - Strapi
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
      content: Article(s) > How to Handle Side Effects in Jest – A Guide to Effective Mocking
    - property: og:description
      content: How to Handle Side Effects in Jest – A Guide to Effective Mocking
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-to-handle-side-effects-in-jest.html
prev: /programming/js-node/articles/README.md
date: 2024-09-16
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1726038899380/6210fc66-17fb-4db9-9f91-1e7d38dc256c.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Angular.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-node/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="How to Handle Side Effects in Jest – A Guide to Effective Mocking"
  desc="Unit testing is a major topic for every developer. It is a fundamental practice in building software applications. Unit testing helps you to identify bugs early and makes code maintenance easier. By isolating and testing single units or components of..."
  url="https://freecodecamp.org/news/how-to-handle-side-effects-in-jest/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1726038899380/6210fc66-17fb-4db9-9f91-1e7d38dc256c.png"/>

<!-- TODO: 작성 -->

<!-- 
<p>Unit testing is a major topic for every developer. It is a fundamental practice in building software applications. Unit testing helps you to identify bugs early and makes code maintenance easier. By isolating and testing single units or components of your application, you can ensure their reliability and functionality.</p>
<p>When applying unit testing, you need to focus on the main logic of a component without affecting external dependencies or causing side effects—unintended changes that occur outside a function's scope, like database queries or network requests.</p>
<p>Jest is a popular testing framework that offers powerful capabilities to help in effective testing. Mocking in Jest helps you test and manage external dependencies and handle side effects.</p>
<p>In this guide, you will learn about unit testing essentials, focusing on Jest mocks. Whether you're just starting or looking to enhance your testing strategy, this guide will equip you with the knowledge to write effective and efficient tests.</p>
<h3 id="heading-heres-what-well-cover"><strong>Here's what we'll cover:</strong></h3>
<ul>
<li><p><a class="post-section-overview" href="#heading-what-is-unit-testing">What is Unit Testing?</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-what-are-external-dependencies">What are External Dependencies?</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-what-are-side-effects">What are Side Effects?</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-what-is-mocking">What is Mocking?</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-use-case-login-express-controller">Use Case: Login Express Controller</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-summary">Summary</a></p>
</li>
</ul>
<h2 id="heading-what-is-unit-testing"><strong>What is Unit Testing?</strong></h2>
<p>Unit testing is a software testing technique used to test a single component of your application in isolation. This component may be a class, a method, or a module.</p>
<h3 id="heading-why-you-should-use-unit-testing">Why You Should Use Unit Testing</h3>
<ol>
<li><p>You will be able to detect bugs earlier, it helps you to detect if a component behaves as expected.</p>
</li>
<li><p>Enables you to modify your component safely. If you update your component and, by mistake, add or modify something you should not, the test will fail if these changes introduce a new bug.</p>
</li>
<li><p>It can serve as a documentation that shows how individual units of your app work.</p>
</li>
<li><p>Encourages you to write cleaner code. The cleaner your component is, the easier and simpler your test will be.</p>
</li>
<li><p>It helps you to easily integrate different parts of your application, as you will be sure that every single component works correctly.</p>
</li>
<li><p>In the long term, you can maintain your application faster.</p>
</li>
</ol>
<p>Let us dive-deep into some practical usages:</p>
<p>Let’s assume that you have a multiplication function that should take two arguments and return the result.</p>
<p>Here’s the code:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">*</span>b
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> multiply
</code></pre>
<p><strong>Note</strong>: To use Jest with Node.js ECMAScript modules, check out this <a target="_blank" href="https://ayanabilothman.hashnode.dev/configure-jest-to-use-it-with-nodejs-ecmascript-modules">article</a> for configuration.</p>
<p>So how can you test this function using Jest?</p>
<ol>
<li><p>Create <strong><em>__tests__</em></strong> folder in the root folder.</p>
</li>
<li><p>Create file <strong><em>multiply.test.js</em></strong> inside <strong><em>__tests__</em></strong> .</p>
<p> Note that any file ending with <strong><em>.test.js</em></strong> will be executed by Jest.</p>
</li>
<li><p>Start writing your tests by calling the <code>it("",()=&gt;{})</code> Jest method.</p>
</li>
</ol>
<p>Let's understand what `<code>it("",()=&gt;{})</code>` does:</p>
<p>The <code>it</code> method is a Jest function used to test certain behaviors in your function.<br>The first argument should be the test name, which can be an assertion text for what you expect from this test.</p>
<p>For example, if you need to test whether the <code>multiply</code> function returns the right result using the arguments and if they are numbers, you can write <code>it("should return the multiplication of inputs of type number",()=&gt;{})</code>.</p>
<p>The second argument is a function for your test logic. It gets invoked once you run your test<strong>.</strong></p>
<p>To effectively write your tests, you should apply the AAA (Arrange-Act-Assert) Pattern.</p>
<ol>
<li><p><strong>Arrange</strong>: Setup the data or configure any dependencies you will use in this test.</p>
</li>
<li><p><strong>Act:</strong> Call the function you are testing.</p>
</li>
<li><p><strong>Assert:</strong> Write your expectations—how you are expecting the function you are testing to behave. For assertion, you will always use the <code>expect</code> Jest method.</p>
</li>
</ol>
<p>Think of every <code>it("",()=&gt;{})</code> statement as a different scenario of your function.</p>
<p>Here’s an example:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">import</span> multiply <span class="token keyword">from</span> <span class="token string">'./../multiply.js'</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should return the multiplication of inputs of type number"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Arrange</span>
  <span class="token keyword">const</span> testArg1 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> testArg2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token comment">// Act</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">multiply</span><span class="token punctuation">(</span>testArg1<span class="token punctuation">,</span> testArg2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Assert</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should returns NaN if no arguments are passed"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Arrange</span>
  <span class="token comment">// Act</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Assert</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeNaN</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should returns NaN if only one argument is passed"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Arrange</span>
  <span class="token keyword">const</span> arg <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token comment">// Act</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">multiply</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Assert</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeNaN</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should returns Zero if one of the arguments is empty string"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Arrange</span>
  <span class="token keyword">const</span> testArg1 <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> testArg2 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token comment">// Act</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">multiply</span><span class="token punctuation">(</span>testArg1<span class="token punctuation">,</span> testArg2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Assert</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>These tests are some of the tests you can add to your file. You can add more tests or eliminate some depending on the different scenarios of the function you are testing.</p>
<h2 id="heading-what-are-external-dependencies">What are External Dependencies?</h2>
<p>External dependencies are modules or functions that your code relies on, which originates outside your own codebase. These can include libraries, APIs, databases, functions or any service that your application interacts with.  </p>
<p>Testing with external dependencies can be challenging because:</p>
<ul>
<li><p>They can slow down tests due to network or processing delays.</p>
</li>
<li><p>They might not be available during the testing, which in turn causes failures.</p>
</li>
</ul>
<p>As shown in the following function, what if your function calls another function? Most of the functions you write daily actually call other functions.</p>
<p>That is:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">processNumbers</span><span class="token punctuation">(</span><span class="token parameter">numbers<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// numbers: array</span>
    <span class="token comment">// callback: function</span>
  <span class="token keyword">return</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> processNumbers<span class="token punctuation">;</span>
</code></pre>
<p>When applying unit testing, units should be tested in isolation. <code>processNumbers</code> function depends on another function <code>callback</code>.</p>
<p>So what should you do in this case? Mocking is the solution and we’ll talk about it later in a different section.</p>
<h2 id="heading-what-are-side-effects"><strong>What are Side Effects?</strong></h2>
<p>Side effects occur when a function modifies some state outside its own scope or has observable interactions with the outside world apart from returning a value.</p>
<p>Examples include modifying a global variable, changing a file system, or sending an HTTP request.</p>
<p>Side effects can make tests unpredictable and difficult to manage because they:</p>
<ul>
<li><p>Might interact with other systems, causing alteration of external states.</p>
</li>
<li><p>Can lead to flaky tests if not isolated properly.</p>
</li>
</ul>
<p>Here’s an example that returns a user from a database using their <code>id</code>:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getUserFromDatabase</span><span class="token punctuation">(</span><span class="token parameter">userId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Simulates fetching from a database</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> userId<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>getUserFromDatabase<span class="token punctuation">}</span>
</code></pre>
<p>Here’s another function that makes use of <code>getUserFromDatabase</code> in the code above:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getProfile</span><span class="token punctuation">(</span><span class="token parameter">userId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">getUserFromDatabase</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> getProfile
</code></pre>
<p>While testing this function, you should not actually send a real request, all you need is to test the behavior of the <code>getProfile</code> function without hitting any external system.</p>
<p>You can also use mocking to solve this situation.</p>
<h2 id="heading-what-is-mocking"><strong>What is Mocking?</strong></h2>
<p>Mocking is about simulation—you need to isolate a function that you are testing. If the function relies on any external dependency or may cause any side effect, you should simulate the behavior of those aspects.</p>
<p>Mocking involves creating a fake version of a function, object, or module to control its behavior during testing. This allows you to simulate different scenarios and verify interactions without relying on actual implementations.</p>
<p>We will focus on two approaches to mocking:</p>
<ol>
<li><p><strong>Function Mocks (also called Spies):</strong><br> You can use <code>jest.fn()</code> to create a mock function that can be used to track a function or replace real implementations. Or use <code>jest.spyOn(object, methodName)</code> to track the calls of <code>object[methodName]</code>.</p>
</li>
<li><p><strong>Module Mocks</strong>: You can use <code>jest.mock(“path-of-your-module”)</code> to mock entire modules or specific imports. By using it, all functions inside this module become mock functions. In addition, during testing, modules you are testing will receive a fake mocked version of this module.</p>
</li>
</ol>
<p>Any mock function has methods that you can use to simulate the behavior of the function. Some of the most used methods are:</p>
<ul>
<li><p><code>mockFn.mockImplementation(fn)</code> : Used to replace the actual implementation of a function. <code>fn</code> is the replacement implementation.</p>
</li>
<li><p><code>mockFn.mockReturnValue(value)</code> : You can use this if all you care about is the return value of a function.</p>
</li>
<li><p><code>mockFn.mockResolvedValue(value)</code>: You can use this if the mock function returns a promise.</p>
</li>
</ul>
<h3 id="heading-example-usage-1"><strong>Example Usage 1</strong></h3>
<p>Let’s test <code>processNumbers</code> by using function mocks. The challenge here is that <code>processNumbers</code> takes a callback function as an argument. What if you need to test if this callback function get invoked inside <code>processNumbers</code>?</p>
<p>Here’s the code:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">import</span> processNumbers <span class="token keyword">from</span> <span class="token string">'file-path'</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'processNumbers applies callback and return the right result'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Arrange</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> mockedCallback <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mockImplementation</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Act</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">processNumbers</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> mockedCallback<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Assert</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>mockedCallback<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledTimes</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>We started by arranging the arguments:</p>
<ul>
<li><p><code>arr</code> variable is an array of numbers. We assigned it an array with random numbers in the test.</p>
</li>
<li><p>The <code>callback</code> variable is a callback function. This function should be mocked in the test.</p>
</li>
</ul>
<p>You may ask yourself why you should mock <code>callback</code>, why not assign it as a normal function?</p>
<p>The answer is that, without mocking the <code>callback</code> argument, you will not be able to track it inside <code>processNumbers</code> while you are testing it. Because mocking creates a fake version of the function, it creates a spy that has a tracker through which you can assert any action taken in this mocked function, whether it gets called or any arguments are passed to it.</p>
<p>The <code>jest.fn()</code> creates a mock function. You can pass a function to <code>fn</code> in place of the real function.</p>
<p>Next, we “act” by calling the function we are testing: <code>processNumbers</code>.</p>
<p>Finally, we wrote the assertions, which are expectations about how <code>processNumbers</code> should behave and if <code>processNumbers</code> applied <code>callback</code> and returned the result.</p>
<h3 id="heading-example-usage-2"><strong>Example Usage 2</strong></h3>
<p>Side effects are another aspect you need to handle in testing. In the <code>getProfile</code> function, an external system is called, which calls a database to retrieve data, and this is a side effect.</p>
<p>In another scenario, a function may connect a database to create a user, and through testing you will not need to add or change actual data in the database.</p>
<p>To simulate the behavior of <code>getUserFromDatabase</code> without actually hitting the database, you should mock its module, and by default, <code>getUserFromDatabase</code> will be an empty mock function that can be tracked during your test.</p>
<p>Here’s the code:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">import</span> getProfile <span class="token keyword">from</span> <span class="token string">'file-path'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUserFromDatabase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'file-path'</span><span class="token punctuation">;</span>

<span class="token comment">// Mock the module of getUserFromDatabase method</span>
jest<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">'./../DB/databaseMethods.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'getProfile'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'should call getUserFromDatabase with the correct userId and return the result'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Arrange    </span>
    <span class="token keyword">const</span> userId <span class="token operator">=</span> <span class="token string">'123'</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dummyUser <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> userId<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    getUserFromDatabase<span class="token punctuation">.</span><span class="token function">mockResolvedValue</span><span class="token punctuation">(</span>dummyUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Act</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getProfile</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Assert</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span>dummyUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>getUserFromDatabase<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>getUserFromDatabase<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledTimes</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>We started by arranging the arguments:</p>
<ul>
<li><p><code>userId</code> is just a number.</p>
</li>
<li><p><code>dummyUser</code> is an object that simulates a fake user data.</p>
</li>
<li><p>We returned <code>dummyUser</code> from <code>getUserFromDatabas</code> by using <code>mockResolvedValue</code>.</p>
</li>
</ul>
<p>Similar to the last example, we “act” by calling the function being tested: <code>getProfile</code>.</p>
<p>Finally, we wrote the assertions, you expectations about how <code>getProfile</code> should behave and if the <code>getUserFromDatabase</code> got called correctly and the result returned as expected.</p>
<h2 id="heading-use-case-login-express-controller">Use Case: Login Express Controller</h2>
<p>Here is a login controller that receives the email and password of a user through the <code>req</code> object, and then searches for the user in the database. It does some checks, then returns a <code>res</code> if everything is ok, or call <code>next</code> with an error object.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">"file-path"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>

  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> email <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Invalid Email!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> checkPassword <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">checkPassword</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>checkPassword<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Invalid Password!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> token <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">generateToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">results</span><span class="token operator">:</span> <span class="token punctuation">{</span> token <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Think about the steps you can use to test the login function. You can ask some questions that’ll help you come up with ideas:</p>
<p>What are the scenarios of <code>login</code> function workflow?</p>
<ol>
<li><p>The user is not found.</p>
</li>
<li><p>Password is incorrect.</p>
</li>
<li><p>Everything is ok, and a response is returned with a token.</p>
</li>
</ol>
<p>So you may assert <code>login</code> to do the following:</p>
<ul>
<li><p><code>login</code> should call <code>next</code> if user not found.</p>
</li>
<li><p><code>login</code> should call <code>next</code> if password doesn't match.</p>
</li>
<li><p><code>login</code> should call <strong>res.json</strong> with the token and call <strong>res.status</strong> with 200 if everything is ok.</p>
</li>
</ul>
<p>What are the arguments that <code>login</code> method should receive?</p>
<ol>
<li><p><code>req</code> object with <code>body</code> property.</p>
</li>
<li><p><code>res</code> object with <code>status</code> and <code>json</code> property.</p>
</li>
<li><p><code>next</code> function.</p>
</li>
</ol>
<p><code>res.json()</code> or <code>res.status()</code> or <code>next()</code> all are functions that <code>login</code> needs to do its work. During testing, you have no access to these arguments so you should mock them.</p>
<ul>
<li><p><code>req</code> can be defined as <code>{body: { email: "</code><a target="_blank" href="mailto:test@foo.com"><code>test@foo.com</code></a><code>", password: "bar" }}</code></p>
</li>
<li><p><code>res</code> can be defined as <code>{json: jest.fn().mockReturnThis(), status: jest.fn().mockReturnThis()}</code></p>
</li>
<li><p><code>next</code> can be defined as <code>jest.fn()</code></p>
</li>
</ul>
<p>Are there any interactions with external systems or any dependencies?</p>
<ol>
<li><p><code>User.findOne()</code></p>
</li>
<li><p><code>user.checkPassword()</code></p>
</li>
<li><p><code>user.generateToken()</code></p>
</li>
</ol>
<p>Thus, mocking is the solution:</p>
<ul>
<li><p>For <code>User.findOne()</code>, you should mock the entire <code>User</code> module and set up the fake <code>findOne()</code> to return a fake <code>user</code>. The challenge here is that <code>findOne</code> is an object method. How can you track it? <code>jest.spyOn(object, methodName)</code> is the soultion.<br>  The <code>spyOn</code> method is used to track the calls of <code>object[methodName]</code>, which, in our case, is <code>User.findOne</code></p>
</li>
<li><p><code>user.checkPassword()</code> and <code>user.generateToken()</code> should be mock functions.</p>
</li>
</ul>
<p>To apply all of these concepts and put blocks with each other, the final test should be:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">"file-path"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> login <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"file-path"</span><span class="token punctuation">;</span>

jest<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">"../DB/models/user.model.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> mockReq<span class="token punctuation">,</span> mockRes<span class="token punctuation">,</span> mockNext<span class="token punctuation">,</span> dummyUser<span class="token punctuation">;</span>
<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"login controller"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    mockReq <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">"test@foo.com"</span><span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">"bar"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    mockRes <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">json</span><span class="token operator">:</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mockReturnThis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mockReturnThis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    mockNext <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    dummyUser <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">checkPassword</span><span class="token operator">:</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">generateToken</span><span class="token operator">:</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">"token"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should call next if user not found"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Arrange</span>
    jest<span class="token punctuation">.</span><span class="token function">spyOn</span><span class="token punctuation">(</span>User<span class="token punctuation">,</span> <span class="token string">"findOne"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mockResolvedValueOnce</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Act</span>
    <span class="token keyword">await</span> <span class="token function">login</span><span class="token punctuation">(</span>mockReq<span class="token punctuation">,</span> mockRes<span class="token punctuation">,</span> mockNext<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Assert</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>mockNext<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Invalid Email!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>mockRes<span class="token punctuation">.</span>json<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should call next if password doesn't match"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Arrange</span>
    dummyUser<span class="token punctuation">.</span>checkPassword<span class="token punctuation">.</span><span class="token function">mockReturnValueOnce</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    jest<span class="token punctuation">.</span><span class="token function">spyOn</span><span class="token punctuation">(</span>User<span class="token punctuation">,</span> <span class="token string">"findOne"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mockResolvedValue</span><span class="token punctuation">(</span>dummyUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Act</span>
    <span class="token keyword">await</span> <span class="token function">login</span><span class="token punctuation">(</span>mockReq<span class="token punctuation">,</span> mockRes<span class="token punctuation">,</span> mockNext<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Assert</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>mockNext<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Invalid Password!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>dummyUser<span class="token punctuation">.</span>generateToken<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>mockRes<span class="token punctuation">.</span>json<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should call res.json with the token and call res.status with 200 if everything is ok"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Arrange</span>
    jest<span class="token punctuation">.</span><span class="token function">spyOn</span><span class="token punctuation">(</span>User<span class="token punctuation">,</span> <span class="token string">"findOne"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mockResolvedValue</span><span class="token punctuation">(</span>dummyUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Act</span>
    <span class="token keyword">await</span> <span class="token function">login</span><span class="token punctuation">(</span>mockReq<span class="token punctuation">,</span> mockRes<span class="token punctuation">,</span> mockNext<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Assert</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>mockNext<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>findOne<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">email</span><span class="token operator">:</span> mockReq<span class="token punctuation">.</span>body<span class="token punctuation">.</span>email <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>dummyUser<span class="token punctuation">.</span>checkPassword<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span>mockReq<span class="token punctuation">.</span>body<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>dummyUser<span class="token punctuation">.</span>generateToken<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>mockRes<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>mockRes<span class="token punctuation">.</span>json<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">results</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">"token"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>Final note</strong>: <code>beforeEach</code> is a Jest hook, you can use it to implement some code before each test. Inside <code>beforeEach</code> function, you can write any common variables your tests may need instead of writing them independently for each test.</p>
<h2 id="heading-summary">Summary</h2>
<p>In this tutorial you learned the basics of unit testing with Jest, focusing on how to use mocks. Unit testing helps ensure that individual parts of your code work correctly by testing them in isolation.  </p>
<p>Handling external dependencies, managing side effects, and utilizing mocking are essential skills for robust testing. Jest provides powerful tools to address these challenges, making your tests more reliable, faster, and easier to maintain.</p>
<p>Understanding these concepts will help you write better tests and produce more resilient applications.</p>
<p>This tutorial explained how to use Jest’s mocking features to simulate external dependencies and manage side effects. It includes a practical example of testing an Express.js login controller, showing how to mock functions and control test scenarios.</p>
<p>This approach helps you create reliable tests and maintain code quality by isolating and managing dependencies effectively.</p>
-->

---

<TagLinks />