---
lang: ko-KR
title: "How to add a button to an MKMapView annotation"
description: "Article(s) > How to add a button to an MKMapView annotation"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to add a button to an MKMapView annotation"
    - property: og:description
      content: "How to add a button to an MKMapView annotation"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation.html
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
  "title": "How to add a button to an MKMapView annotation | Location - free Swift example code",
  "desc": "How to add a button to an MKMapView annotation",
  "link": "https://hackingwithswift.com/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>The built-in <code>MKPinAnnotationView</code> annotation view has a <code>rightCalloutAccessoryView</code> property that can be set to any kind of <code>UIView</code>, including buttons. The button doesn't need to have an action attached to it, because there's a separate method that gets called when it's tapped.</p>
<p>First up, here's how you'd create a button inside an annotation view:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> btn <span class="token operator">=</span> <span class="token class-name">UIButton</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token punctuation">.</span>detailDisclosure<span class="token punctuation">)</span>
annotationView<span class="token punctuation">.</span>rightCalloutAccessoryView <span class="token operator">=</span> btn</code></pre>
<p>For context, here's a complete implementation of <code>viewForAnnotation</code> that uses a button. This is taken from <a href="/read/19/overview">project 19</a> of Hacking with Swift, where I created a class called <code>Capital</code> that implemented the <code>MKAnnotation</code> protocol – you'll need to adjust this for your own annotation type:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">mapView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> mapView<span class="token punctuation">:</span> <span class="token class-name">MKMapView</span><span class="token punctuation">,</span> viewFor annotation<span class="token punctuation">:</span> <span class="token class-name">MKAnnotation</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">MKAnnotationView</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> identifier <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Capital"</span></span>

    <span class="token keyword">if</span> annotation <span class="token keyword">is</span> <span class="token class-name">Capital</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> annotationView <span class="token operator">=</span> mapView<span class="token punctuation">.</span><span class="token function">dequeueReusableAnnotationView</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> identifier<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            annotationView<span class="token punctuation">.</span>annotation <span class="token operator">=</span> annotation
            <span class="token keyword">return</span> annotationView
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> annotationView <span class="token operator">=</span> <span class="token class-name">MKPinAnnotationView</span><span class="token punctuation">(</span>annotation<span class="token punctuation">:</span>annotation<span class="token punctuation">,</span> reuseIdentifier<span class="token punctuation">:</span>identifier<span class="token punctuation">)</span>
            annotationView<span class="token punctuation">.</span>isEnabled <span class="token operator">=</span> <span class="token boolean">true</span>
            annotationView<span class="token punctuation">.</span>canShowCallout <span class="token operator">=</span> <span class="token boolean">true</span>

            <span class="token keyword">let</span> btn <span class="token operator">=</span> <span class="token class-name">UIButton</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token punctuation">.</span>detailDisclosure<span class="token punctuation">)</span>
            annotationView<span class="token punctuation">.</span>rightCalloutAccessoryView <span class="token operator">=</span> btn
            <span class="token keyword">return</span> annotationView
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token nil constant">nil</span>
<span class="token punctuation">}</span></code></pre>
<p>When it comes to detecting taps on your button, implement the <code>calloutAccessoryControlTapped</code> method. This tells you the annotation view that was tapped (from which you can pull out the annotation), the control that was tapped (in our case it's a button), and also the map view the whole thing belongs to. Here's an example:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">mapView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> mapView<span class="token punctuation">:</span> <span class="token class-name">MKMapView</span><span class="token punctuation">,</span> annotationView view<span class="token punctuation">:</span> <span class="token class-name">MKAnnotationView</span><span class="token punctuation">,</span> calloutAccessoryControlTapped control<span class="token punctuation">:</span> <span class="token class-name">UIControl</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> capital <span class="token operator">=</span> view<span class="token punctuation">.</span>annotation <span class="token keyword">as</span><span class="token operator">!</span> <span class="token class-name">Capital</span>
    <span class="token keyword">let</span> placeName <span class="token operator">=</span> capital<span class="token punctuation">.</span>title
    <span class="token keyword">let</span> placeInfo <span class="token operator">=</span> capital<span class="token punctuation">.</span>info

    <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token class-name">UIAlertController</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> placeName<span class="token punctuation">,</span> message<span class="token punctuation">:</span> placeInfo<span class="token punctuation">,</span> preferredStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>alert<span class="token punctuation">)</span>
    ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"OK"</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/location/how-to-add-annotations-to-mkmapview-using-mkpointannotation-and-mkpinannotationview">How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView</a></li><li><a href="/example-code/location/how-to-find-directions-using-mkmapview-and-mkdirectionsrequest">How to find directions using MKMapView and MKDirections.Request</a></li><li><a href="/example-code/location/how-to-add-an-mkmapview-using-mapkit">How to add an MKMapView using MapKit</a></li><li><a href="/example-code/location/adding-places-to-mkmapview-using-mkplacemark">Adding places to MKMapView using MKPlacemark</a></li><li><a href="/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar</a></li></ul>
-->

:::

---

<TagLinks />