webpackJsonp([207,359],{718:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(7),a(6)),o=t(p),c=(a(174),a(173)),e=t(c),u=a(1),l=t(u),i=a(2);t(i);n.exports={content:[["p","\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae\u7684\u6837\u5f0f\u548c\u6587\u5b57\u3002"]],meta:{order:4,title:"\u81ea\u5b9a\u4e49",filename:"components/notification/demo/with-btn.md",id:"components-notification-demo-with-btn"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> close <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'\u6211\u88ab\u9ed8\u8ba4\u7684\u5173\u95ed\u6309\u94ae\u5173\u95ed\u4e86\uff01\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotification <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> key <span class="token operator" >=</span> <span class="token template-string" ><span class="token string" >`open</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>Date<span class="token punctuation" >.</span><span class="token function" >now</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n  <span class="token keyword" >const</span> btnClick <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token comment" spellcheck="true">// \u9690\u85cf\u63d0\u9192\u6846</span>\n    notification<span class="token punctuation" >.</span><span class="token function" >close</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >const</span> btn <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>btnClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      \u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae\u5e76\u89e6\u53d1\u56de\u8c03\u51fd\u6570\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  notification<span class="token punctuation" >.</span><span class="token function" >open</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    message<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u6807\u9898\'</span><span class="token punctuation" >,</span>\n    description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\'</span><span class="token punctuation" >,</span>\n    btn<span class="token punctuation" >,</span>\n    key<span class="token punctuation" >,</span>\n    onClose<span class="token punctuation" >:</span> close<span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>openNotification<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\nmountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){console.log("\u6211\u88ab\u9ed8\u8ba4\u7684\u5173\u95ed\u6309\u94ae\u5173\u95ed\u4e86\uff01")},s=function(){var s="open"+Date.now(),a=function(){e["default"].close(s)},t=l["default"].createElement(o["default"],{type:"primary",size:"small",onClick:a},"\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae\u5e76\u89e6\u53d1\u56de\u8c03\u51fd\u6570");e["default"].open({message:"\u8fd9\u662f\u6807\u9898",description:"\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848",btn:t,key:s,onClose:n})};return l["default"].createElement("div",null,l["default"].createElement(o["default"],{type:"primary",onClick:s},"\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846"))}}}});