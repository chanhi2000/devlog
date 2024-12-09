---
lang: ko-KR
title: Snippets
description: VSCode > Snippets
icon: fas fa-eye-dropper
category:
  - VSCode
  - Snippets
tag: 
  - vscode
  - visual-studio-code
  - ide
  - snippets
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 💡How to

Each snippet is defined under a snippet name and has a prefix, body and description. 
The prefix is what is used to trigger the snippet and the body will be expanded and inserted. 
Possible variables are: `$1`, `$2` for tab stops, `$0` for the final cursor position, and `${1:label}`, `${2:another}` for placeholders.

Placeholders with the same ids are connected.

### <FontIcon icon="fas fa-folder-open"/>저장위치

- <FontIcon icon="fa-brands fa-windows"/>`%APPDATA%\Code\User\snippets`
- <FontIcon icon="fa-brands fa-apple"/>`~/Application Support/Code/User/snippets`

::: tabs

@tab:active <FontIcon icon="iconfont icon-json"/>`markdown.json`

```json :collapsed-lines title="markdown.json"
{
  "UrlGithubRepo": {
    "prefix": "urlghr",
    "body": [
    "https://github.com/${1:repo}",
    ],
    "description": "Create URL form for Github Repoistory"
  },
  "VuepressMarkdownVidStack": {
    "prefix": "vpvs",
    "body": [
    "<VidStack src=\"${1:url}\" />",
    ],
    "description": "Create VidStack Vue Component"
  },
  "VuepressMarkdownYoutube": {
    "prefix": "vpy",
    "body": [
    "<VidStack src=\"youtube/${1:id}\" />",
    ],
    "description": "Create VidStack Youtube Vue Component"
  },
  "VuepressMarkdownYoutubeItem": {
    "prefix": "vpyi",
    "body": [
    "<YoutubeItem channelName=\"${1:channelName}\" channelId=\"${2:channelId}\" id=\"${3:id}\" title=\"${4:title}\" />",
    ],
    "description": "Create YoutubeItem Vue Component"
  },
  "VuepressMarkdownGithubTags": {
    "prefix": "vpgt",
    "body": [
    "<GithubTags tagItems=\"${1:tagItems}\" />",
    ],
    "description": "Create 'GithubTags' Vue Component"
  },
  "VuepressMarkdownYoutubeGroup": {
     "prefix": "vpyg",
     "body": [
     "## ${1:title}",
       "",
     "[${1:title}][${2:channel}]",
     "",
     "::: details ${3:목록}",
     "",
       ":::",
     "",
       "<!-- ${1:title} -->",
     "",
     "---"
     ],
     "description": "Create YoutubeGroup Vue Component"
  },
  "VuepressMyYouTubeItems" : {
    "prefix": "vmyti",
    "body": [
    "<MyYouTubeItems jsonName=\"yu-${1:channelId}\" />${0}"
    ],
    "description": "Create MyYouTubeItems Vue Component"
  },
  "VuepressHorizImgCollection" : {
    "prefix": "vhic",
    "body": [
    "<HorizImgCollections jsonFullPath=\"${1:path}\" />${0}"
    ],
    "description": "Create HorizImgCollections Vue Component"
  },
  "VuepressTestStepsTable" : {
    "prefix": "vtst",
    "body": [
    "<TestStepsTable ",
    "  jsonFullPath=\"${1:path}\"",
    "  targetVersion=\"${2:version}\"/>${0}"
    ],
    "description": "Create TestStepsTable Vue Component"
  },
  "VuepressShield": {
    "prefix": "vshield",
    "body": [
    "<Shield logo=\"${1:path}\"/>${0}"
    ],
    "description": "Create Shield Vue Component"
  },
  "VuepressShieldsGroup": {
    "prefix": "vsg",
    "body": [
    "<ShieldsGroup logos=\"${1:path}\"/>${0}"
    ],
    "description": "Create ShieldsGroup Vue Component"
  },
  "VuepressFontIcon": {
    "prefix": "vfi",
    "body": [
    "<FontIcon icon=\"iconfont icon-${1:name}\"/>${0}"
    ],
    "description": "Create FontIcon Vue Componenet"
  },
  "VuepressFontIconAwesome": {
    "prefix": "vfia",
    "body": [
    "<FontIcon icon=\"fas fa-${1:name}\"/>${0}"
    ],
    "description": "Create FontIcon Vue Componenet (FontAwesome)"
  },
  "VuepressFontIconAwesomeBrand": {
    "prefix": "vfiab",
    "body": [
    "<FontIcon icon=\"fa-brands fa-${1:name}\"/>${0}"
    ],
    "description": "Create FontIcon Vue Componenet (FontAwesome Brand)"
  },
  "VuepressVPCard": {
    "prefix": "vvpc",
    "body": [
    "```component VPCard",
    "{",
    "  \"title\": \"${2:title}\",",
    "  \"desc\": \"${3:desc}\",",
    "  \"link\": \"${1:link}\",",
    "  \"logo\": \"${4:logo}\",",
    "  \"background\": \"rgba(${5:r},${6:g},${7:b},0.2)\"",
    "}",
    "```${0}"
    ],
    "description": "Create VPCard Vue Componenet"
  },
  "VuepressSiteInfo": {
    "prefix": "vsi",
    "body": [
      "<SiteInfo",
      "  name=\"${2:title}\"",
      "  desc=\"${3:desc}\"",
      "  url=\"${1:link}\"",
      "  logo=\"${4:logo}\"",
      "  preview=\"${5:preview}\"/>${0}",
    ],
    "description": "Create SiteInfo Vue Componenet"
  },
  "VuepressCodePen": {
    "prefix": "vcp",
    "body": [
      "<CodePen",
      "  user=\"${2:user}\"",
      "  slug-hash=\"${3:slughash}\"",
      "  title=\"${4:title}\"",
      "  :default-tab=\"['css','result']\"",
      "  :theme=\"\\$isDarkmode ? 'dark': 'light'\"/>${0}",
    ],
    "description": "Create CodePen Vue Componenet"
  },
  "VuepressImageGallery": {
    "prefix": "vig",
    "body": [
      "<ImageGallery paths=\"",
      "  ${1:paths}",
      "\"/>${0}",
    ],
    "description": "Create ImageGallery Vue Component"
  },
  "MdTdDoArticles": {
    "prefix": "mtda",
    "body": [
      "<!-- TODO: 작성 (/explore/articles/${1:domain}/${2:link}.md) -->${0}"
    ],
    "description": "Create TODO Tag for writing articles"
  },
  "TgKbd": {
     "prefix": "tgkbd",
     "body": [
     "<kbd>${1:v}</kbd>${0}"
     ],
     "description": "Create Keyboard tag"
  }
}
```

@tab <FontIcon icon="iconfont icon-json"/>`json.json`

```json: collapwd-lines title="json.json"
{
  "jsonGhItem": {
    "prefix": "ghItem",
    "body": [
     "{",
     "  \"repo\": \"${1:repo}\",",
     "  \"desc\": \"${2:desc}\",", 
     "  \"officialSite\": \"${3:os}\",",
     "  \"topics\": [${4:topic}]",
     "}"
    ],
    "description": "Github Item as JSON"
  },
  "jsonYtItemAll": {
    "prefix": "ytItemAll",
    "body": [
      "{",
      "  \"channel\": {",
      "    \"id\": \"${1:channelId}\",",
      "    \"name\": \"${2:channelName}\",",
      "    \"profile\": \"${3:imgUrl}\",",
      "    \"banner\": \"${4:bannerUrl}\"",
      "  },",
      "  \"videos\": [",
      "    ${0}",
      "  ]",
      "}"
    ],
    "description": "YouTube Item as JSON"
  }
}
```

:::

---

<TagLinks />
