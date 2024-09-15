---
lang: ko-KR
title: How to Build an EKS Cluster Across AWS Local Zones using the AWS CDK
description: Article(s) > How to Build an EKS Cluster Across AWS Local Zones using the AWS CDK
icon: fa-brands fa-aws
category: 
  - DevOps
  - Amazon
  - AWS
  - Node.js
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - amazon-web-services
  - aws
  - eks
  - aws-eks
  - eks-cluster
  - aws-cdk
  - hashicorp
  - terraform
  - hcl
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Build an EKS Cluster Across AWS Local Zones using the AWS CDK
    - property: og:description
      content: How to Build an EKS Cluster Across AWS Local Zones using the AWS CDK
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/build-an-eks-cluster-using-aws-local-zones-with-aws-cdk.html
prev: /devops/aws/articles/README.md
date: 2024-05-28
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w2000/2024/05/pexels-pixabay-357742.jpg
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

```component VPCard
{
  "title": "Node.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-node/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to Build an EKS Cluster Across AWS Local Zones using the AWS CDK"
  desc="AWS Local Zones are a new type of infrastructure that enables you to build and run applications closer to end-users, providing low latency and improved performance.  They are designed to provide the same high availability and reliability as an AWS Region, but with the added benefit of low-latency connections..."
  url="https://freecodecamp.org/news/build-an-eks-cluster-using-aws-local-zones-with-aws-cdk/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w2000/2024/05/pexels-pixabay-357742.jpg"/>

AWS Local Zones are a new type of infrastructure that enables you to build and run applications closer to end-users, providing low latency and improved performance.

They are designed to provide the same high availability and reliability as an AWS Region, but with the added benefit of low-latency connections for applications that require it.

Using Local Zones can be particularly helpful if you have end users located in specific geographic areas and want to provide them with low-latency access to their applications. This can be especially important for applications that require real-time data processing or have strict performance requirements.

Local Zones can also minimize network expenses, which is an additional advantage. By executing applications in a Local Zone closer to end users, you can limit the quantity of data that must be transferred over long distances, which reduces network costs.

In this tutorial, we will see how to build a hybrid edge EKS cluster that spans across the AWS Regions and AWS Local Zones using both AWS Management Console and AWS Cloud Development Kit (CDK).

Before getting started, it's important to note that AWS Local Zones are physically separate locations that are connected to the main AWS region through high-speed links. They allow you to run certain services closer to your customers and reduce latency.

To build your EKS cluster across Local Zones, you will need to:

1. Create an EKS cluster in the main region
2. Create a VPC and associated resources in the Local Zones
3. Connect the Local Zone VPCs to the main region VPC
4. Launch worker nodes in the Local Zone VPCs

We'll walk through these steps in this guide.

![Architecture Diagram](https://lh3.googleusercontent.com/-kdtf6vkPfxVY3aLcGpqQI5wczBZXfcScdCz2z1bhNSuawjGEJyLEznPfB5mqnupfuVsPCNybRHJViCjLTxKmF5F2zq82LdHvRmnItjDFTrPDtTRhAzAgr7ToL8bhuymqSkCpVei2VcPyFdjz7YQC_w)

### Prerequisites

Before we begin, you need to have the following:

1. An AWS account with permissions to create resources in AWS Wavelength and AWS Local Zones.
2. AWS CDK installed on your local machine. If you don't have it installed, you can follow the instructions in the AWS CDK documentation to install it.
3. AWS CLI installed on your local machine. If you don't have it installed, you can follow the instructions in the AWS CLI documentation to install it.

Finally, let’s get started.

---

## Step 1: Create an AWS Local Zone

The first step is to opt-in to AWS Local Zones in the region of your choice. You can follow the instructions in the [<FontIcon icon="fa-brands fa-aws"/>AWS Local Zones documentation](https://docs.aws.amazon.com/local-zones/latest/ug/getting-started.html) to opt-in to these zones.

---

## Step 2: Create a CDK Project

To start, we need to create a new CDK project using the following command:

```sh
cdk init --language=javascript
```

This will create a new directory with the required files and directories for a CDK project.

Next, install the required dependencies using the following command:

```sh
npm install
```

Now, let's create a new file called local-zone-eks.js in the lib directory and add the following code:

```js
const cdk = require('aws-cdk-lib');
const ec2 = require('aws-cdk-lib/aws-ec2');
import * as autoscaling from '@aws-cdk/aws-autoscaling';
import * as ecs from '@aws-cdk/aws-eks';

require('dotenv').config();
const config = {
  env: {
    account: process.env.AWS_ACCOUNT_NUMBER,
    region: process.env.AWS_REGION,
  },
};


class VPCStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create a VPC 
    const vpc = new ec2.Vpc(this, 'VPC', {
      cidr: '10.0.0.0/16',
      maxAzs: 2,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'Public',
          subnetType: ec2.SubnetType.PRIVATE,
        },
        {
          cidrMask: 24,
          name: 'Private',
          subnetType: ec2.SubnetType.PRIVATE,
        },
      ],
    });
  }
}

module.exports = { VPCStack };
```

This code creates a new VPC with a CIDR block of 10.0.0.0/16, which spans across two private subnets. 

Next, let’s export the environment variable for our AWS Local Zone, which we will use to create the only public subnet in our VPC. In this example, we have selected the Las Vegas Local Zone and have configured the subnet accordingly.

```js
const localZone: string = 'us-west-2-las-1a’

 // Create Local Zone Public Subnet
    const LocalZoneSubnet = new ec2.PublicSubnet(this, 'localzone-public-subnet', {
      availabilityZone: localZone,
      cidrBlock: '10.0.3.0/26',
      vpcId: vpc.vpcId,
      mapPublicIpOnLaunch: true,
    });

    // Add Local Zone Subnet to VPC
    vpc.publicSubnets.push(LocalZoneSubnet);
```
---

## Step 3: Create an Amazon EKS Cluster

Now that we have a VPC, we can create an Amazon Elastic Container Service for Kubernetes (Amazon EKS) cluster.

Add the following code to the local-zone-eks.js file:

```js
const eks = require('aws-cdk-lib/aws-eks');

class EKSStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    // Create the EKS cluster
    const cluster = new eks.Cluster(this, 'EKSCluster', {
      vpc: vpc,
      defaultCapacity: 0,
      version: '1.21',
      clusterName: 'local-zone-eks-demo-cluster',
    });
  }
}
module.exports = { EKSStack };
```

This code creates a new EKS cluster using the VPC we created earlier. It also specifies the Kubernetes version to use and the name of the cluster.

---

## Step 4: Create Worker Nodes

Next, we need to create worker nodes to run our applications on the EKS cluster.

Add the following code to the <FontIcon icon="fa-brands fa-js"/>`local-zone-eks.js` file:

```js
// Define EKS-optimized image for Launch Template
    const image = new ecs.EksOptimizedAmi();

    // Create Launch Template for Auto Scaling group to reference
    const lzLaunchTemplate = new ec2.CfnLaunchTemplate(
      this,
      'eks-launch-template',
      {
        launchTemplateName: 'lz-launch-template',
        launchTemplateData: {
          networkInterfaces: [
            {
              deviceIndex: 0,
              associatePublicIpAddress: true,
              deleteOnTermination: true,
              subnetId: LocalZoneSubnet.subnetId!,
            },
          ],
          imageId: image.getImage(this).imageId,
          instanceType: 't3.medium',
          userData: cdk.Fn.base64(
            `#!/bin/bash -xe
          set -o xtrace
          /etc/eks/bootstrap.sh ‘local-zone-eks-demo-cluster’`}
            )
        },
      }
    );

    // Create Auto Scaling Group
    const lz_asg = new autoscaling.AutoScalingGroup(this, 'LocalZoneWorkerNodes', {
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MEDIUM),
      machineImage: new ecs.EksOptimizedAmi(),
      updateType: autoscaling.UpdateType.REPLACING_UPDATE,
      desiredCapacity: 1,
      vpc: vpc,
      launchTemplate: lzLaunchTemplate
    });
```

This code creates a new auto-scaling group to manage the worker nodes, and adds the worker nodes to the EKS cluster using the instance bootstrap script.

---

## Step 5: Deploy the CDK App

Now that we have all the required code, we can deploy it using the following command:

```sh
cdk deploy
```

With your EKS cluster up and running, you can start deploying your applications. You can use Kubernetes manifests or Helm charts to deploy your applications to the cluster.

---

## Conclusion

AWS Local Zones provide a robust mechanism for providing high-performance applications to end users, independent of their location. They also give end users a better experience and deliver great performance.

I’m always open to suggestions and discussions on <a href="https://linkedin.com/in/gursimarsm">LinkedIn</a>. Hit me up with direct messages.

If you’ve enjoyed my writing and want to keep me motivated, consider leaving stars on <a href="https://github.com/gursimarsm">GitHub</a> and endorse me for relevant skills on <a href="https://linkedin.com/in/gursimarsm">LinkedIn</a>.

Till the next one, stay safe and keep learning.

---

<TagLinks />