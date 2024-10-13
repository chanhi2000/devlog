---
lang: ko-KR
title: OTP Input Field
description: Snippets > OTP Input Field
icon: fas fa-key
category: 
  - CSS
  - Snippets
tag: 
  - css
  - scss
  - sass
  - snippets
  - password
  - otp
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

<TagLinks />