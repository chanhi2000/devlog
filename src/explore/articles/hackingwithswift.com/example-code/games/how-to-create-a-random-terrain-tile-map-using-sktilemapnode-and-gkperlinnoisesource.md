---
lang: ko-KR
title: "How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource"
description: "Article(s) > How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource"
    - property: og:description
      content: "How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Games - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/games/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource | Games - free Swift example code",
  "desc": "How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource",
  "link": "https://hackingwithswift.com/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!-- 
<p>Tile maps are designed to enable extremely efficient drawing of large amounts of terrain, and work by building grids of smaller images that combine to form large and varied maps. Helpfully, SpriteKit automatically manages the tiles to keep their overhead as low as possible, and even builds a tile map editor directly into Xcode so you can literally paint your maps by clicking around.</p>
<p>To try it out, go to the File menu and choose New &gt; File, then choose iOS &gt; Resource &gt; SpriteKit Tile Set. Select the Grid Tile Set template, name it TileSet then click Create. Xcode will produce an example tile set that contains a variety of animated images in different terrains –&nbsp;more than enough to get started with.</p>
<p>We’re going to create two levels of terrain in our map: one that contains grass and water, and one that contains sand. By layering one over the other we can create a nice, seamless map, and if we place both the layers inside a single <code>SKNode</code> we can move the map easily.</p>
<p><strong>Tip:</strong> You can add the following code to your current game project if you want, but for testing purposes you should probably create a new SpriteKit project as a sandbox.</p>
<p>First please add this property to your game scene:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token class-name">SKNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
<p>That will contain both the sand tiles and the grass/water tiles, so we can move and scale them together.</p>
<p>Add this inside the <code>didMove(to:)</code> method, to add the map to the main game scene, and scale it down small so we can see more –&nbsp;it’s a helpful way to be able to see more of the map when you’re just starting out:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token function">addChild</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
map<span class="token punctuation">.</span>xScale <span class="token operator">=</span> <span class="token number">0.2</span>
map<span class="token punctuation">.</span>yScale <span class="token operator">=</span> <span class="token number">0.2</span></code></pre>
<p>Next, we need to load the tile set that Xcode generated for us, and put in place a few constants: each tile is 128x128, and we want a 128x128 map to be generated. To load a tile set you use <code>SKTileSet(named:)</code> providing the <em>name of the tile set</em>, and <em>not</em> the filename. In this case, that means providing “Sample Grid Tile Set” rather than TileSet.sks. This initializer returns an optional <code>SKTileSet</code>, but because we specifically just added this – and because it’s rather important to the fundamental workings of our program - I feel this is safe to force unwrap.</p>
<p>Add this below the previous code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> tileSet <span class="token operator">=</span> <span class="token class-name">SKTileSet</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Sample Grid Tile Set"</span></span><span class="token punctuation">)</span><span class="token operator">!</span>
<span class="token keyword">let</span> tileSize <span class="token operator">=</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">128</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> columns <span class="token operator">=</span> <span class="token number">128</span>
<span class="token keyword">let</span> rows <span class="token operator">=</span> <span class="token number">128</span></code></pre>
<p>Next we need some tiles to draw. That <code>SKTileSet</code> we just loaded contains a selection of tiles, but we specifically want the water, grass, and sand tiles for our map. So, we can search for those and create constants for easy reference – add this below the previous code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> waterTiles <span class="token operator">=</span> tileSet<span class="token punctuation">.</span>tileGroups<span class="token punctuation">.</span>first <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string-literal"><span class="token string">"Water"</span></span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> grassTiles <span class="token operator">=</span> tileSet<span class="token punctuation">.</span>tileGroups<span class="token punctuation">.</span>first <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string-literal"><span class="token string">"Grass"</span></span><span class="token punctuation">}</span>
<span class="token keyword">let</span> sandTiles <span class="token operator">=</span> tileSet<span class="token punctuation">.</span>tileGroups<span class="token punctuation">.</span>first <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string-literal"><span class="token string">"Sand"</span></span><span class="token punctuation">}</span></code></pre>
<p>Finally, we can draw some tiles. We’re going to start with the sand tiles, which means creating an <code>SKTileMapNode</code> using the size constants from above, then calling its <code>fill()</code> method with the <code>sandTiles</code> tiles. Add this code next:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> bottomLayer <span class="token operator">=</span> <span class="token class-name">SKTileMapNode</span><span class="token punctuation">(</span>tileSet<span class="token punctuation">:</span> tileSet<span class="token punctuation">,</span> columns<span class="token punctuation">:</span> columns<span class="token punctuation">,</span> rows<span class="token punctuation">:</span> rows<span class="token punctuation">,</span> tileSize<span class="token punctuation">:</span> tileSize<span class="token punctuation">)</span>
bottomLayer<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> sandTiles<span class="token punctuation">)</span>
map<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>bottomLayer<span class="token punctuation">)</span></code></pre>
<p>Switch to an iPad simulator, then try running the code now –&nbsp;you should see a field of yellow.</p>
<p><img class="hws" src="/img/hws/example-code-604-1.png" alt=""></p>
<p>Next, we need to generate some random terrain for our grass/water layer. GameplayKit gives us a number of noise generators specifically designed for this purpose, and here we’re going to use a Perlin noise generator. This will create an image where each pixel is black, white, or some shade or gray, and we’ll use that to decide whether our terrain should be water, grass, or sand.</p>
<p>Make sure you have <code>import GameplayKit</code> in your Swift file, then add this method to your game scene:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">makeNoiseMap</span><span class="token punctuation">(</span>columns<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> rows<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">GKNoiseMap</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> source <span class="token operator">=</span> <span class="token class-name">GKPerlinNoiseSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    source<span class="token punctuation">.</span>persistence <span class="token operator">=</span> <span class="token number">0.9</span>

    <span class="token keyword">let</span> noise <span class="token operator">=</span> <span class="token class-name">GKNoise</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
    <span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token function">vector2</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> origin <span class="token operator">=</span> <span class="token function">vector2</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> sampleCount <span class="token operator">=</span> <span class="token function">vector2</span><span class="token punctuation">(</span><span class="token class-name">Int32</span><span class="token punctuation">(</span>columns<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Int32</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token class-name">GKNoiseMap</span><span class="token punctuation">(</span>noise<span class="token punctuation">,</span> size<span class="token punctuation">:</span> size<span class="token punctuation">,</span> origin<span class="token punctuation">:</span> origin<span class="token punctuation">,</span> sampleCount<span class="token punctuation">:</span> sampleCount<span class="token punctuation">,</span> seamless<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Let me briefly explain what all that does:</p>
<ol>
<li><code>GKPerlinNoiseSource</code> is one of several GameplayKit noise generators. Perlin noise is specifically designed to make <em>coherent</em> noise (noise that looks meaningful), which makes it great for things like clouds and terrain.</li>
<li>The <code>persistence</code> property of the noise source determines how smooth the noise is –&nbsp;how likely it is to change. Higher values make it change more frequently, creating rougher terrain.</li>
<li><code>GKNoise</code> is a general class that manages some source (our Perlin noise) and generate output.</li>
<li><code>GKNoiseMap</code> is the part we care about: it generates the actual output of noise across a specific size.</li>
<li>We configure the noise map to take 1x1 slices from the noise, starting at the origin (0, 0), and generating up to a fixed number of rows and columns.</li>
<li>Yes, noise maps work with <code>Int32</code> rather than a regular <code>Int</code>, because… well, I have no idea why, to be honest. Yay.</li>
</ol>
<p>That creates a noise map, which will be a 256x256 series of values that range from -1.0 (deep water) to 1.0 (high ground). </p>
<p><img class="hws" src="/img/hws/example-code-604-2.png" alt=""></p>
<p>The next step is to go back to <code>didMove(to:)</code>, call that method to generate a noise map, then use it for our grass/water layer. This will use SpriteKit’s automapping system, which allows us to mark certain squares as being water or grass and have it automatically choose what kind of tile should be placed there so that the water and grass meet each other correctly.</p>
<p>First, add this to <code>didMove(to:)</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// create the noise map</span>
<span class="token keyword">let</span> noiseMap <span class="token operator">=</span> <span class="token function">makeNoiseMap</span><span class="token punctuation">(</span>columns<span class="token punctuation">:</span> columns<span class="token punctuation">,</span> rows<span class="token punctuation">:</span> rows<span class="token punctuation">)</span>

<span class="token comment">// create our grass/water layer</span>
<span class="token keyword">let</span> topLayer <span class="token operator">=</span> <span class="token class-name">SKTileMapNode</span><span class="token punctuation">(</span>tileSet<span class="token punctuation">:</span> tileSet<span class="token punctuation">,</span> columns<span class="token punctuation">:</span> columns<span class="token punctuation">,</span> rows<span class="token punctuation">:</span> rows<span class="token punctuation">,</span> tileSize<span class="token punctuation">:</span> tileSize<span class="token punctuation">)</span>

<span class="token comment">// make SpriteKit do the work of placing specific tiles</span>
topLayer<span class="token punctuation">.</span>enableAutomapping <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// add the grass/water layer to our main map node</span>
map<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>topLayer<span class="token punctuation">)</span></code></pre>
<p>Now comes the important part: we loop over all the rows and columns in our map, read the data from our noise map at that location, then use that to place either water tiles or grass tiles depending on the height.</p>
<p>We can read one specific value from the noise map using code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">let</span> column <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">let</span> location <span class="token operator">=</span> <span class="token function">vector2</span><span class="token punctuation">(</span><span class="token class-name">Int32</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Int32</span><span class="token punctuation">(</span>column<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> terrainHeight <span class="token operator">=</span> noiseMap<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> location<span class="token punctuation">)</span></code></pre>
<p>Again, that uses <code>Int32</code> because reasons. Each value will be between -1.0 and 1.0, so we need to decide where the water stops and land starts. You’re welcome to experiment all you want, but here we’re just going to say that everything below 0 is water.</p>
<p>Once you know which tile to use, you can apply a tile group to a specific row and column like this:</p>
<pre class=" language-swift"><code class=" language-swift">topLayer<span class="token punctuation">.</span><span class="token function">setTileGroup</span><span class="token punctuation">(</span>waterTiles<span class="token punctuation">,</span> forColumn<span class="token punctuation">:</span> column<span class="token punctuation">,</span> row<span class="token punctuation">:</span> row<span class="token punctuation">)</span></code></pre>
<p>That applies a tile <em>group</em> rather than a specific tile, which is where SpriteKit’s automapping system comes in: when it detects that water is becoming grass, it will render water and grass edge tiles automatically, without us needing to worry about whether it’s a top tile, bottom tile, corner tile, and so on.</p>
<p>To see all this in action, add this loop to the end of <code>didMove(to:)</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">for</span> column <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> columns <span class="token punctuation">{</span>
    <span class="token keyword">for</span> row <span class="token keyword">in</span> <span class="token number">0</span> <span class="token operator">..&lt;</span> rows <span class="token punctuation">{</span>
        <span class="token keyword">let</span> location <span class="token operator">=</span> <span class="token function">vector2</span><span class="token punctuation">(</span><span class="token class-name">Int32</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Int32</span><span class="token punctuation">(</span>column<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> terrainHeight <span class="token operator">=</span> noiseMap<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> location<span class="token punctuation">)</span>

        <span class="token keyword">if</span> terrainHeight <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            topLayer<span class="token punctuation">.</span><span class="token function">setTileGroup</span><span class="token punctuation">(</span>waterTiles<span class="token punctuation">,</span> forColumn<span class="token punctuation">:</span> column<span class="token punctuation">,</span> row<span class="token punctuation">:</span> row<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            topLayer<span class="token punctuation">.</span><span class="token function">setTileGroup</span><span class="token punctuation">(</span>grassTiles<span class="token punctuation">,</span> forColumn<span class="token punctuation">:</span> column<span class="token punctuation">,</span> row<span class="token punctuation">:</span> row<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>And that’s the code complete –&nbsp;if you run it now you should see sand, water, and grass tiles mixed together nicely, and if you look closely you’ll even see the water’s edge is rippling gently.</p>
<p><img class="hws" src="/img/hws/example-code-604-3.png" alt=""></p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/how-to-tile-an-image">How to tile an image</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/quick-start/concurrency/how-to-manipulate-an-asyncsequence-using-map-filter-and-more">How to manipulate an AsyncSequence using map(), filter(), and more</a></li></ul>
-->

---

<TagLinks />