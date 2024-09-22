---
lang: ko-KR
title: "How to add warnings and errors to your code using #warning and #error"
description: "Article(s) > How to add warnings and errors to your code using #warning and #error"
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
      content: "Article(s) > How to add warnings and errors to your code using #warning and #error"
    - property: og:description
      content: "How to add warnings and errors to your code using #warning and #error"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-add-warnings-and-errors-to-your-code-using-warning-and-error.html
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
  "title": "How to add warnings and errors to your code using #warning and #error | Language - free Swift example code",
  "desc": "How to add warnings and errors to your code using #warning and #error",
  "link": "https://hackingwithswift.com/example-code/language/how-to-add-warnings-and-errors-to-your-code-using-warning-and-error",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Sometimes it’s important to add warnings and even errors to your code. For example, you might want to mark code as needing to be fixed, or mark placeholder values that must be filled in by whoever is using your code.</p>
<p>Swift has compiler directives that help us mark such issues in our code: <code>#warning</code> and <code>#error</code>. The former will force Xcode to issue a warning when building your code, and the latter will issue a compile error so your code won’t build at all. </p>
<p>Both of these work in the same way: <code>#warning("Some message")</code> and <code>#error("Some message")</code>. For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">encrypt</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> string<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> with password<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token other-directive property">#warning</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"This is bad method of encryption"</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> password <span class="token operator">+</span> <span class="token class-name">String</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">reversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> password
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">Configuration</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> apiKey<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token comment">// if you uncomment the below it will stop your code from building</span>
        <span class="token comment">// #error("Please add your API key below then delete this line.")</span>
        <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"Enter your API key here"</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>    </code></pre>
<p>Both <code>#warning</code> and <code>#error</code> work alongside the existing <code>#if</code> compiler directive, only being triggered if the condition being evaluated is true. For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token directive property"><span class="token directive-name">#if</span> os<span class="token punctuation">(</span>macOS<span class="token punctuation">)</span></span>
<span class="token other-directive property">#error</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"MyLibrary is not supported on macOS."</span></span><span class="token punctuation">)</span>
<span class="token directive property"><span class="token directive-name">#endif</span></span></code></pre>
<p>Both <code>#warning</code> and <code>#error</code> are useful for different reasons:</p>
<ul>
<li><code>#warning</code> is mainly useful as a reminder to yourself or others that some work is incomplete. Xcode templates often use <code>#warning</code> to mark method stubs that you should replace with your own code. Think of <code>#warning</code> as being like a <code>FIXME</code> comment that automatically shows up in your build output.</li>
<li><code>#error</code> is mainly useful if you ship a library that requires other developers to provide some data. For example, an authentication key for a web API –&nbsp;you want users to include their own key, so using <code>#error</code> will force them to change that code before continuing.</li>
</ul>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />