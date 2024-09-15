---
lang: ko-KR
title: How to Implement API Rate Limiting in Strapi CMS
description: Article(s) > How to Implement API Rate Limiting in Strapi CMS
icon: fa-brands fa-node
category: 
  - Node.js
  - Express.js
  - Strapi
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - node
  - nodejs
  - node-js
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Implement API Rate Limiting in Strapi CMS
    - property: og:description
      content: How to Implement API Rate Limiting in Strapi CMS
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/implement-api-rate-limiting-in-strapi.html
prev: /programming/js-node/articles/README.md
date: 2024-09-10
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725233479497/7c12e6e4-a6d7-433a-b23b-f25c33037ffa.jpeg
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Angular.js > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/js-node/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="How to Implement API Rate Limiting in Strapi CMS"
  desc="Implementing rate limiting in web applications is a necessary web development best practice. In an article published earlier, I delved deep into the benefits and real life use cases of API rate limiting. Some of the benefits include its use by develo..."
  url="https://freecodecamp.org/news/implement-api-rate-limiting-in-strapi/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1725233479497/7c12e6e4-a6d7-433a-b23b-f25c33037ffa.jpeg"/>

<!-- TODO: 작성 -->

<!-- 
Implementing rate limiting in web applications is a necessary web development best practice. In an <a href="https://www.freecodecamp.org/news/what-is-rate-limiting-web-apis/">article</a> published earlier, I delved deep into the benefits and real life use cases of API rate limiting.

Some of the benefits include its use by developers to restrict malicious access to websites, prevent DDoS attacks, conserve website resources, and ensure optimal web server performance.

This article covers the practical aspects of implementing rate limits in a Strapi application using several packages and techniques.

Let's get started.

---

## -table-of-contents">Table of Contents

- <a class="post-section-overview" href="#heading-demo-project">Demo Project</a>
<li><a class="post-section-overview" href="#heading-koa2-rate-limit">Koa Rate Limiter</a>
<li><a class="post-section-overview" href="#heading-custom-strapi-api-rate-limiter">Custom Strapi Api Rate Limiter</a>
<li><a class="post-section-overview" href="#heading-express-rate-limiter-implementation">Express-rate-limiter Implementation</a>
<li><a class="post-section-overview" href="#heading-conclusion">Conclusion</a>

---

## Demo Project

We'll be building an e-commerce site using <a href="https://strapi.io/">Strapi</a> as our backend framework. We'll then set up a rate limiter in our Strapi application to help guarantee our backend security. Postman will serve as our tool for testing the API endpoints. Let's go on to create a default Strapi application.

To create a strapi application, enter `npx create-strapi-app@latest {project name}` on the command line and follow the commands provided. To make the installation more straightforward, stick with the *quick start* installation method and your app should be ready.

This installation modality automatically sets up an easy-to-use SQLite database. However, you could choose to use any other SQL database supported by Strapi.

Alternatively, you can download the starter repo for the project from <a href="https://github.com/oluwatobi2001/Strapi-default">here</a> and install the necessary dependencies via `npm install`. Thereafter, you can execute the Strapi application by navigating to the Strapi application code folder on the command line and run `npm run develop`.

<img src="https://hackmd.io/_uploads/BkRn2PqrR.png" alt="Strapi Setup" width="798" height="384" loading="lazy">

On successful execution, you will be provided with the link to the localhost address to customize the application.

<img src="https://hackmd.io/_uploads/SkkSavcS0.png" alt="Strapi launch" width="853" height="177" loading="lazy">

Navigating to the link will require you to create an admin login mail and password. Successful completion of this step will give you access to the backend dashboard.

<img src="https://hackmd.io/_uploads/S1Vqxd5B0.png" alt="strapi login UI" width="720" height="606" loading="lazy">

You can utilize the Strapi dashboard UI to create APIs, or you can generate an API using `npm generate`. The APIs created will be used in completing the setup for the rate limiting functionality. We will be creating a product store for our e-commerce site. To easily set up products, kindly navigate to the Content-Type builder tab on the sidebar.  

<img src="https://hackmd.io/_uploads/r1RzbO5BC.png" alt="strapi dashboard" width="1286" height="641" loading="lazy">

The content-Type builder manager allows you to create various collections which will come in handy when setting up your APIs. In this case, the product and category collections will be created to enable you set up your product catalogues.

<img src="https://hackmd.io/_uploads/B16rbu5rA.png" alt="Creating a category endpoint" width="1121" height="462" loading="lazy">

<img src="https://hackmd.io/_uploads/SJhdb_qSR.png" alt="Creating a product entry" width="1105" height="453" loading="lazy">

After completing the creation of the collection types, you can easily add your products seamlessly into the backend database. In my case, I created phone brand products for sale.

<img src="https://hackmd.io/_uploads/HyR9JT6fR.jpg" alt="Product creation demo" width="785" height="345" loading="lazy">

Also noteworthy is that the collections we created in the Strapi dashboard automatically creates an API folder for us within our codebase. We will then be working on the project codebase subsequently.

The next step in this tutorial is to set up an efficient rate limiter for our Strapi APIs created in the repo using the tools discussed above.

---

## -koa2-rate-limit">koa2-rate-limit

In this section, we will be using the koa2-rate-limit package to build our project rate limiter. To install the package, navigate to your project folder on the command line and execute `npm i koa2-rate-limit`. On successful installation, navigate to the middleware subfolder within the API folder and create a code file. For ease of integration, name it as **rateLimit.js**.

After that, within the rate limit file, import and initialize the koa2-rate limit package.

```js
const RateLimit = require("koa2-ratelimit").RateLimit;
```

Afterwards, we can configure the koa rate limiter to a specified time interval frame and the total number of requests.

```js
module.exports = (config, { strapi }) => {
  // Configuring the rate limiter middleware
  const limiter = RateLimit.middleware({
    interval: { min: 1 }, // Time window in minutes
    max: 3, // Maximum number of requests per interval
 });
```

In the code above, the rate limiter middleware was invoked and the time interval in which the rate limit gets applied was set to 1 minute. The maximum number of requests (max) was set to 3 for this tutorial. You can tweak this to suit your preference.

```js
  return async (ctx, next) => {


    try {
      // Apply the rate limiter to the current request
      await limiter(ctx, next);
 } catch (err) {
      if (err.status === 429) {
        // Handle rate limit exceeded error
        strapi.log.warn('Rate limit exceeded.');
        ctx.status = 429;
        ctx.body = {
          statusCode: 429,
          error: 'Too Many Requests',
          message: 'You have exceeded the maximum number of requests. Please try again later.',
 };
 } else {
        // Re-throw other errors to be handled by Strapi's error-handling middleware
        throw err;
 }
 }
```

The code above defines a middleware which gets executed whenever a function is made on any API. If the requests exceed the given maximum, an error code is outputted. Below is the full code.

```js

'use strict';

/**
 * `RateLimit` middleware
 */
const RateLimit = require("koa2-ratelimit").RateLimit;

module.exports = (config, { strapi }) => {
  // Configuring the rate limiter middleware
  const limiter = RateLimit.middleware({
    interval: { min: 1 }, // Time window in minutes
    max: 3, // Maximum number of requests per interval
 });

  return async (ctx, next) => {

    try {
      // Apply the rate limiter to the current request
      await limiter(ctx, next);
 } catch (err) {
      if (err.status === 429) {
        // Handle rate limit exceeded error
        strapi.log.warn('Rate limit exceeded.');
        ctx.status = 429;
        ctx.body = {
          statusCode: 429,
          error: 'Too Many Requests',
          message: 'You have exceeded the maximum number of requests. Please try again later.',
 };
 } else {
        // Re-throw other errors to be handled by Strapi's error-handling middleware
        throw err;
 }
 }

 };
};
```

To ensure its seamless integration to all APIs within the Strapi project, the admin middlewares must also be configured.

```js
cconst rateLimit = require('../middlewares/rateLimit');

module.exports = [
 'strapi::logger',
 'strapi::errors',
 'strapi::security',
 'strapi::cors',
 'strapi::poweredBy',
 'strapi::query',
 'strapi::body',
 'strapi::session',
 'strapi::favicon',
 'strapi::public',

 {
   name: 'global::rateLimit',
   config: {},
 },
];
```

With this, we have successfully configured the rate limiter powered by koa2-ratelimiter. Here are pictures of its execution.

<img src="https://hackmd.io/_uploads/Bybbd-hj0.png" alt="Postman testing the categories endpoint" width="867" height="493" loading="lazy">

<img src="https://hackmd.io/_uploads/r1Zb_-3jC.png" alt="rate limiting error response output" width="952" height="503" loading="lazy">

---

## -custom-strapi-api-rate-limiter">Custom Strapi Api Rate Limiter

Within the **rateLimit** file in the **API/middlewares** folder, create a custom rate limiter by initializing a memory store.

```js
const requestCounts = new Map();
```

Thereafter, define your rate limit function and then configure the rate limiter.

```js
module.exports = (config, { strapi }) => {

  const rateLimitConfig = strapi.config.get('admin.rateLimit', {
    interval: 60 * 1000,  
    max: 3,  
 });
```

The time interval above is 1 minute while the maximum number of requests that can be made within the specified time interval is 3. You can tweak it to suit your preference.

```js
return async (ctx, next) => {

    const ip = ctx.ip; 
    const currentTime = Date.now();

    if (!requestCounts.has(ip)) {

      requestCounts.set(ip, { count: 1, startTime: currentTime });
 } else {
      const requestInfo = requestCounts.get(ip);


      if (currentTime - requestInfo.startTime > rateLimitConfig.interval) {
        requestInfo.count = 1;
        requestInfo.startTime = currentTime;
 } else {

 }


      if (requestInfo.count > rateLimitConfig.max) {
        strapi.log.warn(`Rate limit exceeded for IP: ${ip}`);

        ctx.status = 429;
        ctx.body = {
          statusCode: 429,
          error: 'Too Many Requests',
          message: 'You have exceeded the maximum number of requests. Please try again later.',
 };
        return;
 }
 }

    await next();
 };
};
```

Afterwards, a middleware is defined which obtains the user IP address and then stores it in the memory store. The time interval is also set from the current time the request is made and the request count gets updated with every new request made.

If the requests made exceed the maximum expected requests within the time interval of 1 minute in our case, an error is thrown. Here is the full code below.

```js
'use strict';
const requestCounts = new Map();

module.exports = (config, { strapi }) => {

  const rateLimitConfig = strapi.config.get('admin.rateLimit', {
    interval: 60 * 1000,  
    max: 3,  
 });

  return async (ctx, next) => {

    const ip = ctx.ip; 
    const currentTime = Date.now();

    if (!requestCounts.has(ip)) {

      requestCounts.set(ip, { count: 1, startTime: currentTime });
 } else {
      const requestInfo = requestCounts.get(ip);


      if (currentTime - requestInfo.startTime > rateLimitConfig.interval) {
        requestInfo.count = 1;
        requestInfo.startTime = currentTime;
 } else {

        requestInfo.count += 1;
 }


      if (requestInfo.count > rateLimitConfig.max) {


        ctx.status = 429;
        ctx.body = {
          statusCode: 429,
          error: 'Too Many Requests',
          message: 'You have exceeded the maximum number of requests. Please try again later.',
 };
        return;
 }
 }

    await next();
 };
};
```

Here is a demo of the project.

<img src="https://hackmd.io/_uploads/BkIyHZ2j0.png" alt="fetching the categories on Postman" width="792" height="505" loading="lazy">

<img src="https://hackmd.io/_uploads/HyxgHW2i0.png" alt="rate limiting error on Postman" width="943" height="509" loading="lazy">

### -express-rate-limiter-implementation">Express-rate-limiter Implementation

Express rate limiter is also another important package that can be used to implement rate limiting in our project. Right now, this package will be used to implement a route-specific API rate limiting.

The next step in this tutorial is setting up an efficient rate limiter for our Strapi APIs created in the repo.

To set up rate limiters on our Strapi applications, we'll be working mainly on the **routes** file. This can be navigated to by accessing the **src** folder within the project root directory. Within the **src** folder, navigate to the **API** folder which contains all the API files for the collections created in the Strapi dashboard.

<img src="https://hackmd.io/_uploads/S1ERbxndR.png" alt="the product route directory" width="239" height="548" loading="lazy">

The rate limiter will be enforced in the routes section of each API. For this tutorial, I will be using the products API as a demo API in this article.

```js
'use strict';


/**
 * product router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product.product');
```

This is the initial code setup in the **routes.js** file in our product API folder. The rate limiting tool of choice for this tutorial is express-rate-limit as it offers much simplicity and user-friendliness coupled with its efficiency. Here is a link to its <a href="https://www.npmjs.com/package/express-rate-limit">documentation</a>. To get this installed, navigate to the command line of the project directory and run

<pre class="language-bash" tabindex="0"><code class="language-bash">npm install express-rate-limit
```

On completion of its installation, we will be initializing it in the **products** file already created within the **routes** folder as follows.

```js
const { rateLimit } = require("express-rate-limit");
```

Go on and configure the rate limiter to your desired specifications.

```js
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 3 * 60 * 1000, // 3 minutes
  max: 2, // limit each IP to 2 requests per windowMs
  handler: async (req, res, next) => {
    const ctx = strapi.requestContext.get();
    ctx.status = 429;
    ctx.body = {
      message: "Too many requests",
      policy: "rate limit"
    };
    // Ensure the response is ended after setting the response body and status
    ctx.res.end();
  }
});

module.exports = limiter;
```

The code above serves to configure the rate limiting parameters we intend to use for the file.

`windowMs` represents the time interval in milliseconds for the number of requests. In our case, we specified a time of 3 minutes. Also, we specified the maximum number of requests that can be made within that same time frame. In our case, we used 2 for demo purposes.

However, the `limit` parameter also serves as an alternative to `max` parameter. Also included is the handler function that gets executed whenever the requests exceed the set number. It returns an **Error 429** with an error body containing “Too many requests”.

```js

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product.product', {
  config: {
    find: {
      middlewares: [
        async (ctx, next) => {
          await new Promise((resolve, reject) => {
            limiter(ctx.req, ctx.res, (error) => {
              if (error) {
                ctx.status = 429;
                ctx.body = { error: error.message };
                reject(error);
              } else {
                resolve();
              }
            });
          });
          await next();
        }
      ]
    }
  }
});
```

The above code illustrates the use of the Strapi API middleware which serves to ensure that the rate limit is fulfilled before the onward execution of the API requests. It also ensures that the request is terminated when the rate limit gets exceeded. Here is the final code for the project.

```js
'use strict';

/**
 * product router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 3 * 60 * 1000, // 3 minutes
  max: 2, // limit each IP to 2 requests per windowMs
  handler: async (req, res, next) => {
    const ctx = strapi.requestContext.get();
    ctx.status = 429;
    ctx.body = {
      message: 'Too many requests',
      policy: 'rate limit'
    };
    // Ensure the response is ended after setting the response body and status
    ctx.res.end();
  }
});

module.exports = createCoreRouter('api::product.product', {
  config: {
    find: {
      middlewares: [
        async (ctx, next) => {
          await new Promise((resolve, reject) => {
            limiter(ctx.req, ctx.res, (error) => {

              if (error) {
                ctx.status = 429;
                ctx.body = { error: error.message };
                reject(error);
              } else {
                resolve();
              }
            });
          });
          if (ctx.status !== 429) {
            await next();
          }
        }
      ]
    }
  }
});
```

Here is an image showing the rate limiting functionality.

<img src="https://hackmd.io/_uploads/S116Wu9BR.png" alt="product endpoint testing in Postman" width="802" height="516" loading="lazy">

<img src="https://hackmd.io/_uploads/S1zMGO5B0.png" alt="ratelimit successfully executed" width="738" height="432" loading="lazy">

You can also download the final code for the project <a href="https://github.com/oluwatobi2001/Strapi-project">here</a>. Having completed this, you can then go ahead to test the rate limiting functionality of your API. The Strapi application can be run by executing `npm run develop` in the command line.

---

## Conclusion

With this, we have come to the end of the tutorial. We hope you’ve learned essentially about rate limiting, its uses, tools and best practices.

You can also design multiple rate limiters within the code and implement them in any endpoint of your choice to test it out.

Feel free to drop any questions or comments. Happy coding!

-->

---

<TagLinks />