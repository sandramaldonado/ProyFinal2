"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[184,387],{3063:(u,d,n)=>{n.d(d,{f:()=>o});var t=n(7065),c=n(1002),a=n(4650),l=n(5219),g=n(529);let o=(()=>{class i{constructor(e,r,m){this.sessionStorageService=e,this.localStorageService=r,this.httpClient=m,this.httpPostOptions=c.z8,this.httpGetOptions=c.bN,this.apiUrl=`${t.N.SSIAuthApiUrl}`}saveToken(){this.httpClient.post(`${t.N.SSIAuthApiUrl}`,JSON.stringify({username:t.N.SSITokenUsername,password:t.N.SSITokenPassword}),this.httpPostOptions).subscribe(r=>{r.data?.token&&localStorage.setItem("TOKEN",r.data.token),this.localStorageService.store("TOKEN",r.data?.token),this.sessionStorageService.store("token",r.data?.token),this.sessionStorageService.store("userId",r.data?.userId)})}saveAuthenticateInformation(e){this.sessionStorageService.store("authenticateInformation",e)}getAuthenticateInformation(){return this.sessionStorageService.retrieve("authenticateInformation")}saveClientInformation(e){this.sessionStorageService.store("clientInformation",e)}getClientInformation(){return this.sessionStorageService.retrieve("clientInformation")}saveDeliveryStoreMethod(e){this.sessionStorageService.store("storeInfo",e)}getDeliveryStoreMethod(){return this.sessionStorageService.retrieve("storeInfo")}saveSelfie(e){this.sessionStorageService.store("photoFace",e)}saveMovilListinformation(e){this.sessionStorageService.store("movilListInfo",e)}getMovilListInformation(){return this.sessionStorageService.retrieve("movilListInfo")}getSelfie(){return console.log(this.sessionStorageService.retrieve("photoFace")),this.sessionStorageService.retrieve("photoFace")}saveDocument(e,r){this.sessionStorageService.store(e,r)}getDocument(e){return this.sessionStorageService.retrieve(e)}savePlanCompositionCode(e){this.sessionStorageService.store("planCompositionCode",e)}getPlanCompositionCode(){return this.sessionStorageService.retrieve("planCompositionCode")}savePlanComposition(e){this.sessionStorageService.store("planComposition",e)}getPlanComposition(){return this.sessionStorageService.retrieve("planComposition")}clearWebStorePlanComposition(){this.sessionStorageService.clear(),this.sessionStorageService.clear("planCompositionCode"),this.sessionStorageService.clear("planComposition")}saveStatusScoring(e){this.sessionStorageService.store("statusScoring",e)}getStatusScoring(){return this.sessionStorageService.retrieve("statusScoring")}saveDataInSession(e,r){this.sessionStorageService.store(e,r)}getDataInSession(e){return this.sessionStorageService.retrieve(e)}getScoring(){return this.sessionStorageService.retrieve("scoring")}getOfferConsuptioncode(){return this.sessionStorageService.retrieve("offerconsumptionformcode")}getOfferTotaldetail(){return this.sessionStorageService.retrieve("offertotaltariff")}saveAutomaticPayment(e){this.sessionStorageService.store("automaticPayment",e)}}return i.\u0275fac=function(e){return new(e||i)(a.LFG(l.uR),a.LFG(l.n2),a.LFG(g.eN))},i.\u0275prov=a.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},9717:(u,d,n)=>{n.d(d,{Y:()=>g});var t=n(4650),c=n(4006),a=n(6895);function l(o,i){if(1&o&&(t.TgZ(0,"div",3),t._uU(1),t.qZA()),2&o){const s=t.oxw();t.xp6(1),t.Oqu(s.message)}}let g=(()=>{class o{constructor(){this.content="",this.styles="",this.disabled=!1,this.message=""}}return o.\u0275fac=function(s){return new(s||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-button-outline"]],inputs:{content:"content",styles:"styles",disabled:"disabled",message:"message"},features:[t._Bn([{provide:c.JU,useExisting:(0,t.Gpc)(()=>o),multi:!0}])],decls:4,vars:4,consts:[[1,"button-wrap"],["class","button-message",4,"ngIf"],[1,"button-active",3,"ngClass","disabled"],[1,"button-message"]],template:function(s,e){1&s&&(t.TgZ(0,"div",0),t.YNc(1,l,2,1,"div",1),t.TgZ(2,"button",2),t._uU(3),t.qZA()()),2&s&&(t.xp6(1),t.Q6J("ngIf",e.message),t.xp6(1),t.Q6J("ngClass",e.disabled?"button-disactived":"button-active")("disabled",e.disabled),t.xp6(1),t.Oqu(e.content))},dependencies:[a.mk,a.O5],styles:[".button-active[_ngcontent-%COMP%]{background-color:#fff;font-size:1rem!important;padding:12px 10px;border-radius:20px;color:#5c339d;width:285px;height:44px!important;box-shadow:0 4px 15px #0000004d;border:1px solid #5C339D;font-family:MUSEO500-REGULAR}@media (max-width: 768px){.button-active[_ngcontent-%COMP%]{margin-right:0!important;font-size:.9em!important}}@media (max-width: 576px){.button-active[_ngcontent-%COMP%]{height:45px}}.button-wrap[_ngcontent-%COMP%]{margin-top:1.5vh}.button-disactived[_ngcontent-%COMP%]{background:#e0e0e0;font-size:1.1em;border-radius:20px;color:#000;margin-top:1.5vh;width:300px;height:40px;font-weight:700;border:2px solid #8260A5;font-family:MUSEO500-REGULAR;box-sizing:border-box}button[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:all .4s ease-in-out}.button-message[_ngcontent-%COMP%]{color:#fff;font-weight:900;font-size:small;font-family:MUSEO500-REGULAR;margin-bottom:4px}.button-active[_ngcontent-%COMP%]:hover{transform:scale(1.04,1.0000000099);-ms-transform:scale(1.04,1.0000000099);-webkit-transform:scale(1.04,1.0000000099)}button[_ngcontent-%COMP%]:focus{border-color:#0000;box-shadow:0 1px 1px #d0d0d0 inset,0 0 8px #dcdcdc;outline:0 none}"]}),o})()},42:(u,d,n)=>{n.d(d,{r:()=>g});var t=n(4650),c=n(4006),a=n(6895);function l(o,i){if(1&o&&(t.TgZ(0,"div",3),t._uU(1),t.qZA()),2&o){const s=t.oxw();t.xp6(1),t.Oqu(s.message)}}let g=(()=>{class o{constructor(){this.content="",this.styles="",this.disabled=!1,this.message=""}}return o.\u0275fac=function(s){return new(s||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-button"]],inputs:{content:"content",styles:"styles",disabled:"disabled",message:"message"},features:[t._Bn([{provide:c.JU,useExisting:(0,t.Gpc)(()=>o),multi:!0}])],decls:4,vars:4,consts:[[1,"button-wrap"],["class","button-message",4,"ngIf"],[1,"button-active",3,"ngClass","disabled"],[1,"button-message"]],template:function(s,e){1&s&&(t.TgZ(0,"div",0),t.YNc(1,l,2,1,"div",1),t.TgZ(2,"button",2),t._uU(3),t.qZA()()),2&s&&(t.xp6(1),t.Q6J("ngIf",e.message),t.xp6(1),t.Q6J("ngClass",e.disabled?"button-disactived":"button-active")("disabled",e.disabled),t.xp6(1),t.Oqu(e.content))},dependencies:[a.mk,a.O5],styles:[".button-active[_ngcontent-%COMP%]{background-color:#5c339d;font-size:1rem!important;padding:12px 10px;border-radius:20px;color:#fff;width:285px;height:44px!important;box-shadow:0 4px 15px #0000004d;font-family:MUSEO500-REGULAR}@media (max-width: 768px){.button-active[_ngcontent-%COMP%]{margin-right:0!important;font-size:.9em!important}}@media (max-width: 576px){.button-active[_ngcontent-%COMP%]{height:45px}}.button-wrap[_ngcontent-%COMP%]{margin-top:1.5vh}.button-disactived[_ngcontent-%COMP%]{background:#e0e0e0;font-size:1.1em;border-radius:20px;color:#000;margin-top:1.5vh;width:300px;height:40px;font-weight:700;border:2px solid #8260A5;font-family:MUSEO500-REGULAR;box-sizing:border-box}button[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:all .4s ease-in-out}.button-message[_ngcontent-%COMP%]{color:#fff;font-weight:900;font-size:small;font-family:MUSEO500-REGULAR;margin-bottom:4px}.button-active[_ngcontent-%COMP%]:hover{transform:scale(1.04,1.0000000099);-ms-transform:scale(1.04,1.0000000099);-webkit-transform:scale(1.04,1.0000000099)}button[_ngcontent-%COMP%]:focus{border-color:#0000;box-shadow:0 1px 1px #d0d0d0 inset,0 0 8px #dcdcdc;outline:0 none}"]}),o})()}}]);