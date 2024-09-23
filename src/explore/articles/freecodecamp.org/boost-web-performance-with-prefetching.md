---
lang: ko-KR
title: "How to Boost Web Performance with Prefetching – Improve User Experience by Reducing Load Time"
description: "Article(s) > How to Boost Web Performance with Prefetching – Improve User Experience by Reducing Load Time"
icon: fa-brands fa-react
category: 
  - Node.js
  - React.js
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - node
  - nodejs
  - node-js
  - react
  - reactjs
  - react-js
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to Boost Web Performance with Prefetching – Improve User Experience by Reducing Load Time"
    - property: og:description
      content: "How to Boost Web Performance with Prefetching – Improve User Experience by Reducing Load Time"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/boost-web-performance-with-prefetching.html
prev: /programming/js-react/articles/README.md
date: 2024-09-23
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/-Vqn2WrfxTQ/upload/0657c02758973f4ea5701f2bd98469a7.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "React.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-react/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="How to Boost Web Performance with Prefetching – Improve User Experience by Reducing Load Time"
  desc="We've all encountered the frustration of waiting through long loading screens, only to find ourselves stuck with unresponsive pages. You see loading spinners everywhere, but nothing seems to move forward. Let me paint a clearer picture for you: This..."
  url="https://freecodecamp.org/news/boost-web-performance-with-prefetching/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/-Vqn2WrfxTQ/upload/0657c02758973f4ea5701f2bd98469a7.jpeg"/>

<!-- TODO: 작성 -->

<!-- 
<p>We've all encountered the frustration of waiting through long loading screens, only to find ourselves stuck with unresponsive pages. You see loading spinners everywhere, but nothing seems to move forward. Let me paint a clearer picture for you:</p>
<p><a target="_blank" href="https://dribbble.com/shots/3358709-Skeleton-Loader#"><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726397417280/bc56c517-c63f-433e-93c6-939c3b82c556.gif" alt="Multiple skeleton loader on a dashboard page" class="image--center mx-auto" width="800" height="600" loading="lazy"></a></p>
<p>This typically happens because the website is trying to fetch all the necessary data as soon as you land on the page. It could be that a API request is being processed, or multiple APIs are fetching data sequentially, causing delays in loading the page.</p>
<p>The result? A poor user experience. You might think, "How can such a large company not prioritize user experience? This is disappointing." Consequently, users often leave the site, affecting key metrics and potentially impacting revenue.</p>
<p>But what if you could fetch the data for these heavy pages ahead of time, so that by the time a user lands on the page, they can interact with it instantly?</p>
<p>This is where the concept of prefetching comes in, and that's exactly what we'll be diving into in this blog post. So without further ado, let's get started!</p>
<h2 id="heading-table-of-contents">Table of Contents</h2>
<ul>
<li><p><a class="post-section-overview" href="#heading-prefetching-as-a-solution">Prefetching as a Solution</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-prefetching-improves-user-experience">How Prefetching Improves User Experience</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-understanding-the-problem">Understanding The Problem</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-solution-1-prefetching-data-in-the-parent-component">Solution #1: Prefetching Data in the Parent Component</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-solution-2-prefetch-data-on-page-load">Solution #2: Prefetch Data on Page load</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-implement-prefetching-with-react">How to Implement Prefetching with React</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-implement-prefetching-with-react">Too much prefetching can also cause</a> <a class="post-section-overview" href="#heading-too-much-prefetching-can-also-cause-slowness">s</a><a class="post-section-overview" href="#heading-how-to-implement-prefetching-with-react">lowness</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-summary">Summary</a></p>
</li>
</ul>
<h2 id="heading-prefetching-as-a-solution">Prefetching as a Solution</h2>
<p>Here’s the revised version with just the grammar and spelling corrected:</p>
<p>For the problem above, what we want is to fetch the data for a given page before it's loaded onto the website so that the user doesn’t need to fetch the data on page load. This is called prefetching. From a technical perspective, its definition is as follows:</p>
<blockquote>
<p><em>It is a way to fetch the required data beforehand so that the main component doesn’t need to wait for the data, thus enhancing the experience.</em></p>
</blockquote>
<p>This can improve the user experience, boosting the customer’s confidence in your website.</p>
<p>Prefetching is a simple yet elegant solution that is more user-centric than a standard process. To implement prefetching, we need to understand the user’s behavior on the website. That is, the most visited pages, or which components fetch data on small interactions (such as hover).</p>
<p>After analyzing such scenarios, it makes sense to apply prefetching to them. However, as developers, we should be mindful of using this concept. Too much prefetching can also slow down your website since you're trying to fetch a lot of data for future scenarios, which might block the fetching of data for the main page.</p>
<h2 id="heading-how-prefetching-improves-user-experience">How Prefetching Improves User Experience</h2>
<p>Let us look at couple of scenarios where prefetching is beneficial:</p>
<ol>
<li><p>Loading data/page earlier for the most visited link from your landing page. For example, consider that you have a “contact us” link. Let’s assume that this is the link that users mostly check and it contains a lot of data when it loads. Rather than loading the data when the contact us page loads, you can simply fetch the data on the homepage so that you don’t have to wait at the Contact Us page for the data. You can read more about prefetching pages <a target="_blank" href="https://web.dev/articles/link-prefetch">here</a>.</p>
</li>
<li><p>Prefetching table data for later pages.</p>
</li>
<li><p>Fetching data from a parent component and loading it in the child component.</p>
</li>
<li><p>Prefetching data that needs to be displayed in a popover.</p>
</li>
</ol>
<p>These are some of the ways to achieve prefetching in your application and how it helps improve the user experience.</p>
<p>In this blog post we will be discussing about the last scenario: <em>“</em>prefetching data that needs to be displayed in the popover”. This is a classic example where prefetching can be beneficial and provides a smoother experience to the user.</p>
<h2 id="heading-understanding-the-problem">Understanding The Problem</h2>
<p>Let me define the problem here. Imagine the following scenario:</p>
<ol>
<li><p>You have a component that displays specific information.</p>
</li>
<li><p>There is an element inside this component that shows another popover/tooltip when you hover on it.</p>
</li>
<li><p>The popover fetches data when it loads.</p>
</li>
</ol>
<p>Now imagine that the user hovers on the element and needs to wait for the data to be fetched and displayed in the popover. During this wait, they see the skeleton loader.</p>
<p>The scenario will look like this:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726395720567/6ec88fab-ffe2-4f20-b934-94342f9cf3c0.gif" alt="Example of fetching data when the popover component mounts" class="image--center mx-auto" width="600" height="268" loading="lazy"></p>
<p>It’s just frustrating how long the user has to wait whenever they hover on the image:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726395733461/3598da70-e8af-4a1a-b3cf-5c3ed62fe9cc.gif" alt="User hovering images to load popover component that fetches data" class="image--center mx-auto" width="600" height="268" loading="lazy"></p>
<p>To solve this problem, there are two solutions that can help you get started and optimize the solution according to your needs.</p>
<h2 id="heading-solution-1-prefetching-data-in-the-parent-component">Solution #1: Prefetching Data in the Parent Component</h2>
<p>This solution is inspired from <a target="_blank" href="https://martinfowler.com/articles/data-fetch-spa.html?utm_source=cassidoo&amp;utm_medium=email&amp;utm_campaign=until-youre-ready-to-look-foolish-youll-never#prefetching">Martin Fowler’s blogpost</a>. It allows you to fetch the data before the popup appears, instead of fetching on component load.</p>
<p>The popup appears when you hover on it. We can fetch the data when the mouse enters the parent component. Before the actual component—the image—is hovered on, we’ll have the data for the popover and will pass it to the popover component.</p>
<p>This solution doesn’t remove the loading state all together but it helps to significantly lower the chances of seeing the loading state.</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726395771616/69b6c536-8b62-4124-837a-f26746f6f305.gif" alt="Improving the UX by fetching the data from the parent component" class="image--center mx-auto" width="600" height="296" loading="lazy"></p>
<h2 id="heading-solution-2-prefetch-data-on-page-load">Solution #2: Prefetch Data on Page load</h2>
<p>This solution is inspired by <a target="_blank" href="http://x.com">x.com</a> where, for the popover component, they fetch the data partially on the main page load and fetch the rest of the data when the component mounts.</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726395833198/c7f1fa64-986d-4bfc-83cb-f052cd560f3a.gif" alt="Twitter advertisement by XDevelopers. Text reads: &quot;Calling all #developers! Innovate with our real-time and historical data on the X API. Get started with Pro👇&quot;. Image shows a person in a white shirt with text &quot;Build what's next with our API @XDevelopers&quot; and &quot;Subscribe now!&quot; Used by permission. From twitter.com." class="image--center mx-auto" width="800" height="522" loading="lazy"></p>
<p>As you can see from the above video, the user’s profile details are viewed in the popover. If you look closely, the details related to followers are fetched later.</p>
<p>This technique is highly efficient when you have a lot of data to be displayed in the popover but fetching them can be costly on popover mount or on the main page load.</p>
<p>A better solution would be to partially load the required data on the main page and load the rest of the data when the component mounts.</p>
<p>In our example, we fetched the data for the popover when the cursor entered the image’s parent element. Now imagine that you need to fetch additional details once the popover data is loaded. So based on the above x.com’s method, we can fetch additional data on popover load. Here is the outcome of it:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726395913909/b5f6f231-5a1e-4c44-a4eb-bd5ed863ce3b.gif" alt="GIF explaining how we prefetch data from parent and load additional data on component mount for popover " class="image--center mx-auto" width="1464" height="898" loading="lazy"></p>
<p>Here, we do the following things:</p>
<ul>
<li><p>We fetch the main data which is just necessary to render the popover when mouse enters the parent component of the image.</p>
</li>
<li><p>This gives us enough time to fetch the main data.</p>
</li>
<li><p>On popover load, we fetch another data, which is the album count. While the user reads data like name and email, we’ll have the next data ready to be seen.</p>
</li>
</ul>
<p>This way, we can make small and smart tweaks to minimize the blank staring of loaders on the screen 😊.</p>
<h2 id="heading-how-to-implement-prefetching-with-react">How to Implement Prefetching with React</h2>
<p>In this section we’ll briefly go through the how to implement the above prefetching example app.</p>
<h3 id="heading-project-setup">Project Setup</h3>
<p>To get started with creating the prefetching app, follow the process below:</p>
<p>You can use <a target="_blank" href="https://vitejs.dev/">vitejs</a> (this is what I used) or <a target="_blank" href="https://create-react-app.dev/">create-react-app</a> to create your app. Paste the command below in your terminal:</p>
<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">yarn</span> create vite prefetch-example <span class="token parameter variable">--template</span> react-ts
</code></pre>
<p>Once the app has been created, you should have the following folder structure when you open the <strong>prefetch-example</strong> folder with VS Code.</p>
<ul>
<li><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726764168271/2dc9bfa1-07d9-491e-96fd-e780c3623eeb.png" alt="Image of the folder structure once the vitejs app is created" class="image--center mx-auto" width="732" height="996" loading="lazy"></li>
</ul>
<p>Now let us dive into the components that we are going to be building for this app.</p>
<h3 id="heading-components">Components</h3>
<p>In this example we are going to be using 3 components:</p>
<ul>
<li><p><code>PopoverExample</code></p>
</li>
<li><p><code>UserProfile</code></p>
</li>
<li><p><code>UserProfileWithFetching</code></p>
</li>
</ul>
<h3 id="heading-popoverexample-component"><code>PopoverExample</code> Component</h3>
<p>Let us start with the first component which is the <code>PopoverExample</code>. This component displays an image avatar and some text to the right side of it. It should look like this:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1727002319443/bcc28972-fce0-42ba-899c-274513c4a7c6.png" alt="Image of the PopoverExample component that contains image to the left and lorem ipsum text to the right" class="image--center mx-auto" width="1376" height="656" loading="lazy"></p>
<p>The purpose of this component is to serve as an example similar to the real life scenarios. The image in this component loads a popover component when it is hovered on.</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1727002429245/9af8f26e-f149-41f7-b124-3ec2a0f5c80a.png" alt="Image of popover element that contains user information when the image is hovered" class="image--center mx-auto" width="1480" height="950" loading="lazy"></p>
<p>Here’s the code for the component:</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFloating<span class="token punctuation">,</span> useHover<span class="token punctuation">,</span> useInteractions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@floating-ui/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ContentLoader <span class="token keyword">from</span> <span class="token string">"react-content-loader"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UserProfile <span class="token keyword">from</span> <span class="token string">"./UserProfile"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UserProfileWithFetching <span class="token keyword">from</span> <span class="token string">"./UserProfileWithFetching"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyLoader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ContentLoader
        speed<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>
        width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">340</span><span class="token punctuation">}</span>
        height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">84</span><span class="token punctuation">}</span>
        viewBox<span class="token operator">=</span><span class="token string">"0 0 340 84"</span>
        backgroundColor<span class="token operator">=</span><span class="token string">"#d1d1d1"</span>
        foregroundColor<span class="token operator">=</span><span class="token string">"#fafafa"</span>
    <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>rect x<span class="token operator">=</span><span class="token string">"0"</span> y<span class="token operator">=</span><span class="token string">"0"</span> rx<span class="token operator">=</span><span class="token string">"3"</span> ry<span class="token operator">=</span><span class="token string">"3"</span> width<span class="token operator">=</span><span class="token string">"67"</span> height<span class="token operator">=</span><span class="token string">"11"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>rect x<span class="token operator">=</span><span class="token string">"76"</span> y<span class="token operator">=</span><span class="token string">"0"</span> rx<span class="token operator">=</span><span class="token string">"3"</span> ry<span class="token operator">=</span><span class="token string">"3"</span> width<span class="token operator">=</span><span class="token string">"140"</span> height<span class="token operator">=</span><span class="token string">"11"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>rect x<span class="token operator">=</span><span class="token string">"127"</span> y<span class="token operator">=</span><span class="token string">"48"</span> rx<span class="token operator">=</span><span class="token string">"3"</span> ry<span class="token operator">=</span><span class="token string">"3"</span> width<span class="token operator">=</span><span class="token string">"53"</span> height<span class="token operator">=</span><span class="token string">"11"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>rect x<span class="token operator">=</span><span class="token string">"187"</span> y<span class="token operator">=</span><span class="token string">"48"</span> rx<span class="token operator">=</span><span class="token string">"3"</span> ry<span class="token operator">=</span><span class="token string">"3"</span> width<span class="token operator">=</span><span class="token string">"72"</span> height<span class="token operator">=</span><span class="token string">"11"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>rect x<span class="token operator">=</span><span class="token string">"18"</span> y<span class="token operator">=</span><span class="token string">"48"</span> rx<span class="token operator">=</span><span class="token string">"3"</span> ry<span class="token operator">=</span><span class="token string">"3"</span> width<span class="token operator">=</span><span class="token string">"100"</span> height<span class="token operator">=</span><span class="token string">"11"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>rect x<span class="token operator">=</span><span class="token string">"0"</span> y<span class="token operator">=</span><span class="token string">"71"</span> rx<span class="token operator">=</span><span class="token string">"3"</span> ry<span class="token operator">=</span><span class="token string">"3"</span> width<span class="token operator">=</span><span class="token string">"37"</span> height<span class="token operator">=</span><span class="token string">"11"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>rect x<span class="token operator">=</span><span class="token string">"18"</span> y<span class="token operator">=</span><span class="token string">"23"</span> rx<span class="token operator">=</span><span class="token string">"3"</span> ry<span class="token operator">=</span><span class="token string">"3"</span> width<span class="token operator">=</span><span class="token string">"140"</span> height<span class="token operator">=</span><span class="token string">"11"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>rect x<span class="token operator">=</span><span class="token string">"166"</span> y<span class="token operator">=</span><span class="token string">"23"</span> rx<span class="token operator">=</span><span class="token string">"3"</span> ry<span class="token operator">=</span><span class="token string">"3"</span> width<span class="token operator">=</span><span class="token string">"173"</span> height<span class="token operator">=</span><span class="token string">"11"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ContentLoader<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">PopoverExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>isOpen<span class="token punctuation">,</span> setIsOpen<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> refs<span class="token punctuation">,</span> floatingStyles<span class="token punctuation">,</span> context <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFloating</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        open<span class="token operator">:</span> isOpen<span class="token punctuation">,</span>
        onOpenChange<span class="token operator">:</span> setIsOpen<span class="token punctuation">,</span>
        placement<span class="token operator">:</span> <span class="token string">"top"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> hover <span class="token operator">=</span> <span class="token function">useHover</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> getReferenceProps<span class="token punctuation">,</span> getFloatingProps <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useInteractions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>hover<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleMouseEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://jsonplaceholder.typicode.com/users/1"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> resp<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div
            id<span class="token operator">=</span><span class="token string">"hover-example"</span>
            style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                display<span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span>
                flexDirection<span class="token operator">:</span> <span class="token string">"row"</span><span class="token punctuation">,</span>
                alignItems<span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
                textAlign<span class="token operator">:</span> <span class="token string">"left"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
            onMouseEnter<span class="token operator">=</span><span class="token punctuation">{</span>handleMouseEnter<span class="token punctuation">}</span>
        <span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span
                style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                    padding<span class="token operator">:</span> <span class="token string">"1rem"</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>img
                    ref<span class="token operator">=</span><span class="token punctuation">{</span>refs<span class="token punctuation">.</span>setReference<span class="token punctuation">}</span>
                    <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getReferenceProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                    style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                        borderRadius<span class="token operator">:</span> <span class="token string">"50%"</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">}</span>
                    src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_5.png"</span>
                <span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>
                Lorem Ipsum <span class="token keyword">is</span> simply dummy text <span class="token keyword">of</span> the printing and typesetting
                industry<span class="token punctuation">.</span> Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s<span class="token punctuation">,</span> when an <span class="token builtin">unknown</span> printer took a galley <span class="token keyword">of</span> <span class="token keyword">type</span> <span class="token class-name">and</span>
                scrambled it to make a <span class="token keyword">type</span> <span class="token class-name">specimen</span> book<span class="token punctuation">.</span> It has survived not only five
                centuries<span class="token punctuation">,</span> but also the leap into electronic typesetting<span class="token punctuation">,</span> remaining
                essentially unchanged<span class="token punctuation">.</span> It was popularised <span class="token keyword">in</span> the 1960s <span class="token keyword">with</span> the release
                <span class="token keyword">of</span> Letraset sheets containing Lorem Ipsum passages<span class="token punctuation">,</span> and more recently
                <span class="token keyword">with</span> desktop publishing software like Aldus PageMaker including versions
                <span class="token keyword">of</span> Lorem Ipsum<span class="token punctuation">.</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>isOpen <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>div
                    className<span class="token operator">=</span><span class="token string">"floating"</span>
                    ref<span class="token operator">=</span><span class="token punctuation">{</span>refs<span class="token punctuation">.</span>setFloating<span class="token punctuation">}</span>
                    style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                        <span class="token operator">...</span>floatingStyles<span class="token punctuation">,</span>
                        backgroundColor<span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
                        color<span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
                        padding<span class="token operator">:</span> <span class="token string">"1rem"</span><span class="token punctuation">,</span>
                        fontSize<span class="token operator">:</span> <span class="token string">"1rem"</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">}</span>
                    <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFloatingProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">&gt;</span>
                    <span class="token punctuation">{</span>isLoading <span class="token operator">?</span> <span class="token punctuation">(</span>
                        <span class="token operator">&lt;</span>MyLoader <span class="token operator">/</span><span class="token operator">&gt;</span>
                    <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
                        <span class="token operator">&lt;</span>UserProfile hasAdditionalDetails <span class="token punctuation">{</span><span class="token operator">...</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                    <span class="token punctuation">)</span><span class="token punctuation">}</span>
                    <span class="token punctuation">{</span><span class="token comment">/* &lt;UserProfileWithFetching /&gt; */</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>There are couple of things happening here, let me explain them step-by-step:</p>
<ul>
<li><p>We have a parent <code>div</code> named <code>hover-example</code> that contains an image and some text.</p>
</li>
<li><p>Next, we conditionally rendered a <code>div</code> with class name of <code>floating</code>. This is the actual popover component that opens when you hover on the image.</p>
<ul>
<li>We made use of the <a target="_blank" href="https://floating-ui.com/"><code>floating-ui</code> library</a> and its <a target="_blank" href="https://floating-ui.com/docs/useHover">basic hover example</a> to achieve the hover effect for the popover.</li>
</ul>
</li>
<li><p>Inside the popover we conditionally loaded the <code>UserProfile</code> and the skeleton loader. This loader appears when we are fetching the data for the user’s profile. More on this later.</p>
</li>
<li><p>We made use of the <a target="_blank" href="https://github.com/danilowoz/react-content-loader">react-content-loader</a> library in the <code>MyLoader</code> component. This library also has a website that helps you to create loaders, you can check it out <a target="_blank" href="https://skeletonreact.com/">here</a>.</p>
</li>
</ul>
<h3 id="heading-userprofile-component"><code>UserProfile</code> Component</h3>
<p>Now that we have defined our <code>Popover</code> example, it is time for us to get into the details of the <code>UserProfile</code> component.</p>
<p>This component appears inside the popover component. The purpose of this component is to load the <code>name</code> <code>email</code> <code>phone</code> <code>website</code> details which are fetched from <a target="_blank" href="https://jsonplaceholder.typicode.com/users/1">JSON placeholder API</a>.</p>
<p>To demonstrate the prefetching example, we have to make sure that the <code>UserProfile</code> component only acts as a presentational component; that is, no explicit fetching logic is present inside of it.</p>
<p>The key thing to note about this component is that fetching the data happens from the parent component which is the <code>PopoverExample</code> component. In this component, we start fetching the data when the mouse enters this component (the <code>mouseenter</code> event). This is the solution #1 we discussed previously.</p>
<p>This gives you enough time for fetching the data until the user hovers on the image. Here’s the code:</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ContentLoader <span class="token keyword">from</span> <span class="token string">"react-content-loader"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyLoader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ContentLoader
        speed<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>
        viewBox<span class="token operator">=</span><span class="token string">"0 0 476 124"</span>
        backgroundColor<span class="token operator">=</span><span class="token string">"#d1d1d1"</span>
        foregroundColor<span class="token operator">=</span><span class="token string">"#fafafa"</span>
    <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>rect x<span class="token operator">=</span><span class="token string">"4"</span> y<span class="token operator">=</span><span class="token string">"43"</span> rx<span class="token operator">=</span><span class="token string">"0"</span> ry<span class="token operator">=</span><span class="token string">"0"</span> width<span class="token operator">=</span><span class="token string">"98"</span> height<span class="token operator">=</span><span class="token string">"30"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ContentLoader<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span>props<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> email<span class="token punctuation">,</span> phone<span class="token punctuation">,</span> website<span class="token punctuation">,</span> hasAdditionalDetails <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>additionalData<span class="token punctuation">,</span> setAdditionalData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>hasAdditionalDetails<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://jsonplaceholder.typicode.com/albums"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> resp<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">const</span> albumCount <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> curr<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>curr<span class="token punctuation">.</span>userId <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> acc <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>

                        <span class="token keyword">return</span> acc<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token function">setAdditionalData</span><span class="token punctuation">(</span>albumCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>hasAdditionalDetails<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"user-profile"</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"user-name"</span><span class="token operator">&gt;</span>name<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"user-email"</span><span class="token operator">&gt;</span>email<span class="token operator">:</span> <span class="token punctuation">{</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"user-phone"</span><span class="token operator">&gt;</span>phone<span class="token operator">:</span> <span class="token punctuation">{</span>phone<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"user-website"</span><span class="token operator">&gt;</span>website<span class="token operator">:</span> <span class="token punctuation">{</span>website<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>hasAdditionalDetails <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
                    <span class="token punctuation">{</span>isLoading <span class="token operator">?</span> <span class="token punctuation">(</span>
                        <span class="token operator">&lt;</span>MyLoader <span class="token operator">/</span><span class="token operator">&gt;</span>
                    <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
                        <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"user-albums"</span><span class="token operator">&gt;</span>Album Count<span class="token operator">:</span> <span class="token punctuation">{</span>additionalData<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>This component makes use of the <code>hasAdditionalDetails</code> prop. The purpose of this <code>prop</code> is to load additional data when the component mounts. It illustrates the solution #2 mentioned above.</p>
<h3 id="heading-userprofilewithfetching-component"><code>UserProfileWithFetching</code> Component</h3>
<p>This component is pretty similar to that of the <code>UserProfile</code> component. It just contains the logic for fetching data when the component loads. The purpose of this component is to show what the general solution without the prefetching technique would look like.</p>
<p>So this component will always load the data when the component mounts, which displays the skeleton loader.</p>
<p>Here is the code:</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MyLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./PopoverExample"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">UserProfileWithFetching</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://jsonplaceholder.typicode.com/users/1"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> resp<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>MyLoader <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"user-profile"</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"user-name"</span><span class="token operator">&gt;</span>name<span class="token operator">:</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"user-email"</span><span class="token operator">&gt;</span>email<span class="token operator">:</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"user-phone"</span><span class="token operator">&gt;</span>phone<span class="token operator">:</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>phone<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"user-website"</span><span class="token operator">&gt;</span>website<span class="token operator">:</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>website<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>The entire code for this app can be found <a target="_blank" href="https://github.com/keyurparalkar/prefetch-examples">here</a>.</p>
<h2 id="heading-too-much-prefetching-can-also-cause-slowness">Too much prefetching can also cause slowness</h2>
<p>A word of advice, too much prefetching is not good because:</p>
<ul>
<li><p>It might slow your app down.</p>
</li>
<li><p>It can degrade user experience if prefetching is not applied strategically.</p>
</li>
</ul>
<p>Prefetching needs to be applied when you know the behavior of the user. That is, you are able to predict the user movement by metrics and be able to tell if they visit a page often. In that case, prefetching is a good idea.</p>
<p>So remember to always apply prefetching strategically.</p>
<h2 id="heading-summary">Summary</h2>
<p>That’s all folks! Hope you like my blog post. In this blogpost, you learned that implementing prefetching can significantly enhance your web application’s speed and responsiveness, improving user satisfaction.</p>
<p>For further reading, please refer to the below articles:</p>
<ul>
<li><p><a target="_blank" href="https://www.patterns.dev/vanilla/prefetch/">Prefetching pages</a></p>
</li>
<li><p><a target="_blank" href="https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf">Preload, Prefetch And Priorities in Chrome</a></p>
</li>
<li><p><a target="_blank" href="https://addyosmani.com/blog/what-not-to-prefetch-prerender/">What not to prefetch</a></p>
</li>
</ul>
<p>For more content, you can follow me on <a target="_blank" href="https://twitter.com/keurplkar">Twitter</a>, <a target="_blank" href="http://github.com/keyurparalkar">GitHub</a>, and <a target="_blank" href="https://www.linkedin.com/in/keyur-paralkar-494415107/">LinkedIn</a>.</p>
-->

---

<TagLinks />