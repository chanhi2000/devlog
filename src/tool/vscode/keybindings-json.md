---
lang: ko-KR
title: keybinding.json
description: VSCode > keybinding.json
icon: iconfont icon-json
category: 
  - VSCode
  - keybinding.json
tag: 
  - vscode
  - visualstudiocode
  - visual-studio-code
  - productivity
  - ide
head:
  - - meta:
    - property: og:title
      content: VSCode > keybinding.json
    - property: og:description
      content: keybinding.json
    - property: og:url
      content: https://chanhi2000.github.io/tool/vscode/keybindings-json.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Open

- <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>p</kbd> 입력하여 Prmopt 창 생성
- `Open Keyboard Shortcuts (JSON)` 입력

### <VPIcon icon="fas fa-folder-open"/>저장위치

::: tabs

@tab:active <VPIcon icon="fa-brands fa-windows"/>

```plaintext title="Location"
%APPDATA%\Code\User
```

@tab <VPIcon icon="iconfont icon-macos"/>

```plaintext title="Location"
~/Application Support/Code/User
```

:::

```json :collapsed-lines title="keybindings-json.json"
// Place your key bindings in this file to override the defaultsauto[]
[
  { "key": "shift+cmd+i", "command": "editor.action.insertSnippet" }, 
  { "key": " ctrl+alt+i", "command": "editor.action.insertSnippet" }, 
  {
    "key": "ctrl+alt+cmd+]",
    "command": "workbench.action.splitEditorRight"
  }, {
    "key": "ctrl+alt+cmd+[",
    "command": "workbench.action.splitEditorLeft"
  }, 
  { "key": "cmd+alt+t", "command": "workbench.action.tasks.runTask" },
  { "key": "shift+alt+t", "command": "workbench.action.tasks.runTask" },
]
```

---

<TagLinks />