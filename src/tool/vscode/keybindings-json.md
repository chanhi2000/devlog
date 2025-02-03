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

### <FontIcon icon="fas fa-folder-open"/>저장위치

::: tabs

@tab:active <FontIcon icon="fa-brands fa-windows"/>

```plaintext title="Location"
%APPDATA%\Code\User
```

@tab <FontIcon icon="iconfont icon-macos"/>

```plaintext title="Location"
~/Application Support/Code/User
```

:::

```json :collapsed-lines title="keybindings-json.json"
[
  {
    "key": "ctrl+alt+i",
    "command": "-workbench.panel.chat",
    "when": "workbench.panel.chat.view.copilot.active"
  }, {
    "key": "ctrl+alt+i",
    "command": "-workbench.action.chat.open",
    "when": "chatPanelParticipantRegistered || chatSetupInstalled"
  }, {
    "key": "ctrl+alt+i",
    "command": "editor.action.insertSnippet"
  }, {
    "key": "shift+alt+t",
    "command": "workbench.action.tasks.runTask"
  }
]
```

---

<TagLinks />