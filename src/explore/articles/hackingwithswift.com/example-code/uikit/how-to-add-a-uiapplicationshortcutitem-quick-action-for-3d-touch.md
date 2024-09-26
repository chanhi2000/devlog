---
lang: ko-KR
title: "How to add a UIApplicationShortcutItem quick action for 3D Touch"
description: "Article(s) > How to add a UIApplicationShortcutItem quick action for 3D Touch"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to add a UIApplicationShortcutItem quick action for 3D Touch"
    - property: og:description
      content: "How to add a UIApplicationShortcutItem quick action for 3D Touch"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to add a UIApplicationShortcutItem quick action for 3D Touch | UIKit - free Swift example code",
  "desc": "How to add a UIApplicationShortcutItem quick action for 3D Touch",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>There are two ways to add a shortcut item for 3D Touch: you can register a list of static items that always get shown, or you can create a dynamic list in code based on user information.</p>
<p>Let's start by tackling static lists. Open your Info.plist file, and add a new key called <code>UIApplicationShortcutItems</code>, then set it to be an Array. Add one new item in there, which will get the name "Item 0", and set its data type to be Dictionary. Finally, add these three keys to that dictionary, all using the String data type:</p>
<ul>
<li>Key name: <code>UIApplicationShortcutItemIconType</code>, value: <code>UIApplicationShortcutIconTypeAdd</code>.</li>
<li>Key name: <code>UIApplicationShortcutItemTitle</code>, value: <code>Add User</code>.</li>
<li>Key name: <code>UIApplicationShortcutItemType</code>, value: <code>com.yoursite.yourapp.adduser</code>.</li>
</ul>
<p>You need all three of those keys, but you will want to change the values to whatever fits your needs.</p>
<p>The first one should be one of the built-in icon types, such as <code>UIApplicationShortcutIconTypeCompose</code>, <code>UIApplicationShortcutIconTypePlay</code>, <code>UIApplicationShortcutIconTypeSearch</code>, <code>UIApplicationShortcutIconTypeLove</code>, <code>UIApplicationShortcutIconTypeShare</code>, or <code>UIApplicationShortcutIconTypeAlarm</code>.</p>
<p>The second key should be the text string to show next to the shortcut icon. I've used "Add User" above, but you might want "Start Game", "Favorites", "New Message", and so on.</p>
<p>The third key should be a unique identifier, which is usually specified as your app's bundle ID followed by a new string. This is what identifies the command relative to other shortcuts you might add.</p>
<p>The shortcut item type is used when your app is launched using a shortcut menu item. The <code>launchOptions</code> dictionary of <code>didFinishLaunchingWithOptions</code> will have a key set called <code>UIApplication.LaunchOptionsKey.shortcutItem</code>, which you can check to see what shortcut was triggered.</p>
<p>The code below – placed into your app delegate – will catch the shortcut we just created, although you should change the type string to match whatever you're using:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">application</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> application<span class="token punctuation">:</span> <span class="token class-name">UIApplication</span><span class="token punctuation">,</span> didFinishLaunchingWithOptions launchOptions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">UIApplication</span><span class="token punctuation">.</span><span class="token class-name">LaunchOptionsKey</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> shortcutItem <span class="token operator">=</span> launchOptions<span class="token operator">?</span><span class="token punctuation">[</span><span class="token class-name">UIApplication</span><span class="token punctuation">.</span><span class="token class-name">LaunchOptionsKey</span><span class="token punctuation">.</span>shortcutItem<span class="token punctuation">]</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">UIApplicationShortcutItem</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> shortcutItem<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token string-literal"><span class="token string">"com.yoursite.yourapp.adduser"</span></span> <span class="token punctuation">{</span>
            <span class="token comment">// shortcut was triggered!</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span></code></pre>
<p>If you want to create <em>dynamic</em> quick actions – which can live alongside static actions if you want - you need to create instances of <code>UIApplicationShortcutIcon</code> and <code>UIApplicationShortcutItem</code>, then assign to your application's <code>shortcutItems</code> property like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> icon <span class="token operator">=</span> <span class="token class-name">UIApplicationShortcutIcon</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token punctuation">.</span>add<span class="token punctuation">)</span>
<span class="token keyword">let</span> item <span class="token operator">=</span> <span class="token class-name">UIApplicationShortcutItem</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"com.yoursite.yourapp.adduser"</span></span><span class="token punctuation">,</span> localizedTitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Add User"</span></span><span class="token punctuation">,</span> localizedSubtitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Meet someone new"</span></span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> icon<span class="token punctuation">,</span> userInfo<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
<span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span>shortcutItems <span class="token operator">=</span> <span class="token punctuation">[</span>item<span class="token punctuation">]</span></code></pre>
<p>If your shortcut item should provide some sort of identifying information –&nbsp;perhaps it's the name of the most recently used contact – then you should place that into the <code>userInfo</code> dictionary. This will then be provided back to you when the application gets launched, and you can respond appropriately.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-measure-touch-strength-using-3d-touch">How to measure touch strength using 3D Touch</a></li><li><a href="/quick-start/swiftui/how-to-add-custom-swipe-action-buttons-to-a-list-row">How to add custom swipe action buttons to a List row</a></li><li><a href="/example-code/system/how-to-use-touch-id-to-authenticate-users-by-fingerprint">How to use Touch ID to authenticate users by fingerprint</a></li><li><a href="/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin">How to find a touch's location in a view with location(in:)</a></li><li><a href="/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin">How to find a touch's location in a node using location(in:)</a></li></ul>
-->

:::

---

<TagLinks />