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

## Image Color Picker

::: normal-demo Image Color Picker

```json
{
  "jsLib": [

  ],
  "cssLib":[
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
    "https://fonts.googleapis.com/css2?family=Poppins&display=swap"
  ]
}
```

```html
<div class="wrapper">
  <div class="image-container">
    <img id="image" src="demo-image-3.jpg" />
  </div>
  <div class="btns-container">
    <input type="file" id="file" accesskey="image/*" />
    <label for="file">Open A Photo</label>
    <button id="pick-color">Pick Color</button>
  </div>
  <div id="error" class="hide"></div>
  <div id="result" class="hide">
    <div>
      <input type="text" id="hex-val-ref" />
      <button onclick="copy('hex-val-ref')"><i class="fa-regular fa-copy"></i></button>
    </div>
    <div>
      <input type="text" id="rgb-val-ref" />
      <button onclick="copy('rgb-val-ref')"><i class="fa-regular fa-copy"></i></button>
    </div>
    <div id="picked-color-ref"></div>
  </div>
  <div id="custom-alert">Color Code Copied!</div>
</div>
```

```js
//Create Initial references
let pickColor = document.getElementById("pick-color");
let error = document.getElementById("error");
let result = document.getElementById("result");
let fileInput = document.getElementById("file");
let image = document.getElementById("image");
let hexValRef = document.getElementById("hex-val-ref");
let rgbValRef = document.getElementById("rgb-val-ref");
let customAlert = document.getElementById("custom-alert");
let pickedColorRef = document.getElementById("picked-color-ref");
let eyeDropper;

//Function On Window Load
window.onload = () => {
  //Check if the browser supports eyedropper
  if ("EyeDropper" in window) {
    pickColor.classList.remove("hide");
    eyeDropper = new EyeDropper();
  } else {
    error.classList.remove("hide");
    error.innerText = "Your browser doesn't support Eyedropper API";
    pickColor.classList.add("hide");
    return false;
  }
};

//Eyedropper logic
const colorSelector = async () => {
  const color = await (eyeDropper ?? new EyeDropper())?.open()?.then((colorValue) => {
      error.classList.add("hide");
      //Get the hex color code
      let hexValue = colorValue.sRGBHex;
      //Convert Hex Value To RGB
      let rgbArr = [];
      for (let i = 1; i < hexValue.length; i += 2) {
        rgbArr.push(parseInt(hexValue[i] + hexValue[i + 1], 16));
        console.log(rgbArr);
      }
      let rgbValue = "rgb(" + rgbArr + ")";
      console.log(hexValue, rgbValue);
      result.style.display = "grid";
      hexValRef.value = hexValue;
      rgbValRef.value = rgbValue;
      pickedColorRef.style.backgroundColor = hexValue;
    })?.catch((err) => {
      error.classList.remove("hide");
      //If user presses escape to close the eyedropper
      if (err.toString().includes("AbortError")) {
        error.innerText = "";
      } else {
        error.innerText = err;
      }
    });
};

//Button click
pickColor.addEventListener("click", colorSelector);

//Allow user to choose image of their own choice
fileInput.onchange = () => {
  result.style.display = "none";
  //The fileReader object helps to read contents of file stored on computer
  let reader = new FileReader();
  //readAsDataURL reads the content of input file
  reader.readAsDataURL(fileInput.files[0]);
  reader.onload = () => {
    //onload is triggered after file reading operation is successfully completed
    //set src attribute of image to result/input file
    image.setAttribute("src", reader.result);
  };
};

//Function to copy the color code
let copy = (textId) => {
  //Selects the text in the <input> element
  document.getElementById(textId).select();
  //Copies the selected text to clipboard
  document.execCommand("copy");
  //Display Alert
  customAlert.style.transform = "scale(1)";
  setTimeout(() => {
    customAlert.style.transform = "scale(0)";
  }, 2000);
};
```

```css
/* Reset default margin, padding, and box-sizing */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif; /* Set default font family */
}
.wrapper {
  background-color: #ffffff;
  width: 90%;
  max-width: 31.25em;
  padding: 1.5em;
  border-radius: 0.4em;
  /* transform: translate(-50%,-50%); */
}
img {
  display: block;
  width: 80%;
  max-height: 400px;
  margin: auto;
  margin-bottom: 30px;
  box-shadow: 0 0 20px rgba(0,139,253,0.25);
}
.btns-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  margin: 1em 0 1.5em 0;
}
input,label,button { border: none;outline: none;}
input[type="file"] { display: none; }
label,button {
  display: block;
  font-size: 1.1em;
  background-color: #025bee;
  color: #ffffff;
  text-align: center;
  padding: 0.5em 0;
  border-radius: 0.3em;
  cursor: pointer;
}
#result {
  /* display: grid; */
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
}
#result div {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#result input {
  background-color: transparent;
  font-size: 1em;
  padding: 0.5em;
  width: 100%;
  color: #313b4c;
  border-bottom: 0.1em solid #021637;
}
#result button { right: 0.6em;background-color: transparent;color: #7c8696; }
#picked-color-ref {
  grid-column: 2;
  grid-row: 1 / 3;
  border: 0.6em solid #d9e8ff;
  border-radius: 0.5em;
}
#custom-alert {
  transform: scale(0);
  transition: 0.5s;
  transform-origin: center;
  background-color: #d9e8ff;
  color: #025bee;
  text-align: center;
  padding: 0.5em;
  margin-top: 1.5em;
}
.hide {
  display: none;
}
#error {
  color: #ff725a;
  text-align: center;
}
```

:::

## Digital Clock

::: normal-demo Digital Clock

```json
{
  "csslib": [
    "https://fonts.googleapis.com/css?family=Orbitron"
  ]
}
```

```html
<!--Display day information e.g Wednesday March 12,2021-->
<section>
  <div id="dayIntro">
    <p id="dayName"></p>
  </div>
  <div class="container">
    <!-- Display time -->
    <div class="dispClock">
      <div id="time"></div>
    </div>
  </div>
</section>
```

```css
```

```js
const clock = document.getElementById("time");
const dayIntro = document.getElementById("dayName");

setInterval(currentTime, 1000);

function currentTime() {
  let time = new Date();   // creating object of Date class
  let dayName=time.getDay();
  let month=time.getMonth();
  let year=time.getFullYear();
  let date=time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  var am_pm = "AM";
  if (hour==12)
    am_pm = "PM";
  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  //value of current time
  let currentTime = hour + ":" + min + ":" + sec +" "+ am_pm;

  // value of present day(Day, Month, Year)
  var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  var presentDay=week[dayName]+", "+months[month]+" "+date+", "+year;

  clock.innerHTML = currentTime;
  dayIntro.innerHTML = presentDay;
}

currentTime();  //calling currentTime() function to initiate the process
```

```css
/* Google font */
@import url('https://fonts.googleapis.com/css?family=Orbitron');

* { margin: 0;padding: 0; }
section { display: grid; place-items: center; }
#dayIntro {
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 3px;
  border: 7px solid rgb(17,129,134);
  border-radius: 10px;
  margin: 20px;
  font-family: 'Times New Roman', Times, serif;
  padding: 15px;
  background: linear-gradient(180deg, #a8b9d3,rgb(173, 227, 229));
}
.container {
  height: 120px;
  width: 550px;
  position: relative;
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  border-radius: 10px;
  cursor: default;
}
.container .dispClock,.container {
}
.container .dispClock {
  top: 50%;
  height: 105px;
  width: 535px;
  background: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  border-radius: 6px;
  text-align: center;
}
.dispClock #time {
  line-height: 85px;
  color: #fff;
  font-size: 70px;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```
:::

---

## OTP Input Field

::: normal-demo OTP Input Field

```html
<div class="otp-input-fields">
  <input type="text" maxlength="1" />
  <input type="text" maxlength="1" />
  <input type="text" maxlength="1" />
  <input type="text" maxlength="1" />
  <input type="text" maxlength="1" />
  <input type="text" maxlength="1" />
</div>
```

```css
/* 
@font-face {
	 font-family: "Roboto", sans-serif;
	 src: url("./../assets/fonts/Roboto-Bold.ttf");
	 font-weight: 700;
}
 @font-face {
	 font-family: "Roboto", sans-serif;
	 src: url("./../assets/fonts/Roboto-Regular.ttf");
	 font-weight: 500;
}
 @font-face {
	 font-family: "Roboto", sans-serif;
	 src: url("./../assets/fonts/Roboto-Light.ttf");
	 font-weight: 300;
} 
*/
 body, html {
	 width: 100%;
	 height: 100%;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 flex-direction: column;
	 background-color: #0c1016;
	 font-size: 10px;
	 margin: 0;
	 padding: 0;
	 color: #00fff1;
	 font-family: "Roboto", sans-serif;
}
* {
	 box-sizing: border-box;
}
 .otp-input-fields {
	 display: flex;
	 flex-direction: row;
}
 .otp-input-fields input {
	 width: 4.9rem;
	 padding: 1.5rem;
	 font-size: 3rem;
	 border: none;
	 margin: 0 1rem 0 0;
	 background-color: rgba(255, 255, 255, 0.1);
	 border-radius: 0.5rem;
	 color: #fff;
	 text-align: center;
	 transition: all 150ms ease-in-out;
}
 .otp-input-fields input:last-child {
	 margin: 0 0 0 0;
}
 .otp-input-fields input:focus {
	 color: #00fff1;
	 outline: 0.3rem solid #00fff1;
}
 .otp-input-fields input:nth-child(3) {
	 margin: 0 3rem 0 0;
}
 .otp-input-fields input:disabled {
	 opacity: 0.3;
}
 
```

```js
const inputs = document.querySelectorAll(".otp-input-fields input");

inputs.forEach((input, index) => {
	input.dataset.index = index;
	input.addEventListener("focus", clear);
	input.addEventListener("keydown", clear);
	input.addEventListener("paste", onPaste);
	input.addEventListener("keyup", onKeyUp);
});

function clear($event) {
	$event.target.value = "";
}

function checkNumber(number) {
	return /[0-9]/g.test(number);
}

function onPaste($event) {
	const data = $event.clipboardData.getData("text");
	const value = data.replace(/ /g, "").split("");
	if (!value.some((number) => !checkNumber(number))) {
		if (value.length === inputs.length) {
			inputs.forEach((input, index) => {
				input.value = value[index];
			});
			submit();
		}
	} else {
		return;
	}
}

function onKeyUp($event) {
	const input = $event.target;
	const value = input.value;
	const fieldIndex = +input.dataset.index;

	if ($event.key === "Backspace" && fieldIndex > 0) {
		input.previousElementSibling.focus();
	}

	if (checkNumber(value)) {
		if (value.length > 0 && fieldIndex < inputs.length - 1) {
			input.nextElementSibling.focus();
		}

		if (input.value !== "" && fieldIndex === inputs.length - 1) {
			submit();
		}
	} else {
		clear($event);
	}
}

function submit() {
	let otp = "";

	inputs.forEach((input) => {
		otp += input.value;
		input.disabled = true;
	});

	console.log(otp);
}

```

:::

---

## Draggable Element

::: normal-demo Draggable Element

```html
<div id="container">
  <div id="draggable-elem">
    <p>Drag Me</p>
  </div>
</div>

```

```css
body {
  padding: 0;
  margin: 0;
  background: linear-gradient(135deg, #a3d0f1, #021560);
}
#container {
  height: 100vh;
  width: 100vw;
  position: relative;
}
#draggable-elem {
  position: absolute;
  background-color: #ffffff;
  font-size: 1.6em;
  width: 7em;
  height: 7em;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  display: grid;
  place-items: center;
  font-family: "Poppins", sans-serif;
  border-radius: 0.3em;
  cursor: move;
}
```

```js
// Select the draggable element by its ID
let draggableElem = document.getElementById("draggable-elem");

// Initialize variables to store initial mouse coordinates and movement state
let initialX = 0,
  initialY = 0;
let moveElement = false;

// Define an object to store event types for mouse and touch interactions
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

// Initialize a variable to store the type of input device (mouse or touch)
let deviceType = "";

// Function to detect touch device by attempting to create a TouchEvent
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch"; // If successful, set deviceType to "touch"
    return true;
  } catch (e) {
    deviceType = "mouse"; // If unsuccessful, set deviceType to "mouse"
    return false;
  }
};

isTouchDevice(); // Detect the type of input device

// Event listener for the start of dragging (mousedown or touchstart)
draggableElem.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault(); // Prevent default behavior of the event

  // Store initial x and y coordinates based on the type of input device
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

  // Set moveElement flag to true to indicate that dragging has started
  moveElement = true;
});

// Event listener for dragging movement (mousemove or touchmove)
draggableElem.addEventListener(events[deviceType].move, (e) => {
  // Check if dragging is in progress
  if (moveElement) {
    e.preventDefault(); // Prevent default behavior of the event

    // Calculate new x and y coordinates based on the type of input device
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    // Update the position of the draggable element relative to the initial position
    draggableElem.style.top =
      draggableElem.offsetTop - (initialY - newY) + "px";
    draggableElem.style.left =
      draggableElem.offsetLeft - (initialX - newX) + "px";

    // Update initial coordinates for the next movement calculation
    initialX = newX;
    initialY = newY;
  }
});

// Event listener for the end of dragging (mouseup or touchend)
draggableElem.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    // Set moveElement flag to false to indicate that dragging has ended
    moveElement = false;
  })
);

// Event listener to stop movement when the mouse leaves the draggable area
draggableElem.addEventListener("mouseleave", stopMovement);

// Additional event listener to ensure movement stops on touchend event
draggableElem.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});
```

:::

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
- https://groundtutorial.com/color-guessing-game-javascript/
- https://groundtutorial.com/how-to-check-palindrome-in-javascript/
- https://dev.to/shantanu_jana/how-to-build-a-countdown-timer-using-javascript-4f4h
- https://groundtutorial.com/double-range-slider-in-html-css-javascript/
- https://groundtutorial.com/tip-calculator-html-css-javascript/
- https://foolishdeveloper.com/random-password-generator-with-javascript/

---

<TagLinks />
