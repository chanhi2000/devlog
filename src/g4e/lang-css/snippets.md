---
lang: ko-KR
title: 🛹Snippets
description: 🎨CSS > 🛹Snippets
category: 🎨CSS
tags: ["snippets", "css"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## Loader (with dots)

::: details implementation

```html
<ul id="loader">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

### CSS

```css
ul#loader {
  list-style-type:none;display:flex;
}
ul#loader li {
  margin:0.2rem;width:0.4rem;height: 0.4rem;border-radius:50%;background-color:#ff4754;
  animation: dotanimation 0.8s ease infinite alternate both;
}
ul#loader li:nth-child(2) {animation-delay:0.2s;}
ul#loader li:nth-child(3) {animation-delay:0.4s;}
ul#loader li:nth-child(4) {animation-delay:0.6s;}

@keyframes dotanimcatino {
  from {transform: translateY(0);}
  to {transform: translateY(-1rem);}
}
```

---

## Particles on Click

<VideoPlayer 
  src="https://scontent-ssn1-1.cdninstagram.com/v/t50.2886-16/119991414_644273203163700_6730101157272084855_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jYXJvdXNlbF9pdGVtLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=OZbNAmrHMlcAX_10WbU&edm=AP_V10EBAAAA&vs=18162319393062417_346286337&_nc_vs=HBkcFQAYJEdIYnNKZ2Mwc21tTDlra0NBSGZocFUxWUgyWmRia1lMQUFBRhUAAsgBACgAGAAbABUAACai486QkKLDQBUCKAJDMywXQCoAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAde4HAA%3D%3D&ccb=7-5&oh=00_AfBEwYdi9AdUWjFmY8VKS8aS4dFjHNKmQeO0edH806R8Rw&oe=64607D30&_nc_sid=4f375e"
/>


::: details Implementation

> [<FontIcon icon="iconfont icon-hot"/> by theprogrammingexpert](https://www.instagram.com/theprogrammingexpert/)

### HTML

```html
<body 
  data-particle="https://theprogramming.expert/public/tpe-logo.png">
</body>  
```

### css

```css
html,body {height:100%;}
body {margin:0;overflow:hidden;background:#121212;}
particle {position:fixed;top:0;left:0;opacity:0;pointer-events:none;background-repeat:no-repeat;background-size:contain;z-index:1;}
```

### js

```js
if (document.body.animate)
  document.body.addEventListener('click', pop);

function pop(event) {
  const amount = 30; // particle amount
  let x = event.clientX,
      y = event.clientY + window.scrollY;
  const create = (x, y) => {
    for (let i=0; i<amount; i++)
      createParticle(x, y, event.target.dataset.particle);
  }     

  if (event.clientX === 0 && event.clientY === 0) {
    const box = event.target.getBoundingClientRect();
    x = box.let + box.width / 2;
    y = box.top + box.height / 2;
  }
  
  create (x, y);
}

function createParticle(x, y, image) {
  const particle = document.createElement('particle');
  document.body.appendChild(particle);

  // just play a little bit with these values 
  const size = Math.floor(Math.random() + 28 + 8);
  const destinationX = (Math.random() - .5) * 300;
  const destinationY = (Math.random() - .5) * 300;
  const rotation = Math.random() * 500;
  const duration = Math.random() * 1000 + 4000;
  const delay = Math.random() * 250;

  particle.style.backgroundImage = `url(${image})`;
  particle.style.width = particle.style.height = `${size}px`;

  const animation = particle.animate([
    {
      transform: `
        translate(-50%, -50%)
        translate(${x}px, ${y}px)
        rotate(0deg)
      `,
      opacity: 1
    }, {
      transform: `
        translate(-50%, -50%)
        translate(${x + destinationX}px, ${y + destinationY}px)
        rotate(${rotation}deg)
      `,
      opacity: 1
    }
  ], {
    duration, 
    easing: 'cubic-bezier(0, .9, .57, 1)',
    delay
  });

  animation.onfinish = removeParticle;
}

function removeParticle(event) {
  event.srcElement.effect.target.remove();
}
```

:::

---

## Image Comparison Slider

<VideoPlayer 
  src="https://scontent-ssn1-1.cdninstagram.com/v/t50.2886-16/119894437_787768155356129_2119107499352203214_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jYXJvdXNlbF9pdGVtLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=6XJvjWVEtzsAX8prPoA&edm=AP_V10EBAAAA&vs=17851550360280343_3326934823&_nc_vs=HBkcFQAYJEdLVnhKUWZodXhDUmVNd0NBTTRmd1FzTGxXZ2Ria1lMQUFBRhUAAsgBACgAGAAbABUAACauy5S%2F%2Fvi1PxUCKAJDMywXQC67ZFocrAgYEmRhc2hfYmFzZWxpbmVfMV92MREAde4HAA%3D%3D&ccb=7-5&oh=00_AfC6GBKNDrq-i84r7iD-n1Py83YbodxGl_kEZgFoD5TAcw&oe=646079BA&_nc_sid=4f375e"
/>

::: details Implementation

### HTML

```html
<div class="compare">
    <div class="compare__image">
        <img src="1.png"/>
    </div>
    <div class="compare__image compare__overlay">
        <img src="2.png"/>
    </div>
</div>
```

### CSS

```css
* {margin:0;padding:0;border:none;-webkit-tap-highlight-color:transparent;}
:root {--slider-width:50rem;--slider-height:30rem;}
html,body {height:100%;}
body {display:flex;justify-content:center;align-items:center;background:#121212;}

.compare {
  position:relative;height:var(--slider-height);width:var(--slider-width);
}
.compare__slider {
  position:absolute;z-index:1;width:3.6rem;height:3.6rem;background:#121212;border:.1rem solid rgba(255,255,255,.1);box-shadow:0 .2rem .8rem rgba(0, 0, 0, .8);border-radius:50%;cursor:grab;transition:border-color .2s;
}

.compare__slider:active {
  border:.1rem solid rgba(255,255,255, .3);cursor: grabbing;
}

.compare__image {
  position:absolute;height:var(--slider-height);width:var(--slider-width);border-radius:.4rem;overflow:hidden;user-select:none;pointer-events:none;
}

.compare__image img {
  height:var(--slider-height);width:var(--slider-width);object-fit:cover;
}
```

### js

```js
function onSlideStart(event) {
  event.preventDefault();
  isClicked = true;
}

function onSlideMove(event) {
  if (!isClicked) return;
  doSlide(currentPosition(event));
}

function currentPosition(event = window.event) {
  let xImage = image.getBoundingClientRect();
  let x = 0;

  x = event.pageX - xImage.left;

  if (x<0) x = 0;
  if (x>width) x = width;

  return x;
}

function doSlide(x) {
  image.style.width = x + 'px';
  slider.style.left = image.offsetWdith - (slider.offsetWidth / 2) + 'px';
}
```

:::

<TagLinks />
