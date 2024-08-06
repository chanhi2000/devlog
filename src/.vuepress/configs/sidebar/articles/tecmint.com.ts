
import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'tecmint.com',
  faviconPath: 'https://tecmint.com/wp-content/uploads/2020/07/favicon.icon',
  linksMap: new Map([
    [
    "sh", [
      'bashtop-linux-resource-monitoring-tool', // 2020-08-07
      'create-nginx-server-blocks-in-centos', // 2022-02-07
      'install-security-updates-in-ubuntu', // 2022-02-07
      'synchronize-time-with-ntp-in-linux', // 2022-11-15
      'mtr-a-network-diagnostic-tool-for-linux', // 2023-07-13
      'whowatch-monitor-linux-users-and-processes-in-real-time', // 2023-07-14
    ]],[
    "windows", [
      'install-windows-subsystem-for-linux', // 2020-09-18
    ]],[
    "linux-debian", [
      'bashtop-linux-resource-monitoring-tool', // 2020-08-07
      'install-windows-subsystem-for-linux', // 2020-09-18
      'install-security-updates-in-ubuntu', // 2022-02-07
      'synchronize-time-with-ntp-in-linux', // 2022-11-15
      'mtr-a-network-diagnostic-tool-for-linux', // 2023-07-13
      'whowatch-monitor-linux-users-and-processes-in-real-time', // 2023-07-14
    ]],[
    "linux-fedora", [
      'bashtop-linux-resource-monitoring-tool', // 2020-08-07
      'create-nginx-server-blocks-in-centos', // 2022-02-07
      'synchronize-time-with-ntp-in-linux', // 2022-11-15
      'mtr-a-network-diagnostic-tool-for-linux', // 2023-07-13
      'whowatch-monitor-linux-users-and-processes-in-real-time', // 2023-07-14
    ]],[
    "nginx", [
      'create-nginx-server-blocks-in-centos', // 2022-02-07
    ]],[
    "all", [
      'bashtop-linux-resource-monitoring-tool', // 2020-08-07
      'install-windows-subsystem-for-linux', // 2020-09-18
      'create-nginx-server-blocks-in-centos', // 2022-02-07
      'install-security-updates-in-ubuntu', // 2022-02-07
      'synchronize-time-with-ntp-in-linux', // 2022-11-15
      'mtr-a-network-diagnostic-tool-for-linux', // 2023-07-13
      'whowatch-monitor-linux-users-and-processes-in-real-time', // 2023-07-14
    ]],
  ])
}