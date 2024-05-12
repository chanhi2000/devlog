import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'kt.academy',
  faviconPath: 'https://kt.academy/logo.png',
  linksMap: new Map([
    ["kotlin", [
      "ak-static-analysis", // 2024.01.22
      "pattern-for-composing-flows", // 2024.04.18
      "network-client-threads", // 2024.05.13
    ]],[
    "java-android", [
      "ek-wrapping-api", // 2024.04.29
    ]],[
    "all", [
      "ak-static-analysis", // 2024.01.22
      "pattern-for-composing-flows", // 2024.04.18
      "ek-wrapping-api", // 2024.04.29
      "network-client-threads", // 2024.05.13
    ]]
  ])
}