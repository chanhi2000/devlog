---
lang: ko-KR
title: 🌍Internet Explorer
description: 👓Windows > 🌍Internet Explorer
category:
  - 👓Windows
  - 🌍Internet Explorer
tag: 
  - ie 
  - internet-explorer
  - win
  - windows
  - browser
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## ie를 강제로 실행

__Microsoft Edge를 실행시키지 않고__ ie를 부르는 방법

- `ie.vbs`라는 Visual Basic Script 파일을 만들고 난 후 <FontIcon icon="iconfont icon-folder"/>`C:\Windows`에 저장해 준다

```vbscript
CreateObject("InternetExplorer.Application").Visible=True
```

---

## IE창 닫기 관련

::: warning 🤷‍♂️메세지

```
The webpage you are viewing is trying to close the tab. Do you wish to close the tab
```
:::

---

<TagLinks />