(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{xulV:function(n,o,t){"use strict";t.r(o);var u=t("CcnG"),l=function(){return function(){}}(),r=t("pMnS"),s=t("LOpI"),e=u.kb({encapsulation:2,styles:[],data:{}});function c(n){return u.yb(0,[u.tb(null,0)],null,null)}var i=function(){function n(n){this.route=n}return n.prototype.onLoad=function(n){console.log("We loaded fine")},n.prototype.onError=function(n){console.log(n)},n.prototype.ngOnInit=function(){var n=this;console.log(this.route.params),console.log(this.post),this.sub=this.route.params.subscribe(function(o){n.post="./assets/codex/post/"+o.cat+"/"+o.id+".md"})},n.prototype.ngOnDestroy=function(){this.sub&&this.sub.unsubscribe()},n}(),a=t("ZYCi"),p=u.kb({encapsulation:0,styles:[[""]],data:{}});function b(n){return u.yb(0,[(n()(),u.mb(0,0,null,null,1,"div",[["markdown",""]],null,[[null,"load"],[null,"error"]],function(n,o,t){var u=!0,l=n.component;return"load"===o&&(u=!1!==l.onLoad(t)&&u),"error"===o&&(u=!1!==l.onError(t)&&u),u},c,e)),u.lb(1,4767744,null,0,s.a,[u.k,s.c],{src:[0,"src"]},{error:"error",load:"load"})],function(n,o){n(o,1,0,o.component.post)},null)}function d(n){return u.yb(0,[(n()(),u.mb(0,0,null,null,1,"app-codex-view-post",[],null,null,null,b,p)),u.lb(1,245760,null,0,i,[a.a],null,null)],function(n,o){n(o,1,0)},null)}var f=u.ib("app-codex-view-post",i,d,{},{},[]),h=t("Ip0R");t.d(o,"CodexViewPostModuleNgFactory",function(){return m});var m=u.jb(l,[],function(n){return u.rb([u.sb(512,u.j,u.Z,[[8,[r.a,f]],[3,u.j],u.x]),u.sb(4608,h.i,h.h,[u.u,[2,h.p]]),u.sb(1073742336,h.b,h.b,[]),u.sb(1073742336,a.n,a.n,[[2,a.t],[2,a.k]]),u.sb(1073742336,s.b,s.b,[]),u.sb(1073742336,l,l,[]),u.sb(1024,a.i,function(){return[[{path:"",component:i},{path:":cat",component:i,pathMatch:"full"},{path:":cat/:id",component:i,pathMatch:"full"}]]},[])])})}}]);