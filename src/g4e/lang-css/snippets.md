---
lang: ko-KR
title: Snippets
description: 🎨CSS > Snippets
icon: fas fa-eye-dropper
category: 
  - 🎨CSS 
  - Snippets
tag: 
  - css
  - scss
  - sass
  - snippets
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## Loader (with dots)

::: normal-demo Loader (with dots)

```html
<ul id="loader">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

```css
ul#loader {
  list-style-type:none;display:flex;
}
ul#loader li {
  margin:0.2rem;width:0.4rem;height: 0.4rem;border-radius:50%;background-color:#ff4754;
  animation: dotanimation 0.8s ease infinite alternate both;
}
ul#loader li:nth-child(2) { animation-delay:0.2s; }
ul#loader li:nth-child(3) { animation-delay:0.4s; }
ul#loader li:nth-child(4) { animation-delay:0.6s; }

@keyframes dotanimation {
  from { transform: translateY(0); }
  to { transform: translateY(-1rem); }
}
```

:::

---

## Loading Spinner

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

## A Solar System Orbit

::: normal-demo A Solar System Orbit

```html
<div class="solar-system">
  <div class="planet planet1">
    <div class="planet planet2">
      <div class="planet planet3">
        <div class="planet planet4">
          <div class="sun"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css

.solar-system {
  width:15rem; height:15rem;
}
.planet {
  display:flex; align-items:center; justify-content:center;
  border-radius:50%; border:1px solid #dedede;
  animation-name: rotatePlanet;
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.planet:after {
  content:'';border-radius:50%;position:absolute;
}
.planet1 {
  width:100%;height:100%;animation-duration:25s;
}
.planet1:after {
  width:1.8rem;height:1.8rem;top:-15px;background:#8a8380;
}
.planet2 {
  width:75%;height:75%;animation-duration:18s;
}
.planet2:after {
  width:1.3rem;height:1.3rem;top:-10px;background:#ab711d;
}
.planet3 {
  width:77%;height:77%;animation-duration:13s;
}
.planet3:after {
  width:0.9rem;height:0.9rem;top:-8px;background:#ffddab;
}
.planet4 {
  width:55%;height:55%;animation-duration:9s;
}
.planet4:after {
  width:0.6rem;height:0.6rem;top:-6px;background:#82c8ff;
}
.sun {
  width:45%;height:44.5%;background:#ffc107;border-radius:50%;
}

@keyframes rotatePlanet {
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
}

```

:::

---

## Fetch favicon with js

::: normal-demo Fetch favicon with js

```html
<html lang="en">
<body>
  <img/>
  <label>
    <input type="text" placeholder=" "/>
    <p>Enter a Domain (without https://)</p>
  </label>
</body>
</html>
```

```css
* { margin:0;padding:0;border:none;outline:none;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
html,body,.code-demo-app { height:100%; }
body,.code-demo-app {
  display:flex;align-items:center;justify-content:center;
  font-family: "Open Sans", sans-serif;background:#040404;
}
img {
  --size:18px;
  width: var(--size);height:var(--size);margin-right:1.2rem;
}
label { position:relative; }
label input {
  font-family: "Open Sans", sans-serif;font-size:1rem;color:#f9f9f9;
  background:transparent;padding:1rem 1.2rem 1rem 1.2rem;min-width:24rem;border-radius:0.2rem;border:2px solid #7a7a7a56;
  transition: border-color 0.2s
}
label input:focus { border-color: #ff4754; }
label p {
  color:#f9f9f9;font-size:1rem;user-select:none;
  position:absolute;top:50%;transform: translateY(-50%);
  margin-left:0.8rem;padding:0 0.4rem;background:#040404;
  transition: top 0.2s, font-size 0.2s, color 0.2s;
}
label input:focus + p,
label input:not(:placeholder-shown) + p {
  top:0;font-size:0.9rem;color:#ff4754;background:#040404;
}
label input:not(:focus) + p { color: #7a7a7a56; }
```

```js
const img = document.querySelector('img');
const input = document.querySelector('input');

input.addEventListener('keydown', () => {
  const favicon = `http://www.google.com/s2/favicons?domain=${input.value}`;
  img.src = favicon;
});
```

:::

---

## Scrollbar Indicator

::: normal-demo Scrollbar Indicator

```html
<body>
  <div id="scroll-indicator-home">
    <div class="line" id="scrollIndicator"></div>
    <div class="text">
      <h3>1</h3>
      <h3>2</h3>
      <h3>3</h3>
      <h3>4</h3>
      <h3>5</h3>
      <h3>6</h3>
      <h3>7</h3>
      <h3>8</h3>
      <h3>9</h3>
      <h3>10</h3>
      <h3>11</h3>
      <h3>12</h3>
      <h3>13</h3>
      <h3>14</h3>
      <h3>15</h3>
      <h3>16</h3>
      <h3>17</h3>
      <h3>18</h3>
      <h3>19</h3>
      <h3>20</h3>
      <h3>21</h3>
      <h3>22</h3>
      <h3>23</h3>
      <h3>24</h3>
      <h3>25</h3>
      <h3>26</h3>
      <h3>27</h3>
      <h3>28</h3>
      <h3>29</h3>
      <h3>30</h3>
      <h3>31</h3>
      <h3>32</h3>
      <h3>33</h3>
      <h3>34</h3>
      <h3>35</h3>
    </div>
  </div>
</body>
```

```css
body { 
  margin:0;background:#111;
}
.text {
  font-size:35px;color:lightgreen;text-align:center;line-height:1em;
}
.line {
  background:white;height:8px;border-radius:4px;width:0%;position:fixed;top:0px;
}
```

```js
window.addEventListener('scroll', moveScrollIndicator);
const scrollIndicatorElt = document.getElementById('scrollIndicator');
const maxHeight = window.document.body.scrollHeight - window.innerHeight;

function moveScrollIndicator(e) {
  const percentage = ((window.scrollY) / maxHeight) * 100;
  scrollIndicatorElt.style.width = percentage + '%';
}
```

:::

---

## Refresh page every 5 seconds

```html
<meta http-equiv="refresh" content="5" />
```

::: normal-demo Refresh page every 5 seconds

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <meta http-equiv="refresh" content="5" />
</head>
<style>
  button {
    border: 2px solid black;
    background-color: transparent;
    padding: 5px 10px 5px 10px;
    margin: 0 5px 0 5px;
    border-radius: 5px;
  }
</style>
<body>
  <p>The page will reload after 5s.</p>
  <button>Home</button>
  <button>Blog</button>
  <button>Contact Us</button>
</body>
</html>
```

:::

---

## Validating data on inputs w the pattern attribute

::: normal-demo Validating data on inputs w the pattern attribute

```html
<form>
  <input 
    type="text"
    placeholder="Has to contain 4 letters and no numbers"
    pattern="[A-Za-z]{4}"
  />
  <button>Send</button>
</form>

<form>
  <input 
    type="password"
    placeholder="Has to contain 6 letters or more"
    pattern=".{6,}"
  />
  <button>Send</button>
</form>


<form>
  <input 
    type="text"
    placeholder="Can only contain numbers"
    pattern="[0-9]+"
  />
  <button>Send</button>
</form>

<form>
  <input
    type="url"
    placeholder="Must start with https:// or http://"
    pattern="http:?://.+"
  />
  <button>Send</button>
</form>
```

:::

---

## Isometric Button

::: normal-demo Isometric Button

```html
<button class="s-btn-iso">Touch me </button>
```

```css
.s-btn-iso {
  font-family: Bebas Neue, Arial;font-style:normal;font-weight:normal;font-size:24px;line-height:19px;color:#ffffff;background:#ba3f3f;border:none;padding:16px 28px 16px 28px;cursor:pointer;
  transition: 200ms ease;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg)
}
.s-btn-iso:hover {
  background:#ef4040;padding-top:5px;padding-bottom:5px;
}
.s-btn-iso:active {
  padding-left:20px;padding-right:20px;background:#ba3232
}
```

:::

---

## Image upload to Cloudinary on the client side

![Image upload to Cloudinary on the client side](/images/lang-css/image-upload-to-cloudinary-on-the-client-side.gif)

::: normal-demo Image upload to Cloudinary on the client side

```html
<form action="">
    <label for="imgupload">Choose an image</label>
    <input type="file" id="imgupload">
    <button>Upload!</button>
</form>

<div id="imageContainer"></div>
```

```js
const form = document.querySelector('form');
const imageContainer = document.getElementById('imageContainer')

const uploadImage = e => {
  e.preventDefault();
  const { files } = document.querySelector('input[type="file"]');

  if (files.length) {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'wdtips');
    const options = {
      method: 'POST',
      body: formData
    };

    return fetch(
      'https://api.Cloudinary.com/v1_1/*CLOUD_NAME*/image/upload',
      options
    ).then(res => res.json())
    .then(res => displayImage(res.secure_url))

    const displayImage = imgUrl => {
      imageContainer.innerHTML = '';
      const img = document.createElement('img');
      img.setAttribute('src', imgUrl);
      img.setAttribute('width', '250px');
      imageContainer.appendChild(img);
    }

    form.addEventListener('submit', uploadImage);
  }
}
```

:::

---

## Add Swipe to Close on a Sidebar

<VideoPlayer
  src="/videos/lang-css/add-swipe-to-close-on-a-sidebar.mp4"/>

::: normal-demo Add Swipe to Close on a Sidebar

```html
<div class="hamburger" id="icon">
  <span></span>
  <span></span>
  <span></span>
</div>
<div class="sidebar" id="sidebar"></div>
```

```js
const icon = document.getElementById('icon');
const sidebar = document.getElementById('sidebar');

let touchStart, touchEnd;

icon.addEventListener('click', () => {
  sidebar.classList.add('open')
});

sidebar.addEventListener('touchstart', e => {
  touchStart = e.targetTouches[0].clientX
});
sidebar.addEventListener('touchmove', e => {
  touchEnd = e.targetTouches[0].clientX
});
sidebar.addEventListener('touchend', e => {
  if (touchStart - touchEnd > 45) {
    sidebar.classList.remove('open');
  }
});
```

```css
.hamburger {
  position:absolute;top:3rem;left:2rem;cursor:pointer;
}
.hamburger span {
  display:block;width:2rem;height:0.3rem;margin:0.3rem 0;background-color:#e91e63;border-radius:30px;
}
.sidebar {
  position:absolute;top:0;left:0;width:18rem;height:100vh;background-color:#e91e63;
  transform:translateX(-20rem);transition:all 0.2s ease;
}
.sidebar.open {
  transform:translateX(0);
}
```

:::

---

## Was this helpful?

::: normal-demo Was this helpful?

```html
<section class="review">
  <h4 class="review__title">Was this helpful?</h4>
  <ul class="review__list">
    <li class="review__list__item">😭</li>
    <li class="review__list__item">😕</li>
    <li class="review__list__item">😀</li>
    <li class="review__list__item">😍</li>
  </ul>
</section>
```

```css
.review {
  min-width:18rem;padding:3rem;border-top:1px solid rgba(#1a202c, 0.15);border-bottom:1px solid rgba(#1a202c, 0.15);
}
.review .review__title {
  margin-top:0;text-align:center;font-weight:700;font-size:1.2rem;
}
.review .review__list {
  list-style-type:none;margin:0;padding:0;display:flex;justify-content:space-between;
}

.review .review__list .review__list__item {
    font-size:1.6rem;user-select:none;filter:grayscale(1);transition:filter 0.2s, transform 0.2s;
}

.review .review__list .review__list__item:hover {
  cursor:pointer;filter:grayscale(0);transform:scale(1.4);
}
```

:::

---

<TagLinks />
