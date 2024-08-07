---
lang: ko-KR
title: Understanding the CSS revert-layer keyword
description: Article(s) > Understanding the CSS revert-layer keyword
icon: fa-brands fa-css3-alt
category: 
  - CSS
  - Article(s)
tag: 
  - blog
  - blog.logrocket.com
  - css
head:
  - - meta:
    - property: og:title
      content: Article(s) > Understanding the CSS revert-layer keyword
    - property: og:description
      content: Understanding the CSS revert-layer keyword
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/blog.logrocket.com/understanding-css-revert-layer.html
prev: /programming/css/articles/README.md
date: 2024-04-24
isOriginal: false
cover: /images/content/blog.logrocket.com/understanding-css-revert-layer/banner.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CSS > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/css/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Understanding the CSS revert-layer keyword"
  desc="In this article, we’ll explore CSS cascade layers — and, specifically, the revert-layer keyword — to help you refine your styling strategy."
  url="https://blog.logrocket.com/understanding-css-revert-layer"
  logo="/images/content/blog.logrocket.com/favicon.png"
  preview="/images/content/blog.logrocket.com/understanding-css-revert-layer/banner.png"/>

In web development, achieving pixel-perfect designs across different browsers and devices can be challenging. These challenges could arise from anywhere — from styling for different device screens to overridden styles from somewhere else in our code and more.

![Understanding The Css Revert Layer Keyword, Part Of Css Cascade Layers](https://blog.logrocket.com/wp-content/uploads/2024/04/Understanding-CSS-revert-layer-nocdn.png)

Oftentimes, overridden styles can occur when our styles conflict due to specificity. When this happens, we could simply add the `!important` property to the style so it takes priority over others. But as the world of CSS continues evolving, better ways to solve these challenges are being introduced. One solution is CSS cascade layers.

In this article, we’ll explore CSS cascade layers — and, specifically, the `revert-layer` keyword — to help you refine your styling strategy. We’ll cover how cascade layers work and when to use them, how the `revert-layer` keyword comes into play and what its use cases are, and more.

---

## An overview of CSS cascade layers

[<FontIcon icon="fas fa-globe"/>Cascade layers](https://blog.logrocket.com/control-css-cascade-with-cascade-layers/) introduce the new at-rule of `@layer`. This at-rule is great when you’re working with multiple CSS sources where the author is allowed to define and order their CSS rule or layering scheme and avoid specificity conflicts.

Essentially, if and when you’re considering using [<FontIcon icon="fas fa-globe"/>the `!important` property](https://blog.logrocket.com/css-important-declaration-when-why/) in your CSS stylings, that’s the best time to use cascade layers, as this feature is highly relevant for such situations. Another example of when you should use cascade layers is when there are conflicting CSS selectors and specificity.

We’ll discuss more use cases for `cascade-layers` later. In the meantime, let’s see an example. In the code below, we have two cascade layers:

```css
@layer base, special;

@layer special {
    .item {
        color: red;
    }
}

@layer base {
    .item {
        color: blue;
    }
}
```

We defined two layer schemes — `base` and `special`. Similarly, we have ordered the layers such that `special` takes priority or importance over the `base` layer:

![List Of Three Items, All With Red Colored Text, Since Special Layer Styles Are Prioritized Over Base Styles](https://blog.logrocket.com/wp-content/uploads/2024/04/img1-List-three-items-red-layer-styles-prioritized-layer-base-styles.png)

This means that we can have multiple CSS sources or different layers. Then, instead of using selector specificity or the `!important` property, we can order our layers and override whatever styling we want.

As mentioned previously, in this article, the goal is to understand a cascade layer keyword called `revert-layer`. We’ll also be looking at some of its use cases. Note that we’ll be using certain CSS terminologies throughout this tutorial. For example:

- **User-agent** refers to the browser
- **User** refers to the site visitor
- **Author** is the developer (i.e. you)
- **User-agent origin** refers to the style origin or default styles of the browser
- **User origin** is the style origin containing any CSS that the user or site visitor has added
- **Author origin** is the style origin added by the developer (i.e. all styles found in the external stylesheet)

You can refer back to this terminology list as needed. Now, let’s dive into the `revert-layer` CSS keyword.

---

## What is `revert-layer` in CSS?

`revert-layer` is a CSS keyword or value that allows the property in a cascade layer to revert or roll back to the value of the matching property in a previous cascade layer. In other words, it rolls back to the initial value set by the author.

However, if there’s no matching styling set for that property, then the property reverts to the styling of the user-agent origin — that is, the default browser styles.

You can apply the `revert-layer` keyword to any CSS property, including the shorthand property `all`. Let’s see an example. Take a look at the code below:

```xml
/* index.html */

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        />
        <title>Understanding CSS revert-layer</title>
        <link
            rel="stylesheet"
            href="style.css"
        />
    </head>
    <body>
        <h1>Hello World</h1>
        <ul>
            <li class="item feature">Item one</li>
            <li class="item">Item two</li>
            <li class="item">Item three</li>
        </ul>
    </body>
</html>
```

In the code above, we have a heading element and a list of items. Now, let’s write our CSS:

```css
/* style.css */

@layer base, special;

@layer special {
    .item {
        color: red;
    }
}

@layer base {
    .item {
        color: blue;
    }
    .feature {
        color: green;
    }
}
```

Like in our previous example, we have two layers. As we also explained earlier, all items will take the `red` color because inside the `special` layer scheme — which takes the highest priority — the value of the `color` property is `red`:

![Setting Up The Revert Layer Keyword Demo With A List Of Three Items All With Red Colored Text Because Special Layer Is Prioritized Over Base Layer Styles](https://blog.logrocket.com/wp-content/uploads/2024/04/img2-Beginning-revert-layer-demo-list-three-items-red-layer-styles-prioritized-layer-base-styles.png)

If we reorder our layer to `*@layer*` `special, base;` then all items will become blue, excluding the first item, which will be green. This because of its specificity priority, as the `.feature` style comes after the `.item` style:

![Three List Items. First Item Has Green Text While Second And Third Items Have Blue Text Due To Specificity Priority, As The Feature Style Comes After The Item Style](https://blog.logrocket.com/wp-content/uploads/2024/04/img3-Three-list-items-first-item-green-second-third-items-blue-specificity-priority.png)

Now, to implement the `revert-layer` keyword, let’s add the styles below:

```css
/* style.css */

@layer base, special;

@layer special {
    .item {
        color: red;
    }
    .feature {
        color: revert-layer;
    }
}

@layer base {
    .item {
        color: blue;
    }
    .feature {
        color: green;
    }
}
```

Inside our `special` layer, we assign the color to the `revert-layer` value in the `.feature` item’s selector.

What happens is that every other color in the list of items becomes red, while the `.feature` item becomes green. This is because it reverts to the matching property of the previous cascade layer, which we assigned as `green`:

![List Of Three Items With Feature Item Assigned The Revert Layer Keyword In Its Color Property, Making First Item Text Green While Second And Third Items Are Red](https://blog.logrocket.com/wp-content/uploads/2024/04/img4-List-three-items-feature-item-assigned-revert-layer-color-value-becomes-green-remaining-items-red.png)

Let me explain further:

- The order of our layers prioritizes `@layer special` over `@layer base` — i.e., the styles in `@layer special` come before `@layer base`
- The value of the color for the `.feature` selector is `revert-layer` in `@layer special`
- Since the value is `revert-layer`, the color property for `.feature` goes to the previous layer to find a value. In this case, the previous layer is `@layer base`
- Inside the `@layer base`, there is a matching selector called `.feature` that also has a `color: green` property, which is the value it takes

Additionally, if we remove the `.feature` matching selector from `@layer base`, the item becomes blue. This is because it reverts to the user-agent origin, which is black. However, since it has another class called `item`, it becomes blue, as it takes that property value:

![List Of Three Items With Feature Matching Selector Removed, Turning First Item Blue While Second And Third Items Remain Red](https://blog.logrocket.com/wp-content/uploads/2024/04/img5-List-three-items-feature-matching-selector-removed-first-item-blue-item-class-remaining-items-red.png)

Conversely, if there’s no matching selector property, it reverts or rolls back to the user-agent origin styles. See the HTML below:

```html
  <ul>
    <li class="feature">Item one</li>
    <li class="item">Item two</li>
    <li class="item">Item three</li>
  </ul>
```

And here’s the CSS:

```css
@layer base, special;
@layer special {
    .item {
        color: red;
    }
    .feature {
        color: revert-layer;
    }
}
@layer base {
    .item {
        color: blue;
    }
}
```

Based on what we’ve learned so far, do you know what color each list item will be? Let’s see:

![List Of Three Items With No Matching Selector Property, Causing Color Property To Roll Back To User Agent Origin Styles. Result Is That First List Item Is Black While Remaining List Items Are Red](https://blog.logrocket.com/wp-content/uploads/2024/04/img6-List-three-items-first-item-black-rolled-back-user-agent-styles-remaining-items-red.png)

---

## Use cases for CSS `revert-layer`

We have seen and understood how the `revert-layer` works and how to use it. Now, let’s look at some use cases where it can come in handy. While `revert-layer` is still new and not widely used, it offers some unique advantages in specific scenarios.

### Modular styles

The first use case — [<FontIcon icon="fas fa-globe"/>modular styles](https://blog.logrocket.com/write-type-safe-css-modules/) — is what we’ve been exploring so far in the article. The `revert-layer` keyword is useful for reverting module or element styles:

```css
@layer base, special;

@layer base {
    .button {
        background-color: #4caf50;
        color: white;
        padding: 10px 30px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
}

@layer special {
    .button {
        background-color: revert-layer;
        color: revert-layer;
        border: revert-layer;
        border-radius: revert-layer;
        cursor: revert-layer;
        padding: 8px 20px;
    }
}
```

Here, we retained every other property and changed only the padding. The result will look like so:

![Use Case Of Revert Layer Keyword For Reverting Module Or Element Styles, Resulting In A Green Button](https://blog.logrocket.com/wp-content/uploads/2024/04/img7-Use-case-revert-layer-modular-styles-button-green-color.png)

### Global style reset

If you have used the `revert` keyword, you will know that it removes the styles applied in the author origin and rolls back the style to the user origin or user-agent origin.

To better understand this use case, let’s look at the difference between `revert` and `revert-layer` using the examples below.

First, here’s an example usage of the `revert` keyword:

```css
@layer base, special;

@layer special {
    .item {
        color: red;
    }
    .feature {
        color: revert;
    }
}
@layer base {
    .item {
        color: blue;
    }
}
```

In this scenario:

- All the items will be red since the `.item` selector has a `color: red` property
- However, the `.feature` selector, which takes priority due to specificity, will take the specified color. In this case, we are applying a `revert` keyword
- Then, it rolls the style back to the user or user-agent style, which is black because the default browser color style for all elements is black

The `revert` keyword doesn’t consider if there’s another layer with the same styling, it just rolls the styles back to the user or user-agent origin.

See the result of the code above in the image below:

![Use Case Of The Revert Layer Keyword For Resetting Global Styles, Rolling Styles Back To User Or User Agent Origin. Result Is That First List Item Is Black While Remaining Items Are Red](https://blog.logrocket.com/wp-content/uploads/2024/04/img8-List-three-items-first-item-black-second-third-items-red.png)

Now, let’s look at an example usage of the `revert-layer` keyword:

```css
@layer base, special;

@layer special {
    .item {
        color: red;
    }
    .feature {
        color: revert-layer;
    }
}
@layer base {
    .item {
        color: blue;
    }
}
```

In this usage of the `revert-layer` keyword, the `.feature` item will be styled blue. This is because it rolls the styles back to the previous layer; in our case, the item is styled `blue` in the `@layer base`. It only rolls back to the user and user-agent origin if there’s no similar selector in the previous layer. Here’s the result:

![Use Case Of Revert Layer Keyword Applied To Feature Item, Rolling Style Of First List Item Back To Layer Base Styles. Result Is That First List Item Is Blue While Remaining Items Are Red](https://blog.logrocket.com/wp-content/uploads/2024/04/img9-Usage-revert-layer-previous-example-turning-first-item-blue.png)

Moving on, let’s take the following example to see how we can use `revert-layer` as a global reset:

```css
&,
* {
    all: revert;
}

@layer base, special;

@layer special {
    .item {
        color: red;
    }
    .feature {
        color: revert-layer;
    }
}

@layer base {
    .item {
        color: blue;
    }
}
```

The result of this code is shown below. Just as we saw when we used `revert-layer`, it reset the full stylings to user-agent origin, which is the browser’s default style:

![Resetting Full Stylings To User Agent Origin, Resulting In All Three List Items Having Black Colored Text](https://blog.logrocket.com/wp-content/uploads/2024/04/img10-Reset-full-stylings-user-agent-origin-all-three-list-items-black.png)

However, `revert-layer` comes in handy because it only rolls back the styles to the previous origin, making it more relevant to use than `revert`. You can update the code like so:

```css
&,
* {
    all: revert-layer;
}

...
```

### Resetting styles within layers

We have seen that the `revert-layer` keyword can be used to roll back to the previous user-agent origin. Let’s look at a scenario where we want to introduce a new styling layer.

This scenario could happen due to a large and complex code base where we don’t want to have styling conflicts and ruin the designs. In this scenario, a good and efficient way to go about it is to move the current designs into a layer and then create a new layer.

See the code below:

```css
@layer oldStyles, newStyles;

@layer oldStyles {
    .item {
        color: red;
    }
    .feature {
        color: #008000;
    }
}

@layer newStyles {
    &,
    * {
        all: revert-layer;
    }

    /* ... new styles here */
    .feature {
        color: purple;
    }
}
```

We moved the old styles into a layer we called `@layer oldStyles`. Then, we created a new layer called `@layer newStyles` and started writing the new styles we wanted. This strategy allows elements to retain the old styles if we want them to, as we are reverting to the previous author origin:

![Demo Of Resetting Styles Within Layers, Resulting In First List Item Having Purple Colored Text While Second And Third List Items Remain Red](https://blog.logrocket.com/wp-content/uploads/2024/04/img11-Demo-resetting-styles-within-layers-first-item-purple-second-third-items-red.png)

This could also apply to style management or versioning.

---

## Browser compatibility for CSS `revert-layer`

CSS cascade layers, including the `revert-layer` keyword, offer promising capabilities for CSS architecture. However, it’s essential to consider browser compatibility. Additionally, `revert-layer` is not easily polyfillable, which further complicates its adoption in projects targeting a wide range of browsers.

Officially, [<FontIcon icon="fas fa-globe"/>CanIUse said in their documentation](https://caniuse.com/?search=revert-layer) that its browser support is limited. But having tested it myself, as of now, the `revert-layer` keyword is compatible and supported across multiple browsers like Chrome, Firefox, Opera, and Brave. Safari should also be supported.

You should first test it with your preferred browser to see if it is supported too.

### More great articles from LogRocket:

- Don't miss a moment with [<FontIcon icon="fas fa-globe"/>The Replay](https://lp.logrocket.com/subscribe-thereplay), a curated newsletter from LogRocket
- [<FontIcon icon="fas fa-globe"/>Learn](https://blog.logrocket.com/rethinking-error-tracking-product-analytics/) how LogRocket's Galileo cuts through the noise to proactively resolve issues in your app
- Use React's `useEffect` [<FontIcon icon="fas fa-globe"/>to optimize your application's performance](https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/)
- Switch between [<FontIcon icon="fas fa-globe"/>multiple versions of Node](https://blog.logrocket.com/switching-between-node-versions-during-development/)
- [<FontIcon icon="fas fa-globe"/>Discover](https://blog.logrocket.com/using-react-children-prop-with-typescript/) how to use the React children prop with TypeScript
- [<FontIcon icon="fas fa-globe"/>Explore](https://blog.logrocket.com/creating-custom-mouse-cursor-css/) creating a custom mouse cursor with CSS
- Advisory boards aren’t just for executives. [<FontIcon icon="fas fa-globe"/>Join LogRocket’s Content Advisory Board.](https://lp.logrocket.com/blg/content-advisory-board-signup) You’ll help inform the type of content we create and get access to exclusive meetups, social accreditation, and swag.

---

## Conclusion

We have seen how `revert-layer` works and how to use it. Understanding `revert-layer` and its potential use cases or applications can empower developers to leverage their capabilities effectively in projects where browser compatibility allows.

---

<TagLinks />