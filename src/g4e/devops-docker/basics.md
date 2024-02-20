---
lang: ko-KR
title: 🐣Basics
description: 🐋Docker > 🐣Basics
category:
  - 🐋Docker 
  - 🐣Basics
tag: 
  - sh
  - bash
  - cli
  - docker
  - docker-desktop
  - docker-hub
  - docker-image
  - docker-container
  - vm
  - basics
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## 기본 명령어

### Image & Container관린

| 명령어 | 설명 |
| :--- | :--- |
| `docker create <IMAGE>` | Create a container (without starting it) |
| `docker rename <CONTAINER_NAME> <NEW_CONTAINER_NAME>` | Rename an existing container |
| `docker run -d -it <IMAGE>` | Start a container and creates an interactive bash shell in the container  |
| `docker exec -it <CONTAINER>` | Execute command inside already running container. |
| `docker rm <CONTAINER>` | Delete a container (if it is not running) |
| `docker update <CONTAINER>` | Update the configuration of the container |

### 기동/중지

| 명령어 | 설명 |
| :--- | :--- |
| `docker start <CONTAINER>` | Start Container |
| `docker stop <CONTAINER>` | Stop Container |
| `docker restart <CONTAINER>` | Stop running Container and start it again |
| `docker pause <CONTAINER>` | Pause processes in a running container |
| `docker unpause <CONTAINER>` | Unpause processes in a running container |
| `docker wait <CONTAINER>` | Block a container until others stop |
| `docker kill <CONTAINER>` | Kill a container by sending a SIGKILL to a running container |
| `docker attach <CONTAINER>` | Attach local standard input, output, and error streams to a running container |

### 이미지 up/down

| 명령어 | 설명 |
| :--- | :--- |
| `docker build <URL/FILE>` | Create an image from a Dockerfile |
| `docker build -t <tag> <URL/FILE>` | Create an image from a Dockerfile with Tags |
| `docker pull <IMAGE>` | Pull an image from a registry |
| `docker push <IMAGE>` | Push an image to a registry | 
| `docker import <URL/FILE>` | Create an image from a tarball |
| `docker commit <CONTAINER> <NEW_IMAGE_NAME>` | Create an image from a container |
| `docker rmi <IMAGE>` | Remove an image |
| `docker load <TAR_FILE/STDIN_FILE>` | Load an image from a tar archive or stdin |
| `docker save <IMAGE> > <TAR_FILE>` | Save an image to a tar archive |

### 상태 확인

| 명령어 | 설명 |
| :--- | :--- |
| `docker ps -a` | Lists both running containers and ones that have stopped |
| `docker logs <CONTAINER>` | List the logs from a running container |
| `docker inspect <OBJECT_NAME/ID>` | List low-level information on Docker objects |
| `docker events <CONTAINER>` | List real-time events from a container |
| `docker port <CONTAINER>` | Show port mapping for a container |
| `docker top <CONTAINER>` | Show running processes in a container |
| `docker stats <CONTAINER>` | Show live resource usage statistics of container | 
| `docker diff <CONTAINER>` | Show changes to files (or directories) on a filesystem |
| `docker <image> ls` | List all images that are locally stored with the docker engine |
| `docker history <IMAGE>` | Show the history of an image |

### 네트워크

| 명령어 | 설명 |
| :--- | :--- |
| `docker network ls` | List networks |
| `docker network rm <NETWORK>` | Remove one or more networks |
| `docker network inspect <NETWORK>` | Show information on one or more networks |
| `docker network connect <NETWORK> <CONTAINER>` | Connects a container to a network |
| `docker network disconnect <NETWORK> <CONTAINER>` | Disconnect a container from a network |

---

<TagLinks />
