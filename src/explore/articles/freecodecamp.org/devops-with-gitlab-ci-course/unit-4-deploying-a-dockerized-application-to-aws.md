---
lang: ko-KR
title: "Unit 4: Deploying a dockerized application to AWS"
description: (4/5) DevOps with GitLab CI Course
category: 
  - DevOps
  - Gitlab
  - Docker
  - AWS
  - Youtube
tag: 
  - blog
  - freecodecamp.org
  - devops
  - gitlab
  - docker
  - aws
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
      content: (4/5) DevOps with GitLab CI Course
    - property: og:description
      content: "Unit 4: Deploying a dockerized application to AWS"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/devops-with-gitlab-ci-course/unit-4-deploying-a-dockerized-application-to-aws.html
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

- modern applications tend to be more complex, and most of them use Docker 
- we will build & deploy an application that runs in a Docker container

---

## Introduction to AWS Elastic Beanstalk

AWS Elastic Beanstalk (AWS EB) is a service that allows us to deploy an application in the AWS cloud without having to worry about managing the virtual server(s) that runs it

---

## Creating a new AWS Elastic Beanstalk application

- when creating an EB app, choose the *Docker* platform and deploy the sample app
- AWS EB will use two AWS services to run the application:
  - EC2 (virtual servers)
  - S3 (storage)
- to deploy a new version, go to the environment in EB and upload the file in templates called `Dockerrun.aws.public.json`

> <FontIcon icon="iconfont icon-json"/>`Dockerrun.aws.public.json`

```json
{
  "AWSEBDockerrunVersion": "1",
  "Image": {
    "Name": "nginx"
  },
  "Ports": [
    {
      "ContainerPort": 80
    }
  ]
}
```

---

## Creating the Dockerfile

- create a new file called `Dockerfile` in the root of the project
- add the following contents to it:

```dockerfile
FROM nginx:1.20-alpine
COPY build /usr/share/nginx/html
```

::: info 📚Resources

- [Official build of Nginx on Dockerhub](https://hub.docker.com/_/nginx)

:::

---

## Building the Docker image

- to build the Docker image, we will use the command `docker build`
- to build Docker images from a GitLab CI pipeline, we need to start the Docker Daemon as a service

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - package

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

build docker image:
  stage: package
  image: docker:20.10.12
  services:
    - docker:20.10.12-dind
  script:
    - echo $CI_REGISTRY_PASSWORD | docker login -u $CI_REGISTRY_USER $CI_REGISTRY --password-stdin
    - docker build -t $CI_REGISTRY_IMAGE -t $CI_REGISTRY_IMAGE:$APP_VERSION .
    - docker image ls
    - docker push --all-tags $CI_REGISTRY_IMAGE

```

:::

::: info 📚Resources

- [docker build command reference](https://docs.docker.com/engine/reference/commandline/build/)
- [Docker in Docker (dind) on Dockerhub](https://hub.docker.com/_/docker)
- [Predefined variables in GitLab](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html)
- [`docker image ls`](https://docs.docker.com/engine/reference/commandline/image_ls/)

:::

---

## Docker container registry

- to preserve a Docker image, we need to push it to a registry
- Dockerhub is a public registry with Docker images
- GitLab offers a private Docker registry which is ideal for private projects

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - package

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

build docker image:
  stage: package
  image: docker:20.10.12
  services:
    - docker:20.10.12-dind
  script:
    - echo $CI_REGISTRY_PASSWORD | docker login -u $CI_REGISTRY_USER $CI_REGISTRY --password-stdin
    - docker build -t $CI_REGISTRY_IMAGE -t $CI_REGISTRY_IMAGE:$APP_VERSION .
    - docker image ls
    - docker push --all-tags $CI_REGISTRY_IMAGE

```

:::

::: info 📚Resources

- [docker login command reference](https://docs.docker.com/engine/reference/commandline/login/)
- [docker push command reference](https://docs.docker.com/engine/reference/commandline/push/)

:::

---

## Testing the container

- we want to test the container to see if the application running on it (web server) is working properly
- to start the container, we will use the `services:` keyword

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - package
  - test

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

build docker image:
  stage: package
  image: docker:20.10.12
  services:
    - docker:20.10.12-dind
  script:
    - echo $CI_REGISTRY_PASSWORD | docker login -u $CI_REGISTRY_USER $CI_REGISTRY --password-stdin
    - docker build -t $CI_REGISTRY_IMAGE -t $CI_REGISTRY_IMAGE:$APP_VERSION .
    - docker image ls
    - docker push --all-tags $CI_REGISTRY_IMAGE

test docker image:
  stage: test
  image: curlimages/curl
  services:
    - name: $CI_REGISTRY_IMAGE:$APP_VERSION
      alias: website
  script:
    - curl http://website/version.html | grep $APP_VERSION
```

:::

---

## Private registry authentication

- AWS EB requires authentication credentials to pull our Docker image
- GitLab allows us to create a Deploy Token that AWS can use to log to the registry
- to generate a Deploy Token, from your project, go to *Settings > Repository > Deploy tokens*.
- create a new Deploy Token with the following scopes:
  - `read_repository`
  - `read_registry`

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - package
  - test
  - deploy

variables:
  APP_VERSION: $CI_PIPELINE_IID

.build website:
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

.build docker image:
  stage: package
  image: docker:20.10.12
  services:
    - docker:20.10.12-dind
  script:
    - echo $CI_REGISTRY_PASSWORD | docker login -u $CI_REGISTRY_USER $CI_REGISTRY --password-stdin
    - docker build -t $CI_REGISTRY_IMAGE -t $CI_REGISTRY_IMAGE:$APP_VERSION .
    - docker image ls
    - docker push --all-tags $CI_REGISTRY_IMAGE

.test docker image:
  stage: test
  image: curlimages/curl
  services:
    - name: $CI_REGISTRY_IMAGE:$APP_VERSION
      alias: website
  script:
    - curl http://website/version.html | grep $APP_VERSION

deploy to production:
  image:
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  stage: deploy
  variables:
    APP_NAME: My website
    APP_ENV_NAME: Mywebsite-env
  environment: production
  script:
    - aws --version
    - yum install -y gettext
    - export DEPLOY_TOKEN=$(echo $GITLAB_DEPLOY_TOKEN | tr -d "\n" | base64)
    - envsubst < templates/Dockerrun.aws.json > Dockerrun.aws.json
    - envsubst < templates/auth.json > auth.json
    - cat Dockerrun.aws.json
    - cat auth.json
    - aws s3 cp Dockerrun.aws.json s3://$AWS_S3_BUCKET/Dockerrun.aws.json
    - aws s3 cp auth.json s3://$AWS_S3_BUCKET/auth.json

```

:::

---

## Deploying to AWS Elastic Beanstalk

- a new deployment to AWS EB happens in two steps
- step 1: we create a new application version with `aws elasticbeanstalk create-application-version`
- step 2: we update the environment with the new application version with `aws elasticbeanstalk update-environment`

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - package
  - test
  - deploy

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

build docker image:
  stage: package
  image: docker:20.10.12
  services:
    - docker:20.10.12-dind
  script:
    - echo $CI_REGISTRY_PASSWORD | docker login -u $CI_REGISTRY_USER $CI_REGISTRY --password-stdin
    - docker build -t $CI_REGISTRY_IMAGE -t $CI_REGISTRY_IMAGE:$APP_VERSION .
    - docker image ls
    - docker push --all-tags $CI_REGISTRY_IMAGE

test docker image:
  stage: test
  image: curlimages/curl
  services:
    - name: $CI_REGISTRY_IMAGE:$APP_VERSION
      alias: website
  script:
    - curl http://website/version.html | grep $APP_VERSION

deploy to production:
  image:
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  stage: deploy
  variables:
    APP_NAME: My website
    APP_ENV_NAME: Mywebsite-env
  environment: production
  script:
    - aws --version
    - yum install -y gettext
    - export DEPLOY_TOKEN=$(echo $GITLAB_DEPLOY_TOKEN | tr -d "\n" | base64)
    - envsubst < templates/Dockerrun.aws.json > Dockerrun.aws.json
    - envsubst < templates/auth.json > auth.json
    - cat Dockerrun.aws.json
    - cat auth.json
    - aws s3 cp Dockerrun.aws.json s3://$AWS_S3_BUCKET/Dockerrun.aws.json
    - aws s3 cp auth.json s3://$AWS_S3_BUCKET/auth.json
    - aws elasticbeanstalk create-application-version --application-name "$APP_NAME" --version-label $APP_VERSION --source-bundle S3Bucket=$AWS_S3_BUCKET,S3Key=Dockerrun.aws.json
    - aws elasticbeanstalk update-environment --application-name "$APP_NAME" --version-label $APP_VERSION --environment-name $APP_ENV_NAME

```

:::

---

## Post-deployment testing

- updating an EB environment does not happen instantly
- we will use `aws elasticbeanstalk wait` to know when the environment has been updated

::: important Pipeline after this lecture

<FontIcon icon="iconfont icon-gitlab"/> `.gitlab-ci.yml`

```yml
stages:
  - build
  - package
  - test
  - deploy

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

build docker image:
  stage: package
  image: docker:20.10.12
  services:
    - docker:20.10.12-dind
  script:
    - echo $CI_REGISTRY_PASSWORD | docker login -u $CI_REGISTRY_USER $CI_REGISTRY --password-stdin
    - docker build -t $CI_REGISTRY_IMAGE -t $CI_REGISTRY_IMAGE:$APP_VERSION .
    - docker image ls
    - docker push --all-tags $CI_REGISTRY_IMAGE

test docker image:
  stage: test
  image: curlimages/curl
  services:
    - name: $CI_REGISTRY_IMAGE:$APP_VERSION
      alias: website
  script:
    - curl http://website/version.html | grep $APP_VERSION

deploy to production:
  image:
    name: amazon/aws-cli:2.4.11
    entrypoint: [""]
  stage: deploy
  variables:
    APP_NAME: My website
    APP_ENV_NAME: Mywebsite-env
  environment: production
  script:
    - aws --version
    - yum install -y gettext
    - export DEPLOY_TOKEN=$(echo $GITLAB_DEPLOY_TOKEN | tr -d "\n" | base64)
    - envsubst < templates/Dockerrun.aws.json > Dockerrun.aws.json
    - envsubst < templates/auth.json > auth.json
    - cat Dockerrun.aws.json
    - cat auth.json
    - aws s3 cp Dockerrun.aws.json s3://$AWS_S3_BUCKET/Dockerrun.aws.json
    - aws s3 cp auth.json s3://$AWS_S3_BUCKET/auth.json
    - aws elasticbeanstalk create-application-version --application-name "$APP_NAME" --version-label $APP_VERSION --source-bundle S3Bucket=$AWS_S3_BUCKET,S3Key=Dockerrun.aws.json
    - aws elasticbeanstalk update-environment --application-name "$APP_NAME" --version-label $APP_VERSION --environment-name $APP_ENV_NAME
    - aws elasticbeanstalk wait environment-updated --application-name "$APP_NAME" --version-label $APP_VERSION --environment-name $APP_ENV_NAME
    - curl $CI_ENVIRONMENT_URL/version.html | grep $APP_VERSION
```

:::

---

<TagLinks />