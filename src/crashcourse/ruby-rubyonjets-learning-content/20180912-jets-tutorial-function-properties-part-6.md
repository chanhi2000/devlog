---
lang: ko-KR
title: Function Properties Part 6
description: 🔻Jets - Learning Content > Function Properties Part 6
tags: ["crashcourse", "ruby", "jets", "aws", "aws-lambda", "cloudwatch"]
meta:
  - name: 🔻Jets - Learning Content > Function Properties Part 6
    content: Function Properties Part 6
  - property: og:title
    content: Function Properties Part 6
  - property: og:description
    content: 🔻Jets - Learning Content > Function Properties Part 6
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/ruby-rubyonjets-learning-content/20180912-jets-tutorial-function-properties-part-6.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Function Properties Part 6
desc: ...
link: https://blog.boltops.com/2018/09/12/jets-tutorial-function-properties-part-6
logo: https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_620/https://blog.boltops.com/img/posts/2018/09/jets-tutorial-part-6-function-properties-v1.png
color: rgba(20,27,106,0.2)
```

---

<YouTube id="q8sfqR3GRpw" />

In this video, we continue the tutorials on the [Jets Ruby Serverless Framework](http://rubyonjets.com/) that adds Ruby support to AWS Lambda. We’ll demonstrate how to customize the properties associated with the Lambda functions that Jets creates. There are 3 ways to set function properties with Jets: at the function level, class level or application level. We’ll also explore the AWS Lambda console and shows how the Lambda function properties connect with Jets.

Here’s a list of the properties you can adjust.

- `dead_letter_config`
- `description`
- `environment`
- `handler`
- `kms_key_arn`
- `memory_size`
- `reserved_concurrent_executions`
- `role`
- `runtime`
- `timeout`
- `tracing_config`
- `vpc_config`
- `tags`

For more info, refer to the [Function Properties](http://rubyonjets.com/docs/function-properties/) docs.

---

## Summary of What We’ll Cover

- What function properties are
- Take a look at function properties in the Lambda Console
- Take a look at helpful CloudFormation docs that list the properties
- Show how Jets allows you to customize any property
- Explain Jets function properties precedence
- Deploy and demo function properties in action with an example

---

<TagLinks />