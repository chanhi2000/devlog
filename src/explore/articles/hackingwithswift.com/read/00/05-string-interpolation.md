---
lang: ko-KR
title: "String Interpolation"
description: "Article(s) > String Interpolation"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - appstore
  - ios  
head:
  - - meta:
    - property: og:title
      content: "Article(s) > String Interpolation"
    - property: og:description
      content: "String Interpolation"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/read/00/05-string-interpolation.html
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/read/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "String Interpolation | Hacking with iOS",
  "desc": "String Interpolation",
  "link": "https://hackingwithswift.com/read/0/5/string-interpolation",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<VidStack src="youtube/3-I43GvrzsA" />

This is a fancy name for what is actually a very simple thing: combining variables and constants inside a string.

Clear out all the code you just wrote and leave only this:

<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Tim McGraw"</span></span></code></pre>
If we wanted to print out a message to the user that included their name, string interpolation is what makes that easy: you just write a backslash, then an open parenthesis, then your code, then a close parenthesis, like this:

<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Tim McGraw"</span></span>
<span class="token string-literal"><span class="token string">"Your name is </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span></code></pre>
<p class="text-center"><img class="hws" style="margin-top: 0; margin-bottom: 20px;" src="/img/books/hws/string-interpolation-1.png" srcset="/img/books/hws/string-interpolation-1@2x.png 2x" alt="Adding a name to a String using interpolation." loading="lazy">

The results pane will now show "Your name is Tim McGraw" all as one string, because string interpolation combined the two for us.

Now, we could have written that using the <code>+</code> operator, like this:

<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Tim McGraw"</span></span>
<span class="token string-literal"><span class="token string">"Your name is "</span></span> <span class="token operator">+</span> name</code></pre>
<p class="text-center"><img class="hws" style="margin-top: 0; margin-bottom: 20px;" src="/img/books/hws/string-interpolation-2.png" srcset="/img/books/hws/string-interpolation-2@2x.png 2x" alt="Adding a name to a String using the plus operator." loading="lazy">

…but that's not as efficient, particularly if you're combining multiple variables together. In addition, string interpolation in Swift is smart enough to be able to handle a variety of different data types automatically. For example:

<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Tim McGraw"</span></span>
<span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">25</span>
<span class="token keyword">var</span> latitude <span class="token operator">=</span> <span class="token number">36.166667</span>

<span class="token string-literal"><span class="token string">"Your name is </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">, your age is </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">age</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">, and your latitude is </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">latitude</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span></code></pre>
<p class="text-center"><img class="hws" style="margin-top: 0; margin-bottom: 20px;" src="/img/books/hws/string-interpolation-3.png" srcset="/img/books/hws/string-interpolation-3@2x.png 2x" alt="Interpolating a String, Int, and Double." loading="lazy">

Doing that using <code>+</code> is much more difficult, because Swift doesn't let you add integers and doubles to a string.

At this point your result may no longer fit in the results pane, so either resize your window or hover over the result and click the + button that appears to have it shown inline.

One of the powerful features of string interpolation is that everything between <code>\(</code> and <code>)</code> can actually be a full Swift expression. For example, you can do mathematics in there using operators, like this:

<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">25</span>
<span class="token string-literal"><span class="token string">"You are </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">age</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> years old. In another </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">age</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> years you will be </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">age <span class="token operator">*</span> <span class="token number">2</span></span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">."</span></span></code></pre>
<p class="text-center"><img class="hws" style="margin-top: 0; margin-bottom: 20px;" src="/img/books/hws/string-interpolation-4.png" srcset="/img/books/hws/string-interpolation-4@2x.png 2x" alt="Interpolating a mathematical expression." loading="lazy">

---

<TagLinks />