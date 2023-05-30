---
lang: ko-KR
title: How To Run Serverless Workloads with Knative on DigitalOcean Kubernetes
description: ☸DigitalOcean - Kubernetes > How To Run Serverless Workloads with Knative on DigitalOcean Kubernetes
tags: ["crashcourse", "digitalocean", "kubernetes", "kubctl", "serverless"]
meta:
  - name: ☸DigitalOcean - Kubernetes > How To Run Serverless Workloads with Knative on DigitalOcean Kubernetes
    content: How To Run Serverless Workloads with Knative on DigitalOcean Kubernetes
  - property: og:title
    content: ☸DigitalOcean - Kubernetes
  - property: og:description
    content: How To Run Serverless Workloads with Knative on DigitalOcean Kubernetes
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/digitalocean-kubernetes/20221216-how-to-run-serverless-workloads-with-knative-on-digitalocean-kubernetes.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: How To Run Serverless Workloads with Knative on DigitalOcean Kubernetes
desc: December 16, 2022
link: https://digitalocean.com/community/tutorials/how-to-run-serverless-workloads-with-knative-on-digitalocean-kubernetes
logo: https://www.digitalocean.com/_next/static/media/intro-to-cloud.d49bc5f7.jpeg
color: rgba(0, 105, 225, 0.2)
```

---

## Introduction

[Kubernetes](https://kubernetes.io) is a powerful container orchestration tool that allows you to deploy and manage containerized applications, but it can sometimes take time to manage the underlying infrastructure. The _[serverless](https://www.digitalocean.com/community/tutorials/what-is-serverless)_ paradigm helps users deploy applications without having to worry about the underlying infrastructure. With the advent of Serverless 2.0, many platforms and tools now allow you to deploy serverless applications on Kubernetes.

[Knative](https://knative.dev/docs) is a Kubernetes-based platform that provides components to deploy and manage serverless workloads. Knative offers open-source Kubernetes integration, cloud-agnosticism, building blocks, and extensibility. Tools like Red Hat’s [Openshift](https://www.redhat.com/en/technologies/cloud-computing/openshift) also use Knative for users to deploy their serverless workloads on top of Kubernetes.

Knative features two main components: [Eventing](https://knative.dev/docs/eventing) and [Serving](https://knative.dev/docs/serving). Eventing manages events that trigger serverless workloads. Serving is a set of components to deploy and manage serverless workloads. Knative Serving enables developers to deploy and manage serverless applications on top of Kubernetes. With Knative Serving, developers can quickly and easily deploy new services, scale them up and down, and connect them to other services and event sources. This feature enables developers to build and deploy modern, cloud-native applications that are flexible, scalable, and easy to maintain.

In this tutorial, you will use Knative Serving to deploy a Node.js application as a serverless workload on a DigitalOcean Kubernetes cluster. You will use doctl (the DigitalOcean CLI) and kn (the Knative CLI) to create the Kubernetes cluster and deploy the application.

---

## Prerequisites

To complete this tutorial, you will need the following:

- A DigitalOcean account that you will use to start a Kubernetes cluster with at least 4GB RAM and 2 CPU cores. If you do not have one, [sign up for a new account](https://cloud.digitalocean.com/projects). This setup will use a [DigitalOcean Kubernetes](https://www.digitalocean.com/products/kubernetes) cluster. To create a Kubernetes cluster in the DigitalOcean Cloud Panel, see our [Kubernetes Quickstart](https://www.digitalocean.com/docs/kubernetes/quickstart).
- To follow this tutorial from a remote server, you can set up an Ubuntu 22.04 server with a non-root user and a firewall by following our [Initial Server Setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04). To get started with a DigitalOcean Droplet, you can use our [Droplet Quickstart](https://docs.digitalocean.com/products/droplets/quickstart).
- The DigitalOcean command-line client, [`doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install), installed on your machine. The __GitHub Download__ option is recommended. See [How To Use doctl](https://www.digitalocean.com/community/tutorials/how-to-use-doctl-the-official-digitalocean-command-line-client) for more information on using `doctl`.
- [`kubectl`](https://kubernetes.io/docs/tasks/tools) installed on your machine, which you can set up with the [Kubernetes installation docs](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux).
- Docker installed on your machine, which you can set up by following Steps 1 and 2 of our tutorial on [How To Install and Use Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04).
- A sample Node.js application set up by following the [How To Build a Node.js Application with Docker](https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker) tutorial for creating the application and pushing its container image to Docker Hub.
- An account at [Docker Hub](https://hub.docker.com) for storing Docker images you’ll create during this tutorial.

---

## Step 1 — Launching the DigitalOcean Kubernetes Cluster

Since Knative is a Kubernetes-based platform, you will use it with a Kubernetes cluster on DigitalOcean. There are multiple ways to launch a Kubernetes cluster on DigitalOcean. You can use the [DigitalOcean Cloud interface](https://www.digitalocean.com/docs/kubernetes/quickstart), the DigitalOcean CLI, or the Terraform provider.

In this tutorial, you will use doctl, the DigitalOcean command-line client, to launch the Kubernetes cluster. If you have not yet installed doctl, follow the steps in the [official installation guide](https://docs.digitalocean.com/reference/doctl/how-to/install).

To effectively use Knative in this tutorial, you will need a Kubernetes cluster with at least __4GB RAM__ and __2 CPU cores__ available. You can launch a cluster named `knative-tutorial` with these specifications by running the `doctl` command with the following flags:

- `--size` specifies the size of the remote server.
- `--count` specifies the number of nodes that will be created as part of the cluster.

To create the DigitalOcean Kubernetes cluster, run the following command:

```sh
doctl kubernetes cluster create knative-tutorial --size s-2vcpu-4gb --count 3
```

In this command, you create a cluster named `knative-tutorial` with the size set to  __4GB RAM__ and __2 CPU cores__ and with a count of `3` nodes.

::: Note

You can also use the `--region` flag to specify in which region the server will be located, though that option is not used in this tutorial. If you are using a remote server, such as a Droplet, you might wish to have your cluster in the same region as the server. If you use the DigitalOcean Control Panel to [create your cluster](https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/#choose-a-datacenter-region), you can [choose a datacenter region and VPC network](https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/#choose-a-datacenter-region). For more on DigitalOcean’s regional availability, you can refer to our [Regional Availability Matrix](https://docs.digitalocean.com/products/platform/availability-matrix).

:::

This command will take a few minutes to complete. Once it finishes, you will receive a message similar to the following:

```sh
# Output
# Notice: Cluster is provisioning, waiting for cluster to be running
# ...........................................................
# Notice: Cluster created, fetching credentials
# Notice: Adding cluster credentials to kubeconfig file found in "/home/sammy/.kube/config"
# Notice: Setting current-context to do-nyc1-knative-tutorial
# ID                                      Name                Region    Version        Auto Upgrade    Status     Node Pools
# d2d1f9bc-114b-45e7-b109-104137f9ab62    knative-tutorial    nyc1      1.24.4-do.0    false           running    knative-tutorial-default-pool
```

The cluster is now ready to use.

You can now verify if `kubectl` has been set up in your system and can reach the DigitalOcean Kubernetes Cluster with the following command:

```sh
kubectl cluster-info
# Output
# Kubernetes control plane is running at https://69de217e-0284-4e18-a6d7-5606915a4e88.k8s.ondigitalocean.com
# CoreDNS is running at https://69de217e-0284-4e18-a6d7-5606915a4e88.k8s.ondigitalocean.com/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
```

Since the output lists the URLs of the `control plane` and the `CoreDNS` service (highlighted in the output block), you know that `kubectl` is configured correctly in your system and can reach the cluster.

As part of the cluster creation process, `doctl` automatically configures the `kubectl` context to use the new cluster. You can verify this by running the following command:

```sh
kubectl config current-context
# Output
# o-nyc1-knative-tutorial
```

This command will return the name of the current context.

The output indicates that the current context is `do-nyc1-knative-tutorial`, which is the name of the cluster you created with the region in which it is located (`nyc1`).

You can also verify that the cluster is running and the nodes are ready to accept workloads with this command:

```sh
kubectl get nodes
# NAME                                       STATUS   ROLES    AGE     VERSION
# do-nyc1-knative-tutorial-159783000-0v9k5   Ready    <none>   2m52s   v1.24.4
# do-nyc1-knative-tutorial-159783000-1h4qj   Ready    <none>   2m52s   v1.24.4
# do-nyc1-knative-tutorial-159783000-1q9qf   Ready    <none>   2m52s   v1.24.4
```

The `kubectl get nodes` command lists all the nodes in the cluster along with their status and other information.

The output states that the cluster has three nodes ready to accept workloads.

In this step, you launched a Kubernetes cluster on DigitalOcean. You can now install Knative to deploy your serverless workload on Kubernetes.

---

## Step 2 — Installing Knative Serving

In this step, you will install [Knative Serving](https://knative.dev/docs/serving) on your Kubernetes cluster. Knative Serving is responsible for deploying and managing your serverless workloads.

To install Knative Serving, you will need the Knative core components and custom resources. Run these commands to install the core components:

```sh
kubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.8.0/serving-crds.yaml
kubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.8.0/serving-core.yaml
# customresourcedefinition.apiextensions.k8s.io/certificates.networking.internal.knative.dev created
# customresourcedefinition.apiextensions.k8s.io/clusteringresses.networking.internal.knative.dev created
# customresourcedefinition.apiextensions.k8s.io/configurations.serving.knative.dev created
# customresourcedefinition.apiextensions.k8s.io/images.caching.internal.knative.dev created
# customresourcedefinition.apiextensions.k8s.io/ingresses.networking.internal.knative.dev created
# ...
```

This output indicates that the Knative core components and custom resources are on your cluster. All of the components are in the `knative-serving` namespace.

Once they have finished downloading, you can verify that Knative Serving is installed:

```sh
kubectl get pods --namespace knative-serving
# NAME                                      READY   STATUS    RESTARTS   AGE
# activator-5f6b4bf5c8-kfxrv                1/1     Running   0          4m37s
# autoscaler-bc7d6c9c9-v5jqt                1/1     Running   0          4m34s
# controller-687d88ff56-9g4gz               1/1     Running   0          4m32s
# domain-mapping-69cc86d8d5-kr57g           1/1     Running   0          4m29s
# domainmapping-webhook-65dfdd9b96-nzs9c    1/1     Running   0          4m27s
# net-kourier-controller-55c99987b4-hkfpl   1/1     Running   0          3m49s
# webhook-587cdd8dd7-qbb9b                  1/1     Running   0          4m22s
```

The `kubectl get pods` command will retrieve a list of all the pods launched in the cluster in the namespace `knative-serving`. This command identifies the pods in your cluster, their current status, the number of containers in the pod, and the names of the containers in a particular namespace.

The output displays all the pods running in the knative-serving namespace. The pods are responsible for the different components of Knative Serving.

Knative requires a networking layer to route incoming traffic to your services. The networking layer in Knative enables the deployment and communication of microservices in a distributed environment. Knative Serving supports Istio, Contour, and Kourier as the networking layer.

In this tutorial, you will use Kourier as the networking layer because it integrates seamlessly with Knative. Kourier uses the same APIs and standards as the rest of the Knative ecosystem, making it a good option for developers and organizations already using Knative who want to benefit from its powerful networking capabilities.

Install Kourier with this command: