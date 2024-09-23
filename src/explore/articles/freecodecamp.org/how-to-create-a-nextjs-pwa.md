---
lang: ko-KR
title: "How To Create a Progressive Web App (PWA) Using Next.js"
description: "Article(s) > How To Create a Progressive Web App (PWA) Using Next.js"
icon: iconfont icon-nextjs
category: 
  - Node.js
  - Next.js
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - node
  - nodejs
  - node-js
  - next
  - nextjs
  - next-js
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How To Create a Progressive Web App (PWA) Using Next.js"
    - property: og:description
      content: "How To Create a Progressive Web App (PWA) Using Next.js"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-to-create-a-nextjs-pwa.html
prev: /programming/js-next/articles/README.md
date: 2024-09-20
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1726728761614/ba739b83-78b9-4cd7-9040-13ade8e515f7.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Next.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-next/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How To Create a Progressive Web App (PWA) Using Next.js"
  desc="Have you ever wanted to create a web app that works smoothly on any device—whether it's on the web, mobile, or desktop? Imagine if your app could load quickly, work without an internet connection, and feel like a native app, all without needing to be..."
  url="https://freecodecamp.org/news/how-to-create-a-nextjs-pwa/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1726728761614/ba739b83-78b9-4cd7-9040-13ade8e515f7.png"/>

<!-- TODO: 작성 -->

<!-- 
<p>Have you ever wanted to create a web app that works smoothly on any device—whether it's on the web, mobile, or desktop? Imagine if your app could load quickly, work without an internet connection, and feel like a native app, all without needing to be installed from an app store. That’s exactly what Progressive Web Apps (PWAs) can do.</p>
<p>In this tutorial, you’ll learn how to build a PWA using Next.js. We’ll start by creating a functional movie search website with these tools. Once we have the basics set up, we’ll transform this app into a PWA, adding offline support and faster load times. By the end, you’ll have a powerful PWA that offers a smooth user experience across all platforms—all from a single codebase.</p>
<h3 id="heading-what-well-cover"><strong>What We’ll Cover</strong></h3>
<ul>
<li><p><strong>Setting Up the Project:</strong> We'll begin by creating the movie search app using Next.js, which is an ideal choice in 2024 for building fast, reliable React apps that work well on all devices.</p>
</li>
<li><p><strong>Turning the App into a PWA:</strong> Next, we’ll walk through the steps to convert the app into a Progressive Web App, covering the key features and best practices of PWAs.</p>
</li>
<li><p><strong>Adding Offline Support:</strong> Finally, we’ll ensure your app stays functional even when there’s no internet connection by implementing offline capabilities.</p>
</li>
</ul>
<p>Here’s what the final application will look like:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726724446891/47398ad8-fa1f-46d2-8a22-0a5d49e6a67e.png" alt="This screenshot shows the completed MovieMaster PWA, highlighting its sleek design and offline capabilities." class="image--center mx-auto" width="2624" height="1754" loading="lazy"></p>
<h3 id="heading-audience"><strong>Audience</strong></h3>
<p>This tutorial is for React developers of all levels, whether you’re just starting out or already experienced. If you want to enhance your web apps with PWA features, this guide will take you through the necessary steps.</p>
<h3 id="heading-prerequisites"><strong>Prerequisites</strong></h3>
<p>Before you begin, make sure you’re familiar with React.js and Next.js. If you’re new to PWAs, you might want to read some introductory articles to get a quick overview.</p>
<ul>
<li><p><a target="_blank" href="https://www.freecodecamp.org/news/what-are-progressive-web-apps-pwa-guide/"><em>What are Progressive Web Apps? PWA Guide for Beginners</em></a></p>
</li>
<li><p><a target="_blank" href="https://web.dev/learn/pwa"><em>Learn Progressive Web Apps</em></a></p>
</li>
</ul>
<aside>
  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#0">Introduction</a></li>
    <li><a href="#heading-what-we-cover">What We’ll Cover</a></li>
    <li><a href="#heading-audience">Audience</a></li>
    <li><a href="#heading-prerequisites">Prerequisites</a></li>
    <li><a href="#heading-what-is-a-progressive-web-app-pwa">What is a Progressive Web App (PWA)?</a></li>
    <li><a href="#heading-why-turn-your-web-app-into-a-pwa">Why Turn Your Web App into a PWA?</a></li>
    <li><a href="#heading-getting-started-setting-up-the-nextjs-project">Getting Started: Setting Up the Next.js Project</a></li>
    <li><a href="#heading-why-choose-nextjs-in-2024">Why Choose Next.js in 2024?</a></li>
    <li><a href="#heading-project-installation">Project Installation</a></li>
    <li><a href="#heading-project-structure-overview">Project Structure Overview</a></li>
 <li><a href="#heading-understanding-layouts">Understanding Layouts</a></li>
    <li><a href="#heading-running-and-previewing-the-project">Running and Previewing the Project</a></li>
    <li><a href="#heading-how-to-turn-your-web-app-into-a-pwa">How to Turn Your Web App into a PWA</a></li>
    <li><a href="#heading-criteria-for-a-pwa">Criteria for a PWA</a></li>
    <li><a href="#heading-how-to-add-a-web-manifest-file-to-your-nextjs-app">How to Add a Web Manifest File to Your Next.js App</a></li>
    <li><a href="#heading-how-to-register-a-service-worker">How to Register a Service Worker</a></li>
    <li><a href="#heading-how-to-add-offline-support">How to Add Offline Support</a></li>
    <li><a href="#heading-what-to-cache">What to Cache?</a></li>
    <li><a href="#heading-when-to-cache">When to Cache?</a></li>
    <li><a href="#heading-dynamic-caching">Dynamic Caching</a></li>
    <li><a href="#heading-caching-api-requests">Caching API Requests</a></li>
    <li><a href="#heading-how-to-serve-cached-resources">How to Serve Cached Resources</a></li>
    <li><a href="#heading-providing-a-fallback-page">Providing a Fallback Page</a></li>
    <li><a href="#heading-conclusion">Conclusion</a></li>
  </ul>
</aside>

<h2 id="heading-what-is-a-progressive-web-app-pwa">What is a Progressive Web App (PWA)?</h2>
<p>A Progressive Web App (PWA) is a type of web application built using standard web technologies like HTML, CSS, and JavaScript. PWAs work on the web, desktop, and mobile devices, combining the best features of web and native apps to deliver a fast, reliable, and engaging experience.</p>
<p>What makes PWAs special is their ability to work offline, send push notifications, and be installed on a user’s device without an app store. In short, a PWA makes your web app feel like a native app while keeping the flexibility and wide reach of the web.</p>
<h3 id="heading-why-turn-your-web-app-into-a-pwa"><strong>Why Turn Your Web App into a PWA?</strong></h3>
<p>Converting your web app into a PWA brings several benefits:</p>
<ul>
<li><strong>Cross-Platform Availability:</strong> A PWA works on any device with a browser, so you only need to develop and maintain one codebase for web, mobile, and desktop apps. This saves time and ensures a consistent experience across all platforms.</li>
</ul>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726724668376/acf531ba-7ff7-4c62-8d11-ac283d236bd8.png" alt="This image shows the MovieMaster PWA running on a mobile phone, web browser, and desktop, showcasing the versatile nature of PWAs." width="1600" height="661" loading="lazy"></p>
<ul>
<li><p><strong>Offline Capabilities:</strong> PWAs can work offline or in areas with poor connectivity by caching essential resources, keeping your app functional even without internet access.</p>
</li>
<li><p><strong>Improved Performance:</strong> PWAs are built to load quickly and run smoothly, even on slow networks, thanks to techniques like service workers and caching.</p>
</li>
<li><p><strong>Increased User Engagement:</strong> Users can add PWAs directly to their home screen without needing an app store. This easy access, along with features like push notifications, helps keep users engaged and coming back.</p>
</li>
</ul>
<p><strong>Disadvantages of PWAs</strong></p>
<p>While PWAs offer many benefits, there are a few downsides:</p>
<ul>
<li><p><strong>Limited Access to Device Features</strong>: PWAs don’t have full access to certain device features like Bluetooth or advanced camera controls. For apps that need deep hardware integration, this can be a limitation.</p>
</li>
<li><p><strong>Less Visibility</strong>: Since PWAs don’t go through app stores, they miss out on the visibility that app stores offer. Some users might also prefer downloading apps from app stores rather than directly from the browser.</p>
</li>
<li><p><strong>Limited iOS Support</strong>: Some features of PWAs, like push notifications, don’t work as well on iPhones and iPads compared to Android devices, which can limit engagement with iOS users.</p>
</li>
</ul>
<h2 id="heading-getting-started-setting-up-the-nextjs-project"><strong>Getting Started: Setting Up the Next.js Project</strong></h2>
<p>Now that we’ve talked about the benefits of PWAs, let’s get into the actual implementation. We’ll start by setting up the necessary files in our project.</p>
<h3 id="heading-why-choose-nextjs-in-2024"><strong>Why Choose Next.js in 2024?</strong></h3>
<p>Next.js is a top choice for building React apps in 2024. It offers features like server-side rendering and static site generation, making it easier to create fast and reliable web apps. These features ensure your app performs well on all devices and even works offline.</p>
<h3 id="heading-project-installation"><strong>Project Installation</strong></h3>
<p>Follow these steps to set up your Next.js project:</p>
<ol>
<li><p>Clone the Repository: Open your terminal and run:</p>
<pre class="language-bash" tabindex="0"><code class="language-bash"> <span class="token function">git</span> clone https://github.com/iamspruce/MovieMaster.git
</code></pre>
</li>
<li><p>Navigate to Your Project Directory:</p>
<pre class="language-bash" tabindex="0"><code class="language-bash"> <span class="token builtin class-name">cd</span> your-repo
</code></pre>
</li>
<li><p>Install Dependencies: Install the required packages with:</p>
<pre class="language-bash" tabindex="0"><code class="language-bash"> <span class="token function">npm</span> <span class="token function">install</span>
</code></pre>
</li>
<li><p>Configure Environment Variables: Create a .env.local file in the root directory and add your OMDB API key:</p>
<pre class="language-plaintext" tabindex="0"><code class="language-plaintext"> NEXT_PUBLIC_OMDB_API_KEY=your-api-key
</code></pre>
</li>
</ol>
<p>You can obtain your API key from the <a target="_blank" href="https://www.omdbapi.com/apikey.aspx">OMDB API website</a>.</p>
<p><strong>Why is the OMDB API Key Needed?</strong><br>The OMDB API key allows your PWA to fetch movie data, like titles, posters, and descriptions, directly from the OMDB database. This is essential for a movie-related app like MovieMaster, as it provides up-to-date information for users without you having to store all the data yourself.</p>
<p>In a PWA, using an API like OMDB ensures that the app can deliver fresh content to users, even when it's installed on their devices. Combined with the PWA's caching and offline features, users can still view movie details that were previously fetched, even if they lose internet connectivity.</p>
<p><strong>Note</strong>: Make sure Node.js and npm are installed on your system. If they are not, you can download them from <a target="_blank" href="http://nodejs.org/">nodejs.org</a>.</p>
<h4 id="heading-project-structure-overview"><strong>Project Structure Overview</strong></h4>
<p>Here’s a brief overview of the project layout:</p>
<ul>
<li><p><strong>/public</strong>: Contains static files such as images and favicons.</p>
</li>
<li><p><strong>/src/app</strong>: Houses the main application files, including global styles (globals.css), the main page (<strong>page.tsx</strong>), layout configurations (<strong>layout.tsx</strong>), and client-side logic (<strong>RootLayoutClient.tsx</strong>).</p>
</li>
<li><p><strong>/src/components</strong>: Includes reusable components. Shadcn UI components are located in the /ui directory, and other specific components like <strong>MovieCard.tsx</strong> are here.</p>
</li>
<li><p><strong>/src/lib</strong>: Contains utility functions and data-fetching code, such as <strong>fetchMovies.ts</strong> and <strong>useMediaQuery.ts</strong>.</p>
</li>
</ul>
<p>For styling, we use:</p>
<ul>
<li><p><strong>TailwindCSS</strong>: Applied through <strong>globals.css</strong> for a utility-first approach to design.</p>
</li>
<li><p><strong>Shadcn UI</strong>: A library providing accessible, ready-to-use UI components.</p>
</li>
</ul>
<h4 id="heading-understanding-layouts"><strong>Understanding Layouts</strong></h4>
<p>The project uses two key layouts:</p>
<ol>
<li><p><strong>layout.tsx</strong>: Manages server-side rendering and sets the application’s metadata. It uses the <code>RootLayoutClient</code> component to handle client-side functionality. Here’s how it looks:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"> <span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> type <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token punctuation">{</span> cn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/lib/utils"</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token punctuation">{</span> Inter <span class="token keyword">as</span> FontSans <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/font/google"</span><span class="token punctuation">;</span>

 <span class="token keyword">import</span> RootLayoutClient <span class="token keyword">from</span> <span class="token string">"./RootLayoutClient"</span><span class="token punctuation">;</span>

 <span class="token keyword">const</span> fontSans <span class="token operator">=</span> <span class="token function">FontSans</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">subsets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"latin"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token literal-property property">variable</span><span class="token operator">:</span> <span class="token string">"--font-sans"</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">metadata</span><span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"MovieMaster"</span><span class="token punctuation">,</span>
   <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"MovieMaster PWA helps you find the latest movies with an easy search by genre, year, and more. It works smoothly on any device, even offline, giving you a great movie browsing experience."</span><span class="token punctuation">,</span>
   <span class="token literal-property property">manifest</span><span class="token operator">:</span> <span class="token string">"/web.manifest"</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">children</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span> suppressHydrationWarning<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>body className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">cn</span><span class="token punctuation">(</span><span class="token string">"min-h-screen bg-background font-sans antialiased"</span><span class="token punctuation">,</span> fontSans<span class="token punctuation">.</span>variable<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
         <span class="token operator">&lt;</span>RootLayoutClient<span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>RootLayoutClient<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre>
</li>
<li><p><strong>RootLayoutClient.tsx</strong>: Handles client-side logic, essential for rendering interactive elements and managing UI states."</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"> <span class="token string">"use client"</span><span class="token punctuation">;</span>

 <span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token punctuation">{</span> Toaster <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/components/ui/sonner"</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token string">"./globals.css"</span><span class="token punctuation">;</span>

 <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayoutClient</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">children</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"text-white flex flex-col"</span><span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"container mx-auto px-4 max-w-[1024px]"</span><span class="token operator">&gt;</span>
         <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
         <span class="token operator">&lt;</span>Toaster <span class="token operator">/</span><span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre>
</li>
</ol>
<h4 id="heading-running-and-previewing-the-project"><strong>Running and Previewing the Project</strong></h4>
<p>To start working with your project:</p>
<p><strong>Start the Development Server</strong>: In your terminal, execute:</p>
<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">npm</span> run dev
</code></pre>
<p>This will start the development server, and you can view the application by navigating to http://localhost:3000 in your browser.</p>
<h2 id="heading-how-to-turn-your-web-app-into-a-pwa"><strong>How to Turn Your Web App into a PWA</strong></h2>
<p>To transform your web app into a PWA, there are certain criteria that your app must meet. Let's walk through these requirements and implement the necessary changes step by step.</p>
<h3 id="heading-criteria-for-a-pwa">Criteria for a PWA</h3>
<ol>
<li><p><strong>Served Over HTTPS</strong>: Your app must be served over a secure origin (HTTPS) or <code>localhost</code> for development. If you’re developing locally, this criterion is already met.</p>
</li>
<li><p><strong>Web Manifest File</strong>: A web manifest file provides metadata about your app, such as its name, icons, and start URL. This file is crucial for making your app installable on a user's device.</p>
</li>
<li><p><strong>Service Worker with a</strong> <code>fetch</code> <strong>Event</strong>: Your app must register a service worker with at least a <code>fetch</code> event. Registering a service worker with at least a fetch event is essential for your app to be recognized as a PWA and be installable. Beyond that, service workers enhance your app's performance and reliability, allowing it to cache resources and handle network requests even when offline.</p>
</li>
</ol>
<h3 id="heading-how-to-add-a-web-manifest-file-to-your-nextjs-app"><strong>How to Add a Web Manifest File to Your Next.js App</strong></h3>
<p>To add a web manifest file in your Next.js app, place it in the <strong>public/</strong> directory and reference it in your layout file. Ensure that all the images you include in your manifest file are also in the <strong>public/</strong> directory.</p>
<p>Here’s an example of a <strong>web.manifest</strong> file:</p>
<pre class="language-json" tabindex="0"><code class="language-json"><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Movie Master"</span><span class="token punctuation">,</span>
  <span class="token property">"short_name"</span><span class="token operator">:</span> <span class="token string">"Moviemaster"</span><span class="token punctuation">,</span>
  <span class="token property">"theme_color"</span><span class="token operator">:</span> <span class="token string">"#8936FF"</span><span class="token punctuation">,</span>
  <span class="token property">"background_color"</span><span class="token operator">:</span> <span class="token string">"#333333"</span><span class="token punctuation">,</span>
  <span class="token property">"start_url"</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"MovieMaster"</span><span class="token punctuation">,</span>
  <span class="token property">"display"</span><span class="token operator">:</span> <span class="token string">"standalone"</span><span class="token punctuation">,</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"MovieMaster PWA helps you find the latest movies with an easy search by genre, year, and more. It works smoothly on any device, even offline, giving you a great movie browsing experience."</span><span class="token punctuation">,</span>
  <span class="token property">"icons"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"purpose"</span><span class="token operator">:</span> <span class="token string">"maskable"</span><span class="token punctuation">,</span>
      <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"512x512"</span><span class="token punctuation">,</span>
      <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"icon512_maskable.png"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"purpose"</span><span class="token operator">:</span> <span class="token string">"any"</span><span class="token punctuation">,</span>
      <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"512x512"</span><span class="token punctuation">,</span>
      <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"icon512_rounded.png"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"screenshots"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"screenshot1.png"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span><span class="token punctuation">,</span>
      <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"1080x1920"</span><span class="token punctuation">,</span>
      <span class="token property">"form_factor"</span><span class="token operator">:</span> <span class="token string">"narrow"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre>
<h4 id="heading-required-fields"><strong>Required Fields</strong></h4>
<ul>
<li><p><code>name</code>: The full name of your app.</p>
</li>
<li><p><code>short_name</code>: A shorter version of the app’s name, displayed when there isn’t enough space for the full name.</p>
</li>
<li><p><code>icons</code>: Icons representing your app at various sizes.</p>
</li>
<li><p><code>start_url</code>: The URL that opens when the app is launched.</p>
</li>
<li><p><code>display</code>: Defines the display mode (for example, <code>standalone</code> for a full-screen experience).</p>
</li>
</ul>
<h4 id="heading-recommended-fields"><strong>Recommended Fields</strong></h4>
<ul>
<li><code>theme_color</code>: Sets the theme color of the browser’s UI, such as the address bar. This color enhances the native feel of your PWA.</li>
</ul>
<p>This example shows how the theme color (#8936FF) is applied to the browser's UI, giving your PWA a native feel.</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726725605476/32366f45-b981-44bc-ac60-0f3661b8ed2c.png" alt="A dark-themed movie search interface displaying &quot;The Avengers&quot; (2012) showing how theme color is applied to the browser's UI" width="2588" height="802" loading="lazy"></p>
<ul>
<li><p><code>background_color</code>: Defines the background color for the splash screen when your app is launched.</p>
</li>
<li><p><code>screenshots</code>: Provide screenshots of your app to improve the installation experience, especially on Android devices.</p>
</li>
</ul>
<p>This example illustrates how screenshots are displayed during the installation process, enhancing the user experience, especially on Android devices.</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726725620443/53b6712b-574a-445c-aca2-7c57dd62a268.jpeg" alt="An image showing how screenshots are displayed during the installation process on Android." width="571" height="1280" loading="lazy"></p>
<ul>
<li><code>id</code>: Unique identifier for the app</li>
</ul>
<h3 id="heading-how-to-reference-the-web-manifest-file"><strong>How to Reference the Web Manifest File</strong></h3>
<p>Next, let’s add the manifest file to your pages. In Next.js, you can include it in the <code>metadata</code> of your <strong>Layout.tsx</strong>:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">metadata</span><span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"MovieMaster"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"Find the latest movies with ease."</span><span class="token punctuation">,</span>
  <span class="token literal-property property">manifest</span><span class="token operator">:</span> <span class="token string">"/web.manifest"</span><span class="token punctuation">,</span> <span class="token comment">// Link to the manifest file</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<h3 id="heading-how-to-register-a-service-worker"><strong>How to Register a Service Worker</strong></h3>
<p>A service worker is a script that your browser runs in the background, allowing you to control how your app handles network requests, caching, and other tasks.</p>
<p>Registering a service worker with at least a <code>fetch</code> event is essential for your app to be recognized as a PWA and be installable.</p>
<p>Create a <strong>service-worker.js</strong> file in the <strong>public/</strong> directory with the following code:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'install'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Service Worker installing.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'activate'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Service Worker activating.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'fetch'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Fetching:'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">fetch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Then, register the service worker in your <strong>RootLayoutClient.tsx</strong> file:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayoutClient</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"serviceWorker"</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      navigator<span class="token punctuation">.</span>serviceWorker
        <span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">"/service-worker.js"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">registration</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Service Worker registered with scope:"</span><span class="token punctuation">,</span> registration<span class="token punctuation">.</span>scope<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Service Worker registration failed:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"text-white flex flex-col"</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"container mx-auto px-4 max-w-[1024px]"</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Once your app meets all the criteria, users can easily install it on their devices. For example, when using the Edge browser, an install option will appear in the browser’s menu, allowing users to add your app directly to their desktop or home screen.</p>
<p>Here's what the installation process looks like:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726725642915/c7e6af8a-56e8-4eb2-b1b6-fd715ea7210a.png" alt="An image showing the install option on Edge browser" width="1600" height="949" loading="lazy"></p>
<h2 id="heading-how-to-add-offline-support">How to Add Offline Support</h2>
<p>At this stage, even though our app is technically a PWA, it still behaves like a regular web application. Whenever a user requests a resource, the app makes a network request, and if the network fails, the user is greeted with an error page. This isn’t ideal, especially when the power of a PWA lies in its ability to function offline or in poor network conditions.</p>
<p>With a PWA, you can intercept every request made by your app using a service worker. This gives you the flexibility to decide how to serve content—from the network or from a cache. This control allows you to ensure that users can still access the app, even without an internet connection.</p>
<h3 id="heading-how-to-deliver-resources-from-the-network"><strong>How to Deliver Resources from the Network</strong></h3>
<p>Let’s start by looking at how our app currently behaves, which is similar to any standard web application:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"fetch"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">fetch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>This code simply fetches resources directly from the network. If the network is unavailable, the request will fail, leading to an error. This is the default behavior for a standard web app.</p>
<h3 id="heading-how-to-implement-offline-support"><strong>How to Implement Offline Support</strong></h3>
<p>To provide an offline experience, we need to cache our app’s resources when the user is online and then serve these cached resources when the user is offline. For this, we’ll use the Cache Storage API, which allows us to store resources locally on the user's device.</p>
<h3 id="heading-what-to-cache"><strong>What to Cache?</strong></h3>
<p>The decision on what to cache depends on the needs of your application. For a movie search app like ours, we’ll want to cache the essential resources required to render a basic version of the application:</p>
<ul>
<li><p>The main HTML page</p>
</li>
<li><p>CSS stylesheets needed to render the site</p>
</li>
<li><p>Images used in the user interface</p>
</li>
<li><p>JavaScript files required for functionality</p>
</li>
<li><p>API request responses</p>
</li>
</ul>
<p><strong>Note:</strong> While you can cache almost anything, be mindful of storage limitations, as all cached items are stored on the user’s device. Use storage wisely to avoid taking up too much space.</p>
<h3 id="heading-when-to-cache"><strong>When to Cache?</strong></h3>
<p>Once we know what to cache, the next thing to consider is when to cache. Should you cache everything during the service worker installation, or should you cache resources as they are requested?</p>
<p>The answer depends on the app's needs, but a good practice is to cache the core files required to render a basic version of the app during the service worker installation.</p>
<p>Here’s how you can do that:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> <span class="token constant">CACHE_NAME</span> <span class="token operator">=</span> <span class="token string">"MOVIE_MASTER_V1"</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">cacheCoreAssets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">await</span> caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token constant">CACHE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string">"/"</span><span class="token punctuation">,</span>
    <span class="token string">"/imdb-logo.svg"</span><span class="token punctuation">,</span>
    <span class="token string">"/rotten-tomatoes-logo.svg"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"install"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span><span class="token function">cacheCoreAssets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  self<span class="token punctuation">.</span><span class="token function">skipWaiting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In this code, <code>self.skipWaiting()</code> ensures that the new service worker activates immediately after installation, bypassing the waiting phase.</p>
<p>It’s also important to delete old caches when a new service worker is activated:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">clearOldCaches</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cacheNames <span class="token operator">=</span> <span class="token keyword">await</span> caches<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
    cacheNames
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> name <span class="token operator">!==</span> <span class="token constant">CACHE_NAME</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> caches<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"activate"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span><span class="token function">clearOldCaches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  self<span class="token punctuation">.</span>clients<span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>self.clients.claim()</code> method ensures that the new service worker takes control of all pages as soon as it activates.</p>
<h3 id="heading-dynamic-caching"><strong>Dynamic Caching</strong></h3>
<p>Dynamic caching is particularly useful for React apps like ours, where static files are automatically generated. With dynamic caching, you don’t need to know all the files in advance. Instead, it handles the caching process for you as files are requested.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">dynamicCaching</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">await</span> caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token constant">CACHE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> responseClone <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> responseClone<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Dynamic caching failed:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>With dynamic caching, files requested by the app are cached as they are fetched, ensuring that they are available for future offline use.</p>
<h3 id="heading-caching-api-requests"><strong>Caching API Requests</strong></h3>
<p>When it comes to caching API responses, instead of caching the entire response, it’s often better to cache the specific data returned by the API. For this, we can use IndexedDB, a local database built into the browser.</p>
<p>IndexedDB is more powerful than the Cache Storage API, especially for storing and retrieving structured data like JSON. This makes it an excellent choice for apps that require storing complex data or handling large amounts of information efficiently.</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726726244513/6e99d4b6-fefb-40f1-9ad1-db88c2c7b3da.png" alt="A screenshot showing the structure and data stored in the IndexedDB for the MovieMaster PWA." width="1600" height="1027" loading="lazy"></p>
<h4 id="heading-how-to-set-up-indexeddb"><strong>How to Set Up IndexedDB</strong></h4>
<p>First, create a function to open the database and create an object store:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> <span class="token constant">DB_NAME</span> <span class="token operator">=</span> <span class="token string">"MovieMaster"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">DB_VERSION</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">DB_STORE_NAME</span> <span class="token operator">=</span> <span class="token string">"myStore"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">openDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> request <span class="token operator">=</span> indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token constant">DB_NAME</span><span class="token punctuation">,</span> <span class="token constant">DB_VERSION</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onupgradeneeded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> db <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
      db<span class="token punctuation">.</span><span class="token function">createObjectStore</span><span class="token punctuation">(</span><span class="token constant">DB_STORE_NAME</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyPath</span><span class="token operator">:</span> <span class="token string">"url"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Next, create functions to add data to and retrieve data from the database:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">addData</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> jsonData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">openDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> transaction <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token constant">DB_STORE_NAME</span><span class="token punctuation">,</span> <span class="token string">"readwrite"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> transaction<span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span><span class="token constant">DB_STORE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    url<span class="token punctuation">,</span>
    <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> request <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">openDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> transaction <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token constant">DB_STORE_NAME</span><span class="token punctuation">,</span> <span class="token string">"readonly"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> transaction<span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span><span class="token constant">DB_STORE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> request <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      request<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Error retrieving from IndexedDB:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<h3 id="heading-how-to-serve-cached-resources"><strong>How to Serve Cached Resources</strong></h3>
<p>Once we have cached our assets and stored API data in IndexedDB, the next step is to serve this data to users when they are offline. There are several strategies to achieve this:</p>
<h4 id="heading-cache-first-strategy"><strong>Cache First Strategy</strong></h4>
<p>In the cache-first strategy, we check if a resource is available in the cache. If it is, we serve it from the cache; if not, we fetch it from the network. This is particularly useful for serving static assets like HTML, CSS, and JavaScript files:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">cacheFirstStrategy</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">await</span> caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token constant">CACHE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cachedResponse <span class="token operator">=</span> <span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> cachedResponse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> networkResponse <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> responseClone <span class="token operator">=</span> networkResponse<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> responseClone<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> networkResponse<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Cache first strategy failed:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">"/offline"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"fetch"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">"navigate"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">cacheFirstStrategy</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">dynamicCaching</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In this setup, the cache-first strategy is applied when navigating to new pages, while dynamic caching handles other requests.</p>
<h4 id="heading-network-first-strategy"><strong>Network First Strategy</strong></h4>
<p>The network-first strategy is the opposite: it attempts to fetch resources from the network first, and if the network is unavailable, it falls back to the cache. This strategy is particularly useful for API requests where you want the most up-to-date data:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">networkFirstStrategy</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> networkResponse <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>networkResponse<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> responseClone <span class="token operator">=</span> networkResponse<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> responseData <span class="token operator">=</span> <span class="token keyword">await</span> responseClone<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">await</span> <span class="token function">addData</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> responseData<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> networkResponse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Network response was not ok"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Network first strategy failed:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cachedResponse <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Using cached response:"</span><span class="token punctuation">,</span> cachedResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>cachedResponse<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">"[]"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"fetch"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">;</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>origin <span class="token operator">===</span> <span class="token string">"https://www.omdbapi.com"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">networkFirstStrategy</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">"navigate"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">cacheFirstStrategy</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">dynamicCaching</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In our app, we use the network-first strategy for API calls, ensuring that the user gets the latest data when online, while falling back to cached data in IndexedDB when offline.</p>
<h4 id="heading-full-service-worker-code"><strong>Full Service Worker Code</strong></h4>
<p>Here’s the complete <strong>service-worker.js</strong> file that incorporates everything we’ve discussed:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> <span class="token constant">CACHE_NAME</span> <span class="token operator">=</span> <span class="token string">"MOVIE_MASTER_V1"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">DB_NAME</span> <span class="token operator">=</span> <span class="token string">"MovieMaster"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">DB_VERSION</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">DB_STORE_NAME</span> <span class="token operator">=</span> <span class="token string">"myStore"</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">cacheCoreAssets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">await</span> caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token constant">CACHE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string">"/"</span><span class="token punctuation">,</span>
    <span class="token string">"/imdb-logo.svg"</span><span class="token punctuation">,</span>
    <span class="token string">"/rotten-tomatoes-logo.svg"</span><span class="token punctuation">,</span>
    <span class="token string">"/offline"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"install"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span><span class="token function">cacheCoreAssets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  self<span class="token punctuation">.</span><span class="token function">skipWaiting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">clearOldCaches</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cacheNames <span class="token operator">=</span> <span class="token keyword">await</span> caches<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
    cacheNames
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> name <span class="token operator">!==</span> <span class="token constant">CACHE_NAME</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> caches<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"activate"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span><span class="token function">clearOldCaches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  self<span class="token punctuation">.</span>clients<span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">dynamicCaching</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">await</span> caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token constant">CACHE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> responseClone <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> responseClone<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Dynamic caching failed:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">openDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> request <span class="token operator">=</span> indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token constant">DB_NAME</span><span class="token punctuation">,</span> <span class="token constant">DB_VERSION</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onupgradeneeded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> db <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
      db<span class="token punctuation">.</span><span class="token function">createObjectStore</span><span class="token punctuation">(</span><span class="token constant">DB_STORE_NAME</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyPath</span><span class="token operator">:</span> <span class="token string">"url"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">addData</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> jsonData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">openDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> transaction <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token constant">DB_STORE_NAME</span><span class="token punctuation">,</span> <span class="token string">"readwrite"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> transaction<span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span><span class="token constant">DB_STORE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    url<span class="token punctuation">,</span>
    <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> request <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">openDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> transaction <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token constant">DB_STORE_NAME</span><span class="token punctuation">,</span> <span class="token string">"readonly"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> transaction<span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span><span class="token constant">DB_STORE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> request <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      request<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Error retrieving from IndexedDB:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">cacheFirstStrategy</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">await</span> caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token constant">CACHE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cachedResponse <span class="token operator">=</span> <span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> cachedResponse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> networkResponse <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> responseClone <span class="token operator">=</span> networkResponse<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> responseClone<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> networkResponse<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Cache first strategy failed:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">"/offline"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">networkFirstStrategy</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> networkResponse <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>networkResponse<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> responseClone <span class="token operator">=</span> networkResponse<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> responseData <span class="token operator">=</span> <span class="token keyword">await</span> responseClone<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">await</span> <span class="token function">addData</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> responseData<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> networkResponse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Network response was not ok"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Network first strategy failed:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cachedResponse <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Using cached response:"</span><span class="token punctuation">,</span> cachedResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>cachedResponse<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">"[]"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"fetch"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">;</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>origin <span class="token operator">===</span> <span class="token string">"https://www.omdbapi.com"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">networkFirstStrategy</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">.</span>mode <span class="token operator">===</span> <span class="token string">"navigate"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">cacheFirstStrategy</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">dynamicCaching</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>With this setup, your PWA is now fully equipped to handle both static and dynamic content, provide an offline experience, and cache API data intelligently.</p>
<h4 id="heading-further-reading"><strong>Further Reading</strong></h4>
<p>There are many more strategies and nuances to building a robust offline experience with service workers. If you want to dive deeper into this topic, consider reading more about:</p>
<ul>
<li><p>Different caching strategies: Cache-First, Network-First, Stale-While-Revalidate, and so on.</p>
</li>
<li><p>Advanced service worker features like background sync and push notifications.</p>
</li>
<li><p>Best practices for managing cache and storage limits</p>
</li>
</ul>
<p>By understanding and implementing these concepts, you can ensure that your app remains functional and user-friendly, even in challenging network conditions.</p>
<h3 id="heading-providing-a-fallback-page"><strong>Providing a Fallback Page</strong></h3>
<p>Even with caching strategies in place, there may be times when users try to access a resource that isn’t available offline and in the network. To handle these situations gracefully, we can create a fallback page. This page will be shown whenever a user tries to access content that can't be retrieved from either the cache or the network.</p>
<p>If you cloned the example project for this tutorial, you should already have a fallback page located in the app directory. This page is designed to handle offline scenarios gracefully and includes a simple Tic-Tac-Toe game for users to play while waiting for the connection to be restored. Here’s what the fallback page looks like:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token string">"use client"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TicTacToe <span class="token keyword">from</span> <span class="token string">"@/components/TicTacToe"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">Fallback</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isOnline<span class="token punctuation">,</span> setIsOnline<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleOnline</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setIsOnline</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// Redirect to homepage if online</span>
      router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleOffline</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setIsOnline</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"online"</span><span class="token punctuation">,</span> handleOnline<span class="token punctuation">)</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"offline"</span><span class="token punctuation">,</span> handleOffline<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">"online"</span><span class="token punctuation">,</span> handleOnline<span class="token punctuation">)</span><span class="token punctuation">;</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">"offline"</span><span class="token punctuation">,</span> handleOffline<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>router<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleRefresh</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>onLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">setIsOnline</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex mx-auto h-screen max-w-[500px] w-full flex-col items-center justify-center h-screen bg-foreground text-black p-6 mt-12 text-white"</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">"text-3xl font-bold mb-6"</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>isOnline <span class="token operator">?</span> <span class="token string">"You are online!"</span> <span class="token operator">:</span> <span class="token string">"You are offline"</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"text-lg text-center mb-6"</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>isOnline
          <span class="token operator">?</span> <span class="token string">"You are back online."</span>
          <span class="token operator">:</span> <span class="token string">"Please check your internet connection and try again."</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">""</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>TicTacToe <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>isOnline <span class="token operator">?</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>Link
          href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">}</span>
          className<span class="token operator">=</span><span class="token string">"mt-6 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"</span>
        <span class="token operator">&gt;</span>
          Return to Homepage
        <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleRefresh<span class="token punctuation">}</span>
          className<span class="token operator">=</span><span class="token string">"mt-6 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"</span>
        <span class="token operator">&gt;</span>
          Refresh
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Fallback<span class="token punctuation">;</span>
</code></pre>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726726501345/46e5c3a7-7640-4e54-b6b8-2f43c5b24dcd.png" alt="An image showing our Fallback page" width="1600" height="1195" loading="lazy"></p>
<p><strong>Note:</strong> You can customize this fallback page to suit your application’s needs, whether that’s displaying helpful offline content, providing a message, or offering a small interactive feature like the Tic-Tac-Toe game included here.</p>
<h4 id="heading-caching-the-fallback-page"><strong>Caching the Fallback Page</strong></h4>
<p>Next, ensure that the fallback page is cached when the service worker is installed:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> <span class="token constant">CACHE_NAME</span> <span class="token operator">=</span> <span class="token string">"MOVIE_MASTER_V1"</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">cacheCoreAssets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">await</span> caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token constant">CACHE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string">"/"</span><span class="token punctuation">,</span>
    <span class="token string">"/fallback"</span><span class="token punctuation">,</span>
    <span class="token comment">// other assets</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<h4 id="heading-serving-the-fallback-page"><strong>Serving the Fallback Page</strong></h4>
<p>Finally, modify the <code>cacheFirstStrategy</code> to serve the <strong>offline.html</strong> page when a request fails:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">cacheFirstStrategy</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">await</span> caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token constant">CACHE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cachedResponse <span class="token operator">=</span> <span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> cachedResponse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> networkResponse <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> responseClone <span class="token operator">=</span> networkResponse<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> responseClone<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> networkResponse<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Cache first strategy failed:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">"/offline.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>This approach ensures that users always see a meaningful message instead of an error when they’re offline or when a resource is unavailable.</p>
<h2 id="heading-conclusion"><strong>Conclusion</strong></h2>
<p>With our Next.js app set up, we’ve successfully transformed it into a fully functional Progressive Web App (PWA), making it better and more user-friendly.</p>
<p>This guide showed how to build a strong PWA using Next.js by adding features like offline support, caching, and service workers. These improvements boost performance and provide a smooth experience on all devices, combining the best of web and native apps.</p>
<p>With these tips, you’ll be ready to create engaging, reliable, and high-performance PWAs that stand out in web development.</p>
-->

---

<TagLinks />