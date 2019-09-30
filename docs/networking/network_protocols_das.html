<h1 id="networkprotocols">Network protocols</h1>
<p><a href="https://www.destroyallsoftware.com/compendium/network-protocols?share_key=97d3ba4c24d21147">Link to article</a></p>
<p>Network stack does:</p>
<ul>
<li>reliable transmission over unreliable networks</li>
<li>adapts to network congestion</li>
<li>provides addressing to billions of active nodes</li>
<li>routes packets around damaged infrastructure</li>
</ul>
<h2 id="networkrouting">Network routing</h2>
<p>In the old days of analog telephone, two users were connected by 'one long wire'.<br />
This isn't possible because of the number of internet nodes.</p>
<p>Instead, data is bucket-brigaded - handed off from one router to the next.
Each router maintains a crude routing table showing which routers are closer to which part of the internet.</p>
<p>Routing breaks down into two problems:</p>
<ol>
<li>Addressing<br />
this is handled by the IP - Internet Protoco<br />
IPv4 provides only 32 bits of address space and it's now fully allocated<br />
IPv6 allows 10^38 addresses</li>
<li>routing<br />
BGP - Border Gateway Protocol - makes sure that routers have up-to-date routing tables</li>
</ol>
<p>These two protocols aren't enough. There is no way to send data reliably</p>
<h2 id="packetswitching">Packet switching</h2>
<p>Data is broken down into packets of usually around 1,400 bytes. So an 88.5 MB video file will be broken into 63,214 packets for transmission</p>
<h2 id="outoforderpackets">Out of order packets</h2>
<p>The actual transfer of the video file used a total of 61,807 packets, each 1,432 bytes. Multiplying those two, we get 88.5 MB - the size of the video. (This does not include overhead added by various protocols)</p>
<p>The transfer was done over HTTP, a protocol layerd over TCP - Transmission Control Protocol</p>
<p>It took 14 seconds - average rate of 4,400 packets per second - 205 microsends per packet.</p>
<p>TCP packet reassembly is done using a counter. Each packet is assigned a sequence number when sent. Once all packets are in order with no gaps - we know the whole file was received. (TCP sequence numbers aren't just integers increasing by 1)</p>
<p>TCP doen't say anythong about the file size - that is the job of hogher level protocols. HTTP responses contain a "Content-Length" header specifying the response length in bytes - that is why most protocols'headers come before the response payload. The client reads the Content-Length, then keeps reading TCP packets and assembling them, until it has all of the butes specified by the header.</p>
<p>"the client" here means the entire receiving computer. TCP reassembly happens inside the kernel. Web browsers, culr, wget, … don't manually reassemble TCP packets. The kernel doen't handle HTTP, so applications need to understand the headers and know how many bytes to read.</p>
<h2 id="transmissionwindowsandslowstart">Transmission windows and slow start</h2>
<p>Every TCP packet has a next sequence number - the number of the next packet to be recieved.<br />
Occasionally the client sends a message of acknowledgement - ACK - saying it recieved all pakcets up to this number.<br />
A linux kernel sends an ACK after every ten packets on new connection. This is controlled by the TCP<em>INIT</em>CWND constat. CWND stands for congestion window - the amount of data allowed in flight at once. If the network becomes congested - overloaded - the window size is reduced.</p>
<p>Connections begin with a slow start - small congestion windows. If no packets are lost, the receiver will continually increase the size of the window.</p>
<p>If a packet is lost, the window is decreased and tahn increased again. By adjusting the size of the window and other parametes, the sender and receiver keep data moving as quickly as the network allows.<br />
Each side sends ACKs. By using all these parameters, we take full advantage of asymmetric upstream and downstream bandwidth.</p>
<h2 id="interestinglinks">Interesting Links</h2>
<p><a href="https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript">The Birth and Death of Javascript</a><br />
<a href="https://en.wikipedia.org/wiki/2008_submarine_cable_disruption">Damage to underwater cables</a></p>
<h2 id="tools">Tools</h2>
<p><a href="https://www.wireshark.org/">Wireshark</a></p>