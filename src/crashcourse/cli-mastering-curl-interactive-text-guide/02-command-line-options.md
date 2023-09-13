---
lang: ko-KR
title: 2. Command line options
description: 🐚Mastering Curl - Interactive Text Guide > 2. Command line options
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Mastering Curl - Interactive Text Guide > 2. Command line options
    content: 2. Command line options
  - property: og:title
    content: 2. Command line options
  - property: og:description
    content: 🐚Mastering Curl - Interactive Text Guide > 2. Command line options
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-mastering-curl-interactive-text-guide/02-command-line-options.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 2. Command line options
desc: Mastering curl - interactive text guide
link: https://antonz.org/mastering-curl/#command-line-options
logo: https://antonz.org/assets/favicon/favicon.ico
color: rgba(22, 25, 35, 0.2)
```

---

Curl performs internet transfers, where it acts as a client, uploading or downloading data from a remote server. The data can be anything: text, images, audio, video, and so on.

Curl supports both unauthenticated protocols (such as HTTP or FTP) and their authenticated counterparts (such as HTTPS or FTPS). Data transferred over an unauthenticated protocol can be intercepted and tampered with, so it's better to always use authenticated ones. Curl can disable server verification with an --insecure flag, but you better not do this in production.

Curl currently has about 250 options, and the number is growing at a rate of ≈10/year.

There are short command line options :

::: tabs

@tab:active single dash

```sh
curl -V
# curl 8.2.1 (x86_64-alpine-linux-musl) libcurl/8.2.1 OpenSSL/3.1.2 zlib/1.2.13 brotli/1.0.9 libidn2/2.3.4 nghttp2/1.55.1
# Release-Date: 2023-07-26
# Protocols: dict file ftp ftps gopher gophers http https imap imaps mqtt pop3 pop3s rtsp smb smbs smtp smtps telnet tftp ws wss
# Features: alt-svc AsynchDNS brotli HSTS HTTP2 HTTPS-proxy IDN IPv6 Largefile libz NTLM NTLM_WB SSL threadsafe TLS-SRP UnixSockets
```

@tab double dash

```sh
curl --version
# curl 8.2.1 (x86_64-alpine-linux-musl) libcurl/8.2.1 OpenSSL/3.1.2 zlib/1.2.13 brotli/1.0.9 libidn2/2.3.4 nghttp2/1.55.1
# Release-Date: 2023-07-26
# Protocols: dict file ftp ftps gopher gophers http https imap imaps mqtt pop3 pop3s rtsp smb smbs smtp smtps telnet tftp ws wss
# Features: alt-svc AsynchDNS brotli HSTS HTTP2 HTTPS-proxy IDN IPv6 Largefile libz NTLM NTLM_WB SSL threadsafe TLS-SRP UnixSockets
```

:::

All options are available in "long" format, but only some of them have "short" counterparts.

![Command-line options](https://antonz.org/mastering-curl/cli-options.jpg)
> The number of options keeps growing.

Some options are of boolean type.

::: tabs

@tab:active on

```sh
curl --silent http://httpbin/uuid
# {
#   "uuid": "8cf5314e-2c21-42ae-a417-f78f85469f74"
# }
```
@tab off

```sh
curl --no-silent http://httpbin/uuid
# {
#   "uuid": "ae668f77-19d3-44b1-aa58-f535d36cd037"
# }
# 
#   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
#                                  Dload  Upload   Total   Spent    Left  Speed
# 
#   0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
# 100    53  100    53    0     0  27705      0 --:--:-- --:--:-- --:--:-- 53000
```

:::

Some options accept arguments:

```sh
curl --output /tmp/uuid.json http://httpbin/uuid
#
```
Arguments that contain spaces should be enclosed in quotes:

```sh
curl -o /dev/null --write-out "type: %{content_type}" http://httpbin/uuid
# type: application/json; charset=utf-8
```