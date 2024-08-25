---
lang: ko-KR
title: "How to detect images using ARImageTrackingConfiguration"
description: "Article(s) > How to detect images using ARImageTrackingConfiguration"
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
  - ios-12.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to detect images using ARImageTrackingConfiguration"
    - property: og:description
      content: "How to detect images using ARImageTrackingConfiguration"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "ARKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/arkit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to detect images using ARImageTrackingConfiguration | ARKit - free Swift example code",
  "desc": "How to detect images using ARImageTrackingConfiguration",
  "link": "https://hackingwithswift.com/example-code/arkit/how-to-detect-images-using-arimagetrackingconfiguration",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 12.0

<!-- TODO: 작성 -->

<!--
<p>ARKit can automatically scan for images in the world, which means you can attach overlays showing more detail or trigger other behaviors inside your app depending on what was found. There are two important drawbacks you should be aware of before you start:</p>
<ol>
<li>The images need to be visually distinct, which means they need some amount of detail and color variation. Xcode will warn you if your images aren’t good enough.</li>
<li>ARKit can detect a fixed number of images at a time, so if you want to detect many you either need to decide which to search for based on location (e.g. iBeacons in an art gallery), or cycle between your picture selection constantly. 25 or fewer is the target Apple recommends.</li>
</ol>
<p>To get started detecting images, create a new iOS project using the Augmented Reality App template and SceneKit, then clean it up: open ViewController.swift, clear out everything in <code>viewDidLoad()</code> except the call to <code>super.viewDidLoad()</code> and <code>sceneView.delegate = self</code>, and finally delete the three empty methods at the end. You can also delete art.scnassets, which isn’t needed here.</p>
<p>The first step is to import the pictures you want ARKit to recognize. Remember, these should be digital copies of real-world pictures, so either scan the real-world objects or print your images. These pictures should <em>not</em> just be dragged into your asset catalog –&nbsp;we need to add them in a special way.</p>
<p>In your asset catalog, right-click on the blank space below AppIcon and choose New AR Resource Group. It will be named “AR Resources” by default, but I’d like you to change that to something that represents your images. For example, if you were looking for pictures in an art gallery you might call it Paintings. Now drag your images to where it says “No AR items”, to add those numbers to the resource group.</p>
<p>This process creates a set of images that ARKit is able to scan for, and although you can create as many as you want you can have only one active at a given time.</p>
<p>When you next press Cmd+B to build your project, Xcode will scan your ARKit images to make sure they are suitable for AR detection. You should, at least at first, always get warnings for your images, because Xcode should report the images need “non-zero, positive width”. This is because adding PNG files to the ARKit catalog isn’t enough: Xcode needs to know an estimated <em>size</em> of the images in the real world, so it can detect them more accurately. So, select each of your images, then enter their size into the attributes inspector –&nbsp;the default unit is meters, but you’ll probably find it easier to change that to centimeters.</p>
<p>Once you’ve entered a valid size for each image, Xcode’s warnings should go away –&nbsp;if any warnings remain it means your images fail the detection criteria, so read Xcode’s suggestions and try again.</p>
<p>The next step is to tell ARKit that we want to scan for images, and in particular those images we just added. Open ViewController.swift and change <code>viewWillAppear()</code> to this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewWillAppear</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> animated<span class="token punctuation">:</span> <span class="token class-name">Bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewWillAppear</span><span class="token punctuation">(</span>animated<span class="token punctuation">)</span>

    <span class="token keyword">let</span> configuration <span class="token operator">=</span> <span class="token class-name">ARImageTrackingConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">guard</span> <span class="token keyword">let</span> trackingImages <span class="token operator">=</span> <span class="token class-name">ARReferenceImage</span><span class="token punctuation">.</span><span class="token function">referenceImages</span><span class="token punctuation">(</span>inGroupNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"YourGroupNameHere"</span></span><span class="token punctuation">,</span> bundle<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// failed to read them – crash immediately!</span>
        <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Couldn't load tracking images."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    configuration<span class="token punctuation">.</span>trackingImages <span class="token operator">=</span> trackingImages
    sceneView<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>configuration<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p><strong>Note:</strong> Obviously you should change “YourGroupNameHere” to name of your AR resource group.</p>
<p>That loads the AR resource group you created and asks ARKit to track them. If for some reason you need to track more than one image at a time, you can set the <code>maximumNumberOfTrackedImages</code> property on your session to whatever you need –&nbsp;it defaults to 1, but modern iPhones can handle about 4.</p>
<p>Now that tracking is running, the final step is to make the app do something when your image is detected. Here’s some code for the <code>ViewController</code> class that places a translucent blue layer over each detected image:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">renderer</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> renderer<span class="token punctuation">:</span> <span class="token class-name">SCNSceneRenderer</span><span class="token punctuation">,</span> nodeFor anchor<span class="token punctuation">:</span> <span class="token class-name">ARAnchor</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">SCNNode</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token comment">// make sure this is an image anchor, otherwise bail out</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> imageAnchor <span class="token operator">=</span> anchor <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">ARImageAnchor</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token nil constant">nil</span> <span class="token punctuation">}</span>

    <span class="token comment">// create a plane at the exact physical width and height of our reference image</span>
    <span class="token keyword">let</span> plane <span class="token operator">=</span> <span class="token class-name">SCNPlane</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> imageAnchor<span class="token punctuation">.</span>referenceImage<span class="token punctuation">.</span>physicalSize<span class="token punctuation">.</span>width<span class="token punctuation">,</span> height<span class="token punctuation">:</span> imageAnchor<span class="token punctuation">.</span>referenceImage<span class="token punctuation">.</span>physicalSize<span class="token punctuation">.</span>height<span class="token punctuation">)</span>

    <span class="token comment">// make the plane have a transparent blue color</span>
    plane<span class="token punctuation">.</span>firstMaterial<span class="token operator">?</span><span class="token punctuation">.</span>diffuse<span class="token punctuation">.</span>contents <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>blue<span class="token punctuation">.</span><span class="token function">withAlphaComponent</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>

    <span class="token comment">// wrap the plane in a node and rotate it so it's facing us</span>
    <span class="token keyword">let</span> planeNode <span class="token operator">=</span> <span class="token class-name">SCNNode</span><span class="token punctuation">(</span>geometry<span class="token punctuation">:</span> plane<span class="token punctuation">)</span>
    planeNode<span class="token punctuation">.</span>eulerAngles<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token operator">-</span><span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">2</span>

    <span class="token comment">// now wrap that in another node and send it back</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token class-name">SCNNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    node<span class="token punctuation">.</span><span class="token function">addChildNode</span><span class="token punctuation">(</span>planeNode<span class="token punctuation">)</span>
    <span class="token keyword">return</span> node
<span class="token punctuation">}</span></code></pre>
<p>Wrapping our node in a parent is helpful so that ARKit can move, rotate, and scale the parent without affecting the child node inside.</p>
<p><strong>Tip:</strong> You can read the name of the detected image by using <code>imageAnchor.referenceImage.name</code> –&nbsp;this will match whatever name it has in your asset catalog.</p>
<p>That’s all the code you need, so if you run the app on a real device you should be able to try scanning your images. When it runs for the first time you’ll be asked for camera permissions, but after that you’ll find you can detect your images in any orientation, pick them up, move them around, and so on – ARKit is remarkably good at detecting all sorts of variations.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-draw-images-using-image-views">How to draw images using Image views</a></li><li><a href="/quick-start/swiftui/how-to-use-decorative-images-to-reduce-screen-reader-clutter">How to use decorative images to reduce screen reader clutter</a></li><li><a href="/quick-start/swiftui/how-to-render-images-using-sf-symbols">How to render images using SF Symbols</a></li><li><a href="/example-code/xcode/how-to-use-vector-images-in-your-asset-catalog">How to use vector images in your asset catalog</a></li><li><a href="/quick-start/swiftui/how-to-insert-images-into-text">How to insert images into text</a></li></ul>
-->

:::

---

<TagLinks />