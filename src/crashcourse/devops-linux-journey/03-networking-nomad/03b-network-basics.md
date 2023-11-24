---
lang: ko-KR
title: Networking Nomad > Network Basics
description: 🐧Linux Journey > Networking Nomad > Network Basics
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > Networking Nomad > Network Basics
    content: Init
  - property: og:title
    content: Init
  - property: og:description
    content: 🐧Linux Journey > Networking Nomad > Network Basics
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/02-networking-nomad
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Network Basics
desc: Learn about networking basics and the TCP/IP model.
link: https://linuxjourney.com/lesson/network-basics
logo: https://linuxjourney.com/assets/network-fundamentals-23b42f49c6f57d45884285ffbfdf44127863ae96243eb51ce39fb139f585cab1.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. Network Basics

Let's look at a typical home network, you have a few different components.

- ISP: Your internet service provider, the company you pay to get Internet at your house.
- Router: The router allows each machine on your network to connect to the Internet. In most modern routers, you can connect via wireless or an Ethernet cable.
- WAN: Wide Area Network, this is what we call the network that encompasses everything between your router and a wider network such the Internet.
- WLAN: Wireless Local Area Network, this is the network between your router and any wireless devices you may have such as laptops.
- LAN: Local Area Network, this is the network between your router and any wired devices such as Desktop PCs.
- Hosts: Each machine on a network is known as a host.

The data and information that gets transmitted through networks are known as packets and by the end of the Networking Nomad section, you'll understand in detail how a packet travels to and from hosts.

---

## 2. OSI Model

Before we can look at some practical networking stuff, we have to go over some boring jargon that you've probably heard of before. The OSI (_Open Systems Interconnection_) model is a theoretical model of networking. This model shows us how a packet traverses through a network in seven different layers. I won't get into specifics of this model, since most of these networking courses will be focused on the TCP/IP model, but it should be mentioned that such a theoretical networking model exists and has actually played a large part in the TCP/IP networking model that we use today.

Read more about the OSI model: [https://en.wikipedia.org/wiki/OSI_model](https://en.wikipedia.org/wiki/OSI_model)

---

## 3. TCP/IP Model

The OSI model gave birth to what eventually became the TCP/IP model and this model is actually what the Internet is based off of. It is the actual implementation of networking. The TCP/IP model uses the TCP/IP protocol suite, which we just commonly refer to as TCP/IP. These protocols work together to specify how data should be gathered, addressed, transmitted and routed through a network. Using the TCP/IP model, we can see how these protocols are used to show the breakdown of how a packet travels through the network.

### Application Layer

The top layer of the TCP/IP model. It determines how your computer's programs (such as your web browser) interface with the transport layer services to view the data that gets sent or received.

This layer uses:

- HTTP (_Hypertext Transfer Protocol_): used for the webpages on the Internet.
- SMTP (_Simple Mail Transfer Protocol_): electronic mail (email) transmission

### Transport Layer

How data will be transmitted, includes checking the correct ports, the integrity of the data, and basically delivering our packets.

This layer uses:

- TCP (_Transmission Control Protocol_): reliable data delivery
- UDP (_User Datagram Protocol_): unreliable data delivery

### Network Layer

This layers specifies how to move packets between hosts and across networks.

This layer uses:

- IP (_Internet Protocol_): Helps route packets from one machine to another.
- ICMP (_Internet Control Message Protocol_): Helps tell us what is going on, such as error messages and debugging information.

### Link Layer

This layer specifies how to send data across a physical piece of hardware. Such as data travelling through Ethernet, fiber, etc.

The lists above of protocols each layer uses is not extensive and you'll encounter many other protocols that come into play.

In the following lessons, we will dive through each of these layers and discuss how our packet traverses through the network in the eyes of the TCP/IP model (there are many perspectives on how a packet travels across networks, we won't look at them all, but be aware that they exist).

---

## 4. Network Addressing

Before we jump into seeing how a packet moves across a network, we have to familiarize ourselves with some terminology. When you mail a letter, you must know who it is being sent to and where it is coming from. Packets need the same information, our hosts and other hosts are identified using MAC (media access control) addresses and IP addresses, to make it easier on us humans we use hostnames to identify a host.

### MAC Addresses

A MAC address is a unique identifier used as a hardware address. This address will never change. When you want to get access to the Internet, your machine needs to have a device called a network interface card. This network adapter has its own hardware address that's used to identify your machine. A MAC address for an Ethernet device looks something like this `00:C4:B5:45:B2:43`. MAC addresses are given to network adapters when they are manufactured. Each manufacturer has an organizationally unique identifier (OUI) to identify them as the manufacturer. This OUI is denoted by the first 3 bytes of the MAC address. For example, Dell has `00-14-22`, so a network adapter from Dell could have a MAC address like: `00-14-22-34-B2-C2`.

### IP Addresses

An IP Address is used to identify a device on a network, they are hardware independent and can vary in syntax depending on if you are using IPv4 or IPv6 (more on this later). For now we'll assume you are using `IPv4`, so a typical IP address would look like: `10.24.12.4`. IP addresses are used with the software side of networking. Anytime a system is connected to the Internet it should have an IP address. They can also change if your network changes and are unique to the entire Internet (this isn't always the case once we learn about NAT).

Remember it takes both software and hardware to move packets across networks, so we have two identifiers for each, MAC (hardware) and IP (software).

### Hostnames

One last way to identify your machines is through hostname. Hostnames take your IP address and allow you to tie that address to a human readable name. Instead of remembering `192.12.41.4` you can just remember `myhost.com`.

---

## 5. Application Layer

Let's say I wanted to send an email to Patty. We'll go through each of the TCP/IP layers to see this in action.

Remember that packets are used to transmit data across networks, a packet consists of a header and payload. The header contains information about where the packet is going and where it came from. The payload is the actual data that is being transferred. As our packet traverses the network, each layer adds a bit of information to the header of the packet. Also keep in mind that different layers use a different term for our "packet". In the transport layer we essentially encapsulate our data in a segment and in the link layer we refer to this as a frame, but just know that packet can be used in regards to the same thing.

First we start off in the application layer. When we send our email through our email client, the application layer will encapsulate this data. The application layer talks to the transport layer through a specified port and through this port it sends its data. We want to send an email through the application layer protocol SMTP (_simple mail transfer protocol_). The data is sent through our transport protocol which opens a connection to this port (port `25` is used for SMTP), so we get this data sent through this port and that data is sent to the Transport layer to be encapsulated into segments.

---

## 6. Transport Layer
 
The transports layer helps us transfer our data in a way networks can read it. It breaks our data into chunks that will be transported and put back together in the correct order. These chunks are known as segments. Segments make it easier to transport data across networks.

### Ports

Even though we know where we are sending our data via IP addresses, they aren't specific enough to send our data to a certain processes or services. Services such as HTTP use a communication channel via ports. If we want to send webpage data, we need to send it over the HTTP port (port `80`). In addition to forming segments, the transport layer will also attach the source and destination ports to the segment, so when the receiver gets the final packet it will know what port to use.

### UDP

There are two popular transport protocols UDP and TCP. We'll briefly discuss UDP and spend most of our time on TCP, since it's the most commonly used.

UDP is not a reliable method of transporting data, in fact it doesn't really care if you get all of your original data. This may sound terrible, but it does have its uses, such as for media streaming, it's ok if you lose some frames in return you get your data a little faster.

### TCP

TCP provides a reliable connection-oriented stream of data. TCP uses ports to send data to and from hosts. An application opens up a connection from one port on its host to another port on a remote host. In order to establish the connection, we use the TCP handshake.

- The client (connecting process) sends a SYN segment to the server to request a connection
- Server sends the client a SYN-ACK segment to acknowledge the client's connection request
- Client sends an ACK to the server to acknowledge the server's connection request

Once this connection is established, data can be exchanged over a TCP connection. The data is sent over in different segments and are tracked with TCP sequence numbers so they can be arranged in the correct order when they are delivered. In our email example, the transport layer attaches the destination port (`25`) to the source port of the source host.

---

## 7. Network Layer

The Network layer determines the routing of our packets from our source host to a destination host. Fortunately in our example, our packet is only traveling within the same network, but the Internet is made up of many networks. These smaller networks that make up the Internet are known as subnets. All subnets connect to each other in some way, which is why we are able to get to www.google.com even though it's on its own network. I won't go into detail as we have a whole course dedicated to subnets, but for now in regards to our Network layer, know that the IP addresses define the rules to travel to different subnets.

In the network layer, it receives the segment coming from the transport layer and encapsulates this segment in an IP packet then attaches the IP address of the source host and the IP address of the destination host to the packet header. So at this point, our packet has information about where it is going and where it came from. Now it sends our packet to the physical hardware layer.

---

## 8. Link Layer
At the bottom of the TCP/IP model sits the Link Layer. This layer is the hardware specific layer.

In the link layer, our packet is encapsulated once more into something called a frame. The frame header attaches the source and destination MAC addresses of our hosts, checksums and packet separators so that the receiver can tell when a packet ends.

Fortunately we are on the same network, so our packet won't have to travel too far. First, the link layer attaches my source MAC address to the frame header, but it needs to know Patty's MAC address as well. How does it know that and how do I find it since it's not on the Internet? We use ARP!

### ARP (Address Resolution Protocol)

ARP finds the MAC address associated with an IP address. ARP is used within the same network. If Patty was not on the same network, we would use a routing system to determine the next router that would receive the packet and once we were on the same network, we could use ARP.

Once we are on the same network, systems first use the ARP look-up table that stores information about what IP addresses are associated with what MAC address. If the value is not there, then ARP is used. Then the system will send a broadcast message to the network using the ARP protocol to find out which host has IP `10.10.1.4`. A broadcast message is a special message that is sent to all hosts on a network (aptly named for sending a broadcast). Any machine with the requested IP address will reply with an ARP packet containing the IP address and the MAC address.

Now that we have all the necessary data we need, IP address and MAC addresses, our link layer forwards this frame through our network interface card, out to the next device and finds Patty's network. This step is a little more complex than how I just explained it, but we will discuss more details in the Routing course.

And there it is a simple (or not so simple) packet traversal down the TCP/IP layer. Keep in mind that packets don't travel in a one way fashion like this. We haven't even gotten to Patty's network yet! When travelling through networks, it requires going through the TCP/IP model at least twice before any data is sent or received. In reality, the way this packet looks would be something like this:

### Packet Traversal

1. Pete sends Patty an email: this data gets sent to the transport layer.
2. The transport layer encapsulates the data into a TCP or UDP header to form a segment, the segment attaches the destination and source TCP or UDP port, then the segment is sent to the network layer.
3. The network layer encapsulates the TCP segment inside an IP packet, it attaches the source and destination IP address. Then routes the packet to the link layer.
4. The packet then reaches Pete's physical hardware and gets encapsulated in a frame. The 4ource and destination MAC address get added to the frame.
5. Patty's receives this data frame through her physical layer and checks each frame for data integrity, then de-encapsulates the frame contents and sends the IP packet to the network layer.
6. The network layer reads the packet to find the source and destination IP that was previously attached. It checks if its IP is the same as the destination IP, which it is! It de-encapsulates the packet and sends the segment to the transport layer.
7. The transport layer de-encapsulates the segments, checks the TCP or UDP port numbers and makes a connection to the application layer based on those port numbers.
8. The application layer receives the data from the transport layer on the port that was specified and presents it to Patty in the form of the final email message

---

## 9. DHCP Overview

An important networking concept that we did not go over yet is DHCP (_Dynamic Host Configuration Protocol_)

DHCP assigns IP addresses, subnet masks and gateways to our machines. For example, let's say you have a cell phone and you want to get a cell phone number to start talking to people. You have to call up your phone carrier and they will give you a number. As long as your pay your bills you can keep using your phone. DHCP is the phone carrier in this case, it gives you an IP address so that you can talk to other IP addresses. You are also leased an IP address, these last for a certain period of time, then will get renewed depending on how you have your lease settings.

DHCP is great for many reasons, it allows a network administrator to not worry about assigning IP addresses and it also prevents them from setting up duplicate IP addresses. Every physical network should have its own DHCP server so that a host can request an IP address. In a regular home setting, the router usually acts as the DHCP server.

The way DHCP gets all your dynamic host information is:

1. DHCP DISCOVER: This message is broadcasted to search for a DHCP server.
2. DHCP OFFER: The DHCP server in the network replies with an offer message. The offer contains a packet with DHCP lease time, subnet mask, IP address, etc.
3. DHCP REQUEST: The client sends out another broadcast to let all DHCP servers know which offer it accepted.
4. DHCP ACK: Acknowledgement is sent by the server.

DHCP gets more involved than this, but this is the gist of it.
