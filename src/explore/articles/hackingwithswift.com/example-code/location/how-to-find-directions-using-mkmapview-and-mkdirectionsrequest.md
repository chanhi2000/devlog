---
lang: ko-KR
title: "How to find directions using MKMapView and MKDirections.Request"
description: "Article(s) > How to find directions using MKMapView and MKDirections.Request"
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
      content: "Article(s) > How to find directions using MKMapView and MKDirections.Request"
    - property: og:description
      content: "How to find directions using MKMapView and MKDirections.Request"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/location/how-to-detect-ibeacons.html
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
  "title": "How to find directions using MKMapView and MKDirections.Request | Location - free Swift example code",
  "desc": "How to find directions using MKMapView and MKDirections.Request",
  "link": "https://hackingwithswift.com/example-code/location/how-to-find-directions-using-mkmapview-and-mkdirectionsrequest",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 6.0

<!-- TODO: 작성 -->

<!-- 
<p>MapKit is great for letting users navigate from place to place, but also makes it easy for you to plot directions from one place to another. You just tell iOS where you're starting from, where you're going, as well as how you're traveling (by car, foot, or mass transit), and it will find routes for you.</p>
<p>First, make sure you have a map view in your app, and have the Maps entitlement enabled. Now add this code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">MapKit</span>
<span class="token keyword">import</span> <span class="token class-name">UIKit</span>

<span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">MKMapViewDelegate</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@IBOutlet</span> <span class="token keyword">var</span> mapView<span class="token punctuation">:</span> <span class="token class-name">MKMapView</span><span class="token operator">!</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token class-name">MKDirections</span><span class="token punctuation">.</span><span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        request<span class="token punctuation">.</span>source <span class="token operator">=</span> <span class="token class-name">MKMapItem</span><span class="token punctuation">(</span>placemark<span class="token punctuation">:</span> <span class="token class-name">MKPlacemark</span><span class="token punctuation">(</span>coordinate<span class="token punctuation">:</span> <span class="token class-name">CLLocationCoordinate2D</span><span class="token punctuation">(</span>latitude<span class="token punctuation">:</span> <span class="token number">40.7127</span><span class="token punctuation">,</span> longitude<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">74.0059</span><span class="token punctuation">)</span><span class="token punctuation">,</span> addressDictionary<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        request<span class="token punctuation">.</span>destination <span class="token operator">=</span> <span class="token class-name">MKMapItem</span><span class="token punctuation">(</span>placemark<span class="token punctuation">:</span> <span class="token class-name">MKPlacemark</span><span class="token punctuation">(</span>coordinate<span class="token punctuation">:</span> <span class="token class-name">CLLocationCoordinate2D</span><span class="token punctuation">(</span>latitude<span class="token punctuation">:</span> <span class="token number">37.783333</span><span class="token punctuation">,</span> longitude<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">122.416667</span><span class="token punctuation">)</span><span class="token punctuation">,</span> addressDictionary<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        request<span class="token punctuation">.</span>requestsAlternateRoutes <span class="token operator">=</span> <span class="token boolean">true</span>
        request<span class="token punctuation">.</span>transportType <span class="token operator">=</span> <span class="token punctuation">.</span>automobile

        <span class="token keyword">let</span> directions <span class="token operator">=</span> <span class="token class-name">MKDirections</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> request<span class="token punctuation">)</span>

        directions<span class="token punctuation">.</span>calculate <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">unowned</span> <span class="token keyword">self</span><span class="token punctuation">]</span> response<span class="token punctuation">,</span> error <span class="token keyword">in</span>
            <span class="token keyword">guard</span> <span class="token keyword">let</span> unwrappedResponse <span class="token operator">=</span> response <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

            <span class="token keyword">for</span> route <span class="token keyword">in</span> unwrappedResponse<span class="token punctuation">.</span>routes <span class="token punctuation">{</span>
                <span class="token keyword">self</span><span class="token punctuation">.</span>mapView<span class="token punctuation">.</span><span class="token function">addOverlay</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>polyline<span class="token punctuation">)</span>
                <span class="token keyword">self</span><span class="token punctuation">.</span>mapView<span class="token punctuation">.</span><span class="token function">setVisibleMapRect</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>polyline<span class="token punctuation">.</span>boundingMapRect<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">mapView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> mapView<span class="token punctuation">:</span> <span class="token class-name">MKMapView</span><span class="token punctuation">,</span> rendererFor overlay<span class="token punctuation">:</span> <span class="token class-name">MKOverlay</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">MKOverlayRenderer</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">MKPolylineRenderer</span><span class="token punctuation">(</span>polyline<span class="token punctuation">:</span> overlay <span class="token keyword">as</span><span class="token operator">!</span> <span class="token class-name">MKPolyline</span><span class="token punctuation">)</span>
        renderer<span class="token punctuation">.</span>strokeColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>blue
        <span class="token keyword">return</span> renderer
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That example requests driving directions between New York and San Francisco. It asks for alternate routes if they exist (spoiler: they do), then sets up a closure to run when the directions come back that adds them as overlays to the map. To make the overlays draw, you need to implement the <code>rendererFor</code> method, but that's just three lines as you can see.</p>
<p>Note: because I request alternative routes if they exist, I loop through the array of returned routes to add them all to the map. The <code>setVisibleMapRect()</code> method is called once for each route, but fortunately that isn't a problem as all routes have the same start and end location!</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />