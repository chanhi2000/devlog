---
lang: ko-KR
title: CLI
description: oVirt > CLI
icon: fas fa-terminal
category:
  - oVirt
  - CLI
tag: 
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

```sh
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

## `firewall-cmd`

### NAME

`firewall-cmd` - firewalld command line client

### SYNOPSIS

```sh
firewall-cmd [OPTIONS...]
```

### DESCRIPTION

`firewall-cmd` is the command line client of the firewalld daemon. It provides interface to manage runtime and permanent
configuration.

The runtime configuration in firewalld is separated from the permanent configuration. This means that things can get changed in
the runtime or permanent configuration.

### OPTIONS

For sequence options, this are the options that can be specified multiple times, the exit code is 0 if there is at least one item
that succeded. The `ALREADY_ENABLED` (11), `NOT_ENABLED` (12) and also `ZONE_ALREADY_SET` (16) errors are treated as succeeded. If there
are issues while parsing the items, then these are treated as warnings and will not change the result as long as there is a
succeeded one. Without any succeeded item, the exit code will depend on the error codes. If there is exactly one error code, then
this is used. If there are more than one then `UNKNOWN_ERROR` (254) will be used.

The following options are supported:

| flag | description |
| :--: | :--- |
| `-h`, `--help` | Prints a short help text and exits. |
| `-V`, `--version` | Print the version string of firewalld. This option is not combinable with other options. | 
| `-q`, `--quiet` | Do not print status messages. |
| `--state` | Check whether the firewalld daemon is active (i.e. running). Returns an exit code 0 if it is active,<br/>`RUNNING_BUT_FAILED` if failure occurred on startup, `NOT_RUNNING` otherwise.<br/>See the section called “EXIT CODES”. This will also print the state to `STDOUT`. |
| `--reload` | Reload firewall rules and keep state information. Current permanent configuration will become new runtime configuration,<br/>_i.e._ all runtime only changes done until reload are lost with reload if they have not been also in permanent configuration. <br/> __Note__: Runtime changes applied via the direct interface are not affected and will therefore stay in place until `firewalld` daemon is restarted completely. |
| `--complete-reload` | Reload firewall completely, even netfilter kernel modules. This will most likely terminate active connections, because state information is lost. This option should only be used in case of severe firewall problems. For example if there are state information problems that no connection can be established with correct firewall rules.<br/> __Note__: Runtime changes applied via the direct interface are not affected and will therefore stay in place until firewalld
daemon is restarted completely.
| `--runtime-to-permanent` | Save active runtime configuration and overwrite permanent configuration with it. The way this is supposed to work is that when configuring firewalld you do runtime changes only and once you're happy with the configuration and you tested that it works the way you want, you save the configuration to disk. |
| `--check-config` | Run checks on the permanent configuration. This includes XML validity and semantics. |
| `--get-log-denied` | Print the log denied setting. |
| `--set-log-denied=value` | Add logging rules right before reject and drop rules in the INPUT, FORWARD and OUTPUT chains for the default rules and also final reject and drop rules in zones for the configured link-layer packet type. The possible values are: all, unicast, broadcast, multicast and off. The default setting is off, which disables the logging.<br/> This is a runtime and permanent change and will also reload the firewall to be able to add the logging rules.
| `--get-automatic-helpers` | Print the automatic helpers setting. |
| `--set-automatic-helpers=value` |
           For the secure use of iptables and connection tracking helpers it is recommended to turn AutomaticHelpers off. But this might
           have side effects on other services using the netfilter helpers as the sysctl setting in
           /proc/sys/net/netfilter/nf_conntrack_helper will be changed. With the system setting, the default value set in the kernel or
           with sysctl will be used. Possible values are: yes, no and system. The default value is system.

           This is a runtime and permanent change and will also reload the firewall to be able to make the helpers usable.

   Permanent Options
       --permanent
           The permanent option --permanent can be used to set options permanently. These changes are not effective immediately, only
           after service restart/reload or system reboot. Without the --permanent option, a change will only be part of the runtime
           configuration.

           If you want to make a change in runtime and permanent configuration, use the same call with and without the --permanent
           option.

           The --permanent option can be optionally added to all options further down where it is supported.		   
---

## 기타

| 명령어 | 설명 |
| :--- | :--- |
| `virt-what` | 무엇으로 가상화 되어 있는지 알려줌 |
| `dmidecode -s system-product-name` | (RHEL/CentOS/Fedora/Ubuntu Linux) DMI 유형 |

<TagLinks />