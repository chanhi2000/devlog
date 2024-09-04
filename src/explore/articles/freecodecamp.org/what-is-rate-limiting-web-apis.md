---
lang: ko-KR
title: "What is Rate Limiting? Exploring the Role of Rate Limiting in Protecting Web APIs from Attacks"
description: "Article(s) > What is Rate Limiting? Exploring the Role of Rate Limiting in Protecting Web APIs from Attacks"
icon: fas fa-shield-halved
category: 
  - Security
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - security
  - sec
  - rate-limit
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is Rate Limiting? Exploring the Role of Rate Limiting in Protecting Web APIs from Attacks"
    - property: og:description
      content: "What is Rate Limiting? Exploring the Role of Rate Limiting in Protecting Web APIs from Attacks"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/what-is-rate-limiting-web-apis.html
prev: /devops/security/articles/README.md
date: 2024-09-04
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725036062594/0efa7e12-c5d5-410f-ad9c-ec6a67a31f7c.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Security > Article(s)",
  "desc": "Article(s)",
  "link": "/devops/security/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="What is Rate Limiting? Exploring the Role of Rate Limiting in Protecting Web APIs from Attacks"
  desc="Back-end servers are the powerhouse of modern-day applications; hence, a high level of expertise goes into building them. However, it's important to ensure that these back-end servers are well-secured from bad actors (hackers, phishers). These bad el..."
  url="https://freecodecamp.org/news/what-is-rate-limiting-web-apis/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725036062594/0efa7e12-c5d5-410f-ad9c-ec6a67a31f7c.jpeg"/>

Back-end servers are the powerhouse of modern-day applications; hence, a high level of expertise goes into building them. However, it's important to ensure that these back-end servers are well-secured from bad actors (hackers, phishers).

These bad elements access the back-end servers through vulnerable points in the gateways to wreak havoc, stealing relevant info and negatively affecting application performance and efficiency via various forms of API attacks such as SQL and non-SQL-based injections, Distributed Denial-of-Service (DDoS) attacks, code malware, and other methods to exploit vulnerabilities.

In this article, I will be focusing on rate limiting, an important hack that helps protect the back-end API from being exploited by hackers via the use of DDoS, Brute-force attacks and other related malicious activities. But first of all, what does rate limiting mean?

[[toc]]

---

## What is Rate Limiting?

Rate limiting is a mechanism put in place to regulate the frequency of requests made by a client to the back-end server. It prevents the repetition of a client request within a defined time frame.

Why do we have to implement rate limiting in the API development? We'll discuss that in the next section.

---

## Importance of Rate Limiting

Here are some of the reasons why rate limiting is used in back-end application development.

### DDoS Attacks

First of all, it serves as a preventive measure to mitigate against DDoS attacks. DDoS attacks are malicious attacks on servers which involves flooding the server endpoints with multiple requests, often millions, resulting in reduced server efficiency and disruption of server functions. In most cases, they occur with the use of automated bots.

These attacks can be volumetric, protocol-based or application layer-based. A key example of this form of attack occurred on the GitHub website in the year 2018.

### Web Scraping

Rate limiting also plays a role in protecting web applications and web servers from unauthorized web scrapers and web crawlers. These tools, also automated, usually emit requests continually to collect relevant website data which can be exposed to unauthorized. Having a good rate limiter in place helps to prevent all these.

### Brute Force Attack

This involves trying to gain access to a server's resources by trying all possible configurations to get access to the resource. This could be done manually but is mostly automated with the use of bots as it is resource-consuming. Rate limiting also proves effective in preventing these form of attacks by disabling the requests if they exceed the required number of requests within a specific time frame.

### Resource Optimization

Server requests usually cost the API owners some expenses in terms of running and maintenance cost. Having a rate limiter in place helps to regulate the number of requests the server can handle, help conserve cost and maximize efficiency. Subsequently, we will highlight some algorithms which rate limiters are built on.

---

## Adoption and Usage of Rate-Limiting by Popular Sites

Rate limiting as a security measure has been adopted by a lot of tech products, ranging from large-scale to small-scale applications. For example, Twitter (X) has a rale limit feature implemented in the application programming interfaces they provide to developers.

These interfaces allow access to Twitter sign-up extension and other features made available by Twitter. To guarantee the efficient running of these interfaces, Twitter imposed a rate limit of 50 tweet post requests per user every 24 hours. More details about this can be found [<FontIcon icon="fa-brands fa-x-twitter"/>here](https://developer.twitter.com/en/docs/twitter-api/rate-limits).

---

## Other Real life Use-cases of API Rate Limiting

The use of an application programming interface isn't limited to just what popular sites like Twitter use it for. Here are some other real-life applications of rate-limiting in today's world.

### Reducing the Incidence of Spamming

[<FontIcon icon="fas fa-globe"/>Research](https://emailtooltester.com/en/blog/spam-statistics/#:~:text=Survey%20Methodology-,Key%20statistics,spam%20messages%20in%20some%20form.) reveals that over 160 billion spam emails are sent daily. Hence this has prompted the implementation of rate-limiting to curb the spread of unsolicited messages and spam content via messaging and emailing platforms over a specific time range. By so doing, it encourages responsible use of these platforms.

### Tackling Fraudulent Activities

Rate limiting is currently implemented across web applications to help detect unusual web application activities by some users which may possess fraudulent intents. This measure serves to prevent and mitigate the ongoing fraudulent transactions being performed over the application server.

### Disabling Malicious User Authentication

Individuals with malicious intent may want to compromise the web servers by taking several measures such as brute force, DDoS and other techniques to take over other users' accounts.

However, several sites have efficient rate limit systems in places which limit the amount of login attempts an individual has to a site within a specific time range. This also contributes to web security measures.

---

## How Does Rate Limiting Work?

Rate-limiting tools used in applications are implemented based on different algorithm structures. These algorithms guide the functionality of the rate-limiting tool whose end goal is to limit the number of requests a server receives per time to enhance its efficiency.

---

## Examples of Rate Limiting Algorithms

Here are some of the most popular algorithms currently in use.

### Fixed Window Algorithm

This algorithm is based on fixing a static definite time interval by the server for all clients, regulating the number of requests that can be made to the server, irrespective of the number of clients accessing the API.

For example, setting a request limit of five minutes prevents any client from accessing the endpoint until the expiration of the five minutes window. This model isn’t cost-effective.

### Sliding Window Algorithm

This algorithm is similar in configuration to the fixed window algorithm but it provides a solution to the fixed window algorithm by individualizing client access to a given number of requests within a specific time interval by creating independent time intervals for each client.

For example, if Client A accesses the request by 10:00, the client is allowed to make 10 requests until the expiration of the time by 10:03, while Client B who accesses the request by 10:02 is allowed to make 10 requests until the expiration by 10:05.

### Leaking Bucket Algorithm

This algorithm is based on the literal meaning of its name: the leaking bucket. It ensures that only a specific number of requests can be processed by the server at any given time. Any requests exceeding this number will be discarded and issued an "**error 429**". This is to ensure that the server is not overloaded and to guarantee maintenance of server efficiency and speed.

### Token Bucket Algorithm

This model is similar to the leaking bucket as there is a hypothetical bucket which serves as the rate limiter. This bucket serves to manage tokens and new tokens are added periodically into the bucket.

When a request is made, a token gets discarded, and this continues until all the tokens in the bucket get depleted. At that point, any request made will be discarded with an "**error 429**". This also helps to prevent server congestion and ensure maximal efficiency.

---

## Rate Limiting Best Practices

Efficient web API development is mainly achievable by following the best API development practices. To maximize the use of a rate limiter as an API security measure, the following needs to be implemented.

- **Firstly, choose a compatible rate-limiting algorithm.** Having a strong rate-limiting algorithm in place will be essential to achieve the desired result. Choosing the best rate-limiting algorithm in sync with your API endpoint will also be needed.
- **Ensure that the limit sets are within the reasonable limit ranges**. Having arbitrary rate limit parameters set could negatively affect user experience and that could defeat its purpose. Setting a reasonable time limit to maximize user experience and militate against attacks has proven to be much more effective.
- **Ensure efficient error handling and provide necessary feedback to the client.** The default rate limiting error code is error code 429. Appropriate handling of the errors that occur during the API usage especially due to the abuse of the API will be necessary to provide the necessary feedback to the user.
- **Implement flexible rate-limiting mechanisms across several parameters.** Setting a fixed time interval across all endpoints seems to be a bad practice as some API endpoints are much more data-sensitive than others. Hence, having a flexible rate limiter that sets parameters in order of relevance helps to maximize server efficiency and ensure security.
- **Ensure the provision of appropriate application logging, monitoring and observability tools.** Having in place API metrics, logging, monitoring and observability tools also helps to serve as an additional security hack for Web APIs as they help monitor server activity, and through the use of monitoring alerts, notify the server developer when suspicious requests are detected on the server.
- **Ensure synchronicity of rate limiting and other API security measures.** Proper synchronicity of rate limiters with other API security hacks should be harnessed to potentiate the API security measures. Adequate knowledge of the security measures and expertise is needed in order not to counteract the existing security measures.
- **Ensure proper API documentation.** Adequate API documentation is also needed to ensure users, other developers and clients alike are aware of the rate-limiting practice in place to ensure compliance with the rate-limiting rules.

---

## Conclusion

In conclusion, we have highlighted rate limiting as an important API security hack and some of it's real life use cases.

Feel free to check out my other articles [<FontIcon icon="fas fa-globe"/>here](https://linktr.ee/tobilyn77). Till next time, keep on coding!

---

<TagLinks />