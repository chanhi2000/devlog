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
author: Milan Jovanović
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

Today's modern applications must deliver the latest information without refreshing the user interface.

If you need to introduce **real-time** functionality to your application in .NET, there's one library you will most likely reach for - **SignalR**.

**SignalR** allows you to push content from your server-side code to any connected clients as changes happen in real-time.

Here's what I'll teach you in this week's newsletter:

- Creating your first **SignalR** `Hub`
- Testing **SignalR** from **Postman**
- Creating strongly typed hubs
- Sending messages to a specific user

Let's see why **SignalR** is so powerful and how easy it is to build **real-time** applications with it.

---

## Installing And Configuring SignalR

To start using **SignalR** you'll need to:

- Install the NuGet package
- Create the `Hub` class
- Register the SignalR services
- Map and expose the hub endpoint so clients can connect to it

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
- `Groups` - an abstraction for adding and removing connections from groups
- `Context` - used for accessing information about the hub caller connection

You can learn more about the `Hub` class [<FontIcon icon="fa-brands fa-microsoft"/>here](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.signalr.hub?view=aspnetcore-7.0).

Lastly, you need to register the SignalR services by calling the `AddSignalR` method. You also need to call the `MapHub<T>` method, where you specify the `NotificationsHub` class and the path clients will use to connect to the hub.

```cs{3,7}
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();

var app = builder.Build();

app.MapHub<NotificationsHub>("notifications-hub");

app.Run();
```

Now let's see how we can test the `NotificationsHub`.

---

## Connecting To SignalR Hub From Postman

To test SignalR, you need a client that will connect to the `Hub` instance. You could create a simple application with Blazor or JavaScript, but I will show you a different approach.

We will use Postman's **WebSocket Request** to connect to the `NotificationsHub`.

![](https://milanjovanovic.tech/blogs/mnw_043/postman_websocket_request.png?imwidth=2048)

Here's what we need to do:

- Connect to the `NotificationsHub`
- Set the communication protocol to JSON
- Send messages to call the `NotificationsHub` methods

All messages need to end with a null termination character, which is just the ASCII character `0x1E`.

Let's start off by sending this message to set the communication protocol to JSON:

```json
{
  "protocol": "json",
  "version": 1
}?

```

You'll receive this response from the hub.

![](https://milanjovanovic.tech/blogs/mnw_043/postman_websocket_request.png?imwidth=2048)

We need a slightly different message format to call a message on the `Hub`. The key is specifying the `arguments` and `target`, which is the actual hub method we want to call.

Let's say we want to call the `SendNotification` method on the `NotificationsHub`:

```json
{
  "arguments": ["This is the notification message."],
  "target": "SendNotification",
  "type": 1
}?

```

This will be the response we get back from the `NotificationsHub`:

![](https://milanjovanovic.tech/blogs/mnw_043/postman_send_notification_request.png?imwidth=3840)

---

## Strongly Typed Hubs

The base `Hub` class uses the `SendAsync` method to send messages to connected clients. Unfortunately, we have to use strings to specify client-side methods to invoke, and it's easy to make a mistake. There's also nothing enforcing which parameters are used.

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

## Sending Server-Side Messages With `HubContext`

What good is a `NotificationsHub` if we can't send notifications from the backend to connected clients? Not much.

You can use the `IHubContext<THub>` interface access to the `Hub` instance in your backend code.

And you can use `IHubContext<THub, TClient>` for a strongly typed hub.

Here's a simple Minimal API endpoint that injects an `IHubContext<NotificationsHub, INotificationsClient>` for our strongly typed hub and uses it to send a notification to all connected clients:

```cs{3}
app.MapPost("notifications/all", async (
    string content,
    IHubContext<NotificationsHub, INotificationsClient> context) =>
{
    await context.Clients.All.ReceiveNotification(content);

    return Results.NoContent();
});
```

---

## Sending Messages To a Specific User

The real value of SignalR is being able to **send messages**, or notifications in this example, to a **specific user**.

I've seen some complicated implementations that manage a dictionary with a user identifier and a map of active connections. Why would you do that when SignalR already supports this functionality?

You can call the `User` method and pass it the `userId` to scope the `ReceiveNotification` message to that specific user.

```cs{2,6}
app.MapPost("notifications/user", async (
    string userId,
    string content,
    IHubContext<NotificationsHub, INotificationsClient> context) =>
{
    await context.Clients.User(userId).ReceiveNotification(content);

    return Results.NoContent();
});
```

How does **SignalR** know which user to send the message to?

It uses the `DefaultUserIdProvider` internally to extract the user identifier from the claims. To be specific, it's using the `ClaimTypes.NameIdentifier` claim. This also implies that you should be authenticated when connecting to the `Hub`, for example, by passing a JWT.

```cs
public class DefaultUserIdProvider : IUserIdProvider
{
    public virtual string? GetUserId(HubConnectionContext connection)
    {
        return connection.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
    }
}
```

By default, all the methods in a hub can be called by unauthenticated users. So you need to decorate it with an `Authorize` attribute to only allow authenticated clients to access the hub.

```cs{1}
[Authorize]
public sealed class NotificationsHub : Hub<INotificationsClient>
{
    public async Task SendNotification(string content)
    {
        await Clients.All.ReceiveNotification(content);
    }
}
```

---

## In Summary

Adding **real-time functionality** to your application creates room for innovation and adds value to your users.

With **SignalR**, you can start building real-time apps in .NET in minutes.

You need to grasp one concept - the `Hub` class. SignalR abstracts away the message transport mechanism, so you don't have to worry about it.

Make sure to send authenticated requests to **SignalR** hubs and turn on authentication on the `Hub`. SignalR will internally track the users connecting to your hubs, allowing you to send them messages based on the user identifier.

That's all for today.

Thanks for reading, and have an awesome Saturday.

::: tips Today's action step

Look at your project and try to find an opportunity to add real-time functionality. Commit 30 min. to build a simple proof of concept with SignalR and see if it can improve your project.

:::

---

<TagLinks />