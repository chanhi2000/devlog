---
lang: ko-KR
title: Bash > 💡Tips
description: Bash > 💡Tips
tags: ["bash", "linux", "macos", "terminal", "date"]
---

# {{ $frontmatter.description }} 관련

[[toc]]

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
| `fdisk -l` | RAID 구성 여부 및 상태 |
| `cat /proc/mounts | egrep -i ro, | egrep -v "tmp|iso9660` | 디스크 내 파일 ReadOnly 상태 확인 |
| `cat /var/log/messages` | 시스템 에러 로그 (`erro`, `crit`, `warn` 이 나오지 않으면 정상) |
| `dmesg` | 부팅 로그 (`erro`, `crit`, `warn` 이 나오지 않으면 정상) |
| `ifconfig` | 네트워크 상태 |
| `route` | 라우팅 테이블 상태 |
| `systemctl status firewalld` | 방화벽 설정 상태 |
| `systemctl is-enabled firewalld` | 방화벽 활성화 상태 |
| `netstat -an` | 사용가능 포트 확인 |
| `netstat -nr` | 사용가능 포트 확인 |
| `netstat -an | grep SYN_RECV | wc -l` | SYN Flooding 공격 가능성 점검 (1000미만일 경우 정상) |
| `uptime` | 운영시간 |
| `hostname` | 호스트명 |
| `cat /etc/redhat-release` | (Red Hat OS에만 해당) OS 버전 |


---
## 기타

| 명령어 | 설명 |
| :--- | :--- |

| `echo $(TZ=KST+15;date +%y%m%d)` | 어제 날짜 출력 (`yyyyMMdc` 포멧) |

<TagLinks />