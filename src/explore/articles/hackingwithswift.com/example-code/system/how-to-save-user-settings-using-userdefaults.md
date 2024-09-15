---
lang: ko-KR
title: "How to save user settings using UserDefaults"
description: "Article(s) > How to save user settings using UserDefaults"
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
      content: "Article(s) > How to save user settings using UserDefaults"
    - property: og:description
      content: "How to save user settings using UserDefaults"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-save-user-settings-using-userdefaults.html
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
  "title": "How to save user settings using UserDefaults | System - free Swift example code",
  "desc": "How to save user settings using UserDefaults",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-save-user-settings-using-userdefaults",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<VidStack src="youtube/HxVOahmfwz0" />

<!-- TODO: 작성 -->

<!-- 
<p>All iOS apps have a built in data dictionary that stores small amounts of user settings for as long as the app is installed. This system, called <code>UserDefaults</code> can save integers, booleans, strings, arrays, dictionaries, dates and more, but you should be careful not to save too much data because it will slow the launch of your app.</p>
<p>Here's an example of setting some values:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> defaults <span class="token operator">=</span> <span class="token class-name">UserDefaults</span><span class="token punctuation">.</span>standard
defaults<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Age"</span></span><span class="token punctuation">)</span>
defaults<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"UseTouchID"</span></span><span class="token punctuation">)</span>
defaults<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token class-name">CGFloat</span><span class="token punctuation">.</span>pi<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Pi"</span></span><span class="token punctuation">)</span>

defaults<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Paul Hudson"</span></span><span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Name"</span></span><span class="token punctuation">)</span>
defaults<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token class-name">Date</span><span class="token punctuation">.</span>now<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"LastRun"</span></span><span class="token punctuation">)</span></code></pre>
<p>When you set values like that, they become permanent – you can quit the app then re-launch and they'll still be there, so it's the ideal way to store app configuration data. As an advance warning, you might find some old tutorials recommend calling the <code>synchronize()</code> method to force your data to save, but Apple has asked us not to do that for some years now.</p>
<p>As mentioned, you can use <code>UserDefaults</code> to store arrays and dictionaries, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Hello"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"World"</span></span><span class="token punctuation">]</span>
defaults<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"SavedArray"</span></span><span class="token punctuation">)</span>

<span class="token keyword">let</span> dict <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Name"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Paul"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Country"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"UK"</span></span><span class="token punctuation">]</span>
defaults<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>dict<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"SavedDict"</span></span><span class="token punctuation">)</span></code></pre>
<p>When it comes to reading data back, it's still easy but has an important proviso: <code>UserDefaults</code> will return a default value if the setting can't be found. You need to know what these default values are so that you don't confuse them with real values that you set. Here they are:</p>
<ul>
<li><code>integer(forKey:)</code> returns an integer if the key existed, or 0 if not.</li>
<li><code>bool(forKey:)</code> returns a boolean if the key existed, or false if not.</li>
<li><code>float(forKey:)</code> returns a float if the key existed, or 0.0 if not.</li>
<li><code>double(forKey:)</code> returns a double if the key existed, or 0.0 if not.</li>
<li><code>object(forKey:)</code> returns <code>AnyObject?</code> so you need to conditionally typecast it to your data type.</li>
</ul>
<p>With that in mind, you can read values back like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> age <span class="token operator">=</span> defaults<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span>forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Age"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> useTouchID <span class="token operator">=</span> defaults<span class="token punctuation">.</span><span class="token function">bool</span><span class="token punctuation">(</span>forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"UseTouchID"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> pi <span class="token operator">=</span> defaults<span class="token punctuation">.</span><span class="token function">double</span><span class="token punctuation">(</span>forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Pi"</span></span><span class="token punctuation">)</span></code></pre>
<p>When retrieving objects, the result is optional. This means you can either accept the optionality, or typecast it to a non-optional type and use the nil coalescing operator to handle missing values. For example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> savedArray <span class="token operator">=</span> defaults<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span>forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"SavedArray"</span></span><span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-load-and-save-a-struct-in-userdefaults-using-codable">How to load and save a struct in UserDefaults using Codable</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/example-code/system/how-to-store-userdefaults-options-in-icloud">How to store UserDefaults options in iCloud</a></li><li><a href="/quick-start/swiftui/how-to-save-and-load-navigationstack-paths-using-codable">How to save and load NavigationStack paths using Codable</a></li><li><a href="/example-code/media/how-to-save-a-uiimage-to-a-file-using-jpegdata-and-pngdata">How to save a UIImage to a file using jpegData() and pngData()</a></li></ul>
-->

:::

---

<TagLinks />