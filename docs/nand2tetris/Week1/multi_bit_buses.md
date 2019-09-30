<h1 id="unit16">Unit 1.6</h1>
<h2 id="buses">Buses</h2>
<p>Bus = array of bits</p>
<p>To define a 16 bit bus:
<code>bus[16]</code></p>
<pre><code>CHIP Add3Way16 {
  IN first[16], second[16], third[16];
  OUT out[16];

  PARTS:
    Add16(a=first, b=second, out=temp);
    Add16(a=temp, b=third, out=out);
}
</code></pre>
<p>To manipulate bits in a bus<br />
buses are index from right to left</p>
<pre><code>IN a[4];
OUT out;

AND(a=a[0], b=a[1], out=t01);
AND(a=t01, b=a[2], out=t012);
AND(a=t023, b=a[3], out=out);
</code></pre>
<h3 id="subbuses">Sub buses</h3>
<p>buses can be split into (comprised of) sub buses</p>
<pre><code>IN lsb[8], msb[8], ...
...
Add16(a[0..7]=lsb, a[8..15=msb, b=..., out=...]);
Add16(..., out[0..3]=t1, out[4..15]=t2);
</code></pre>
<p>this HDL:</p>
<ul>
<li>overlaps of sub-buses are allowed on output buses of parts</li>
<li>width of internal pins is deduced</li>
<li>false and true can be used as buses of any width</li>
</ul>