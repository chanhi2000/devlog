---
lang: ko-KR
title: Tips
description: Shell > Tips
icon: fas fa-lightbulb
category:
  - Shell
  - Tips
tag: 
  - bash
  - linux
  - macos
  - terminal
  - date
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## `ssh-keygen`

### <VPIcon icon="fas fa-file-lines"/>`id_rsa` 파일 생성

::: tabs

@tab:active 1

Generate SSH Key Pair

> 예: 레이블을 회사 email (*i.e.* `itcloud@ititinfo.com`) 로 지정

```sh
ssh-keygen -t rsa -b 4096 -C "itcloud@ititinfo.com"
#
# Generating public/private rsa key pair.
# Enter file in which to save the key (<HOME>/.ssh/id_rsa):
# Enter passphrase (empty for no passphrase):
# Enter same passphrase again:
# Your identification has been saved in <HOME>/.ssh/id_rsa.
# Your public key has been saved in <HOME>/.ssh/id_rsa.pub.
# The key fingerprint is:
# SHA256:9n/SUIwvLLTZBhssUJD8HTN1HB2RYG1p+aSw/g9O3po itcloud@ititinfo.com
# The key's randomart image is:
# +---[RSA 4096]----+
# |     ..+.  ..+==*|
# |      +   + o..Bo|
# |       o o + =oo.|
# |        o * o + .|
# |        So X o   |
# |       . .= B .  |
# |          .o =o  |
# |           ..+++ |
# |            .oEoo|
# +----[SHA256]-----+
```

- `-t rsa`: Specifies the type of key to create, which is RSA.
- `-b 4096`: Specifies the number of bits in the key. 4096 bits is generally considered secure.
- `-C "your_email@example.com"`: Adds a label to the key for identification.

You will be prompted to enter a file name to save the key and a passphrase. You can press Enter to accept the default file name (`id_rsa`) and leave the passphrase empty for no passphrase.

@tab 2

Copy Public Key to Remote Server

```sh
ssh-copy-id -i ~/.ssh/id_rsa.pub itcloud@ititinfo.com
```

:::

---

## User Permission

### Sudoer 등록

```sh
sudo adduser <newuser>
usermod -aG sudo <newuser>
```

---
## 유용한 커맨드 모음

```sh
uptime                                  # 운영시간

hostname                                # 호스트명
hostname -I | sed "s/\s.*$//"           # 호스트의 IP주소 (첫번째만)

uname -a                                # OS 정보

lscpu                                   # CPU 기본 정보
sar                                     # CPU 사용률 및 상태

cat /proc/cpuinfo                       # CPU 코어별 정보 출력
cat /proc/cpuinfo | egrep -i "processor" | wc -l # CPU 코어 개수
cat /proc/meminfo                       # 메모리 정보
cat /proc/mounts | egrep -i ro, | egrep -v "tmp|iso9660" # 디스크 내 파일 ReadOnly 상태 확인

ps -ef | wc -l | grep -iv uid           # 프로세스 상태 개수

free -h                                 # 메모리 상태 (`-g` 플래그 추가 시, GB단위)

df -Th | egrep -v tmpfs | sort -k6 -r   # 디스크 사용상태  
df -Th | grep xfs                       # 로컬볼륨

fdisk -l                                # RAID 구성 여부 및 상태

cat /var/log/messages                   # 시스템 에러 로그 (`erro`, `crit`, `warn` 이 나오지 않으면 정상)
cat /etc/sysconfig/network-scripts/ifcfg-eth0  # 넷마스킹 및 게이트웨이 정보
cat /etc/hostname                       # 호스트명
cat /etc/hosts                          # 모든 호스트명
cat /etc/hosts.deny                     # 거부대상 호스트명
cat /etc/redhat-release                 # (RHEL/CentOS/Fedora/Ubuntu Linux) OS 버전
cat /etc/ssh/sshd_config | egrep "Port|PermitRootLogin" # root 직접접속권한 확인
cat /etc/rc.d/rc.local                  # 부팅 시 실행하는 스크립트
cat /etc/yum.repos.d/local.repo         # 설치된 yum pm 상태 (CentOS)

dmesg                                   # 부팅 로그 (`erro`, `crit`, `warn` 이 나오지 않으면 정상)

ifconfig                                # 네트워크 상태

route                                   # 라우팅 테이블 상태

systemctl status firewalld              # 방화벽 설정 상태 (RHEL/CentOS/Fedora/Ubuntu Linux)
systemctl is-enabled firewalld          # 방화벽 활성화 상태 (RHEL/CentOS/Fedora/Ubuntu Linux)

netstat -anp | egrep -i list | egrep -v "unix|tcp6" # 사용가능 포트 확인
netstat -nr                             # 사용가능 포트 확인
netstat -anp | grep SYN_RECV | wc -l    # SYN Flooding 공격 가능성 점검 (1000미만일 경우 정상)

chage -l <계정명> | grep -i "^password " # 사용자 계정 비밀번호 만료여부
chage -d <YYYY-MM-DD> <계정명>           # 사용자 계정 갱신할 일자 지정


########## 고급 - 공통 ##########

echo $(TZ=KST+15;date +%y%m%d)          # 어제 날짜 출력 (`yyyyMMdc` 포멧)

########## 고급 - RedHat 계열 Only ##########

OS_VERSION=$(sed 's/.*release \([0-9]\).*/\1/' /etc/redhat-release) # OS 정보 

LANG=C /sbin/ifconfig | awk '/inet / {split($2,arr,":"); print arr[2]}' # 네트워크 인터페이스명은 빼고 IP주소만 쓰고 싶을 때 사용한는 명령어
```

---

<TagLinks />