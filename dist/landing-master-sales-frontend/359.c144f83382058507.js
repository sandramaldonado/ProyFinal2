"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[359],{7359:(I,l,o)=>{o.r(l),o.d(l,{CaptchaModule:()=>y});var d=o(6895),u=o(3060),r=o(4650);const m=[];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[u.Bz.forChild(m),u.Bz]}),t})();var g=o(4006),v=o(7139);let C=(()=>{class t{constructor(e){this.zone=e,this.windowGrecaptcha="grecaptcha",this.windowOnLoadCallbackProperty="ngx_captcha_onload_callback",this.globalDomain="recaptcha.net",this.defaultDomain="google.com"}registerCaptchaScript(e,n,i,s){if(this.grecaptchaScriptLoaded())return void this.zone.run(()=>{i(window[this.windowGrecaptcha])});window[this.windowOnLoadCallbackProperty]=()=>this.zone.run(i.bind(this,window[this.windowGrecaptcha]));const c=document.createElement("script");c.innerHTML="",c.src=this.getCaptchaScriptUrl(e,n,s),c.async=!0,c.defer=!0,document.getElementsByTagName("head")[0].appendChild(c)}cleanup(){window[this.windowOnLoadCallbackProperty]=void 0,window[this.windowGrecaptcha]=void 0}grecaptchaScriptLoaded(){return!(!window[this.windowOnLoadCallbackProperty]||!window[this.windowGrecaptcha])}getLanguageParam(e){return e?`&hl=${e}`:""}getCaptchaScriptUrl(e,n,i){return`https://www.${e?this.globalDomain:this.defaultDomain}/recaptcha/api.js?onload=${this.windowOnLoadCallbackProperty}&render=${n}${this.getLanguageParam(i)}`}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(r.R0b))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac}),t})(),w=(()=>{class t{constructor(e,n){this.scriptService=e,this.zone=n}execute(e,n,i,s,c){this.executeAsPromise(e,n,s).then(i).catch(h=>c?c(h):console.error(h))}executeAsPromise(e,n,i){return new Promise((s,c)=>{this.scriptService.registerCaptchaScript(!(!i||!i.useGlobalDomain),e,E=>{this.zone.runOutsideAngular(()=>{try{E.execute(e,{action:n}).then(p=>this.zone.run(()=>s(p)))}catch(p){c(p)}})})})}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(C),r.LFG(r.R0b))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({providers:[C,w],imports:[[d.ez]]}),t})(),y=(()=>{class t{static forRoot(){return{ngModule:t,providers:[v.n]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[d.ez,f,g.u5,b]}),t})()}}]);