"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[2413],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?o.createElement(m,s(s({ref:t},p),{},{components:r})):o.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(7462),n=(r(7294),r(4137));const a={},s="Score modifiers",i={unversionedId:"search-operators/score-modifier",id:"search-operators/score-modifier",title:"Score modifiers",description:"In the operators you've seen so far, you can adjust the score property to modify the score of a result. This is useful for boosting or demoting results based on certain criteria.",source:"@site/docs/5-search-operators/07-score-modifier.mdx",sourceDirName:"5-search-operators",slug:"/search-operators/score-modifier",permalink:"/search-party-lab/docs/search-operators/score-modifier",draft:!1,editUrl:"https://github.com/mongodb-developer/search-party-lab/blob/main/docs/5-search-operators/07-score-modifier.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Scoring",permalink:"/search-party-lab/docs/search-operators/scoring"},next:{title:"Mixing and matching",permalink:"/search-party-lab/docs/search-operators/mix-and-match"}},c={},l=[{value:"Boost",id:"boost",level:2},{value:"Constant",id:"constant",level:2}],p=(u="Link",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const d={toc:l},f="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"score-modifiers"},"Score modifiers"),(0,n.kt)("p",null,"In the operators you've seen so far, you can adjust the ",(0,n.kt)("inlineCode",{parentName:"p"},"score")," property to modify the score of a result. This is useful for boosting or demoting results based on certain criteria."),(0,n.kt)("p",null,"There are multiple ways to modify the score. You can look at the ",(0,n.kt)(p,{to:"https://www.mongodb.com/docs/atlas/atlas-search/score/modify-score/",mdxType:"Link"},"documentation")," to learn more."),(0,n.kt)("p",null,"Here, we will focus on simple ways to do so."),(0,n.kt)("h2",{id:"boost"},"Boost"),(0,n.kt)("p",null,"Using ",(0,n.kt)("inlineCode",{parentName:"p"},"boost"),", you can multiply the score by a certain value. This can be useful to promote certain results that would be sponsored for example. The higher sponsor tiers would get higher modifiers."),(0,n.kt)("p",null,"In our dataset, we could decide to boost results that are of the ",(0,n.kt)("inlineCode",{parentName:"p"},"fiction")," genre."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{\n  $search: {\n    index: 'fulltextsearch',\n    text: {\n      query: 'fiction',\n      path: 'genres'\n    },\n    score: { boost: { value: 2 } }\n  }\n}\n")),(0,n.kt)("h2",{id:"constant"},"Constant"),(0,n.kt)("p",null,"We can also set the score to a constant value. This can be useful to demote results that are not relevant enough. In our use case, we could set a constant value of 0 for books that are not currently available."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{\n  $search: {\n    index: 'fulltextsearch',\n    equals: {\n      path: 'available',\n      value: 0\n    },\n    score: { constant: { value: 0 } }\n  }\n}\n")))}m.isMDXComponent=!0}}]);