---
lang: ko-KR
title: Different Environments Part 8
description: 🔻Jets - Learning Content > Different Environments Part 8
tags: ["crashcourse", "ruby", "jets", "aws", "aws-lambda", "cloudwatch"]
meta:
  - name: 🔻Jets - Learning Content > Different Environments Part 8
    content: Different Environments Part 8
  - property: og:title
    content: Different Environments Part 8
  - property: og:description
    content: 🔻Jets - Learning Content > Different Environments Part 8
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/ruby-rubyonjets-learning-content/20180926-jets-tutorial-different-environments-part-8.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Different Environments Part 8
desc: ...
link: https://blog.boltops.com/2018/09/26/jets-tutorial-different-environments-part-8
logo: https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_780/https://blog.boltops.com/img/posts/2018/09/jets-tutorial-part-8-different-environments-v2.png
color: rgba(13,31,56,0.2)
```

---

<YouTube id="-fiSQ2nBSxw" />

In this video, we continue the tutorials on the [Jets Ruby Serverless Framework](http://rubyonjets.com/) that adds Ruby support to AWS Lambda. We talk about the difference between Jets extra vs different environments. Different environments refer to development, staging, uat, production environments. Extra environments refer to instances of each of those environments. For example, development-1, development-2, development-3, etc.

Extra environments are controlled with the environment variable `JETS_ENV_EXTRA`
Different environments are controlled with the environment variable `JETS_ENV`

---

## Summary of What We’ll Cover

- Explain `JETS_ENV`
- Provide a demo

---

## Cleanup

To delete the newly created production environment:

```sh
JETS_ENV=production jets delete
```

Note, you’ll be prompted with an ‘Are you sure?’ message.
