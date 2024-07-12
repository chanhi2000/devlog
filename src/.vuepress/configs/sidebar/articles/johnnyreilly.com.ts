import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'johnnyreilly.com',
  faviconPath: 'https://johnnyreilly.com/favicon.ico',
  linksMap: new Map([
    [
    "cs", [
      "using-kernel-memory-to-chunk-documents-into-azure-ai-search", // 2024.04.21
    ]],[
    "js-node", [
      "webpack-overview", // 2024.04.06
    ]],[
    "all", [
      "webpack-overview", // 2024.04.06
      "using-kernel-memory-to-chunk-documents-into-azure-ai-search", // 2024.04.21
    ]]
  ])
}