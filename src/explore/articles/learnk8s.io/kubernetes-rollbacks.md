---
lang: ko-KR
title: How do you rollback deployments in Kubernetes?
description: Article(s) > How do you rollback deployments in Kubernetes?
icon: iconfont icon-k8s
category:
  - DevOps
  - VM
  - Kubernetes
  - Article(s)
tag:
  - blog
  - learnk8s.io
  - kubernetes
  - k8s
head:
  - - meta:
    - property: og:title
      content: Article(s) > How do you rollback deployments in Kubernetes?
    - property: og:description
      content: How do you rollback deployments in Kubernetes?
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/learnk8s.io/kubernetes-rollbacks.html
prev: /devops/k8s/articles/README.md
date: 2024-07-01
isOriginal: false
cover: https://learnk8s.io/a/c606df0c7112d7bfa62a1b9ce33b69ff.svg
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
  name="How do you rollback deployments in Kubernetes?"
  desc="When you introduce a change that breaks production, you should have a plan to roll back that change. Kubernetes and kubectl offer a simple mechanism to roll back changes."
  url="https://learnk8s.io/kubernetes-rollbacks"
  logo="https://static.learnk8s.io/f7e5160d4744cf05c46161170b5c11c9.svg"
  preview="https://learnk8s.io/a/c606df0c7112d7bfa62a1b9ce33b69ff.svg"/>

> TL;DR: Kubernetes has a built-in rollback mechanism.

There are several strategies when it comes to deploying apps into production.

In Kubernetes, rolling updates are the default strategy to update the running version of your app.

The rolling update cycles the previous Pods out and brings newer Pods in incrementally.

Let's have a look at an example:

::: tabs

@tab:active 1/16

![You have a Service and a Deployment with three replicas on version `1.0.0`. You change the `image` in your Deployment to version `1.1.0`; here's what happens next.](https://learnk8s.io/a/e2d1c566c4b5cd59d9fa8e0de547344b.svg)

@tab 2

![In a rolling update, Kubernetes creates a Pod with a new version of the image.](https://learnk8s.io/a/4cb04bff04409901279c9aef299a8e96.svg)

@tab 3/16

![Kubernetes waits for the readiness (and startup) probe.](https://learnk8s.io/a/68790a0227c4cbd202ee040c6dc321c6.svg)

@tab 4/16

![When the pod is Ready, it is running and can receive traffic. Kubernetes can remove a previous Pod.](https://learnk8s.io/a/461d364082ca45ff2d44e833d6028f69.svg)

@tab 5/16

![The previous Pod has been removed.](https://learnk8s.io/a/989fe007b12dc5258a0baaad30708174.svg)

@tab 6/16

![Kubernetes is ready to start again.](https://learnk8s.io/a/c96a24fabab6c2cd838e22f625e53439.svg)

@tab 7/16

![Another Pod with the new version of the image is created.](https://learnk8s.io/a/3b71cdb7f2cb8679f9db651de2b887ac.svg)

@tab 8/16

![Kubernetes waits for readiness.](https://learnk8s.io/a/585723fcc2a3398b5826da527df27913.svg)

@tab 9/16

![The Pod is running and can receive traffic.](https://learnk8s.io/a/d6df1201077164fe532994091f10c7d4.svg)

@tab 10/16

![The previous Pod is removed.](https://learnk8s.io/a/019fefa335a7ec32fbfed704d5a94f5d.svg)

@tab 11/16

![We start again, for the last time.](https://learnk8s.io/a/158804e645678ef4ae9d28f2128de8d1.svg)

@tab 12/16

![A Pod with the new image is created.](https://learnk8s.io/a/651391d0197c20e02b95d70b935e4819.svg)

@tab 13/16

![Kubernetes waits for readiness.](https://learnk8s.io/a/5b0cd8fad632f2667fa2e10001ad5803.svg)

@tab 14/16

![The Pod is running and can receive traffic.](https://learnk8s.io/a/b947fef59a0517d14e1f521cf8c69dc9.svg)

@tab 15/16

![The previous Pod is removed.](https://learnk8s.io/a/a892305b0dbb47661f04f6059be97059.svg)

@tab 16/16

![The migration from the previous to the current version is complete.](https://learnk8s.io/a/45cd6869e940f6708ac8b47c7c4754b4.svg)

:::

**Zero-downtime deployment is convenient when you wish not to interrupt your live traffic.**

You can deploy as many times as you want, and your user will not notice the difference.

Of course, you can only do this, if the API provided by the new version of the microservice is API compatible with the previous version. In our case, we just upgraded from version 1 to 1.1, so we are fine.

However, even if you use techniques such as Rolling updates, there's still a risk that your application will not work as expected, using the new version of the image.

---

## Rolling back a change

**When you introduce a change that breaks production, you should have a plan to roll back that change.**

Kubernetes and `kubectl` offer a simple mechanism to roll back changes to resources such as Deployments, StatefulSets and DaemonSets.

But before talking about rollbacks, you should learn a few crucial details about deployments.

You learned how Deployments are responsible for gradually rolling out new versions of your Pods without causing any downtime.

You are also familiar with Kubernetes watching over the number of replicas in your deployment.

*If you asked for 5 Pods but have only 4, Kubernetes creates one more.*

*If you asked for 4 Pods but have 5, Kubernetes deletes one of the running Pods.*

Since the replicas is a field in the Deployment, you might be tempted to conclude that it is the Deployment's job to count the number of Pods and create or delete them.

*This is not the case, interestingly.*

---

## Deployments delegate counting Pods to another component: the ReplicaSet

Every time you create a Deployment, the deployment creates a ReplicaSet and delegates creating (and deleting) the Pods.

::: tabs

@tab:active 1/5

![Let's focus on a Deployment.](https://learnk8s.io/a/f52ea5b5d2c048b042e52f88742ca8f4.svg)

@tab 2/5

![You might be tempted to think that Deployments are in charge of creating Pods.](https://learnk8s.io/a/2204356ea9999bfb2a4f53ebd2085578.svg)

@tab 3/5

![The Deployment doesn't create Pods. Instead, it creates another object called ReplicaSet.](https://learnk8s.io/a/96057f081130680d9e901194ccd69bdc.svg)

@tab 4/5

![The Deployment passes the spec (which includes the replicas) to the ReplicaSet.](https://learnk8s.io/a/5d485200b38398bd2a91d0dd8863198a.svg)

@tab 5/5

![The ReplicaSet is in charge of creating the Pods and watching over them.](https://learnk8s.io/a/0becf2408d3808dd1023b5c965e76381.svg)

:::

*But why isn't the Deployment creating the Pods?*

*Why does it have to delegate that task to someone else?*

Let's consider the following scenario.

You have a Deployment with a container on version 1 and three replicas.

You change the spec for your template and upgrade your container from version 1 to version 2.

---

## A ReplicaSet holds one type of a Pod

If there were no ReplicaSet, then during this upgrade, the Deployment would have to work with both version 1 and version 2 Pods.

In that design, the current state of the rolling update would not be explicitly represented, which would make debugging more difficult.

So, in Kubernetes there is a rule, one ReplicaSet can only have one type of a pod, so you can't have version 1 and version 2 of the Pods in the same ReplicaSet.

The Deployment knows that the two Pods can't coexist in the same ReplicaSet, so it creates a second ReplicaSet to hold version 2.

Then, gradually, it decreases the number of replicas in the old ReplicaSet and increases the count in the new one until the new ReplicaSet has all the Pods.

In other words, the sole responsibility of ReplicaSet is to count pods.

The Deployment orchestrates the rolling update by managing RepicaSets.

::: tabs

@tab:active 1/10

![Deployments create ReplicaSets that create Pods.](https://learnk8s.io/a/ff4a8a5e69e78b0444b046aa92e36e11.svg)

@tab 2/10

![Can you have two different Pods in the same ReplicaSet?](https://learnk8s.io/a/2e0ef2883e8c4ff7ff6ff5d652414f2e.svg)

@tab 3/10

![ReplicaSets can only contain a single type of Pod. You can't use two different Docker images. *How can you deploy two versions of the app simultaneously?*](https://learnk8s.io/a/6aeb1f4e5cc046c3b1a66e9f92c2564b.svg)

@tab 4/10

![The Deployment knows that you can't have different Pods in the same ReplicaSet. So it creates another ReplicaSet.](https://learnk8s.io/a/c99d8898dcc28031a80d02a80782ec4a.svg)

@tab 5/10

![It increases the number of replicas of the current ReplicaSet to one.](https://learnk8s.io/a/920d95b99f928b42e1a077c0072706cd.svg)

@tab 6/10

![And then it decreases the replicas count in the previous ReplicaSet.](https://learnk8s.io/a/1eabccf6b95c52f3f69e140104e487b2.svg)

@tab 7/10

![The same process of increasing and decreasing Pods continues until all Pods are created on the current ReplicaSet.](https://learnk8s.io/a/2cfb6a2a54d188484357fa8e2bc6d4e9.svg)

@tab 8/10

![Please notice how you have two Pods templates and two ReplicaSets.](https://learnk8s.io/a/1eabccf6b95c52f3f69e140104e487b2.svg)

@tab 9/10

![Also, the traffic is hitting both the current and previous version of the app.](https://learnk8s.io/a/e971a6b592b9177b9ce8c3cafeb84dc2.svg)

@tab 10/10

![After the rolling update is completed, **the previous ReplicaSet is not deleted.**](https://learnk8s.io/a/611eaf4791aedc6dbe2edadcf5f9b3c9.svg)

:::

*But what if you don't care about rolling updates and only wish for your Pods to be recreated when deleted?*

*Could you create a ReplicaSet without a Deployment?*

Of course, you can.

Here's an example of a ReplicaSet.

> <FontIcon icon="iconfont icon-yaml"/>`replicaset.yaml`

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: example-replicaset
spec:
  replicas: 3
  selector:
    matchLabels:
      name: app
  template:
    metadata:
      labels:
        name: app
    spec:
      containers:
      - name: app
        image: learnk8s/app:1.0.0
```

For reference, this is a Deployment that creates the ReplicaSet above:

> <FontIcon icon="iconfont icon-yaml"/>`deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      name: app
  template:
    metadata:
      labels:
      name: app
    spec:
      containers:
      - name: app
        image: learnk8s/app:1.0.0
```

*Aren't those the same?*

They are in this example.

However, in a Deployment, you can define properties such as *how many Pods to create and destroy during a rolling update (the field is `strategy`).*

The exact property isn't available in the ReplicaSet.

::: info

How do you know which properties are available? [<FontIcon icon="iconfont icon-k8s"/>You can consult the official API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.30/#rollingupdatedeployment-v1-apps).

:::

*In general, the YAML for the Deployment contains the ReplicaSet plus some additional details.*

You can create the ReplicaSet with:

```sh
kubectl create -f replicaset.yaml
```

Please remember, that in practice, we don't create ReplicaSets by hand. The go to default object time for stateless workloads, is the Deployment.

If you were to use a ReplicaSet directly, you would lose the ability to do rolling update, and we always have to be ready to upgrade apps.

*There's something else worth noting about the ReplicaSets and Deployments.*

When you upgrade your Pods from version 1 to version 2, the Deployment creates a new ReplicaSet and increases the number of replicas while the previous count goes to zero.

**After the rolling update, the previous ReplicaSet is not deleted** — not immediately, at least.

Instead, it is kept around with a replica count of 0.

If you try to execute another rolling update from version 2 to version 3, you might notice that you have two ReplicaSets with a count of 0 at the end of the upgrade.

*Why were the previous ReplicaSets not deleted or the garbage collected?*

Imagine that the current version of the container introduces a regression.

You probably don't want to serve unhealthy responses to your users, so you should roll back to a previous version of your app.

If you still have an old ReplicaSet, you could scale the current replicas to zero and increment the previous ReplicaSet count.

In other words, **keeping the previous ReplicaSets around is a convenient mechanism to roll back to a previously working version of your app.**

By default, Kubernetes stores the last 10 ReplicaSets and lets you roll back to any of them.

However, you can change how many ReplicaSets should be retained by changing the `spec.revisionHistoryLimit` in your Deployment.

> <FontIcon icon="iconfont icon-yaml"/>`deployment.yaml`

```yaml{7}
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-deployment
spec:
  replicas: 3
  revisionHistoryLimit: 0
  selector:
    matchLabels:
      name: app
  template:
    metadata:
      labels:
        name: app
    spec:
      containers:
      - name: app
        image: learnk8s/app:1.0.0
```

In this example, we changed this value to zero, which means that no previous ReplicaSet will be kept around, this is common practice with GitOps.

*What about the previous ReplicaSets?*

*Could you list all the previous Replicasets that belong to a Deployment?*

You can use the following command to inspect the history of your Deployment:

```sh
kubectl rollout history deployment/app
```

And you can rollback to a specific version with:

```sh
kubectl rollout undo deployment/app --to-revision=2
```

*But how does the Deployment know their ReplicaSets?*

*Does it store the order in which ReplicaSets are created?*

The ReplicaSets have random names with IDs such as `app-6ff88c4474`, so you should expect the Deployment to store a reference.

Let's inspect the Deployment with:

```sh
kubectl get deployment app -o yaml
```

Nothing looks like a list of the previous 10 ReplicaSets.

Deployments don't hold a reference to their ReplicaSets.

Instead ReplicaSets hold a back reference to their Deployment:

```sh
kubectl get replicaset app-6ff88c4474 -o yaml
```

You can find the back reference under ownerReferences.

Also, the ID that we previously called random, is actually a hash of the template section in the YAML.

This makes it so in Kubernetes, that if you apply the same YAML that you already had before, a previous ReplicaSet (Deployment revision) will be reused.

*What about the order?*

*How do you know which one was the last ReplicaSet used? Or the third?*

Kubernetes stores the revision in the `ReplicaSet.metatada.annotation`.

You can inspect the revision with the following command:

```sh
kubectl get replicaset app-6ff88c4474 -o yaml
```

In the case below, the revision is 3:

> <FontIcon icon="iconfont icon-yaml"/>`replicaset.yaml`

```yaml{6}
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: example-replicaset
  annotations:
    deployment.kubernetes.io/revision: "3"
spec:
  replicas: 3
  selector:
    matchLabels:
      name: app
  template:
    metadata:
      labels:
        name: app
    spec:
      containers:
      - name: app
        image: learnk8s/app:1.0.0
```

So, what happens when you find a regression in the current release and decide to rollback to version 2 like so:

```sh
kubectl rollout undo deployment/app --to-revision=2
```

- Kubectl finds the ReplicaSets that belong to the Deployment
- Each ReplicaSet has a revision number. Revision 2 is selected
- The current replicas count is decreased, and the count is gradually increased in the ReplicaSet belonging to revision 2
- The `deployment.kubernetes.io/revision` annotation is updated. The current ReplicaSet changes from revision 2 to 4

If before the undo, you had three ReplicaSets with revisions 1, 2, and 3, now you should have 1, 3, and 4.

There's a missing entry in the history: revision 2 promoted to 4.

*There's also something else that looks useful but doesn't work quite right.*

The history command displays two columns: *Revision* and *Change-Cause*.

```sh
kubectl rollout history deployment/app
# 
# REVISION  CHANGE-CAUSE
# 1         <none>
# 2         <none>
# 3         <none>
```

While you're now familiar with the Revision column, you might be wondering what Change-Cause is used for — and why it's always set to `<none>`.

When you create a resource in Kubernetes, you can append the `--record` flag like so:

```sh
kubectl create -f deployment.yaml --record
```

When you do, Kubernetes adds an annotation to the resource with the command that generated it.

In the example above, the Deployment has the following metadata section:

> <FontIcon icon="iconfont icon-yaml"/>`deployment.yaml`

```yaml{5}
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-deployment
  kubernetes.io/change-cause: kubectl create --filename=deployment.yaml
spec:
  replicas: 3
  selector:
    matchLabels:
      name: app
  template:
    metadata:
      labels:
        name: app
    spec:
      containers:
      - name: app
        image: learnk8s/app:1.0.0
```

Now, if you try to display the history again, you might notice that the same annotation is used in the rollout history command:

```sh
kubectl rollout history app
# 
# REVISION  CHANGE-CAUSE
# 1         kubectl create --filename=deployment.yaml --record=true
```

If you change the container image in the YAML file and apply the new configuration with:

```sh
kubectl apply -f deployment.yaml --record
```

You should see the following new entry in the rollout history:

```sh
kubectl rollout history deployment/app
# 
# REVISION  CHANGE-CAUSE
# 1         kubectl create --filename=deployment.yaml --record=true
# 2         kubectl apply --filename=deployment.yaml --record=true
```

The `--record` command can be used with any resource type, but the value is only used in Deployment, DaemonSet, and StatefulSet resources, i.e. resources that can be "rolled out" (see `kubectl rollout -h`).

But you should remember:

- The `--record` flag adds an annotation to the YAML resource, which can be changed at any time
- The rollout history command uses the value of this annotation to populate the Change-Cause table
- The annotation contains only the last command. If you create the resource and later use `kubectl scale --replicas=10 deploy/app --record` to scale it, only the scaling command is stored in the annotation.

Also, there is an [ongoing discussion on deprecating the `--record` flag (<FontIcon icon="iconfont icon-github"/>`kubernetes/kubernetes`)](https://github.com/kubernetes/kubernetes/issues/40422).

The feature provides little value for manual usage.

However, it still has some justification for automated processes as a simple form of auditing (keeping track of which commands caused which changes to a rollout).

---

## Should you use kubectl rollout undo to fix a regression in production?

Just because Kubernetes offers an option to roll back deployments doesn't mean it is a good idea.

Let's consider the following scenario:

- You deploy an application to production by changing the image in the <FontIcon icon="iconfont icon-yaml"/>`deployment.yaml`.
- You commit the changes to version control and push the changes.
- As soon as you deploy, you notice that the app contains a regression.
- You use `kubectl rollout undo` to revert to the previous version.

If a colleague comes along, is it safe for them to deploy all the changes stored in version control?

Probably not.

The state of the cluster and the resources stored in version control drifted.

A better alternative is to "roll forward" by amending the <FontIcon icon="iconfont icon-yaml"/>`deployment.yaml` (e.g. with a revert in your version control) and triggering a new deployment.

If your automated deployment process takes too long in an emergency, you can still `kubectl apply -f` the reverted YAML file into your cluster by hand.

You should consider these `kubectl rollout` features deprecated and shouldn't depend on them.

Our recommendation is also to set the `revisionHistoryLimit` to zero, as discussed before, to ensure, that this drift between the version control and the production can't happen with usage of `kubectl rollout` commands.

---

<TagLinks />