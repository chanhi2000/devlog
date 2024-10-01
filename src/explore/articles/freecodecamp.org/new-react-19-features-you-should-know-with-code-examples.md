---
lang: en-US
title: "New React 19 Features You Should Know –  Explained with Code Examples"
description: "Article(s) > New React 19 Features You Should Know –  Explained with Code Examples"
icon: fa-brands fa-react
category:
  - Article(s)
  - Node.js
  - React.js
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
      content: "Article(s) > New React 19 Features You Should Know –  Explained with Code Examples"
    - property: og:description
      content: "New React 19 Features You Should Know –  Explained with Code Examples"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/new-react-19-features-you-should-know-with-code-examples.html
prev: /programming/js-react/articles/README.md
date: 2024-09-30
isOriginal: false
author: Prankur Pandey
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1727367514092/a75164cd-1e2e-4b0d-8c2e-5d000cee01f0.png
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
  name="New React 19 Features You Should Know –  Explained with Code Examples"
  desc="React.js is 11 years old, and it has become one of the most popular JavaScript libraries out there. And now, React is transitioning from version 18 to version 19. So hold onto your hats, React enthusiasts 🎩. React 19 has recently landed, and it’s a ..."
  url="https://freecodecamp.org/news/new-react-19-features-you-should-know-with-code-examples/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1727367514092/a75164cd-1e2e-4b0d-8c2e-5d000cee01f0.png"/>

React.js is 11 years old, and it has become one of the most popular JavaScript libraries out there.

And now, React is transitioning from version 18 to version 19. So hold onto your hats, React enthusiasts 🎩. React 19 has recently landed, and it’s a game-changer.

But before you start worrying about a steep learning curve, here’s some great news: React 19 isn’t about adding complexity – it’s about removing it.

In this guide, you’ll learn how this new version will simplify your coding life and turbocharge your React projects.

Excited to try out React 19? 🤩 While it's still in the canary stage, you can start experimenting with it by installing the canary version today. This update promises a smoother experience by automating what used to be manual optimizations.

---

## React Compiler: The Magic Behind the Scenes

The star of React 19 is its new compiler. 🎉 This compiler transforms your React code into plain JavaScript, which boosts performance and, even better, frees you from constantly tweaking performance manually.

To optimize our React applications, we use some inbuilt methods like `useMemo` or `useCallback`. This tells React not to compile the code again if the inputs don’t change.

But if you forget to apply memoization, it results in wasting React resources and computational power. To deal with this, React 19 introduced React Compiler.

Say goodbye to manual optimizations and hello to cleaner code:

::: note Code explanation

The new compiler turns React code into optimized JavaScript, removing the need for manual optimizations like memoization.

```jsx
// No need for useCallback/useMemo
function Component() {
  return <div>Optimized!</div>;
}
```

:::

---

## No More Memoization Hooks

Remember the days of juggling between `useCallback`, `useMemo`, and `memo` to optimize performance? 😅 With React 19, those days are over. The new compiler optimizes your code behind the scenes, so you can drop these hooks and focus on writing beautiful, clean React components.

Memoization solves the complex calculation problems inside React, resulting in application optimization and performance improvements.

Previously, to apply Memoziation you had to use the `useMemo` hook. Here’s what that looked like in code:

::: note Code explanation

- The `expensiveCalculation` the function is computationally heavy, but using `useMemo`, it's only recalculated when `count` changes.
- The input field can be updated without triggering a recalculation of `expensiveCalculation`, which optimizes performance.

```jsx
//React 18 
import React, { useState, useMemo } from 'react';

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // Memoize expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  }, [count]); // Recalculate only when `count` changes

  return (
    <div>
      <h1>Expensive Calculation: {expensiveCalculation}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type something"
      />
    </div>
  );
};

export default ExpensiveComponent;
```

:::

Now with the compiler in React 19, this is no longer required. You can just write your code and React will apply the memoziation.

Look at this code example:

::: note Code explanation

you no longer need to use `useCallback` or `useMemo` – React 19 automatically handles optimizations.

```jsx
// No need for manual memoization React 19
function Component({ children }) {
  return <div>{children}</div>;
}
```

:::

---

## No `forwardRef`: Simplified Ref Handling

Using `forwardRef` to pass refs around used to be a bit of a chore. 😓 But in React 19, you can pass refs just like any other prop. This streamlines your component code and makes ref handling a breeze. 🧹

::: note Code explanation

```jsx
function Child({ innerRef }) {
  return <input ref={innerRef} />;
}
```

`forwardRef` is no longer required – instead, refs are passed like regular props.

:::

---

## The New `use()` Hook: A Game Changer

The versatile new `use()` hook replaces multiple hooks, such as `useEffect` for data fetching as well as `useContext` and `useState` for consuming context data. It simplifies your code by handling promises and context with a single, elegant solution.

Look at this code example:

::: note Code Explanation

- `useEffect` is triggered after the component mounts to initiate data fetching.
- We maintain `loading`, `data`, and `error` states to manage and display the appropriate UI.
- Once the data is fetched, the state updates, triggering a re-render to display the data.

```jsx
import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetchingComponent;
```

:::

Now with the help of the new `use()` hook in React 19, data fetching becomes easier and you don’t need to depend on state management hooks like `useState()` anymore.

Here is an example:

::: note Code explanation

- **Suspense and** `use()`: When you use `use()`, it suspends the component rendering until the promise resolves. If an error occurs, it can also trigger a `Suspense` error boundary.
- **No need for** `useEffect`: There's no need to manually manage data fetching with side effects, as React handles it under the hood.
- **Error and loading states**: These can now be managed globally using `Suspense` error boundaries without manually tracking states like `loading` or `error`.

```jsx
import React, { use } from 'react';

// Function to fetch data
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

const DataFetchingComponent = () => {
  // `use()` suspends the component until the promise resolves
  const data = use(fetchData());

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetchingComponent;
```

:::

### Fetch Data with `use()` vs. `useEffect`

Fetching data used to require a bit of boilerplate with `useEffect`. With `use()`, you just resolve the promise and use React Suspense for a clean, easy data-fetching experience. 🧼 This means less code and more focus on what matters.

### Use Context with `use()`

Handling context data has also become more straightforward. The new `use()` hook can now consume context directly, eliminating the need for `useContext` and making context management more intuitive. 🎯

---

## Directives: A Fresh Approach

If you’ve been using Next.js, you might have seen directives already. 🌐 React 19 introduces directives to simplify component configuration. Use `use client` for client-side components and `use server` for server-side ones. It’s as easy as adding a string at the top of your file:

::: note Code explanation

Use `use client` and `use server` to declare client-side or server-side components.

```jsx
"use client";
function ClientComponent() {
  return <div>Client Side</div>;
}
```

:::

---

## Actions: Streamlined Form Handling

Forms just got a major upgrade with actions. 💥 Actions are functions connected to form submissions that can run on either the server or client side. This means cleaner code and a smoother form-handling process.

::: note Code explanation

Actions handle form submissions, running on the client or server.

```jsx
async function action(formData) {
  return await handleSubmit(formData);
}
```

:::

### Client Actions: A Practical Example

Client actions are great for immediate feedback. For example, alerting users with their input values has never been simpler. Just use `use client` and connect the form action to the form’s action prop. Easy peasy! 🥳

---

## `useFormStatus()`: Managing Form State

Keep track of your form submissions with the `useFormStatus()` hook. 🕒 It helps manage form states like disabling the submit button while the form is pending. This is a must-have for smooth user experiences.

::: note Code explanation

`useFormStatus()` tracks form submission states, like disabling a button during submission.

```jsx
const { pending } = useFormStatus();
return <button disabled={pending}>Submit</button>;
```

:::

---

## `useFormState()`: Stateful Form Actions

We now have `useFormState()`, which is a new hook for managing form state. 🎛️ It’s similar to `useState` but works with form actions, allowing you to access both previous state and submitted data. It’s perfect for scenarios like adding items to a cart.

I feel `useFormState()` is closely associated with the features in the React Hook Form library, as its working features are mostly similar.

Here is a code example to help you understand it better:

::: note Code explanation

1. **Import Hooks**: We import `useForm` and `useFormState` from `react-hook-form`.
2. **Setup Form**:
    - `useForm`: This hook initializes the form methods, including `register`, `handleSubmit`, and `control`.
    - `useFormState`: We use this hook to extract form-state properties like `isSubmitting`, `isDirty`, and `isValid`.
3. **Register Inputs**: We register each input field using the `register` function, specifying any validation rules (for example `required`).
4. **Handle Submission**: The `onSubmit` function handles the form submission, where you can perform your desired actions with the form data.
5. **Form State Info**: We display the form's current state (whether it's dirty or submitted) below the form.

```jsx
import React from 'react';
import { useForm, useFormState } from 'react-hook-form';

const MyForm = () => {
  const { register, handleSubmit, control } = useForm();
  const { isSubmitting, isDirty, isValid } = useFormState({ control });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input {...register('firstName', { required: true })} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input {...register('lastName', { required: true })} />
      </div>
      <button type="submit" disabled={isSubmitting || !isValid}>
        Submit
      </button>
      <div>
        <p>Form is {isDirty ? 'dirty' : 'pristine'}</p>
        <p>Submitting: {isSubmitting ? 'Yes' : 'No'}</p>
      </div>
    </form>
  );
};

export default MyForm;
```

:::

### Key Features of `useFormState`

- **Performance**: `useFormState` only re-renders when the specific fields it's monitoring change, making it efficient.
- **Controlled State**: You can easily manage and observe the form's state without writing boilerplate code for handling changes and validations.

---

## `useOptimistic()`: Enhancing User Experience

For real-time applications, the `useOptimistic()` hook is helpful. 💬 It allows for optimistic updates, making your app feel snappy by updating the UI instantly and syncing with the server in the background.

::: note Code explanation

Enables optimistic UI updates before syncing with the server.

```jsx
const [optimisticState, setOptimistic] = useOptimistic(initialState);
```  

:::

---

## Conclusion

React 19 is here to simplify your coding experience and enhance performance. 🎉 To dive deep into all these features and more, check out my recent [article](/explore/articles/freecodecamp.org/learn-react-hooks-with-example-code.md) about React Hooks.

If you’re ready to streamline your React projects, embrace the future with React 19 and make your development experience smoother and more enjoyable. 🌟

- [Follow Me on X (<FontIcon icon="fa-brands fa-x-twitter"/>`prankurpandeyy`)](https://x.com/prankurpandeyy)
- [Follow me on Linkedin (<FontIcon icon="fa-brands fa-linkedin"/>`prankurpandeyy`)](https://linkedin.com/in/prankurpandeyy)
- [<FontIcon icon="fas fa-globe"/>Look at my Portfolio here](https://prankurpandeyy.netlify.app)

---

<TagLinks />