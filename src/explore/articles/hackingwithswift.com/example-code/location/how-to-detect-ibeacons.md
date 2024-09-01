---
lang: ko-KR
title: "How to detect iBeacons"
description: "Article(s) > How to detect iBeacons"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect iBeacons"
    - property: og:description
      content: "How to detect iBeacons"
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
  "title": "How to detect iBeacons | Location - free Swift example code",
  "desc": "How to detect iBeacons",
  "link": "https://hackingwithswift.com/example-code/location/how-to-detect-ibeacons",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>Detecting iBeacons requires a number of steps, but before we can start writing any code we first need to add some privacy descriptions to your Info.plist file. These are shown to users when you request location access, and it’s your chance to explain to users why you need location access.</p>
<p>The two keys we need to add are “Privacy - Location Always and When In Use Usage Description” and “Privacy - Location When In Use Usage Description”. So, please go to your Info.plist now, and give them both a string describing why you want access.</p>
<p>With that done, we can start to scan for beacons. Open your class in Xcode (it could be a view controller, but it doesn't have to be), add an import for CoreLocation to the top, then tell Swift that your class conforms to the <code>CLLocationManagerDelegate</code> protocol so that you can start to receive location updates. </p>
<p>iBeacon tracking is done using the <code>CLLocationManager</code> class, which is also responsible for requesting location permission from users. You need to create a property for this in your class so that you can store the active location manager, so add this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> locationManager<span class="token punctuation">:</span> <span class="token class-name">CLLocationManager</span><span class="token operator">!</span></code></pre>
<p>If you're using a view controller, you'll probably want to initialize this property in <code>viewDidLoad()</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    locationManager <span class="token operator">=</span> <span class="token class-name">CLLocationManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    locationManager<span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token keyword">self</span>
    locationManager<span class="token punctuation">.</span><span class="token function">requestAlwaysAuthorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>If you're using another type of class, you should amend that appropriately. </p>
<p>Once you request permission to use your user's location, they'll see an alert with the message you wrote earlier. When they make a choice you'll get a delegate callback called <code>didChangeAuthorization</code>, at which point you can check whether they are authorized you or not:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">locationManager</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> manager<span class="token punctuation">:</span> <span class="token class-name">CLLocationManager</span><span class="token punctuation">,</span> didChangeAuthorization status<span class="token punctuation">:</span> <span class="token class-name">CLAuthorizationStatus</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> status <span class="token operator">==</span> <span class="token punctuation">.</span>authorizedAlways <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token class-name">CLLocationManager</span><span class="token punctuation">.</span><span class="token function">isMonitoringAvailable</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token class-name">CLBeaconRegion</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token class-name">CLLocationManager</span><span class="token punctuation">.</span><span class="token function">isRangingAvailable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">startScanning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Don't worry, we haven't written the <code>startScanning()</code> method yet.</p>
<p>Once you've been authorized to scan for iBeacons, you can create <code>CLBeaconRegion</code> objects and pass them to the location manager. Each <code>CLBeaconRegion</code> is uniquely identified by a long number (it's UUID), and optionally also major and minor numbers. As well as monitoring for a beacon's existence, we're also going to ask iOS to range the beacon for us – i.e., tell us how close it thinks we are.</p>
<p>Here's the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">startScanning</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> uuid <span class="token operator">=</span> <span class="token function">UUID</span><span class="token punctuation">(</span>uuidString<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"5A4BCFCE-174E-4BAC-A814-092E77F6B7E5"</span></span><span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token keyword">let</span> beaconRegion <span class="token operator">=</span> <span class="token class-name">CLBeaconRegion</span><span class="token punctuation">(</span>proximityUUID<span class="token punctuation">:</span> uuid<span class="token punctuation">,</span> major<span class="token punctuation">:</span> <span class="token number">123</span><span class="token punctuation">,</span> minor<span class="token punctuation">:</span> <span class="token number">456</span><span class="token punctuation">,</span> identifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"MyBeacon"</span></span><span class="token punctuation">)</span>

    locationManager<span class="token punctuation">.</span><span class="token function">startMonitoring</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> beaconRegion<span class="token punctuation">)</span>
    locationManager<span class="token punctuation">.</span><span class="token function">startRangingBeacons</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> beaconRegion<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Once you're ranging for beacons, you'll get a delegate callback called <code>didRangeBeacons</code> every second or so, at which point you can read a beacon's distance using its <code>proximity</code> value and take appropriate action.</p>
<p>For example, we can make our view change color depending on how far away an iBeacon is with this code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">locationManager</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> manager<span class="token punctuation">:</span> <span class="token class-name">CLLocationManager</span><span class="token punctuation">,</span> didRangeBeacons beacons<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">CLBeacon</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">in</span> region<span class="token punctuation">:</span> <span class="token class-name">CLBeaconRegion</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> beacons<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token function">updateDistance</span><span class="token punctuation">(</span>beacons<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>proximity<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">updateDistance</span><span class="token punctuation">(</span><span class="token punctuation">.</span>unknown<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">updateDistance</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> distance<span class="token punctuation">:</span> <span class="token class-name">CLProximity</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">UIView</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>withDuration<span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> distance <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token punctuation">.</span>unknown<span class="token punctuation">:</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>gray

        <span class="token keyword">case</span> <span class="token punctuation">.</span>far<span class="token punctuation">:</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>blue

        <span class="token keyword">case</span> <span class="token punctuation">.</span>near<span class="token punctuation">:</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>orange

        <span class="token keyword">case</span> <span class="token punctuation">.</span>immediate<span class="token punctuation">:</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration">How to detect images using ARImageTrackingConfiguration</a></li><li><a href="/quick-start/swiftui/how-to-detect-the-location-of-a-tap-inside-a-view">How to detect the location of a tap inside a view</a></li><li><a href="/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded()</a></li><li><a href="/example-code/uikit/how-to-detect-edge-swipes">How to detect edge swipes</a></li><li><a href="/example-code/media/cidetectortypeface-how-to-detect-faces-in-a-uiimage">CIDetectorTypeFace: How to detect faces in a UIImage</a></li></ul>
-->

:::

---

<TagLinks />