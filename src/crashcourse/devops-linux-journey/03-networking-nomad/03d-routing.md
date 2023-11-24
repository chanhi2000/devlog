---
lang: ko-KR
title: Networking Nomad > Routing
description: 🐧Linux Journey > Networking Nomad > Routing
tags: ["crashcourse", "linux" , "os" , "networking"]
meta:
  - name: 🐧Linux Journey > Networking Nomad > Routing
    content: Init
  - property: og:title
    content: Init
  - property: og:description
    content: 🐧Linux Journey > Networking Nomad > Routing
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/devops-linux-journey/02-networking-nomad
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Routing
desc: Learn how packets are routed across networks!
link: https://linuxjourney.com/lesson/what-is-a-router
logo: https://linuxjourney.com/assets/routing-1390297a37feb14fb6ab2434015d60a93c7d3caad58e6ab5ba358a70b4f5a170.png
color: rgba(24, 188, 156, 0.2)
```

---

## 1. What is a router?

We've used this term router before, hopefully you know what one is, since you probably have one in your home. A router enables machines on a network to communicate with each other as well as other networks. On a typical router, you will have LAN ports, that allow your machines to connect to the same local area network and you will also have an Internet uplink port that connects you to the Internet, sometimes you'll see this port being labelled as WAN, because it is essentially connecting you to a wider network. When we do any sort of networking activity, it has to go through the router. The router decides where our network packets go and which ones come in. It routes our packets between multiple networks to get from it's source host to it's destination host.

### How does a router work?

Think about routing the same way as mail delivery, we have an address we want to send a letter to, when we send it off to the post office, they get the letter and see, oh this is going to California, I'll put it on the truck going to California (I honestly have no idea how the postal system works). The letter then gets sent to San Francisco, inside San Francisco there are different zip codes, and then in those zip codes there are smaller address codes, until finally someone is able to deliver your letter to the address you wanted. On the other hand, if you already lived in San Francisco and in the same zipcode, the mail deliverer will probably know exactly where the letter has to go to without handing it off to anyone else.

When we route packets, they use similar address "routes", such as to get to network A, send these packets to network B. When we don't have a route set for that, we have a default route that our packets will use. These routes are set on a routing table that our system uses to navigate us across networks.

### Hops

As packets move across networks, they travel in hops, a hop is how we roughly measure the distance that the packet must travel to get from the source to the destination. Let's say to I have two routers connecting host A to host B, so therefore we say there are two hops between host A and host B. Each hop is a intermediate device like the routers that we must pass through.

### Understanding the basic difference between Switching, Routing & Flooding?

Packet SWITCHING is basically receiving, processing and forwarding data to the destination device.

ROUTING is a process of creating the routing table, so that we can do SWITCHING better.
Before routing, FLOODING was used. If a router don't know which way to send a packet than every incoming packet is sent through every outgoing link except the one it arrived on.

---

## 2. Routing Table

Look at your machine's routing table:

```sh
sudo route -n
# Kernel IP routing table
# Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
# 0.0.0.0         192.168.224.2   0.0.0.0         UG    0      0        0 eth0
# 192.168.224.0   0.0.0.0         255.255.255.0   U     1      0        0 eth0
```

### Destination

In the first field, we have a destination IP address of `192.168.224.0`, this says that any packet that tries to go to this network, goes out through my Ethernet cable (`eth0`). If I was `192.168.224.5` and wanted to get to `192.168.224.7`, I would just use the network interface `eth0` directly.

Notice that we have addresses of `0.0.0.0` this means that no address is specified or it's unknown. So if for example, I wanted to send a packet to IP address `151.123.43.6`, our routing table doesn't know where that goes, so it denotes it as `0.0.0.0` and therefore routes our packet to the Gateway.

### Gateway

If we are sending a packet that is not on the same network, it will be sent to this Gateway address. Which is aptly named as being a Gateway to another network.

### Genmask

This is the subnet mask, used to figure out what IP addresses match what destination.

### Flags

- `UG`: Network is Up and is a Gateway
- `U`: Network is Up

### Iface

This is the interface that our packet will be going out of, eth0 usually stands for the first Ethernet device on your system.

Look at your routing table and see where your packets can go.

---

## 3. Path of a Packet

### Let's look at how a packet travels within its local network

1. First the local machine will compare the destination IP address to see if it's in the same subnet by looking at its subnet mask.
2. When packets are sent they need to have a source MAC address, destination MAC address, source IP address and destination IP address, at this point we do not know the destination MAC address.
3. To get to the destination host, we use ARP to broadcast a request on the local network to find the MAC address of the destination host.
4. Now the packet can be successfully sent!

### Let's see how a packet travels outside its network

1. First the local machine will compare the destination IP address, since its outside of our network, it does not see the MAC address of the destination host. And we can't use ARP because the ARP request is a broadcast to locally connected hosts.
2. So our packet now looks at the routing table, it doesn't know the address of the destination IP, so it sends it out to the default gateway (another router). So now our packet contains our source IP, destination IP and source MAC, however we don't have a destination MAC. Remember MAC addresses are only reached through the same network. So what does it do? It sends an ARP request to get the MAC address of the default gateway.
3. The router looks at the packet and confirms the destination MAC address, but it's not the final destination IP address, so it keeps looking at the routing table to forward the packet to another IP address that can help the packet move along to its destination. Everytime the packet moves, it strips the old source and destination MAC address and updates the packet with the new source and destination MAC addresses.
4. Once the packet gets forwarded to the same network, we use ARP to find the final destination MAC address
5. During this process, our packet doesn't change the source or destination IP address

---

## 4. Routing Protocols

It would be a pain to have to manually configure routes on a routing table for every device on your network, so instead we use what are known as routing protocols. Routing protocols are used to help our system adapt to network changes, it learns of different routes, builds them in the routing table and then routes our packets through that way. There are two primary routing protocol types, distance vector protocols and link state protocols.

### Convergence

Before we talk about the protocols, we should go over a term using in routing known as convergence. When using routing protocols, routers communicate with other routers to collect and exchange information about the network. When they agree on how a network should look, every routing table maps out the complete topology of the network, thus "converging". When something occurs in the network topology, the convergence will temporarily break until all routers are aware of this change.

---

## 5. Distance Vector Protocols

Distance vector protocols determine the path of other networks using the hop count a packet takes across the network. If network A was 3 hops away and network B was next to network A, then we assume it must be 4 hops away. In distance vector protocols, the next route would be the one with the least amount of hops.

Distance vector protocols are great for small networks, when networks start to scale it takes longer for the routers to converge because it periodically sends the entire routing table out to every router. Another downside to distance vector protocols is efficiency, it chooses routes that are closer in hops, but it may not always choose the most efficient route.

One of the common distance vector protocols is RIP (Routing Information Protocol), it broadcasts the routing table to every router in the network every 30 seconds. For a large network, this can take some serious juice to pull off, because of that RIP limits it's hop count to 15.

---

## 6. Link State Protocols

Link state protocols are great for large scale networks, they are more complex than distance vector protocols, however a large upside is their ability to converge quickly, this is because instead of periodically sending out the whole routing table, they only send updates to neighboring routes. They use a different algorithm to calculate the shortest path first and construct their network topology in the form of a graph to show which routers are connected to other routers.

One of the common link state protocols is `OSPF` (_Open Shortest Path First_), it only updates the routing tables if there was a network change. It doesn't have a hop limit.

---

## 7. Border Gateway Protocol

The last important protocol we'll discuss is BGP, BGP is basically how the Internet runs. It's used to collect and exchange routing information among autonomous systems. Think of an autonomous system as an Internet service provider, a company, university, any organization, etc. Without BGP, these systems would not know how to talk to each other, they would just be siloed off. Instead of routing inside these autonomous systems, BGP routes between them.

Let's say you were on your home network and I'm working from Starbucks, I want to be able to communicate with you, so I send an email and the network packet travels through Starbuck's network, it bounces around there and goes through the routing tables in Starbuck's network until it finally reaches a point at the border of the Starbucks network and passes it to a Border Gateway router. This router contains the information for my packet to leave the Starbucks network and traverse other networks.

