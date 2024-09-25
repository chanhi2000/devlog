---
lang: ko-KR
title: "How to Create a Reusable Modal Component in React"
description: "Article(s) > How to Create a Reusable Modal Component in React"
icon: fa-brands fa-react
category: 
  - Node.js
  - React.js
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - node
  - nodejs
  - node-js
  - react
  - reactjs
  - react-js
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to Create a Reusable Modal Component in React"
    - property: og:description
      content: "How to Create a Reusable Modal Component in React"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/create-react-reusable-modal-component.html
prev: /programming/js-react/articles/README.md
date: 2024-09-24
isOriginal: false
author: Grant Riordan
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1727021808508/312a7af2-5049-4093-9f58-5ef277986598.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "React.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-react/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="How to Create a Reusable Modal Component in React"
  desc="When using React, we strive to create reusable components as much as we can to limit the number of components and repetition. This keeps your code “DRY”. DRY is a concept you may have come across—it means “Don’t Repeat Yourself”. DRY is a coding prin..."
  url="https://freecodecamp.org/news/create-react-reusable-modal-component/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1727021808508/312a7af2-5049-4093-9f58-5ef277986598.png"/>

<!-- TODO: 작성 -->

<!-- 
<p>When using React, we strive to create reusable components as much as we can to limit the number of components and repetition. This keeps your code “DRY”.</p>
<p>DRY is a concept you may have come across—it means “Don’t Repeat Yourself”. DRY is a coding principle that encourages you to minimize code duplication by using abstractions like functions or modules.</p>
<p>It's important because it reduces redundancy, makes code easier to maintain, improves readability, and decreases the risk of errors during updates.</p>
<h2 id="heading-what-will-this-article-cover">What Will This Article Cover?</h2>
<p>In this article, you’ll learn:</p>
<ul>
<li><p>How to build a modal using React and CSS.</p>
</li>
<li><p>How to ensure that the modal can be reused in multiple scenarios, content and styling.</p>
</li>
<li><p>How to integrate state and callback functions into the modal.</p>
</li>
</ul>
<h2 id="heading-table-of-contents">Table of Contents</h2>
<ul>
<li><p><a class="post-section-overview" href="#heading-what-will-this-article-cover">What Will This Article Cover?</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-the-core-modal-component">The Core Modal Component</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-props-interface">Props Interface</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-the-markup">The Markup</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-react-useeffect">React useEffect</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-when-do-we-use-useeffect">When Do We Use useEffect?</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-use-the-reusable-modal">How to Use the Reusable Modal</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-additional-improvements">Additional Improvements</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-conclusion">Conclusion</a></p>
</li>
</ul>
<h2 id="heading-the-core-modal-component">The Core Modal Component</h2>
<p>In this section, we'll use React to build a component library. There are multiple patterns that you can follow to do this, but one of my favorite is the atomic design pattern.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>useEffect<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./Modal.css'</span>

<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
    open<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    cancelFn<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    primaryFn<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    closeIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    content<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
    titleContent<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
    className<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Modal<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>open<span class="token punctuation">,</span> cancelFn<span class="token punctuation">,</span> primaryFn<span class="token punctuation">,</span> closeIcon<span class="token punctuation">,</span> titleContent<span class="token punctuation">,</span> content<span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

    <span class="token comment">// simple useEffect to capture ESC key to close the modal </span>
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token function-variable function">handleKeyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> KeyboardEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">'Escape'</span> <span class="token operator">&amp;&amp;</span> open<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cancelFn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">cancelFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'keydown'</span><span class="token punctuation">,</span> handleKeyDown<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'keydown'</span><span class="token punctuation">,</span> handleKeyDown<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>open<span class="token punctuation">,</span> cancelFn<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>open<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"modalBackground"</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"modalContainer"</span><span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>titleContent <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">&gt;</span>
                        <span class="token punctuation">{</span>titleContent<span class="token punctuation">}</span>
                        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"titleCloseBtn"</span><span class="token operator">&gt;</span>
                            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>cancelFn<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>closeIcon <span class="token operator">??</span> <span class="token string">'X'</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                <span class="token punctuation">)</span><span class="token punctuation">}</span>

                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">&gt;</span>
                    <span class="token punctuation">{</span>content<span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"footer"</span><span class="token operator">&gt;</span>
                    <span class="token punctuation">{</span>secondaryFn <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>secondaryFn<span class="token punctuation">}</span> id<span class="token operator">=</span><span class="token string">"cancelBtn"</span><span class="token operator">&gt;</span>
                            Cancel
                        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
                    <span class="token punctuation">)</span><span class="token punctuation">}</span>
                    <span class="token punctuation">{</span>primaryFn <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>primaryFn<span class="token punctuation">}</span><span class="token operator">&gt;</span>Continue<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
                    <span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<pre class="language-scss" tabindex="0"><code class="language-scss">
<span class="token selector">.modalBackground </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>33<span class="token punctuation">,</span> 33<span class="token punctuation">,</span> 33<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.modalContainer </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.35<span class="token punctuation">)</span> 0px 5px 15px<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token selector">.modalContainer .title </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">border-top-left-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #FFE936<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.titleCloseBtn </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.titleCloseBtn button </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0.3rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.titleCloseBtn button </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.modalContainer .body </span><span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.modalContainer .footer </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.modalContainer .footer button </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 45px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> cornflowerblue<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#cancelBtn </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> crimson<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>The code above is the core modal component. Let’s break it down.</p>
<h2 id="heading-props-interface">Props Interface</h2>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
    open<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    cancelFn<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    primaryFn<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    closeIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
    content<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
    titleContent<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>In this interface (which we’re passing to the <code>Modal</code> component) we have:</p>
<ul>
<li><p><code>open</code>: A boolean value that signifies whether the modal should be shown or not. A common way of toggling the modal on or off.</p>
</li>
<li><p><code>cancelFn</code>: An optional parameter (denoted by <code>?</code>) that provides a call back function for when the secondary button is being pressed. For example, the <code>cancel</code> functionality to close the modal, or undo an action.</p>
</li>
<li><p><code>primaryFn</code>: An optional parameter that provides a call back function for when the primary button is being pressed. For example, <code>ok</code>, <code>confirm</code>, or <code>submit</code> functionality.</p>
</li>
<li><p><code>closeIcon</code>: An optional parameter that provides an icon to be used as the top right close button for the modal. For example, you could use a circle with an X in it, or another form of a button.</p>
</li>
<li><p><code>content</code>: An optional parameter that provides the inner content for the modal. This could be as simple as a <code>&lt;p/&gt;</code> tag to a fully fledged <code>&lt;form/&gt;</code> element.</p>
</li>
<li><p><code>titleContent</code>: An optional parameter that provides content to be situated within the title section of the modal. This could be anything from text, to a logo image, anything you want.</p>
</li>
</ul>
<h2 id="heading-the-markup">The Markup</h2>
<p>The markup is pretty straightforward, there are <code>divs</code> for each section (title, content, and actions) along with some conditional rendering logic.</p>
<p>That is:</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token punctuation">{</span>titleContent <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>titleContent<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"titleCloseBtn"</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>secondaryFn<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>closeIcon <span class="token operator">??</span> <span class="token string">'X'</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
         <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre>
<p>We used the short-circuit evaluation syntax to check if the <code>titleContent</code> property is defined by the developer. If it is, the modal’s title is rendered; if not, the title section is omitted.</p>
<p>This approach allows flexible configuration of the modal, letting you easily include or exclude sections like title, content, or actions.</p>
<p>For example, a confirmation modal might only need a title like 'Are you sure?' and action buttons like 'Yes' or 'No', without any additional content.</p>
<h2 id="heading-react-useeffect">React useEffect</h2>
<p>If you’re not familiar with <code>useEffect</code> and plan on using React more, l’d highly recommend reading about it <a target="_blank" href="https://react.dev/reference/react/useEffect">here</a>, as it is one of the backbones of React’s ecosystem.</p>
<p>In essence, <code>useEffect</code> is like a helper that makes sure you do things at the right time in your app.</p>
<h2 id="heading-when-do-we-use-useeffect">When Do We Use <code>useEffect</code>?</h2>
<ol>
<li><p>When you want something to happen right after your app is ready:</p>
<ul>
<li>Example: When the app opens, and you want to fetch some data from the internet (like loading recipes for your dinner).</li>
</ul>
</li>
<li><p>When something a state variable or input prop changes, and you want to do something after that change.</p>
</li>
<li><p>When your app closes or cleans up.</p>
</li>
</ol>
<p>In our React App, we’ve created a <code>useEffect</code> Hook that runs after our modal component has loaded. The <code>useEffect</code> will simply attach a <code>keydown</code> event handler to the <code>document</code> (the page/DOM), which will listen to all keys that are pressed on the screen, and then check if it is the <code>ESC</code> key.</p>
<p>If it is the <code>ESC</code> key, it will call the <code>secondaryFn</code> function passed into the modal. In our case, this is the function that closes the modal. The <code>return</code> statement removes the event handler on unmount (when <code>modalOpen</code> is <code>false</code>).</p>
<h2 id="heading-how-to-use-the-reusable-modal">How to Use the Reusable Modal</h2>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">import</span> <span class="token string">'./App.css'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Modal<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./components/molecules/Modal"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> <span class="token punctuation">[</span>modalOpen<span class="token punctuation">,</span> setModalOpen<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hey<span class="token punctuation">,</span> click on the button to open the modal<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"openModalBtn"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setModalOpen</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
                Open
            <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

            <span class="token operator">&lt;</span>Modal 
                open<span class="token operator">=</span><span class="token punctuation">{</span>modalOpen<span class="token punctuation">}</span>
                titleContent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span> Close <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">}</span>
                secondaryFn<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setModalOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                content<span class="token operator">=</span><span class="token punctuation">{</span>
                   <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
                     <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>This <span class="token keyword">is</span> a modal<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
                     <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>You can close it by pressing Escape key<span class="token punctuation">,</span> pressing close<span class="token punctuation">,</span> or clicking outside the modal<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>

               <span class="token punctuation">}</span>
           <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre>
<h3 id="heading-breaking-it-down">Breaking It Down</h3>
<p>In the above code, we have a button component that triggers the modal to be displayed. This is done by updating the <code>useState</code> variable <code>modalOpen</code>. Setting this to <code>true</code> will cause the <code>Modal</code> component to be seen.</p>
<p>Further down the code, we implemented the <code>Modal</code> component and passed in the relevant properties within the modal: a title, body content, and a secondary button (we didn't pass a primary function). This renders the following modal:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726519310027/a88f68a8-7bed-49cf-bbd2-ad4b2f5dea05.png" alt="Image: implemented information modal" class="image--center mx-auto" width="1426" height="760" loading="lazy"></p>
<p>Using the same component, we can also mix it up and build a confirmation modal like so:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726519756233/e9c2bf7f-0ea1-4656-859e-2a9b90a4418d.png" alt="e9c2bf7f-0ea1-4656-859e-2a9b90a4418d" class="image--center mx-auto" width="780" height="660" loading="lazy"></p>
<p>Replacing the previous modal implementation with:</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token operator">&lt;</span>Modal
    open<span class="token operator">=</span><span class="token punctuation">{</span>modalOpen<span class="token punctuation">}</span>
    titleContent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span> Are you sure<span class="token operator">?</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">}</span>
    cancelFn<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setModalOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    primaryFn<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">" You deleted everything everything"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setModalOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span>
    content<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>h4<span class="token operator">&gt;</span>Do you really want to <span class="token keyword">delete</span> everything<span class="token operator">?</span><span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre>
<p>There you have it, you have a <code>Modal</code> component with endless possibilities and configurations, depending on what content you pass to each area of the modal.</p>
<h2 id="heading-additional-improvements">Additional Improvements</h2>
<p>There are some additional improvements</p>
<h3 id="heading-replacing-the-cancel-and-primary-buttons">Replacing the Cancel and Primary Buttons</h3>
<p>Instead of passing the <code>cancelFn</code> and <code>primaryFn</code> properties, you can pass a full component containing the buttons, or any other footer components.  </p>
<p>The updated code should look like this:</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./Modal.css'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
    open<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token function-variable function">escFn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    closeIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    content<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
    titleContent<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
    className<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    actions<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span> <span class="token comment">// This will be used to pass buttons or other actions as children</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Modal<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> open<span class="token punctuation">,</span> closeIcon<span class="token punctuation">,</span> titleContent<span class="token punctuation">,</span> content<span class="token punctuation">,</span> actions <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token function-variable function">handleKeyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> KeyboardEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">'Escape'</span> <span class="token operator">&amp;&amp;</span> open<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'keydown'</span><span class="token punctuation">,</span> handleKeyDown<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'keydown'</span><span class="token punctuation">,</span> handleKeyDown<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>open<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>open<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"modalBackground"</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"modalContainer"</span><span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>titleContent <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">&gt;</span>
                        <span class="token punctuation">{</span>titleContent<span class="token punctuation">}</span>
                        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"titleCloseBtn"</span><span class="token operator">&gt;</span>
                            <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span><span class="token punctuation">{</span>closeIcon <span class="token operator">??</span> <span class="token string">'X'</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                <span class="token punctuation">)</span><span class="token punctuation">}</span>

                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">&gt;</span>
                    <span class="token punctuation">{</span>content<span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"footer"</span><span class="token operator">&gt;</span>
                    <span class="token punctuation">{</span>actions <span class="token operator">&amp;&amp;</span> actions<span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>Usage:</strong></p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">const</span> <span class="token function-variable function">handleCancel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setIsOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleContinue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Continue action'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token operator">&lt;</span>Modal
    open<span class="token operator">=</span><span class="token punctuation">{</span>isOpen<span class="token punctuation">}</span>
    titleContent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>Confirm Action<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span><span class="token punctuation">}</span>
    content<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Are you sure you want to proceed<span class="token operator">?</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">}</span>
    closeIcon<span class="token operator">=</span><span class="token string">"X"</span>
    actions<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"custom-actions"</span><span class="token operator">&gt;</span>
           <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleCancel<span class="token punctuation">}</span><span class="token operator">&gt;</span>Cancel<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
           <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleContinue<span class="token punctuation">}</span><span class="token operator">&gt;</span>Continue<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre>
<p>Here, we’re now passing the buttons as a property. You can also design the modal to pass the content as a child component, but this can get messy, as developers may see this at first glance as passing the modal content, rather than just footer elements.</p>
<p>There are pros and cons of doing it this way though:</p>
<p><strong>Pros:</strong></p>
<ul>
<li><p><strong>More flexibility</strong>: Allows you to pass all kinds of elements to the footer section. For example, multiple CTA (Call To Action) buttons, links, or anything you’d like, with custom styling.</p>
</li>
<li><p><strong>Separation of concerns:</strong> The modal is now only responsible for rendering the container (layout, title, content, and so on). The logic of what actions (buttons) to display and their behaviours are handled by the parent component that renders the modal, which makes the modal component cleaner and more reusable.</p>
</li>
<li><p><strong>Improved reusability:</strong> You can pass any JSX as the actions, making it usable for a variety of cases (for example, a modal with form submission buttons or multiple options). This approach is useful when you have modals that need different sets of buttons or interactions dependent on other logic within the parent/modal component. The logic can be handled by a builder function, or within another wrapper component which houses the buttons.</p>
</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
<li><p><strong>More responsibility on the parent component:</strong> You now have to handle the buttons in each instance where you use the <code>Modal</code>. This might result in repetition of the button logic (like <code>handleCancel</code> and <code>handleContinue</code>) in different places if you're not careful.</p>
</li>
<li><p><strong>Slightly more complex usage:</strong> The previous approach allowed you to pass in <code>cancelFn</code> and <code>primaryFn</code> directly (optionally), which might be easier for the majority/simple use cases. Passing actions as children may require more setup.</p>
</li>
<li><p><strong>Inconsistent action layout</strong>: If you're not mindful of your code, you could end up with inconsistent button placement or styles across different instances of the modal. This can be managed by ensuring you always pass consistent markup or styles when passing actions as children, but again, it may become difficult to manage.</p>
</li>
</ul>
<h2 id="heading-conclusion">Conclusion</h2>
<p>Building a reusable modal component in React offers great flexibility and reusability across your application. You can easily adapt the modal to various scenarios, whether it’s a simple confirmation modal or a more complex form submission modal.</p>
<p>However, it’s essential to balance between flexibility and simplicity—too much complexity might overburden the parent components with unnecessary repetition.</p>
<p>Overall, this approach keeps your code DRY, improves maintainability, and empowers you to create scalable UI components. By applying these practices and enhancements, you can build highly adaptable modals that cater to diverse requirements, improving both the developer experience and the final product's quality.</p>
<p>As always, feel free to drop me a follow or reach out on <a target="_blank" href="https://x.com/grantdotdev">Twitter/X</a>.</p>
-->

---

<TagLinks />