---
lang: ko-KR
title: "How to read the contents of a directory using FileManager"
description: "Article(s) > How to read the contents of a directory using FileManager"
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
      content: "Article(s) > How to read the contents of a directory using FileManager"
    - property: og:description
      content: "How to read the contents of a directory using FileManager"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-read-the-contents-of-a-directory-using-filemanager.html
date: 2018-03-28
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
  "title": "How to read the contents of a directory using FileManager | System - free Swift example code",
  "desc": "How to read the contents of a directory using FileManager",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-read-the-contents-of-a-directory-using-filemanager",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>If you want to work with files <code>FileManager</code> almost certainly has the answer, and it's no different in this case: it has a method called <code>contentsOfDirectory(atPath:)</code> that lists all the files in a specific directory. For example, we could have it list all the files in our app's resource directory like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> fm <span class="token operator">=</span> <span class="token class-name">FileManager</span><span class="token punctuation">.</span><span class="token keyword">default</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token class-name">Bundle</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span>resourcePath<span class="token operator">!</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> items <span class="token operator">=</span> <span class="token keyword">try</span> fm<span class="token punctuation">.</span><span class="token function">contentsOfDirectory</span><span class="token punctuation">(</span>atPath<span class="token punctuation">:</span> path<span class="token punctuation">)</span>

    <span class="token keyword">for</span> item <span class="token keyword">in</span> items <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Found </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">item</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token comment">// failed to read directory – bad permissions, perhaps?</span>
<span class="token punctuation">}</span></code></pre>
<p>In this particular case the <code>try</code> should never fail, but you should still have the <code>catch</code> block in there just in case.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-disable-scrollview-clipping-so-contents-overflow">How to disable ScrollView clipping so contents overflow</a></li><li><a href="/example-code/system/how-to-find-the-users-documents-directory">How to find the user's documents directory</a></li><li><a href="/example-code/location/how-to-read-the-users-location-while-your-app-is-in-the-background">How to read the user’s location while your app is in the background</a></li><li><a href="/quick-start/swiftui/how-to-make-voiceover-read-characters-individually">How to make VoiceOver read characters individually</a></li><li><a href="/example-code/uikit/how-to-read-a-title-from-a-uipickerview-using-titleforrow">How to read a title from a UIPickerView using titleForRow</a></li></ul>
-->

:::

---

<TagLinks />