"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[2810],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,y=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1442:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(4137));const a={},c="\ud83e\uddb8 Intro to facets",i={unversionedId:"facet/intro",id:"facet/intro",title:"\ud83e\uddb8 Intro to facets",description:"A facet is a way to group documents together based on a common value.  For example, if you have a list of movies, you might want to group them by genre. You could then use the facet to filter the results to only show movies of a certain genre.",source:"@site/docs/6-facet/1-intro.mdx",sourceDirName:"6-facet",slug:"/facet/intro",permalink:"/search-party-lab/docs/facet/intro",draft:!1,editUrl:"https://github.com/mongodb-developer/search-party-lab/blob/main/docs/6-facet/1-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Faceting",permalink:"/search-party-lab/docs/category/faceting"},next:{title:"\ud83e\uddb8 Create an index",permalink:"/search-party-lab/docs/facet/create-index"}},s={},l=[],u={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-intro-to-facets"},"\ud83e\uddb8 Intro to facets"),(0,o.kt)("p",null,"A facet is a way to group documents together based on a common value.  For example, if you have a list of movies, you might want to group them by genre. You could then use the facet to filter the results to only show movies of a certain genre."),(0,o.kt)("p",null,"A common use case is to use facets to create a filter. You can see this in most e-commerce sites. For example, you will see a list of categories on the left side of the page, and each category will have a number next to it. This number represents the number of products in that category."),(0,o.kt)("p",null,'{\n"facet": {\n"operator": {\n"range": {\n"path": "year",\n"gte": 2000,\n"lte": 2015\n}\n},\n"facets": {\n"genresFacet": {\n"type": "string",\n"path": "genres"\n}\n}\n}\n}'))}f.isMDXComponent=!0}}]);