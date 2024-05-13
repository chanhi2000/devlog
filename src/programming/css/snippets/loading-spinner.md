---
lang: ko-KR
title: Loading Spinner
description: Snippets > Loading Spinner
icon: fas fa-spinner
category: 
  - CSS
  - Snippets
tag: 
  - css
  - scss
  - sass
  - snippets
  - loader
prev: /programming/css/snippets/README.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "CSS > Snippets",
  "desc": "Snippets",
  "link": "/programming/css/snippets/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

::: normal-demo Loading Spinner

```html
<!-- <h1>Loading Animations</h1> -->
<section class="wrapper">
  <div class="container">
    <span class="loading loading--spin"></span>
  </div>
  <div class="container">
    <span class="loading loading--ease-spin"></span>
  </div>
  <div class="container">
    <span class="loading loading--dot-spin"></span>
  </div>
  <div class="container">
    <span class="loading loading--radar-spin"></span>
  </div>
  <div class="container">
    <span class="loading loading--double-spin"></span>
  </div>
</section>
```

```css
.loading {
  display:inline-block;width:3.5rem;height:3.5rem;border-radius:50%;
}
.loading--spin {
  border:solid 0.5rem;border-color:#ff78aa #ffffff16 #ffffff16;
  animation:spin 1s infinite linear;
}
.loading--ease-spin {
  border:solid 0.5rem;border-color:#25d9e6 #ffffff16;
  animation:spin 1.2s infinite ease-in-out;
}
.loading--dot-spin {
  border:dotted 0.35rem;border-color:#ffffff16 #b564db #b564db;
  animation:spin 1.8s infinite linear;
}
.loading--double-spin {
  border:double 0.5rem;border-color:#5094e3 #5094e3 #ffffff16;
  animation:spin 1.2s infinite linear;
}
.loading--radar-spin {
  background:conic-gradient(#7abd3300, #7abd33);
  animation:spin 1.2s infinite linear;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

:::

---

<TagLinks />