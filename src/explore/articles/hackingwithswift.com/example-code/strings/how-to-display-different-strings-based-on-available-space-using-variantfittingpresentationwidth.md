---
lang: ko-KR
title: "How to display different strings based on available space using variantFittingPresentationWidth()"
description: "Article(s) > How to display different strings based on available space using variantFittingPresentationWidth()"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to display different strings based on available space using variantFittingPresentationWidth()"
    - property: og:description
      content: "How to display different strings based on available space using variantFittingPresentationWidth()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-to-display-different-strings-based-on-available-space-using-variantfittingpresentationwidth.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Strings - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/strings/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to display different strings based on available space using variantFittingPresentationWidth() | Strings - free Swift example code",
  "desc": "How to display different strings based on available space using variantFittingPresentationWidth()",
  "link": "https://hackingwithswift.com/example-code/strings/how-to-display-different-strings-based-on-available-space-using-variantfittingpresentationwidth",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
<p>It’s surprisingly easy to configure your project with multiple strings then have it choose one at runtime based on available space.</p>
<p>First, press Cmd+N in Xcode to make a new file, then choose “Stringsdict file” – this is a property list XML file containing string settings. Name it “Localizable.stringsdict”, so that iOS picks it up automatically.</p>
<p>Right-click on the new Localizable.stringsdict file in your Xcode project, then choose Open As &gt; Source Code so you can see the XML inside. You should see that it ends like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span>
<span class="token operator">&lt;/</span>plist<span class="token operator">&gt;</span></code></pre>
<p>Add this new XML directly before those two lines:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">Login</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>dict<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">NSStringVariableWidthRuleType</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>dict<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token number">100</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token class-name">Login</span><span class="token operator">.&lt;/</span>string<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token number">200</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token class-name">You</span> must login before continuing<span class="token operator">.&lt;/</span>string<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token number">300</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token class-name">Please</span> enter your username and password to <span class="token keyword">continue</span><span class="token operator">.&lt;/</span>string<span class="token operator">&gt;</span>
    <span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span>
<span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span></code></pre>
<p>That defines a single string key, “Login”, but provides three size variations: one for very little space (size 100), one for a medium amount of space (size 200), and one for lots of space (size 300). These size integers mean nothing to iOS – you can use any numbers that make sense to you, but increments of 100 leave you lots of space to insert new values in between later on.</p>
<p>Now that you have a width-varying string to work with, you can pass that to <code>NSLocalizedString()</code>. Note that you must cast the result to an <code>NSString</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> localized <span class="token operator">=</span> <span class="token class-name">NSLocalizedString</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Login"</span></span><span class="token punctuation">,</span> comment<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Prompt for user to log in."</span></span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">NSString</span></code></pre>
<p>Finally, call <code>variantFittingPresentationWidth()</code> with a size integer of your choosing:</p>
<pre class=" language-swift"><code class=" language-swift">label<span class="token punctuation">.</span>text <span class="token operator">=</span> localized<span class="token punctuation">.</span><span class="token function">variantFittingPresentationWidth</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span></code></pre>
<p>That method only exists on <code>NSString</code>, hence the earlier typecast.</p>
<p>You can pass any integer you want into <code>variantFittingPresentationWidth()</code> – iOS will automatically resolve it to find the best match in your strings dictionary, counting downwards where necessary. For example, if you tried loading a string with width 500, the 300 string would be returned, but if you tried 299 then the 200 string would be returned.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup">How to create a document-based app using FileDocument and DocumentGroup</a></li><li><a href="/quick-start/swiftui/how-to-dynamically-adjust-the-appearance-of-a-view-based-on-its-size-and-location">How to dynamically adjust the appearance of a view based on its size and location</a></li><li><a href="/quick-start/swiftui/how-to-customize-the-display-mode-of-navigationsplitview">How to customize the display mode of NavigationSplitView</a></li><li><a href="/example-code/libraries/how-to-display-pdfs-using-pdfview">How to display PDFs using PDFView</a></li><li><a href="/quick-start/swiftui/how-to-automatically-switch-between-hstack-and-vstack-based-on-size-class">How to automatically switch between HStack and VStack based on size class</a></li></ul>
-->

:::

---

<TagLinks />