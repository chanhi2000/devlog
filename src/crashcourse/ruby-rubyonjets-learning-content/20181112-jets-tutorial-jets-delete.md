---
lang: ko-KR
title: Jets Delete Tutorial
description: 🔻Jets - Learning Content > Jets Delete Tutorial
tags: ["crashcourse", "ruby", "jets", "aws", "aws-lambda", "cloudwatch"]
meta:
  - name: 🔻Jets - Learning Content > Jets Delete Tutorial
    content: Jets Delete Tutorial
  - property: og:title
    content: Jets Delete Tutorial
  - property: og:description
    content: 🔻Jets - Learning Content > Jets Delete Tutorial
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/ruby-rubyonjets-learning-content/20181112-jets-tutorial-jets-delete.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Jets Delete Tutorial
desc: ...
link: https://blog.boltops.com/2018/11/12/jets-tutorial-jets-delete
logo: https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_746/https://blog.boltops.com/img/posts/2018/11/jets-delete-v2.png
color: rgba(240,130,26,0.2)
```

---

<YouTube id="RwRMTAjWVtM" />

This video tutorial demos the jets delete command. Since all the infrastructure is codified, deleting a Jets application is a straightforward process. What’s more interesting is that it is also easy to recreate the entire environment.

```sh
jets delete
```

For more info on the [`jets delete`](http://rubyonjets.com/reference/jets-delete/) command, refer to its CLI reference.

---

## What’s Deleted

- S3 Bucket that was created and managed by Jets
- All the CloudFormation stacks that that creates most of the Jets resources: Lambda Functions, API Gateway, CloudWatch Event Rules, etc.
- CloudWatch Log Groups: to clean up the listing page

---

## Delete in Action

Here’s an example with the jets delete output:

```sh
jets delete
# Deleting project...
# Are you sure you want to want to delete the demo-dev project? (y/N)
y
# First, deleting objects in s3 bucket demo-dev-s3bucket-6np69dibzbdl
# Deleting demo-dev...
# 03:08:26PM DELETE_IN_PROGRESS AWS::CloudFormation::Stack demo-dev User Initiated
# 03:08:27PM DELETE_IN_PROGRESS AWS::CloudFormation::Stack ApiDeployment20181109150504
# 03:08:27PM DELETE_IN_PROGRESS AWS::CloudFormation::Stack JetsPreheatJob
# 03:08:38PM DELETE_COMPLETE AWS::CloudFormation::Stack ApiDeployment20181109150504
# 03:08:38PM DELETE_IN_PROGRESS AWS::CloudFormation::Stack PostsController
# 03:08:38PM DELETE_IN_PROGRESS AWS::CloudFormation::Stack JetsPublicController
# 03:09:01PM DELETE_COMPLETE AWS::CloudFormation::Stack PostsController
# 03:09:01PM DELETE_COMPLETE AWS::CloudFormation::Stack JetsPublicController
# 03:09:02PM DELETE_IN_PROGRESS AWS::CloudFormation::Stack ApiGateway
# 03:09:12PM DELETE_COMPLETE AWS::CloudFormation::Stack ApiGateway
# 03:09:45PM DELETE_COMPLETE AWS::CloudFormation::Stack JetsPreheatJob
# 03:09:46PM DELETE_IN_PROGRESS AWS::S3::Bucket S3Bucket
# 03:09:46PM DELETE_IN_PROGRESS AWS::IAM::Role IamRole
# 03:09:46PM DELETE_COMPLETE AWS::S3::Bucket S3Bucket
# 03:09:47PM DELETE_COMPLETE AWS::IAM::Role IamRole
# Stack demo-dev deleted.
# Time took for deletion: 1m 26s.
# Deleting CloudWatch logs
# Project demo-dev deleted!
```

---

<TagLinks />
