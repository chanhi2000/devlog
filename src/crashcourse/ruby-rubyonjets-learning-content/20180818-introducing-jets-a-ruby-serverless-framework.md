---
lang: ko-KR
title: Introducing Jets - A Ruby Serverless Framework
description: 🔻Jets - Learning Content > Introducing Jets - A Ruby Serverless Framework
tags: ["crashcourse", "ruby", "jets", "aws", "aws-lambda", "cloudwatch"]
meta:
  - name: 🔻Jets - Learning Content > Introducing Jets - A Ruby Serverless Framework
    content: Introducing Jets - A Ruby Serverless Framework
  - property: og:title
    content: Introducing Jets - A Ruby Serverless Framework
  - property: og:description
    content: 🔻Jets - Learning Content > Introducing Jets - A Ruby Serverless Framework
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/ruby-rubyonjets-learning-content/20180818-introducing-jets-a-ruby-serverless-framework.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Introducing Jets - A Ruby Serverless Framework
desc: ...
link: https://blog.boltops.com/2018/08/18/introducing-jets-a-ruby-serverless-framework
logo: https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_800/https://blog.boltops.com/img/posts/2018/08/introducing-jets-v5.png
color: rgba(20,27,106,0.2)
```

---

<YouTube id="17Y3AJl9dw4" />

---


::: info Update 2018/12/12

[Official Ruby Support](https://aws.amazon.com/blogs/compute/announcing-ruby-support-for-aws-lambda/) was announced at [AWS re:Invent 2018 on Nov 29!](https://twitter.com/tongueroo/status/1068199997097750528) Jets has switched over to it: [Official AWS Ruby Support for Jets 🎉](https://blog.boltops.com/2018/12/12/official-aws-ruby-support-for-jets-serverless-framework). This article has been updated to reflect official Ruby support, but video in the post is out-of-date and will be updated in time.

:::

[Ruby on Jets](http://rubyonjets.com/) is a framework that allows you to build serverless applications in a beautiful language: Ruby. It includes everything needed to build and deploy applications to [AWS Lambda](https://aws.amazon.com/lambda/). I love working with Rails, Ruby and AWS; and wanted to work with something similar in the serverless world. So I built Jets.

It is key to understand AWS Lambda and API Gateway to understand Jets conceptually. Jets maps your code to Lambda functions and API Gateway resources.

- __AWS Lambda__ provides Functions as a Service. It allows you to upload and run functions without worrying about the underlying infrastructure.
- __API Gateway__ is the routing layer for Lambda. It is used to route REST URL endpoints to Lambda functions.

---

## Example Architecture

Many architectures can be built with Jets. Here’s an example traditional Web architecture that can easily be accomplished with Jets:

![With Jets, you write code and Jets turns the code into AWS Lambda functions and API Gateway resources.](https://blog.boltops.com/img/posts/2018/09/jets-web-architecture.png)

---

## Functions

[Jets](http://rubyonjets.com/) supports writing simple AWS Lambda functions with Ruby. You define them in the <FontIcon icon="iconfont icon-folder"/>`app/functions` folder. A function looks like this:

> <FontIcon icon="iconfont icon-folder"/>`app/functions/`<FontIcon icon="iconfont icon-advanced"/>`simple.rb`:

```rb
def handler_function(event:, context:)
  puts "hello world"
end
```

The default handler is named `handler_function`. 


![The lambda function shows up in the Lambda console like this](https://blog.boltops.com/img/posts/2018/10/jets-simple-lambda-function-console.png)

![You can run the function in the AWS Lambda console and see the results](https://blog.boltops.com/img/posts/2018/10/jets-simple-lambda-function-result.png)

Though simple functions are supported by Jets, they do not add much value as other classes like [Controllers](http://rubyonjets.com/docs/controllers/) and [Jobs](http://rubyonjets.com/docs/jobs/). These other classes add many conveniences and are more powerful to use. We’ll cover them next.

---

## Controllers

Here’s the first example of Jets code, a controller:

> <FontIcon icon="iconfont icon-folder"/>`app/controllers/`<FontIcon icon="iconfont icon-advanced"/>`posts_controller.rb`:

```rb
class PostsController < ApplicationController
  def index
    # renders Lambda Proxy structure compatiable with API Gateway
    render json: {hello: "world", action: "index"}
  end

  def show
    id = params[:id] # params available
    # puts goes to the lambda logs
    puts event # raw lambda event available
    render json: {action: "show", id: id}
  end
end
```

If you’re familiar with Rails and Sinatra, this will look familiar. Helper methods like params provide the parameters from the API Gateway event. The render method renders a Lambda Proxy structure back that API Gateway understands.

Jets takes each controller’s public methods and turns them into Lambda functions. 

![Here are the functions in the Lambda console](https://blog.boltops.com/img/posts/2018/08/intro/demo-lambda-functions-controller.png)

---

## Routes

Here’s what a routes file could look like:

> <FontIcon icon="iconfont icon-folder"/>`config/`<FontIcon icon="iconfont icon-advanced"/>`routes.rb`:

```rb
Jets.application.routes.draw do
  get  "posts", to: "posts#index"
  get  "posts/new", to: "posts#new"
  get  "posts/:id", to: "posts#show"
  post "posts", to: "posts#create"
  get  "posts/:id/edit", to: "posts#edit"
  put  "posts", to: "posts#update"
  delete  "posts", to: "posts#delete"
end
```

Jets takes the routes file, creates the corresponding API Gateway resources, and associates them with Lambda functions. 

![Here are the routes in the API Gateway console](https://blog.boltops.com/img/posts/2018/08/intro/demo-api-gateway.png)

---

## Jobs

Jets also supports asynchronous jobs that work outside the web request-response cycle. Job code looks like:

> <FontIcon icon="iconfont icon-folder"/>`app/jobs/`<FontIcon icon="iconfont icon-advanced"/>`hard_job.rb`:

```rb
class HardJob < ApplicationJob
  rate "10 hours" # every 10 hours
  def dig
    {done: "digging"}
  end

  cron "0 */12 * * ? *" # every 12 hours
  def lift
    {done: "lifting"}
  end
end
```

The code above creates Lambda functions and CloudWatch event rules to handle the scheduling of work.

![You can check for the job functions in the Lambda console](https://blog.boltops.com/img/posts/2018/08/intro/demo-lambda-functions-jobs.png)

![You can also see the associated CloudWatch Event Rule in the CloudWatch console](https://blog.boltops.com/img/posts/2018/08/intro/demo-job-cloudwatch-rule.png)

---

## Project structure

Here’s what a Jets project structure looks like.

```
.
├── app
│   ├── controllers
│   ├── helpers
│   ├── javascript
│   ├── jobs
│   ├── models
│   └── views
├── bin
├── config
├── db
├── public
└── spec
```

We have the traditional MVC folders: <FontIcon icon="iconfont icon-folder"/>`app/models`, <FontIcon icon="iconfont icon-folder"/>`app/views`, and <FontIcon icon="iconfont icon-folder"/>`app/controllers`. The <FontIcon icon="iconfont icon-folder"/>`config` folder contains your application’s configuration settings. Further explanation for each folder is provided on the [Project Structure](http://rubyonjets.com/docs/structure/) docs.

---

## Quick Start

Here are commands that generate a CRUD app to get you started:

```sh
gem install jets
jets new demo
cd demo
jets generate scaffold Post title:string
vim .env.development # edit with local db settings
jets db:create db:migrate
jets server
```

The jets server command starts a server that mimics API Gateway so you can test locally. Open [http://localhost:8888/posts](http://localhost:8888/posts) and test out the CRUD site created from the scaffold.

When you’re ready, adjust your <FontIcon icon="iconfont icon-file"/>`.env.development.remote` with an RDS database and deploy to AWS Lambda.

```sh
vim .env.development.remote # adjust with remote db settings
jets deploy
#
# API Gateway Endpoint: https://puc3xyk4cj.execute-api.us-west-2.amazonaws.com/dev/
```

You should see something like this

![Lambda Functions](https://blog.boltops.com/img/posts/2018/08/intro/demo-lambda-functions.png)

![API Gateway](https://blog.boltops.com/img/posts/2018/08/intro/demo-api-gateway.png)

![The app itself](https://blog.boltops.com/img/posts/2018/08/intro/jets-demo-posts-list-v2.png)

Here’s a live [Demo](https://demo.rubyonjets.com/posts) of this tutorial. Note, the example records automatically get deleted and reseeded daily.

---

## Other Live demos

Here are additional Live Demos of Jets applications:

- [A Simple API with Jets](https://api.demo.rubyonjets.com/): A Simple API. Here’s a the blog post: [Build an API with the Jets Ruby Serverless Framework](https://blog.boltops.com/2019/01/13/build-an-api-service-with-jets-ruby-serverless-framework/)
- [Jets Afterburner: Rails Support](https://afterburner.demo.rubyonjets.com/): Please read over the considerations in the docs.
- [Mega Mode: Jets and Rails Combined](https://mega.demo.rubyonjets.com/): A interesting hybrid mode.
- [Image Upload with CarrierWave](https://upload.demo.rubyonjets.com/): Binary Support

More examples are in the [<FontIcon icon="iconfont icon-github"/>`tongueroo/jets-examples`](https://github.com/tongueroo/jets-examples) repo.

---

## Extra Environments

An interesting benefit of running applications on AWS Lambda is that you only get charged for actual requests. So [extra environments](https://blog.boltops.com/2018/09/13/jets-tutorial-extra-environments-part-7) are likely in the [AWS free tier](https://aws.amazon.com/free/). You could do this:

```
JETS_ENV_EXTRA=2 jets deploy
JETS_ENV_EXTRA=3 jets deploy
...
JETS_ENV_EXTRA=8 jets deploy
```

You essentially get unlimited free environments, each of them taking a few minutes to provision.

---

## Binary Gems

With Serverless, you will might run into the quirky binary gem issue. Most gems are pure Ruby code and can be used as-is on AWS Lambda. However, some gems like nokogiri use compiled native extensions. So you must compile these binary gems to the Lambda target architecture for them to work. Jets uses Lambda Gems to resolve this and makes for a much more seamless and pleasant developer experience. The Beta for [Lambda Gems](https://blog.boltops.com/2019/01/01/introducing-lamdagems-hassle-free-serverless-ruby-build-and-deploy) is has been open. Early signups for [Lambda Gems](https://www.lambdagems.com) will receive a special offer for their support.

---

<TagLinks />

