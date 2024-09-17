---
lang: ko-KR
title: "How to Use the JavaScript Selection API: Build a Rich Text Editor and Real-Time Element Detection"
description: "Article(s) > How to Use the JavaScript Selection API: Build a Rich Text Editor and Real-Time Element Detection"
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
      content: "Article(s) > How to Use the JavaScript Selection API: Build a Rich Text Editor and Real-Time Element Detection"
    - property: og:description
      content: "How to Use the JavaScript Selection API: Build a Rich Text Editor and Real-Time Element Detection"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/use-the-javascript-selection-api-to-build-a-rich-text-editor.html
prev: /programming/js/articles/README.md
date: 2024-09-16
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1726225376443/ae5d57c8-e79e-4dc4-b218-c3a5e34f8293.png
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
  name="How to Use the JavaScript Selection API: Build a Rich Text Editor and Real-Time Element Detection"
  desc="When you interact with web pages, a common task you’ll perform often is selecting text. Whether it's highlighting a section of a paragraph to copy, marking important parts of a document, or working with interactive features like note-taking or text e..."
  url="https://freecodecamp.org/news/use-the-javascript-selection-api-to-build-a-rich-text-editor/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1726225376443/ae5d57c8-e79e-4dc4-b218-c3a5e34f8293.png"/>

<!-- TODO: 작성 -->

<!-- 
<p>When you interact with web pages, a common task you’ll perform often is selecting text. Whether it's highlighting a section of a paragraph to copy, marking important parts of a document, or working with interactive features like note-taking or text editing, text selections are part of our everyday browsing experience.</p>
<p>The JavaScript <strong>Selection API</strong> is what makes it possible to interact programmatically with these text selections.</p>
<p>In this tutorial, we'll dive deep into the Selection API, explore what it can do, and demonstrate how you can use it to create interactive, selection-based web applications.</p>
<h3 id="heading-in-this-article-we-will-cover">In this article, we will cover:</h3>
<ul>
<li><p><a class="post-section-overview" href="#heading-what-is-the-selection-api">Explore the JavaScript Selection API, a powerful tool for interacting with and manipulating user-selected text on a web page.</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-the-documentexeccommand-function">Introduce document.execCommand(), an easy-to-use method for adding formatting to selected text, including bold, italic, and underline.</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-example-use-case-how-to-build-a-rich-text-editor-with-the-javascript-selection-api">Demonstrate how to build a simple rich text editor with basic formatting features using both the Selection API and execCommand().</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-get-the-clicked-element-and-its-real-time-position">Detect clicked elements and their positions in real time.</a></p>
</li>
</ul>
<h2 id="heading-what-is-the-selection-api">What is the Selection API?</h2>
<p>The <strong>Selection API</strong> is a web API provided by modern browsers that enables developers to work with user text selections on a web page. It allows you to:</p>
<ol>
<li><p>Get details about the currently selected text.</p>
</li>
<li><p>Modify or manipulate selections programmatically.</p>
</li>
<li><p>Detect when users make a selection.</p>
</li>
<li><p>Store, replace, or delete selections of text.</p>
</li>
</ol>
<p>This API is commonly used for rich text editors, copy/paste functionality, custom tooltips, highlighting, annotations, and more.</p>
<h2 id="heading-what-can-you-do-using-the-selection-api">What Can You Do Using the Selection API?</h2>
<p>The Selection API gives you the power to interact with user-selected text in a variety of ways. Some key capabilities include:</p>
<ol>
<li><p><strong>Get the currently selected text</strong>: Extract the highlighted text that the user selects in the document.</p>
</li>
<li><p><strong>Modify the selection</strong>: Programmatically set or modify a selection, either by setting new start and end points for the selection or collapsing it entirely.</p>
</li>
<li><p><strong>Remove the selection</strong>: Clear a selection once you're done using it.</p>
</li>
<li><p><strong>Extract position information</strong>: Know where the selection begins and ends, both within the document and on the screen (useful for custom tooltips or annotations).</p>
</li>
<li><p><strong>Apply custom styling</strong>: You can style the selected text, add highlights, or trigger events when a user makes a selection.</p>
</li>
</ol>
<h2 id="heading-key-components-of-the-selection-api">Key Components of the Selection API</h2>
<p>To effectively use the Selection API, it's important to understand some of its core concepts. Here are the key objects and methods:</p>
<h3 id="heading-1-selection-object"><strong>1.</strong> <code>Selection</code> <strong>Object</strong></h3>
<p>The <code>Selection</code> object represents the current selection of text on a web page. It’s accessible through the <code>window.getSelection()</code> method and is the core object you’ll interact with.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">const</span> selection <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>selection<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>The <code>Selection</code> object provides multiple properties and methods to retrieve, modify, and manipulate user-selected text.</p>
<h3 id="heading-2-range-object"><strong>2.</strong> <code>Range</code> <strong>Object</strong></h3>
<p>The <code>Range</code> object represents a fragment of a document. It holds information about the start and end points of a selection and allows you to manipulate portions of the document.</p>
<p>For example, you can create a range to highlight or manipulate specific text nodes or retrieve the text content within a certain range.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">const</span> selection <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> range <span class="token operator">=</span> selection<span class="token punctuation">.</span><span class="token function">getRangeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Get the first range of the selection</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>range<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="heading-key-methods-and-properties-of-the-selection-api">Key Methods and Properties of the Selection API</h2>
<p>Here’s a breakdown of the most commonly used methods and properties of the <strong>Selection API</strong> and the <strong>Range API</strong>:</p>
<h3 id="heading-selection-api-methods"><strong>Selection API Methods:</strong></h3>
<h4 id="heading-1-windowgetselection">1. <code>window.getSelection()</code>:</h4>
<p>The <code>window.getSelection()</code> method is used to retrieve the current text selection on the webpage. It returns an <code>Selection</code> object, which represents the range of text selected by the user, or the caret's current position (if no text is selected).</p>
<p><strong>Details about</strong> <code>window.getSelection()</code><strong>:</strong></p>
<p>The <code>Selection</code> object contains details about the currently selected text (if any), including the start and end nodes, offsets, and methods for manipulating the selection.</p>
<p>If no text is selected, the <code>Selection</code> the object will reflect the caret's current position without any selected range.</p>
<p><strong>Example Code:</strong></p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">const</span> selection <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>selection<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Logs the Selection object to the console</span>
</code></pre>
<p><strong>Example Usage:</strong></p>
<p>Check if any text is selected:</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">const</span> selection <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>selection<span class="token punctuation">.</span>rangeCount <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Text is selected'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'No text selected'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>This checks if any text is selected by verifying if <code>rangeCount</code> (the number of text ranges) is greater than zero.</p>
<h4 id="heading-2-selectionanchornode-and-selectionfocusnode">2. <code>Selection.anchorNode</code> <strong>and</strong> <code>Selection.focusNode</code><strong>:</strong></h4>
<p><code>anchorNode</code> represents the node where the user started the selection. It's the starting point of the selection, although visually it could be at the end depending on the user's drag direction.</p>
<p><code>focusNode</code> represents the node where the user ended the selection. It's the ending point of the selection, but again, this could visually appear as the start of the selection if the user selected backward.</p>
<p><strong>Important details:</strong></p>
<ul>
<li><p><strong>Selection direction</strong>: If the selection is made left-to-right (dragging forward), this <code>anchorNode</code> will be the earlier part of the selection. If the selection is made right-to-left (dragging backward), the <code>anchorNode</code> will be at the later part of the selection, but the focus will appear first.</p>
</li>
<li><p><strong>Node types</strong>: Both <code>anchorNode</code> and <code>focusNode</code> return DOM nodes. This means they can be text nodes, element nodes, or any other type of node within the document.</p>
</li>
<li><p><strong>Offsets</strong>: Along with these properties, <code>Selection.anchorOffset</code> and <code>Selection.focusOffset</code> give you the exact character offset within the nodes where the selection starts and ends.</p>
</li>
</ul>
<h4 id="heading-3-selectiontostring">3. <code>Selection.toString()</code>:</h4>
<p>To use the <code>Selection.toString()</code> method, you can simply call it on the current selection. This method returns the string value of the currently selected text in the document.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">const</span> selectedText <span class="token operator">=</span> selection<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>selectedText<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Output: The selected text</span>
</code></pre>
<p><strong>How it works:</strong></p>
<ol>
<li><p><code>window.getSelection()</code>: This retrieves the current <code>Selection</code> object representing the user-selected text.</p>
</li>
<li><p><code>.toString()</code>: This converts the selected range to a plain string of text.</p>
</li>
<li><p>The result is then printed to the console.</p>
</li>
</ol>
<h4 id="heading-4-selectionremoveallranges">4. <code>Selection.removeAllRanges()</code>:</h4>
<p>The <code>Selection.removeAllRanges()</code> method is used to clear or remove any current text selection on a webpage. When called, it deselects any text that the user may have selected, leaving the selection empty.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript">selection<span class="token punctuation">.</span><span class="token function">removeAllRanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>How it works:</strong></p>
<ul>
<li><p><code>window.getSelection()</code>: Retrieves the current <code>Selection</code> object.</p>
</li>
<li><p><code>.removeAllRanges()</code>: Clears the selection, effectively deselecting any highlighted text on the page.</p>
</li>
</ul>
<h4 id="heading-5-selectionaddrangerange">5. <code>Selection.addRange(range)</code>:</h4>
<p>The <code>Selection.addRange(range)</code> method is used to add a specific <code>Range</code> object to the current selection in the document. This allows you to programmatically select a range of text or elements.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// Create a range object</span>
<span class="token keyword">const</span> range <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createRange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Select a specific element or part of the document</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myElement'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Set the range to start at the beginning of the element and end at the end</span>
range<span class="token punctuation">.</span><span class="token function">selectNodeContents</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Clear any existing selection and add the new range</span>
<span class="token keyword">const</span> selection <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
selection<span class="token punctuation">.</span><span class="token function">removeAllRanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Remove existing selections</span>
selection<span class="token punctuation">.</span><span class="token function">addRange</span><span class="token punctuation">(</span>range<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Add the new range</span>
</code></pre>
<p><strong>How it works:</strong></p>
<ol>
<li><p><code>document.createRange()</code>: Creates a new <code>Range</code> object.</p>
</li>
<li><p><code>range.selectNodeContents()</code>: Sets the range to cover the contents of a specific DOM element (in this case, the element with ID <code>myElement</code>).</p>
</li>
<li><p><code>selection.removeAllRanges()</code>: Clears any previously selected text or elements.</p>
</li>
<li><p><code>selection.addRange(range)</code>: Adds the definition <code>Range</code> to the selection, making it the currently selected text or content.</p>
</li>
</ol>
<p><strong>Use Cases:</strong></p>
<ul>
<li><p><strong>Programmatically Select Text</strong>: If you want to highlight specific parts of the document programmatically, you can use this method to select them.</p>
</li>
<li><p><strong>Custom Selection Logic</strong>: In web applications that require specific text or element selections, such as editors or custom UI tools, this can be used to manage user selections.</p>
</li>
</ul>
<h3 id="heading-range-api-methods"><strong>Range API Methods:</strong></h3>
<h4 id="heading-1-rangesetstartnode-offset">1. <code>range.setStart(node, offset)</code>:</h4>
<p>The <code>Range.setStart(node, offset)</code> method is used to set the starting point of an <code>Range</code> object. You specify <code>node</code> where the range should start and the <code>offset</code> (position within the node) for the starting point.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><p><code>node</code>: The DOM node where the range should start. It can be an element node or a text node.</p>
</li>
<li><p><code>offset</code>: The position within the node where the range starts. For element nodes, this is the index of child nodes. For text nodes, it's the character position within the text.</p>
</li>
</ul>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// Create a range object</span>
<span class="token keyword">const</span> range <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createRange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Select the text node where the range should start</span>
<span class="token keyword">const</span> textNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myElement'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span>

<span class="token comment">// Set the start of the range at the 5th character in the text node</span>
range<span class="token punctuation">.</span><span class="token function">setStart</span><span class="token punctuation">(</span>textNode<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>Code explanation:</strong></p>
<ol>
<li><p><code>document.createRange()</code>: Creates a new <code>Range</code> object.</p>
</li>
<li><p><code>textNode</code>: This refers to the first child of the element with ID <code>myElement</code>, which is expected to be a text node.</p>
</li>
<li><p><code>range.setStart(textNode, 5)</code>: Sets the start of the range at the 5th character in the text node.</p>
</li>
</ol>
<p><strong>Important notes:</strong></p>
<ul>
<li><p>In <strong>text nodes</strong>, the <code>offset</code> refers to the position of a character within the text. For example, <code>offset = 5</code> means the range starts after the 5th character.</p>
</li>
<li><p>In <strong>element nodes</strong>, the <code>offset</code> refers to the index of child nodes. For instance, <code>offset = 0</code> would start before the first child element, while <code>offset = 1</code> would start after the first child.</p>
</li>
</ul>
<p><strong>Example use case:</strong></p>
<p>You could use <code>setStart</code> in a scenario where you want to highlight or extract part of some text, starting at a specific point:</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">const</span> range <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createRange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> textNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myText'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span>
range<span class="token punctuation">.</span><span class="token function">setStart</span><span class="token punctuation">(</span>textNode<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Start at the 4th character</span>
range<span class="token punctuation">.</span><span class="token function">setEnd</span><span class="token punctuation">(</span>textNode<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// End at the 9th character</span>

<span class="token keyword">const</span> selection <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
selection<span class="token punctuation">.</span><span class="token function">removeAllRanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Clear previous selections</span>
selection<span class="token punctuation">.</span><span class="token function">addRange</span><span class="token punctuation">(</span>range<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Highlight the selected text</span>
</code></pre>
<p>In this example, it selects the text starting from the 4th character and ending at the 9th character, effectively highlighting that part of the text.</p>
<h4 id="heading-2-rangeclonecontents">2. <code>range.cloneContents()</code>:</h4>
<p>The <code>Range.cloneContents()</code> method is used to create a copy of the content within the specified range. It returns a <code>DocumentFragment</code> containing the nodes and content from the range but does not modify the original document.</p>
<p><strong>Key details:</strong></p>
<ul>
<li><p><strong>Returns</strong>: A <code>DocumentFragment</code> that contains the cloned nodes and elements within the range.</p>
</li>
<li><p><strong>Non-destructive</strong>: This method does not alter or remove the content from the original document – it simply creates a copy.</p>
</li>
</ul>
<p><strong>Example code:</strong></p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// Create a range object</span>
<span class="token keyword">const</span> range <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createRange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Select the content of a specific element</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myElement'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
range<span class="token punctuation">.</span><span class="token function">selectNodeContents</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Clone the contents of the range</span>
<span class="token keyword">const</span> clonedContent <span class="token operator">=</span> range<span class="token punctuation">.</span><span class="token function">cloneContents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Append the cloned content somewhere in the document</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>clonedContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>How it works:</strong></p>
<ol>
<li><p><code>document.createRange()</code>: Creates a new <code>Range</code> object.</p>
</li>
<li><p><code>range.selectNodeContents(element)</code>: Selects all the content within the specified element.</p>
</li>
<li><p><code>range.cloneContents()</code>: Creates a <code>DocumentFragment</code> that contains a copy of the selected contents.</p>
</li>
<li><p><code>document.body.appendChild(clonedContent)</code>: Appends the cloned content somewhere in the document (in this case, at the end of the body).</p>
</li>
</ol>
<p><strong>Use cases:</strong></p>
<ol>
<li><p><strong>Duplicating Content</strong>: Use this method when you need to create a copy of selected content without altering the original.</p>
</li>
<li><p><strong>Manipulating Copied Data</strong>: After cloning the contents, you can modify or process the cloned fragment (for example, for drag-and-drop features, custom tooltips, or saving a portion of content).</p>
</li>
</ol>
<p><strong>Example scenario:</strong></p>
<p>If you want to copy part of a webpage’s content and display it elsewhere:</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token keyword">const</span> range <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createRange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#textElement'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
range<span class="token punctuation">.</span><span class="token function">setStart</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>firstChild<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Set start of range</span>
range<span class="token punctuation">.</span><span class="token function">setEnd</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>firstChild<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Set end of range (first 10 characters)</span>

<span class="token comment">// Clone the content and append it to another element</span>
<span class="token keyword">const</span> clonedContent <span class="token operator">=</span> range<span class="token punctuation">.</span><span class="token function">cloneContents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#targetElement'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>clonedContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>In this example, the first 10 characters <code>#textElement</code> are cloned and inserted into <code>#targetElement</code>. This does not affect the original content in <code>#textElement</code>.</p>
<h3 id="heading-use-cases-of-the-selection-api">Use Cases of the Selection API</h3>
<h4 id="heading-1-highlighting-text">1. Highlighting text</h4>
<p>Using the Selection API, you can highlight text dynamically based on user input. For example, you can wrap the selected text in a <code>&lt;mark&gt;</code> tag to highlight it.</p>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>This is some selectable text.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>highlightSelection()<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Highlight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
function highlightSelection() {
    const selection = window.getSelection();
    if (selection.rangeCount &gt; 0) {
        const range = selection.getRangeAt(0);
        const highlight = document.createElement('mark');
        range.surroundContents(highlight);
    }
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>This script allows users to highlight the selected text with a simple click.</p>
<h4 id="heading-2-copying-selected-text">2. Copying selected text</h4>
<p>You can easily extract and manipulate the selected text with the <code>Selection.toString()</code> method. Here’s an example of copying the selected text to the clipboard:</p>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Select any portion of this text and copy it to the clipboard.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>copySelection()<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Copy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
function copySelection() {
    const selection = window.getSelection();
    const text = selection.toString();

    navigator.clipboard.writeText(text).then(() =&gt; {
        alert("Copied to clipboard: " + text);
    });
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>This snippet allows users to copy any selected text and paste it elsewhere.</p>
<h4 id="heading-3-annotating-text">3. Annotating text</h4>
<p>You can combine the Selection API with custom annotations. You can display a floating tooltip or annotation box by detecting the selection’s position on the page.</p>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Select text to see the annotation box.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
document.addEventListener("mouseup", () =&gt; {
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (selectedText.length &gt; 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        const annotationBox = document.createElement("div");
        annotationBox.style.position = "absolute";
        annotationBox.style.left = `${rect.left}px`;
        annotationBox.style.top = `${rect.top - 30}px`;
        annotationBox.textContent = "Annotate this!";
        document.body.appendChild(annotationBox);
    }
});
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>This script creates an annotation box just above the selected text.</p>
<h3 id="heading-advanced-features-of-the-selection-api">Advanced Features of the Selection API</h3>
<ol>
<li><p><strong>Multiple Ranges</strong>: Some browsers support multiple text selections on a single page, where you can select multiple text ranges and manipulate them simultaneously.</p>
</li>
<li><p><strong>Detecting Selection Changes</strong>: You can listen for <code>selectionchange</code> events on the document, allowing you to detect when the user changes their selection.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"> document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"selectionchange"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> selection <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Selection changed:"</span><span class="token punctuation">,</span> selection<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</li>
<li><p><strong>Working with Forms</strong>: Selections can be useful in forms, allowing you to auto-complete, copy, or validate the user’s input based on selected text.</p>
</li>
</ol>
<p>The <strong>JavaScript Selection API</strong> is a powerful tool for creating dynamic and interactive web applications. Whether you want to implement custom copy/paste functionality, enable annotations, or build advanced text editors, the Selection API provides the control and flexibility you need to handle user selections.</p>
<p>With its easy-to-use methods and properties, you can enhance user experiences and create intuitive, selection-based features.</p>
<h2 id="heading-example-use-case-how-to-build-a-rich-text-editor-with-the-javascript-selection-api">Example Use Case: How to Build a Rich Text Editor with the JavaScript Selection API</h2>
<p>The Selection API not only allows you to interact with text selections but also opens the door to more advanced text manipulation, like creating a <strong>rich text editor</strong>. A rich text editor (RTE) allows users to format selected text with features such as bold, italic, and underline.</p>
<p>In this section, we'll walk through how to build a basic rich text editor using the Selection API and provide an example with key formatting features.</p>
<h3 id="heading-how-does-the-selection-api-help-build-a-rich-text-editor">How Does the Selection API Help Build a Rich Text Editor?</h3>
<p>The Selection API lets you:</p>
<ul>
<li><p>Detect the text selected by the user.</p>
</li>
<li><p>Programmatically modify the selected content, for example, applying bold, italic, or underlined styling.</p>
</li>
<li><p>Allow users to make in-place edits with simple UI controls (like buttons or keyboard shortcuts).</p>
</li>
</ul>
<p>By using the <code>window.getSelection()</code> and Range API, you can manipulate text based on user actions (such as clicking a "Bold" button). You can then wrap the selected text in appropriate HTML tags (<code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;u&gt;</code>) or apply inline styles.</p>
<h3 id="heading-basic-rich-text-editor-features">Basic Rich Text Editor Features</h3>
<p>For our example, we'll implement three core formatting features:</p>
<ol>
<li><p><strong>Bold</strong>: Make the selected text bold.</p>
</li>
<li><p><strong>Italic</strong>: Italicize the selected text.</p>
</li>
<li><p><strong>Underline</strong>: Underline the selected text.</p>
</li>
</ol>
<h4 id="heading-html-structure">HTML Structure</h4>
<p>Here’s a simple layout for the editor with buttons for Bold, Italic, and Underline:</p>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Simple Rich Text Editor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
    #editor {
      border: 1px solid #ccc;
      min-height: 150px;
      padding: 10px;
      margin-top: 10px;
    }
    .toolbar {
      margin-bottom: 5px;
    }
    .toolbar button {
      margin-right: 5px;
    }
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toolbar<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formatText('bold')<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>Bold<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formatText('italic')<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>Italic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formatText('underline')<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u</span><span class="token punctuation">&gt;</span></span>Underline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- Contenteditable div for the editor --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editor<span class="token punctuation">"</span></span> <span class="token attr-name">contenteditable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Type your text here...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editor.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h4 id="heading-javascript-handling-formatting-with-the-selection-api">JavaScript: Handling Formatting with the Selection API</h4>
<p>Now that we have the basic structure, let's add JavaScript to handle text formatting. We’ll use the <strong>Selection API</strong> and <code>document.execCommand()</code>, a legacy method still supported by most browsers, to apply formatting.</p>
<p>Here’s the JavaScript to make the buttons functional:</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// Function to format text based on the command</span>
<span class="token keyword">function</span> <span class="token function">formatText</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">execCommand</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>The <code>execCommand</code> method allows you to perform commands on the content inside an element that has the <code>contenteditable</code> attribute. In our case, the commands will be <code>'bold'</code>, <code>'italic'</code>, and <code>'underline'</code>.</p>
<h3 id="heading-the-documentexeccommand-function">The <code>document.execCommand()</code> Function</h3>
<p>The <code>document.execCommand()</code> function is a legacy method provided by browsers that allows developers to perform various document editing operations directly on content within an <code>contenteditable</code> element. This method has been widely used to build rich text editors for web applications due to its simplicity and browser support.</p>
<p>Though it's still functional in most modern browsers, it's worth noting that <code>execCommand</code> has been deprecated and may not be supported in future versions of browsers. But it still provides a good starting point for basic rich text editors.</p>
<p>If you're looking for a long-term solution, newer APIs like the Selection API combined with Range API or third-party libraries (like Quill.js and Draft.js) are recommended for complex editing needs.</p>
<h3 id="heading-what-is-documentexeccommand">What is <code>document.execCommand()</code>?</h3>
<p>The <code>document.execCommand()</code> the method executes a specified command for manipulating or formatting text in a <strong>contenteditable</strong> element (such as a div, textarea, or input field). It can perform commands such as applying styles, modifying text alignment, creating links, and much more.</p>
<h4 id="heading-syntax-of-the-execcommand">Syntax of the <code>execCommand()</code>:</h4>
<pre class="language-typescript" tabindex="0"><code class="language-typescript">document<span class="token punctuation">.</span><span class="token function">execCommand</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> showUI<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<ul>
<li><p><code>command</code>: A string that represents the command to execute (for example, <code>'bold'</code>, <code>'italic'</code>, <code>'underline'</code>, <code>'createLink'</code>).</p>
</li>
<li><p><code>showUI</code>: A boolean value indicating whether the default user interface for the command should be shown (almost always <code>false</code>, as browser UIs are often inconsistent).</p>
</li>
<li><p><code>value</code>: Optional. A string representing the value to pass for certain commands (for example, the URL for creating a link).</p>
</li>
</ul>
<h4 id="heading-return-value">Return Value</h4>
<p><code>execCommand()</code> returns <code>true</code> if the command is successfully executed or <code>false</code> otherwise.</p>
<h3 id="heading-how-to-enhance-the-rich-text-editor">How to Enhance the Rich Text Editor</h3>
<p>While the example above gives you a basic rich text editor, you can expand its features by adding more controls and handling other commands:</p>
<ul>
<li><p><strong>Text Color</strong>: Change the color of the selected text using <code>execCommand('foreColor', false, 'red')</code>.</p>
</li>
<li><p><strong>Text Alignment</strong>: Align text left, center, or right using commands like <code>execCommand('justifyCenter')</code>.</p>
</li>
<li><p><strong>Undo/Redo</strong>: Implement undo and redo functionality using <code>execCommand('undo')</code> and <code>execCommand('redo')</code>.</p>
</li>
<li><p><strong>Adding Links</strong>: Allow users to add links with <code>execCommand('createLink', false, '</code><a target="_blank" href="http://example.com"><code>http://example.com</code></a><code>')</code>.</p>
</li>
</ul>
<p>Using the Selection API combined with <code>document.execCommand()</code>, we’ve built a simple, yet functional rich text editor with bold, italic, and underline features. This basic editor can be further enhanced with additional features like font size, color, and alignment to create a full-fledged rich text editor for your web applications.</p>
<h3 id="heading-how-to-get-the-clicked-element-and-its-real-time-position"><strong>How to Get the Clicked Element and its Real-Time Position</strong></h3>
<p>The simplest way to detect the clicked element in a webpage is by using the <code>click</code> event listener in JavaScript.</p>
<p>Here's how you can do it:</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript">document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> clickedElement <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'You clicked on:'</span><span class="token punctuation">,</span> clickedElement<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h4 id="heading-code-explanation">Code explanation:</h4>
<ul>
<li><p><code>document.addEventListener('click', ...)</code>: This attaches an event listener to the whole document.</p>
</li>
<li><p><a target="_blank" href="http://event.target"><code>event.target</code></a>: This property returns the specific element that was clicked.</p>
</li>
<li><p><code>clickedElement.tagName</code>: This provides the tag name of the clicked element (like <code>DIV</code>, <code>SPAN</code>, <code>BUTTON</code>, etc.).</p>
</li>
</ul>
<p>This will log the element’s tag name to the console when you click anywhere on the document.</p>
<h3 id="heading-how-to-get-the-elements-realtime-position"><strong>How to Get the Element's Realtime Position</strong></h3>
<p>Once you have the clicked element, you can find its position on the screen using JavaScript’s DOM API. Specifically, <code>getBoundingClientRect()</code> gives us the element's position relative to the viewport.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript">document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> clickedElement <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token keyword">const</span> position <span class="token operator">=</span> clickedElement<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Element: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>clickedElement<span class="token punctuation">.</span>tagName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Position: Top - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>position<span class="token punctuation">.</span>top<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px, Left - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>position<span class="token punctuation">.</span>left<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h4 id="heading-code-explanation-1">Code explanation:</h4>
<ul>
<li><p><code>getBoundingClientRect()</code>: This method returns the size of an element and its position relative to the viewport. It gives you several useful properties:</p>
<ul>
<li><p><code>top</code>: Distance from the top of the viewport.</p>
</li>
<li><p><code>left</code>: Distance from the left of the viewport.</p>
</li>
<li><p><code>right</code>: Distance from the left edge to the right edge of the element.</p>
</li>
<li><p><code>bottom</code>: Distance from the top edge to the bottom edge of the element.</p>
</li>
</ul>
</li>
</ul>
<p>The <code>top</code> and <code>left</code> values are usually the most useful, as they tell you where the element is positioned.</p>
<h3 id="heading-full-example-with-code"><strong>Full Example with Code</strong></h3>
<p>Let’s put everything together. We’ll create an interactive example where clicking on any element displays its tag name and position in a tooltip-like fashion.</p>
<p>Here’s the complete code:</p>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Detect Clicked Element and Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
        body {
            font-family: Arial, sans-serif;
        }
        .tooltip {
            position: absolute;
            background-color: #333;
            color: #fff;
            padding: 5px;
            border-radius: 5px;
            font-size: 12px;
            display: none;
        }
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tooltip<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tooltip<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Click on elements to see their tag and position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>This is a paragraph. Click on it!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>Click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width: 100px; height: 100px; background-color: lightblue;<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Click this box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
    const tooltip = document.getElementById('tooltip');

    document.addEventListener('click', (event) =&gt; {
        const clickedElement = event.target;
        const position = clickedElement.getBoundingClientRect();

        // Get the tag name of the clicked element
        const elementTag = clickedElement.tagName;

        // Get the element's current position
        const top = position.top + window.scrollY; // Account for page scroll
        const left = position.left + window.scrollX;

        // Display the tooltip near the clicked element
        tooltip.innerHTML = `Tag: ${elementTag}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>Position: Top - ${Math.round(top)}px, Left - ${Math.round(left)}px`;
        tooltip.style.display = 'block';
        tooltip.style.top = `${top + 20}px`; // Offset to position below the element
        tooltip.style.left = `${left + 20}px`; // Offset to position to the right of the element
    });

    document.addEventListener('scroll', () =&gt; {
        tooltip.style.display = 'none'; // Hide the tooltip when the user scrolls
    });
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<h4 id="heading-code-explanation-2">Code explanation:</h4>
<ol>
<li><p><strong>HTML structure</strong>:</p>
<ul>
<li><p>The <code>tooltip</code> div is initially hidden but will be shown dynamically when a user clicks on an element.</p>
</li>
<li><p>We’ve included some clickable elements (<code>h1</code>, <code>p</code>, <code>button</code>, <code>div</code>) for demonstration purposes.</p>
</li>
</ul>
</li>
<li><p><strong>JavaScript</strong>:</p>
<ul>
<li><p>When any element is clicked, we calculate its tag name and position using <a target="_blank" href="http://event.target"><code>event.target</code></a> and <code>getBoundingClientRect()</code>.</p>
</li>
<li><p>We update the <code>tooltip</code> content and move it dynamically based on the element’s position.</p>
</li>
<li><p><code>window.scrollY</code> and <code>window.scrollX</code> are added to account for any scrolling that has occurred on the page.</p>
</li>
</ul>
</li>
<li><p><strong>CSS</strong>:</p>
<ul>
<li><p>The tooltip is styled as a small box with a dark background and white text. It is initially hidden (<code>display: none</code>).</p>
</li>
<li><p>When an element is clicked, the tooltip is positioned near the clicked element by adjusting its <code>top</code> and <code>left</code> styles.</p>
</li>
</ul>
</li>
</ol>
<h3 id="heading-live-example">Live Example:</h3>
<p>Click anywhere on the webpage, and you’ll see the tag name and position of the clicked element displayed in a tooltip. This method is beneficial for creating custom interactions, debugging, or handling complex layouts in modern web applications.</p>
<h2 id="heading-wrapping-up">Wrapping Up</h2>
<p>In this tutorial, we explored how to use the <strong>JavaScript Selection API</strong> to interact with text the user selects and manipulate it programmatically. We also learned about the <code>document.execCommand()</code> function, which, despite being deprecated, allows us to apply basic text formatting like bold, italic, and underline to the selected content.</p>
<p>We demonstrated how to build a simple rich text editor with basic features using these tools. We also covered how to detect which HTML element was clicked by using the <code>click</code> event and accessing the <a target="_blank" href="http://event.target"><code>event.target</code></a> property.</p>
<p>These techniques form the foundation for creating dynamic, interactive web text editors.</p>
-->

---

<TagLinks />