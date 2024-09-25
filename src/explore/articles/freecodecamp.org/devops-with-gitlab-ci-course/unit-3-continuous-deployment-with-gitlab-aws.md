---
lang: ko-KR
title: "Unit 3: Continuous Deployment with GitLab & AWS"
description: (3/5) DevOps with GitLab CI Course
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
      content: (3/5) DevOps with GitLab CI Course
    - property: og:description
      content: "Unit 3: Continuous Deployment with GitLab & AWS"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/devops-with-gitlab-ci-course/unit-3-continuous-deployment-with-gitlab-aws.html
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

- we will learn about deployments and take our website project and deploy it to the AWS cloud. 
- learn about other DevOps practices such as CI/CD

---

## A quick introduction to AWS

- AWS (Amazon Web Services) is a cloud platform provider offering over 200 products & services available in data centers all over the world
- you need an AWS account to continue with the rest of the course

::: info 📚Resources

- [Amazon Web Services](https://aws.amazon.com)

:::

---

## AWS S3

- the first AWS service that we will use is AWS S3 which stands for simple storage service
- the website is static and requires no computing power or a database
- we will use AWS S3 to store the public files and serve them over HTTP
- AWS S3 files (which AWS calls objects) are stored in buckets
- the name of the bucket needs to be unique
- the AWS console allows us to manually upload files through the web interface

---

## AWS CLI

- to interact with the AWS cloud services, we need to use a CLI tool called AWS CLI
- we will use AWS CLI v2 throughout the course
- when using Docker images in pipelines, I highly recommend specifying a tag or at least a major version (if available)
- if you don't specify a tag, at least log the version of every tool you use, as this can help with debugging later on
- example: `aws --version`

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - test
  - deploy

build website:
  image: node:16-alpine
  stage: build
  script:
    - yarn install
    - yarn lint
    - yarn test
    - yarn build
  artifacts:
    paths:
      - build

test website:
  image: node:16-alpine
  stage: test
  script:
    - yarn global add serve
    - apk add curl
    - serve -s build &
    - sleep 10
    - curl http://localhost:3000 | grep "React App"

deploy to s3:
  stage: deploy
  image: 
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  script:
    - aws --version
```

:::

::: info 📚Resources

- [AWS CLI documentation](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/index.html)
- [AWS CLI on Dockerhub](https://hub.docker.com/r/amazon/aws-cli)

:::

---

## Uploading a file to S3

- to upload a file to S3, we will use the copy command `cp`
- `aws s3 cp` allows us to copy a file to and from AWS S3

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - test
  - deploy

.build website:
  image: node:16-alpine
  stage: build
  script:
    - yarn install
    - yarn lint
    - yarn test
    - yarn build
  artifacts:
    paths:
      - build

.test website:
  image: node:16-alpine
  stage: test
  script:
    - yarn global add serve
    - apk add curl
    - serve -s build &
    - sleep 10
    - curl http://localhost:3000 | grep "React App"

deploy to s3:
  stage: deploy
  image: 
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  script:
    - aws --version
    - echo "Hello S3" > test.txt
    - aws s3 cp test.txt s3://YOUR_BUCKET_NAME/test.txt

```

:::

::: info 📚Resources

- [AWS CLI for S3 documentation](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/index.html)

:::

---

## Masking & protecting variables

- to define a variable, go to `[Settings]` > `[CI/CD]` > `[Variables]` > `[Add variable]`
- we typically store passwords or other secrets
- a variable has a key and a value
- it is a good practice to write the key in uppercase and to separate any words with underscores
- flags:
  - _Protect variable_: if enabled, the variable is not available in branches, apart from the default branch (main), which is a protected branch
  - _Mask variable_: if enabled, the variable value is never displayed in clear text in job logs

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - test
  - deploy

.build website:
  image: node:16-alpine
  stage: build
  script:
    - yarn install
    - yarn lint
    - yarn test
    - yarn build
  artifacts:
    paths:
      - build

.test website:
  image: node:16-alpine
  stage: test
  script:
    - yarn global add serve
    - apk add curl
    - serve -s build &
    - sleep 10
    - curl http://localhost:3000 | grep "React App"

deploy to s3:
  stage: deploy
  image: 
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  script:
    - aws --version
    - echo "Hello S3" > test.txt
    - aws s3 cp test.txt s3://$AWS_S3_BUCKET/test.txt

```

:::

---

## Identity management with AWS IAM

- we don't want to use our username and password to use AWS services from the CLI (I am not even sure if this is even possible!)
- as we only need access to S3, it makes sense to work with an account with limited permissions
- IAM allows us to manage access to the AWS services
- we will create a new user with the following settings:
  - account type: programmatic access
  - permissions: attach existing policy: AmazonS3FullAccess
- the account details will be displayed only once
- go to *Settings > CI/CD > Variables > Add variable* and define the following unprotected variables:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_DEFAULT_REGION`
- AWS CLI will look for these variables and use them to authenticate

---

## Uploading multiple files to S3

- using cp to copy individual files can take a lot of space in the pipeline config
- some file names are generated during the build process, and we can't know them in advance
- we will use sync to align the content between the build folder in GitLab and the S3 bucket

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - test
  - deploy

build website:
  image: node:16-alpine
  stage: build
  script:
    - yarn install
    - yarn lint
    - yarn test
    - yarn build
  artifacts:
    paths:
      - build

test website:
  image: node:16-alpine
  stage: test
  script:
    - yarn global add serve
    - apk add curl
    - serve -s build &
    - sleep 10
    - curl http://localhost:3000 | grep "React App"

deploy to s3:
  stage: deploy
  image: 
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  script:
    - aws --version
    - aws s3 sync build s3://$AWS_S3_BUCKET --delete
```

:::

::: info 📚Resources

- [AWS S3 sync command documentation](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html)

:::

---

## Hosting a website on S3

- files in the S3 bucket are not publicly available
- to get the website to work, we need to configure the bucket
- from the bucket, click on *Properties* and enable Static website hosting
- from the bucket, click on the *Permissions* tab and disable *Block public access*
- from the bucket, click on the *Permissions* tab and set a bucket policy

::: important S3 bucket policy example

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
        "Sid": "PublicRead",
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

:::

---

## Controlling when jobs run

- we don’t want to deploy to production from every branch
- to decide which jobs to run, we can use `rules:` to set a condition
- `CI_COMMIT_REF_NAME` gives us the current branch that is running the pipeline
- `CI_DEFAULT_BRANCH` gives us the name of the default branch (typically main or master)

::: important Pipeline after this lectur

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - test
  - deploy

build website:
  image: node:16-alpine
  stage: build
  script:
    - yarn install
    - yarn lint
    - yarn test
    - yarn build
  artifacts:
    paths:
      - build

test website:
  image: node:16-alpine
  stage: test
  script:
    - yarn global add serve
    - apk add curl
    - serve -s build &
    - sleep 10
    - curl http://localhost:3000 | grep "React App"

deploy to s3:
  stage: deploy
  image: 
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  script:
    - aws --version
    - aws s3 sync build s3://$AWS_S3_BUCKET --delete
```

:::

::: info 📚Resources

- [GitLab reference for the .gitlab-ci.yml file - rules:](https://docs.gitlab.com/ee/ci/yaml/#rules)
- [Predefined variables in GitLab](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html)

:::

---

## Post-deployment testing

- we will use `cURL` to download the index.html file from the website
- with `grep`, we will check to see if the index.html file contains a specific string

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - test
  - deploy
  - post deploy

variables:
  APP_BASE_URL: http://YOUR-BUCKET-NAME.s3-website-YOUR-REGION.amazonaws.com

build website:
  image: node:16-alpine
  stage: build
  script:
    - yarn install
    - yarn lint
    - yarn test
    - yarn build
  artifacts:
    paths:
      - build

test website:
  image: node:16-alpine
  stage: test
  script:
    - yarn global add serve
    - apk add curl
    - serve -s build &
    - sleep 10
    - curl http://localhost:3000 | grep "React App"

deploy to s3:
  stage: deploy
  image: 
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  script:
    - aws --version
    - aws s3 sync build s3://$AWS_S3_BUCKET --delete

production tests:
  stage: post deploy
  image: curlimages/curl
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  script:
    - curl $APP_BASE_URL | grep "React App"
```

:::

---

## What is CI/CD?

- the pipeline goes through multiple stages: build, test & deploy
- right now, we consider the website hosted at AWS S3 our production environment
- quite often, pipelines will also have a staging environment
- a staging environment is a non-production, usually non-public environment that is very close to the actual production environment
- we often use automation to create these environments and to ensure that they are indeed identical
- we use a staging environment as a pre-production environment
- essentially, we try out our deployment in the pre-production environment
- CD can refer to two concepts:
  - Continuous Deployment - where every change is automatically deployed to production
  - Continuous Delivery - where every change is automatically deployed to staging but where we need some manual intervention to deploy to production

---

## Assignment

- create a staging environment and add it to the CI/CD pipeline

---

## Assignment solution

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - test
  - deploy staging
  - test staging
  - deploy production
  - test production

variables:
  APP_BASE_URL: http://YOUR-BUCKET-NAME.s3-website-YOUR-REGION.amazonaws.com
  APP_BASE_URL_STAGING: http://YOUR-BUCKET-NAME-STAGING.s3-website-YOUR-REGION.amazonaws.com

build website:
  image: node:16-alpine
  stage: build
  script:
    - yarn install
    - yarn lint
    - yarn test
    - yarn build
  artifacts:
    paths:
      - build

test website:
  image: node:16-alpine
  stage: test
  script:
    - yarn global add serve
    - apk add curl
    - serve -s build &
    - sleep 10
    - curl http://localhost:3000 | grep "React App"

deploy to staging:
  stage: deploy staging
  image: 
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  script:
    - aws --version
    - aws s3 sync build s3://$AWS_S3_BUCKET_STAGING --delete

staging tests:
  stage: test staging
  image: curlimages/curl
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  script:
    - curl $APP_BASE_URL_STAGING | grep "React App"

deploy to production:
  stage: deploy production
  image: 
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  script:
    - aws --version
    - aws s3 sync build s3://$AWS_S3_BUCKET --delete

production tests:
  stage: test production
  image: curlimages/curl
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  script:
      - curl $APP_BASE_URL | grep "React App"

```

:::

---

## Environments

- every system where we deploy an application is an environment
- typical environments include test, staging & production
- GitLab offers support for environments
- we can define environments in `[Deployments]` > `[Environments]`

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - test
  - deploy staging
  - deploy production

build website:
  image: node:16-alpine
  stage: build
  script:
    - yarn install
    - yarn lint
    - yarn test
    - yarn build
  artifacts:
    paths:
      - build

test website:
  image: node:16-alpine
  stage: test
  script:
    - yarn global add serve
    - apk add curl
    - serve -s build &
    - sleep 10
    - curl http://localhost:3000 | grep "React App"

deploy to staging:
  stage: deploy staging
  environment: staging
  image: 
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  script:
    - aws --version
    - aws s3 sync build s3://$AWS_S3_BUCKET --delete
    - curl $CI_ENVIRONMENT_URL | grep "React App"

deploy to production:
  stage: deploy production
  environment: production
  image: 
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  script:
    - aws --version
    - aws s3 sync build s3://$AWS_S3_BUCKET --delete
    - curl $CI_ENVIRONMENT_URL | grep "React App"
```

:::

::: info 📚Resources

- [Predefined variables in GitLab](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html)

:::

---

## Reusing configuration

- sometimes, multiple jobs may look almost the same, and we should try to avoid repeating ourselves
- GitLab allows us to inherit from an exiting job with the `extends:` keyword

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - test
  - deploy staging
  - deploy production

build website:
  image: node:16-alpine
  stage: build
  script:
    - yarn install
    - yarn lint
    - yarn test
    - yarn build
  artifacts:
    paths:
      - build

test website:
  image: node:16-alpine
  stage: test
  script:
    - yarn global add serve
    - apk add curl
    - serve -s build &
    - sleep 10
    - curl http://localhost:3000 | grep "React App"

.deploy:
  image: 
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  script:
    - aws --version
    - aws s3 sync build s3://$AWS_S3_BUCKET --delete
    - curl $CI_ENVIRONMENT_URL | grep "React App"

deploy to staging:
  stage: deploy staging
  environment: staging
  extends: .deploy

deploy to production:
  stage: deploy production
  environment: production
  extends: .deploy

```

:::

---

## Assignment

- the goal of this assignment is to expand the post-deployment tests to ensure that the correct version has been deployed
- add a file named <FontIcon icon="fa-brands fa-html5"/>`version.html` which contains the current build number
- the current build number is given by a predefined GitLab CI variable named `CI_PIPELINE_IID`

::: info 📚Resources

- [Predefined variables in GitLab](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html)

:::

---

## Assignment solution

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - test
  - deploy staging
  - deploy production

variables:
  APP_VERSION: $CI_PIPELINE_IID

build website:
  image: node:16-alpine
  stage: build
  script:
    - yarn install
    - yarn lint
    - yarn test
    - yarn build
    - echo $APP_VERSION > build/version.html
  artifacts:
    paths:
      - build

test website:
  image: node:16-alpine
  stage: test
  script:
    - yarn global add serve
    - apk add curl
    - serve -s build &
    - sleep 10
    - curl http://localhost:3000 | grep "React App"

.deploy:
  image: 
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  script:
    - aws --version
    - aws s3 sync build s3://$AWS_S3_BUCKET --delete
    - curl $CI_ENVIRONMENT_URL | grep "React App"
    - curl $CI_ENVIRONMENT_URL/version.html | grep $APP_VERSION

deploy to staging:
  stage: deploy staging
  environment: staging
  extends: .deploy

deploy to production:
  stage: deploy production
  environment: production
  extends: .deploy
```

:::

---

## Continuous Delivery pipeline

- adding `when: manual` allows us to manually trigger the production deployment

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - test
  - deploy staging
  - deploy production

variables:
  APP_VERSION: $CI_PIPELINE_IID

build website:
  image: node:16-alpine
  stage: build
  script:
    - yarn install
    - yarn lint
    - yarn test
    - yarn build
    - echo $APP_VERSION > build/version.html
  artifacts:
    paths:
      - build

test website:
  image: node:16-alpine
  stage: test
  script:
    - yarn global add serve
    - apk add curl
    - serve -s build &
    - sleep 10
    - curl http://localhost:3000 | grep "React App"

.deploy:
  image: 
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
  script:
    - aws --version
    - aws s3 sync build s3://$AWS_S3_BUCKET --delete
    - curl $CI_ENVIRONMENT_URL | grep "React App"
    - curl $CI_ENVIRONMENT_URL/version.html | grep $APP_VERSION

deploy to staging:
  stage: deploy staging
  environment: staging
  extends: .deploy

deploy to production:
  stage: deploy production
  when: manual
  environment: production
  extends: .deploy
```

:::

---

<TagLinks />