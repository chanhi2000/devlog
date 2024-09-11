---
lang: ko-KR
title: "How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access”"
description: "Article(s) > How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access”"
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
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access”"
    - property: og:description
      content: "How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/xcode/how-to-fix-the-error-view-controller-is-unreachable-because-it-has-no-entry-points-and-no-identifier-for-runtime-access.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Xcode - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/xcode/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access” | Xcode - free Swift example code",
  "desc": "How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access”",
  "link": "https://hackingwithswift.com/example-code/xcode/how-to-fix-the-error-view-controller-is-unreachable-because-it-has-no-entry-points-and-no-identifier-for-runtime-access",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<!-- TODO: 작성 -->

<!-- 
<p>All view controllers must be accessible somehow, and any that aren’t will cause Xcode to throw up a warning: “View Controller is unreachable because it has no entry points, and no identifier for runtime access.” There are three ways you can fix this:</p>
<ol>
<li>Make the view controller your initial view controller so that it’s loaded immediately. To do that, select it, go to the attributes inspector, then check the box marked Is Initial View Controller.</li>
<li>Give it a storyboard identifier so that it can be loaded in code. To do that, select it, go to the identity inspector, then enter a name next to Storyboard ID.</li>
<li>Create a segue from an existing view controller. This might be a button click or a table cell selection for example. To do that, select the component that should trigger the segue, then Ctrl-drag from there to the disconnected view controller.</li>
</ol>
<p>Once all view controllers have a way of accessing them the warning should disappear.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-fix-the-error-protocol-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix the error “protocol can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/quick-start/swiftui/how-to-fix-protocol-view-can-only-be-used-as-a-generic-constraint-because-it-has-self-or-associated-type-requirements">How to fix “Protocol 'View' can only be used as a generic constraint because it has Self or associated type requirements”</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li></ul>
-->

:::

---

<TagLinks />