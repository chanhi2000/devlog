---
lang: ko-KR
title: AWS Lambda Function - Jets Introduction Series Part 1
description: 🔻Jets - Learning Content > AWS Lambda Function - Jets Introduction Series Part 1
tags: ["crashcourse", "ruby", "jets", "aws", "aws-lambda", "cloudwatch"]
meta:
  - name: 🔻Jets - Learning Content > AWS Lambda Function - Jets Introduction Series Part 1
    content: AWS Lambda Function - Jets Introduction Series Part 1
  - property: og:title
    content: AWS Lambda Function - Jets Introduction Series Part 1
  - property: og:description
    content: 🔻Jets - Learning Content > AWS Lambda Function - Jets Introduction Series Part 1
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/ruby-rubyonjets-learning-content/20190204-aws-lambda-function-jets-introductory-series-part-1.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---


```card
title: AWS Lambda Function - Jets Introduction Series Part 1
desc: ...
link: https://blog.boltops.com/2019/02/04/aws-lambda-function-jets-introductory-series-part-1
logo: https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_535/https://blog.boltops.com/img/posts/2019/02/intro-series-lambda-function-v1.png
color: rgba(127,2,20,0.2)
```

---

<YouTube id="4YJstp31tkY"/>

In this video, we’ll walk through creating a Lambda Function with the Lambda console. Simply getting familiar with the AWS Lambda console is an excellent way to learn how simple AWS Lambda is for those who are new to AWS Lambda and trying it out for the first time. We do not talk much about Jets in this video, but this simple Lambda Console exercise will help understand what Jets does for you. This post is a part of an introductory series for people who are new to AWS Lambda and Serverless.

Links used in the video:

- [Sample Events Published by Event Sources](https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html)
- [`aws lambda invoke`](https://docs.aws.amazon.com/cli/latest/reference/lambda/invoke.html)

---

## Calling Lambda Function with CLI

We call the Lambda function from the Lambda console and browser in the video. We also call it from the CLI. Here is that example command:

```sh
aws lambda invoke --function-name hello --payload '{"k1": "v1"}' out.txt
cat out.txt
```

---

<TagLinks />
