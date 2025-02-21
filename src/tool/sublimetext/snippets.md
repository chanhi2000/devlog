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

## <FontIcon icon="fas fa-folder-open"/>등록위치

::: tabs

@tab:active <FontIcon icon="fa-brands fa-windows"/>

`%APPDATA%\Sublime Text\Packages\User`

@tab <FontIcon icon="iconfont icon-macos"/>macOS

:::

## Download from Maven Repository

```xml title="curl-mvn-download.sublime-snippet"
<snippet>
<content><![CDATA[
curl -H "Accept: application:zip" "https://repo1.maven.org/maven2/${1:groupId}/${2:artifactId}/${3:version1}/${2:artifactId}-${3:version1}.${4:ext}" -o /${2:artifactId}-${3:version1}.${4:ext}${0:}
]]></content>
<tabTrigger>curl-mvn-download</tabTrigger>
<scope>text.html.markdown,source.dosbatch</scope>
<!-- curl로 Mvn 아티펙트 다운로드 -->
</snippet>
```

```xml title="curl-mvn-download.sublime-snippet"
<snippet>
<content><![CDATA[
ffmpeg -protocol_whitelist https,tls,tcp -allowed_extensions ALL -i ${1:m3u8} -bsf:a aac_adtstoasc -c copy ${2:output}
]]></content>
  <tabTrigger>m3u8Get</tabTrigger>
  <scope>text.shell.markdown,source.dosbatch</scope>
<!-- ffmpeg로 m3u8파일을 다른 동영상 파일로 변환 -->
</snippet>
```

---

<TagLinks />