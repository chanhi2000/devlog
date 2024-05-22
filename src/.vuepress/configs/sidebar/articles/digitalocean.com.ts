import { SidebarInfoTemplate } from ".";

export const template: SidebarInfoTemplate = {
  name: 'digitalocean.com',
  faviconPath: 'https://digitalocean.com/_next/static/media/favicon.594d6067.ico',
  linksMap: new Map([
    [
    "k8s", [
      "how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt", // 2022.11.18
      "how-to-run-serverless-workloads-with-knative-on-digitalocean-kubernetes", // 2022.12.16
    ]],[
    "all", [
      "README",
      "how-to-secure-your-site-in-kubernetes-with-cert-manager-traefik-and-let-s-encrypt", // 2022.11.18
      "how-to-run-serverless-workloads-with-knative-on-digitalocean-kubernetes", // 2022.12.16
    ]]
  ])
}