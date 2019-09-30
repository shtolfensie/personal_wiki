<h1 id="unit13">Unit 1.3</h1>
<h2 id="logicgates">Logic gates</h2>
<ul>
<li>a technique for implementing Boolean functions</li>
</ul>
<p>Logic gates:</p>
<ol>
<li>Elementary (Nand, And, …)</li>
<li>Composite (Mux, Adder, …)</li>
</ol>
<h3 id="nandgate">NAND gate</h3>
<h4 id="gatediagram">Gate diagram</h4>
<p><a href="./nand_gate_diagram.png">Gate diagram image</a></p>
<h4 id="functionalspecification">Functional specification</h4>
<pre><code>if (a==1 and b==1)
  then out=0 alse out=1
</code></pre>
<h4 id="truthtable">Truth table</h4>
<p>| a   | b   | out |
| --- | --- | --: |
| 0   | 0   |   1 |
| 0   | 1   |   1 |
| 1   | 0   |   1 |
| 1   | 1   |   0 |</p>
<h3 id="compositegates">Composite gates</h3>
<p><a href="./composite_gate.png">Example of a composite gate</a> &lt;- three way AND gate</p>
<h3 id="interfaceimplementation">Interface/Implementation</h3>
<p>Interface = the WHAT<br />
IMPLEMENTATION = the HOW</p>
<p>Only one interface, every interface should be unique.<br />
Multiple possible implementations.</p>