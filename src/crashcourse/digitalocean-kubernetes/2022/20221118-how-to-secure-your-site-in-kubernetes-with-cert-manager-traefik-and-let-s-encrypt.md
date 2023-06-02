---
lang: ko-KR
title: How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt
description: ☸DigitalOcean - Kubernetes > How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt
tags: ["crashcourse", "digitalocean", "kubernetes", "kubctl", "serverless"]
meta:
  - name: ☸DigitalOcean - Kubernetes > How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt
    content: How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt
  - property: og:title
    content: ☸DigitalOcean - Kubernetes
  - property: og:description
    content: How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/digitalocean-kubernetes/20221118-how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt
desc: November 18, 2022
link: https://digitalocean.com/community/tutorials/how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt
logo: https://www.digitalocean.com/_next/static/media/intro-to-cloud.d49bc5f7.jpeg
color: rgba(0, 105, 225, 0.2)
```

---

## Introduction

[Kubernetes](https://kubernetes.io) is a popular way to host websites and other services that benefit from its reliability and scalability. As more websites interact with sensitive data, such as personal information or passwords, browsers are starting to require that all websites use [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) to secure their traffic. However, it can be difficult to manage all the moving parts required to host a TLS-based site, from acquiring TLS certificate to renewing those certificates on time and configuring your server to use them.

Fortunately, there are services you can run in your Kubernetes cluster to manage a lot of this complexity for you. You can use [Traefik Proxy](https://traefik.io/traefik) (pronounced like “traffic”) as a network proxy with [cert-manager](https://cert-manager.io) as the service that acquires and manages secure certificates. Using these services with [Let’s Encrypt](https://letsencrypt.org), a provider of free and automated secure certificates, reduces the burden of managing your certificates, typically to the point where you only need to do the initial setup.

In this tutorial, you will set up cert-manager, Traefik, and Let’s Encrypt in your Kubernetes cluster, along with an example website service, to acquire, renew, and use secure certificates with your website automatically.

If you’re looking for a managed Kubernetes hosting service, [check out our simple, managed Kubernetes service built for growth.](https://www.digitalocean.com/products/kubernetes)


---

## Prerequisites
