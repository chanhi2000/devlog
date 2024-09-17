---
lang: ko-KR
title: "How to generate shaped random numbers using GKGaussianDistribution"
description: "Article(s) > How to generate shaped random numbers using GKGaussianDistribution"
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
      content: "Article(s) > How to generate shaped random numbers using GKGaussianDistribution"
    - property: og:description
      content: "How to generate shaped random numbers using GKGaussianDistribution"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-generate-shaped-random-numbers-using-gkgaussiandistribution.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Games - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/games/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to generate shaped random numbers using GKGaussianDistribution | Games - free Swift example code",
  "desc": "How to generate shaped random numbers using GKGaussianDistribution",
  "link": "https://hackingwithswift.com/example-code/games/how-to-generate-shaped-random-numbers-using-gkgaussiandistribution",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
<p>A shaped random number generator is one that generates each of its possible values but does so in a way that numbers near the middle are more frequent. For example, you might use it generate heights of characters, because most people are around average height while some outliers are much shorter or much taller. For example, if you were generating numbers between 1 and 10, 5 and 6 would be generated significantly more than 1 or 10.</p>
<p>GameplayKit has support for shaped random number generation using <code>GKGaussianDistribution</code>. First, add an import for the GameplayKit framework:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">GameplayKit</span></code></pre>
<p>Second, create an instance of <code>GKGaussianDistribution</code>, telling it the lowest and highest values it can generate:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> distribution <span class="token operator">=</span> <span class="token class-name">GKGaussianDistribution</span><span class="token punctuation">(</span>lowestValue<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> highestValue<span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">)</span></code></pre>
<p>Finally, call <code>nextInt()</code> on it as needed to generate numbers. You should get find the numbers returned are most commonly 4s and 5s, with quite a few 3s and 6s, not many 2s or 7s, and hardly any 1s or 8s.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/games/how-to-generate-fair-random-numbers-using-gkshuffleddistribution">How to generate fair random numbers using GKShuffledDistribution</a></li><li><a href="/example-code/system/how-to-generate-a-random-identifier-using-uuid">How to generate a random identifier using UUID</a></li><li><a href="/example-code/language/how-to-generate-a-random-number">How to generate a random number</a></li><li><a href="/example-code/games/how-to-generate-a-random-number-with-gkrandomsource">How to generate a random number with GKRandomSource</a></li><li><a href="/example-code/uikit/how-to-generate-haptic-feedback-with-uifeedbackgenerator">How to generate haptic feedback with UIFeedbackGenerator</a></li></ul>
-->

---

<TagLinks />