(this.webpackJsonpreactpro=this.webpackJsonpreactpro||[]).push([[10],{195:function(e,t,n){"use strict";var a=n(43),r=n(14),c=n(198),o=n.n(c),s="http://123.57.6.111:1232/";o.a.defaults.baseURL=s;var i="";function u(e){a.h.hide(),a.h.fail(e,1)}function l(e){a.h.hide(),a.h.success(e,1)}function d(e){a.h.info(e,1)}function p(e){return(e=(e=sessionStorage.tele.toString()).split("")).splice(3,4,"****").join(""),e}o.a.defaults.headers.common.token=i,o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",o.a.interceptors.request.use((function(e){var t,n;return t=t||"\u8bf7\u6c42\u4e2d",n=n||1,a.h.hide(),a.h.loading(t,n,(function(){console.log("Load complete !!!")})),i=sessionStorage.token?sessionStorage.token:"",e.headers.token=i,e}),(function(e){var t;return t="\u8bf7\u6c42\u5931\u8d25,\u7f51\u7edc\u5f02\u5e38",a.h.hide(),a.h.offline(t,1),Promise.reject(e)})),o.a.interceptors.response.use((function(e){return e.data.type?l(e.data.msg):0===e.data.type?u(e.data.msg):l(e.data.msg),e}),(function(e){return u("\u54cd\u5e94\u5931\u8d25-\u670d\u52a1\u5668\u5f02\u5e38"),Promise.reject(e)})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return o.a})),n.d(t,"b",(function(){return s}));new r.b},197:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"g",(function(){return f}));var a=n(199),r=n.n(a),c=n(195),o={type:"changeTime"};function s(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(c.a.get(e));case 2:return t=n.sent,n.abrupt("return",{type:"getFoot",payload:t.data});case 4:case"end":return n.stop()}}))}var i=function(){return{type:"changeFlag",payload:!!sessionStorage.tele}},u=function(e){return{type:"changeMobile",payload:e}};function l(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(c.a.post("/react/aly/sendSms",{tele:e,time:new Date}));case 2:return t=n.sent,console.log(t),n.abrupt("return",{type:"getCode",payload:t.data.params+""});case 5:case"end":return n.stop()}}))}function d(e){var t,n,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,r.a.awrap(c.a.post("/react/uploadImg",e));case 2:return t=o.sent,n="http://img.cmvideo.cn:8080/publish/voms2/uic_service/picture/userImage/543/626/5181.jpg",t.data.pic?(n=t.data.pic.replace(/public/,c.b),a=JSON.stringify({mobile:t.data.mobile,url:n}),localStorage.userInfo=a):localStorage.userInfo="",o.abrupt("return",{type:"changeHead",payload:n});case 6:case"end":return o.stop()}}))}var p=function(){return{type:"changeHead",payload:"http://img.cmvideo.cn:8080/publish/voms2/uic_service/picture/userImage/543/626/5181.jpg"}},f=function(e){return console.log(e),{type:"changeHead",payload:e}}},236:function(e,t,n){},247:function(e,t,n){"use strict";n.r(t);var a,r=n(31),c=n(32),o=n(34),s=n(33),i=n(35),u=(n(236),n(0)),l=n.n(u),d=n(83),p=n(43),f=n(197),h=n(195),m=/^1(3|4|5|6|7|8|9)\d{9}$/,g=/^\d{4}$/,v=Object(d.b)((function(e){return{mobile:e.getIn(["data","mobile"]),code:e.getIn(["data","code"])}}))(a=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).handleClear=function(){n.props.dispatch(Object(f.c)(""))},n.handleCheck=function(){var e=n.tele.value,t=n.code.value;n.tele.value?m.test(n.tele.value)?n.code.value?g.test(n.code.value)?h.a.post("/react/checkCode",{tele:e,code:t}).then((function(e){e.data.token&&(sessionStorage.tele=n.tele.value,sessionStorage.token=e.data.token,n.props.dispatch(Object(f.a)(n.props.history)),n.props.history.push("/main/home"))})):Object(h.d)("\u77ed\u4fe1\u9a8c\u8bc1\u7801\u683c\u5f0f\u4e0d\u5bf9"):Object(h.d)("\u77ed\u4fe1\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a"):Object(h.d)("\u624b\u673a\u53f7\u7801\u683c\u5f0f\u4e0d\u5bf9"):Object(h.d)("\u624b\u673a\u53f7\u7801\u4e0d\u80fd\u4e3a\u7a7a")},n.sendMsg=function(){n.tele.value?m.test(n.tele.value)?n.props.dispatch(Object(f.e)(n.tele.value)):Object(h.d)("\u624b\u673a\u53f7\u7801\u683c\u5f0f\u4e0d\u5bf9"):Object(h.d)("\u624b\u673a\u53f7\u7801\u4e0d\u80fd\u4e3a\u7a7a")},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.history,a=t.dispatch,r=t.mobile;return l.a.createElement("div",{className:"body"},l.a.createElement(p.d,{mode:"light",style:{borderBottom:"1px solid #EEF1F3"},icon:l.a.createElement(p.c,{style:{transform:"scale(1.5)"},type:"left"}),onLeftClick:function(){return n.go(-1)}},"\u77ed\u4fe1\u767b\u5f55"),l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:"https://passport.migu.cn/mobile/images/migu-video.png",alt:""})),l.a.createElement(p.j,null,l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"tele",ref:"one"},l.a.createElement("input",{ref:function(t){return e.tele=t},type:"text",placeholder:"\u624b\u673a\u53f7",value:r,onChange:function(){return a(Object(f.c)(e.tele.value))}}),l.a.createElement("div",{className:"clear",style:{display:r?"block":"none"},onClick:this.handleClear},"x")),l.a.createElement("div",{className:"code",ref:"two"},l.a.createElement("input",{ref:function(t){return e.code=t},type:"text",placeholder:"\u77ed\u4fe1\u9a8c\u8bc1\u7801"}),l.a.createElement(p.a,{className:"get",onClick:this.sendMsg,inline:!0,style:{border:"#8A909B 1px solid",borderRadius:"999px"},size:"small"},"\u83b7\u53d6\u9a8c\u8bc1\u7801")),l.a.createElement(p.i,{size:"xl"}),l.a.createElement("div",{className:"btn"},l.a.createElement(p.a,{type:"primary",style:{borderRadius:"999px"},onClick:this.handleCheck},"\u767b\u5f55")))))}}]),t}(u.Component))||a;t.default=v}}]);
//# sourceMappingURL=10.3e9e3c87.chunk.js.map