---
lang: ko-KR
title: "How to make an iPhone transmit an iBeacon"
description: "Article(s) > How to make an iPhone transmit an iBeacon"
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
      content: "Article(s) > How to make an iPhone transmit an iBeacon"
    - property: og:description
      content: "How to make an iPhone transmit an iBeacon"
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
  "title": "How to make an iPhone transmit an iBeacon | Location - free Swift example code",
  "desc": "How to make an iPhone transmit an iBeacon",
  "link": "https://hackingwithswift.com/example-code/location/how-to-make-an-iphone-transmit-an-ibeacon",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS 7.0 introduced not only the ability to detect iBeacons, but also the ability to create iBeacons – for iPhones and iPads to broadcast their own beacon signal that can then be detected by other devices. To make this work, you add these two imports:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">CoreBluetooth</span>
<span class="token keyword">import</span> <span class="token class-name">CoreLocation</span></code></pre>
<p>Now you need to make your view controller (or other class) conform to the <code>CBPeripheralManagerDelegate</code> protocol so that it’s capable of handling Bluetooth state changes. You also need to create three properties: the beacon itself, plus two Bluetooth properties that store configuration and management information. </p>
<p>Once that’s done, there are three methods you need to include. The first one creates the beacon and starts broadcasting, the second one stops the beacon, and the third one acts as an intermediary between your app and the iOS Bluetooth stack.</p>
<p>Here’s a working example to get you started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">CBPeripheralManagerDelegate</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> localBeacon<span class="token punctuation">:</span> <span class="token class-name">CLBeaconRegion</span><span class="token operator">!</span>
    <span class="token keyword">var</span> beaconPeripheralData<span class="token punctuation">:</span> <span class="token class-name">NSDictionary</span><span class="token operator">!</span>
    <span class="token keyword">var</span> peripheralManager<span class="token punctuation">:</span> <span class="token class-name">CBPeripheralManager</span><span class="token operator">!</span>

    <span class="token keyword">func</span> <span class="token function-definition function">initLocalBeacon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> localBeacon <span class="token operator">!=</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
            <span class="token function">stopLocalBeacon</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> localBeaconUUID <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"5A4BCFCE-174E-4BAC-A814-092E77F6B7E5"</span></span>
        <span class="token keyword">let</span> localBeaconMajor<span class="token punctuation">:</span> <span class="token class-name">CLBeaconMajorValue</span> <span class="token operator">=</span> <span class="token number">123</span>
        <span class="token keyword">let</span> localBeaconMinor<span class="token punctuation">:</span> <span class="token class-name">CLBeaconMinorValue</span> <span class="token operator">=</span> <span class="token number">456</span>

        <span class="token keyword">let</span> uuid <span class="token operator">=</span> <span class="token function">UUID</span><span class="token punctuation">(</span>uuidString<span class="token punctuation">:</span> localBeaconUUID<span class="token punctuation">)</span><span class="token operator">!</span>
        localBeacon <span class="token operator">=</span> <span class="token class-name">CLBeaconRegion</span><span class="token punctuation">(</span>proximityUUID<span class="token punctuation">:</span> uuid<span class="token punctuation">,</span> major<span class="token punctuation">:</span> localBeaconMajor<span class="token punctuation">,</span> minor<span class="token punctuation">:</span> localBeaconMinor<span class="token punctuation">,</span> identifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Your private identifer here"</span></span><span class="token punctuation">)</span>

        beaconPeripheralData <span class="token operator">=</span> localBeacon<span class="token punctuation">.</span><span class="token function">peripheralData</span><span class="token punctuation">(</span>withMeasuredPower<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
        peripheralManager <span class="token operator">=</span> <span class="token class-name">CBPeripheralManager</span><span class="token punctuation">(</span>delegate<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> queue<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">stopLocalBeacon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        peripheralManager<span class="token punctuation">.</span><span class="token function">stopAdvertising</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        peripheralManager <span class="token operator">=</span> <span class="token nil constant">nil</span>
        beaconPeripheralData <span class="token operator">=</span> <span class="token nil constant">nil</span>
        localBeacon <span class="token operator">=</span> <span class="token nil constant">nil</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">peripheralManagerDidUpdateState</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> peripheral<span class="token punctuation">:</span> <span class="token class-name">CBPeripheralManager</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> peripheral<span class="token punctuation">.</span>state <span class="token operator">==</span> <span class="token punctuation">.</span>poweredOn <span class="token punctuation">{</span>
            peripheralManager<span class="token punctuation">.</span><span class="token function">startAdvertising</span><span class="token punctuation">(</span>beaconPeripheralData <span class="token keyword">as</span><span class="token operator">?</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> peripheral<span class="token punctuation">.</span>state <span class="token operator">==</span> <span class="token punctuation">.</span>poweredOff <span class="token punctuation">{</span>
            peripheralManager<span class="token punctuation">.</span><span class="token function">stopAdvertising</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-hide-the-home-indicator-on-iphone-x">How to hide the home indicator on iPhone X</a></li><li><a href="/example-code/uikit/how-to-read-the-battery-level-of-an-iphone-or-ipad">How to read the battery level of an iPhone or iPad</a></li><li><a href="/example-code/uikit/how-to-check-whether-an-iphone-or-ipad-is-upside-down-or-face-up">How to check whether an iPhone or iPad is upside down or face up</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li></ul>
-->

:::

---

<TagLinks />