---
lang: ko-KR
title: Build an API with the Jets Ruby Serverless Framework
description: 🔻Jets - Learning Content > Build an API with the Jets Ruby Serverless Framework
tags: ["crashcourse", "ruby", "jets", "aws", "aws-lambda", "cloudwatch"]
meta:
  - name: 🔻Jets - Learning Content > Build an API with the Jets Ruby Serverless Framework
    content: Build an API with the Jets Ruby Serverless Framework
  - property: og:title
    content: Build an API with the Jets Ruby Serverless Framework
  - property: og:description
    content: 🔻Jets - Learning Content > Build an API with the Jets Ruby Serverless Framework
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/ruby-rubyonjets-learning-content/20190113-build-an-api-service-with-jets-ruby-serverless-framework.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Build an API with the Jets Ruby Serverless Framework
desc: ...
link: https://blog.boltops.com/2019/01/13/build-an-api-service-with-jets-ruby-serverless-framework
logo: https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_590/https://blog.boltops.com/img/posts/2019/01/build-an-api-v2.png
color: rgba(54,70,153,0.2)
```

---

<YouTube id="7nB1kfNz5Vs" />


In this blog post, I’ll cover how to build a simple API service on AWS Lambda with the [Jets](http://rubyonjets.com/) Ruby Serverless Framework.

## Jets New API Mode

The [`jets new`](http://rubyonjets.com/reference/jets-new/) command has a few different modes: html, api, and job. We’ll use the handy api mode for this tutorial to create a starter project designed for APIs.

```sh
jets new demo --mode api
cd demo
```

We’ve successfully generated a starter Jets project. The nice thing about api mode is that it generates a lighter starter project that does not include things not needed like bootstrap and webpacker assets.

We are ready to now add some API code.

---

## Scaffold

We’ll use a scaffold to generate some basic CRUD.

```sh
jets generate scaffold Post title:string
vim .env.development # adjust to your local database creds
jets db:create db:migrate
```

---

## Local Testing

Let’s seed some data by creating a <FontIcon icon="iconfont icon-folder"/>`db/`<FontIcon icon="iconfont icon-advanced"/>`seeds.rb`:

```rb 
3.times do |i|
  Post.create(title: "Title #{i+1}")
end
puts "Seeding data completed"
```

Here’s the command to load the <FontIcon icon="iconfont icon-folder"/>`db/`<FontIcon icon="iconfont icon-advanced"/>`seeds.rb` data:

```sh
jets db:seed
```

Now let’s do some quick local testing with `jets console`.

```sh
jets console
# >> item = Post.find(1)
# >> item.title = "Title 1 Edit"
# >> item.save!
```

We can also test with a local server with `jets server`:

```sh
jets server # Check out site at http://localhost:8888/posts
```

Check out the API at [http://localhost:8888/posts](http://localhost:8888/posts)

![it should look something like this](https://blog.boltops.com/img/posts/2019/01/api-posts.png)

Since this is an API, we can also test with curl. 

Here’s how we create a <FontIcon icon="iconfont icon-json"/>`data.json` file and send it via `curl`.

```sh
cat << 'EOF' > data.json
{
  "post": {
    "title": "My Test Post 1"
  }
}
EOF

curl -i -X POST http://localhost:8888/posts -H 'Content-Type: application/json' --data @data.json
```

The `curl` output looks something like this:

```sh
curl -i -X POST http://localhost:8888/posts -H 'Content-Type: application/json' --data @data.json
# HTTP/1.1 201 Created
# Access-Control-Allow-Origin: *
# Access-Control-Allow-Credentials: true
# Content-Type: application/json
# X-Jets-Base64: no
# X-Runtime: 0.115564
# Server: WEBrick/1.4.2 (Ruby/2.5.3/2018-10-18)
# Date: Sun, 13 Jan 2019 19:21:00 GMT
# Content-Length: 113
# Connection: Keep-Alive
# 
# {"id":4,"title":"My Test Post 1","created_at":"2019-01-13T19:20:59.000Z","updated_at":"2019-01-13T19:20:59.000Z"}
```

---

## Deploy

Before we deploy, we need to create a database that AWS Lambda will have access to. You can follow the AWS RDS docs. [Step 1: Create an RDS DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateDBInstance.html). It is also briefly mentioned in this video: [Jets Tutorial Deploy to AWS Lambda Part 2: AWS Lambda Ruby](https://blog.boltops.com/2018/09/08/jets-tutorial-deploy-to-aws-lambda-part-2).

We’ll also have to create and migrate the RDS database.

```sh
vim .env.development.remote # configure a remote RDS DB
JETS_ENV_REMOTE=1 jets db:create db:migrate
```

Once that is completed, let’s deploy our application to AWS Lambda.

```sh
jets deploy
# 
# 07:28:53PM UPDATE_COMPLETE AWS::CloudFormation::Stack demo-dev
# Stack success status: UPDATE_COMPLETE
# Time took for stack deployment: 2m 27s.
# Prewarming application.
# API Gateway Endpoint: https://7bfi3qwj61.execute-api.us-west-2.amazonaws.com/dev/
```

At the end of the deploy, you’ll see the API Gateway url that looks something like this `https://7bfi3qwj61.execute-api.us-west-2.amazonaws.com/dev/`. Note, your URL will be different. 

![Go to that url, and you’ll see something like this](https://blog.boltops.com/img/posts/2019/01/api-posts-on-lambda.png)

![You’ll be able to see the Lambda functions.](https://blog.boltops.com/img/posts/2019/01/api-lambda-console.png)

![You’ll also be able to see the API Gateway resources.](https://blog.boltops.com/img/posts/2019/01/api-gateway-console.png)

---

## Testing It

We’ll use the curl commands again to create some posts with AWS Lambda using the <FontIcon icon="iconfont icon-json"/>`data.json` file we created earlier.:

```sh
curl -X POST https://7bfi3qwj61.execute-api.us-west-2.amazonaws.com/dev/posts -H 'Content-Type: application/json' --data @data.json
#
# {"id":7,"title":"My Test Post 1","body":null,"published":null,"created_at":"2019-01-13T19:34:29.000Z","updated_at":"2019-01-13T19:34:29.000Z"}
```

---

## Extra Environments

An interesting benefit of running applications on AWS Lambda is that you only get charged for actual requests. So [extra environments](https://blog.boltops.com/2018/09/13/jets-tutorial-extra-environments-part-7) are likely in the [AWS free tier](https://aws.amazon.com/free/). You could do this:

```sh
JETS_ENV_EXTRA=2 jets deploy
JETS_ENV_EXTRA=3 jets deploy
...
JETS_ENV_EXTRA=8 jets deploy
```

You essentially get unlimited free environments, each of them taking a few minutes to provision.

---

## Live Demo

A live demo of this tutorial is available at [https://api.demo.rubyonjets.com](https://api.demo.rubyonjets.com/).

That’s it! That’s all it took to create a RESTful API on AWS Lambda with the [Jets Ruby Serverless Framework](http://rubyonjets.com/).

Hope you’ve enjoyed this article. If you find [Ruby on Jets](http://rubyonjets.com/) interesting, please give it ⭐️ on [<FontIcon icon="iconfont icon-github"/>`tongueroo/jets`](https://github.com/tongueroo/jets). I’d appreciate it. 👍

---

<TagLinks />