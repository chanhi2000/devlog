---
lang: ko-KR
title: "How to detect keyboard input using pressesBegan() and pressesEnded()"
description: "Article(s) > How to detect keyboard input using pressesBegan() and pressesEnded()"
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
  - ios-13.4
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect keyboard input using pressesBegan() and pressesEnded()"
    - property: og:description
      content: "How to detect keyboard input using pressesBegan() and pressesEnded()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended.html
date: 2024-08-21
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
  "title": "How to detect keyboard input using pressesBegan() and pressesEnded() | UIKit - free Swift example code",
  "desc": "How to detect keyboard input using pressesBegan() and pressesEnded()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 13.4

<!-- TODO: 작성 -->

<!--
<p>UIKit lets us detect hardware keyboard input from the user through the methods <code>pressesBegan()</code> and <code>pressesEnded()</code>, both of which are passed a set of <code>UIPress</code> instances that contain key codes and modifiers we can inspect. If you implement one of these two methods, you should call <code>super</code> to forward the message on for any keyboard events you don’t handle.</p>
<p>For example, if you had a dice game you could make it so that the user could press R to roll the dice or H to show a help screen, all by implementing this method in a view controller:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">pressesBegan</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> presses<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UIPress</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIPressesEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> key <span class="token operator">=</span> presses<span class="token punctuation">.</span>first<span class="token operator">?</span><span class="token punctuation">.</span>key <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token keyword">switch</span> key<span class="token punctuation">.</span>keyCode <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token punctuation">.</span>keyboardR<span class="token punctuation">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Roll dice"</span></span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token punctuation">.</span>keyboardH<span class="token punctuation">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Show help"</span></span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">pressesBegan</span><span class="token punctuation">(</span>presses<span class="token punctuation">,</span> with<span class="token punctuation">:</span> event<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>You might see folks always calling <code>super.pressesBegan()</code> even when they handle the keypress, but that’s likely to cause problems because UIKit will pass the keypress up the responder chain even after you’ve handled it - several objects may act on the same keypress.</p>
<p>The <code>pressesEnded()</code> method works in much the same way: you can override it in a view or view controller, read which key was released, then pass the event on to <code>super</code> if you don’t handle it. For example, if you had a quiz app where you wanted the user to proceed when they press and release the spacebar, you’d write this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">pressesEnded</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> presses<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UIPress</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIPressesEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> key <span class="token operator">=</span> presses<span class="token punctuation">.</span>first<span class="token operator">?</span><span class="token punctuation">.</span>key <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token keyword">switch</span> key<span class="token punctuation">.</span>keyCode <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token punctuation">.</span>keyboardSpacebar<span class="token punctuation">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Continue the quiz…"</span></span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">pressesEnded</span><span class="token punctuation">(</span>presses<span class="token punctuation">,</span> with<span class="token punctuation">:</span> event<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Rather than using the <code>keyCode</code> constants, you can also read the exact letters that were tapped with the <code>characters</code> property. </p>
<p>If you combine <code>pressesBegan()</code> and <code>pressesEnded()</code>, you can effectively detect when the user is holding down a key. For example, this creates a custom <code>AVPlayerViewController</code> subclass that plays a movie only while spacebar is being held down:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">AVKit</span>
<span class="token keyword">import</span> <span class="token class-name">UIKit</span>

<span class="token keyword">class</span> <span class="token class-name">CustomMovieController</span><span class="token punctuation">:</span> <span class="token class-name">AVPlayerViewController</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">pressesBegan</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> presses<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UIPress</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIPressesEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> key <span class="token operator">=</span> presses<span class="token punctuation">.</span>first<span class="token operator">?</span><span class="token punctuation">.</span>key <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

        <span class="token keyword">switch</span> key<span class="token punctuation">.</span>keyCode <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token punctuation">.</span>keyboardSpacebar<span class="token punctuation">:</span>
            player<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token punctuation">.</span>keyboardLeftArrow<span class="token punctuation">:</span>
            player<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">seek</span><span class="token punctuation">(</span>to<span class="token punctuation">:</span> <span class="token punctuation">.</span>zero<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">pressesBegan</span><span class="token punctuation">(</span>presses<span class="token punctuation">,</span> with<span class="token punctuation">:</span> event<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">pressesEnded</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> presses<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UIPress</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIPressesEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> key <span class="token operator">=</span> presses<span class="token punctuation">.</span>first<span class="token operator">?</span><span class="token punctuation">.</span>key <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

        <span class="token keyword">switch</span> key<span class="token punctuation">.</span>keyCode <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token punctuation">.</span>keyboardSpacebar<span class="token punctuation">:</span>
            player<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">pressesEnded</span><span class="token punctuation">(</span>presses<span class="token punctuation">,</span> with<span class="token punctuation">:</span> event<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>To try that out, create an <code>AVPlayer</code> item with a movie you want to play, then pass it in. This will show the movie player when the screen is tapped:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">AVKit</span>
<span class="token keyword">import</span> <span class="token class-name">UIKit</span>

<span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
     <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">touchesBegan</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> touches<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UITouch</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> videoURL <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://bit.ly/aryashake"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> vc <span class="token operator">=</span> <span class="token class-name">CustomMovieController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        vc<span class="token punctuation">.</span>player <span class="token operator">=</span> <span class="token class-name">AVPlayer</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> videoURL<span class="token operator">!</span><span class="token punctuation">)</span>
        <span class="token function">present</span><span class="token punctuation">(</span>vc<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>(Yes, that’s my dog. Yes, she knows she’s beautiful.)</p>


<h2 class="title">Reading modifier keys such as Cmd, Option, and Shift</h2>
<p>Along with the key that was pressed, UIKit also sends us any modifier keys that were held down such as Option and Shift. These are provided as a set, so you can check for particular keys using <code>contains()</code> then one of the <code>UIKeyModifierFlags</code> such as <code>.control</code>.</p>
<p>For example, this creates a view controller with a red rectangle in the center, and if you press Shift then either left arrow or right arrow the rectangle rotates in the appropriate direction:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> rectangle <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>rectangle<span class="token punctuation">)</span>
        rectangle<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token punctuation">.</span>red
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLayoutSubviews</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rectangle<span class="token punctuation">.</span>center <span class="token operator">=</span> view<span class="token punctuation">.</span>center
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">pressesBegan</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> presses<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UIPress</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIPressesEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> key <span class="token operator">=</span> presses<span class="token punctuation">.</span>first<span class="token operator">?</span><span class="token punctuation">.</span>key <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>
        <span class="token keyword">guard</span> key<span class="token punctuation">.</span>modifierFlags<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token punctuation">.</span>shift<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

        <span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> key<span class="token punctuation">.</span>keyCode <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token punctuation">.</span>keyboardLeftArrow<span class="token punctuation">:</span>
                <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span>by<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token keyword">case</span> <span class="token punctuation">.</span>keyboardRightArrow<span class="token punctuation">:</span>
                <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span>by<span class="token punctuation">:</span> <span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">pressesBegan</span><span class="token punctuation">(</span>presses<span class="token punctuation">,</span> with<span class="token punctuation">:</span> event<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">rotate</span><span class="token punctuation">(</span>by amount<span class="token punctuation">:</span> <span class="token class-name">CGFloat</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rectangle<span class="token punctuation">.</span>transform <span class="token operator">=</span> rectangle<span class="token punctuation">.</span>transform<span class="token punctuation">.</span><span class="token function">concatenating</span><span class="token punctuation">(</span><span class="token class-name">CGAffineTransform</span><span class="token punctuation">(</span>rotationAngle<span class="token punctuation">:</span> amount<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>If you are using <code>characters</code> to read the actual letters that get tapped, you might find it useful to try <code>charactersIgnoringModifiers</code> – it sends back the same string, except ignoring any modifier keys. For example, if the user press Shift+n <code>characters</code> will be set to “N” but <code>key.charactersIgnoringModifiers</code> will be set to “n” because it ignores the Shift key.</p>
<h2 class="title">Reading all presses</h2>
<p>There’s one last thing you might want to do, which is to read all the current keyboard presses that are active when a new one comes in. This would be useful if you wanted to check if the user was holding down two or three specific keys at the same time.</p>
<p>To do this, read the <code>event?.allPresses</code> property in either <code>pressesBegan()</code> or <code>pressesEnded()</code>, and evaluate the keys however you want. For example, this prints a message when the keys “a”, “b”, and “c” are held down:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">pressesBegan</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> presses<span class="token punctuation">:</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">UIPress</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> with event<span class="token punctuation">:</span> <span class="token class-name">UIPressesEvent</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> keys <span class="token operator">=</span> event<span class="token operator">?</span><span class="token punctuation">.</span>allPresses<span class="token punctuation">.</span>compactMap <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">.</span>key<span class="token operator">?</span><span class="token punctuation">.</span>characters <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">sorted</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> keys <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"a"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"b"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"c"</span></span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Key combination pressed!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p><strong>Tip:</strong> If you’re using Swift 5.2 or later, you can write <code>event?.allPresses.compactMap(\.key?.characters).sorted()</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/uikit/how-to-create-custom-text-input-using-uikeyinput">How to create custom text input using UIKeyInput</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li></ul>
-->

:::

---

<TagLinks />