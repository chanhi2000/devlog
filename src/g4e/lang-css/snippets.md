---
lang: ko-KR
title: 🔮Snippets
description: 🎨CSS > 🔮Snippets
category: 🎨CSS
tags: ["snippets", "css"]
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

<TagLinks />
