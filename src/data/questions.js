export const questionsData = {
  javascript: [
    {
      q: `What are the differences between <small><em>document.getElementsByClassName()</em></small> and <small><em>document.querySelectorAll()</em></small> ?`,
      a: `
      <p>
        <code>getElementsByClassName</code> returns a htmlCollection which is live (it updates whenever the document changes) whereas <code>querySelectorAll</code> returns a node list which isn't live (static).
      </p>
      
      <p>
        Both can be iterated using for or for/of and can be transformed into an array using <code>Array.from(&lt;elements&gt;)</code>
      </p>

      <p>
        When calling <code>getElementsByClassName</code> we pass a class name as string while on <code>querySelectorAll</code> we need to pass a css selector. <br /> <small>Example: <br /> <code>document.getElementsByClassName('myClass')</code> <br /> vs <br /><code>document.querySelectorAll('.myClass')</code></small>
      </p>
`
    },
    {
      q: `What is a closure in javascript?`,
      a: `
      <p>
        A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function even after the outer function has returned. It allows us to restrict access to our private members.
      </p>

      <p>
        Example: 
<pre>
<code>
function makeAuth() {
  var secret = 123;
  return function(val) {
    return val === secret;
  }
}

var login = makeAuth();
login('abc') // false
login(123) // true
</code>
</pre>
`
    },
    {
      q: `Make a function to remove duplicated characters in a string`,
      a: `
        <p>There are couple of ways to do this</p>
<p>1. using indexOf and filter</p>
<pre>
<code>
function removeDuplicates(str) {
  return str.split('')
    .filter((char, i, arr) => {
      // so if there are duplicate characters, indexOf will return the first found character's index 
      // if its not equal that means that character is duplicated 
      return arr.indexOf(char) === i;
    })
    .join('');
}
</code>
</pre>

<p>2. using Set (ES6)</p>
<pre>
<code>
function removeDuplicates(str) {
  const newSet = new Set(str.split(''));
  return Array.from(newSet).join('');
}
</code>
</pre>

<p>3. using Map (ES6) (we use Map instead of a regular object because we want to maintain property insertion order)</p>
<pre>
<code>
function removeDuplicates(str) {
  const newMap = new Map();
  str.split('')
    .forEach((char, i) => {
      if(!newMap.has(char)) {
        newMap.set(char, char);
      }
    });

  return Array.from(newMap.keys()).join('');
}
</code>
</pre>
      `
    },
    {
      q: `Make a function to reverse characters in a string`,
      a: `
        <p>There are couple of ways to do this</p>
<p>1. using split, reverse and join</p>
<pre>
<code>
function reverseStr(str) {
  return str.split('')
    .reverse()
    .join('');
}
</code>
</pre>

<p>2. using a loop and an extra array</p>
<pre>
<code>
function reverseStr(str) {
  const reverseStrArr = [];
  for(let i = str.length - 1; i >= 0; i--) {
    reverseStrArr.push(str[i]);
  }
  return reverseStrArr.join('');
}
</code>
</pre>
      `
    }
  ],
  htmlCss: [
    {
      q: `What's the difference between a &lt;span&gt; and a &lt;div&gt; element?`,
      a: `
      <p>Span is an inline element, inline elements only take as much width as necessary, their heights, widths, top/bottom margins and paddings cannot be specified (it'll be ignored by browser).</p> 
      <p>Div is a block element, block elements start on a new line and takes full available width.</p>
      <p>Div is often used as a container element.</p>
      <p>Span is often used to mark up a part of a text.</p>
      `
    },
    {
      q: `What's the var() function in css? How to declare global variables?`,
      a: `
      <p>
        <code>var()</code> function is used to get the value of a css variable. We can declare global variables using <code>:root</code> selector and <code>--variableName</code>
        <br /> <small>Example: <br />
        <code>
        :root {
          <br />
        &nbsp;&nbsp;--myCustomColor: #123456;
          <br />
        }
        <br />
        .myClass {
          <br />
        &nbsp;&nbsp;background-color: var(--myCustomColor);
          <br />
        }
        </code>
      </p>
      <p>
        Although this is super useful, its browser support is not very good (Edge 15+)
      </p>
      `
    },
    {
      q: `How to make a horizontally and vertically centered modal with dynamic height using only html/css? (no need to handle open/close)`,
      a: `
        <p>There are couple of ways:</p>
        <p>1. Using <code>display: table;</code> and <code>display: table-cell; (old but best browser support)</code>
<pre>
<code>
&lt;style&gt;
.modal {
  display: table;
  position: fixed;
  /** optional overlay color */
  background: lightgrey;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 99999;
}

.modal__dialog {
  /** IE margin auto fix */
  text-align: center;
  /** IE fix */
  display: inline-block;
  display: table-cell;
  vertical-align: middle;
}

.modal__content {
  margin: 0 auto;
  background-color: gray;
  width: 200px;
  color: white;
  text-align: left;
}
&lt;/style&gt;
<br />
&lt;div class=&quot;modal&quot;&gt;
  &lt;div class=&quot;modal__dialog&quot;&gt;
    &lt;div class=&quot;modal__content&quot;&gt;
      Hello World!
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code>
</pre>

<p>2. Using css transform property & translate</p>
<pre>
<code>
&lt;style&gt;
.modal {
  position: fixed;
  /** optional overlay color */
  background: lightgrey;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 99998;
}

.modal__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: gray;
  width: 200px;
  color: white;
}

&lt;/style&gt;
<br />
&lt;div class=&quot;modal&quot;&gt;
  &lt;div class=&quot;modal__content&quot;&gt;
    Hello World!
  &lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
<p>3. Using flexbox</p>
<pre>
<code>
&lt;style&gt;
.modal {
  position: fixed;
  display: flex;
  /** optional overlay color */
  background: lightgrey;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 99999;
  align-items: center;
  justify-content: center;
}

.modal__content {
  background-color: gray;
  width: 200px;
  color: white;
}

&lt;/style&gt;
<br />
&lt;div class=&quot;modal&quot;&gt;
  &lt;div class=&quot;modal__content&quot;&gt;
    Hello World!
  &lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
      `
    },
  ],
  scss: [
    {
      q: `What's the difference between a &lt;span&gt; and a &lt;div&gt; element?`,
      a: `Span is an inline element. Div is a block element.`
    },
  ]
};