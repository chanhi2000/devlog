---
lang: ko-KR
title: Github Action
description: Github > Github Action
icon: iconfont icon-github-actions
category:
  - DevOps
  - Github
  - Github Actions
  - Kubernetes
  - Helm
tag: 
  - devops
  - github
  - github-actions
  - cicd
  - ci
  - cd
  - k8s
  - kubernetes
  - helm
head:
  - - meta:
    - property: og:title
      content: Github > Github Action
    - property: og:description
      content: Github Action
    - property: og:url
      content: https://chanhi2000.github.io/devops/github/actions.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## <VPIcon icon="iconfont icon-k8s"/>ARC 설정

::: info "Action Runner Controller (ARC)"

> GitHub Actions를 사용하다 보면, 여러 이유로 GitHub Hosted Runner만으로는 부족한 경우가 있습니다. 이때, Self Hosted Runner를 사용하면 더 많은 제어권을 가질 수 있습니다.

<SiteInfo
  name="actions/actions-runner-controller"
  desc="Kubernetes controller for GitHub Actions self-hosted runners"
  url="https://github.com/actions/actions-runner-controller/"
  logo="https://github.githubassets.com/favicons/favicon-dark.svg"
  preview="https://opengraph.githubassets.com/905de1bb523164c32538cca2093d5d310668c249775a34803daf6589c38d06ba/actions/actions-runner-controller"/>

:::

::: note Prerequesite(s)

- Kubernetes (`v1.3x`)
- Helm
- Github 계정

:::

### `cert-manager` 설치

::: code-tabs#sh

@tab:active <VPIcon icon="iconfont icon-k8s"/>

```sh
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.8.2/cert-manager.yaml
```

@tab <VPIcon icon="iconfont icon-helm"/>

```sh
helm install cert-manager
oci://quay.io/jetstack/charts/cert-manager \
--version v1.21.1 \
--namespace cert-manager \
--create-namespace \
--set crds.enabled=true
```

<SiteInfo
  name="Helm"
  desc="cert-manager installation: Using Helm"
  url="https://cert-manager.io/docs/installation/helm/#installing-with-helm/"
  logo="https://cert-manager.io/favicons/favicon.ico"
  preview="https://cert-manager.io/images/og1.png"/>

:::

### GitHub PAT (Personal Access Token) 생성

::: warning

개인 계정으로 생성한 토큰을 사용하면, 퇴사자 발생 시 Runner가 통째로 동작하지 않을수 있습니다.

관리용 계정을 생성해서 사용하시는 것을 추천드립니다.

:::

`Settings > Developer Settings > Tokens (classic)`에 가서 `Create new Token` 을 클릭하여 토큰을 생성합니다.

::: tabs

@tab:active 개인용

아래 권한만 추가

- `repo`: 권한 전체

@tab 단체

아래 권한만 추가

- `admin:org`: 권한 전체
- `admin:public_key`: read:public_key 권한
- `admin:repo_hook`: read:repo_hook 권한
- `admin:org_hook`: 권한 전체
- `notifications`: 권한 전체
- `workflow`: 권한 전체

:::

### Helm 배포

```sh
NAMESPACE="arc-systems";
GH_REPO="https://github.com/<저장소경로>";
GH_PAT="<Github Personal Accsss Token>";
NUM_REPLICA=4;

# (arc-runner-set 설치 전) PAT 구성
kubectl delete secret pre-defined-secret \
--namespace=${NAMESPACE} \
--ignore-not-found;
kubectl create secret generic pre-defined-secret \
--namespace=${NAMESPACE} \
--from-literal=github_token="${GH_PAT}";

# values.xml
FILENAME_VALUES="${HOME}/values.yaml"
cat << 'FILE_VALUES_EOF' > "$FILENAME_VALUES"
githubConfigUrl: VV_GH_REPO
scaleSetLabels: ["arc-runner-set"]
# githubConfigSecret
#   github_token: ""
githubConfigSecret: pre-defined-secret

minRunners: 1
maxRunners: VV_NUM_REPLICA

listenerConfig:
  scaler:
    qps: 50
    burst: 100
template:
  spec:
    containers:
      - name: runner
        image: ghcr.io/actions/actions-runner:latest
        command: ["/home/runner/run.sh"]

namespaceOverride: ""
FILE_VALUES_EOF
sed -i "s@VV_GH_REPO@$GH_REPO@g" $FILENAME_VALUES
sed -i "s@VV_NUM_REPLICA@$NUM_REPLICA@g" $FILENAME_VALUES

# arc 설치
helm upgrade --install "arc" \
oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controller \
--namespace "${NAMESPACE}" --create-namespace;

# arc-runner-set 설치
helm upgrade --install "arc-runner-set" \
oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set \
--namespace "${NAMESPACE}" --create-namespace \
--values ${FILENAME_VALUES};

rm -f $FILENAME_VALUES;
```

---

## <VPIcon icon="fas fa-bug-slash"/>Troubleshooting

### Node의 Taint 설정 해제

```plaintext
<N> node(s) had taints that the pod didn't tolerate.
```

```sh{4}
kubectl get pods -n arc-systems
#
# NAME                                     READY   STATUS    RESTARTS   AGE
# arc-gha-rs-controller-7c8d7688f5-b97zn   0/1     Pending   0          99s
```

Pod 상태가 계속 `Pending`일 경우

```sh
kubectl describe pod arc-gha-rs-controller-7c8d7688f5-b97zn -n arc-systems
#
# Name:               arc-gha-rs-controller-7c8d7688f5-b97zn                                 
# Namespace:          arc-systems                                                              
# .
# ... 생략
# Events:
#                                                             
# Type     Reason            Age                 From               Message                                                                    
# ----     ------            ----                ----               -------                                                                   #  
# Warning  FailedScheduling  94s   default-scheduler  0/1 nodes are available: 1 node(s) had untolerated taint {node-role.kubernetes.io/control-plane: }. preemption: 0/1 nodes are available: 1 Preemption is not helpful for scheduling.
```

::: important 이유

Contrl-Plane Node에 Pod를 못 올리도록 설정되어 있기 때문

```sh
kubectl get nodes
#
# NAME            STATUS   ROLES           AGE     VERSION
# k8s-gh-runner   Ready    control-plane   4m41s   v1.30.14
kubectl describe node k8s-gh-runner | grep Taint
#
# Taints:             node-role.kubernetes.io/control-plane:NoSchedule
```

:::

```sh
# Taint 설정 해제
kubectl taint nodes k8s-gh-runner node-role.kubernetes.io/control-plane-
#
# 다시 Taint 상태 복구
kubectl taint nodes k8s-gh-runner node-role.kubernetes.io/control-plane:NoSchedule
```

<SiteInfo
  name="Taints and Tolerations"
  desc="Node affinity is a property of Pods that attracts them to a set of nodes (either as a preference or a hard requirement). Taints are the opposite -- they allow a node to repel a set of pods. Tolerations are applied to pods. Tolerations allow the scheduler to schedule pods with matching taints. Tolerations allow scheduling but don't guarantee scheduling: the scheduler also evaluates other parameters as part of its function."
  url="https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"
  logo="https://kubernetes.io/icons/icon-128x128.png"
  preview="https://kubernetes.io/images/kubernetes-open-graph.png"/>

---

## <VPIcon icon="fas fa-book-atlas"/>참고

```sh title=".bash_profile"
# .bash_profile
export KUBECONFIG=/etc/kubernetes/admin.conf
export NAMESPACE="arc-systems"
PATH_ARC="${HOME}/${NAMESPACE}"
FILENAME_VALUES="${PATH_ARC}/values.yaml"
GH_REPO=
GH_PAT=
NUM_REPLICA=4

function values() {
echo "Set impoortant values for k8s arc to work.";

mkdir -p $PATH_ARC;

if [ -n "$1" ]; then
GH_PAT="$1"
echo "Set Github PAT value!";
fi

kubectl delete secret pre-defined-secret \
--namespace=${NAMESPACE} \
--ignore-not-found;
kubectl create secret generic pre-defined-secret \
--namespace=${NAMESPACE} \
--from-literal=github_token="${GH_PAT}";
echo "GH_PAT: $GH_PAT";

cat << 'FILE_VALUES_EOF' > "$FILENAME_VALUES"
githubConfigUrl: VV_GH_REPO
scaleSetLabels: ["arc-runner-set"]
githubConfigSecret: pre-defined-secret

minRunners: 1
maxRunners: VV_NUM_REPLICA

listenerConfig:
  scaler:
    qps: 50
    burst: 100
template:
  spec:
    containers:
      - name: runner
        image: ghcr.io/actions/actions-runner:latest
        command: ["/home/runner/run.sh"]

namespaceOverride: ""
FILE_VALUES_EOF

sed -i "s@VV_GH_REPO@$GH_REPO@g" $FILENAME_VALUES
sed -i "s@VV_NUM_REPLICA@$NUM_REPLICA@g" $FILENAME_VALUES
}

function darc() {
helm upgrade --install "arc" \
oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controller \
--namespace "${NAMESPACE}" --create-namespace;
}


function dars() {
helm upgrade --install "arc-runner-set" \
oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set \
--namespace "${NAMESPACE}" --create-namespace \
--values "${FILENAME_VALUES}";
}
```

<SiteInfo
  name="actions/actions-runner-controller"
  desc="Kubernetes controller for GitHub Actions self-hosted runners"
  url="https://github.com/actions/actions-runner-controller/"
  logo="https://github.githubassets.com/favicons/favicon-dark.svg"
  preview="https://opengraph.githubassets.com/905de1bb523164c32538cca2093d5d310668c249775a34803daf6589c38d06ba/actions/actions-runner-controller"/>

<SiteInfo
  name="Get started with Actions Runner Controller - GitHub Docs"
  desc="In this tutorial, you'll try out the basics of Actions Runner Controller."
  url="https://docs-internal.github.com/en/actions/tutorials/use-actions-runner-controller/get-started/"
  logo="/assets/cb-345/images/site/favicon.png"
  preview="https://docs.github.com/assets/cb-345/images/social-cards/actions.png"/>

<SiteInfo
  name="Kubernetes로 GitHub Actions 커스텀 러너 구축하기"
  desc="GitHub Actions 커스텀 러너를 Kubernetes로 구축하는 방법을 알아봅니다."
  url="https://marshallku.com/dev/setup-github-actions-custom-runner-with-kubernetes//"
  logo="https://marshallku.com/favicon.ico"
  preview="https://marshallku.com/dev/setup-github-actions-custom-runner-with-kubernetes/kubernetes-github-actions.png"/>

---

<TagLinks />
