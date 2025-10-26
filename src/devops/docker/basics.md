---
lang: ko-KR
title: Basics
description: Docker > Basics
icon: fas fa-egg
category:
  - DevOps
  - Docker
  - Basics
tag: 
  - devops
  - docker
  - container
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
head:
  - - meta:
    - property: og:title
      content: Docker > Basics
    - property: og:description
      content: Basics
    - property: og:url
      content: https://chanhi2000.github.io/devops/docker/basics.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 기본 명령어

::: tabs

@tab:active Image & Container 관리

```sh
#
# Image & Container 관리
#
docker create <IMAGE>                               # Create a container (without starting it)
docker rename <CONTAINER_NAME> <NEW_CONTAINER_NAME> # Rename an existing container 
docker run -d -it <IMAGE>                           # Start a container and creates an interactive bash shell in the container
docker exec -it <CONTAINER_NAME>                    # Execute command inside already running container
docker rm <CONTAINER_NAME>                          # Delete a container (if it is not running)
docker update <CONTAINER_NAME>                      # Update the configuration of the container
```

@tab Container 기동/중지

```sh
#
# Container 기동/중지
#
docker start <CONTAINER_NAME>                       # Start Container
docker stop <CONTAINER_NAME>                        # Stop Container
docker restart <CONTAINER_NAME>                     # Stop running Container and start it again
docker pause <CONTAINER_NAME>                       # Pause processes in a running container
docker unpause <CONTAINER_NAME>                     # Unpause processes in a running container
docker wait <CONTAINER_NAME>                        # Block a container until others stop
docker kill <CONTAINER_NAME>                        # Kill a container by sending a SIGKILL to a running container
docker attach <CONTAINER_NAME>                      # Attach local standard input, output, and error streams to a running container
```

@tab Image 관리 

```sh
#
# Image 관리
#
docker build <URL/FILE>                             # Create an image from a Dockerfile
docker build -t <tag> <URL/FILE>                    # Create an image from a Dockerfile with Tags
docker pull <IMAGE>                                 # Pull an image from a registry
docker push <IMAGE>                                 # Push an image to a registry 
docker import <URL/FILE>                            # Create an image from a tarball
docker commit <CONTAINER> <NEW_IMAGE_NAME>          # Create an image from a container
docker rmi <IMAGE>                                  # Remove an image
docker load <TAR_FILE/STDIN_FILE>                   # Load an image from a tar archive or stdin
docker save <IMAGE> > <TAR_FILE>                    # Save an image to a tar archive
```

@tab 상태 확인

```sh
#
# 상태 확인
#
docker ps -a                                        # Lists both running containers and ones that have stopped
docker logs <CONTAINER_NAME>                        # List the logs from a running container
docker inspect <OBJECT_NAME/ID>                     # List low-level information on Docker objects
docker events <CONTAINER_NAME>                      # List real-time events from a container
docker port <CONTAINER_NAME>                        # Show port mapping for a container
docker top <CONTAINER_NAME>                         # Show running processes in a container
docker stats <CONTAINER_NAME>                       # Show live resource usage statistics of container 
docker diff <CONTAINER_NAME>                        # Show changes to files (or directories) on a filesystem
docker <IMAGE> ls                                   # List all images that are locally stored with the docker engine
docker history <IMAGE>                              # Show the history of an image
```

@tab 네트워크

```sh
#
# 네트워크
#
docker network ls                                    # List networks 
docker network rm <NETWORK>                          # Remove one or more networks
docker network inspect <NETWORK>                     # Show information on one or more networks
docker network connect <NETWORK> <CONTAINER_NAME>    # Connects a container to a network
docker network disconnect <NETWORK> <CONTAINER_NAME> # Disconnect a container from a network
```

:::

---

<TagLinks />
