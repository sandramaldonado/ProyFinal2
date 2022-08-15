"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[387,286],{3063:(p,d,o)=>{o.d(d,{f:()=>n});var e=o(7065),l=o(1002),a=o(4650),c=o(5219),u=o(529);let n=(()=>{class i{constructor(t,s,g){this.sessionStorageService=t,this.localStorageService=s,this.httpClient=g,this.httpPostOptions=l.z8,this.httpGetOptions=l.bN,this.apiUrl=`${e.N.SSIAuthApiUrl}`}saveToken(){this.httpClient.post(`${e.N.SSIAuthApiUrl}`,JSON.stringify({username:e.N.SSITokenUsername,password:e.N.SSITokenPassword}),this.httpPostOptions).subscribe(s=>{s.data?.token&&localStorage.setItem("TOKEN",s.data.token),this.localStorageService.store("TOKEN",s.data?.token),this.sessionStorageService.store("token",s.data?.token),this.sessionStorageService.store("userId",s.data?.userId)})}saveAuthenticateInformation(t){this.sessionStorageService.store("authenticateInformation",t)}getAuthenticateInformation(){return this.sessionStorageService.retrieve("authenticateInformation")}saveClientInformation(t){this.sessionStorageService.store("clientInformation",t)}getClientInformation(){return this.sessionStorageService.retrieve("clientInformation")}saveSelfie(t){this.sessionStorageService.store("photoFace",t)}saveMovilListinformation(t){this.sessionStorageService.store("movilListInfo",t)}getMovilListInformation(){return this.sessionStorageService.retrieve("movilListInfo")}getSelfie(){return console.log(this.sessionStorageService.retrieve("photoFace")),this.sessionStorageService.retrieve("photoFace")}saveDocument(t,s){this.sessionStorageService.store(t,s)}getDocument(t){return this.sessionStorageService.retrieve(t)}savePlanCompositionCode(t){this.sessionStorageService.store("planCompositionCode",t)}getPlanCompositionCode(){return this.sessionStorageService.retrieve("planCompositionCode")}savePlanComposition(t){this.sessionStorageService.store("planComposition",t)}getPlanComposition(){return this.sessionStorageService.retrieve("planComposition")}clearWebStorePlanComposition(){this.sessionStorageService.clear(),this.sessionStorageService.clear("planCompositionCode"),this.sessionStorageService.clear("planComposition")}saveStatusScoring(t){this.sessionStorageService.store("statusScoring",t)}getStatusScoring(){return this.sessionStorageService.retrieve("statusScoring")}saveDataInSession(t,s){this.sessionStorageService.store(t,s)}getDataInSession(t){return this.sessionStorageService.retrieve(t)}}return i.\u0275fac=function(t){return new(t||i)(a.LFG(c.uR),a.LFG(c.n2),a.LFG(u.eN))},i.\u0275prov=a.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},42:(p,d,o)=>{o.d(d,{r:()=>u});var e=o(4650),l=o(4006),a=o(6895);function c(n,i){if(1&n&&(e.TgZ(0,"div",3),e._uU(1),e.qZA()),2&n){const r=e.oxw();e.xp6(1),e.Oqu(r.message)}}let u=(()=>{class n{constructor(){this.content="",this.styles="",this.disabled=!1,this.message=""}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-button"]],inputs:{content:"content",styles:"styles",disabled:"disabled",message:"message"},features:[e._Bn([{provide:l.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}])],decls:4,vars:4,consts:[[1,"button-wrap"],["class","button-message",4,"ngIf"],[1,"button-active",3,"ngClass","disabled"],[1,"button-message"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e.YNc(1,c,2,1,"div",1),e.TgZ(2,"button",2),e._uU(3),e.qZA()()),2&r&&(e.xp6(1),e.Q6J("ngIf",t.message),e.xp6(1),e.Q6J("ngClass",t.disabled?"button-disactived":"button-active")("disabled",t.disabled),e.xp6(1),e.Oqu(t.content))},dependencies:[a.mk,a.O5],styles:[".button-active[_ngcontent-%COMP%]{background-color:#5c339d;font-size:1rem!important;padding:12px 10px;border-radius:20px;color:#fff;width:285px;height:44px!important;box-shadow:0 4px 15px #0000004d;font-family:MUSEO500-REGULAR}@media (max-width: 768px){.button-active[_ngcontent-%COMP%]{margin-right:0!important;font-size:.9em!important}}@media (max-width: 576px){.button-active[_ngcontent-%COMP%]{height:45px}}.button-wrap[_ngcontent-%COMP%]{margin-top:1.5vh}.button-disactived[_ngcontent-%COMP%]{background:#e0e0e0;font-size:1.1em;border-radius:20px;color:#000;margin-top:1.5vh;width:300px;height:40px;font-weight:700;border:2px solid #8260A5;font-family:MUSEO500-REGULAR;box-sizing:border-box}button[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:all .4s ease-in-out}.button-message[_ngcontent-%COMP%]{color:#fff;font-weight:900;font-size:small;font-family:MUSEO500-REGULAR;margin-bottom:4px}.button-active[_ngcontent-%COMP%]:hover{transform:scale(1.04,1.0000000099);-ms-transform:scale(1.04,1.0000000099);-webkit-transform:scale(1.04,1.0000000099)}button[_ngcontent-%COMP%]:focus{border-color:#0000;box-shadow:0 1px 1px #d0d0d0 inset,0 0 8px #dcdcdc;outline:0 none}"]}),n})()},1002:(p,d,o)=>{o.d(d,{bN:()=>a,cA:()=>c,z8:()=>l});var e=o(529);const l={headers:new e.WM({"Content-Type":"application/json",Accept:"application/json"})},a={headers:new e.WM({"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"})},c=[{valueField:"BEN",displayValue:"BENI",latitude:-14.831794,longitude:-64.901793},{valueField:"CBA",displayValue:"COCHABAMBA",latitude:-17.393688,longitude:-66.157119},{valueField:"LPZ",displayValue:"LA PAZ",latitude:-16.49564,longitude:-68.13368},{valueField:"ORU",displayValue:"ORURO",latitude:-17.96987,longitude:-67.114649},{valueField:"PAN",displayValue:"PANDO",latitude:-11.023511,longitude:-68.766225},{valueField:"POT",displayValue:"POTOSI",latitude:-19.57206,longitude:-65.755735},{valueField:"SCZ",displayValue:"SANTA CRUZ",latitude:-17.783558,longitude:-63.182115},{valueField:"SCR",displayValue:"SUCRE",latitude:-19.027878,longitude:-65.262753},{valueField:"TRJ",displayValue:"TARIJA",latitude:-21.538731,longitude:-64.722486}]}}]);