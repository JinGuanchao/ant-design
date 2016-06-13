webpackJsonp([166,359],{759:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(43),s(41)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u6309\u94ae\u6837\u5f0f\u7684\u5355\u9009\u7ec4\u5408\u3002"]],meta:{order:3,title:"\u6309\u94ae\u6837\u5f0f",filename:"components/radio/demo/radiobutton.md",id:"components-radio-demo-radiobutton"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Radio <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> RadioButton <span class="token operator" >=</span> Radio<span class="token punctuation" >.</span>Button<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> RadioGroup <span class="token operator" >=</span> Radio<span class="token punctuation" >.</span>Group<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`radio checked:</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>value<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioGroup</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioButton</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u676d\u5dde<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioButton</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioButton</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>b<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u6d77<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioButton</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioButton</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>c<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5317\u4eac<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioButton</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioButton</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>d<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6210\u90fd<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioButton</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioGroup</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginTop<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioGroup</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioButton</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u676d\u5dde<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioButton</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioButton</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>b<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span><span class="token punctuation" >></span></span>\u4e0a\u6d77<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioButton</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioButton</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>c<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5317\u4eac<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioButton</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioButton</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>d<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6210\u90fd<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioButton</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioGroup</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginTop<span class="token punctuation" >:</span> <span class="token number" >16</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioGroup</span> <span class="token attr-name" >disabled</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioButton</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u676d\u5dde<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioButton</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioButton</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>b<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u6d77<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioButton</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioButton</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>c<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5317\u4eac<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioButton</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RadioButton</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>d<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6210\u90fd<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioButton</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RadioGroup</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("radio checked:"+n.target.value)}var a=o["default"].Button,s=o["default"].Group;return c["default"].createElement("div",null,c["default"].createElement("div",null,c["default"].createElement(s,{onChange:n,defaultValue:"a"},c["default"].createElement(a,{value:"a"},"\u676d\u5dde"),c["default"].createElement(a,{value:"b"},"\u4e0a\u6d77"),c["default"].createElement(a,{value:"c"},"\u5317\u4eac"),c["default"].createElement(a,{value:"d"},"\u6210\u90fd"))),c["default"].createElement("div",{style:{marginTop:16}},c["default"].createElement(s,{onChange:n,defaultValue:"a"},c["default"].createElement(a,{value:"a"},"\u676d\u5dde"),c["default"].createElement(a,{value:"b",disabled:!0},"\u4e0a\u6d77"),c["default"].createElement(a,{value:"c"},"\u5317\u4eac"),c["default"].createElement(a,{value:"d"},"\u6210\u90fd"))),c["default"].createElement("div",{style:{marginTop:16}},c["default"].createElement(s,{disabled:!0,onChange:n,defaultValue:"a"},c["default"].createElement(a,{value:"a"},"\u676d\u5dde"),c["default"].createElement(a,{value:"b"},"\u4e0a\u6d77"),c["default"].createElement(a,{value:"c"},"\u5317\u4eac"),c["default"].createElement(a,{value:"d"},"\u6210\u90fd"))))}}}});