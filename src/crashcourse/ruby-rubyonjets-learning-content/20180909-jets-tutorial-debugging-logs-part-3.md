---
lang: ko-KR
title: Debugging Logs Part 3
description: 🔻Jets - Learning Content > Debugging Logs Part 3
tags: ["crashcourse", "ruby", "jets", "aws", "aws-lambda", "cloudwatch"]
meta:
  - name: 🔻Jets - Learning Content > Debugging Logs Part 3
    content: Debugging Logs Part 3
  - property: og:title
    content: Debugging Logs Part 3
  - property: og:description
    content: 🔻Jets - Learning Content > Debugging Logs Part 3
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/ruby-rubyonjets-learning-content/20180909-jets-tutorial-debugging-logs-part-3.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Debugging Logs Part 3
desc: ...
link: https://blog.boltops.com/2018/09/09/jets-tutorial-debugging-logs-part-3
logo: https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_637/https://blog.boltops.com/img/posts/2018/09/jets-tutorial-part-3-debugging-v3.png
color: rgba(32,32,40,0.2)
```

---

<YouTube id="yTSCwFSAPmw" />

In this video, we continue the tutorials on the [Jets Ruby Serverless Framework](http://rubyonjets.com/) that adds Ruby support to AWS Lambda. We’ll cover something that is pretty important to know as a software developer: debugging. With Jets it’s pretty straightforward to look at the debugging logs both locally and remotely. Locally, the logs show up with the local running server. Remotely, the logs show up in CloudWatch Logs: available both on the AWS CloudWatch Logs console and the AWS Lambda console.

---

## Lambda Console

Here’s what an error looks like in the Lambda console:

![lambda-console-ruby-error](https://blog.boltops.com/img/posts/2018/09/lambda-console-ruby-error.png)

---

## Summary of What We’ll Cover

- Breaking the App Locally by calling raise "`the roof`"
- Checking out the log output locally
- Breaking the App Remotely by calling raise "`my kids`"
- Deploy the App
- Checking out the log output on AWS CloudWatch logs and the AWS Lambda console

---

## More info

For an Jets Introduction: [Introducing Jets: A Ruby Serverless Framework](https://blog.boltops.com/2018/08/18/introducing-jets-a-ruby-serverless-framework/).

---

<TagLinks />