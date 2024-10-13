import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'blog.kotzilla.io',
  faviconPath: 'https://blog.kotzilla.io/hubfs/favicon.png',
  linksMap: new Map([
    [
    "java", [
    ]],[
    "kotlin-android", [
      'lazy-modules-in-kotlin-with-koin', // 2024-04-16
      'migrate-from-hilt-to-koin', // 2024-07-23
    ]],[
    "all", [
      'lazy-modules-in-kotlin-with-koin', // 2024-04-16
      'migrate-from-hilt-to-koin', // 2024-07-23
    ]],
  ]),
}