webpackJsonp([300,359],{622:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(69),s(68)),o=t(p),c=s(1),e=t(c),u=s(2);t(u);n.exports={content:[["p","\u901a\u8fc7\u6307\u5b9a options \u91cc\u7684 ",["code","disabled"]," \u5b57\u6bb5\u3002"]],meta:{order:4,title:"\u7981\u7528\u9009\u9879",filename:"components/cascader/demo/disabled-option.md",id:"components-cascader-demo-disabled-option"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Cascader <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> options <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zhejiang\'</span><span class="token punctuation" >,</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'\u6d59\u6c5f\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'hangzhou\'</span><span class="token punctuation" >,</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u676d\u5dde\'</span><span class="token punctuation" >,</span>\n    children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token string" >\'xihu\'</span><span class="token punctuation" >,</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'jiangsu\'</span><span class="token punctuation" >,</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'\u6c5f\u82cf\'</span><span class="token punctuation" >,</span>\n  disabled<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'nanjing\'</span><span class="token punctuation" >,</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u5357\u4eac\'</span><span class="token punctuation" >,</span>\n    children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token string" >\'zhonghuamen\'</span><span class="token punctuation" >,</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'\u4e2d\u534e\u95e8\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Cascader</span> <span class="token attr-name" >options</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>options<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log(n)}var a=[{value:"zhejiang",label:"\u6d59\u6c5f",children:[{value:"hangzhou",label:"\u676d\u5dde",children:[{value:"xihu",label:"\u897f\u6e56"}]}]},{value:"jiangsu",label:"\u6c5f\u82cf",disabled:!0,children:[{value:"nanjing",label:"\u5357\u4eac",children:[{value:"zhonghuamen",label:"\u4e2d\u534e\u95e8"}]}]}];return e["default"].createElement(o["default"],{options:a,onChange:n})}}}});