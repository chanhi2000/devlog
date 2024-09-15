---
lang: ko-KR
title: "How to use Touch ID to authenticate users by fingerprint"
description: "Article(s) > How to use Touch ID to authenticate users by fingerprint"
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
      content: "Article(s) > How to use Touch ID to authenticate users by fingerprint"
    - property: og:description
      content: "How to use Touch ID to authenticate users by fingerprint"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-use-touch-id-to-authenticate-users-by-fingerprint.html
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
  "title": "How to use Touch ID to authenticate users by fingerprint | System - free Swift example code",
  "desc": "How to use Touch ID to authenticate users by fingerprint",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-use-touch-id-to-authenticate-users-by-fingerprint",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Touch ID is an easy and secure way for users to authenticate themselves, so its no surprise that it's caught on so quickly among apps. Authenticating with Touch ID automatically uses the fingerprints registered by the user when they set up Touch ID, and you never have access to those fingerprints, which means it's both low-friction and extra-secure.</p>
<p>To get started, you need to import the LocalAuthentication framework like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">LocalAuthentication</span></code></pre>
<p>The actual act of authenticating users has a number of possible results, and you need to catch them all:</p>
<ul>
<li>The user might not have a Touch ID-capable device.</li>
<li>The user might have a Touch ID-capable device, but might not have configured it.</li>
<li>The user failed to authenticate, perhaps because they asked to enter a passcode rather than use Touch ID.</li>
</ul>
<p>Note that Apple insists that your app provide a passcode method of authentication as a back up. More annoyingly, you need to request and store this passcode yourself –&nbsp;it's not even done by Apple using the system unlock code!</p>
<p>Asking for and setting a passcode is easy enough, so I'll leave that to you. The important bit is asking for Touch ID authentication, which is done using this code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">authenticateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token class-name">LAContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> error<span class="token punctuation">:</span> <span class="token class-name">NSError</span><span class="token operator">?</span>

    <span class="token keyword">if</span> context<span class="token punctuation">.</span><span class="token function">canEvaluatePolicy</span><span class="token punctuation">(</span><span class="token punctuation">.</span>deviceOwnerAuthenticationWithBiometrics<span class="token punctuation">,</span> error<span class="token punctuation">:</span> <span class="token operator">&amp;</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> reason <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Identify yourself!"</span></span>

        context<span class="token punctuation">.</span><span class="token function">evaluatePolicy</span><span class="token punctuation">(</span><span class="token punctuation">.</span>deviceOwnerAuthenticationWithBiometrics<span class="token punctuation">,</span> localizedReason<span class="token punctuation">:</span> reason<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">[</span><span class="token keyword">unowned</span> <span class="token keyword">self</span><span class="token punctuation">]</span> success<span class="token punctuation">,</span> authenticationError <span class="token keyword">in</span>

            <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> success <span class="token punctuation">{</span>
                    <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">runSecretCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token class-name">UIAlertController</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Authentication failed"</span></span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Sorry!"</span></span><span class="token punctuation">,</span> preferredStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>alert<span class="token punctuation">)</span>
                    ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"OK"</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token class-name">UIAlertController</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Touch ID not available"</span></span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Your device is not configured for Touch ID."</span></span><span class="token punctuation">,</span> preferredStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>alert<span class="token punctuation">)</span>
        ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"OK"</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-measure-touch-strength-using-3d-touch">How to measure touch strength using 3D Touch</a></li><li><a href="/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin">How to find a touch's location in a view with location(in:)</a></li><li><a href="/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin">How to find a touch's location in a node using location(in:)</a></li><li><a href="/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch</a></li><li><a href="/quick-start/concurrency/whats-the-difference-between-a-task-and-a-detached-task">What’s the difference between a task and a detached task?</a></li></ul>
-->

:::

---

<TagLinks />