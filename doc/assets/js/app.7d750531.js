(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},n=[];function r(t){return o.p+"assets/js/"+({about:"about"}[t]||t)+"."+{about:"df53f39e"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(d);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,s[1](l)}i[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="4678"},"51c0":function(t,e,s){"use strict";var a=s("f885"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r=(s("5c0b"),s("2877")),o={},c=Object(r["a"])(o,i,n,!1,null,null,null),l=c.exports,d=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("Header"),s("div",{staticClass:"container"},[s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-md-4"},[s("AddItem",{staticClass:"mb-3"})],1),s("div",{staticClass:"col-md-8"},[s("List")],1)])])],1)},m=[],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._m(0),s("h3",[t._v("Installed CLI Plugins")]),t._m(1),s("h3",[t._v("Essential Links")]),t._m(2),s("h3",[t._v("Ecosystem")]),t._m(3)])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),s("br"),t._v(" check out the "),s("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),s("li",[s("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),s("li",[s("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),s("li",[s("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],p={name:"HelloWorld",props:{msg:String}},v=p,b=(s("c8c1"),Object(r["a"])(v,f,h,!1,null,"b42ac836",null)),g=b.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar navbar-expand-sm bg-dark navbar-dark"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("✅ToDone")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",staticStyle:{"text-align":"left"},attrs:{id:"collapsibleNavbar"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{href:"#",value:"0"},on:{click:function(e){return e.preventDefault(),t.changeList(e)}}},[t._v("All")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#",value:"1"},on:{click:function(e){return e.preventDefault(),t.changeList(e)}}},[t._v("Time Left")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#",value:"2"},on:{click:function(e){return e.preventDefault(),t.changeList(e)}}},[t._v("Emergency")])])])])])])},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],y=new a["a"],C=y,w=s("1157"),T=s.n(w),x={name:"Header",methods:{changeList:function(t){T()(".nav-link").removeClass("active"),T()(t.target).addClass("active"),C.$emit("changeList",t.target.getAttribute("value")),setTimeout((function(){T()("#collapsibleNavbar").collapse("hide")}),150)}}},I=x,L=Object(r["a"])(I,j,k,!1,null,"3d20b692",null),$=L.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4"},[s("ul",{staticClass:"nav nav-pills flex-column"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{href:"#"}},[t._v("激活状态")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("链接")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("链接")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link disabled",attrs:{href:"#"}},[t._v("禁用")])])]),s("hr",{staticClass:"d-sm-none"})]),s("div",{staticClass:"col-sm-8"},[s("h2",[t._v("标题")]),s("h5",[t._v("副标题")]),s("div",{staticClass:"fakeimg"},[t._v("图像")]),s("p",[t._v("一些文本..")]),s("p",[t._v("菜鸟教程，学的不仅是技术，更是梦想！！！菜鸟教程，学的不仅是技术，更是梦想！！！菜鸟教程，学的不仅是技术，更是梦想！！！")]),s("br")])])}],z={name:"Catalog"},E=z,P=Object(r["a"])(E,D,O,!1,null,null,null),A=P.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{attrs:{type:"none"}},[t.itemInfo.is_item?t._e():s("div",[s("hr",{staticClass:"d-sm-none"}),s("h5",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[s("span",{staticClass:"text-muted"},[t._v(t._s(t.itemInfo.content))]),s("span",{staticClass:"badge badge-secondary badge-pill"},[t._v(t._s(t.itemInfo.start_time))])])]),t.itemInfo.is_item?s("div",{staticClass:"mb-3",staticStyle:{height:"50px"}},[s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar progress-bar-striped",style:{width:t.percent},attrs:{type:t.itemInfo.type}})]),s("div",{staticClass:"progress progress-cover",attrs:{ichecked:t.itemInfo.checked}},[s("div",{staticClass:"leftContent"},[s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.itemInfo.checked,expression:"itemInfo.checked"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:t.itemInfo.id},domProps:{checked:Array.isArray(t.itemInfo.checked)?t._i(t.itemInfo.checked,null)>-1:t.itemInfo.checked},on:{change:[function(e){var s=t.itemInfo.checked,a=e.target,i=!!a.checked;if(Array.isArray(s)){var n=null,r=t._i(s,n);a.checked?r<0&&t.$set(t.itemInfo,"checked",s.concat([n])):r>-1&&t.$set(t.itemInfo,"checked",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.itemInfo,"checked",i)},t.checkboxChange]}}),s("label",{staticClass:"custom-control-label",attrs:{type:t.itemInfo.type,for:t.itemInfo.id}},[s("div",{staticClass:"contentText",attrs:{ichecked:t.itemInfo.checked}},[t._v(t._s(t.itemInfo.content))])])])]),s("div",{staticClass:"rightContent"},[s("div",{staticClass:"countdown"},[t._v(t._s(t.timeLeft))]),s("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.deleteItem}},[t._v("×")])])])]):t._e()])},M=[],S={nowTime:(new Date).getTime(),timeLeft(t){if(t-this.nowTime<0)return"overdue";var e=parseInt((t-this.nowTime)/1e3),s=Math.floor(e/3600),a=Math.ceil(e%3600/60*(59/60));return a<10&&(a="0"+a),s+":"+a+" left"},updateNowTime(){var t=this;setInterval((function(){t.nowTime=new Date,C.$emit("updateTime")}),1e3)},progress(t,e){if(e-this.nowTime<0)return"100%";var s=parseInt((e-t)/1e3),a=parseInt((this.nowTime-t)/1e3),i=Math.ceil(a/s*100);return i+"%"}},H=S,Y={name:"Item",data(){return{timeLeft:"",percent:""}},computed:{},props:{itemInfo:Object},methods:{deleteItem:function(){C.$emit("deleteItem",this.itemInfo.id),C.$off("updateTime",this.updateTimeAndProgress)},updateTimeAndProgress:function(){this.timeLeft=H.timeLeft(this.itemInfo.end_time),this.percent=H.progress(this.itemInfo.start_time,this.itemInfo.end_time),"100%"==this.percent&&"overdue"==this.timeLeft&&C.$off("updateTime",this.updateTimeAndProgress)},checkboxChange:function(){C.$off("updateTime",this.updateTimeAndProgress),this.itemInfo.checked||"100%"==this.percent&&"overdue"==this.timeLeft||C.$on("updateTime",this.updateTimeAndProgress)}},mounted(){this.updateTimeAndProgress(),C.$on("updateTime",this.updateTimeAndProgress)}},q=Y,B=(s("c6b5"),Object(r["a"])(q,N,M,!1,null,"31c32372",null)),F=B.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("form",[s("div",{staticClass:"input-group mb-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.item.type,expression:"item.type"}],staticClass:"custom-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.item,"type",e.target.multiple?s:s[0])}}},[s("option",{staticClass:"custom-input",attrs:{value:"0"}},[t._v("Normal")]),s("option",{staticClass:"custom-input",attrs:{value:"1"}},[t._v("Major")]),s("option",{staticClass:"custom-input",attrs:{value:"2"}},[t._v("Deadly")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.item.content,expression:"item.content"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's need to be done...",required:"",autocomplete:"off"},domProps:{value:t.item.content},on:{input:function(e){e.target.composing||t.$set(t.item,"content",e.target.value)}}})]),s("div",{staticClass:"input-group"},[t._m(1),s("date-picker",{staticClass:"form-control input-sm",attrs:{id:"start_time",value:new Date,config:t.options_start,required:"",autocomplete:"off",readonly:"readonly"},on:{"dp-hide":t.startTimeChange}})],1),s("div",{staticClass:"input-group",staticStyle:{position:"relative",transform:"translate(0px, -1px)","z-index":"99"}},[t._m(2),s("date-picker",{staticClass:"form-control input-sm",attrs:{id:"end_time",value:"",config:t.options_end,required:"",autocomplete:"off",readonly:"readonly"},on:{"dp-hide":t.endTimeChange}})],1),s("div",{staticClass:"d-flex mt-2 justify-content-end"},[s("button",{staticClass:"btn btn-outline-light text-dark",on:{click:t.reset}},[t._v("reset")]),s("button",{staticClass:"btn btn-primary",on:{click:t.addItem}},[t._v("add")])])])])},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[s("span",{staticClass:"text-muted"},[t._v("Add Todos")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v("From")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v("To")])])}],G=(s("f9e3"),s("15f5"),s("133f")),R=s.n(G),U=(s("ca56"),{name:"AddItem",data(){return{item:{is_item:!0,content:"",type:0,start_time:(new Date).getTime(),end_time:0,checked:!1,overdue:!1,id:0},options_start:{format:"YYYY-MM-DD  HH:mm  dddd",useCurrent:!1,showTodayButton:!0,locale:"en",maxDate:!1,ignoreReadonly:!0,tooltips:{selectTime:"",today:"Now"},widgetPositioning:{horizontal:"right",vertical:"auto"}},options_end:{format:"YYYY-MM-DD  HH:mm  dddd",useCurrent:!1,showTodayButton:!0,locale:"en",minDate:new Date,ignoreReadonly:!0,tooltips:{selectTime:"",today:"Now"},widgetPositioning:{horizontal:"right",vertical:"auto"}}}},methods:{startTimeChange:function(){this.item.start_time=T()("#start_time").data("DateTimePicker").date()._d.getTime(),this.item.start_time>(new Date).getTime()&&(this.options_end.minDate=new Date(this.item.start_time))},endTimeChange:function(){null!=T()("#end_time").data("DateTimePicker").date()&&(this.item.end_time=T()("#end_time").data("DateTimePicker").date()._d.getTime(),this.options_start.maxDate=new Date(this.item.end_time))},addItem:function(){if(""!==this.item.content&&this.item.content.trim()&&""!==this.item.end_time){var t=(new Date).getTime();C.$emit("addItem",{is_item:this.item.is_item,content:this.item.content,type:this.item.type,start_time:this.item.start_time,end_time:this.item.end_time,checked:this.item.checked,overdue:this.item.overdue,id:t}),setTimeout(()=>{this.item.content="",this.item.end_time=0,T()("#end_time").val("")},100)}},reset:function(){setTimeout(()=>{this.item.content="",this.item.end_time=0,T()("#end_time").val("")},0)}},components:{datePicker:R.a},created:function(){T.a.extend(!0,T.a.fn.datetimepicker.defaults,{icons:{time:"far fa-clock",date:"far fa-calendar",up:"fas fa-arrow-up",down:"fas fa-arrow-down",previous:"fas fa-chevron-left",next:"fas fa-chevron-right",today:"fas fa-calendar-check",clear:"far fa-trash-alt",close:"far fa-times-circle"}})}}),K=U,Q=(s("51c0"),Object(r["a"])(K,J,W,!1,null,"52bcda1e",null)),V=Q.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition-group",{staticClass:"unorderList",attrs:{tag:"ul",name:"list-complete"}},t._l(t.shownList,(function(t){return s("Item",{key:t.id,staticClass:"list-complete-item",attrs:{itemInfo:t,itype:t.type}})})),1)],1)},Z=[],tt={name:"List",data(){return{listType:0,itemlist:[{is_item:!1,content:"Ongoing",type:-1,start_time:0,end_time:0,checked:!1,overdue:!1,id:0xf9fa46a2cc},{is_item:!1,content:"Finished",type:-1,start_time:0,end_time:0,checked:!1,overdue:!1,id:1173645789900},{is_item:!0,content:"mock data normal",type:0,start_time:(new Date).getTime(),end_time:0,checked:!1,overdue:!1,id:1573645789900},{is_item:!0,content:"mock data major",type:1,start_time:(new Date).getTime(),end_time:0,checked:!1,overdue:!1,id:1573645789901},{is_item:!0,content:"mock data deadly",type:2,start_time:(new Date).getTime(),end_time:0,checked:!1,overdue:!1,id:1573645789902}]}},computed:{ongoingList(){var t=_.filter(this.itemlist,{is_item:!1,content:"Ongoing"}),e=_.filter(this.itemlist,{is_item:!0,checked:!1});return t[0].start_time=e.length,C.$cookies.set("itemlist",JSON.stringify(this.itemlist),"30d"),_.concat(t,e)},finishedList(){var t=_.filter(this.itemlist,{is_item:!1,content:"Finished"}),e=_.filter(this.itemlist,{is_item:!0,checked:!0});return t[0].start_time=e.length,_.concat(t,e)},allList(){return _.concat(this.ongoingList,this.finishedList)},timeLeftList(){var t=_.concat(_.head(this.ongoingList),_.orderBy(_.tail(this.ongoingList),["end_time","type"],["asc","desc"])),e=_.concat(_.head(this.finishedList),_.orderBy(_.tail(this.finishedList),["end_time","type"],["asc","desc"]));return _.concat(t,e)},emergencyList(){var t=_.concat(_.head(this.ongoingList),_.orderBy(_.tail(this.ongoingList),["type","end_time"],["desc","asc"])),e=_.concat(_.head(this.finishedList),_.orderBy(_.tail(this.finishedList),["type","end_time"],["desc","asc"]));return _.concat(t,e)},shownList(){return 0==this.listType?this.allList:1==this.listType?this.timeLeftList:this.emergencyList}},created(){C.$cookies.isKey("itemlist")&&(this.itemlist=JSON.parse(C.$cookies.get("itemlist")))},mounted(){H.updateNowTime();var t=this;C.$on("addItem",(function(e){t.itemlist.push(e)})),C.$on("deleteItem",(function(e){t.itemlist=t.itemlist.filter((function(t){return t.id!==e}))})),C.$on("changeList",(function(e){t.listType=e}))},components:{Item:F}},et=tt,st=(s("acf7"),Object(r["a"])(et,X,Z,!1,null,"743f30dc",null)),at=st.exports,it={name:"home",components:{HelloWorld:g,Header:$,Catalog:A,Item:F,AddItem:V,List:at}},nt=it,rt=(s("b65e"),Object(r["a"])(nt,u,m,!1,null,"54a2a8dd",null)),ot=rt.exports;a["a"].use(d["a"]);const ct=[{path:"/",name:"home",component:ot},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],lt=new d["a"]({routes:ct});var dt=lt,ut=(s("4989"),s("ab8b"),s("2ef0")),mt=s.n(ut),ft=s("2b27"),ht=s.n(ft);a["a"].use(ht.a),a["a"].prototype._=mt.a,a["a"].config.productionTip=!1,new a["a"]({router:dt,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},"8c99":function(t,e,s){},"9c0c":function(t,e,s){},"9cb1":function(t,e,s){},acf7:function(t,e,s){"use strict";var a=s("9cb1"),i=s.n(a);i.a},b65e:function(t,e,s){"use strict";var a=s("dd68"),i=s.n(a);i.a},c3dc:function(t,e,s){},c6b5:function(t,e,s){"use strict";var a=s("c3dc"),i=s.n(a);i.a},c8c1:function(t,e,s){"use strict";var a=s("8c99"),i=s.n(a);i.a},dd68:function(t,e,s){},f885:function(t,e,s){}});