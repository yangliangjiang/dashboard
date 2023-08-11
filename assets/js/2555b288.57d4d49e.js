"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[9338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,b=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={},o="Table Columns",i={unversionedId:"extensions/api/table-columns",id:"extensions/api/table-columns",title:"Table Columns",description:"Table Columns are added to Rancher via the addTableColumn method.",source:"@site/docs/extensions/api/table-columns.md",sourceDirName:"extensions/api",slug:"/extensions/api/table-columns",permalink:"/dashboard/extensions/api/table-columns",draft:!1,tags:[],version:"current",lastUpdatedAt:1691738446,formattedLastUpdatedAt:"Aug 11, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Tabs",permalink:"/dashboard/extensions/api/tabs"},next:{title:"Components",permalink:"/dashboard/extensions/api/components/"}},p={},m=[{value:"addTableColumn",id:"addtablecolumn",level:2},{value:"TableColumnLocation.RESOURCE options",id:"tablecolumnlocationresource-options",level:3}],u={toc:m},d="wrapper";function s(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table-columns"},"Table Columns"),(0,r.kt)("p",null,"Table Columns are added to Rancher via the ",(0,r.kt)("inlineCode",{parentName:"p"},"addTableColumn")," method."),(0,r.kt)("h2",{id:"addtablecolumn"},"addTableColumn"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Rancher version v2.7.2)")),(0,r.kt)("p",null,"This method adds a table column to a ",(0,r.kt)("inlineCode",{parentName:"p"},"SortableTable"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceList")," element-based table on the UI."),(0,r.kt)("p",null,"Method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addTableColumn(where: String, when: LocationConfig, options: Object);\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Arguments")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"where")," string parameter admissable values for this method:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TableColumnLocation.RESOURCE")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Location for a table column on a Resource List View page")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"when")," Object admissable values:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LocationConfig")," as described above for the ",(0,r.kt)("a",{parentName:"p",href:"./common#locationconfig"},"LocationConfig object"),"."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"tablecolumnlocationresource-options"},"TableColumnLocation.RESOURCE options"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Table Col",src:n(8747).Z,width:"1511",height:"1001"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"options")," config object. Admissable parameters for the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"'TableColumnLocation.RESOURCE'")," are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Label for column")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"labelKey")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'Same as "name" but allows for translation. Will superseed "name"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Object property to obtain the value from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getValue")),(0,r.kt)("td",{parentName:"tr",align:null},"Fuction"),(0,r.kt)("td",{parentName:"tr",align:null},'Same as "value", but it can be a function. Will superseed "value"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"width")),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"Column width (in ",(0,r.kt)("inlineCode",{parentName:"td"},"px"),"). Optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sort")),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object properties to be bound to the table sorting. Optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"search")),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object properties to be bound to the table search. Optional")))),(0,r.kt)("p",null,"Usage example for ",(0,r.kt)("inlineCode",{parentName:"p"},"'TableColumnLocation.RESOURCE'"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addTableColumn(\n  TableColumnLocation.RESOURCE,\n  { resource: ['configmap'] },\n  {\n    name:     'some-prop-col',\n    labelKey: 'generic.comingSoon',\n    getValue: (row: any) => {\n      return `${ row.id }-DEMO-COL-STRING-ADDED!`;\n    },\n    width: 100,\n    sort: ['stateSort', 'nameSort'],\n    search: ['stateSort', 'nameSort'],\n  }\n);\n")))}s.isMDXComponent=!0},8747:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/table-cols-3953fefeb27df6584ba612ff214477b8.png"}}]);