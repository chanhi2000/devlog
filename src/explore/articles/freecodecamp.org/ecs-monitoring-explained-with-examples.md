---
lang: ko-KR
title: "What is ECS Monitoring? Explained With Examples"
description: "Article(s) > What is ECS Monitoring? Explained With Examples"
icon: fa-brands fa-aws
category: 
  - DevOps
  - Amazon
  - AWS
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - devops
  - aws
  - amazon-web-services
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is ECS Monitoring? Explained With Examples"
    - property: og:description
      content: "What is ECS Monitoring? Explained With Examples"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/ecs-monitoring-explained-with-examples.html
prev: /devops/aws/articles/README.md
date: 2024-09-23
isOriginal: false
author: Chidiadi Anyanwu
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1727103254033/39d8dac3-4e18-46dc-8ad6-129386a165b3.avif
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "AWS > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/aws/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="What is ECS Monitoring? Explained With Examples"
  desc="Amazon Elastic Container Service (ECS) is a container orchestration service provided by Amazon Web Services (AWS). It is a solution developed by AWS to take care of the problem of managing large clusters of containers. Why Use ECS? There are other co..."
  url="https://freecodecamp.org/news/ecs-monitoring-explained-with-examples/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1727103254033/39d8dac3-4e18-46dc-8ad6-129386a165b3.avif"/>

<!-- TODO: 작성 -->

<!-- 
<p>Amazon Elastic Container Service (ECS) is a container orchestration service provided by Amazon Web Services (AWS). It is a solution developed by AWS to take care of the problem of managing large clusters of containers.</p>
<h2 id="heading-why-use-ecs">Why Use ECS?</h2>
<p>There are other container orchestration tools, each with its merits, but ECS is made for AWS and provides seamless integration into the AWS ecosystem. You can use it with AWS Elastic Load Balancer (ELB), AWS Identity and Access Management (IAM), AWS CloudTrail, store persistent data in the AWS Elastic Block Store, or monitor it with AWS CloudWatch.</p>
<p>You can also use it with AWS Fargate, which is a serverless compute engine that provides fully managed containers.</p>
<h2 id="heading-what-is-monitoring"><strong>What is Monitoring?</strong></h2>
<p>Monitoring is the process of tracking and observing the performance, availability and overall health of your resources, services, and applications. This helps to detect and troubleshoot issues before they impact users, improve application reliability and availability, optimize resource utilization and enhance the security of your applications.</p>
<p>It’s just a way to make sure all the infrastructure is running the way it is supposed to. It also helps you to know how much traffic your app is receiving if it’s a web app or website, and what is really going on with it.</p>
<p>There are different aspects of monitoring, some of which include:</p>
<ul>
<li><p>Performance monitoring: Here, we track and monitor the performance metrics of infrastructure, such as CPU usage, memory consumption, disk, I/O, and networks, and so on.</p>
</li>
<li><p>Error and log monitoring: Here, we collect and analyze logs and error messages.</p>
</li>
<li><p>Availability monitoring: We ensure that the systems are up and running.</p>
</li>
<li><p>Security monitoring: We also track and monitor security-related events and activities to respond to potential threats and vulnerabilities. Monitoring can help you detect things like a DoS attack by identifying unusual patterns in incoming traffic.</p>
</li>
</ul>
<h2 id="heading-what-do-you-monitor-on-ecs">What Do You Monitor on ECS?</h2>
<p>In cloud monitoring, metrics are used to monitor the health and performance of the infrastructure. They are used together with dimensions. Metrics are the data points collected and monitored to measure the performance, health, and usage of your cloud resources and services.</p>
<p>Dimensions are attributes and characteristics that help to filter, categorize and give context to metrics. They are represented in the form of key/value pairs.</p>
<p>Amazon ECS provides various metrics for monitoring resources. Some of them include:</p>
<ul>
<li><p><strong>CPUReservation:</strong> This is the percentage of CPU units reserved by running tasks.</p>
</li>
<li><p><strong>MemoryReservation:</strong> Percentage of memory reserved by running tasks.</p>
</li>
<li><p><strong>CPUUtilization</strong>: This is the percentage of CPU units used by running tasks.</p>
</li>
<li><p><strong>MemoryUtilization:</strong> This is the percentage of memory used by running tasks.</p>
</li>
<li><p><strong>ContainerInstances:</strong> This is the number of container instances in the cluster.</p>
</li>
<li><p><strong>RunningTasksCount:</strong> The number of tasks that are running currently in the cluster.</p>
</li>
</ul>
<p>Amazon ECS also provides dimensions, some of which are:</p>
<ul>
<li><p><strong>ContainerName:</strong> The name of the container.</p>
</li>
<li><p><strong>ClusterName:</strong> The name of the ECS cluster.</p>
</li>
<li><p><strong>ServiceName:</strong> The name of the service</p>
</li>
<li><p><strong>ServiceNameSpace:</strong> The namespace used to group a set of services in a cluster.</p>
</li>
<li><p><strong>InstanceType:</strong> This refers to the type of EC2 instance used. For example: t2.micro, c4.large, r5.xlarge, and so on.</p>
</li>
<li><p><strong>TaskID:</strong> The unique identifier assigned to each task.</p>
</li>
</ul>
<p>In AWS ECS, you can monitor your resources at different levels. For example, at the cluster level, you can look at things like CPUUtilization, CPUReservation, MemoryUtilization, and MemoryReservation. At the service level, you can see things like CPUUtilization and MemoryUtilization.</p>
<h2 id="heading-how-do-you-monitor-ecs">How Do You Monitor ECS**?**</h2>
<p>You can do this by making use of:</p>
<p><strong>Amazon CloudWatch:</strong> This is a monitoring service by AWS that allows you to collect, analyze and visualize data from your AWS resources. It also helps you to set up alarms and be notified when a threshold is reached.</p>
<p><strong>AWS Management Console:</strong> You can also view your cluster or service metrics directly on the management console.</p>
<p><strong>The ECS API:</strong> The ECS API provides programmatic access to the ECS service so you can use it to create, modify and monitor clusters and resources from outside AWS.</p>
<p><strong>Third party tools:</strong> There are third-party tools like Datadog, Prometheus, and others that can be used to monitor these metrics. Some of them will work seamlessly with AWS, some will require you to install an agent.</p>
<p>For monitoring of ECS on EC2 instances, you have direct access to the underlying EC2 instances, and can use traditional server monitoring tools to monitor metrics on the OS. For ECS on Fargate however, you don't have access to the EC2 instances.</p>
<h3 id="heading-how-to-monitor-ecs-clusters-with-aws-cloudwatch">How to Monitor ECS Clusters With AWS CloudWatch</h3>
<p>With AWS CloudWatch, you can monitor your ECS clusters in many ways, from metrics to logs to setting up alarms. In this guide, I’ll show you how to use the Automatic Dashboards to view ECS cluster metrics. To do that, follow these steps:</p>
<ol>
<li>From the AWS Management Console, open CloudWatch and go to Dashboards on the sidebar.</li>
</ol>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726955177185/348508ff-c765-4962-bb7a-d61fdb11f496.png" alt="Dashboard image" class="image--center mx-auto" width="1366" height="616" loading="lazy"></p>
<ol start="2">
<li>Click on the Automatic Dashboards tab.</li>
</ol>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726955263446/9fd7ffbb-e906-4db2-be57-f3dc85406a4b.png" alt="Automatic dashboard image" class="image--center mx-auto" width="1366" height="612" loading="lazy"></p>
<ol start="3">
<li>Click on ECS Cluster. This will take you to the dashboard where you’ll see the pre-configured metrics for your ECS clusters.</li>
</ol>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726955373129/cf2a20fa-06b3-4ead-a454-849bfb12bba1.png" alt="Click on the ECS Cluster" class="image--center mx-auto" width="1366" height="612" loading="lazy"></p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726955502141/12a0e538-8983-42be-825d-343ddf840625.png" alt="ECS Cluster dashboard" class="image--center mx-auto" width="1366" height="612" loading="lazy"></p>
<p>You can also expand individual metrics.</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1726955515843/eafca64b-fe22-4580-8243-8e55e3e92496.png" alt="Task count metric" class="image--center mx-auto" width="1366" height="615" loading="lazy"></p>
<h2 id="heading-wrapping-up"><strong>Wra</strong>pping Up</h2>
<p>In this article, you learned about ECS monitoring. You learned about the different metrics you can monitor and how to monitor them.</p>
<p>Lastly, you learned how to monitor ECS clusters using AWS CloudWatch.</p>
<p>Thanks for reading. You can connect with me on <a target="_blank" href="https://linkedin.com/in/chidiadi-anyanwu">LinkedIn</a> or follow me on <a target="_blank" href="https://x.com/chidiadi01">X</a>.</p>
-->

---

<TagLinks />