"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[1025],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(4137));const a={sidebar_position:1},i="\ud83d\udcd8 Introduction",l={unversionedId:"intro",id:"intro",title:"\ud83d\udcd8 Introduction",description:"|Workshop goals|Learn how to use Atlas Search and GraphQL to integrate powerful full-text search in your apps|",source:"@site/docs/1-intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/search-lab/docs/intro",draft:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/1-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Full Text Search",permalink:"/search-lab/docs/category/full-text-search"}},p={},s=[{value:"\ud83e\uddb8 Getting bored?",id:"-getting-bored",level:2}],u=(c="Link",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const d={toc:s},m="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-introduction"},"\ud83d\udcd8 Introduction"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Workshop goals"),(0,o.kt)("th",{parentName:"tr",align:null},"Learn how to use Atlas Search and GraphQL to integrate powerful full-text search in your apps"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"What you'll learn"),(0,o.kt)("td",{parentName:"tr",align:null},"How to set up and take advantage of Atlas Search")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Prerequisites"),(0,o.kt)("td",{parentName:"tr",align:null},"A free ",(0,o.kt)(u,{to:"http://mongodb.com/try",mdxType:"Link"},"MongoDB Atlas account")," and database")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Time to complete"),(0,o.kt)("td",{parentName:"tr",align:null},"90 minutes")))),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"If you are following this workshop in the context of a Developer Day, you are already good to go. If not, go through the following workshop first to create you Atlas cluster, import data, and view the sample application."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mongodb-developer.github.io/intro-lab"},"Intro Lab")),(0,o.kt)("p",null,"In this workshop, we will also assume some basic knowledge of aggregation pipelines. If you are not familiar with them, you can go through the advanced querying workshop first."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mongodb-developer.github.io/aggregation-workshop/"},"Advanced Querying With Aggregation Pipelines")),(0,o.kt)("h2",{id:"-getting-bored"},"\ud83e\uddb8 Getting bored?"),(0,o.kt)("p",null,"Look for content with the \ud83e\uddb8 emoji. This content will not be covered by the instructor, but feel free to explore it if you have some spare time."))}f.isMDXComponent=!0}}]);