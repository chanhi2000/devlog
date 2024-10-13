---
lang: ko-KR
title: Snippets
description: Batchfile > Snippets
icon: fas fa-eye-dropper
category:
  - Batchfile 
  - Snippets
tag: 
  - batch
  - bat
  - windows
  - windows-terminal
  - multiline
  - DOSKEY
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## `yt-dlp` 로 mp3 추출

::: info Prerequisite(s)

- `ffmpeg`
- `yt-dlp`

아래 스크립트를 실행하여 설치

```bat
choco install -y ffmpeg yt-dlp
```

:::

### `mp3download.bat`

```batch
rem youtube mp3 음원추출 with yt-dlp, ffmpeg
rem ======================================================= note
rem chcp 51949    // euc-kr
rem chcp 65001    // utf-8
rem chcp 949    // ks_c_5601-1987

rem =======================================================  install & run process
rem input command on admin-cmd : choco install ffmpeg-full
rem input command : choco install yt-dlp
rem if installed, input command below
rem mp3download.bat "youtube URL"
rem =======================================================
rem -P 다운로드파일 저장위치 지정
rem -x youtube_URL
rem =======================================================

echo.
rem @echo off

echo.
yt-dlp -P "d:\yt-dlp" ^
  -x %1 ^
  --audio-format "mp3" ^
  --audio-quality 256k ^
  --sponsorblock-remove all
```

### How to Use

```batch
mp3download.bat "<youtube URL>"
```

---

<TagLinks />