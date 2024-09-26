---
lang: ko-KR
title: "How to add a toolbar above the keyboard using inputAccessoryView"
description: "Article(s) > How to add a toolbar above the keyboard using inputAccessoryView"
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
  - ios-3.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to add a toolbar above the keyboard using inputAccessoryView"
    - property: og:description
      content: "How to add a toolbar above the keyboard using inputAccessoryView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-toolbar-above-the-keyboard-using-inputaccessoryview.html
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
  "title": "How to add a toolbar above the keyboard using inputAccessoryView | UIKit - free Swift example code",
  "desc": "How to add a toolbar above the keyboard using inputAccessoryView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-toolbar-above-the-keyboard-using-inputaccessoryview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
<p>If your user is likely to want common editing operations to appear while they are typing, you should set a custom view for your text fields’ <code>inputAccessoryView</code> property. For example, Tweetbot shows common Twitter symbols right above the keyboard, such as <code>@</code> and <code>#</code>, so you can type them without having to adjust the iOS keyboard.</p>
<p>There are several ways you can do this, but the easiest is just to create a <code>UIToolbar</code> with any buttons you want. You can then call <code>sizeToFit()</code> on it so the toolbar fits all its buttons, then assign that to the <code>inputAccessoryView</code> property of any text fields and text views that should use it.</p>
<p>Here’s some code to get you started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token class-name">UIToolbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> reset <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Reset"</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span>plain<span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>resetTapped<span class="token punctuation">)</span><span class="token punctuation">)</span>
bar<span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span>reset<span class="token punctuation">]</span>
bar<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
textField<span class="token punctuation">.</span>inputAccessoryView <span class="token operator">=</span> bar</code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-add-a-toolbar-to-the-keyboard">How to add a toolbar to the keyboard</a></li><li><a href="/quick-start/swiftui/how-to-let-users-customize-toolbar-buttons">How to let users customize toolbar buttons</a></li><li><a href="/quick-start/swiftui/how-to-create-a-toolbar-and-add-buttons-to-it">How to create a toolbar and add buttons to it</a></li><li><a href="/example-code/uikit/how-to-show-and-hide-a-toolbar-inside-a-uinavigationcontroller">How to show and hide a toolbar inside a UINavigationController</a></li><li><a href="/quick-start/swiftui/how-to-add-keyboard-shortcuts-using-keyboardshortcut">How to add keyboard shortcuts using keyboardShortcut()</a></li></ul>
-->

:::

---

<TagLinks />