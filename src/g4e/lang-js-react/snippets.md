---
lang: ko-KR
title: 🔮Snippets
description: ⚛React.js > 🔮Snippets
category:
  - ⚛React.js
  - 🔮Snippets
tag: 
  - js
  - node
  - nodejs
  - react
  - reactjs
  - reactnative
  - facebook
  - meta
  - snippets
head:
  - - meta:
    - property: og:title
      content: ⚛React.js > 🔮Snippets
    - property: og:description
      content: ⚛React.js > 🔮Snippets
    - property: og:url
      content: https://chanhi2000.github.io/g4e/lang-js-react/references.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## A Guided tour in your app with React Joyride

::: react-demo A Guided tour in your app with React Joyride

```js
import React, { useState } from 'react'
import Joyride from 'react-joyride'

const tourSteps = ...

const Walkthrough = () => {
    const [steps] = useState(tourSteps)

    return (
        <>
            <Joyride steps=(steps) continuous showSkipButton={true} />

            
        </>
    )
}

const tourSetps = [

]

```

:::


<TagLinks />