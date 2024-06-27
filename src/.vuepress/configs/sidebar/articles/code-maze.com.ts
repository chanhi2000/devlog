import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'code-maze.com',
  faviconPath: '/images/content/code-maze.com/favicon.png',
  linksMap: new Map([
    [
    "csharp", [
      "what-is-continuous-integration", // 2021-10-09
      "top-8-continuous-integration-tools", // 2023-06-15
      "different-ways-consume-restful-api-csharp", // 2024-06-06
      "http-series-part-1", // 2022-07-29
      "the-http-reference", // 2020-09-04
      "http-series-part-2", // 2020-09-04
      "http-series-part-3", // 2023-07-07
      "http-authentication", // 2023-08-25
      "http-series-part-5", // 2020-09-04
      "net-core-web-development-part1", // 2024-01-31
      "net-core-web-development-part2", // 2024-03-13
      "net-core-web-development-part3", // 2024-01-31
      "top-rest-api-best-practices", // 2021-10-09
      "net-core-web-development-part4", // 2024-01-31
      "net-core-web-development-part5", // 2024-01-31
      "content-negotiation-web-api", // 2024-01-31
      "net-core-web-development-part6", // 2024-01-31
      "net-core-web-development-part7", // 2022-04-20
      "net-core-web-development-part8", // 2022-04-20
      "net-core-web-development-part9", // 2022-04-20
      "net-core-web-development-part10", // 2022-10-02
      "net-core-web-development-part11", // 2022-04-22
      "net-core-web-development-part12", // 2022-04-25
      "net-core-web-development-part13", // 2022-04-20
      "net-core-web-development-part14", // 2024-01-31
      "net-core-web-development-part15", // 2022-04-20
      "net-core-web-development-part16", // 2024-01-31
      "how-to-prepare-aspnetcore-app-dockerization", // 2020-09-02
      "net-core-web-development-part17", // 2024-02-05
      "mysql-aspnetcore-docker-compose", // 2020-09-02
      "aspnetcore-webapi-best-practices", // 2024-02-22
      "ci-aspnetcoreapp-docker", // 2020-09-02
      "create-pdf-dotnetcore", // 2024-01-31
      "csharp-getting-property-mappings-from-automapper", // 2024-04-21
    ]],[
    "js-angular", [
      "net-core-web-development-part7", // 2022-04-20
      "net-core-web-development-part8", // 2022-04-20
      "net-core-web-development-part9", // 2022-04-20
      "net-core-web-development-part10", // 2022-10-02
      "net-core-web-development-part11", // 2022-04-22
      "net-core-web-development-part12", // 2022-04-25
      "net-core-web-development-part13", // 2022-04-20
      "net-core-web-development-part14", // 2024-01-31
      "net-core-web-development-part15", // 2022-04-20
    ]],[
    "docker", [
      "why-docker-docker-cli-examples", // 2020-09-02
      "aspnetcore-app-dockerfiles", // 2020-09-02
      "mysql-aspnetcore-docker-compose", // 2020-09-02
      "docker-hub-vs-creating-docker-registry", // 2020-09-02
      "preparing-ci-environment-docker", // 2022-06-29
      "ci-aspnetcoreapp-docker", // 2020-09-02
    ]],[
    "linux-debain", [
      "net-core-web-development-part17", // 2024-02-05
    ]],[
    "nginx", [
      "net-core-web-development-part17", // 2024-02-05
    ]],[
    "mysql", [
      "net-core-web-development-part17", // 2024-02-05
      "mysql-aspnetcore-docker-compose", // 2020-09-02
    ]],[
    "all", [
      "top-8-continuous-integration-tools", // 2023-06-15
      "what-is-continuous-integration", // 2021-10-09
      "different-ways-consume-restful-api-csharp", // 2024-06-06
      "http-series-part-1", // 2022-07-29
      "the-http-reference", // 2020-09-04
      "http-series-part-2", // 2020-09-04
      "http-series-part-3", // 2023-07-07
      "http-authentication", // 2023-08-25
      "http-series-part-5", // 2020-09-04
      "net-core-web-development-part1", // 2024-01-31
      "net-core-web-development-part2", // 2024-03-13
      "net-core-web-development-part3", // 2024-01-31
      "top-rest-api-best-practices", // 2021-10-09
      "net-core-web-development-part4", // 2024-01-31
      "net-core-web-development-part5", // 2024-01-31
      "content-negotiation-web-api", // 2024-01-31
      "net-core-web-development-part6", // 2024-01-31
      "net-core-web-development-part7", // 2022-04-20
      "net-core-web-development-part8", // 2022-04-20
      "net-core-web-development-part9", // 2022-04-20
      "net-core-web-development-part10", // 2022-10-02
      "net-core-web-development-part11", // 2022-04-22
      "net-core-web-development-part12", // 2022-04-25
      "net-core-web-development-part13", // 2022-04-20
      "net-core-web-development-part14", // 2024-01-31
      "net-core-web-development-part15", // 2022-04-20
      "net-core-web-development-part16", // 2024-01-31
      "how-to-prepare-aspnetcore-app-dockerization", // 2020-09-02
      "net-core-web-development-part17", // 2024-02-05
      "why-docker-docker-cli-examples", // 2020-09-02
      "aspnetcore-app-dockerfiles", // 2020-09-02
      "mysql-aspnetcore-docker-compose", // 2020-09-02
      "docker-hub-vs-creating-docker-registry", // 2020-09-02
      "preparing-ci-environment-docker", // 2022-06-29
      "aspnetcore-webapi-best-practices", // 2024-02-22
      "ci-aspnetcoreapp-docker", // 2020-09-02
      "create-pdf-dotnetcore", // 2024-01-31
      "csharp-getting-property-mappings-from-automapper", // 2024-04-21
    ]]
  ])
}