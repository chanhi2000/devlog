---
lang: ko-KR
title: "How to make empty UITableViews look more attractive using DZNEmptyDataSet"
description: "Article(s) > How to make empty UITableViews look more attractive using DZNEmptyDataSet"
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
      content: "Article(s) > How to make empty UITableViews look more attractive using DZNEmptyDataSet"
    - property: og:description
      content: "How to make empty UITableViews look more attractive using DZNEmptyDataSet"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Libraries - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/libraries/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to make empty UITableViews look more attractive using DZNEmptyDataSet | Libraries - free Swift example code",
  "desc": "How to make empty UITableViews look more attractive using DZNEmptyDataSet",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>If you use table views or collection views and you want to take one simple step to make your app both more attractive and more user-friendly, let me tell you what the pros do: we use <code>DZNEmptyDataSet</code>. This simple, free, open source library is designed to handle the case when your data source is empty by showing some prompt text, and optionally also a button or an image.</p>
<p>What I love about this library is that it's so astonishingly simple, and it even uses <code>NSAttributedString</code> so you can provide custom formatting.</p>
<p>First things first: <a href="https://github.com/dzenbot/DZNEmptyDataSet">go here and click Download Zip</a> to get the source code to <code>DZNEmptyDataSet</code>. Now unzip it, then look inside its Source folder for two files: <strong>UIScrollView+EmptyDataSet.h</strong> and <strong>UIScrollView+EmptyDataSet.m</strong>.</p>
<p>Drag these into your Xcode project, and Xcode should prompt you with the message "Would you like to configure an Objective-C bridging header?" Click "Creating Bridging Header" and you'll see a file called <strong>YourProjectName-Bridging-Header.h</strong> appear in your project. Open that file for editing in Xcode and give it this text:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token other-directive property">#import</span> <span class="token string-literal"><span class="token string">"UIScrollView+EmptyDataSet.h"</span></span></code></pre>
<p>This is required because <code>DZNEmptyDataSet</code> is written in Objective-C, so these steps are required to make it available to use in Swift.</p>
<p>Next, tell Swift that your current table view controller (or collection view controller) conforms to the <code>DZNEmptyDataSetSource</code> and <code>DZNEmptyDataSetDelegate</code> protocols like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UITableViewController</span><span class="token punctuation">,</span> <span class="token class-name">DZNEmptyDataSetSource</span><span class="token punctuation">,</span> <span class="token class-name">DZNEmptyDataSetDelegate</span> <span class="token punctuation">{</span>
    <span class="token comment">// your view controller here</span>
<span class="token punctuation">}</span></code></pre>
<p>You then need to add these three lines of code to your <code>viewDidLoad()</code> method:</p>
<pre class=" language-swift"><code class=" language-swift">tableView<span class="token punctuation">.</span>emptyDataSetSource <span class="token operator">=</span> <span class="token keyword">self</span>
tableView<span class="token punctuation">.</span>emptyDataSetDelegate <span class="token operator">=</span> <span class="token keyword">self</span>
tableView<span class="token punctuation">.</span>tableFooterView <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>The first two lines set your code up ready to provide various <code>DZNEmptyDataSet</code> elements; the third one is just there to make your interface cleaner.</p>
<p>One of the great things about <code>DZNEmptyDataSet</code> is that you only need to provide what you want. This means you can provide just a heading, or perhaps a heading and an image, or a heading, a description, an image and even a button. Even better, the button is made for you: all you need to do is tell <code>DZNEmptyDataSet</code> what its title should be.</p>
<p>The example code below sets up a title, a description, an image and a button, and even provides a response to the button being tapped. Remember: you don't need all these, just the ones you want to use in your app.</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">title</span><span class="token punctuation">(</span>forEmptyDataSet scrollView<span class="token punctuation">:</span> <span class="token class-name">UIScrollView</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">NSAttributedString</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Welcome"</span></span>
    <span class="token keyword">let</span> attrs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">.</span>font<span class="token punctuation">:</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">preferredFont</span><span class="token punctuation">(</span>forTextStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>headline<span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> str<span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> attrs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">description</span><span class="token punctuation">(</span>forEmptyDataSet scrollView<span class="token punctuation">:</span> <span class="token class-name">UIScrollView</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">NSAttributedString</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Tap the button below to add your first grokkleglob."</span></span>
    <span class="token keyword">let</span> attrs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">.</span>font<span class="token punctuation">:</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">preferredFont</span><span class="token punctuation">(</span>forTextStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> str<span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> attrs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">image</span><span class="token punctuation">(</span>forEmptyDataSet scrollView<span class="token punctuation">:</span> <span class="token class-name">UIScrollView</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UIImage</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"taylor-swift"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">buttonTitle</span><span class="token punctuation">(</span>forEmptyDataSet scrollView<span class="token punctuation">:</span> <span class="token class-name">UIScrollView</span><span class="token punctuation">,</span> <span class="token keyword">for</span> state<span class="token punctuation">:</span> <span class="token class-name">UIControlState</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">NSAttributedString</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Add Grokkleglob"</span></span>
    <span class="token keyword">let</span> attrs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">.</span>font<span class="token punctuation">:</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">preferredFont</span><span class="token punctuation">(</span>forTextStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>callout<span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> str<span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> attrs<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">emptyDataSet</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> scrollView<span class="token punctuation">:</span> <span class="token class-name">UIScrollView</span><span class="token punctuation">,</span> didTap button<span class="token punctuation">:</span> <span class="token class-name">UIButton</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token class-name">UIAlertController</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Button tapped!"</span></span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> preferredStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>alert<span class="token punctuation">)</span>
    ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Hurray"</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/libraries/how-to-preview-files-using-quick-look-and-qlpreviewcontroller">How to preview files using Quick Look and QLPreviewController</a></li><li><a href="/example-code/uikit/how-to-stop-empty-row-separators-appearing-in-uitableview">How to stop empty row separators appearing in UITableView</a></li><li><a href="/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest">How to look up a location with MKLocalSearch.Request</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/language/how-to-create-quick-look-debug-previews-for-your-custom-types">How to create Quick Look debug previews for your custom types</a></li></ul>
-->

:::

---

<TagLinks />