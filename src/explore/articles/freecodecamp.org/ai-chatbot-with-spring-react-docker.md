---
lang: ko-KR
title: How to Build an AI Chatbot with Spring AI, React, and Docker
description: Article(s) > How to Build an AI Chatbot with Spring AI, React, and Docker
icon: iconfont icon-spring
category: 
  - Java
  - Spring
  - Spring Boot
  - Node.js
  - React.js
  - DevOps
  - Docker
  - AI
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - java
  - spring
  - spring-boot
  - node
  - nodejs
  - node-js
  - react
  - reactjs
  - react-js
  - devops
  - docker
  - ai
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Build an AI Chatbot with Spring AI, React, and Docker
    - property: og:description
      content: How to Build an AI Chatbot with Spring AI, React, and Docker
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/ai-chatbot-with-spring-react-docker.html
prev: /programming/java-spring/articles/README.md
date: 2024-09-23
isOriginal: false
author: Vikas Rajput
cover: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/6UDansS-rPI/upload/d57a180a4cda63056c786838a71c6679.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Spring > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/java-spring/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "React.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-react/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Docker > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/docker/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "AI > Article(s)",
  "desc": "Article(s)",
  "link": "/ai/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to Build an AI Chatbot with Spring AI, React, and Docker"
  desc="Hey Java developers, I’ve got good news: Spring now has official support for building AI applications using the Spring AI module. In this tutorial, we’ll build a chatbot application using Spring Boot, React, Docker, and OpenAI. This app will let user..."
  url="https://freecodecamp.org/news/ai-chatbot-with-spring-react-docker/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/6UDansS-rPI/upload/d57a180a4cda63056c786838a71c6679.jpeg"/>

<!-- TODO: 작성 -->

<!-- 
<p>Hey Java developers, I’ve got good news: Spring now has official support for building AI applications using the <a target="_blank" href="https://spring.io/projects/spring-ai">Spring AI</a> module.</p>
<p>In this tutorial, we’ll build a chatbot application using <a target="_blank" href="https://spring.io/projects/spring-boot"><strong>Spring Boot</strong></a>, <a target="_blank" href="https://react.dev/"><strong>React</strong></a>, <a target="_blank" href="https://www.docker.com/"><strong>Docker</strong></a>, and <a target="_blank" href="https://openai.com/"><strong>OpenAI</strong></a>. This app will let users interact with an AI-powered chatbot, ask questions, and receive responses in real time.</p>
<p>The entire source code mentioned in this article is already available on the <a target="_blank" href="https://github.com/vikasrajputin/springboot-react-docker-chatbot">GitHub repository</a>. Feel free to give it a star and fork it to play around.</p>
<p>To give you an idea of what we’ll be building here, this is how the final application will look:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726657239698/5170bf73-b317-4281-bcd1-583454d4113f.png" alt="Chatbot App UI using Spring AI, React, Docker by Vikas Rajput" class="image--center mx-auto" width="729" height="883" loading="lazy"></p>
<p>Are you excited? Let’s build it from scratch!</p>
<h2 id="heading-table-of-contents"><strong>Table of Contents</strong></h2>
<ul>
<li><p><a class="post-section-overview" href="#heading-prerequisites">Prerequisites</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-get-your-openai-key">Get Your OpenAI key</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-build-the-rest-api-in-spring-boot">Build the REST API in Spring Boot</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-build-the-chatui-using-reactjs">Build the ChatUI using Reactjs</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-dockerize-the-application">How to Dockerize the Application</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-run-the-application">Run the Application</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-congratulations">Congratulations 🎉</a></p>
</li>
</ul>
<h2 id="heading-prerequisites"><strong>Prerequisites</strong></h2>
<p>Before we dive into building the chatbot, here are a few things you’ll need to be familiar with:</p>
<ol>
<li><p>Basic understanding of <strong>Java</strong> and <strong>Spring Boot</strong>.</p>
</li>
<li><p>Basic understanding of <strong>React</strong> and <strong>CSS</strong>.</p>
</li>
<li><p>Install <a target="_blank" href="https://jdk.java.net/java-se-ri/17-MR1">JDK</a>, <a target="_blank" href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">Node Package Manager</a> and <a target="_blank" href="https://docs.docker.com/get-started/get-docker/">Docke</a><a target="_blank" href="https://docs.docker.com/desktop/">r</a> onto your machine.</p>
</li>
</ol>
<h2 id="heading-get-your-openai-key"><strong>Get Your OpenAI key</strong></h2>
<p>First, you’ll need to sign up for an <a target="_blank" href="https://platform.openai.com/">OpenAI</a> account if you don’t have one. Once signed in, you’ll be taken to the homepage.</p>
<p>In the top right corner, click the “Dashboard” menu. On the sidebar, click "API Keys," then click the "Create new secret key" button to generate your secret key:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726818120291/5f1681a0-fdbe-401e-ab4b-769fe38d7957.png" alt="How to generate your OpenAI key" class="image--center mx-auto" width="1903" height="537" loading="lazy"></p>
<p>Copy the secret key and save it somewhere safe, as you’ll need it later to connect your app to the OpenAI API.</p>
<p>You can go through the OpenAI <a target="_blank" href="https://platform.openai.com/docs/api-reference/authentication">API reference guide</a> to learn more about how to call the APIs, what requests it accepts, and the responses it gives.</p>
<h2 id="heading-build-the-rest-api-in-spring-boot"><strong>Build the REST API in Spring Boot</strong></h2>
<p>Let’s head over to the <a target="_blank" href="https://start.spring.io/">spring initializer</a> to generate the boilerplate code:</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726662395429/cd4b07fd-2597-43bf-8038-1821003125bb.png" alt="Build Spring AI app using the spring initializer" class="image--center mx-auto" width="1511" height="883" loading="lazy"></p>
<p>You can give the group, artifact, name, description, and package you choose. We’ve used Maven as the built tool, Spring boot version 3.3.3, Jar as a packaging option, and Java version 17.</p>
<p>Hit the generate button and the zip will be downloaded. Unzip the files and import them as a Maven project into your favourite IDE (mine is Intellij).</p>
<h3 id="heading-configure-your-openai-key-in-spring">Configure your OpenAI key in Spring</h3>
<p>You can either use the existing <code>application.properties</code> file or create a <code>application.yaml</code> file. I love working with Yaml, so created a <code>application.yaml</code> file where I can place all my Spring Boot configurations.</p>
<p>Add the OpenAIKey, Model, and Temperature to your <code>application.yaml</code> file:</p>
<pre class="language-yaml" tabindex="0"><code class="language-yaml"><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">ai</span><span class="token punctuation">:</span>
    <span class="token key atrule">openai</span><span class="token punctuation">:</span>
      <span class="token key atrule">chat</span><span class="token punctuation">:</span>
        <span class="token key atrule">options</span><span class="token punctuation">:</span>
          <span class="token key atrule">model</span><span class="token punctuation">:</span> <span class="token string">"gpt-3.5-turbo"</span>
          <span class="token key atrule">temperature</span><span class="token punctuation">:</span> <span class="token string">"0.7"</span>
      <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"PUT YOUR OPEN_API_KEY HERE"</span>
</code></pre>
<p>A similar configuration in <code>application.properties</code> may look like as follows:</p>
<pre class="language-basic" tabindex="0"><code class="language-basic">spring.ai.openai.chat.options.model<span class="token operator">=</span>gpt<span class="token operator">-</span><span class="token number">3.5</span><span class="token operator">-</span>turbo
spring.ai.openai.chat.options.temperature<span class="token operator">=</span><span class="token number">0.7</span>
spring.ai.openai.<span class="token keyword">key</span><span class="token operator">=</span><span class="token string">"PUT YOUR OPEN_API_KEY HERE"</span>
</code></pre>
<h3 id="heading-build-the-chatcontroller">Build the ChatController</h3>
<p>Let’s create a <code>GET</code> API with the URL <code>/ai/chat/string</code> and a method to handle the logic:</p>
<pre class="language-java" tabindex="0"><code class="language-java"><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ChatController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">OpenAiChatModel</span> chatModel<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/ai/chat/string"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Flux</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">generateString</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"message"</span><span class="token punctuation">,</span> defaultValue <span class="token operator">=</span> <span class="token string">"Tell me a joke"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> chatModel<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<ul>
<li><p>First, we’re adding <code>@RestController</code> to mark the <code>ChatController</code> class as our spring controller</p>
</li>
<li><p>Then, we’re injecting the dependency for the <code>OpenAiChatModel</code> class. It comes out of the box as part of the Spring AI dependency we’ve used.</p>
</li>
<li><p>The <code>OpenAiChatModel</code> comes with a method <code>stream(message)</code> which accepts the prompt as <code>String</code> and returns a <code>String</code> response (technically it’s a <code>Flux</code> of <code>String</code> as we’ve used a Reactive version of the same method).</p>
</li>
<li><p>Internally, <code>OpenAiChatModel.stream(message)</code> will call the OpenAI API and fetch the response from there. The OpenAI call will use the configuration steps mentioned in your <code>application.yaml</code> file, so make sure to use a valid OpenAI key.</p>
</li>
<li><p>We’ve created a method to handle the GET API call, which accepts the message and returns <code>Flux&lt;String&gt;</code> as the response.</p>
</li>
</ul>
<h3 id="heading-build-run-and-test-the-rest-api">Build, Run, and Test the REST API</h3>
<p>Use the maven commands to build and run the Spring Boot application:</p>
<pre class="language-bash" tabindex="0"><code class="language-bash">./mvnw clean <span class="token function">install</span> spring-boot:run
</code></pre>
<p>Ideally, it will run on a <code>8080</code> port unless you’ve customized the port. Make sure to keep that port free to successfully run the application.</p>
<p>You can either use <a target="_blank" href="https://www.postman.com/">Postman</a> or the <a target="_blank" href="https://curl.se/">Curl</a> command to test your REST API:</p>
<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token string">'http://localhost:8080/ai/chat/string?message=How%20are%20you%3F'</span>
</code></pre>
<h2 id="heading-build-the-chatui-using-reactjs">Build the ChatUI using React.js</h2>
<p>We will be making it super simple and easy for the sake of this tutorial, so pardon me if I don’t follow any React best practices.</p>
<h3 id="heading-create-appjs-to-manage-the-chatui-form">Create <code>App.js</code> to Manage the ChatUI Form</h3>
<p>We’ll be using <code>useState</code> to manage the state:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">[</span>messages<span class="token punctuation">,</span> setMessages<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>input<span class="token punctuation">,</span> setInput<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<ul>
<li><p><code>messages</code>: It will store all the messages in the chat. Each message has a <code>text</code> and a <code>sender</code> (either 'user' or 'ai').</p>
</li>
<li><p><code>input</code>: To hold what the user is typing in the text box.</p>
</li>
<li><p><code>loading</code>: This state is set to <code>true</code> while the chatbot is waiting for a response from the AI, and <code>false</code> when the response is received.</p>
</li>
</ul>
<p>Let’s create a function <code>handleSend</code> and call it when the user sends a message by clicking a button or pressing Enter:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">handleSend</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> newMessage <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> input<span class="token punctuation">,</span> <span class="token literal-property property">sender</span><span class="token operator">:</span> <span class="token string">'user'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">setMessages</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>messages<span class="token punctuation">,</span> newMessage<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setInput</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'http://localhost:8080/ai/chat/string?message='</span> <span class="token operator">+</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> aiMessage <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> response<span class="token punctuation">.</span>data<span class="token punctuation">,</span> <span class="token literal-property property">sender</span><span class="token operator">:</span> <span class="token string">'ai'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">setMessages</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>messages<span class="token punctuation">,</span> newMessage<span class="token punctuation">,</span> aiMessage<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Error fetching AI response"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Here’s what happens step by step:</p>
<ul>
<li><p><strong>Check empty input</strong>: If the input field is empty, the function returns early (nothing is sent).</p>
</li>
<li><p><strong>New message from the user</strong>: A new message is added to the <code>messages</code> array. This message has the <code>text</code> (whatever the user typed) and is marked as being sent by the 'user'.</p>
</li>
<li><p><strong>Reset input</strong>: The input field is cleared after the message is sent.</p>
</li>
<li><p><strong>Start loading</strong>: While waiting for the AI to respond, <code>loading</code> is set to <code>true</code> to show a loading indicator.</p>
</li>
<li><p><strong>Make API request</strong>: The code is used <code>axios</code> to request the AI chatbot API, passing the user's message. When the response comes back, a new message from the AI is added to the chat.</p>
</li>
<li><p><strong>Error handling</strong>: If there is a problem getting the AI’s response, an error is logged to the console.</p>
</li>
<li><p><strong>Stop loading</strong>: Finally, the loading state is turned off.</p>
</li>
</ul>
<p>Let’s write a function to update the <code>input</code> state whenever the user types something in the input field:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">handleInputChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setInput</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Next, let’s create a function to check if the user presses the Enter key. If they do, it calls <code>handleSend()</code> to send the message:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">handleKeyPress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">'Enter'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleSend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>Now let’s create UI elements to render the chat messages:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token punctuation">{</span>messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">message-container </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>sender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>img
            src<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">.</span>sender <span class="token operator">===</span> <span class="token string">'user'</span> <span class="token operator">?</span> <span class="token string">'user-icon.png'</span> <span class="token operator">:</span> <span class="token string">'ai-assistant.png'</span><span class="token punctuation">}</span>
            alt<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>sender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> avatar</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
            className<span class="token operator">=</span><span class="token string">"avatar"</span>
        <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">message </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>sender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>message<span class="token punctuation">.</span>text<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre>
<p>This block renders all the messages in the chat:</p>
<ul>
<li><p><strong>Mapping through messages</strong>: Each message is displayed as a <code>div</code> using <code>.map()</code>.</p>
</li>
<li><p><strong>Message styling</strong>: The class name of the message changes based on who the sender is (<code>user</code> or <code>ai</code>), making it clear who sent the message.</p>
</li>
<li><p><strong>Avatar images</strong>: Each message shows a small avatar, with a different image for the user and the AI.</p>
</li>
</ul>
<p>Let’s create some logic to show the loader based on a flag:</p>
<pre class="language-js" tabindex="0"><code class="language-js"><span class="token punctuation">{</span>loading <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"message-container ai"</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"ai-assistant.png"</span> alt<span class="token operator">=</span><span class="token string">"AI avatar"</span> className<span class="token operator">=</span><span class="token string">"avatar"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"message ai"</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre>
<p>While the AI is thinking (when <code>loading</code> is <code>true</code>), we show a loading message (<code>...</code>) so the user knows a response is coming soon.</p>
<p>At last, create a button to click the message send button:</p>
<pre class="language-jsx" tabindex="0"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSend<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FaPaperPlane</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>This button triggers the <code>handleSend()</code> function when clicked. The icon used here is a <a target="_blank" href="https://react-icons.github.io/react-icons/icons/fa/">paper plane</a>, which is common for "send" buttons.</p>
<p>The full <code>Chatbot.js</code> looks as below:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FaPaperPlane <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-icons/fa'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./Chatbot.css'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Chatbot</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>messages<span class="token punctuation">,</span> setMessages<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>input<span class="token punctuation">,</span> setInput<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleSend</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> newMessage <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> input<span class="token punctuation">,</span> <span class="token literal-property property">sender</span><span class="token operator">:</span> <span class="token string">'user'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">setMessages</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>messages<span class="token punctuation">,</span> newMessage<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setInput</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'http://localhost:8080/ai/chat/string?message='</span> <span class="token operator">+</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> aiMessage <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> response<span class="token punctuation">.</span>data<span class="token punctuation">,</span> <span class="token literal-property property">sender</span><span class="token operator">:</span> <span class="token string">'ai'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token function">setMessages</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>messages<span class="token punctuation">,</span> newMessage<span class="token punctuation">,</span> aiMessage<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Error fetching AI response"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleInputChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setInput</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleKeyPress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">'Enter'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">handleSend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"chatbot-container"</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"chat-header"</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"ChatBot.png"</span> alt<span class="token operator">=</span><span class="token string">"Chatbot Logo"</span> className<span class="token operator">=</span><span class="token string">"chat-logo"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"breadcrumb"</span><span class="token operator">&gt;</span>Home <span class="token operator">&amp;</span>gt<span class="token punctuation">;</span> Chat<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"chatbox"</span><span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">message-container </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>sender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>img
                            src<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">.</span>sender <span class="token operator">===</span> <span class="token string">'user'</span> <span class="token operator">?</span> <span class="token string">'user-icon.png'</span> <span class="token operator">:</span> <span class="token string">'ai-assistant.png'</span><span class="token punctuation">}</span>
                            alt<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>sender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> avatar</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
                            className<span class="token operator">=</span><span class="token string">"avatar"</span>
                        <span class="token operator">/</span><span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">message </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>sender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
                            <span class="token punctuation">{</span>message<span class="token punctuation">.</span>text<span class="token punctuation">}</span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token punctuation">{</span>loading <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"message-container ai"</span><span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"ai-assistant.png"</span> alt<span class="token operator">=</span><span class="token string">"AI avatar"</span> className<span class="token operator">=</span><span class="token string">"avatar"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"message ai"</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                <span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"input-container"</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>input
                    type<span class="token operator">=</span><span class="token string">"text"</span>
                    value<span class="token operator">=</span><span class="token punctuation">{</span>input<span class="token punctuation">}</span>
                    onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleInputChange<span class="token punctuation">}</span>
                    onKeyPress<span class="token operator">=</span><span class="token punctuation">{</span>handleKeyPress<span class="token punctuation">}</span>
                    placeholder<span class="token operator">=</span><span class="token string">"Type your message..."</span>
                <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleSend<span class="token punctuation">}</span><span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>FaPaperPlane <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Chatbot<span class="token punctuation">;</span>
</code></pre>
<p>Use <code>&lt;Chatbot/&gt;</code> inside the <code>App.js</code> to load the Chatbot UI:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Chatbot <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Along with this, we’re also using CSS to make our chatbot a little more beautiful. You can refer to <a target="_blank" href="https://github.com/vikasrajputin/springboot-react-docker-chatbot/blob/main/chatbot-ui/src/App.css">App.css</a> and <a target="_blank" href="https://github.com/vikasrajputin/springboot-react-docker-chatbot/blob/main/chatbot-ui/src/Chatbot.css">Chatbot.css</a> for that.</p>
<h3 id="heading-run-the-frontend">Run the Frontend</h3>
<p>Use the <code>npm</code> command to run the application:</p>
<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">npm</span> start
</code></pre>
<p>This should run the frontend on the URL <code>http://localhost:3000</code>. The application is good to be tested now.</p>
<p>But running the backend and frontend separately is a bit of a hassle. So let’s use Docker to make the entire build process easier.</p>
<h2 id="heading-how-to-dockerize-the-application"><strong>How to Dockerize th</strong>e Applic<strong>ation</strong></h2>
<p>Let’s dockerize the entire application to help bundle and ship it anywhere hassle-free. You can install and configure Docker from the <a target="_blank" href="https://docs.docker.com/get-started/get-docker/">official Docker website</a>.</p>
<h3 id="heading-dockerize-the-backend">Dockerize the Backend</h3>
<p>The backend of our chatbot is built with Spring Boot, so we will create a <code>Dockerfile</code> that builds the Spring Boot app into an executable JAR file and runs it in a container.</p>
<p>Let’s write the <code>Dockerfile</code> for it:</p>
<pre class="language-dockerfile" tabindex="0"><code class="language-dockerfile"><span class="token comment"># Start with an official image that has Java installed</span>
<span class="token instruction"><span class="token keyword">FROM</span> openjdk:17-jdk-alpine</span>

<span class="token comment"># Set the working directory inside the container</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># Copy the Maven/Gradle build file and source code into the container</span>
<span class="token instruction"><span class="token keyword">COPY</span> target/chatbot-backend.jar /app/chatbot-backend.jar</span>

<span class="token comment"># Expose the application’s port</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>

<span class="token comment"># Command to run the Spring Boot app</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">"java"</span>, <span class="token string">"-jar"</span>, <span class="token string">"chatbot-backend.jar"</span>]</span>
</code></pre>
<ul>
<li><p><code>FROM openjdk:17-jdk-alpine</code>: This specifies that the container should be based on a lightweight Alpine Linux image that includes JDK 17, which is needed to run Spring Boot.</p>
</li>
<li><p><code>WORKDIR /app</code>: Sets the working directory inside the container to <code>/app</code>, where our application files will live.</p>
</li>
<li><p><code>COPY target/chatbot-backend.jar /app/chatbot-backend.jar</code>: Copies the built JAR file from your local machine (usually in the <code>target</code> folder after building the project with Maven or Gradle) into the container.</p>
</li>
<li><p><code>EXPOSE 8080</code>: This tells Docker that the application will listen for requests on port 8080.</p>
</li>
<li><p><code>CMD ["java", "-jar", "chatbot-backend.jar"]</code>: This specifies the command that will run when the container starts. It runs the JAR file that launches the Spring Boot app.</p>
</li>
</ul>
<h3 id="heading-dockerize-the-frontend">Dockerize the Frontend</h3>
<p>The front end of our chatbot is built using React, and we can Dockerize it by creating a Dockerfile that installs the necessary dependencies, builds the app, and serves it using a lightweight web server like NGINX.</p>
<p>Let’s write the <code>Dockerfile</code> for the React frontend:</p>
<pre class="language-dockerfile" tabindex="0"><code class="language-dockerfile"><span class="token comment"># Use a Node image to build the React app</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:16-alpine <span class="token keyword">AS</span> build</span>

<span class="token comment"># Set the working directory inside the container</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># Copy the package.json and install the dependencies</span>
<span class="token instruction"><span class="token keyword">COPY</span> package.json package-lock.json ./</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install</span>

<span class="token comment"># Copy the rest of the application code and build it</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm run build</span>

<span class="token comment"># Use a lightweight NGINX server to serve the built app</span>
<span class="token instruction"><span class="token keyword">FROM</span> nginx:alpine</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">build</span></span> /app/build /usr/share/nginx/html</span>

<span class="token comment"># Expose port 80 for the web traffic</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>

<span class="token comment"># Start NGINX</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">"nginx"</span>, <span class="token string">"-g"</span>, <span class="token string">"daemon off;"</span>]</span>
</code></pre>
<ul>
<li><p><code>FROM node:16-alpine AS build</code>: This uses a lightweight Node.js image to build the React app. We install all dependencies and build the app inside this container.</p>
</li>
<li><p><code>WORKDIR /app</code>: Sets the working directory inside the container to <code>/app</code>.</p>
</li>
<li><p><code>COPY package.json package-lock.json ./</code>: Copies <code>package.json</code> and <code>package-lock.json</code> to install dependencies.</p>
</li>
<li><p><code>RUN npm install</code>: Installs the dependencies listed in the package.json.</p>
</li>
<li><p><code>COPY . .</code>: Copies all the frontend source code into the container.</p>
</li>
<li><p><code>RUN npm run build</code>: Builds the React application. The built files will be in a <code>build</code> folder.</p>
</li>
<li><p><code>FROM nginx:alpine</code>: After building the app, this line starts a new container based on the <code>nginx</code> web server.</p>
</li>
<li><p><code>COPY --from=build /app/build /usr/share/nginx/html</code>: Copies the built React app from the first container into the nginx container, placing it in the default folder where NGINX serves files.</p>
</li>
<li><p><code>EXPOSE 80</code>: This exposes port 80, which NGINX uses to serve web traffic.</p>
</li>
<li><p><code>CMD ["nginx", "-g", "daemon off;"]</code>: This starts the NGINX server in the foreground to serve your React app.</p>
</li>
</ul>
<h3 id="heading-docker-compose-to-run-both">Docker Compose to Run Both</h3>
<p>Now that we have separate Dockerfiles for the frontend and backend, we’ll use <code>docker-compose</code> to orchestrate running both containers at once.</p>
<p>Let’s write the <code>docker-compose.yml</code> file inside the root directory of the project:</p>
<pre class="language-yaml" tabindex="0"><code class="language-yaml"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">'3'</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> ./backend
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">"8080:8080"</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> chatbot<span class="token punctuation">-</span>network

  <span class="token key atrule">frontend</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> ./frontend
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">"3000:80"</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> backend
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> chatbot<span class="token punctuation">-</span>network

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">chatbot-network</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
</code></pre>
<ul>
<li><p><code>version: '3'</code>: This defines the version of Docker Compose being used.</p>
</li>
<li><p><code>services:</code>: This defines the services we want to run.</p>
<ul>
<li><p><code>backend</code>: This service builds the backend using the Dockerfile located in the <code>./backend</code> directory and exposes port 8080.</p>
</li>
<li><p><code>frontend</code>: This service builds the front end using the Dockerfile located in the <code>./frontend</code> directory. It maps port 3000 on the host to port 80 inside the container.</p>
</li>
</ul>
</li>
<li><p><code>depends_on:</code>: This makes sure the front end waits for the backend to be ready before it starts.</p>
</li>
<li><p><code>networks:</code>: This section defines a shared network so that both the backend and frontend can communicate with each other.</p>
</li>
</ul>
<h2 id="heading-run-the-application">Run the Application</h2>
<p>To run the entire application (both frontend and backend), you can use the following command:</p>
<pre class="language-bash" tabindex="0"><code class="language-bash"><span class="token function">docker-compose</span> up <span class="token parameter variable">--build</span>
</code></pre>
<p>This command will:</p>
<ul>
<li><p>Build both the frontend and backend images.</p>
</li>
<li><p>Start both containers (backend on port 8080, frontend on port 3000).</p>
</li>
<li><p>Set up networking so that both services can communicate.</p>
</li>
</ul>
<p>Now, you can head over to <code>http://localhost:3000</code> load the Chatbot UI and start asking your questions to the AI.</p>
<h2 id="heading-congratulations">Congratulations 🎉</h2>
<p>You’ve successfully built a full-stack chatbot application using Spring Boot, React, Docker, and OpenAI.</p>
<p>The source code shown in the project is available on <a target="_blank" href="https://github.com/vikasrajputin/springboot-react-docker-chatbot">Github</a>, if you found it helpful give it a star, and feel free to fork it and play around with it.</p>
-->

---

<TagLinks />