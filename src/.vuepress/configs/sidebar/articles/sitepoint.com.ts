import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'sitepoint.com',
  faviconPath: 'https://www.sitepoint.com/favicons/512x512.png',
  linksMap: new Map([
    [
    "js", [
      "new-javascript-ecmascript", // 2024.03.12
    ]], [
    "js-react", [
      "react-router-complete-guide", // 2023-11-07
    ]], [
    "css", [
    "css-subgrid-align-column-rows", // 2024.03.26
      "css-logical-properties-guide", // 2024.04.04
      "css-animate-text-gradients-patterns", // 2024.04.11
      "fluid-typography-css-clamp-function", // 2024.04.23
    ]], [
    "all", [
      "react-router-complete-guide", // 2023-11-07
      "new-javascript-ecmascript", // 2024.03.12
      "css-subgrid-align-column-rows", // 2024.03.26
      "css-logical-properties-guide", // 2024.04.04
      "css-animate-text-gradients-patterns", // 2024.04.11
      "fluid-typography-css-clamp-function", // 2024.04.23
    ]]
  ])
}