---
lang: ko-KR
title: How to Use Chart js for Interactive Data Visualization
description: Article(s) > How to Use Chart js for Interactive Data Visualization
icon: fa-brands fa-js
category: 
  - JavaScript
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - js
  - javascript
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Use Chart js for Interactive Data Visualization
    - property: og:description
      content: How to Use Chart js for Interactive Data Visualization
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-to-use-chart-js-for-interactive-data-visualization.html
prev: /programming/js/articles/README.md
date: 2024-09-12
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725821135508/79767987-8760-4626-a924-212e402b051f.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "JavaScript > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to Use Chart js for Interactive Data Visualization"
  desc="Data surrounds us, but its raw form can be overwhelming and difficult to interpret. That's where data visualization comes in. It can help you take your data and turn it into charts and graphs that make sense at a glance. Among the many data visualiza..."
  url="https://freecodecamp.org/news/how-to-use-chart-js-for-interactive-data-visualization/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725821135508/79767987-8760-4626-a924-212e402b051f.png"/>

<!-- TODO: 작성 -->

<!-- 
<p>Data surrounds us, but its raw form can be overwhelming and difficult to interpret. That's where data visualization comes in. It can help you take your data and turn it into charts and graphs that make sense at a glance.</p>
<p>Among the many data visualization libraries available, Chart.js stands out for its simplicity, flexibility, and interactivity.</p>
<p>This guide is like a roadmap to making charts with Chart.js. It doesn't matter if you're a coding expert or just getting started – I'll show you everything you need to know. We'll break down the basics of Chart.js, show you different types of charts (like bars and lines), and teach you how to make them look great and even respond to clicks.</p>
<h2 id="heading-table-of-contents">Table of Contents</h2>
<ol>
<li><p><a class="post-section-overview" href="#heading-what-is-chartjs">What is Chart.js?</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-benefits-of-using-chartjs-for-data-visualization">Benefits of Using Chart.js for Data Visualization</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-get-started-with-chartjs">How to Get Started with Chart.js</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-chart-types-in-chartjs">Chart Types in Chart.js</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-customization-and-interactivity-in-chartjs">Customization and Interactivity in Chart.js</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-work-with-data-in-chartjs">How to Work with Data in Chart.js</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-advanced-chartjs-features">Advanced Chart.js Features</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-best-practices-for-chart-design">Best Practices for Chart Design</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-conclusion">Conclusion</a></p>
</li>
</ol>
<h2 id="heading-what-is-chartjs">What is Chart.js?</h2>
<p>Chart.js is a popular open-source JavaScript library that allows you to create beautiful and interactive charts on the web. It's easy to use and supports various types of charts, such as line, bar, pie, radar, and more.</p>
<p>Chart.js is highly customizable, allowing you to modify the appearance and behavior of the charts to fit your specific needs. It uses the HTML5 <code>&lt;canvas&gt;</code> element to render the charts, making it compatible with modern web browsers.</p>
<h2 id="heading-benefits-of-using-chartjs-for-data-visualization">Benefits of Using Chart.js for Data Visualization</h2>
<p>Using Chart.js for data visualization offers numerous benefits that make it an excellent choice for developers and non-developers alike. The primary advantages include:</p>
<h3 id="heading-easy-to-use">Easy to Use</h3>
<p>Chart.js is known for its simplicity and ease of use. Even if you're new to JavaScript, you can quickly create and customize charts with minimal code.</p>
<p>The library's clear and concise documentation provides step-by-step instructions and examples, making it accessible for beginners and experienced developers alike.</p>
<h3 id="heading-versatile-chart-types">Versatile Chart Types</h3>
<p>Chart.js supports a wide range of chart types, including line, bar, pie, doughnut, radar, polar area, bubble, and scatter charts. This versatility allows you to choose the best chart type to represent your data effectively.</p>
<p>Whether you need to show trends over time, compare different categories, or display proportions, Chart.js has you covered.</p>
<h3 id="heading-highly-customizable">Highly Customizable</h3>
<p>One of the standout features of Chart.js is its high level of customization. You can tweak almost every aspect of your charts, from colors, fonts, and sizes to tooltips, legends, and animations. This flexibility ensures that your charts match the look and feel of your website or application perfectly.</p>
<h3 id="heading-responsive-design">Responsive Design</h3>
<p>Chart.js charts are responsive by default, meaning they automatically adjust their size and layout based on the screen size. This is particularly important in today's world, where users access websites and applications from various devices, including desktops, tablets, and smartphones. With Chart.js, you can be confident that your charts will look great on any device.</p>
<h3 id="heading-interactive-features">Interactive Features</h3>
<p>Interactivity is a key component of modern data visualization, and Chart.js excels in this area. Charts created with Chart.js can include interactive features like tooltips, which display detailed information when users hover over data points, and clickable legends, which allow users to toggle the visibility of different datasets. These features make your charts more engaging and informative.</p>
<h3 id="heading-lightweight-and-fast">Lightweight and Fast</h3>
<p>Chart.js is a lightweight library, meaning it doesn't add significant load time to your website or application. Despite its small size, it is highly efficient and capable of rendering complex charts quickly. This performance is crucial for maintaining a smooth user experience, especially when dealing with large datasets.</p>
<h3 id="heading-open-source-and-community-support">Open Source and Community Support</h3>
<p>As an open-source project, Chart.js is free to use and benefits from a vibrant community of developers who contribute to its improvement and extension.</p>
<p>The active community support means you can find numerous plugins, extensions, and third-party integrations to enhance the functionality of Chart.js. You can also rely on community forums and resources for troubleshooting and inspiration.</p>
<h3 id="heading-compatibility-with-modern-web-technologies">Compatibility with Modern Web Technologies</h3>
<p>Chart.js leverages the HTML5 <code>&lt;canvas&gt;</code> element to render charts, making it compatible with modern web browsers. This compatibility ensures that your charts will display correctly across different platforms and devices.</p>
<p>Also, you can easily integrate Chart.js with popular JavaScript frameworks and libraries, such as React, Angular, and Vue.js, allowing you to incorporate charts seamlessly into your projects.</p>
<h3 id="heading-accessibility-features">Accessibility Features</h3>
<p>Accessibility is a crucial consideration in web development, and Chart.js includes features to support this. You can add alternative text descriptions and ARIA labels to your charts, making them more accessible to users with disabilities.</p>
<p>This commitment to accessibility helps you create inclusive data visualizations that can be enjoyed by a wider audience.</p>
<h3 id="heading-continuous-improvement">Continuous Improvement</h3>
<p>The development team behind Chart.js is committed to continuously improving the library. Regular updates bring new features, performance enhancements, and bug fixes, ensuring that Chart.js remains a cutting-edge tool for data visualization.</p>
<h2 id="heading-how-to-get-started-with-chartjs">How to Get Started with Chart.js</h2>
<p>Creating interactive and visually appealing charts is straightforward thanks to Chart.js. In this section, I'll walk you through the initial steps to get Chart.js up and running in your project, including setting up the library and creating your first chart.</p>
<h3 id="heading-set-up-your-project">Set Up Your Project</h3>
<p>To get started with Chart.js, you need to include the library in your project. You can do this by either downloading the Chart.js library or linking to it via a Content Delivery Network (CDN). Using a CDN is often the easiest way to get started.</p>
<h4 id="heading-include-chartjs-via-cdn">Include Chart.js via CDN</h4>
<p>Add the following <code>&lt;script&gt;</code> tag to the <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code> section of your HTML file:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Chart.js Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/chart.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Chart container --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myChart<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Your JavaScript code will go here --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h3 id="heading-create-your-first-chart">Create Your First Chart</h3>
<p>Next, you need to create a <code>&lt;canvas&gt;</code> element in your HTML file where the chart will be rendered. This element acts as a container for the chart. In the example above, we already added a <code>&lt;canvas&gt;</code> element with the <code>id</code> of <code>myChart</code>.</p>
<h3 id="heading-write-the-javascript-code">Write the JavaScript Code</h3>
<p>Now, let's write some JavaScript to create a basic chart. Place the following script in the <code>&lt;body&gt;</code> section of your HTML file, below the <code>&lt;canvas&gt;</code> element, or in an external JavaScript file:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
    // Get the context of the canvas element we want to select
    var ctx = document.getElementById('myChart').getContext('2d');

    // Create a new Chart object
    var myChart = new Chart(ctx, {
        type: 'bar', // The type of chart we want to create
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // Labels for the chart
            datasets: [{
                label: 'Votes',
                data: [12, 19, 3, 5, 2, 3], // Data points for the chart
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Start the y-axis at 0
                }
            }
        }
    });
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>Alright, let's understand what's going on in this code:</p>
<ol>
<li><p><strong>Get the Canvas Context</strong>: The first line of the script selects the <code>&lt;canvas&gt;</code> element by its <code>id</code> and gets its 2D drawing context. This context is necessary for creating the chart.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"> <span class="token keyword">var</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</li>
<li><p><strong>Create a New Chart</strong>: The <code>Chart</code> constructor creates a new chart. You need to pass two arguments: the context and a configuration object.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"> <span class="token keyword">var</span> myChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token comment">// The type of chart we want to create</span>
</code></pre>
</li>
<li><p><strong>Data Object</strong>: The <code>data</code> property of the configuration object defines the chart's data and labels. In this example, we use an array of colors as labels and an array of numbers as data points.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Red'</span><span class="token punctuation">,</span> <span class="token string">'Blue'</span><span class="token punctuation">,</span> <span class="token string">'Yellow'</span><span class="token punctuation">,</span> <span class="token string">'Green'</span><span class="token punctuation">,</span> <span class="token string">'Purple'</span><span class="token punctuation">,</span> <span class="token string">'Orange'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
     <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
         <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Votes'</span><span class="token punctuation">,</span>
         <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre>
</li>
<li><p><strong>Styling</strong>: The <code>backgroundColor</code> and <code>borderColor</code> properties specify the colors for the bars and their borders. The <code>borderWidth</code> sets the width of the borders.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token string">'rgba(255, 99, 132, 0.2)'</span><span class="token punctuation">,</span>
     <span class="token string">'rgba(54, 162, 235, 0.2)'</span><span class="token punctuation">,</span>
     <span class="token string">'rgba(255, 206, 86, 0.2)'</span><span class="token punctuation">,</span>
     <span class="token string">'rgba(75, 192, 192, 0.2)'</span><span class="token punctuation">,</span>
     <span class="token string">'rgba(153, 102, 255, 0.2)'</span><span class="token punctuation">,</span>
     <span class="token string">'rgba(255, 159, 64, 0.2)'</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
     <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
     <span class="token string">'rgba(255, 206, 86, 1)'</span><span class="token punctuation">,</span>
     <span class="token string">'rgba(75, 192, 192, 1)'</span><span class="token punctuation">,</span>
     <span class="token string">'rgba(153, 102, 255, 1)'</span><span class="token punctuation">,</span>
     <span class="token string">'rgba(255, 159, 64, 1)'</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span>
</code></pre>
</li>
<li><p><strong>Options Object</strong>: The <code>options</code> property contains configuration options for the chart. In this example, we set the <code>beginAtZero</code> option to <code>true</code> to start the y-axis at 0.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"> <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
             <span class="token literal-property property">beginAtZero</span><span class="token operator">:</span> <span class="token boolean">true</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre>
</li>
</ol>
<h3 id="heading-view-your-chart">View Your Chart</h3>
<p>Once you've added the code, open the HTML file in a web browser. You should see a bar chart displaying the data you provided.</p>
<div class="embed-wrapper"><iframe height="300" style="width:100%" src="https://codepen.io/joanayebola/embed/YzowGeQ?default-tab=html%2Cresult" title="Embedded content" loading="lazy">
  See the Pen <a href="https://codepen.io/joanayebola/pen/YzowGeQ">
  Basic Chart.js example</a> by joan? (<a href="https://codepen.io/joanayebola">@joanayebola</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe></div>

<p>Congratulations, you've created your first chart with Chart.js!</p>
<p>Feel free to experiment with different chart types, data, and customization options to explore the full potential of Chart.js.</p>
<h2 id="heading-chart-types-in-chartjs">Chart Types in Chart.js</h2>
<p>Chart.js supports a variety of chart types, each designed to visualize data in different ways. Below are some of the most commonly used chart types available in Chart.js:</p>
<h3 id="heading-1-line-chart">1. Line Chart</h3>
<p>A line chart is used to show trends over time or to demonstrate continuous data. It's effective for displaying data that changes continuously over a period. Here's an example of a simple line chart:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> lineChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'January'</span><span class="token punctuation">,</span> <span class="token string">'February'</span><span class="token punctuation">,</span> <span class="token string">'March'</span><span class="token punctuation">,</span> <span class="token string">'April'</span><span class="token punctuation">,</span> <span class="token string">'May'</span><span class="token punctuation">,</span> <span class="token string">'June'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sales'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">beginAtZero</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<div class="embed-wrapper"><iframe height="300" style="width:100%" src="https://codepen.io/joanayebola/embed/eYwJdKY?default-tab=html%2Cresult" title="Embedded content" loading="lazy">
  See the Pen <a href="https://codepen.io/joanayebola/pen/eYwJdKY">
  Line Chart</a> by joan? (<a href="https://codepen.io/joanayebola">@joanayebola</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe></div>

<h3 id="heading-2-bar-chart">2. Bar Chart</h3>
<p>A bar chart is used to compare different categories of data. It's ideal for showing discrete data points and comparing magnitudes between categories. Here's how you can create one:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> barChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Red'</span><span class="token punctuation">,</span> <span class="token string">'Blue'</span><span class="token punctuation">,</span> <span class="token string">'Yellow'</span><span class="token punctuation">,</span> <span class="token string">'Green'</span><span class="token punctuation">,</span> <span class="token string">'Purple'</span><span class="token punctuation">,</span> <span class="token string">'Orange'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Votes'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">'rgba(255, 99, 132, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(54, 162, 235, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 206, 86, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(75, 192, 192, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(153, 102, 255, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 159, 64, 0.2)'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 206, 86, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(75, 192, 192, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(153, 102, 255, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 159, 64, 1)'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">beginAtZero</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<div class="embed-wrapper"><iframe height="300" style="width:100%" src="https://codepen.io/joanayebola/embed/BagjLOO?default-tab=html%2Cresult" title="Embedded content" loading="lazy">
  See the Pen <a href="https://codepen.io/joanayebola/pen/BagjLOO">
  Bar Chart</a> by joan? (<a href="https://codepen.io/joanayebola">@joanayebola</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe></div>

<h3 id="heading-3-pie-chart">3. Pie Chart</h3>
<p>A pie chart is used to show proportions or percentages of a whole. It's effective for illustrating how parts contribute to the whole. Here's what one looks like in code:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> pieChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'pie'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Red'</span><span class="token punctuation">,</span> <span class="token string">'Blue'</span><span class="token punctuation">,</span> <span class="token string">'Yellow'</span><span class="token punctuation">,</span> <span class="token string">'Green'</span><span class="token punctuation">,</span> <span class="token string">'Purple'</span><span class="token punctuation">,</span> <span class="token string">'Orange'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Votes'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">'rgba(255, 99, 132, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(54, 162, 235, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 206, 86, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(75, 192, 192, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(153, 102, 255, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 159, 64, 0.2)'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 206, 86, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(75, 192, 192, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(153, 102, 255, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 159, 64, 1)'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">responsive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'top'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">callbacks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function-variable function">label</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">tooltipItem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> tooltipItem<span class="token punctuation">.</span>label <span class="token operator">+</span> <span class="token string">': '</span> <span class="token operator">+</span> tooltipItem<span class="token punctuation">.</span>raw<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<div class="embed-wrapper"><iframe height="300" style="width:100%" src="https://codepen.io/joanayebola/embed/vYqLXQW?default-tab=html%2Cresult" title="Embedded content" loading="lazy">
  See the Pen <a href="https://codepen.io/joanayebola/pen/vYqLXQW">
  Pie Chart</a> by joan? (<a href="https://codepen.io/joanayebola">@joanayebola</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe></div>

<h3 id="heading-4-doughnut-chart">4. Doughnut Chart</h3>
<p>A doughnut chart is similar to a pie chart but has a hollow center. It's useful for comparing proportions while also displaying total values.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> doughnutChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'doughnut'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Red'</span><span class="token punctuation">,</span> <span class="token string">'Blue'</span><span class="token punctuation">,</span> <span class="token string">'Yellow'</span><span class="token punctuation">,</span> <span class="token string">'Green'</span><span class="token punctuation">,</span> <span class="token string">'Purple'</span><span class="token punctuation">,</span> <span class="token string">'Orange'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Votes'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">'rgba(255, 99, 132, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(54, 162, 235, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 206, 86, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(75, 192, 192, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(153, 102, 255, 0.2)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 159, 64, 0.2)'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 206, 86, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(75, 192, 192, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(153, 102, 255, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 159, 64, 1)'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">responsive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'top'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">callbacks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function-variable function">label</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">tooltipItem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> tooltipItem<span class="token punctuation">.</span>label <span class="token operator">+</span> <span class="token string">': '</span> <span class="token operator">+</span> tooltipItem<span class="token punctuation">.</span>raw<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<div class="embed-wrapper"><iframe height="300" style="width:100%" src="https://codepen.io/joanayebola/embed/VwJeKgM?default-tab=html%2Cresult" title="Embedded content" loading="lazy">
  See the Pen <a href="https://codepen.io/joanayebola/pen/VwJeKgM">
  Doughnut Chart</a> by joan? (<a href="https://codepen.io/joanayebola">@joanayebola</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe></div>

<h3 id="heading-5-scatter-charts">5. Scatter Charts</h3>
<p>A scatter chart is used to display relationships between two or more variables. It's effective for showing correlations and distributions of data points.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> scatterChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'scatter'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Scatter Dataset'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(54, 162, 235, 0.5)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'linear'</span><span class="token punctuation">,</span> <span class="token comment">// Scatter charts support only 'linear' scale type for x-axis</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'bottom'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'linear'</span><span class="token punctuation">,</span> <span class="token comment">// Scatter charts support only 'linear' scale type for y-axis</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'left'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<div class="embed-wrapper"><iframe height="300" style="width:100%" src="https://codepen.io/joanayebola/embed/dyBGOPJ?default-tab=html%2Cresult" title="Embedded content" loading="lazy">
  See the Pen <a href="https://codepen.io/joanayebola/pen/dyBGOPJ">
  Scatter Chart</a> by joan? (<a href="https://codepen.io/joanayebola">@joanayebola</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe></div>

<h3 id="heading-6-bubble-charts">6. Bubble Charts</h3>
<p>A bubble chart is similar to a scatter chart but uses bubble-like markers to represent data points. It's useful for comparing relationships between variables and showing data distribution with sizes of bubbles.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bubbleChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bubble'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Bubble Dataset'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(255, 99, 132, 0.5)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'linear'</span><span class="token punctuation">,</span> <span class="token comment">// Bubble charts support only 'linear' scale type for x-axis</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'bottom'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'linear'</span><span class="token punctuation">,</span> <span class="token comment">// Bubble charts support only 'linear' scale type for y-axis</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'left'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<div class="embed-wrapper"><iframe height="300" style="width:100%" src="https://codepen.io/joanayebola/embed/ExBPNjZ?default-tab=html%2Cresult" title="Embedded content" loading="lazy">
  See the Pen <a href="https://codepen.io/joanayebola/pen/ExBPNjZ">
  Bubble Chart</a> by joan? (<a href="https://codepen.io/joanayebola">@joanayebola</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe></div>

<h3 id="heading-7-radar-chart">7. Radar Chart</h3>
<p>A radar chart (or spider chart) is used to display multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. Here's how you can create one:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> radarChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'radar'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Math'</span><span class="token punctuation">,</span> <span class="token string">'Physics'</span><span class="token punctuation">,</span> <span class="token string">'Chemistry'</span><span class="token punctuation">,</span> <span class="token string">'Biology'</span><span class="token punctuation">,</span> <span class="token string">'English'</span><span class="token punctuation">,</span> <span class="token string">'History'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Student A'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">85</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(54, 162, 235, 0.2)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pointBackgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pointBorderColor</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pointHoverBackgroundColor</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pointHoverBorderColor</span><span class="token operator">:</span> <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Student B'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(255, 99, 132, 0.2)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pointBackgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pointBorderColor</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pointHoverBackgroundColor</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pointHoverBorderColor</span><span class="token operator">:</span> <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">suggestedMin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">suggestedMax</span><span class="token operator">:</span> <span class="token number">100</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<div class="embed-wrapper"><iframe height="300" style="width:100%" src="https://codepen.io/joanayebola/embed/Yzowpya?default-tab=html%2Cresult" title="Embedded content" loading="lazy">
  See the Pen <a href="https://codepen.io/joanayebola/pen/Yzowpya">
  Untitled</a> by joan? (<a href="https://codepen.io/joanayebola">@joanayebola</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe></div>

<h3 id="heading-8-polar-area-chart">8. Polar Area Chart</h3>
<p>A polar area chart is similar to a pie chart, but the sectors are equal angles and differ in how far they extend from the center of the circle. It's useful for showing data distributions with the proportion of each category.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> polarAreaChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'polarArea'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Red'</span><span class="token punctuation">,</span> <span class="token string">'Blue'</span><span class="token punctuation">,</span> <span class="token string">'Yellow'</span><span class="token punctuation">,</span> <span class="token string">'Green'</span><span class="token punctuation">,</span> <span class="token string">'Purple'</span><span class="token punctuation">,</span> <span class="token string">'Orange'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Votes'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">'rgba(255, 99, 132, 0.5)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(54, 162, 235, 0.5)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 206, 86, 0.5)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(75, 192, 192, 0.5)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(153, 102, 255, 0.5)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 159, 64, 0.5)'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 206, 86, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(75, 192, 192, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(153, 102, 255, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 159, 64, 1)'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">suggestedMin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">suggestedMax</span><span class="token operator">:</span> <span class="token number">20</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<div class="embed-wrapper"><iframe height="300" style="width:100%" src="https://codepen.io/joanayebola/embed/zYVroqN?default-tab=html%2Cresult" title="Embedded content" loading="lazy">
  See the Pen <a href="https://codepen.io/joanayebola/pen/zYVroqN">
  Polar Area Chart</a> by joan? (<a href="https://codepen.io/joanayebola">@joanayebola</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe></div>

<p>These are just a few examples of the chart types available in Chart.js. Each chart type has its own unique features and is suitable for different types of data visualization tasks. Experiment with these chart types and explore Chart.js documentation for more advanced options and customization.</p>
<h2 id="heading-customization-and-interactivity-in-chartjs">Customization and Interactivity in Chart.js</h2>
<p>Chart.js offers extensive options for customizing the appearance and interactivity of your charts. This section covers customizing chart appearance, adding tooltips and legends, and making charts interactive with features like zooming and hovering.</p>
<h3 id="heading-customizing-chart-appearance">Customizing Chart Appearance</h3>
<p>Customizing the appearance of your charts helps make them more visually appealing and tailored to your specific needs. You can customize colors, fonts, borders, and other properties.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> customChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Red'</span><span class="token punctuation">,</span> <span class="token string">'Blue'</span><span class="token punctuation">,</span> <span class="token string">'Yellow'</span><span class="token punctuation">,</span> <span class="token string">'Green'</span><span class="token punctuation">,</span> <span class="token string">'Purple'</span><span class="token punctuation">,</span> <span class="token string">'Orange'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Votes'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">'rgba(255, 99, 132, 0.8)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(54, 162, 235, 0.8)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 206, 86, 0.8)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(75, 192, 192, 0.8)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(153, 102, 255, 0.8)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 159, 64, 0.8)'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 206, 86, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(75, 192, 192, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(153, 102, 255, 1)'</span><span class="token punctuation">,</span>
                <span class="token string">'rgba(255, 159, 64, 1)'</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgb(255, 99, 132)'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">family</span><span class="token operator">:</span> <span class="token string">"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'rgba(0, 0, 0, 0.8)'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">titleFont</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">18</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">bodyFont</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">14</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">callbacks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function-variable function">label</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> context<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>label <span class="token operator">+</span> <span class="token string">': '</span> <span class="token operator">+</span> context<span class="token punctuation">.</span>raw <span class="token operator">+</span> <span class="token string">' votes'</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">ticks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">14</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">ticks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">14</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In this example:</p>
<ul>
<li><p><strong>Chart Type:</strong> The chart is defined as a <code>bar</code> chart.</p>
</li>
<li><p><strong>Background and Border Colors:</strong> The <code>backgroundColor</code> and <code>borderColor</code> arrays are customized for each bar. For example, the "Red" bar is colored with a semi-transparent background (<code>rgba(255, 99, 132, 0.8)</code>) and a solid border (<code>rgba(255, 99, 132, 1)</code>).</p>
</li>
<li><p><strong>Font and Color for Legends:</strong> The <code>legend</code> configuration customizes the display of the chart’s legend, where the font size is set to 16, and the font family is <code>'Helvetica Neue', 'Helvetica', 'Arial', sans-serif'</code>. Additionally, the text color of the legend labels is customized to <code>rgb(255, 99, 132)</code>.</p>
</li>
<li><p><strong>Font and Color for Axes:</strong> The <code>scales</code> section customizes the appearance of both the X and Y axes. The font size for axis labels is set to 14, and their color is <code>rgba(54, 162, 235, 1)</code>.</p>
</li>
</ul>
<h3 id="heading-adding-tooltips-and-legends">Adding Tooltips and Legends</h3>
<p>Tooltips provide additional information when you hover over chart elements. Legends help users understand the data by showing which dataset each color represents. Both can be customized extensively, like this for example:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> chartWithTooltipsAndLegend <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'January'</span><span class="token punctuation">,</span> <span class="token string">'February'</span><span class="token punctuation">,</span> <span class="token string">'March'</span><span class="token punctuation">,</span> <span class="token string">'April'</span><span class="token punctuation">,</span> <span class="token string">'May'</span><span class="token punctuation">,</span> <span class="token string">'June'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sales'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'top'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">14</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">callbacks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function-variable function">label</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">tooltipItem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token string">'Sales: $'</span> <span class="token operator">+</span> tooltipItem<span class="token punctuation">.</span>raw<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In this example:</p>
<ul>
<li><p><strong>Tooltips:</strong> Tooltips appear when the user hovers over elements of the chart. The tooltip background is customized to be black (<code>rgba(0, 0, 0, 0.8)</code>) with font sizes for both the title (18) and body text (14). The content of the tooltip is dynamically generated by a <code>callback</code> function, which appends the word "votes" to the dataset value.</p>
</li>
<li><p><strong>Legends:</strong> The legends describe the data on the chart and are placed at the top. The customization here includes setting the font size to 14 and making the legend displayable by configuring <code>display: true</code>.</p>
</li>
</ul>
<h3 id="heading-making-charts-interactive-zooming-hovering-and-so-on">Making Charts Interactive (Zooming, Hovering, and so on)</h3>
<p>Adding interactivity to your charts can enhance the user experience. Features like zooming, panning, and custom hover effects can be implemented using additional Chart.js plugins such as <code>chartjs-plugin-zoom</code>.</p>
<p>First, include the zoom plugin in your project:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@1.0.0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>Then, configure your chart to enable zooming and panning:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> interactiveChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'January'</span><span class="token punctuation">,</span> <span class="token string">'February'</span><span class="token punctuation">,</span> <span class="token string">'March'</span><span class="token punctuation">,</span> <span class="token string">'April'</span><span class="token punctuation">,</span> <span class="token string">'May'</span><span class="token punctuation">,</span> <span class="token string">'June'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sales'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">pan</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'xy'</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'xy'</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'nearest'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">intersect</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In this example:</p>
<ul>
<li><p><strong>Zoom and Pan</strong>: The <code>chartjs-plugin-zoom</code> plugin is used to add zooming and panning capabilities. Users can zoom in and out using the mouse wheel or pan by dragging.</p>
</li>
<li><p><strong>Hover Mode</strong>: The <code>hover</code> option is set to <code>nearest</code>, ensuring the nearest data point is highlighted when hovered over.</p>
</li>
</ul>
<h3 id="heading-complete-html-example">Complete HTML Example</h3>
<p>Here's the complete HTML file incorporating the examples above:</p>
<pre class="language-html" tabindex="0"><code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Chart.js Customization and Interactivity<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/chart.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@1.0.0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Chart.js Customization and Interactivity<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Customizing Chart Appearance<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customChart<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Adding Tooltips and Legends<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tooltipsAndLegendChart<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Making Charts Interactive (Zooming, Hovering, etc.)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>interactiveChart<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
        // Customizing Chart Appearance
        var customCtx = document.getElementById('customChart').getContext('2d');
        var customChart = new Chart(customCtx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: 'rgb(255, 99, 132)',
                            font: {
                                size: 16,
                                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            size: 18
                        },
                        bodyFont: {
                            size: 14
                        },
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.raw + ' votes';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: 'rgba(54, 162, 235, 1)',
                            font: {
                                size: 14
                            }
                        }
                    },
                    y: {
                        ticks: {
                            color: 'rgba(54, 162, 235, 1)',
                            font: {
                                size: 14
                            }
                        }
                    }
                }
            }
        });

        // Adding Tooltips and Legends
        var tooltipsAndLegendCtx = document.getElementById('

tooltipsAndLegendChart').getContext('2d');
        var chartWithTooltipsAndLegend = new Chart(tooltipsAndLegendCtx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Sales',
                    data: [30, 45, 60, 35, 50, 40],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function(tooltipItem) {
                                return 'Sales: $' + tooltipItem.raw;
                            }
                        }
                    }
                }
            }
        });

        // Making Charts Interactive (Zooming, Hovering, etc.)
        var interactiveCtx = document.getElementById('interactiveChart').getContext('2d');
        var interactiveChart = new Chart(interactiveCtx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Sales',
                    data: [30, 45, 60, 35, 50, 40],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                plugins: {
                    zoom: {
                        pan: {
                            enabled: true,
                            mode: 'xy'
                        },
                        zoom: {
                            enabled: true,
                            mode: 'xy'
                        }
                    }
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                }
            }
        });
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<div class="embed-wrapper"><iframe height="300" style="width:100%" src="https://codepen.io/joanayebola/embed/QWXyGqb?default-tab=html%2Cresult" title="Embedded content" loading="lazy">
  See the Pen <a href="https://codepen.io/joanayebola/pen/QWXyGqb">
  Untitled</a> by joan? (<a href="https://codepen.io/joanayebola">@joanayebola</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe></div>

<p>This HTML file includes examples of customizing chart appearance, adding tooltips and legends, and making charts interactive. You can view the results by opening this HTML file in a web browser.</p>
<h2 id="heading-how-to-work-with-data-in-chartjs">How to Work with Data in Chart.js</h2>
<p>Chart.js provides versatile capabilities for handling data, accommodating various formats and requirements for data visualization:</p>
<h3 id="heading-data-formats-supported-by-chartjs">Data Formats Supported by Chart.js</h3>
<p>Chart.js provides flexible support for various data formats to accommodate different data structures and needs:</p>
<ul>
<li><p><strong>Arrays</strong>: Simple arrays of values are the most basic format and can be directly used to plot data points.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
</li>
<li><p><strong>Objects</strong>: Arrays of objects are useful for more complex data where each object represents a data point with multiple properties.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre>
</li>
<li><p><strong>JSON</strong>: JSON (JavaScript Object Notation) is ideal for structured data interchange, allowing for clear organization of labels and datasets.</p>
<pre class="language-json" tabindex="0"><code class="language-json">  <span class="token punctuation">{</span>
      <span class="token property">"labels"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"January"</span><span class="token punctuation">,</span> <span class="token string">"February"</span><span class="token punctuation">,</span> <span class="token string">"March"</span><span class="token punctuation">,</span> <span class="token string">"April"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"datasets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Sales"</span><span class="token punctuation">,</span>
          <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre>
</li>
<li><p><strong>CSV</strong>: Comma-Separated Values (CSV) are commonly used for tabular data and can be parsed into arrays or objects for Chart.js.</p>
</li>
</ul>
<h3 id="heading-how-to-load-data-from-external-files-json-csv">How to Load Data from External Files (JSON, CSV)</h3>
<p>Loading data from external files is essential for handling dynamic or large datasets efficiently:</p>
<ul>
<li><p><strong>Loading JSON Data</strong>: Use the <code>fetch</code> API to retrieve JSON data and integrate it into Chart.js.</p>
<pre class="language-html" tabindex="0"><code class="language-html">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
      fetch('data.json')
          .then(response =&gt; response.json())
          .then(data =&gt; {
              const ctx = document.getElementById('myChart').getContext('2d');
              new Chart(ctx, {
                  type: 'bar',
                  data: data,
                  options: {}
              });
          });
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
</li>
<li><p><strong>Loading CSV Data</strong>: Utilize libraries like PapaParse to parse CSV files into usable data formats for Chart.js visualization.</p>
<pre class="language-html" tabindex="0"><code class="language-html">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
      Papa.parse('data.csv', {
          download: true,
          header: true,
          complete: function(results) {
              const labels = results.data.map(row =&gt; row['Month']);
              const data = results.data.map(row =&gt; parseFloat(row['Sales']));

              const ctx = document.getElementById('myChart').getContext('2d');
              new Chart(ctx, {
                  type: 'line',
                  data: {
                      labels: labels,
                      datasets: [{
                          label: 'Sales',
                          data: data
                      }]
                  },
                  options: {}
              });
          }
      });
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
</li>
</ul>
<h3 id="heading-dynamic-data-updates">Dynamic Data Updates</h3>
<p>Chart.js supports dynamic data updates, which is crucial for real-time data visualization:</p>
<ul>
<li><p><strong>Updating Data Dynamically</strong>: Use Chart.js methods to update chart data dynamically and re-render the chart as needed.</p>
<pre class="language-html" tabindex="0"><code class="language-html">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['January', 'February', 'March', 'April'],
              datasets: [{
                  label: 'Sales',
                  data: [10, 20, 30, 40]
              }]
          },
          options: {}
      });

      // Example function to update the chart data
      function updateChartData() {
          myChart.data.datasets[0].data = [50, 60, 70, 80];
          myChart.update();
      }

      // Call the update function after 2 seconds
      setTimeout(updateChartData, 2000);
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
</li>
</ul>
<p>In this section, we've explored the various data formats supported by Chart.js, methods for loading data from external files such as JSON and CSV, and how to implement dynamic data updates for real-time visualization. These features make Chart.js a powerful tool for interactive data visualization in web applications.</p>
<h2 id="heading-advanced-chartjs-features">Advanced Chart.js Features</h2>
<p>Chart.js offers advanced features that enhance data visualization capabilities beyond basic charts. Let's delve into these features:</p>
<h3 id="heading-how-to-combine-different-chart-types">How to Combine Different Chart Types</h3>
<p>Chart.js allows you to combine different chart types within a single chart, offering flexibility in visualizing complex data sets:</p>
<ul>
<li><p><strong>Mixed Chart Types</strong>: You can mix line, bar, radar, and other chart types in a single chart to represent diverse datasets effectively.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">  <span class="token keyword">const</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'mixedChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> mixedChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token comment">// Default type for the main dataset</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'January'</span><span class="token punctuation">,</span> <span class="token string">'February'</span><span class="token punctuation">,</span> <span class="token string">'March'</span><span class="token punctuation">,</span> <span class="token string">'April'</span><span class="token punctuation">,</span> <span class="token string">'May'</span><span class="token punctuation">,</span> <span class="token string">'June'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sales'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span> <span class="token comment">// Specific type for this dataset</span>
              <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(75, 192, 192, 1)'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">tension</span><span class="token operator">:</span> <span class="token number">0.1</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</li>
</ul>
<h3 id="heading-how-to-create-chart-animations">How to Create Chart Animations</h3>
<p>Animations in Chart.js can bring your data visualizations to life, providing a dynamic and engaging user experience:</p>
<ul>
<li><p><strong>Animated Transitions</strong>: Configure animations to smoothly transition between different states, enhancing the clarity of data changes over time.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">  <span class="token keyword">const</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'animatedChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> animatedChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'January'</span><span class="token punctuation">,</span> <span class="token string">'February'</span><span class="token punctuation">,</span> <span class="token string">'March'</span><span class="token punctuation">,</span> <span class="token string">'April'</span><span class="token punctuation">,</span> <span class="token string">'May'</span><span class="token punctuation">,</span> <span class="token string">'June'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sales'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(75, 192, 192, 1)'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">tension</span><span class="token operator">:</span> <span class="token number">0.1</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token comment">// Animation duration in milliseconds</span>
              <span class="token literal-property property">easing</span><span class="token operator">:</span> <span class="token string">'easeInOutQuart'</span> <span class="token comment">// Easing function for smooth animation</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</li>
</ul>
<h3 id="heading-how-to-use-third-party-plugins">How to Use Third-Party Plugins</h3>
<p>Extend Chart.js functionality with third-party plugins to add custom features and enhance visualization capabilities:</p>
<ul>
<li><p><strong>Integration of Plugins</strong>: Integrate plugins like zoom, tooltip enhancements, or data label customization to tailor charts to specific needs.</p>
<pre class="language-html" tabindex="0"><code class="language-html">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
      const ctx = document.getElementById('pluginChart').getContext('2d');
      const pluginChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [{
                  label: 'Sales',
                  data: [50, 60, 70, 80, 90, 100],
                  borderColor: 'rgba(75, 192, 192, 1)',
                  tension: 0.1
              }]
          },
          options: {
              plugins: {
                  zoom: {
                      pan: {
                          enabled: true,
                          mode: 'xy'
                      },
                      zoom: {
                          enabled: true,
                          mode: 'xy'
                      }
                  }
              }
          }
      });
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
</li>
</ul>
<h2 id="heading-best-practices-for-chart-design">Best Practices for Chart Design</h2>
<p>Effective chart design ensures that your data is presented clearly and accurately, making it easy for users to understand and interpret. Here are some best practices to consider:</p>
<h3 id="heading-choose-the-right-chart-type">Choose the Right Chart Type</h3>
<p>Selecting the appropriate chart type is crucial for conveying your data effectively:</p>
<ul>
<li><p><strong>Bar Charts</strong>: Ideal for comparing different categories or tracking changes over time. Use bar charts when you have discrete data points.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">  <span class="token keyword">const</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'barChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> barChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Red'</span><span class="token punctuation">,</span> <span class="token string">'Blue'</span><span class="token punctuation">,</span> <span class="token string">'Yellow'</span><span class="token punctuation">,</span> <span class="token string">'Green'</span><span class="token punctuation">,</span> <span class="token string">'Purple'</span><span class="token punctuation">,</span> <span class="token string">'Orange'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Votes'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">'rgba(255, 99, 132, 0.2)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(54, 162, 235, 0.2)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(255, 206, 86, 0.2)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(75, 192, 192, 0.2)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(153, 102, 255, 0.2)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(255, 159, 64, 0.2)'</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(255, 206, 86, 1)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(75, 192, 192, 1)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(153, 102, 255, 1)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(255, 159, 64, 1)'</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">beginAtZero</span><span class="token operator">:</span> <span class="token boolean">true</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</li>
<li><p><strong>Line Charts</strong>: Best for showing trends over time or continuous data. Line charts are useful when you want to highlight changes and patterns.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">  <span class="token keyword">const</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'lineChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> lineChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'January'</span><span class="token punctuation">,</span> <span class="token string">'February'</span><span class="token punctuation">,</span> <span class="token string">'March'</span><span class="token punctuation">,</span> <span class="token string">'April'</span><span class="token punctuation">,</span> <span class="token string">'May'</span><span class="token punctuation">,</span> <span class="token string">'June'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sales'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(75, 192, 192, 1)'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">tension</span><span class="token operator">:</span> <span class="token number">0.1</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</li>
<li><p><strong>Pie and Doughnut Charts</strong>: Suitable for displaying proportions and parts of a whole. Use these charts when you want to highlight distribution.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">  <span class="token keyword">const</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'doughnutChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> doughnutChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'doughnut'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Red'</span><span class="token punctuation">,</span> <span class="token string">'Blue'</span><span class="token punctuation">,</span> <span class="token string">'Yellow'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Votes'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">'rgba(255, 99, 132, 0.2)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(54, 162, 235, 0.2)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(255, 206, 86, 0.2)'</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(255, 206, 86, 1)'</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</li>
</ul>
<h3 id="heading-design-for-clarity-and-readability">Design for Clarity and Readability</h3>
<p>Clear and readable charts help users understand data quickly and accurately:</p>
<ul>
<li><p><strong>Use Appropriate Labels</strong>: Ensure that all axes, data points, and legends are clearly labeled. Avoid cluttering the chart with too much information.</p>
</li>
<li><p><strong>Color Choices</strong>: Use contrasting colors to differentiate between data points or categories. Ensure that color choices are accessible to those with color vision deficiencies.</p>
</li>
<li><p><strong>Simplify Data</strong>: Avoid overloading the chart with too much data. Focus on the key message you want to convey and use additional charts for supplementary information.</p>
</li>
<li><p><strong>Consistent Scale</strong>: Use a consistent scale across charts when comparing similar data sets. This helps users make accurate comparisons without recalibrating their understanding of the scale.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">  <span class="token keyword">const</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'clarityChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> clarityChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'January'</span><span class="token punctuation">,</span> <span class="token string">'February'</span><span class="token punctuation">,</span> <span class="token string">'March'</span><span class="token punctuation">,</span> <span class="token string">'April'</span><span class="token punctuation">,</span> <span class="token string">'May'</span><span class="token punctuation">,</span> <span class="token string">'June'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Sales'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'rgba(75, 192, 192, 1)'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">tension</span><span class="token operator">:</span> <span class="token number">0.1</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">beginAtZero</span><span class="token operator">:</span> <span class="token boolean">true</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</li>
</ul>
<h3 id="heading-make-charts-accessible">Make Charts Accessible</h3>
<p>Accessibility ensures that your charts can be understood by all users, including those with disabilities:</p>
<ul>
<li><p><strong>Use ARIA Labels</strong>: Implement ARIA (Accessible Rich Internet Applications) labels to provide additional context to screen readers.</p>
<pre class="language-html" tabindex="0"><code class="language-html">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accessibleChart<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sales Data<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre>
</li>
<li><p><strong>Provide Alternative Text</strong>: Include descriptive alternative text for charts, especially if the chart is complex. This helps users who rely on screen readers to understand the chart's content.</p>
</li>
<li><p><strong>Keyboard Navigation</strong>: Ensure that all interactive elements of the chart, such as tooltips and legends, are accessible via keyboard navigation.</p>
</li>
<li><p><strong>High Contrast Colors</strong>: Use high contrast colors for better visibility, especially for users with low vision or color blindness.</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript">  <span class="token keyword">const</span> ctx <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'accessibleChart'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> accessibleChart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Red'</span><span class="token punctuation">,</span> <span class="token string">'Blue'</span><span class="token punctuation">,</span> <span class="token string">'Yellow'</span><span class="token punctuation">,</span> <span class="token string">'Green'</span><span class="token punctuation">,</span> <span class="token string">'Purple'</span><span class="token punctuation">,</span> <span class="token string">'Orange'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Votes'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">'rgba(255, 99, 132, 0.8)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(54, 162, 235, 0.8)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(255, 206, 86, 0.8)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(75, 192, 192, 0.8)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(153, 102, 255, 0.8)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(255, 159, 64, 0.8)'</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">'rgba(255, 99, 132, 1)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(54, 162, 235, 1)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(255, 206, 86, 1)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(75, 192, 192, 1)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(153, 102, 255, 1)'</span><span class="token punctuation">,</span>
                  <span class="token string">'rgba(255, 159, 64, 1)'</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">beginAtZero</span><span class="token operator">:</span> <span class="token boolean">true</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</li>
</ul>
<h2 id="heading-conclusion">Conclusion</h2>
<p>Using Chart.js for interactive data visualization is a great way to turn raw data into clear, engaging charts. This tool is easy to use and offers many types of charts, like bar, line, and pie charts. You can also customize your charts to make them look exactly how you want.</p>
<p>Chart.js is not only good for basic charts but also has advanced features. You can combine different types of charts, add animations, and use plugins to add extra functions like zooming. It supports various data formats, can load data from files, and update data in real-time.</p>
<p>When designing your charts, it’s important to choose the right type of chart for your data, keep your charts clear and easy to read, and make sure they are accessible to everyone, including people with disabilities.</p>
-->

---

<TagLinks />