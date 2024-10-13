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

---

## JSON

copy and paste below

```json
{
    "workbench.colorTheme": "Dracula Soft",
    "editor.fontFamily": "Jetbrains Mono",
    "editor.fontLigatures": true,
    
    "GitLive.Special branches": "main|master|trunk|dev|develop|qa|test|release[-/].*",
    "GitLive.Issue tracker integration": "Disabled",
    
    "[python]": {
        "editor.formatOnType": true
    },
	"[javascript]": {
		"editor.tabSize": 2
	},
	"[json]": {
		"editor.tabSize": 2
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
	"vsicons.dontShowNewVersionMessage": true,       // VSCode Icons	
	
	"marp.markdown.toggleMarpPreview": true, // Marp
```

---

<TagLinks />
