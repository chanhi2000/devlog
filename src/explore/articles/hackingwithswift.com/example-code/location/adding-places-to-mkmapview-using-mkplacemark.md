---
lang: ko-KR
title: "Adding places to MKMapView using MKPlacemark"
description: "Article(s) > Adding places to MKMapView using MKPlacemark"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Adding places to MKMapView using MKPlacemark"
    - property: og:description
      content: "Adding places to MKMapView using MKPlacemark"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/location/adding-places-to-mkmapview-using-mkplacemark.html
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
  "title": "Adding places to MKMapView using MKPlacemark | Location - free Swift example code",
  "desc": "Adding places to MKMapView using MKPlacemark",
  "link": "https://hackingwithswift.com/example-code/location/adding-places-to-mkmapview-using-mkplacemark",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!-- 
<p>You can add places to any map view using the <code>MKPlacemark</code> class, and it’s different from adding regular annotations –&nbsp;the map view shows the whole address on the map, even from far away, so users can see important points easily.</p>
<p>Your address needs to be specified as a series of keys from the Contacts framework, so start by adding this import:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">Contacts</span></code></pre>
<p>Now add the GPS coordinate and address for the placemark you want. This creates a coordinate and address for Fortnum &amp; Mason in London:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> coords <span class="token operator">=</span> <span class="token class-name">CLLocationCoordinate2DMake</span><span class="token punctuation">(</span><span class="token number">51.5083</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.1384</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> address <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">CNPostalAddressStreetKey</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"181 Piccadilly, St. James's"</span></span><span class="token punctuation">,</span> <span class="token class-name">CNPostalAddressCityKey</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"London"</span></span><span class="token punctuation">,</span> <span class="token class-name">CNPostalAddressPostalCodeKey</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"W1A 1ER"</span></span><span class="token punctuation">,</span> <span class="token class-name">CNPostalAddressISOCountryCodeKey</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"GB"</span></span><span class="token punctuation">]</span></code></pre>
<p>You can then wrap that up inside an <code>MKPlacemark</code> instance like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> place <span class="token operator">=</span> <span class="token class-name">MKPlacemark</span><span class="token punctuation">(</span>coordinate<span class="token punctuation">:</span> coords<span class="token punctuation">,</span> addressDictionary<span class="token punctuation">:</span> address<span class="token punctuation">)</span></code></pre>
<p>Finally, add that to your map view. <code>MKPlacemark</code> conforms to the <code>MKAnnotation</code> protocol, so you use <code>addAnnotation()</code>:</p>
<pre class=" language-swift"><code class=" language-swift">mapView<span class="token punctuation">.</span><span class="token function">addAnnotation</span><span class="token punctuation">(</span>place<span class="token punctuation">)</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/location/how-to-find-directions-using-mkmapview-and-mkdirectionsrequest">How to find directions using MKMapView and MKDirections.Request</a></li><li><a href="/example-code/location/how-to-add-annotations-to-mkmapview-using-mkpointannotation-and-mkpinannotationview">How to add annotations to MKMapView using MKPointAnnotation and MKPinAnnotationView</a></li><li><a href="/example-code/location/how-to-add-a-button-to-an-mkmapview-annotation">How to add a button to an MKMapView annotation</a></li><li><a href="/example-code/location/how-to-add-an-mkmapview-using-mapkit">How to add an MKMapView using MapKit</a></li><li><a href="/quick-start/swiftui/adding-tabview-and-tabitem">Adding TabView and tabItem()</a></li></ul>
-->

:::

---

<TagLinks />