---
lang: ko-KR
title: How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt
description: Article(s) > How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt
icon: fas fa-dharmachakra
category:
  - DevOps
  - VM
  - Kubernetes
  - Article(s)
tag:
  - blog
  - digitalocean.com
  - kubernetes
  - k8s
  - kubctl
  - serverless
head:
  - - meta:
    - property: og:title
      content: Article(s) > How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt
    - property: og:description
      content: How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/digitalocean.com/how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt.html
prev: /devops/k8s/articles/README.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Kubernetes > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/k8s/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How To Secure Your Site in Kubernetes with cert-manager, Traefik, and Let’s Encrypt | DigitalOcean"
  desc="Kubernetes is a popular way to host websites. As more websites interact with sensitive data, more browsers are requiring TLS to secure traffic. However, it c… "
  url="https://digitalocean.com/community/tutorials/how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt"
  logo="https://digitalocean.com/_next/static/media/favicon.594d6067.ico"
  preview="https://www.digitalocean.com/_next/static/media/intro-to-cloud.d49bc5f7.jpeg"/>

> 2022.11.18

---

## Introduction

[Kubernetes](https://kubernetes.io) is a popular way to host websites and other services that benefit from its reliability and scalability. As more websites interact with sensitive data, such as personal information or passwords, browsers are starting to require that all websites use [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) to secure their traffic. However, it can be difficult to manage all the moving parts required to host a TLS-based site, from acquiring TLS certificate to renewing those certificates on time and configuring your server to use them.

Fortunately, there are services you can run in your Kubernetes cluster to manage a lot of this complexity for you. You can use [Traefik Proxy](https://traefik.io/traefik) (pronounced like “traffic”) as a network proxy with [cert-manager](https://cert-manager.io) as the service that acquires and manages secure certificates. Using these services with [Let’s Encrypt](https://letsencrypt.org), a provider of free and automated secure certificates, reduces the burden of managing your certificates, typically to the point where you only need to do the initial setup.

In this tutorial, you will set up cert-manager, Traefik, and Let’s Encrypt in your Kubernetes cluster, along with an example website service, to acquire, renew, and use secure certificates with your website automatically.

If you’re looking for a managed Kubernetes hosting service, [check out our simple, managed Kubernetes service built for growth.](https://www.digitalocean.com/products/kubernetes)

---

## Prerequisites

- A Kubernetes cluster accessible with `kubectl`. If you need to create a cluster, DigitalOcean has a [<FontIcon icon="fas fa-globe"/>Kubernetes Quickstart](https://docs.digitalocean.com/products/kubernetes/quickstart).
- A recent version of `kubectl` for interacting with your cluster. See the product documentation for [<FontIcon icon="fas fa-globe"/>installing `kubectl` on Linux, MacOS, and Windows](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux).
- A DigitalOcean account with doctl installed and configured. To set this up, see our product documentation for [<FontIcon icon="fas fa-globe"/>How To Install and Configure `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install).
- [<FontIcon icon="fas fa-globe"/>Helm](https://helm.sh) version 3 or greater. See the official documentation for [<FontIcon icon="fas fa-globe"/>installing Helm](https://helm.sh/docs/intro/install).
- Experience interacting with a Kubernetes cluster using `kubectl`. To get started, follow our tutorial, [<FontIcon icon="fas fa-globe"/>Build and Deploy Your First Image to Your First Cluster](https://docs.digitalocean.com/tutorials/build-deploy-first-image).
- A registered domain name. This tutorial will use `your_domain`. You can purchase a domain name from [<FontIcon icon="fas fa-globe"/>Namecheap](https://www.namecheap.com), get one for free with [<FontIcon icon="fas fa-globe"/>Freenom](https://www.freenom.com/en/index.html?lang=en), or use the domain registrar of your choice.
- DNS set up for your domain name. This tutorial assumes you are using DigitalOcean DNS, but it is not a requirement. If you are using DigitalOcean, please see our [DNS documentation](https://docs.digitalocean.com/products/networking/dns/how-to/add-domains) for details on how to add a domain and [<FontIcon icon="fas fa-globe"/>How To Point to DigitalOcean Nameservers From Common Domain Registrars](https://docs.digitalocean.com/tutorials/dns-registrars) for information on using DigitalOcean DNS with common domain registrars.
- A [<FontIcon icon="fas fa-globe"/>Personal Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token) with read and write access for DigitalOcean DNS, if you are using DigitalOcean for DNS. Other providers will have similar access tokens.

---

## Step 1 — Setting Up cert-manager in Your Cluster

Traditionally, when setting up secure certificates for a website, you would need to generate a [<FontIcon icon="fa-brands fa-wikipedia-w"/>certificate signing request](https://en.wikipedia.org/wiki/Certificate_signing_request) and pay a trusted [<FontIcon icon="fas fa-globe"/>certificate authority](https://en.wikipedia.org/wiki/Certificate_authority) to generate a certificate for you. You would then need to configure your web server to use that certificate and remember to go through that same process every year to keep your certificates up-to-date.

However, with the creation of [<FontIcon icon="fas fa-globe"/>Let’s Encrypt](https://letsencrypt.org) in 2014, it’s now possible to acquire free certificates through an automated process. These certificates are only valid for a few months instead of a year, though, so using an automated system to renew those certificates is a requirement. To handle that, you’ll use [<FontIcon icon="fas fa-globe"/>cert-manager](https://cert-manager.io), a service designed to run in Kubernetes that automatically manages the lifecycle of your certificates.

In this section, you will set up `cert-manager` to run in your cluster in its own cert-manager namespace.

First, [<FontIcon icon="fas fa-globe"/>install cert-manager](https://cert-manager.io/docs/installation) using `kubectl` with cert-manager’s release file:

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

Using a secure certificate for your website is a way to tell your users they can trust that the site they’re viewing came from your servers. To do this, the certificate authority must validate that you own the domain the certificate is for. Let’s Encrypt does this by using a standard called [<FontIcon icon="fas fa-globe"/>ACME](https://datatracker.ietf.org/doc/html/rfc8555), which uses [<FontIcon icon="fas fa-globe"/>challenges](https://letsencrypt.org/docs/challenge-types) to prove you own the domain you’re generating a certificate for. cert-manager supports both DNS and HTTP challenges for various providers, but in this tutorial, you’ll use the [<FontIcon icon="fas fa-globe"/>DNS-01](https://letsencrypt.org/docs/challenge-types/#dns-01-challenge) challenge with DigitalOcean’s DNS provider.

In this section, you will create a [<FontIcon icon="fas fa-globe"/>`ClusterIssuer`](https://cert-manager.io/docs/concepts/issuer/) for your cluster to tell cert-manager how to issue certificates from Let’s Encrypt and which credentials to use to complete the DNS challenges required by Let’s Encrypt.

::: tip Note

This tutorial assumes you are using DigitalOcean for your DNS provider and configures the `ClusterIssuer` with that assumption. cert-manager supports a number of different cloud providers for both HTTP and DNS challenges, so the same concepts can be applied to them.

For more information about other providers supported by cert-manager, see the [<FontIcon icon="fas fa-globe"/>ACME Introduction](https://cert-manager.io/docs/configuration/acme) in cert-manager’s documentation.

:::

Before you create the `ClusterIssuer` for your cluster, you’ll want to create a directory for your cluster configuration. Use the `mkdir` command to create a directory and then `cd` to enter that directory:

```sh
mkdir tutorial-cluster-config
cd tutorial-cluster-config
```

Once you’ve created your directory, you’ll need the [<FontIcon icon="fas fa-globe"/>Personal Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) for DNS access that you created as part of this tutorial’s prerequisites. A DigitalOcean access token will look similar to `dop_v1_4321...` with a long string of numbers.

<!-- TODO code highlight to yellow -->

To store your access token as a secret in Kubernetes, you’ll need to [<FontIcon icon="fas fa-globe"/>base-64](https://en.wikipedia.org/wiki/Base64) encode it. To do this, you can use the echo command to pipe your token to the `base64` command, replacing the highlighted portion with your access token

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

### <FontIcon icon="iconfont icon-yaml"/>`tutorial-cluster-config/llets-encrypt-issuer.yaml`

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

One of the most important sections in the `spec.acme` section is the `solvers` section. In this section, you configure the ACME challenge solvers you want to use for the `letsencrypt-issuer`. In this case, you include a single solver, the `dns01` solver. The first part of the solver configuration, the `selector`, is configured to be `{}`, which means “anything.” If you wanted to use different solvers for other certificates in your cluster, you could set up additional selectors in the same issuer. You can find more information about how to do this in cert-manager’s [<FontIcon icon="fas fa-globe"/>ACME Introduction](https://cert-manager.io/docs/configuration/acme).

Inside the `dns01` section, you add a `digitalocean` section to say this issuer should use DigitalOcean as the DNS-01 solver. If you are using a different cloud provider, this is where you would [<FontIcon icon="fas fa-globe"/>configure the other provider](https://cert-manager.io/docs/configuration/acme/dns01). Inside this section, you include a `tokenSecretRef` to reference the `lets-encrypt-do-dns` `access-token` field of the `Secret` you created earlier. cert-manager will use this access token when creating DNS records on your behalf.

Once you’ve saved your issuer file, apply it to the cluster using `kubectl apply`

The output will confirm that the `ClusterIssuer`, named `letsencrypt-issuer`, has been created:

```sh
kubectl apply -f lets-encrypt-issuer.yaml
# clusterissuer.cert-manager.io/letsencrypt-issuer created
```

In this section, you set up cert-manager and configured it to issue certificates from Let’s Encrypt. However, no certificates are being requested, nothing is serving your website, and you don’t have a website service running in your cluster. In the next section, you’ll set up Traefik as the [<FontIcon icon="fa-brands fa-wikipedia-w"/>proxy](https://en.wikipedia.org/wiki/Reverse_proxy) between the outside world and your websites.

---

## Step 3 — Using a Load Balancer with Traefik

[<FontIcon icon="fas fa-globe"/>Traefik](https://traefik.io/traefik/) is an open-source [<FontIcon icon="fa-brands fa-wikipedia-w"/>proxy](https://en.wikipedia.org/wiki/Reverse_proxy) service designed to integrate with Kubernetes for website traffic and other network traffic coming in and out of your cluster. As your network traffic grows, you may want to increase the number of Traefik instances running in your cluster to spread out resource usage across different Kubernetes nodes. To use a single address to refer to multiple service instances like this, you can use a [<FontIcon icon="fa-brands fa-wikipedia-w"/>load balancer](https://en.wikipedia.org/wiki/Load_balancing_(computing)) to accept the network connections and send them to the different Traefik instances, in effect balacing the network traffic load.

In this section, you’ll install Traefik into your cluster and prepare it to be used with the certificates managed by cert-manager and the website you’ll add in Step 5. You will also set up a load balancer, which will send incoming network traffic to your Traefik service from outside your cluster, as well as prepare you to handle multiple instance of Traefik, should you choose to run them.

First, create a namespace called `traefik` where you’ll install Traefik. To do this, open a file named <FontIcon icon="iconfont icon-yaml"/>`traefik-ns.yaml`:

```sh
nano traefik-ns.yaml
```

Enter a Kubernetes `Namespace` resource:

> .<FontIcon icon="fas fa-folder-open"/>`tutorial-cluster-config/`<FontIcon icon="iconfont icon-yaml"/>`traefik-ns.yaml`

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: traefik
```

After saving your file, apply it to your cluster using `kubectl apply`.

Once your command runs, the cluster’s output will confirm that the namespace has been created:

```sh
kubectl apply -f traefik-ns.yaml
#
# namespace/traefik created
```

After creating the `traefik` namespace, you will install the Traefik service itself. For this, you’ll use a utility called [<FontIcon icon="fas fa-globe"/>Helm](https://helm.sh/). Helm is a package manager for Kubernetes that makes installing Kubernetes services similar to installing an app on your computer. In Helm, a package is called a [<FontIcon icon="fas fa-globe"/>chart](https://helm.sh/docs/topics/charts/).

First, you’ll need to add the `traefik` Helm repository to your available repositories, which will allow Helm to find the `traefik` package.

Once the command completes, you’ll receive confirmation that the `traefik` repository has been added to your computer’s Helm repositories

```sh
helm repo add traefik https://helm.traefik.io/traefik
#
# "traefik" has been added to your repositories
```

Next, update your chart repositories.

The output will confirm that the traefik chart repository has been updated:

```sh
helm repo update
#
# Hang tight while we grab the latest from your chart repositories...
# ...Successfully got an update from the "traefik" chart repository
# Update Complete. ⎈Happy Helming!⎈
```

Finally, install `traefik` into the `traefik` namespace you created in your cluster.

Once you run the command, output similar to the following will print to the screen:

```sh
helm install --namespace=traefik traefik traefik/traefik
#
# NAME: traefik
# LAST DEPLOYED: Sun Oct  2 16:32:57 2022
# NAMESPACE: traefik
# STATUS: deployed
# REVISION: 1
# TEST SUITE: None
```

There are a lot of `traefik`s in this command, so let’s go over what each one does. The first `traefik` in your command, with `--namespace=traefik`, tells Helm to install Traefik in the `traefik` namespace you created earlier. Next, the highlighted `traefik` is the name you want to give to this installation of Traefik in your cluster. This way, if you have multiple installations of Traefik in the same cluster, you can give them different names, such as `traefik-website1` and `traefik-website2`. Since you’ll only have one Traefik installation in your cluster right now, you can just use the name `traefik`. The third `traefik/` is the repository you added earlier and want to install from. Finally, the last `traefik` is the name of the chart you want to install.

Once the Helm chart is installed, Traefik will begin downloading on your cluster. To see whether Traefik is up and running, run `kubectl get all` to see all the Traefik resources created in the `traefik` namespace.

Your output will appear similar to the output below:

```sh
kubectl get -n traefik all
#
# NAME                           READY   STATUS    RESTARTS   AGE
# pod/traefik-858bb8459f-k4ztp   1/1     Running   0          94s
# 
# NAME              TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
# service/traefik   LoadBalancer   10.245.77.251   <pending>     80:31981/TCP,443:30188/TCP   94s
# 
# NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
# deployment.apps/traefik   1/1     1            1           94s
# 
# NAME                                 DESIRED   CURRENT   READY   AGE
# replicaset.apps/traefik-858bb8459f   1         1         1       94s
```

Depending on your cluster and when you ran the previous command, some of the names and ages may be different. If you see `<pending>` under `EXTERNAL-IP` for your `service/traefik`, keep running the `kubectl get -n traefik all` command until an IP address is listed. The `EXTERNAL-IP` is the IP address the load balancer is available from on the internet. Once an IP address is listed, make note of that IP address as your `traefik_ip_address`. You’ll use this address in the next section to set up your domain.

In this section, you installed Traefik into your cluster and have an `EXTERNAL-IP` you can direct your website traffic to. In the next section, you’ll make the changes to your DNS to send traffic from your domain to the load balancer.

---

## Step 4 — Accessing Traefik with Your Domain

Now that you have Traefik set up in your cluster and accessible on the internet with a load balancer, you’ll need to update your domain’s DNS to point to your Traefik load balancer. Before you continue, be sure your domain is [added to your DigitalOcean account](https://docs.digitalocean.com/products/networking/dns/how-to/add-domains/). cert-manager will need to be able to update DNS settings for your domain using the access token you set up earlier. You’ll use doctl to set up your domain’s DNS records to point to Traefik’s load balancer.

::: tip Note

This section assumes you’re using DigitalOcean as your DNS host. If you’re using a DNS host other than DigitalOcean, you’ll still create the same DNS record types with the same values, but you’ll need to refer to your DNS host’s documentation for how to add them.

:::

First, create a DNS A record for your domain named `tutorial-proxy.your_domain` that points to your `traefik_ip_address`.

After running the command, you’ll receive confirmation that your record has been created:

```sh
doctl compute domain records create your_domain --record-name tutorial-proxy --record-type A --record-data traefik_ip_address
#
# ID           Type    Name              Data                  Priority    Port    TTL     Weight
# 12345678     A       tutorial-proxy    traefik_ip_address    0           0       1800    0
```

A DNS `A` record tells the DNS to point a given hostname to a specific IP address. In this case, tutorial-proxy.`your_domain` will point to `traefik_ip_address`. So, if someone requests the website at tutorial-proxy.`your_domain`, the DNS servers will direct them to `traefik_ip_address`.

Now, create a `CNAME`-type DNS record named `tutorial-service.your_domain` and direct it to tutorial-proxy.`your_domain`. Since you’ll likely have several services running in your cluster at some point, using an A record to point each domain to your Traefik proxy could be a lot of work if you ever need to change your proxy’s IP address. Using a `CNAME` tells DNS to use the address of the domain it’s pointing to. In this case, the domain is `tutorial-proxy.your_domain`, so you only need to update your one A record to point to a new IP address instead of multiple A records.

To create the `CNAME` record, use the `doctl` command again. Be sure to include the trailing period (`.`) in `--record-data`.

After running the command, you will see output similar to the following:

```sh
doctl compute domain records create your_domain \
  --record-name tutorial-service \
  --record-type CNAME \
  --record-data tutorial-proxy.your_domain

#
# ID           Type     Name                Data                          Priority    Port    TTL     Weight
# 12345679     CNAME    tutorial-service    tutorial-proxy.your_domain    0           0       1800    0
```

This will create your `tutorial-service.your_domain` CNAME DNS record pointing to tutorial-proxy.`your_domain`. Now, when someone requests `tutorial-service.your_domain`, the DNS server will tell them to connect to the IP address `tutorial-proxy.your_domain` is pointing to. The trailing `.` in the `--record-data` tells the DNS server that it’s the end of the domain being provided and it shouldn’t append any other information on the end, similar to how a period (`.`) is used to end a sentence.

Since DigitalOcean is your primary DNS server, you can query the server directly to determine whether it’s set up correctly instead of waiting for other DNS servers on the internet to be updated. To verify your settings are coming through the DNS servers correctly, use the `dig` command to view what `ns1.digitalocean.com`, DigitalOcean’s primary DNS server, thinks the records should be:

::: tip Note

If you are using a DNS host other than DigitalOcean, replace `ns1.digitalocean.com` in this command with one of the DNS servers your DNS host had you set up on your domain.

:::

[<FontIcon icon="fas fa-globe"/>`dig`](https://linux.die.net/man/1/dig) is a utility that connects directly to DNS servers to “dig” into the DNS records to find the one you’re looking for. In this case, you provide `@ns1.digitalocean.com` to tell `dig` you want to query the ns1.digitalocean.com server for its DNS records. The `+noall +answer` options tell `dig` to only output a shorter response. (You can remove these two options if you want more information about the DNS query.) For more about `dig`, check out our guide to [<FontIcon icon="fas fa-globe"/>Retrieve DNS Information Using Dig](https://docs.digitalocean.com/tutorials/use-dig/).

Next, using `+domain=your_domain` tells `dig` to add `.your_domain` to the end of any hostnames provided to the command. Finally, `tutorial-proxy` and `tutorial-service` are the hostnames to look up. Since you’re using the `+domain` option, you don’t need to use the full phrase `tutorial-proxy.your_domain`, as it will automatically be added on the end.

You should receive output similar to the following, with your own values for `your_domain` and `traefik_ip_address`:

```sh
dig @ns1.digitalocean.com +noall +answer +domain=your_domain tutorial-proxy tutorial-service
#
# tutorial-proxy.your_domain.	1662	IN	A	traefik_ip_address
# tutorial-service.your_domain. 1800	IN	CNAME	tutorial-proxy.your_domain.
# tutorial-proxy.your_domain.	1800	IN	A	traefik_ip_address
```

The first line of the output shows that `tutorial-proxy.your_domain` is an `A` (`IN A`) record that points to `traefik_ip_address`. The second confirms that `tutorial-service.your_domain` is a `CNAME` (`IN CNAME`) record that points to `tutorial-proxy.your_domain`. Finally, the last line is the query `dig` runs to find the address your `CNAME` record points to. Since it’s `tutorial-proxy.your_domain`, it will show the same `A` record IP address as before.

In this section, you added an `A`-type DNS record and a `CNAME`-type DNS record to your domain so that network clients, such as browsers, know where to go to connect to your Traefik service. In the next section, you’ll set up a temporary web server in your cluster to complete your configuration.

---

## Step 5 — Creating Your Web Service

---

## Step 6 — Making Your Web Service Available and Secure

---

## Conclusion

In this tutorial, you installed a few different services in your Kubernetes cluster to make it easier to run a website with secure certificates. You installed the cert-manager service to handle the lifecycle of TLS certificates issued from Let’s Encrypt. You installed Traefik to make your websites available outside your cluster and to use the TLS certificates issued by Let’s Encrypt. Lastly, you created an Nginx website in your cluster to test your cert-manager and Traefik configurations.

Now that you have cert-manager and Traefik configured in your cluster, you could also set up more websites with different `Ingress` resources to serve many websites from the same cluster with a single cert-manager and Traefik installation.

You can read the [<FontIcon icon="fas fa-globe"/>Traefik Proxy documentation](https://doc.traefik.io/traefik/) for more about the different functionalities Traefik can provide in your cluster. [<FontIcon icon="fas fa-globe"/>cert-manager](https://cert-manager.io/docs/) also has extensive documentation on how to use it with other types of Let’s Encrypt challenges, as well as sources other than Let’s Encrypt.

To continue configuring your Kubernetes cluster, check out our other [tutorials on Kubernetes](https://www.digitalocean.com/community/tags/kubernetes).

---

<TagLinks />