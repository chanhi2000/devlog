---
lang: ko-KR
title: "How do you show a modal view controller when a UITabBarController tab is tapped?"
description: "Article(s) > How do you show a modal view controller when a UITabBarController tab is tapped?"
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
      content: "Article(s) > How do you show a modal view controller when a UITabBarController tab is tapped?"
    - property: og:description
      content: "How do you show a modal view controller when a UITabBarController tab is tapped?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-do-you-show-a-modal-view-controller-when-a-uitabbarcontroller-tab-is-tapped.html
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
  "title": "How do you show a modal view controller when a UITabBarController tab is tapped? | UIKit - free Swift example code",
  "desc": "How do you show a modal view controller when a UITabBarController tab is tapped?",
  "link": "https://hackingwithswift.com/example-code/uikit/how-do-you-show-a-modal-view-controller-when-a-uitabbarcontroller-tab-is-tapped",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>Usually tapping a tab in a <code>UITabBar</code> shows that tab, but it's often the case that you want to override that behavior, for example to show a view modally. If you're using one of Xcode's built-in storyboard templates for creating your user interface, it's not immediately obvious how to do this, but fortunately it's not so hard using the approach below.</p>
<p>First, find the <code>viewDidLoad()</code> method for your initial view controller – whichever one is shown first in your app. Now add this code to it:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">self</span><span class="token punctuation">.</span>tabBarController<span class="token operator">?</span><span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token class-name">UIApplication</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span>delegate <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">UITabBarControllerDelegate</span></code></pre>
<p>That sets up your application delegate (in AppDelegate.swift) to handle events from the tab bar controller. This line uses optionals safely, so it will do nothing if you change your app structure later.</p>
<p>Now open AppDelegate.swift, and add <code>UITabBarControllerDelegate</code> to the list of protocols your app delegate conforms to, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">AppDelegate</span><span class="token punctuation">:</span> <span class="token class-name">UIResponder</span><span class="token punctuation">,</span> <span class="token class-name">UIApplicationDelegate</span><span class="token punctuation">,</span> <span class="token class-name">UITabBarControllerDelegate</span> <span class="token punctuation">{</span></code></pre>
<p>Finally, you should implement the <code>shouldSelect</code> method on your app delegate, which must return true or false depending on whether you want the regular tab behavior (return true) or your own (return false).</p>
<p>In the example below, I want the regular view controller behavior for all tabs unless the user is trying to show one with the class <code>YourViewController</code>. When that happens, I'll create a new view controller and show it modally instead:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">tabBarController</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tabBarController<span class="token punctuation">:</span> <span class="token class-name">UITabBarController</span><span class="token punctuation">,</span> shouldSelect viewController<span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> viewController <span class="token keyword">is</span> <span class="token class-name">YourViewController</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> newVC <span class="token operator">=</span> tabBarController<span class="token punctuation">.</span>storyboard<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">instantiateViewController</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"YourVCStoryboardIdentifier"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tabBarController<span class="token punctuation">.</span><span class="token function">present</span><span class="token punctuation">(</span>newVC<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span></code></pre>
<p>There are two things to note about that code. First, you'll need to give your view controller a storyboard identifier so that <code>instantiateViewController(withIdentifier:)</code> will work. Second, this won't have any extra performance impact on your code –&nbsp;the view that would have been shown wasn't created yet, so creating a new one here won't be duplicating any work.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/quick-start/swiftui/how-to-embed-views-in-a-tab-bar-using-tabview">How to embed views in a tab bar using TabView</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li></ul>
-->

:::

---

<TagLinks />