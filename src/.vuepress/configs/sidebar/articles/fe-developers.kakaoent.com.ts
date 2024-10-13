import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'fe-developers.kakaoent.com',
  faviconPath: 'https://fe-developers.kakaoent.com/favicon-32x32.png?v=44803cb16c1e2debd3984cf2e8cb2ded',
  linksMap: new Map([
    [
    "js-node", [
      "230612-aws-amplify-serverless", // 2023-06-22
      "230816-backstopjs-vrt2", // 2023-09-01
    ]],[
    "js-react", [
      "230720-react-query", // 2023-07-20
      "240116-common-component", // 2024-01-16
      "240715-handling-file-variables", // 2024-07-15
    ]],[
    "js-next", [
      "240418-optimizing-nextjs-cache", // 2024-05-03
    ]],[
    "aws", [
      "230612-aws-amplify-serverless", // 2023-06-22
    ]],[
    "all", [
      "230612-aws-amplify-serverless", // 2023-06-22
      "230720-react-query", // 2023-07-20
      "230816-backstopjs-vrt2", // 2023-09-01
      "240116-common-component", // 2024-01-16
      "240418-optimizing-nextjs-cache", // 2024-05-03
      "240715-handling-file-variables", // 2024-07-15
    ]],
  ]),
}