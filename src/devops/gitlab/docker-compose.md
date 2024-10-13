---
lang: ko-KR
title: Docker Compose
description: GitLab > Docker Compose
icon: fa-brands fa-octopus-deploy
category:
  - GitLab
  - Docker Compose
tag: 
  - sh
  - bash
  - cli
  - docker
  - docker-desktop
  - yml
  - yaml
  - docker-container
  - vm
  - docker-compose
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 구성요소

<ShieldsGroup logos="gitlab,docker"/>

---

## `docker-compose-gitlab.yml`

```yml
version: "3"

networks:
  common-network:
    driver: bridge
    
volumes:
  vol-gitlab-config:
  vol-gitlab-logs:
  vol-gitlab-data:
  vol-gitlabrunner-config:

services:
  gitlab:
    image: 'gitlab/gitlab-ce:15.9.6-ce.0'
    container_name: gitlab
    restart: always
    networks:
      - common-network
    hostname: 'gitlab.example.com'
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://gitlab.example.com'
        gitlab_rails['artifacts_enabled'] = true
        gitlab_rails['artifacts_path'] = "/var/opt/gitlab/gitlab-rails/shared/artifacts"
    ports:
      - "1980:80"
      - "1922:22"
      - "19443:443"
    volumes:
      - 'vol-gitlab-config:/etc/gitlab'
      - 'vol-gitlab-logs:/var/log/gitlab'
      - 'vol-gitlab-data:/var/opt/gitlab'
    shm_size: '256m'
  gitlab-runner:
    image: 'gitlab/gitlab-runner:alpine3.14-bleeding'
    container_name: gitlab-runner
    restart: always
    networks:
      - common-network
    volumes:
      - 'vol-gitlabrunner-config:/etc/gitlab-runner'
      - '/var/run/docker.sock:/var/run/docker.sock'
```

::: warning docker `bind mounts`를 구성할 경우 생기는 예외

Gitlab Runner 돌릴 시 빌드 된 artifacts 업로드 시도 중 아래와 같은 에러로그 배출

```
...
Job ends with error "WARNING: Uploading artifacts as "archive" to coordinator... failed"
...
```

mount된 volume이 있으나, runner는 찾지 못하기 때문에 발생하는 것으로 확인

그러므로 __꼭 docker volume을 지정하여 관리__ 하도록 권고

:::

---

## Gitlab Runner 구성

컨테이너로 sh접근 후 실행

```sh
docker inspect --format='{{.NetworkSettings.Networks}}' gitlab # gitlab이 속해있는 network이름 찾기 (i.e. docker-compose_common-network)

docker exec -it gitlab-runner /bin/bash # gitlab-runner 서버로 접근

gitlab-runner register --non-interactive \
  --url http://gitlab \
  --registration-token GR1348941qg2LRSP-3Rp5xmyErEyF \
  --executor docker \
  --docker-image alpine:latest \
  --docker-volumes '/var/run/docker.sock:/var/run/docker.sock' \
  --docker-network-mode docker-compose_common-network
```

### 진행 시 입력 해야 할 값

```
Runtime platform                                    arch=amd64 os=linux pid=28 revision=21da6177 version=15.12.0~beta.41.g21da6177
Running in system-mode.

Enter the GitLab instance URL (for example, https://gitlab.com/):
http://gitlab
Enter the registration token:
GR1348941XFBuSpcsKGBSHAxLv2FP
Enter a description for the runner:
[bc8b8ed5ef2d]:
Enter tags for the runner (comma-separated):

Enter optional maintenance note for the runner:

WARNING: Support for registration tokens and runner parameters in the 'register' command has been deprecated in GitLab Runner 15.6 and will be replaced with support for authentication tokens. For more information, see https://gitlab.com/gitlab-org/gitlab/-/issues/380872
Registering runner... succeeded                     runner=GR1348941XFBuSpcs
Enter an executor: docker-autoscaler, docker+machine, docker-ssh+machine, custom, docker, docker-windows, ssh, virtualbox, instance, docker-ssh, parallels, shell, kubernetes:
docker
Enter the default Docker image (for example, ruby:2.7):

Enter the default Docker image (for example, ruby:2.7):
node:16-alpine
Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!

Configuration (with the authentication token) was saved in "/etc/gitlab-runner/config.toml"
```

---

<TagLinks />
