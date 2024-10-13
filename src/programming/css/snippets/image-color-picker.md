---
lang: ko-KR
title: Image Color Picker
description: Snippets > Image Color Picker
icon: fas fa-palette
category: 
  - CSS
  - Snippets
tag: 
  - css
  - scss
  - sass
  - snippets
  - color
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

---

<TagLinks />