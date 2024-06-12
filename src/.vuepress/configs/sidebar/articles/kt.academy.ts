import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'kt.academy',
  faviconPath: 'https://kt.academy/logo.png',
  linksMap: new Map([
    [
    "kotlin", [
      "ak-static-analysis", // 2024-01-22
      "cc-cancellation", // 2024-03-11
      "kfde-generics", // 2024-03-18
      "pattern-for-composing-flows", // 2024-04-18
      "ek-element-visibility", // 2024-05-06
      "ek-api-stability", // 2024-05-13
      "network-client-threads", // 2024-05-13
      "var-readonly-vs-val-mutable", // 2024-06-10
      "union-types-into", // 2024-06-10
    ]],[
    "kotlin-spring", [
      "nonblocking-spring-mvc", // 2024-03-25
    ]],[
    "kotlin-android", [
      "ek-wrapping-api", // 2024-04-29
    ]],[
    "all", [
      "ak-static-analysis", // 2024-01-22
      "cc-cancellation", // 2024-03-11
      "kfde-generics", // 2024-03-18
      "nonblocking-spring-mvc", // 2024-03-25
      "pattern-for-composing-flows", // 2024-04-18
      "ek-wrapping-api", // 2024-04-29
      "ek-element-visibility", // 2024-05-06
      "ek-api-stability", // 2024-05-13
      "network-client-threads", // 2024-05-13
      "var-readonly-vs-val-mutable", // 2024-06-10
      "union-types-into", // 2024-06-10
    ]]
  ])
}