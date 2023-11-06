---
lang: ko-KR
title: 🔮Snippets
description: ⚛React.js > 🔮Snippets
tags: ["js" , "node" , "nodejs", "react", "reactjs", "reactnative", "facebook"]
meta:
  - name: ⚛React.js > 🔮Snippets
    content: Javascript Libraries from Github
  - property: og:title
    content: 🔮Snippets
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