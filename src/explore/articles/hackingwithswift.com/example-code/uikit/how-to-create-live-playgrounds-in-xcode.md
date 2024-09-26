---
lang: ko-KR
title: "How to create live playgrounds in Xcode"
description: "Article(s) > How to create live playgrounds in Xcode"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to create live playgrounds in Xcode"
    - property: og:description
      content: "How to create live playgrounds in Xcode"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-live-playgrounds-in-xcode.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to create live playgrounds in Xcode | UIKit - free Swift example code",
  "desc": "How to create live playgrounds in Xcode",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-live-playgrounds-in-xcode",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>A reader emailed me to say they had enjoyed my books, and were considering applying for a scholarship to WWDC17. The process for this requires creating a live playground, and they were emailing to ask whether I had any tutorials on the process. </p>
<p>Well, I don’t. Or at least <em>didn’t</em>, because I wrote this one just to help you get started if you’re considering applying for the scholarship as well.</p>
<p>First up, a few general pointers:</p>
<ol>
<li>You need to be 13 years or older, and registered as an Apple developer.</li>
<li>You need to be a student of any age, or a member/graduate from a STEM organization. </li>
<li>You must submit a Swift playground created by you, and only by you, demonstrating something interesting. I’m providing some example code below to help you start, but your finished submission must be your own work.</li>
<li>Your playground must work entirely offline, and be no larger than 25MB when zipped.</li>
<li>Apple will pay for your lodging in San Jose, your WWDC ticket, and your breakfast and lunch. You’re responsible for getting there and buying dinner.</li>
<li>You can optionally write an essay (maximum 500 words) describing “how you've considered sharing your coding knowledge and enthusiasm for computer science with others” –&nbsp;but let’s face it, that’s basically required if you’re serious.</li>
</ol>
<p>Before we dive into the code, there’s one last thing: I’m not the judge of the WWDC scholarship program, and I don’t even who the judges are, but if I <em>were</em> a judge I’d actively be looking for people from under-represented groups. Previous years have seen Apple specifically call out groups such as App Camp for Girls, Black Girls Code, Girl Develop It, and more.</p>
<p>OK, enough chat: let’s look at how to build a live playground using Xcode 10 and Swift 4.</p>
<p>Start by launching Xcode, then choosing “Get started with a playground”. Choose an iOS blank template then name it whatever you please.</p>
<p>By default, Playgrounds look like you’ll see below – big and empty. </p>
<p><img class="hws" src="/img/hws/example-code-294-1.png" alt=""></p>
<p>Before we write any code, you need to enable the assistant editor by pressing Alt+Cmd+Return, or clicking the small overlapping circles button near the top-right of your Xcode window. This splits your screen so that you have code on the left, and a live preview of your results on the right.</p>
<p>Right now we don’t have anything to preview, so Xcode should look like the below:</p>
<p><img class="hws" src="/img/hws/example-code-294-2.png" alt=""></p>
<p>Tip: If your assistant editor is configured to appear below your code, you might find it easier to switch to a vertical layout for previewing reasons. Go to the View menu and choose Assistant Editor &gt; Assistant Editors On Right.</p>
<p>The first thing we’re going to do is set up a simple table view so we can see something useful in the assistant editor.</p>
<p>Delete all the existing code line in the playground, and replace it with this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">PlaygroundSupport</span>
<span class="token keyword">import</span> <span class="token class-name">UIKit</span>

<span class="token keyword">class</span> <span class="token class-name">WWDCMasterViewController</span><span class="token punctuation">:</span> <span class="token class-name">UITableViewController</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span></code></pre>
<p>The first import is new, and gives us access to live playground previewing. It then creates a new class called <code>WWDCMasterViewController</code> based on <code>UITableViewController</code>. It won’t do much just yet, but that’s OK –&nbsp;we’re just making sure everything works.</p>
<p>After that class, we need to write some simple code to create and present our custom view controller. To make things a little more interesting, we’ll wrap it inside a navigation controller so we can push and pop a detail view later on. Add this code now:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> master <span class="token operator">=</span> <span class="token class-name">WWDCMasterViewController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> nav <span class="token operator">=</span> <span class="token class-name">UINavigationController</span><span class="token punctuation">(</span>rootViewController<span class="token punctuation">:</span> master<span class="token punctuation">)</span></code></pre>
<p>The last thing to do is connect that <code>nav</code> constant to the playground’s live view. We already imported the PlaygroundSupport framework, so that’s just one line of code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token class-name">PlaygroundPage</span><span class="token punctuation">.</span>current<span class="token punctuation">.</span>liveView <span class="token operator">=</span> nav</code></pre>
<p>All being well, Xcode will build and run that playground and show something inside the assistant editor: a large, empty table view.</p>
<p><img class="hws" src="/img/hws/example-code-294-3.png" alt=""></p>
<p>There <em>is</em> a navigation bar at the top of the table view, but you can’t see it because it has the same color as the playground’s background.</p>
<p>So, let’s start by making the navigation bar a little more obvious – add this code to <code>WWDCMasterViewController</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    title <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Reasons I should attend WWDC"</span></span>
<span class="token punctuation">}</span></code></pre>
<p><img class="hws" src="/img/hws/example-code-294-4.png" alt=""></p>
<p>The navigation bar should now be visible, but of course the table view itself is still empty. To fix that, we need to think up some great reasons for you to attend WWDC. I’m sure you can think of a few (and perhaps you’ll even mention a few in your scholarship application!), but I’m going to give you a few to get you started.</p>
<p>We’re going to store all these reasons in a property of <code>WWDCMasterViewController</code>, so we can reference them in the table view. So, add this property to our class now:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> reasons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"the labs are great"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"the sessions teach new things"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"the people are awesome"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"the keynote rocks"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"I must hug Joe Groff"</span></span><span class="token punctuation">]</span></code></pre>
<p>We want our table view to show one of those reasons in each of its rows, so we can tell it to load as many rows as we have reasons. This is done by implementing the <code>numberOfRowsInSection</code> method, making it return <code>reasons.count</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> numberOfRowsInSection section<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> reasons<span class="token punctuation">.</span>count
<span class="token punctuation">}</span></code></pre>
<p>When that code runs, you’ll probably get a large black screen in the assistant editor, along with lots of errors in the debug area. That’s OK: it’s just because we’ve told iOS we want lots of rows, but <em>haven’t</em> told iOS what’s <em>in</em> those rows.</p>
<p>To fix this problem, we need to implement the <code>cellForRowAt</code> method so that it grabs a reusable table view cell (or creates one if it doesn’t already exist), and configures it to show our Incredibly Awesome Reason for Attending WWDC.</p>
<p>Here’s the first part of the method –&nbsp;add this to the <code>WWDCMasterViewController</code> class:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> cellForRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UITableViewCell</span> <span class="token punctuation">{</span>
    <span class="token comment">// attempt to dequeue a cell</span>
    <span class="token keyword">var</span> cell<span class="token punctuation">:</span> <span class="token class-name">UITableViewCell</span><span class="token operator">!</span>
    cell <span class="token operator">=</span> tableView<span class="token punctuation">.</span><span class="token function">dequeueReusableCell</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> cell <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span>
        <span class="token comment">// none to dequeue – make a new one</span>
        cell <span class="token operator">=</span> <span class="token class-name">UITableViewCell</span><span class="token punctuation">(</span>style<span class="token punctuation">:</span> <span class="token punctuation">.</span>subtitle<span class="token punctuation">,</span> reuseIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Cell"</span></span><span class="token punctuation">)</span>
        cell<span class="token operator">?</span><span class="token punctuation">.</span>accessoryType <span class="token operator">=</span> <span class="token punctuation">.</span>disclosureIndicator
    <span class="token punctuation">}</span>

    <span class="token comment">// configure cell here</span>

    <span class="token keyword">return</span> cell
<span class="token punctuation">}</span></code></pre>
<p>That creates cells by hand because I’ve made it specifically request the <code>.subtitle</code> cell style to make things look a little more interesting.</p>
<p>That should fix our problem, and when the code runs now you ought to see five small disclosure arrows along the right edge of your table view. There’s no other content in there, but you can try clicking one of those five rows to see it highlight gray.</p>
<p><img class="hws" src="/img/hws/example-code-294-5.png" alt=""></p>
<p>The next step is to list all our Totally Unbeatable Reasons for Attending WWDC, which is just a matter of pulling one item out of the table and drawing it inside the table view cell. Add this code where the <code>// configure cell here</code> comment is:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> reason <span class="token operator">=</span> reasons<span class="token punctuation">[</span>indexPath<span class="token punctuation">.</span>row<span class="token punctuation">]</span>
cell<span class="token punctuation">.</span>detailTextLabel<span class="token operator">?</span><span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"I want to attend because </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">reason</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span>
cell<span class="token punctuation">.</span>textLabel<span class="token operator">?</span><span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Reason #</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">indexPath<span class="token punctuation">.</span>row <span class="token operator">+</span> <span class="token number">1</span></span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span></code></pre>
<p><img class="hws" src="/img/hws/example-code-294-6.png" alt=""></p>
<p>That’s our first view controller finished, but of course this is a <em>live</em> view so what we want to do is interact with the app at least a little. To demonstrate that, we’re going to create a second view controller that gets pushed on-screen from the first, and will show whichever Absolutely Foolproof Reason for attending WWDC was selected.</p>
<p>Start by adding this class directly after the existing <code>WWDCMasterViewController</code> class:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">WWDCDetailViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string-literal"><span class="token string">""</span></span>
<span class="token punctuation">}</span></code></pre>
<p>With that in place, you can present a second view controller by implementing the <code>didSelectRowAt</code> method in <code>WWDCMasterViewController</code>, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> didSelectRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> text <span class="token operator">=</span> tableView<span class="token punctuation">.</span><span class="token function">cellForRow</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> indexPath<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">.</span>detailTextLabel<span class="token operator">?</span><span class="token punctuation">.</span>text <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token keyword">let</span> detail <span class="token operator">=</span> <span class="token class-name">WWDCDetailViewController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    detail<span class="token punctuation">.</span>message <span class="token operator">=</span> text
    navigationController<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">pushViewController</span><span class="token punctuation">(</span>detail<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That pulls out the text from the cell that was tapped, creates a new detailed view controller, sets its <code>message</code> property to the cell text, then pushes it onto the navigation controller stack.</p>
<p>If you give it a try, you’ll see this sort of works, but looks wrong: a black screen is pushed onto the navigation controller, and the previous view controller doesn’t animate away correctly.</p>
<p><img class="hws" src="/img/hws/example-code-294-7.gif" alt=""></p>
<p>To fix this, we need to tell <code>WWDCDetailViewController</code> how to load its view by adding a <code>loadView</code> method. This doesn’t need to do much: we’ll create an empty <code>UIView</code> with a white background color, and set a default title so there’s something in the navigation bar.</p>
<p>To make that work, add this code to the <code>WWDCDetailViewController</code> class now:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">loadView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    title <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Please let me go!"</span></span>
    view <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    view<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>white
<span class="token punctuation">}</span></code></pre>
<p>When you try tapping a table cell now, the animation should look much better.</p>
<p><img class="hws" src="/img/hws/example-code-294-8.gif" alt=""></p>
<p>The final step is to do something interesting with the detail view controller. We already set its <code>message</code> property, so let’s make that text display.</p>
<p>There are a number of ways you could do this, but Apple specifically calls out “technical accomplishment” and “creativity of ideas” in its scholarship details. Clearly I’m not going to do this for you (not least because it would disqualify you from entering!) but at the same time it would be rather dull of me just to show some fixed text in this demonstration.</p>
<p>So, while you’re here let’s learn something new: UIKit dynamics. This lets you attach physical properties to your UIKit views to make them move a little more naturally on the screen. </p>
<p>To finish our detail view controller, we’re going to split the message up into individual words, make each word into a <code>UILabel</code>, then make those labels fall down our view using a gravity effect. Trust me: it’s easier than you think.</p>
<p>First, you need to add a property to <code>WWDCDetailViewController</code> that will store a reference to our <code>UIDynamicAnimator</code> object. This is what tracks our dynamic effects (“fall down with gravity”, “bounce off other things”) over time.</p>
<p>Add this property now:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">var</span> animator<span class="token punctuation">:</span> <span class="token class-name">UIDynamicAnimator</span><span class="token operator">?</span></code></pre>
<p>Now for the fun part. When our view has finished loading fully and sized itself, we’re going to do the following:</p>
<ol>
<li>Split our <code>message</code> property up into words.</li>
<li>Create a new <code>UILabel</code> array, starting empty.</li>
<li>Go over every word in our message, and convert it to a <code>UILabel</code> with a nice and large font.</li>
<li>Position the word labels one above the other, in the horizontal center of the screen.</li>
<li>Create a <code>UIGravityBehavior</code> object that’s attached to all our labels, and add that to our <code>animator</code> property.</li>
<li>Create a <code>UICollisionBehavior</code> object that’s also attached to all our labels, and add that to our <code>animator</code> property as well.</li>
<li>Make the collision behavior use view bounds as boundaries –&nbsp;i.e., make sure our views stay on the screen.</li>
</ol>
<p>The easiest place to put this code is inside the <code>viewDidLayoutSubviews()</code> method, because at that point our main <code>UIView</code> will have its <code>frame</code> value set correctly.</p>
<p>So, to finish up you need to add one more method to <code>WWDCDetailViewController</code> –&nbsp;I’ve made the comments match my numbers above:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLayoutSubviews</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> animator <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

    <span class="token comment">// 1: split the message up into words</span>
    <span class="token keyword">let</span> words <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">components</span><span class="token punctuation">(</span>separatedBy<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">" "</span></span><span class="token punctuation">)</span>

    <span class="token comment">// 2: create an empty array of labels</span>
    <span class="token keyword">var</span> labels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">UILabel</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 3: convert each word into a label</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>index<span class="token punctuation">,</span> word<span class="token punctuation">)</span> <span class="token keyword">in</span> words<span class="token punctuation">.</span><span class="token function">enumerated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> label <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        label<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">preferredFont</span><span class="token punctuation">(</span>forTextStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>title1<span class="token punctuation">)</span>

        <span class="token comment">// 4: position the labels one above the other</span>
        label<span class="token punctuation">.</span>center <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> view<span class="token punctuation">.</span>frame<span class="token punctuation">.</span>midX<span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">50</span> <span class="token operator">+</span> <span class="token class-name">CGFloat</span><span class="token punctuation">(</span><span class="token number">30</span> <span class="token operator">*</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span>
        label<span class="token punctuation">.</span>text <span class="token operator">=</span> word
        label<span class="token punctuation">.</span><span class="token function">sizeToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span>

        labels<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 5: create a gravity behaviour for our labels</span>
    <span class="token keyword">let</span> gravity <span class="token operator">=</span> <span class="token class-name">UIGravityBehavior</span><span class="token punctuation">(</span>items<span class="token punctuation">:</span> labels<span class="token punctuation">)</span>
    animator <span class="token operator">=</span> <span class="token class-name">UIDynamicAnimator</span><span class="token punctuation">(</span>referenceView<span class="token punctuation">:</span> view<span class="token punctuation">)</span>
    animator<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">addBehavior</span><span class="token punctuation">(</span>gravity<span class="token punctuation">)</span>

    <span class="token comment">// 6: create a collision behavior for our labels</span>
    <span class="token keyword">let</span> collisions <span class="token operator">=</span> <span class="token class-name">UICollisionBehavior</span><span class="token punctuation">(</span>items<span class="token punctuation">:</span> labels<span class="token punctuation">)</span>

    <span class="token comment">// 7: give some boundaries for the collisions</span>
    collisions<span class="token punctuation">.</span>translatesReferenceBoundsIntoBoundary <span class="token operator">=</span> <span class="token boolean">true</span>
    animator<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">addBehavior</span><span class="token punctuation">(</span>collisions<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>Note: I added a <code>guard</code> statement in there so the method is run only once.</p>
<p>When you run the code now, you should be able to tap a row to see the words fall down and bounce around in the detail view controller –&nbsp;what’s not to like?</p>
<p><img class="hws" src="/img/hws/example-code-294-9.gif" alt=""></p>
<p>So, at this point you have a table view, a navigation controller, a detail view being presented with animation, plus some UIKit dynamics –&nbsp;more than enough, I hope, to at least get you out of first gear when it comes to applying for a WWDC scholarship.</p>
<p>As a reminder, Apple really does want to see some sort of technical accomplishment and creativity –&nbsp;you’ve seen how to create an interactive live view here, but you should aim significantly higher. Don’t be afraid to use SpriteKit. Add your own images and audio (within the 25MB limit!). Try to make something delightful, no matter how small.</p>
<p>Good luck!</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/games/how-to-create-a-spritekit-texture-atlas-in-xcode">How to create a SpriteKit texture atlas in Xcode</a></li><li><a href="/example-code/xcode/how-to-load-assets-from-xcode-asset-catalogs">How to load assets from Xcode asset catalogs</a></li><li><a href="/example-code/xcode/how-to-create-exception-breakpoints-in-xcode">How to create exception breakpoints in Xcode</a></li><li><a href="/example-code/xcode/how-to-debug-view-layouts-in-xcode">How to debug view layouts in Xcode</a></li><li><a href="/example-code/xcode/how-to-make-xcode-play-sounds-while-debugging">How to make Xcode play sounds while debugging</a></li></ul>
-->

:::

---

<TagLinks />