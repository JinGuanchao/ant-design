webpackJsonp([274,359],{649:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(95),s(94)),o=t(p),e=(s(10),s(8)),c=t(e),u=(s(26),s(25)),l=t(u),k=s(1),i=t(k),r=s(2);t(r);n.exports={content:[["p","\u70b9\u51fb\u83dc\u5355\u9879\u540e\u4f1a\u89e6\u53d1\u4e8b\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u76f8\u5e94\u7684\u83dc\u5355\u9879 key \u8fdb\u884c\u4e0d\u540c\u7684\u64cd\u4f5c\u3002"]],meta:{order:3,title:"\u89e6\u53d1\u4e8b\u4ef6",filename:"components/dropdown/demo/event.md",id:"components-dropdown-demo-event"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Menu<span class="token punctuation" >,</span> Dropdown<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> onClick <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >{</span> key <span class="token punctuation" >}</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`\u70b9\u51fb\u4e86\u83dc\u5355</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>key<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> menu <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u7b2c\u4e00\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u7b2c\u4e8c\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u7b2c\u4e09\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Dropdown</span> <span class="token attr-name" >overlay</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>menu<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-dropdown-link<span class="token punctuation" >"</span></span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      \u9f20\u6807\u79fb\u5165\uff0c\u70b9\u51fb\u83dc\u5355 <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>down<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Dropdown</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(n){var a=n.key;console.log("\u70b9\u51fb\u4e86\u83dc\u5355"+a)},a=i["default"].createElement(l["default"],{onClick:n},i["default"].createElement(l["default"].Item,{key:"1"},"\u7b2c\u4e00\u4e2a\u83dc\u5355\u9879"),i["default"].createElement(l["default"].Item,{key:"2"},"\u7b2c\u4e8c\u4e2a\u83dc\u5355\u9879"),i["default"].createElement(l["default"].Item,{key:"3"},"\u7b2c\u4e09\u4e2a\u83dc\u5355\u9879"));return i["default"].createElement(o["default"],{overlay:a},i["default"].createElement("a",{className:"ant-dropdown-link",href:"#"},"\u9f20\u6807\u79fb\u5165\uff0c\u70b9\u51fb\u83dc\u5355 ",i["default"].createElement(c["default"],{type:"down"})))}}}});