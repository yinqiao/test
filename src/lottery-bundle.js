






  
  

  

//v0.1.4-1488423058577;
define('npm/@ali/wxc-overlay/index', [], function(require, exports, module) {!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("npm/@ali/wxc-overlay/index",[],t):"object"==typeof exports?exports["npm/@ali/wxc-overlay/index"]=t():e["npm/@ali/wxc-overlay/index"]=t()}(this,function(){return function(e){function t(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="/",t(0)}([function(e,t,o){var i=o(5),n=o(6),r=o(7);__weex_define__("@weex-component/388b102714aad55b1bedc16006332b74",[],function(e,t,o){r(o,t,e),t.__esModule&&t.default&&(o.exports=t.default),o.exports.template=i,o.exports.style=n}),__weex_bootstrap__("@weex-component/388b102714aad55b1bedc16006332b74",void 0,void 0)},,,,,function(e,t){e.exports={type:"div",classList:["wxc-overlay"],shown:function(){return this.isShow},events:{click:"overlayClicked"},style:{position:function(){return this.position},height:function(){return 2*this.height},top:function(){return-this.height},backgroundColor:function(){return"rgba(0, 0, 0,"+this.opacity+")"}}}},function(e,t){e.exports={"wxc-overlay":{position:"absolute",width:1500,flex:1,left:-750}}},function(e,t){e.exports=function(e,t,o){"use strict";e.exports={data:function(){return{isShow:!1,opacity:.6,height:1e3,position:"absolute"}},created:function(){var e=this,t=e.$getConfig(),o=t.env,i=o.platform.toLowerCase();e.height=o.deviceHeight/o.deviceWidth*750,"android"===i&&(e.position="fixed")},methods:{overlayClicked:function(e){this.$dispatch("overlay.body.click",{e:e})}}}}}])});});define('npm/@ali/wxc-mask/index', [], function(require, exports, module) {!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("npm/@ali/wxc-mask/index",[],e):"object"==typeof exports?exports["npm/@ali/wxc-mask/index"]=e():t["npm/@ali/wxc-mask/index"]=e()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="/",e(0)}([function(t,e,i){var o=i(5),n=i(6),s=i(7);__weex_define__("@weex-component/f5e1c456d74a6374b2c0129d79c108e1",[],function(t,e,i){s(i,e,t),e.__esModule&&e.default&&(i.exports=e.default),i.exports.template=o,i.exports.style=n}),__weex_bootstrap__("@weex-component/f5e1c456d74a6374b2c0129d79c108e1",void 0,void 0)},,,,,function(t,e){t.exports={type:"div",classList:["container"],children:[{type:"wxc-overlay",attr:{isShow:function(){return this.isShow&&this.haveOverlay},opacity:function(){return this.overlayOpacity}}},{type:"div",id:"wxc-mask",classList:["wxc-mask"],style:{width:function(){return this.newWidth},height:function(){return this.showClose?this.height-0+100:this.height-0},left:function(){return(750-this.width)/2},top:function(){return this.topHeight},opacity:0},children:[{type:"div",style:{width:function(){return this.newWidth},backgroundColor:function(){return this.maskBgColor},height:function(){return this.height},borderRadius:function(){return this.borderRadius}},children:[{type:"content"}]},{type:"div",classList:["mask-bottom"],style:{width:function(){return this.newWidth}},shown:function(){return this.showClose},children:[{type:"image",attr:{src:function(){return this.closeIcon}},classList:["mask-close-icon"],events:{click:"closeIconClicked"}}]}]}]}},function(t,e){t.exports={container:{position:"fixed",width:750},"wxc-mask":{position:"fixed",flex:1,top:300,left:60,width:702,height:800},"mask-bottom":{width:702,height:100,backgroundColor:"rgba(0,0,0,0)",justifyContent:"center",alignItems:"center"},"mask-close-icon":{width:64,height:64}}},function(t,e,i){t.exports=function(t,e,o){"use strict";i(8);var n=(o("@weex-module/animation"),i(12));t.exports={data:function(){return{height:800,width:702,newWidth:0,topHeight:267,closeIcon:n.closeIcon,initShow:!1,isShow:!1,showClose:!1,haveOverlay:!0,hasAnimation:!0,borderRadius:0,overlayOpacity:.6,overlayCanClose:!0,maskBgColor:"#ffffff",scale:0}},created:function(){var t=this,e=t.$getConfig(),i=e.env,o=e.env.platform.toLocaleUpperCase(),n=200;"WEB"===o&&(n=0),t.topHeight=(i.deviceHeight/i.deviceWidth*750-t.height-n)/2,t.$on("overlay.body.click",function(e){t.overlayCanClose&&t.appearMask(!1),t.$dispatch("mask.overlay.click",{})})},ready:function(){var t=this,e=t.$getConfig(),i=e.env,o=i.weexVersion,n=i.appName;t.initShow&&t.appearMask(!0,1e-4),o<"0.8.0.16"&&"LX"===n&&t.appearMask(!1,1e-4)},methods:{closeIconClicked:function(){var t=this;t.appearMask(!1),t.$dispatch("mask.close.click",{})},appearMask:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:360,i=this,n=o("@weex-module/animation"),s=i.$el("wxc-mask");!i.hasAnimation&&(e=.01),t?(i.isShow=!0,i.newWidth=i.width):i.isShow=!1,n.transition(s,{styles:{opacity:t?1:0},duration:e,timingFunction:"ease-in-out",delay:0},function(e){t||(i.newWidth=0)})}}}}},function(t,e,i){var o=i(9),n=i(10),s=i(11);__weex_define__("@weex-component/wxc-overlay",[],function(t,e,i){s(i,e,t),e.__esModule&&e.default&&(i.exports=e.default),i.exports.template=o,i.exports.style=n})},function(t,e){t.exports={type:"div",classList:["wxc-overlay"],shown:function(){return this.isShow},events:{click:"overlayClicked"},style:{position:function(){return this.position},height:function(){return 2*this.height},top:function(){return-this.height},backgroundColor:function(){return"rgba(0, 0, 0,"+this.opacity+")"}}}},function(t,e){t.exports={"wxc-overlay":{position:"absolute",width:1500,flex:1,left:-750}}},function(t,e){t.exports=function(t,e,i){"use strict";t.exports={data:function(){return{isShow:!1,opacity:.6,height:1e3,position:"absolute"}},created:function(){var t=this,e=t.$getConfig(),i=e.env,o=i.platform.toLowerCase();t.height=i.deviceHeight/i.deviceWidth*750,"android"===o&&(t.position="fixed")},methods:{overlayClicked:function(t){this.$dispatch("overlay.body.click",{e:t})}}}}},function(t,e){"use strict";t.exports={closeIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAGIElEQVR4Xu1b3VUbRxSe0ex7nAqCKwhCs8/BFdhUEFyBoQLjCgwVBFcQqMDwvCNkVxBRQeBd0s35dGZ1VqP53xEiB+YcHmytdu797v+POHvhh79w/tkrAK8a8AQITCaT/fl8/gdjbJ8xttf5694+ZYxNiegH53wqhLgdDoc/tk3e1kygaZr3nPNjxtghY+xNJiMPjLEbIrqs6/o68x3erxUFYDKZvFksFp+I6KQH0y6CHzjn54PB4GI4HAKYIqcIAFtm3GS0KBC9AVBKfWCMfdV27ZLKo1Zl2PRNVVUPpn3DT8xmM5jKIeccvgKm84tHzPAZp1LKqz6q0AuApmm+cs6h7rYDpq+EEOe5zkw7T7wfIFvBIKLzuq5Pc0HIAgAqP5vNvmtJmXc/gqiqqsB4EVvV951osDeAQOSoqupdzn3JAGip/O1Q+QshxFkOITESBBDz+fyMMfbJfF6D8DFV25IA0Mx/t3j4eyHEh9TLY5i2PaPpgO3/Znz+IISAJkTnD9EAaPQnFslfCyGOtyV1F0iankvG2PvuM6nmEA1A0zQTi81/k1Ii2dnZUUoBhD9NEOq6HsYQFQWAUurcYnc7Z75l0AYCY+xCSumKUCtsggDoOA+n1z3XUkqEpmdzlFLwCaY5vKvr+sZHpBcAh93D4e0/tc2HkNa0wvl1HSOKqqGPVi8ATdOccc4/dy/XL4z2siHCS36uowMc9eoQ0Ze6rhE6rccJgEb0HyPkRdlVSaZS32XxVwiNb11a4ATAIv1HIcReSPW1FFAbMI2+1wZDDLbvI6I3VVUFEx0tONQJq4zRpwVOAJRS/3alH1KljkeGefze/ptz/nE0GiFUJR9L4vUgpfw19CKL8JzfswJg8fxR0gdhSimgv5ah5YDgyjqllMHIZdMCxtiRrXJ0AWCGlOiYPx6Pj4noL1NKKSC4mE95hyU3sPLgAmBN/VM9vwsEIgrG5RLMA/ymadBXQN3SHqsZbABgCSWPUsrknp4DBG+xUor5jj9COb5yhjZBbgAwHo9PiGjpxfXJzvpSQCjNvPZHa6bMOT8djUZI61dnAwDTdmK9v8szx4CwDea1GZiJ3EYeswFA0zQ3nHP08Jcnxm5DYckHwmKx2O/rNF33m36AiG7rukav0asByP4wvFieVAeYqgm29nmKt/eBb3GEUynl2xAA1H0gJu6GNKD93BUd1gjqkTjZ6FBKefmx+YCtAQACfSCUknwXiP8TAMn9vBjNe1YARJhAcRByAFjL5bfsBG1CLAaCxQneSylXDh6X7zIMMti8DrVm7VAEhNwwuNZl3VIitGS+LZNjkqUYezefsZTF4UToCVLhNeYDIbKXJpiN0qhU2FIMRTUhTPRzyuLSmmA2daKKITCilApWUT6VzGG+tCZYHKC1qn2WDZESmtC3IYKhR3cY4u2sGpnXmvYsQ01GeusAYSOXt2mio6Md3xKzmUFsNDDNJ4d5nznE1Ca2jrarqZPSFo/SAt1QbZsOJ31XWLqaYPPipgbYpJ/VFnd0VncyGAEtYDQ0k9Caaw5yvR3t19GYL5zlDhxzsra+38kd5AaHDI7x+JWU8qgv0SW/r5RC1Fob2ce084IAOOwK/30ppVwWM7s+SikUU+amSpS/igJAg7A289NM7xwEB/M/pZRYtgyeaAC0jWHSuxp86rdjGRJT2yI7gUGK9QOaHqj9WpeXMfZTCHEYS080ALhXF0oAwVxWxCbGUcp6WiyjjkwP6/e2XUWEPDAfvcCRBEAHBPQMTE3ADAEbol9i0U8FQW+Mfnas50LyWNeLZh73JwOgQcDGps0c8HHRbe72vsAafpLad4HPAqB9gWN9rv0YPuGKiL6FNrVcmqBLWuwAIry5BrRR3t51Ry8AdHQAcUg/zbXV7p3LX35wzvFzmOXKzMHBwW33gbu7u+U4jogOiahdl/dNpe+J6DgX3Pbu3gC0KjqbzZzb3Km2Hni+6DZ6EQBagkNr7T2BKMp4UQ2wMaZT6PZHU75ffvhwWf7oAn99y+qt+YAYqSJ/WCwWsO092DfnHMMJ02fApqfaT0wHg8FNakiLocV8pqgJ5BCw6++8ArBrCez6/hevAf8BQp52fZ98hnoAAAAASUVORK5CYII="}}])});});//v0.1.9-1488423351682;
define('npm/@ali/wxc-dialog/index', ["npm/@ali/wxc-overlay/index"], function(require, exports, module) {!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("npm/@ali/wxc-overlay/index")):"function"==typeof define&&define.amd?define("npm/@ali/wxc-dialog/index",["npm/@ali/wxc-overlay/index"],e):"object"==typeof exports?exports["npm/@ali/wxc-dialog/index"]=e(require("npm/@ali/wxc-overlay/index")):t["npm/@ali/wxc-dialog/index"]=e(t["npm/@ali/wxc-overlay/index"])}(this,function(t){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="/",e(0)}([function(t,e,o){var n=o(5),i=o(6),c=o(7);__weex_define__("@weex-component/affa19823e238ca2d80f0e92b89b7a5f",[],function(t,e,o){c(o,e,t),e.__esModule&&e.default&&(o.exports=e.default),o.exports.template=n,o.exports.style=i}),__weex_bootstrap__("@weex-component/affa19823e238ca2d80f0e92b89b7a5f",void 0,void 0)},,,,,function(t,e){t.exports={type:"div",classList:["container"],children:[{type:"wxc-overlay",attr:{isShow:function(){return this.show}}},{type:"div",classList:["wxc-dialog"],shown:function(){return this.show},style:{top:function(){return this.top}},id:"wxc-dialog",children:[{type:"div",classList:["dialog-box"],children:[{type:"div",classList:["dialog-content"],children:[{type:"text",classList:["content-title"],attr:{value:function(){return this.title}}},{type:"text",classList:["content-subtext"],attr:{value:function(){return this.content}}},{type:"div",classList:["no-prompt"],shown:function(){return this.showNoPrompt},events:{click:"noPromptClicked"},children:[{type:"image",attr:{src:function(){return this.noPromptIcon}},classList:["no-prompt-icon"]},{type:"text",classList:["no-prompt-text"],attr:{value:function(){return this.noPromptText}}}]}]},{type:"div",classList:["dialog-footer"],children:[{type:"div",classList:["footer-btn","cancel"],shown:function(){return!this.single},events:{click:"secondaryClicked"},children:[{type:"text",classList:["btn-text"],style:{color:function(){return this.secondBtnColor}},attr:{value:function(){return this.cancelText}}}]},{type:"div",classList:["footer-btn","confirm"],events:{click:"primaryClicked"},children:[{type:"text",classList:["btn-text"],style:{color:function(){return this.mainBtnColor}},attr:{value:function(){return this.confirmText}}}]}]}]}]}]}},function(t,e){t.exports={container:{width:750,position:"fixed"},"wxc-dialog":{backgroundColor:"rgba(0,0,0,0)",height:600,width:750,justifyContent:"center",alignItems:"center",position:"fixed",top:467,left:0},"dialog-box":{backgroundColor:"#FFFFFF",width:558},"dialog-content":{paddingTop:36,paddingBottom:36,paddingLeft:36,paddingRight:36},"content-title":{color:"#333333",fontSize:36,textAlign:"center",marginBottom:24},"content-subtext":{color:"#666666",fontSize:26,lineHeight:36},"dialog-footer":{flexDirection:"row",alignItems:"center",borderTopColor:"#F3F3F3",borderTopWidth:1,borderTop:1},"footer-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",flex:1,height:90},cancel:{borderRightColor:"#F3F3F3",borderRightWidth:1,borderRight:1},"btn-text":{fontSize:36,color:"#666666"},"no-prompt":{width:486,alignItems:"center",justifyContent:"center",flexDirection:"row",marginTop:24},"no-prompt-icon":{width:24,height:24,marginRight:12},"no-prompt-text":{fontSize:24,color:"#A5A5A5"}}},function(t,e,o){t.exports=function(t,e,n){"use strict";o(8);var i=o(9);t.exports={data:function(){return{show:!1,single:!1,title:"",content:"",cancelText:"取消",confirmText:"确定",top:367,positionTop:0,mainBtnColor:"#EE9900",secondBtnColor:"#666666",showNoPrompt:!0,noPromptText:"不再提示",noPromptIcon:i.unChecked,isChecked:!1}},created:function(){var t=this,e=t.$getConfig(),o=e.env,n=e.env.platform.toLocaleUpperCase(),i=200;"WEB"===n&&(i=0),t.top=0==t.positionTop?(o.deviceHeight/o.deviceWidth*750-600-i)/2:t.positionTop},methods:{secondaryClicked:function(){var t=this;t.appearDialog(!1),t.$dispatch("dialog.cancelBtn.click",{value:{name:"cancel"}})},primaryClicked:function(t){var e=this;e.appearDialog(!1),e.$dispatch("dialog.confirmBtn.click",{value:{name:"confirm"}})},appearDialog:function(t){var e=this;e.show=t},noPromptClicked:function(t){var e=this,o=e.isChecked;e.noPromptIcon=o?i.unChecked:i.checked,e.isChecked=!o,e.$dispatch("dialog.noPrompt.click",{value:{isChecked:e.isChecked}})}}}}},function(e,o){e.exports=t},function(t,e){"use strict";t.exports={checked:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAADsUlEQVRYCe2Za4hNURTH/3vf91teMwx5k7xf4zGRPJopJCVfaDDKK4R88EnKB4UiMh4pCfFB+TBDEVFKJmHIUIy3YR7mjjn3zr1zH+ccrX2diUz3njuOO1fd/eGeffZae63fXevsszt7MfxsNXth7dN32AbO+UpVxRjG4NZkmbyqKoKMoUZRlItNjW9OjdmLKPln9PPpxIACO3NUMmBiJqFS+VKB6nY1vHjgps91jCLZN39EFUFy32A4p++CtWAWmLVbAgo1GkS07j5CVYegtL4HwTbWv57OGsuHbeWcHyVI37Ir4DZvqj+aEbkSkdB6dbmAVRRlG6dnkjxTJLMFkniIhZhEn/OVnBYO3VC6s61pTMTItdXdXc9ksuBoTMTIkylmkywHanQ2chHNRdToCKSyF6t/DP/5IgRubkmlKuRmXVoGK8UbnyFwfR3UWBtiDU90Wc/4Yop/ewHpWpmAhNkBz4Ij2Qca97+GdG0t1KgEmGzwlpyEpd+07AKVv7+FVFkKtb0F4BZ4isthKZipC5KUMpJ6WfoIqWI11HAzwM3wLDwG68DZuiEzAioH6iBVlEIJNQDMBPf8w7AOnpcWZNqgqhxLy4HcVp+ADH4BGId73kHYhhanZUNT1p361opS+M8VIvrhjjY36VUJNSUgA5/Ep5lr7n7Yhi9OOieZUDeoIn0AYm0I3NiMSG1FMptQwn5IlavFZwQpuubsg33ksqRzUgl1g3pKToM5egOqjODtXWh/cblT20qkVbyC5JZaIXcV7YF99IpOddMZ1A1q7jUKvqWXwN39Aahou7cH4adnfvOlRIMJyOaXYtw5YzfsY1f9ptPVG92g5MDkGwTv0svgviHCX+jBAYQeJnYW2g4D18sgNz0XMkfhTjgmlHWV6495ae/1Jne+iCztMHLzS4Qfl4PSLftfId5QnYCcsgXOSRv/cPY3A2lFVHPEHT3hXXIB5rzJYihScxHxrw9F3z5xPZxTt2mqhl27BEreuc0D76KzsAwo6oCxj1sD189v8Y5Bgzppp/5Xv8zigKfkFMKPjoPZe8Axfu2vYkP7fwVKJMxkhbNwh6FQnRnrcuo7M/Yvx3KgRkc3F1HDI0pn5mSUTnqzrWlMxEjHjjUESMfR2dY0JmLkVH0gQHFmHpGyhpWOxomJGjGa1kxrqXa5ey1B5Ht+9N1NcFceTK488SLvDmpRbPh4F8Fb2zuKDU0NtRv/m/KNeD1RHYdKJFR9AFClLbBuiWhicVcRCzERG3H8AAOtX+I/9HP9AAAAAElFTkSuQmCC",unChecked:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAABmElEQVRYCe2ZoU7DUBSGz7mi6ZaR4FEz25Ia3F4AiUHvAVCgeQQ0jgfoGyB5gTpMkw3R1uBJaNqmYof8S5tULWE9HVtyrlhFc//75eu5E+cwNSuOY280Gt0z84qZAyKatO+O/MxFJBaRsCzL1yAIapzP+NlsNlee570x8/WRofYeJyIfdV3fzufzL4bJ8XgcAVJEPpn5qaqq98Vi8bM3ZaCX6/X6wvf9GxF5ZuYZYIuiWHKSJA/OuRdAEtFyOp1+D8Twp9g0TS+JCAJn2+320aEmkQCTpwIJHrCAqWFbARQXh/C58Tyl1TKB0bW3+79qcp+YDtMEoGexDFT7M5lRM6ptQDvPatSMahvQzrMaNaPaBrTzrEbNqLYB7TyrUTOqbUA7z2rUjGob0M6zGh3CaI5QdHq1w/vmdZhyh8Y+AtGO7husvb9lAiNAQxyAnnnTjtY+76A8sICpYQsdRiRo6KNXjp55lmV3HeUHHdJnE84GQ9u/BxsYz2Z8s/t7whwHIxJMH0QkIqLdBetjpsdeDMQisIAJbMj6Bdz9uoyhg7P4AAAAAElFTkSuQmCC"}}])});});define("npm/@ali/wx-bridge/index",[],function(require,exports,module){!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("npm/@ali/wx-bridge/index",[],t):"object"==typeof exports?exports["npm/@ali/wx-bridge/index"]=t():e["npm/@ali/wx-bridge/index"]=t()}(this,function(){return function(e){function t(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="/",t(0)}({0:function(e,t,i){"use strict";var o={NavigatorBar:i(137),Navigator:i(33),MTop:i(23),User:i(24),Share:i(114),UserTrack:i(124),Geolocation:i(22),Wangxin:i(119),Alipay:i(7),Utils:i(9),ModuleLoader:i(8)};e.exports=o},7:function(e,t,i){"use strict";var o=i(8),n=o.loadWeexModule,r=(o.loadAliWeexModule,n("tripAlipay")),a=i(9),s=a.env,l={tradePay:function(e,t,i,o){t=Object.assign({},t);var a=n("modal");return t.tradeNO||delete t.tradeNO,t.orderStr||delete t.orderStr,t.orderStr||t.tradeNO?void(s.isTrip(e)?r.tradePay(t,i,o):s.isWeb(e)||s.isTaobao(e)||s.isTmall(e)):void a.toast({message:"缺少必要的参数!",duration:2})}};e.exports=l},8:function(e,t){"use strict";var i=function(e,t){var i=void 0;return __weex_define__("@weex-temp/x",function(o){i=o(e+"/"+t)}),i},o={loadWeexModule:function(e){return i("@weex-module",e)},loadAliWeexModule:function(e){return i("@aliweex-module",e)}};e.exports=o},9:function(e,t,i){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=i(10),r={_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===r._typeof(e)},isString:function(e){return"string"==typeof e},paramsToObj:function(e){e=r.isString(e)?e:"";for(var t={},i=e.split("&"),o=0;o<i.length;o++){var n=i[o],a=n.split("="),s=a[0],l=a[1];s&&(t[s]=l)}return t},objToParams:function(e){var t=[];for(var i in e)t.push(i+"="+e[i]);return t.join("&")},env:{isTaobao:function(e){var t=e.$getConfig().env.appName,i=["TB","tb","taobao","Taobao","淘宝"];return i.indexOf(t)>=0},isTaobaoWeb:function(e){return r.env.isTaobao(e)&&r.env.isWeb(e)},isTaobaoNative:function(e){return r.env.isTaobao(e)&&!r.env.isWeb(e)},isTmall:function(e){var t=e.$getConfig().env.appName,i=["TM","tm","tmall","Tmall","天猫"];return i.indexOf(t)>=0},isTmallWeb:function(e){return r.env.isTmall(e)&&r.env.isWeb(e)},isTmallNative:function(e){return r.env.isTmall(e)&&!r.env.isWeb(e)},isTrip:function(e){var t=e.$getConfig().env.appName;return"LX"===t},isWeb:function(e){var t=e.$getConfig().env.platform;return"object"===("undefined"==typeof window?"undefined":o(window))&&"web"===t.toLowerCase()},isIOS:function(e){var t=e.$getConfig().env.platform;return"ios"===t.toLowerCase()},isAndroid:function(e){var t=e.$getConfig().env.platform;return"android"===t.toLowerCase()}},UrlParser:n};e.exports=r},10:function(e,t,i){"use strict";function o(e){var t=d.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function n(e,t){for(var i=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=i.length,n=i[o-1],r=!1,a=0;o--;)"."===i[o]?i.splice(o,1):".."===i[o]?(i.splice(o,1),a++):a&&(0===o&&(r=!0),i.splice(o,1),a--);return r&&i.unshift(""),"."!==n&&".."!==n||i.push(""),i.join("/")}function r(e,t,i){if(!(this instanceof r))return new r(e,t,i);var a,s,d,f,h,m,g=p.slice(),v=typeof t,y=this,b=0;for("object"!==v&&"string"!==v&&(i=t,t=null),i&&"function"!=typeof i&&(i=c.parse),t=u(t),s=o(e||""),a=!s.protocol&&!s.slashes,y.slashes=s.slashes||a&&t.slashes,y.protocol=s.protocol||t.protocol||"",e=s.rest,s.slashes||(g[2]=[/(.*)/,"pathname"]);b<g.length;b++)f=g[b],d=f[0],m=f[1],d!==d?y[m]=e:"string"==typeof d?~(h=e.indexOf(d))&&("number"==typeof f[2]?(y[m]=e.slice(0,h),e=e.slice(h+f[2])):(y[m]=e.slice(h),e=e.slice(0,h))):(h=d.exec(e))&&(y[m]=h[1],e=e.slice(0,h.index)),y[m]=y[m]||(a&&f[3]?t[m]||"":""),f[4]&&(y[m]=y[m].toLowerCase());i&&(y.query=i(y.query)),a&&t.slashes&&"/"!==y.pathname.charAt(0)&&(""!==y.pathname||""!==t.pathname)&&(y.pathname=n(y.pathname,t.pathname)),l(y.port,y.protocol)||(y.host=y.hostname,y.port=""),y.username=y.password="",y.auth&&(f=y.auth.split(":"),y.username=f[0]||"",y.password=f[1]||""),y.origin=y.protocol&&y.host&&"file:"!==y.protocol?y.protocol+"//"+y.host:"null",y.href=y.toString()}function a(e,t,i){var o=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(i||c.parse)(t)),o[e]=t;break;case"port":o[e]=t,l(t,o.protocol)?t&&(o.host=o.hostname+":"+t):(o.host=o.hostname,o[e]="");break;case"hostname":o[e]=t,o.port&&(t+=":"+o.port),o.host=t;break;case"host":o[e]=t,/:\d+$/.test(t)?(t=t.split(":"),o.port=t.pop(),o.hostname=t.join(":")):(o.hostname=t,o.port="");break;case"protocol":o.protocol=t.toLowerCase(),o.slashes=!i;break;case"pathname":o.pathname=t.length&&"/"!==t.charAt(0)?"/"+t:t;break;default:o[e]=t}for(var n=0;n<p.length;n++){var r=p[n];r[4]&&(o[r[1]]=o[r[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o}function s(e){e&&"function"==typeof e||(e=c.stringify);var t,i=this,o=i.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var n=o+(i.slashes?"//":"");return i.username&&(n+=i.username,i.password&&(n+=":"+i.password),n+="@"),n+=i.host+i.pathname,t="object"==typeof i.query?e(i.query):i.query,t&&(n+="?"!==t.charAt(0)?"?"+t:t),i.hash&&(n+=i.hash),n}var l=i(11),u=i(12),c=i(13),d=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,p=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]];r.prototype={set:a,toString:s},r.extractProtocol=o,r.location=u,r.qs=c,e.exports=r},11:function(e,t){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},12:function(e,t,i){"use strict";var o,n=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,r={hash:1,query:1};e.exports=function(e){e=e||("undefined"==typeof global?{}:global).location||{},o=o||i(10);var t,a={},s=typeof e;if("blob:"===e.protocol)a=new o(unescape(e.pathname),{});else if("string"===s){a=new o(e,{});for(t in r)delete a[t]}else if("object"===s){for(t in e)t in r||(a[t]=e[t]);void 0===a.slashes&&(a.slashes=n.test(e.href))}return a}},13:function(e,t){"use strict";function i(e){for(var t,i=/([^=?&]+)=?([^&]*)/g,o={};t=i.exec(e);o[decodeURIComponent(t[1])]=decodeURIComponent(t[2]));return o}function o(e,t){t=t||"";var i=[];"string"!=typeof t&&(t="?");for(var o in e)n.call(e,o)&&i.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return i.length?t+i.join("&"):""}var n=Object.prototype.hasOwnProperty;t.stringify=o,t.parse=i},22:function(module,exports,__webpack_require__){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_require=__webpack_require__(8),loadWeexModule=_require.loadWeexModule,Geolocation=loadWeexModule("geolocation"),_require2=__webpack_require__(9),env=_require2.env,MTop=__webpack_require__(23),ERR_MESSAGE={"NO PERMISSION":'亲，要开启网络定位才能查看哦！请在"设置"-"位置和安全"-勾选"使用无线网络"！',PERMISSION_DENIED:'亲，要开启网络定位才能查看哦！请在"设置"-"位置和安全"-勾选"使用无线网络"！',PARAMS_ERROR:"参数错误",POSITION_UNAVAILABLE:"定位失败",LOCATION_ERROR:"定位失败",TIMEOUT_MSG:"亲，位置信息获取超时，稍后再试吧！",LOCATION_TIME_OUT:"亲，位置信息获取超时，稍后再试吧！",UNKNOW_ERROR:"未知错误",NO_SUPPORT:"亲，您的设备不支持定位功能！"},DEFAULT_TIME_OUT=8e3,WXGeolocation={getCurrentPosition:function getCurrentPosition(ctx,options,callback){var self=this,needCityCode=options.needCityCode,timeout=options.timeout;if(needCityCode=!(needCityCode===!1),timeout=timeout||DEFAULT_TIME_OUT,Geolocation.getCurrentPosition)Geolocation.getCurrentPosition(function(e){needCityCode&&(e.address&&!e.address.cityCode||!e.address)?self.fetchAddressByPosition(e.coords,callback):callback({status:"SUCCESS",coords:e.coords,address:e.address})},function(e){callback({message:e.msg||ERR_MESSAGE[e.errMsg]||"未知错误",status:e.ret&&e.ret[0]||e.errMsg||"UNKNOW_ERROR"})},{enableHighAccuracy:!0,address:!0});else if(env.isTrip(ctx)){var nativeCall=loadWeexModule("nativeCall");nativeCall.doService({service:"location",actor:"get_gps_info"},function(e){try{e=JSON.parse(e)}catch(e){callback({message:"解析定位信息失败",status:"GET_GPS_ERROR"})}if(needCityCode){var t=e,i=t.lat,o=t.long;self.fetchAddressByPosition({latitude:i,longitude:o},callback)}else callback({status:"SUCCESS",coords:{latitude:lat,longitude:long}})})}else env.isWeb(ctx)&&navigator.geolocation.getCurrentPosition(function(position){try{position="object"===("undefined"==typeof position?"undefined":_typeof(position))?position:JSON.parse(position)}catch(err){position=eval("("+position+")")}needCityCode?self.fetchAddressByPosition(position,callback):callback({status:"SUCCESS",coords:position})},function(e){var t=e.code,i=e.message;callback({status:t,message:i||ERR_MESSAGE[t]})},{timeout:timeout,enableHighAccuracy:!0})},fetchAddressByPosition:function(e,t){var i=e.latitude,o=e.longitude;MTop.request({api:"mtop.trip.common.getCityCodeByLatitudeAndLongitude",version:"1.0",data:{latitude:i,longitude:o,includeGJ:1}},function(e){var n=e.data;e.ret,t({status:"SUCCESS",coords:{latitude:n.latitude||i,longitude:n.longitude||o},address:{city:n.cityName,cityCode:n.cityCode}})},function(e){t({message:"获取定位地址信息失败",status:"GET_ADDR_ERROR"})})}};module.exports=WXGeolocation},23:function(e,t,i){"use strict";var o=i(8),n=o.loadWeexModule,r=n("mtop"),a=i(24),s={request:function(e,t,i){var o=this,n=e.api,l=e.version,u=e.data,c=e.params,d="0",p=function(){r.send({api:n,v:l,param:u,ecode:d},function(e){var o={api:n,v:l,data:{},retType:-1,ret:["FAIL_RET_PARSE_ERROR::返回数据解析失败"]};if(!e)return void(i&&i(o));if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return void(i&&i(o))}if(e.result&&"string"==typeof e.result&&(e=e.data,"string"==typeof e))try{e=JSON.parse(e)}catch(e){return void(i&&i(o))}if(e.ret&&/SUCCESS/i.test(e.ret[0]))try{t&&t(e)}catch(e){}else i&&i(e)})};c&&c.needLogin?(d="1",a.isLogin(function(n){n?p.call(o):a.login(function(n){"success"===n.status&&s.request.call(o,e,t,i)})})):p()}};e.exports=s},24:function(e,t,i){"use strict";var o=i(8),n=o.loadWeexModule,r=n("user"),a={login:function(e){r.login(function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(e){}e(t)})},isLogin:function(e){a.getUserInfo(function(t){e(t.isLogin)})},getUserInfo:function(e){r.getUserInfo(function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(e){}t.isLogin=t.isLogin===!0||"true"===t.isLogin,e(t)})},logout:function(e){r.logout(function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(e){}e(t)})}};e.exports=a},33:function(e,t,i){"use strict";var o=i(8),n=o.loadWeexModule,r=i(10),a=function(e){return"http://h5."+(e||"m")+".taobao.com/trip/wx-common/index.html"},s=i(9),l=s.env,u={_loadNavigator:function(e){var t=n("navigator");return l.isTrip(e)&&(t=n("tripNavigator")),t},push:function(e,t,i){var o=this,s=e.$getConfig(),l=s.bundleUrl,u=o._loadNavigator(e);t.animated=""+("true"===t.animated||t.animated===!0);var c=function(e){u.push(Object.assign(t,{url:e}),i)};/_wx_tpl\=/.test(l)||(l=a()+"?_wx_tpl="+l);var d=new r(l,!0).query._wx_tpl,p=t.url;/^http(s)?/.test(p)?c(p):!function(){var e=new r(p,l,!0);e.pathname=e.pathname.replace(/\.we/,".html");var t=e.toString(),i=p.split("?");i[0]=i[0].replace(/\.(we|html)/,".js");var o=new r(i[0],d,!0),s=o.hostname.match(/\.(\w+)\.taobao\.com/);s=s&&s.length>1?s[1]:"m";var u=o.toString();n("stream").fetch({method:"HEAD",url:t},function(t){if(200===t.status)delete e.search,e.query._wx_tpl=u,c(e.toString());else{var i=e.query;e=new r(a(s),!0),Object.assign(e.query,i,{_wx_tpl:u}),c(e.toString())}},function(){})}()},pop:function(e,t,i){this._loadNavigator(e).pop(t,i)},setNavBarTitle:function(e,t,i){var o=this._loadNavigator(e);l.isWeb(e)?t.title&&(window.document.title=t.title):o.setNavBarTitle(t,i)},setNavBarRightItem:function(e,t,i){this._loadNavigator(e).setNavBarRightItem(t,i)},setNavBarMoreItem:function(e,t,i){this._loadNavigator(e).setNavBarMoreItem(t,i)},clearNavBarRightItem:function(e,t){this._loadNavigator(e).clearNavBarRightItem(null,t)},clearNavBarMoreItem:function(e,t){this._loadNavigator(e).clearNavBarMoreItem(null,t)},callPhone:function(e,t,i){this._loadNavigator(e).push({url:"tel://"+t},i)}};e.exports=u},114:function(e,t,i){"use strict";var o=i(8),n=o.loadWeexModule,r=n("share"),a=i(9),s=a.env,l=["alipay","contacts","copy","dingtalk","guangjie","momo","present","qq","qrcode","sinaweibo","wangxin","wxfriend","wxtimeline"],u={open:function(e,t,i){t=Object.assign({},t),s.isWeb(e)?i():s.isTaobao(e)?Array.isArray(t.targets)?t.targets=t.targets.join(","):t.targets=l.join(","):s.isTmall(e)&&(t["pc-image"]=t["pc-image"]||t.image,t["mobile-image"]=t["mobile-image"]||t.image,t["iphone-link"]=t["iphone-link"]||t.url,t["ipad-link"]=t["ipad-link"]||t.url,t["tmallapp-link"]=t["tmallapp-link"]||t.url,t["aliapp-link"]=t["aliapp-link"]||t.url,t["mobile-link"]=t["mobile-link"]||t.url,t["pc-link"]=t["pc-link"]||t.url,t["all-link"]=t["all-link"]||t.url,t["share-title"]=t["share-title"]||t.title,t["share-intro"]=t["share-intro"]||t.text),r.doShare(t,i)}};e.exports=u},119:function(e,t,i){"use strict";var o=i(8),n=o.loadWeexModule,r=(o.loadAliWeexModule,n("tripWx")),a=i(9),s=a.env,l={openChat:function(e,t,i,o){t=Object.assign({},t),s.isTrip(e)?r.openWwChat(t,i,o):s.isWeb(e)||s.isTaobao(e)||s.isTmall(e)},openConversation:function(e,t,i,o){s.isTrip(e)?r.openWwConversation(t,i,o):s.isWeb(e)||s.isTaobao(e)||s.isTmall(e)}};e.exports=l},124:function(e,t,i){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),r=i(8),a=r.loadWeexModule,s=a("userTrack"),l=i(10),u=i(9),c=u.isString,d=u.isPlainObject,p=u.objToParams,f=u.paramsToObj,h=u.env,m=function(e,t,i){var o=d(i)?i:f(i);return{logkey:t,weex:o.weex?o.weex:"1",autosend:"1",url:encodeURIComponent(e),cna:"",extendargs:JSON.stringify({}),isonepage:0}},g=function(e,t){var i=d(e)?e:f(e);return i.weex=i.weex?i.weex:"1",i.autosend="1",t?i:p(i)},v=function(e,t,i,o){return[e,t,i,o].join(".")},y=function(){function e(t,i,n){o(this,e),this.spmA=i,this.spmB=n,this.ctx=t;var r=t.$getConfig(),a=r.env,s=r.bundleUrl,u=new l(s,!0);this.env=a,this.bundleUrl=s,this.pageName=decodeURIComponent(u.query._wx_tpl||u.path),this.spmUrl=u.query.spm||"0.0.0.0",this.spmParams={"spm-cnt":v(i,n,"0","0"),"spm-url":this.spmUrl},h.isWeb(t)&&(window._SPM_a=i,window._SPM_b=n)}return n(e,[{key:"_extendParams",value:function(e){return e=e||{},e=g(e,!0),e.url=encodeURIComponent(this.bundleUrl),e=Object.assign({},this.spmParams,e)}},{key:"pageEnter",value:function(e){return s.commit("enter",this.pageName,"",this._extendParams(e||{}))}},{key:"commit",value:function(e,t,i){return!!(c(e)&&c(t)&&d(i))&&(i=this._extendParams(i),s.commit(e,this.pageName,t,i),!0)}},{key:"commitEvent",value:function(e,t,i,o,n){var r=this.pageName;if(t=c(t)?t:"",i=c(i)?i:"",o=c(o)?o:"",n=d(n)?n:{},n=this._extendParams(n),c(e)){if("CLK"===e||"click"===e)return s.commitut("click",2101,r,t,"","","",n),!0;if("EXP"===e||"pv"===e)return s.commitut("expose",2201,r,"",t,i,o,n),!0;if("enter"===e)return s.commitut(h.isTmallNative(this.ctx)?"enterEvent":"enter",2001,r,t,"","","",n),!0;if("other"===e||"19999"===e)return"19999"===e?s.commitEvent(r,19999,t,i,o,n):s.commitut("other",19999,r,"",t,"","",n),!0}return!1}},{key:"click",value:function(e,t){t=this._extendParams(t),"string"!=typeof t._h5ea&&(t._h5ea=JSON.stringify(t._h5ea));var i=e.split("?");return t._lka=i[1]||"",e=v.apply(null,[this.spmA,this.spmB].concat(i[0].split("."))),this.commit("click",e,t)}},{key:"exposure",value:function(e,t,i,o){var n=this.pageName,r=!1,a=m(this.bundleUrl,n,e);return d(t)&&Object.assign(a,t),r=s.commitut?this.commitEvent("EXP",e,t||"",i||"",a,o):this.commit("expose","",a)}},{key:"other",value:function(e,t,i){var o=void 0,n=this.pageName;return i&&(o=m(n,e),o._lka=JSON.stringify({gokey:arguments[3],gmkey:arguments[4]})),this.commitEvent(i?"19999":"other",i?arguments[1]:e,"","",o?o:t)}},{key:"customAdvance",value:function(e,t,i,o,n){s.customAdvance&&s.customAdvance(this.pageName,e,t,i,o,n)}},{key:"goldlogClick",value:function(e,t){t=c(t)?t:"";var i=t.split(";")||[],o=i[0]||"",n=i[1]||"",r=void 0;return o=o.replace(/^gostr\=/,""),n=n.replace(/^locaid\=/,""),i=i.slice(2),r=i.join(""),this.goldlog([o,this.spmA,this.spmB,e,n].join("."),"CLK",r,"")}},{key:"goldlog",value:function(e,t,i,o,n){if(e=c(e)?e:"",t=c(t)?t:"",i=c(i)?i:"",o=c(o)?o:"",n=c(n)?n:this.spmParams["spm-cnt"],!h.isWeb(this.ctx)){var r="gokey="+i+"&gmkey="+t;if(""===t)return!1;if("CLK"===t||"click"===t){var a=m(this.bundleUrl,e,r);return n&&(a["spm-url"]=this.spmParams["spm-url"],h.isTrip(this.ctx)?a["spm-cnt"]=n:a.spm=n),a._lka=JSON.stringify({gokey:i,gmkey:t}),this.customAdvance(2101,e,"","",a)}return"EXP"===t||"pv"===t?this.exposure(e,r,{_lka:JSON.stringify({gokey:i,gmkey:t})}):this.other(e,r,i,t)}if(window.goldlog&&window.goldlog.record){var s=function(e){e=(e||"").split("#")[0].split("?")[0];var t=e.length,i=function(e){var t,i=e.length,o=0;for(t=0;t<i;t++)o=31*o+e.charCodeAt(t);return o};return t?i(t+"#"+e.charCodeAt(t-1)):-1};return window.goldlog.record(e,t,i,"H"+s(e)),!0}}}]),e}();e.exports=y},137:function(e,t,i){"use strict";var o=i(8),n=o.loadWeexModule,r=i(9),a=r.env,s=function(){},l={_loadNavbar:function(e){("undefined"==typeof global?{}:global).console&&("undefined"==typeof global?{}:global).console.warn("Deprecated, please switch to weex module navigationBar");var t=n("navigationBar");return a.isTrip(e)&&(t=n("tripNavigatorBar"),t&&0!==Object.keys(t).length||(t=n("tripNavBar")),t&&0!==Object.keys(t).length||(t=n("tripNavigator"))),t},show:function(e,t,i){var o=this._loadNavbar(e);i=i||s,o.show&&o.show(t,i)},hide:function(e,t,i){var o=this._loadNavbar(e);i=i||s,o.hide&&o.hide(t,i)}};e.exports=l}})})}),define("npm/@ali/pi-weex/index",function(e,t,i){var o=e("@weex-module/dom"),n=e("npm/@ali/wx-bridge/index")||{},r=n.Navigator,a=n.UserTrack,s=n.Utils,l=0,u=5,c=5,d=5,p=0,f=1e3,h=100;i.exports={data:function(){return{bgColor:"transparent",paddingBottom:0,renderCells:[],modsdata:[],pageData:{},refreshDisplay:"hide",loadingDisplay:"show",loadingText:"加载更多...",listHeightOffset:1334}},init:function(){},created:function(){this._app.config=this.$getConfig(),this._app.bridge=n,this._app.pageData=this.pageData,this._app.isH5=s.env.isWeb(this),this._app.isTmall=s.env.isTmall(this),this._app.isTaobao=s.env.isTaobao(this),this._app.userTrack=new a(this,this.pageData.spmA,this.pageData.spmB),this._app.flattenDom=this.flattenDom,(s.env.isIOS(this)||s.env.isAndroid(this))&&(this.listHeightOffset=this.$getConfig().env.deviceHeight-h);var e=this.modsdata;this.bgColor=this.pageData.backgroundColor,r.setNavBarTitle(this,{title:this.pageData.title||""}),this.initSpm();for(var t=this.modsdata.length,i=0;i<t;i++)if("upx/qua-mod/wxc-nav"===this.modsdata[i].name){l=i;break}this.refresh();var u=0,c=0;this.$on("appendCells",function(e){function t(){if(this.renderCells[e.index]){var n=i.splice(0,o),r=this.renderCells.slice(0);Array.prototype.push.apply(r[e.index],n),this.renderCells=r,i.length>0?setTimeout(t.bind(this),0):c++,u===c&&this.$broadcast("appendCellsFinished",{})}}e=e.detail?e.detail:e;var i=e.data?e.data.slice(0):[],o=parseInt(e.onceCount,10)||d;o=o<1?i.length:o,u++,setTimeout(t.bind(this),0)}.bind(this)),this.$on("removeCells",function(e){if(e=e.detail?e.detail:e,e&&"number"==typeof e.index){var t=e.index,i=this.renderCells.slice(0),o=i[t];if(o){var n=e.from||0,r=e.to||o.length;o.splice(n,r),this.renderCells=i}}}.bind(this)),this.initElevatorMethods(),this.$on("rootScrollTo",function(t){t=t.detail?t.detail:t;var i=parseInt(t.index,10)||0,n=parseInt(t.offset,10)||0,r=e[i]||{},a=t.moduleId||r.moduleId,s=this.$el(a);s&&o.scrollToElement(s,{offset:n})}.bind(this)),this.$on("updatePaddingBottom",function(e){e=e.detail?e.detail:e,this.paddingBottom=parseInt(e,10)||0}.bind(this)),this.$on("rootBroadcast",function(e){e=e.detail?e.detail:e;var t="string"==typeof e.moduleName?e.moduleName:null,i="string"==typeof e.methodName?e.methodName:null,o="string"==typeof e.moduleId?e.moduleId:"",n=e.data,r=function(e){e&&"function"==typeof e[i]&&e[i](n)};if(i){if(o){var a=this.$vm(o);if(a)return void r(a)}else if(!t)return;for(var s=0;s<this.renderCells.length;s++)for(var l=this.renderCells[s],u=0;u<l.length;u++){var c=l[u];if(c.name===t||"*"===t){var a=this.$vm(c.moduleId);r(a)}}}}.bind(this))},ready:function(){setTimeout(function(){this.$broadcast("rootReady",{})}.bind(this),200)},methods:{initSpm:function(){this.sendSpm()},sendSpm:function(){this._app.userTrack.pageEnter()},initElevatorMethods:function(){var e=0;this.$on("elevatorSelectedIndex",function(t){t=t.detail?t.detail:t,s.isPlainObject(t)&&(t=0),t=String(t);for(var i=this.flattenDom(this._app.doc.body,4),n=0,r=0,a=null;n<i.length;){var l=i[n];if(l.attr.elevatorid&&t===String(r)){a=l;break}l.attr.elevatorid&&r++,n++}e=Date.now(),a&&o.scrollToElement(a.ref,{offset:-84})}.bind(this)),this.$on("elevatorTitleAppear",function(t){if(!(Date.now()-e<500)){t=t.detail?t.detail:t;for(var i=this.flattenDom(this._app.doc.body,4),o=0,n=0;o<i.length;){var r=i[o];if(r.attr.elevatorid===t.moduleId)break;r.attr.elevatorid&&n++,o++}t.index=n,this.$broadcast("updateSelectedIndex",t)}}.bind(this)),this.$on("elevatorUpdateFloor",function(e){this.$broadcast("updateFloor",e)}.bind(this))},_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isNumber:function(e){return"number"==typeof e},flattenDom:function(e,t){function i(e){var t=Object.assign({},e);return delete t.pureChildren,delete t.children,t}t=this.isNumber(t)?t:-1;var o=[];if(!s.isPlainObject(e))return o;e.level=0;var n=[e];do{var r=n.shift();if(r){var a=Array.isArray(r.pureChildren)?r.pureChildren:[];if(o.push(i(r)),a.length){for(var l=r.level+1,u=a.length;u--;)a[u].level=l;(t&&r.level<t||t<0)&&(n=n.concat(a))}}}while(n.length>0);return o},refresh:function(){if("show"!==this.refreshDisplay){this.refreshDisplay="show",p=0,this.renderCells=[],this.initAppendCells(u);var e=this;setTimeout(function(){e.$broadcast("refreshRightNav",{})},100),this.refreshDisplay="hide"}},initAppendCells:function(e){var t=this.modsdata.slice(0);if(!(p>=t.length)&&(e=parseInt(e,10)||t.length,p<t.length)){var i=parseInt(e,10)||3,o=p,n=p+i;n=n<t.length?n:t.length,n=n<=l?n:t.length;for(var r=o;r<n;r++)this.renderCells.$set(r,[t[r]]);p=n}},loadMore:function(){this.$broadcast("loadMore",{}),this.initAppendCells();var e=this;setTimeout(function(){e.$broadcast("refreshRightNav",{})},100)},viewappear:function(){this.$broadcast("pageViewAppear",{}),this.isBack===!0&&(this.sendSpm(!0),this.isBack=!1)},viewdisappear:function(){this.$broadcast("pageViewDisappear",{}),this.isBack=!0},onRefresh:function(){this.refresh()},onLoading:function(){this.loadingDisplay="show",this.initAppendCells(c),this.loadingDisplay="hide",this.$broadcast("loadingFinished")}}},i.exports.style={},i.exports.template={type:"div",style:{backgroundColor:function(){return this.bgColor},paddingBottom:function(){return this.paddingBottom||0}},events:{viewappear:"viewappear",viewdisappear:"viewdisappear"},children:[{type:"list",events:{loadmore:"loadMore"},attr:{loadmoreoffset:f},style:{paddingBottom:function(){return s.env.isIOS(this)?100:0},height:function(){return this.listHeightOffset},"flex-direction":"column"},children:[{type:function(){var e=["upx/qua-mod/wxc-nav"],t=this.name||"";return e.indexOf(t)>=0||this.isSticky===!0?"header":"cell"},events:{},repeat:function(){this.modsdata.forEach(function(e){e.name=e.fullName});for(var e=[],t=0;t<this.renderCells.length;t++)e.push.apply(e,this.renderCells[t]);return e},append:"tree",children:[{id:function(){return this.id||""},type:function(){return this.name},attr:{id:function(){return this.id||""},index:function(){return this.index||0},moduleId:function(){return this.id||""},name:function(){return this.name||""},spmC:function(){return this.id||""},data:function(){return this.data||{}},attrs:function(){return this.attrs||{}}}}]}]}]}});


 

  
    ;
define("upx/qua-mod/wxc-lottery-btn/index", ["npm/@ali/wxc-dialog?name=wxc-dialog/index"], function(require,exports,module) {

 var __WEBPACK_EXTERNAL_MODULE_6__=require("npm/@ali/wxc-dialog?name=wxc-dialog/index");
 module.exports = /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)
	
	__weex_define__('@weex-component/upx/qua-mod/wxc-lottery-btn', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "id": function () {return this.id},
	  "style": {
	    "paddingTop": function () {return this.attrs.paddingTop},
	    "paddingBottom": function () {return this.attrs.paddingBottom},
	    "paddingLeft": function () {return this.attrs.paddingLeft},
	    "paddingRight": function () {return this.attrs.paddingRight}
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "bg"
	      ],
	      "shown": function () {return this.data.moduleinfo.btnimg},
	      "attr": {
	        "src": function () {return this.data.moduleinfo.btnimg}
	      },
	      "style": {
	        "width": function () {return this.bgimgWidth},
	        "height": function () {return this.bgimgHeight}
	      },
	      "events": {
	        "click": "openDialog"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "shown": function () {return !this.data.moduleinfo.btnimg},
	      "events": {
	        "click": "onclick"
	      },
	      "attr": {
	        "value": "点我抽奖，请设置背景图片"
	      }
	    },
	    {
	      "type": "wxc-dialog",
	      "id": "dialog",
	      "attr": {
	        "title": "阿里旅行协议",
	        "content": "为保障消费者权益，阿里旅行·去啊服务保障全面升级，凡在阿里旅行·去啊购买机票、酒店、客栈、门票、度假产品全面享有成行保障和如实描述",
	        "single": function () {return this.single},
	        "showNoPrompt": function () {return this.showNoPrompt}
	      }
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "text": {
	    "fontSize": 30
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var modal = __weex_require__('@weex-module/modal');
	var UAServer = __webpack_require__(4);
	
	__webpack_require__(6);
	
	module.exports = {
	  data: function () {return {
	    id: '',
	    index: '',
	    name: '',
	    data: {},
	    attrs: {},
	    pageData: {},
	    bgimgWidth: '',
	    bgimgHeight: '',
	    showNoPrompt: true,
	    single: false
	  }},
	  created: function created() {
	    if (this.data.moduleinfo.btnimg) {
	      var match = this.data.moduleinfo.btnimg.match('(\\d\+)\\-(\\d\+)\\.');
	      this.bgimgWidth = match[1];
	      this.bgimgHeight = match[2];
	    }
	
	    if (!this.isUseWua()) {
	      this.uaserver = UAServer.getInstance();
	    }
	    this.useWua = this.isUseWua();
	    this.lotterying = false;
	    this.nativeConfig = {
	      needLogin: true
	    };
	  },
	
	  methods: {
	    openDialog: function openDialog() {
	      var self = this;
	      var dialogDemoEl = self.$vm('dialog');
	      debugger;
	      dialogDemoEl.appearDialog(true);
	    },
	    onclick: function onclick(e) {},
	    lottery: function lottery() {
	      var self = this;
	      if (this.lotterying) {
	        return;
	      }
	      this.lotterying = true;
	
	      if (this.useWua) {
	        this._lottery();
	      } else {
	        this.uaserver.ready(function () {
	          self._lottery();
	        });
	      }
	    },
	    _lottery: function _lottery() {
	      var _this = this;
	
	      var moduleinfo = this.data.moduleinfo,
	          actinfo = moduleinfo.actinfo,
	          useWua = this.useWua,
	          nativeConfig = {
	        needLogin: true,
	        timeout: 15000
	      },
	          param = {
	        subActId: actinfo.subActId,
	        asac: actinfo.asac
	      },
	          api = 'mtop.alitrip.tripmt.LotteryService.lottery';
	      if (moduleinfo.notLotteryAPI == "true" || moduleinfo.notLotteryAPI == true) {
	        api = moduleinfo.theAPI;
	      }
	
	      param.type = useWua ? 'wua' : 'none';
	      if (useWua) {
	        nativeConfig = {
	          needLogin: true,
	          useNative: true,
	          issec: useWua ? "1" : "0",
	          alipay: true,
	          taobao: true,
	          alitrip: true,
	          tmall: true
	        };
	        param.issec = "1";
	      } else {
	        param.ua = window.UA_Opt && window[UA_Opt.LogVal];
	      }
	
	      var mtop = this._app.bridge.MTop;
	      mtop.request({
	        api: api,
	        version: '1.0',
	        data: param,
	        params: nativeConfig
	      }, function (res) {
	        console.log('res', res);
	        var data = res.data;
	        if (data.code == "T") {
	          _this.finish();
	        } else if (data.code == "F") {
	          _this.finish();
	        } else {
	          _this.finish();
	        }
	      }, function (err) {
	        console.log('err', err);
	
	        _this.finish();
	      });
	    },
	    isUseWua: function isUseWua() {
	      var env = this._app.bridge.Utils.env;
	      return env.isTrip(this) || env.isTaobaoNative(this) || env.isTmallNative(this);
	    },
	    finish: function finish() {
	      this.lotterying = false;
	      this._getUA();
	    },
	    _getUA: function _getUA() {
	      var props = this.props;
	      if (this.useWua || typeof UA_Opt == "undefined") {
	        return null;
	      }
	      var _ua = ua;
	      UA_Opt.Token = new Date().getTime() + ':' + Math.random();
	      UA_Opt.reload && UA_Opt.reload();
	      return _ua;
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 4 */
/***/ function(module, exports) {

	
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	__weex_define__('@weex-temp/x', function (__weex_require__) {
	  __weex_require__('@weex-module/stream');
	}); /**
	     * @module ua-server
	     * [ctrSrc](http://gitlab.alibaba-inc.com/sd/ctlv/wikis/home) @凭落
	     **/
	
	
	var ctlSrc = '//g.alicdn.com/sd/ctl/ctl.js';
	
	/**
	 * 单例实例
	 */
	// CtlServer.instance = window.ctlInstance;
	
	/**
	 * @class CtlServer
	 * @Note 单个页面不要使用多个配置加载新的实例，只会取第一次的配置，无法获得预期效果
	 */
	
	var CtlServer = function () {
	  function CtlServer() {
	    _classCallCheck(this, CtlServer);
	
	    /**
	     * @static
	     * @desc 载入ctl
	     */
	    var that = this;
	    that.isLoaded = false;
	    //存放回调函数序列
	    that.cbFunctionList = [];
	
	    //已经有的不引入
	    if (window.ctl) {
	      that.c = ctl.noConflict();
	      that.c.config("h5");
	      that.c.ready(function () {
	        window.ua = window[UA_Opt.LogVal];
	        that.isLoaded = true;
	        //执行回调函数列表
	        that._publish();
	      });
	    } else {
	
	      if (window.KISSY && KISSY.use) {
	        KISSY.use('', function (S) {
	          S.getScript(ctlSrc + '?t=' + new Date().getTime(), {
	            success: function success() {
	
	              that.c = ctl.noConflict();
	              that.c.config("h5");
	              that.c.ready(function () {
	                window.ua = window[UA_Opt.LogVal];
	                that.isLoaded = true;
	                //执行回调函数列表
	                that._publish();
	              });
	            },
	            error: function error(data, textStatus) {}
	          });
	        });
	      } else if (window.Zepto) {
	        $.ajax({
	          type: 'GET',
	          url: ctlSrc,
	          // data to be added to query string:
	          data: {},
	          // type of data we are expecting in return:
	          dataType: 'script',
	          timeout: 300,
	          context: $('body'),
	          success: function success(data) {
	            that.c = ctl.noConflict();
	            that.c.config("h5");
	            that.c.ready(function () {
	              window.ua = window[UA_Opt.LogVal];
	              that.isLoaded = true;
	              //执行回调函数列表
	              that._publish();
	            });
	          },
	          error: function error(xhr, type) {}
	        });
	      } else {
	        // getScript 方法在@ali/vue-util 中定义
	        getScript(ctlSrc, function () {
	          that.c = ctl.noConflict();
	          that.c.config("h5");
	          that.c.ready(function () {
	            window.ua = window[UA_Opt.LogVal];
	            that.isLoaded = true;
	            //执行回调函数列表
	            that._publish();
	          });
	        });
	      }
	    }
	  }
	
	  /**
	   * @method isLoaded
	   * desc 判断UA加载是否成功
	   */
	
	
	  _createClass(CtlServer, [{
	    key: 'isLoaded',
	    value: function isLoaded() {
	      return this.isLoaded;
	    }
	
	    /**
	     * @method getUAToken
	     * @static
	     * @desc  获取ua异常返回空
	     */
	
	  }, {
	    key: 'getUAToken',
	    value: function getUAToken() {
	      window.ua = this.c.getUA();
	      return window.ua;
	    }
	  }, {
	    key: '_reloadUA',
	    value: function _reloadUA() {
	      this.c.getUA();
	    }
	
	    /**
	     * @method ready
	     * @desc  注册回调函数，当ua成功load时执行
	     * @param cf回调函数
	     * @param context回调函数执行上下文
	     * @param args回调函数参数，对象形式
	     * @Note 该方法只是方便使用者判断是否成功加载了ua；不应该用于缓存用户抽奖行为，那样是没有意义的
	     */
	
	  }, {
	    key: 'ready',
	    value: function ready(cf, context, args) {
	      if (typeof cf !== "function") {
	        return false;
	      }
	
	      context = context || window;
	      args = args || {};
	
	      if (this.isLoaded) {
	        cf.call(context, args);
	        return true;
	      }
	      this.cbFunctionList.push({
	        "cf": cf,
	        "ct": context,
	        "args": args
	      });
	      return false;
	    }
	  }, {
	    key: '_publish',
	    value: function _publish() {
	      for (var i = 0, len = this.cbFunctionList.length; i < len; i++) {
	        var item = this.cbFunctionList[i];
	
	        item["cf"].call(item["ct"], item["args"]);
	      }
	      this.cbFunctionList = {};
	    }
	  }]);
	
	  return CtlServer;
	}();
	
	/**
	 *单例
	 */
	
	
	var UAServer = {
	  /**
	   *@method getInstance
	   *@desc 获取UAServer实例
	   * @note 可以不传参数，按照默认来走；一旦页面中已经生成实例，后面再传参也没有用
	   */
	  getInstance: function getInstance() {
	
	    if (!CtlServer.instance) {
	      CtlServer.instance = window.ctlInstance = new CtlServer();
	    }
	
	    return CtlServer.instance;
	  }
	};
	
	module.exports = UAServer;

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }
/******/ ])});;


    
    
  

 define('@page/data', [], function(require, exports, module) {
  var modules = [{"id":"module_6","name":"wxc-lottery-btn","fullName":"upx/qua-mod/wxc-lottery-btn","group":"qua-mod","attrs":{"paddingTop":12,"paddingBottom":12,"paddingLeft":24,"paddingRight":24},"data":{"moduleinfo":{"isconfirm":false,"confirm":"消耗一次抽奖机会？","btnimg":"//gw.alicdn.com/tfs/TB1l0RrKFXXXXahXFXXXXXXXXXX-345-206.png","bgimg":"","subActId":3626,"asac":"1A172204NIP1JIVXJ801L9","succinfotitle":"恭喜","succinfocontent":"H71739补水保湿NewTheBest纽比士紫罗兰紧致锁水精油面膜贴6片 秋冬季居家情侣软底拖鞋室内地板毛绒棉拖鞋柠檬绿茶J13431","succinfoimg":"http://gtms04.alicdn.com/tps/i4/TB1nDK_HVXXXXXKXXXXY5TR9XXX-130-130.png","succinfobtnText":"知道了","succinfobtnLink":"","failinfo":{"title":"很抱歉","content":"很抱歉，没有中奖","img":"http://gtms04.alicdn.com/tps/i4/TB12btAHFXXXXcLXFXXFN7MYXXX-210-224.png","btnText":"再抽一次","btnLink":""},"notLotteryAPI":false,"theAPI":"mtop.alitrip.tripmt.AwardService.award"},"optioninfo":{"dynamic":"true","static":"true"},"awadinfo":[{"id":4281,"tips":"墙挂桌面2用双","btnText":"","btnLink":""},{"id":9119,"tips":"DJecoey","btnText":"","btnLink":""}]},"dataSourceType":"","tceEntryPoint":"","tceConfig":{}}];
  var page = {
    pageId:'126042',
    theme:'',
    backgroundColor:'',
    charset:'utf-8',
    title:'test',
    spmA:'a21t7',
    spmB:'8201761',
    keyword:'',
    description:'',
    hostname:'',
    env:'development',
    bucket:'0',
    deviceType:'',
    now:'1488435705695'
  };
  module.exports = {
    page: page,
    modules: modules,
    assets:{}
  };
}); 



	define("__weex_init",function(e,t,a){var n=e("@page/data");a.exports={template:{type:"npm/@ali/pi-weex/index",attr:{modsdata:function(){return n.modules||""},pageData:function(){return n.page||""}}}}}),bootstrap("__weex_init");