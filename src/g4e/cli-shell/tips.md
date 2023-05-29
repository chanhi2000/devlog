---
lang: ko-KR
title: 💡Tips
description: 🐚Shell > 💡Tips
tags: ["bash", "linux", "macos", "terminal", "date"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## User Permission

### Sudoer 등록

```sh
sudo adduser <newuser>
usermod -aG sudo <newuser>
```

---
## H/W 정보

| 명령어 | 설명 |
| :--- | :--- |
| `lscpu` | CPU 기본 정보 |
| `cat /proc/cpuinfo` | CPU 코어별 정보 출력 |
| `cat /proc/cpuinfo | egrep -i "processor" | wc -l` | CPU 코어 개수 |
| `sar` | CPU 사용률 및 상태 |
| `ps -ef | wc -l | grep -iv uid` | 프로세스 상태 개수 |
| `cat /proc/meminfo` | 메모리 정보 |
| `free -h` | 메모리 상태 (`-g` 플래그 추가 시, GB단위) |
| `df -Th | egrep -v tmpfs | sort -k6 -r` | 디스크 사용상태 |
| `df -Th | grep xfs` | 로컬볼륨 |
| `fdisk -l` | RAID 구성 여부 및 상태 |
| `cat /proc/mounts | egrep -i ro, | egrep -v "tmp|iso9660` | 디스크 내 파일 ReadOnly 상태 확인 |
| `cat /var/log/messages` | 시스템 에러 로그 (`erro`, `crit`, `warn` 이 나오지 않으면 정상) |
| `dmesg` | 부팅 로그 (`erro`, `crit`, `warn` 이 나오지 않으면 정상) |
| `ifconfig` | 네트워크 상태 |
| `cat /etc/sysconfig/network-scripts/ifcfg-eth0` | 넷마스킹 및 게이트웨이 정보 |
| `route` | 라우팅 테이블 상태 |
| `systemctl status firewalld` | 방화벽 설정 상태 |
| `systemctl is-enabled firewalld` | 방화벽 활성화 상태 |
| `netstat -anp | egrep -i list | egrep -v "unix|tcp6` | 사용가능 포트 확인 |
| `netstat -nr` | 사용가능 포트 확인 |
| `netstat -anp | grep SYN_RECV | wc -l` | SYN Flooding 공격 가능성 점검 (1000미만일 경우 정상) |
| `uptime` | 운영시간 |
| `hostname` 또는 `cat /etc/hostname` | 호스트명 |
| `cat /etc/hosts` | 모든 호스트명 |
| `cat /etc/hosts.deny` | 거부대상 호스트명 |
| `uname -a` | OS 정보 |
| `cat /etc/redhat-release` | (RHEL/CentOS/Fedora/Ubuntu Linux) OS 버전 |

---
### (For RedHat) OS 버전

```sh
OS_VERSION=$(sed 's/.*release \([0-9]\).*/\1/' /etc/redhat-release)
```

### (For RedHat) 네트워크 인터페이스명은 빼고 IP주소만 쓰고 싶을 때 사용한는 명령어

```sh
LANG=C /sbin/ifconfig | awk '/inet / {split($2,arr,":"); print arr[2]}'
```

---
## 기타

| 명령어 | 설명 |
| :--- | :--- |
| `echo $(TZ=KST+15;date +%y%m%d)` | 어제 날짜 출력 (`yyyyMMdc` 포멧) |
| `chage -l <계정명> | grep -i "^password "` | 사용자 계정 비밀번호 만료여부 |
| `chage -d <YYYY-MM-DD> <계정명>` | 사용자 계정 갱신할 일자 지정 |
| `cat /etc/ssh/sshd_config | egrep "Port|PermitRootLogin"` | root 직접접속권한 확인 |
| `cat /etc/rc.d/rc.local` | (RHEL/CentOS/Fedora/Ubuntu Linux) 부팅 시 실행하는 스크립트 |
| `cat /etc/yum.repos.d/local.repo` | 설치된 yum pm 상태 |

<TagLinks />