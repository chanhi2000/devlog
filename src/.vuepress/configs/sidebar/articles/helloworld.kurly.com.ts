import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
    name: 'helloworld.kurly.com',
    faviconPath: 'https://helloworld.kurly.com/assets/logo/ico_192.png',
    linksMap: new Map([
    [
    "java-spring", [
      "commit-mvcc-set-autocommit", // 2024-06-13
    ]],[
    "k8s", [
      "cart-recommend-model-development-second", // 2024-05-27
    ]],[
    "gcp", [
      "bigquery-gemini-review", // 2024-07-25
    ]],[
    "system-design", [
      "cart-recommend-model-development", // 2024-05-20
      "cart-recommend-model-development-second", // 2024-05-27
    ]],[
    "llm", [
      "cart-recommend-model-development", // 2024-05-20
    ]],[
    "gemini", [
      "bigquery-gemini-review", // 2024-07-25
    ]],[
    "all", [
      "cart-recommend-model-development", // 2024-05-20
      "cart-recommend-model-development-second", // 2024-05-27
      "commit-mvcc-set-autocommit", // 2024-06-13
      "bigquery-gemini-review", // 2024-07-25
    ]],
  ]),
}