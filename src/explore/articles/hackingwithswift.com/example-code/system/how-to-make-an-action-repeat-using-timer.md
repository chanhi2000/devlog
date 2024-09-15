---
lang: ko-KR
title: "How to make an action repeat using Timer"
description: "Article(s) > How to make an action repeat using Timer"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to make an action repeat using Timer"
    - property: og:description
      content: "How to make an action repeat using Timer"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-make-an-action-repeat-using-timer.html
date: 2019-09-19
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
  "title": "How to make an action repeat using Timer | System - free Swift example code",
  "desc": "How to make an action repeat using Timer",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-make-an-action-repeat-using-timer",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<VidStack src="youtube/DehLJj0JmVY" />

<!-- TODO: 작성 -->

<!-- 
<p>Timers are a great way to run code on a repeating basis, and iOS has the <code>Timer</code> class to handle it for you. First, create a property of the type <code>Timer?</code>. For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> gameTimer<span class="token punctuation">:</span> <span class="token class-name">Timer</span><span class="token operator">?</span></code></pre>
<p>You can then create that timer in somewhere like <code>viewDidLoad()</code> and tell it to execute every five seconds, like this:</p>
<pre class=" language-swift"><code class=" language-swift">gameTimer <span class="token operator">=</span> <span class="token class-name">Timer</span><span class="token punctuation">.</span><span class="token function">scheduledTimer</span><span class="token punctuation">(</span>timeInterval<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>runTimedCode<span class="token punctuation">)</span><span class="token punctuation">,</span> userInfo<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> repeats<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></code></pre>
<p>The <code>runTimedCode</code> selector means that the timer will call a method named <code>runTimedCode()</code> every five seconds until the timer is terminated, so you'll need to replace that method name with whatever you want to call –&nbsp;and don’t forget to mark it using <code>@objc</code>.</p>
<p>Important note: because your object has a property to store the timer, and the timer calls a method on the object, you have a strong reference cycle that means neither object can be freed. To fix this, make sure you invalidate the timer when you're done with it, such as when your view is about to disappear:</p>
<pre class=" language-swift"><code class=" language-swift">gameTimer<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">invalidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>Alternatively, you can create timers that execute a closure rather than calling a method. For example, this creates a timer that executes a closure every second, and inside the closure a random number between 1 and 20 is selected:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">Timer</span><span class="token punctuation">.</span><span class="token function">scheduledTimer</span><span class="token punctuation">(</span>withTimeInterval<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> repeats<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> timer <span class="token keyword">in</span>
    <span class="token keyword">let</span> randomNumber <span class="token operator">=</span> <span class="token class-name">Int</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token operator">...</span><span class="token number">20</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Number: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">randomNumber</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> randomNumber <span class="token operator">==</span> <span class="token number">10</span> <span class="token punctuation">{</span>
        timer<span class="token punctuation">.</span><span class="token function">invalidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>As you can see, the closure is given a reference to the active timer, and can invalidate it at will –&nbsp;in our case, that’s when the random number is 10.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-make-buttons-that-repeat-their-action-when-pressed">How to make buttons that repeat their action when pressed</a></li><li><a href="/quick-start/swiftui/how-to-use-a-timer-with-swiftui">How to use a timer with SwiftUI</a></li><li><a href="/example-code/xcode/how-to-repeat-code-when-debugging-using-the-instruction-pointer">How to repeat code when debugging using the instruction pointer</a></li><li><a href="/example-code/strings/how-to-repeat-a-string">How to repeat a string</a></li><li><a href="/quick-start/swiftui/how-to-show-an-action-sheet">How to show an action sheet</a></li></ul>
-->

:::

---

<TagLinks />