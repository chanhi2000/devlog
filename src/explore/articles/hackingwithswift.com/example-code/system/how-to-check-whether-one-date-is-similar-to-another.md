---
lang: ko-KR
title: "How to check whether one date is similar to another"
description: "Article(s) > How to check whether one date is similar to another"
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
      content: "Article(s) > How to check whether one date is similar to another"
    - property: og:description
      content: "How to check whether one date is similar to another"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/system/how-to-check-whether-one-date-is-similar-to-another.html
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
  "title": "How to check whether one date is similar to another | System - free Swift example code",
  "desc": "How to check whether one date is similar to another",
  "link": "https://hackingwithswift.com/example-code/system/how-to-check-whether-one-date-is-similar-to-another",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Apple’s <code>Calendar</code> object gives us lots of useful methods for evaluating dates in various ways. One of the most useful is the method <code>isDate(_:equalTo:toGranularity:)</code>, which lets us compare two dates at a specific level of granularity: do these two dates occur in the same minute? The same hour? Or day, week, year? </p>
<p>As an example, here are two dates for us to work with:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span>now
<span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span>now<span class="token punctuation">.</span><span class="token function">addingTimeInterval</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span></code></pre>
<p>We can now check whether those two occur within the same day, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> sameDay <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">isDate</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> equalTo<span class="token punctuation">:</span> second<span class="token punctuation">,</span> toGranularity<span class="token punctuation">:</span> <span class="token punctuation">.</span>day<span class="token punctuation">)</span></code></pre>
<p>If all you want to do is check whether a date points to some time during today, you should use <code>isDateInToday()</code> instead:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> isToday <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">isDateInToday</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-check-whether-a-date-is-inside-a-date-range">How to check whether a date is inside a date range</a></li><li><a href="/example-code/naturallanguage/how-to-find-similar-words-for-a-search-term">How to find similar words for a search term</a></li><li><a href="/example-code/language/how-to-check-whether-a-module-is-available-using-canimport">How to check whether a module is available using canImport()</a></li><li><a href="/example-code/system/how-to-show-a-relative-date-and-time-using-relativedatetimeformatter">How to show a relative date and time using RelativeDateTimeFormatter</a></li><li><a href="/quick-start/swiftui/how-to-create-a-date-picker-and-read-values-from-it">How to create a date picker and read values from it</a></li></ul>
-->

:::

---

<TagLinks />