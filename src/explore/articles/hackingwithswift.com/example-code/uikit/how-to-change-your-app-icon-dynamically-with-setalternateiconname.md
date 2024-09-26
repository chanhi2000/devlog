---
lang: ko-KR
title: "How to change your app icon dynamically with setAlternateIconName()"
description: "Article(s) > How to change your app icon dynamically with setAlternateIconName()"
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
  - ios-10.3
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to change your app icon dynamically with setAlternateIconName()"
    - property: og:description
      content: "How to change your app icon dynamically with setAlternateIconName()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname.html
date: 2022-12-29
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
  "title": "How to change your app icon dynamically with setAlternateIconName() | UIKit - free Swift example code",
  "desc": "How to change your app icon dynamically with setAlternateIconName()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.3

<!-- TODO: 작성 -->

<!--
<p>iOS gives developers the ability to change their app’s icon programmatically, although it takes a little work to set up. It also isn’t quite as powerful as you might hope –&nbsp;you can’t recreate the moving hands of the Clock app, for example.</p>
<p>The actual code to change your app’s icon is trivial, but first there’s some setup work because you must declare all possible icons in your Info.plist file. The process behind this is far from optimal, and right now the best thing to do is edit your Info.plist as XML rather than trying to use the built-in property list editor in Xcode.</p>
<p>To get started, we need some icons. <strong>These should be placed loose in your project or in a group, rather than inside an asset catalog.</strong> Remember to use the @2x and @3x naming convention to ensure iOS automatically picks the correct icon for users’ devices.</p>
<p>For this example, we’re using these example icon files:</p>
<ul>
<li>Icon-1@2x.png, Icon-1@3x.png</li>
<li>Icon-2@2x.png, Icon-2@3x.png</li>
<li>Icon-3@2x.png, Icon-3@3x.png</li>
</ul>
<p>They are all just regular PNGs, with the @2x being 120x120 and the @3x being 180x180.</p>
<p>Now go to your project navigator, right-click your Info.plist file, and choose Open As &gt; Source Code. This will reveal the raw XML behind your plist –&nbsp;it might seem like a lot at first, but trust me this is <em>way</em> better than using the GUI for this particular task.</p>
<p>Defining the icons for your app is done with a very specific set of property list keys and values:</p>
<ol>
<li><code>CFBundleIcons</code> is a dictionary that defines what your primary icon is (<code>CFBundlePrimaryIcon</code>) and what your alternate icons are (<code>CFBundleAlternateIcons</code>)</li>
<li>The primary icon key itself is a dictionary that lists its icon files (<code>CFBundleIconFiles</code>), which is an array containing the filenames for your primary icon, and whether iOS should apply gloss effects to it (<code>UIPrerenderedIcon</code>). Yes, that latter setting has been dead since iOS 7 but it still loiters around.</li>
<li>The alternate icons key is also a dictionary, but this time the keys of its children are the names of images you want to use. This doesn’t need to be their filename, just however you want to reference each icon in your code.</li>
<li>Each icon name is another dictionary, which contains the same two keys as <code>CFBundlePrimaryIcon</code>: the <code>CFBundleIconFiles</code> array and the <code>UIPrerenderedIcon</code> boolean.</li>
</ol>
<p>To be quite clear, <code>CFBundleIcons</code> is a dictionary containing the key <code>CFBundleAlternateIcons</code>, which is a dictionary containing the key <code>YourImageName</code>, which is another dictionary containing the icon files and gloss effect settings.</p>
<p>If your head is spinning a little, that’s OK: it really is far too complex and I’m amazed this is new API. However, it’s what we have so if you want to start using it today then you’re going to want some example XML to get you started.</p>
<p>At the end of your property list XML you should see this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span>
<span class="token operator">&lt;/</span>plist<span class="token operator">&gt;</span></code></pre>
<p><em>Before that</em> –&nbsp;i.e., directly before <code>&lt;/dict&gt;</code>, add this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">CFBundleIcons</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>dict<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">CFBundlePrimaryIcon</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>dict<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">CFBundleIconFiles</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>array<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token class-name">Icon</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">&lt;/</span>string<span class="token operator">&gt;</span>
        <span class="token operator">&lt;/</span>array<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">UIPrerenderedIcon</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token boolean">false</span><span class="token operator">/&gt;</span>
    <span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">CFBundleAlternateIcons</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>dict<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">AppIcon</span><span class="token operator">-</span><span class="token number">2</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>dict<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">CFBundleIconFiles</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>array<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token class-name">Icon</span><span class="token operator">-</span><span class="token number">2</span><span class="token operator">&lt;/</span>string<span class="token operator">&gt;</span>
            <span class="token operator">&lt;/</span>array<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">UIPrerenderedIcon</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token boolean">false</span><span class="token operator">/&gt;</span>
        <span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">AppIcon</span><span class="token operator">-</span><span class="token number">3</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>dict<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">CFBundleIconFiles</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>array<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token class-name">Icon</span><span class="token operator">-</span><span class="token number">3</span><span class="token operator">&lt;/</span>string<span class="token operator">&gt;</span>
            <span class="token operator">&lt;/</span>array<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span><span class="token class-name">UIPrerenderedIcon</span><span class="token operator">&lt;/</span>key<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token boolean">false</span><span class="token operator">/&gt;</span>
        <span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span>
    <span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span>
<span class="token operator">&lt;/</span>dict<span class="token operator">&gt;</span></code></pre>
<p>Again, I’ve used the files Icon-1@2x.png, Icon-1@3x.png, Icon-2-@2x.png, Icon-2@3x.png, Icon-3-@2x.png, and Icon-3@3x.png for that –&nbsp;you’ll need to replace those filenames with your own.</p>
<p><strong>Do not put the @2x or @3x parts into your plist, and don’t add the .png either.</strong></p>
<p>In that example XML above I used the icon names “AppIcon-2” and “AppIcon-3”. Remember, these <em>aren’t</em> the filenames, they are just the reference names you want to use in your code.</p>
<p>Now that you have your property list configured the rest is easy: all the hard work is done by the method <code>setAlternateIconName()</code>, which takes an icon name to change to or nil to use the app’s default icon.</p>
<p>For example, you might want to add a button that changes your app icon to AppIcon-2, in which case you would use this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">setAlternateIconName</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"AppIcon-2"</span></span><span class="token punctuation">)</span></code></pre>
<p>To reset your icon to the primary icon, you would use this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">setAlternateIconName</span><span class="token punctuation">(</span><span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
<p>If you want, you can optionally provide a completion handler to be run when the call finishes. This gets passed an <code>Error?</code> parameter that will be set to a value if something went wrong, so if you wanted to make your code more robust you might use something like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">setAlternateIconName</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"AppIcon-2"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> error <span class="token keyword">in</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> error <span class="token operator">=</span> error <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Success!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That’s all you need to get started, but it’s important to mention two more things just briefly.</p>
<p>First, you can check whether your app is able to switch to an alternate icon by checking the <code>supportsAlternateIcons</code> property on your application, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">if</span> <span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span>supportsAlternateIcons <span class="token punctuation">{</span>
    <span class="token comment">// let the user choose a new icon</span>
<span class="token punctuation">}</span></code></pre>
<p>You can also query which alternate icon is currently showing by reading the <code>alternateIconName</code> property. This is a <code>String?</code>: it will be <code>nil</code> if your primary icon is showing, or an icon name if an alternate icon is showing:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span>alternateIconName <span class="token operator">??</span> <span class="token string-literal"><span class="token string">"Primary"</span></span><span class="token punctuation">)</span></code></pre>
<p>One last thing: <code>setAlternateIconName()</code> looks for the icon files in your app’s resource folder rather than any arbitrary location, which means you can’t generate icons dynamically.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/uikit/how-to-add-a-number-over-your-app-icon-using-applicationiconbadgenumber">How to add a number over your app icon using applicationIconBadgeNumber</a></li><li><a href="/quick-start/swiftui/how-to-show-text-and-an-icon-side-by-side-using-label">How to show text and an icon side by side using Label</a></li><li><a href="/quick-start/swiftui/how-to-dynamically-change-between-vstack-and-hstack">How to dynamically change between VStack and HStack</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li></ul>
-->

:::

---

<TagLinks />