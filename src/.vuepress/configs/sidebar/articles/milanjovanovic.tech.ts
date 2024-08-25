import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'milanjovanovic.tech',
  faviconPath: 'https://milanjovanovic.tech/profile_favicon.png',
  linksMap: new Map([
    [
    "cs", [
      "5-awesome-csharp-refactoring-tips", // 2023-11-25
      "global-error-handling-in-aspnetcore-8", // 2023-12-02
      "modular-monolith-data-isolation", // 2023-12-09
      "5-serilog-best-practices-for-better-structured-logging", // 2023-12-16
      "value-objects-in-dotnet-ddd-fundamentals", // 2023-12-23
      "api-versioning-in-aspnetcore", // 2023-12-30
      "using-masstransit-with-rabbitmq-and-azure-service-bus", // 2024-01-06
      "extending-httpclient-with-delegating-handlers-in-aspnetcore", // 2024-01-13
      "balancing-cross-cutting-concerns-in-clean-architecture", // 2024-01-20
      "how-to-build-a-url-shortener-with-dotnet", // 2024-01-27
      "how-i-made-my-efcore-query-faster-with-batching", // 2024-02-03
      "getting-the-current-user-in-clean-architecture", // 2024-02-10
      "using-scoped-services-from-singletons-in-aspnetcore", // 2024-02-17
      "automatically-register-minimal-apis-in-aspnetcore", // 2024-02-24
      "lightweight-in-memory-message-bus-using-dotnet-channels", // 2024-03-02
      "implementing-soft-delete-with-ef-core", // 2024-03-16
      "fast-sql-bulk-inserts-with-csharp-and-ef-core", // 2024-03-23
      "horizontally-scaling-aspnetcore-apis-with-yarp-load-balancing", // 2024-03-30
      "master-claims-transformation-for-flexible-aspnetcore-authorization", // 2024-04-06
      "a-clever-way-to-implement-pessimistic-locking-in-ef-core", // 2024-04-13
      "introduction-to-distributed-tracing-with-opentelemetry-in-dotnet", // 2024-04-20
      "request-response-messaging-pattern-with-masstransit", // 2024-04-27
      "implementing-api-gateway-authentication-with-yarp", // 2024-05-04
      "building-resilient-cloud-applications-with-dotnet", // 2024-05-11
      "efcore-migrations-a-detailed-guide", // 2024-05-18
      "shift-left-with-architecture-testing-in-dotnet", // 2024-05-25
      "vertical-slice-architecture-structuring-vertical-slices", // 2024-06-01
      "caching-in-aspnetcore-improving-application-performance", // 2024-06-08
      "from-transaction-scripts-to-domain-models-a-refactoring-journey", // 2024-06-15
      "what-you-need-to-know-about-ef-core-bulk-updates", // 2024-06-22
      "service-discovery-in-microservices-with-net-and-consul", // 2024-07-06
      "building-your-first-use-case-with-clean-architecture", // 2024-07-13
      "testing-modular-monoliths-system-integration-testing", // 2024-07-20
      "simple-messaging-in-dotnet-with-redis-pubsub", // 2024-07-27
      "improving-code-quality-in-csharp-with-static-code-analysis", // 2024-08-03
      "5-ef-core-features-you-need-to-know", // 2024-08-10
    ]],[
    "cs-razor", [
      "flexible-pdf-reporting-in-net-using-razor-views", // 2024-06-29
    ]],[
    "js-node", [
      "horizontally-scaling-aspnetcore-apis-with-yarp-load-balancing", // 2024-03-30
    ]],[
    "docker", [
      "horizontally-scaling-aspnetcore-apis-with-yarp-load-balancing", // 2024-03-30
      "simple-messaging-in-dotnet-with-redis-pubsub", // 2024-07-27
    ]],[
    "redis", [
      "caching-in-aspnetcore-improving-application-performance", // 2024-06-08
      "simple-messaging-in-dotnet-with-redis-pubsub", // 2024-07-27
    ]],[
    "system-design", [
      "what-is-a-modular-monolith", // 2024-03-09
    ]],[
    "all", [
      "5-awesome-csharp-refactoring-tips", // 2023-11-25
      "global-error-handling-in-aspnetcore-8", // 2023-12-02
      "modular-monolith-data-isolation", // 2023-12-09
      "5-serilog-best-practices-for-better-structured-logging", // 2023-12-16
      "value-objects-in-dotnet-ddd-fundamentals", // 2023-12-23
      "api-versioning-in-aspnetcore", // 2023-12-30
      "using-masstransit-with-rabbitmq-and-azure-service-bus", // 2024-01-06
      "extending-httpclient-with-delegating-handlers-in-aspnetcore", // 2024-01-13
      "balancing-cross-cutting-concerns-in-clean-architecture", // 2024-01-20
      "how-to-build-a-url-shortener-with-dotnet", // 2024-01-27
      "how-i-made-my-efcore-query-faster-with-batching", // 2024-02-03
      "getting-the-current-user-in-clean-architecture", // 2024-02-10
      "using-scoped-services-from-singletons-in-aspnetcore", // 2024-02-17
      "automatically-register-minimal-apis-in-aspnetcore", // 2024-02-24
      "lightweight-in-memory-message-bus-using-dotnet-channels", // 2024-03-02
      "what-is-a-modular-monolith", // 2024-03-09
      "implementing-soft-delete-with-ef-core", // 2024-03-16
      "fast-sql-bulk-inserts-with-csharp-and-ef-core", // 2024-03-23
      "horizontally-scaling-aspnetcore-apis-with-yarp-load-balancing", // 2024-03-30
      "master-claims-transformation-for-flexible-aspnetcore-authorization", // 2024-04-06
      "a-clever-way-to-implement-pessimistic-locking-in-ef-core", // 2024-04-13
      "introduction-to-distributed-tracing-with-opentelemetry-in-dotnet", // 2024-04-20
      "request-response-messaging-pattern-with-masstransit", // 2024-04-27
      "implementing-api-gateway-authentication-with-yarp", // 2024-05-04
      "building-resilient-cloud-applications-with-dotnet", // 2024-05-11
      "efcore-migrations-a-detailed-guide", // 2024-05-18
      "shift-left-with-architecture-testing-in-dotnet", // 2024-05-25
      "vertical-slice-architecture-structuring-vertical-slices", // 2024-06-01
      "from-transaction-scripts-to-domain-models-a-refactoring-journey", // 2024-06-15
      "what-you-need-to-know-about-ef-core-bulk-updates", // 2024-06-22
      "flexible-pdf-reporting-in-net-using-razor-views", // 2024-06-29
      "service-discovery-in-microservices-with-net-and-consul", // 2024-07-06
      "building-your-first-use-case-with-clean-architecture", // 2024-07-13
      "testing-modular-monoliths-system-integration-testing", // 2024-07-20
      "simple-messaging-in-dotnet-with-redis-pubsub", // 2024-07-27
      "improving-code-quality-in-csharp-with-static-code-analysis", // 2024-08-03
      "5-ef-core-features-you-need-to-know", // 2024-08-10
    ]]
  ])
};