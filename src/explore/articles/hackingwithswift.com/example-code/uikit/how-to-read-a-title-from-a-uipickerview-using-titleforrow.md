---
lang: ko-KR
title: "How to read a title from a UIPickerView using titleForRow"
description: "Article(s) > How to read a title from a UIPickerView using titleForRow"
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
      content: "Article(s) > How to read a title from a UIPickerView using titleForRow"
    - property: og:description
      content: "How to read a title from a UIPickerView using titleForRow"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-read-a-title-from-a-uipickerview-using-titleforrow.html
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
  "title": "How to read a title from a UIPickerView using titleForRow | UIKit - free Swift example code",
  "desc": "How to read a title from a UIPickerView using titleForRow",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-read-a-title-from-a-uipickerview-using-titleforrow",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>As soon as you start using <code>UIPickerView</code> for the first time, you realize it doesn't have a built-in way to read the title of any of its items. The reason for this is obvious in retrospect, but don't worry if you didn't get it at first: you should read the title straight from the picker's data source.</p>
<p>You should already have conformed to the <code>UIPickerViewDataSource</code> and <code>UIPickerViewDelegate</code> protocols, which means implementing the <code>titleForRow</code> picker view method. If you want to read the title of the selected item later, you can do one of the following:</p>
<ul>
<li>Read straight from the array you used to populate the picker view. This is the most common method, but of course it only works if the data is simple.</li>
<li>Write a new method named something like <code>titleForPickerRow()</code> that you can use in your data source and to read the title later. This is preferred if it takes some work to calculate row titles, but really it's better to cache this kind of thing if the work is non-trivial.</li>
<li>Use the same method call as the picker view: <code>pickerView(_:titleForRow:forComponent:)</code>. Yes, that just calls the method you implemented, but it's neat and self-describing so as long as your data doesn't take time to calculate this is fine to use.</li>
</ul>
<p>If you want to try the last option, here's some example code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> title <span class="token operator">=</span> <span class="token function">pickerView</span><span class="token punctuation">(</span>yourPickerView<span class="token punctuation">,</span> titleForRow<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> forComponent<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-use-uipickerview">How to use UIPickerView</a></li><li><a href="/quick-start/swiftui/how-to-let-users-edit-your-navigation-title">How to let users edit your navigation title</a></li><li><a href="/example-code/uikit/how-to-style-the-font-in-a-uinavigationbars-title">How to style the font in a UINavigationBar's title</a></li><li><a href="/example-code/uikit/how-to-set-a-custom-title-view-in-a-uinavigationbar">How to set a custom title view in a UINavigationBar</a></li><li><a href="/example-code/location/how-to-read-the-users-location-while-your-app-is-in-the-background">How to read the user’s location while your app is in the background</a></li></ul>
-->

:::

---

<TagLinks />