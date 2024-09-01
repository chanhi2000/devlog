---
lang: ko-KR
title: "How to look up a location with MKLocalSearch.Request"
description: "Article(s) > How to look up a location with MKLocalSearch.Request"
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
  - ios-6.1
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to look up a location with MKLocalSearch.Request"
    - property: og:description
      content: "How to look up a location with MKLocalSearch.Request"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Location - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/location/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to look up a location with MKLocalSearch.Request | Location - free Swift example code",
  "desc": "How to look up a location with MKLocalSearch.Request",
  "link": "https://hackingwithswift.com/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.1

<!-- TODO: 작성 -->

<!-- 
<p>MapKit has built-in functionality to let us look up places and businesses around the world, all using natural language searches that can be passed in straight from user entry.</p>
<p>First, import the MapKit framework, then create an instance of <code>MKLocalSearch.Request</code> that contains what you want to search for.</p>
<p>For example, this looks for Fortnum and Mason in London:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> searchRequest <span class="token operator">=</span> <span class="token class-name">MKLocalSearch</span><span class="token punctuation">.</span><span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
searchRequest<span class="token punctuation">.</span>naturalLanguageQuery <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Fortnum and Mason, London"</span></span></code></pre>
<p>That provides no other information to Apple other than the text string, so it will look everywhere in the world for such a match.</p>
<p>If you wanted, you could provide a specific search region by letting the user pan around an <code>MKMapView</code> for a specific location, then passing the region they are looking at to your search:</p>
<pre class=" language-swift"><code class=" language-swift">searchRequest<span class="token punctuation">.</span>region <span class="token operator">=</span> yourMapView<span class="token punctuation">.</span>region</code></pre>
<p>Once you’re ready, wrap the request inside an instance of <code>MKLocalSearch</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> search <span class="token operator">=</span> <span class="token class-name">MKLocalSearch</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> searchRequest<span class="token punctuation">)</span></code></pre>
<p>When you’re ready, call the <code>start()</code> method on your search. This accepts one parameter, which is a closure that runs when the search completes – it will be handed the response data or an error, depending on what happened. This closure will always be run on your application’s main thread, so you can present some user interface immediately if you want.</p>
<p>As an example, this code will loop over all the results that were found for the search, printing out the phone number for each one:</p>
<pre class=" language-swift"><code class=" language-swift">search<span class="token punctuation">.</span>start <span class="token punctuation">{</span> response<span class="token punctuation">,</span> error <span class="token keyword">in</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> response <span class="token operator">=</span> response <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Error: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error<span class="token operator">?</span><span class="token punctuation">.</span>localizedDescription <span class="token operator">??</span> <span class="token string-literal"><span class="token string">"Unknown error"</span></span></span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">."</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> item <span class="token keyword">in</span> response<span class="token punctuation">.</span>mapItems <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>phoneNumber <span class="token operator">??</span> <span class="token string-literal"><span class="token string">"No phone number."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Even without a map region, Apple Maps found the London store just fine, but obviously passing in a map region will help your accuracy improve.</p>
<p>If for some reason the request didn’t return quickly enough and you no longer need a response, call its <code>cancel()</code> method to abort the request.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/location/how-to-request-a-users-location-only-once-using-requestlocation">How to request a user's location only once using requestLocation</a></li><li><a href="/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin">How to find a touch's location in a node using location(in:)</a></li><li><a href="/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin">How to find a touch's location in a view with location(in:)</a></li><li><a href="/example-code/libraries/how-to-preview-files-using-quick-look-and-qlpreviewcontroller">How to preview files using Quick Look and QLPreviewController</a></li><li><a href="/example-code/language/how-to-create-quick-look-debug-previews-for-your-custom-types">How to create Quick Look debug previews for your custom types</a></li></ul>
-->

:::

---

<TagLinks />