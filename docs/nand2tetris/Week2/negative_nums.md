<h1 id="unit23">Unit 2.3</h1>
<h2 id="negativenumbers">Negative numbers</h2>
<h3 id="oldway">Old way</h3>
<hr />
<p>Sign bit
Firts bit is -/+ all other bits represent a positive number</p>
<pre><code>0000  0
0001  1
...
0111  7
1000 -0
1001 -1
1010 -2
...
1111 -7
</code></pre>
<p>This is bad because we have two representations of 0 (+0, -0). And manipulationg these kind of numbers is not elegant and has problems.</p>
<h3 id="2scomplement">2's complement</h3>
<hr />
<p>Represent negative number -x using the positive number 2^n-x.<br />
If we have 4 bits, that is 2^4-x =&gt; 16-x.</p>
<pre><code>0000  0
0001  1
...
0111  7
1000 -8 (8)
1001 -7 (9)
1010 -6 (10)
1011 -5 (11)
...
1110 -2 (14)
1111 -1 (15)
</code></pre>
<p>16-7 = 9 =&gt; 1001.<br />
Kinda like the left most bit is -8 and everything is a positive we add to it.</p>
<pre><code>1010 -6

-8 4 2 1    -8 | 4 2 1
 1 0 1 0 =&gt;  1 | 0 1 0 =&gt; -8 + 2 = -6
</code></pre>
<p>Positive numbers in the range: <code>0...2^n-1 -1</code><br />
Negative numbers in the range: <code>-1...-2^n-1</code></p>
<h3 id="addiotionin2scomplement">Addiotion in 2's complement</h3>
<pre><code>-2 + -3 =&gt; 14 + 13 =&gt;
 1110
+1101
 ----
11011 (we drop the overflow) =&gt; 1011 =&gt; 11 (dec)

1011 =&gt; -5
</code></pre>
<p>Representation is modulo 2^n<br />
Addition is modulo 2^n</p>
<h3 id="computiongx">Computiong -x</h3>
<p>Input: x<br />
Output: -x (in 2's complement)</p>
<pre><code>Idea: 2^n - x = 1 + (2^n - 1) - x
                (2^n = 11111111)
                11111111
               -10101100
                -------- =&gt; we just flip the bits when
                01010011    subtractiong from all 1s
          after this just add 1:
            if right most bit is 0, flip it =&gt; 1
            if it's 1, flip and carry one
            stop if a bit is 0 and only flip it.
            no need to continue.
</code></pre>