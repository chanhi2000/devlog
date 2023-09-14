---
lang: ko-KR
title: 3. URLs
description: 🐚Mastering Curl - Interactive Text Guide > 3. URLs
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Mastering Curl - Interactive Text Guide > 3. URLs
    content: 3. URLs
  - property: og:title
    content: 3. URLs
  - property: og:description
    content: 🐚Mastering Curl - Interactive Text Guide > 3. URLs
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-mastering-curl-interactive-text-guide/03-urls.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 3. URLs
desc: Mastering curl - interactive text guide
link: https://antonz.org/mastering-curl/#urls
logo: https://antonz.org/assets/favicon/favicon.ico
color: rgba(22, 25, 35, 0.2)
```

---

Curl supports URLs (URIs, really) similar to how [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) defines them:

```
scheme://user:password@host:port/path?query#fragment
```

- `scheme` defines a protocol (like `https` or `ftp`). If omitted, curl will try to guess one.
- `user` and `password` are authentication credentials (passing credentials in URLs is generally not used anymore for the security reasons).
- `host` is the hostname, domain name or IP address of the server.
- `port` is the port number. If omitted, curl will use the default port associated with the scheme (such as 80 for `http` or 443 for `https`).
- `path` is the path to the resource on the server.
- `query` is usually a sequence of `name=value` pairs separated by `&`.

For curl, anything starting with `-` or `--` is an option, and everything else is a URL.

---

## Query

If you pass a lot of URL parameters, the query part can become quite long. The `--url-query` option allows you to specify query parts separately:

```sh
curl http://httpbin/get --url-query "name=Alice" --url-query "age=25"
# {
#   "args": {
#     "age": [
#       "25"
#     ],
#     "name": [
#       "Alice"
#     ]
#   },
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
#   "origin": "172.19.0.3:38126",
#   "url": "http://httpbin/get?name=Alice&age=25"
# }
```

---

## Multiple URLs

Curl accepts any number of URLs, each of which requires a destination — stdout or a file. For example, this command saves the first UUID to `/tmp/uuid1.json` and the second UUID to `tmp/uuid2.json`:

```sh
curl 
  -o /tmp/uuid1.json http://httpbin/uuid
  -o /tmp/uuid2.json http://httpbin/uuid
&& cat /tmp/uuid1.json
&& cat /tmp/uuid2.json
# {
#   "uuid": "a420097a-f20b-4050-b7ef-6b529a46c287"
# }
# {
#   "uuid": "be26b2f8-dcde-4de5-9db1-ef5d879c8fe8"
# }
```
> (Here and beyond, I will sometimes show multiline commands for illustrative purposes. In reality curl expects a single line or line breaks with \)

The `-O` derives the filename from the URL:

```sh
curl --output-dir /tmp
  -O http://httpbin/anything/one
  -O http://httpbin/anything/two

&& ls /tmp
# one
# two
```
To write both responses to the same file, you can use redirection:

```sh
curl http://httpbin/uuid http://httpbin/uuid > /tmp/uuid.json

&& cat /tmp/uuid.json
# {
#   "uuid": "b3d3a717-cf30-4fd8-9f9a-27c674027f98"
# }
# {
#   "uuid": "c21cbb31-5353-406f-8180-5e868dc001ba"
# }
```

---

## URL globbing

Curl automatically expands glob expressions in URLs into multiple specific URLs.

For example, this command requests three different paths (`al`, `bt`, `gm`), each with two different parameters (`num=1` and `num=2`), for a total of six URLs:

```sh
curl --output-dir /tmp -o "out_#1_#2.txt"
  http://httpbin/anything/{al,bt,gm}?num=[1-2]

&& ls /tmp
# out_al_1.txt
# out_al_2.txt
# out_bt_1.txt
# out_bt_2.txt
# out_gm_1.txt
# out_gm_2.txt
```
You can disable globbing with the `--globoff` option if `[]{}` characters are valid in your URLs. Then curl will treat them literally.

![Parallel transfers](https://antonz.org/mastering-curl/parallel-transfers.jpg)

> Use `--parallel` (`-Z`) to tell curl process URLs concurrently.

---

## Config file

As the number of options increases, the curl command becomes harder to decipher. To make it more readable, you can prepare a config file that lists one option per line (`--` is optional):

```
output-dir /tmp
show-error
silent
```

By default, curl reads the config from `$HOME/.curlrc`, but you can change this with the `--config` (`-K`) option:

```sh
curl --config /sandbox/.curlrc http://httpbin/uuid
# {
#   "uuid": "274ef701-f653-451e-976f-85fef2881c95"
# }
```

---

## Progress meters

Curl has two progress meters. The default is verbose:

```sh
curl --no-silent http://httpbin/uuid
# {
#   "uuid": "0ca972e6-39f4-4b1c-9ad9-9abc34424143"
# }
# 
#   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
#                                  Dload  Upload   Total   Spent    Left  Speed
# 
#   0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
# 100    53  100    53    0     0  38047      0 --:--:-- --:--:-- --:--:-- 53000
```

(I have a silent option in my config file, so I have to turn it off explicitly; by default, it's not set, so `--no-silent` is not needed)

The other is compact:

```sh
curl --no-silent --progress-bar http://httpbin/uuid
# {
#   "uuid": "6fe41e70-2ec2-4a6e-8839-2c98e9e0d5f1"
# }
# 
# ######################################################################## 100.0%
```
The `--silent` option turns the meter off completely:

```sh
curl --silent http://httpbin/uuid
# {
#   "uuid": "96d3c300-1fd5-4a84-aef4-9f10736e9a8a"
# }
```

---
## State reset

When you set options, they apply to all URLs curl processes. For example, here both headers are sent to both URLs:

```sh
curl
  -H "x-num: one" http://httpbin/headers?1
  -H "x-num: two" http://httpbin/headers?2
# {
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ],
#     "X-Num": [
#       "one",
#       "two"
#     ]
#   }
# }
# {
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "User-Agent": [
#       "curl/8.2.1"
#     ],
#     "X-Num": [
#       "one",
#       "two"
#     ]
#   }
# }  
```
Sometimes that's not what you want. To reset the state between URL calls, use the `--next` option:

```sh
curl
  -H "x-num: one" http://httpbin/headers?1
  --next
  -H "x-num: two" http://httpbin/headers?2
# {
#   "headers": {
#     "Accept": [
#       "*/*"
#     ],
#     "Host": [
#       "httpbin"
#     ],
#     "curl/8.2.1"
#     "User-Agent": [
#     "X-Num": [
#     ],
#     ]
#       "one"
#   }
#   }
#   "headers": {
# {
#       "*/*"
#     "Accept": [
#     "Host": [
#     ],
#     ],
#       "httpbin"
#       "curl/8.2.1"
#     "User-Agent": [
#     "X-Num": [
#     ],
#     ]
#       "two"
# }  
# }
```
