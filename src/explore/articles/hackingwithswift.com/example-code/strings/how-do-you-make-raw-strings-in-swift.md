---
lang: ko-KR
title: "How do you make raw strings in Swift?"
description: "Article(s) > How do you make raw strings in Swift?"
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
      content: "Article(s) > How do you make raw strings in Swift?"
    - property: og:description
      content: "How do you make raw strings in Swift?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/strings/how-do-you-make-raw-strings-in-swift.html
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
  "title": "How do you make raw strings in Swift? | Strings - free Swift example code",
  "desc": "How do you make raw strings in Swift?",
  "link": "https://hackingwithswift.com/example-code/strings/how-do-you-make-raw-strings-in-swift",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Raw strings place hash signs – <code>#</code> –&nbsp;before and after their quote mark, and modify the way Swift handles strings in two ways.</p>
<p>First, a string that starts with <code>#"</code> must <em>end</em> with a <code>"#</code>, which means any quote marks inside the string are ignored:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> string1 <span class="token operator">=</span> <span class="token string-literal"><span class="token string">#"The rain in "Spain" falls mainly on the Spaniards"#</span></span></code></pre>
<p>Second, any escape sequences –&nbsp;things that start with <code>\</code> –&nbsp;now have their regular meaning. So, this will print one line of text:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> string2 <span class="token operator">=</span> <span class="token string-literal"><span class="token string">#"The rain\nin Spain\nfalls mainly\non the Spaniards"#</span></span></code></pre>
<p>With a regular Swift string the instances of <code>\n</code> would have been interpreted as line breaks.</p>
<p>If you want to use escape characters, for example if you want to use string interpolation, you must use <code>\#(yourValue)</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Duane Dibbley"</span></span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">#"Hello! My name is </span><span class="token interpolation-punctuation punctuation">\#(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">."#</span></span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />