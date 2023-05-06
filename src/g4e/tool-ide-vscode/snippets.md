---
lang: ko-KR
title: 🪣Snippets
description: 🆚VSCode > 🪣Snippets
tags: ["vscode", "visual-studio-code", "ide", "snippets"] 
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## 💡How to

Each snippet is defined under a snippet name and has a prefix, body and description. 
The prefix is what is used to trigger the snippet and the body will be expanded and inserted. 
Possible variables are: `$1`, `$2` for tab stops, `$0` for the final cursor position, and `${1:label}`, `${2:another}` for placeholders.

Placeholders with the same ids are connected.

::: info 📂저장위치

- Windows: `%APPDATA%\Code\User\snippets`
- Mac: `~/Application Support/Code/User/snippets`

:::

## Vuepress Components

```json
{
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
	}
}
```