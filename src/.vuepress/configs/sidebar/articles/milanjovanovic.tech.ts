import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'milanjovanovic.tech',
  faviconPath: 'https://milanjovanovic.tech/profile_favicon.png',
  linksMap: new Map([
    [
    "cs", [
      "why-i-write-tall-linq-queries", // 2022-09-03
      "records-anonymous-types-non-destructive-mutation", // 2022-09-10
      "how-to-improve-performance-with-ef-core-query-splitting", // 2022-09-17
      "3-ways-to-create-middleware-in-asp-net-core", // 2022-10-01
      "decorator-pattern-in-asp-net-core", // 2022-10-08
      "how-i-optimized-an-api-endpoint-to-make-it-15x-faster", // 2022-10-15
      "introduction-to-locking-and-concurrency-control-in-dotnet-6", // 2022-10-22
      "how-to-use-global-query-filters-in-ef-core", // 2022-10-29
      "5-ways-to-check-for-duplicates-in-collections", // 2022-11-05,
      "whats-new-in-dotnet-7", // 2022-11-12
      "how-to-use-the-options-pattern-in-asp-net-core-7", // 2022-11-19
      "how-to-use-the-new-bulk-update-feature-in-ef-core-7", // 2022-11-26
      "running-background-tasks-in-asp-net-core", // 2022-12-03,
      "how-to-structure-minimal-apis", // 2022-12-10
      "fast-document-database-in-net-with-marten", // 2022-12-17
      "clean-architecture-and-the-benefits-of-structured-software-design", // 2022-12-24
      "adding-validation-to-the-options-pattern-in-asp-net-core", // 2023-01-07
      "unleash-ef-core-performance-with-compiled-queries", // 2023-01-14
      "csharp-yield-return-statement", // 2023-01-21
      "how-to-implement-api-key-authentication-in-aspnet-core", // 2023-01-28
      "working-with-transactions-in-ef-core", // 2023-02-04
      "messaging-made-easy-with-azure-service-bus", // 2023-02-11
      "structured-logging-in-asp-net-core-with-serilog", // 2023-02-18
      "outbox-pattern-for-reliable-microservices-messaging", // 2023-02-25
      "how-to-apply-functional-programming-in-csharp", // 2023-03-04
      "using-multiple-ef-core-dbcontext-in-single-application", // 2023-03-11
      "creating-data-driven-tests-with-xunit", // 2023-03-18
      "how-to-publish-mediatr-notifications-in-parallel", // 2023-03-25
      "implementing-the-saga-pattern-with-rebus-and-rabbitmq", // 2023-04-01
      "how-to-use-rate-limiting-in-aspnet-core", // 2023-04-08
      "ef-core-raw-sql-queries", // 2023-04-15
      "idempotent-consumer-handling-duplicate-messages", // 2023-04-22
      "health-checks-in-asp-net-core", // 2023-04-29
      "enforcing-software-architecture-with-architecture-tests", // 2023-05-06
      "multi-tenant-applications-with-ef-core", // 2023-05-20
      "scheduling-background-jobs-with-quartz-net", // 2023-06-03
      "the-right-way-to-use-httpclient-in-dotnet", // 2023-06-10
      "refactoring-from-an-anemic-domain-model-to-a-rich-domain-model", // 2023-06-17
      "adding-real-time-functionality-to-dotnet-applications-with-signalr", // 2023-06-24
      "response-compression-in-aspnetcore", // 2023-07-01
      "implementing-an-api-gateway-for-microservices-with-yarp", // 2023-07-08
      "8-tips-to-write-clean-code", // 2023-07-15
      "how-to-use-domain-events-to-build-loosely-coupled-systems", // 2023-07-22
      "mastering-dapper-relationship-mappings", // 2023-08-12
      "advanced-rate-limiting-use-cases-in-dotnet", // 2023-08-19
      "testcontainers-integration-testing-using-docker-in-dotnet", // 2023-09-02
      "solving-race-conditions-with-ef-core-optimistic-locking", // 2023-09-09
      "feature-flags-in-dotnet-and-how-i-use-them-for-ab-testing", // 2023-09-16
      "monolith-to-microservices-how-a-modular-monolith-helps", // 2023-09-23
      "cqrs-validation-with-mediatr-pipeline-and-fluentvalidation", // 2023-09-30
      "getting-started-with-nservicebus-in-dotnet", // 2023-10-07
      "improving-aspnetcore-dependency-injection-with-scrutor", // 2023-10-14
      "cqrs-pattern-with-mediatr", // 2023-10-21
      "functional-error-handling-in-dotnet-with-the-result-pattern", // 2023-10-28
      "vertical-slice-architecture", // 2023-11-04
      "how-to-easily-create-pdf-documents-in-aspnetcore", // 2023-11-11
      "how-to-use-ef-core-interceptors", // 2023-11-18
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
      "complete-guide-to-amazon-sqs-and-amazon-sns-with-masstransit", // 2024-08-17
      "introduction-to-event-sourcing-for-net-developers", // 2024-08-31
      "refit-in-dotnet-building-robust-api-clients-in-csharp", // 2024-09-07
      "dotnet-aspire-a-game-changer-for-cloud-native-development", // 2024-09-14
      "breaking-it-down-how-to-migrate-your-modular-monolith-to-microservices", // 2024-09-28
    ]],[
    "cs-razor", [
      "flexible-pdf-reporting-in-net-using-razor-views", // 2024-06-29
    ]],[
    "js-node", [
      "horizontally-scaling-aspnetcore-apis-with-yarp-load-balancing", // 2024-03-30
      "how-i-implemented-full-text-search-on-my-website", // 2024-09-21
    ]],[
    "erl-rabbitmq", [
      "implementing-the-saga-pattern-with-rebus-and-rabbitmq", // 202404-01
    ]],[
    "docker", [
      "horizontally-scaling-aspnetcore-apis-with-yarp-load-balancing", // 2024-03-30
      "simple-messaging-in-dotnet-with-redis-pubsub", // 2024-07-27
      "dotnet-aspire-a-game-changer-for-cloud-native-development", // 2024-09-14
    ]],[
    "github", [
      "how-to-build-ci-cd-pipeline-with-github-actions-and-dotnet", // 2023-05-27
      "testcontainers-integration-testing-using-docker-in-dotnet", // 2023-09-02
    ]],[
    "aws", [
      "complete-guide-to-amazon-sqs-and-amazon-sns-with-masstransit", // 2024-08-17
    ]],[
    "azure", [
      "messaging-made-easy-with-azure-service-bus", // 2023-02-11
    ]],[
    "redis", [
      "caching-in-aspnetcore-improving-application-performance", // 2024-06-08
      "simple-messaging-in-dotnet-with-redis-pubsub", // 2024-07-27
    ]],[
    "system-design", [
      "clean-architecture-folder-structure", // 2022-09-24
      "visualize-your-software-architecture-with-the-c4-model", // 2023-05-13
      "why-clean-architecture-is-great-for-complex-projects", // 2023-07-29
      "modular-monolith-communication-patterns", // 2023-08-05
      "orchestration-vs-choreography", // 2023-08-26
      "what-is-a-modular-monolith", // 2024-03-09
      "screaming-architecture", // 2024-08-24
    ]],[
    "career", [
      "how-to-be-a-better-software-engineer-in-2023", // 2022-12-31
    ]],[
    "all", [
      "why-i-write-tall-linq-queries", // 2022-09-03
      "records-anonymous-types-non-destructive-mutation", // 2022-09-10
      "how-to-improve-performance-with-ef-core-query-splitting", // 2022-09-17
      "clean-architecture-folder-structure", // 2022-09-24
      "3-ways-to-create-middleware-in-asp-net-core", // 2022-10-01
      "decorator-pattern-in-asp-net-core", // 2022-10-08
      "how-i-optimized-an-api-endpoint-to-make-it-15x-faster", // 2022-10-15
      "introduction-to-locking-and-concurrency-control-in-dotnet-6", // 2022-10-22
      "how-to-use-global-query-filters-in-ef-core", // 2022-10-29
      "5-ways-to-check-for-duplicates-in-collections", // 2022-11-05,
      "whats-new-in-dotnet-7", // 2022-11-12
      "how-to-use-the-options-pattern-in-asp-net-core-7", // 2022-11-19
      "how-to-use-the-new-bulk-update-feature-in-ef-core-7", // 2022-11-26
      "running-background-tasks-in-asp-net-core", // 2022-12-03,
      "how-to-structure-minimal-apis", // 2022-12-10
      "fast-document-database-in-net-with-marten", // 2022-12-17
      "clean-architecture-and-the-benefits-of-structured-software-design", // 2022-12-24
      "how-to-be-a-better-software-engineer-in-2023", // 2022-12-31
      "adding-validation-to-the-options-pattern-in-asp-net-core", // 2023-01-07
      "unleash-ef-core-performance-with-compiled-queries", // 2023-01-14
      "csharp-yield-return-statement", // 2023-01-21
      "how-to-implement-api-key-authentication-in-aspnet-core", // 2023-01-28
      "working-with-transactions-in-ef-core", // 2023-02-04
      "messaging-made-easy-with-azure-service-bus", // 2023-02-11
      "structured-logging-in-asp-net-core-with-serilog", // 2023-02-18
      "outbox-pattern-for-reliable-microservices-messaging", // 2023-02-25
      "how-to-apply-functional-programming-in-csharp", // 2023-03-04
      "using-multiple-ef-core-dbcontext-in-single-application", // 2023-03-11
      "creating-data-driven-tests-with-xunit", // 2023-03-18
      "how-to-publish-mediatr-notifications-in-parallel", // 2023-03-25
      "implementing-the-saga-pattern-with-rebus-and-rabbitmq", // 2023-04-01
      "how-to-use-rate-limiting-in-aspnet-core", // 2023-04-08
      "ef-core-raw-sql-queries", // 2023-04-15
      "idempotent-consumer-handling-duplicate-messages", // 2023-04-22
      "health-checks-in-asp-net-core", // 2023-04-29
      "enforcing-software-architecture-with-architecture-tests", // 2023-05-06
      "visualize-your-software-architecture-with-the-c4-model", // 2023-05-13
      "multi-tenant-applications-with-ef-core", // 2023-05-20
      "how-to-build-ci-cd-pipeline-with-github-actions-and-dotnet", // 2023-05-27
      "scheduling-background-jobs-with-quartz-net", // 2023-06-03
      "the-right-way-to-use-httpclient-in-dotnet", // 2023-06-10
      "refactoring-from-an-anemic-domain-model-to-a-rich-domain-model", // 2023-06-17
      "adding-real-time-functionality-to-dotnet-applications-with-signalr", // 2023-06-24
      "response-compression-in-aspnetcore", // 2023-07-01
      "implementing-an-api-gateway-for-microservices-with-yarp", // 2023-07-08
      "8-tips-to-write-clean-code", // 2023-07-15
      "how-to-use-domain-events-to-build-loosely-coupled-systems", // 2023-07-22
      "why-clean-architecture-is-great-for-complex-projects", // 2023-07-29
      "modular-monolith-communication-patterns", // 2023-08-05
      "mastering-dapper-relationship-mappings", // 2023-08-12
      "advanced-rate-limiting-use-cases-in-dotnet", // 2023-08-19
      "orchestration-vs-choreography", // 2023-08-26
      "testcontainers-integration-testing-using-docker-in-dotnet", // 2023-09-02
      "solving-race-conditions-with-ef-core-optimistic-locking", // 2023-09-09
      "feature-flags-in-dotnet-and-how-i-use-them-for-ab-testing", // 2023-09-16
      "monolith-to-microservices-how-a-modular-monolith-helps", // 2023-09-23
      "cqrs-validation-with-mediatr-pipeline-and-fluentvalidation", // 2023-09-30
      "getting-started-with-nservicebus-in-dotnet", // 2023-10-07
      "improving-aspnetcore-dependency-injection-with-scrutor", // 2023-10-14
      "cqrs-pattern-with-mediatr", // 2023-10-21
      "functional-error-handling-in-dotnet-with-the-result-pattern", // 2023-10-28
      "vertical-slice-architecture", // 2023-11-04
      "how-to-easily-create-pdf-documents-in-aspnetcore", // 2023-11-11
      "how-to-use-ef-core-interceptors", // 2023-11-18
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
      "caching-in-aspnetcore-improving-application-performance", // 2024-06-08
      "from-transaction-scripts-to-domain-models-a-refactoring-journey", // 2024-06-15
      "what-you-need-to-know-about-ef-core-bulk-updates", // 2024-06-22
      "flexible-pdf-reporting-in-net-using-razor-views", // 2024-06-29
      "service-discovery-in-microservices-with-net-and-consul", // 2024-07-06
      "building-your-first-use-case-with-clean-architecture", // 2024-07-13
      "testing-modular-monoliths-system-integration-testing", // 2024-07-20
      "simple-messaging-in-dotnet-with-redis-pubsub", // 2024-07-27
      "improving-code-quality-in-csharp-with-static-code-analysis", // 2024-08-03
      "5-ef-core-features-you-need-to-know", // 2024-08-10
      "complete-guide-to-amazon-sqs-and-amazon-sns-with-masstransit", // 2024-08-17
      "screaming-architecture", // 2024-08-24
      "introduction-to-event-sourcing-for-net-developers", // 2024-08-31
      "refit-in-dotnet-building-robust-api-clients-in-csharp", // 2024-09-07
      "dotnet-aspire-a-game-changer-for-cloud-native-development", // 2024-09-14
      "how-i-implemented-full-text-search-on-my-website", // 2024-09-21
      "breaking-it-down-how-to-migrate-your-modular-monolith-to-microservices", // 2024-09-28
    ]]
  ])
};