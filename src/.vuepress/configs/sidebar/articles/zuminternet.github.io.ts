import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'zuminternet.github.io',
  faviconPath: 'https://zuminternet.github.io/favicon.ico',
  linksMap: new Map([
    [
    "swift", [
      "ios-tuist-module", // 2023.03.24
    ]],[
    "java-spring", [
      "fcm-push", // 2023.07.06.
      "spring-session", // 2023.07.07.
      "redirect-fcm-push", // 2023.07.11
    ]],[
    "js-react", [
      "real-estate-data-visualization", // 2023.03.18
    ]],[
    "js-vue", [
      "zum-chrome-extension", // 2020.09.11
    ]],[
      "js-supabase", [
      "fcm-push", // 2023.07.06.
      "redirect-fcm-push", // 2023.07.11
    ]],[
    "redis", [
      "spring-session", // 2023.07.07.
    ]],[
    "chrome", [
      "zum-chrome-extension", // 2020.09.11
    ]],[
    "all", [       
      "zum-chrome-extension", // 2020.09.11
      "real-estate-data-visualization", // 2023.03.18
      "ios-tuist-module", // 2023.03.24
      "fcm-push", // 2023.07.06.
      "spring-session", // 2023.07.07.
      "redirect-fcm-push", // 2023.07.11
    ]]
  ])
}