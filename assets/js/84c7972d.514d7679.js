"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[8966],{7252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(5893),a=r(1151),o=r(3992),s=r(425);const i={},l="\ud83d\udc50 Add semantic search to your application",c={id:"vector-search/add-to-app",title:"\ud83d\udc50 Add semantic search to your application",description:"You now know everything you need to add vector search capabilities to your application.",source:"@site/docs/7-vector-search/8-add-to-app.mdx",sourceDirName:"7-vector-search",slug:"/vector-search/add-to-app",permalink:"/search-lab/docs/vector-search/add-to-app",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/8-add-to-app.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Construct vector search queries",permalink:"/search-lab/docs/vector-search/search-queries"},next:{title:"\ud83e\uddb8\u200d\u2642\ufe0f Pre Filtering data",permalink:"/search-lab/docs/vector-search/filtering"}},u={},d=[{value:"Configuring the application",id:"configuring-the-application",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"-add-semantic-search-to-your-application",children:"\ud83d\udc50 Add semantic search to your application"}),"\n",(0,n.jsx)(t.p,{children:"You now know everything you need to add vector search capabilities to your application."}),"\n",(0,n.jsx)(t.h2,{id:"configuring-the-application",children:"Configuring the application"}),"\n",(0,n.jsxs)(t.p,{children:["In your ",(0,n.jsx)(t.code,{children:"server/.env"})," file, you'll find a few variables that you can use to configure the application. We will add a couple more."]}),"\n",(0,n.jsxs)(t.p,{children:["The first one is ",(0,n.jsx)(t.code,{children:"EMBEDDINGS_SOURCE"}),". It tells the application where to get the embeddings from. If you're following along in the context of an in-person lab, you can set it to ",(0,n.jsx)(t.code,{children:"serverlessEndpoint"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Your instructor will provide you with an API key that you can use for the event you're attending. Set it in the ",(0,n.jsx)(t.code,{children:"EMBEDDING_KEY"})," variable (or ",(0,n.jsx)(t.code,{children:"API_KEY"})," for Amazon SageMaker)."]}),"\n",(0,n.jsxs)(t.p,{children:["If you are using one of the other providers, you can use the following settings in the file ",(0,n.jsx)(t.code,{children:"server/.env"}),"."]}),"\n",(0,n.jsxs)(o.Z,{groupId:"aiproviders",children:[(0,n.jsx)(s.Z,{value:"serverless",label:"Serverless Endpoint",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"EMBEDDINGS_SOURCE=serverlessEndpoint\nEMBEDDING_KEY=<API Key>\n"})})}),(0,n.jsx)(s.Z,{value:"openai",label:"OpenAI",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"EMBEDDINGS_SOURCE=openai\nEMBEDDING_KEY=sk-...\n"})})}),(0,n.jsx)(s.Z,{value:"googleVertex",label:"Google Cloud Vertex AI",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'EMBEDDINGS_SOURCE=googleVertex\nEMBEDDING_KEY="./path_to_your_credentials.json"\nPROJECT_ID=<Project ID>\nPROJECT_LOCATION=<Project Location>\n'})})}),(0,n.jsx)(s.Z,{value:"sagemaker",label:"Amazon SageMaker",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"EMBEDDINGS_SOURCE=sagemaker\nAPI_KEY=<API_KEY>\n"})})})]}),"\n",(0,n.jsxs)(t.p,{children:["Open up the code from the server file ",(0,n.jsx)(t.code,{children:"server/src/controllers/books.ts"})," once more, and edit the ",(0,n.jsx)(t.code,{children:"searchBooks"})," method to query your data for semantic search."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Use the ",(0,n.jsx)(t.code,{children:"getEmbeddings"})," function to convert the query into a vector."]})}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Answer"}),(0,n.jsx)("div",{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"public async searchBooks(query: string): Promise<Book[]> {\n  const vector = await getEmbeddings(query);\n  const aggregationPipeline = [\n    {\n      $vectorSearch: {\n        queryVector:  vector,\n        path: 'embeddings',\n        numCandidates: 100,\n        index: 'vectorsearch',\n        limit: 100,\n      }\n    }\n  ];\n  const books = await collections?.books?.aggregate(aggregationPipeline).toArray() as Book[];\n  return books;\n}\n\n"})})})]}),"\n",(0,n.jsx)(t.p,{children:'To test it, try to search for things that have the same meaning, but using words that are not in the title, synopsis, etc. For instance "Canines doing stuff" should return books related to dogs.'})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},425:(e,t,r)=>{r.d(t,{Z:()=>s});r(7294);var n=r(6010);const a={tabItem:"tabItem_Ymn6"};var o=r(5893);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:r,children:t})}},3992:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(7294),a=r(6010),o=r(2957),s=r(6550),i=r(1270),l=r(5238),c=r(3609),u=r(2560);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:r,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=r(1048);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function x(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==n&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function E(e){const t=(0,m.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>s});var n=r(7294);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);