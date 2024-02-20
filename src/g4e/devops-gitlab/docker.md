---
lang: ko-KR
title: 🐋Docker
description: 🦊GitLab > 🐋Docker
category:
  - 🦊GitLab
  - 🐋Docker
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

> {{ $frontmatter.description }}

[[toc]]

---

## Prerequisite(s)

<ShieldsGroup logos="docker,gitlab"/>

---

## Docker Run

### Prerequisite(s)

::: warning For Windows

- Add environment variable `GITLAB_HOME` = “C:\GitLab”
- Add inbound Windows firewall rule “Port” > TCP – 8080 > Name = TCP – 8080 – GITLAB
- Add inbound Windows firewall rule “Port” > TCP – 4430 > Name = TCP – 4430 – GITLAB
- Add outbound Windows firewall rule “Port” > TCP – 8080 > Name = TCP – 8080 – GITLAB
- Add outbound Windows firewall rule “Port” > TCP – 4430 > Name = TCP – 4430 – GITLAB

:::


### Run

> (For Linux)

```sh
docker run -d -it \
  --hostname gitlab.example.com \
  --publish 1980:80 --publish 1922:22 --publish 19443:443 \
  --name gitlab \
  --restart always \
  --volume $GITLAB_HOME/config:/etc/gitlab \
  --volume $GITLAB_HOME/logs:/var/log/gitlab \
  --volume $GITLAB_HOME/data:/var/opt/gitlab \
  gitlab/gitlab-ce:latest
```

> (For Windows)

```batch
docker run -d -it ^
  --hostname gitlab.example.com ^
  --publish 1980:80 --publish 1922:22 --publish 19443:443 ^
  --name gitlab ^
  --restart always ^
  --volume %GITLAB_HOME%/config:/etc/gitlab ^
  --volume %GITLAB_HOME%/logs:/var/log/gitlab ^
  --volume %GITLAB_HOME%/data:/var/opt/gitlab ^
  gitlab/gitlab-ce:latest
```

::: info Option(s)

- `detach`: 백그라운드 실행.
- `hostname`: gitlab 전용 도메인
- `publish`: gitlab에서는 22(ssh), 80(http), 443(https) 포트를 사용하는데 이를 포트포워딩 해준다.
- `name`: 컨테이너의 이름을 지정한다.
- `restart`: docker desktop이 실행될 때마다 자동으로 실행하는 명령어.
- `volume`: 데이터가 저장되는 곳을 설정해준다. 저 코드대로 라면 당연히 로컬에 `$GITLAB_HOME/gitlab` 디렉토리가 있어야 한다. ``/config``, ``/logs``, ``/data`` 디렉토리는 없다면 자동으로 생성해준다.

:::

### Check Log(s)

```sh
docker logs -f gitlab
```

좀 기다리다가(최대 10분) health check 같은 특정 로그들이 계속 반복해서 출력되고 있다면 정상적으로 컨테이너가 생성된 것이다.

### Gitlab Admin 계정

![처음에 접근 시 이와 같은 현상이 나타남][gitlab-pending-approval-1]

컨테이너로 sh접근

```sh
docker exec -it gitlab /bin/bash -c "cat /etc/gitlab/initial_root_password" # 출력된 로그에서 Password 부분을 다른 데 기록해두자. 
```

아래와 비슷한 로그가 생성

```
# WARNING: This value is valid only in the following conditions
#          1. If provided manually (either via `GITLAB_ROOT_PASSWORD` environment variable or via `gitlab_rails['initial_root_password']` setting in `gitlab.rb`, it was provided before database was seeded for the first time (usually, the first reconfigure run).
#          2. Password hasn't been changed manually, either via UI or via command line.
#
#          If the password shown here doesn't work, you must reset the admin password following https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: +Q1PpDEfw2NvY5u+HAsMgzbWg6WZozON4tAnOldG1/c=
```

이러면 로그인 시 🔑`root` / `+Q1PpDEfw2NvY5u+HAsMgzbWg6WZozON4tAnOldG1/c=` 로 로그인 시도

### 타 사용자 Approve

![Pending Approval 1/2][gitlab-pending-approval-2]

![Pending Approval 2/2][gitlab-pending-approval-3]

---

## Access

```
http://localhost:1980
```
---

<TagLinks />

[gitlab-pending-approval-1]: /images/gitlab-pending-approval-1.png
[gitlab-pending-approval-2]: /images/gitlab-pending-approval-2.png
[gitlab-pending-approval-3]: /images/gitlab-pending-approval-3.png