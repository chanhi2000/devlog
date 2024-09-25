---
lang: ko-KR
title: "Unit 2: Continuous Integration with GitLab CI"
description: (2/5) DevOps with GitLab CI Course
category: 
  - DevOps
  - Gitlab
  - Youtube
tag: 
  - blog
  - freecodecamp.org
  - devops
  - gitlab
  - scm
  - "@vdespa"
  - yaml
  - ci
  - cd
  - cicd
  - youtube
  - crashcourse
head: 
  - - meta:
    - property: og:title
      content: (2/5) DevOps with GitLab CI Course
    - property: og:description
      content: "Unit 2: Continuous Integration with GitLab CI"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/devops-with-gitlab-ci-course/unit-2-continuous-integration-with-gitlab-ci.html
date: 2022-03-02
isOriginal: false
author: Valentin Despa
cover: https://freecodecamp.org/news/content/images/size/w2000/2022/03/qomm1soQ.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "DevOps with GitLab CI Course",
  "desc": "GitLab CI/CD can automatically build, test, deploy, and monitor your applications. We just published a full course on the freeCodeCamp.org YouTube channel that will teach you how to use GitLab CI. Valentin Despa developed this course. Valentin is an ...",
  "link": "/explore/articles/freecodecamp.org/devops-with-gitlab-ci-course/README.md",
  "logo": "https://cdn.freecodecamp.org/universal/favicons/favicon.ico",
  "background": "rgba(10,10,35,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="DevOps with GitLab CI Course"
  desc="GitLab CI/CD can automatically build, test, deploy, and monitor your applications. We just published a full course on the freeCodeCamp.org YouTube channel that will teach you how to use GitLab CI. Valentin Despa developed this course. Valentin is an ..."
  url="https://freecodecamp.org/news/devops-with-gitlab-ci-course/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w2000/2022/03/qomm1soQ.png"/>

<VidStack src="youtube/PGyhBwLyK2U" />

## Unit overview

- we will start working on a simple website project
- we want to automate any of the manual steps required for integrating the changes of multiple developers
- we will create a pipeline that will build and test the software we are creating

---

## Your first GitLab project

- we will try to automate the build and deployment of a simple website project build with JavaScript using the React framework
- forking allows making a copy of a project
- the key to automation is to be familiar with the CLI tools we plan to use in GitLab CI

::: info 📚Resources

- [<FontIcon icon="iconfont icon-gitlab"/> `gitlab-course-public/devops-freecodecamp-gitlab-ci` (fork this)](https://gitlab.com/gitlab-course-public/devops-freecodecamp-gitlab-ci)

:::

---

## Building the project

- most software projects have a build step where code is compiled or prepared for production-use
- yarn is a Node.js package manager that helps with managing the project by running scripts and installing dependencies
- for a Node.js project, the <FontIcon icon="fas fa-folder-open"/>`node_modules` folder contains all project dependencies
- project dependencies are installed using `yarn install` but are NOT stored in the Git repository
- it is really a bad idea to store project dependencies in the code repository
- image tags that contain `alpine` or `slim` are smaller in size as they use a lightweight Linux distribution

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
build website:
  image: node:16-alpine
  script:
    - yarn install
    - yarn build
```

:::

::: info 📚Resources

- [Official Node.js images on Dockerhub](https://hub.docker.com/_/node)
- [Check the current Node.js LTS version](https://nodejs.org/en)
- [Yarn CLI documentation](https://yarnpkg.com/cli)

:::

---

## Assignment

- Create a job to verify that the build folder contains a file named index.html
- Create another job that runs the project unit tests using the command yarn test

---

## Assignment solution

::: details My solution to the assignment

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - test

build website:
image: node:16-alpine
stage: build
script:
  - yarn install
  - yarn build
artifacts:
  paths:
    - build

test website:
  image: alpine
  stage: test
  script:
    - test -f build/index.html

unit tests:
  image: node:16-alpine
  stage: test
  script:
    - yarn install
    - yarn test
```

:::

---

## How do we integrate changes?

- we use Git to keep track of code changes
- we need to ensure we don't break the main pipeline

<VidStack src="youtube/4lxvVj7wlZw" />

> Git for Gitlab

---

## Merge requests

- we need to ensure that the chances of breaking the main branch are reduced
- here are some project settings for working with Merge Requests that I recommend:
  - Go to `[Settings]` > `[Merge requests]`
  - Merge method > select *Fast-forward merge*
  - Squash commits when merging > select *Encourage*
  - Merge checks > check *Pipelines must succeed*
- protect the master by allowing changes only through a merge request: 
  - `[Settings]` > `[Repository]` > Branch main > Allowed to push - select *No one*

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml

stages:
  - .pre
  - build
  - test

build website:
  image: node:16-alpine
  stage: build
  script:
    - yarn install
    - yarn build
  artifacts:
    paths:
      - build

linter:
  image: node:16-alpine
  stage: .pre
  script:
    - yarn install
    - yarn lint

test website:
  image: alpine
  stage: test
  script:
    - test -f build/index.html

unit tests:
  image: node:16-alpine
  stage: .pre
  script:
    - yarn install
    - yarn test

```

:::

---

## Code review

- merge requests are often used to review the work before merging it
- merge requests allow us to document why a specific change was made
- other people on the team can review the changes and share their feedback by commenting
- if you still need to make changes from the merge request, you can open the branch using the Web IDE

::: info 📚Resources

- [Real-world merge request example](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/79236)

:::

---

## Integration tests

- before we ship the final product, we try to test it to see if it works
- testing is done of various levels but high-level tests typically include integration and acceptance tests
- we use cURL to create an HTTP call to the website

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - .pre
  - build
  - test

build website:
  image: node:16-alpine
  stage: build
  script:
    - yarn install
    - yarn build
  artifacts:
    paths:
      - build

linter:
  image: node:16-alpine
  stage: .pre
  script:
    - yarn install
    - yarn lint

test website:
  image: node:16-alpine
  stage: test
  script:
    - yarn global add serve
    - apk add curl
    - serve -s build &
    - sleep 10
    - curl http://localhost:3000 | grep "React App"

unit tests:
  image: node:16-alpine
  stage: .pre
  script:
    - yarn install
    - yarn test

```

:::

---

## How to structure a pipeline

- our current pipeline structure is just an example, not a rule
- there are a few principles to consider

### principle #1: Fail fast

- we want to ensure that the most common reasons why a pipeline would fail are detected early
- put jobs of the same size in the same stage

### principle #2: Job dependencies

- you need to understand the dependencies between the jobs
- example: you can't test what was not already built yet
- if jobs have dependencies between them, they need to be in distinct stages

---

<TagLinks />