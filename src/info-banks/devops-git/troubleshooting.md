---
lang: ko-KR
title: Troubleshooting
description: Git > Troubleshooting
tags: ["troubleshooting", "git", "git-cli", "http", "credentials", "git-credentials", "bash"]
---

# {{ $frontmatter.description }} 관련

[[toc]]


---
## 🪲Push 오류

```sh
Git push: Missing or invalid credentials. fatal: Authentication failed for 'https://github.com/username/repo.git'
```

😥The problem comes from the authentication handler of vscode.

To solve the problem:

- Open vscode `File` > `Preferences` > `Settings`
- Search for <em>git.terminalAuthentication</em>
- Uncheck the option

::: warning 주의
I have set up credentials by using git config user.name "your username" and git config user.password "your password", and could see these by running `git config --list`, what am I missing here?
:::

Those are not "credentials": they won't help authenticate you to a remote service like GitHub.

For HTTPS URLS `https://github.com/<me>/<myRepo>`, you would need to:

- use a credential helper (`git config --global credential.helper osxkeychain`)
- update the credentials from the OSX Keychain

There you would enter your actual credentials:

- your GitHub [user account](https://newbedev.com/drupal-8-get-user-account-from-user-page-code-example) name
- your GitHub [user account password](https://newbedev.com/set-a-local-user-account-password-to-never-expire-windows-10-code-example) (or a PAT if you have 2FA activated)

As detailed in "`git push origin master` Missing or invalid credentials", and here:

::: tip NOTE
If you work with the JSON-settings file, 
insert the following line into it:

```json
git.terminalAuthentication: false,
```
:::


---
## 🪲저장소 접근오류

```sh
remote: HTTP Basic: Access denied
```

- 😥원격저장소와 통신하는 커맨드를 실행 할 때 발생
- 💊아래 커맨드를 실행하여 기존 credential정보 제거 및 초기화

```sh
git config --local --unset credential.helper
git config --global --unset credential.helper
git config --system --unset credential.helper
```

<TagLinks />