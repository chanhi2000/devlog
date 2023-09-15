---
lang: ko-KR
title: 4. Curl basics
description: 🐚Mastering Curl - Interactive Text Guide > 4. Curl basics
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Mastering Curl - Interactive Text Guide > 4. Curl basics
    content: 4. Curl basics
  - property: og:title
    content: 4. Curl basics
  - property: og:description
    content: 🐚Mastering Curl - Interactive Text Guide > 4. Curl basics
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-mastering-curl-interactive-text-guide/04-curl-basics.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 4. Curl basics
desc: Mastering curl - interactive text guide
link: https://antonz.org/mastering-curl/#curl-basics
logo: https://antonz.org/assets/favicon/favicon.ico
color: rgba(22, 25, 35, 0.2)
```

---

Now that we understand how curl handles URLs and options, let's talk about specific features.

## Version

`--version` (`-V`) knows everything about the installed version of curl:

```sh
curl -V
# ➊ curl 8.2.1 (x86_64-alpine-linux-musl) libcurl/8.2.1 OpenSSL/3.1.2 zlib/1.2.13 brotli/1.0.9 libidn2/2.3.4 nghttp2/1.55.1
# ➋ Release-Date: 2023-07-26
# ➌ Protocols: dict file ftp ftps gopher gophers http https imap imaps mqtt pop3 pop3s rtsp smb smbs smtp smtps telnet tftp ws wss
# ➍ Features: alt-svc AsynchDNS brotli HSTS HTTP2 HTTPS-proxy IDN IPv6 Largefile libz NTLM NTLM_WB SSL threadsafe TLS-SRP UnixSockets

```

It lists (line by line) 
- ➊ versions of curl itself and its dependencies, 
- ➋ the release date, 
- ➌ available protocols, and 
- ➍ enabled features.

--- 

## Verbose

::: tabs 

@tab:active verbose

`--verbose` (`-v`) makes curl verbose, which is useful for debugging:

```sh
curl -v http://httpbin/uuid
# {
#   "uuid": "dfc032c7-7452-4b21-aedb-3d80787e9946"
# }
# 
# * processing: http://httpbin/uuid
# *   Trying 172.19.0.2:80...
# * Connected to httpbin (172.19.0.2) port 80
# > GET /uuid HTTP/1.1
# > Host: httpbin
# > User-Agent: curl/8.2.1
# > Accept: */*
# > 
# < HTTP/1.1 200 OK
# < Access-Control-Allow-Credentials: true
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Date: Fri, 15 Sep 2023 06:35:21 GMT
# < Content-Length: 53
# < 
# { [53 bytes data]
# * Connection #0 to host httpbin left intact
```

@tab trace

If `--verbose` is not enough, try `--trace` (the single `-` sends the trace output to stdout):

```sh
curl --trace - http://httpbin/uuid
# == Info: processing: http://httpbin/uuid
# == Info:   Trying 172.19.0.2:80...
# == Info: Connected to httpbin (172.19.0.2) port 80
# => Send header, 74 bytes (0x4a)
# 0000: 47 45 54 20 2f 75 75 69 64 20 48 54 54 50 2f 31 GET /uuid HTTP/1
# 0010: 2e 31 0d 0a 48 6f 73 74 3a 20 68 74 74 70 62 69 .1..Host: httpbi
# 0020: 6e 0d 0a 55 73 65 72 2d 41 67 65 6e 74 3a 20 63 n..User-Agent: c
# 0030: 75 72 6c 2f 38 2e 32 2e 31 0d 0a 41 63 63 65 70 url/8.2.1..Accep
# 0040: 74 3a 20 2a 2f 2a 0d 0a 0d 0a                   t: */*....
# <= Recv header, 17 bytes (0x11)
# 0000: 48 54 54 50 2f 31 2e 31 20 32 30 30 20 4f 4b 0d HTTP/1.1 200 OK.
# 0010: 0a                                              .
# <= Recv header, 40 bytes (0x28)
# 0000: 41 63 63 65 73 73 2d 43 6f 6e 74 72 6f 6c 2d 41 Access-Control-A
# 0010: 6c 6c 6f 77 2d 43 72 65 64 65 6e 74 69 61 6c 73 llow-Credentials
# 0020: 3a 20 74 72 75 65 0d 0a                         : true..
# <= Recv header, 32 bytes (0x20)
# 0000: 41 63 63 65 73 73 2d 43 6f 6e 74 72 6f 6c 2d 41 Access-Control-A
# 0010: 6c 6c 6f 77 2d 4f 72 69 67 69 6e 3a 20 2a 0d 0a llow-Origin: *..
# <= Recv header, 47 bytes (0x2f)
# 0000: 43 6f 6e 74 65 6e 74 2d 54 79 70 65 3a 20 61 70 Content-Type: ap
# 0010: 70 6c 69 63 61 74 69 6f 6e 2f 6a 73 6f 6e 3b 20 plication/json; 
# 0020: 63 68 61 72 73 65 74 3d 75 74 66 2d 38 0d 0a    charset=utf-8..
# <= Recv header, 37 bytes (0x25)
# 0000: 44 61 74 65 3a 20 46 72 69 2c 20 31 35 20 53 65 Date: Fri, 15 Se
# 0010: 70 20 32 30 32 33 20 30 36 3a 33 35 3a 33 36 20 p 2023 06:35:36 
# 0020: 47 4d 54 0d 0a                                  GMT..
# <= Recv header, 20 bytes (0x14)
# 0000: 43 6f 6e 74 65 6e 74 2d 4c 65 6e 67 74 68 3a 20 Content-Length: 
# 0010: 35 33 0d 0a                                     53..
# <= Recv header, 2 bytes (0x2)
# 0000: 0d 0a                                           ..
# <= Recv data, 53 bytes (0x35)
# 0000: 7b 0a 20 20 22 75 75 69 64 22 3a 20 22 38 30 39 {.  "uuid": "809
# 0010: 65 39 33 33 62 2d 34 62 66 32 2d 34 39 31 33 2d e933b-4bf2-4913-
# 0020: 39 36 30 64 2d 61 63 34 35 64 30 64 61 32 39 30 960d-ac45d0da290
# 0030: 32 22 0a 7d 0a                                  2".}.
# {
#   "uuid": "809e933b-4bf2-4913-960d-ac45d0da2902"
# }
# == Info: Connection #0 to host httpbin left intact
```

@tab trace-ascii

Or `--trace-ascii`:

```sh
curl --trace-ascii - http://httpbin/uuid
# == Info: processing: http://httpbin/uuid
# == Info:   Trying 172.19.0.2:80...
# == Info: Connected to httpbin (172.19.0.2) port 80
# => Send header, 74 bytes (0x4a)
# 0000: GET /uuid HTTP/1.1
# 0014: Host: httpbin
# 0023: User-Agent: curl/8.2.1
# 003b: Accept: */*
# 0048: 
# <= Recv header, 17 bytes (0x11)
# 0000: HTTP/1.1 200 OK
# <= Recv header, 40 bytes (0x28)
# 0000: Access-Control-Allow-Credentials: true
# <= Recv header, 32 bytes (0x20)
# 0000: Access-Control-Allow-Origin: *
# <= Recv header, 47 bytes (0x2f)
# 0000: Content-Type: application/json; charset=utf-8
# <= Recv header, 37 bytes (0x25)
# 0000: Date: Fri, 15 Sep 2023 06:36:59 GMT
# <= Recv header, 20 bytes (0x14)
# 0000: Content-Length: 53
# <= Recv header, 2 bytes (0x2)
# 0000: 
# <= Recv data, 53 bytes (0x35)
# 0000: {.  "uuid": "6a4613f5-d83a-4bc3-99b2-589df9391396".}.
# {
#   "uuid": "6a4613f5-d83a-4bc3-99b2-589df9391396"
# }
# == Info: Connection #0 to host httpbin left intact
```

:::

Use `--write-out` (`-w`) to extract specific information about the response. It supports over 50 variables. For example, here we extract the status code and response content type:

::: tabs

@tab:active Case 1

```sh
curl
  -w "\nstatus: %{response_code}\ntype: %{content_type}"
  http://httpbin/status/429
#
# status: 429
# type: text/plain; charset=utf-8  
```

@tab Case 2

Or some response headers:

```sh
curl
  -w "\ndate: %header{date}\nlength: %header{content-length}"
  http://httpbin/status/429
# 
# date: Fri, 15 Sep 2023 06:37:45 GMT
# length: 0  
```

:::

---

## Downloads

`--remote-name` (`-O`) tells curl to save the output to a file specified by the URL (specifically, by the part after the last `/`). It's often used together with `--output-dir`, which tells curl where exactly to save the file:

```sh
curl --output-dir /tmp -O http://httpbin/uuid

&& cat /tmp/uuid
# {
#   "uuid": "d07da12c-83e1-4b30-8840-059a6dcf1666"
# }
```

If the directory does not exist, `--output-dir` won't create it for you. Use `--create-dirs` for this:

```sh
curl --output-dir /tmp/some/place --create-dirs
  -O http://httpbin/uuid

&& cat /tmp/some/place/uuid
# {
#   "uuid": "e4e79cd5-053c-4d0c-834e-d9bddd7d00f2"
# }
```

You can use `--max-filesize` (in bytes) to limit the allowed response size, but often it isn't known in advance, so it may not work.

---

## Retry

Sometimes the remote host is temporarily unavailable. To deal with these situations, curl provides the `--retry [num]` option. If a request fails, curl will try it again, but no more than num times:

```sh
curl -i --retry 3 http://httpbin/unstable
# HTTP/1.1 200 OK
# Access-Control-Allow-Credentials: true
# Access-Control-Allow-Origin: *
# Content-Type: text/plain; charset=utf-8
# Date: Fri, 15 Sep 2023 06:39:56 GMT
# Content-Length: 0
```

> (this URL fails 50% of the time)

You can set the maximum time curl will spend retrying with `--retry-max-time` (in seconds) or the delay between retries with `--retry-delay` (also in seconds):

```sh
curl -i --retry 3 http://httpbin/unstable
  --retry-max-time 2
  --retry-delay 1
# HTTP/1.1 200 OK
# Access-Control-Allow-Credentials: true
# Access-Control-Allow-Origin: *
# Content-Type: text/plain; charset=utf-8
# Date: Fri, 15 Sep 2023 06:40:27 GMT
# Content-Length: 0
```

For curl, "request failed" means one of the following HTTP codes: 408, 429, 500, 502, 503 or 504. If the request fails with a "connection refused" error, curl will not retry. But you can change this with `--retry-connrefused`, or even enable retries for all kinds of problems with `--retry-all-errors`.

---

## Uploads

Curl is often used to download data from the server, but you can also upload it. Use the `--upload-file` (`-T`) option:

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
#   "origin": "172.19.0.3:44058",
#   "url": "http://httpbin/put",
#   "data": "data:application/octet-stream;base64,aGVsbG8K",
#   "files": {},
#   "form": {},
#   "json": null
# }
```

For HTTP uploads, curl uses the PUT method.

---

## Transfer controls

To stop slow transfers, set the minimum allowed download speed (in bytes per second) with `--speed-limit`. By default, curl checks the speed in 30 seconds intervals, but you can change this with `--speed-time`.

For example, allow no less than 10 bytes/sec during a 3-second interval:

```sh
curl -v --speed-limit 10 --speed-time 3 http://httpbin/get
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
#   "origin": "172.19.0.3:58696",
#   "url": "http://httpbin/get"
# }
# 
# * processing: http://httpbin/get
# *   Trying 172.19.0.2:80...
# * Connected to httpbin (172.19.0.2) port 80
# > GET /get HTTP/1.1
# > Host: httpbin
# > User-Agent: curl/8.2.1
# > Accept: */*
# > 
# < HTTP/1.1 200 OK
# < Access-Control-Allow-Credentials: true
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Date: Fri, 15 Sep 2023 06:41:38 GMT
# < Content-Length: 236
# < 
# { [236 bytes data]
# * Connection #0 to host httpbin left intact
```

To limit bandwidth usage, set `--limit-rate`. It accepts anything from bytes to petabytes:

```sh
curl --limit-rate 3 http://httpbin/get
curl --limit-rate 3k http://httpbin/get
curl --limit-rate 3m http://httpbin/get
curl --limit-rate 3g http://httpbin/get
curl --limit-rate 3t http://httpbin/get
curl --limit-rate 3p http://httpbin/get
```

Another thing to limit is the number of concurrent requests (_e.g._ if you download a lot of files). Use `--rate` for this. It accepts seconds, minutes, hours or days:

```sh
curl --rate 3/s http://httpbin/anything/[1-9].txt
curl --rate 3/m http://httpbin/anything/[1-9].txt
curl --rate 3/h http://httpbin/anything/[1-9].txt
curl --rate 3/d http://httpbin/anything/[1-9].txt
```

---

## Name resolving

By default, curl uses your DNS server to resolve hostnames to IP addresses. But you can force it to resolve to a specific IP with `--resolve`:

::: tabs

@tab:active ❌

> (this one fails because no one is listening on 127.0.0.1)

```sh
curl --resolve httpbingo.org:8080:127.0.0.1
  http://httpbingo.org:8080/get
# curl: (7) Failed to connect to httpbingo.org port 8080 after 0 ms: Couldn't connect to server
# (exit status 7)  
```

@tab ✅

Or you can even map a hostname:port pair to another hostname:port pair with `--connect-to`:

> (this one works fine)

```sh
curl --connect-to httpbingo.org:8080:httpbin:80
  http://httpbingo.org:8080/get
# {
#   "args": {},
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Host": [
#       "httpbingo.org:8080"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ]
#   },
#   "method": "GET",
#   "origin": "172.19.0.3:60902",
#   "url": "http://httpbingo.org:8080/get"
# }  
```

:::

---

::: info Connections

There are also some network connection-level settings.

::: tabs

@tab:active --interface

Use a specific network interface

```sh
curl --interactive enp3s0 https://example.com
```

@tab --local-port

local port number range

```sh
curl --local-port 1000-3000 https://example.com
```

@tab --keepalive

TCP keep alive

```sh
curl --keepalive - time 23 https://example.com
```

@tab --dns-ipv4-addr

DNS Servers (when c-ares is used)

```sh
curl --dns-ipv4-addr 10.1.2.3 https://example.com
```

:::

---

## Timeouts

To limit the maximum amount of time curl will spend interacting with a single URL, use `--max-time` (in fractional seconds):

::: tabs 

@tab:active ❌

> (this one fails)

```sh
curl --max-time 0.5 http:/httpbin/delay/1
# curl: (28) Operation timed out after 500 milliseconds with 0 bytes received
#  (exit status 28)
```

@tab ✅

Instead of limiting the total time, you can use `--connect-timeout` to limit only the time it takes to establish a network connection:

> (this one works fine)

```sh
curl --connect-timeout 0.5 http:/httpbin/delay/1
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
#   "origin": "172.19.0.3:34422",
#   "url": "http://httpbin/delay/1",
#   "data": "",
#   "files": {},
#   "form": {},
#   "json": null
# }
```

:::

---

## Credentials

You almost never want to pass the username and password in the curl command itself. One way to avoid this is to use the <FontIcon icon="iconfont icon-file"/>`.netrc` file. It specifies hostnames and credentials for accessing them:

```
machine httpbin
login alice
password cheese

machine example.com
login bob
password nuggets
```

Pass the `--netrc` option to use the <FontIcon icon="iconfont icon-file"/>`$HOME/.netrc` file, or --netrc-file to use a specific one:

```sh
echo -e "machine httpbin\nlogin alice\npassword cheese" > /tmp/netrc &&

curl --netrc-file /tmp/netrc
  http://httpbin/basic-auth/alice/cheese
# {
#   "authorized": true,
#   "user": "alice"
# }  
```

---

## Exit status

When curl exits, it returns a numeric value to the shell. For success, it's 0, and for errors, there are about [100 different values](https://everything.curl.dev/usingcurl/returns).

For example, here is an exit status 7 (failed to connect to host):

```sh
curl http://httpbin:1313/get
# curl: (7) Failed to connect to httpbin port 1313 after 1 ms: Couldn't connect to server
#  (exit status 7)
```

You can access the exit status through the `$?` shell variable.

