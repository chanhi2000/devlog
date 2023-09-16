---
lang: ko-KR
title: 5. HTTP
description: 🐚Mastering Curl - Interactive Text Guide > 5. HTTP
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Mastering Curl - Interactive Text Guide > 5. HTTP
    content: 5. HTTP
  - property: og:title
    content: 5. HTTP
  - property: og:description
    content: 🐚Mastering Curl - Interactive Text Guide > 5. HTTP
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-mastering-curl-interactive-text-guide/05-http.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 5. HTTP
desc: Mastering curl - interactive text guide
link: https://antonz.org/mastering-curl/#http
logo: https://antonz.org/assets/favicon/favicon.ico
color: rgba(22, 25, 35, 0.2)
```

---

Curl is mostly used to work with HTTP, so let's talk about it.

HTTP/1.x is a plain-text protocol that describes the communication between the client and the server. The client sends messages like this:

```http
POST /anything/chat HTTP/1.1
host: httpbingo.org
content-type: application/json
user-agent: curl/7.87.0

{
    "message": "Hello!"
}
```

The first line is a _request line_. The method (`POST`) defines the operation the client wants to perform. The path (`/anything/chat`) is the URL of the requested resource (without the protocol, domain and port). The version (HT`TP/1.1`) indicates the version of the HTTP protocol.

Next lines (until the empty line) are headers. Each header is a key-value pair that tells the server some useful information about the request. In our case it's the hostname of the server (`httpbingo.org`), the type of the content (`application/json`) and the client's self-identification (`user-agent`).

Finally, there is the actual data that the client sends to the server.

Client receives messages like this in response:

```http
HTTP/1.1 200 OK
date: Mon, 28 Aug 2023 07:51:49 GMT
content-type: application/json

{
    "message": "Hi!"
}
```

The first line is a status line. The version (`HTTP/1.1`) indicates the version of the HTTP protocol. The status code (`200`) tells whether the request was successful or not, and why (there are many status codes for [different situations](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)). The _status message_ is a human-readable description of the status code (HTTP/2 does not have it).

Next lines (until the empty line) are _headers_. Similar to request headers, these provide useful information about the response to the client.

Finally, there is the actual data that the server sends to the client.

The HTTP protocol is stateless, so any state must be contained within the request itself, either in the headers or in the body.

![HTTP/2](https://antonz.org/mastering-curl/http2.jpg)
> HTTP/2, the successor to HTTP/1.1, is a binary protocol. However, curl displays HTTP/2 messages in plain text (just like HTTP/1.1), so we can safely ignore this fact for our purposes.

---

## HTTP method

Curl supports all HTTP methods (sometimes called _verbs_).

GET (the default one, requires no options):

```sh
curl http://httpbin/get
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "GET",
#   "origin": "172.19.0.3:57144",
#   "url": "http://httpbin/get"
# }
```

HEAD (`-I`/`--head`, returns headers only):

```sh
curl -I http://httpbin/head
# HTTP/1.1 200 OK
# Access-Control-Allow-Credentials: true
# Access-Control-Allow-Origin: *
# Content-Type: application/json; charset=utf-8
# Date: Sat, 16 Sep 2023 12:38:23 GMT
```

POST (`-d`/`--data` for data or `-F`/`--form` for HTTP form):

```sh
curl -d "name=alice" http://httpbin/post
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Content-Length": [
#       "10"
#     ],
#     "Content-Type": [
#       "application/x-www-form-urlencoded"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "POST",
#   "origin": "172.19.0.3:47810",
#   "url": "http://httpbin/post",
#   "data": "name=alice",
#   "files": {},
#   "form": {
#     "name": [
#       "alice"
#     ]
#   },
#   "json": null
# }
```

Or any other method with `--request` (`-X`):

```sh
curl -X PATCH -d "name=alice" http://httpbin/patch
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Content-Length": [
#       "10"
#     ],
#     "Content-Type": [
#       "application/x-www-form-urlencoded"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "PATCH",
#   "origin": "172.19.0.3:54320",
#   "url": "http://httpbin/patch",
#   "data": "name=alice",
#   "files": {},
#   "form": {
#     "name": [
#       "alice"
#     ]
#   },
#   "json": null
# }
```

---

## Response code

Typically, status codes 2xx (specifically 200) are considered "success", while 4xx are treated as client-side errors and 5xx as server-side errors. But curl doesn't care about codes: to it, every HTTP response is a success:

```sh
curl http://httpbin/status/503 && echo OK
# OK
```

To make curl treat 4xx and 5xx codes as errors, use `--fail` (`-f`):

```sh
curl -f http://httpbin/status/503 && echo OK
# curl: (22) The requested URL returned error: 503
#  (exit status 22)
```

To print the response code, use `--write-out` with the `response_code` variable:

```sh
curl -w "%{response_code}" http://httpbin/status/200
# 200
```

---

## Response headers

To display response headers, use `--head` (`-i`):

```sh
curl -i http://httpbin/status/200
# HTTP/1.1 200 OK
# Access-Control-Allow-Credentials: true
# Access-Control-Allow-Origin: *
# Content-Type: text/plain; charset=utf-8
# Date: Sat, 16 Sep 2023 12:40:50 GMT
# Content-Length: 0
```

Or save them to a file using `--dump-header` (`-D`):

```sh
curl -D /tmp/headers http://httpbin/status/200
&& cat /tmp/headers
# HTTP/1.1 200 OK
# Access-Control-Allow-Credentials: true
# Access-Control-Allow-Origin: *
# Content-Type: text/plain; charset=utf-8
# Date: Sat, 16 Sep 2023 12:41:10 GMT
# Content-Length: 0
```

---

## Response body

Response body, sometimes called _payload_, is what curl outputs by default:

```sh
curl http://httpbin/get
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "GET",
#   "origin": "172.19.0.3:57144",
#   "url": "http://httpbin/get"
# }
```

You can ask the server to compress the data with `--compressed`, but curl will still show it as uncompressed:

```sh
curl --compressed http://httpbin/get
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Accept-Encoding": [
#       "deflate, gzip, br"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "GET",
#   "origin": "172.19.0.3:51748",
#   "url": "http://httpbin/get"
# }
```

> (note how the Accept-Encoding request header has changed)

---

## Ranges

To ask the server for a piece of data instead of the whole thing, use the `--range` (`-r`) option. This will cause curl to request the specified [byte range](https://curl.se/docs/manpage.html#-r).

For example, here we request 50 bytes starting with the 100th byte:

```sh
curl --range 100-150 http://httpbin/range/1024
# wxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstu
```

Note that the server may ignore the ask and return the entire response.

If you are downloading data from a server, you can also use `--continue-at` (`-C`) to continue the previous transfer at the specified offset:

```sh
curl --continue-at 1000 http://httpbin/range/1024
# mnopqrstuvwxyzabcdefghij
```

---

## HTTP versions

By default, curl uses HTTP/1.1 for the http scheme and HTTP/2 for `https`. You can change this with flags:

```sh
--http0.9
--http1.0
--http1.1
--http2
--http3
```

To find out which version the server supports, use the `http_version` response variable:

```sh
curl -w "%{http_version}" http://httpbin/status/200
# 1.1
```

---

## Conditional requests

Conditional requests are useful when you want to avoid downloading already downloaded data (assuming it is not stale). Curl supports two different conditions: file timestamp and etag.

Timestamp conditions use `--time-cond` (`-z`).

Download the data only if the remote resource is newer (condition holds):

```sh
curl --time-cond "Aug 30, 2023" http://httpbin/etag/etag
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "If-Modified-Since": [
#       "Wed, 30 Aug 2023 00:00:00 GMT"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "GET",
#   "origin": "172.19.0.3:54604",
#   "url": "http://httpbin/etag/etag"
# }
```

Or older (condition fails):

```sh
curl -i --time-cond "-Aug 30, 2023" http://httpbin/etag/etag
# HTTP/1.1 412 Precondition Failed
# Access-Control-Allow-Credentials: true
# Access-Control-Allow-Origin: *
# Content-Type: text/plain; charset=utf-8
# Etag: "etag"
# Last-Modified: Sun, 17 Sep 2023 09:33:05 GMT
# Date: Sun, 17 Sep 2023 09:33:05 GMT
# Content-Length: 0
```

Etag conditions are a bit more involved. An _etag_ is a value returned by the server that uniquely identifies the current version of the requested resource. It is often a hash of the data.

To checks an etag, curl must first to save it with `--etag-save`:

```sh
curl --etag-save /tmp/etags http://httpbin/etag/etag
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "GET",
#   "origin": "172.19.0.3:48800",
#   "url": "http://httpbin/etag/etag"
# }
```

And use `--etag-compare` in subsequent requests:

```sh
curl --etag-save /tmp/etags -o /dev/null http://httpbin/etag/etag &&
curl -i --etag-compare /tmp/etags http://httpbin/etag/etag
# HTTP/1.1 304 Not Modified
# Access-Control-Allow-Credentials: true
# Access-Control-Allow-Origin: *
# Etag: "etag"
# Date: Sun, 17 Sep 2023 09:33:56 GMT
```

Timestamp conditions rely on the Last-Modified response header, so if the server does not provide it, the resource will always be considered newer. The same goes for etag conditions and the Etag response header.

---

## HTTP POST

POST sends data to the server. By default, it's a set of key-value pairs encoded in a single string with a `application/x-www-form-urlencoded` Content-Type header.

You can use `--data` (`-d`) to specify individual key-value pairs (or the entire string):

```sh
curl -d name=alice -d age=25 http://httpbin/post
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Content-Length": [
#       "17"
#     ],
#     "Content-Type": [
#       "application/x-www-form-urlencoded"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "POST",
#   "origin": "172.19.0.3:39396",
#   "url": "http://httpbin/post",
#   "data": "name=alice&age=25",
#   "files": {},
#   "form": {
#     "age": [
#       "25"
#     ],
#     "name": [
#       "alice"
#     ]
#   },
#   "json": null
# }
```

To send data from a file, use `@` with a file path. Use `--header` (`-H`) to change the Content-Type header with according to the file contents:

```sh
echo "Alice, age 25" > /tmp/data.txt &&

curl -d @/tmp/data.txt -H "content-type: text/plain"
  http://httpbin/post
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Content-Length": [
#       "13"
#     ],
#     "Content-Type": [
#       "text/plain"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "POST",
#   "origin": "172.19.0.3:51978",
#   "url": "http://httpbin/post",
#   "data": "Alice, age 25",
#   "files": {},
#   "form": {},
#   "json": null
# }  
```

`--data-raw` posts data similar to `--data`, but without the special interpretation of the `@` character.

To post JSON data, use `--json`. It automatically sets the Content-Type and Accept headers accordingly:

```sh
curl --json '{"name": "alice"}' http://httpbin/post
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "application/json"
#     ],
#     "Content-Length": [
#       "17"
#     ],
#     "Content-Type": [
#       "application/json"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "POST",
#   "origin": "172.19.0.3:50854",
#   "url": "http://httpbin/post",
#   "data": "{\"name\": \"alice\"}",
#   "files": {},
#   "form": {},
#   "json": {
#     "name": "alice"
#   }
# }
```

---

![JSON requests](https://antonz.org/mastering-curl/json.jpg)
> Use jo and jq to simplify working with JSON.

To URL-encode data (escape all symbols not allowed in URLs), use `--data-urlencode`:

```sh
curl --data-urlencode "Name: Alice Barton" http://httpbin/post
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Content-Length": [
#       "20"
#     ],
#     "Content-Type": [
#       "application/x-www-form-urlencoded"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "POST",
#   "origin": "172.19.0.3:60484",
#   "url": "http://httpbin/post",
#   "data": "Name%3A+Alice+Barton",
#   "files": {},
#   "form": {
#     "Name: Alice Barton": [
#       ""
#     ]
#   },
#   "json": null
# }
```

---

## Multipart formpost

POST can send data as a sequence of "parts" with a `multipart/form-data` content type. It's often used for HTML forms that contain both text fields and files.

Each part has a name, headers, and data. Parts are separated by a "mime boundary":

```
--------------------------d74496d66958873e
Content-Disposition: form-data; name="person"

anonymous
--------------------------d74496d66958873e
Content-Disposition: form-data; name="secret"; filename="file.txt"
Content-Type: text/plain

contents of the file
--------------------------d74496d66958873e--
```

To construct multipart requests with curl, use `--form` (`-F`). Each of these options adds a part to the request:

```sh
touch /tmp/alice.png &&

curl -F name=Alice -F age=25 -F photo=@/tmp/alice.png
  http://httpbin/post
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Content-Length": [
#       "379"
#     ],
#     "Content-Type": [
#       "multipart/form-data; boundary=------------------------dbb84475f7b4d29e"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "POST",
#   "origin": "172.19.0.3:41972",
#   "url": "http://httpbin/post",
#   "data": "--------------------------dbb84475f7b4d29e\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\nAlice\r\n--------------------------dbb84475f7b4d29e\r\nContent-Disposition: form-data; name=\"age\"\r\n\r\n25\r\n--------------------------dbb84475f7b4d29e\r\nContent-Disposition: form-data; name=\"photo\"; filename=\"alice.png\"\r\nContent-Type: image/png\r\n\r\n\r\n--------------------------dbb84475f7b4d29e--\r\n",
#   "files": {
#     "photo": [
#       ""
#     ]
#   },
#   "form": {
#     "age": [
#       "25"
#     ],
#     "name": [
#       "Alice"
#     ]
#   },
#   "json": null
# }  
```

---

## Redirects

A _redirect_ is when the server, instead of returning the requested resource, tells the client that the resource is located elsewhere (as indicated by the Location header). A redirect always has a 3xx response code.

Curl does not follow redirects by default, it returns the response as is:

```sh
curl -i http://httpbin/redirect/1
# HTTP/1.1 302 Found
# Access-Control-Allow-Credentials: true
# Access-Control-Allow-Origin: *
# Location: /get
# Date: Sun, 17 Sep 2023 09:37:50 GMT
# Content-Length: 0
# 
```

To make curl follow redirects, use `--follow` (`-L`):

```sh
curl -L http://httpbin/redirect/1
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "GET",
#   "origin": "172.19.0.3:53994",
#   "url": "http://httpbin/get"
# }
```

To protect against endless loop redirects, use `--max-redirs`:

```sh
curl -L --max-redirs 3 http://httpbin/redirect/10
# curl: (47) Maximum (3) redirects followed
#  (exit status 47)
```

---

## HTTP PUT

The PUT method is often used to send files to the server. Use `--upload-file` (`-T`) for this:

```sh
echo hello > /tmp/hello.txt &&
curl -T /tmp/hello.txt http://httpbin/put
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Content-Length": [
#       "6"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "PUT",
#   "origin": "172.19.0.3:51756",
#   "url": "http://httpbin/put",
#   "data": "data:application/octet-stream;base64,aGVsbG8K",
#   "files": {},
#   "form": {},
#   "json": null
# }
```

Sometimes PUT is used for requests in REST APIs. For these, use `--request` (`-X`) to set the method and `--data` (`-d`) to send the data:

```sh
curl -X PUT -H "content-type: application/json"
  -d '{"name": "alice"}'
  http://httpbin/put
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Content-Length": [
#       "17"
#     ],
#     "Content-Type": [
#       "application/json"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "PUT",
#   "origin": "172.19.0.3:36948",
#   "url": "http://httpbin/put",
#   "data": "{\"name\": \"alice\"}",
#   "files": {},
#   "form": {},
#   "json": {
#     "name": "alice"
#   }
# }  
```

---

## Cookies

The HTTP protocol is stateless. Cookies are an ingenious way around this:

1. The server wants to associate some state with the client session.
2. The server returns that state in the Set-Cookie response header.
3. The client recognizes the cookies and sends them back with each request in the Cookie request header.

Each cookie has an expiration date — either explicit one or "end of session" one (for browser clients, this is often when the user closes the browser).

Curl ignores cookies by default. To enable them, use the `--cookie` (`-b`) option. To make curl persist cookies between calls, use `--cookie-jar` (`-c`).

![Although their reputation has been tarnished by the ubiquitous "cookie banners", cookies remain one of the finest examples of feature naming.](https://antonz.org/mastering-curl/cookies.jpg)

Here the server sets the cookie sessionid to `123456` and curl stores it in the cookie jar `/tmp/cookies`:

```sh
curl -b "" -c /tmp/cookies
  http://httpbin/cookies/set?sessionid=123456
&& cat /tmp/cookies
# Netscape HTTP Cookie File
# https://curl.se/docs/http-cookies.html
# This file was generated by libcurl! Edit at your own risk.

#HttpOnly_httpbin	FALSE	/cookies/	FALSE	0	sessionid	123456
```

Subsequent curl calls with `-b /tmp/cookies` will send the `sessionid` cookie back to the server.

Curl automatically discards cookies from the cookie jar when they expire (this requires an explicit expiration date set by the server). To discard session-based cookies, use `--junk-session-cookies` (`-j`):

```sh
curl -j -b /tmp/cookies http://httpbin/get
```

---

## Alternative services

The Alt-Svc HTTP response header indicates that there is another network location (an _alternative service_) that the client can use for future requests.

To enable alternative services, use `--alt-svc`. This tells curl to store the services in the specified file and consider them for future requests.

```sh
curl --alt-svc /tmp/altsvc -o /dev/null
  http://httpbin/get
&& cat /tmp/altsvc
# Your alt-svc cache. https://curl.se/docs/alt-svc.html
# This file was generated by libcurl! Edit at your own risk.
```

---

## HTTP Strict Transport Security

The HTTP Strict-Transport-Security response header (also known as HSTS) informs the client that the server should only be accessed via HTTPS, and that any future attempts to access it via HTTP should automatically be converted to HTTPS.

To make curl respect HSTS, use `--hsts`. This tells curl to store HSTS-enabled servers in the specified file and automatically convert http → https when accessing them.

```sh
curl --hsts /tmp/hsts -o /dev/null
  http://httpbin/get
&& cat /tmp/hsts
# Your HSTS cache. https://curl.se/docs/hsts.html
# This file was generated by libcurl! Edit at your own risk.
```

---


