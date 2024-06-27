import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'popit.kr',
  faviconPath: 'https://popit.kr/wp-content/uploads/2016/08/favicon_32x32.png',
  linksMap: new Map([
    [
    "java", [
      "java-vs-go-1", // 2018-02-22
    ]],[
    "java-kafka", [
      "about-kraft-kafkas-new-consensus-protocol-1", // 2024.03.26
      "about-kraft-kafkas-new-consensus-protocol-2", // 2024.03.29
    ]],[
    "java-elasticsearch", [
      "elastic-keyword-field-ignore-above", // 2023.10.12
      "data-visualization-easy-peasy", // 2024.04.13
    ]],[
    "go", [
      "java-vs-go-1", // 2018-02-22
      "apply-etag-cache-to-rest-service-made-with-go", // 2023.02.08
    ]],[
    "spark", [
      "spark-text-data-source-supports-only-a-single-column-and-you-have-2-columns-error", // 2024.01.12
    ]],[
    "all", [ 
      "java-vs-go-1", // 2018-02-22
      "apply-etag-cache-to-rest-service-made-with-go", // 2023.02.08
      "elastic-keyword-field-ignore-above", // 2023.10.12
      "spark-text-data-source-supports-only-a-single-column-and-you-have-2-columns-error", // 2024.01.12
      "about-kraft-kafkas-new-consensus-protocol-1", // 2024.03.26
      "about-kraft-kafkas-new-consensus-protocol-2", // 2024.03.29
      "data-visualization-easy-peasy", // 2024.04.13
    ]]
  ])
}