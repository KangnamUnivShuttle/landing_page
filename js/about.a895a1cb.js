"use strict";(self["webpackChunklanding_page"]=self["webpackChunklanding_page"]||[]).push([[443],{5260:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var o=n(3396);const l={class:"about"},r=(0,o._)("h1",null,"This is an about page",-1);function c(e,t,n,c,a,u){const i=(0,o.up)("course-goals");return(0,o.wg)(),(0,o.iD)("div",l,[r,(0,o.Wm)(i)])}var a=n(6520);function u(e,t,n,l,r,c){const a=(0,o.up)("goals-list"),u=(0,o.up)("add-goal");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(a,{goals:e.context.filteredGoals},null,8,["goals"]),(0,o.Wm)(u,{onAddGoal:e.context.addText},null,8,["onAddGoal"])])}var i=n(2482),s=n(4870),d=n(9242);const f={key:0},p=(0,o._)("span",null,"Invalid input",-1),v=[p];function g(e,t,n,l,r,c){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",null,[(0,o._)("button",{onClick:t[0]||(t[0]=(...t)=>e.context.addGoal&&e.context.addGoal(...t))},"add"),(0,o.wy)((0,o._)("input",{type:"text",name:"",id:"","onUpdate:modelValue":t[1]||(t[1]=t=>e.context.input=t)},null,512),[[d.nr,e.context.input]])]),e.context.invalidInput?((0,o.wg)(),(0,o.iD)("div",f,v)):(0,o.kq)("",!0)])}var w=function(e,t,n,o){var l,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(c=(r<3?l(c):r>3?l(t,n,c):l(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c};let x=class extends a.w3{constructor(...e){super(...e),(0,i.Z)(this,"context",(0,a.cY)((()=>{const e=(0,s.iH)(""),t=(0,s.iH)(!1);function n(){t.value=!1,""!==e.value?e.value="":t.value=!0}return(0,o.YP)(t,(e=>{e&&console.warn("Invalid input detected")})),{input:e.value,invalidInput:t.value,addGoal:n}})))}};x=w([(0,a.Ei)({components:{}})],x);var y=x,h=n(89);const b=(0,h.Z)(y,[["render",g]]);var O=b,j=n(7139);function D(e,t,n,l,r,c){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.goals,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.id},(0,j.zw)(e.text),1)))),128))])])}var R=function(e,t,n,o){var l,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(c=(r<3?l(c):r>3?l(t,n,c):l(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c};class G{constructor(){(0,i.Z)(this,"goals",(0,a.vg)({required:!0}))}}let m=class extends(a.w3["with"](G)){};m=R([(0,a.Ei)({components:{}})],m);var P=m;const k=(0,h.Z)(P,[["render",D]]);var _=k,Z=function(e,t,n,o){var l,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(c=(r<3?l(c):r>3?l(t,n,c):l(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c};let I=class extends a.w3{constructor(...e){super(...e),(0,i.Z)(this,"context",(0,a.cY)((()=>{const e=(0,s.iH)([]),t=(0,o.Fl)((function(){return e.value.filter((e=>!e.text.includes("angular")&&!e.text.includes("react")))}));function n(t){console.log("test",t);const n={id:(new Date).toISOString(),text:t};e.value.push(n)}return{filteredGoals:t,addText:n}})))}mounted(){console.log("setup",this.context.filteredGoals)}};I=Z([(0,a.Ei)({components:{AddGoal:O,GoalsList:_}})],I);var C=I;const E=(0,h.Z)(C,[["render",u]]);var H=E,Y=function(e,t,n,o){var l,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(c=(r<3?l(c):r>3?l(t,n,c):l(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c};let A=class extends a.w3{};A=Y([(0,a.Ei)({components:{CourseGoals:H}})],A);var T=A;const W=(0,h.Z)(T,[["render",c]]);var q=W}}]);
//# sourceMappingURL=about.a895a1cb.js.map