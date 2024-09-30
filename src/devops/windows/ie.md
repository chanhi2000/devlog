---
lang: ko-KR
title: Internet Explorer
description: Windows > Internet Explorer
icon: fa-brands fa-internet-explorer
category:
  - Microsoft
  - Windows
  - Internet Explorer
tag: 
  - ie 
  - internet-explorer
  - win
  - windows
  - browser
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

<SiteInfo
  name="Internet Explorer 11 - Microsoft Lifecycle | Microsoft Learn"
  desc="Internet Explorer 11은 구성 요소 수명 주기 정책을 따릅니다."
  url="https://learn.microsoft.com/ko-kr/lifecycle/products/internet-explorer-11"
  logo="learn.microsoft.com/favicon.ico"
  preview="learn.microsoft.com/open-graph-image.png"/>

## ie를 강제로 실행

__Microsoft Edge를 실행시키지 않고__ ie를 부르는 방법

- `ie.vbs`라는 Visual Basic Script 파일을 만들고 난 후 <FontIcon icon="fas fa-folder-open"/>`C:\Windows`에 저장해 준다

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


- [인터넷 익스플로러에서 자동으로 엣지로 전환하는 방법(Redirect from IE to Edge)](https://webruden.tistory.com/794)

---

<TagLinks />