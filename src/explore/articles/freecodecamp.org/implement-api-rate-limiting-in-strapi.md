---
lang: ko-KR
title: How to Implement API Rate Limiting in Strapi CMS
description: Article(s) > How to Implement API Rate Limiting in Strapi CMS
icon: fa-brands fa-node
category: 
  - Node.js
  - Express.js
  - Strapi
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - node
  - nodejs
  - node-js
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Implement API Rate Limiting in Strapi CMS
    - property: og:description
      content: How to Implement API Rate Limiting in Strapi CMS
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/implement-api-rate-limiting-in-strapi.html
prev: /programming/js-node/articles/README.md
date: 2024-09-10
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725233479497/7c12e6e4-a6d7-433a-b23b-f25c33037ffa.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Angular.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-node/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="How to Implement API Rate Limiting in Strapi CMS"
  desc="Implementing rate limiting in web applications is a necessary web development best practice. In an article published earlier, I delved deep into the benefits and real life use cases of API rate limiting. Some of the benefits include its use by develo..."
  url="https://freecodecamp.org/news/implement-api-rate-limiting-in-strapi/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725233479497/7c12e6e4-a6d7-433a-b23b-f25c33037ffa.jpeg"/>

<!-- TODO: 작성 -->

<!-- 
<p>Implementing rate limiting in web applications is a necessary web development best practice. In an <a target="_blank" href="https://www.freecodecamp.org/news/what-is-rate-limiting-web-apis/">article</a> published earlier, I delved deep into the benefits and real life use cases of API rate limiting.</p>
<p>Some of the benefits include its use by developers to restrict malicious access to websites, prevent DDoS attacks, conserve website resources, and ensure optimal web server performance.</p>
<p>This article covers the practical aspects of implementing rate limits in a Strapi application using several packages and techniques.</p>
<p>Let's get started.</p>
<h2 id="heading-table-of-contents">Table of Contents</h2>
<ul>
<li><p><a class="post-section-overview" href="#heading-demo-project">Demo Project</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-koa2-rate-limit">Koa Rate Limiter</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-custom-strapi-api-rate-limiter">Custom Strapi Api Rate Limiter</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-express-rate-limiter-implementation">Express-rate-limiter Implementation</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-conclusion">Conclusion</a></p>
</li>
</ul>
<h2 id="heading-demo-project">Demo Project</h2>
<p>We'll be building an e-commerce site using <a target="_blank" href="https://strapi.io/">Strapi</a> as our backend framework. We'll then set up a rate limiter in our Strapi application to help guarantee our backend security. Postman will serve as our tool for testing the API endpoints. Let's go on to create a default Strapi application.</p>
<p>To create a strapi application, enter <code>npx create-strapi-app@latest {project name}</code> on the command line and follow the commands provided. To make the installation more straightforward, stick with the <em>quick start</em> installation method and your app should be ready.</p>
<p>This installation modality automatically sets up an easy-to-use SQLite database. However, you could choose to use any other SQL database supported by Strapi.</p>
<p>Alternatively, you can download the starter repo for the project from <a target="_blank" href="https://github.com/oluwatobi2001/Strapi-default">here</a> and install the necessary dependencies via <code>npm install</code>. Thereafter, you can execute the Strapi application by navigating to the Strapi application code folder on the command line and run <code>npm run develop</code>.</p>
<p><img src="https://hackmd.io/_uploads/BkRn2PqrR.png" alt="Strapi Setup" width="798" height="384" loading="lazy"></p>
<p>On successful execution, you will be provided with the link to the localhost address to customize the application.</p>
<p><img src="https://hackmd.io/_uploads/SkkSavcS0.png" alt="Strapi launch" width="853" height="177" loading="lazy"></p>
<p>Navigating to the link will require you to create an admin login mail and password. Successful completion of this step will give you access to the backend dashboard.</p>
<p><img src="https://hackmd.io/_uploads/S1Vqxd5B0.png" alt="strapi login UI" width="720" height="606" loading="lazy"></p>
<p>You can utilize the Strapi dashboard UI to create APIs, or you can generate an API using <code>npm generate</code>. The APIs created will be used in completing the setup for the rate limiting functionality. We will be creating a product store for our e-commerce site. To easily set up products, kindly navigate to the Content-Type builder tab on the sidebar.  </p>
<p><img src="https://hackmd.io/_uploads/r1RzbO5BC.png" alt="strapi dashboard" width="1286" height="641" loading="lazy"></p>
<p>The content-Type builder manager allows you to create various collections which will come in handy when setting up your APIs. In this case, the product and category collections will be created to enable you set up your product catalogues.</p>
<p><img src="https://hackmd.io/_uploads/B16rbu5rA.png" alt="Creating a category endpoint" width="1121" height="462" loading="lazy"></p>
<p><img src="https://hackmd.io/_uploads/SJhdb_qSR.png" alt="Creating a product entry" width="1105" height="453" loading="lazy"></p>
<p>After completing the creation of the collection types, you can easily add your products seamlessly into the backend database. In my case, I created phone brand products for sale.</p>
<p><img src="https://hackmd.io/_uploads/HyR9JT6fR.jpg" alt="Product creation demo" width="785" height="345" loading="lazy"></p>
<p>Also noteworthy is that the collections we created in the Strapi dashboard automatically creates an API folder for us within our codebase. We will then be working on the project codebase subsequently.</p>
<p>The next step in this tutorial is to set up an efficient rate limiter for our Strapi APIs created in the repo using the tools discussed above.</p>
<h2 id="heading-koa2-rate-limit">koa2-rate-limit</h2>
<p>In this section, we will be using the koa2-rate-limit package to build our project rate limiter. To install the package, navigate to your project folder on the command line and execute <code>npm i koa2-rate-limit</code>. On successful installation, navigate to the middleware subfolder within the API folder and create a code file. For ease of integration, name it as <strong>rateLimit.js</strong>.</p>
<p>After that, within the rate limit file, import and initialize the koa2-rate limit package.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> RateLimit <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"koa2-ratelimit"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>RateLimit<span class="token punctuation">;</span>
</code></pre>
<p>Afterwards, we can configure the koa rate limiter to a specified time interval frame and the total number of requests.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> <span class="token punctuation">{</span> strapi <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Configuring the rate limiter middleware</span>
  <span class="token keyword">const</span> limiter <span class="token operator">=</span> RateLimit<span class="token punctuation">.</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// Time window in minutes</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// Maximum number of requests per interval</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In the code above, the rate limiter middleware was invoked and the time interval in which the rate limit gets applied was set to 1 minute. The maximum number of requests (max) was set to 3 for this tutorial. You can tweak this to suit your preference.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>


    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// Apply the rate limiter to the current request</span>
      <span class="token keyword">await</span> <span class="token function">limiter</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">429</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Handle rate limit exceeded error</span>
        strapi<span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'Rate limit exceeded.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">429</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">429</span><span class="token punctuation">,</span>
          <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Too Many Requests'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'You have exceeded the maximum number of requests. Please try again later.'</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// Re-throw other errors to be handled by Strapi's error-handling middleware</span>
        <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre>
<p>The code above defines a middleware which gets executed whenever a function is made on any API. If the requests exceed the given maximum, an error code is outputted. Below is the full code.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">
<span class="token string">'use strict'</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * `RateLimit` middleware
 */</span>
<span class="token keyword">const</span> RateLimit <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"koa2-ratelimit"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>RateLimit<span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> <span class="token punctuation">{</span> strapi <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Configuring the rate limiter middleware</span>
  <span class="token keyword">const</span> limiter <span class="token operator">=</span> RateLimit<span class="token punctuation">.</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// Time window in minutes</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// Maximum number of requests per interval</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// Apply the rate limiter to the current request</span>
      <span class="token keyword">await</span> <span class="token function">limiter</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">429</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Handle rate limit exceeded error</span>
        strapi<span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'Rate limit exceeded.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">429</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">429</span><span class="token punctuation">,</span>
          <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Too Many Requests'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'You have exceeded the maximum number of requests. Please try again later.'</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// Re-throw other errors to be handled by Strapi's error-handling middleware</span>
        <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>To ensure its seamless integration to all APIs within the Strapi project, the admin middlewares must also be configured.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">cconst rateLimit <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../middlewares/rateLimit'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">[</span>
 <span class="token string">'strapi::logger'</span><span class="token punctuation">,</span>
 <span class="token string">'strapi::errors'</span><span class="token punctuation">,</span>
 <span class="token string">'strapi::security'</span><span class="token punctuation">,</span>
 <span class="token string">'strapi::cors'</span><span class="token punctuation">,</span>
 <span class="token string">'strapi::poweredBy'</span><span class="token punctuation">,</span>
 <span class="token string">'strapi::query'</span><span class="token punctuation">,</span>
 <span class="token string">'strapi::body'</span><span class="token punctuation">,</span>
 <span class="token string">'strapi::session'</span><span class="token punctuation">,</span>
 <span class="token string">'strapi::favicon'</span><span class="token punctuation">,</span>
 <span class="token string">'strapi::public'</span><span class="token punctuation">,</span>

 <span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'global::rateLimit'</span><span class="token punctuation">,</span>
   <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
<p>With this, we have successfully configured the rate limiter powered by koa2-ratelimiter. Here are pictures of its execution.</p>
<p><img src="https://hackmd.io/_uploads/Bybbd-hj0.png" alt="Postman testing the categories endpoint" width="867" height="493" loading="lazy"></p>
<p><img src="https://hackmd.io/_uploads/r1Zb_-3jC.png" alt="rate limiting error response output" width="952" height="503" loading="lazy"></p>
<h2 id="heading-custom-strapi-api-rate-limiter">Custom Strapi Api Rate Limiter</h2>
<p>Within the <strong>rateLimit</strong> file in the <strong>API/middlewares</strong> folder, create a custom rate limiter by initializing a memory store.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> requestCounts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Thereafter, define your rate limit function and then configure the rate limiter.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> <span class="token punctuation">{</span> strapi <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> rateLimitConfig <span class="token operator">=</span> strapi<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'admin.rateLimit'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>  
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The time interval above is 1 minute while the maximum number of requests that can be made within the specified time interval is 3. You can tweak it to suit your preference.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> ip <span class="token operator">=</span> ctx<span class="token punctuation">.</span>ip<span class="token punctuation">;</span> 
    <span class="token keyword">const</span> currentTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>requestCounts<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      requestCounts<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>ip<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">startTime</span><span class="token operator">:</span> currentTime <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> requestInfo <span class="token operator">=</span> requestCounts<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">;</span>


      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTime <span class="token operator">-</span> requestInfo<span class="token punctuation">.</span>startTime <span class="token operator">&gt;</span> rateLimitConfig<span class="token punctuation">.</span>interval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        requestInfo<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        requestInfo<span class="token punctuation">.</span>startTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

 <span class="token punctuation">}</span>


      <span class="token keyword">if</span> <span class="token punctuation">(</span>requestInfo<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> rateLimitConfig<span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        strapi<span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Rate limit exceeded for IP: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ip<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        ctx<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">429</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">429</span><span class="token punctuation">,</span>
          <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Too Many Requests'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'You have exceeded the maximum number of requests. Please try again later.'</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Afterwards, a middleware is defined which obtains the user IP address and then stores it in the memory store. The time interval is also set from the current time the request is made and the request count gets updated with every new request made.</p>
<p>If the requests made exceed the maximum expected requests within the time interval of 1 minute in our case, an error is thrown. Here is the full code below.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token string">'use strict'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> requestCounts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> <span class="token punctuation">{</span> strapi <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> rateLimitConfig <span class="token operator">=</span> strapi<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'admin.rateLimit'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>  
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> ip <span class="token operator">=</span> ctx<span class="token punctuation">.</span>ip<span class="token punctuation">;</span> 
    <span class="token keyword">const</span> currentTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>requestCounts<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      requestCounts<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>ip<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">startTime</span><span class="token operator">:</span> currentTime <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> requestInfo <span class="token operator">=</span> requestCounts<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">;</span>


      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTime <span class="token operator">-</span> requestInfo<span class="token punctuation">.</span>startTime <span class="token operator">&gt;</span> rateLimitConfig<span class="token punctuation">.</span>interval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        requestInfo<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        requestInfo<span class="token punctuation">.</span>startTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

        requestInfo<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>


      <span class="token keyword">if</span> <span class="token punctuation">(</span>requestInfo<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> rateLimitConfig<span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token punctuation">{</span>


        ctx<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">429</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">429</span><span class="token punctuation">,</span>
          <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Too Many Requests'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'You have exceeded the maximum number of requests. Please try again later.'</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Here is a demo of the project.</p>
<p><img src="https://hackmd.io/_uploads/BkIyHZ2j0.png" alt="fetching the categories on Postman" width="792" height="505" loading="lazy"></p>
<p><img src="https://hackmd.io/_uploads/HyxgHW2i0.png" alt="rate limiting error on Postman" width="943" height="509" loading="lazy"></p>
<h3 id="heading-express-rate-limiter-implementation">Express-rate-limiter Implementation</h3>
<p>Express rate limiter is also another important package that can be used to implement rate limiting in our project. Right now, this package will be used to implement a route-specific API rate limiting.</p>
<p>The next step in this tutorial is setting up an efficient rate limiter for our Strapi APIs created in the repo.</p>
<p>To set up rate limiters on our Strapi applications, we'll be working mainly on the <strong>routes</strong> file. This can be navigated to by accessing the <strong>src</strong> folder within the project root directory. Within the <strong>src</strong> folder, navigate to the <strong>API</strong> folder which contains all the API files for the collections created in the Strapi dashboard.</p>
<p><img src="https://hackmd.io/_uploads/S1ERbxndR.png" alt="the product route directory" width="239" height="548" loading="lazy"></p>
<p>The rate limiter will be enforced in the routes section of each API. For this tutorial, I will be using the products API as a demo API in this article.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token string">'use strict'</span><span class="token punctuation">;</span>


<span class="token comment">/**
 * product router
 */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> createCoreRouter <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@strapi/strapi'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>factories<span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">createCoreRouter</span><span class="token punctuation">(</span><span class="token string">'api::product.product'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>This is the initial code setup in the <strong>routes.js</strong> file in our product API folder. The rate limiting tool of choice for this tutorial is express-rate-limit as it offers much simplicity and user-friendliness coupled with its efficiency. Here is a link to its <a target="_blank" href="https://www.npmjs.com/package/express-rate-limit">documentation</a>. To get this installed, navigate to the command line of the project directory and run</p>
<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> express-rate-limit
</code></pre>
<p>On completion of its installation, we will be initializing it in the <strong>products</strong> file already created within the <strong>routes</strong> folder as follows.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> <span class="token punctuation">{</span> rateLimit <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express-rate-limit"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Go on and configure the rate limiter to your desired specifications.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> rateLimit <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express-rate-limit'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> limiter <span class="token operator">=</span> <span class="token function">rateLimit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">windowMs</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 3 minutes</span>
  <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// limit each IP to 2 requests per windowMs</span>
  <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> strapi<span class="token punctuation">.</span>requestContext<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">429</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"Too many requests"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">policy</span><span class="token operator">:</span> <span class="token string">"rate limit"</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// Ensure the response is ended after setting the response body and status</span>
    ctx<span class="token punctuation">.</span>res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> limiter<span class="token punctuation">;</span>
</code></pre>
<p>The code above serves to configure the rate limiting parameters we intend to use for the file.</p>
<p><code>windowMs</code> represents the time interval in milliseconds for the number of requests. In our case, we specified a time of 3 minutes. Also, we specified the maximum number of requests that can be made within that same time frame. In our case, we used 2 for demo purposes.</p>
<p>However, the <code>limit</code> parameter also serves as an alternative to <code>max</code> parameter. Also included is the handler function that gets executed whenever the requests exceed the set number. It returns an <strong>Error 429</strong> with an error body containing “Too many requests”.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">
<span class="token keyword">const</span> <span class="token punctuation">{</span> createCoreRouter <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@strapi/strapi'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>factories<span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">createCoreRouter</span><span class="token punctuation">(</span><span class="token string">'api::product.product'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">find</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">middlewares</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">limiter</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>req<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>res<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ctx<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">429</span><span class="token punctuation">;</span>
                ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message <span class="token punctuation">}</span><span class="token punctuation">;</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The above code illustrates the use of the Strapi API middleware which serves to ensure that the rate limit is fulfilled before the onward execution of the API requests. It also ensures that the request is terminated when the rate limit gets exceeded. Here is the final code for the project.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token string">'use strict'</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * product router
 */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> createCoreRouter <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@strapi/strapi'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>factories<span class="token punctuation">;</span>
<span class="token keyword">const</span> rateLimit <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express-rate-limit'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> limiter <span class="token operator">=</span> <span class="token function">rateLimit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">windowMs</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 3 minutes</span>
  <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// limit each IP to 2 requests per windowMs</span>
  <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> strapi<span class="token punctuation">.</span>requestContext<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">429</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Too many requests'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">policy</span><span class="token operator">:</span> <span class="token string">'rate limit'</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// Ensure the response is ended after setting the response body and status</span>
    ctx<span class="token punctuation">.</span>res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">createCoreRouter</span><span class="token punctuation">(</span><span class="token string">'api::product.product'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">find</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">middlewares</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">limiter</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>req<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>res<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

              <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ctx<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">429</span><span class="token punctuation">;</span>
                ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message <span class="token punctuation">}</span><span class="token punctuation">;</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>status <span class="token operator">!==</span> <span class="token number">429</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Here is an image showing the rate limiting functionality.</p>
<p><img src="https://hackmd.io/_uploads/S116Wu9BR.png" alt="product endpoint testing in Postman" width="802" height="516" loading="lazy"></p>
<p><img src="https://hackmd.io/_uploads/S1zMGO5B0.png" alt="ratelimit successfully executed" width="738" height="432" loading="lazy"></p>
<p>You can also download the final code for the project <a target="_blank" href="https://github.com/oluwatobi2001/Strapi-project">here</a>. Having completed this, you can then go ahead to test the rate limiting functionality of your API. The Strapi application can be run by executing <code>npm run develop</code> in the command line.</p>
<h2 id="heading-conclusion">Conclusion</h2>
<p>With this, we have come to the end of the tutorial. We hope you’ve learned essentially about rate limiting, its uses, tools and best practices.</p>
<p>You can also design multiple rate limiters within the code and implement them in any endpoint of your choice to test it out.</p>
<p>Feel free to drop any questions or comments. Happy coding!</p>
-->

---

<TagLinks />