---
lang: ko-KR
title: Extra Environments Part 7
description: 🔻Jets - Learning Content > Extra Environments Part 7
tags: ["crashcourse", "ruby", "jets", "aws", "aws-lambda", "cloudwatch"]
meta:
  - name: 🔻Jets - Learning Content > Extra Environments Part 7
    content: Extra Environments Part 7
  - property: og:title
    content: Extra Environments Part 7
  - property: og:description
    content: 🔻Jets - Learning Content > Extra Environments Part 7
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/ruby-rubyonjets-learning-content/20180913-jets-tutorial-extra-environments-part-7.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Extra Environments Part 7
desc: ...
link: https://blog.boltops.com/2018/09/13/jets-tutorial-extra-environments-part-7
logo: https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_677/https://blog.boltops.com/img/posts/2018/09/jets-tutorial-part-7-extra-environments-v1.png
color: rgba(192,86,86,0.2)
```

---

<YouTubei id="AJy6NV_Zr30" />

In this video, we continue the tutorials on the [Jets Ruby Serverless Framework](http://rubyonjets.com/) that adds Ruby support to AWS Lambda. We talk about a Jets concept called extra environments. With one environment variable `JETS_ENV_EXTRA`, we can create as many additional instances of environments as we wish. This helps when multiple people are asking to use the development, staging, or uat environment but cannot because it is currently used by someone else or another feature. Usually, you end up having to wait until the environment free. With this Jets concept you can create as many environments as required.

It is also interesting that AWS Lambda pricing is based on a usage, the extra environments pretty much are free. Usually, development environments get much less traffic or requests.

---

## Summary of What We’ll Cover

- Explain `JETS_ENV_EXTRA` concept
- Provide a demo

---

## Cleanup

To delete the extra environment:

```sh
JETS_ENV_EXTRA=2 jets delete
```

Note, you’ll be prompted with an ‘Are you sure?’ message.