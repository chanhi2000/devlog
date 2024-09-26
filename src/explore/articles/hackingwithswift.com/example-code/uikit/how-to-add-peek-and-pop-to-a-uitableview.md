---
lang: ko-KR
title: "How to add peek and pop to a UITableView"
description: "Article(s) > How to add peek and pop to a UITableView"
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
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to add peek and pop to a UITableView"
    - property: og:description
      content: "How to add peek and pop to a UITableView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-peek-and-pop-to-a-uitableview.html
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
  "title": "How to add peek and pop to a UITableView | UIKit - free Swift example code",
  "desc": "How to add peek and pop to a UITableView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-peek-and-pop-to-a-uitableview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!--
<p>Peek and pop are features of 3D Touch that let users press hard on something to show more information. It’s surprisingly easy to add when working with table view cells and collection view cells, and downright trivial if you use storyboards and segues.</p>
<p>First, the trivial case: if you’re using storyboards and segues, Xcode can do all the work for you. If you want to see how easy it is, create a new iOS app using the Master-Detail project template, then open Main.storyboard. Find the Show Detail segue that moves from the table view to the detail view, then check the box marked “Preview &amp; Commit Segues” in the attributes inspector.</p>
<p>That’s it: iOS will automatically make peek and pop code for that segue –&nbsp;you can press hard on a table view cell to bring up the detail controller as a preview, then press harder to make it full screen. (Note: if you’re using the simulator this isn’t easy to do –&nbsp;try using a real device!)</p>
<p>If you’re <em>not</em> using segues you need to write some code yourself. First, make your view controller conform to <code>UIViewControllerPreviewingDelegate</code> so that you’re able to respond to previewing requests correctly. Second, you need to tell the system we want to support previewing by calling <code>registerForPreviewing()</code> in your <code>viewDidLoad()</code> method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">registerForPreviewing</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> sourceView<span class="token punctuation">:</span> yourTableView<span class="token punctuation">)</span></code></pre>
<p>That tells iOS that the view controller is able to respond to previewing requests for your table view.</p>
<p>There are two methods you need to fill in for the <code>UIViewControllerPreviewingDelegate</code> protocol: which view controller should be shown when the user presses at a certain location, and when the user presses harder how do you want to present it.</p>
<p>For many apps the code to create a previewing detail controller will be the same code to create a regular detail view controller, so it’s a good idea to create a method to instantiate a detail view controller and configure it as needed.</p>
<p>For example, you might have something like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">detailViewController</span><span class="token punctuation">(</span><span class="token keyword">for</span> index<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">DetailViewController</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> vc <span class="token operator">=</span> storyboard<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">instantiateViewController</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Detail"</span></span><span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">DetailViewController</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Couldn't load detail view controller"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    vc<span class="token punctuation">.</span>selectedItem <span class="token operator">=</span> index
    <span class="token keyword">return</span> vc
<span class="token punctuation">}</span></code></pre>
<p>You would then have something like this inside your <code>didSelectRowAt</code> method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> didSelectRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> vc <span class="token operator">=</span> <span class="token function">detailViewController</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> indexPath<span class="token punctuation">.</span>row<span class="token punctuation">)</span>
    navigationController<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">pushViewController</span><span class="token punctuation">(</span>vc<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Now for the important part: filling in the peek and pop methods.</p>
<p>You need to write a <code>viewControllerForLocation</code> method, which gets called with whatever location on the screen the user touched. You can pass that straight to the table view to ask it what row is at that location, then tell the previewing context to use that row as its source rect –&nbsp;iOS will cause that row to zoom up while the others get blurred. Finally you can return the correct view controller, but if no cell was tapped you need to return <code>nil</code> instead so that no 3D Touch effect happens.</p>
<p>Here’s how that looks in code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">previewingContext</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> previewingContext<span class="token punctuation">:</span> <span class="token class-name">UIViewControllerPreviewing</span><span class="token punctuation">,</span> viewControllerForLocation location<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UIViewController</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> indexPath <span class="token operator">=</span> yourTableView<span class="token punctuation">.</span><span class="token function">indexPathForRow</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> location<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previewingContext<span class="token punctuation">.</span>sourceRect <span class="token operator">=</span> yourTableView<span class="token punctuation">.</span><span class="token function">rectForRow</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> indexPath<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token function">detailViewController</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> indexPath<span class="token punctuation">.</span>row<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token nil constant">nil</span>
<span class="token punctuation">}</span></code></pre>
<p>As for the pop effect, that’s just one line of code inside a <code>commit</code> method. You’ll be given the view controller that’s currently being peeked, so your method just needs to decide how to present it. For example, if you’re using a navigation controller you probably want to call <code>pushViewController()</code> here –&nbsp;iOS will automatically convert that into a pop zoom animation with bounce effect, but the end result will be a pushed view controller so you can go back like normal.</p>
<p>Here’s that in Swift:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">previewingContext</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> previewingContext<span class="token punctuation">:</span> <span class="token class-name">UIViewControllerPreviewing</span><span class="token punctuation">,</span> commit viewControllerToCommit<span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    navigationController<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">pushViewController</span><span class="token punctuation">(</span>viewControllerToCommit<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That’s all the code –&nbsp;it’s not really that hard to do, and UIKit makes the result look great.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li></ul>
-->

:::

---

<TagLinks />