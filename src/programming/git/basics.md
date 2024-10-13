---
lang: ko-KR
title: Basics
description: Git > Basics
icon: fas fa-egg
category:
  - Git 
  - Basics
tag: 
  - git
  - git-cli
  - bash
  - terminal
  - windows-terminal
  - tortoisegit
  - git-remote
  - git-branch
  - git-fetch
  - git-pull
  - git-push
  - git-checkout
  - git-reset
  - git-merge
  - git-rebase
  - git-status
  - git-add
  - git-commit
  - git-log
  - git-stash
head:
  - - meta:
    - property: og:title
      content: Git > Basics
    - property: og:description
      content: Basics
    - property: og:url
      content: https://chanhi2000.github.io/programming/git/basics.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 기본 명령어 

### 저장소 (repository) 관리 <Badge type="tip" text="git-remote" vertical="middle" /><Badge type="tip" text="git-fetch" vertical="middle" /><Badge type="tip" text="git-pull" vertical="middle" /><Badge type="tip" text="git-push" vertical="middle" />

| 명령어 | 설명 |
| :--- | :--- |
| `git remote -vv` | 🔎로컬에 등록 된 원격저장소 정보 조회 |
| `git remote add <저장소 별칭> <저장소 주소>` | 📌로컬에 원격저장소 정보등록 |
| `git remote rename <저장소 별칭> <새 저장소 별칭>` | 📝로컬에 등록 된 원격저장소 별칭 수정 |
| `git remote set-url <저장소 별칭> <새 저장소 주소>` | 📝로컬에 등록 된 원격저장소 주소 수정 |
| `git fetch <저장소 별칭>` | 🔄(로컬에 등록 된) 원격저장소 상태 동기화 |
| `git fetch --all` | 🔄(로컬에 등록 된) 모든 원격저장소 상태 동기화
| `git pull <저장소 별칭> <브랜치 명>` | ⏬(지정한 브랜치로) push 된 commit 목록 가져오기 (원격 > 로컬) |
| `git push <저장소 별칭> <브랜치 명>` | ⏫(지정한 브랜치에서) 로컬에서 작업한 commit 목록 push 하기 |

### 브랜치 (branch) 관리

| 명령어 | 설명 |
| :--- | :--- |
| `git branch -vv` | 🔎브랜치 상태 확인 |
| `git branch -d <브랜치 명>` | ❌브랜치 제거 |
| `git branch -D <브랜치 명>` | ❌브랜치 강제제거 |
| `git checkout -b <브랜치 명>` | 📌브랜치 신규생성 |
| `git checkout <브랜치 명>` | 🦶브랜치로 이동 |
| `git reset --hard HEAD~1` | ⏪(HEAD가 바라보는 commit점에서) 하나 이전 상태로 이동 |
| `git reset --soft HEAD~1` | ⏪(HEAD가 바라보는 commit점에서) 하나 이전 상태로 이동 (내용보존) |
| `git merge <브랜치 명>` | HEAD가 바라보는 브랜치에서 대상 브랜치와 병합 |
| `git rebase <브랜치 명>` | 대상 브랜치의 최신 commit점으로 base 재배치 병합 |

### Commit 관리

| 명령어 | 설명 |
| :--- | :--- |
| `git status` | 🔎로컬 상태 조회 |
| `git add *` | 📌변경파일 STAGE처리 |
| `git checkout -- <파일이름>` | ⏪바뀐내용을 전commit상태로 복구 |
| `git commit -m "<커밋메세지>"` | 📌STAGE된 내용을 1줄짜리 commit 메세지 등록 |
| `git commit --amend` | 📝HEAD위치에 있는 commit 내용 덮어쓰기 |
| `git log --all --oneline --pretty --graph` | 🔎commit 히스토리 조회 |
|||
| `git stash` | 📌로컬 변경작업 임시저장 |
| `git stash list` | 🔎임시저장 건 목록 조회 |
| `git stash pop` | ⏬(최근) 임시저장 내용 가져오기 |
| `git stash drop` | ❌(최근) 임시저장 내용 제거 |
|||
| `git format-patch <commit 해시>` | 💾커밋정보를 파일형태로 내보내기 (`*.patch`) |
| `git am <*.patch 파일>` | 📌로컬에 해당patch 커밋으로 등록 |


### Submodule 관리

| 명령어 | 설명 |
| :--- | :--- |
| `git submodule add <저장소 주소> <로컬경로>` | 📌로컬경로에 gitmodule추가 |
| `git submodule init` | 📌submodule 초기화 (`.gitmodules` 파일생성) |
| `git submodule sync` | 🔄submodule 동기화 |
| `git submodule update` | ⏬submodule 변경내역 내려받기 <br/><ul><li>`--init` 초기화</li><li>`--remote` 원격정보 받아오기</li><li>`--merge` merge해야 할 경우</li></ul>| 


---

## TortoiseGit

| 명령어 | 설명 |
| :--- | :--- |
| `TortoiseGitPRoc /command:log /path:"<작업경로>"` | `git log` 화면 열기 |

<TagLinks />