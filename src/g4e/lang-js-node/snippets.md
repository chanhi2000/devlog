---
lang: ko-KR
title: 🔮Snippets
description: 🧶Node.js > 🔮Snippets
tags: ["js", "javascript", "nodejs", "node", "react", "reatjs"]
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
