---
lang: ko-KR
title: "What is Cache Poisoning? How Hackers Manipulate Web Caches and How to Avoid It"
description: "Article(s) > What is Cache Poisoning? How Hackers Manipulate Web Caches and How to Avoid It"
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
      content: "Article(s) > What is Cache Poisoning? How Hackers Manipulate Web Caches and How to Avoid It"
    - property: og:description
      content: "What is Cache Poisoning? How Hackers Manipulate Web Caches and How to Avoid It"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/what-is-cache-poisoning-and-how-to-avoid-it.html
prev: /devops/security/articles/README.md
date: 2024-09-05
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725456042044/d3744ebe-ad28-42c4-99a2-25d6bd250aee.webp
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
  name="What is Cache Poisoning? How Hackers Manipulate Web Caches and How to Avoid It"
  desc="Web caches play an important role in speeding up our browsing experience. They save copies of web pages and other resources so that users can access them faster. But what happens when these caches become a tool for hackers? Let’s look at cache poison..."
  url="https://freecodecamp.org/news/what-is-cache-poisoning-and-how-to-avoid-it/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725456042044/d3744ebe-ad28-42c4-99a2-25d6bd250aee.webp"/>

Web caches play an important role in speeding up our browsing experience. They save copies of web pages and other resources so that users can access them faster.

But what happens when these caches become a tool for hackers?

Let’s look at cache poisoning, how it works, and how to protect against it.

---

## What is a Web Cache?

Caching means storing a copy of a piece of content. A web cache stores copies of web pages or parts of web content temporarily.

When you visit a website, your browser may cache some elements, like images and scripts. So the next time you visit the same site, the browser can load it faster.

Caching speeds up websites. It reduces the amount of data that must be transferred over the network. This makes browsing more efficient and provides a smoother experience for users.

A cache can be in several places. These include:

::: tabs

@tab:active Browser Cache

Your browser keeps a copy of recently visited web pages, images, and other content.

@tab CDN Cache

CDNs store copies of web resources in multiple, worldwide locations. This ensures that users access a nearby server, reducing load times.

@tab Reverse Proxy Cache

A reverse proxy server sits between users and the web server. It caches content to reduce server load and improve response times.

:::

Web caching works on a few basic principles.

::: tabs

@tab:active Expiration

Cached content has a time-to-live (TTL) value. After this TTL, the cache will be cleared.

@tab Validation

The cache checks with the server to see if the stored content is still valid or needs refreshing.

@tab Invalidation

If a website’s content updates, it will remove the cache and fetch the latest version from the server.

:::

---

## How Does Cache Poisoning Work?

Cache poisoning is a cyber-attack where a hacker manipulates the stored data in a web cache. The cache stores a harmful or altered version, not a real page.

When a user requests this cached content, they receive the manipulated data instead. This attack can lead to dangerous scripts running on the user’s browsers.

![DNS cache poisoning](https://cdn.hashnode.com/res/hashnode/image/upload/v1725563209590/ec36e4dd-94cf-47f5-9b9d-5c335fe26327.png)

In a cache poisoning attack, a hacker exploits how caching systems store content. Here’s a simplified explanation of how this attack works.

The attacker first identifies which resources on a website are cached. They look for pages or resources that the cache might store based on the URL or request headers.

The attacker then crafts a request that includes harmful content. This request will look like a legitimate request so that the cache stores the response.

The server processes the request and returns a response that gets cached. If the cache server doesn’t check the request, it will store the malicious content.

Now, when a user requests the cached resource, the cache serves the malicious version instead of the legitimate one.

### Common Techniques ### Used in Cache Poisoning

Cache poisoning exploits different vulnerabilities in web caching mechanisms. Some of the most common techniques include:

::: tabs

@tab:active Host Header Attacks

The “Host” header specifies which domain a request is for. Attackers can change this header. They can trick the server into caching a malicious response. For example

Normal request

```
GET /resource HTTP/1.1
Host: www.example.com
```

Malicious request

```
GET /resource HTTP/1.1
Host: attacker.com
```

If the cache stores the response based on the manipulated host, all users of “www.example.com” may get malicious content.

@tab HTTP Parameter Pollution

Attackers can inject unexpected parameters into URLs. This changes server behavior and poisons the cache. For example:

**Normal URL**: `https://example.com/page?id=123`

**Malicious URL**: `https://example.com/page?id=123&malicious_flag=101`

If the server does not sanitize these parameters, it may cache different content. The next user who visits the normal URL might receive the poisoned content.

@tab Vary Header Manipulation

The Vary header is an HTTP response header. It tells caches how to store different versions of a web resource based on certain request headers.

For example, if a server sends a **“Vary: User-Agent”** header, it means that the response may vary based on the client’s user agent. So caches will store separate versions of the resource for different user agents. For example, one for desktop browsers and another for mobile browsers.

If the “Vary” header is not checked properly, attackers can manipulate request headers to poison the cache.

For example, an attacker can craft a request with a manipulated “User-Agent” header. This can result in malicious content being cached for the next user.

:::

---

## How to Protect Against Cache Poisoning

Now that we understand how cache poisoning works, let’s see how to protect against it:

### Proper Input Validation

Always sanitize and check input from users. Especially when it comes to request headers and URL parameters. This stops attackers from injecting harmful content into cached requests.

### Use Secure Caching Headers

Set caching headers like “Cache-Control” and “Expires” correctly to avoid caching sensitive data. Use headers such as “no-cache,” “no-store,” and “must-revalidate” for dynamic or sensitive content.

### Control Cache Key Settings

Set the cache keys properly to avoid caching responses with user-specific parameters. Don’t use request headers or query parameters that attackers can easily manipulate.

### Implement HTTPS

Using HTTPS helps prevent attackers from intercepting and modifying requests and responses. HTTPS also reduces the risk of cache poisoning attacks, as it ensures data integrity.

---

## Conclusion

Cache poisoning poses a significant risk to web applications and users. Hackers can manipulate cached content to serve malicious data or steal sensitive information.

You can protect your web apps from cache poisoning by learning how it works and by using proper precautions. With the right approach, you can ensure a safer browsing experience for your users.

<SiteInfo
  name="Stealth Security"
  desc="Learn to attack and defend yourself online. Ethically."
  url="https://stealthsecurity.sh/"
  logo="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/e2d29914-80f5-46c4-8e92-b2e96e013d4d/thumb_Stealth_security.gif"
  preview="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/e2d29914-80f5-46c4-8e92-b2e96e013d4d/Stealth_security.gif"/>

---

<TagLinks />