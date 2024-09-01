---
lang: ko-KR
title: "How to read the user’s location while your app is in the background"
description: "Article(s) > How to read the user’s location while your app is in the background"
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
  - ios-11.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to read the user’s location while your app is in the background"
    - property: og:description
      content: "How to read the user’s location while your app is in the background"
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
  "title": "How to read the user’s location while your app is in the background | Location - free Swift example code",
  "desc": "How to read the user’s location while your app is in the background",
  "link": "https://hackingwithswift.com/example-code/location/how-to-read-the-users-location-while-your-app-is-in-the-background",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 11.0

<!-- TODO: 작성 -->

<!-- 
<p>iOS has had the ability to track locations in the background for some time, but the permission system changed in iOS 8 then again in iOS 11 as Apple has tried to stop unscrupulous apps abusing private information.</p>
<p>Reading the user’s location in the background takes a few steps. First, open your Info.plist file, add key called “Privacy - Location Always and When In Use Usage Description” and "Privacy - Location When In Use Usage Description”, then give both of them whatever text you want to show to users when you ask for their location. They are both required, because iOS always allows user to restrict location access to when your app is in use.</p>
<p>Now open whichever controller you want to use to look for the user’s location, and add this import:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">CoreLocation</span></code></pre>
<p>You need to tell Swift that your class conforms to the <code>CLLocationManagerDelegate</code> protocol so that you can start to receive location updates.</p>
<p>Location tracking is done using the <code>CLLocationManager</code> class, which is also responsible for requesting location permission from users. You need to create a property for this in your class so that you can store the active location manager, so add this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> locationManager<span class="token punctuation">:</span> <span class="token class-name">CLLocationManager</span><span class="token operator">?</span></code></pre>
<p>If you're using a view controller, you'll probably want to initialize this property in <code>viewDidLoad()</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    locationManager <span class="token operator">=</span> <span class="token class-name">CLLocationManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    locationManager<span class="token operator">?</span><span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token keyword">self</span>
    locationManager<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">requestAlwaysAuthorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Once you request permission to use your user's location, they'll see an alert with the message you wrote earlier. When they make a choice you'll get a delegate callback called <code>didChangeAuthorization</code>, at which point you can check whether they are authorized you or not:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">locationManager</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> manager<span class="token punctuation">:</span> <span class="token class-name">CLLocationManager</span><span class="token punctuation">,</span> didChangeAuthorization status<span class="token punctuation">:</span> <span class="token class-name">CLAuthorizationStatus</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> status <span class="token operator">==</span> <span class="token punctuation">.</span>authorizedAlways <span class="token punctuation">{</span>
        <span class="token comment">// you're good to go!</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>If you’re able to fall back to using location only when your app is in use, you should add a second check to the code above just in case the user didn’t select the option you wanted.</p>
<p>The final step is to tell Xcode that we want location updates to continue being delivered while the app is in the background. Select your project using the project navigator, then find your app’s target and choose the Capabilities tab. You need to enable Background Modes, then check the box marked “Location updates”.</p>
<p>That’s all the code done now, so you can go ahead and implement the <code>didUpdateLocations</code> method and wait for it to be called. Something like this ought to get you started:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">locationManager</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> manager<span class="token punctuation">:</span> <span class="token class-name">CLLocationManager</span><span class="token punctuation">,</span> didUpdateLocations locations<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">CLLocation</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> location <span class="token operator">=</span> locations<span class="token punctuation">.</span>last <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"New location is </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">location</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/games/how-to-find-a-touchs-location-in-a-node-using-locationin">How to find a touch's location in a node using location(in:)</a></li><li><a href="/example-code/uikit/how-to-find-a-touchs-location-in-a-view-with-locationin">How to find a touch's location in a view with location(in:)</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li><li><a href="/quick-start/swiftui/how-to-read-the-users-location-using-locationbutton">How to read the user’s location using LocationButton</a></li></ul>
-->

:::

---

<TagLinks />