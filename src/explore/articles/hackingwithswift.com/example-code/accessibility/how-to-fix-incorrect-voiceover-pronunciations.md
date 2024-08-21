---
lang: ko-KR
title: "How to fix incorrect VoiceOver pronunciations"
description: "Article(s) > How to fix incorrect VoiceOver pronunciations"
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
  - ios-13.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to fix incorrect VoiceOver pronunciations"
    - property: og:description
      content: "How to fix incorrect VoiceOver pronunciations"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/accessibility/how-to-fix-incorrect-voiceover-pronunciations.html
date: 2019-10-20
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Accessibility - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/accessibility/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to fix incorrect VoiceOver pronunciations | Accessibility - free Swift example code",
  "desc": "How to fix incorrect VoiceOver pronunciations",
  "link": "https://hackingwithswift.com/example-code/accessibility/how-to-fix-incorrect-voiceover-pronunciations",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!--
<p>As clever as VoiceOver is, sometimes it will get the pronunciation wrong for certain words –&nbsp;particularly when it’s missing some context that would have made clear what the correct pronunciation was.</p>
<p>For example, if you have a <code>UILabel</code> containing the string “Live” should that be pronounced as “liv” or as “lyve”? Or how about “Read” –&nbsp;is that pronounced as “reed” or “red”? There’s no way for VoiceOver to know unless you tell it.</p>
<p>The official way to do this is by using the <code>UIAccessibilitySpeechAttributeIPANotation</code> key in an attributed string, but in practice using that just makes your sounds come out poorly.</p>
<p>An easier way that also produces better results is just to use your own phonetic lettering. For example:</p>
<pre class=" language-swift"><code class=" language-swift">label<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"read"</span></span>
label<span class="token punctuation">.</span>accessibilityLabel <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"red"</span></span></code></pre>
<p>Using this approach, the screen will show “read” but VoiceOver users will hear “red” –&nbsp;it works for everyone.</p>
<p>There are two places where this approach either won’t be enough or will prove extremely complicated.</p>
<p>First, if you use foreign languages inside your app they will be read out as if they were the user’s primary language.&nbsp;So, French words might be pronounced as if they were English, for example.</p>
<p>Second, if your app uses punctuation that the user needs to hear audibly, the result won’t be what you hoped for. For example, if you write some Swift code like <code>user.name</code> that will be interpreted by VoiceOver as “user (pause) name” rather than “user period name”.</p>
<p>Both of these problems can be fixed by using special attributes of <code>NSAttributedString</code>. For example, we can specify the language for an attributed string like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> attributedString1 <span class="token operator">=</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>
    string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Bonjour"</span></span><span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>accessibilitySpeechLanguage<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"fr-FR"</span></span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>

label<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Bonjour"</span></span>
label<span class="token punctuation">.</span>accessibilityAttributedLabel <span class="token operator">=</span> attributedString1</code></pre>
<p>And we can tell VoiceOver to read all punctuation like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> attributedString2 <span class="token operator">=</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>
    string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"user.name"</span></span><span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>accessibilitySpeechPunctuation<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>

label<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"user.name"</span></span>
label<span class="token punctuation">.</span>accessibilityAttributedLabel <span class="token operator">=</span> attributedString2</code></pre>
<p>Much better!</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-make-voiceover-read-characters-individually">How to make VoiceOver read characters individually</a></li><li><a href="/example-code/accessibility/how-to-help-voiceover-read-specific-kinds-of-text-using-accessibilitytextualcontext">How to help VoiceOver read specific kinds of text using accessibilityTextualContext</a></li><li><a href="/example-code/uikit/how-to-fix-the-error-failed-to-instantiate-the-default-view-controller-for-uimainstoryboardfile">How to fix the error “Failed to instantiate the default view controller for UIMainStoryboardFile”</a></li><li><a href="/quick-start/swiftui/how-to-fix-a-form-picker-or-a-navigationlink-that-isnt-tappable">How to fix a Form Picker or a NavigationLink that isn’t tappable</a></li><li><a href="/quick-start/swiftui/how-to-fix-ambiguous-reference-to-member-buildblock">How to fix “Ambiguous reference to member 'buildBlock()’”</a></li></ul>
-->

:::

---

<TagLinks />