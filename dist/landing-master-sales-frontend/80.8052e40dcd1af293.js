"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[80],{9511:(d,S,t)=>{t.r(S),t.d(S,{TakePictureModule:()=>p});var a=t(6895),c=t(3060),r=t(6748),i=t(4650);const v=[{path:"",component:r.Q}];let l=(()=>{class o{}return o.\u0275fac=function(g){return new(g||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[c.Bz.forChild(v),c.Bz]}),o})();var n=t(7392),u=t(3546),e=t(4859),s=t(2965),h=t(4466);let p=(()=>{class o{}return o.\u0275fac=function(g){return new(g||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[a.ez,l,e.ot,u.QW,n.Ps,s.Tm,h.m]}),o})()},3063:(d,S,t)=>{t.d(S,{f:()=>l});var a=t(7065),c=t(1002),r=t(4650),i=t(5219),v=t(529);let l=(()=>{class n{constructor(e,s,h){this.sessionStorageService=e,this.localStorageService=s,this.httpClient=h,this.httpPostOptions=c.z8,this.httpGetOptions=c.bN,this.urToken="https://omega.devnt.ssidevops.com/auth/login"}saveToken(){this.httpClient.post(`${a.N.SSIAuthApiUrl}`,JSON.stringify({username:a.N.SSITokenUsername,password:a.N.SSITokenPassword}),this.httpPostOptions).subscribe(s=>{s.data?.token&&localStorage.setItem("TOKEN",s.data.token),this.localStorageService.store("TOKEN",s.data?.token)})}saveAuthenticateInformation(e){this.sessionStorageService.store("authenticateInformation",e)}getAuthenticateInformation(){return this.sessionStorageService.retrieve("authenticateInformation")}saveClientInformation(e){this.sessionStorageService.store("clientInformation",e)}getClientInformation(){return this.sessionStorageService.retrieve("clientInformation")}saveSelfie(e){this.sessionStorageService.store("photoFace",e)}getSelfie(){return console.log(this.sessionStorageService.retrieve("photoFace")),this.sessionStorageService.retrieve("photoFace")}saveDocument(e,s){this.sessionStorageService.store(e,s)}getDocument(e){return this.sessionStorageService.retrieve(e)}savePlanCompositionCode(e){this.sessionStorageService.store("planCompositionCode",e)}getPlanCompositionCode(){return this.sessionStorageService.retrieve("planCompositionCode")}savePlanComposition(e){this.sessionStorageService.store("planComposition",e)}getPlanComposition(){return this.sessionStorageService.retrieve("planComposition")}clearWebStorePlanComposition(){this.sessionStorageService.clear("planCompositionCode"),this.sessionStorageService.clear("planComposition")}saveStatusScoring(e){this.sessionStorageService.store("statusScoring",e)}getStatusScoring(){return this.sessionStorageService.retrieve("statusScoring")}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(i.uR),r.LFG(i.n2),r.LFG(v.eN))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);