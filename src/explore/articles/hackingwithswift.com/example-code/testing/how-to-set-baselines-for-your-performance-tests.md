---
lang: ko-KR
title: "How to set baselines for your performance tests"
description: "Article(s) > How to set baselines for your performance tests"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to set baselines for your performance tests"
    - property: og:description
      content: "How to set baselines for your performance tests"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/testing/how-to-set-baselines-for-your-performance-tests.html
date: 2018-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Testing - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/testing/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to set baselines for your performance tests | Testing - free Swift example code",
  "desc": "How to set baselines for your performance tests",
  "link": "https://hackingwithswift.com/example-code/testing/how-to-set-baselines-for-your-performance-tests",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>All performance tests in Xcode can have baselines attached to them, which are stored results that you consider representative of your app’s performance as things stand. The baseline is useful because it gives Xcode a measuring point for all other changes you make: if you accidentally change your code so that it runs slower, Xcode will consider your performance test to be a failure.</p>
<p>To set a baseline for a performance test, first make sure it has been run at least once. You should see a gray bar next to the test saying “No baseline average for time”, but if you click the gray diamond to the left of your test a balloon appears offering more information.</p>
<p>To set a baseline, click the Set Baseline button inside that balloon. You’ll see a “Max STDDEV” field set to 10% by default – that’s how much variance Xcode allows before it considers a test to have failed, but you can change it however you want. Broadly speaking, extremely fast code should have a higher standard deviation allowance than slower code, only because extremely fast code is likely to show more variance due to system conditions.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/testing/how-to-write-performance-tests-using-measure">How to write performance tests using measure()</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/testing/how-to-do-one-time-setup-for-your-tests">How to do one-time setup for your tests</a></li><li><a href="/quick-start/concurrency/whats-the-performance-cost-of-calling-an-async-function">What’s the performance cost of calling an async function?</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li></ul>
-->

:::

---

<TagLinks />