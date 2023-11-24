---
lang: ko-KR
title: Networking Nomad > Troubleshooting
description: 🐧Linux Journey > Networking Nomad > Troubleshooting
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > Networking Nomad > Troubleshooting
    content: Init
  - property: og:title
    content: Init
  - property: og:description
    content: 🐧Linux Journey > Networking Nomad > Troubleshooting
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/02-networking-nomad
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Troubleshooting
desc: Learn about common networking tools to help you diagnose and troubleshoot issues!
link: https://linuxjourney.com/lesson/icmp
logo: https://linuxjourney.com/assets/network-troubleshooting-5551300f3d2be9d5b3c6165a001ee7861a4d78c7482b130e54d4127ef95cdc14.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. ICMP

The _Internet Control Message Protocol_ (ICMP) is part of the TCP/IP protocol suite, it used to send updates and error messages and is an extremely useful protocol used for debugging network issues such as a failed packet delivery.

Each ICMP message contains a type, code and checksum field. The type field is the type of ICMP message, the code is a sub-type and describes more information about the message and the checksum is used to detect any issues with the integrity of the message.

Let's look at some common ICMP Types:

- Type 0: Echo Reply
- Type 3: Destination Unreachable
- Type 8: Echo Request
- Type 11: Time Exceeded

When a packet can't get to a destination, Type 3 ICMP message is generated, within Type 3 there are 16 code values that will further describe why it can't get to the destination:

- Code 0: Network Unreachable
- Code 1: Host Unreachable
- etc..etc..

These messages will make more sense as we use some network troubleshooting tools.

---

## 2. `ping`

One of the most simplest networking tools `ping`, it's used to test whether or not a packet can reach a host. It works by sending ICMP echo request (Type 8) packets to the destination host and waits for an ICMP echo reply (Type 0). Ping is successful when a host sends out the request packet and receives a response from the target. Let's look at an example:

```sh
ping -c 3 www.google.com
# PING www.google.com (74.125.239.112) 56(84) bytes of data.
# 64 bytes from nuq05s01-in-f16.1e100.net (74.125.239.112): icmp_seq=1 ttl=128 time=29.0 ms
# 64 bytes from nuq05s01-in-f16.1e100.net (74.125.239.112): icmp_seq=2 ttl=128 time=23.7 ms
# 64 bytes from nuq05s01-in-f16.1e100.net (74.125.239.112): icmp_seq=3 ttl=128 time=15.1 ms
```

In this example, we are using ping to check if we can get to ww`w.google.com`. The `-c` flag (count) is used to stop sending echo request packets after the count has been reached.

The first part says that we are sending 64-byte packets to `74.125.239.112` (google.com) and the rest show us the details of the trip. By default it sends a packet per second.

### `icmp_seq`

The `icmp_seq` field is used to show the sequence number of packets sent, so in this case, I sent out 3 packets and we can see that 3 packets made it back. If you do a ping and you get some sequence numbers missing, that means that some connectivity issue is happening and not all your packets are getting through. If the sequence number is out of order, your connection is probably very slow as your packets are exceeding the one second default.

### `ttl`

The _Time To Live_ (ttl) field is used as a hop counter, as you make hops, it decrements the counter by one and once the hop counter reaches 0, our packet dies. This is meant to give the packet a lifespan, we don't want our packets travelling around forever.

### time

The roundtrip time it took from you sending the echo request packet to getting an echo reply.

Do a ping on a website and look at the output you receive.

---

## 3. `traceroute`

The `traceroute` command is used to see how packets are getting routed. It works by sending packets with increasing TTL values, starting with 1. So the first router gets the packet, and it decrements the TTL value by one, thus dropping the packet. The router sends back an ICMP Time Exceeded message back to us. And then the next packet gets a TTL of 2, so it makes it past the first router, but when it gets to the second router the TTL is 0 and it returns another ICMP Time Exceeded message. Traceroute works this way because as it sends and drops packets it is build a list of routers that the packets traverse, until it finally gets to its destination and gets an ICMP Echo Reply message.

Here's a little snippet of a traceroute:

```sh
traceroute google.com                                                                          
# traceroute to google.com (216.58.216.174), 30 hops max, 60 byte packets                          
#  1  192.168.4.254 (192.168.4.254)  0.028 ms  0.009 ms  0.008 ms                                  
#  2  100.64.1.113 (100.64.1.113)  1.227 ms  1.226 ms 0.920 ms
#  3  100.64.0.20 (100.64.0.20)  1.501 ms 1.556 ms  0.855 ms                                                                                 
```

Each line is a router or machine that is between me and my target. It shows the name of the target and its IP address and the last three columns correspond to the round-trip time of a packet to get to that router. By default, we send three packets along the route.

Run the `traceroute` command on your machine and observe the output.

---

## 4. netstat

### Well Known Ports

We've discussed data transmission through ports on our machine, let's look at some well known ports.

You can get a list of well-known ports by looking at the file <FontIcon icon="iconfont icon-file"/>`/etc/services`:

```
ftp             21/tcp
ssh             22/tcp
smtp            25/tcp
domain          53/tcp  # DNS
http            80/tcp
https           443/tcp
.. etc ..
```

The first column is the name of the service, then the port number and the transport layer protocol it uses.

### `netstat`

An extremely useful tool to get detailed information about your network is `netstat`. Netstat displays various network related information such network connections, routing tables, information about network interfaces and more, it's the swiss army knife of networking tools. We will focus mostly on one feature netstat has and that's the status of network connections. Before we look at an example, let's talk about sockets and ports first. A socket is an interface that allows programs to send and receive data while a port is used to identify which application should send or receive data. The socket address is the combination of the IP address and port. Every connection between a host and destination requires a unique socket. For example, HTTP is a service that runs on port 80, however we can have many HTTP connections and to maintain each connection a socket gets created per connection.

```sh
netstat -at
# Active Internet connections (servers and established)
# Proto Recv-Q Send-Q Local Address           Foreign Address         State      
# tcp        0      0 icebox:domain           *:*                     LISTEN     
# tcp        0      0 localhost:ipp           *:*                     LISTEN     
# tcp        0      0 icebox.lan:44468        124.28.28.50:http       TIME_WAIT  
# tcp        0      0 icebox.lan:34751        124.28.29.50:http       TIME_WAIT  
# tcp        0      0 icebox.lan:34604        economy.canonical.:http TIME_WAIT  
# tcp6       0      0 ip6-localhost:ipp       [::]:*                  LISTEN     
# tcp6       1      0 ip6-localhost:35094     ip6-localhost:ipp       CLOSE_WAIT 
# tcp6       0      0 ip6-localhost:ipp       ip6-localhost:35094     FIN_WAIT2
```

The `netstat -a` command shows the listening and non-listening sockets for network connections, the `-t` flag shows only tcp connections.

The columns are as follows from left to right:

- Proto: Protocol used, TCP or UDP.
- Recv-Q: Data that is queued to be received
- Send-Q: Data that is queued to be sent
- Local Address: Locally connected host
- Foreign Address: Remotely connected host
- State: The state of the socket

See the manpage for a list of socket states, but here are a few:

- `LISTENING`: The socket is listening for incoming connections, remember when we make a TCP connection our destination has to be listening for us before we can connect.
- `SYN_SENT`: The socket is actively attempting to establish a connection.
- `ESTABLISHED`: The socket has an established connection
- `CLOSE_WAIT`: The remote host has shutdown and we're waiting for the socket to close
- `TIME_WAIT`: The socket is waiting after close to handle packets still in the network

Look at the manpage for `netstat` and learn all the features it has to offer.

---

## 5. Packet Analysis

The subject of packet analysis could fill an entire course of its own and there are many books written just on packet analysis. However, today we will just learn the basics. There are two extremely popular packet analyzers, Wireshark and `tcpdump`. These tools scan your network interfaces, capture the packet activity, parse the packages and output the information for us to see. They allows us to get into the nitty gritty of network analysis and get into the low level stuff. We'll be using `tcpdump` since it has a simpler interface, however if you were to pick up packet analysis for your toolbelt, I would recommend looking into Wireshark.

### Install `tcpdump`

```sh
sudo apt install tcpdump
```

### Capture packet data on an interface

```sh
sudo tcpdump -i wlan0
# tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
# listening on wlan0, link-type EN10MB (Ethernet), capture size 65535 bytes
# 11:28:23.958840 IP icebox.lan > nuq04s29-in-f4.1e100.net: ICMP echo request, id 1901, seq 2, length 64
# 11:28:23.970928 IP nuq04s29-in-f4.1e100.net > icebox.lan: ICMP echo reply, id 1901, seq 2, length 64
# 11:28:24.960464 IP icebox.lan > nuq04s29-in-f4.1e100.net: ICMP echo request, id 1901, seq 3, length 64
# 11:28:24.979299 IP nuq04s29-in-f4.1e100.net > icebox.lan: ICMP echo reply, id 1901, seq 3, length 64
# 11:28:25.961869 IP icebox.lan > nuq04s29-in-f4.1e100.net: ICMP echo request, id 1901, seq 4, length 64
# 11:28:25.976176 IP nuq04s29-in-f4.1e100.net > icebox.lan: ICMP echo reply, id 1901, seq 4, length 64
# 11:28:26.963667 IP icebox.lan > nuq04s29-in-f4.1e100.net: ICMP echo request, id 1901, seq 5, length 64
# 11:28:26.976137 IP nuq04s29-in-f4.1e100.net > icebox.lan: ICMP echo reply, id 1901, seq 5, length 64
# 11:28:30.674953 ARP, Request who-has 172.254.1.0 tell ThePickleParty.lan, length 28
# 11:28:31.190665 IP ThePickleParty.lan.51056 > 192.168.86.255.rfe: UDP, length 306
```

You'll notice a lot of stuff happening when you run a packet capture, well that's to be expected there's a lot of network activity happening in the background. In my above example, I've taken only a snippet of my capture specifically the time when I decided to ping `www.google.com`.

### Understanding the output

```sh
# 11:28:23.958840 IP icebox.lan > nuq04s29-in-f4.1e100.net: ICMP echo request, id 1901, seq 2, length 64
# 11:28:23.970928 IP nuq04s29-in-f4.1e100.net > icebox.lan: ICMP echo reply, id 1901, seq 2, length 64
```

- The first field is a timestamp of the network activity
- IP, this contains the protocol information
- Next, you'll see the source and destination address: `icebox.lan > nuq04s29-in-f4.1e100.net`
- seq, this is the TCP packets's starting and ending sequence number
- length, length in bytes

As you can see from our `tcpdump` output, we are sending an ICMP echo request packet to `www.google.com` and getting an ICMP echo reply packet in return! Also note that different packets will output different information, refer to the manpage to see what those are.

### Writing tcpdump output to a file

```sh
sudo tcpdump -w /some/file
```

::: note Some final thoughts

we only scraped the surface of the subject of packet analysis. There is so much you can look at and we haven't even touched upon going even deeper with Hex and ASCII output. There are plenty of resources online to help you learn more about packet analyzers and I urge you to find them!

:::

Download and install the Wireshark tool and play around with the interface.