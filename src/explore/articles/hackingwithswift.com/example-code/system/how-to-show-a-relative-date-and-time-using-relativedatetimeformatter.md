---
lang: ko-KR
title: "How to show a relative date and time using RelativeDateTimeFormatter"
description: "Article(s) > How to show a relative date and time using RelativeDateTimeFormatter"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to show a relative date and time using RelativeDateTimeFormatter"
    - property: og:description
      content: "How to show a relative date and time using RelativeDateTimeFormatter"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-show-a-relative-date-and-time-using-relativedatetimeformatter.html
date: 2022-03-23
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
  "title": "How to show a relative date and time using RelativeDateTimeFormatter | System - free Swift example code",
  "desc": "How to show a relative date and time using RelativeDateTimeFormatter",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-show-a-relative-date-and-time-using-relativedatetimeformatter",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!-- 
<p>If you want to format dates and times in the form “5 hours ago” or “3 months ago”, Apple gives us a dedicated formatter called <code>RelativeDateTimeFormatter</code>. This is localized for many languages, so you’ll automatically get back strings that work in French, German, Chinese, and more, all depending on the user’s locale.</p>
<p>Here’s an example to get you started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// the date you want to format</span>
<span class="token keyword">let</span> exampleDate <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span>now<span class="token punctuation">.</span><span class="token function">addingTimeInterval</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">15000</span><span class="token punctuation">)</span>

<span class="token comment">// ask for the full relative date</span>
<span class="token keyword">let</span> formatter <span class="token operator">=</span> <span class="token class-name">RelativeDateTimeFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
formatter<span class="token punctuation">.</span>unitsStyle <span class="token operator">=</span> <span class="token punctuation">.</span>full

<span class="token comment">// get exampleDate relative to the current date</span>
<span class="token keyword">let</span> relativeDate <span class="token operator">=</span> formatter<span class="token punctuation">.</span><span class="token function">localizedString</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> exampleDate<span class="token punctuation">,</span> relativeTo<span class="token punctuation">:</span> <span class="token class-name">Date</span><span class="token punctuation">.</span>now<span class="token punctuation">)</span>

<span class="token comment">// print it out</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Relative date is: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">relativeDate</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span></code></pre>
<p>That will print “Relative date is: 4 hours ago”.</p>
<p>“Full” has a precise meaning here: we’ll get back things like “2 months ago”, and if you prefer you can try spell out mode to get “two months ago” or even short mode to get “2 mo. ago”.</p>
<p>Having that second <code>relativeTo</code> parameter available allows us to calculate relative values between two arbitrary dates, rather than one date and the current date:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> relativeDate2 <span class="token operator">=</span> formatter<span class="token punctuation">.</span><span class="token function">localizedString</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> someDate<span class="token punctuation">,</span> relativeTo<span class="token punctuation">:</span> someOtherDate<span class="token punctuation">)</span></code></pre>
<p><strong>Tip:</strong> Although relative time formatters are great for things in recent history –&nbsp;the last few months, perhaps – they are less useful for larger time gaps. So, you might want to try checking whether your date is over six months ago, and if so use a custom formatter instead to give the specific date.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/language/how-to-check-whether-a-date-is-inside-a-date-range">How to check whether a date is inside a date range</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/quick-start/swiftui/how-to-provide-relative-sizes-using-geometryreader">How to provide relative sizes using GeometryReader</a></li></ul>
-->

:::

---

<TagLinks />