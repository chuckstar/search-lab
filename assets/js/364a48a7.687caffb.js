"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[1997],{8145:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(5893),r=t(1151);const a={},o="\ud83e\uddb8\u200d\u2642\ufe0f Pre Filtering data",s={id:"vector-search/filtering",title:"\ud83e\uddb8\u200d\u2642\ufe0f Pre Filtering data",description:"Extra activity, do it if you have extra time or are following at home, won't be covered during the hands-on Lab.",source:"@site/docs/7-vector-search/9-filtering.mdx",sourceDirName:"7-vector-search",slug:"/vector-search/filtering",permalink:"/search-lab/docs/vector-search/filtering",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/9-filtering.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Add semantic search to your application",permalink:"/search-lab/docs/vector-search/add-to-app"},next:{title:"\ud83c\udfaf Summary",permalink:"/search-lab/docs/summary"}},c={},d=[{value:"Pre-filtering using number fields",id:"pre-filtering-using-number-fields",level:2},{value:"Pre-filtering using string fields",id:"pre-filtering-using-string-fields",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\ufe0f-pre-filtering-data",children:"\ud83e\uddb8\u200d\u2642\ufe0f Pre Filtering data"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Extra activity, do it if you have extra time or are following at home, won't be covered during the hands-on Lab."})}),"\n",(0,i.jsxs)(n.p,{children:["One of the nice things about Vector Search in Atlas is its seamless integration with the MongDB ecosystem. For instance, to do a vector search we use an Aggregation Pipeline stage, and after searching we can project, limit our data, etc. But sometimes we want to filter ",(0,i.jsx)(n.em,{children:"before"})," running the semantic search. For that, we can use the optinal ",(0,i.jsx)(n.code,{children:"filter"})," property in ",(0,i.jsx)(n.code,{children:"$vectorSearch"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"pre-filtering-using-number-fields",children:"Pre-filtering using number fields"}),"\n",(0,i.jsx)(n.p,{children:"If we want to pre-filter all books that are from 2001 we can do:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'[\n    {$vectorSearch: {\n        queryVector: vector,\n        path: "embeddings",\n        numCandidates: 100,\n        index: "vectorsearch",\n        limit: 100,\n        filter: {year: {$eq: 2001}}\n    }\n    }\n]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"pre-filtering-using-string-fields",children:"Pre-filtering using string fields"}),"\n",(0,i.jsx)(n.p,{children:"Strings are a bit more tricky. We can think this will work, but right now it wont:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'[\n    {$vectorSearch: {\n        queryVector: vector,\n        path: "embeddings",\n        numCandidates: 100,\n        index: "vectorsearch",\n        limit: 100,\n        filter: {language: {$eq: "es"}}\n    }\n    }\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The problem lies on the ",(0,i.jsx)(n.code,{children:"vectorsearch"})," index, not in this code. For String fields to be pre-filtered we need to add a mapping to those fields in our Search Index definition. To do that, go to MongoDB Atlas, go to your collections and open again the Search Indexes tab, as you did while ",(0,i.jsx)(n.a,{href:"/docs/vector-search/create-index",children:"creating the indexes"})]}),"\n",(0,i.jsxs)(n.p,{children:["In this case, we already have our index and we're going to edit it in the JSON editor. Just change the index adding a mapping for the ",(0,i.jsx)(n.code,{children:"language"})," field. The index should look like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  "mappings": {\n    "dynamic": true,\n    "fields": {\n      "embeddings": {\n        "dimensions": 384,\n        "similarity": "cosine",\n        "type": "knnVector"\n      },\n      "language": {\n        "normalizer": "none",\n        "type": "token"\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The only difference is that we've added this part, stating that ",(0,i.jsx)(n.code,{children:"language"})," should be indexed as a ",(0,i.jsx)(n.a,{href:"https://www.mongodb.com/docs/atlas/atlas-search/field-types/token-type/",children:"token"}),", not as a string (we're not going to do full text search here, but Vector Search)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'"language": {\n    "normalizer": "none",\n    "type": "token"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Add that new aggregation pipeline in your code (",(0,i.jsx)(n.code,{children:"server/src/controllers/books.ts"})," inside the now familiar ",(0,i.jsx)(n.code,{children:"searchBooks"})," method) and when searching, you'll get semantic results written in Spanish."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(7294);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);