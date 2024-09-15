---
lang: ko-KR
title: "How to handle the HTTPS requirements in iOS with App Transport Security"
description: "Article(s) > How to handle the HTTPS requirements in iOS with App Transport Security"
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
      content: "Article(s) > How to handle the HTTPS requirements in iOS with App Transport Security"
    - property: og:description
      content: "How to handle the HTTPS requirements in iOS with App Transport Security"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-handle-the-https-requirements-in-ios-with-app-transport-security.html
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
  "title": "How to handle the HTTPS requirements in iOS with App Transport Security | System - free Swift example code",
  "desc": "How to handle the HTTPS requirements in iOS with App Transport Security",
  "link": "https://hackingwithswift.com/example-code/how-to-handle-the-https-requirements-in-ios-with-app-transport-security",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS doesn’t let you work with HTTP web data by default, because it's blocked by something called App Transport Security that effectively requires data to be transmitted securely. If possible, you should switch to HTTPS and use that instead, but if that's not possible for some reason – e.g. if you're working with a third-party website – then you need to tell iOS to make exceptions for you.</p>
<p><strong>Note: the very fact that iOS calls these "exceptions" does imply the exception option may go away in the future. If you add any exceptions you are required to explain them to the app review team when you submit your app to the App Store.</strong></p>
<p>Exceptions be defined per-site or globally, although if you're going to make exceptions obviously it's preferable to do it for individual sites. This is all set inside your application's Info.plist file, and this is one of the very few times when editing your plist as source code is faster than trying to use the GUI editor in Xcode. So, right-click on your Info.plist and choose Open As &gt; Source Code.</p>
<p>Your plist should end like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span>
<span class="token operator">&lt;/</span>plist<span class="token operator">&gt;</span></code></pre>
<p>Just before that, I'd like you to paste this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">NSAppTransportSecurity</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>dict<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">NSExceptionDomains</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>dict<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span>hackingwithswift<span class="token punctuation">.</span>com<span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>dict<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">NSIncludesSubdomains</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token boolean">true</span><span class="token operator">/&gt;</span>
            <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">NSThirdPartyExceptionAllowsInsecureHTTPLoads</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token boolean">true</span><span class="token operator">/&gt;</span>
        <span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span>
    <span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span>
<span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span></code></pre>
<p>That requests an exception for the site <strong>hackingwithswift.com</strong> so that it can be loaded using regular HTTP rather than HTTPS. Note that I've set <code>NSIncludesSubdomains</code> to be <code>true</code> because the site redirects you to <strong>www.hackingwithswift.com</strong>, which is a subdomain.</p>
<p>Very observant readers might note that <strong>hackingwithswift.com</strong> actually supports HTTPS and thus doesn't need App Transport Security, but you do still need to point to <strong>https://</strong> otherwise the request will fail.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/language/how-to-use-try-catch-in-swift-to-handle-exceptions">How to use try/catch in Swift to handle exceptions</a></li><li><a href="/quick-start/concurrency/how-to-handle-different-result-types-in-a-task-group">How to handle different result types in a task group</a></li></ul>
-->

:::

---

<TagLinks />