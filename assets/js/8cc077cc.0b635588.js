"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[2413],{9153:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var r=t(5893),s=t(1151);const n={},a="Score modifiers",c={id:"search-operators/score-modifier",title:"Score modifiers",description:"In the operators you've seen so far, you can adjust the score property to modify the score of a result. This is useful for boosting or demoting results based on certain criteria.",source:"@site/docs/5-search-operators/07-score-modifier.mdx",sourceDirName:"5-search-operators",slug:"/search-operators/score-modifier",permalink:"/search-lab/docs/search-operators/score-modifier",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/5-search-operators/07-score-modifier.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Scoring",permalink:"/search-lab/docs/search-operators/scoring"},next:{title:"Mixing and matching",permalink:"/search-lab/docs/search-operators/mix-and-match"}},i={},l=[{value:"Boost",id:"boost",level:2},{value:"Constant",id:"constant",level:2}];function d(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Link:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Link",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"score-modifiers",children:"Score modifiers"}),"\n",(0,r.jsxs)(o.p,{children:["In the operators you've seen so far, you can adjust the ",(0,r.jsx)(o.code,{children:"score"})," property to modify the score of a result. This is useful for boosting or demoting results based on certain criteria."]}),"\n",(0,r.jsxs)(o.p,{children:["There are multiple ways to modify the score. You can look at the ",(0,r.jsx)(t,{to:"https://www.mongodb.com/docs/atlas/atlas-search/score/modify-score/",children:"documentation"})," to learn more."]}),"\n",(0,r.jsx)(o.p,{children:"Here, we will focus on simple ways to do so."}),"\n",(0,r.jsx)(o.h2,{id:"boost",children:"Boost"}),"\n",(0,r.jsxs)(o.p,{children:["Using ",(0,r.jsx)(o.code,{children:"boost"}),", you can multiply the score by a certain value. This can be useful to promote certain results that would be sponsored for example. The higher sponsor tiers would get higher modifiers."]}),"\n",(0,r.jsxs)(o.p,{children:["In our dataset, we could decide to boost results that are of the ",(0,r.jsx)(o.code,{children:"fiction"})," genre."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"{\n  $search: {\n    index: 'fulltextsearch',\n    text: {\n      query: 'fiction',\n      path: 'genres'\n    },\n    score: { boost: { value: 2 } }\n  }\n}\n"})}),"\n",(0,r.jsx)(o.h2,{id:"constant",children:"Constant"}),"\n",(0,r.jsx)(o.p,{children:"We can also set the score to a constant value. This can be useful to demote results that are not relevant enough. In our use case, we could set a constant value of 0 for books that are not currently available."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"{\n  $search: {\n    index: 'fulltextsearch',\n    equals: {\n      path: 'available',\n      value: 0\n    },\n    score: { constant: { value: 0 } }\n  }\n}\n"})})]})}function h(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>c,a:()=>a});var r=t(7294);const s={},n=r.createContext(s);function a(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);