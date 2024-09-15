---
lang: ko-KR
title: "How to store UserDefaults options in iCloud"
description: "Article(s) > How to store UserDefaults options in iCloud"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to store UserDefaults options in iCloud"
    - property: og:description
      content: "How to store UserDefaults options in iCloud"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-store-userdefaults-options-in-icloud.html
date: 2020-02-11
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
  "title": "How to store UserDefaults options in iCloud | System - free Swift example code",
  "desc": "How to store UserDefaults options in iCloud",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-store-userdefaults-options-in-icloud",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS has a built-in iCloud sync system called <code>NSUbiquitousKeyValueStore</code>, but to be honest it's pretty unpleasant to work with. Fortunately, other developers have written simple wrappers around it so that you can forget about iCloud and focus on the interesting things instead –&nbsp;i.e., the rest of your app.</p>
<p>One such example is called <strong>MKiCloudSync</strong> and it's <a href="https://github.com/MugunthKumar/MKiCloudSync">available from here</a>. It's open source and so easy to use you literally don't notice that it's there once you've added it to your app –&nbsp;it just silently syncs your <code>UserDefaults</code> values to and from iCloud.</p>
<p>To use it, <a href="https://github.com/MugunthKumar/MKiCloudSync">go here</a> and click Download Zip. Inside the zip file you'll find <strong>MKiCloudSync.h</strong> and <strong>MKiCloudSync.m</strong>, and you should drag them both into your Xcode project. Xcode will ask you if you want to create an Objective-C bridging header, and you should click "Create Bridging Header"&nbsp;- this is required because MKiCloudSync is written in Objective-C rather than Swift.</p>
<p>To actually use the library, open your new bridging header (it'll be called something like YourProject-Bridging-Header.h) and add this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token other-directive property">#import</span> <span class="token string-literal"><span class="token string">"MKiCloudSync.h"</span></span></code></pre>
<p>Now open your AppDelegate.swift file, find the <code>didFinishLaunchingWithOptions</code> method, and add this line to it:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">MKiCloudSync</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>withPrefix<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"sync"</span></span><span class="token punctuation">)</span></code></pre>
<p>The "sync" part is important, because chances are you won't want to sync <em>everything</em> to iCloud. With that prefix, MKiCloudSync will copy to iCloud only <code>UserDefaults</code> keys that start with <code>sync</code> – you can now choose what you want to sync just by naming your keys appropriately.</p>
<p>There is one final, important thing to do: you need to enable iCloud for your app. This is done inside the Capabilities tab of your target's settings – find iCloud, then flick its switch to be On.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-save-user-settings-using-userdefaults">How to save user settings using UserDefaults</a></li><li><a href="/example-code/system/how-to-load-and-save-a-struct-in-userdefaults-using-codable">How to load and save a struct in UserDefaults using Codable</a></li><li><a href="/quick-start/swiftui/how-to-let-users-pick-options-from-a-menu">How to let users pick options from a menu</a></li><li><a href="/example-code/language/how-to-store-nscoding-data-using-codable">How to store NSCoding data using Codable</a></li><li><a href="/quick-start/swiftui/how-to-store-views-as-properties">How to store views as properties</a></li></ul>
-->

:::

---

<TagLinks />