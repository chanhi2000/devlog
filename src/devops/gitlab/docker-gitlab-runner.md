---
lang: ko-KR
title: 💪GitLab Runner
description: Gitlab > 💪GitLab Runner
category:
  - Gitlab
  - 💪GitLab Runner
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

## Docker Run

### Prerequisite(s)

::: warning For Windows

- Add environment variable `GITLAB_RUNNER_HOME` = “C:\GitLab-Runner“

:::

### Run

> (For Linux)

```sh
docker run -d -it \
  --name gitlab-runner \
  --restart always \
  --volume $GITLAB_RUNNER_HOME/config:/etc/gitlab-runner: \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  gitlab/gitlab-runner:alpine3.14-bleeding
```

> (For Windows)

```batch
docker run -d -it ^
  --name gitlab-runner ^
  --restart always ^
  --volume %GITLAB_HOME%/config:/etc/gitlab-runner: ^
  --volume /var/run/docker.sock:/var/run/docker.sock ^
  gitlab/gitlab-runner:alpine3.14-bleeding
```

::: info Option(s)

- `d`: 백그라운드 실행.
- `name`: 컨테이너의 이름을 지정한다.
- `restart`: docker desktop이 실행될 때마다 자동으로 실행하는 명령어.
- `volume`: 데이터가 저장되는 곳을 설정해준다. 저 코드대로 라면 당연히 로컬에 `$GITLAB_RUNNER_HOME/gitlab` 디렉토리가 있어야 한다. `/config` 디렉토리는 없다면 자동으로 생성해준다.

:::

### GitLab 정보 등록

컨테이너로 sh접근 후 실행

```sh
docker exec -it gitlab-runner /bin/bash -c "gitlab-runner register"
```

💀실패 시 아래와 같은 경우 발생

```
Enter the GitLab instance URL (for example, https://gitlab.com/):
http://localhost:1980/
Enter the registration token:

Enter a description for the runner:
[29e02072f9d6]:
Enter tags for the runner (comma-separated):

Enter optional maintenance note for the runner:

WARNING: Support for registration tokens and runner parameters in the 'register' command has been deprecated in GitLab Runner 15.6 and will be replaced with support for authentication tokens. For more information, see https://gitlab.com/gitlab-org/gitlab/-/issues/380872
ERROR: Registering runner... failed                 runner=GR1348941XFBuSpcs status=couldn't execute POST against http://localhost:1980/api/v4/runners: Post "http://localhost:1980/api/v4/runners": dial tcp 127.0.0.1:1980: connect: connection refused
PANIC: Failed to register the runner.
```

도커 간 network 구성이 되어 있지 않아 GitLab을 접근할 수 없음.

> [🚢Docker Compose](docker-compose.md) 페이지에서 `docker-compose-gitlab.yml` 을 참고

---

<TagLinks />