---
lang: ko-KR
title: "What is key-value observing?"
description: "Article(s) > What is key-value observing?"
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
      content: "Article(s) > What is key-value observing?"
    - property: og:description
      content: "What is key-value observing?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/what-is-key-value-observing.html
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
  "title": "What is key-value observing? | Language - free Swift example code",
  "desc": "What is key-value observing?",
  "link": "https://hackingwithswift.com/example-code/language/what-is-key-value-observing",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Key-value observing is the ability for Swift to attach code to variables, so that whenever the variable is changed the code runs. It’s similar to property observers (<code>willSet</code> and <code>didSet</code> ), except KVO is for adding observers <em>outside</em> of the type definition.</p>
<p>KVO isn’t terribly nice in pure Swift code, because it relies on the Objective-C runtime – you need to use <code>@objc</code> classes that inherit from <code>NSObject</code>, then mark each of your properties with <code>@objc dynamic</code>.</p>
<p>For example, we could create a <code>Person</code> class like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@objc</span> <span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span> <span class="token class-name">NSObject</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@objc</span> <span class="token keyword">dynamic</span> <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> taylor <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>You could then observe that user’s name changing like this:</p>
<pre class=" language-swift"><code class=" language-swift">taylor<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token punctuation">\</span><span class="token class-name">Person</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">.</span>new<span class="token punctuation">)</span> <span class="token punctuation">{</span> person<span class="token punctuation">,</span> change <span class="token keyword">in</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"I'm now called </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">person<span class="token punctuation">.</span>name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That asks Swift to watch for new values coming in, then prints the person’s name as soon as the new value is set.</p>
<p>To try it out, just change the person’s name to something else:</p>
<pre class=" language-swift"><code class=" language-swift">taylor<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Justin Bieber"</span></span></code></pre>
<p>That will print “I’m now called Justin Bieber.”</p>
<p>Although KVO is unpleasant in pure Swift code, it’s better when working with Apple’s own APIs – they are all automatically both <code>@objc</code> and <code>dynamic</code> because they are written in Objective-C. </p>
<p>However, one warning: even though large parts of UIKit might work with KVO, this is a coincidence rather than a promise – Apple make no guarantees about UIKit remaining KVO-compatible in the future.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-detect-and-respond-to-key-press-events">How to detect and respond to key press events</a></li><li><a href="/quick-start/swiftui/how-to-activate-different-button-behaviors-when-a-modifier-key-is-pressed">How to activate different button behaviors when a modifier key is pressed</a></li><li><a href="/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded()</a></li><li><a href="/example-code/strings/how-to-calculate-the-rot13-of-a-string">How to calculate the ROT13 of a string</a></li><li><a href="/example-code/uikit/how-to-use-uikeycommand-to-add-keyboard-shortcuts">How to use UIKeyCommand to add keyboard shortcuts</a></li></ul>
-->

:::

---

<TagLinks />