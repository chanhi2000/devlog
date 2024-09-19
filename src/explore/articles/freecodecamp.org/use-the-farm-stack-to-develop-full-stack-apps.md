---
lang: ko-KR
title: Use the FARM Stack to Develop Full Stack Apps
description: Article(s) > Use the FARM Stack to Develop Full Stack Apps
icon: fa-brands fa-react
category: 
  - Node.js
  - React.js
  - Python
  - FastAPI
  - MongoDB
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
  - python
  - py
  - py-fastapi
  - mongodb
head:
  - - meta:
    - property: og:title
      content: Article(s) > Use the FARM Stack to Develop Full Stack Apps
    - property: og:description
      content: Use the FARM Stack to Develop Full Stack Apps
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/use-the-farm-stack-to-develop-full-stack-apps.html
prev: /programming/js-react/articles/README.md
date: 2024-09-18
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1726760870442/726967ee-7f01-432d-a73e-9f73f037f942.jpeg
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

```component VPCard
{
  "title": "FastAPI > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/py-fastapi/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

<!-- TODO: fastAPI 생성 -->

```component VPCard
{
  "title": "MongoDB > Article(s)",
  "desc": "Article(s)",
  "link": "/data-scienece/mongodb/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="Use the FARM Stack to Develop Full Stack Apps"
  desc="The FARM stack is a modern web development stack that combines three powerful technologies: FastAPI, React, and MongoDB. This full-stack solution provides developers with a robust set of tools to build scalable, efficient, and high-performance web ap..."
  url="https://freecodecamp.org/news/use-the-farm-stack-to-develop-full-stack-apps/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1726760870442/726967ee-7f01-432d-a73e-9f73f037f942.jpeg"/>

<!-- TODO: 작성 -->

<!--
<p>The FARM stack is a modern web development stack that combines three powerful technologies: FastAPI, React, and MongoDB. This full-stack solution provides developers with a robust set of tools to build scalable, efficient, and high-performance web applications.</p>
<p>In this article, I'll be giving you an introduction to each of the key technologies, and then we'll build a project using the FARM stack and Docker so you can see how everything works together.</p>
<p>This article is based on a course I created <a target="_blank" href="https://www.youtube.com/watch?v=PWG7NlUDVaA">on the freeCodeCamp.org YouTube channel</a>. Watch it here:</p>
<div class="embed-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PWG7NlUDVaA" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" loading="lazy"></iframe></div>
<p> </p>
<h1 id="heading-introduction-to-the-farm-stack">Introduction to the FARM Stack</h1>
<p>The FARM in FARM stack stands for:</p>
<ul>
<li><p>F: FastAPI (Backend)</p>
</li>
<li><p>R: React (Frontend)</p>
</li>
<li><p>M: MongoDB (Database)</p>
</li>
</ul>
<p>The FARM stack is designed to leverage the strengths of each component, allowing developers to create feature-rich applications with a smooth development experience.</p>
<h3 id="heading-components-of-farm-stack">Components of FARM Stack</h3>
<ol>
<li><p><strong>FastAPI:</strong> FastAPI is a modern, high-performance Python web framework for building APIs. It's designed to be easy to use, fast to code, and ready for production environments. FastAPI is built on top of Starlette for the web parts and Pydantic for the data parts, making it a powerful choice for building robust backend services.</p>
</li>
<li><p><strong>React</strong>: React is a popular JavaScript library for building user interfaces. Developed and maintained by Facebook, React allows developers to create reusable UI components that efficiently update and render as data changes. Its component-based architecture and virtual DOM make it an excellent choice for building dynamic and responsive frontend applications.</p>
</li>
<li><p><strong>MongoDB:</strong> MongoDB is a document-oriented NoSQL database. It stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time. This flexibility makes MongoDB an ideal choice for applications that need to evolve quickly and handle diverse data types.</p>
</li>
</ol>
<h3 id="heading-advantages-of-using-farm-stack">Advantages of using FARM Stack</h3>
<ol>
<li><p>High Performance: FastAPI is one of the fastest Python frameworks available, while React's virtual DOM ensures efficient UI updates. MongoDB's document model allows for quick reads and writes.</p>
</li>
<li><p>Scalability: All components of the FARM stack are designed to scale. FastAPI can handle concurrent requests efficiently, React applications can manage complex UIs, and MongoDB can distribute data across multiple servers.</p>
</li>
<li><p>Community and Ecosystem: All three technologies have large, active communities and rich ecosystems of libraries and tools.</p>
</li>
<li><p>Flexibility: The FARM stack is flexible enough to accommodate various types of web applications, from simple CRUD apps to complex, data-intensive systems.</p>
</li>
</ol>
<p>By combining these technologies, the FARM stack provides a comprehensive solution for building modern web applications. It allows developers to create fast, scalable backends with FastAPI, intuitive and responsive frontends with React, and flexible, efficient data storage with MongoDB. This stack is particularly well-suited for applications that require real-time updates, complex data models, and high performance.</p>
<h1 id="heading-project-overview-todo-application">Project Overview: Todo Application</h1>
<p>In the video course, I cover more about each individual technology in the FARM Stack. But in this article, we are going to jump right into a project to put everything together.</p>
<p>We will be creating a todo application to help us understand the FARM stack. Before we start creating the applicaiton, let’s discuss more about the features and software architecture.</p>
<h3 id="heading-features-of-the-todo-application">Features of the todo application</h3>
<p>Our FARM stack todo application will include the following features:</p>
<ol>
<li><p>Multiple Todo Lists:</p>
<ul>
<li><p>Users can create, view, update, and delete multiple todo lists.</p>
</li>
<li><p>Each list has a name and contains multiple todo items.</p>
</li>
</ul>
</li>
<li><p>Todo Items:</p>
<ul>
<li><p>Within each list, users can add, view, update, and delete todo items.</p>
</li>
<li><p>Each item has a label, a checked/unchecked status, and belongs to a specific list.</p>
</li>
</ul>
</li>
<li><p>Real-time Updates:</p>
<ul>
<li>The UI updates in real-time when changes are made to lists or items.</li>
</ul>
</li>
<li><p>Responsive Design:</p>
<ul>
<li>The application will be responsive and work well on both desktop and mobile devices.</li>
</ul>
</li>
</ol>
<h3 id="heading-system-architecture">System architecture</h3>
<p>Our todo application will follow a typical FARM stack architecture:</p>
<ol>
<li><p>Frontend (React):</p>
<ul>
<li><p>Provides the user interface for interacting with todo lists and items.</p>
</li>
<li><p>Communicates with the backend via RESTful API calls.</p>
</li>
</ul>
</li>
<li><p>Backend (FastAPI):</p>
<ul>
<li><p>Handles API requests from the frontend.</p>
</li>
<li><p>Implements business logic for managing todo lists and items.</p>
</li>
<li><p>Interacts with the MongoDB database for data persistence.</p>
</li>
</ul>
</li>
<li><p>Database (MongoDB):</p>
<ul>
<li><p>Stores todo lists and items.</p>
</li>
<li><p>Provides efficient querying and updating of todo data.</p>
</li>
</ul>
</li>
<li><p>Docker:</p>
<ul>
<li>Containerizes each component (frontend, backend, database) for easy development and deployment.</li>
</ul>
</li>
</ol>
<h3 id="heading-data-model-design">Data model design</h3>
<p>Our MongoDB data model will consist of two main structures:</p>
<ol>
<li>Todo List:</li>
</ol>
<pre class="language-json" tabindex="0"><code class="language-json">   <span class="token punctuation">{</span>
     <span class="token property">"_id"</span><span class="token operator">:</span> ObjectId<span class="token punctuation">,</span>
     <span class="token property">"name"</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
     <span class="token property">"items"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token punctuation">{</span>
         <span class="token property">"id"</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
         <span class="token property">"label"</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
         <span class="token property">"checked"</span><span class="token operator">:</span> Boolean
       <span class="token punctuation">}</span>
     <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
</code></pre>
<ol start="2">
<li>List Summary (for displaying in the list of all todo lists):</li>
</ol>
<pre class="language-json" tabindex="0"><code class="language-json">   <span class="token punctuation">{</span>
     <span class="token property">"_id"</span><span class="token operator">:</span> ObjectId<span class="token punctuation">,</span>
     <span class="token property">"name"</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
     <span class="token property">"item_count"</span><span class="token operator">:</span> Integer
   <span class="token punctuation">}</span>
</code></pre>
<h3 id="heading-api-endpoint-design">API endpoint design</h3>
<p>Our FastAPI backend will expose the following RESTful endpoints:</p>
<ol>
<li><p>Todo Lists:</p>
<ul>
<li><p>GET /api/lists: Retrieve all todo lists (summary view)</p>
</li>
<li><p>POST /api/lists: Create a new todo list</p>
</li>
<li><p>GET /api/lists/{list_id}: Retrieve a specific todo list with all its items</p>
</li>
<li><p>DELETE /api/lists/{list_id}: Delete a specific todo list</p>
</li>
</ul>
</li>
<li><p>Todo Items:</p>
<ul>
<li><p>POST /api/lists/{list_id}/items: Add a new item to a specific list</p>
</li>
<li><p>PATCH /api/lists/{list_id}/checked_state: Update the checked state of an item</p>
</li>
<li><p>DELETE /api/lists/{list_id}/items/{item_id}: Delete a specific item from a list</p>
</li>
</ul>
</li>
</ol>
<p>This project will provide a solid foundation in FARM stack development and Docker containerization, which you can then expand upon for more complex applications in the future.</p>
<p>So let's get started with the project.</p>
<h1 id="heading-project-tutorial">Project Tutorial</h1>
<h2 id="heading-project-setup-and-backend-development">Project Setup and Backend Development</h2>
<p>Step 1: Set up the project structure</p>
<p>Create a new directory for your project:</p>
<pre class="language-csharp" tabindex="0"><code class="language-csharp">   mkdir farm<span class="token operator">-</span>stack<span class="token operator">-</span>todo
   cd farm<span class="token operator">-</span>stack<span class="token operator">-</span>todo
</code></pre>
<p>Create subdirectories for the backend and frontend:</p>
<pre class="language-csharp" tabindex="0"><code class="language-csharp">   mkdir backend frontend
</code></pre>
<p>Step 2: Set up the backend environment</p>
<p>Navigate to the backend directory:</p>
<pre class="language-csharp" tabindex="0"><code class="language-csharp">   cd backend
</code></pre>
<p>Create a virtual environment and activate it:</p>
<pre class="language-csharp" tabindex="0"><code class="language-csharp">   python <span class="token operator">-</span>m venv venv
   source venv<span class="token operator">/</span>bin<span class="token operator">/</span>activate  # <span class="token class-name">On</span> Windows<span class="token punctuation">,</span> <span class="token named-parameter punctuation">use</span><span class="token punctuation">:</span> venv\Scripts\activate
</code></pre>
<p>Create the following files in the backend directory:</p>
<ol start="3">
<li><ul>
<li><p>Dockerfile</p>
<ul>
<li>pyproject.toml</li>
</ul>
</li>
</ul>
</li>
</ol>
<p>    In your terminal, install the required packages:</p>
<pre class="language-powershell" tabindex="0"><code class="language-powershell">pip install <span class="token string">"fastapi[all]"</span> <span class="token string">"motor[srv]"</span> beanie aiostream
</code></pre>
<p>Generate the requirements.txt file:</p>
<pre class="language-powershell" tabindex="0"><code class="language-powershell">pip freeze &gt; requirements<span class="token punctuation">.</span>txt
</code></pre>
<p>After creating the requirements.txt file (either through pip-compile or manually), you can install the dependencies using:</p>
<pre class="language-csharp" tabindex="0"><code class="language-csharp">   pip install <span class="token operator">-</span>r requirements<span class="token punctuation">.</span>txt
</code></pre>
<p>Add the following content to Dockerfile:</p>
<pre class="language-csharp" tabindex="0"><code class="language-csharp">   <span class="token class-name">FROM</span> python<span class="token punctuation">:</span><span class="token number">3</span>

   WORKDIR <span class="token operator">/</span>usr<span class="token operator">/</span>src<span class="token operator">/</span>app
   COPY requirements<span class="token punctuation">.</span>txt <span class="token punctuation">.</span><span class="token operator">/</span>

   RUN pip install <span class="token operator">--</span>no<span class="token operator">-</span>cache<span class="token operator">-</span>dir <span class="token operator">--</span>upgrade <span class="token operator">-</span>r <span class="token punctuation">.</span><span class="token operator">/</span>requirements<span class="token punctuation">.</span>txt

   EXPOSE <span class="token number">3001</span>

   CMD <span class="token punctuation">[</span> <span class="token string">"python"</span><span class="token punctuation">,</span> <span class="token string">"./src/server.py"</span> <span class="token punctuation">]</span>
</code></pre>
<p>Add the following content to pyproject.toml:</p>
<pre class="language-csharp" tabindex="0"><code class="language-csharp">   <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">tool<span class="token punctuation">.</span>pytest<span class="token punctuation">.</span>ini_options</span></span><span class="token punctuation">]</span>
   pythonpath <span class="token operator">=</span> <span class="token string">"src"</span>
</code></pre>
<p>Step 4: Set up the backend structure</p>
<p>Create a src directory inside the backend directory:</p>
<pre class="language-csharp" tabindex="0"><code class="language-csharp">   mkdir src
</code></pre>
<p>Create the following files inside the src directory:</p>
<ol start="2">
<li><ul>
<li><p><a target="_blank" href="http://server.py">server.py</a></p>
<ul>
<li><a target="_blank" href="http://dal.py">dal.py</a></li>
</ul>
</li>
</ul>
</li>
</ol>
<p>Step 5: Implement the Data Access Layer (DAL)</p>
<p>Open src/<a target="_blank" href="http://dal.py">dal.py</a> and add the following content:</p>
<pre class="language-python" tabindex="0"><code class="language-python"><span class="token keyword">from</span> bson <span class="token keyword">import</span> ObjectId
<span class="token keyword">from</span> motor<span class="token punctuation">.</span>motor_asyncio <span class="token keyword">import</span> AsyncIOMotorCollection
<span class="token keyword">from</span> pymongo <span class="token keyword">import</span> ReturnDocument

<span class="token keyword">from</span> pydantic <span class="token keyword">import</span> BaseModel

<span class="token keyword">from</span> uuid <span class="token keyword">import</span> uuid4

<span class="token keyword">class</span> <span class="token class-name">ListSummary</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
  name<span class="token punctuation">:</span> <span class="token builtin">str</span>
  item_count<span class="token punctuation">:</span> <span class="token builtin">int</span>

  <span class="token decorator annotation punctuation">@staticmethod</span>
  <span class="token keyword">def</span> <span class="token function">from_doc</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token string">"ListSummary"</span><span class="token punctuation">:</span>
      <span class="token keyword">return</span> ListSummary<span class="token punctuation">(</span>
          <span class="token builtin">id</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">(</span>doc<span class="token punctuation">[</span><span class="token string">"_id"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          name<span class="token operator">=</span>doc<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          item_count<span class="token operator">=</span>doc<span class="token punctuation">[</span><span class="token string">"item_count"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">ToDoListItem</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
  label<span class="token punctuation">:</span> <span class="token builtin">str</span>
  checked<span class="token punctuation">:</span> <span class="token builtin">bool</span>

  <span class="token decorator annotation punctuation">@staticmethod</span>
  <span class="token keyword">def</span> <span class="token function">from_doc</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token string">"ToDoListItem"</span><span class="token punctuation">:</span>
      <span class="token keyword">return</span> ToDoListItem<span class="token punctuation">(</span>
          <span class="token builtin">id</span><span class="token operator">=</span>item<span class="token punctuation">[</span><span class="token string">"id"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          label<span class="token operator">=</span>item<span class="token punctuation">[</span><span class="token string">"label"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          checked<span class="token operator">=</span>item<span class="token punctuation">[</span><span class="token string">"checked"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">ToDoList</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
  name<span class="token punctuation">:</span> <span class="token builtin">str</span>
  items<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span>ToDoListItem<span class="token punctuation">]</span>

  <span class="token decorator annotation punctuation">@staticmethod</span>
  <span class="token keyword">def</span> <span class="token function">from_doc</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token string">"ToDoList"</span><span class="token punctuation">:</span>
      <span class="token keyword">return</span> ToDoList<span class="token punctuation">(</span>
          <span class="token builtin">id</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">(</span>doc<span class="token punctuation">[</span><span class="token string">"_id"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          name<span class="token operator">=</span>doc<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          items<span class="token operator">=</span><span class="token punctuation">[</span>ToDoListItem<span class="token punctuation">.</span>from_doc<span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token keyword">for</span> item <span class="token keyword">in</span> doc<span class="token punctuation">[</span><span class="token string">"items"</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">ToDoDAL</span><span class="token punctuation">:</span>
  <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> todo_collection<span class="token punctuation">:</span> AsyncIOMotorCollection<span class="token punctuation">)</span><span class="token punctuation">:</span>
      self<span class="token punctuation">.</span>_todo_collection <span class="token operator">=</span> todo_collection

  <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">list_todo_lists</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> session<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
      <span class="token keyword">async</span> <span class="token keyword">for</span> doc <span class="token keyword">in</span> self<span class="token punctuation">.</span>_todo_collection<span class="token punctuation">.</span>find<span class="token punctuation">(</span>
          <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          projection<span class="token operator">=</span><span class="token punctuation">{</span>
              <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token string">"item_count"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">"$size"</span><span class="token punctuation">:</span> <span class="token string">"$items"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          sort<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          session<span class="token operator">=</span>session<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">:</span>
          <span class="token keyword">yield</span> ListSummary<span class="token punctuation">.</span>from_doc<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>

  <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">create_todo_list</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> session<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
      response <span class="token operator">=</span> <span class="token keyword">await</span> self<span class="token punctuation">.</span>_todo_collection<span class="token punctuation">.</span>insert_one<span class="token punctuation">(</span>
          <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> name<span class="token punctuation">,</span> <span class="token string">"items"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          session<span class="token operator">=</span>session<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>inserted_id<span class="token punctuation">)</span>

  <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">get_todo_list</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">|</span> ObjectId<span class="token punctuation">,</span> session<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ToDoList<span class="token punctuation">:</span>
      doc <span class="token operator">=</span> <span class="token keyword">await</span> self<span class="token punctuation">.</span>_todo_collection<span class="token punctuation">.</span>find_one<span class="token punctuation">(</span>
          <span class="token punctuation">{</span><span class="token string">"_id"</span><span class="token punctuation">:</span> ObjectId<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          session<span class="token operator">=</span>session<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">return</span> ToDoList<span class="token punctuation">.</span>from_doc<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>

  <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">delete_todo_list</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">|</span> ObjectId<span class="token punctuation">,</span> session<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
      response <span class="token operator">=</span> <span class="token keyword">await</span> self<span class="token punctuation">.</span>_todo_collection<span class="token punctuation">.</span>delete_one<span class="token punctuation">(</span>
          <span class="token punctuation">{</span><span class="token string">"_id"</span><span class="token punctuation">:</span> ObjectId<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          session<span class="token operator">=</span>session<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">return</span> response<span class="token punctuation">.</span>deleted_count <span class="token operator">==</span> <span class="token number">1</span>

  <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">create_item</span><span class="token punctuation">(</span>
      self<span class="token punctuation">,</span>
      <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">|</span> ObjectId<span class="token punctuation">,</span>
      label<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
      session<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ToDoList <span class="token operator">|</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
      result <span class="token operator">=</span> <span class="token keyword">await</span> self<span class="token punctuation">.</span>_todo_collection<span class="token punctuation">.</span>find_one_and_update<span class="token punctuation">(</span>
          <span class="token punctuation">{</span><span class="token string">"_id"</span><span class="token punctuation">:</span> ObjectId<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
              <span class="token string">"$push"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                  <span class="token string">"items"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                      <span class="token string">"id"</span><span class="token punctuation">:</span> uuid4<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">hex</span><span class="token punctuation">,</span>
                      <span class="token string">"label"</span><span class="token punctuation">:</span> label<span class="token punctuation">,</span>
                      <span class="token string">"checked"</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          session<span class="token operator">=</span>session<span class="token punctuation">,</span>
          return_document<span class="token operator">=</span>ReturnDocument<span class="token punctuation">.</span>AFTER<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">if</span> result<span class="token punctuation">:</span>
          <span class="token keyword">return</span> ToDoList<span class="token punctuation">.</span>from_doc<span class="token punctuation">(</span>result<span class="token punctuation">)</span>

  <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">set_checked_state</span><span class="token punctuation">(</span>
      self<span class="token punctuation">,</span>
      doc_id<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">|</span> ObjectId<span class="token punctuation">,</span>
      item_id<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
      checked_state<span class="token punctuation">:</span> <span class="token builtin">bool</span><span class="token punctuation">,</span>
      session<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ToDoList <span class="token operator">|</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
      result <span class="token operator">=</span> <span class="token keyword">await</span> self<span class="token punctuation">.</span>_todo_collection<span class="token punctuation">.</span>find_one_and_update<span class="token punctuation">(</span>
          <span class="token punctuation">{</span><span class="token string">"_id"</span><span class="token punctuation">:</span> ObjectId<span class="token punctuation">(</span>doc_id<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"items.id"</span><span class="token punctuation">:</span> item_id<span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token string">"$set"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">"items.$.checked"</span><span class="token punctuation">:</span> checked_state<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          session<span class="token operator">=</span>session<span class="token punctuation">,</span>
          return_document<span class="token operator">=</span>ReturnDocument<span class="token punctuation">.</span>AFTER<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">if</span> result<span class="token punctuation">:</span>
          <span class="token keyword">return</span> ToDoList<span class="token punctuation">.</span>from_doc<span class="token punctuation">(</span>result<span class="token punctuation">)</span>

  <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">delete_item</span><span class="token punctuation">(</span>
      self<span class="token punctuation">,</span>
      doc_id<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">|</span> ObjectId<span class="token punctuation">,</span>
      item_id<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
      session<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ToDoList <span class="token operator">|</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
      result <span class="token operator">=</span> <span class="token keyword">await</span> self<span class="token punctuation">.</span>_todo_collection<span class="token punctuation">.</span>find_one_and_update<span class="token punctuation">(</span>
          <span class="token punctuation">{</span><span class="token string">"_id"</span><span class="token punctuation">:</span> ObjectId<span class="token punctuation">(</span>doc_id<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token string">"$pull"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">"items"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">"id"</span><span class="token punctuation">:</span> item_id<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          session<span class="token operator">=</span>session<span class="token punctuation">,</span>
          return_document<span class="token operator">=</span>ReturnDocument<span class="token punctuation">.</span>AFTER<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      <span class="token keyword">if</span> result<span class="token punctuation">:</span>
          <span class="token keyword">return</span> ToDoList<span class="token punctuation">.</span>from_doc<span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre>
<p>This concludes Part 1 of the tutorial, where we set up the project structure and implemented the Data Access Layer for our FARM stack todo application. In the next part, we'll implement the FastAPI server and create the API endpoints.</p>
<h2 id="heading-implementing-the-fastapi-server">Implementing the FastAPI Server</h2>
<p>Step 6: Implement the FastAPI server</p>
<p>Open src/<a target="_blank" href="http://server.py">server.py</a> and add the following content:</p>
<pre class="language-python" tabindex="0"><code class="language-python"><span class="token keyword">from</span> contextlib <span class="token keyword">import</span> asynccontextmanager
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime
<span class="token keyword">import</span> os
<span class="token keyword">import</span> sys

<span class="token keyword">from</span> bson <span class="token keyword">import</span> ObjectId
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI<span class="token punctuation">,</span> status
<span class="token keyword">from</span> motor<span class="token punctuation">.</span>motor_asyncio <span class="token keyword">import</span> AsyncIOMotorClient
<span class="token keyword">from</span> pydantic <span class="token keyword">import</span> BaseModel
<span class="token keyword">import</span> uvicorn

<span class="token keyword">from</span> dal <span class="token keyword">import</span> ToDoDAL<span class="token punctuation">,</span> ListSummary<span class="token punctuation">,</span> ToDoList

COLLECTION_NAME <span class="token operator">=</span> <span class="token string">"todo_lists"</span>
MONGODB_URI <span class="token operator">=</span> os<span class="token punctuation">.</span>environ<span class="token punctuation">[</span><span class="token string">"MONGODB_URI"</span><span class="token punctuation">]</span>
DEBUG <span class="token operator">=</span> os<span class="token punctuation">.</span>environ<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"DEBUG"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token string">"1"</span><span class="token punctuation">,</span> <span class="token string">"true"</span><span class="token punctuation">,</span> <span class="token string">"on"</span><span class="token punctuation">,</span> <span class="token string">"yes"</span><span class="token punctuation">}</span>


<span class="token decorator annotation punctuation">@asynccontextmanager</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">lifespan</span><span class="token punctuation">(</span>app<span class="token punctuation">:</span> FastAPI<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Startup:</span>
    client <span class="token operator">=</span> AsyncIOMotorClient<span class="token punctuation">(</span>MONGODB_URI<span class="token punctuation">)</span>
    database <span class="token operator">=</span> client<span class="token punctuation">.</span>get_default_database<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># Ensure the database is available:</span>
    pong <span class="token operator">=</span> <span class="token keyword">await</span> database<span class="token punctuation">.</span>command<span class="token punctuation">(</span><span class="token string">"ping"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token builtin">int</span><span class="token punctuation">(</span>pong<span class="token punctuation">[</span><span class="token string">"ok"</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> Exception<span class="token punctuation">(</span><span class="token string">"Cluster connection is not okay!"</span><span class="token punctuation">)</span>

    todo_lists <span class="token operator">=</span> database<span class="token punctuation">.</span>get_collection<span class="token punctuation">(</span>COLLECTION_NAME<span class="token punctuation">)</span>
    app<span class="token punctuation">.</span>todo_dal <span class="token operator">=</span> ToDoDAL<span class="token punctuation">(</span>todo_lists<span class="token punctuation">)</span>

    <span class="token comment"># Yield back to FastAPI Application:</span>
    <span class="token keyword">yield</span>

    <span class="token comment"># Shutdown:</span>
    client<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span>lifespan<span class="token operator">=</span>lifespan<span class="token punctuation">,</span> debug<span class="token operator">=</span>DEBUG<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">"/api/lists"</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">get_all_lists</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">list</span><span class="token punctuation">[</span>ListSummary<span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>i <span class="token keyword">async</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> app<span class="token punctuation">.</span>todo_dal<span class="token punctuation">.</span>list_todo_lists<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>


<span class="token keyword">class</span> <span class="token class-name">NewList</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>


<span class="token keyword">class</span> <span class="token class-name">NewListResponse</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>post</span><span class="token punctuation">(</span><span class="token string">"/api/lists"</span><span class="token punctuation">,</span> status_code<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_201_CREATED<span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">create_todo_list</span><span class="token punctuation">(</span>new_list<span class="token punctuation">:</span> NewList<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> NewListResponse<span class="token punctuation">:</span>
    <span class="token keyword">return</span> NewListResponse<span class="token punctuation">(</span>
        <span class="token builtin">id</span><span class="token operator">=</span><span class="token keyword">await</span> app<span class="token punctuation">.</span>todo_dal<span class="token punctuation">.</span>create_todo_list<span class="token punctuation">(</span>new_list<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
        name<span class="token operator">=</span>new_list<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">"/api/lists/{list_id}"</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">get_list</span><span class="token punctuation">(</span>list_id<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ToDoList<span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""Get a single to-do list"""</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span>todo_dal<span class="token punctuation">.</span>get_todo_list<span class="token punctuation">(</span>list_id<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>delete</span><span class="token punctuation">(</span><span class="token string">"/api/lists/{list_id}"</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">delete_list</span><span class="token punctuation">(</span>list_id<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span>todo_dal<span class="token punctuation">.</span>delete_todo_list<span class="token punctuation">(</span>list_id<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">NewItem</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    label<span class="token punctuation">:</span> <span class="token builtin">str</span>


<span class="token keyword">class</span> <span class="token class-name">NewItemResponse</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    label<span class="token punctuation">:</span> <span class="token builtin">str</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>post</span><span class="token punctuation">(</span>
    <span class="token string">"/api/lists/{list_id}/items/"</span><span class="token punctuation">,</span>
    status_code<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_201_CREATED<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">create_item</span><span class="token punctuation">(</span>list_id<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> new_item<span class="token punctuation">:</span> NewItem<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ToDoList<span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span>todo_dal<span class="token punctuation">.</span>create_item<span class="token punctuation">(</span>list_id<span class="token punctuation">,</span> new_item<span class="token punctuation">.</span>label<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>delete</span><span class="token punctuation">(</span><span class="token string">"/api/lists/{list_id}/items/{item_id}"</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">delete_item</span><span class="token punctuation">(</span>list_id<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> item_id<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ToDoList<span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span>todo_dal<span class="token punctuation">.</span>delete_item<span class="token punctuation">(</span>list_id<span class="token punctuation">,</span> item_id<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">ToDoItemUpdate</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    item_id<span class="token punctuation">:</span> <span class="token builtin">str</span>
    checked_state<span class="token punctuation">:</span> <span class="token builtin">bool</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>patch</span><span class="token punctuation">(</span><span class="token string">"/api/lists/{list_id}/checked_state"</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">set_checked_state</span><span class="token punctuation">(</span>list_id<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> update<span class="token punctuation">:</span> ToDoItemUpdate<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> ToDoList<span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span>todo_dal<span class="token punctuation">.</span>set_checked_state<span class="token punctuation">(</span>
        list_id<span class="token punctuation">,</span> update<span class="token punctuation">.</span>item_id<span class="token punctuation">,</span> update<span class="token punctuation">.</span>checked_state
    <span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">DummyResponse</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    when<span class="token punctuation">:</span> datetime


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">"/api/dummy"</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">get_dummy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> DummyResponse<span class="token punctuation">:</span>
    <span class="token keyword">return</span> DummyResponse<span class="token punctuation">(</span>
        <span class="token builtin">id</span><span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">(</span>ObjectId<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        when<span class="token operator">=</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span>argv<span class="token operator">=</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token string">"server:app"</span><span class="token punctuation">,</span> host<span class="token operator">=</span><span class="token string">"0.0.0.0"</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">3001</span><span class="token punctuation">,</span> <span class="token builtin">reload</span><span class="token operator">=</span>DEBUG<span class="token punctuation">)</span>
    <span class="token keyword">except</span> KeyboardInterrupt<span class="token punctuation">:</span>
        <span class="token keyword">pass</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
<p>This implementation sets up the FastAPI server with CORS middleware, connects to MongoDB, and defines the API endpoints for our todo application.</p>
<p>Step 7: Set up environment variables</p>
<p>Create a .env file in the root directory with the following content. Make sure to add the database name ("todo") at the end of ".mongodb.net/".</p>
<pre class="language-csharp" tabindex="0"><code class="language-csharp">MONGODB_URI<span class="token operator">=</span>'mongodb<span class="token operator">+</span>srv<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>beau<span class="token punctuation">:</span>codecamp@cluster0<span class="token punctuation">.</span>ji7hu<span class="token punctuation">.</span>mongodb<span class="token punctuation">.</span>net<span class="token operator">/</span>todo<span class="token punctuation">?</span>retryWrites<span class="token operator">=</span><span class="token boolean">true</span><span class="token operator">&amp;</span>w<span class="token operator">=</span>majority<span class="token operator">&amp;</span>appName<span class="token operator">=</span>Cluster0'
</code></pre>
<p>Step 8: Create a docker-compose file</p>
<p>In the root directory of your project (farm-stack-todo), create a file named compose.yml with the following content:</p>
<pre class="language-csharp" tabindex="0"><code class="language-csharp">name<span class="token punctuation">:</span> todo<span class="token operator">-</span><span class="token class-name">app</span>
services<span class="token punctuation">:</span>
  nginx<span class="token punctuation">:</span>
    image<span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token number">1.17</span>
    volumes<span class="token punctuation">:</span>
      <span class="token operator">-</span> <span class="token punctuation">.</span><span class="token operator">/</span>nginx<span class="token operator">/</span>nginx<span class="token punctuation">.</span>conf<span class="token punctuation">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token operator">/</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token class-name">conf</span>
    ports<span class="token punctuation">:</span>
      <span class="token operator">-</span> <span class="token number">8000</span><span class="token punctuation">:</span><span class="token number">80</span>
    depends_on<span class="token punctuation">:</span>
      <span class="token operator">-</span> backend
      <span class="token operator">-</span> <span class="token class-name">frontend</span>
  frontend<span class="token punctuation">:</span>
    image<span class="token punctuation">:</span> <span class="token string">"node:22"</span>
    user<span class="token punctuation">:</span> <span class="token string">"node"</span>
    working_dir<span class="token punctuation">:</span> <span class="token operator">/</span>home<span class="token operator">/</span>node<span class="token operator">/</span><span class="token class-name">app</span>
    environment<span class="token punctuation">:</span>
      <span class="token operator">-</span> NODE_ENV<span class="token operator">=</span>development
      <span class="token operator">-</span> WDS_SOCKET_PORT<span class="token operator">=</span><span class="token number">0</span>
    volumes<span class="token punctuation">:</span>
      <span class="token operator">-</span> <span class="token punctuation">.</span><span class="token operator">/</span>frontend<span class="token operator">/</span><span class="token punctuation">:</span><span class="token operator">/</span>home<span class="token operator">/</span>node<span class="token operator">/</span><span class="token class-name">app</span>
    expose<span class="token punctuation">:</span>
      <span class="token operator">-</span> <span class="token string">"3000"</span>
    ports<span class="token punctuation">:</span>
      <span class="token operator">-</span> <span class="token string">"3000:3000"</span>
    command<span class="token punctuation">:</span> <span class="token string">"npm start"</span>
  backend<span class="token punctuation">:</span>
    image<span class="token punctuation">:</span> todo<span class="token operator">-</span>app<span class="token operator">/</span><span class="token class-name">backend</span>
    build<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token operator">/</span><span class="token class-name">backend</span>
    volumes<span class="token punctuation">:</span>
      <span class="token operator">-</span> <span class="token punctuation">.</span><span class="token operator">/</span>backend<span class="token operator">/</span><span class="token punctuation">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>src<span class="token operator">/</span><span class="token class-name">app</span>
    expose<span class="token punctuation">:</span>
      <span class="token operator">-</span> <span class="token string">"3001"</span>
    ports<span class="token punctuation">:</span>
      <span class="token operator">-</span> <span class="token string">"8001:3001"</span>
    command<span class="token punctuation">:</span> <span class="token string">"python src/server.py"</span>
    environment<span class="token punctuation">:</span>
      <span class="token operator">-</span> DEBUG<span class="token operator">=</span><span class="token class-name">true</span>
    env_file<span class="token punctuation">:</span>
      <span class="token operator">-</span> path<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token operator">/</span><span class="token punctuation">.</span><span class="token class-name">env</span>
        required<span class="token punctuation">:</span> <span class="token boolean">true</span>
</code></pre>
<p>Step 9: Set up Nginx configuration</p>
<p>Create a directory named nginx in the root of your project:</p>
<pre class="language-csharp" tabindex="0"><code class="language-csharp">mkdir nginx
</code></pre>
<p>Create a file named nginx.conf inside the nginx directory with the following content:</p>
<pre class="language-python" tabindex="0"><code class="language-python">server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name farm_intro<span class="token punctuation">;</span>

    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        proxy_pass http<span class="token punctuation">:</span><span class="token operator">//</span>frontend<span class="token punctuation">:</span><span class="token number">3000</span><span class="token punctuation">;</span>
        proxy_set_header Upgrade $http_upgrade<span class="token punctuation">;</span>
        proxy_set_header Connection <span class="token string">"upgrade"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location <span class="token operator">/</span>api <span class="token punctuation">{</span>
        proxy_pass http<span class="token punctuation">:</span><span class="token operator">//</span>backend<span class="token punctuation">:</span><span class="token number">3001</span><span class="token operator">/</span>api<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>This concludes Part 2 of the tutorial, where we implemented the FastAPI server, set up environment variables, created a docker-compose file, and configured Nginx. In the next part, we'll focus on setting up the React frontend for our FARM stack todo application.</p>
<h1 id="heading-setting-up-the-react-frontend">Setting up the React Frontend</h1>
<p>Step 10: Create the React application</p>
<p>Navigate to the frontend directory:</p>
<pre class="language-python" tabindex="0"><code class="language-python">cd <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span>frontend
</code></pre>
<p>Create a new React application using Create React App:</p>
<pre class="language-python" tabindex="0"><code class="language-python">npx create<span class="token operator">-</span>react<span class="token operator">-</span>app <span class="token punctuation">.</span>
</code></pre>
<p>Install additional dependencies:</p>
<pre class="language-python" tabindex="0"><code class="language-python">   npm install axios react<span class="token operator">-</span>icons
</code></pre>
<p>Step 11: Set up the main App component</p>
<p>Replace the content of src/App.js with the following:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./App.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ListToDoLists <span class="token keyword">from</span> <span class="token string">"./ListTodoLists"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ToDoList <span class="token keyword">from</span> <span class="token string">"./ToDoList"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>listSummaries<span class="token punctuation">,</span> setListSummaries<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedItem<span class="token punctuation">,</span> setSelectedItem<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">reloadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">reloadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/api/lists"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token function">setListSummaries</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">handleNewToDoList</span><span class="token punctuation">(</span><span class="token parameter">newName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">updateData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newListData <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> newName<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/lists</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> newListData<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">reloadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">updateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">handleDeleteToDoList</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">updateData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/lists/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">reloadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">updateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">handleSelectList</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Selecting item"</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setSelectedItem</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">backToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setSelectedItem</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">reloadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>selectedItem <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ListToDoLists
          listSummaries<span class="token operator">=</span><span class="token punctuation">{</span>listSummaries<span class="token punctuation">}</span>
          handleSelectList<span class="token operator">=</span><span class="token punctuation">{</span>handleSelectList<span class="token punctuation">}</span>
          handleNewToDoList<span class="token operator">=</span><span class="token punctuation">{</span>handleNewToDoList<span class="token punctuation">}</span>
          handleDeleteToDoList<span class="token operator">=</span><span class="token punctuation">{</span>handleDeleteToDoList<span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ToDoList listId<span class="token operator">=</span><span class="token punctuation">{</span>selectedItem<span class="token punctuation">}</span> handleBackButton<span class="token operator">=</span><span class="token punctuation">{</span>backToList<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre>
<p>Step 12: Create the ListTodoLists component</p>
<p>Create a new file src/ListTodoLists.js with the following content:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">import</span> <span class="token string">"./ListTodoLists.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BiSolidTrash <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/bi"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ListToDoLists</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
  listSummaries<span class="token punctuation">,</span>
  handleSelectList<span class="token punctuation">,</span>
  handleNewToDoList<span class="token punctuation">,</span>
  handleDeleteToDoList<span class="token punctuation">,</span>
<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> labelRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>listSummaries <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"ListToDoLists loading"</span><span class="token operator">&gt;</span>Loading to<span class="token operator">-</span><span class="token keyword">do</span> lists <span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>listSummaries<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"ListToDoLists"</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>label<span class="token operator">&gt;</span>
          New To<span class="token operator">-</span>Do List<span class="token operator">:</span><span class="token operator">&amp;</span>nbsp<span class="token punctuation">;</span>
          <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token punctuation">{</span>labelRef<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            <span class="token function">handleNewToDoList</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>labelRef<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token operator">&gt;</span>
          New
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>There are no to<span class="token operator">-</span><span class="token keyword">do</span> lists<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"ListToDoLists"</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>All To<span class="token operator">-</span>Do Lists<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>label<span class="token operator">&gt;</span>
          New To<span class="token operator">-</span>Do List<span class="token operator">:</span><span class="token operator">&amp;</span>nbsp<span class="token punctuation">;</span>
          <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token punctuation">{</span>labelRef<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            <span class="token function">handleNewToDoList</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>labelRef<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token operator">&gt;</span>
          New
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>listSummaries<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">summary</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>div
            key<span class="token operator">=</span><span class="token punctuation">{</span>summary<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
            className<span class="token operator">=</span><span class="token string">"summary"</span>
            onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleSelectList</span><span class="token punctuation">(</span>summary<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>summary<span class="token punctuation">.</span>name<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"count"</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>summary<span class="token punctuation">.</span>item_count<span class="token punctuation">}</span> items<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"flex"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span
              className<span class="token operator">=</span><span class="token string">"trash"</span>
              onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                evt<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">handleDeleteToDoList</span><span class="token punctuation">(</span>summary<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>BiSolidTrash <span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ListToDoLists<span class="token punctuation">;</span>
</code></pre>
<p>Create a new file src/ListTodoLists.css with the following content:</p>
<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">.ListToDoLists .summary</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid lightgray<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ListToDoLists .count</span> <span class="token punctuation">{</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 1ex<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 92%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Step 13: Create the ToDoList component</p>
<p>Create a new file src/ToDoList.js with the following content:</p>
<pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">import</span> <span class="token string">"./ToDoList.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BiSolidTrash <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/bi"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ToDoList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> listId<span class="token punctuation">,</span> handleBackButton <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> labelRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>listData<span class="token punctuation">,</span> setListData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/lists/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>listId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> newData <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
      <span class="token function">setListData</span><span class="token punctuation">(</span>newData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>listId<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">handleCreateItem</span><span class="token punctuation">(</span><span class="token parameter">label</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">updateData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/lists/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>listData<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/items/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> label<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setListData</span><span class="token punctuation">(</span><span class="token keyword">await</span> response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">updateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">handleDeleteItem</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">updateData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/lists/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>listData<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/items/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setListData</span><span class="token punctuation">(</span><span class="token keyword">await</span> response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">updateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">handleCheckToggle</span><span class="token punctuation">(</span><span class="token parameter">itemId<span class="token punctuation">,</span> newState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">updateData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">patch</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/lists/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>listData<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/checked_state</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">item_id</span><span class="token operator">:</span> itemId<span class="token punctuation">,</span>
          <span class="token literal-property property">checked_state</span><span class="token operator">:</span> newState<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setListData</span><span class="token punctuation">(</span><span class="token keyword">await</span> response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">updateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>listData <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"ToDoList loading"</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"back"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleBackButton<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          Back
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        Loading to<span class="token operator">-</span><span class="token keyword">do</span> list <span class="token operator">...</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"ToDoList"</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"back"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleBackButton<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        Back
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>List<span class="token operator">:</span> <span class="token punctuation">{</span>listData<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>label<span class="token operator">&gt;</span>
          New Item<span class="token operator">:</span><span class="token operator">&amp;</span>nbsp<span class="token punctuation">;</span>
          <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token punctuation">{</span>labelRef<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            <span class="token function">handleCreateItem</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>labelRef<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token operator">&gt;</span>
          New
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>listData<span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
        listData<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div
              key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
              className<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>checked <span class="token operator">?</span> <span class="token string">"item checked"</span> <span class="token operator">:</span> <span class="token string">"item"</span><span class="token punctuation">}</span>
              onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleCheckToggle</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token operator">!</span>item<span class="token punctuation">.</span>checked<span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>checked <span class="token operator">?</span> <span class="token string">"✅"</span> <span class="token operator">:</span> <span class="token string">"⬜️"</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"label"</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>label<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"flex"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>span
                className<span class="token operator">=</span><span class="token string">"trash"</span>
                onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                  evt<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token function">handleDeleteItem</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span>
              <span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>BiSolidTrash <span class="token operator">/</span><span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">&gt;</span>There are currently no items<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ToDoList<span class="token punctuation">;</span>
</code></pre>
<p>Create a new file src/ToDoList.css with the following content:</p>
<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">.ToDoList .back</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 1em<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ToDoList .item</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid lightgray<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ToDoList .label</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 1ex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ToDoList .checked .label</span> <span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> line-through<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> lightgray<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Step 14: Update the main CSS file</p>
<p>Replace the content of src/index.css with the following:</p>
<pre class="language-css" tabindex="0"><code class="language-css"><span class="token selector">html, body</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> -apple-system<span class="token punctuation">,</span> BlinkMacSystemFont<span class="token punctuation">,</span> <span class="token string">'Segoe UI'</span><span class="token punctuation">,</span> <span class="token string">'Roboto'</span><span class="token punctuation">,</span> <span class="token string">'Oxygen'</span><span class="token punctuation">,</span>
    <span class="token string">'Ubuntu'</span><span class="token punctuation">,</span> <span class="token string">'Cantarell'</span><span class="token punctuation">,</span> <span class="token string">'Fira Sans'</span><span class="token punctuation">,</span> <span class="token string">'Droid Sans'</span><span class="token punctuation">,</span> <span class="token string">'Helvetica Neue'</span><span class="token punctuation">,</span>
    sans-serif<span class="token punctuation">;</span>
  <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
  <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12pt<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input, button</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">code</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> source-code-pro<span class="token punctuation">,</span> Menlo<span class="token punctuation">,</span> Monaco<span class="token punctuation">,</span> Consolas<span class="token punctuation">,</span> <span class="token string">'Courier New'</span><span class="token punctuation">,</span>
    monospace<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid lightgray<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.flex</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>This concludes Part 3 of the tutorial, where we set up the React frontend for our FARM stack todo application. We've created the main App component, the ListTodoLists component for displaying all todo lists, and the ToDoList component for individual todo lists. In the next part, we'll focus on running and testing the application.</p>
<h1 id="heading-running-and-testing-the-application">Running and Testing the Application</h1>
<p>Step 18: Run the application using Docker Compose</p>
<ol>
<li><p>Make sure you have Docker and Docker Compose installed on your system</p>
</li>
<li><p>Open a terminal in the root directory of your project (farm-stack-todo)</p>
</li>
<li><p>Build and start the containers:</p>
</li>
</ol>
<pre class="language-python" tabindex="0"><code class="language-python">docker<span class="token operator">-</span>compose up <span class="token operator">-</span><span class="token operator">-</span>build
</code></pre>
<ol start="4">
<li>Once the containers are up and running, open your web browser and go to <a target="_blank" href="http://localhost:8000/">http://localhost:8000</a></li>
</ol>
<p>Step 19: Stopping the application</p>
<ol>
<li><p>If you're running the application without Docker:</p>
<ul>
<li><p>Stop the React development server by pressing Ctrl+C in its terminal</p>
</li>
<li><p>Stop the FastAPI server by pressing Ctrl+C in its terminal</p>
</li>
<li><p>Stop the MongoDB server by pressing Ctrl+C in its terminal</p>
</li>
</ul>
</li>
<li><p>If you're running the application with Docker Compose:</p>
<ul>
<li><p>Press Ctrl+C in the terminal where you ran docker-compose up</p>
</li>
<li><p>Run the following command to stop and remove the containers:</p>
</li>
</ul>
</li>
</ol>
<pre class="language-python" tabindex="0"><code class="language-python">     docker<span class="token operator">-</span>compose down
</code></pre>
<p>```</p>
<p>Congratulations! You have successfully built and tested a FARM stack todo application. This application demonstrates the integration of FastAPI, React, and MongoDB in a full-stack web application.</p>
<p>Here are some potential next steps to enhance your application:</p>
<ol>
<li><p>Add user authentication and authorization</p>
</li>
<li><p>Implement data validation and error handling</p>
</li>
<li><p>Add more features like due dates, priorities, or categories for todo items</p>
</li>
<li><p>Improve the UI/UX with a more polished design</p>
</li>
<li><p>Write unit and integration tests for both frontend and backend</p>
</li>
<li><p>Set up continuous integration and deployment (CI/CD) for your application</p>
</li>
</ol>
<p>Remember to keep your dependencies updated and follow best practices for security and performance as you continue to develop your application.</p>
<h1 id="heading-conclusion-and-next-steps">Conclusion and Next Steps</h1>
<p>Congratulations on completing this comprehensive FARM stack tutorial! By building this todo application, you've gained hands-on experience with some of the most powerful and popular technologies in modern web development. You've learned how to create a robust backend API with FastAPI, build a dynamic and responsive frontend with React, persist data with MongoDB, and containerize your entire application using Docker. This project has demonstrated how these technologies work together seamlessly to create a full-featured, scalable web application.</p>
-->

---

<TagLinks />