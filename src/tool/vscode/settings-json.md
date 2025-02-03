---
lang: ko-KR
title: settings.json
description: VSCode > settings.json
icon: iconfont icon-json
category: 
  - VSCode
  - settings.json
tag: 
  - webdev
  - vscode
  - productivity
  - programming
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Open

- <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>p</kbd> 입력하여 Prmopt 창 생성
- `Open User Settings (JSON)` 입력


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

```json :collapsed-lines title="settings.json"
{
  "workbench.colorTheme": "Dracula Theme Soft",
  "workbench.preferredHighContrastColorTheme": "Dracula Theme Soft",
  "workbench.startupEditor": "none", // VSCode Icons    
  "workbench.activityBar.location": "top",
  "workbench.sideBar.location": "right",
  "workbench.editor.wrapTabs": true,
  "workbench.editor.enablePreview": false,

  "explorer.compactFolders": false,

  "editor.fontFamily": "JetbrainsMonoNL NF Medium",
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/.hg/store/**": true,
    "**/node_modules/**": true
  },
    
  "GitLive.Special branches": "main|master|trunk|dev|develop|qa|test|release[-/].*",
  "GitLive.Issue tracker integration": "Disabled",
  
  "css.hover.references": false,
  
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
  },
  "[javascript]": {
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.defaultFormatter": "vscode.typescript-language-features",
  },
  "[typescript]": {
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.defaultFormatter": "vscode.typescript-language-features",
  },
  "[json]": {
    "editor.tabSize": 2,
    "editor.defaultFormatter": "vscode.json-language-features",
  },
  "vetur.format.options.tabSize": 2,
  "vetur.format.options.useTabs": false,

  "kotlin.languageServer.enabled": false,
  "kotlin.debugAdapter.enabled": false,

  "extensions.ignoreRecommendations": true,
  "telemetry.enableCrashReporter": false,
  "telemetry.enableTelemetry": false,
  "telemetry.telemetryLevel": "off", 
  "update.showReleaseNotes": false,
  "workbench.welcomePage.walkthroughs.openOnInstall": false,

  "rust-analyzer.diagnostics.disabled": ["unresolved-proc-macro"],
    
  "clangd.checkUpdates": false,           // Clangd
  "code-runner.enableAppInsights": false, // Code Runner
  "docker-explorer.enableTelemetry": false, // Docker
  "julia.enableTelemetry": false,         // Julia
  "kite.showWelcomeNotificationOnStartup": false, // Kite
  "Lua.telemetry.enable": false,          // Lua
  "pros.useGoogleAnalytics": false,       // PROS
  "redhat.telemetry.enabled": false,      // Red Hat
  "rpcServer.showStartupMessage": false,  // VSCode Remote Development
  "sonarlint.disableTelemetry": true,     // SonarLint
  "terraform.telemetry.enabled": false,   // HashiCorp Terraform

  // Disable showing release notes
  "gitlens.showWhatsNewAfterUpgrades": false, // GitLens
  "java.help.showReleaseNotes": false,        // Language Support for Java
    
  // Disable showing welcome pages / walkthroughs
  "gitlens.showWelcomeOnInstall": false,           // GitLens
  "kite.showWelcomeNotificationOnStartup": false,  // Kite
  "material-icon-theme.showWelcomeMessage": false, // Material Icon Theme
  "pros.showWelcomeOnStartup": false,              // PROS
  "vsicons.dontShowNewVersionMessage": true,
}
```

---

<TagLinks />
