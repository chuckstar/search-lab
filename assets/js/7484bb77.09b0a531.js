"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[1243],{2409:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var o=t(5893),s=t(1151);const a={},n="The phrase operator",i={id:"search-operators/phrase",title:"The phrase operator",description:"The phrase operator is used to search for a group of words in a specific order. It is similar to the match operator, except that it will match anywhere in the text, not just at the beginning.",source:"@site/docs/5-search-operators/03-phrase.mdx",sourceDirName:"5-search-operators",slug:"/search-operators/phrase",permalink:"/search-lab/docs/search-operators/phrase",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/5-search-operators/03-phrase.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The text operator",permalink:"/search-lab/docs/search-operators/text"},next:{title:"The equals operator",permalink:"/search-lab/docs/search-operators/equals"}},c={},h=[{value:"The <code>slop</code> property",id:"the-slop-property",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Link:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Link",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.h1,{id:"the-phrase-operator",children:["The ",(0,o.jsx)(r.code,{children:"phrase"})," operator"]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"phrase"})," operator is used to search for a group of words in a specific order. It is similar to the ",(0,o.jsx)(r.code,{children:"match"})," operator, except that it will match anywhere in the text, not just at the beginning."]}),"\n",(0,o.jsxs)(r.p,{children:["The definition of the ",(0,o.jsx)(r.code,{children:"phrase"})," operator is. You can find more details on the phrase operator in the ",(0,o.jsx)(t,{to:"https://www.mongodb.com/docs/atlas/atlas-search/phrase/",children:"official documentation"})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:'{\n  $search: {\n     "index": <index name>, // optional, defaults to "default"\n     "phrase": {\n       "query": "<search-string>",\n       "path": "<field-to-search>",\n       "score": <options>,\n       "slop": <distance-number>\n     }\n  }\n}\n'})}),"\n",(0,o.jsxs)(r.p,{children:["The usage itself is very similar to how you would use the ",(0,o.jsx)(r.code,{children:"text"})," operator."]}),"\n",(0,o.jsxs)(r.h2,{id:"the-slop-property",children:["The ",(0,o.jsx)(r.code,{children:"slop"})," property"]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"slop"})," property is used to specify how far apart the words in the phrase can be. The default value is ",(0,o.jsx)(r.code,{children:"0"}),", which means that the words must be in the exact order specified in the query. If you set the value to ",(0,o.jsx)(r.code,{children:"1"}),", then the words can be one word apart, and so on."]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>n});var o=t(7294);const s={},a=o.createContext(s);function n(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);