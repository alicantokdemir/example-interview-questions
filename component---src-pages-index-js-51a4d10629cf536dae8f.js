(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),o=(t("Wbzz"),t("Bl7J")),r=function(e){var n=e.children,t=e.className;return l.a.createElement("div",{className:t},n)},s={card:{padding:15,background:"white",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",borderRadius:3},title:{marginBottom:"12px",fontSize:"2.5em"},answer:{padding:10,backgroundColor:"#f1f1f1",display:"inline-block",fontSize:"1.3em",lineHeight:1.4}},i=function(e){var n=e.title,t=e.answer,a=e.className;return l.a.createElement("section",{className:a,style:s.card},l.a.createElement("h1",{style:s.title,dangerouslySetInnerHTML:{__html:n}}),l.a.createElement("div",{style:s.answer,dangerouslySetInnerHTML:{__html:t}}))},c={button:{padding:10,width:120,cursor:"pointer"}},d=function(e){var n=e.items,t=e.onItemChange,o=Object(a.useState)(n[0].value),r=o[0],s=o[1];return l.a.createElement("aside",null,l.a.createElement("ul",null,n.map((function(e,n){return l.a.createElement("li",{key:n,style:{fontWeight:r===e.value?"bold":"normal"}},l.a.createElement("button",{style:c.button,onClick:function(){return n=e.value,s(n),void(t&&t(n));var n},type:"button"},e.text))}))))},u=t("vrFN"),m={javascript:[{q:"What are the differences between <small><em>document.getElementsByClassName()</em></small> and <small><em>document.querySelectorAll()</em></small> ?",a:"\n      <p>\n        <code>getElementsByClassName</code> returns a htmlCollection which is live (it updates whenever the document changes) whereas <code>querySelectorAll</code> returns a node list which isn't live (static).\n      </p>\n      \n      <p>\n        Both can be iterated using for or for/of and can be transformed into an array using <code>Array.from(&lt;elements&gt;)</code>\n      </p>\n\n      <p>\n        When calling <code>getElementsByClassName</code> we pass a class name as string while on <code>querySelectorAll</code> we need to pass a css selector. <br /> <small>Example: <br /> <code>document.getElementsByClassName('myClass')</code> <br /> vs <br /><code>document.querySelectorAll('.myClass')</code></small>\n      </p>\n"},{q:"What is a closure in javascript?",a:"\n      <p>\n        A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function even after the outer function has returned. It allows us to restrict access to our private members.\n      </p>\n\n      <p>\n        Example: \n<pre>\n<code>\nfunction makeAuth() {\n  var secret = 123;\n  return function(val) {\n    return val === secret;\n  }\n}\n\nvar login = makeAuth();\nlogin('abc') // false\nlogin(123) // true\n</code>\n</pre>\n"}],htmlCss:[{q:"What's the difference between a &lt;span&gt; and a &lt;div&gt; element?",a:"\n      <p>Span is an inline element, inline elements only take as much width as necessary, their heights, widths, top/bottom margins and paddings cannot be specified (it'll be ignored by browser).</p> \n      <p>Div is a block element, block elements start on a new line and takes full available width.</p>\n      <p>Div is often used as a container element.</p>\n      <p>Span is often used to mark up a part of a text.</p>\n      "},{q:"What's the var() function in css? How to declare global variables?",a:"\n      <p>\n        <code>var()</code> function is used to get the value of a css variable. We can declare global variables using <code>:root</code> selector and <code>--variableName</code>\n        <br /> <small>Example: <br />\n        <code>\n        :root {\n          <br />\n        &nbsp;&nbsp;--myCustomColor: #123456;\n          <br />\n        }\n        <br />\n        .myClass {\n          <br />\n        &nbsp;&nbsp;background-color: var(--myCustomColor);\n          <br />\n        }\n        </code>\n      </p>\n      <p>\n        Although this is super useful, its browser support is not very good (Edge 15+)\n      </p>\n      "},{q:"How to make a horizontally and vertically centered modal with dynamic height using only html/css? (no need to handle open/close)",a:"\n        <p>There are couple of ways:</p>\n        <p>1. Using <code>display: table;</code> and <code>display: table-cell; (old but best browser support)</code>\n<pre>\n<code>\n&lt;style&gt;\n.modal {\n  display: table;\n  position: fixed;\n  /** optional overlay color */\n  background: lightgrey;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 99999;\n}\n\n.modal__dialog {\n  /** IE margin auto fix */\n  text-align: center;\n  /** IE fix */\n  display: inline-block;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.modal__content {\n  margin: 0 auto;\n  background-color: gray;\n  width: 200px;\n  color: white;\n  text-align: left;\n}\n&lt;/style&gt;\n<br />\n&lt;div class=&quot;modal&quot;&gt;\n  &lt;div class=&quot;modal__dialog&quot;&gt;\n    &lt;div class=&quot;modal__content&quot;&gt;\n      Hello World!\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n<p>2. Using css transform property & translate</p>\n<pre>\n<code>\n&lt;style&gt;\n.modal {\n  position: fixed;\n  /** optional overlay color */\n  background: lightgrey;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 99998;\n}\n\n.modal__content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: gray;\n  width: 200px;\n  color: white;\n}\n\n&lt;/style&gt;\n<br />\n&lt;div class=&quot;modal&quot;&gt;\n  &lt;div class=&quot;modal__content&quot;&gt;\n    Hello World!\n  &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n<p>3. Using flexbox</p>\n<pre>\n<code>\n&lt;style&gt;\n.modal {\n  position: fixed;\n  display: flex;\n  /** optional overlay color */\n  background: lightgrey;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 99999;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal__content {\n  background-color: gray;\n  width: 200px;\n  color: white;\n}\n\n&lt;/style&gt;\n<br />\n&lt;div class=&quot;modal&quot;&gt;\n  &lt;div class=&quot;modal__content&quot;&gt;\n    Hello World!\n  &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n      "}],scss:[{q:"What's the difference between a &lt;span&gt; and a &lt;div&gt; element?",a:"Span is an inline element. Div is a block element."}]},p=[{text:"Javascript",value:"javascript"},{text:"HTML/CSS",value:"htmlCss"}];n.default=function(){var e=Object(a.useState)(p[0].value),n=e[0],t=e[1],s=Object(a.useMemo)((function(){return m[n]}),[n]);return l.a.createElement(o.a,null,l.a.createElement(u.a,{title:"Home"}),l.a.createElement(r,{className:"w-25"},l.a.createElement(d,{onItemChange:t,items:p})),l.a.createElement(r,{className:"w-75"},s.map((function(e,n){return l.a.createElement(i,{key:n,className:"mb-25",title:e.q,answer:e.a})}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-51a4d10629cf536dae8f.js.map