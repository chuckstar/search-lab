"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[9793],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3921:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(4137));const a={},i="Create vectors from your data",c={unversionedId:"vector-search/create-vectors",id:"vector-search/create-vectors",title:"Create vectors from your data",description:"In order to search your data, you will need to create embeddings for your documents. Embeddings are vectors that represent your documents in a vector space. The vector space is a multi-dimensional space where each dimension represents a feature of your documents.",source:"@site/docs/7-vector-search/3-create-vectors.mdx",sourceDirName:"7-vector-search",slug:"/vector-search/create-vectors",permalink:"/search-party-lab/docs/vector-search/create-vectors",draft:!1,editUrl:"https://github.com/mongodb-developer/search-party-lab/blob/main/docs/7-vector-search/3-create-vectors.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What Are Vectors?",permalink:"/search-party-lab/docs/vector-search/what-are-vector"},next:{title:"Create Vector Search indexes",permalink:"/search-party-lab/docs/vector-search/create-index"}},s={},l=[{value:"Configuring the application",id:"configuring-the-application",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-vectors-from-your-data"},"Create vectors from your data"),(0,o.kt)("p",null,"In order to search your data, you will need to create embeddings for your documents. Embeddings are vectors that represent your documents in a vector space. The vector space is a multi-dimensional space where each dimension represents a feature of your documents."),(0,o.kt)("p",null,"Many services offer pre-trained models that you can use to create embeddings for your documents."),(0,o.kt)("p",null,"For this tutorial, we will provide you with an endpoint that will return the embeddings for a given search term."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you want to learn how to create your own vectors, check out the next sections that will guide you through the process with some of the most popular providers.")),(0,o.kt)("h2",{id:"configuring-the-application"},"Configuring the application"),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"server/.env")," file, you'll find a few variables that you can use to configure the application."),(0,o.kt)("p",null,"The first one is ",(0,o.kt)("inlineCode",{parentName:"p"},"EMBEDDINGS_SOURCE"),". It tells the application where to get the embeddings from. You can set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"serverlessEndpoint"),"."),(0,o.kt)("p",null,"Your instructor will provide you with an API key that you can use for the event you're attending. Set it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"EMBEDDING_KEY")," variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"EMBEDDINGS_SOURCE=serverlessEndpoint\nEMBEDDING_KEY=<API Key>\n")))}d.isMDXComponent=!0}}]);