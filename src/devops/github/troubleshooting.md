---
lang: ko-KR
title: Troubleshooting
description: Github > Troubleshooting
icon: fas fa-bug-slash
category:
  - DevOps
  - Github
  - Troubleshooting
tag: 
  - devops
  - github
  - troubleshooting
  - sh
  - shell
  - git
  - git-cli
  - git-credentials
  - http
  - credentials
head:
  - - meta:
    - property: og:title
      content: Github > Troubleshooting
    - property: og:description
      content: Troubleshooting
    - property: og:url
      content: https://chanhi2000.github.io/devops/github/troubleshooting.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 💀Github으로 Push 오류

```
remote: Support for password authentication was removed on August 13, 2021.
remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.
```

- 😥Password로 인증처리를 할 수 없도록 되어 있음
- 💊[\[Mac\] GitHub push token 오류 해결](https://hyeo-noo.tistory.com/184)

---

## 💀Push 오류

```
Git push: Missing or invalid credentials. fatal: Authentication failed for 'https://github.com/username/repo.git'
```

😥The problem comes from the authentication handler of vscode.

To solve the problem:

- Open vscode `File` > `Preferences` > `Settings`
- Search for `git.terminalAuthentication`
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

### 비밀정보

```sh
git push origin main
# 
# remote: error: GH013: Repository rule violations found for refs/heads/main.
# remote:
# remote: - GITHUB PUSH PROTECTION
# remote:   ?붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴 붴붴붴붴?[K
# K
# remote:     Resolve the following violations before pushing again
# remote:
# remote:     - Push cannot contain secrets
# remote:
# remote:
# remote:      (?) Learn how to resolve a blocked push
# remote:      https://docs.github.com/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection
# remote:
# remote:      (?) This repository does not have Secret Scanning enabled, but is eligible. Enable Secret Scanning to view and manage detected secrets.
# remote:      Visit the repository settings page, https://github.com/chanhi2000/crashcourse/settings/security_analysis
# remote:
# remote:
# remote:       ?붴?Amazon AWS Access Key ID ?붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴?[K
# 
# remote:        locations:
# remote:          - commit: 5c1fe713d2d2b5eaa0f7936db177f7041c2ef07f
# remote:            path: src/aws/art-of-aws/23C.md:158
# remote:
# remote:        (?) To push, remove secret from commit(s) or follow this URL to allow the secret.
# remote:        https://github.com/chanhi2000/crashcourse/security/secret-scanning/unblock-secret/2hopD8O4gJm6s8gxDT8rA4Ch6MU
# remote:
# remote:
# remote:       ?붴?Amazon AWS Secret Access Key ?붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴?[K
# 
# remote:        locations:
# remote:          - commit: 5c1fe713d2d2b5eaa0f7936db177f7041c2ef07f
# remote:            path: src/aws/art-of-aws/23C.md:159
# remote:
# remote:        (?) To push, remove secret from commit(s) or follow this URL to allow the secret.
# remote:        https://github.com/chanhi2000/crashcourse/security/secret-scanning/unblock-secret/2hopD9dOwSBkDubY7SigY3iNqnf
# remote:
# remote:
# remote:
# To https://github.com/.../...
#  ! [remote rejected]     main -> main (push declined due to repository rule violations)
# 
```

:::

---

## 💀저장소 접근오류

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

---

<TagLinks />