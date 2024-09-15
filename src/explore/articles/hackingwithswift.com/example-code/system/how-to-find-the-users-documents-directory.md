---
lang: ko-KR
title: "How to find the user's documents directory"
description: "Article(s) > How to find the user's documents directory"
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
      content: "Article(s) > How to find the user's documents directory"
    - property: og:description
      content: "How to find the user's documents directory"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-find-the-users-documents-directory.html
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
  "title": "How to find the user's documents directory | System - free Swift example code",
  "desc": "How to find the user's documents directory",
  "link": "https://hackingwithswift.com/example-code/how-to-find-the-users-documents-directory",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>Every iOS app gets a slice of storage just for itself, meaning that you can read and write your app's files there without worrying about colliding with other apps. This is called the user's documents directory, and it's exposed both in code (as you'll see in a moment) and also through iTunes file sharing.</p>
<p>Unfortunately, the code to find the user's documents directory isn't very memorable, so I nearly always use this helpful function – and now you can too!</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">getDocumentsDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token constant">URL</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> paths <span class="token operator">=</span> <span class="token class-name">FileManager</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">urls</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>documentDirectory<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>userDomainMask<span class="token punctuation">)</span>
    <span class="token keyword">let</span> documentsDirectory <span class="token operator">=</span> paths<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> documentsDirectory
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-read-the-contents-of-a-directory-using-filemanager">How to read the contents of a directory using FileManager</a></li><li><a href="/example-code/vision/how-to-detect-documents-using-vndocumentcameraviewcontroller">How to detect documents using VNDocumentCameraViewController</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a></li><li><a href="/quick-start/swiftui/how-to-read-user-contacts-with-contactaccessbutton">How to read user contacts with ContactAccessButton</a></li></ul>
-->

:::

---

<TagLinks />