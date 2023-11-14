"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[8966],{7252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(5893),a=n(1151),o=n(3992),s=n(425);const i={},l="Add semantic search to your application",c={id:"vector-search/add-to-app",title:"Add semantic search to your application",description:"You now know everything you need to add full-text search capabilities to your application.",source:"@site/docs/7-vector-search/8-add-to-app.mdx",sourceDirName:"7-vector-search",slug:"/vector-search/add-to-app",permalink:"/search-lab/docs/vector-search/add-to-app",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/8-add-to-app.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Construct vector search queries",permalink:"/search-lab/docs/vector-search/search-queries"},next:{title:"\ud83c\udfaf Summary",permalink:"/search-lab/docs/summary"}},u={},d=[{value:"Configuring the application",id:"configuring-the-application",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"add-semantic-search-to-your-application",children:"Add semantic search to your application"}),"\n",(0,r.jsx)(t.p,{children:"You now know everything you need to add full-text search capabilities to your application."}),"\n",(0,r.jsx)(t.h2,{id:"configuring-the-application",children:"Configuring the application"}),"\n",(0,r.jsxs)(t.p,{children:["In your ",(0,r.jsx)(t.code,{children:"server/.env"})," file, you'll find a few variables that you can use to configure the application."]}),"\n",(0,r.jsxs)(t.p,{children:["The first one is ",(0,r.jsx)(t.code,{children:"EMBEDDINGS_SOURCE"}),". It tells the application where to get the embeddings from. If you're following along in the context of an in-person lab, you can set it to ",(0,r.jsx)(t.code,{children:"serverlessEndpoint"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Your instructor will provide you with an API key that you can use for the event you're attending. Set it in the ",(0,r.jsx)(t.code,{children:"EMBEDDING_KEY"})," variable."]}),"\n",(0,r.jsx)(t.p,{children:"If you are using one of the other providers, you can use the following settings in the file."}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(s.Z,{value:"serverless",label:"Serverless Endpoint",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"EMBEDDINGS_SOURCE=serverlessEndpoint\nEMBEDDING_KEY=<API Key>\n"})})}),(0,r.jsx)(s.Z,{value:"openai",label:"OpenAI",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"EMBEDDINGS_SOURCE=openai\nEMBEDDING_KEY=sk-...\n"})})}),(0,r.jsx)(s.Z,{value:"googleVertex",label:"Google Vertex",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'EMBEDDINGS_SOURCE=googleVertex\nEMBEDDING_KEY="./path_to_your_credentials.json"\nPROJECT_ID=<Project ID>\nPROJECT_LOCATION=<Project Location>\n'})})}),(0,r.jsx)(s.Z,{value:"sagemaker",label:"Amazon SageMaker",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"EMBEDDINGS_SOURCE=sagemaker\nAPI_KEY=<API_KEY>\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Open up the code from the server file ",(0,r.jsx)(t.code,{children:"server/controllers/books.ts"})," once more, and edit the ",(0,r.jsx)(t.code,{children:"vectorSearch"})," method to query your data for semantic search."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"getEmbeddings"})," function to convert the query into a vector."]})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Answer"}),(0,r.jsx)("div",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'  const vector = await getEmbeddings(query);\n  const aggregationPipeline = [\n      {\n          $search: {\n              index: "vectorsearch",\n              knnBeta: {\n                  vector,\n                  path: "embeddings",\n                  k: 20\n              }\n          }\n      }\n  ];\n  const books = await collections?.books?.aggregate(aggregationPipeline).toArray() as Book[];\n  return books;\n\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},425:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var r=n(6010);const a={tabItem:"tabItem_Ymn6"};var o=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},3992:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(7294),a=n(6010),o=n(2957),s=n(6550),i=n(1270),l=n(5238),c=n(3609),u=n(2560);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:n,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(1048);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function E(e){const t=(0,m.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(7294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);