---
lang: ko-KR
title: Snippets (Serpiko) 
description: React.js > Snippets (Serpiko)
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
  - snippets (Serpiko)
head:
  - - meta:
    - property: og:title
      content: React.js > Snippets (Serpiko)
    - property: og:description
      content: Snippets (Serpiko)
    - property: og:url
      content: https://chanhi2000.github.io/programming/js-react/snippets-serpiko.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## react using state when you don't need it

```component VPCard
{
  "title": "serpiko > react using state when you don't need it",
  "desc": "react using state when you don't need it",
  "link": "https://serpiko.tistory.com/905",
  "logo": "https://t1.daumcdn.net/cfile/tistory/2355A15052F5E9A315",
  "background": "rgba(255,255,255,0.2)"
}
```

<VidStack src="youtube/GGo3MVBFr1A" />

input 값을 입력받고 보여줄 때, `useState`를 사용하지 않아도 된다

`useState`를 배제하므로써, 리렌더링 없앨 수 있다

::: sandpack#react react using state when you don't need it [rtl theme=dark]

@file /App.js

```js 
import "./styles.css";
import { useState, useRef } from "react";

let renderCount = 0;
export default function App() {
  const emailRef = useRef("");
  const [inputResult, setInputResult] = useState("");

  renderCount++;

  function onSubmit(e) {
    e.preventDefault();
    setInputResult(emailRef.current.value);
    console.log(emailRef.current.value);
  }

  return (
    <>
      <h4>Rerender Count: {renderCount}</h4>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          onChange={() => {
            console.log(emailRef);
          }}
        />
        <button type="submit">Submit</button>
        <p>입력한 텍스트: {inputResult}</p>
      </form>
    </>
  );
}
```

@file styles.css

```css
.App {
  font-family: sans-serif;
  text-align: center;
}
```

@setup

```js
{
  dependencies: {
    "loader-utils": "3.2.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-scripts": "5.0.1"
  }
}
```

:::

---

## React Hook Form: FormProvider-useFormContext

```component VPCard
{
  "title": "serpiko > React Hook Form: FormProvider-useFormContext",
  "desc": "React Hook Form: FormProvider-useFormContext",
  "link": "https://serpiko.tistory.com/904",
  "logo": "https://t1.daumcdn.net/cfile/tistory/2355A15052F5E9A315",
  "background": "rgba(255,255,255,0.2)"
}
```

- ContextAPI를 이용하여 <FontIcon icon="fa-brands fa-js"/>`Sub.js`에서 사용한 값을 <FontIcon icon="fa-brands fa-js"/>`App.js` 에서도 감지가 가능하다

::: sandpack#react React Hook Form: FormProvider-useFormContext [rtl theme=dark]

@file /App.js

```js
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import Sub from "./Sub";
import "./styles.css";
import { useOrderFormContext } from "./FormProviders";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useOrderFormContext();

  const [data, setData] = useState("");

  // 등록된 `이름`을 전달하여 입력값을 확인
  // console.log(watch("firstName"));
  // console.log(errors);

  return (
    <div>
      {/* `handleSubmit` 은 onSubmit을 호출하기 전에 입력을 검증 */}
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <Header />
        {/**
         * @description Register fields
         * - `register`함수를 호출하여 입력필드를 훅에 등록하여 값을 관리할 수 있다
         * - 이후에는 이 값으로 유효성 검사, 제출 등의 작업을 할 수 있다
         */}
        <label htmlFor="firstName">[App.js] First Name</label>
        <input
          {...register("firstName")}
          id="firstName"
          placeholder="First name"
        />

        <label htmlFor="lastName">[App.js] Last Name</label>
        {errors.lastName && <span>알파벳만 입력해 주세요</span>}
        <input
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
          id="lastName"
          placeholder="Last name (알파벳만 입력해 주세요)"
        />

        <label htmlFor="category">[App.js] category</label>
        <select id="category" {...register("category")}>
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>

        {/**
         * @description Apply validation
         * - HTML 표준 유효성 검사를 수행하도록 되어있다
         * - required: 필수값 여부
         * - min
         * - max
         * - minLength
         * - maxLength
         * - pattern
         * - validate
         */}
        <label htmlFor="aboutYou">[App.js] aboutYou</label>
        {/* `error` 객체를 사용하여 필듸 유효성 검사에 실패한 경우 오류 메시지를 표시할 수 있다  */}
        {errors.aboutYou && (
          <span>값을 입력해 주세요 (최소5자, 최대 20자)</span>
        )}
        <textarea
          id="aboutYou"
          {...register("aboutYou", {
            required: true,
            minLength: 5,
            maxLength: 20,
          })}
          placeholder="About you (최소5자, 최대 20자)"
        />
        <Sub />
        <p>{data}</p>
        <input type="submit" />
      </form>
    </div>
  );
}
```

@file FormProviders.js

```js
import { createContext, useContext } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

export function FormProviders({ children }) {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export const useOrderFormContext = () => {
  const methods = useFormContext();
  return methods;
};
```

@file Header.js

```js
import React from "react";
let renderCount = 0;

export default function Header() {
  renderCount++;

  return (
    <div style={{ marginBottom: 10 }}>
      <span className="counter">Render Count: {renderCount}</span>
      <h1 className="h1">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDMiIGhlaWdodD0iMjAyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PHBhdGggZD0iTTE1Ny45OTUgOC41YzEwLjA4IDAgMTkuMjA2IDQuMDg3IDI1LjgxMiAxMC42OTJTMTk0LjUgMzQuOTI0IDE5NC41IDQ1LjAwM2gwdjExMS45OTRjMCAxMC4wOC00LjA4NiAxOS4yMDYtMTAuNjkyIDI1LjgxMmEzNi4zOSAzNi4zOSAwIDAgMS0yNS44MTMgMTAuNjkxaDAtMTEyLjk5Yy0xMC4wOCAwLTE5LjIwNi00LjA4Ny0yNS44MTItMTAuNjkyUzguNSAxNjcuMDc2IDguNSAxNTYuOTk3aDBWNDUuMDAzYzAtMTAuMDggNC4wODYtMTkuMjA2IDEwLjY5Mi0yNS44MTJBMzYuMzkgMzYuMzkgMCAwIDEgNDUuMDA1IDguNWgweiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjE3IiBmaWxsPSIjZWM1OTkwIi8+PHBhdGggZD0iTTEzMy4zODUgNTEuNjA0aC0yMC44NjhjLTEuNTMtNC43NjYtNS45ODEtOC4wMDEtMTEuMDA5LTguMDAxcy05LjQ3OSAzLjIzNS0xMS4wMDkgOC4wMDFINjkuNjE2Yy04LjIyMiAwLTE0Ljg4NyA2LjYzMi0xNC44ODcgMTQuODEzdjc3LjE3N2MwIDguMTgxIDYuNjY1IDE0LjgxMyAxNC44ODcgMTQuODEzaDYzLjc2OWM4LjIyMiAwIDE0Ljg4Ny02LjYzMiAxNC44ODctMTQuODEzVjY2LjQxN2MwLTguMTgxLTYuNjY1LTE0LjgxMy0xNC44ODctMTQuODEzaDB6TTkxLjU0IDU0LjI5N2ExLjM1IDEuMzUgMCAwIDAgMS4zNTMtMS4wNjRjLjg4Ni00LjA0NiA0LjQ4Ni02LjkzMiA4LjY0OC02LjkzMnM3Ljc2MiAyLjg4NSA4LjY0OCA2LjkzMmExLjM1IDEuMzUgMCAwIDAgMS4zNTMgMS4wNjRoNy4yODF2OC44MjFjMCAyLjIzMS0xLjgxOCA0LjA0LTQuMDYgNC4wNEg4OC4zMDVjLTIuMjQyIDAtNC4wNi0xLjgwOS00LjA2LTQuMDR2LTguODIxaDcuMjk0em01NC4wMjUgODkuMjk3YzAgNi42OTQtNS40NTMgMTIuMTItMTIuMTggMTIuMTJINjkuNjE2Yy02LjcyNyAwLTEyLjE4LTUuNDI2LTEyLjE4LTEyLjEyVjY2LjQxN2MwLTYuNjk0IDUuNDUzLTEyLjEyIDEyLjE4LTEyLjEyaDExLjkyM3Y4LjgyMWMwIDMuNzE5IDMuMDMgNi43MzMgNi43NjcgNi43MzNoMjYuMzljMy43MzcgMCA2Ljc2Ny0zLjAxNSA2Ljc2Ny02LjczM3YtOC44MjFoMTEuOTIzYzYuNzI3IDAgMTIuMTggNS40MjYgMTIuMTggMTIuMTJ2NzcuMTc3em0tMTQuODMzLTQ3Ljk4MWgtMjMuODE5YTEuMzUgMS4zNSAwIDAgMC0xLjM1MyAxLjM0NyAxLjM1IDEuMzUgMCAwIDAgMS4zNTMgMS4zNDdoMjMuODE5YTEuMzUgMS4zNSAwIDAgMCAxLjM1My0xLjM0NyAxLjM1IDEuMzUgMCAwIDAtMS4zNTMtMS4zNDdoMHptLTM1LjE4NiAwSDcxLjcyN2ExLjM1IDEuMzUgMCAwIDAtMS4zNTMgMS4zNDcgMS4zNSAxLjM1IDAgMCAwIDEuMzUzIDEuMzQ3aDIzLjgxOWExLjM1IDEuMzUgMCAwIDAgMS4zNTMtMS4zNDcgMS4zNSAxLjM1IDAgMCAwLTEuMzUzLTEuMzQ3aDB6bTM1LjI1NCAzMi41ODloLTIzLjg4NmExLjM1IDEuMzUgMCAwIDAtMS4zNTMgMS4zNDcgMS4zNSAxLjM1IDAgMCAwIDEuMzUzIDEuMzQ3SDEzMC44YTEuMzUgMS4zNSAwIDAgMCAxLjM1My0xLjM0NyAxLjM1IDEuMzUgMCAwIDAtMS4zNTMtMS4zNDdoMHptLTM1LjE4NyAwSDcxLjcyN2ExLjM1IDEuMzUgMCAwIDAtMS4zNTMgMS4zNDcgMS4zNSAxLjM1IDAgMCAwIDEuMzUzIDEuMzQ3aDIzLjg4NmExLjM1IDEuMzUgMCAwIDAgMS4zNTMtMS4zNDcgMS4zNSAxLjM1IDAgMCAwLTEuMzUzLTEuMzQ3aDB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+" />
        React Hook Form: FormProvider-useFormContext
      </h1>
      <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0 }}>
        - ContextAPI를 이용하여 Sub.js에서 사용한 값을 App.js 에서도 감지가
        가능하다
      </p>
    </div>
  );
}
```

@file Sub.js

```js
import { useOrderFormContext } from "./FormProviders";

export default function Sub() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useOrderFormContext();

  return (
    <div>
      <label htmlFor="mytName">[Sub.js] My Name</label>
      <input {...register("mytName")} id="mytName" placeholder="myname" />
    </div>
  );
}
```

@file index.js

```js
import { createRoot } from "react-dom/client";

import { FormProviders } from "./FormProviders";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const AppContainer = () => (
  <FormProviders>
    <App />
  </FormProviders>
);

root.render(<AppContainer />);
```

@file styles.css

```css
.App {
  font-family: sans-serif;
  text-align: center;
}
body {
  background: #0e101c;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  color: white;
  padding: 0 20px 50px;
}

img {
  width: 35px;
  height: 35px;
  margin-right: 10px;
  position: relative;
  top: 6px;
}

.h1 {
  margin-top: 80px;
  color: white;
  font-size: 25px;
  padding-bottom: 0px;
}

.form {
  max-width: 800px;
  margin: 0 auto;
}

.p {
  color: #bf1650;
  text-align: center;
}

textarea,
select,
input {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
}

.label,
section > label {
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: white;
  font-size: 14px;
  font-weight: 200;
}

input[type="submit"],
.button {
  position: relative;
  background: #ec5990;
  color: white;
  text-transform: uppercase;
  border: none;
  font-weight: 600;
  margin-top: 20px;
  padding: 20px;
  font-size: 16px;
  letter-spacing: 2px;
  display: block;
  appearance: none;
  border-radius: 4px;
  width: 100%;
  font-weight: 400;
  letter-spacing: 0.5rem;
  transition: 0.3s all;
}

.buttonBlack {
  background: black;
  border: 1px solid white;
}

.App {
  max-width: 600px;
  margin: 0 auto;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.counter {
  font-weight: 400;
  background: white;
  color: black;
  padding: 10px 15px;
  border-radius: 4px;
  position: fixed;
  top: 20px;
  right: 30px;
  z-index: 9999999;
}

button[type="button"] {
  padding: 5px;
  background: #516391;
  color: white;
  letter-spacing: 0px;
  text-transform: none;
  padding: 10px;
  letter-spacing: 1px;
}

input[type="submit"]:hover,
button[type="button"]:hover {
  background: #bf1650;
  color: white;
}

input[type="submit"]:active {
  transition: 0.3s all;
  top: 2px;
}

.preact {
  opacity: 0;
  color: white;
}

.preact:hover {
  opacity: 1;
}
```

@setup

```js
{
  dependencies: {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "^5.0.0",
    "react-hook-form": "7.51.0"
  }
}
```

:::

---

## React Hook Form (useState-less 패턴)

```component VPCard
{
  "title": "serpiko > React Hook Form (useState-less 패턴)",
  "desc": "React Hook Form (useState-less 패턴)",
  "link": "https://serpiko.tistory.com/903",
  "logo": "https://t1.daumcdn.net/cfile/tistory/2355A15052F5E9A315",
  "background": "rgba(255,255,255,0.2)"
}
```

- RHF에 내장된 `FormProvider`, `useOrderFormContext`를 이용하여 ContextAPI구현
- Control을 주입받은 컴포넌트로 모든 컴포넌트는 같은 useForm 생성 시점과 일치 시킨다
- `setValue`, `resetField`, `useWatch` 이용하여 `useState`와 리렌더링 없이 양방향 값 핸들링하고 연산
- 제출(Submit)시, 컴포넌트에 정의된 name 기준으로 값들을 반환한다

::: sandpack#react React Hook Form (useState-less 패턴) [rtl theme=dracula]

@file /src/App.tsx

```tsx
import { useEffect, useState } from "react";
import Header from "./common/Header";
import Sub from "./Sub";
import { useForm, Controller } from "react-hook-form";
import { useOrderFormContext } from "./FormProviders";
import "./styles.css";

const name = "firstNumber";
const defaultValue = "";
export default function App() {
  const [data, setData] = useState("");
  const { control, setValue, getValues, handleSubmit, reset } =
    useOrderFormContext();

  const numberToComma = (value: string) => {
    return Number(value.replace(/,/g, "")).toLocaleString();
  };

  const handleIncrement = () => {
    const getFirstNumber = getValues("firstNumber") ?? defaultValue;
    console.log(getFirstNumber);
    setValue(
      "firstNumber",
      numberToComma((Number(getFirstNumber.replace(/,/g, "")) + 100).toString())
    );
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <div className="input-group">
          <label>
            <Controller
              control={control}
              name={name}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <input
                  value={value ?? defaultValue}
                  id={name}
                  type="text"
                  placeholder="first number"
                  onBlur={onBlur}
                  onChange={(e) => {
                    onChange(numberToComma(e.target.value));
                  }}
                />
              )}
            />
          </label>
          <button
            className="button blue"
            type="button"
            onClick={handleIncrement}
          >
            add 100
          </button>
        </div>
        <Sub numberToComma={numberToComma} />
        <input type="submit" />
      </form>
      <p>{data}</p>
    </div>
  );
}
```

@file /src/common/Header.tsx

```tsx
import React from "react";
let renderCount = 0;

export default function Header() {
  renderCount++;

  return (
    <div style={{ marginBottom: 10 }}>
      <span className="counter">Render Count: {renderCount}</span>
      <h1 className="h1">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDMiIGhlaWdodD0iMjAyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PHBhdGggZD0iTTE1Ny45OTUgOC41YzEwLjA4IDAgMTkuMjA2IDQuMDg3IDI1LjgxMiAxMC42OTJTMTk0LjUgMzQuOTI0IDE5NC41IDQ1LjAwM2gwdjExMS45OTRjMCAxMC4wOC00LjA4NiAxOS4yMDYtMTAuNjkyIDI1LjgxMmEzNi4zOSAzNi4zOSAwIDAgMS0yNS44MTMgMTAuNjkxaDAtMTEyLjk5Yy0xMC4wOCAwLTE5LjIwNi00LjA4Ny0yNS44MTItMTAuNjkyUzguNSAxNjcuMDc2IDguNSAxNTYuOTk3aDBWNDUuMDAzYzAtMTAuMDggNC4wODYtMTkuMjA2IDEwLjY5Mi0yNS44MTJBMzYuMzkgMzYuMzkgMCAwIDEgNDUuMDA1IDguNWgweiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjE3IiBmaWxsPSIjZWM1OTkwIi8+PHBhdGggZD0iTTEzMy4zODUgNTEuNjA0aC0yMC44NjhjLTEuNTMtNC43NjYtNS45ODEtOC4wMDEtMTEuMDA5LTguMDAxcy05LjQ3OSAzLjIzNS0xMS4wMDkgOC4wMDFINjkuNjE2Yy04LjIyMiAwLTE0Ljg4NyA2LjYzMi0xNC44ODcgMTQuODEzdjc3LjE3N2MwIDguMTgxIDYuNjY1IDE0LjgxMyAxNC44ODcgMTQuODEzaDYzLjc2OWM4LjIyMiAwIDE0Ljg4Ny02LjYzMiAxNC44ODctMTQuODEzVjY2LjQxN2MwLTguMTgxLTYuNjY1LTE0LjgxMy0xNC44ODctMTQuODEzaDB6TTkxLjU0IDU0LjI5N2ExLjM1IDEuMzUgMCAwIDAgMS4zNTMtMS4wNjRjLjg4Ni00LjA0NiA0LjQ4Ni02LjkzMiA4LjY0OC02LjkzMnM3Ljc2MiAyLjg4NSA4LjY0OCA2LjkzMmExLjM1IDEuMzUgMCAwIDAgMS4zNTMgMS4wNjRoNy4yODF2OC44MjFjMCAyLjIzMS0xLjgxOCA0LjA0LTQuMDYgNC4wNEg4OC4zMDVjLTIuMjQyIDAtNC4wNi0xLjgwOS00LjA2LTQuMDR2LTguODIxaDcuMjk0em01NC4wMjUgODkuMjk3YzAgNi42OTQtNS40NTMgMTIuMTItMTIuMTggMTIuMTJINjkuNjE2Yy02LjcyNyAwLTEyLjE4LTUuNDI2LTEyLjE4LTEyLjEyVjY2LjQxN2MwLTYuNjk0IDUuNDUzLTEyLjEyIDEyLjE4LTEyLjEyaDExLjkyM3Y4LjgyMWMwIDMuNzE5IDMuMDMgNi43MzMgNi43NjcgNi43MzNoMjYuMzljMy43MzcgMCA2Ljc2Ny0zLjAxNSA2Ljc2Ny02LjczM3YtOC44MjFoMTEuOTIzYzYuNzI3IDAgMTIuMTggNS40MjYgMTIuMTggMTIuMTJ2NzcuMTc3em0tMTQuODMzLTQ3Ljk4MWgtMjMuODE5YTEuMzUgMS4zNSAwIDAgMC0xLjM1MyAxLjM0NyAxLjM1IDEuMzUgMCAwIDAgMS4zNTMgMS4zNDdoMjMuODE5YTEuMzUgMS4zNSAwIDAgMCAxLjM1My0xLjM0NyAxLjM1IDEuMzUgMCAwIDAtMS4zNTMtMS4zNDdoMHptLTM1LjE4NiAwSDcxLjcyN2ExLjM1IDEuMzUgMCAwIDAtMS4zNTMgMS4zNDcgMS4zNSAxLjM1IDAgMCAwIDEuMzUzIDEuMzQ3aDIzLjgxOWExLjM1IDEuMzUgMCAwIDAgMS4zNTMtMS4zNDcgMS4zNSAxLjM1IDAgMCAwLTEuMzUzLTEuMzQ3aDB6bTM1LjI1NCAzMi41ODloLTIzLjg4NmExLjM1IDEuMzUgMCAwIDAtMS4zNTMgMS4zNDcgMS4zNSAxLjM1IDAgMCAwIDEuMzUzIDEuMzQ3SDEzMC44YTEuMzUgMS4zNSAwIDAgMCAxLjM1My0xLjM0NyAxLjM1IDEuMzUgMCAwIDAtMS4zNTMtMS4zNDdoMHptLTM1LjE4NyAwSDcxLjcyN2ExLjM1IDEuMzUgMCAwIDAtMS4zNTMgMS4zNDcgMS4zNSAxLjM1IDAgMCAwIDEuMzUzIDEuMzQ3aDIzLjg4NmExLjM1IDEuMzUgMCAwIDAgMS4zNTMtMS4zNDcgMS4zNSAxLjM1IDAgMCAwLTEuMzUzLTEuMzQ3aDB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+" />
        React Hook Form (useState-less 패턴)
      </h1>
      <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0 }}>
        - RHF에 내장된 FormProvider, useOrderFormContext를 이용하여
        ContextAPI구현
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0 }}>
        - Control을 주입받은 컴포넌트로 모든 컴포넌트는 같은 useForm 생성 시점과
        일치 시킨다
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0 }}>
        - setValue, resetField, useWatch 이용하여 useState와 리렌더링 없이
        양방향 값 핸들링하고 연산
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0 }}>
        - 제출(Submit)시, 컴포넌트에 정의된 name 기준으로 값들을 반환한다
      </p>
    </div>
  );
}
```

@file /src/FormProviders.tsx

```tsx
import { ReactNode, createContext, useContext } from "react";
import {
  useForm,
  FormProvider,
  UseFormReturn,
  useFormContext,
} from "react-hook-form";

export function FormProviders({ children }: { children?: ReactNode }) {
  const formReturn = useForm();
  const value = formReturn;
  return <FormProvider {...value}>{children}</FormProvider>;
}

export const useOrderFormContext = () => {
  const methods = useFormContext();
  return methods;
};
```

@file /src/Sub.tsx

```tsx
import { useEffect, useState } from "react";
import { useForm, useWatch, Controller } from "react-hook-form";
import "./styles.css";
import { useOrderFormContext } from "./FormProviders";

const name = "secondNumber";
const defaultValue = "";

export default function Sub(props) {
  const { control, setValue, getValues, handleSubmit, reset, resetField } =
    useOrderFormContext();
  const [data, setData] = useState();
  const { numberToComma } = props;

  const firstNumber = useWatch({
    name: "firstNumber",
    control,
    defaultValue,
  });

  const secondNumber = useWatch({
    name: "secondNumber",
    control,
    defaultValue,
  });

  const resetFields = () => {
    resetField("firstNumber", { defaultValue: "" });
    resetField("secondNumber", { defaultValue: "" });
  };

  const handleReset = (mode: "resetField" | "destroy") => {
    if (mode === "resetField") {
      resetFields();
    } else if (mode === "destroy") {
      reset();
    }
  };

  useEffect(() => {
    resetFields();
  }, []);

  useEffect(() => {
    if (firstNumber && secondNumber) {
      const formatedFirstNumber = Number(firstNumber.replace(/,/g, ""));
      const formatedSecondNumber = Number(secondNumber.replace(/,/g, ""));
      setData(formatedFirstNumber * formatedSecondNumber);
    }
  }, [firstNumber, secondNumber]);

  return (
    <div>
      <div className="input-group">
        <label>
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <input
                value={secondNumber}
                id={name}
                type="text"
                placeholder="second number"
                onBlur={onBlur}
                onChange={(e) => {
                  onChange(numberToComma(e.target.value));
                }}
              />
            )}
          />
        </label>
        <button
          className="button gray"
          type="button"
          onClick={(e) => handleReset("resetField")}
        >
          reset
        </button>
      </div>
      {data && <p>연산결과: {data.toLocaleString()}</p>}
    </div>
  );
}
```

@file /src/index.tsx

```tsx
import ReactDOM from "react-dom/client";

import { FormProviders } from "./FormProviders";
import App from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const AppContainer = () => (
  <FormProviders>
    <App />
  </FormProviders>
);

root.render(<AppContainer />);
```

@file /src/styles.css

```css
.App {
  font-family: sans-serif;
  text-align: center;
}
body {
  background: #0e101c;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  color: white;
  padding: 0 20px 50px;
}

img {
  width: 35px;
  height: 35px;
  margin-right: 10px;
  position: relative;
  top: 6px;
}

.h1 {
  margin-top: 80px;
  color: white;
  font-size: 25px;
  padding-bottom: 0px;
}

.form {
  max-width: 800px;
  margin: 0 auto;
}

.p {
  color: #bf1650;
  text-align: center;
}

.input-group {
  display: flex;
  align-items: top;
  flex-direction: row;
}
.input-group label {
  width: 80%;
}
.input-group .button {
  width: 20%;
  height: 38px;
  margin: 0;
  margin-left: 5px;
}

.input-group .button.blue {
  background: #1c82cb;
  color: white;
}
.input-group .button.gray {
  background: gray;
  color: white;
}

textarea,
select,
input {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 14px;
}

.label,
section > label {
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: white;
  font-size: 14px;
  font-weight: 200;
}

input[type="submit"],
.button {
  position: relative;
  background: #ec5990;
  color: white;
  text-transform: uppercase;
  border: none;
  font-weight: 600;
  margin-top: 20px;
  padding: 20px;
  font-size: 16px;
  letter-spacing: 2px;
  display: block;
  appearance: none;
  border-radius: 4px;
  width: 100%;
  font-weight: 400;
  letter-spacing: 0.5rem;
  transition: 0.3s all;
}

.buttonBlack {
  background: black;
  border: 1px solid white;
}

.App {
  max-width: 600px;
  margin: 0 auto;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.counter {
  font-weight: 400;
  background: white;
  color: black;
  padding: 10px 15px;
  border-radius: 4px;
  position: fixed;
  top: 20px;
  right: 30px;
  z-index: 9999999;
}

button[type="button"] {
  padding: 5px;
  background: #516391;
  color: white;
  letter-spacing: 0px;
  text-transform: none;
  padding: 10px;
  letter-spacing: 1px;
}

input[type="submit"]:hover,
button[type="button"]:hover {
  background: #bf1650;
  color: white;
}

input[type="submit"]:active {
  transition: 0.3s all;
  top: 2px;
}

.preact {
  opacity: 0;
  color: white;
}

.preact:hover {
  opacity: 1;
}
```

@setup

```js
{
  "name": "react-typescript",
  "version": "1.0.0",
  "description": "React and TypeScript example starter project",
  "keywords": [
    "typescript",
    "react",
    "starter"
  ],
  "main": "src/index.tsx",
  "dependencies": {
    "loader-utils": "3.2.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-scripts": "5.0.1",
    "react-gh-like-diff": "2.0.2",
    "react-hook-form": "7.51.1"
  },
  "devDependencies": {
    "@types/react": "18.2.38",
    "@types/react-dom": "18.2.15",
    "typescript": "4.4.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```


:::

---

<TagLinks />