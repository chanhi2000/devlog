---
lang: ko-KR
title: "How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”"
description: "Article(s) > How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”"
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
      content: "Article(s) > How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”"
    - property: og:description
      content: "How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to fix “argument of #selector refers to instance method that is not exposed to Objective-C” | Language - free Swift example code",
  "desc": "How to fix “argument of #selector refers to instance method that is not exposed to Objective-C”",
  "link": "https://hackingwithswift.com/example-code/language/how-to-fix-argument-of-selector-refers-to-instance-method-that-is-not-exposed-to-objective-c",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift 4 changed the way Swift interacts with Objective-C in a way that will impact the code of most developers. Fortunately, there are a couple of fixes available, neither of which take too long to implement.</p>
<p>First, let’s take a look at what’s changed and why. In Swift 3 all methods from a class were automatically compiled so that they were available both to Swift code and to Objective-C code, which maximized compatibility.</p>
<p>However, that had a cost. Here’s what Doug Gregor wrote when proposing the change for Swift 4:</p>
<blockquote>
<p>There is a cost for each Objective-C entry point, because the Swift compiler must create a "thunk" method that maps from the Objective-C calling convention to the Swift calling convention and is recorded within Objective-C metadata. This increases the size of the binary (preliminary tests on some Cocoa[Touch] apps found that 6-8% of binary size was in these thunks alone, some of which are undoubtedly unused), and can have some impact on load time (the dynamic linker has to sort through the Objective-C metadata for these thunks).</p>
</blockquote>
<p>So, all these thunk methods had to be generated whether or not they were used, which wasn’t ideal. As of Swift 4, this has been dramatically scaled down so that these thunks are generated only when absolutely required, which means any time you write Swift code that needs to be called from Objective-C you will need to tell Swift what to do.</p>
<p>If you don’t think this happens often, here are some examples:</p>
<pre class=" language-swift"><code class=" language-swift">navigationItem<span class="token punctuation">.</span>leftBarButtonItem <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>barButtonSystemItem<span class="token punctuation">:</span> <span class="token punctuation">.</span>add<span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>addSong<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> tap <span class="token operator">=</span> <span class="token class-name">UITapGestureRecognizer</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>userDoubleTapped<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token class-name">Timer</span><span class="token punctuation">.</span><span class="token function">scheduledTimer</span><span class="token punctuation">(</span>timeInterval<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>chooseNewSong<span class="token punctuation">)</span><span class="token punctuation">,</span> userInfo<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> repeats<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

<span class="token function">performSelector</span><span class="token punctuation">(</span>inBackground<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>checkWikipedia<span class="token punctuation">)</span><span class="token punctuation">,</span> with<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>

<span class="token class-name">NotificationCenter</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>userLeavingApp<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token class-name">UIApplication</span><span class="token punctuation">.</span>willResignActiveNotification<span class="token punctuation">,</span> object<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> lookup <span class="token operator">=</span> <span class="token class-name">UIMenuItem</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Applause"</span></span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>applaudGreatMusic<span class="token punctuation">)</span><span class="token punctuation">)</span>

undoManager<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">registerUndo</span><span class="token punctuation">(</span>withTarget<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>undoPlaying<span class="token punctuation">)</span><span class="token punctuation">,</span> object<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
<p>All seven of those examples ask some Objective-C code (e.g. <code>NotificationCenter</code> or <code>Timer</code>) to call our Swift code, which means all seven of those will stop working in Swift 4 unless you take action.</p>
<p>The error you’ll see looks like this: “Argument of '#selector' refers to instance method 'addSong()' that is not exposed to Objective-C,” and your code will refuse to build until you choose a solution. The key there is the <code>#selector</code> part: that’s the giveaway that you’ll need to use <code>@objc</code> with whatever method is being called.</p>
<p>So, that’s the problem and why it even exists. Let’s turn to the solutions, and there are two to choose from.</p>
<p>First, you can mark individual methods using the <code>@objc</code> attribute, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">Printer</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// code</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That instructs the Swift compiler to make an Objective-C thunk for that one method. This means you retain nearly all the performance benefits of the new Swift 4 approach – the thunk is generated only when needed.</p>
<p>The second option is to use the <code>@objcMembers</code> attribute on your whole class or struct, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@objcMembers</span> <span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
    <span class="token comment">// code</span>
<span class="token punctuation">}</span></code></pre>
<p>That tells Swift to automatically generate Objective-C thunks for all methods in the class, so you don’t need to mark them individually using <code>@objc</code>.</p>
<p>Now, there are two important times when <code>@objc</code> isn’t needed:</p>
<ol>
<li>When you’re using <code>@IBAction</code> to connect an event from a storyboard. The <code>@IBAction</code> attribute automatically implies <code>@objc</code>, so you don’t need both.</li>
<li>When you’re implementing a method from an Objective-C protocol, that automatically implies <code>@objc</code> because it doesn’t make sense otherwise.</li>
</ol>
<p>Remember, if <code>@objc</code> is required but not present, Xcode will refuse to build your code –&nbsp;it’s not the kind of thing you can just forget.</p>
<p>Honestly, I think it’s sad that one of the world’s most progressive languages is having to look backwards like this, but it looks like we’re stuck with this change.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-is-a-selector">What is a selector?</a></li><li><a href="/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-binding-string">How to fix “Cannot convert value of type 'String' to expected argument type 'Binding<string>’”</string></a></li><li><a href="/quick-start/swiftui/how-to-fix-missing-argument-for-parameter-content-in-call">How to fix “Missing argument for parameter 'content' in call”</a></li><li><a href="/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-to-expected-argument-type">How to fix “Cannot convert value of type '() -&gt; ()' to expected argument type '() -&gt; _’”</a></li><li><a href="/quick-start/swiftui/how-to-fix-cannot-convert-value-of-type-string-to-expected-argument-type-text">How to fix “Cannot convert value of type 'String' to expected argument type 'Text'"</a></li></ul>
-->

:::

---

<TagLinks />