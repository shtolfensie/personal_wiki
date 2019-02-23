# Network protocols

[Link to article](https://www.destroyallsoftware.com/compendium/network-protocols?share_key=97d3ba4c24d21147)

Network stack does:

- reliable transmission over unreliable networks
- adapts to network congestion
- provides addressing to billions of active nodes
- routes packets around damaged infrastructure

## Network routing

In the old days of analog telephone, two users were connected by 'one long wire'.  
This isn't possible because of the number of internet nodes.

Instead, data is bucket-brigaded - handed off from one router to the next
Each router maintains a crude routing table showing which routers are closer to which part of the internet.

Routing breaks down into two problems:

1. Addressing  
   this is handled by the IP - Internet Protoco  
   IPv4 provides only 32 bits of address space and it's now fully allocated  
   IPv6 allows 10^38 addresses
2. routing  
   BGP - Border Gateway Protocol - makes sure that routers have up-to-date routing tables

These two protocols aren't enough. There is no way to send data reliably

## Packet switching

Data is broken down into packets of usually around 1,400 bytes. So an 88.5 MB video file will be broken into 63,214 packets for transmission

## Out of order packets

The actual transfer of the video file used a total of 61,807 packets, each 1,432 bytes. Multiplying those two, we get 88.5 MB - the size of the video. (This does not include overhead added by various protocols)

The transfer was done over HTTP, a protocol layerd over TCP - Transmission Control Protocol

It took 14 seconds - average rate of 4,400 packets per second - 205 microsends per packet.

TCP packet reassembly is done using a counter. Each packet is assifned a sequence number when sent. Once all packets are in order with no gaps - we know the whole file was received. (TCP sequence numbers aren't just integers increasing by 1)

TCP doen't say anythong about the file size - that is the job of hogher level protocols. HTTP responses contain a "Content-Length" header specifying the response length in bytes - that is why most protocols'headers come before the response payload. The client reads the Content-Length, then keeps reading TCP packets and assembling them, until it has all of the butes specified by the header.

"the client" here means the entire receiving computer. TCP reassembly happens inside the kernel. Web browsers, culr, wget, ... don't manually reassemble TCP packets. The kernel doen't handle HTTP, so applications need to understand the headers and know how many bytes to read.

## Interesting Links

[The Birth and Death of Javascript](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript)  
[Damage to underwater cables](https://en.wikipedia.org/wiki/2008_submarine_cable_disruption)

## Tools

[Wireshark](https://www.wireshark.org/)
