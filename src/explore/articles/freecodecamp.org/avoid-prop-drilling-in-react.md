---
lang: ko-KR
title: How to Avoid Prop Drilling in React
description: Article(s) > How to Avoid Prop Drilling in React
icon: fa-brands fa-react
category: 
  - Node.js
  - React.js
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
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Avoid Prop Drilling in React
    - property: og:description
      content: How to Avoid Prop Drilling in React
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/avoid-prop-drilling-in-react.html
prev: /programming/js-react/articles/README.md
date: 2023-11-07
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w1000/2023/11/Purple-Creative-Livestream-YouTube-Thumbnail.png
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

[[toc]]

---

<SiteInfo
  name="How to Avoid Prop Drilling in React"
  desc="In order to write scalable, reusable, and maintainable applications with React, you'll need to go beyond the surface of using React components, useEffect, useContext, useState, and the like. It involves learning in detail how React works in more depth.  And if you don't properly understand these key React concepts..."
  url="https://freecodecamp.org/news/avoid-prop-drilling-in-react/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w1000/2023/11/Purple-Creative-Livestream-YouTube-Thumbnail.png"/>

In order to write scalable, reusable, and maintainable applications with React, you'll need to go beyond the surface of using React components, useEffect, useContext, useState, and the like. It involves learning in detail how React works in more depth. 

And if you don't properly understand these key React concepts, you can run into various issues, like [<FontIcon icon="fa-brands fa-quora"/>prop drilling](https://quora.com/What-is-prop-drilling-in-ReactJS).

In this tutorial,  you'll learn what prop drilling is. I'll also teach you how to intuitively avoid it without relying on React context. In the end, you'll understand how to identify prop drilling without thinking and fix it with precision.

If you prefer a visual guide, here's a video version of this tutorial on my [<FontIcon icon="fa-brands fa-youtube"/>YouTube channel here](https://youtu.be/ELZZnqHJhlw) (approximately 15 minutes).

<VidStack src="youtube/ELZZnqHJhlw" />

---

## What is Prop Drilling?

Prop drilling occurs when a parent component generates its state and passes it down as `props` to its children components that do not consume the props – instead, they only pass it down to another component that finally consumes it.

Below is an example of prop drilling in React:

```jsx
function App() {
  const [profile, setProfile] = useState({ame: 'John'}); 
  return ( 
    <div> <Header profile={profile} /> 
    </div> 
  ); 
} 

function Header({ profile }) { 
  return ( 
    <header> 
      <h1>This is the header</h1> 
      <Content profile={profile} /> 
    </header> 
  ); 
} 

function Content({ profile }) { 
  return ( 
    <main> 
      <h2>Content Component</h2> 
      <p>{profile.name}</p> 
    </main> 
  ); 
} 

export default App;
```

If you check out the example above, you'll notice that `profile` is passed from the `App` component through the `Header` to the `Content` component, which eventually makes use of the `props`. This is commonly referred to as prop drilling as the `Header` component doesn't consume the `prop` but only passes it down to the `Content` component that finally consumes it.

Now that you understand what prop drilling is, the next challenge is to figure out how to avoid it because it's not always an intuitive process.

You'll need to start exploring methods to address it. While you can use component composition and React context to resolve it, the challenge lies in not always recognizing the issue until later.

To truly master the art of handling prop drilling intuitively, you must learn how to identify elongated props and contexts.

---

## What is an Elongated Prop?

![Where is the love sung by The Black Eye Peas recreated in a tunnel underpass.](https://images.unsplash.com/photo-1484069560501-87d72b0c3669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDV8fHF1ZXN0aW9uaW5nfGVufDB8fHx8MTY5OTMyMzQ0MXww&ixlib=rb-4.0.3&q=80&w=2000)

An elongated prop is a `prop` that is not consumed but it is only passed down to another component. When a component receives a `prop` from its parent and doesn't consume the `prop`, it passes the prop down to another component. This prop is called elongated prop because it has been extended.

Whenever you see a `prop` being passed down by components that neither creates nor consumes the `prop`, you have an an elongated prop (as well as prop drilling) in your code. The code snippet below is an example:

```jsx
function Profile({ user }) { 
  return ( 
    <header> 
      <h1>This is the header</h1> 
      <Content user={user} /> 
    </header> 
  ); 
}
```

`user`, in this example, is an elongated `prop` as it is neither created nor consumed by the `Profile` component. Instead, it is only passed down to the `Content` component. And that means we have extended `user` through a component that doesn't need it so that it can get to the one that does.

Now, let's revisit the example we used to illustrate prop drilling. Wait, are you thinking what I'm thinking? The `prop` that's being passed down in the prop drilling example is indeed an elongated prop, right? Yes, you've got it.

```jsx
function App() {
  const [profile, setProfile] = useState({ame: 'John'}); 
  return ( 
    <div> 
      <Header profile={profile} /> 
    </div> 
  ); 
} 

function Header({ profile }) { 
  return ( 
    <header> 
      <h1>This is the header</h1> 
      <Content profile={profile} /> 
    </header> 
  ); 
} 

function Content({ profile }) { 
  return ( 
    <main> 
      <h2>Content Component</h2> 
      <p>{profile.name}</p> 
    </main> 
  ); 
} 

export default App;
```

In the code above, you can observe that the `prop` passed to `Header` is created in the `App` component. Then, `Header` passes it down to its child component named `Content`. As a result, the `profile` being passed down can be considered elongated because it is passed through a component (`Header`) that neither creates nor consumes it down to the one that does.

The `Header` component passing down the `prop` it doesn't create or need is unnecessarily stretching the context of the `prop`. 

Now, the question is, how do elongated props help to intuitively avoid prop drilling in React? They make it easy for you to spot `props` being used where they're are neither created nor consumed.

Rather than focusing on how to solve prop drilling, elongated props enable you to avoid it. This is because it's intuitive to recognize when a component neither creates nor consumes `props`, and that helps you to know the component is irrelevant.

But before you learn how to quickly avoid prop drilling with your understanding of elongated props, it is important that you know the main causes of prop drilling. Then you'll truly know how to avoid it without thinking about it.

---

## What Causes Prop Drilling?

![»What is your story?«](https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fHRyaWdnZXJ8ZW58MHx8fHwxNjk5MzIzNTU2fDA&ixlib=rb-4.0.3&q=80&w=2000)

Prop drilling doesn't occur out of thin air. It's a consequence of inadequate component organization, and it is not a React problem. It is a thinking or design problem.

You won't encounter an instance of prop drilling without observing one of the following layout mistakes:

First of all, **grouping static elements and dependent components** together to achieve an appealing UI design is the major cause of prop drilling. You can't avoid prop drilling when your UI groups static elements and dependent components together in a parent. The parent component clearly won't use the `prop`, as everything within it is a static element – except the component that needs a prop.

Here's an example:

```jsx
function Header({ profile }) { 
  return ( 
    <header> 
      <h1>This is the header</h1> 
      <Content profile={profile} /> 
    </header> 
  ); 
}
```

In this case, static elements `<header>` and `<h1>` are grouped with a dependent component `Content` – and that's why we have prop drilling therein.

Provided that the `Content` component is independent or takes no `props`, it won't need `profile` and there won't be prop drilling in the first place. This is why forcing a component that should be independent to take `props` from its parent is a recipe for prop drilling in React.

Second of all, when a **component accepts `props` that it doesn't use but merely passes it down to its children**, this is a sign that you have prop drilling in your component:

```jsx
function App () { 
  const [profile, setProfile] = useState({name: "Ayobami"})
  return ( 
    <>
      <Parent profile={profile} /> 
    </>
 ); 
}; 

function Parent({ profile }) { 
  return ( 
    <div>
      <Hero profile={profile} /> 
      <Features profile={profile} /> 
    </div>
 ); 
};
```

In this case there is prop drilling because the `Parent` component takes `profile` and it doesn't use it though it passes it down to its children.

Third, when a component that represents an independent section of a page is **forced to take props from its parent**, prop drilling is inevitable. It should ideally be self-contained with its state and operations.

The exception would be if it's intentionally tied to its parent for specific reasons. In such cases, prop drilling becomes a necessary trade-off.  

If you revisit the example of prop drilling cited in this article, you will realize it has a prop drilling issue because the `Content` component which could have been an independent component by having a state is forced to receive props from its parent.

And finally, **the presence of elongated `props`** is a sure sign of prop drilling. Since an elongated prop is a fundamental element that's consistently present in every case of prop drilling, grasping this concept allows you to instinctively avoid prop drilling.

When you spot an elongated prop, you can be certain that one of the other three mistakes is also in play. In short, an elongated prop is a prop that is not consumed and is also passed down to another component.

So grouping static elements with dependent components, forcing components to take props, elongated props, and receiving a prop without consuming it are the signs to recognize prop drilling in React.

---

## How to Fix Prop Drilling with Component Composition

Component composition is a good approach to fix prop drilling. If you ever find yourself in a situation where a component passes down a prop it neither creates nor consumes, you can use component composition to fix it. 

But to use component composition, you need to understand a component context.

### What is a component context?

The context of a component encompasses everything that is visible within it, including state, props, and children. The following code further illustrates this concept:

```jsx
function App() { 
  const [profile, setProfile] = useState({name: 'Ayobami'}); 
  return ( 
    <div> 
      <Header profile={profile} /> 
    </div> 
  ); 
} 

export default App;
```

In this scenario, the context of `App` refers to everything we can see within the `App` component – including the `profile` prop, the `Header`, and other `App` content. Therefore, any data created in the `App` component should ideally be utilized within the `App` component itself, either as its own data or as `props` to its children.

Prop drilling always emerges when the children receiving the `props` doesn't consume it but only passes it down to its children.  

To avoid prop drilling in this case, any grandchildren components that require access to the same `props`, especially when their parent don't consume the data, should be passed as children ensuring that the data remains within the `App` context.

```jsx
export function App() { 
  const [profile, setProfile] = useState({name: 'Ayobami'}); 
  return ( 
    <div> 
      <Header> 
        <Content profile={profile} /> 
      </Header> 
    </div> 
  ); 
}
```

**Or**

```jsx
export function App() { 
  const [profile, setProfile] = useState({name: 'Ayobami'}); 
  return ( 
    <div> 
      <Header children={<Content profile={profile} />} > 
    </div> 
  ); 
}
```

As you can see, we have resolved the prop drilling issue in the previous example, even though we still have a redundant component, `<Header>`, right? We've successfully addressed prop drilling through component composition. 

This process is quite straightforward because we concentrate on recognizing elongated props and repositioning them within appropriate contexts.

The concept of prop drilling is problem-focused, but prop elongation is solution-driven. When dealing with elongated props, our primary goal is to identify props that are not consumed but only passed down to another components.

---

## How to Fix Prop Drilling by Moving State to the Consumer

Prop drilling can also be fixed by moving state to where it is consumed. The example of prop drilling in this article has a component named `Content`. But the component is forced to receive a `prop` from its parent instead of having a state and be an independent component – and so we have prop drilling. 

We can fix the prop drilling in this case by moving the profile state to where it is consumed.

Let's revisit the example:

```jsx
function App() {
  const [profile, setProfile] = useState({ame: 'John'}); 
  return ( 
    <div> 
      <Header profile={profile} />
      <Footer profile={profile} />
    </div>
  ); 
} 

function Header({ profile }) { 
  return ( 
    <header> 
      <h1>This is the header</h1> 
      <Content profile={profile} /> 
    </header> 
  ); 
} 

function Content({ profile }) { 
  return ( 
    <main> 
      <h2>Content Component</h2> 
      <p>{profile.name}</p> 
    </main> 
  ); 
} 

export default App;
```

We can fix prop drilling in this case by moving `profile` to where it is consumed:

```jsx
function App() { 
  return ( 
    <div> 
      <Header />
      <Footer profile={profile} />
    </div> 
  ); 
} 

function Header() { 
  return ( 
    <header> 
      <h1>This is the header</h1> 
      <Content /> 
    </header> 
  ); 
} 

function Content({ profile }) { 
  const [profile, setProfile] = useState({ame: 'John'});
  return ( 
    <main> 
      <h2>Content Component</h2> 
      <p>{profile.name}</p> 
    </main> 
  ); 
}
```

Now that we have lifted the profile to the `Content` component where it is consumed, the `App` component doesn't have a state, while the `Header` component doesn't receive a prop again as the `Content` component has its state.

But wait! There is a problem. The `Footer` component needs the state we moved away from `App`. There you are! That is the problem with lifting or moving state to where we think it is needed. In this case, if the `Footer` component doesn't need it, we won't have any issue – but `Footer` also needs the prop. 

Now that `Footer` needs `profile` as a prop, we need to solve prop drilling with another method.

---

## How to Fix Prop Drilling with a Children-Replacing-Parent Strategy

Earlier in this article, we talked about how to use component composition and moving state to its consumer to solve prop drilling. But as you saw, they have some issues – duplicated components or states.

But using this children-replacing-parent approach fixes the problem effectively:

**Working but could be better:**

```jsx
export function App() { 
  const [profile, setProfile] = useState({name: 'Ayobami'}); 
  return ( 
    <div> 
      <Header> 
        <Content profile={profile} /> 
      </Header> 
    </div> 
  ); 
}

function Header({ profile }) { 
  return ( 
    <header> 
      <h1>This is the header</h1> 
      <Content profile={profile} /> 
    </header> 
  ); 
}
```

The example above shows a solution to the prop drilling example in this article. But as you can see, it has a redundant component, as `Header` does nothing.

**Here's a better version:**

```jsx
export function App() { 
  const [profile, setProfile] = useState({name: 'Ayobami'}); 
  return ( 
    <header> 
      <h1>This is the header</h1> 
      <Content profile={profile} /> 
    </header> 
  ); 
}
```

In the above code, we enhance the component composition solution we previously implemented for the prop drilling example by replacing the redundant `Header` component with its content in its parent (`App`).

---

## What to Avoid

![](https://images.unsplash.com/photo-1587065915399-8f8c714ab540?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEwfHxkYW5nZXJ8ZW58MHx8fHwxNjk5MzIzMDgxfDA&ixlib=rb-4.0.3&q=80&w=2000)

It's essential to highlight what to avoid when dealing with prop drilling to prevent unnecessary challenges.

- **Avoid React Context, if possible, to fix prop drilling.** This approach ties your component to a specific context, restricting its usability outside of that context and hindering composition and reusability.
- **Steer clear of redundant components by employing a children-parent replacement approach.** This approach naturally incorporates [<FontIcon icon="fas fa-globe"/>component composition](https://codementor.io/@dinerismail/the-power-of-component-composition-in-react-21goassg4m) without introducing redundant components or states when resolving prop drilling.

By avoiding elongated props, you pave the way for crafting maintainable, high-performing, reusable, and scalable React components. It simplifies the process of lifting states and components by removing the struggle of deciding where to place them. 

With your understanding of elongated props, you can confidently position props and components within the right context without undue stress.

In short, you can now discover prop drilling intuitively by paying attention to any component that takes `props` it doesn't consume and only passes it down to another component.

Thanks for reading – cheers!

Hey wait! I am [Ayobami Ogundiran (<FontIcon icon="fa-brands fa-x-twitter"/>`codingnninja`)](https://x.com/codingnninja) and I am about to start showing how to build your own React, Redux, TypeScript, Zod or Ecommerce websites on my YouTube channel. [<FontIcon icon="fa-brands fa-youtube"/>Click to subscribe](https://youtube.com/youtoocancode) to stay connected.

---

<TagLinks />