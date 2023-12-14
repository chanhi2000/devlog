---
lang: ko-KR
title: IAM Policies Part 5
description: 🔻Jets - Learning Content > IAM Policies Part 5
tags: ["crashcourse", "ruby", "jets", "aws", "aws-lambda", "cloudwatch"]
meta:
  - name: 🔻Jets - Learning Content > IAM Policies Part 5
    content: IAM Policies Part 5
  - property: og:title
    content: IAM Policies Part 5
  - property: og:description
    content: 🔻Jets - Learning Content > IAM Policies Part 5
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/ruby-rubyonjets-learning-content/20180911-jets-tutorial-iam-policies-part-5.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: IAM Policies Part 5
desc: ...
link: https://blog.boltops.com/2018/09/11/jets-tutorial-iam-policies-part-5
logo: https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_655/https://blog.boltops.com/img/posts/2018/09/jets-tutorial-part-5-iam-policies-v1.png
color: rgba(32,11,15,0.2)
```

---

<YouTube id="T6F61kPSZCc" />

In this video, we continue the tutorials on the [Jets Ruby Serverless Framework](http://rubyonjets.com/) that adds Ruby support to AWS Lambda. We’ll demonstrate how to customize the IAM policies and roles associated with Jets Lambda functions. IAM policies are important because they handle securing access to your AWS resources so it’s worth learning them. Jets provides you with fine-grain control over the IAM permissions at the function, class, and application level.

---

## Summary of What We’ll Cover

- Cover the 2 types of IAM Policies: Custom and Managed
- Show to define both IAM policy types with Jets
- Explain how the Jets shorthand IAM policy definition gets expanded
- Explore the roles and their policies in the IAM Console
- Show how the IAM Roles connect back to the Jets application
- Deploy custom IAM Policies
- Review the newly created IAM Policies

---

## More info

For an Jets Introduction: [Introducing Jets: A Ruby Serverless Framework](https://blog.boltops.com/2018/08/18/introducing-jets-a-ruby-serverless-framework/).

---

<TagLinks />