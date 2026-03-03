---
lang: ko-KR
title: Tips
description: Linux - Fedora > Tips
icon: fas fa-lightbulb
category:
  - DevOps
  - Linux
  - Fedora
  - Tips
tag: 
  - devops
  - linux
  - fedora
  - redhat
  - centos
  - yum
  - package-manager
head:
  - - meta:
    - property: og:title
      content: Linux - Fedora > Tips
    - property: og:description
      content: Tips
    - property: og:url
      content: https://chanhi2000.github.io/devops/linux-fedora/tips.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

## `uname`

```sh
uname       # 옵션이 없을 경우, -s 옵션을 사용하는 것과 동일 (i.e. 커널 이름 출력)
uname -s    # Linux
uname -a    # 모든 정보 출력
            # Linux jhpark20.novalocal 3.10.0-1160.el7.x86_64 #1 SMP Mon Oct 19 16:18:59 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
uname -n    # 네트워크 노드 호스트 이름 출력
            # jhpark20.novalocal
uname -r    # 커널 릴리즈 출력
            # 3.10.0-1160.el7.x86_64
uname -v    # 커널 버전 출력
            # #1 SMP Mon Oct 19 16:18:59 UTC 2020
uname -m    # 하드웨어 이름 출력
            # x86_64
uname -p    # 프로세서 타입 출력
            # x86_64
uname -i    # 하드웨어 플랫폼 출력
            # x86_64
uname -o    # 운영체제 출력
            # GNU/Linux
```

## `dmidecode` CPU/Memory 정보

::: details <code>-t</code> 옵션

| 번호 | 정보 |
| :--- | :--- |
| 0 | BIOS |
| 1 | System |
| 2 | Baseboard |
| 3 | Chassis |
| 4 | Processor |
| 5 | Memory Controller |
| 6 | Memory Module |
| 7 | Cache |
| 8 | Port Connector |
| 9 | System Slots |
| 10 | On Board Devices |
| 11 | OEM Strings |
| 12 | System Configuration Options |
| 13 | BIOS Language |
| 14 | Group Associations |
| 15 | System Event Log |
| 16 | Physical Memory Array |
| 17 | Memory Device |
| 18 | 32-bit Memory Error |
| 19 | Memory Array Mapped Address |
| 20 | Memory Device Mapped Address |
| 21 | Built-in Pointing Device |
| 22 | Portable Battery |
| 23 | System Reset |
| 24 | Hardware Security |
| 25 | System Power Controls |
| 26 | Voltage Probe |
| 27 | Cooling Device |
| 28 | Temperature Probe |
| 29 | Electrical Current Probe |
| 30 | Out-of-band Remote Access |
| 31 | Boot Integrity Services |
| 32 | System Boot |
| 33 | 64-bit Memory Error |
| 34 | Management Device |
| 35 | Management Device Component |
| 36 | Management Device Threshold Data |
| 37 | Memory Channel |
| 38 | IPMI Device |
| 39 | Power Supply |
| 40 | Additional Information |
| 41 | Onboard Devices Extended Information |
| 42 | Management Controller Host Interface |

:::

::: tabs

@tab:active CPU

```sh
dmidecode -t bios
#
# dmidecode 3.3
# Getting SMBIOS data from sysfs.
# SMBIOS 2.8 present.
# 
# Handle 0x0000, DMI type 0, 24 bytes
# BIOS Information
#         Vendor: SeaBIOS
#         Version: 1.16.1-1.el9
#         Release Date: 04/01/2014
#         Address: 0xE8000
#         Runtime Size: 96 kB
#         ROM Size: 64 kB
#         Characteristics:
#                 BIOS characteristics not supported
#                 Targeted content distribution is supported
#         BIOS Revision: 0.0
dmidecode -t processor
#
# dmidecode 3.2
# Getting SMBIOS data from sysfs.
# SMBIOS 2.8 present.
# 
# Handle 0x0400, DMI type 4, 42 bytes
# Processor Information
#         Socket Designation: CPU 0
#         Type: Central Processor
#         Family: Other
#         Manufacturer: Red Hat
#         ID: 12 0F 80 00 FF FB 8B 07
#         Version: RHEL 7.6.0 PC (i440FX + PIIX, 1996)
#         Voltage: Unknown
#         External Clock: Unknown
#         Max Speed: 2000 MHz
#         Current Speed: 2000 MHz
#         Status: Populated, Enabled
#         Upgrade: Other
#         L1 Cache Handle: Not Provided
#         L2 Cache Handle: Not Provided
#         L3 Cache Handle: Not Provided
#         Serial Number: Not Specified
#         Asset Tag: Not Specified
#         Part Number: Not Specified
#         Core Count: 1
#         Core Enabled: 1
#         Thread Count: 1
#         Characteristics: None
```

@tab Memory

```sh
dmidecode -t memory
#
# dmidecode 3.3
# Getting SMBIOS data from sysfs.
# SMBIOS 2.8 present.

# Handle 0x1000, DMI type 16, 23 bytes
# Physical Memory Array
#         Location: Other
#         Use: System Memory
#         Error Correction Type: Multi-bit ECC
#         Maximum Capacity: 32 GB
#         Error Information Handle: Not Provided
#         Number Of Devices: 2

# Handle 0x1100, DMI type 17, 40 bytes
# Memory Device
#         Array Handle: 0x1000
#         Error Information Handle: Not Provided
#         Total Width: Unknown
#         Data Width: Unknown
#         Size: 16 GB
#         Form Factor: DIMM
#         Set: None
#         Locator: DIMM 0
#         Bank Locator: Not Specified
#         Type: RAM
#         Type Detail: Other
#         Speed: Unknown
#         Manufacturer: Red Hat
#         Serial Number: Not Specified
#         Asset Tag: Not Specified
#         Part Number: Not Specified
#         Rank: Unknown
#         Configured Memory Speed: Unknown
#         Minimum Voltage: Unknown
#         Maximum Voltage: Unknown
#         Configured Voltage: Unknown

# Handle 0x1101, DMI type 17, 40 bytes
# Memory Device
#         Array Handle: 0x1000
#         Error Information Handle: Not Provided
#         Total Width: Unknown
#         Data Width: Unknown
#         Size: 16 GB
#         Form Factor: DIMM
#         Set: None
#         Locator: DIMM 1
#         Bank Locator: Not Specified
#         Type: RAM
#         Type Detail: Other
#         Speed: Unknown
#         Manufacturer: Red Hat
#         Serial Number: Not Specified
#         Asset Tag: Not Specified
#         Part Number: Not Specified
#         Rank: Unknown
#         Configured Memory Speed: Unknown
#         Minimum Voltage: Unknown
#         Maximum Voltage: Unknown
#         Configured Voltage: Unknown
```

:::

## `df` 디스크 정보

```sh
df -h    # 읽기 쉬운 형태로 출력
#
# Filesystem                  Size  Used Avail Use% Mounted on
# devtmpfs                     16G     0   16G   0% /dev
# tmpfs                        16G   24K   16G   1% /dev/shm
# tmpfs                        16G  137M   16G   1% /run
# tmpfs                        16G     0   16G   0% /sys/fs/cgroup
# /dev/mapper/rutilvm-root     47G  5.8G   42G  13% /
# /dev/mapper/rutilvm-home   1014M   40M  975M   4% /home
# /dev/mapper/rutilvm-var      53G  3.7G   50G   7% /var
# /dev/mapper/rutilvm-vartmp  2.0G   47M  2.0G   3% /var/tmp
# /dev/mapper/rutilvm-log      30G  494M   30G   2% /var/log
# /dev/vda1                  1014M  241M  774M  24% /boot
# /dev/mapper/rutilvm-tmp     2.0G  897M  1.2G  44% /tmp
# /dev/mapper/rutilvm-audit  1014M   45M  970M   5% /var/log/audit
# overlay                      53G  3.7G   50G   7% /var/lib/docker/overlay2/f4fb66660bdd6dad5865777e7dc646bbe13b0e8cf2b28f47cd22e3329bdd3d6e/merged
# tmpfs                       3.2G     0  3.2G   0% /run/user/0
```

## `ethtool` 네트워크 정보

```sh
ethtool eth0
#
# Settings for eth0:
#         Supported ports: [  ]
#         Supported link modes:   Not reported
#         Supported pause frame use: No
#         Supports auto-negotiation: No
#         Supported FEC modes: Not reported
#         Advertised link modes:  Not reported
#         Advertised pause frame use: No
#         Advertised auto-negotiation: No
#         Advertised FEC modes: Not reported
#         Speed: Unknown!
#         Duplex: Unknown! (255)
#         Auto-negotiation: off
#         Port: Other
#         PHYAD: 0
#         Transceiver: internal
#         Link detected: yes
```

---

## Reduce Swappiness (Optimize Swap Usage)

Swappiness controls how often the system uses swap space instead of RAM. A high swappiness value can lead to excessive swapping, slowing down your system.

To check the current swappiness value:


---

<TagLinks />
