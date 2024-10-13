---
lang: ko-KR
title: Troubleshooting
description: Node.js > Troubleshooting
icon: fas fa-bug-slash
category:
  - Node.js
  - Troubleshooting
tag: 
  - js
  - node
  - nodejs
  - troubleshooting
  - package-json
  - dependencies
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 💀ERR_UNSUPPORTED_DIR_IMPORT

`npm run dev` 실행 시 특정 모듈에서 발생

```
[ERR_UNSUPPORTED_DIR_IMPORT]: Directory import '<프로젝트경로>\node_modules\vuepress-plugin-mermaid-next\lib\shared\theme' is not supported resolving ES modules imported from <프로젝트경로>\node_modules\vuepress-plugin-mermaid-next\lib\node\index.js
   ... [생략] ...
```

### 원인

말 그래도 경로 import를 지원하지 않음

문제파일 위치

```sh
└── 프로젝트 경로/
    ├── 📁node_modules/
    │   └── 📁vuepress-plugin-mermaid-next/
    │        └── 📁lib/
    │             ├── 📁shared/
    │             │     └── 📁theme/
    │             │           └── index.js
    │             └── 📁node/ 
    │                  └── index.js
    └── package.json
```

::: warning <FontIcon icon="fas fa-folder-open"/>`vuepress-plugin-mermaid-next\lib\node\`<FontIcon icon="fa-brands fa-js"/>`index.js` 파일

```ts
import markdownMermaid from './markdown-it-mermaidx.js';
// ... [생략] ... 
export { Themes } from '../shared/theme';
```

💀`export { Themes } from '../shared/theme';` 를 지원하지 않음

:::

### 처리방법

`-–experimental-specifier-resolution=node` 플래그 사용

`package.json` 파일에서 설정

```json
```

### 참조

- [[SOLVED] NODE err_unsupported_dir_import](https://weekendprojects.dev/posts/solved-node-err_unsupported_dir_import)

---

<TagLinks/>