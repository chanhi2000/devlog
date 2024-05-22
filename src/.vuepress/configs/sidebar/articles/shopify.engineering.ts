import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'shopify.engineering',
  faviconPath: 'https://cdn.shopify.com/static/shopify-favicon.png',
  linksMap: new Map([
    [
    "gradle", [
      "managing-native-code-react-native", // 2024.04.16
    ]],[
    "py-airflow", [
      "lessons-learned-apache-airflow-scale", // 2022.03.23
    ]],[
    "all", [
      "lessons-learned-apache-airflow-scale", // 2022.03.23
      "managing-native-code-react-native", // 2024.04.16      
    ]]
  ])
}