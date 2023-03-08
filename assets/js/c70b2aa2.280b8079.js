"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[2075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={},r="E2E Tests",s={unversionedId:"testing/e2e-test",id:"testing/e2e-test",title:"E2E Tests",description:"This repo is configured for end-to-end testing with Cypress and the CI will run using a blank state of Rancher executed locally. The aim is however to enable also tests using remote instances of Ranchers.",source:"@site/docs/testing/e2e-test.md",sourceDirName:"testing",slug:"/testing/e2e-test",permalink:"/dashboard/testing/e2e-test",draft:!1,tags:[],version:"current",lastUpdatedAt:1678295305,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Unit Tests",permalink:"/dashboard/testing/unit-test"},next:{title:"Stress Testing",permalink:"/dashboard/testing/stress-test"}},l={},d=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Setup for remote tests",id:"setup-for-remote-tests",level:3},{value:"Setup for local tests",id:"setup-for-local-tests",level:3},{value:"Setup for dashboard purposes ONLY",id:"setup-for-dashboard-purposes-only",level:3},{value:"E2E Dashboard",id:"e2e-dashboard",level:2},{value:"Self-hosted: Sorry Cypress",id:"self-hosted-sorry-cypress",level:3},{value:"Cypress dashboard installation guide",id:"cypress-dashboard-installation-guide",level:3},{value:"Cypress Dashboard",id:"cypress-dashboard",level:3},{value:"Local and CI/prod run",id:"local-and-ciprod-run",level:2},{value:"Custom Commands",id:"custom-commands",level:2},{value:"Writing tests",id:"writing-tests",level:2},{value:"Tips",id:"tips",level:2},{value:"Data testid naming",id:"data-testid-naming",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Coverage",id:"coverage",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"e2e-tests"},"E2E Tests"),(0,i.kt)("p",null,"This repo is configured for end-to-end testing with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cypress.io/api/table-of-contents"},"Cypress")," and the CI will run using a blank state of Rancher executed locally. The aim is however to enable also tests using remote instances of Ranchers."),(0,i.kt)("p",null,"Because of this, we extend the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/references/best-practices#How-It-Works"},"Cypress best practices"),", so be sure to read them before write any test."),(0,i.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,i.kt)("p",null,"For the cypress test runner to consume the UI, you should specify the environment variables. This may change based on the type of tests you may want to run."),(0,i.kt)("h3",{id:"setup-for-remote-tests"},"Setup for remote tests"),(0,i.kt)("p",null,"For tests against a deployed Rancher, e.g. on Digital Ocean, mainly for analyzing the project current state."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_USERNAME"),", default ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_PASSWORD"),", user password or custom during first Rancher run"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_BASE_URL"),", the address of your instance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_SKIP_SETUP=true"),", we avoid setup as your instance is already set")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: If you want to generate code coverage information, you must enable code instrumentation by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_INSTRUMENT")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,i.kt)("p",null,"Finally run one of the 2 commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn cy:open"),", if you want to select the tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn cy:run"),", if you want to run ALL the tests")),(0,i.kt)("p",null,"For further information, consult ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/guides/command-line#cypress-open"},"official documentation"),"."),(0,i.kt)("h3",{id:"setup-for-local-tests"},"Setup for local tests"),(0,i.kt)("p",null,"These types of tests are aimed for development and updates."),(0,i.kt)("p",null,"NOTE: Local setup of Rancher do not work on Mac with M1 chips."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"API"),", the address of your server (e.g. DO), it may be local or hosted (e.g. you have Mac M1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_USERNAME"),", default ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_PASSWORD"),", user password or custom during first Rancher run"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CATTLE_BOOTSTRAP_PASSWORD"),", initialization password which will also be used as ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," user password (do not pick ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," as password as it generates issues)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_BASE_URL=https://localhost:8005")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_SKIP_SETUP=false"),", avoid to execute bootstrap setup tests for already initialized Rancher instances, it has to be toggled in case of new instances")),(0,i.kt)("p",null,"You will have to run your local instance at this point:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn dev"))),(0,i.kt)("p",null,"Finally run one of the 2 commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn cy:open"),", if you want to select the tests from the browser"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn cy:run"),", if you want to run ALL the tests in background")),(0,i.kt)("p",null,"For further information, consult ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/guides/command-line#cypress-open"},"official documentation"),"."),(0,i.kt)("h3",{id:"setup-for-dashboard-purposes-only"},"Setup for dashboard purposes ONLY"),(0,i.kt)("p",null,"If you want your tests to be tracked on Cypress dashboards you will have to enable the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_PROJECT_ID")," // Project ID used by Cypress/Sorry cypress to run the tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TEST_RUN_ID")," (optional) // Identifier for your dashboard run, default value is timestamp")),(0,i.kt)("h2",{id:"e2e-dashboard"},"E2E Dashboard"),(0,i.kt)("h3",{id:"self-hosted-sorry-cypress"},"Self-hosted: Sorry Cypress"),(0,i.kt)("p",null,"Link to the dashboard: ",(0,i.kt)("a",{parentName:"p",href:"http://139.59.134.103:8080/"},"http://139.59.134.103:8080/")),(0,i.kt)("p",null,"E2E tests can be added and displayed in a dashboard by defining the project ID with the env var ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_PROJECT_ID"),", then run the script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn cy:run:sorry\n")),(0,i.kt)("h3",{id:"cypress-dashboard-installation-guide"},"Cypress dashboard installation guide"),(0,i.kt)("p",null,"The setup is done using a cloud hosting service and with its IP we configured the Sorry Cypress as indicated in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.sorry-cypress.dev/guide/dashboard-and-api"},"guide"),". The process is straightforward, except for the IP which is required to be overwritten within ",(0,i.kt)("inlineCode",{parentName:"p"},"minio.yml")," manifest as the default ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost")," value generate CORS issues."),(0,i.kt)("h3",{id:"cypress-dashboard"},"Cypress Dashboard"),(0,i.kt)("p",null,"E2E tests can be displayed in Cypress dashboard by defining the project ID with the env var ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_PROJECT_ID"),", then run the script by passing the parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn cy:run --record --key YOUR_RECORD_KEY_HERE\n")),(0,i.kt)("p",null,"These values are provided when you create a new project within Cypress dashboard or within ",(0,i.kt)("inlineCode",{parentName:"p"},"Project settings"),"."),(0,i.kt)("p",null,"It's also possible to run a workflow in GitHub Actions E2E test using these values to record on personal dashboards."),(0,i.kt)("h2",{id:"local-and-ciprod-run"},"Local and CI/prod run"),(0,i.kt)("p",null,"It is possible to start the project and run all the tests at once with a single command. There's however a difference between ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," run. The first will not require an official certificate and will build the project in ",(0,i.kt)("inlineCode",{parentName:"p"},".nuxt"),", while the production will enable all the SSL configurations to run encrypted."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn e2e:pre-dev"),", to optionally initialize Docker and build the project, if not already done"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn e2e:dev"),", single run local development"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn e2e:pre-prod"),", to optionally initialize Docker and build the project, required for GitHub Actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn e2e:dev"),", for production use case and CI, which will also restart Docker and build the project")),(0,i.kt)("h2",{id:"custom-commands"},"Custom Commands"),(0,i.kt)("p",null,"As Cypress common practice, some custom commands have been created within ",(0,i.kt)("inlineCode",{parentName:"p"},"command.ts")," file to simplify the development process. Please consult Cypress documentation for more details about when and how to use them."),(0,i.kt)("p",null,"Worth mentioning the ",(0,i.kt)("inlineCode",{parentName:"p"},"cy.getId()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"cy.findId()")," commands, as it is mainly used to select elements. This would require to add ",(0,i.kt)("inlineCode",{parentName:"p"},"data-testid")," to your element inside the markup and optionally matchers."),(0,i.kt)("h2",{id:"writing-tests"},"Writing tests"),(0,i.kt)("p",null,"Test specs should be grouped logically, normally by page or area of the Dashboard but also by a specific feature or component."),(0,i.kt)("p",null,"Tests should make use of common Page Object (PO) components. These can be pages or individual components which expose a useful set of tools, but most importantly contain the selectors for the DOM elements that need to be used. These will ensure changes to the underlying components don't require a rewrite of many many tests. They also allow parent components to easily search for children (for example easily finding all anchors in a section instead of the whole page). Given that tests are typescript it should be easy to explore the functionality."),(0,i.kt)("p",null,"Some examples of PO functionality"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"HomePage.gotTo()\nnew HomePagePo().checkIsCurrentPage()\nnew BurgerMenuPo().clusters()\nnew AsyncButtonPO('[data-testid=\"my-button\"]').isDisabled()\nnew LoginPagePo().username().set('admin')\n")),(0,i.kt)("p",null,"POs all inherit a root ",(0,i.kt)("inlineCode",{parentName:"p"},"component.po"),". Common component functionality can be added there. They also expose their core cypress (chainable) element."),(0,i.kt)("p",null,"There are a large number of pages and components in the Dashboard and only a small set of POs. These will be expanded as the tests grow."),(0,i.kt)("p",null,"Note: When selecting an element be sure to use the attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"data-testid"),", even in case of lists where elements are distinguished by an index suffix."),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("p",null,"The Cypress UI is very much your friend. There you can click pick tests to run, easily visually track the progress of the test, see the before/after state of each cypress command (specifically good for debugging failed steps), see https requests, etc."),(0,i.kt)("p",null,"Tests can also be restricted before cypress runs, or at run time, by prepending ",(0,i.kt)("inlineCode",{parentName:"p"},".only")," to the run."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"describe.only('Burger Side Nav Menu', () => {\n  beforeEach\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it.only('Opens and closes on menu icon click', () => {\n")),(0,i.kt)("h2",{id:"data-testid-naming"},"Data testid naming"),(0,i.kt)("p",null,"While defining naming, always consider deterministic usage and rely on specific values. For cases where the content is required, e.g. select name specific elements as in cluster selection, consider use the ",(0,i.kt)("inlineCode",{parentName:"p"},"contain()")," method. Further guideline and explanation in the official documentation related section."),(0,i.kt)("p",null,"In case of complex component, define a prefix for your ",(0,i.kt)("inlineCode",{parentName:"p"},"data-testid")," with a the prop ",(0,i.kt)("inlineCode",{parentName:"p"},"componentTestid")," and a default value. This will help you to define unique value and composable identifier in case of more elements, as well to avoid custom term for each test if not necessary, e.g. no multiple elements."),(0,i.kt)("p",null,"E.g. given the action menu:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * Inherited global identifier prefix for tests\n * Define a term based on the parent component to avoid conflicts on multiple components\n */\ncomponentTestid: {\n  type:    String,\n  default: 'action-menu'\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<li\n  v-for="(option, i) in options"\n  :key="opt.action"\n  :data-testid="componentTestid + \'-\' + i + \'-item\'"\n>\n')),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"To summarize what ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/guides/debugging"},"defined in the documentation"),", the following modalities of debugging are provided:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"debugger")," flag"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".debug()")," as chained command"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cy.pause()")," for analyzing the state of the test"),(0,i.kt)("li",{parentName:"ul"},"Inspect commands in the Cypress dashboard to view the logs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".then(console.log)")," to append the log to the resolved promise")),(0,i.kt)("p",null,"These values are provided when you create a new project within Cypress dashboard or within ",(0,i.kt)("inlineCode",{parentName:"p"},"Project settings"),"."),(0,i.kt)("h2",{id:"coverage"},"Coverage"),(0,i.kt)("p",null,"Both unit and E2E tests generate coverage respectively with Jest and NYC. These values are generated on both PR and push to ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," after merging. The service used to display the values is Codecov and can be found ",(0,i.kt)("a",{parentName:"p",href:"https://app.codecov.io/gh/rancher/dashboard"},"here"),"."),(0,i.kt)("p",null,"Special attention goes to the E2E as the code is instrumented with Babel and the configuration is set within Nuxt.js."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," Note: To enable instrumentation required for code coverage, you must set the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST_INSTRUMENT")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".")))}u.isMDXComponent=!0}}]);