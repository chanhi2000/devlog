---
lang: ko-KR
title: You Don't Have to Use Docker Anymore
description: Article(s) > You Don't Have to Use Docker Anymore
icon: iconfont icon-podman
category: 
  - Podman
  - Article(s)
tag: 
  - blog
  - towardsdatascience.com
  - opinion
  - martin-heinz
  - docker
  - devops
  - podman
head:
  - - meta:
    - property: og:title
      content: Article(s) > You Don't Have to Use Docker Anymore
    - property: og:description
      content: You Don't Have to Use Docker Anymore
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/towardsdatascience.com/you-dont-have-to-use-docker-anymore.html
prev: /devops/podman/articles/README.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Podman > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/podman/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

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

```component VPCard
{
  "title": "You Don't Have to Use Docker Anymore",
  "desc": "Docker is not the only containerization tool out there and there might just be better alternatives…",
  "link": "https://towardsdatascience.com/its-time-to-say-goodbye-to-docker-5cfec8eff833",
  "logo": "https://cdn-images-1.medium.com/fit/c/128/128/1*VzTUkfeGymHP4Bvav-T-lA.png",
  "background": "rgba(53,88,118,0.2)"
}
```

> 2020.10.15

In the ancient times of containers (really more like 4 years ago) _Docker_ was the only player in the container game. That's not the case anymore though and Docker is not _the only_, but rather _just another_ container engine on the landscape. Docker allows us to build, run, pull, push or inspect container images, but for each of these tasks there are other alternative tools, which might just do better job at it than Docker. So, let's explore the landscape and (just _maybe_) uninstall and forget about Docker altogether…

---

## Why Not Use Docker, Though?

If you've been a docker user for long time, I think it will take some persuading for you to even consider to switch to different tooling. So, here goes:

First of all, Docker is a monolithic tool. It's a tool that tries to do everything, which generally is not the best approach. Most of the time it's better to choose a specialized tool that does just one thing, but does it really well.

If you are scared of switching to different set of tools, because you would have to learn to work with different CLI, different API or in general different concepts, then that won't be a problem. Choosing any of the tools shown in this article can be completely seamless as they all (including Docker) adhere to same specification under OCI, which is short for [Open Container Initiative](https://opencontainers.org). This initiative contains specifications for [<FontIcon icon="iconfont icon-github"/>`opencontainers/runtime-spec`](https://github.com/opencontainers/runtime-spec), [<FontIcon icon="iconfont icon-github"/>`opencontainers/distribution-spec`](https://github.com/opencontainers/distribution-spec) and [<FontIcon icon="iconfont icon-github"/>`opencontainers/image-spec`](https://github.com/opencontainers/image-spec), which covers all the features needed for working with containers.

Thanks to the OCI you can choose a set of tools that best suit your needs and at the same time you can still enjoy using the same APIs and same CLI commands as with Docker.

So, if you're open to trying out new tools, then let's compare the advantages, disadvantages and features of Docker and it's competitors to see whether it actually makes sense to even consider ditching Docker for some new shiny tool.

---

## Container Engines

When comparing Docker with any other tool we need to break it down by its components and first thing we should talk about are _container engines_. ~~Container engine is a tool that provides user interface for working with images and containers so that you don't have to mess with things like `SECCOMP` rules or SELinux policies.~~ Its job is also to pull images from remote repositories and expand them to your disk. It also _seemingly_ runs the containers, but in reality its job is to create container manifest and directory with image layers. It then passes them to _container runtime_ like `runc` or `crun` (which we will talk about little later).

There are many container engines available, but the most prominent competitor to Docker is _Podman_, developed by _Red Hat_. Unlike Docker, Podman doesn't need daemon to run and also doesn't need root privileges which has been long-standing concern with Docker. Based on the name, Podman can not only run containers, but also _pods_. In case you are not familiar with concept of pods, then pod is the smallest compute unit for Kubernetes. It consists of one or more containers — the main one and so-called _sidecars_ — that perform supporting tasks. This makes it easier for Podman users to later migrate their workloads to Kubernetes. So, as a simple demonstration, this is how you would run 2 containers in a single pod:

::: details <FontIcon icon="fas fa-terminal"/>podman.sh

```sh
podman pod create --name mypod
podman pod list
#
# POD ID         NAME    STATUS    CREATED         # OF CONTAINERS   INFRA ID
# 211eaecd307b   mypod   Running   2 minutes ago   1                 a901868616a5

podman run -d --pod mypod nginx  # First container
podman run -d --pod mypod nginx  # Second container
podman ps -a --pod
# 
# CONTAINER ID  IMAGE                           COMMAND               CREATED        STATUS            PORTS  NAMES               POD           POD NAME
# 3b27d9eaa35c  docker.io/library/nginx:latest  nginx -g daemon o...  2 seconds ago  Up 1 second ago          brave_ritchie       211eaecd307b  mypod
# d638ac011412  docker.io/library/nginx:latest  nginx -g daemon o...  5 minutes ago  Up 5 minutes ago         cool_albattani      211eaecd307b  mypod
# a901868616a5  k8s.gcr.io/pause:3.2          
```

:::

Finally, Podman provides the exact same CLI commands as Docker so you can just do `alias docker=podman` and pretend that nothing changed.

There are other container engines besides Docker and Podman, but I would consider all of them a dead-end tech or not a suitable option for local development and usage. But to have a complete picture, let's at least mention what's out there:

- [LXD](https://linuxcontainers.org/lxd/introduction) — LXD is container manager (daemon) for LXC (Linux Containers). This tool offers ability to run _system_ containers that provide container environment that is more similar to VMs. It sits in very narrow space and doesn't have many users, so unless you have very specific use case, then you're probably better off using Docker or Podman.
- [CRI-O](https://cri-o.io) — When you google what is cri-o, you might find it described as container engine. It really is container runtime, though. Apart from the fact that it isn't actually an engine, it also is not suitable for _“normal”_ use. And by that I mean that it was specifically built to be used as Kubernetes runtime (CRI) and not for an end-user usage.
- [rkt](https://coreos.com/rkt) — rkt (_“rocket”_) is container engine developed by _CoreOS_. This project is mentioned here really just for completeness, because the project ended and its development was halted — and therefore it should not be used.

---

## Building Images

With container engines there was really only one alternative to Docker. When it comes to building images though, we have many more options to choose from.

First, let me introduce [Buildah](https://buildah.io). Buildah is another tool developed by Red Hat and it plays very nicely with Podman. If you already installed Podman, you might have even noticed the `podman build` subcommand, which is really just Buildah in disguise, as its binary is included in Podman.

As for its features, it follows same route as Podman — it's daemonless and rootless and produces OCI compliant images, so it's guaranteed that your images will run the same way as the ones built with Docker. It's also able to build images from `Dockerfile` or (more suitably named) `Containerfile` which is the same thing with different name. Apart from that, Buildah also provides finer control over image layers, allowing you to commit many changes into single layer. One unexpected but (in my opinion) nice difference from Docker is that images built by Buildah are user specific, so you will be able to list only images you built yourself.

Now, considering that Buildah is already included in Podman CLI, you might be asking why even use the separate `buildah` CLI? Well, the `buildah` CLI is superset of commands included in `podman build`, so you might not need to ever touch the `buildah` CLI, but by using it you might also discover some extra useful features (For specifics about differences between `podman build` and `buildah` see following [article](https://podman.io/blogs/2018/10/31/podman-buildah-relationship.html)).

With that said, let's see a little demonstration:

::: details buildah.sh

```sh
~ $ buildah bud -f Dockerfile .

~ $ buildah from alpine:latest  # Create starting container - equivalent to "FROM alpine:latest"
Getting image source signatures
Copying blob df20fa9351a1 done  
Copying config a24bb40132 done  
Writing manifest to image destination
Storing signatures
alpine-working-container  # Name of the temporary container
~ $ buildah run alpine-working-container -- apk add --update --no-cache python3  # equivalent to "RUN apk add --update --no-cache python3"
fetch http://dl-cdn.alpinelinux.org/alpine/v3.12/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.12/community/x86_64/APKINDEX.tar.gz
...

~ $ buildah commit alpine-working-container my-final-image  # Create final image
Getting image source signatures
Copying blob 50644c29ef5a skipped: already exists  
Copying blob 362b9ae56246 done  
Copying config 1ff90ec2e2 done  
Writing manifest to image destination
Storing signatures
1ff90ec2e26e7c0a6b45b2c62901956d0eda138fa6093d8cbb29a88f6b95124c

~ # buildah images
REPOSITORY               TAG     IMAGE ID      CREATED         SIZE
localhost/my-final-image latest  1ff90ec2e26e  22 seconds ago  51.4 MB
```

:::

From the above script you can see that you can build images simply using `buildah bud`, where `bud` stands for _build using Dockerfile_, but you can also use more scripted approach using Buildahs `from`, `run` and `copy`, which are equivalent commands to the commands in Dockerfile ( `FROM image`, `RUN ...`, `COPY ...`).

Next up is Google's [Kaniko](https://github.com/GoogleContainerTools/kaniko). Kaniko also builds container images from Dockerfile and similarly to Buildah, it also doesn't need a daemon. The major difference from Buildah is that Kaniko is more focused on building images in Kubernetes.

Kaniko is meant to be run as an image, using `gcr.io/kaniko-project/executor`, which makes sense for Kubernetes, but isn't very convenient for local builds and kind of defeats the purpose as you would need to use Docker to run Kaniko image to build your images. That being said, if you are looking for tool for building images in your Kubernetes cluster (e.g. in CI/CD pipeline), then Kaniko might be a good option, considering that it's daemonless and ([maybe](https://github.com/GoogleContainerTools/kaniko#security)) more secure.

From my personal experience though — I used both Kaniko and Buildah to build images in Kubernetes/OpenShift clusters and I think both will do the job just fine, but with Kaniko I've seen some random build crashes and fails when pushing images to registry.

The third contender here is [buildkit](https://github.com/moby/buildkit), which could be also called _the next-generation_ `docker build`. It's part of _Moby_ project (as is Docker) and can be enabled with Docker as an experimental feature using `DOCKER_BUILDKIT=1 docker build ...`. Well, but what exactly will this bring to you? It introduces bunch of improvements and cool features including parallel build steps, skipping unused stages, better incremental builds and rootless builds. On the other hand however, it still requires daemon to run ( `buildkitd`). So, if you don't want to get rid of Docker, but want some new features and nice improvements, then using buildkit might be the way to go.

As in the previous section, here we also have a few _“honorable mentions”_ which fill some very specific use cases and wouldn't be one of my top choices:

- [Source-To-Image (S2I)](https://github.com/openshift/source-to-image) is a toolkit for building images directly from source code without Dockerfile. This tool works well for simple, expected scenarios and workflows but quickly becomes annoying and clumsy if you need little too much customization or if your project doesn't have the expected layout. You might consider using S2I if you are not very confident with Docker yet or if you build your images on OpenShift cluster, as builds with S2I are a built-in feature.
- [Jib](https://github.com/GoogleContainerTools/jib) is another tool by Google, specifically for building Java images. It includes [Maven](https://github.com/GoogleContainerTools/jib/tree/master/jib-maven-plugin#quickstart) and [Gradle](https://github.com/GoogleContainerTools/jib/tree/master/jib-gradle-plugin#quickstart) plugins, which can make it easy for you to build images without messing with Dockerfiles.
- Last but not least is [Bazel](https://github.com/bazelbuild/bazel), which is anoooother tool by Google. This one is not _just_ for building container images, but rather a complete build system. If you just want to build an image, then diving into Bazel might be a bit of an overkill, but definitely a good learning experience, so if you're up for it, then [rules_docker](https://github.com/bazelbuild/rules_docker) section is a good starting point for you.

---

## Container Runtime

Last big piece of a puzzle is _container runtime_ which is  responsible for, well, running containers. Container runtime is one part of the whole container lifecycle/stack, which you will most likely not going to mess with, unless you have some very specific requirement for speed, security, etc. So, if you're tired of me already, then you might want skip this one section. If on the other hand, you just want to know what are the options, then here goes:

[runc](https://github.com/opencontainers/runc) is the most popular container runtime created based on OCI container runtime specification. It's used by Docker (through _containerd_), Podman and CRI-O, so pretty much everything expect for LXD (which uses LXC). There's not much else I can add. It's default for (almost) everything, so even if you ditch Docker after reading this article, you will most likely still use runc.

One alternative to runc is similarly (and confusingly) named [crun](https://github.com/containers/crun). This is tool developed by Red Hat and fully written in C (runc is written in Go). This makes it much faster and more memory efficient than runc. Considering that it's also OCI compliant runtime, you should be able switch to it easily enough, if you want to check for yourself. Even though it's not very popular right now, it will be in tech preview as an alternative OCI runtime as of the RHEL 8.3 release and considering that it's Red Hat product we might eventually see as default for Podman or CRI-O.

Speaking of CRI-O. Earlier I said that CRI-O isn't really a container engine, but rather container runtime. That's because CRI-O doesn't include features like pushing images, which is what you would expect from container engine. CRI-O as a runtime uses runc internally to run containers. This runtime is not the one you should try using on your machine, as it's built to be used as runtime on Kubernetes nodes and you can see it described as _“all the runtime Kubernetes needs and nothing more”_. So, unless you are setting up Kubernetes cluster (or OpenShift cluster — CRI-O is default there already), then you probably should not touch this one.

Last one for this section is [containerd](https://containerd.io), which is a CNCF graduating project. It's a daemon that acts as an API facade for various container runtimes and OS. In the background it relies on runc and it's the default runtime for Docker engine. It's also used by Google Kubernetes Engine (GKE) and IBM Kubernetes Service (IKS). It's an implementation of Kubernetes Container Runtime Interface (same as CRI-O), therefore it's a good candidate for runtime of your Kubernetes cluster.

---

## Image Inspection and Distribution

Last part of container stack is image inspection and distribution. This effectively replaces `docker inspect` and also (optionally) adds ability to copy/mirror images between remote registries.

The only tool which I will mention here that can do these tasks is [Skopeo](https://github.com/containers/skopeo). It's made by Red Hat and it's an accompanying tool for Buildah, Podman and CRI-O. Apart from the basic `skopeo inspect` which we all know from Docker, Skopeo is also able to copy images using `skopeo copy` which allows you to mirror images between remote registries without first pulling them to local registry. This feature can also act as pull/push if you use local registry.

As a little bonus, I want to also mention [Dive](https://github.com/wagoodman/dive), which is a tool for inspecting, exploring and analyzing images. It's little more user friendly, provides more readable output and can dig (or _dive_, I guess) a bit deeper into your image and analyze and measure its efficiency. It's also suitable for use in CI pipelines, where it can measure whether your image is _“efficient enough”_ or in other words — whether it wastes too much space or not.

---

## Conclusion

This article wasn't meant to persuade you to completely ditch Docker, rather its goal was to show you the whole landscape and all the options for building, running, managing and distributing containers and their images. Each of these tools including Docker, has its pros and cons and it's important to evaluate what set of tools suits your workflow and use case the best and I hope this article will help you with that.

---

## Resources

- [Let's Try Every CRI Runtime Available for Kubernetes. No, Really!](https://www.youtube.com/watch?v=FKoVztEQHss)
- [How Container Runtimes matter in Kubernetes?](https://events19.linuxfoundation.org/wp-content/uploads/2017/11/How-Container-Runtime-Matters-in-Kubernetes_-OSS-Kunal-Kushwaha.pdf)
- [A Practical Introduction to Container Terminology](https://developers.redhat.com/blog/2018/02/22/container-terminology-practical-introduction)
- [Comparing Next-Generation Container Image Building Tools](https://events19.linuxfoundation.org/wp-content/uploads/2017/11/Comparing-Next-Generation-Container-Image-Building-Tools-OSS-Akihiro-Suda.pdf)
- [A Comprehensive Container Runtime Comparison](https://www.capitalone.com/tech/cloud/container-runtime)
- [Building containers without Docker](https://blog.alexellis.io/building-containers-without-docker)

---

<TagLinks />