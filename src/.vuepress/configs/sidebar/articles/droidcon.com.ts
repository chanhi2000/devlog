import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'droidcon.com',
  faviconPath: 'https://www.droidcon.com/wp-content/uploads/2021/07/favicon-300x300.png',
  linksMap: new Map([
    [
    "kotlin", [
      "how-suspend-functions-work-in-kotlin-under-the-hood", // 2024-04-25
    ]],[
    "kotlin-android", [
      "writing-swift-friendly-kotlin-multiplatform-apis-part-ix-flow", // 2023-09-14
      "introducing-iris-mock-an-easier-way-to-mock-network-calls-on-android", // 2023-10-22
      "publishing-kotlin-multiplatform-libraries-with-sonatype-central", // 2024-04-18
    ]],[
    "nexus", [
      "publishing-kotlin-multiplatform-libraries-with-sonatype-central", // 2024-04-18
    ]],[
    "all", [
      "writing-swift-friendly-kotlin-multiplatform-apis-part-ix-flow", // 2023-09-14
      "introducing-iris-mock-an-easier-way-to-mock-network-calls-on-android", // 2023-10-22
      "publishing-kotlin-multiplatform-libraries-with-sonatype-central", // 2024-04-18
      "how-suspend-functions-work-in-kotlin-under-the-hood", // 2024-04-25
    ]]
  ])
}