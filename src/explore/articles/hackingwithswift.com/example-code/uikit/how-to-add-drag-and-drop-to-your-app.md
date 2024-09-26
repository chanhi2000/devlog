---
lang: ko-KR
title: "How to add drag and drop to your app"
description: "Article(s) > How to add drag and drop to your app"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to add drag and drop to your app"
    - property: og:description
      content: "How to add drag and drop to your app"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-drag-and-drop-to-your-app.html
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
  "title": "How to add drag and drop to your app | UIKit - free Swift example code",
  "desc": "How to add drag and drop to your app",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-drag-and-drop-to-your-app",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
<p>Drag and drop is a feature that’s hugely useful, so don’t be surprised if your users email you asking for it to be added. Even though both <code>UITableView</code> and <code>UICollectionView</code> both have support for drag and drop, it still takes a fair amount of work to set up.</p>
<p>To try it out now, create a new Single View App template in Xcode, then open ViewController.swift for editing. We need to put two table views in there, both filled with example data. </p>
<p>This code will:</p>
<ul>
<li>Create two table views, and create two string array filled with "Left" and "Right".</li>
<li>Configure both table views to use the view controller as their data source, give them hard-coded frames, register a re-use cell, then add them to the view.</li>
<li>Implement <code>numberOfRowsInSection</code> so that each table view has the correct number of items based on its string array.</li>
<li>Implement <code>cellForRowAt</code> to dequeue and cell then show the correct item from one of the two string arrays depending on which table this is.</li>
</ul>
<p>This is all code from before iOS 11, so it should be nothing new to you. Replace the content of ViewController.swift with this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">UIKit</span>

<span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">UITableViewDataSource</span><span class="token punctuation">,</span> <span class="token class-name">UITableViewDelegate</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> leftTableView <span class="token operator">=</span> <span class="token class-name">UITableView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> rightTableView <span class="token operator">=</span> <span class="token class-name">UITableView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> leftItems <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span>repeating<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Left"</span></span><span class="token punctuation">,</span> count<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> rightItems <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span>repeating<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Right"</span></span><span class="token punctuation">,</span> count<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        leftTableView<span class="token punctuation">.</span>dataSource <span class="token operator">=</span> <span class="token keyword">self</span>
        rightTableView<span class="token punctuation">.</span>dataSource <span class="token operator">=</span> <span class="token keyword">self</span>

        leftTableView<span class="token punctuation">.</span>frame <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">)</span>
        rightTableView<span class="token punctuation">.</span>frame <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">)</span>

        leftTableView<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">UITableViewCell</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> forCellReuseIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">)</span>
        rightTableView<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">UITableViewCell</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> forCellReuseIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">)</span>

        view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>leftTableView<span class="token punctuation">)</span>
        view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>rightTableView<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> numberOfRowsInSection section<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> tableView <span class="token operator">==</span> leftTableView <span class="token punctuation">{</span>
            <span class="token keyword">return</span> leftItems<span class="token punctuation">.</span>count
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> rightItems<span class="token punctuation">.</span>count
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> cellForRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UITableViewCell</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> cell <span class="token operator">=</span> tableView<span class="token punctuation">.</span><span class="token function">dequeueReusableCell</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> indexPath<span class="token punctuation">)</span>

        <span class="token keyword">if</span> tableView <span class="token operator">==</span> leftTableView <span class="token punctuation">{</span>
            cell<span class="token punctuation">.</span>textLabel<span class="token operator">?</span><span class="token punctuation">.</span>text <span class="token operator">=</span> leftItems<span class="token punctuation">[</span>indexPath<span class="token punctuation">.</span>row<span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cell<span class="token punctuation">.</span>textLabel<span class="token operator">?</span><span class="token punctuation">.</span>text <span class="token operator">=</span> rightItems<span class="token punctuation">[</span>indexPath<span class="token punctuation">.</span>row<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> cell
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>If you run the app you'll see it gives us two side-by-side table views filled with items. We’re going to modify that so the user can grab an item from one table and copy it into the other, in either direction.</p>
<p>The first step is to tell both table views to use the current view controller as their drag and drop delegate, then enable drag interaction on both of them. Add this code to <code>viewDidLoad()</code>:</p>
<pre class=" language-swift"><code class=" language-swift">leftTableView<span class="token punctuation">.</span>dragDelegate <span class="token operator">=</span> <span class="token keyword">self</span>
leftTableView<span class="token punctuation">.</span>dropDelegate <span class="token operator">=</span> <span class="token keyword">self</span>
rightTableView<span class="token punctuation">.</span>dragDelegate <span class="token operator">=</span> <span class="token keyword">self</span>
rightTableView<span class="token punctuation">.</span>dropDelegate <span class="token operator">=</span> <span class="token keyword">self</span>

leftTableView<span class="token punctuation">.</span>dragInteractionEnabled <span class="token operator">=</span> <span class="token boolean">true</span>
rightTableView<span class="token punctuation">.</span>dragInteractionEnabled <span class="token operator">=</span> <span class="token boolean">true</span></code></pre>
<p>Xcode will throw up several warnings because our current view controller class doesn't conform to the <code>UITableViewDragDelegate</code> or <code>UITableViewDropDelegate</code> protocols. This can be fixed by adding those two protocols to our class – scroll up to the top and change the class definition to this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">UITableViewDataSource</span><span class="token punctuation">,</span> <span class="token class-name">UITableViewDelegate</span><span class="token punctuation">,</span> <span class="token class-name">UITableViewDragDelegate</span><span class="token punctuation">,</span> <span class="token class-name">UITableViewDropDelegate</span> <span class="token punctuation">{</span></code></pre>
<p>This in turn creates another problem: we're saying we conform to those two new protocols, but we aren't implementing their required methods. Xcode can automatically complete required methods for protocols – click the number "2" on the red highlighted line of code, and you should see a more detailed explanation appear. Click "Fix" to have Xcode insert the two missing methods for us – you should see this appear in your class:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> itemsForBeginning session<span class="token punctuation">:</span> <span class="token class-name">UIDragSession</span><span class="token punctuation">,</span> at indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">UIDragItem</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> performDropWith coordinator<span class="token punctuation">:</span> <span class="token class-name">UITableViewDropCoordinator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span></code></pre>
<p>The <code>itemsForBeginning</code> method is easiest, so let's start there. It gets called when the user has initiated a drag operation on a table view cell by holding down their finger, and needs to return an array of drag items. If you return an empty array, you're effectively declining drag and drop.</p>
<p>We're going to give this method four lines of code:</p>
<ol>
<li>Figure out which string is being copied. We can do that with a simple ternary: if the table view in question is the left table view then read from <code>leftItems</code>, otherwise read from <code>rightItems</code>.</li>
<li>Attempt to convert the string to a <code>Data</code> object so it can be passed around using drag and drop.</li>
<li>Place that data inside an <code>NSItemProvider</code>, marking it as containing a plain text string so other apps know what to do with it.</li>
<li>Finally, place that item provider inside a <code>UIDragItem</code> so that it can be used for drag and drop by UIKit.</li>
</ol>
<p>To mark the item data as being plain text we need to import the MobileCoreServices framework, so please add this line of code near the top of ViewController.swift:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">MobileCoreServices</span></code></pre>
<p>Now replace your itemsForBeginning method stub with this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> itemsForBeginning session<span class="token punctuation">:</span> <span class="token class-name">UIDragSession</span><span class="token punctuation">,</span> at indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">UIDragItem</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> string <span class="token operator">=</span> tableView <span class="token operator">==</span> leftTableView <span class="token operator">?</span> leftItems<span class="token punctuation">[</span>indexPath<span class="token punctuation">.</span>row<span class="token punctuation">]</span> <span class="token punctuation">:</span> rightItems<span class="token punctuation">[</span>indexPath<span class="token punctuation">.</span>row<span class="token punctuation">]</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> data <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>using<span class="token punctuation">:</span> <span class="token punctuation">.</span>utf8<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
    <span class="token keyword">let</span> itemProvider <span class="token operator">=</span> <span class="token class-name">NSItemProvider</span><span class="token punctuation">(</span>item<span class="token punctuation">:</span> data <span class="token keyword">as</span> <span class="token class-name">NSData</span><span class="token punctuation">,</span> typeIdentifier<span class="token punctuation">:</span> <span class="token constant">kUTTypePlainText</span> <span class="token keyword">as</span> <span class="token class-name">String</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token class-name">UIDragItem</span><span class="token punctuation">(</span>itemProvider<span class="token punctuation">:</span> itemProvider<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span></code></pre>
<p>Now we need to fill in <code>performDropWith</code>, which is tricky because there are two potential complexities.</p>
<p>First, we might be getting several strings at the same time if someone is dragging in lots of things, so we need to insert them all sensibly. Second, we might be told where the user wants to insert the rows, but we might not – they might just drag the strings onto some whitespace in the table, so we need to decide what that means for us.</p>
<p>To solve those two problems means writing more code than you may have expected, but I'll try to walk you through it step by step to make it a bit easier.</p>
<p>First, the easier part: figuring out where to drop rows. The <code>performDropWith</code> method passes us an object of the class <code>UITableViewDropCoordinator</code>, which has a <code>destinationIndexPath</code> property telling us where the user wants to drop the data. However, it's optional: it will be nil if they dragged their data over some empty cells in our table view, and if that happens we're going to assume they wanted to drop the data at the end of the table.</p>
<p>So, start by adding this code to the performDropWith method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> destinationIndexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span>

<span class="token keyword">if</span> <span class="token keyword">let</span> indexPath <span class="token operator">=</span> coordinator<span class="token punctuation">.</span>destinationIndexPath <span class="token punctuation">{</span>
    destinationIndexPath <span class="token operator">=</span> indexPath
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> section <span class="token operator">=</span> tableView<span class="token punctuation">.</span>numberOfSections <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">let</span> row <span class="token operator">=</span> tableView<span class="token punctuation">.</span><span class="token function">numberOfRows</span><span class="token punctuation">(</span>inSection<span class="token punctuation">:</span> section<span class="token punctuation">)</span>
    destinationIndexPath <span class="token operator">=</span> <span class="token class-name">IndexPath</span><span class="token punctuation">(</span>row<span class="token punctuation">:</span> row<span class="token punctuation">,</span> section<span class="token punctuation">:</span> section<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>As you can see, that either uses the coordinator's <code>destinationIndexPath</code> if it exists, or creates one by looking at the last row of the last section.</p>
<p>The next step is to ask the drop coordinator to load all the objects it has for a specific class, which in our case will be <code>NSString</code>. (No, regular <code>String</code> won’t work.)</p>
<p>We need to send this a closure of code to run when the items are ready, which is where the complexity starts: we need to insert them all one by one below the destination index path, modifying either the <code>leftItems</code> or <code>rightItems</code> arrays, before finally calling <code>insertRows()</code> on our table view to make them appear.</p>
<p>So, again: we've just written code to figure out the destination index path for a drop operation. But if we get multiple items then all we have is the initial destination index path – the path for the first item. The second item should be one row lower, the third item should be two rows lower, and so on. As we move down each item to copy, we're going to create a new index path and stash it away in an <code>indexPaths</code> array so we can call <code>insertRows()</code> on our table view all at once.</p>
<p>Add this code to your <code>performDropWith</code> method, below the previous code we just wrote:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// attempt to load strings from the drop coordinator</span>
coordinator<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">loadObjects</span><span class="token punctuation">(</span>ofClass<span class="token punctuation">:</span> <span class="token class-name">NSString</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> items <span class="token keyword">in</span>
    <span class="token comment">// convert the item provider array to a string array or bail out</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> strings <span class="token operator">=</span> items <span class="token keyword">as</span><span class="token operator">?</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token comment">// create an empty array to track rows we've copied</span>
    <span class="token keyword">var</span> indexPaths <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">IndexPath</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// loop over all the strings we received</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>index<span class="token punctuation">,</span> string<span class="token punctuation">)</span> <span class="token keyword">in</span> strings<span class="token punctuation">.</span><span class="token function">enumerated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// create an index path for this new row, moving it down depending on how many we've already inserted</span>
        <span class="token keyword">let</span> indexPath <span class="token operator">=</span> <span class="token class-name">IndexPath</span><span class="token punctuation">(</span>row<span class="token punctuation">:</span> destinationIndexPath<span class="token punctuation">.</span>row <span class="token operator">+</span> index<span class="token punctuation">,</span> section<span class="token punctuation">:</span> destinationIndexPath<span class="token punctuation">.</span>section<span class="token punctuation">)</span>

        <span class="token comment">// insert the copy into the correct array</span>
        <span class="token keyword">if</span> tableView <span class="token operator">==</span> <span class="token keyword">self</span><span class="token punctuation">.</span>leftTableView <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>leftItems<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> at<span class="token punctuation">:</span> indexPath<span class="token punctuation">.</span>row<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>rightItems<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> at<span class="token punctuation">:</span> indexPath<span class="token punctuation">.</span>row<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// keep track of this new row</span>
        indexPaths<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>indexPath<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// insert them all into the table view at once</span>
    tableView<span class="token punctuation">.</span><span class="token function">insertRows</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> indexPaths<span class="token punctuation">,</span> with<span class="token punctuation">:</span> <span class="token punctuation">.</span>automatic<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That's all the code complete – you should be able to run the app now and drag rows between the two table views to copy them. This code also automatically supports drag and drop from other apps, so you can try dragging things from external apps onto your table views.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-support-drag-and-drop-in-swiftui">How to support drag and drop in SwiftUI</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li></ul>
-->

:::

---

<TagLinks />