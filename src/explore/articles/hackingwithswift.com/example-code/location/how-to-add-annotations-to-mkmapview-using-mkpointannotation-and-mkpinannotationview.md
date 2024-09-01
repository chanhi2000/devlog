---
lang: ko-KR
title: "How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView"
description: "Article(s) > How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView"
    - property: og:description
      content: "How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/location/how-to-add-annotations-to-mkmapview-using-mkpointannotation-and-mkpinannotationview.html
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
  "title": "How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView | Location - free Swift example code",
  "desc": "How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView",
  "link": "https://hackingwithswift.com/example-code/location/how-to-add-annotations-to-mkmapview-using-mkpointannotation-and-mkpinannotationview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
<p>Once you have an <code>MKMapView</code> up and running, it only takes a few lines of code more to drop pins containing placemarks.</p>
<p>Start by making your view controller the delegate of your map view, so that we can receive events. You should also make your view controller conform to <code>MKMapViewDelegate</code> in code.</p>
<p>Adding pins to the map takes two code changes. First you need to create an annotation describing where the pin is and what its name is – put this in your <code>viewDidLoad()</code> method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> london <span class="token operator">=</span> <span class="token class-name">MKPointAnnotation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
london<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"London"</span></span>
london<span class="token punctuation">.</span>coordinate <span class="token operator">=</span> <span class="token class-name">CLLocationCoordinate2D</span><span class="token punctuation">(</span>latitude<span class="token punctuation">:</span> <span class="token number">51.507222</span><span class="token punctuation">,</span> longitude<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">0.1275</span><span class="token punctuation">)</span>
yourMapView<span class="token punctuation">.</span><span class="token function">addAnnotation</span><span class="token punctuation">(</span>london<span class="token punctuation">)</span></code></pre>
<p>Second, you need to implement a <code>viewFor</code> method that converts your annotation into a view that can be displayed on the map. iOS comes with a built-in view type called <code>MKPinAnnotationView</code> that provides the familiar pin layout, so we can use that here. </p>
<p><strong>Note:</strong> For performance reasons, dropping pins onto a map works using re-use identifiers, just like loading table view cells. The code below tries to re-use pins, and you should do the same.</p>
<p>Add this to your view controller:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">mapView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> mapView<span class="token punctuation">:</span> <span class="token class-name">MKMapView</span><span class="token punctuation">,</span> viewFor annotation<span class="token punctuation">:</span> <span class="token class-name">MKAnnotation</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">MKAnnotationView</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> annotation <span class="token keyword">is</span> <span class="token class-name">MKPointAnnotation</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token nil constant">nil</span> <span class="token punctuation">}</span>

    <span class="token keyword">let</span> identifier <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Annotation"</span></span>
    <span class="token keyword">var</span> annotationView <span class="token operator">=</span> mapView<span class="token punctuation">.</span><span class="token function">dequeueReusableAnnotationView</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> identifier<span class="token punctuation">)</span>

    <span class="token keyword">if</span> annotationView <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
        annotationView <span class="token operator">=</span> <span class="token class-name">MKPinAnnotationView</span><span class="token punctuation">(</span>annotation<span class="token punctuation">:</span> annotation<span class="token punctuation">,</span> reuseIdentifier<span class="token punctuation">:</span> identifier<span class="token punctuation">)</span>
        annotationView<span class="token operator">!</span><span class="token punctuation">.</span>canShowCallout <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        annotationView<span class="token operator">!</span><span class="token punctuation">.</span>annotation <span class="token operator">=</span> annotation
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> annotationView
<span class="token punctuation">}</span></code></pre>
<p>That’s all the code you need!</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation">How to add a button to an MKMapView annotation</a></li></ul>
-->

:::

---

<TagLinks />