---
lang: ko-KR
title: Environment Setup - (Linux - Fedora)
description: Kubernetes > Environment Setup - (Linux - Fedora)
icon: fa-brands fa-fedora
category:
  - DevOps
  - Kubernetes
  - Environment Setup
  - Linux
  - Fedora
  - RedHat
  - CentOS
  - Rocky Linux
  - Alma Linux
tag:
  - devops
  - k8s
  - kubernetes
  - env
  - env-setup
  - linux
  - fedora
  - redhat
  - centos
  - almalinux
  - alma-linux
head:
  - - meta:
    - property: og:title
      content: Kubernetes > Envi ronment Setup - (Linux - Fedora)
    - property: og:description
      content: Environment Setup - (Linux - Fedora)
    - property: og:url
      content: https://chanhi2000.github.io/devops/k8s/env-setup/linux-fedora.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## <VPIcon icon="iconfont icon-shell"/>`.bash_profile`

```sh
KUBECONFIG=/etc/kubernetes/admin.conf

# Get the aliases and functions
if [ -f ~/.bashrc ]; then
   . ~/.bashrc
fi

alias reload='source ${HOME}/.bash_profile';

# Core Operations
alias k="kubectl";
alias kg="kubectl get";
alias kd="kubectl describe";
alias ke="kubectl edit";
alias kdel="kubectl delete";
alias ka="kubectl apply -f";

# Quick Resource Viewing
alias kgns="kubectl get ns";
alias kgpo="kubectl get pods -o wide";
alias kgdep="kubectl get deployments";
alias kgsvc="kubectl get service";

# Debugging & Interaction
alias kl="kubectl logs";
alias klf="kubectl logs -f";          # Tail logs
alias kex="kubectl exec -it";         # Interactive shell into container
```

---

## 설치

::: note

`root` 사용자로 진행 할 경우, `sudo` 없이 진행해도 됨

:::

### 1. `firewalld` 서비스

```sh
sudo systemctl stop firewalld;             # 중지
sudo systemctl disable firewalld;          # 자동실행 중지
```

### 2. swap 기능

```sh
sudo swapoff -a;                           # 끄기
# '/swap` 관련 문구 찾아 해당 라인 주석처리
sudo sed -i '/ swap / s/^/#/' /etc/fstab;
#
# 또는
#
vi /etc/fstab;                             # 편집: swap 자동 마운트 끄기
#
# '/swap` 관련 문구 찾아 해당 라인 주석처리
```

### 3. SELinux 설정

```sh
sudo setenforce 0                         # permissive mode로 즉시 변경 
# 설정 파일 수정 (재부팅 후 적용)
sudo sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config
```

### 4. `containerd` 설치

```sh
sudo dnf clean all;                        # 캐시 정
sudo dnf update -y;                        # 패키지 업데이트
sudo dnf install -y dnf-utils iproute-tc;  # 필수 패키지 설치
# docker rpm저장소 추가
sudo yum-config-manager --add-repo \
https://download.docker.com/linux/centos/docker-ce.repo;
sudo dnf install container.io.x86_64 -y;   # containerd 설치
sudo systemctl enable --now containerd     # 자동실행 설정
# containerd 설정파일 생성
sudo bash -c "container config default > /etc/containerd/config.toml"
# Cgroup을 Systemd를 통해 관리하도록 설정
sudo sed -i 's/ SystemdCgroup = false/ SystemdCgroup = true/' /etc/containerd/config.toml
```

### 5. <VPIcon icon="iconfont icon-k8s"/>k8s 설치

```sh
# kubernetes 저장소 설정
cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://pkgs.k8s.io/core:/stable:/v1.36/rpm/
enabled=1
gpgcheck=1
gpgkey=https://pkgs.k8s.io/core:/stable:/v1.36/rpm/repodata/repomd.xml.key
exclude=kubelet kubeadm kubectl cri-tools kubernetes-cni
EOF
# 관련 패키지 설치 (kubelet kubeadm kubectl)
sudo yum install kubelet kubeadm kubectl --disableexcludes=kubernetes
# kubelet 자동 시작하도록 설정
sudo systemctl enable --now kubelet
```

::: info 최신 stable 버전 번호 확인

<SiteInfo
  name="Changing The Kubernetes Package Repository"
  desc="This page explains how to enable a package repository for the desired Kubernetes minor release upon upgrading a cluster. This is only needed for users of the community-owned package repositories hosted at pkgs.k8s.io. Unlike the legacy package repositories, the community-owned package repositories are structured in a way that there's a dedicated package repository for each Kubernetes minor version..."
  url="https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/change-package-repository/"
  logo="https://kubernetes.io/icons/icon-128x128.png"
  preview="https://kubernetes.io/images/kubernetes-open-graph.png"/>

:::

### 6. 네트워크 Bridging 설정

```sh
echo "net.ipv4.ip_forward=1" | sudo tee -a /etc/sysctl.conf
sudo modprobe br_netfitler # 커널 모듈 활성화
echo "net.bridge.bridge-nf-call-iptables=1" | sudo tee -a /etc/sysctl.conf
# 변경사항 적용
sudo sysctl -p
sudo systemctl restart containerd
```

### 7. `kubeadm` (마스터 노드)

#### 7a. `kubeadm init`

```sh
kubeadm init --pod-network-cidr=192.168.0.0/16 \
--cri-socket=unix:///run/containerd/containerd.sock
#
# ...
# To start using your cluster, you need to run the following as a regular user:
#
#   mkdir -p $HOME/.kube
#   sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
#   sudo chown $(id -u):$(id -g) $HOME/.kube/config
#
# Alternatively, if you are the root user, you can run:
#
#  export KUBECONFIG=/etc/kubernetes/admin.conf
#
# You should now deploy a pod network to the cluster.
# Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
#   https://kubernetes.io/docs/concepts/cluster-administration/addons/
#
# Then you can join any number of worker nodes by running the following on each as root:
#
# kubeadm join 192.168.100.130:6443 --token fx8wwi.h1sg517qd62hft7e \
#         --discovery-token-ca-cert-hash sha256:62133cfdf41b98d1f45d0a42a9f72af146b632c50c0bda7044461f7e41c1cc1c
#
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

export KUBECONFIG=/etc/kubernetes/admin.conf
```

#### `kubeadm reset`

초기화

```sh
kubeadm reset -f
```

### 8. `CNI` 설정 (calico)

::: important

설정 안할 경우, coredns pod 오작동

:::

```sh
kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.28.0/manifests/calico.yaml
```

::: details (Optional) `kubeadm join` (워커 노드 연동)

**(마스터 노드에서) 토큰 발행**

```sh
kubeadm token create                      # token 재발행 (master node)
# 발행 후 해시값 확인
openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2>/dev/null | openssl dgst -sha256 -hex | sed 's/^.* //'
#
# sha256:62133cfdf41b98d1f45d0a42a9f72af146b632c50c0bda7044461f7e41c1cc1c
```

**(워커 노드에서) 연결 실행**

```sh
# /etc/resolve.conf 소프트 링크 (혹은 copy)
# 쿠버네티스 dns 질의 시 /run/systemd/resolve/resolv.conf 파일을 참조 함
sudo mkdir -p /run/systemd/resolve
sudo ln -s /etc/resolv.conf /run/systemd/resolve/resolv.conf

# kubeadm join (worker 노드 추가하기)
kubeadm join 192.168.100.130:6443 --token fx8wwi.h1sg517qd62hft7e \
--discovery-token-ca-cert-hash sha256:62133cfdf41b98d1f45d0a42a9f72af146b632c50c0bda7044461f7e41c1cc1c

# 마스터 노드의 config 파일 복사
mkdir -p $HOME/.kube
scp sppolo@192.168.91.130:/home/sppolo/.kube/config /home/sppolo/.kube
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

**(모든 노드에서) `/etc/hosts` 설정**

```sh
# 설정 된 주소에 맞춰 /etc/hosts 추가
127.0.1.1 k8s-worker2
192.168.91.200 k8s-master
192.168.91.201 k8s-worker1
192.168.91.202 k8s-worker2
```

:::

### 9. 모든 상태 확인

```sh
kubectl get all -A
#
# NAMESPACE      NAME                                                READY   STATUS    RESTARTS   AGE
# arc-systems    pod/arc-gha-rs-controller-7c8d7688f5-r92bq          0/1     Pending   0          16h
# cert-manager   pod/cert-manager-cainjector-5dbdc949c4-8286l        0/1     Pending   0          16h
# cert-manager   pod/cert-manager-d68cffc95-4szbc                    0/1     Pending   0          16h
# cert-manager   pod/cert-manager-webhook-759ddb6555-kjvrc           0/1     Pending   0          16h
# kube-system    pod/calico-kube-controllers-564985c589-8mvrl        1/1     Running   0          16h
# kube-system    pod/calico-node-jnbkw                               1/1     Running   0          16h
# kube-system    pod/coredns-55cb58b774-74s98                        1/1     Running   0          17h
# kube-system    pod/coredns-55cb58b774-flcjh                        1/1     Running   0          17h
# kube-system    pod/etcd-localhost.localdomain                      1/1     Running   1          17h
# kube-system    pod/kube-apiserver-localhost.localdomain            1/1     Running   1          17h
# kube-system    pod/kube-controller-manager-localhost.localdomain   1/1     Running   1          17h
# kube-system    pod/kube-proxy-pg2l7                                1/1     Running   0          17h
# kube-system    pod/kube-scheduler-localhost.localdomain            1/1     Running   1          17h
#
# NAMESPACE      NAME                           TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                  AGE
# cert-manager   service/cert-manager           ClusterIP   10.96.145.183   <none>        9402/TCP                 16h
# cert-manager   service/cert-manager-webhook   ClusterIP   10.99.92.148    <none>        443/TCP                  16h
# default        service/kubernetes             ClusterIP   10.96.0.1       <none>        443/TCP                  17h
# kube-system    service/kube-dns               ClusterIP   10.96.0.10      <none>        53/UDP,53/TCP,9153/TCP   17h
#
# NAMESPACE     NAME                         DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR            AGE
# kube-system   daemonset.apps/calico-node   1         1         1       1            1           kubernetes.io/os=linux   16h
# kube-system   daemonset.apps/kube-proxy    1         1         1       1            1           kubernetes.io/os=linux   17h
#
# NAMESPACE      NAME                                      READY   UP-TO-DATE   AVAILABLE   AGE
# arc-systems    deployment.apps/arc-gha-rs-controller     0/1     1            0           16h
# cert-manager   deployment.apps/cert-manager              0/1     1            0           16h
# cert-manager   deployment.apps/cert-manager-cainjector   0/1     1            0           16h
# cert-manager   deployment.apps/cert-manager-webhook      0/1     1            0           16h
# kube-system    deployment.apps/calico-kube-controllers   1/1     1            1           16h
# kube-system    deployment.apps/coredns                   2/2     2            2           17h
#
# NAMESPACE      NAME                                                 DESIRED   CURRENT   READY   AGE
# arc-systems    replicaset.apps/arc-gha-rs-controller-7c8d7688f5     1         1         0       16h
# cert-manager   replicaset.apps/cert-manager-cainjector-5dbdc949c4   1         1         0       16h
# cert-manager   replicaset.apps/cert-manager-d68cffc95               1         1         0       16h
# cert-manager   replicaset.apps/cert-manager-webhook-759ddb6555      1         1         0       16h
# kube-system    replicaset.apps/calico-kube-controllers-564985c589   1         1         1       16h
# kube-system    replicaset.apps/calico-kube-controllers-696cbd6bfc   0         0         0       16h
# kube-system    replicaset.apps/coredns-55cb58b774                   2         2         2       17h
```

---

## <VPIcon icon="fas fa-book-atlas"/>참고

<SiteInfo
  name="Installing kubeadm"
  desc="This page shows how to install the kubeadm toolbox. For information on how to create a cluster with kubeadm once you have performed this installation process, see the Creating a cluster with kubeadm page..."
  url="https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/"
  logo="https://kubernetes.io/icons/icon-128x128.png"
  preview="https://kubernetes.io/images/kubernetes-open-graph.png"/>

<SiteInfo
  name="쿠버네티스 설치하기 (Rocky Linux)"
  desc="Rocky linux 혹은 Centos 에서 쿠버네티스 설치하기"
  url="https://velog.io/@sppolo/Kubernetes-설치하기-Rocky-Linux/"
  logo="https://static.velog.io/favicons/favicon-16x16.png"
  preview="https://images.velog.io/velog.png"/>

```component VPCard
{
  "title": "github/k8s-actions-runner",
  "desc": "Self Hosted Actions Runner On K8s: https://github.com/machine-learning-apps/self-hosted-k8s-runner",
  "link": "https://hub.docker.com/r/github/k8s-actions-runner",
  "logo": "https://hub.docker.com/favicon.ico",
  "background": "rgba(undefined,0.2)"
}
```

<SiteInfo
  name="actions-runner-controller/charts/gha-runner-scale-set-controller/values.yaml at master · actions/actions-runner-controller"
  desc="Kubernetes controller for GitHub Actions self-hosted runners - actions/actions-runner-controller"
  url="https://github.com/actions/actions-runner-controller/blob/master/charts/gha-runner-scale-set-controller/values.yaml"
  logo="https://github.githubassets.com/favicons/favicon-dark.svg"
  preview="https://opengraph.githubassets.com/4d72c382bf2a50a256d2cc042a8152da6b85f1be715b00d68da952f0cd8a52e3/actions/actions-runner-controller"/>

<SiteInfo
  name="actions-runner-controller/charts/gha-runner-scale-set/values.yaml at master · actions/actions-runner-controller"
  desc="Kubernetes controller for GitHub Actions self-hosted runners - actions/actions-runner-controller"
  url="https://github.com/actions/actions-runner-controller/blob/master/charts/gha-runner-scale-set/values.yaml"
  logo="https://github.githubassets.com/favicons/favicon-dark.svg"
  preview="https://opengraph.githubassets.com/4d72c382bf2a50a256d2cc042a8152da6b85f1be715b00d68da952f0cd8a52e3/actions/actions-runner-controller"/>

:::

<TagLinks />