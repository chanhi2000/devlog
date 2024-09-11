---
lang: ko-KR
title: How to Transform an Angular Application with Signals
description: Article(s) > How to Transform an Angular Application with Signals
icon: fa-brands fa-angular
category: 
  - Node.js
  - Angular.js
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - node
  - nodejs
  - node-js
  - angular
  - angularjs
  - angular-js
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Transform an Angular Application with Signals
    - property: og:description
      content: How to Transform an Angular Application with Signals
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-to-transform-an-angular-appl-with-signals.html
prev: /programming/js-angular/articles/README.md
date: 2024-09-10
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725482117668/26d8fde9-0ff5-4496-9de2-c9e0deb8a02c.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Angular.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-angular/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="How to Transform an Angular Application with Signals"
  desc="Angular is a famous framework for building robust and complex enterprise applications. It is widely used by large companies. Therefore, having the skills to build a performant application using Angular is one of the top skills for a developer.. Angul..."
  url="https://freecodecamp.org/news/how-to-transform-an-angular-appl-with-signals/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725482117668/26d8fde9-0ff5-4496-9de2-c9e0deb8a02c.jpeg"/>

<!-- TODO: 작성 -->

<!-- 
<p>Angular is a famous framework for building robust and complex enterprise applications. It is widely used by large companies. Therefore, having the skills to build a performant application using Angular is one of the top skills for a developer..</p>
<p>Angular's rise to fame can be attributed to a special feature called reactivity. Reactivity is the ability of the framework to change the user interface (UI) when underlying data or state of the application changes.</p>
<p>This change can be due to asynchronous events like getting response from an API call, or from a user action such as clicking a button. To achieve this reactivity, Angular deploys a mechanism called change detection. Reactivity is a double-edged sword though, and can often lead to performance issues due to unwanted updates to UI.</p>
<p>Angular recently released a new feature called signals, which allows developers to improve the performance of existing applications built with Angular, as well build new applications which have significant performance gains over traditional Angular applications.</p>
<p>Signals give you control over change detection, and prevent unwanted updates to UI. It can be very tricky to transform existing applications to use signals, and this tutorial aims to guide you on getting started with it. In this tutorial, an existing Angular application, which was built traditionally, will be transformed step by step to use signals.</p>
<h2 id="heading-table-of-contents">Table of Contents</h2>
<ul>
<li><p><a class="post-section-overview" href="#heading-prerequisites">Prerequisites</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-run-an-existing-application">How to Run an Existing Application</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-understanding-the-existing-application-code">Understanding the Existing Application Code</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-how-to-transform-the-application-to-use-angular-signals">How to Transform the Application to Use Angular Signals</a></p>
</li>
<li><p><a class="post-section-overview" href="#heading-conclusion">Conclusion</a></p>
</li>
</ul>
<h2 id="heading-prerequisites">Prerequisites</h2>
<p>To follow this tutorial you must meet below prerequisites:</p>
<ul>
<li><p>Have an understanding of JavaScript, TypeScript and the Angular framework.</p>
</li>
<li><p>Node.js and NPM installed on your machine. You can verify this using these commands: <code>node -v</code> and <code>npm --version</code>.</p>
</li>
<li><p>Git installed on your machine. You can verify this using <code>git --version</code>.</p>
<p>  <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXeA5rN06IP7YBlURVo8cJ24QdPVik3dxCci04fP3Yp9otnbB5A13q49K5OrmOKon9EUDRgEpxWXKV08dmkcSJtDkT0u4Ceq3mD_ER2aqJSCyshULZIcQBWz9MP-JC3faqWqE79fHIfsrfRvLw63JAQs0pQ?key=SIi3jhbWSizs2BNTxpZ_RQ" alt="node, npm, and git version in the terminal" class="image--center mx-auto" width="316" height="224" loading="lazy"></p>
</li>
<li><p>A code editor installed on your machine. This tutorial has been developed using Visual Studio Code, but any code editor should work.</p>
</li>
</ul>
<h2 id="heading-how-to-run-an-existing-application">How to Run an Existing Application</h2>
<p>We'll transform an existing application using Angular signal. The application is a timesheet management application in which a team lead/shift manager can see the number of hours each employee has worked each week, as well as team total hours.</p>
<p>The team lead can also update the hours of an employee as well. Follow the steps below to clone and run the application locally on your machine:</p>
<ul>
<li><p>Clone the application using the GitHub URL - https://github.com/anujkumartech/emp-time-tracker-1.git. You can use terminal or clone it directly inside your editor.</p>
</li>
<li><p>After cloning the app, open a new terminal if not already opened and go to the application folder using <code>cd emp-time-tracker-1</code>.</p>
</li>
<li><p>Once you are inside the application folder, install the project dependencies using <code>npm install</code>.</p>
</li>
</ul>
<p>After dependencies have been installed, open the application using <code>npm start</code>. Once the application has started, navigate to http://localhost:4200/ and you should see the below page rendered.</p>
<p><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXei6amdCIZzGq01anHIe4QYHU-EA8Zy3NyjNoDbU1zAx8na_xOHs6-uSZh2Eorqhu7UrHdFwmV_A5hT0xsOS5xMiHm94Z6wxsmpagiPQqecjQUNkJqiuzgA9q64H05f2N3GGj_VA0YsAJO9xkZa3KNNHcVU?key=SIi3jhbWSizs2BNTxpZ_RQ" alt="Existing Application Home Page" width="1427" height="879" loading="lazy"></p>
<h3 id="heading-understanding-the-existing-application-code">Understanding the Existing Application Code</h3>
<p>It is very important to understand the code and component architecture which renders the application. Open the application in your code editor by navigating to <strong>src -&gt; app</strong>. You should see a structure like this.</p>
<p><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXeoOadAD5vMfCyV1ZamtdaYe0cSCEyeySD82_q1jDmvLfi1eGDDa2Gs7m0C5L-8I8yQgdiI9vWXaBuB-W3KgDv8PC0jyKajzHtq16fpVUssb-EgCO_0a5W_5KmwGkoPq9UdDLIqjRjVb0NhU1IQBEj8qL7W?key=SIi3jhbWSizs2BNTxpZ_RQ" alt="Code Directory" class="image--center mx-auto" width="449" height="219" loading="lazy"></p>
<p>This application has two main components, the parent component and the child component. The parent component displays the team’s cumulative hours as well a list of employees reporting to the team lead and each employee’s total hours and overtime hours. The parent component has necessary code to render the list as well calculate cumulative team hours from this list. Moreover, the parent component also provides the details of the selected employee to the child component.</p>
<p>The child component receives the selected employee details as its input and allows editing the regular as well overtime hours. Once the team lead is satisfied, a save action is initiated. The save action emits an event from the child component back to the parent component. Parent component acts on this event and does necessary updates to hours of the selected employee. This update triggers recalculation of cumulative hours.</p>
<p><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcipNqPsU-ACMQnJ578FL51paiBdzoNtWygqAACkWIdJmhP8SPAxQPg-SInKOoev7dmSNMINdmFFCNDntFly1ZpkKe6HgwbvNGRZZmhIYfFGtwUXgb2TZpMBC67B7sRcoDNmdsIbLSij8YHzp5AfjKuEtg?key=SIi3jhbWSizs2BNTxpZ_RQ" alt="Component Architecture of Existing Application" width="1125" height="732" loading="lazy"></p>
<p>Please go through the code in the editor as well, and pay special attention to code inside files <strong>parent-component.ts</strong> and <strong>child-component.ts</strong>. In the next section you will transform both of these components to use the new feature Angular Signals.</p>
<h2 id="heading-how-to-transform-the-application-to-use-angular-signals">How to Transform the Application to Use Angular Signals</h2>
<p>The transformation of the code can begin with parent component code. Change the <code>managerName</code> variable to use signals. This highlights how a new signal variable can be created. A signal can be initiated with the <code>signal</code> keyword and option type definition along with initial value for the signal. Code below showcases how a new signal called <code>managerName</code> which has a type of <code>string</code> can be initiated with the initial value of <code>John Doe</code>.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// parent-component.ts</span>
managerName <span class="token operator">=</span> <span class="token generic-function"><span class="token function">signal</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">'John Doe'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>You would observe rendering issues once you update <code>managerName</code> in the component file to use the signal. This is because, to read a signal value, it needs to be executed. Update the component HTML code to below to read the value of the signal properly.</p>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token comment">&lt;!-- parent-component.html --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-3xl font-bold mb-6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Hello {{managerName()}}!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>List of employees inside parent component is a simple array, transform it to signal as well.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// parent-component.ts</span>
 employees <span class="token operator">=</span> <span class="token generic-function"><span class="token function">signal</span><span class="token generic class-name"><span class="token operator">&lt;</span>Employee<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">'Jon Snow'</span><span class="token punctuation">,</span>
      regularHours<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
      overtimeHours<span class="token operator">:</span> <span class="token number">5</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>restOfEmployees
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre>
<p>As soon as the employee array is transformed to a signal, the parent component will observe several errors. For the moment, comment out the code inside  <code>getTeamRegularHoursTotal</code>, <code>getTeamOvertimeHoursTotal</code> and <code>employeeChange</code> methods as highlighted in the illustration given below.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript">  <span class="token comment">// parent-component.ts</span>
  <span class="token function">getTeamRegularHoursTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// this.employees.forEach(employee =&gt; total += employee.regularHours);</span>
    <span class="token keyword">return</span> total<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getTeamOvertimeHoursTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// this.employees.forEach(employee =&gt; total += employee.overtimeHours);</span>
    <span class="token keyword">return</span> total<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">employeeChange</span><span class="token punctuation">(</span>updatedEmployee<span class="token operator">:</span> Employee <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// if (updatedEmployee) {</span>
    <span class="token comment">//   const index = this.employees.findIndex(emp =&gt; emp.id === updatedEmployee.id);</span>
    <span class="token comment">//   if (index !== -1) {</span>
    <span class="token comment">//     this.employees[index] = updatedEmployee;</span>
    <span class="token comment">//   }</span>
    <span class="token comment">// }</span>
    <span class="token comment">// this.selectedEmployee = null;</span>
  <span class="token punctuation">}</span>
</code></pre>
<p>To render the application again, update the parent component template HTML and execute employee signal as per the code given below.</p>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token comment">&lt;!-- parent-component.html --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-center py-4 space-x-4 group border-b cursor-pointer hover:bg-gray-50<span class="token punctuation">"</span></span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>let employee of employees()<span class="token punctuation">"</span></span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectEmployee(employee)<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>It's time to transform logic to calculate the value of regular hours which are showing as zero currently. This leads to examination of another important type of signal known as "computed".</p>
<p>Computed signals<strong>,</strong> as the name implies, rely on other signals for their value. Their value updates as soon as underlying signals change, without the need of any additional code to handle the change.</p>
<p>Create a computed signal <code>teamRegularHoursTotal</code> as shown in the code below, which depends on the <code>employees</code> signal directly. Thus, whenever an <code>employees</code> signal changes, the value of <code>teamRegularHoursTotal</code> gets updated automatically.</p>
<p>Define the computed signal as shown in the code below, and ensure the computed dependency is imported from Angular's core package. Also, remove or comment out method <code>getTeamRegularHoursTotal</code> completely.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// parent-component.ts</span>
 teamRegularHoursTotal <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">employees</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>employee <span class="token operator">=&gt;</span> total <span class="token operator">+=</span> employee<span class="token punctuation">.</span>regularHours<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> total<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<p>Update the HTML template of the parent component to reflect this change and show total hours value.</p>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token comment">&lt;!-- parent-component.html --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-lg font-medium text-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Regular Hours: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>font-bold<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
{{teamRegularHoursTotal() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>Similarly, overtime hours can be transformed to a computed signal as well. Refer to the code below to update both the component code and its HTML template. Also, comment out or remove the <code>getTeamOvertimeHoursTotal</code> method completely.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// parent-component.ts</span>
 teamOvertimeHoursTotal <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">employees</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>employee <span class="token operator">=&gt;</span> total <span class="token operator">+=</span> employee<span class="token punctuation">.</span>overtimeHours<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> total<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token comment">&lt;!-- parent-component.html --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-lg font-medium text-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Overtime Hours: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>font-bold<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
{{teamOvertimeHoursTotal() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>It is time to convert the <code>selectedEmployee</code> variable in the parent component to a signal. Transform it using the code below:</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// parent-component.ts</span>
selectedEmployee <span class="token operator">=</span> <span class="token generic-function"><span class="token function">signal</span><span class="token generic class-name"><span class="token operator">&lt;</span>Employee <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>As soon as this change is made, the <code>selectEmployee</code> method in the parent component will have errors. These errors are a great opening to an important topic: changing values of a signal. Angular signals can be updated using the <code>set</code> or <code>update</code> API from signals.</p>
<p>As the name implies, the <code>set</code> method assigns a new value to a signal, and the <code>update</code> method updates the value of a signal. Use the <code>set</code> method to change the <code>selectedEmployee</code> signal value. You'll be seeing update method in the action soon.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// parent-component.ts</span>
<span class="token function">selectEmployee</span><span class="token punctuation">(</span>employee<span class="token operator">:</span> Employee<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>selectedEmployee<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>employee<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Along with this change, the parent component’s template needs to be updated. Update the code containing the child component as shown in the code below.</p>
<p>After this change, verify that the application is rendering properly and you are able to select an employee and see the details on the screen. This is important as because we'll be taking this signal transformation journey to the child component.</p>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token comment">&lt;!-- parent-component.html --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-200 order-1 md:order-2 mb-4 md:mb-0<span class="token punctuation">"</span></span>
      <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectedEmployee() !== null<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-child-component</span> <span class="token attr-name">[employee]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectedEmployee()<span class="token punctuation">"</span></span> <span class="token attr-name">(employeeChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>employeeChange($event)<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-child-component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>The child component receives the value of the selected employee through its input, which is currently defined using the <code>@Input</code> decorator. This can be transformed using a signal conveniently known as <code>input</code>. Change the employee variable to be of type <code>input</code> as shown in the code below. Comment out the code shown in <code>saveChanges</code> and <code>resetForm</code> method as highlighted.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// child-component.ts</span>
employee  <span class="token operator">=</span> <span class="token generic-function"><span class="token function">input</span><span class="token generic class-name"><span class="token operator">&lt;</span>Employee <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">saveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this.employee.regularHours = this.editedRegularHours;</span>
    <span class="token comment">// this.employee.overtimeHours = this.editedOvertimeHours;</span>
    <span class="token comment">// this.employeeChange.emit(this.employee);</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token function">resetForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this.editedRegularHours = this.employee.regularHours;</span>
    <span class="token comment">// this.editedOvertimeHours = this.employee.overtimeHours;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>The form inside the child component displays selected employee’s regular hours and overtime hours using two model variables: <code>editedRegularHours</code> and <code>editedOvertimeHours</code>.</p>
<p>These variables are no longer necessary and the inputs inside the form of the child components can be updated to use the signal’s value directly.</p>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token comment">&lt;!-- child-component.html --&gt;</span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> 
     <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> 
     <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>regularHours<span class="token punctuation">"</span></span> 
     <span class="token attr-name">[ngModel]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editedRegularHours<span class="token punctuation">"</span></span>
     <span class="token attr-name">(ngModelChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onRegularHoursChange($event)<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline<span class="token punctuation">"</span></span> 
 <span class="token punctuation">/&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> 
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> 
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>overtimeHours<span class="token punctuation">"</span></span> 
      <span class="token attr-name">[ngModel]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editedOvertimeHours<span class="token punctuation">"</span></span>
      <span class="token attr-name">(ngModelChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onOvertimeHoursChange($event)<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline<span class="token punctuation">"</span></span> 
  <span class="token punctuation">/&gt;</span></span>
</code></pre>
<p>The logic to capture updated values for regular and overtime hours can be transformed as well. Ideally, updating the code below should work but you will get an error as highlighted below.</p>
<p><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXf3Zhm_Buy_VvhnYrZcx4YBNFjxoA4jR47L75eLEE2An9xt-aHNWI7iO9uEFp7KlzfoofoUGjaSW6CR-raKXjuVe0_XDhl8SMfMWBTpiQ5eHIfQxoS5qqeFKcu3k3Rb246K8cB7xiIpK4ein7-4xBhkgeA?key=SIi3jhbWSizs2BNTxpZ_RQ" alt="Component Error" class="image--center mx-auto" width="718" height="195" loading="lazy"></p>
<p>The reason behind the error is that the <code>input</code> type signal can not be mutated with <code>set</code> and <code>update</code> methods. Angular provides a different kind of signal known as <code>model</code> to have input to components which can be mutated within the component itself. Change the employee to type <code>model</code> as seen below.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// child-component.ts</span>
employee <span class="token operator">=</span> <span class="token generic-function"><span class="token function">model</span><span class="token generic class-name"><span class="token operator">&lt;</span>Employee <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Update the overtime update method as shown in the code below. With this, the child component regains the ability to update regular and overtime hours values of the received employee from the parent component.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// child-component.ts</span>
  <span class="token function">onOvertimeHoursChange</span><span class="token punctuation">(</span>event<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>employee<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">employee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      overtimeHours<span class="token operator">:</span> event
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre>
<p>Currently, the child component is communicating back the changes to the parent component using the <code>@Output</code> decorator. Similar to the <code>input</code> and the <code>model</code>, Angular has a signal of type <code>output</code> to enable two way communication between child and parent components. Update <code>employeeChange</code> event to <code>output</code> type as seen below.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// child-component.ts </span>
employeeChange <span class="token operator">=</span> <span class="token generic-function"><span class="token function">output</span><span class="token generic class-name"><span class="token operator">&lt;</span>Employee <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>Update the <code>saveChanges</code> method and emit an updated employee object.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// child-component.ts </span>
 <span class="token function">saveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>employeeChange<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">employee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre>
<p>For the final step in the child component update the <code>resetForm</code> and <code>cancelChanges</code> methods to reflect the changes made as shown in the code below.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// child-component.ts   </span>
<span class="token function">cancelChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>employeeChange<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token function">resetForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>employee<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>Moving back to the parent component now, it is important to make changes to the template to ensure smooth communication between both components.</p>
<p>The <code>employee</code> input in the child component has changed to a <code>model</code> type input. A model has two ways of data binding. Make updates to the code as seen below to use banana in the box (special syntax <code>[( )]</code>, which is a shorthand for two-way data binding) notation for the input.</p>
<pre class="language-xml" tabindex="0"><code class="language-xml"><span class="token comment">&lt;!-- parent-component.html --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-200 order-1 md:order-2 mb-4 md:mb-0<span class="token punctuation">"</span></span>
    <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectedEmployee() !== null<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-child-component</span> <span class="token attr-name">[(employee)]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectedEmployee<span class="token punctuation">"</span></span> <span class="token attr-name">(employeeChange)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>employeeChange($event)<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-child-component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>It’s time to update the <code>employeeChange</code> method in the parent component so that updated hour values of the selected employee can be reflected back to the screen. </p>
<p>To achieve this, another key method used for mutating values can be leveraged. This is the <code>update</code> method, which takes in a function as argument instead of full value. The function passes the current value of the signal as the first parameter and returns the updated value of the signal.</p>
<p>Refer to the updated code for the  <code>employeeChange</code> method as seen below to understand this better.</p>
<pre class="language-typescript" tabindex="0"><code class="language-typescript"><span class="token comment">// parent-component.ts  </span>
<span class="token function">employeeChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">selectedEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>employees<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>employees <span class="token operator">=&gt;</span> employees<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>employee <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>employee<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">selectedEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          employee<span class="token punctuation">.</span>regularHours <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">selectedEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>regularHours<span class="token punctuation">;</span>
          employee<span class="token punctuation">.</span>overtimeHours <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">selectedEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>overtimeHours<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> employee<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>selectedEmployee<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre>
<p>With this change the entire transformation of the app to use signals is complete. Ensure all loads properly and all the functionality are working as expected as well.</p>
<h2 id="heading-conclusion">Conclusion</h2>
<p>Congratulations on completing this tutorial. During this journey, you have created regular a signal and updated its value using <code>set</code> and <code>update</code> methods.</p>
<p>You also learned how computed signals are defined and utilized. Additionally you have enabled communication between two components using <code>input</code>, <code>model</code> and <code>output</code> signals.</p>
<p>If you encounter any issues during this transformation journey, you can check the code in the <code>feature/signals</code> branch of the same repo you had cloned earlier. It is recommended that you follow along instead of copying the solution from this feature branch.</p>
<p>Once you feel confident about the signal types discussed above, continue your learnings by exploring RxJS Interop from the Angular team to manage your signal integration with RxJS observables.</p>
-->

---

<TagLinks />