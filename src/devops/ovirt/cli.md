---
lang: ko-KR
title: CLI
description: oVirt > CLI
icon: fas fa-terminal
category:
  - DevOps
  - oVirt
  - CLI
tag: 
  - devops
  - ovirt
  - fedora
  - bash
  - sh
  - ovirt
  - cli
head:
  - - meta:
    - property: og:title
      content: oVirt > CLI
    - property: og:description
      content: CLI
    - property: og:url
      content: https://chanhi2000.github.io/devops/ovirt/cli.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## `hosted-engine`

### NAME

`hosted-engine` - Tools for handling hosted engine

### SYNOPSIS

```sh
hosted-engine [--help] <command> [<command-args>]
```

### DESCRIPTION

The hosted-engine command deploys a virtual machine that you can install oVirt Open Virtualization Manager on to. The Manager installation on your hosted-engine virtual machine can manage the host it is running on. The hosted-engine command can also be used to start, stop and access the hosted-engine virtual machine.


### OPTIONS

| flag | description |
| :--: | :--- |
| `--help` | Show the help message and exit. |
| `--deploy [options]` | Run the `ovirt-hosted-engine-setup` command to deploy the hosted-engine virtual machine. |
| `--vm-start [--vm-conf=<file>]` | Start VM on this host. `--vm-conf=<file>` can be optionally used to load an alternative `vm.conf` file as a recovery action. |
| `--vm-start-paused` | Start VM on this host with qemu paused. |
| `--vm-shutdown` | Gracefully shutdown the VM on this host. |
| `--vm-poweroff` | Forcefully poweroff the VM on this host. |
| `--vm-status [--json]` | Show the VM status, in machine-readable format if `--json` is given. |
| `--add-console-password [--password=<password>]` | Create a temporary password for VNC/SPICE connections to the hosted-engine virtual machine. |
| `--console` | Open the configured console using `virsh` on localhost. |
| `--check-deployed` | Checks whether the hosted engine has been deployed. |
| `--check-liveliness` | Checks liveliness page of engine. |
| `--connect-storage` | Manually connect the storage domain to the local VDSM instance. |
| `--set-maintenance --mode=<mode>` | Set maintenance status to the specified mode:<br/><ul><li>`global` - Allow the administrator to start/stop/modify the engine VM without any worry of interference from the HA agents.</li><li>`local` - Allow the administrator to maintain this host. Note that if you have only 2 nodes and one is in maintenance, there is only one host available to run the engine VM.</li><li>`none` - Resume HA functionality.</li></ul> |
| `--clean_metadata [--force-cleanup] [--host-id=<id>]` | Remove host's metadata from the global status database. |
| `--reinitialize-lockspace [--force]` | Reinitialize the sanlock lockspace file. This WIPES all locks. |
| `--upgrade-appliance` | Upgrade the engine appliance.
| `--rollback-upgrade` | Rollback using a backup saved in a previous upgrade attempt. |

### EXAMPLES

::: tabs

@tab:active Basic Usages

```sh :collapsed-lines
hosted-engine --vm-status
# !! Cluster is in GLOBAL MAINTENANCE mode !!
# 
# 
# 
# --== Host on20-host02 (id: 1) status ==--
# 
# Host ID                            : 1
# Host timestamp                     : 15233
# Score                              : 3400
# Engine status                      : {"vm": "up", "health": "good", "detail": "Up"}
# Hostname                           : on20-host02
# Local maintenance                  : False
# stopped                            : False
# crc32                              : 460020d4
# conf_on_shared_storage             : True
# local_conf_timestamp               : 15233
# Status up-to-date                  : True
# Extra metadata (valid at timestamp):
# 	metadata_parse_version=1
# 	metadata_feature_version=1
# 	timestamp=15233 (Mon Mar  6 21:29:16 2023)
# 	host-id=1
# 	score=3400
# 	vm_conf_refresh_time=15233 (Mon Mar  6 21:29:16 2023)
# 	conf_on_shared_storage=True
# 	maintenance=False
# 	state=GlobalMaintenance
# 	stopped=False
# 
# 
# --== Host on20-host01 (id: 2) status ==--
# 
# Host ID                            : 2
# Host timestamp                     : 15253
# Score                              : 3400
# Engine status                      : {"vm": "down", "health": "bad", "detail": "unknown", "reason": "vm not running on this host"}
# Hostname                           : on20-host01
# Local maintenance                  : False
# stopped                            : False
# crc32                              : 231e0e5c
# conf_on_shared_storage             : True
# local_conf_timestamp               : 15253
# Status up-to-date                  : True
# Extra metadata (valid at timestamp):
# 	metadata_parse_version=1
# 	metadata_feature_version=1
# 	timestamp=15253 (Mon Mar  6 21:29:27 2023)
# 	host-id=2
# 	score=3400
# 	vm_conf_refresh_time=15253 (Mon Mar  6 21:29:27 2023)
# 	conf_on_shared_storage=True
# 	maintenance=False
# 	state=GlobalMaintenance
# 	stopped=False
# 
# 
# !! Cluster is in GLOBAL MAINTENANCE mode !!
```

@tab Other

```sh
hosted-engine --vm-status | more
watch -n 1 hosted-engine --vm-status
dmidecode -t memory
dmidecode -t processor
```

:::

---

## 기타

| 명령어 | 설명 |
| :--- | :--- |
| `virt-what` | 무엇으로 가상화 되어 있는지 알려줌 |
| `dmidecode -s system-product-name` | (RHEL/CentOS/Fedora/Ubuntu Linux) DMI 유형 |

<TagLinks />