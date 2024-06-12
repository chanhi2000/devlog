---
lang: ko-KR
title: Snippets
description: Sublime Text > Snippets
icon: fas fa-eye-dropper
category: 
  - Sublime Text
  - Snippets
tag:
  - text-editor
  - sublimetext
  - sublime-text
  - subl
  - js
  - chrome
  - chrome-browser
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 등록위치 

::: tabs

@tab:active Windows

`%APPDATA%\Sublime Text 3\Packages\User`

@tab macOS

:::

## Download from Maven Repository

> `curl-mvn-download.sublime-snippet`

```xml
<snippet>
<content><![CDATA[
curl -H "Accept: application:zip" "https://repo1.maven.org/maven2/${1:groupId}/${2:artifactId}/${3:version1}/${2:artifactId}-${3:version1}.${4:ext}" -o /${2:artifactId}-${3:version1}.${4:ext}${0:}
]]></content>
<tabTrigger>curl-mvn-download</tabTrigger>
<scope>text.html.markdown,source.dosbatch</scope>
<!-- curl로 Mvn 아티펙트 다운로드 -->
</snippet>
```

---

<TagLinks />