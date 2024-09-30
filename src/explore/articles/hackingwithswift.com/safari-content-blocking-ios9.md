---
lang: ko-KR
title: "Safari Content Blocking in iOS: a tutorial by example"
description: "Safari Content Blocking in iOS: a tutorial by example"
icon: fa-brands fa-swift
category:
  - Swift
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - xcode
  - safari
head:
  - - meta:
    - property: og:title
      content: "Safari Content Blocking in iOS: a tutorial by example"
    - property: og:description
      content: "Safari Content Blocking in iOS: a tutorial by example"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/safari-content-blocking-ios9.html
prev: /programming/swift/articles/README.md
date: 2015-06-12
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Swift > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/swift/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Safari > Article(s)",
  "desc": "Article(s)",
  "link": "/tool/safari/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "Safari Content Blocking in iOS: a tutorial by example – Hacking with Swift",
  "desc": "Safari Content Blocking in iOS: a tutorial by example",
  "link": "https://hackingwithswift.com/safari-content-blocking-ios9",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

---

## How to write a content blocker extension in 10 minutes (and never see the Daily Mail again)

::: note This is a tutorial explaining how to make your own content blocker.

If all you want to do is <u>install</u> a content blocker, click here for a step-by-step tutorial: [How to install an ad blocker in Safari for iOS 9](/explore/articles/hackingwithswift.com/safari-content-blocking-ios9-install.md).

:::

If you already read my article discussing [all the new features for developers in iOS 9](/explore/articles/hackingwithswift.com/ios9.md) you'll know there's lots of great new stuff for us to play with, and I expect quite a few major new apps will be built on the back of the release..

One of the new features that has been introduced is the ability to write extensions for Safari that block content. This has been massively misreported in mainstream media, with many saying that Apple is introducing ad blocking with iOS 9. That isn't at all what has happened, as you will learn in this mini tutorial.

First I'll talk about what Apple has actually introduced, then I'll walk you through how to create your own content blocker for iOS 9, and then I want to talk a little about what it means for ad blockers.

But before any of that, I want to make one thing clear: I'm not taking a stance for or against ad blockers in this tutorial. You get to do what you want on your computer, and you live with the consequences. Hacking with Swift has its running costs paid for using very unobtrusive adverts, so obviously I hope that if you do use an ad blocker you choose to whitelist this site, but if you block the ads here then that's your call – I'm just happy my work is useful to you!

---

## What Apple has actually announced in iOS 9

Safari for OS X has an extensions system where developers could use JavaScript and CSS to hook into events inside the web browser. Ad blocking extensions were written around an event called `onBeforeLoad`, which meant "I'm about to load a document: what should I do?"

In the case of AdBlock Plus, probably the most popular ad blocking extension in the world, they went further: the extension injects a giant stylesheet into the web browser for every HTML frame on a site. This adjusted layouts and made absolutely certain that ads were gone and that the page didn't have massive holes in.

Blocking ads saves a lot of bandwidth, and also saves a lot of CPU time and RAM: no more Flash animations, no more auto-playing movies, and no more fixed skyscraper adverts that cause web page scrolling to stutter. But the AdBlock Plus rules are so complicated – almost 50,000 of them – that it would often take far more RAM to browse a page with AdBlock turned on than with it turned off. You can read a detailed discussion of [<FontIcon icon="fa-brands fa-firefox"/>why AdBlock Plus is slow](https://blog.mozilla.org/nnethercote/2014/05/14/adblock-pluss-effect-on-firefoxs-memory-usage/) if you are so inclined.

This was never going to work on mobile: although they definitely succeed in blocking adverts, the performance cost of ad blockers is so high to make it unworkably slow on mobile. Plus, the very nature of ad blockers requires the ad block extension to know every page you're visiting and what you did there, which is hardly a pleasing thing to think about.

So, Apple introduced a solution: content blocking Safari extensions. They introduce a way to programmatically determine what websites users can visit and what content can be shown, but using a dramatically new model that offers significant performance enhancements and – best of all – absolute user privacy. It's such an improvement that they are immediately making it available on OS X, replacing the existing `onBeforeLoad` system.

::: info Apple has not announced ad blocking in iOS 9.

It *has* announced a new method of filtering data that could, with vast amounts of work, be used to build an ad blocking system. Of course, the modern definition of "one man year" is "365 Reddit users working overnight," so even the vast amounts of work might turn out to be trivial if massively crowdsourced – we'll have to see.

:::

Anyway, let's build a simple content blocker so you can see for yourself what it's capable of.

---

## How to build your own Safari content blocker in iOS 9

We're going to write a content blocker extension that blocks the Daily Mail. It's not a website I enjoy reading, but the nature of the web is such that you click a shortened URL and you're kind of playing Daily Mail roulette: will this be an informative, useful site that I might even return to later, or will it be the Daily Mail, full of stories that require brain bleach after reading them?

I'm not going to say any more about the Daily Mail because you're here for the coding rather than my opinions, but you can watch the video below to get an idea the kind of website it is. Please go ahead and write your content blocker to block whatever sites you want to avoid.

<VidStack src="youtube/r9dqNTTdYKY" />

Still here? OK. We're going to write an extension that blocks the Daily Mail, and it's going to be so trivial that you'll probably want to create your own content blocker straight away. No, seriously: Apple really did an incredible job with this technology, so I expect to see a variety of content blockers ready by iOS 9 launch day – if yours is one, [<FontIcon icon="fa-brands fa-x-twitter"/>let me know: @twostraws on Twitter](http://x.com/twostraws)!

::: warning

You need to install Xcode 7, which is currently in beta. Amazingly, you don't need any Swift code for this: it's all JSON. Sorry about that!

:::

Fire up Xcode, then create a new iOS project using the Single View App template. Click Next and name it NoMoreMail and choose any device you like, then click Next and Create.

Safari Content Blockers are written almost entirely in JSON, which means we need no Swift code and no storyboard. But we do need to create a new target for our extension – this is because it lives as separate binary code inside your app bundle. So, go to File > New > Target, then choose iOS > Application Extension > Content Blocker Extension and click Next. For Product Name enter "ContentBlocker", then click Finish.

When you create any kind of extension in Xcode, you'll be asked whether you want to activate the new scheme – an alert saying "Activate Content Blocker scheme?" will appear. Please click Cancel, otherwise it gets a little fussy deploying the app.

On the left of the Xcode window you should need see a yellow folder called "ContentBlocker", and if you expand that you'll see three files:

- .<FontIcon icon="iconfont icon-json"/>`blockerList.json` contains the list of things to block, written in JavaScript Object Notation (JSON)
- .<FontIcon icon="fa-brands fa-swift"/>`ActionRequestHandler.swift` contains a tiny amount of Swift required to bootstrap your extension. If you know Swift you can add features here, but you'll need to use Swift 2. If you missed it, you can read my [introduction to Swift 2 tutorial](/explore/articles/hackingwithswift.com/swift2.md) first.
- **Info.plist** contains the settings for the app extension.

Of those three, we'll only use the first one. Select it now and you'll see the following:

```json
[
  {
    "action": {
      "type": "block"
    },
    "trigger": {
      "url-filter": "webkit.org/images/icon-gold.png"
    }
  }
]
```

The first symbol, `[`, symbolises the start of an array. The second symbol, `{`, symbolises the start of a dictionary. You then have key value pairs, specified as strings. So, that small amount of JSON tells us there is an array of objects, currently filled with one dictionary. That dictionary contains two keys, "action" and "trigger", which are in turn dictionaries. The "action" dictionary contains a "type" key with the value "block", and the "trigger" dictionary contains a "url-filter" key with the value "webkit.org/images/icon-gold.png".

I'm not going to claim that JSON is easy to read, but at least the default example uses lots of whitespace so you can see what's going on: this rule will block one particular example image.

Press <kbd>Cmd</kbd>+<kbd>R</kbd> to build and run your app. The iOS Simulator will launch, and you'll be left staring at a blank screen – or at least you ought to be. My Xcode 7 beta is a bit temperamental and sometimes I need to <kbd>Cmd</kbd>+<kbd>R</kbd> again after five seconds or so.

Anyway, that white screen is your app. We don't care about the app, because that's a whole other world. Of course, if you want to [learn how to make apps for iPhone and iPad](https://hackingwithswift.com) you've come to the right site!

Instead, I want you to press <kbd>Shift</kbd>+<kbd>Cmd</kbd>+<kbd>H</kbd> in the iOS Simulator to return to the home screen. Now swipe to the left to find the Settings app, then choose Safari > Content Blockers and you should see NoMoreMail listed in there. It's off by default, but just flick the switch next to it and the content blocker becomes active. What's more, it becomes active inside Safari, and inside any apps that use [the new iOS 9 `SFSafariViewController`](/explore/articles/hackingwithswift.com/read/32/overview.md).

When you flicked that switch, iOS animated it from white to green. But behind the scenes a huge amount more happened: it ran your extension, fetched out the blockerList.json file, and compiled it into an optimized form representing all your rules. That optimized form is what's given to Safari, which is why this new model is so much faster – extensions don't link into Safari at all, they just provide rules once, up front, then let Safari do the rest.

This should also show you how Apple has managed to introduce content blockers without compromising on privacy: apps tell Safari the kind of content that should be blocked, but they do it indirectly and the communication only ever flows one way: apps have no knowledge of any user behavior whatsoever. Again, just in case anyone from Apple is reading this: you did a great job!

Anyway, back to the tutorial: if you flick that switch off then on again, iOS will re-read your rules. You will need to do this after every change in this tutorial, otherwise your new rules won't be shown. If you want to trigger this from your Swift app, you should import SafariServices then call `SFContentBlockerManager.reloadContentBlockerWithIdentifier`.

Let's go ahead and update the blockerList.json file to have our first pass at blocking the Daily Mail, and to do that I want to walk you through the various options available to you:

- Each rule contains an action and a trigger, with the action determining what to do when the trigger conditions are met.
- The trigger is made up of several interesting fields that let you specify a broad or narrow match for web content:
  - **url-filter** is a regular expression that will be checked against the current site's URL.
  - **url-filter-is-case-sensitive** should be either true or false, and decides whether the URL filter is case sensitive. If you don't use this, the URL filter is case insensitive, meaning that "ABC" and "abc" are considered the same.
  - **resource-type** is an array containing strings like "style-sheet", "image", "script" and "font", and lets you filter only certain types of media.
  - **load-type** is an array of strings. You can use either "first-party" (applies to things loaded from the current site) or "third-party" (applies to things loaded anywhere but the current site).
  - **if-domain** and its counterpart **unless-domain** let you specify one particular website to include or exclude from the URL filter. Remember, the URL filter is run on the entire URL string, not just the domain name.
- There are three main actions types: `block`, `block-cookies` and `css-display-none`. The first and the last are obviously the most powerful, but I'm sure the second one is of interest to some.
- If you're using the `css-display-none` action type, you can also provide a `selector` value for your action. This gets run on the document once it has been downloaded, and can be any valid CSS selector up to and including the new [<FontIcon icon="fas fa-globe"/>CSS selectors level 4 definition](http://dev.w3.org/csswg/selectors-4/).
- There is a fourth special action type called `ignore-previous-rules` and it lets you specify an override if some other conditions match.

The URL filter value is required, as is the action type and the action selector if you're using the `css-display-none` action type. Other than those, the rest are optional.

That's all you need to know to block the Daily Mail, so let's write a quick first draft now. Go back to blockerList.json and change its contents to this:

```json
[
  {
    "action": {
      "type": "block"
    },
    "trigger": {
      "url-filter": ".*dailymail.*"
    }
  }
]
```

As I said, the URL filter is a regular expression, which is a way of representing character searches in a way that looks like line noise. In this case, we're using the regular expression `.*` to mean "any text", so our trigger will match "a URL that has any text, then dailymail, then any other text."

This is a bit like killing a fly by beating it to death with a loaded Uzi, but it's just our first draft and I want to make sure you have everything working.

So, press <kbd>Cmd</kbd>+<kbd>R</kbd> to launch your app, then press <kbd>Shift</kbd>+<kbd>Cmd</kbd>+<kbd>H</kbd> to go to Settings, then find and toggle your content blocker in the Safari settings. Remember: you need to do this every time you want iOS to re-read your blockerList.json file.

And now to take a small risk: launch Safari and go to [<FontIcon icon="fas fa-globe"/>dailymail.co.uk](www.dailymail.co.uk). If you've followed the steps above correctly, you'll see a blank page – Safari will simply refuse to load the page.

This is of course a huge victory in itself, but it's not perfect. For example, a legitimate URL like http://theguardian.com/media/dailymail leads to a page on The Guardian discussing the Daily Mail, which might be of interest to you. Of course, if you're perfectly happy nuking the Daily Mail from all parts of the mobile web, then stop here!

To fix this "problem", we're going to make the URL filter more precise. Specifically, we're going to check for:

- A URL scheme of `http://` or `https://`
- A www subdomain that may or may not be present
- The exact string "dailymail" following the above
- Then any other text after it

As regular expressions go this is a pretty easy one: change your URL filter to this:

```json
"url-filter": "https?://(www.)?dailymail.*"
```

You should be able to try reloading the page (once you toggle off then off your content blocker!) and the Daily Mail should still be blocked, but if you try a search for "Daily Mail" and click one of the other results, it should be OK.

---

## Safari content blockers using CSS selectors

As you can see, outright blocking page loads is easy, but you already know enough to block parts of pages loading too - that original rule you wrote would allow web pages that didn't have "dailymail" somewhere in their URL, but if they tried to load images or stylesheets with that name then those individual resources would have been blocked.

Safari content blockers let us go a step further and drill down into the content of pages to look for things to block, and that's where the `css-display-none` action comes in. This lets you specify a CSS selector, which is a way of finding elements on a page, and hide them entirely.

To demonstrate this, I'm going to take my Daily Mail blocker to the next level: I don't even want to see links that point to the Daily Mail site.

This is a particularly easy example to work with, because you don't need much in the way of HTML or CSS knowledge. Web links are created using the `a` element in HTML, but the exact link is specified using a `href` attribute, like this:

```html
<a href="http://www.dailymail.co.uk/thing-you-dont-want-to-read">click here to get angry</a>
```

CSS selectors let you work with element names, IDs, types and attributes, and we want to focus on the last two: we want to write a CSS selector that matches any web link that points to the Daily Mail.

If you're a web developer you'll know you can create some very powerful selectors indeed, but our needs are quite simple – replace your current blockerList.json file with this:

```json
[
  {
    "action": {
      "type": "css-display-none",
      "selector": "a[href*='www.dailymail']"
    },
    "trigger": {
      "url-filter": ".*"
    }
  }
]
```

That matches all `a` page elements that have a `href` attribute containing the string "www.dailymail". It uses the `.*` URL filter, which means it applies to all websites. Then it uses the `css-display-none` action type to hide any elements that match the selector.

You're done! Try searching for "daily mail" in Google and you'll see all the links are gone – I hope you'll agree this stuff is as easy as it could be!

It's worth adding that there are other ways to be directed to a website than through clicking hyperlinks, so if you want to block a particular site you should block it and its links together – do both rules, not just one.

If you want to try more advanced CSS selectors, I suggest you take advantage of Safari's developer tools. Launch Safari then look for the Develop menu item. If you don't see it, choose Safari > Preferences, then click the Advanced button and select "Show Develop menu in menu bar".

From that Develop menu bar you should see Simulator then the name of the web page the simulator is currently looking at in Safari/iOS. If you click that, Safari/Mac will show you all the HTML in the Safari/iOS page, and you can hover your mouse over various page elements to see them highlighted in the iOS Simulator – it's a great way to find elements you want to block, then look for a good CSS selector.

---

## What now for ad blockers?

Safari content blocking is a huge innovation: the fact that the system can optimize the rules ahead of time rather than trying to interact with an extension is a huge win for performance. Then of course there's privacy: no one needs to know what web pages you visit, which is just how it should be.

But – and this is a huge but – it's not quite good enough to implement AdBlock Plus. The developers of AdBlock Plus have posted a blog entry [<FontIcon icon="fas fa-globe"/>explaining why the implementation is not sufficient for their purposes](https://adblockplus.org/blog/content-blocking-in-safari-9-and-ios-9-good-news-or-the-death-knell-of-ad-blocking-on-safari), but it's not a huge surprise - the content blocking system is a complete re-engineering of what's come before, so if AdBlock Plus is going to exist on iOS 9 they will have to re-engineer as well. Not impossible, but not easy either.

Complicating things somewhat is that Apple has said "if the rule compiler detects that a set of rules would negatively impact user experience, it refuses to load them and returns an error." Remember that site I linked to that said AdBlock Plus was slow? Yeah, that. Helpfully, one of the WebKit engineers confirmed to me that they expect to allow 50,000(!) rules per extension, and that's a rule that applies across all devices that run iOS 9.

Keep in mind we're only in the early days of iOS 9 beta testing, and Apple are likely to make changes in future betas. I don't know whether they will implement the changes AdBlock Plus are asking for, but I feel confident they will continue to work on performance – no one wants their Safari web browser to run slowly because three or four content blockers are running, so I think it likely Apple will continue to push hard for more optimizations.

That's it from me. If you have any questions or comments, you can [<FontIcon icon="fa-brands fa-x-twitter"/>find me on Twitter: @twostraws](http://x.com/twostraws). If you'd like to read more, here are some links that are likely to be useful:

```component VPCard
{
  "title": "What's new in iOS 9 for developers – Hacking with Swift",
  "desc": "What's new in iOS 9 for developers",
  "link": "/explore/articles/hackingwithswift.com/ios9.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "What's new in Swift 2.0 – Hacking with Swift",
  "desc": "What's new in Swift 2.0",
  "link": "/explore/articles/hackingwithswift.com/swift2.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
```

```component VPCard
{
  "title": "Project 32: SwiftSearcher",
  "desc": "Add your app's content to iOS 9's Spotlight search and take advantage of the new Safari integration.",
  "link": "/explore/articles/hackingwithswift.com/read/32/overview.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

<SiteInfo
  name="Introduction to WebKit Content Blockers | WebKit"
  desc="Describing content blocking rules in a structured format ahead-of-time, rather than running extension-provided code."
  url="https://webkit.org/blog/3476/content-blockers-first-look/"
  logo="https://webkit.org/favicon.ico"
  preview="https://webkit.org/wp-content/themes/webkit/images/twitter-card.png"/>

---

<TagLinks />