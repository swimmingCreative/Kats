(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2397],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3899:function(e,t,n){"use strict";n.d(t,{Z:function(){return l},T:function(){return c}});var r=n(2122),a=n(7294),o=n(6742),i=n(2263),s=n(907);function l(e){return a.createElement(o.Z,(0,r.Z)({},e,{to:(t=e.to,l=(0,s.zu)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==l?void 0:l.name)?n:"current"]+t),target:"_blank"}));var t,n,l}function c(e){var t,n=null!=(t=e.text)?t:"Example";return a.createElement(l,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},761:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(3899),s=["components"],l={id:"composition",title:"Putting it all together"},c={unversionedId:"tutorials/basic/your_first_app/composition",id:"tutorials/basic/your_first_app/composition",isDocsHomePage:!1,title:"Putting it all together",description:"As software gets more complex, we resort to modularity and composition to keep it manageable.",source:"@site/docs/tutorials/basic/your_first_app/6_composition.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/composition",permalink:"/docs/next/tutorials/basic/your_first_app/composition",editUrl:"https://github.com/facebookresearch/kats/edit/master/website/docs/tutorials/basic/your_first_app/6_composition.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1611367238,formattedLastUpdatedAt:"1/22/2021",sidebarPosition:6,frontMatter:{id:"composition",title:"Putting it all together"}},u=[{value:"Summary",id:"summary",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.T,{to:"examples/tutorials/basic/your_first_hydra_app/6_composition",mdxType:"ExampleGithubLink"}),(0,o.kt)("p",null,"As software gets more complex, we resort to modularity and composition to keep it manageable.\nWe can do the same with configs. Suppose we want our working example to support multiple databases, with\nmultiple schemas per database, and different UIs. We wouldn't write a separate class\nfor each permutation of db, schema and UI, so we shouldn't write separate configs either. We use\nthe same solution in configuration as in writing the underlying software: composition. "),(0,o.kt)("p",null,"To do this in Hydra, we first add a ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"ui")," config group:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Directory layout"',title:'"Directory','layout"':!0},"\u251c\u2500\u2500 conf\n\u2502   \u251c\u2500\u2500 config.yaml\n\u2502   \u251c\u2500\u2500 db\n\u2502   \u2502   \u251c\u2500\u2500 mysql.yaml\n\u2502   \u2502   \u2514\u2500\u2500 postgresql.yaml\n\u2502   \u251c\u2500\u2500 schema\n\u2502   \u2502   \u251c\u2500\u2500 school.yaml\n\u2502   \u2502   \u251c\u2500\u2500 support.yaml\n\u2502   \u2502   \u2514\u2500\u2500 warehouse.yaml\n\u2502   \u2514\u2500\u2500 ui\n\u2502       \u251c\u2500\u2500 full.yaml\n\u2502       \u2514\u2500\u2500 view.yaml\n\u2514\u2500\u2500 my_app.py\n")),(0,o.kt)("p",null,"With these configs, we already have 12 possible combinations. Without composition, we would need 12 separate configs.\nA single change, such as renaming ",(0,o.kt)("inlineCode",{parentName:"p"},"db.user")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"db.username"),", requires editing all 12 of them.\nThis is a maintenance nightmare."),(0,o.kt)("p",null,"Composition can come to the rescue.\nInstead of creating 12 different config files, that fully specify each\nconfig, create a single config that specifies the different configuration dimensions, and the default for each."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n  - ui: full\n  - schema: school\n")),(0,o.kt)("p",null,"The resulting configuration is a composition of the ",(0,o.kt)("em",{parentName:"p"},"mysql")," database, the ",(0,o.kt)("em",{parentName:"p"},"full")," ui, and the ",(0,o.kt)("em",{parentName:"p"},"school")," schema\n(which we are seeing for the first time here):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  user: omry\n  pass: secret\nui:\n  windows:\n    create_db: true\n    view: true\nschema:\n  database: school\n  tables:\n  - name: students\n    fields:\n    - name: string\n    - class: int\n  - name: exams\n    fields:\n    - profession: string\n    - time: data\n    - class: int\n")),(0,o.kt)("p",null,"Stay tuned to see how to run all of the combinations automatically (",(0,o.kt)("a",{parentName:"p",href:"/docs/next/tutorials/basic/running_your_app/multi-run"},"Multi-run"),")."),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The addition of each new db, schema, or ui only requires a single file."),(0,o.kt)("li",{parentName:"ul"},"Each config group can have a default specified in the Defaults List."),(0,o.kt)("li",{parentName:"ul"},"Any combination can be composed by selecting the desired option from each config group in the\nDefaults List or the command line.")))}m.isMDXComponent=!0}}]);