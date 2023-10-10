"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[5372],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={},s="Mixing and matching",i={unversionedId:"search-operators/mix-and-match",id:"search-operators/mix-and-match",title:"Mixing and matching",description:"The whole value of using these operators comes from combining them to create search results that are more relevant to your users.",source:"@site/docs/5-search-operators/08-mix-and-match.mdx",sourceDirName:"5-search-operators",slug:"/search-operators/mix-and-match",permalink:"/search-party-lab/docs/search-operators/mix-and-match",draft:!1,editUrl:"https://github.com/mongodb-developer/search-party-lab/blob/main/docs/5-search-operators/08-mix-and-match.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Score modifiers",permalink:"/search-party-lab/docs/search-operators/score-modifier"},next:{title:"Exercises",permalink:"/search-party-lab/docs/search-operators/exercises"}},l={},c=[{value:"Compound with scoring",id:"compound-with-scoring",level:2}],u={toc:c},h="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mixing-and-matching"},"Mixing and matching"),(0,o.kt)("p",null,"The whole value of using these operators comes from combining them to create search results that are more relevant to your users."),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"compound")," operator, you can mix and match some of the operators you've just seen. The syntax for the ",(0,o.kt)("inlineCode",{parentName:"p"},"compound")," operator is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  $search: {\n    "index": <index name>, // optional, defaults to "default"\n    "compound": {\n      <must | mustNot | should | filter>: [ { <clauses> } ],\n      "score": <options>\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"must"),"\nClauses that must match to for a document to be included in the results. The returned score is the sum of the scores of all the subqueries in the clause."),(0,o.kt)("p",null,"Maps to the AND boolean operator."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mustNot"),"\nClauses that must not match for a document to be included in the results. mustNot clauses don't contribute to a returned document's score."),(0,o.kt)("p",null,"Maps to the AND NOT boolean operator."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"should"),"\nClauses that you prefer to match in documents that are included in the results. Documents that contain a match for a should clause have higher scores than documents that don't contain a should clause. The returned score is the sum of the scores of all the subqueries in the clause."),(0,o.kt)("p",null,'Say you wanted to search for a book that contains "cats" in the title, but you prefer having shorter books, you can use the following query:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  $search: {\n    "index": "fulltextsearch",\n    "compound": {\n      "must": [\n        {\n          "text": {\n            "query": "cats",\n            "path": "title"\n          }\n        }\n      ],\n      "should": [\n        {\n          "range": {\n            "path": "pages",\n            "gt": 0,\n            "lt": 100\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("p",null,'This will return all books that contain "cats" in the title, but will prefer shorter books. It will still return longer books, but they will be scored lower than shorter books.'),(0,o.kt)("h2",{id:"compound-with-scoring"},"Compound with scoring"),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"compound")," operator with the ",(0,o.kt)("inlineCode",{parentName:"p"},"score"),' option to control how the scores of the subqueries are combined. Say the library has a monthly theme, and they want to promote the books that have a specific word in the synopsis. This month, the theme is "bears". Try to write a search query that will return the books a user queried for, but those who contain the word "bear" in it will have a higher score and come at the top. Try to have a book about Winnie the Pooh come first when a user searches for "honey".'),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click here to see the answer"),(0,o.kt)("div",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "index": "fulltextsearch",\n    "compound": {\n      "must": [\n        {\n          "text": {\n            "query": "honey",\n            "path": ["title", "author.name", "synopsis"]\n          }\n        }\n      ],\n      "should": [\n        {\n          "text": {\n            "query": "bear",\n            "path": "synopsis",\n            "score": {\n              "boost": { value: 10 }\n                        }\n          }\n        }\n      ]\n    }\n  }\n')))))}p.isMDXComponent=!0}}]);