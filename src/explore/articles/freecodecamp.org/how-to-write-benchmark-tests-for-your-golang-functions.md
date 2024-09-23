---
lang: ko-KR
title: "How to Write Benchmark Tests for Your Golang Functions"
description: "Article(s) > How to Write Benchmark Tests for Your Golang Functions"
icon: fa-brands fa-golang
category: 
  - Go
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - go
  - golang
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to Write Benchmark Tests for Your Golang Functions"
    - property: og:description
      content: "How to Write Benchmark Tests for Your Golang Functions"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-to-write-benchmark-tests-for-your-golang-functions.html
prev: /programming/go/articles/README.md
date: 2024-09-23
isOriginal: false
author: Pedro Bertao
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1726668982641/58540086-9f98-4ac9-8c8a-84ef45e27875.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Go > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/go/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to Write Benchmark Tests for Your Golang Functions"
  desc="Hello Gophers 👋 Let me start by asking you a question: How would you test the performance of a piece of code or a function in Go? Well, you could use benchmark tests. In this tutorial, I will show you how to use an awesome benchmarking tool that’s b..."
  url="https://freecodecamp.org/news/how-to-write-benchmark-tests-for-your-golang-functions/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1726668982641/58540086-9f98-4ac9-8c8a-84ef45e27875.png"/>

<!-- TODO: 작성 -->

<!-- 
<p>Hello Gophers 👋</p>
<p>Let me start by asking you a question: How would you test the performance of a piece of code or a function in Go? Well, you could use <strong>benchmark</strong> tests.</p>
<p>In this tutorial, I will show you how to use an awesome benchmarking tool that’s built into the Golang testing package.</p>
<p>Let’s go.</p>
<h2 id="heading-what-are-benchmark-tests">What Are Benchmark Tests?</h2>
<p>In Go, <a target="_blank" href="https://pkg.go.dev/testing#hdr-Benchmarks">benchmark tests</a> are used to measure the performance (speed and memory usage) of functions or blocks of code. These tests are part of the Go testing framework and are written in the same files as unit tests, but they are specifically for performance analysis.</p>
<h2 id="heading-example-use-case-fibonacci-sequence">Example Use Case: Fibonacci Sequence</h2>
<p>For this example, I'll be using the classic Fibonacci Sequence, which is determined by:</p>
<pre class="language-plaintext" tabindex="0"><code class="language-plaintext">if (x &lt; 2) 
   F(0) = 1
   F(2) = 2
else 
   F(x) = F(x-1) + F(x-2)

In practice, the sequence is:
1, 1, 2, 3, 5, 8, 13, etc.
</code></pre>
<p>This sequence is important because it appears in various parts of mathematics and nature as well, as shown below:</p>
<p><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v6fqdlmiqjob46joyfpz.png" alt="Fibonacci sequence in a spiral (like a snail shell)" width="1280" height="806" loading="lazy"></p>
<p>There are several ways to implement this code, and I'll be picking two of them for our benchmark testing: the recursive and iterative methods. The main objective of the functions is to provide a <em>position</em> and return the Fibonacci number at that position.</p>
<h3 id="heading-recursive-method">Recursive Method</h3>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token comment">// main.go</span>
<span class="token keyword">func</span> <span class="token function">fibRecursive</span><span class="token punctuation">(</span>n <span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token builtin">uint</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> n <span class="token operator">&lt;=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">fibRecursive</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibRecursive</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
<p>The function above is a recursive implementation of calculating the Fibonacci sequence. Now I’ll break it down step by step for you as a beginner in Go.</p>
<p>Here’s your function for calculating the Fibonacci numbers:</p>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">func</span> <span class="token function">fibRecursive</span><span class="token punctuation">(</span>n <span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token builtin">uint</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> n <span class="token operator">&lt;=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">fibRecursive</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibRecursive</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
<h4 id="heading-1-function">1. <strong>Function:</strong></h4>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">func</span> <span class="token function">fibRecursive</span><span class="token punctuation">(</span>n <span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token builtin">uint</span>
</code></pre>
<ul>
<li><p><code>func</code>: This keyword defines a function in Go.</p>
</li>
<li><p><code>fibRecursive</code>: This is the name of the function. It’s called <code>fibRecursive</code> because it calculates Fibonacci numbers using recursion.</p>
</li>
<li><p><code>n uint</code>: The function takes a single argument, <code>n</code>, which is of type <code>uint</code> (an unsigned integer). This represents the position of the Fibonacci sequence that we want to calculate.</p>
</li>
<li><p><code>uint</code>: The function returns a <code>uint</code> (unsigned integer) because Fibonacci numbers are non-negative integers.</p>
</li>
</ul>
<h4 id="heading-2-base-stage">2. <strong>Base Stage:</strong></h4>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">if</span> n <span class="token operator">&lt;=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre>
<ul>
<li><p>The <code>if</code> statement checks if <code>n</code> is less than or equal to 2.</p>
</li>
<li><p>In the Fibonacci sequence, the 1st and 2nd numbers are both 1. So, if <code>n</code> is 1 or 2, the function returns 1.</p>
</li>
<li><p>This is called the <strong>base stage,</strong> and it stops the recursion from going infinitely deep.</p>
</li>
</ul>
<h4 id="heading-3-recursive-stage">3. <strong>Recursive Stage:</strong></h4>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">return</span> <span class="token function">fibRecursive</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibRecursive</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre>
<ul>
<li><p>If <code>n</code> is greater than 2, the function calls itself twice:</p>
<ul>
<li><p><code>fibRecursive(n-1)</code>: This will calculate the Fibonacci number for the position just before <code>n</code>.</p>
</li>
<li><p><code>fibRecursive(n-2)</code>: This will calculate the Fibonacci number for two positions before <code>n</code>.</p>
</li>
</ul>
</li>
<li><p>The function then adds these two results together, because every Fibonacci number is the sum of the two preceding numbers.</p>
</li>
</ul>
<p>For more theory on recursion, check out these <a target="_blank" href="https://www.freecodecamp.org/news/tag/recursion/">articles</a>.</p>
<h3 id="heading-iterative-method">Iterative Method</h3>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token comment">// main.go</span>

<span class="token keyword">func</span> <span class="token function">fibIterative</span><span class="token punctuation">(</span>position <span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token builtin">uint</span> <span class="token punctuation">{</span>
    slc <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">uint</span><span class="token punctuation">,</span> position<span class="token punctuation">)</span>
    slc<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    slc<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">if</span> position <span class="token operator">&lt;=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> result<span class="token punctuation">,</span> i <span class="token builtin">uint</span>
    <span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> position<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> slc<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> slc<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
        slc<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> result
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre>
<p>This code implements an <strong>iterative</strong> approach to calculate the Fibonacci sequence in Go, which is different from the <strong>recursive</strong> approach. Here’s a breakdown of how it works:</p>
<h4 id="heading-1-function-1">1. <strong>Function:</strong></h4>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">func</span> <span class="token function">fibIterative</span><span class="token punctuation">(</span>position <span class="token builtin">uint</span><span class="token punctuation">)</span> <span class="token builtin">uint</span>
</code></pre>
<ul>
<li><p><code>func</code>: This keyword declares a function in Go.</p>
</li>
<li><p><code>fibIterative</code>: The name of the function suggests that it calculates Fibonacci numbers using iteration (a loop).</p>
</li>
<li><p><code>position uint</code>: The function takes one argument, <code>position</code>, which is an unsigned integer (<code>uint</code>). This represents the position of the Fibonacci sequence you want to calculate.</p>
</li>
<li><p><code>uint</code>: The function returns an unsigned integer (<code>uint</code>), which will be the Fibonacci number at the specified position.</p>
</li>
</ul>
<h4 id="heading-2-creating-a-slice-array-like-structure">2. <strong>Creating a Slice (Array-like structure):</strong></h4>
<pre class="language-go" tabindex="0"><code class="language-go">slc <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">uint</span><span class="token punctuation">,</span> position<span class="token punctuation">)</span>
</code></pre>
<ul>
<li><code>slc</code> is a slice (a dynamic array in Go) that is created with the length of <code>position</code>. This slice will store Fibonacci numbers at each index.</li>
</ul>
<h4 id="heading-3-initial-values-for-fibonacci-sequence">3. <strong>Initial Values for Fibonacci Sequence:</strong></h4>
<pre class="language-go" tabindex="0"><code class="language-go">slc<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
slc<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
</code></pre>
<ul>
<li>The first two Fibonacci numbers are both <code>1</code>, so the first two positions in the slice (<code>slc[0]</code> and <code>slc[1]</code>) are set to <code>1</code>.</li>
</ul>
<h4 id="heading-4-early-return-for-small-positions">4. <strong>Early Return for Small Positions:</strong></h4>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">if</span> position <span class="token operator">&lt;=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre>
<ul>
<li>If the input <code>position</code> is <code>1</code> or <code>2</code>, the function directly returns <code>1</code>, because the first two Fibonacci numbers are always <code>1</code>.</li>
</ul>
<h4 id="heading-5-iterative-loop">5. <strong>Iterative Loop:</strong></h4>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">var</span> result<span class="token punctuation">,</span> i <span class="token builtin">uint</span>
<span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> position<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> slc<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> slc<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
    slc<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> result
<span class="token punctuation">}</span>
</code></pre>
<ul>
<li><p>The loop starts from <code>i = 2</code> and runs until it reaches the <code>position</code>.</p>
</li>
<li><p>In each iteration, the Fibonacci number at index <code>i</code> is calculated as the sum of the two previous Fibonacci numbers (<code>slc[i-1]</code> and <code>slc[i-2]</code>).</p>
</li>
<li><p>The result is stored both in <code>result</code> and in the slice <code>slc[i]</code> for future calculations.</p>
</li>
</ul>
<h4 id="heading-6-returning-the-result">6. <strong>Returning the Result:</strong></h4>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">return</span> result
</code></pre>
<ul>
<li>Once the loop finishes, the variable <code>result</code> holds the Fibonacci number at the desired position, and the function returns it.</li>
</ul>
<p>This is a more <em>efficient</em> approach to calculating Fibonacci numbers compared to recursion, especially when <code>position</code> is large, because <strong>it doesn’t repeat unnecessary calculations</strong> and we are proving by using benchmark tests<strong><em>.</em></strong> Let’s prove it.</p>
<h2 id="heading-how-to-run-the-benchmark-tests">How to Run the Benchmark Tests</h2>
<p>Now, for the benchmark tests, let’s write some test. First, you will need to create a <strong>maintest.go</strong> file. In it, using Golang's <a target="_blank" href="https://pkg.go.dev/testing@go1.22.3#hdr-Benchmarks">documentation</a> on benchmark tests, you can create the functions to be tested as follows:</p>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token comment">// main_test.go</span>

<span class="token comment">// Benchmark for Iterative Function</span>
<span class="token keyword">func</span> <span class="token function">BenchmarkFibIterative</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span> 
        <span class="token function">fibIterative</span><span class="token punctuation">(</span><span class="token function">uint</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Benchmark for Recursive Function</span>
<span class="token keyword">func</span> <span class="token function">BenchmarkFibRecursive</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token function">fibRecursive</span><span class="token punctuation">(</span><span class="token function">uint</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Let's run the test for position 10 and then increase appropriately. To run the benchmark tests, you simply run the command <code>go test -bench=NameoftheFunction</code>.</p>
<p>If you want to know more about this command, check <a target="_blank" href="https://pkg.go.dev/testing@go1.22.3#Benchmark">here</a>. Let’s check the function for <strong>position 10</strong>:</p>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">func</span> <span class="token function">BenchmarkFibIterative</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span> 
        <span class="token function">fibIterative</span><span class="token punctuation">(</span><span class="token function">uint</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">go</span> test <span class="token operator">-</span>bench<span class="token operator">=</span>BenchmarkFibIterative
Results<span class="token punctuation">:</span>
cpu<span class="token punctuation">:</span> <span class="token function">Intel</span><span class="token punctuation">(</span>R<span class="token punctuation">)</span> <span class="token function">Core</span><span class="token punctuation">(</span>TM<span class="token punctuation">)</span> i7<span class="token operator">-</span>7700HQ CPU @ <span class="token number">2</span><span class="token punctuation">.</span>80GHz
BenchmarkFibIterative<span class="token operator">-</span><span class="token number">8</span>         <span class="token number">27715262</span>                <span class="token number">42.86</span> ns<span class="token operator">/</span>op
PASS
ok      playground      <span class="token number">2</span><span class="token punctuation">.</span>617s
</code></pre>
<p>Let’s analyze with the help of this image:</p>
<p><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/484ap11qw8d81b43gg0v.png" alt="visit https://www.practical-go-lessons.com/chap-34-benchmarks" width="967" height="277" loading="lazy"></p>
<p>According to the image, we have 8 cores for the tests, and no time limit (it will run until completion). It took <strong>27_715_262 iterations</strong> and <strong>1.651 seconds</strong> to complete the task.</p>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">func</span> <span class="token function">BenchmarkFibRecursive</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token function">fibRecursive</span><span class="token punctuation">(</span><span class="token function">uint</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token keyword">go</span> test <span class="token operator">-</span>bench<span class="token operator">=</span>BenchmarkFibRecursive
Results<span class="token punctuation">:</span>
cpu<span class="token punctuation">:</span> <span class="token function">Intel</span><span class="token punctuation">(</span>R<span class="token punctuation">)</span> <span class="token function">Core</span><span class="token punctuation">(</span>TM<span class="token punctuation">)</span> i7<span class="token operator">-</span>7700HQ CPU @ <span class="token number">2</span><span class="token punctuation">.</span>80GHz
BenchmarkFibRecursive<span class="token operator">-</span><span class="token number">8</span>          <span class="token number">6644950</span>               <span class="token number">174.3</span> ns<span class="token operator">/</span>op
PASS
ok      playground      <span class="token number">1</span><span class="token punctuation">.</span>819s
</code></pre>
<p>Using the same image to analyze the result, in this case it took <strong>6_644_950 iterations</strong> and <strong>1.819 seconds</strong> to complete the task we have:</p>
<div class="hn-table">
<table>
<thead>
<tr>
<td>Fibonacci’s Function</td><td>Position</td><td>Iterations</td><td>Time to run (s)</td></tr>
</thead>
<tbody>
<tr>
<td>Iterative</td><td>10</td><td>27_715_262</td><td>1.651</td></tr>
<tr>
<td>Recursive</td><td>1<strong>0</strong></td><td>6_644_950</td><td>1.819</td></tr>
</tbody>
</table>
</div><p>The <strong>benchmark results</strong> show that the iterative approach is significantly more efficient than the recursive approach for calculating the Fibonacci sequence.</p>
<p>For position 10, the iterative function ran approximately <strong>27.7 million iterations</strong> in <strong>1.651 seconds</strong>, while the recursive function managed only <strong>6.6 million iterations</strong> in <strong>1.819 seconds</strong>. The iterative method outperformed the recursive method both in terms of iterations and time, highlighting its efficiency.</p>
<p>To proven even further this, let’s try with the <strong>position 40</strong> (4 times the previous value):</p>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token comment">// Results for the Iterative Function</span>
cpu<span class="token punctuation">:</span> <span class="token function">Intel</span><span class="token punctuation">(</span>R<span class="token punctuation">)</span> <span class="token function">Core</span><span class="token punctuation">(</span>TM<span class="token punctuation">)</span> i7<span class="token operator">-</span>7700HQ CPU @ <span class="token number">2</span><span class="token punctuation">.</span>80GHz
BenchmarkFibIterative<span class="token operator">-</span><span class="token number">8</span>          <span class="token number">9904401</span>               <span class="token number">114.5</span> ns<span class="token operator">/</span>op
PASS
ok      playground      <span class="token number">1</span><span class="token punctuation">.</span>741s

<span class="token comment">// Results for the Recursive Function</span>
cpu<span class="token punctuation">:</span> <span class="token function">Intel</span><span class="token punctuation">(</span>R<span class="token punctuation">)</span> <span class="token function">Core</span><span class="token punctuation">(</span>TM<span class="token punctuation">)</span> i7<span class="token operator">-</span>7700HQ CPU @ <span class="token number">2</span><span class="token punctuation">.</span>80GHz
BenchmarkFibRecursive<span class="token operator">-</span><span class="token number">8</span>                <span class="token number">4</span>         <span class="token number">324133575</span> ns<span class="token operator">/</span>op
PASS
ok      playground      <span class="token number">3</span><span class="token punctuation">.</span>782s
</code></pre>
<div class="hn-table">
<table>
<thead>
<tr>
<td>Fibonacci’s Function</td><td>Position</td><td>Iterations</td><td>Time to run (s)</td></tr>
</thead>
<tbody>
<tr>
<td>Iterative</td><td>40</td><td>9_904_401</td><td>1.741</td></tr>
<tr>
<td>Recursive</td><td>40</td><td>4</td><td>3.782</td></tr>
</tbody>
</table>
</div><p>The benchmark results clearly highlight the efficiency difference between the iterative and recursive approaches for calculating Fibonacci again.</p>
<p>The <strong>iterative function</strong> completed approximately <strong>9.9 million iterations</strong> with an average execution time of <strong>114.5 nanoseconds per operation</strong>, finishing the benchmark in <strong>1.741 seconds</strong>. In stark contrast, the <strong>recursive function</strong> only completed <strong>4 iterations</strong> with an average execution time of <strong>324,133,575 nanoseconds per operation</strong> (over 324 milliseconds per call), taking <strong>3.782 seconds</strong> to finish.</p>
<p>These results demonstrate that the recursive approach is far less efficient due to repeated function calls and recalculations, making the iterative method vastly superior in both speed and resource usage, especially as input size increases.</p>
<p>Just out of curiosity, I tried <strong>position 60</strong> and it literally crashed the test:</p>
<pre class="language-go" tabindex="0"><code class="language-go"><span class="token comment">// Results for the Iterative Function</span>
cpu<span class="token punctuation">:</span> <span class="token function">Intel</span><span class="token punctuation">(</span>R<span class="token punctuation">)</span> <span class="token function">Core</span><span class="token punctuation">(</span>TM<span class="token punctuation">)</span> i7<span class="token operator">-</span>7700HQ CPU @ <span class="token number">2</span><span class="token punctuation">.</span>80GHz
BenchmarkFibIterative<span class="token operator">-</span><span class="token number">8</span>          <span class="token number">7100899</span>               <span class="token number">160.9</span> ns<span class="token operator">/</span>op

<span class="token comment">// Results for the Recursive Function</span>
SIGQUIT<span class="token punctuation">:</span> quit
PC<span class="token operator">=</span><span class="token number">0x7ff81935f08e</span> m<span class="token operator">=</span><span class="token number">0</span> sigcode<span class="token operator">=</span><span class="token number">0</span>

goroutine <span class="token number">0</span> gp<span class="token operator">=</span><span class="token number">0x3bf1800</span> m<span class="token operator">=</span><span class="token number">0</span> mp<span class="token operator">=</span><span class="token number">0x3bf26a0</span> <span class="token punctuation">[</span>idle<span class="token punctuation">]</span><span class="token punctuation">:</span>
runtime<span class="token punctuation">.</span><span class="token function">pthread_cond_wait</span><span class="token punctuation">(</span><span class="token number">0x3bf2be0</span><span class="token punctuation">,</span> <span class="token number">0x3bf2ba0</span><span class="token punctuation">)</span>
<span class="token operator">...</span>
</code></pre>
<h2 id="heading-conclusion">Conclusion</h2>
<p>If your production code is running slowly or is unpredictably slower, you can use this technique, combined with <a target="_blank" href="https://pkg.go.dev/runtime/pprof"><strong>pprof</strong></a> or other tools from the built-in testing package, to identify and test where your code is performing poorly and work on how to optimize it.</p>
<p>Remember: Code that is beautiful to the eyes is not necessarily more performant.</p>
<h3 id="heading-reference">Reference</h3>
<ul>
<li><p>Recursive &amp; Iterative functions to Fibonacci’s sequence <a target="_blank" href="https://gist.github.com/pedrobertao/a31466b3287f165f22d05f0fb2b066f2">here</a>.</p>
</li>
<li><p>Benchmark testing <a target="_blank" href="https://gist.github.com/pedrobertao/d435d9f1b0915cbc1cb54bc385f45104">here</a>.</p>
</li>
</ul>
<h3 id="heading-homework">Homework</h3>
<p>This <a target="_blank" href="https://www.meccanismocomplesso.org/en/the-fibonacci-series-three-different-algorithms-compared/">article</a> explains why for some small numbers, the recursive strategy is better. Can you find a better way to improve the recursive function? (Tip: use Dynamic Programming).</p>
-->

---

<TagLinks />