---
lang: ko-KR
title: Official AWS Ruby Support for Jets
description: 🔻Jets - Learning Content > Official AWS Ruby Support for Jets
tags: ["crashcourse", "ruby", "jets", "aws", "aws-lambda", "cloudwatch"]
meta:
  - name: 🔻Jets - Learning Content > Official AWS Ruby Support for Jets
    content: Official AWS Ruby Support for Jets
  - property: og:title
    content: Official AWS Ruby Support for Jets
  - property: og:description
    content: 🔻Jets - Learning Content > Official AWS Ruby Support for Jets
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/ruby-rubyonjets-learning-content/20181212-official-aws-ruby-support-for-jets-serverless-framework.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Official AWS Ruby Support for Jets
desc: ...
link: https://blog.boltops.com/2018/12/12/official-aws-ruby-support-for-jets-serverless-framework
logo: https://res.cloudinary.com/boltops/image/fetch/c_limit,f_auto,q_auto,w_604/https://blog.boltops.com/img/posts/2018/12/official-ruby-support-v1.png
color: rgba(34,18,53,0.2)
```

---

Ever since AWS released official Ruby support for AWS Lambda on [Nov 29 at re:Invent](https://twitter.com/tongueroo/status/1068199997097750528), I’ve been super excited about switching Jets over to the official AWS version of Ruby. Happy to say that [Jets](http://rubyonjets.com/) is now on the official AWS Ruby runtime. Knew it was going to be interesting to learn about [AWS Lambda Custom Runtimes](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html) and [Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) as part of this Jets update.

---

## Lambda Custom Runtimes Are Fast

The official Lambda Ruby runtime is built on top of [AWS Lambda Custom Runtimes](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html) technology. Custom Runtimes allow us to add support of any language. Since Ruby is now officially supported, we do not have to create our own runtime. Though there are use-cases for this. For example, different Ruby versions.

It was fun to study and compare how Custom Runtimes work vs a traditional shim. If you have ever built your own shim yourself to support other languages, they way AWS implemented Custom Runtimes would make complete sense.

Essentially, a Custom Runtime is a custom server. The server proxies request from one language to another. This ensures that the runtime is kept in memory and fast. This is similar to how Jets achieved Native performance for Ruby before official support.

The beautiful thing about official Custom Runtimes is that the runtime gets prepackaged as part of the Lambda function creation process. Very cool!

---

## Lambda Custom Runtime Fix

There’s an additional benefit of AWS implementing Ruby support as a Custom Runtime. When updating Jets, I ran into an issue with the actual AWS Ruby Runtime itself. The [Ruby `aws-sdk`](https://aws.amazon.com/sdk-for-ruby/) has it’s own version of `.to_json` that collides with the ActiveSupport version. The issue only seems to trigger on some aws-sdk calls like `sns.publish`. The cool thing about Ruby being implemented as Custom Runtime is that we can patch a fix for it now. We do not have to wait until AWS officially fixes it. Here’s the fix for the `.to_json` collision in Jets: [lambda/marshaller.rb.](https://github.com/tongueroo/jets/blob/master/lib/jets/overrides/lambda/marshaller.rb)

---

## Lambda Layers: Gem Layers

AWS introduced Lambda Layers at the same time as Ruby Support. With [Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html), you can add additional files to the Lambda server in the form of layers. These layers are combined together like a pancake and flattened out. From the Lambda Layers docs, AWS suggests:

> With layers, you can use libraries in your function without needing to include them in your deployment package.

This helps you to keep the code package size under the key [3MB limit](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html), thereby allowing you to use the live Lambda console code editor.

> You can develop your function code in the Lambda console as long as you keep your deployment package under 3 MB.

Having the ability to change your code and debug live significantly increases your [development speed and happiness](http://rubyonjets.com/docs/faster-development/). Previously, Jets accomplished this by separately packaging the dependencies and lazying loading them as part of the shim. In this Jets upgrade, that logic has all be converted to a Lambda Layer and named the [Gem Layer](http://rubyonjets.com/docs/gem-layer/). Once again, awesome.

---

## Screenshot

Hopefully, you found the background info above interesting. 

![Now here’s a Jets application running on official Ruby support.](https://blog.boltops.com/img/posts/2018/12/lambda-console-official-ruby.png)


---

## Jets Code

For those who might not seen Jets code before, here are some examples. Here’s a [simple function](http://rubyonjets.com/docs/functions/):

> <FontIcon icon="iconfont icon-folder"/>`app/functions/`<FontIcon icon="iconfont icon-advanced"/>`simple.rb`:

```rb
def lambda_handler(event:, context:)
  pp event
  puts "hello world"
  {foo: "bar"}
end
```

Here’s a [Jets Controller](http://rubyonjets.com/docs/controllers/):

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

Here’s a [Jets Job](http://rubyonjets.com/docs/jobs/).

> <FontIcon icon="iconfont icon-folder"/>`app/jobs/`<FontIcon icon="iconfont icon-advanced"/>`hard_job.rb`:

```rb
class HardJob < ApplicationJob
  class_timeout 300 # 300s or 5m, current Lambda max is 15m

  rate "10 hours" # every 10 hours
  def dig
    puts "done digging"
  end

  cron "0 */12 * * ? *" # every 12 hours
  def lift
    puts "done lifting"
  end
end
```

More info on the official [rubyonjets.com docs](http://rubyonjets.com/).

---

## How to upgrade

The upgrade path is transparent. Since Jets [Controllers](http://rubyonjets.com/docs/controllers/) and [Jobs](http://rubyonjets.com/docs/jobs/) interfaces did not change, there’s not a lot to it:

```sh
cd project # your jets project
bundle update
jets upgrade # optional
jets deploy
```

The [`jets upgrade`](http://rubyonjets.com/reference/jets-upgrade/) command is actually optional and simply gets rid of a deprecation warning for a config removal in the latest version.

That’s it! Jets is now on official AWS Ruby Support. Hope you like this article and give [Jets](http://rubyonjets.com/) a try. Also if you find Jets interesting, please give it ⭐️ it on [<FontIcon icon="iconfont icon-github"/>`tongueroo/jets`](https://github.com/tongueroo/jets). I’d appreciate it. 👍

---

## Live demos

Here are some additional Live Demos of Jets applications:

- [A Simple API with Jets](https://api.demo.rubyonjets.com/): A Simple API. Here’s a the blog post: [Build an API with the Jets Ruby Serverless Framework](https://blog.boltops.com/2019/01/13/build-an-api-service-with-jets-ruby-serverless-framework/)
- [Jets Afterburner: Rails Support](https://afterburner.demo.rubyonjets.com/): Please read over the considerations in the docs.
- [Mega Mode: Jets and Rails Combined](https://mega.demo.rubyonjets.com/): A interesting hybrid mode.
- [Image Upload with CarrierWave](https://upload.demo.rubyonjets.com/): Binary Support

More examples are in the [<FontIcon icon="iconfont icon-github"/>`tongueroo/jets-examples`](https://github.com/tongueroo/jets-examples) repo.

---

## Binary Gems

Ruby serverless applications might also use native binary gems. Jets uses [Lambda Gems](https://www.lambdagems.com/) to make for a seamless and much easier deploy process. [Lambda Gems]() is currently in beta, and early signups will receive a special offer for their support.

---

<TagLinks />