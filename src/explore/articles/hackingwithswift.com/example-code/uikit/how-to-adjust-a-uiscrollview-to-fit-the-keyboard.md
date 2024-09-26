---
lang: ko-KR
title: "How to adjust a UIScrollView to fit the keyboard"
description: "Article(s) > How to adjust a UIScrollView to fit the keyboard"
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
      content: "Article(s) > How to adjust a UIScrollView to fit the keyboard"
    - property: og:description
      content: "How to adjust a UIScrollView to fit the keyboard"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-adjust-a-uiscrollview-to-fit-the-keyboard.html
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
  "title": "How to adjust a UIScrollView to fit the keyboard | UIKit - free Swift example code",
  "desc": "How to adjust a UIScrollView to fit the keyboard",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-adjust-a-uiscrollview-to-fit-the-keyboard",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>If your user interface brings up the keyboard, you should respond by adjusting your layout so that all parts are still visible. If you're using a <code>UIScrollView</code> or any classes that have a scroll view as part of their layout (table views and text views, for example), this means adjusting the <code>contentInset</code> property to account for the keyboard.</p>
<p>First you need to register for keyboard change notifications. Put this into your <code>viewDidLoad()</code> method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> notificationCenter <span class="token operator">=</span> <span class="token class-name">NotificationCenter</span><span class="token punctuation">.</span><span class="token keyword">default</span>
notificationCenter<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>adjustForKeyboard<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token class-name">UIResponder</span><span class="token punctuation">.</span>keyboardWillHideNotification<span class="token punctuation">,</span> object<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
notificationCenter<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>adjustForKeyboard<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token class-name">UIResponder</span><span class="token punctuation">.</span>keyboardWillChangeFrameNotification<span class="token punctuation">,</span> object<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></code></pre>
<p>Now add this method somewhere else in your class:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">adjustForKeyboard</span><span class="token punctuation">(</span>notification<span class="token punctuation">:</span> <span class="token class-name">Notification</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> keyboardValue <span class="token operator">=</span> notification<span class="token punctuation">.</span>userInfo<span class="token operator">?</span><span class="token punctuation">[</span><span class="token class-name">UIResponder</span><span class="token punctuation">.</span>keyboardFrameEndUserInfoKey<span class="token punctuation">]</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">NSValue</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token keyword">let</span> keyboardScreenEndFrame <span class="token operator">=</span> keyboardValue<span class="token punctuation">.</span>cgRectValue
    <span class="token keyword">let</span> keyboardViewEndFrame <span class="token operator">=</span> view<span class="token punctuation">.</span><span class="token function">convert</span><span class="token punctuation">(</span>keyboardScreenEndFrame<span class="token punctuation">,</span> from<span class="token punctuation">:</span> view<span class="token punctuation">.</span>window<span class="token punctuation">)</span>

    <span class="token keyword">if</span> notification<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token class-name">UIResponder</span><span class="token punctuation">.</span>keyboardWillHideNotification <span class="token punctuation">{</span>
        yourTextView<span class="token punctuation">.</span>contentInset <span class="token operator">=</span> <span class="token punctuation">.</span>zero
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        yourTextView<span class="token punctuation">.</span>contentInset <span class="token operator">=</span> <span class="token class-name">UIEdgeInsets</span><span class="token punctuation">(</span>top<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">left</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> bottom<span class="token punctuation">:</span> keyboardViewEndFrame<span class="token punctuation">.</span>height <span class="token operator">-</span> view<span class="token punctuation">.</span>safeAreaInsets<span class="token punctuation">.</span>bottom<span class="token punctuation">,</span> <span class="token keyword">right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    yourTextView<span class="token punctuation">.</span>scrollIndicatorInsets <span class="token operator">=</span> yourTextView<span class="token punctuation">.</span>contentInset

    <span class="token keyword">let</span> selectedRange <span class="token operator">=</span> yourTextView<span class="token punctuation">.</span>selectedRange
    yourTextView<span class="token punctuation">.</span><span class="token function">scrollRangeToVisible</span><span class="token punctuation">(</span>selectedRange<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That example code is for adjusting text views. If you want it to apply to a regular scroll view, just take out the last two lines - they are in there so that the text view readjusts itself so the user doesn't lose their place while editing.</p>
<p><strong>Note:</strong> It’s important to subtract <code>view.safeAreaInsets.bottom</code> from the keyboard height to avoid making your text view too small on devices with a home indicator.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-adjust-image-content-mode-using-aspect-fill-aspect-fit-and-scaling">How to adjust image content mode using aspect fill, aspect fit and scaling</a></li><li><a href="/example-code/uikit/how-to-support-pinch-to-zoom-in-a-uiscrollview">How to support pinch to zoom in a UIScrollView</a></li><li><a href="/example-code/uikit/how-to-change-the-scroll-indicator-inset-for-a-uiscrollview">How to change the scroll indicator inset for a UIScrollView</a></li><li><a href="/example-code/uikit/how-to-find-an-aspect-fit-images-size-inside-an-image-view">How to find an aspect fit image’s size inside an image view</a></li><li><a href="/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset">How to make empty UITableViews look more attractive using DZNEmptyDataSet</a></li></ul>
-->

:::

---

<TagLinks />