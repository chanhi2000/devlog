---
lang: ko-KR
title: Networking Nomad > Subnetting
description: 🐧Linux Journey > Networking Nomad > Subnetting
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > Networking Nomad > Subnetting
    content: Init
  - property: og:title
    content: Init
  - property: og:description
    content: 🐧Linux Journey > Networking Nomad > Subnetting
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/02-networking-nomad
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Subnetting
desc: Learn about subnets and how to do subnet arithmetic!
link: https://linuxjourney.com/lesson/ipv4
logo: https://linuxjourney.com/assets/subnetting-419b4e0a930964af38188bb919aa65433e7c46e846637eee5e6e820191d63fbc.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. IPv4

So we know that network hosts have a unique address they can be found at. These addresses are known as IP addresses. An IPv4 address looks something like this:

```
204.23.124.23
```

This address actually contains two parts, the network portion that tells us know network it's on and the host portion that tells us which host on that network it is. For this course we will mostly be discussing IPv4 addresses, which are what you commonly will see when referring to IP addresses.

An IP address is separated into octets by the periods. So there are 4 octets in an IPv4 address. If you know a bit of computer science, an octet is 8 bits and 8 bits actually equal 1 byte, so we also refer to an IPv4 address as having 4 bytes. We use bits frequently when dealing with subnets and IP addresses.

You can view your IP address with the ifconfig -a command:

```sh
ifconfig -a
# eth0      Link encap:Ethernet  HWaddr 1d:3a:32:24:4d:ce  
#           inet addr:192.168.1.129  Bcast:192.168.1.255  Mask:255.255.255.0
#           inet6 addr: fd60::21c:29ff:fe63:5cdc/64 Scope:Link
```

As you can see my IPv4 address is: `192.168.1.129`

Find your IP address with `ifconfig`.

---

## 2. Subnets

How can I tell if I'm on the same network as Patty? Well we can just look at the subnet short for subnetwork. A subnet is a group of hosts with IP addresses that are similar in a certain way. These hosts usually are in a proximate location from each other and you can easily send data to and from hosts on the same subnet. Think about it as sending mail in the same zip code, it's a lot easier than sending mail to a different state.

For example, all hosts with an IP address that starts with 123.45.67 would be on the same subnet. My host has an IP of 123.45.67.8 and Patty's has an IP of 123.45.67.9. The common numbers are my network prefix and the 8 and 9 are our hosts, therefore my network is the same as Patty's. A subnet is divided into a network prefix, such as 123.45.67.0 and a subnet mask.

### Subnet Masks

Subnet masks determine what part of your IP address is the network portion and what part is the host portion.

A typical subnet mask can look something like this:

```
255.255.255.0
```

The `255` portion is actually our mask. To make this a little easier to understand, remember how we refer to each octet as 8 bits? In computer science a bit is denoted by a 0 or a 1 in binary form. When binary numbers are used, 1 means on and 0 means off. So what does 8 0's or 1's equal?

Punch into Google "binary to decimal calculator" and convert 11111111 into a decimal form. What do you get? 255! So an octet ranges from 0 to 255. So if we had a subnet mask of 255.`255.255.0`, and an IP address of `192.168.1.0`, how many hosts are on that subnet? We'll find out the answer to that in our subnet math lesson.

Also when we talk about our subnet, we commonly denote it by the network prefix followed by the subnet mask:

```
123.234.0.0/255.255.0.0
```

### Why?

Why on earth do we make subnets? Subnetting is used to segment networks and control the flow of traffic within that network. So a host on one subnet can’t interact with another host on a different subnet.

But wait a minute, what if I want to connect to other hosts like yahoo.com? Then you need to connect subnets together. To connect subnets you just need to find the hosts that are connected to more than one subnet. For example, if my host at `192.168.1.129` is connected to a local network of `192.168.1.129/24` it can reach any hosts on that network. To reach hosts on the rest of the Internet, it needs to communicate through the router. Traditionally, on most networks with a subnet mask of `255.255.255.0`, the router is usually at address 1 of the subnet, so `192.168.1.1`. Now that router will have a port that connects it to another subnet (more in the Routing course). Certain IP addresses (private networks) are not visible to the internet, and we have things like NAT in place (more on this later).

Use `ifconfig` to view your subnet mask.

---

## 3. Subnet Math

Ok, we know that subnet masks are important to figure out how many hosts we can have on our subnet. So how many hosts would that be?

Let's say I have an IP address of `192.168.1.0` and a subnet mask of `255.255.255.0`, now let's line up these numbers in binary form. For now use an online calculator to convert these values from decimal to binary.

```
192.168.1.165  = 11000000.10101000.00000001.10100101
255.255.255.0  = 11111111.11111111.11111111.00000000
```

The IP address is masked by our subnet mask, when you see a 1, it is masked and we pretend like we don't see it. So the only possible hosts we can have are from the `00000000` region. Remember `11111111` in binary form equals 255, we also account 0 as a host number, so there are 256 possible options. However, it may look like we have 256 possible options, but we actually subtract 2 hosts because we have to account for the broadcast address and the subnet address, leaving us with 254 possible hosts on our subnet. So we know that we can have hosts with IP addresses ranging from `192.168.1.1` - `192.168.1.254`.

---

## 4. Subnetting Cheats

I hate to have to add this section, in the real world you would most likely never have to do subnet math by hand, however if you were getting interviewed on this, you'll have to know how to convert to and from binary form for subnetting. Luckily there are some arithmetic cheats you can memorize.

First memorize your base-2 calculations, just do it:

- $2^1=2$
- $2^2=4$
- $2^3=8$
- $2^4=16$
- $2^5=32$
- $2^6=64$
- $2^7=128$
- $2^8=256$
- $2^9=512$
- $2^10=1024$
- $2^11=2048$
- $2^12=4096$

### Decimal to Binary Chart

```
1   1  1  1  1 1 1 1
128 64 32 16 8 4 2 1
```

There are lots of reasons why the following chart looks the way it does, if you're curious how it works there are lots of resources online.

Ok, got these memorized? Let's do a quick decimal to binary conversion:

### Convert `192.168.23.43` to Binary

Remember: 128 / 64 / 32 / 16 / 8 / 4 / 2 / 1

Let's walk through converting the first octet to binary and you'll understand how the rest works.

1. Can you subtract 192 - 128? Yes, so the first bit is 1
2. $192-128=64$, the next number in the chart is 64, can you subtract $64-64$? Yes, so the second bit is 1
3. We've run out of numbers to subtract from, so our binary form of 192 is 11000000

#### Convert Binary 11000000 to Decimal

For binary to decimal conversion you add up the numbers that have a 1, so:

$$
128 + 64 + 0 + 0 + 0 + 0 + 0 + 0 = 192
$$

Look at your IP address and subnet mask and see how many hosts you can have on your subnet.

---

## 5. CIDR

CIDR (classless inter-domain routing) is used to represent a subnet mask in a more compact way. You may see subnets notated in CIDR notation, where a subnet such as the `10.42.3.0/255.255.255.0` is written as `10.42.3.0/24` which just means it includes both the subnet prefix and the subnet mask.

Remember an IP address consists of 4 bytes or 32 bits, CIDR indicates the amount of bits used as the network prefix. So `123.12.24.0/23` means that the first 23 bits are used. Well what does that mean? How many hosts is that?

A simple trick is to subtract the total of bits an IP address can have (`32`) from the CIDR address (`23`), so that leaves 9 bits, $2^9=512$, but we have to remove 2 addresses (subnet address and broadcast address) so we have 510 usable hosts.

---

## 6. NAT

We've brought up NAT (_network address translation_) before but didn't touch upon it, when we are working on our network, does that mean that the Internet can see our IP address? Not quite.

NAT makes a device like our router act as an intermediary between the Internet and private network. So only a single, unique IP address is required to represent an entire group of computers.

Think of NAT is like a receptionist in a large office, if someone wants to contact you, they only know the number to the whole office, the receptionist would then have to look for your extension number and forward the call to you.

### How does it work?

A simple case would look like this:

1. Patty wants to connect to www.google.com, so her machine sends this request through the router
2. The router takes that request and opens its own connection to google.com, then it sends Patty's request once it makes a connection
3. The router is the intermediary between Patty and www.google.com. Google doesn't know about Patty instead all it can see is the router.

NAT and packet routing in general can get pretty ugly, but we won't dive into the specifics.

---

## 7. IPv6

We've heard the term IPv6 here and there, but what is it? Every device that connects to the Internet gets it's own IP address, well that happens to be a finite number that we are soon approaching in this digital age. IPv6 was created to allow us to connect more hosts to the Internet, it comes with more IP improvements however, it's adoption is quite slow. It isn't meant to replace IPv4, they are meant to complement each other. The two IP protocols are very similar and if you know IPv4 you'll understand IPv6, the major difference is the way the address is written. Here is what a typical IPv6 address looks like:

```
2dde:1235:1256:3:200:f8ed:fe23:59cf
```

Check `ifconfig` to see if you have an IPv6 address listed.
