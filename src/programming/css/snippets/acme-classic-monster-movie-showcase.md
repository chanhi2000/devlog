---
lang: ko-KR
title: ACME Classic Monster Movie Showcase
description: Snippets > ACME Classic Monster Movie Showcase
icon: iconfont icon-view
category: 
  - CSS
  - Snippets
tag: 
  - css
  - scss
  - sass
  - snippets
  - hero
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

<SiteInfo
  name="ACME Classic Monster Movie Showcase"
  desc="This code snippet creates a website header with responsive design elements. It combines HTML structure for the header content and CSS styles to control layout and appearance. The HTML defines sections for the logo, navigation button, and main content area. The CSS applies a background image with a dark overlay for contrast. It positions elements within the header and styles text, buttons, and spacing."
  url="https://codepen.io/sjvarnum/pen/KKdwJOR"
  logo="https://cpwebassets.codepen.io/assets/favicon/logo-pin-b4b4269c16397ad2f0f7a01bcdf513a1994f4c94b8af2f191c09eb0d601762b1.svg"
  preview="https://freefrontend.com/assets/img/css-hero-effects/2024-acme-classic-monster-movie-showcase.jpg"/>

<!-- TODO: 작동여부 확인 -->

::: normal-demo ACME Classic Monster Movie Showcase

```html
<header class="showcase">
  <div class="showcase-top">
    <div class="logo-text">ACMEDIA</div>
    <a href="#" class="btn btn-rounded">Sign In</a>
  </div>
  <div class="showcase-content">
    <h1>Classic Monster Movies</h1>
    <p>Watch Anytime. Anywhere.</p>
    <a href="#" class="btn btn-xl">
      30 Day Free Trial
      <i class="fas fa-chevron-right btn-icon"></i>
    </a>
  </div>
</header>
```

```css
/* Base Styling */

:root {
  --primary-color: #49b93f;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Arial", sans-serif;
  --webkit-font-smoothing: antialiased;
  background: #000;
  color: #999;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4 {
  color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
}

p {
  margin: 0.5rem 0;
}

img {
  width: 100%;
}

/* Showcase Styling */

.showcase {
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("https://github.com/sjvarnum/acme-media-showcase/blob/master/img/showcase.jpg?raw=true")
    no-repeat center center/cover;
}

/* Showcase Overlay */

.showcase::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: inset 120px 100px 250px #000000, inset -120px -100px 250px #000000;
}

.showcase-top {
  position: relative;
  height: 90px;
  z-index: 2;
}

.showcase-top .logo-text {
  color: var(--primary-color);
  font-family: "Roboto", sans-serif;
  --webkit-font-smoothing: antialiased;
  font-size: 38px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.showcase-top a {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
}

.showcase-content {
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 9rem;
  z-index: 2;
}

.showcase-content h1 {
  font-weight: 700;
  font-size: 5.2rem;
  line-height: 1.1rem;
  margin: 0 0 2rem;
}

.showcase-content p {
  font-weight: 400;
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;
  line-height: 1.25rem;
  margin: 2rem 0 2rem 0;
}

.showcase-content .btn-xl {
  margin-top: 3rem;
}

/* Button Styling */

.btn {
  display: inline-block;
  background: var(--primary-color);
  color: #fff;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  text-align: center;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  border-radius: 2px;
  /*   margin-top: 3rem; */
}

.btn:hover {
  opacity: 0.9;
}

.btn-rounded {
  border-radius: 5px;
}

.btn-xl {
  font-size: 2rem;
  padding: 1.5rem 2.1rem;
  border-radius: 7px;
  text-transform: uppercase;
}

.btn-lg {
  font-size: 1rem;
  padding: 0.8rem 1.3rem;
  text-transform: uppercase;
}

/* Media Queries */

@media (max-width: 960px) {
  .showcase {
    height: 100vh;
  }

  .showcase-top .logo-text {
    color: var(--primary-color);
    font-family: "Roboto", sans-serif;
    --webkit-font-smoothing: antialiased;
    font-size: 38px;
    position: absolute;
    top: 30%;
    left: 5%;
    transform: translate(0);
  }

  .showcase-content h1 {
    font-weight: 700;
    font-size: 3.7rem;
    line-height: 1rem;
    margin: 0 0 2rem;
  }

  .showcase-content p {
    font-weight: 400;
    color: #fff;
    font-size: 1.6rem;
    text-transform: uppercase;
    line-height: 1rem;
    margin: 0 0 2rem;
  }

  .btn-xl {
    font-size: 1.5rem;
    padding: 1.2rem 1.8rem;
    text-transform: uppercase;
  }
}

@media (max-width: 500px) {
  .showcase::after {
    box-shadow: inset 75px 50px 100px #000000, inset -75px -50px 100px #000000;
  }

  .showcase {
    height: 100vh;
  }

  .showcase-top .logo-text {
    font-size: 1.5rem;
    top: 30%;
    left: 15%;
    transform: translate(0);
  }

  .showcase-content h1 {
    font-size: 1.8rem;
    line-height: 1rem;
  }

  .showcase-content p {
    font-size: 1.2rem;
  }

  .btn {
    margin-right: 0.1rem;
  }

  .btn-xl {
    font-size: 1.2rem;
    padding: 1rem 1.2rem;
    text-transform: uppercase;
  }
}
```

:::

---

<TagLinks />