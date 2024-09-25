---
lang: ko-KR
title: How to Use Streams and Services for Flutter State
description: Article(s) > How to Use Streams and Services for Flutter State
icon: iconfont icon-dart
category: 
  - Dart
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - dart
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Use Streams and Services for Flutter State
    - property: og:description
      content: How to Use Streams and Services for Flutter State
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/flutter-streams-and-services.html
prev: /programming/dart/articles/README.md
date: 2024-09-25
isOriginal: false
author: Obum
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1727130776096/a52147fe-e05a-45e7-af73-9f7a9a8510b5.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Dart > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/dart/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to Use Streams and Services for Flutter State"
  desc="Among the many state management architectures in Flutter, combining Dart streams with singleton classes (services) is an unpopular yet easy architecture. In this article, we’ll explore how to achieve this combination for app-wide state in Flutter. Ta..."
  url="https://freecodecamp.org/news/flutter-streams-and-services/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1727130776096/a52147fe-e05a-45e7-af73-9f7a9a8510b5.png"/>

<!-- TODO: 작성 -->

<!--                            
<p>Among the many state management architectures in Flutter, combining Dart streams with singleton classes (services) is an unpopular yet easy architecture.</p>
<p>In this article, we’ll explore how to achieve this combination for app-wide state in Flutter.</p>
<h2 id="heading-table-of-contents">Table of Contents</h2>
<ul>
<li><p><a class="post-section-overview" href="#heading-what-is-app-wide-state-in-flutter">What is App-wide State in Flutter?</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-what-is-a-stream-in-dart">What is a Stream in Dart?</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-create-a-stream-in-dart">How to Create a Stream in Dart</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-create-singleton-class-instances-or-services">How to Create Singleton Class Instances (or Services)</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-manipulate-state-streams-within-services">How to Manipulate State (streams) Within Services</a></p>
</li>
<li><p><a target="_blank" href="https://untitled+.vscode-resource.vscode-cdn.net/Untitled-1#heading-how-to-manipulate-state-streams-within-services">How to Use Dart Streams in Flutter Widgets</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-make-a-service-depend-on-another">How to Make a Service Depend on Another</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-improve-streams-with-rxdart-classes-and-extensions">How to Improve Streams with rxdart Classes and Extensions</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-update-state-in-applifecycle-callbacks">How to Update State in AppLifecycle Callbacks</a></p>
</li>
<li><p><a target="_blank" href="https://untitled+.vscode-resource.vscode-cdn.net/Untitled-1#heading-how-to-improve-streams-with-rxdart-classes-and-extensions">Flexibi</a><a class="post-section-overview" href="#heading-flexibility-in-state-management">l</a><a target="_blank" href="https://untitled+.vscode-resource.vscode-cdn.net/Untitled-1#heading-how-to-improve-streams-with-rxdart-classes-and-extensions">ity in</a> <a class="post-section-overview" href="#heading-flexibility-in-state-management">State Management</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-summary">Summary</a></p>
</li>
</ul>
<h2 id="heading-what-is-app-wide-state-in-flutter">What is App-wide State in Flutter?</h2>
<p>App-wide state comprises all variables that are relevant to multiple widgets at the same time. By app-wide state, we don't mean the state that is attached to <code>StatefulWidgets</code>. Those are ephemeral state. Updating them requires local or scoped calls to <a target="_blank" href="https://api.flutter.dev/flutter/widgets/State/setState.html">setState</a>.</p>
<p>In Flutter, app-wide state usually has a separate logical management from UI code. This separated logic is called a state management architecture. We have many state management architectures with which we can engineer app-wide state. Examples include <a target="_blank" href="https://github.com/obumnwabude/write/blob/main/2024/flutter/get-the-link">Provider</a>, <a target="_blank" href="https://github.com/obumnwabude/write/blob/main/2024/flutter/get-the-link">InheritedWidget</a>, <a target="_blank" href="https://github.com/obumnwabude/write/blob/main/2024/flutter/get-the-link">Riverpod</a>, <a target="_blank" href="https://github.com/obumnwabude/write/blob/main/2024/flutter/get-the-link">Bloc</a>, <a target="_blank" href="https://github.com/obumnwabude/write/blob/main/2024/flutter/get-the-link">Redux</a>, <a target="_blank" href="https://github.com/obumnwabude/write/blob/main/2024/flutter/get-the-link">Stacked</a>, and so on. Each of these state management architectures are efficient, good, and opinionated.</p>
<p>While your choice of architecture could vary based on different factors, consider adopting the following architecture in your projects. It involves using Dart streams and services (singleton classes) for keeping track of your app's state.</p>
<h2 id="heading-what-is-a-stream-in-dart">What is a Stream in Dart?</h2>
<p>A <a target="_blank" href="https://dart.dev/libraries/dart-async#stream">stream</a> continuously emits values. You can listen to a stream and constantly get new values when they are emitted. Streams in Dart are the equivalent of <a target="_blank" href="https://rxjs.dev/guide/observable"><code>Observable</code></a> in JavaScript.</p>
<p>In Dart, streams are different from <a target="_blank" href="https://dart.dev/libraries/dart-async#future">futures</a>. The difference is that while a future resolves to one value, a stream will continuously emit various values during its life.</p>
<p>Let's say we have a <code>counter</code> stream that keeps track of some current integer count. This count could be incremented or decremented. To use the values emitted by this <code>counter</code> stream, you listen to the <code>counter</code>. Listening implies calling the <code>.listen</code> method on the stream and handling the emitted value.</p>
<pre class="language-dart" tabindex="0"><code class="language-dart">counter<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>int value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Got </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">value</span></span><span class="token string">.'</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="heading-how-to-create-a-stream-in-dart">How to Create a Stream in Dart</h2>
<p>The <a target="_blank" href="https://dart.dev/libraries/dart-async#stream"><code>Stream</code></a> class comes with multiple factory constructors. They allow you to create various streams for various purposes. They include:</p>
<ul>
<li><p><code>Stream.empty</code></p>
</li>
<li><p><code>Stream.value</code></p>
</li>
<li><p><code>Stream.error</code></p>
</li>
<li><p><code>Stream.fromFuture</code></p>
</li>
<li><p><code>Stream.fromFutures</code></p>
</li>
<li><p><code>Stream.fromIterable</code></p>
</li>
<li><p><code>Stream.multi</code></p>
</li>
<li><p><code>Stream.periodic</code></p>
</li>
<li><p><code>Stream.eventTransformed</code></p>
</li>
</ul>
<p>Each constructor serves a specific purpose as its name suggests.</p>
<p>Another technique of creating a <code>Stream</code> is by obtaining it from a <code>StreamController</code>. You will have to create the <code>StreamController</code> yourself. The advantage of doing this is that the controller allows you to <em>add</em> values to it. When you add values to the controller, they get emitted to listeners of its stream.</p>
<pre class="language-dart" tabindex="0"><code class="language-dart"><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:async'</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> counterCtrl <span class="token operator">=</span> <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  counterCtrl<span class="token punctuation">.</span>stream<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>print<span class="token punctuation">)</span><span class="token punctuation">;</span>
  counterCtrl<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints 1</span>
<span class="token punctuation">}</span>
</code></pre>
<p>The problem with the default <code>StreamController</code> from the <code>dart:async</code> library is that it allows only one listener. It is unicast. If you attempt attaching another listener to this stream obtained from <code>StreamController</code>, it will throw a "bad state" error.</p>
<p>This issue is solved by the <code>BehaviorSubject</code> class from the <a target="_blank" href="https://pub.dev/packages/rxdart"><code>rxdart</code></a> package. Technically, <code>BehaviorSubject</code> is a <code>StreamController</code>. The difference is that it has more features like:</p>
<ol>
<li><p>Allows multiple listeners (very important).</p>
</li>
<li><p>Caches the latest emitted value or error.</p>
</li>
<li><p>Emits the latest cached value/error to a new listener once it newly subscribes.</p>
</li>
<li><p>Allows you to synchronously read the current (or last emitted) value from it.</p>
</li>
<li><p>Allows you to add values to it if it doesn't yet have any listener (the default <code>StreamController</code> doesn’t allow this).</p>
</li>
</ol>
<p>The <code>rxdart</code> package extends the capabilities of Dart streams. For example, it provides you with <code>BehaviorSubject</code>. Also, it exposes classes and extensions that allow more stream manipulations. To use the <code>rxdart</code> package, add it to your project's dependencies from pub using the following command:</p>
<pre class="language-bash" tabindex="0"><code class="language-bash">flutter pub <span class="token function">add</span> rxdart
</code></pre>
<p>Then import it in your project's Dart files. From there, you can create <code>BehaviorSubject</code> (more robust <code>StreamController</code>) that can allow multiple listeners while allowing you to control them (adding values to the streams).</p>
<pre class="language-dart" tabindex="0"><code class="language-dart"><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:rxdart/rxdart.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Create a BehaviorSubject.</span>
  <span class="token comment">//</span>
  <span class="token comment">// Asides from creating the BehaviorSubject, we can also  </span>
  <span class="token comment">// immediately add a value to it using Dart's cascade operator.</span>
  <span class="token keyword">final</span> counterBS <span class="token operator">=</span> <span class="token class-name">BehaviorSubject</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  counterBS<span class="token punctuation">.</span>stream<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>print<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints 0</span>
  counterBS<span class="token punctuation">.</span>stream<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>print<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints 0</span>
  counterBS<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints 1 twice</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Now that we can create streams (and listen to them), we need the exact same streams to be available to every part of our Flutter apps.</p>
<p>To ensure that it is the same instance of streams that different parts of our Flutter apps are accessing, we can expose the streams from singleton class instances that we create in the project.</p>
<h2 id="heading-how-to-create-singleton-class-instances-or-services">How to Create Singleton Class Instances (or Services)</h2>
<p>When something is called a singleton, it means only one of it exists. For example, we can say the sun is a singleton star because we have only one sun.</p>
<p>When it comes to programming, we use a singleton when we need the same copy of an object everywhere. Already, the <a target="_blank" href="https://en.m.wikipedia.org/wiki/Static_variable"><code>static</code></a> properties of a class are singletons to every instance of that class. When you declare a field or method as <code>static</code>, you're telling the runtime engine to always reuse the same static item.</p>
<p>This explains why <code>static</code> properties are used as constants. It's another reason why we use them without instantiating an object. Furthermore, in Flutter, we conventionally use static properties as a means to obtain new or existing instances of a class. For example, many Flutter classes (<code>MediaQuery</code>, <code>Navigator</code>, <code>ThemeData</code>, and so on) have a static <code>.of</code> method for obtaining their instances.</p>
<p>In this streams and services architecture, we expose only one instance from a class with the <code>static</code> keyword. At the same time, we hide that class constructor. Hiding the constructor ensures that no other Dart code outside the Dart file can create another instance of the same class. Doing this maintains the instance as a singleton.</p>
<p>Following common conventions, we can call this class a service. Any other Dart file in the project can listen to the exposed stream(s) from the service class and always get updated values emitted to it.</p>
<p>Services here are holders of app-wide state. Each service is a logical container of related features. In any other part of the code, through these services, we can access app-wide state variables (in our case, streams). In a production application, we could have an authentication service, another for notifications, another for files, and so on.</p>
<p>To have an app-wide available service (singleton class) with a stream in it:</p>
<ol>
<li><p>Create a service class.</p>
</li>
<li><p>Create a private constructor (so that no other Dart code outside the class can instantiate it).</p>
</li>
<li><p>Create a static private instance of that very class.</p>
</li>
<li><p>Expose this private instance as the singleton.</p>
</li>
<li><p>Create a private <code>BehaviorSubject</code> in that class.</p>
</li>
<li><p>Expose the <code>BehaviorSubject</code> stream as a public static getter from the class.</p>
</li>
</ol>
<pre class="language-dart" tabindex="0"><code class="language-dart"><span class="token comment">/* In counter_service.dart file */</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:rxdart/rxdart.dart'</span></span><span class="token punctuation">;</span>

<span class="token comment">// 1. Create a class</span>
<span class="token comment">// </span>
<span class="token comment">// The class name with "Service" appended to it indicates </span>
<span class="token comment">// that it is an app-wide state object.</span>
<span class="token keyword">class</span> <span class="token class-name">CounterService</span> <span class="token punctuation">{</span>
  <span class="token comment">// 2. Create a private constructor.</span>
  <span class="token comment">//</span>
  <span class="token comment">// This "just-underscore" constructor works. If we want, we could  </span>
  <span class="token comment">// still add a name after the underscore. The main thing is that </span>
  <span class="token comment">// underscore makes the constructor to be a private one.</span>
  <span class="token class-name">CounterService</span><span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 3. Create a static private instance.</span>
  <span class="token comment">// </span>
  <span class="token comment">// Prefixing underscore (_) to the variable name makes it private.</span>
  <span class="token comment">// By being private, no other Dart code outside this file can directly </span>
  <span class="token comment">// access it.</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> _instance <span class="token operator">=</span> <span class="token class-name">CounterService</span><span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 4. Expose this private instance as the singleton.</span>
  <span class="token keyword">static</span> <span class="token class-name">CounterService</span> <span class="token keyword">get</span> instance <span class="token operator">=</span><span class="token operator">&gt;</span> _instance<span class="token punctuation">;</span>

  <span class="token comment">// 5. Create a private BehaviorSubject.</span>
  <span class="token keyword">final</span> _counterBS <span class="token operator">=</span> <span class="token class-name">BehaviorSubject</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 6. Expose the BehaviorSubject's Stream.</span>
  <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span> <span class="token keyword">get</span> countStream <span class="token operator">=</span><span class="token operator">&gt;</span> _counterBS<span class="token punctuation">.</span>stream<span class="token punctuation">;</span>

  <span class="token comment">// Also, if need be, expose the BehaviorSubject's current as a getter.</span>
  int <span class="token keyword">get</span> currentCount <span class="token operator">=</span><span class="token operator">&gt;</span> _counterBS<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* In any other Dart file in the project */</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'counter_service.dart'</span></span>

<span class="token comment">// Attach a listener to the stream</span>
<span class="token class-name">CounterService</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span>countStream<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// Use the count as use wish. Code you write within this </span>
   <span class="token comment">// listener's block will be called whenever count is </span>
   <span class="token comment">// update/re-emitted.</span>

   <span class="token function">print</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints 0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Read the current stream value just once without subscribing</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">CounterService</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span>currentCount<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints 0</span>
</code></pre>
<h2 id="heading-how-to-manipulate-state-streams-within-services">How to Manipulate State (Streams) Within Services</h2>
<p>Most times, each service will have multiple streams. This is as expected, given that, for a given logical state feature, there would be multiple variables affecting it. Therefore, where need be, don't hesitate to declare multiple <code>BehaviorSubject</code> (while exposing their streams) within the same service class.</p>
<p>For each stream, you want to control its data. That's why we are using <code>BehaviorSubject</code>, so that we can add values to it when there is a need to update state.</p>
<p>Different events (whether from the user or your servers) can be the cause of such state updates. You want to trigger state updates (or add values to streams) anytime those events occur.</p>
<p>You could always poll your backend and emit changes to your streams if any event happens. You could also emit values based on changes in other services. In addition, if need be, services should also expose relevant methods that will update their streams. In turn, other parts of the app can call these methods and trigger changes. The obvious advantage is that every listener will respectively get the new stream value emitted to them.</p>
<pre class="language-dart" tabindex="0"><code class="language-dart"><span class="token comment">/* In counter_service.dart file */</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:rxdart/rxdart.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">CounterService</span> <span class="token punctuation">{</span>
  <span class="token class-name">CounterService</span><span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> _instance <span class="token operator">=</span> <span class="token class-name">CounterService</span><span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token class-name">CounterService</span> <span class="token keyword">get</span> instance <span class="token operator">=</span><span class="token operator">&gt;</span> _instance<span class="token punctuation">;</span>

  <span class="token keyword">final</span> _counterBS <span class="token operator">=</span> <span class="token class-name">BehaviorSubject</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span> <span class="token keyword">get</span> countStream <span class="token operator">=</span><span class="token operator">&gt;</span> _counterBS<span class="token punctuation">.</span>stream<span class="token punctuation">;</span>
  int <span class="token keyword">get</span> currentCount <span class="token operator">=</span><span class="token operator">&gt;</span> _counterBS<span class="token punctuation">.</span>value<span class="token punctuation">;</span>

  <span class="token comment">// Incrementing/Decrementing the counter will trigger state updates.</span>
  <span class="token keyword">void</span> <span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> _counterBS<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>currentCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">decrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> _counterBS<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>currentCount <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* In another Dart file in the project */</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'counter_service.dart'</span></span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> service <span class="token operator">=</span> <span class="token class-name">CounterService</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
  service<span class="token punctuation">.</span>countStream<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>print<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints 0</span>
  service<span class="token punctuation">.</span><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// causes 1 to be printed</span>
  service<span class="token punctuation">.</span><span class="token function">decrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// causes 0 to be printed</span>
<span class="token punctuation">}</span>
</code></pre>
<p>For a more concrete example, let's say we have an <code>AuthenticationService</code>. It declares some <code>_userBS</code> and exposes a <code>currentUser</code> stream with type <code>Stream&lt;User?&gt;</code>, the user will be valid if authenticated or <code>null</code> if signed out. This auth service will naturally have <code>signIn</code> and <code>signOut</code> which can both add values to <code>_userBS</code>. The sign-up and login screens can each call <code>signIn</code> whereas the “switch account” and “log out” buttons can each call <code>signOut</code>.</p>
<pre class="language-dart" tabindex="0"><code class="language-dart"><span class="token comment">/* In user.dart */</span>
<span class="token comment">// A simple user with only email and username for demo purposes. </span>
<span class="token comment">// Your User model/schema would have more properties.</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>email<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* In authentication_service.dart */</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:rxdart/rxdart.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'user.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">AuthenticationService</span> <span class="token punctuation">{</span>
   <span class="token class-name">AuthenticationService</span><span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">static</span> <span class="token keyword">final</span> _instance <span class="token operator">=</span> <span class="token class-name">AuthenticationService</span><span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">static</span> <span class="token class-name">AuthenticationService</span> instance <span class="token operator">=</span><span class="token operator">&gt;</span> _instance<span class="token punctuation">;</span>

   <span class="token comment">// User BehaviorSubject and its stream.</span>
   <span class="token keyword">final</span> _userBS <span class="token operator">=</span> <span class="token class-name">BehaviorSubject</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">get</span> currentUser <span class="token operator">=</span><span class="token operator">&gt;</span> _userBS<span class="token punctuation">.</span>stream<span class="token punctuation">;</span>

   <span class="token comment">// signIn adds a new User to the stream.</span>
   <span class="token keyword">void</span> <span class="token function">signIn</span><span class="token punctuation">(</span><span class="token class-name">String</span> email<span class="token punctuation">,</span> <span class="token class-name">String</span> username<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     _userBS<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// signOut sets the currentUser as null</span>
   <span class="token keyword">void</span> <span class="token function">signOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> _userBS<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">// signIn and signOut methods that tamper the state could do other </span>
   <span class="token comment">// actions like recording analytics or carrying out navigation.</span>
   <span class="token comment">// Also, they could do some validation or run some checks before</span>
   <span class="token comment">// emitting values. The idea is that you get comfortable with</span>
   <span class="token comment">// updating the values of BehaviorSubject (hence emitting streams) </span>
   <span class="token comment">// from controlled methods within the service.</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Another state manipulation point is at initializing services. Some streams may warrant an asynchronous initializer before they should be used. You can define <code>init</code> methods in the services, and call the methods before calling <a target="_blank" href="https://api.flutter.dev/flutter/widgets/runApp.html"><code>runApp</code></a> in the topmost main method in Flutter.</p>
<p><code>init</code> methods may be "localStorage"-saved values from previous app runs. They can make API calls, check permissions, or set up <a target="_blank" href="https://api.flutter.dev/flutter/services/EventChannel-class.html">EventChannel</a> listeners. When you call them before <code>runApp</code>, be sure to call <code>ensureInitialized()</code> from <a target="_blank" href="https://api.flutter.dev/flutter/widgets/WidgetsFlutterBinding-class.html"><code>WidgetsFlutterBinding</code></a> before initializing the services. This is especially mandatory if any of the service <code>init</code> code will access a <a target="_blank" href="https://docs.flutter.dev/platform-integration/platform-channels"><code>PlatformChannel</code></a>.</p>
<pre class="language-dart" tabindex="0"><code class="language-dart"><span class="token comment">/* authentication_service.dart */</span>
<span class="token comment">// ... imports</span>
<span class="token keyword">class</span> <span class="token class-name">AuthenticationService</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... other code</span>

  <span class="token comment">// initialize the service and carry-out other setups if need be.</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token operator">=</span><span class="token operator">&gt;</span> _userBS<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">_fetchSavedUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* main.dart */</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'authentication_service.dart'</span></span><span class="token punctuation">;</span>

<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token class-name">WidgetsFlutterBinding</span><span class="token punctuation">.</span><span class="token function">ensureInitialized</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Initialize the service to be sure it is up and running before</span>
  <span class="token comment">// launching the app. You could also initialize other services here.</span>
  <span class="token comment">// Only do this if they are carrying out asynchronous executions,</span>
  <span class="token comment">// and the results need to be ready before the UI launches.</span>
  <span class="token keyword">await</span> <span class="token class-name">AuthenticationService</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<h2 id="heading-how-to-use-dart-streams-in-flutter-widgets">How to Use Dart Streams in Flutter Widgets</h2>
<p>Flutter comes with a built-in <a target="_blank" href="https://api.flutter.dev/flutter/widgets/StreamBuilder-class.html">StreamBuilder</a> widget. It takes a stream and a builder function. This builder function will get a <code>BuildContext</code> and snapshot data about the stream. The function should always return a widget.</p>
<p>When building UIs, you can wrap UI parts that depend on or display values emitted from app-wide streams in <code>StreamBuilders</code>. That way, once the stream emits a value, Flutter auto-rebuilds the children widget of the <code>StreamBuilders</code> with the latest values.</p>
<pre class="language-dart" tabindex="0"><code class="language-dart"><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'counter_service.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">CounterWidget</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">StreamBuilder</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>
      stream<span class="token punctuation">:</span> <span class="token class-name">CounterService</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span>countStream<span class="token punctuation">,</span> <span class="token comment">// The stream to listen to</span>
      initialData<span class="token punctuation">:</span> <span class="token class-name">CounterService</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span>currentCount<span class="token punctuation">,</span> <span class="token comment">// Initial value</span>
      builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> snapshot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Check if the snapshot has data</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>snapshot<span class="token punctuation">.</span>hasData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Counter: </span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">snapshot<span class="token punctuation">.</span>data</span><span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>fontSize<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// Handle any error or empty state</span>
          <span class="token keyword">return</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Loading...'</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>fontSize<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p><code>StreamBuilders</code> are great tools. However, there are times when it is not suitable to use them. For example:</p>
<ul>
<li><p>When a given UI screen depends on multiple streams that are exposed by the same or different services.</p>
</li>
<li><p>When you want to do some computation on the stream values before rendering them in the UI.</p>
</li>
</ul>
<p>In those cases, we need to listen to the streams separately in <code>initState</code>, set values through <code>setState</code> calls (to update the UI), and dispose of the <code>StreamSubscriptions</code> in the StatefulWidget's <code>dispose</code> method.</p>
<p>Listening to the streams separately allows us to perform any customizations or to merge data when the streams emit values. In addition, we make our UI code easier to read given that we’ve taken out logic-related code from the build method. However, we should do this only when necessary: <code>StreamBuilders</code> will, most of the time, be sufficient.</p>
<pre class="language-dart" tabindex="0"><code class="language-dart"><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:async'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'counter_service.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">CounterStatefulWidget</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">CounterStatefulWidget</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  _CounterStatefulWidgetState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_CounterStatefulWidgetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _CounterStatefulWidgetState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CounterStatefulWidget</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  late <span class="token class-name">StreamSubscription</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span> counterSub<span class="token punctuation">;</span>
  int count <span class="token operator">=</span> <span class="token class-name">CounterService</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span>currentCount<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Initialize the stream subscription</span>
    counterSub <span class="token operator">=</span> <span class="token class-name">CounterService</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span>countStream<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Update state on new stream value</span>
      <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Dispose of the stream subscription to avoid memory leaks</span>
    counterSub<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Counter: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">count</span></span><span class="token string">'</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>fontSize<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>The example above demonstrates listening and disposing from outside the build method. The example is not a good use case of when you should do that.</p>
<h2 id="heading-how-to-make-a-service-depend-on-another">How to Make a Service Depend on Another</h2>
<p>In complex applications, it's common to have services that depend on each other. The dependent service can listen to streams and call methods of the independent service. Also, the dependent service can import and reference the independent service just as we’ve been doing in UI code above.</p>
<p>For instance, if we are building an e-commerce app, a <code>CartService</code> may depend on an <code>AuthenticationService</code> to fetch carts and orders for the signed-in user. If the user signs out, some <code>currentUser</code> stream in the <code>AuthenticationService</code> will emit <code>null</code>. In turn, the listening <code>CartService</code> will update the cart. When next a new user signs in, it will fetch the new cart.</p>
<pre class="language-dart" tabindex="0"><code class="language-dart"><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:rxdart/rxdart.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'authentication_service.dart'</span></span><span class="token punctuation">;</span>

<span class="token comment">// Item model representing a cart item.</span>
<span class="token keyword">class</span> <span class="token class-name">CartItem</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">final</span> int quantity<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">CartItem</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>quantity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// CartService to manage the user's shopping cart.</span>
<span class="token keyword">class</span> <span class="token class-name">CartService</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token comment">// Dependency on AuthenticationService.</span>
  <span class="token keyword">final</span> _auth <span class="token operator">=</span> <span class="token class-name">AuthenticationService</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span>

  <span class="token keyword">final</span> _cartItemsBS <span class="token operator">=</span> <span class="token class-name">BehaviorSubject</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">CartItem</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">CartItem</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">get</span> cartStream <span class="token operator">=</span><span class="token operator">&gt;</span> _cartItemsBS<span class="token punctuation">.</span>stream<span class="token punctuation">;</span>

  <span class="token class-name">CartService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Listen to the currentUser stream in AuthenticationService.</span>
    _auth<span class="token punctuation">.</span>currentUserStream<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// User signed out, clear the cart.</span>
        <span class="token function">_clearCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// User signed in, fetch their cart.</span>
        <span class="token function">_fetchCartForUser</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Method to clear the cart (called on sign-out).</span>
  <span class="token keyword">void</span> <span class="token function">_clearCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _cartItemsBS<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Emit an empty list to clear the cart.</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Method to fetch the cart for a signed-in user (simulated).</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">_fetchCartForUser</span><span class="token punctuation">(</span><span class="token class-name">String</span> email<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Watch out for <a target="_blank" href="https://en.wikipedia.org/wiki/Circular_dependency">circular dependency</a> problems when your services depend on each other. Circular dependency occurs when two services inter-depend on themselves. This scenario is usually inevitable as business logic grows.</p>
<p>When faced with it, lift the state they want to co-share to a different service and import this new service into the others. Another solution is to use Dart’s <code>late</code> keywords when importing the interdependent services. You can also find ways to ensure that variable accessing is within functions and not at some top-level declaration.</p>
<h2 id="heading-how-to-improve-streams-with-rxdart-classes-and-extensions">How to Improve Streams with rxdart Classes and Extensions</h2>
<p>Asides from having service methods that update streams, you can also have new or improved streams based on existing ones, by using <code>rxdart</code> classes and extensions.</p>
<p>An example class is <a target="_blank" href="https://pub.dev/documentation/rxdart/latest/rx/CombineLatestStream-class.html"><code>CombineLatestStream</code></a>. It takes multiple streams and a combiner function to return a new stream that will re-emit the combined latest values of the source streams (depending on the optional combiner).</p>
<pre class="language-dart" tabindex="0"><code class="language-dart"><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:rxdart/rxdart.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MultipliedCounterService</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... </span>

  <span class="token keyword">final</span> _counterBS <span class="token operator">=</span> <span class="token class-name">BehaviorSubject</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> _multiplierBS <span class="token operator">=</span> <span class="token class-name">BehaviorSubject</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span> <span class="token keyword">get</span> combinedStream <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">CombineLatestStream</span><span class="token punctuation">(</span>
        <span class="token punctuation">[</span>_counterBS<span class="token punctuation">.</span>stream<span class="token punctuation">,</span> _multiplierBS<span class="token punctuation">.</span>stream<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> values<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> values<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token function">incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> _counterBS<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>_counterBS<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">changeMultiplier</span><span class="token punctuation">(</span>int mul<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> _multiplierBS<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mul<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Another good stream method is <a target="_blank" href="https://pub.dev/documentation/rxdart/latest/rx/DebounceExtensions/debounceTime.html"><code>debounceTime</code></a>. This is a stream extension that is useful for ignoring frequent emissions and processing the latest value after a delay (like when searching). An emission will only occur after the set duration and when there is no other emission in between that time. It helps avoid excessive API calls by waiting for a period of inactivity before emitting the latest value.</p>
<pre class="language-dart" tabindex="0"><code class="language-dart"><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:rxdart/rxdart.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">SearchService</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... </span>

  <span class="token keyword">final</span> _searchQueryBS <span class="token operator">=</span> <span class="token class-name">BehaviorSubject</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Stream with debouncing to emit values only after a</span>
  <span class="token comment">// 300ms delay. For example: keystrokes will be bundled at once.</span>
  <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">get</span> debouncedSearchQueryStream <span class="token operator">=</span><span class="token operator">&gt;</span>
      _searchQueryBS<span class="token punctuation">.</span>stream<span class="token punctuation">.</span><span class="token function">debounceTime</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">(</span>milliseconds<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token function">updateSearchQuery</span><span class="token punctuation">(</span><span class="token class-name">String</span> query<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> _searchQueryBS<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>The <code>rxdart</code> package provides more classes and stream extensions that will be useful to you, even if you don’t use this architecture. Check them out later on.</p>
<h2 id="heading-how-to-update-state-in-applifecycle-callbacks">How to Update State in AppLifecycle Callbacks</h2>
<p>When a user minimizes or leaves your application and comes back, some external things you rely on for data may have changed.</p>
<p>For example, when you prompt a user to grant any permissions, the operating system displays a popup over your application. Programmatically, the displayed popup caused your app to lose focus or go into background mode. When the popup is gone, your app resumes focus and you need to detect whether you got the permissions.</p>
<p>Equally, if you are managing the contents of a specific File Explorer Directory within your application (like converted music, encrypted docs, call logs, and so on), when your app goes in background, there could be changes to that directory from the user, which are worth detecting when the user comes back.</p>
<p>Sometimes, you may want to know when the user comes back to your application for authentication purposes, like terminating a session if they stayed away for too long and they need to re-authenticate. Other times, you may want to refresh app contents, to retain the user, as you can do if building a social media app.</p>
<p>In all these cases, we need a way to programmatically know when our app comes back to the user's focus after the user had left. Luckily, Flutter provides us with <a target="_blank" href="https://api.flutter.dev/flutter/dart-ui/AppLifecycleState.html"><code>AppLifecycleState</code></a> and a way to react to changes to them.</p>
<p>An app’s lifecycle refers to its various states while it is running. In Flutter, <code>AppLifecycleState</code> includes detached, resumed, inactive, hidden, and paused. In the above example cases, anytime the user comes back to the app, the app’s lifecycle state becomes <code>AppLifecycleState.resumed</code>.</p>
<p>We can react to lifecycle changes and call our service methods when a particular state occurs. To listen to lifecycle changes, your service class should add the <code>WidgetsBindingObserver</code> mixin to its declaration. Then you should override <code>didChangeAppLifecycleState</code> with a callback. This callback should handle states it is interested in.</p>
<pre class="language-dart" tabindex="0"><code class="language-dart"><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">PermissionService</span> <span class="token keyword">with</span> <span class="token class-name">WidgetsBindingObserver</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">checkPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... </span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">didChangeAppLifecycleState</span><span class="token punctuation">(</span><span class="token class-name">AppLifecycleState</span> state<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">==</span> <span class="token class-name">AppLifecycleState</span><span class="token punctuation">.</span>resumed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">checkPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// you can check for the other states too and handle as expected.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<h2 id="heading-flexibility-in-state-management">Flexibility in State Management</h2>
<p>There are multiple choices and flavors for state management in the Flutter community. Most of the time, the same features can always be built with any state management of choice.</p>
<p>With that in mind, be flexible with state management architectures in Flutter. They are not some hard cast rules. Bend and play around with them to suit your unique app cases as there is no "one size fits all" here.</p>
<p>You can play around with streams and services. You could use <a target="_blank" href="https://pub.dev/packages/get_it">getIt</a> for obtaining singletons. <code>getIt</code> also allows you to obtain scoped singletons, that is, singletons attached to a navigator or a logical part of features (within a search for example).</p>
<p>You can also combine this architecture with others. Like declaring and managing streams as explained here but in providers or cubits. Or bringing in features of other architectures into services you declare as described in this article.</p>
<p>Just be sure you know what you're doing and that you understand how to coordinate the variables representing app state. Preferably, document your choice of architectures in your codebase for future reference.</p>
<h2 id="heading-summary">Summary</h2>
<p>In summary, we have explored an efficient architecture for managing app-wide state in Flutter using Dart streams and singleton services.</p>
<p>We've also seen how to manipulate streams, how to use them in UI code, make services depend on each other, improve streams using <code>rxdart</code>, and handle app lifecycle changes.</p>
<p>Remember that state management in Flutter is flexible, and no one solution fits all. Tailor your choice of state management architecture to fit your specific app needs.</p>
-->

---

<TagLinks />