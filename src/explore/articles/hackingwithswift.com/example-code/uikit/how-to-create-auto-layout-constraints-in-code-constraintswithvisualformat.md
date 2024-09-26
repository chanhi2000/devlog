---
lang: ko-KR
title: "How to create Auto Layout constraints in code: constraints(withVisualFormat:)"
description: "Article(s) > How to create Auto Layout constraints in code: constraints(withVisualFormat:)"
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
      content: "Article(s) > How to create Auto Layout constraints in code: constraints(withVisualFormat:)"
    - property: og:description
      content: "How to create Auto Layout constraints in code: constraints(withVisualFormat:)"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-auto-layout-constraints-in-code-constraintswithvisualformat.html
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
  "title": "How to create Auto Layout constraints in code: constraints(withVisualFormat:) | UIKit - free Swift example code",
  "desc": "How to create Auto Layout constraints in code: constraints(withVisualFormat:)",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-auto-layout-constraints-in-code-constraintswithvisualformat",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!--
<p>While the complexities of Auto Layout make it something most people prefer to grapple with using Interface Builder, it does have some cool tricks up its sleeve if you prefer to work in code. One of those tricks is called Visual Format Language (VFL) and lets you use ASCII art to tell iOS how you want your views laid out.</p>
<p>First, here's a dummy test case you can copy and paste into your project. It creates five labels of different colors and adds them all to your view:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> label1 <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    label1<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
    label1<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red
    label1<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"THESE"</span></span>
    label1<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> label2 <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    label2<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
    label2<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>cyan
    label2<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"ARE"</span></span>
    label2<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> label3 <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    label3<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
    label3<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>yellow
    label3<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"SOME"</span></span>
    label3<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> label4 <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    label4<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
    label4<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>green
    label4<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"AWESOME"</span></span>
    label4<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> label5 <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    label5<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
    label5<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>orange
    label5<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"LABELS"</span></span>
    label5<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>label1<span class="token punctuation">)</span>
    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>label2<span class="token punctuation">)</span>
    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>label3<span class="token punctuation">)</span>
    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>label4<span class="token punctuation">)</span>
    view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>label5<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>If you run the project, you'll see the labels are all bunched up in the top-left corner, which doesn't look great. To fix this, we're going to use VFL to have each label occupy the full width of the screen, then spaced out so they are position below each other.</p>
<p>When you use VFL you need to create a dictionary of the views you want to work with. This dictionary needs to have the name of the view inside VFL and a reference to the view itself, but in practice most people just use the same name for VFL as the variable like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> viewsDictionary <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"label1"</span></span><span class="token punctuation">:</span> label1<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"label2"</span></span><span class="token punctuation">:</span> label2<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"label3"</span></span><span class="token punctuation">:</span> label3<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"label4"</span></span><span class="token punctuation">:</span> label4<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"label5"</span></span><span class="token punctuation">:</span> label5<span class="token punctuation">]</span></code></pre>
<p>Put that just below the final <code>addSubview()</code> call.</p>
<p>Now for the VFL itself: put this directly beneath the previous line in order to have every label stretch out to occupy the full width of the screen:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> label <span class="token keyword">in</span> viewsDictionary<span class="token punctuation">.</span>keys <span class="token punctuation">{</span>
    view<span class="token punctuation">.</span><span class="token function">addConstraints</span><span class="token punctuation">(</span><span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">constraints</span><span class="token punctuation">(</span>withVisualFormat<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"H:|[</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">label</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">]|"</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> views<span class="token punctuation">:</span> viewsDictionary<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Finally, add this to make the views lay themselves out below each other:</p>
<pre class=" language-swift"><code class=" language-swift">view<span class="token punctuation">.</span><span class="token function">addConstraints</span><span class="token punctuation">(</span><span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">constraints</span><span class="token punctuation">(</span>withVisualFormat<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"V:|[label1]-[label2]-[label3]-[label4]-[label5]"</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> views<span class="token punctuation">:</span> viewsDictionary<span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
<p>This is only the beginning of what VFL can do – you should definitely read my <a href="/read/6/overview">Auto Layout tutorial</a> for more details.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-activate-multiple-auto-layout-constraints-using-activate">How to activate multiple Auto Layout constraints using activate()</a></li><li><a href="/example-code/uikit/how-to-identify-your-auto-layout-constraints">How to identify your Auto Layout constraints</a></li><li><a href="/example-code/uikit/how-to-stop-auto-layout-and-autoresizing-masks-conflicting-translatesautoresizingmaskintoconstraints">How to stop Auto Layout and autoresizing masks conflicting: translatesAutoresizingMaskIntoConstraints</a></li><li><a href="/example-code/uikit/how-to-fix-auto-layout-problems">How to fix Auto Layout problems</a></li><li><a href="/example-code/uikit/how-to-position-a-view-using-auto-layout-anchors">How to position a view using Auto Layout anchors</a></li></ul>
-->

:::

---

<TagLinks />