"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[635],{3063:(u,l,o)=>{o.d(l,{f:()=>d});var e=o(7065),g=o(1002),a=o(4650),m=o(5219),r=o(529);let d=(()=>{class n{constructor(t,i,s){this.sessionStorageService=t,this.localStorageService=i,this.httpClient=s,this.httpPostOptions=g.z8,this.httpGetOptions=g.bN,this.apiUrl=`${e.N.SSIAuthApiUrl}`}saveToken(){this.httpClient.post(`${e.N.SSIAuthApiUrl}`,JSON.stringify({username:e.N.SSITokenUsername,password:e.N.SSITokenPassword}),this.httpPostOptions).subscribe(i=>{i.data?.token&&localStorage.setItem("TOKEN",i.data.token),this.localStorageService.store("TOKEN",i.data?.token),this.sessionStorageService.store("token",i.data?.token),this.sessionStorageService.store("userId",i.data?.userId)})}saveAuthenticateInformation(t){this.sessionStorageService.store("authenticateInformation",t)}getAuthenticateInformation(){return this.sessionStorageService.retrieve("authenticateInformation")}saveClientInformation(t){this.sessionStorageService.store("clientInformation",t)}getClientInformation(){return this.sessionStorageService.retrieve("clientInformation")}saveDeliveryStoreMethod(t){this.sessionStorageService.store("storeInfo",t)}getDeliveryStoreMethod(){return this.sessionStorageService.retrieve("storeInfo")}saveSelfie(t){this.sessionStorageService.store("photoFace",t)}saveMovilListinformation(t){this.sessionStorageService.store("movilListInfo",t)}getMovilListInformation(){return this.sessionStorageService.retrieve("movilListInfo")}getSelfie(){return console.log(this.sessionStorageService.retrieve("photoFace")),this.sessionStorageService.retrieve("photoFace")}saveDocument(t,i){this.sessionStorageService.store(t,i)}getDocument(t){return this.sessionStorageService.retrieve(t)}savePlanCompositionCode(t){this.sessionStorageService.store("planCompositionCode",t)}getPlanCompositionCode(){return this.sessionStorageService.retrieve("planCompositionCode")}savePlanComposition(t){this.sessionStorageService.store("planComposition",t)}getPlanComposition(){return this.sessionStorageService.retrieve("planComposition")}clearWebStorePlanComposition(){this.sessionStorageService.clear(),this.sessionStorageService.clear("planCompositionCode"),this.sessionStorageService.clear("planComposition")}saveStatusScoring(t){this.sessionStorageService.store("statusScoring",t)}getStatusScoring(){return this.sessionStorageService.retrieve("statusScoring")}saveDataInSession(t,i){this.sessionStorageService.store(t,i)}getDataInSession(t){return this.sessionStorageService.retrieve(t)}getScoring(){return this.sessionStorageService.retrieve("scoring")}getOfferConsuptioncode(){return this.sessionStorageService.retrieve("offerconsumptionformcode")}getOfferTotaldetail(){return this.sessionStorageService.retrieve("offertotaltariff")}saveAutomaticPayment(t){this.sessionStorageService.store("automaticPayment",t)}}return n.\u0275fac=function(t){return new(t||n)(a.LFG(m.uR),a.LFG(m.n2),a.LFG(r.eN))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},1196:(u,l,o)=>{o.d(l,{A:()=>m});var e=o(4650),g=o(3060),a=o(3063);let m=(()=>{class r{constructor(n,c){this.router=n,this.webstoreService=c,this.stateLocation=!1,this.locationInfo=this.webstoreService.getDeliveryStoreMethod(),console.log(this.locationInfo)}ngOnInit(){this.stateLocation=this.locationInfo?.state,console.log(this.stateLocation),console.log("need implementation?")}detalle(){console.log("asda"),this.router.navigate(["/","detalle-compra"])}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(g.F0),e.Y36(a.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-almost-done"]],decls:13,vars:0,consts:[["id","padre",1,"d-flex","flex-column","justify-content-around","align-items-center"],["id","banner"],["id","presiona"],["src","../../../../assets/images/iconos/down.png"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],[1,"button-active",3,"click"],["id","moto","src","../../../../assets/images/iconos/moto.png"],["id","linea"]],template:function(n,c){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3"),e._uU(3," Ya casi terminamos "),e.qZA(),e.TgZ(4,"p",2),e._uU(5," Presiona en tu detalle de compra para revisar el estado y terminar tu compra. "),e.qZA(),e._UZ(6,"img",3),e.qZA()(),e.TgZ(7,"div",4)(8,"button",5),e.NdJ("click",function(){return c.detalle()}),e._UZ(9,"img",6),e._uU(10," Detalle De Compra "),e.TgZ(11,"p",7),e._uU(12,"Linea Movil"),e.qZA()()())},styles:["#banner[_ngcontent-%COMP%]{text-align:center;position:relative;padding:5%}#padre[_ngcontent-%COMP%]{justify-content:center;align-items:center;display:block;background:linear-gradient(180deg,rgba(214,240,132,0) 0%,#D6F084 100%);border-radius:10px}#moto[_ngcontent-%COMP%]{float:left;padding:10px}#presiona[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:16px;text-align:center;color:#5c339d}#linea[_ngcontent-%COMP%]{width:241px;height:16px;font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:16px;color:#fff}.button-active[_ngcontent-%COMP%]{background-color:#5c339d;padding:12px 10px;border-radius:20px;width:285px;height:60px!important;box-shadow:0 4px 15px #0000004d;font-family:MUSEO500-REGULAR;text-align:left;font-style:normal;font-weight:900;font-size:20px;line-height:24px;color:#fff}@media (max-width: 768px){.button-active[_ngcontent-%COMP%]{margin-right:0!important;font-size:.9em!important}}@media (max-width: 576px){.button-active[_ngcontent-%COMP%]{height:45px}}.button-wrap[_ngcontent-%COMP%]{margin-top:1.5vh}.button-disactived[_ngcontent-%COMP%]{background:#e0e0e0;font-size:1.1em;border-radius:20px;color:#000;margin-top:1.5vh;width:300px;height:40px;font-weight:700;border:2px solid #8260A5;font-family:MUSEO500-REGULAR;box-sizing:border-box}button[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:all .4s ease-in-out}.button-message[_ngcontent-%COMP%]{color:#fff;font-weight:900;font-size:small;font-family:MUSEO500-REGULAR;margin-bottom:4px}.button-active[_ngcontent-%COMP%]:hover{transform:scale(1.04,1.0000000099);-ms-transform:scale(1.04,1.0000000099);-webkit-transform:scale(1.04,1.0000000099)}button[_ngcontent-%COMP%]:focus{border-color:#0000;box-shadow:0 1px 1px #d0d0d0 inset,0 0 8px #dcdcdc;outline:0 none}"]}),r})()},635:(u,l,o)=>{o.r(l),o.d(l,{AlmostDoneModule:()=>i});var e=o(6895),g=o(3546),a=o(4006),m=o(4466),r=o(3060),d=o(1196),n=o(4650);const c=[{path:"",component:d.A}];let t=(()=>{class s{}return s.\u0275fac=function(h){return new(h||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[r.Bz.forChild(c),r.Bz]}),s})(),i=(()=>{class s{}return s.\u0275fac=function(h){return new(h||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[e.ez,t,g.QW,m.m,a.u5,a.UX]}),s})()}}]);