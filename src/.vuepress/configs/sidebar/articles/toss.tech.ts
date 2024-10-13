
import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'toss.tech',
  faviconPath: 'https://static.toss.im/tds/favicon/favicon.ico',
  linksMap: new Map([
    [
    "js-next", [
      "ssr-server", // 2024-06-26
    ]],[
    "npm", [
      "lightning-talks-package-manager", // 2024.05.23
    ]],[
    "all", [
      "lightning-talks-package-manager", // 2024.05.23
      "ssr-server", // 2024-06-26
    ]],
  ])
}