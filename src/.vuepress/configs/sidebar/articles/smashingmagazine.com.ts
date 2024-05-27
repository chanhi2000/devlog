import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'smashingmagazine.com',
  faviconPath: 'https://smashingmagazine.com/images/favicon/favicon.svg',
  linksMap: new Map([
    [
    "sh", [
      "guide-command-line-data-manipulation-cli-miller", // 2022.12.27
    ]],[
    "js-react", [
      "forensics-react-server-components", // 2024.05.09
    ]],[
    "js-gatsby", [
      "end-of-gatsby-journey", // 2024.03.06
    ]],[
    "all", [
      "guide-command-line-data-manipulation-cli-miller", // 2022.12.27
      "end-of-gatsby-journey", // 2024.03.06
      "forensics-react-server-components", // 2024.05.09
    ]],
  ])
}