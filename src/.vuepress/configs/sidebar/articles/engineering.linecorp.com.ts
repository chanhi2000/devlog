import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'engineering.linecorp.com',
  faviconPath: 'https://engineering.linecorp.com/favicon-32x32.png?v=6d6085f233d02c34273fa8a8849b502a',
  linksMap: new Map([
    ["kotlin", [
      "about-atlassian-jira-ranking-algorithm-lexorank", // 2024.01.26
    ]],[
    "lua", [
      "atomic-cache-stampede-redis-lua-script", // 2018.10.31
    ]],[
    "all", [
      "about-atlassian-jira-ranking-algorithm-lexorank", // 2024.01.26
      "atomic-cache-stampede-redis-lua-script", // 2018.10.31
    ]]
  ])
}