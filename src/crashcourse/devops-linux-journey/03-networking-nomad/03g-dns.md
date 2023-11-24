---
lang: ko-KR
title: Networking Nomad > DNS
description: 🐧Linux Journey > Networking Nomad > DNS
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > Networking Nomad > DNS
    content: Init
  - property: og:title
    content: Init
  - property: og:description
    content: 🐧Linux Journey > Networking Nomad > DNS
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/02-networking-nomad
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: DNS
desc: Everything and more that you wanted to know about DNS.
link: https://linuxjourney.com/lesson/what-is-dns
logo: https://linuxjourney.com/assets/dns-ae93614cbe94c428f5f103fd842c2fc887e2e740b3a6bc119a9a37ce11e3faf8.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. What is DNS?

Imagine if every time you wanted to do a search on Google you had to type in `http://192.78.12.4` instead of www.google.com. Well without DNS ("_Domain Name System_") that's exactly what would happen. Low level networking only understands the raw IP address to identify a host. DNS allows us humans to keep track of websites and hosts by name instead of an IP address. It's like a contact list for the Internet. If you know someone's name but don’t know their phone number, you can simply look it up in your contacts list.

DNS is fundamentally a distributed database of hostnames to IP addresses, we manage our database so people know how to get to our site/domain, and somewhere else another person is managing their database so others can get to their domain. These domains are then able to talk to each other and build a massive contact list of the Internet.

In this course, we will go over some basics of DNS, but be wary that DNS is an exhaustive topic and if you really want to get down and dirty with it, you'll need to do some additional research.

---

## 2. DNS Components

The DNS database of the Internet relies on sites and organizations providing part of that database. To do that, they need:

### Name Server

We setup DNS via "name servers", the name servers load up our DNS settings and configs and answers any questions from clients or other servers that want to know things like "Who is google.com?". If the name server doesn't know the answer to that query, it will redirect the request to other name servers. Name servers can be "authoritative", meaning they hold the actual DNS records that you're looking for, or "recursive" meaning they would ask other servers and those servers would ask other servers until they found an authoritative server that contained the DNS records. Recursive servers can also have the information we want cached instead of reaching an authoritative server.

### Zone File

Inside a name server lives something called zone files. Zone files are how the name server stores information about the domain or how to get to the domain if it doesn't know.

### Resource Records

A zone file is comprised of entries of resource records. Each line is a record and contains information about hosts, nameservers, other resources, etc. The fields consist of the following:

- Record name
- __TTL__: The time after which we discard the record and obtain a new one, in DNS TTL is denoted by time, so records could have a TTL of one hour. The reason we do this is because the Internet is constantly changing, one minute a host can be mapped to X IP address then next it can be at Y IP address
- __Class__: Namespace of the record information, most commonly IN is used for Internet
- __Type__: Type of information stored in the record data. We won't get into record types, but you've probably seen common ones like A for address, MX or mail exchanger, etc.
- __Data__: This field can contain an IP address if it's an A record or something else depending on the record type.

```sh
# patty    IN  A      192.168.0.4 
```

---

## 3. DNS Process

Let's look at an example of how your host finds a domain (`catzontheinterwebz.com`) with DNS. Essentially, we funnel our way down until we reach the DNS server that knows of that domain.

### Local DNS Server

First our host asks, "Where is `catzontheinterwebz.com`?", our local DNS server doesn't know so it goes and starts from the top of the funnel to ask the Root Servers. Keep in mind that our host is not making these requests to find `catzontheinterwebz.com` directly, most users talk to a recursive DNS server provided by their ISPs and that server is then tasked to find the location of `catzontheinterwebz.com`.

### Root Servers

There are 13 Root Servers for the Internet, they are mirrored and distributed around the world to handle DNS requests for the Internet, so there are really hundreds of servers that are working, they are controlled by different organizations and they contain information about Top-Level Domains. Top-level domains are what you know as `.org`, `.com`, `.net`, etc addresses. So the Root Server doesn't know where `catzontheinterwebz.com` is, so it tells us ask the `.com` Top-Level Domain DNS Server at an IP address it gives us.

### Top-Level Domain

So now we send another request to the name server that knows about "`.com`" addresses and asks if it knows where `catzontheinterwebz.com` is? The TLD doesn't have the `catzontheinterwebz.com` in their zone files, but it does see a record for the name server for `catzontheinterwebz.com`. So it gives us the IP address of that name server and tells us to look there.

### Authoritative DNS Server

Now we send a final request to the DNS server that actually has the record we want. The name server sees that it has a zone file for `catzontheinterwebz.com` and there is a resource record for '`www`' for this host. It then gives us the IP address of this host and we can finally see some cats on the Internet.

---

## 4. `/etc/hosts`

Before our machine actually hits DNS to do a query, it first looks locally on our machines.

### <FontIcon icon="iconfont icon-file"/>`/etc/hosts`

The <FontIcon icon="iconfont icon-file"/>`/etc/hosts` file contains mappings of some hostnames to IP addresses. The fields are pretty self explanatory, there is one for the IP address, the hostname and then any alias's for the host.

```sh
cat /etc/hosts
# 127.0.0.1       localhost
# 127.0.1.1       icebox
```

You'll typically see your localhost address listed as a default in this file. You can also manage access to hosts by modifying the <FontIcon icon="iconfont icon-file"/>`/etc/hosts.deny` or <FontIcon icon="iconfont icon-file"/>`/etc/hosts.allow` files. However, if you were security conscientious, this isn't really the way to go and you should be modifying your firewall rules instead.

Let's see a fun example of <FontIcon icon="iconfont icon-file"/>`/etc/hosts`. Modify the file and add a line for:

```
123.45.6.7  www.google.com
```

Save the file and now go to www.google.com. Having issues aren't you? Well that's because we just mapped www.google.com to a completely wrong IP address. Since our hosts first look locally for IP address mappings, it never reaches DNS to find google.com.

### <FontIcon icon="iconfont icon-file"/>`/etc/resolv.conf`

Traditionally, we've used a file called <FontIcon icon="iconfont icon-file"/>`/etc/resolv.conf` to map DNS name servers for more efficient lookups, however with the improvements made to DNS this file is quite often irrelevant, in fact, you can see in my example below that <FontIcon icon="iconfont icon-file"/>`/etc/resolv.conf` isn't managed manually. Refer to your distribution specific settings to manage DNS name server mappings.

```
conf(5) file for glibc resolver(3) generated by resolvconf(8)
#     DO NOT EDIT THIS FILE BY HAND -- YOUR CHANGES WILL BE OVERWRITTEN
nameserver 127.0.1.1
search localdomain
```

---

## 5. DNS Setup

We won't got through setting up a DNS server, as that would be quite a lengthy tutorial. Instead here is a quick comparison list of the popular DNS servers to use with Linux.

### BIND

The most popular DNS server on the Internet, it's the standard that is used with Linux distributions. It was originally developed at the University of California at Berkeley hence the name BIND (_Berkeley Internet Name Domain_). If you need full-featured power and flexibility, you can't go wrong with BIND.

### DNSmasq

Lightweight and much easier to configure than BIND. If you want simplicity and don't need all the bells and whistles of BIND, use DNSmasq. It comes with all the tools you need to setup DHCP and DNS, recommended for a smaller network.

### PowerDNS

Full-featured and similar to BIND, it offers you a little bit more flexibility with options. It reads information from multiple databases such as MySQL, PostgreSQL, etc. for easier administration. Just because BIND has been the way we do things, it doesn't mean it has to stay that way.

This isn't a complete list, but it should give you an idea of where to look if you are setting up your own DNS server.

---

## 6. DNS Tools

### `nslookup`

The "_name server lookup_" tool is used to query name servers to find information about resource records. Let's find where the name server for `google.com` is:

```sh
nslookup www.google.com
# Server:         127.0.1.1
# Address:        127.0.1.1#53
# 
# Non-authoritative answer:
# Name:   www.google.com
# Address: 216.58.192.4
```

### `dig`

Dig (_domain information groper_) is a powerful tool for getting information about DNS name servers, it is more flexible than nslookup and great for troubleshooting DNS issues.

```sh
dig www.google.com
# 
# ; <<>> DiG 9.9.5-3-Ubuntu <<>> www.google.com
# ;; global options: +cmd
# ;; Got answer:
# ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 42376
# ;; flags: qr rd ra; QUERY: 1, ANSWER: 5, AUTHORITY: 0, ADDITIONAL: 1
# 
# ;; OPT PSEUDOSECTION:
# ; EDNS: version: 0, flags:; MBZ: 0005 , udp: 512
# ;; QUESTION SECTION:
# ;www.google.com.                        IN      A
# 
# ;; ANSWER SECTION:
# www.google.com.         5       IN      A       74.125.239.147
# www.google.com.         5       IN      A       74.125.239.144
# www.google.com.         5       IN      A       74.125.239.146
# www.google.com.         5       IN      A       74.125.239.145
# www.google.com.         5       IN      A       74.125.239.148
# 
# ;; Query time: 27 msec
# ;; SERVER: 127.0.1.1#53(127.0.1.1)
# ;; WHEN: Sun Feb 07 10:14:00 PST 2016
# ;; MSG SIZE  rcvd: 123
```

Read up on the manpage for `dig`.