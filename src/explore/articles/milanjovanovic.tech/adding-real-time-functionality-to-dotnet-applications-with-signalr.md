---
lang: ko-KR
title: "Adding Real-Time Functionality To .NET Applications With SignalR"
description: "Article(s) > Adding Real-Time Functionality To .NET Applications With SignalR"
icon: iconfont icon-csharp
category: 
  - C#
  - DotNet
  - Article(s)
tag: 
  - blog
  - milanjovanovic.tech
  - cs
  - c#
  - csharp
  - dotnet
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Adding Real-Time Functionality To .NET Applications With SignalR"
    - property: og:description
      content: "Adding Real-Time Functionality To .NET Applications With SignalR"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/milanjovanovic.tech/adding-real-time-functionality-to-dotnet-applications-with-signalr.html
prev: /programming/cs/articles/README.md
date: 2023-06-24
isOriginal: false
cover: https://milanjovanovic.tech/blog-covers/mnw_043.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "C# > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/cs/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Adding Real-Time Functionality To .NET Applications With SignalR"
  desc="Today's modern applications must deliver the latest information without refreshing the user interface. If you need to introduce real-time functionality to your application in .NET, there's one library you will most likely reach for - SignalR. SignalR allows you to push content from your server-side code to any connected clients as changes happen in real-time."
  url="https://milanjovanovic.tech/blog/adding-real-time-functionality-to-dotnet-applications-with-signalr/"
  logo="https://milanjovanovic.tech/profile_favicon.png"
  preview="https://milanjovanovic.tech/blog-covers/mnw_043.png"/>

<!-- TODO: 작성 -->

<!-- 
Today's modern applications must deliver the latest information without refreshing the user interface.

If you need to introduce **real-time** functionality to your application in .NET, there's one library you will most likely reach for - **SignalR**.

**SignalR** allows you to push content from your server-side code to any connected clients as changes happen in real-time.

Here's what I'll teach you in this week's newsletter:

- Creating your first **SignalR** `Hub`
<li>Testing **SignalR** from **Postman**
<li>Creating strongly typed hubs
<li>Sending messages to a specific user

Let's see why **SignalR** is so powerful and how easy it is to build **real-time** applications with it.

---

## installing-and-configuring-signalr"><a href="#installing-and-configuring-signalr">Installing And Configuring SignalR

To start using **SignalR** you'll need to:

- Install the NuGet package
<li>Create the `Hub` class
<li>Register the SignalR services
<li>Map and expose the hub endpoint so clients can connect to it

Let's start by installing the `Microsoft.AspNetCore.SignalR.Client` NuGet package:

```pwsh
Install-Package Microsoft.AspNetCore.SignalR.Client

```

Then you need a SignalR `Hub`, which is the central component in your application responsible for managing clients and sending messages.

Let's create a `NotificationsHub` by inheriting from the base `Hub` class:

```cs
public sealed class NotificationsHub : Hub
{
    public async Task SendNotification(string content)
    {
        await Clients.All.SendAsync("ReceiveNotification", content);
    }
}

```

The SignalR `Hub` exposes a few useful properties:

- `Clients` - used to invoke methods on the clients connected to this hub
<li>`Groups` - an abstraction for adding and removing connections from groups
<li>`Context` - used for accessing information about the hub caller connection

You can learn more about the `Hub` class <a href="https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.signalr.hub?view=aspnetcore-7.0">here</a>.

Lastly, you need to register the SignalR services by calling the `AddSignalR` method.
You also need to call the `MapHub<T>` method, where you specify the `NotificationsHub` class and the path clients will use to connect to the hub.

```cs
var builder = WebApplication.CreateBuilder(args);

<span class="code-line highlight-line">builder.Services.AddSignalR();

var app = builder.Build();

<span class="code-line highlight-line">app.MapHub<NotificationsHub>("notifications-hub");

app.Run();

```

Now let's see how we can test the `NotificationsHub`.

---

## connecting-to-signalr-hub-from-postman"><a href="#connecting-to-signalr-hub-from-postman">Connecting To SignalR Hub From Postman

To test SignalR, you need a client that will connect to the `Hub` instance.
You could create a simple application with Blazor or JavaScript, but I will show you a different approach.

We will use Postman's **WebSocket Request** to connect to the `NotificationsHub`.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271011%27%20height=%27747%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_043/postman_websocket_request.png?imwidth=1080 1x, /blogs/mnw_043/postman_websocket_request.png?imwidth=2048 2x" src="/blogs/mnw_043/postman_websocket_request.png?imwidth=2048" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
Here's what we need to do:

- Connect to the `NotificationsHub`
<li>Set the communication protocol to JSON
<li>Send messages to call the `NotificationsHub` methods

All messages need to end with a null termination character, which is just the ASCII character `0x1E`.

Let's start off by sending this message to set the communication protocol to JSON:

```json
{
  "protocol": "json",
  "version": 1
}?

```

You'll receive this response from the hub.

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271731%27%20height=%27890%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_043/postman_set_protocol_request.png?imwidth=1920 1x, /blogs/mnw_043/postman_set_protocol_request.png?imwidth=3840 2x" src="/blogs/mnw_043/postman_set_protocol_request.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
We need a slightly different message format to call a message on the `Hub`.
The key is specifying the `arguments` and `target`, which is the actual hub method we want to call.

Let's say we want to call the `SendNotification` method on the `NotificationsHub`:

```json
{
  "arguments": ["This is the notification message."],
  "target": "SendNotification",
  "type": 1
}?

```

This will be the response we get back from the `NotificationsHub`:

<span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271726%27%20height=%27816%27/%3e"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img srcSet="/blogs/mnw_043/postman_send_notification_request.png?imwidth=1920 1x, /blogs/mnw_043/postman_send_notification_request.png?imwidth=3840 2x" src="/blogs/mnw_043/postman_send_notification_request.png?imwidth=3840" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/></noscript>
---

## strongly-typed-hubs"><a href="#strongly-typed-hubs">Strongly Typed Hubs

The base `Hub` class uses the `SendAsync` method to send messages to connected clients.
Unfortunately, we have to use strings to specify client-side methods to invoke, and it's easy to make a mistake.
There's also nothing enforcing which parameters are used.

SignalR supports **strongly typed hubs** that aim to solve this.

First, you need to define a client interface, so let's create a simple `INotificationsClient` abstraction:

```cs
public interface INotificationsClient
{
    Task ReceiveNotification(string content);
}

```

The arguments don't have to be primitive types and can also be objects. SignalR will take care of serialization on the client side.

After that, you need to update the `NotificationsHub` class to inherit from the `Hub<T>` class to make it strongly typed:

```cs
public sealed class NotificationsHub : Hub<INotificationsClient>
{
    public async Task SendNotification(string content)
    {
        await Clients.All.ReceiveNotification(content);
    }
}

```

You will lose access to the `SendAsync` method, and only the methods defined in your client interface will be available.

---

## sending-server-side-messages-with-hubcontext"><a href="#sending-server-side-messages-with-hubcontext">Sending Server-Side Messages With `HubContext`

What good is a `NotificationsHub` if we can't send notifications from the backend to connected clients?<br>
Not much.

You can use the `IHubContext<THub>` interface access to the `Hub` instance in your backend code.

And you can use `IHubContext<THub, TClient>` for a strongly typed hub.

Here's a simple Minimal API endpoint that injects an `IHubContext<NotificationsHub, INotificationsClient>` for our strongly typed hub and uses it
to send a notification to all connected clients:

```cs
app.MapPost("notifications/all", async (
    string content,
<span class="code-line highlight-line">    IHubContext<NotificationsHub, INotificationsClient> context) =>
{
    await context.Clients.All.ReceiveNotification(content);

    return Results.NoContent();
});

```

---

## sending-messages-to-a-specific-user"><a href="#sending-messages-to-a-specific-user">Sending Messages To a Specific User

The real value of SignalR is being able to **send messages**, or notifications in this example, to a **specific user**.

I've seen some complicated implementations that manage a dictionary with a user identifier and a map of active connections.
Why would you do that when SignalR already supports this functionality?

You can call the `User` method and pass it the `userId` to scope the `ReceiveNotification` message to that specific user.

```cs
app.MapPost("notifications/user", async (
<span class="code-line highlight-line">    string userId,
    string content,
    IHubContext<NotificationsHub, INotificationsClient> context) =>
{
<span class="code-line highlight-line">    await context.Clients.User(userId).ReceiveNotification(content);

    return Results.NoContent();
});

```

How does **SignalR** know which user to send the message to?

It uses the `DefaultUserIdProvider` internally to extract the user identifier from the claims.
To be specific, it's using the `ClaimTypes.NameIdentifier` claim.
This also implies that you should be authenticated when connecting to the `Hub`, for example, by passing a JWT.

```cs
public class DefaultUserIdProvider : IUserIdProvider
{
    public virtual string? GetUserId(HubConnectionContext connection)
    {
        return connection.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
    }
}

```

By default, all the methods in a hub can be called by unauthenticated users.
So you need to decorate it with an `Authorize` attribute to only allow authenticated clients to access the hub.

```cs
<span class="code-line highlight-line">[Authorize]
public sealed class NotificationsHub : Hub<INotificationsClient>
{
    public async Task SendNotification(string content)
    {
        await Clients.All.ReceiveNotification(content);
    }
}

```

---

## in-summary"><a href="#in-summary">In Summary

Adding **real-time functionality** to your application creates room for innovation and adds value to your users.

With **SignalR**, you can start building real-time apps in .NET in minutes.

You need to grasp one concept - the `Hub` class.
SignalR abstracts away the message transport mechanism, so you don't have to worry about it.

Make sure to send authenticated requests to **SignalR** hubs and turn on authentication on the `Hub`.
SignalR will internally track the users connecting to your hubs, allowing you to send them messages based on the user identifier.

That's all for today.

Thanks for reading, and have an awesome Saturday.

**Today's action step:**
Look at your project and try to find an opportunity to add real-time functionality.
Commit 30 min. to build a simple proof of concept with SignalR and see if it can improve your project.

-->

---

<TagLinks />