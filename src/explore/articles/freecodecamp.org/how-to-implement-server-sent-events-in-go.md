---
lang: ko-KR
title: How to Implement Server-Sent Events in Go 
description: Article(s) > How to Implement Server-Sent Events in Go 
icon: fa-brands fa-golang
category: 
  - Go
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - go
  - golang
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Implement Server-Sent Events in Go
    - property: og:description
      content: How to Implement Server-Sent Events in Go 
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/how-to-implement-server-sent-events-in-go.html
prev: /programming/go/articles/README.md
date: 2024-08-28
isOriginal: false
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1724762290560/de9c7afd-2a81-4bd6-aa12-da92a759ebdb.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Go > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/go/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="How to Implement Server-Sent Events in Go"
  desc="Server-Sent Events (SSE) is a powerful technology that enables real-time, unidirectional communication from servers to clients. In this article, we'll explore how to implement SSE in Go, discussing its benefits, use cases, and providing practical exa..."
  url="https://freecodecamp.org/news/how-to-implement-server-sent-events-in-go/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://cdn.hashnode.com/res/hashnode/image/upload/v1724762290560/de9c7afd-2a81-4bd6-aa12-da92a759ebdb.png"/>

Server-Sent Events (SSE) is a powerful technology that enables real-time, unidirectional communication from servers to clients.

In this article, we'll explore how to implement SSE in Go, discussing its benefits, use cases, and providing practical examples. By the end, you should know the basics of building real-time applications with efficient, unidirectional communication.

---

## What are Server-Sent Events?

SSE is a web technology that allows servers to push data to clients over a single HTTP connection.

Unlike WebSockets, SSE is unidirectional, making it simpler to implement and ideal for scenarios where real-time updates from the server are required, but client-to-server communication is not necessary.

Developing a web application that uses SSE is straightforward. You'll need a bit of code on the server to stream events to the front-end, but the client side code works almost identically to websockets when it comes to handling incoming events. This is a one-way connection, so you can't send events from a client to a server.

### Benefits of SSE

1. **Simplicity**: SSE is easier to implement compared to WebSockets.
2. **Native browser support**: Most modern browsers support SSE out of the box.
3. **Automatic reconnection**: Clients automatically attempt to reconnect if the connection is lost.
4. **Efficient**: Uses a single HTTP connection, reducing overhead.

---

## How to Implement SSE in Go

For our example here, we'll create a simple SSE server in Go which just sends the data to the client every second with a current timestamp. The client can then connect to our server on port 8080 and receive these messages.

A real example could be something more sophisticated like sending notifications, displaying progress bar updates, and so on.

```go
package main

import (
    "fmt"
    "net/http"
    "time"
)

func sseHandler(w http.ResponseWriter, r *http.Request) {
    // Set http headers required for SSE
    w.Header().Set("Content-Type", "text/event-stream")
    w.Header().Set("Cache-Control", "no-cache")
    w.Header().Set("Connection", "keep-alive")

    // You may need this locally for CORS requests
    w.Header().Set("Access-Control-Allow-Origin", "*")

    // Create a channel for client disconnection
    clientGone := r.Context().Done()

    rc := http.NewResponseController(w)
    t := time.NewTicker(time.Second)
    defer t.Stop()
    for {
        select {
        case <-clientGone:
            fmt.Println("Client disconnected")
            return
        case <-t.C:
            // Send an event to the client
            // Here we send only the "data" field, but there are few others
            _, err := fmt.Fprintf(w, "data: The time is %s\n\n", time.Now().Format(time.UnixDate))
            if err != nil {
                return
            }
            err = rc.Flush()
            if err != nil {
                return
            }
        }
    }
}

func main() {
    http.HandleFunc("/events", sseHandler)
    fmt.Println("server is running on :8080")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        fmt.Println(err.Error())
    }
}
```

### Key Components of the SSE Implementation

The [<FontIcon icon="fa-brands fa-firefox"/>event stream](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format) is a simple stream of text data which must be encoded using UTF-8. Messages in the event stream are separated by a pair of newline characters – `\n\n`. A colon as the first character of a line is in essence a comment, and is ignored.

In our server it is done here:

```go
rc := http.NewResponseController(w)
fmt.Fprintf(w, "data: The time is %s\n\n", time.Now().Format(time.UnixDate))
// To make sure that the data is sent immediately
rc.Flush()
```

The server that sends events needs to respond using the MIME type `text/event-stream`. We do it by setting the response header here:

```go
w.Header().Set("Content-Type", "text/event-stream")
```

You may have noticed that we set few other headers as well. One is to keep the HTTP connection open, and another to bypass CORS:

```go
w.Header().Set("Cache-Control", "no-cache")
w.Header().Set("Connection", "keep-alive")
w.Header().Set("Access-Control-Allow-Origin", "*")
```

And the last important piece is to detect the disconnect. In Go, we'll receive it as a message in a specified channel:

```go
clientGone := r.Context().Done()

for {
    select {
    case <-clientGone:
        fmt.Println("Client disconnected")
        return
    }
}
```

Each message received has some combination of the following fields, one per line. In our server we send only the data field which is enough, as other fields are optional. More details [<FontIcon icon="fa-brands fa-firefox"/>here](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events).

- **event** – a string identifying the type of event described.
- **data** – the data field for the message.
- **id** – the event ID to set the EventSource object's last event ID value.
- **retry** – the reconnection time.

### How to Receive the Events on the Client Side

On the front end or client side, you will have to use the [<FontIcon icon="fa-brands fa-firefox"/>EventSource](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#creating_an_eventsource_instance) interface. It's a browser API encapsulating Server-Sent Events. In the following example, our browser application receives the events from the server and prints them in a list.

```xml
<!DOCTYPE html>
<html>
    <body>
        <ul id="list">
    </body>

    <script type="text/javascript">
        const eventSrc = new EventSource("http://127.0.0.1:8080/events");

        const list = document.getElementById("list");

        eventSrc.onmessage = (event) => {
            const li = document.createElement("li");
            li.textContent = `message: ${event.data}`;

            list.appendChild(li);
        };
    </script>
</html>
```

Here is how it may look in your browser:

![logs](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe2cda643-36a6-4986-8100-76d1d7c3fb33_998x490.png)

---

## Best Practices for SSE in Golang

### Event Formatting

In a real world project, a simple string of data may not be enough. In these cases, using a structured format like JSON can be a good option to send multiple data fields once. Here's an example:

```json
{
  "status": "in_progress",
  "completion": 51.22
}
```

### Reconnection Strategy and Error Handling

Something could always go wrong on both sides: the server might reject the connection for some reason or a client might abruptly disconnect.

In each case, you'll need to implement a backoff strategy for graceful reconnections. It's better to miss one message than completely break the event loop.

In JavaScript, you can check for errors in EventSource and then act accordingly:

```js
eventSrc.onerror = (err) => {
  console.error("EventSource failed:", err);
};
```

### Load Balancing

For high-traffic applications, you may consider using a Load Balancer, for example NGINX. If you plan to have many clients connecting to your server, it's good to test it beforehand by simulating the load from the clients.

---

## Use Cases for SSE

1. Real-time dashboards
2. Live sports scores
3. Social media feeds
4. Stock market tickers
5. Progress indicators for long-running tasks

---

## Conclusion

Server-Sent Events provide an efficient and straightforward way to implement real-time, server-to-client communication in Golang applications. By leveraging SSE, developers can create responsive and dynamic web applications with minimal overhead and complexity.

As you build your SSE-powered applications, remember to consider scalability, error handling, and client-side implementation to ensure a robust and efficient real-time communication system.

<SiteInfo
  name="packagemain.tech | Alex Pliutau | Substack"
  desc="Welcome to packagemain.tech, your one-stop shop for mastering Backend, Cloud, Kubernetes, Microservices, APIs, and more. We'll provide you with hands-on, practical and real-world tutorials that you can use to build your software development skills. Click to read packagemain.tech, a Substack publication with thousands of subscribers."
  url="https://packagemain.tech/"
  logo="https://substack-post-media.s3.amazonaws.com/public/images/2ea54e25-eaa6-4630-bfc0-10b8cfdce894/apple-touch-icon-1024x1024.png"
  preview="https://substack-post-media.s3.amazonaws.com/public/images/2ea54e25-eaa6-4630-bfc0-10b8cfdce894/favicon.ico"/>

---

<TagLinks />