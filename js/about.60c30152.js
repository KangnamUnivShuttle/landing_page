"use strict";(self["webpackChunklanding_page"]=self["webpackChunklanding_page"]||[]).push([[443],{9027:function(t,e,n){n.r(e),n.d(e,{default:function(){return Y}});var o=n(3396);const l={class:"about"},r=(0,o._)("h1",null,"This is an about page",-1);function c(t,e,n,c,i,a){const u=(0,o.up)("course-goals");return(0,o.wg)(),(0,o.iD)("div",l,[r,(0,o.Wm)(u)])}var i=n(6520);function a(t,e,n,l,r,c){const i=(0,o.up)("goals-list"),a=(0,o.up)("add-goal");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i,{goals:t.context.filteredGoals},null,8,["goals"]),(0,o.Wm)(a,{onAddGoal:t.context.addText},null,8,["onAddGoal"])])}var u=n(2482),s=n(4870),d=n(9242);const p={key:0},f=(0,o._)("span",null,"Invalid input",-1),v=[f];function g(t,e,n,l,r,c){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",null,[(0,o._)("button",{onClick:e[0]||(e[0]=(...e)=>t.addGoal&&t.addGoal(...e))},"add"),(0,o.wy)((0,o._)("input",{type:"text",name:"",id:"","onUpdate:modelValue":e[1]||(e[1]=e=>t.input=e)},null,512),[[d.nr,t.input]])]),t.invalidInput?((0,o.wg)(),(0,o.iD)("div",p,v)):(0,o.kq)("",!0)])}function h(t,e){return(0,i.yh)(((n,o)=>{n.watch||(n.watch=Object.create(null));const l=n.watch;"object"!==typeof l[t]||Array.isArray(l[t])?"undefined"===typeof l[t]&&(l[t]=[]):l[t]=[l[t]],l[t].push(Object.assign({handler:o},e))}))}var y=function(t,e,n,o){var l,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(c=(r<3?l(c):r>3?l(e,n,c):l(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};let w=class extends i.w3{constructor(...t){super(...t),(0,u.Z)(this,"input",""),(0,u.Z)(this,"invalidInput",!1)}onInvalidInputDetected(t){t&&console.warn("Invalid input detected")}addGoal(){this.invalidInput=!1,""!==this.input?(this.$emit("add-goal",this.input),this.input=""):this.invalidInput=!0}};y([h("invalidInput")],w.prototype,"onInvalidInputDetected",null),w=y([(0,i.Ei)({components:{}})],w);var b=w,j=n(89);const x=(0,j.Z)(b,[["render",g]]);var O=x,D=n(7139);function I(t,e,n,l,r,c){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.goals,(t=>((0,o.wg)(),(0,o.iD)("li",{key:t.id},(0,D.zw)(t.text),1)))),128))])])}var R=function(t,e,n,o){var l,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(c=(r<3?l(c):r>3?l(e,n,c):l(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};class m{constructor(){(0,u.Z)(this,"goals",(0,i.vg)({required:!0}))}}let G=class extends(i.w3["with"](m)){};G=R([(0,i.Ei)({components:{}})],G);var k=G;const P=(0,j.Z)(k,[["render",I]]);var Z=P,_=function(t,e,n,o){var l,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(c=(r<3?l(c):r>3?l(e,n,c):l(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};let A=class extends i.w3{constructor(...t){super(...t),(0,u.Z)(this,"context",(0,i.cY)((()=>{const t=(0,s.iH)([]),e=(0,o.Fl)((function(){return t.value.filter((t=>!t.text.includes("angular")&&!t.text.includes("react")))}));function n(e){console.log("test",e);const n={id:(new Date).toISOString(),text:e};t.value.push(n)}return{filteredGoals:e,addText:n}})))}mounted(){console.log("setup",this.context.filteredGoals)}};A=_([(0,i.Ei)({components:{AddGoal:O,GoalsList:Z}})],A);var C=A;const E=(0,j.Z)(C,[["render",a]]);var T=E,W=function(t,e,n,o){var l,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(l=t[i])&&(c=(r<3?l(c):r>3?l(e,n,c):l(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c};let q=class extends i.w3{};q=W([(0,i.Ei)({components:{CourseGoals:T}})],q);var H=q;const S=(0,j.Z)(H,[["render",c]]);var Y=S}}]);
//# sourceMappingURL=about.60c30152.js.map