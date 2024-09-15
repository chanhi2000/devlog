---
lang: ko-KR
title: "How to run an external program using Process"
description: "Article(s) > How to run an external program using Process"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to run an external program using Process"
    - property: og:description
      content: "How to run an external program using Process"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-run-an-external-program-using-process.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to run an external program using Process | System - free Swift example code",
  "desc": "How to run an external program using Process",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-run-an-external-program-using-process",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>If you’re building an app for macOS or any other platform where you can run external programs, you can draw on Foundation’s <code>Process</code> class to do almost all the work for you.</p>
<p>First, create an instance of <code>Process</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> task <span class="token operator">=</span> <span class="token class-name">Process</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>Next, tell it which command to run. I’ll make it run the Swift compiler:</p>
<pre class=" language-swift"><code class=" language-swift">task<span class="token punctuation">.</span>executableURL <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>fileURLWithPath<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"/usr/bin/swift"</span></span><span class="token punctuation">)</span></code></pre>
<p>Finally, pass in an array of arguments you want to give to the program. For example, if you have some Swift code you wanted to run you could pass the filename to that code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> filename <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"input.swift"</span></span>
task<span class="token punctuation">.</span>arguments <span class="token operator">=</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span></code></pre>
<p>When you’re ready, use the <code>run()</code> method to run the full command, being prepared to catch any errors that are thrown:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">try</span> task<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>If you want to read the output or error from your program, you need to create an instance of <code>Pipe</code> and attach it either to <code>standardOutput</code> or <code>standardError</code> depending on your needs:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> outputPipe <span class="token operator">=</span> <span class="token class-name">Pipe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> errorPipe <span class="token operator">=</span> <span class="token class-name">Pipe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

task<span class="token punctuation">.</span>standardOutput <span class="token operator">=</span> outputPipe
task<span class="token punctuation">.</span>standardError <span class="token operator">=</span> errorPipe</code></pre>
<p>Make sure you do that <em>before</em> you call <code>run()</code>. </p>
<p>To read the output or error data once your program completes, you need to get a file handle from the pipe then read it out as an instance of <code>Data</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> outputData <span class="token operator">=</span> outputPipe<span class="token punctuation">.</span>fileHandleForReading<span class="token punctuation">.</span><span class="token function">readDataToEndOfFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> errorData <span class="token operator">=</span> errorPipe<span class="token punctuation">.</span>fileHandleForReading<span class="token punctuation">.</span><span class="token function">readDataToEndOfFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>Finally, convert that data into strings if you need to, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> output <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">(</span>decoding<span class="token punctuation">:</span> outputData<span class="token punctuation">,</span> <span class="token keyword">as</span><span class="token punctuation">:</span> UTF8<span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span>        
<span class="token keyword">let</span> error <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">(</span>decoding<span class="token punctuation">:</span> errorData<span class="token punctuation">,</span> <span class="token keyword">as</span><span class="token punctuation">:</span> UTF8<span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span></code></pre>
<p>And that’s it – you’ve run a program with custom arguments, and read its output back.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-use-observedobject-to-manage-state-from-external-objects">How to use @ObservedObject to manage state from external objects</a></li><li><a href="/quick-start/swiftui/how-to-use-stateobject-to-create-and-monitor-external-objects">How to use @StateObject to create and monitor external objects</a></li><li><a href="/example-code/language/how-to-force-your-program-to-crash-with-assert">How to force your program to crash with assert()</a></li><li><a href="/example-code/language/how-to-check-your-program-state-using-precondition">How to check your program state using precondition()</a></li><li><a href="/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a></li></ul>
-->

:::

---

<TagLinks />