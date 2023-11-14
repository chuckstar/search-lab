"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[4129],{3063:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var r=t(5893),n=t(1151);const s={},i="The text operator",a={id:"search-operators/text",title:"The text operator",description:"The text operator is used to performs a full-text search using the analyzer that you specify in the index configuration. It is used to search for words or phrases in the full-text fields of your documents.",source:"@site/docs/5-search-operators/02-text.mdx",sourceDirName:"5-search-operators",slug:"/search-operators/text",permalink:"/search-lab/docs/search-operators/text",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/5-search-operators/02-text.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro to Search operators",permalink:"/search-lab/docs/search-operators/intro"},next:{title:"The phrase operator",permalink:"/search-lab/docs/search-operators/phrase"}},c={},h=[{value:"The <code>fuzzy</code> property",id:"the-fuzzy-property",level:2},{value:"The <code>synonyms</code> property",id:"the-synonyms-property",level:2}];function d(e){const o={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Link:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Link",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.h1,{id:"the-text-operator",children:["The ",(0,r.jsx)(o.code,{children:"text"})," operator"]}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"text"})," operator is used to performs a full-text search using the analyzer that you specify in the index configuration. It is used to search for words or phrases in the full-text fields of your documents."]}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"text"})," operator uses the ",(0,r.jsx)(o.code,{children:"OR"})," operator to combine the search terms. For example, if you search for ",(0,r.jsx)(o.code,{children:"Joy of Cooking"}),", the search will return all documents that contain either ",(0,r.jsx)(o.code,{children:"Joy"}),", ",(0,r.jsx)(o.code,{children:"of"}),", ",(0,r.jsx)(o.code,{children:"Cooking"})," or a combination of those."]}),"\n",(0,r.jsx)(o.admonition,{type:"caution",children:(0,r.jsxs)(o.p,{children:["This can sometimes be the desired outcome, but it might also return a lot of undesired results. Those documents containing the word ",(0,r.jsx)(o.code,{children:"of"}),", for example, are most likely not relevant to your search."]})}),"\n",(0,r.jsxs)(o.p,{children:["We've already covered the ",(0,r.jsx)(o.code,{children:"path"})," property, but there are other properties that you can use with the ",(0,r.jsx)(o.code,{children:"text"})," operator."]}),"\n",(0,r.jsxs)(o.p,{children:["The full definition of the text operator goes as follow. More details can be found in the ",(0,r.jsx)(t,{to:"https://www.mongodb.com/docs/atlas/atlas-search/text/",children:"documentation"}),"."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-js",children:'{\n  $search: {\n    "index": <index name>, // optional, defaults to "default"\n    "text": {\n      "query": "<search-string>",\n      "path": "<field-to-search>",\n      "fuzzy": <options>,\n      "score": <options>,\n      "synonyms": "<synonyms-mapping-name>"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(o.p,{children:"Let's take a look at each of these properties."}),"\n",(0,r.jsxs)(o.h2,{id:"the-fuzzy-property",children:["The ",(0,r.jsx)(o.code,{children:"fuzzy"})," property"]}),"\n",(0,r.jsx)(o.p,{children:"Fuzzy search is a technique that allows you to search for terms that are similar to the one you are looking for. It is useful when your users might make typos or spelling mistakes in their search queries."}),"\n",(0,r.jsxs)(o.p,{children:["There are many options you can use with the ",(0,r.jsx)(o.code,{children:"fuzzy"})," property, and you can find out more in the docs. For now, we'll focus on the ",(0,r.jsx)(o.code,{children:"maxEdits"})," option. MaxEdits will specify the number of one character edits that can be made to find a match."]}),"\n",(0,r.jsxs)(o.p,{children:["For example, if you search for ",(0,r.jsx)(o.code,{children:"Alice"}),", you should find the book ",(0,r.jsx)(o.em,{children:"Alice in Wonderland"}),". However, if you make one, or multiple typos, such as ",(0,r.jsx)(o.code,{children:"Alyse"}),", ",(0,r.jsx)(o.code,{children:"Alise"}),", or ",(0,r.jsx)(o.code,{children:"Allice"}),", you will not find the book. This is where the ",(0,r.jsx)(o.code,{children:"maxEdits"})," option comes in handy. With a maxEdits of 1, you will find the book even if you make one typo."]}),"\n",(0,r.jsxs)(o.h2,{id:"the-synonyms-property",children:["The ",(0,r.jsx)(o.code,{children:"synonyms"})," property"]}),"\n",(0,r.jsxs)(o.p,{children:["The synonyms property allows you to specify a mapping of synonyms that will be used in your search. For example, if you search for ",(0,r.jsx)(o.code,{children:"car"}),", you might want to find documents that contain the word ",(0,r.jsx)(o.code,{children:"automobile"})," as well. You can specify a mapping of synonyms in your index configuration, and then use the ",(0,r.jsx)(o.code,{children:"synonyms"})," property in your search query to use that mapping."]})]})}function l(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>i});var r=t(7294);const n={},s=r.createContext(n);function i(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);