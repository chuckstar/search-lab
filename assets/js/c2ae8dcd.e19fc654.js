"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[2832],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(4137));const a={},c="Create Vector Search indexes",i={unversionedId:"vector-search/create-index",id:"vector-search/create-index",title:"Create Vector Search indexes",description:"To start using Vector Search, you must configure another search index on your database. The process is similar to what you have done in the last section.",source:"@site/docs/7-vector-search/4-create-index.mdx",sourceDirName:"7-vector-search",slug:"/vector-search/create-index",permalink:"/search-party-lab/docs/vector-search/create-index",draft:!1,editUrl:"https://github.com/mongodb-developer/search-party-lab/blob/main/docs/7-vector-search/4-create-index.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What Are Vectors?",permalink:"/search-party-lab/docs/vector-search/what-are-vector"},next:{title:"Construct vector search queries",permalink:"/search-party-lab/docs/vector-search/search-queries"}},s={},l=[{value:"Step-by-step guide to creating your Vector Search index",id:"step-by-step-guide-to-creating-your-vector-search-index",level:2}],p=(d="Screenshot",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const h={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-vector-search-indexes"},"Create Vector Search indexes"),(0,o.kt)("p",null,"To start using Vector Search, you must configure another search index on your database. The process is similar to what you have done in the last section."),(0,o.kt)("h2",{id:"step-by-step-guide-to-creating-your-vector-search-index"},"Step-by-step guide to creating your Vector Search index"),(0,o.kt)("p",null,"Open the ",(0,o.kt)("strong",{parentName:"p"},"Database Deployments")," page in MongoDB Atlas and select ",(0,o.kt)("strong",{parentName:"p"},"Create Index")," in the lower right corner."),(0,o.kt)(p,{src:"img/screenshots/7-vector-search/4-create-index/1-create-index.png",alt:"The 'Database Deployments' page with the 'Create Index' link highlighted",url:"https://cloud.mongodb.com",mdxType:"Screenshot"}),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Create Search Index")," button."),(0,o.kt)(p,{src:"img/screenshots/7-vector-search/4-create-index/2-create-search-index.png",alt:"The 'Create Index' page with the 'Create Search Index' button highlighted",url:"https://cloud.mongodb.com",mdxType:"Screenshot"}),(0,o.kt)("p",null,"This time, you will use the ",(0,o.kt)("strong",{parentName:"p"},"JSON Editor")," to create your index"),(0,o.kt)(p,{src:"img/screenshots/7-vector-search/4-create-index/3-json-editor.png",alt:"The 'Create Index' page with the 'JSON Editor' tab highlighted",url:"https://cloud.mongodb.com",mdxType:"Screenshot"}),(0,o.kt)("p",null,"Select your database and collection, change the index name to ",(0,o.kt)("inlineCode",{parentName:"p"},"vectorsearch"),", and add the following code in the JSON editor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "mappings": {\n    "dynamic": true,\n    "fields": {\n      "vectorizedSynopsis": {\n        "dimensions": 1536,\n        "similarity": "cosine",\n        "type": "knnVector"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Your configuration should look like this."),(0,o.kt)(p,{src:"img/screenshots/7-vector-search/4-create-index/4-json-editor-config.png",alt:"The 'JSON Editor' tab with the configuration highlighted",url:"https://cloud.mongodb.com",mdxType:"Screenshot"}),(0,o.kt)("p",null,"The final step allows you to review the index configuration and refine it if needed. Go ahead and click ",(0,o.kt)("strong",{parentName:"p"},"Create Search Index"),"."))}m.isMDXComponent=!0}}]);