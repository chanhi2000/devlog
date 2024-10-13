---
lang: ko-KR
title: Snippets
description: CSS > Snippets
icon: fas fa-eye-dropper
category: 
  - CSS 
  - Snippets
tag: 
  - css
  - scss
  - sass
  - snippets
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

- [<FontIcon icon="fas fa-spinner"/>Loader (with dots)](/programming/css/snippets/loader-with-dots.md)
- [<FontIcon icon="fas fa-spinner"/>Loading Spinner](/programming/css/snippets/loading-spinner.md)
- [<FontIcon icon="fas fa-sun"/>A Solar System Orbit](/programming/css/snippets/a-solar-system-orbit.md)
- [<FontIcon icon="iconfont icon-select"/>Isometric Button](/programming/css/snippets/isometric-button.md)
- [<FontIcon icon="fas fa-comment-dots"/>Was this helpful?](/programming/css/snippets/was-this-helpful.md)
- [<FontIcon icon="fas fa-clock"/>Digital Clock](/programming/css/snippets/digital-clock.md)
- [<FontIcon icon="fas fa-key"/>OTP Input Field](/programming/css/snippets/otp-input-field.md)
- [<FontIcon icon="fas fa-palette"/>Image Color Picker](/programming/css/snippets/image-color-picker.md)
- [<FontIcon icon="iconfont icon-view"/>Draggable Element](/programming/css/snippets/draggable-element.md)
- [<FontIcon icon="iconfont icon-view"/>ACME Classic Monster Movie Showcase](/programming/css/snippets/acme-classic-monster-movie-showcase.md)
- [<FontIcon icon="iconfont icon-view"/>Hero with interactive snowflakes](/programming/css/snippets/hero-with-interactive-snowflake.md)
- [<FontIcon icon="fas fa-clipboard-check"/>Validating data on inputs with the pattern attribute](/programming/css/snippets/validating-data-on-inputs-with-the-pattern-attribute.md)

- https://freefrontend.com/css-hero-effects/
- https://freefrontend.com/css-hover-effects/

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

## Image upload to Cloudinary on the client side

![Image upload to Cloudinary on the client side](/images/css/image-upload-to-cloudinary-on-the-client-side.gif)

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

<VidStack src="/videos/css/add-swipe-to-close-on-a-sidebar.mp4"/>

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

- https://dev.to/codingnepal/create-custom-music-player-in-javascript-2367
- https://codingartistweb.com/2022/11/confetti-effect-javascript/
- https://dev.to/codingnepal/star-rating-system-in-html-css-javascript-97a
- https://codingartistweb.com/2022/07/custom-video-player-using-javascript/
- https://codingartistweb.com/2022/07/weather-app-with-javascript/
- https://codingartistweb.com/2022/06/quiz-app-with-javascript/
- https://dev.to/murtuzaalisurti/how-to-make-a-qr-code-generator-using-vanilla-javascript-3cla
- https://dev.to/shantanu_jana/text-to-speech-converter-with-javascript-30oo
- https://www.codingnepalweb.com/simple-alarm-clock-html-javascript/
- https://codingartistweb.com/2023/05/screenshot-capture-app-using-javascript/
- https://dev.to/nehasoni__/random-quote-generator-using-html-css-and-javascript-3gbp
- https://dev.to/shantanu_jana/custom-right-click-context-menu-in-javascript-4112
- https://groundtutorial.com/rock-paper-scissor-game-javascript/
- https://dev.to/shantanu_jana/coin-toss-game-using-javascript-css-1cf0
- https://codingartistweb.com/2023/09/text-similarity-checker/
- https://codingartistweb.com/2023/10/password-strength-background/
- https://codingartistweb.com/2023/10/multiple-dice-roller/
- https://foolishdeveloper.com/detect-internet-speed-javascript/
- https://groundtutorial.com/drag-and-drop-sortable-list-javascript/
- https://groundtutorial.com/color-guessing-game-javascript/
- https://groundtutorial.com/how-to-check-palindrome-in-javascript/
- https://dev.to/shantanu_jana/how-to-build-a-countdown-timer-using-javascript-4f4h
- https://groundtutorial.com/double-range-slider-in-html-css-javascript/
- https://groundtutorial.com/tip-calculator-html-css-javascript/
- https://foolishdeveloper.com/random-password-generator-with-javascript/

---

<TagLinks />