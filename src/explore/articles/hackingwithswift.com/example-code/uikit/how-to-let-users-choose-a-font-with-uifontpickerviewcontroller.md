---
lang: ko-KR
title: "How to let users choose a font with UIFontPickerViewController"
description: "Article(s) > How to let users choose a font with UIFontPickerViewController"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to let users choose a font with UIFontPickerViewController"
    - property: og:description
      content: "How to let users choose a font with UIFontPickerViewController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-let-users-choose-a-font-with-uifontpickerviewcontroller.html
date: 2019-10-01
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
  "title": "How to let users choose a font with UIFontPickerViewController | UIKit - free Swift example code",
  "desc": "How to let users choose a font with UIFontPickerViewController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-let-users-choose-a-font-with-uifontpickerviewcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.0

<!-- TODO: 작성 -->

<!--
<p>UIKit provides <code>UIFontPickerViewController</code> as a built-in view controller for letting users select from a list of installed fonts available for our apps. Using it takes three steps: create a delegate to handle callbacks, create and show an instance of the font picker, then read the response as appropriate.</p>
<p>As an example, if you had a <code>UIViewController</code> subclass that wanted to show a font picker, you would make it conform to the <code>UIFontPickerViewControllerDelegate</code> protocol like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">UIFontPickerViewControllerDelegate</span> <span class="token punctuation">{</span>
    <span class="token comment">// the rest of your class</span>
<span class="token punctuation">}</span></code></pre>
<p>Second, you would create the font picker, assign the current view controller as its delegate, then show it like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> vc <span class="token operator">=</span> <span class="token class-name">UIFontPickerViewController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
vc<span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token keyword">self</span>
<span class="token function">present</span><span class="token punctuation">(</span>vc<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></code></pre>
<p>Finally, you would implement the <code>fontPickerViewControllerDidPickFont()</code> method. This sends you back the <code>UIFontPickerViewController</code> instance you created, from which you can read the font descriptor that was chosen.</p>
<p>If you weren’t already aware, a <em>font descriptor</em> is different from a <em>font</em>: it describes the type of font chosen, but doesn’t associate a size with it. So, if you want to use the selected font in a label you need to create a <code>UIFont</code> instance from it.</p>
<p>For example, you might write this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">fontPickerViewControllerDidPickFont</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> viewController<span class="token punctuation">:</span> <span class="token class-name">UIFontPickerViewController</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// attempt to read the selected font descriptor, but exit quietly if that fails</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> descriptor <span class="token operator">=</span> viewController<span class="token punctuation">.</span>selectedFontDescriptor <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token keyword">let</span> font <span class="token operator">=</span> <span class="token class-name">UIFont</span><span class="token punctuation">(</span>descriptor<span class="token punctuation">:</span> descriptor<span class="token punctuation">,</span> size<span class="token punctuation">:</span> <span class="token number">36</span><span class="token punctuation">)</span>
    yourLabel<span class="token punctuation">.</span>font <span class="token operator">=</span> font
<span class="token punctuation">}</span></code></pre>
<p>You don’t need to dismiss the font picker; it will be dismissed automatically.</p>
<p>If you want to, you can optionally also add the <code>fontPickerViewControllerDidCancel()</code> method, which will be called if the user cancels the font picker rather than selecting a font:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">fontPickerViewControllerDidCancel</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> viewController<span class="token punctuation">:</span> <span class="token class-name">UIFontPickerViewController</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// handle cancel event here</span>
<span class="token punctuation">}</span></code></pre>
<p>Again, this will automatically dismiss the font picker for you, so you don’t need to do it yourself.</p>
<p>It’s worth adding that you have some control over how the font picker works. More specifically, you can create it with a customization class that contains three useful properties:</p>
<ul>
<li><code>displayUsingSystemFont</code> will show each font in the default system font, rather than using the font itself. This sacrifices some usefulness for legibility. (This is false by default.)</li>
<li><code>includeFaces</code> adds a dropdown arrow next to each font type, letting users select different weights and options. (This is also false by default.)</li>
<li><code>filteredTraits</code> is an array of traits that limit the types of font you want to show. (This is empty by default, so all fonts are shown.)</li>
</ul>
<p>For example, if we wanted to show a font picker in system fonts, with faces included, but only showing serif fonts (think Times New Roman rather than Helvetica), we’d write code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> configuration <span class="token operator">=</span> <span class="token class-name">UIFontPickerViewController</span><span class="token punctuation">.</span><span class="token class-name">Configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
configuration<span class="token punctuation">.</span>includeFaces <span class="token operator">=</span> <span class="token boolean">true</span>
configuration<span class="token punctuation">.</span>displayUsingSystemFont <span class="token operator">=</span> <span class="token boolean">true</span>
configuration<span class="token punctuation">.</span>filteredTraits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>classModernSerifs<span class="token punctuation">]</span>

<span class="token keyword">let</span> vc <span class="token operator">=</span> <span class="token class-name">UIFontPickerViewController</span><span class="token punctuation">(</span>configuration<span class="token punctuation">:</span> configuration<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/media/how-to-choose-a-photo-from-the-camera-roll-using-uiimagepickercontroller">How to choose a photo from the camera roll using UIImagePickerController</a></li><li><a href="/quick-start/concurrency/how-to-call-an-async-function-using-async-let">How to call an async function using async let</a></li><li><a href="/quick-start/swiftui/how-to-use-dynamic-type-with-a-custom-font">How to use Dynamic Type with a custom font</a></li><li><a href="/example-code/uikit/how-to-resize-a-custom-font-using-uifontmetrics">How to resize a custom font using UIFontMetrics</a></li><li><a href="/example-code/uikit/how-to-style-the-font-in-a-uinavigationbars-title">How to style the font in a UINavigationBar's title</a></li></ul>
-->

:::

---

<TagLinks />