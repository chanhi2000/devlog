---
lang: ko-KR
title: Top Docker and Docker Desktop alternatives
description: Article(s) > Top Docker and Docker Desktop alternatives
icon: fa-brands fa-docker
category: 
  - DevOps
  - Docker
  - Podman
  - VM
  - Article(s)
tag: 
  - blog
  - blog.logrocket.com
  - devops
  - docker
  - vm
head:
  - - meta:
    - property: og:title
      content: Article(s) > Top Docker and Docker Desktop alternatives
    - property: og:description
      content: Top Docker and Docker Desktop alternatives
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/blog.logrocket.com/docker-desktop-alternatives.html
prev: /devops/docker/articles/README.md
date: 2022-10-14
isOriginal: false
cover: /images/content/blog.logrocket.com/docker-desktop-alternatives/banner.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Docker > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/docker/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Top Docker and Docker Desktop alternatives"
  desc="Explore the top alternatives to Docker and Docker Desktop for building, running, and distributing container images, like Podman and Lima."
  url="https://blog.logrocket.com/docker-desktop-alternatives"
  logo="/images/content/blog.logrocket.com/favicon.png"
  preview="/images/content/blog.logrocket.com/docker-desktop-alternatives/banner.png"/>

::: note Editor’s note

This Docker and Docker Desktop alternatives article was last updated on 28 October 2022 to include information on several more tools.

:::

![](/images/content/blog.logrocket.com/docker-desktop-alternatives/banner.png)

As one of the most widely used container platforms, [<FontIcon icon="fas fa-globe"/>Docker, a monolithic tool](https://blog.logrocket.com/dockerizing-a-django-app/), handles every aspect of the containerization process, from building, running, and inspecting container images.

Docker Desktop is a fully featured software that allows Mac and Windows to establish a Linux virtual machine in which to run the Docker engine. It allows you to create and share containerized applications and micro-services. In August 2021, Docker Desktop announced [<FontIcon icon="fa-brands fa-docker"/>changes to its licensing](https://docker.com/blog/updating-product-subscriptions/), meaning it will no longer be free for companies with more than 250 employees or over $10 million in revenue. However, there are several alternative approaches to containerization, often in the form of standalone tools, which sometimes offer a better result than what Docker delivers.

Docker containers run within the virtual machine, which is a significant distinction between Docker and Docker Desktop. Everything else is an outcome. You do not need to set up a virtual machine or a client-server connection using Docker Desktop. Docker Desktop allows you to run Linux containers on Windows or MacOS.

In this article, we’ll cover a few Docker alternatives, as well as Docker Desktop alternatives that act as drop-in replacements for various aspects of the Docker ecosystem. Each tool covered in this tutorial adheres to the [<FontIcon icon="fas fa-globe"/>Open Containers Initiative (OCI)](https://opencontainers.org/) specification, which includes specifications for container runtime, container distribution, and container images. Let’s get started!

To jump ahead:

[[toc]]

---

## 1. Podman

![Podman Docker Alternative](/images/content/blog.logrocket.com/docker-desktop-alternatives/podman.png)

[<FontIcon icon="iconfont icon-podman"/>Podman](https://podman.io/), a container engine developed by RedHat, is one of the most prominent Docker alternatives for building, running, and storing container images. Podman maintains compatibility with the OCI container image spec just like Docker, meaning Podman can run container images produced by Docker and vice versa.

Podman’s command line interface is identical to Docker’s, including the arguments. You can simply alias the `docker` command to `podman` without noticing the difference, making it easy for existing Docker users to transition to Podman:

```sh
# .bashrc
alias docker=podman
```

Unlike Docker, which uses the `dockerd` daemon to manage all the containers under its control, Podman is daemonless. Therefore, there’s no persistent connection to some long-living process, removing the single point of failure issue in Docker, where an abrupt crash in the daemon process can kill running containers or cause them to become orphaned.

Podman interacts with the image registry, storage, and Linux Kernel, and its containers are independent of any central process. Instead, the containers are started as child processes of the Podman process, heavily using user namespaces and network namespaces.

Podman also differentiates from Docker by using rootless containers by default. Root access is not necessary for launching and operating a container, but it helps to mitigate potential vulnerabilities in the container runtime that can cause privilege escalation.

Note that Docker now supports a [<FontIcon icon="fa-brands fa-docker"/>rootless mode](https://docs.docker.com/engine/security/rootless/), which debuted as an experimental feature in Docker Engine v19.03 before being stabilized in v20.10. However, its use is not yet widespread in the ecosystem.

An additional feature of Podman that is not yet present in Docker is the ability to create and run pods. A pod is a collection of one or more containers that utilize a shared pool of resources and work closely together to achieve a specific function. Pods are also the smallest execution unit in Kubernetes, making the transition to Kubernetes easier should the need arise.

---

## 2. Buildah

![Buildah Docker Alternative](/images/content/blog.logrocket.com/docker-desktop-alternatives/buildah.png)

[<FontIcon icon="fas fa-globe"/>Buildah](https://buildah.io/) is a Docker alternative for building images. Also developed by RedHat, Buildah is often used together with Podman. In fact, Podman uses a subset of Buildah’s functionality to implement its `build` subcommand.

If you need fine-grained control over images, use the full Buildah CLI tool. At the time of writing, Buildah works on several Linux distributions but is not supported on Windows or macOS.

The images that Buildah produces fully comply with the OCI specification, operating in the same manner as images built with Docker. Buildah can also create images using an existing `Dockerfile` or `Containerfile`, making migration much easier. Buildah also allows you to use Bash scripts that sidestep the limitations of Dockerfiles, automating the process more easily.

Like Podman, Buildah follows a fork-exec model that doesn’t require a central daemon or root access to operate.

One advantage of using Buildah over Docker is its ability to commit many changes to a single layer, which is a long-requested feature among container users. Buildah also provides the ability to create an empty container image storing only metadata, making it easy to add only the packages that are required in the image. In turn, the final output is smaller than its Docker equivalent.

Another difference is that Buildah images are user-specific, so only the images built by a user will be visible to them.

---

## 3. BuildKit

![BuildKit Docker Alternative](/images/content/blog.logrocket.com/docker-desktop-alternatives/buildkit.png)

[BuildKit (<FontIcon icon="iconfont icon-github"/>`moby/buildkit`)](https://github.com/moby/buildkit) is a new image building engine for Docker developed as part of the [<FontIcon icon="fas fa-globe"/>Moby project](https://mobyproject.org/). From Docker ≥v18.09, BuildKit has been [<FontIcon icon="fa-brands fa-docker"/>integrated into`docker build`](https://docs.docker.com/develop/develop-images/build_enhancements/), but it also comes as a standalone tool.

One of BuildKit’s headline features includes improved performance through parallel processing of image layers that don’t depend on each other. Another feature is better caching, which reduces the need to rebuild each layer of an image. Finally, BuildKit offers extensibility through a more pluggable architecture. BuildKit also introduces rootless builds and the ability to skip unused stages.

At the time of writing, BuildKit is available on an opt-in basis. To enable Buildkit before building an image, you must use the `DOCKER_BUILDKIT` environmental variable in your shell:

```sh
DOCKER_BUILDKIT=1 docker build .
```

You can also configure Docker to use BuildKit by default. Simply edit or create the <FontIcon icon="fas fa-folder-open"/>`/etc/docker/`<FontIcon icon="iconfont icon-json"/>`daemon.json` file:

```json
{
  "features": {
    "buildkit": true
  }
}
```

After saving the file, reload the daemon to apply the change:

```sh
systemctl reload docker
```

It’s easy to tell when BuildKit is being used because of its output, which differs from the default engine:

```sh
DOCKER_BUILDKIT=1 docker build . 
# 
# [+] Building 30.8s (7/7) FINISHED => 
# [internal] load build definition from Dockerfile 0.1s => 
# => 
# transferring dockerfile: 142B 0.1s => 
# [internal] load .dockerignore 0.0s => 
# => 
# transferring context: 2B 0.0s => 
# [internal] load metadata for docker.io/library/centos:latest 0.6s => 
# [auth] library/centos:pull token for registry-1.docker.io 0.0s => 
# [1/2] FROM docker.io/library/centos:latest@sha256:a27fd8080b517143cbbbab9dfb7c8571c40d67d534bbdee55bd6 14.3s => 
# => 
# resolve docker.io/library/centos:latest@sha256:a27fd8080b517143cbbbab9dfb7c8571c40d67d534bbdee55bd6c 0.0s => 
# => 
# sha256:a27fd8080b517143cbbbab9dfb7c8571c40d67d534bbdee55bd6c473f432b177 762B / 762B 0.0s => 
# => 
# sha256:a1801b843b1bfaf77c501e7a6d3f709401a1e0c83863037fa3aab063a7fdb9dc 529B / 529B 0.0s => 
# => 
# sha256:5d0da3dc976460b72c77d94c8a1ad043720b0416bfc16c52c45d4847e53fadb6 2.14kB / 2.14kB 0.0s => 
# => 
# sha256:a1d0c75327776413fa0db9ed3adcdbadedc95a662eb1d360dad82bb913f8a1d1 83.52MB / 83.52MB 2.0s => 
# => 
# extracting sha256:a1d0c75327776413fa0db9ed3adcdbadedc95a662eb1d360dad82bb913f8a1d1 10.8s => 
# [2/2] RUN yum -y install httpd 14.7s => 
# exporting to image 1.0s => 
# => 
# exporting layers 1.0s => 
# => 
# writing image sha256:c18170a407ca85218ee83526075a3f2a2e74f27d7bd5908ad68ba2328b4f4783 0.0s
```

---

## 4. Kaniko

![Kaniko Docker Alternative](/images/content/blog.logrocket.com/docker-desktop-alternatives/kaniko-docker-alternative.png)

Developed by Google, [Kaniko (<FontIcon icon="iconfont icon-github"/>`GoogleContainerTools/kaniko`](https://github.com/GoogleContainerTools/kaniko) is used to develop container images inside of a container or a Kubernetes cluster. Like Buildah, Kaniko does not require a daemon, and it can build images from Dockerfiles without depending on Docker.

The major difference between Docker and Kaniko is that Kaniko is more focused on Kubernetes workflows, and it is meant to be run as an image, making it inconvenient for local development.

---

## 5. Skopeo

![Skopeo Docker Alternative](/images/content/blog.logrocket.com/docker-desktop-alternatives/skopeo-docker-alternative.webp)

[Skopeo (<FontIcon icon="iconfont icon-github"/>`containers/skopeo`)](https://github.com/containers/skopeo) is yet another tool developed by RedHat for various operations on container images and image repositories. Skopeo can be used as an accompanying tool for Podman and Buildah, which are both intended to inspect images, transfer them from one registry to another, and bulk delete them if necessary.

Skopeo provides an `inspect` sub-command, which provides similar low-level information about a container image to `docker inspect`.

In contrast to Docker, Skopeo can help you gather useful information about a repository or a tag without having to download it first:

```sh
skopeo inspect docker://docker.io/fedora # inspect remote image
{
    "Name": "docker.io/library/fedora",
    "Digest": "sha256:72c6c48a902baff1ab9948558556ef59e3429c65697287791be3c709738955b3",
    "RepoTags": [
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "26-modular",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "branched",
        "heisenbug",
        "latest",
        "modular",
        "rawhide"
    ],
    "Created": "2021-11-02T21:29:22.547065293Z",
    "DockerVersion": "20.10.7",
    "Labels": {
        "maintainer": "Clement Verna \u003ccverna@fedoraproject.org\u003e"
    },
    "Architecture": "amd64",
    "Os": "linux",
    "Layers": [
        "sha256:fc811dadee2400b171b0e1eed1d973c4aa9459c6f81c77ce11c014a6104ae005"
    ],
    "Env": [
        "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
        "DISTTAG=f35container",
        "FGC=f35",
        "FBR=f35"
    ]
}
```

You can use `skopeo copy` to copy a container image from one remote registry to either another remote registry or a local directory. Another related feature is Skopeo’s ability to synchronize images between container registries and local directories with the `skopeo sync` command.

---

## 6. Dive

[Dive (<FontIcon icon="iconfont icon-github"/>`wagoodman/dive`)](https://github.com/wagoodman/dive) is another Docker alternative for inspecting, analyzing, and optimizing container images. Dive can show image contents by layer, highlighting the differences between each. Dive can also analyze your image, providing a percentage score for efficiency by estimating wasted space, which is helpful when you’re trying to reduce your image size.

Another useful feature is Dive’s CI integration, which provides a pass or fail result based on the image’s efficiency and amount of wasted space. To access the CI integration feature, set the `CI` environmental variable to `true` when invoking any valid `dive` command:

```sh
CI=true dive node:alpine
```

![Dive CI Integration](/images/content/blog.logrocket.com/docker-desktop-alternatives/dive-ci-integration-1.png)

---

## 7. runc and crun

![CRUN Docker Alternative](/images/content/blog.logrocket.com/docker-desktop-alternatives/crun-docker-alternative.jpeg)

[runc (<FontIcon icon="iconfont icon-github"/>`opencontainers/runc`)](https://github.com/opencontainers/runc) is a CLI tool that spawns and runs containers on Linux according to the OCI specification. runc was formerly embedded into Docker as a module but was later spun into a [<FontIcon icon="fa-brands fa-docker"/>standalone tool in 2015](https://docker.com/blog/runc/).

runc remains the default container runtime in Docker, Podman, and most other container engines. An alternative to runc is [crun (<FontIcon icon="iconfont icon-github"/>`containers/crun`)](https://github.com/containers/crun), which was developed by RedHat and written in C instead of Go like most Linux container tools.

crun boasts better performance and lower memory usage compared to runc, as well as the ability to set stricter limits on the memory allowed in the container. crun is also OCI-compliant and feature-compatible with runc, so you can use it as a replacement for runc in Docker, Podman, containerd, and any other container engine that uses OCI-compliant container runtimes. See the [<FontIcon icon="fa-brands fa-redhat"/>introductory article on crun](https://redhat.com/sysadmin/introduction-crun) for a more detailed comparison to runc.

---

## 8. LXD

![LXD Docker Alternative](/images/content/blog.logrocket.com/docker-desktop-alternatives/lxd-docker-alternative.jpeg)

[<FontIcon icon="fas fa-globe"/>LXD](https://linuxcontainers.org/) is a virtual machine manager and image-based system container. LXD offers images for a variety of Linux distributions. It offers a complete user experience centered on entire Linux systems operating within containers or virtual machines.

LXD offers compatibility for many storage backends and network types, coupled with the ability to run on hardware such as a laptop or cloud instance.

A component of LXD security and access control is based on group membership. As a root user, you may create an `lxd` group and add trusted members or users so that you can all communicate with the local daemon and have complete control over LXD. It also upgrades your operating system, installs all security patches available, and configures your network interface.

LXD provides [<FontIcon icon="fas fa-globe"/>snap packages](https://linuxcontainers.org/lxd/getting-started-cli/#snap-package) for many Linux distributions (including Ubuntu, Fedora, Arch Linux, Debian, and OpenSUSE) to facilitate installation. LXD’s most important features are its basic API, instances, profiles, backup, export, and configurability.

Unlike Docker, which runs one application process per Docker container, LXD operates as a container on the operating system, allowing it to make use of the benefits of both virtual machines and containers.

---

## 9. containerd

![Containerd Docker Alternative](/images/content/blog.logrocket.com/docker-desktop-alternatives/cointainerd-docker-alternative.png)

[<FontIcon icon="fas fa-globe"/>containerd](https://containerd.io/) is a container runtime created by Docker that handles the lifecycle of a container on a virtual machine. containerd is capable of retrieving container images from container registries, mounting storage, and enabling networking for a container.

containerd, together with Kubernetes, Envoy, Prometheus, and CoreDNS, graduated from the CNCF (Cloud Native Computing Foundation) in February 2019. It is available as a Linux and Windows daemon. Some containerd users include [<FontIcon icon="fas fa-globe"/>eliot](https://docs.eliot.run/), [<FontIcon icon="fas fa-globe"/>Cloud Foundry](https://cloudfoundry.org/), [Docker (<FontIcon icon="iconfont icon-github"/>`docker/engine`)](https://github.com/docker/engine), [Firecracker (<FontIcon icon="iconfont icon-github"/>`firecracker-microvm/firecracker`)](https://github.com/firecracker-microvm/firecracker), and [<FontIcon icon="fa-brands fa-aws"/>Bottlerocket](https://aws.amazon.com/bottlerocket).

containerd’s features include:

### Containers

A container is a metadata object in containerd. A container can be associated with resources such as an OCI runtime specification, image, root filesystem, and other features:

```sh
redis, err := client.NewContainer(context, "redis-master")
defer redis.Delete(context)
```

### Namespaces

Namespaces enable several consumers to use the same container without conflict. It offers the advantage of sharing data while maintaining isolation with containers and pictures.

To provide a namespace for API calls, run the following code:

```sh
context = context.Background()

//create a context for docker
docker = namespaces.WithNamespace(context, "docker")

containerd, err := client.NewContainer(docker, "id")
```

To provide a default namespace on the client, do the following:

```sh
client, err := containerd.New(address, containerd.WithDefaultNamespace("docker"))
```

### Client

containerd provides a complete client package to assist you in integrating containerd into your platform:

```sh
import (
  "context"

  "github.com/containerd/containerd"
  "github.com/containerd/containerd/cio"
  "github.com/containerd/containerd/namespaces"
)


func main() {
  client, err := containerd.New("/run/containerd/containerd.sock")
  defer client.Close()
}
```

### OCI runtime specification

For operating containers, containerd fully implements the OCI runtime specification. To assist you in generating runtime specs based on photos and other parameters, the containerd development team included some utilities.

When constructing a container, you may indicate how to alter the specification:

```sh
redis, err := client.NewContainer(context, "redis-master", containerd.WithNewSpec(oci.WithImageConfig(image)))
```

---

## Docker Desktop alternatives

### 1. Rancher Desktop

![Rancher Desktop Docker Desktop alternative](/images/content/blog.logrocket.com/docker-desktop-alternatives/rancher-desktop-docker-desktop-alternative.png)

[<FontIcon icon="fas fa-globe"/>Rancher Desktop](https://rancherdesktop.io/) is a Docker Desktop alternative for Mac, Windows, and Linux. It features a built-in GUI and is easy to use. The container runtime used by Kubernetes and Rancher Desktop is similar.

Rancher Desktop offers container management for building, pushing, and running containers. You have a choice between the Moby/dockerd engine offered by Docker CLI and the containerd engine offered by nerdctl. The containerd project provides nerdctl, a “Docker-compatible CLI for containerd.”

### 2. Minikube

![Minikube Docker Desktop Alternative](/images/content/blog.logrocket.com/docker-desktop-alternatives/minikube-docker-desktop-alternative.jpeg)

[Minikube (<FontIcon icon="iconfont icon-github"/>`kubernetes/minikube`)](https://github.com/kubernetes/minikube) is a method for running Kubernetes locally on macOS, Windows, or Linux. Minikube does not have a graphical user interface, although it is open source.

Minikube may be configured in almost every aspect, including the use of alternative container runtimes, the use of a custom virtual machine image, and support for GPU and other hardware pass-through.

Minikube works on macOS via the Hypervisor framework, Windows via Hyper-V, Linux via native (no virtual machine), Docker, or KVM. You may also run the machine in VirtualBox. However, if you’re using Kubernetes with Docker, Minikube is the only Docker Desktop alternative you can use. If you choose, you may run just Docker with Minikube. The architecture is straightforward, yet recursive.

### 3. Lima

![Lima Docker Desktop Alternative](/images/content/blog.logrocket.com/docker-desktop-alternatives/lima-docker-desktop-alternative.jpeg)

[Lima (<FontIcon icon="iconfont icon-github"/>`lima-vm/lima`)](https://github.com/lima-vm/lima) is a container management application designed specifically for macOS, but it can be used on Linux as well. Lima promotes containerd and nerdctl ([contaiNERD (<FontIcon icon="iconfont icon-github"/>`containerd/nerdctl`](https://github.com/containerd/nerdctl)) [ctl (<FontIcon icon="iconfont icon-github"/>`containerd/nerdctl`)](https://github.com/containerd/nerdctl)) to Mac users, although it may also be used for non-container apps. Lima provides Linux virtual machines with automated data transfer, port forwarding, and built-in support for containerd.

You can install `lima` with this command:

```sh
brew install lima
```

After installation, you can start Lima using the command:

```sh
limactl start
```

---

## Conclusion

In this article, we’ve described several Docker and Docker Desktop alternatives for building, running, and distributing container images. Although Docker remains the dominant platform for containerization and container management, it’s good to know about alternative tools that may work better for your use case.

Replacing a specific Docker aspect should be fairly seamless because each tool mentioned adheres to the OCI specification. Be sure to leave a comment if there is any tool you think we missed. Thanks for reading!

---

<TagLinks />