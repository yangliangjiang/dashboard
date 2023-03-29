"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[1606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},s="Stress Testing",i={unversionedId:"testing/stress-test",id:"testing/stress-test",title:"Stress Testing",description:"In some situations it is useful to test the Dashboard UI with large numbers of resources (e.g. node, deployments) without having",source:"@site/docs/testing/stress-test.md",sourceDirName:"testing",slug:"/testing/stress-test",permalink:"/dashboard/testing/stress-test",draft:!1,tags:[],version:"current",lastUpdatedAt:1680124406,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"E2E Tests",permalink:"/dashboard/testing/e2e-test"},next:{title:"Terminology",permalink:"/dashboard/terminology"}},l={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stress-testing"},"Stress Testing"),(0,a.kt)("p",null,"In some situations it is useful to test the Dashboard UI with large numbers of resources (e.g. node, deployments) without having\nto actually have a system available with that scale."),(0,a.kt)("p",null,"When run in development mode, you can enable simple scale simulation by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"PERF_TEST")," environment variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PERF_TEST=true yarn dev\n")),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"PERF_TEST")," environment variable is set, the UI adds an intercept into the ",(0,a.kt)("inlineCode",{parentName:"p"},"loadAll")," function in the store - this allows\nthe code in ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/peformanceTesting.js")," to modify the resources when they are loaded into the store."),(0,a.kt)("p",null,"Note that this only intercepts the initial load, not subsequent updates."),(0,a.kt)("p",null,"Developers can modify ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/peformanceTesting.js")," to simulate the scale that they wish to test with."),(0,a.kt)("p",null,"Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"PERF_DATA")," object in this file - each key is the name of a type whose scale you wish to change, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const PERF_DATA = {\n  node: {\n    count:     800,\n    statusRow: 2,\n  }\n};\n")),(0,a.kt)("p",null,"This will simulate 800 nodes and ensure that every 1 in 2 (on average) nodes will have a status set that will cause a status row to appear in the list views."),(0,a.kt)("p",null,"The code in peformanceTesting will use the existing resources for the given type as templates and round-robin copy them to generate a list with the required number."),(0,a.kt)("p",null,"The copied resources will have their age reset to the current date and time and have names and ids generated."),(0,a.kt)("p",null,"You may also specify a custom function in a ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," field for a type, this function takes the resource and index, for example below we will set every generated resource to have an error state:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const PERF_DATA = {\n  node: {\n    count:     800,\n    statusRow: 2,\n    custom:    (node, index) => { node.metadata.state.error = true}\n  }\n};\n")),(0,a.kt)("p",null,"The custom fucntion is only applied to generated resources, not the existing resources that are used to generate them."))}c.isMDXComponent=!0}}]);