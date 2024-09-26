---
lang: ko-KR
title: "Fixing ”Unable to dequeue a cell with identifier”"
description: "Article(s) > Fixing ”Unable to dequeue a cell with identifier”"
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
  - ios-6.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Fixing ”Unable to dequeue a cell with identifier”"
    - property: og:description
      content: "Fixing ”Unable to dequeue a cell with identifier”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier.html
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
  "title": "Fixing ”Unable to dequeue a cell with identifier” | UIKit - free Swift example code",
  "desc": "Fixing ”Unable to dequeue a cell with identifier”",
  "link": "https://hackingwithswift.com/example-code/uikit/fixing-unable-to-dequeue-a-cell-with-identifier",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
<p>This error usually means there's a problem with your cell prototypes. There are two main reasons why table views fail to return cells, but they give different error messages. If you get an error like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">Terminating</span> app due to uncaught exception '<span class="token class-name">NSInternalInconsistencyException</span>'<span class="token punctuation">,</span> reason<span class="token punctuation">:</span> 'unable to dequeue a cell with identifier <span class="token class-name">Cell</span> <span class="token operator">-</span> must register a nib or a <span class="token keyword">class</span> <span class="token keyword">for</span> the identifier or connect a prototype cell <span class="token keyword">in</span> a storyboard'</code></pre>
<p>…it means that your call to <code>dequeueReusableCell(withIdentifier:)</code> is failing, which is usually caused by having no prototype cells with the identifier you requested.</p>
<p>First: check that you have a prototype cell registered. By default you should have one in the storyboard, but if you created your own table view then you might have moved things around. You might also have registered one in code.</p>
<p>Second: check that your spelling of the identified is correct. It's "Cell" by default, in the code and in the storyboard, and these two things need to match in order for everything to work.</p>
<p>You can verify the error by placing a breakpoint in your <code>cellForRowAtIndexPath</code> method. For example, if you have code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> cellForRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UITableViewCell</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cell <span class="token operator">=</span> tableView<span class="token punctuation">.</span><span class="token function">dequeueReusableCell</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token keyword">let</span> object <span class="token operator">=</span> objects<span class="token punctuation">[</span>indexPath<span class="token punctuation">.</span>row<span class="token punctuation">]</span>
    cell<span class="token punctuation">.</span>textLabel<span class="token operator">?</span><span class="token punctuation">.</span>text <span class="token operator">=</span> object
    <span class="token keyword">return</span> cell
<span class="token punctuation">}</span></code></pre>
<p>…then you should set the breakpoint on the <code>let object =</code> line. If the problem is that <code>tableView.dequeueReusableCell(withIdentifier:)</code> is failing, your breakpoint won't be hit.</p>
<p>If you're using modern Xcode templates where you get a prototype cell made for you, you should probably be using this instead:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> cell <span class="token operator">=</span> tableView<span class="token punctuation">.</span><span class="token function">dequeueReusableCell</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> indexPath<span class="token punctuation">)</span></code></pre>
<p>You should then ensure a prototype cell exists in your tableview with that identifier – double check the name, and make sure you've typed it into the "Identifier" box and not "Class" or something else.</p>
<p>If you aren't using an Xcode template, use that line of code anyway then register your own re-use identifier like this:</p>
<pre class=" language-swift"><code class=" language-swift">tableView<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">UITableViewCell</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> forCellReuseIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource">Fixing "Failed to obtain a cell from its DataSource"</a></li><li><a href="/example-code/language/fixing-class-viewcontroller-has-no-initializers">Fixing "Class ViewController has no initializers"</a></li><li><a href="/example-code/language/fixing-ambiguous-reference-to-member-when-using-ceil-or-round">Fixing "Ambiguous reference to member when using ceil or round"</a></li></ul>
-->

:::

---

<TagLinks />