import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'learnk8s.io',
  faviconPath: 'https://static.learnk8s.io/f7e5160d4744cf05c46161170b5c11c9.svg',
  linksMap: new Map([
    [
    "java-spring", [
      "scaling-spring-boot-microservices", // 2019-11-15
      "spring-boot-kubernetes-guide", // 2022-03-28
    ]],[
    "java-kafka", [
      "scaling-spring-boot-microservices", // 2019-11-15
      "kafka-ha-kubernetes", // 2022-04-27
    ]],[
    "java-elasticsearch", [
      "sidecar-containers-patterns", // 2021-02-16
    ]],[
    "js-node", [
      "scaling-nodejs-kubernetes", // 2022-06-27
      "deploying-nodejs-kubernetes", // 2022-06-27
      "developing-and-packaging-nodejs-docker", // 2022-06-27
    ]],[
    "py-celery", [
      "scaling-celery-rabbitmq-kubernetes", // 2021-03-10
    ]],[
    "py-locust", [
      "scaling-celery-rabbitmq-kubernetes", // 2021-03-10
    ]],[
    "go", [
      "kubernetes-custom-authentication", // 2020-04-15
    ]],[
    "php", [
      "kubernetes-deploy-laravel-the-easy-way", // 2020-05-12
    ]],[
    "erl-rabbitmq", [
      "scaling-spring-boot-microservices", // 2019-11-15
      "scaling-celery-rabbitmq-kubernetes", // 2021-03-10
    ]],[
    "git", [
      "kubernetes-secrets-in-git", // 2019-09-25
    ]],[
    "windows", [
      "installing-docker-kubernetes-windows", // 2020-12-14
    ]],[
    "docker", [
      "smaller-docker-images", // 2019-04-14
      "scaling-spring-boot-microservices", // 2019-11-15
      "kubernetes-deploy-laravel-the-easy-way", // 2020-05-12
      "installing-docker-kubernetes-windows", // 2020-12-14
      "kubernetes-network-packets", // 2022-01-13
      "developing-and-packaging-nodejs-docker", // 2022-06-27
    ]],[
    "k8s", [
      "connecting-multiple-kubernetes-clusters", // 2019-04-04
      "kubernetes-chaos-engineering-lessons-learned", // 2019-04-15
      "kubectl-productivity", // 2019-04-15
      "helm-templating-kubernetes-yaml", // 2019-04-16
      "visualise-dependencies-kubernetes", // 2019-05-08
      "kubernetes-secrets-in-git", // 2019-09-25
      "autoscaling-apps-kubernetes", // 2019-10-03
      "scaling-spring-boot-microservices", // 2019-11-15
      "kubernetes-ingress-api-gateway", // 2019-12-11
      "how-many-clusters", // 2020-02-20
      "cloud-resources-kubernetes", // 2020-04-01
      "kubernetes-custom-authentication", // 2020-04-15
      "real-time-dashboard", // 2020-04-28
      "kubernetes-deploy-laravel-the-easy-way", // 2020-05-12
      "templating-yaml-with-code", // 2020-05-12
      "validating-kubernetes-yaml", // 2020-06-17
      "kubernetes-policies", // 2020-07-15
      "setting-cpu-memory-limits-requests", // 2020-09-02
      "microservices-authentication-kubernetes", // 2020-12-01
      "installing-docker-kubernetes-windows", // 2020-12-14
      "sidecar-containers-patterns", // 2021-02-16
      "scaling-celery-rabbitmq-kubernetes", // 2021-03-10
      "kubernetes-autoscaling-strategies", // 2021-06-01
      "etcd-kubernetes", // 2021-07-21
      "kubernetes-network-packets", // 2022-01-13
      "spring-boot-kubernetes-guide", // 2022-03-28
      "rbac-kubernetes", // 2022-03-31
      "kafka-ha-kubernetes", // 2022-04-27
      "deploying-nodejs-kubernetes-eks", // 2022-06-27
      "scaling-nodejs-kubernetes", // 2022-06-27
      "deploying-nodejs-kubernetes", // 2022-06-27
      "authentication-kubernetes", // 2022-06-30
      "terraform-gke", // 2023-01-11
      "kubernetes-node-size", // 2023-08-15
      "graceful-shutdown", // 2024-04-22
      "troubleshooting-deployments", // 2024-05-13
      "allocatable-resources", // 2024-05-27
      "kubernetes-long-lived-connections", // 2024-06-10
      "kubernetes-rollbacks", // 2024-07-01
    ]],[
    "linode", [
      "terraform-lke", // 2021-11-25
    ]],[
    "aws", [
      "cloud-resources-kubernetes", // 2020-04-01
      "deploying-nodejs-kubernetes-eks", // 2022-06-27
      "terraform-eks", // 2023-01-11
    ]],[
    "azure", [
      "cloud-resources-kubernetes", // 2020-04-01
      "terraform-aks", // 2021-03-17
    ]],[
    "gcp", [
      "cloud-resources-kubernetes", // 2020-04-01
      "kubernetes-custom-authentication", // 2020-04-15
      "terraform-gke", // 2023-01-11
    ]],[
    "mongodb", [
      "developing-and-packaging-nodejs-docker", // 2022-06-27
    ]],[
    "all", [
      "connecting-multiple-kubernetes-clusters", // 2019-04-04
      "smaller-docker-images", // 2019-04-14
      "kubernetes-chaos-engineering-lessons-learned", // 2019-04-15
      "kubectl-productivity", // 2019-04-15
      "helm-templating-kubernetes-yaml", // 2019-04-16
      "visualise-dependencies-kubernetes", // 2019-05-08
      "kubernetes-secrets-in-git", // 2019-09-25
      "autoscaling-apps-kubernetes", // 2019-10-03
      "scaling-spring-boot-microservices", // 2019-11-15
      "kubernetes-ingress-api-gateway", // 2019-12-11
      "how-many-clusters", // 2020-02-20
      "kubernetes-custom-authentication", // 2020-04-15
      "real-time-dashboard", // 2020-04-28
      "kubernetes-deploy-laravel-the-easy-way", // 2020-05-12
      "templating-yaml-with-code", // 2020-05-12
      "validating-kubernetes-yaml", // 2020-06-17
      "kubernetes-policies", // 2020-07-15
      "setting-cpu-memory-limits-requests", // 2020-09-02
      "microservices-authentication-kubernetes", // 2020-12-01
      "installing-docker-kubernetes-windows", // 2020-12-14
      "sidecar-containers-patterns", // 2021-02-16
      "scaling-celery-rabbitmq-kubernetes", // 2021-03-10
      "terraform-aks", // 2021-03-17
      "kubernetes-autoscaling-strategies", // 2021-06-01
      "etcd-kubernetes", // 2021-07-21
      "terraform-lke", // 2021-11-25
      "kubernetes-network-packets", // 2022-01-13
      "spring-boot-kubernetes-guide", // 2022-03-28
      "rbac-kubernetes", // 2022-03-31
      "kafka-ha-kubernetes", // 2022-04-27
      "deploying-nodejs-kubernetes-eks", // 2022-06-27
      "scaling-nodejs-kubernetes", // 2022-06-27
      "deploying-nodejs-kubernetes", // 2022-06-27
      "developing-and-packaging-nodejs-docker", // 2022-06-27
      "authentication-kubernetes", // 2022-06-30
      "terraform-eks", // 2023-01-11
      "terraform-gke", // 2023-01-11
      "kubernetes-node-size", // 2023-08-15
      "graceful-shutdown", // 2024-04-22
      "troubleshooting-deployments", // 2024-05-13
      "allocatable-resources", // 2024-05-27
      "kubernetes-long-lived-connections", // 2024-06-10
      "kubernetes-rollbacks", // 2024-07-01
    ]]
  ])
}