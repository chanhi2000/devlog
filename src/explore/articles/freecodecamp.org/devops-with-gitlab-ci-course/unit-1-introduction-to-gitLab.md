---
lang: ko-KR
title: "Unit 1: Introduction to GitLab"
description: (1/5) DevOps with GitLab CI Course
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
      content: (1/5) DevOps with GitLab CI Course
    - property: og:description
      content: "Unit 1: Introduction to GitLab"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/devops-with-gitlab-ci-course/unit-1-introduction-to-gitLab.html
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

## Welcome

- This course is for people new to DevOps who want to use GitLab to build, test and deploy their software
- You will get hands-on experience building pipelines with GitLab CI and deploying software to AWS

<SiteInfo
  name="Valentin Despa | @vdespa"
  desc="Learn more about agile software development using tools such as Postman for API testing, Gitlab CI for supporting your DevOps cycle."
  url="https://youtube.com/@vdespa"
  logo="https://yt3.googleusercontent.com/ytc/AIdro_k3wuQ16azlOzGNXVilbhqr5icxEpE8375cgvdGNdUVzg=s160-c-k-c0x00ffffff-no-rj"
  preview="https://yt3.googleusercontent.com/nh7QPdZk9RdSl2fdGBBS_atkXmvgrBXUi8N7b9JpBVXJxl3p_1evC0UGNWq3PR-mTSRmO3iyBQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"/>

---

## Your first GitLab project

- we will be using GitLab.com in this course
- create a free GitLab.com account
- by default, you will get a free trial, and your account will be downgraded to a free one after 30 days
- change the theme: `[Profile]` > `[Preferences]` > `[Syntax highlighting theme]` > `[Monokai]`
- Enable *Render whitespace characters in the Web IDE*
- GitLab CI pipelines are defined in a file called `.gitlab-ci.yml`

```yml
test:
  script: echo "Hello world"
```

- to run your pipeline using the GitLab.com infrastructure, you need to verify your account with a credit card
- validation troubleshooting: 
  - Validation is stuck. Nothing happens. If the interface is stuck or loading after 2-3 minutes of waiting, open a new tab and return to your main project page. If you don't see the message that you need to validate your account, it could mean that the validation was successful.

::: info 📚 Resources

- [How to set up your SSH key for GitLab on Windows 10](https://medium.com/devops-with-valentine/2021-how-to-your-ssh-key-for-gitlab-on-windows-10-587579192be0?sk=b836675d967a923ea81d911d73702629)
- [How to set up your SSH key for GitLab on macOS](https://medium.com/devops-with-valentine/2021-how-to-setup-your-ssh-key-for-gitlab-on-macos-dfccec6904fb?sk=fe992efb74d7bd794cf76bb8a26f0437)
- [How to set up your SSH key for GitLab on Linux](https://medium.com/devops-with-valentine/2021-how-to-your-ssh-key-for-gitlab-on-linux-1b94e2a3a49a?sk=1bca4bdb5c879f29be839aa42623113d)
- [<FontIcon icon="fa-brands fa-youtube"/>Git for GitLab (Beginner's FULL COURSE)](https://www.youtube.com/watch?v=4lxvVj7wlZw)
- [How to Configure your own GitLab Runner with a Docker Executor on AWS EC2](https://medium.com/devops-with-valentine/how-to-configure-your-own-gitlab-runner-with-a-docker-executor-on-aws-ec2-d76c7be0660d?sk=fcb49b94811d5daeb5eb182e0afe467f)
- [How to Configure your own GitLab Runner with a Docker Executor on Windows 10 or Windows 11](https://medium.com/devops-with-valentine/setup-gitlab-ci-runner-with-docker-executor-on-windows-10-11-c58dafba9191?sk=b550a70c0a7a60f1a3250a53145a3541)

:::

---

## Your first pipeline

- when we build and ship software, we need to follow a series of steps
- we define the GitLab CI pipeline using YAML
- a job can execute one or multiple commands
- `mkdir build` - creates a new folder called `build`
- `touch file.txt` - creates a new file called `file.txt`
- `>>` is called a redirection operator and appends the output from a previous command to a file
- `cat` can be used for displaying the contents of a file
- use Linux Alpine for this job because it is a very lightweight distribution
- if no stage is defined in the job config, the *test* stage will be assigned
- a pipeline is composed of a series of jobs organized in stages

::: important Pipeline after this lecture

> <FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
build laptop:
  image: alpine
  script: 
    - echo "Building a laptop"
    - mkdir build
    - touch build/computer.txt
    - echo "Mainboard" >> build/computer.txt
    - cat build/computer.txt
    - echo "Keyboard" >> build/computer.txt
    - cat build/computer.txt
```

:::

---

## Help, my pipeline is not working

- here are some common mistakes that lead to errors in the jobs:
  - no space after `-`, like `-echo "Foo"`
  - bad indentation
  - forgetting to add column `:` after stages: , build: , script: 

::: info 📚 Resources

- [Top 10 Most Common Errors In GitLab CI Pipelines](https://medium.com/devops-with-valentine/top-10-most-common-errors-in-gitlab-ci-ce5d206e8c03?sk=0b57f50bea597d3d97736fc90dac9d51)

:::

---

## What is YAML?

- you need to know some YAML basics to write GitLab CI pipelines
- YAML is somewhat similar to JSON or XML
- XML, JSON and YAML, and human-readable data interchange formats
- YAML is being often used for storing configurations

---

## What is a shell?

- we typically run commands such as `echo`, `touch`, `mkdir`, `cat` and so on through a command-line interface or CLI
- to automate the building & releasing of software, we rely on tools that have no UI, so we need to use the CLI

::: info 📚 Resources

- [How to setup a Linux environment on Windows](https://fixme)

:::

---

## GitLab architecture

- at a minimum, the GitLab architecture contains the GitLab Server (also known as the coordinator) and a GitLab Runner
- the GitLab server manages the execution of the pipeline and its jobs and stores the results
- when a job needs to be executed, the GitLab server will find a runner to run the job
- a runner is a simple program that executes a job
- a working GitLab CI setup must have at least one runner, but there are often more of them to help distribute the load
- there can also be specific runners that have a particular software or hardware configuration (this is outside of the scope of this course)
- this is a simplified overview of the steps involved when a job is executed:
  - the GitLab server (coordinator) locates a GitLab Runner and sends instructions for running the job
  - the GitLab Runner will pull the Docker image specified in the job configuration  (or the default image if no Docker image is specified)
  - the GitLab Runner will start the Docker container
  - the GitLab Runner will get the files stored in the Git repository
  - the GitLab Runner run the commands from the `script` keyword inside the Docker container
  - the GitLab Runner report back to the GitLab server (coordinator) the results of the job execution
  - the GitLab Runner will terminate the Docker container

<VidStack src="youtube/Gjnup-PuquQ"/>

> Docker in 100 Seconds

::: info 📚 Resources

- [What is Docker](https://docs.docker.com/get-started/overview)

:::

---

## Pipeline stages

- by default, a job will be assigned to the *Test* stage
- if two or more jobs belong to the same stage, they will be executed in parallel
- the `stages:` keyword allows us to define the stages of the pipeline
- the keyword `stage:` allows us to associate a job with a stage

::: important Pipeline after this lecture

> <FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - test

build laptop:
  image: alpine
  stage: build
  script: 
    - echo "Building a laptop"
    - mkdir build
    - touch build/computer.txt
    - echo "Mainboard" >> build/computer.txt
    - cat build/computer.txt
    - echo "Keyboard" >> build/computer.txt

test laptop:
  image: alpine
  stage: test
  script:
    - test -f build/computer.txt
```

:::

---

## Why do pipelines fail?

- CLI programs indicate if their execution was successful or not by returning an exit code
- an exit code 0 will indicate that a program has been executed successfully
- any other exit code, which can be from 1 to 255, indicates failure
- if GitLab detects a non-zero exit code, the job execution stops
- **Highly important tip:** reading the job logs from top to bottom is KEY to understanding WHY a job has failed

---

## Job artifacts

- every job is executed in a separate container, so by default, no files are shared
- to save the build results, we need to define the file(s) or folders as artifacts
- in GitLab, we do this by using the artifacts keyword:

```yml
build laptop:
  ...
  artifacts:
    paths:
      - build
```

::: important Pipeline after this lecture

> <FontIcon icon="iconfont icon-gitlab"/>`.gitlab-ci.yml`

```yml
stages:
  - build
  - test

build laptop:
  image: alpine
  stage: build
  script: 
    - echo "Building a laptop"
    - mkdir build
    - touch build/computer.txt
    - echo "Mainboard" >> build/computer.txt
    - cat build/computer.txt
    - echo "Keyboard" >> build/computer.txt
  artifacts:
    paths:
      - build

test laptop:
  image: alpine
  stage: test
  script:
    - test -f build/computer.txt
```

:::

---

## Testing the build

- our goal is to automate both the build process and the test process
- currently, we are only testing the content of the file by downloading the job artifacts or by using the `cat` command
- to automate the testing process, we will use the `grep` command
- `grep` allows us to search for a specific string in a file.

```yml
        - grep "Display" build/computer.txt
```

- tests play a very important role in automation
- you need to "test" the tests, to ensure that they will **fail** if needed

---

## Variables

- we prefer to use variables instead of repeating a string in the pipeline configuration
- variables can be defined in scripts or using the `variables:` keyword
- to reference the variable, we use the dollar sign before it

```yml
variables:
  BUILD_FILE_NAME: laptop.txt
```

- variables can be defined locally in the job or globally for all jobs
- when using spaces or some special characters, you may need to put the entire value between quotes

---

## What is DevOps

- DevOps is not a standard and does not have an universally agreed definition
- DevOps is not a standard or a tool, but a set of practices
- DevOps uses automation to that help us build successful Products
- DevOps requires a different mindset and works really well with Agile & Scrum

::: info 📚 Resources

- [Introduction to Agile & Scrum](https://skl.sh/3LciAkr)

:::

---

<TagLinks />