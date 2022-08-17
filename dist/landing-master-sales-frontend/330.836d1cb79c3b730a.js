"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[330,667,387,63],{4527:(h,u,o)=>{o.d(u,{N:()=>v});var t=o(7065),a=o(4004),l=o(4650),d=o(529);let v=(()=>{class i{constructor(n){this.http=n,this.endPoint=t.N.endPoint,this.endPointMgd=t.N.urlMgd}createOrder(n,e){return this.http.post(this.endPoint+"/order/create/orderMain",n,{headers:{Authorization:"Bearer "+e}}).pipe((0,a.U)(p=>p))}registerOrderView(n,e){return this.http.post(this.endPoint+"/order/registers/orderView",n,{headers:{Authorization:"Bearer "+e}}).pipe((0,a.U)(p=>p))}createPerson(n,e){return this.http.post(this.endPoint+"/sales/creates/client/person",n,{headers:{Authorization:"Bearer "+e}}).pipe((0,a.U)(p=>p))}uploadDocuments(n,e){return this.http.post(this.endPointMgd+"/documents/upload",n,{headers:{Authorization:"Bearer "+e}}).pipe((0,a.U)(p=>p))}}return i.\u0275fac=function(n){return new(n||i)(l.LFG(d.eN))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},3063:(h,u,o)=>{o.d(u,{f:()=>i});var t=o(7065),a=o(1002),l=o(4650),d=o(5219),v=o(529);let i=(()=>{class r{constructor(e,s,c){this.sessionStorageService=e,this.localStorageService=s,this.httpClient=c,this.httpPostOptions=a.z8,this.httpGetOptions=a.bN,this.apiUrl=`${t.N.SSIAuthApiUrl}`}saveToken(){this.httpClient.post(`${t.N.SSIAuthApiUrl}`,JSON.stringify({username:t.N.SSITokenUsername,password:t.N.SSITokenPassword}),this.httpPostOptions).subscribe(s=>{s.data?.token&&localStorage.setItem("TOKEN",s.data.token),this.localStorageService.store("TOKEN",s.data?.token),this.sessionStorageService.store("token",s.data?.token),this.sessionStorageService.store("userId",s.data?.userId)})}saveAuthenticateInformation(e){this.sessionStorageService.store("authenticateInformation",e)}getAuthenticateInformation(){return this.sessionStorageService.retrieve("authenticateInformation")}saveClientInformation(e){this.sessionStorageService.store("clientInformation",e)}getClientInformation(){return this.sessionStorageService.retrieve("clientInformation")}saveSelfie(e){this.sessionStorageService.store("photoFace",e)}saveMovilListinformation(e){this.sessionStorageService.store("movilListInfo",e)}getMovilListInformation(){return this.sessionStorageService.retrieve("movilListInfo")}getSelfie(){return console.log(this.sessionStorageService.retrieve("photoFace")),this.sessionStorageService.retrieve("photoFace")}saveDocument(e,s){this.sessionStorageService.store(e,s)}getDocument(e){return this.sessionStorageService.retrieve(e)}savePlanCompositionCode(e){this.sessionStorageService.store("planCompositionCode",e)}getPlanCompositionCode(){return this.sessionStorageService.retrieve("planCompositionCode")}savePlanComposition(e){this.sessionStorageService.store("planComposition",e)}getPlanComposition(){return this.sessionStorageService.retrieve("planComposition")}clearWebStorePlanComposition(){this.sessionStorageService.clear(),this.sessionStorageService.clear("planCompositionCode"),this.sessionStorageService.clear("planComposition")}saveStatusScoring(e){this.sessionStorageService.store("statusScoring",e)}getStatusScoring(){return this.sessionStorageService.retrieve("statusScoring")}saveDataInSession(e,s){this.sessionStorageService.store(e,s)}getDataInSession(e){return this.sessionStorageService.retrieve(e)}getScoring(){return this.sessionStorageService.retrieve("scoring")}getOfferConsuptioncode(){return this.sessionStorageService.retrieve("offerconsumptionformcode")}getOfferTotaldetail(){return this.sessionStorageService.retrieve("offertotaltariff")}saveAutomaticPayment(e){this.sessionStorageService.store("automaticPayment",e)}}return r.\u0275fac=function(e){return new(e||r)(l.LFG(d.uR),l.LFG(d.n2),l.LFG(v.eN))},r.\u0275prov=l.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},42:(h,u,o)=>{o.d(u,{r:()=>v});var t=o(4650),a=o(4006),l=o(6895);function d(i,r){if(1&i&&(t.TgZ(0,"div",3),t._uU(1),t.qZA()),2&i){const n=t.oxw();t.xp6(1),t.Oqu(n.message)}}let v=(()=>{class i{constructor(){this.content="",this.styles="",this.disabled=!1,this.message=""}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-button"]],inputs:{content:"content",styles:"styles",disabled:"disabled",message:"message"},features:[t._Bn([{provide:a.JU,useExisting:(0,t.Gpc)(()=>i),multi:!0}])],decls:4,vars:4,consts:[[1,"button-wrap"],["class","button-message",4,"ngIf"],[1,"button-active",3,"ngClass","disabled"],[1,"button-message"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.YNc(1,d,2,1,"div",1),t.TgZ(2,"button",2),t._uU(3),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("ngIf",e.message),t.xp6(1),t.Q6J("ngClass",e.disabled?"button-disactived":"button-active")("disabled",e.disabled),t.xp6(1),t.Oqu(e.content))},dependencies:[l.mk,l.O5],styles:[".button-active[_ngcontent-%COMP%]{background-color:#5c339d;font-size:1rem!important;padding:12px 10px;border-radius:20px;color:#fff;width:285px;height:44px!important;box-shadow:0 4px 15px #0000004d;font-family:MUSEO500-REGULAR}@media (max-width: 768px){.button-active[_ngcontent-%COMP%]{margin-right:0!important;font-size:.9em!important}}@media (max-width: 576px){.button-active[_ngcontent-%COMP%]{height:45px}}.button-wrap[_ngcontent-%COMP%]{margin-top:1.5vh}.button-disactived[_ngcontent-%COMP%]{background:#e0e0e0;font-size:1.1em;border-radius:20px;color:#000;margin-top:1.5vh;width:300px;height:40px;font-weight:700;border:2px solid #8260A5;font-family:MUSEO500-REGULAR;box-sizing:border-box}button[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:all .4s ease-in-out}.button-message[_ngcontent-%COMP%]{color:#fff;font-weight:900;font-size:small;font-family:MUSEO500-REGULAR;margin-bottom:4px}.button-active[_ngcontent-%COMP%]:hover{transform:scale(1.04,1.0000000099);-ms-transform:scale(1.04,1.0000000099);-webkit-transform:scale(1.04,1.0000000099)}button[_ngcontent-%COMP%]:focus{border-color:#0000;box-shadow:0 1px 1px #d0d0d0 inset,0 0 8px #dcdcdc;outline:0 none}"]}),i})()},1002:(h,u,o)=>{o.d(u,{bN:()=>l,cA:()=>d,z8:()=>a});var t=o(529);const a={headers:new t.WM({"Content-Type":"application/json",Accept:"application/json"})},l={headers:new t.WM({"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"})},d=[{valueField:"BEN",displayValue:"BENI",latitude:-14.831794,longitude:-64.901793},{valueField:"CBA",displayValue:"COCHABAMBA",latitude:-17.393688,longitude:-66.157119},{valueField:"LPZ",displayValue:"LA PAZ",latitude:-16.49564,longitude:-68.13368},{valueField:"ORU",displayValue:"ORURO",latitude:-17.96987,longitude:-67.114649},{valueField:"PAN",displayValue:"PANDO",latitude:-11.023511,longitude:-68.766225},{valueField:"POT",displayValue:"POTOSI",latitude:-19.57206,longitude:-65.755735},{valueField:"SCZ",displayValue:"SANTA CRUZ",latitude:-17.783558,longitude:-63.182115},{valueField:"SCR",displayValue:"SUCRE",latitude:-19.027878,longitude:-65.262753},{valueField:"TRJ",displayValue:"TARIJA",latitude:-21.538731,longitude:-64.722486}]},5625:(h,u,o)=>{o.d(u,{X:()=>i});var t=o(4482),a=o(5403),l=o(4671),d=o(5963),v=o(8421);function i(r=1/0){let n;n=r&&"object"==typeof r?r:{count:r};const{count:e=1/0,delay:s,resetOnSuccess:c=!1}=n;return e<=0?l.y:(0,t.e)((p,g)=>{let _,S=0;const f=()=>{let O=!1;_=p.subscribe((0,a.x)(g,m=>{c&&(S=0),g.next(m)},void 0,m=>{if(S++<e){const P=()=>{_?(_.unsubscribe(),_=null,f()):O=!0};if(null!=s){const C="number"==typeof s?(0,d.H)(s):(0,v.Xf)(s(m,S)),E=(0,a.x)(g,()=>{E.unsubscribe(),P()},()=>{g.complete()});C.subscribe(E)}else P()}else g.error(m)})),O&&(_.unsubscribe(),_=null,f())};f()})}}}]);