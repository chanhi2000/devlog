---
lang: ko-KR
title: 1. The curl Project
description: 🐚Mastering Curl - Interactive Text Guide > 1. The curl Project
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Mastering Curl - Interactive Text Guide > 1. The curl Project
    content: 1. The curl Project
  - property: og:title
    content: 1. The curl Project
  - property: og:description
    content: 🐚Mastering Curl - Interactive Text Guide > 1. The curl Project
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-mastering-curl-interactive-text-guide/01-the-curl-project.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 1. The curl Project
desc: Mastering curl - interactive text guide
link: https://antonz.org/mastering-curl/#the-curl-project
logo: https://antonz.org/assets/favicon/favicon.ico
color: rgba(22, 25, 35, 0.2)
```

---

Curl started in 1996 (back then it was called `httpget`). It was created by Rafael Sagula, who later transferred the project to Daniel. Daniel renamed the project to curl in 1998. In 2000, he extracted the networking functionality into the `libcurl` library, and curl itself became a command-line wrapper around it.

Curl stands for "client for URLs". It's a tool for client-side _internet transfers_ with URLs. An internet transfer is an _upload_ or _download_ using a specific protocol (curl supports quite a few), where the endpoint is identified by a URL.

Curl is [<FontIcon icon="iconfont icon-github"/> open sourced (curl/curl)](https://github.com/curl/curl) under the (slightly modified) MIT License. It accepts contributions from anyone, no paperwork required. There are about 15 people who can accept PRs. The lead (and only full-time) developer is Daniel.

Curl supports a crazy number of protocols, from HTTP, FTP and TELNET to IMAP, LDAP and GOPHER. It runs on 92 operating systems and has over 20 billion installations worldwide.

`Curl` + `libcurl` is about 160K lines of code. Curl is released every 8 weeks and has about 250 releases as of August 2023.

![Release cycle](https://antonz.org/mastering-curl/release-cycle.jpg)

> After the release, there is a 10-day cool-down, followed by a 21-day feature window, followed by a 25-day feature freeze.

Curl has an extensive [reference documentation](https://curl.se/docs/manpage.html). To see the short version, try this:

```sh
curl --help
# Usage: curl [options...] <url>
#  -d, --data <data>          HTTP POST data
#  -f, --fail                 Fail fast with no output on HTTP errors
#  -h, --help <category>      Get help for commands
#  -i, --include              Include protocol response headers in the output
#  -o, --output <file>        Write to file instead of stdout
#  -O, --remote-name          Write output to a file named as the remote file
#  -s, --silent               Silent mode
#  -T, --upload-file <file>   Transfer local FILE to destination
#  -u, --user <user:password> Server user and password
#  -A, --user-agent <name>    Send User-Agent <name> to server
#  -v, --verbose              Make the operation more talkative
#  -V, --version              Show version number and quit
# 
# This is not the full help, this menu is stripped into categories.
# Use "--help category" to get an overview of all categories.
# For all options use the manual or "--help all".
```

To see the full version, try `curl --manual` (be careful, it's _huge_).

There is also a book named [Everything curl](https://curl.se/book.html) available online, and [commercial support](https://curl.se/support.html) provided by the company Daniel works for.

