---
lang: ko-KR
title: Intro
description: 🔺Red Hat Container Tools
tags: ["crashcourse", "redhat", "buildah", "podman", "skopeo", "sesearch", "semodule"]
meta:
  - name: Red Hat Container Tools
    content: Red Hat Container Tools
  - property: og:title
    content: Red Hat Container Tools
  - property: og:description
    content: An Overview of Container Tools
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-red-hat-container-tools
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Red Hat Container Tools
desc: Intro
link: https://developers.redhat.com/courses/devops-red-hat-container-tools
logo: https://developers.redhat.com/themes/custom/rhdp2/images/branding/2023_RHDLogo_black_text.svg
color: rgba(255, 255, 255, 0.2)
```

---

## Background

This lab will help give you a basic understanding of how to use some other OCI compliant tools such as Podman, Buildah, and Skopeo.

By the end of this lab you should be able to:

- FIND, RUN, BUILD, and SHARE containers using OCI compliant tools
- Solve real technical problems by using a small set of daemonless tools
- Be comfortable using with the basics of an alternative set of tools to Docker

---

## Outline

- Understanding the difference between RHEL Server and CoreOS, as well as the difference between the fast and stable streams provided in RHEL Server
- Understanding how to install the fast and stable streams
- Podman: Familiar Territory: Learning the basics of how to use podman
- Buildah: Granularity & Control: Understanding how a container image is really built
- Skopeo: Moving & Sharing: Simplicity in inspecting, and moving container images around
- CRIU: Checkpoint and restore the memory contents of containers
- Udica: Build and deploy custom SELinux policies for containers
- OSCAP-Podman: verify patched or unpatched vulnerabilities in container images produced by Red Hat

---

## Other Material

- [Presentation](https://goo.gl/h4VK7j)
- [Lab GitHub Repository](https://github.com/openshift-instruqt/instruqt/tree/3ccc0f45269f895a19406e833392dc9fbc7948d8/instruqt-tracks/subsystems-container-internals-lab-2-0-part-7)

---

## Start Scenario

Once you have gone through the presentation, continue to the exercises

---


## Course(s)

- [1. An Overview of Container Tools][01]
- [2. Using the Fast and Stable Streams][02]
- [3. Podman - Familiar Territory][03]
- [4. Buildah - Granularity & Control][04]
- [5. Skopeo: Moving & Sharing][05]
- [6. CRIU - Checkpointing and Restoring][06]
- [7. Udica - Custom SELinux Policies][07]
- [8. OSCAP Podman - Trust but Verify][08]

---


[01]: 01.md
[02]: 02.md
[03]: 03.md
[04]: 04.md
[05]: 05.md
[06]: 06.md
[07]: 07.md
[08]: 08.md

