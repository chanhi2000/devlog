---
lang: ko-KR
title: Background Jobs Part 4
description: 🔻Jets - Learning Content > Background Jobs Part 4
tags: ["crashcourse", "ruby", "jets", "aws", "aws-lambda", "cloudwatch"]
meta:
  - name: 🔻Jets - Learning Content > Background Jobs Part 4
    content: Background Jobs Part 4
  - property: og:title
    content: Background Jobs Part 4
  - property: og:description
    content: 🔻Jets - Learning Content > Background Jobs Part 4
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/ruby-rubyonjets-learning-content/20180910-jets-tutorial-background-jobs-part-4.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Background Jobs Part 4
desc: ...
link: https://blog.boltops.com/2018/09/10/jets-tutorial-background-jobs-part-4
logo: https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_531/https://blog.boltops.com/img/posts/2018/09/jets-tutorial-part-4-jobs-v1.png
color: rgba(0,1,35,0.2)
```

---

<YouTube id="-aRtDwqYpUI" />

In this video, we continue the tutorials on the [Jets Ruby Serverless Framework](http://rubyonjets.com/) that adds Ruby support to AWS Lambda. We’ll cover background jobs in this video. Using background jobs is a typical pattern that offloads processing outside of the web request-response cycle. Users will not wait for web pages to load if it takes too long, so background jobs are an excellent technique to keep slower work outside of the request cycle.

---

## Summary of What We’ll Cover

- Explain What A Background Job Is
- Create a Background Job
- Deploy the App to AWS Lambda
- Explore the AWS CloudWatch Event Rule Console
- See how to check how many times the Job has Ran
- Check out CloudWatch Logs

---

## More info

For an Jets Introduction: [Introducing Jets: A Ruby Serverless Framework](https://blog.boltops.com/2018/08/18/introducing-jets-a-ruby-serverless-framework/).

---

<TagLinks />