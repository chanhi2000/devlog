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
    content: https://chanhi2000.github.io/crashcourse/devops-digitalocean-kubernetes/20221118-how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt.html
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

- A Kubernetes cluster accessible with `kubectl`. If you need to create a cluster, DigitalOcean has a [Kubernetes Quickstart](https://docs.digitalocean.com/products/kubernetes/quickstart).
- A recent version of `kubectl` for interacting with your cluster. See the product documentation for [installing `kubectl` on Linux, MacOS, and Windows](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux).
- A DigitalOcean account with doctl installed and configured. To set this up, see our product documentation for [How To Install and Configure `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install).
- [Helm](https://helm.sh) version 3 or greater. See the official documentation for [installing Helm](https://helm.sh/docs/intro/install).
- Experience interacting with a Kubernetes cluster using `kubectl`. To get started, follow our tutorial, [Build and Deploy Your First Image to Your First Cluster](https://docs.digitalocean.com/tutorials/build-deploy-first-image).
- A registered domain name. This tutorial will use `your_domain`. You can purchase a domain name from [Namecheap](https://www.namecheap.com), get one for free with [Freenom](https://www.freenom.com/en/index.html?lang=en), or use the domain registrar of your choice.
- DNS set up for your domain name. This tutorial assumes you are using DigitalOcean DNS, but it is not a requirement. If you are using DigitalOcean, please see our [DNS documentation](https://docs.digitalocean.com/products/networking/dns/how-to/add-domains) for details on how to add a domain and [How To Point to DigitalOcean Nameservers From Common Domain Registrars](https://docs.digitalocean.com/tutorials/dns-registrars) for information on using DigitalOcean DNS with common domain registrars.
- A [Personal Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token) with read and write access for DigitalOcean DNS, if you are using DigitalOcean for DNS. Other providers will have similar access tokens.

---

## Step 1 — Setting Up cert-manager in Your Cluster

Traditionally, when setting up secure certificates for a website, you would need to generate a [certificate signing request](https://en.wikipedia.org/wiki/Certificate_signing_request) and pay a trusted [certificate authority](https://en.wikipedia.org/wiki/Certificate_authority) to generate a certificate for you. You would then need to configure your web server to use that certificate and remember to go through that same process every year to keep your certificates up-to-date.

However, with the creation of [Let’s Encrypt](https://letsencrypt.org) in 2014, it’s now possible to acquire free certificates through an automated process. These certificates are only valid for a few months instead of a year, though, so using an automated system to renew those certificates is a requirement. To handle that, you’ll use [cert-manager](https://cert-manager.io), a service designed to run in Kubernetes that automatically manages the lifecycle of your certificates.

In this section, you will set up `cert-manager` to run in your cluster in its own cert-manager namespace.

First, [install cert-manager](https://cert-manager.io/docs/installation) using `kubectl` with cert-manager’s release file:

```sh
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.9.1/cert-manager.yaml
# namespace/cert-manager created
# customresourcedefinition.apiextensions.k8s.io/certificaterequests.cert-manager.io created
# customresourcedefinition.apiextensions.k8s.io/certificates.cert-manager.io created
# ...
# deployment.apps/cert-manager-cainjector created
# deployment.apps/cert-manager created
# deployment.apps/cert-manager-webhook created
# mutatingwebhookconfiguration.admissionregistration.k8s.io/cert-manager-webhook created
# validatingwebhookconfiguration.admissionregistration.k8s.io/cert-manager-webhook created
```

By default, cert-manager will install in its own namespace named `cert-manager`. As the file is applied, a number of resources will be created in your cluster, which will appear in your output (some of the output is removed due to length):

In this section, you installed cert-manager to manage your secure certificates. Now, you need to set up a way to tell cert-manager how you want your certificates to be issued. In the next section, you’ll set up a Let’s Encrypt issuer in your cluster.

---

## Step 2 — Configuring the Let’s Encrypt Certificate Issuer

Using a secure certificate for your website is a way to tell your users they can trust that the site they’re viewing came from your servers. To do this, the certificate authority must validate that you own the domain the certificate is for. Let’s Encrypt does this by using a standard called [ACME](https://datatracker.ietf.org/doc/html/rfc8555), which uses [challenges](https://letsencrypt.org/docs/challenge-types) to prove you own the domain you’re generating a certificate for. cert-manager supports both DNS and HTTP challenges for various providers, but in this tutorial, you’ll use the [DNS-01](https://letsencrypt.org/docs/challenge-types/#dns-01-challenge) challenge with DigitalOcean’s DNS provider.

In this section, you will create a [`ClusterIssuer`](https://cert-manager.io/docs/concepts/issuer/) for your cluster to tell cert-manager how to issue certificates from Let’s Encrypt and which credentials to use to complete the DNS challenges required by Let’s Encrypt.

::: note Note

This tutorial assumes you are using DigitalOcean for your DNS provider and configures the `ClusterIssuer` with that assumption. cert-manager supports a number of different cloud providers for both HTTP and DNS challenges, so the same concepts can be applied to them.

For more information about other providers supported by cert-manager, see the [ACME Introduction](https://cert-manager.io/docs/configuration/acme) in cert-manager’s documentation.

:::

Before you create the `ClusterIssuer` for your cluster, you’ll want to create a directory for your cluster configuration. Use the `mkdir` command to create a directory and then `cd` to enter that directory:

```sh
mkdir tutorial-cluster-config
cd tutorial-cluster-config
```

Once you’ve created your directory, you’ll need the [Personal Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) for DNS access that you created as part of this tutorial’s prerequisites. A DigitalOcean access token will look similar to `dop_v1_4321...` with a long string of numbers.

<!-- TODO code highlight to yellow -->

To store your access token as a secret in Kubernetes, you’ll need to [base-64](https://en.wikipedia.org/wiki/Base64) encode it. To do this, you can use the echo command to pipe your token to the `base64` command, replacing the highlighted portion with your access token

This command will send your access token from `echo` to the `base64` command to encode it. The `-n` option ensures that a new line isn’t included at the end. Depending on your access token, you will receive output similar to the following:

```sh
echo -n 'dop_v1_4321...' | base64
# ZG9wX3YxX3RoaXNpc25vdGFyZWFsdG9rZW5idXRpbXB1dHRpbmdhYnVuY2hvZnN0dWZmaW5oZXJlc29sZW5ndGhzbWF0Y2g=
```

This output is your base-64 encoded access token. Copy this because you’ll be using it next.

Using `nano` or your favorite editor, create and open a new file called <FontIcon icon="iconfont icon-yaml"/>`lets-encrypt-do-dns.yaml`:

### <FontIcon icon="iconfont icon-yaml"/>`tutorial-cluster-config/ltutorial-cluster-config/lets-encrypt-do-dns.yaml`

```yml
apiVersion: v1
kind: Secret
metadata:
  namespace: cert-manager
  name: lets-encrypt-do-dns
data:
  access-token: ZG9wX3Y...
```

This `Secret` will be called `lets-encrypt-do-dns` and is stored in the namespace `cert-manager`. In the `data` section, you include the base-64 encoded `access-token` you created earlier. This Secret securely stores the access token you will reference when creating the Let’s Encrypt issuer.

Next, save your file and apply it to the cluster using `kubectl apply`:

In the output, you’ll receive a message that your secret has been created in the cluster:

```sh
kubectl apply -f lets-encrypt-do-dns.yaml
# secret/lets-encrypt-do-dns created
```

Now, create a new file named <FontIcon icon="iconfont icon-yaml"/>`lets-encrypt-issuer.yaml` to contain cert-manager’s `ClusterIssuer`, which you’ll use to issue your Let’s Encrypt certificates:

```sh
nano lets-encrypt-issuer.yaml
```

Add the following lines, entering your email address in the `spec.acme.email` field (this is the address Let’s Encrypt will associate with the certificates it provides):

### `tutorial-cluster-config/llets-encrypt-issuer.yaml`

```yml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-issuer
spec:
  acme:
    email: your_email_address
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      name: letsencrypt-issuer-account-key
    solvers:
      - selector: {}
        dns01:
          digitalocean:
            tokenSecretRef:
              name: lets-encrypt-do-dns
              key: access-token
```

In the first two lines, the `apiVersion` and `kind` say this Kubernetes resource is a cert-manager `ClusterIssuer`. Next, you name it `letsencrypt-issuer`. In this case, you didn’t include a `namespace` field because the resource is a `Cluster` resource, meaning it applies to the entire cluster instead of a single namespace.

Next, in the `spec` section, you define the acme challenge section to tell cert-manager this `ClusterIssuer` should use ACME to issue certificates using the `letsencrypt-issuer`. The `email` is your email address to which Let’s Encrypt will send any certificate-related communications, such as renewal reminders if there’s a problem and cert-manager doesn’t renew them in time. The `server` field specifies the URL to contact for requesting the ACME challenges and is set to the production Let’s Encrypt URL. After the `server` field, you include the `privateKeySecretRef` field with the name of the secret that cert-manager will use to store its generated private key for your cluster.

One of the most important sections in the `spec.acme` section is the `solvers` section. In this section, you configure the ACME challenge solvers you want to use for the `letsencrypt-issuer`. In this case, you include a single solver, the `dns01` solver. The first part of the solver configuration, the `selector`, is configured to be `{}`, which means “anything.” If you wanted to use different solvers for other certificates in your cluster, you could set up additional selectors in the same issuer. You can find more information about how to do this in cert-manager’s [ACME Introduction](https://cert-manager.io/docs/configuration/acme).

Inside the `dns01` section, you add a `digitalocean` section to say this issuer should use DigitalOcean as the DNS-01 solver. If you are using a different cloud provider, this is where you would [configure the other provider](https://cert-manager.io/docs/configuration/acme/dns01). Inside this section, you include a `tokenSecretRef` to reference the `lets-encrypt-do-dns` `access-token` field of the `Secret` you created earlier. cert-manager will use this access token when creating DNS records on your behalf.

Once you’ve saved your issuer file, apply it to the cluster using `kubectl apply`

The output will confirm that the `ClusterIssuer`, named `letsencrypt-issuer`, has been created:

```sh
kubectl apply -f lets-encrypt-issuer.yaml
# clusterissuer.cert-manager.io/letsencrypt-issuer created
```

In this section, you set up cert-manager and configured it to issue certificates from Let’s Encrypt. However, no certificates are being requested, nothing is serving your website, and you don’t have a website service running in your cluster. In the next section, you’ll set up Traefik as the [proxy](https://en.wikipedia.org/wiki/Reverse_proxy) between the outside world and your websites.

---

## Step 2 — Configuring the Let’s Encrypt Certificate Issuer

Using a secure certificate for your website is a way to tell your users they can trust that the site they’re viewing came from your servers. To do this, the certificate authority must validate that you own the domain the certificate is for. Let’s Encrypt does this by using a standard called [ACME](https://datatracker.ietf.org/doc/html/rfc8555), which uses [challenges](https://letsencrypt.org/docs/challenge-types) to prove you own the domain you’re generating a certificate for. cert-manager supports both DNS and HTTP challenges for various providers, but in this tutorial, you’ll use the [DNS-01](https://letsencrypt.org/docs/challenge-types/#dns-01-challenge) challenge with DigitalOcean’s DNS provider.

In this section, you will create a [`ClusterIssuer`](https://cert-manager.io/docs/concepts/issuer) for your cluster to tell cert-manager how to issue certificates from Let’s Encrypt and which credentials to use to complete the DNS challenges required by Let’s Encrypt.

::: note Note

This tutorial assumes you are using DigitalOcean for your DNS provider and configures the ClusterIssuer with that assumption. cert-manager supports a number of different cloud providers for both HTTP and DNS challenges, so the same concepts can be applied to them.

For more information about other providers supported by cert-manager, see the [ACME Introduction](https://cert-manager.io/docs/configuration/acme) in cert-manager’s documentation.

:::

Before you create the `ClusterIssuer` for your cluster, you’ll want to create a directory for your cluster configuration. Use the `mkdir` command to create a directory and then cd to enter that directory:

```sh
mkdir tutorial-cluster-config
cd tutorial-cluster-config
```

Once you’ve created your directory, you’ll need the [Personal Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token) for DNS access that you created as part of this tutorial’s prerequisites. A DigitalOcean access token will look similar to `dop_v1_4321...` with a long string of numbers.

To store your access token as a secret in Kubernetes, you’ll need to [base-64](https://en.wikipedia.org/wiki/Base64) encode it. To do this, you can use the `echo` command to pipe your token to the `base64` command, replacing the highlighted portion with your access token

This command will send your access token from `echo` to the `base64` command to encode it. The -n option ensures that a new line isn’t included at the end. Depending on your access token, you will receive output similar to the following:

```sh
echo -n 'dop_v1_4321...' | base64
# ZG9wX3YxX3RoaXNpc25vdGFyZWFsdG9rZW5idXRpbXB1dHRpbmdhYnVuY2hvZnN0dWZmaW5oZXJlc29sZW5ndGhzbWF0Y2g=
```

This output is your base-64 encoded access token. Copy this because you’ll be using it next.

Using `nano` or your favorite editor, create and open a new file called <FontIcon icon="iconfont icon-yaml"/>`lets-encrypt-do-dns.yaml`:

```sh
nano lets-encrypt-do-dns.yaml
```

Add the following code to create a Kubernetes `Secret`. Be sure to use your base-64 encoded access token in the `access-token` field:

### <FontIcon icon="iconfont icon-yaml"/>`tutorial-cluster-config/ltutorial-cluster-config/lets-encrypt-do-dns.yaml`

```yml
apiVersion: v1
kind: Secret
metadata:
  namespace: cert-manager
  name: lets-encrypt-do-dns
data:
  access-token: ZG9wX3YxX3RoaXNpc25vdGFyZWFsdG9rZW5idXRpbXB1dHRpbmdhYnVuY2hvZnN0dWZmaW5oZXJlc29sZW5ndGhzbWF0Y2g
```

This `Secret` will be called `lets-encrypt-do-dns` and is stored in the namespace `cert-manager`. In the data section, you include the base-64 encoded `access-token` you created earlier. This Secret securely stores the access token you will reference when creating the Let’s Encrypt issuer.

Next, save your file and apply it to the cluster using `kubectl apply`

In the output, you’ll receive a message that your secret has been created in the cluster:

```sh
kubectl apply -f lets-encrypt-do-dns.yaml
# secret/lets-encrypt-do-dns created
```

Now, create a new file named <FontIcon icon="iconfont icon-yaml"/>`lets-encrypt-issuer.yaml` to contain cert-manager’s `ClusterIssuer`, which you’ll use to issue your Let’s Encrypt certificates:

Add the following lines, entering your email address in the `spec.acme.email` field (this is the address Let’s Encrypt will associate with the certificates it provides):

### <FontIcon icon="iconfont icon-yaml"/>`tutorial-cluster-config/lets-encrypt-issuer.yaml`

```yml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-issuer
spec:
  acme:
    email: your_email_address
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      name: letsencrypt-issuer-account-key
    solvers:
      - selector: {}
        dns01:
          digitalocean:
            tokenSecretRef:
              name: lets-encrypt-do-dns
              key: access-token
```

In the first two lines, the `apiVersion` and `kind` say this Kubernetes resource is a cert-manager `ClusterIssuer`. Next, you name it `letsencrypt-issuer`. In this case, you didn’t include a `namespace` field because the resource is a `Cluster` resource, meaning it applies to the entire cluster instead of a single namespace.

Next, in the `spec` section, you define the `acme` challenge section to tell cert-manager this `ClusterIssuer` should use ACME to issue certificates using the `letsencrypt-issuer`. The `email` is your email address to which Let’s Encrypt will send any certificate-related communications, such as renewal reminders if there’s a problem and cert-manager doesn’t renew them in time. The `server` field specifies the URL to contact for requesting the ACME challenges and is set to the production Let’s Encrypt URL. After the `server` field, you include the `privateKeySecretRef` field with the name of the secret that cert-manager will use to store its generated private key for your cluster.

One of the most important sections in the `spec.acme` section is the `solvers` section. In this section, you configure the ACME challenge solvers you want to use for the `letsencrypt-issuer`. In this case, you include a single solver, the `dns01` solver. The first part of the solver configuration, the `selector`, is configured to be `{}`, which means “anything.” If you wanted to use different solvers for other certificates in your cluster, you could set up additional selectors in the same issuer. You can find more information about how to do this in cert-manager’s [ACME Introduction](https://cert-manager.io/docs/configuration/acme).

Inside the `dns01` section, you add a `digitalocean` section to say this issuer should use DigitalOcean as the DNS-01 solver. If you are using a different cloud provider, this is where you would [configure the other provider](https://cert-manager.io/docs/configuration/acme/dns01). Inside this section, you include a `tokenSecretRef` to reference the `lets-encrypt-do-dns` `access-token` field of the `Secret` you created earlier. cert-manager will use this access token when creating DNS records on your behalf.

Once you’ve saved your issuer file, apply it to the cluster using `kubectl apply`

The output will confirm that the `ClusterIssuer`, named `letsencrypt-issuer`, has been created:

```sh
kubectl apply -f lets-encrypt-issuer.yaml
# clusterissuer.cert-manager.io/letsencrypt-issuer created
```

In this section, you set up cert-manager and configured it to issue certificates from Let’s Encrypt. However, no certificates are being requested, nothing is serving your website, and you don’t have a website service running in your cluster. In the next section, you’ll set up Traefik as the [proxy](https://en.wikipedia.org/wiki/Reverse_proxy) between the outside world and your websites.

---

