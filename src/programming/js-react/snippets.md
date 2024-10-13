---
lang: ko-KR
title: Snippets
description: React.js > Snippets
icon: fas fa-eye-dropper
category:
  - React.js
  - Snippets
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
      content: React.js > Snippets
    - property: og:description
      content: Snippets
    - property: og:url
      content: https://chanhi2000.github.io/programming/js-react/snippets.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## A Guided tour in your app with React Joyride

::: sandpack#react A Guided tour in your app with React Joyride [rtl theme=dark]

@file /App.js

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