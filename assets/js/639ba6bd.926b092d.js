"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[8968],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},i="Nuxt Plugins",s={unversionedId:"code-base-works/nuxt-plugins",id:"code-base-works/nuxt-plugins",title:"Nuxt Plugins",description:"Location",source:"@site/docs/code-base-works/nuxt-plugins.md",sourceDirName:"code-base-works",slug:"/code-base-works/nuxt-plugins",permalink:"/dashboard/code-base-works/nuxt-plugins",draft:!1,tags:[],version:"current",lastUpdatedAt:1678295305,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Stores",permalink:"/dashboard/code-base-works/stores"},next:{title:"Machine Drivers",permalink:"/dashboard/code-base-works/machine-drivers"}},l={},c=[{value:"Location",id:"location",level:2},{value:"Notes",id:"notes",level:2},{value:"Pattern",id:"pattern",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nuxt-plugins"},"Nuxt Plugins"),(0,a.kt)("h2",{id:"location"},"Location"),(0,a.kt)("p",null,"The definitions of plugins reside in ",(0,a.kt)("inlineCode",{parentName:"p"},"shell/plugins"),". Plugins added to ",(0,a.kt)("inlineCode",{parentName:"p"},"shell/nuxt/index.js")," will be initialized at the start of the app rendering. "),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"This file was generated by nuxt and will soon be redefined by hand. It's safe to add new plugins to this file."),(0,a.kt)("h2",{id:"pattern"},"Pattern"),(0,a.kt)("p",null,"Define the store in a file that resides within ",(0,a.kt)("inlineCode",{parentName:"p"},"shell/plugins"),". Then add the plugins import and execution to ",(0,a.kt)("inlineCode",{parentName:"p"},"shell/nuxt/index.js"),"."),(0,a.kt)("p",null,"shell/plugins/version.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Fetch version metadata from backend /rancherversion API and store it\n *\n * This metadata does not change for an installation of Rancher\n */\n\nimport { setVersionData } from '@shell/config/version';\n\nexport default async function({ store }) {\n  try {\n    const response = await store.dispatch('rancher/request', {\n      url:                  '/rancherversion',\n      method:               'get',\n      redirectUnauthorized: false\n    });\n\n    setVersionData(response);\n  } catch (e) {\n    console.warn('Failed to fetch Rancher version metadata', e); // eslint-disable-line no-console\n  }\n}\n")),(0,a.kt)("p",null,"shell/nuxt/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport version from  '../plugins/version';\n...\nif (process.client && typeof version === 'function') {\n   await version(app.context, inject);\n}\n...\n")))}u.isMDXComponent=!0}}]);