"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[328,387,330,42,286,63],{2671:(_,h,e)=>{e.d(h,{y:()=>c});var i=e(529),p=e(5625),t=e(262),f=e(2843),v=e(7065),l=e(4650);let c=(()=>{class a{constructor(r){this.httpClient=r,this.apiUrl=`${v.N.ClientSearchApiUrl}`,this.headers=new i.WM,this.httpOptions={}}getClientByMovil(r,u){return this.headers={"Content-Type":"application/json",Authorization:"Bearer "+u},this.httpClient.get(`${this.apiUrl}/${r}`,{headers:this.headers})}getClientByDNI(r,u){const C={headers:{"Content-Type":"application/json",Authorization:"Bearer "+u}},S=JSON.stringify({documentId:r,documentType:""});return this.httpClient.post(`${this.apiUrl}`,S,C).pipe((0,p.X)(1),(0,t.K)(this.handleError))}handleError(r){return r.error instanceof ErrorEvent?console.error("An error occurred:",r.error.message):console.error(`Backend returned code ${r.status}, body was: ${r.error}`),(0,f._)("Something bad happened; please try again later.")}}return a.\u0275fac=function(r){return new(r||a)(l.LFG(i.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},4527:(_,h,e)=>{e.d(h,{N:()=>v});var i=e(7065),p=e(4004),t=e(4650),f=e(529);let v=(()=>{class l{constructor(a){this.http=a,this.endPoint=i.N.endPoint}createOrder(a,n){return this.http.post(this.endPoint+"/order/create/orderMain",a,{headers:{Authorization:"Bearer "+n}}).pipe((0,p.U)(g=>g))}registerOrderView(a,n){return this.http.post(this.endPoint+"/order/registers/orderView",a,{headers:{Authorization:"Bearer "+n}}).pipe((0,p.U)(g=>g))}createPerson(a,n){return this.http.post(this.endPoint+"/sales/creates/client/person",a,{headers:{Authorization:"Bearer "+n}}).pipe((0,p.U)(g=>g))}}return l.\u0275fac=function(a){return new(a||l)(t.LFG(f.eN))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},3063:(_,h,e)=>{e.d(h,{f:()=>l});var i=e(7065),p=e(1002),t=e(4650),f=e(5219),v=e(529);let l=(()=>{class c{constructor(n,r,u){this.sessionStorageService=n,this.localStorageService=r,this.httpClient=u,this.httpPostOptions=p.z8,this.httpGetOptions=p.bN,this.apiUrl=`${i.N.SSIAuthApiUrl}`}saveToken(){this.httpClient.post(`${i.N.SSIAuthApiUrl}`,JSON.stringify({username:i.N.SSITokenUsername,password:i.N.SSITokenPassword}),this.httpPostOptions).subscribe(r=>{r.data?.token&&localStorage.setItem("TOKEN",r.data.token),this.localStorageService.store("TOKEN",r.data?.token),this.sessionStorageService.store("token",r.data?.token),this.sessionStorageService.store("userId",r.data?.userId)})}saveAuthenticateInformation(n){this.sessionStorageService.store("authenticateInformation",n)}getAuthenticateInformation(){return this.sessionStorageService.retrieve("authenticateInformation")}saveClientInformation(n){this.sessionStorageService.store("clientInformation",n)}getClientInformation(){return this.sessionStorageService.retrieve("clientInformation")}saveSelfie(n){this.sessionStorageService.store("photoFace",n)}saveMovilListinformation(n){this.sessionStorageService.store("movilListInfo",n)}getMovilListInformation(){return this.sessionStorageService.retrieve("movilListInfo")}getSelfie(){return console.log(this.sessionStorageService.retrieve("photoFace")),this.sessionStorageService.retrieve("photoFace")}saveDocument(n,r){this.sessionStorageService.store(n,r)}getDocument(n){return this.sessionStorageService.retrieve(n)}savePlanCompositionCode(n){this.sessionStorageService.store("planCompositionCode",n)}getPlanCompositionCode(){return this.sessionStorageService.retrieve("planCompositionCode")}savePlanComposition(n){this.sessionStorageService.store("planComposition",n)}getPlanComposition(){return this.sessionStorageService.retrieve("planComposition")}clearWebStorePlanComposition(){this.sessionStorageService.clear(),this.sessionStorageService.clear("planCompositionCode"),this.sessionStorageService.clear("planComposition")}saveStatusScoring(n){this.sessionStorageService.store("statusScoring",n)}getStatusScoring(){return this.sessionStorageService.retrieve("statusScoring")}saveDataInSession(n,r){this.sessionStorageService.store(n,r)}getDataInSession(n){return this.sessionStorageService.retrieve(n)}}return c.\u0275fac=function(n){return new(n||c)(t.LFG(f.uR),t.LFG(f.n2),t.LFG(v.eN))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},2328:(_,h,e)=>{e.r(h),e.d(h,{OfferModule:()=>U});var i=e(6895),p=e(3060),t=e(4650),f=e(2671),v=e(6616),l=e(529),c=e(5625),a=e(262),n=e(2843),r=e(7065);let u=(()=>{class s{constructor(o){this.httpClient=o,this.apiUrl=`${r.N.CatalogProductApiUrl}`,this.headers=new l.WM,this.httpOptions={}}getPlanList(o){var d={"Content-Type":"application/json",Authorization:"Bearer "+o};const P=JSON.stringify({channel:"CAVENT",city:null,clientId:null,sourcePlan:null,transactionType:"VENTA",userId:21,workplace:null});return this.httpClient.post(`${this.apiUrl}`,P,{headers:d}).pipe((0,c.X)(1),(0,a.K)(this.handleError))}handleError(o){return o.error instanceof ErrorEvent?console.error("An error occurred:",o.error.message):console.error(`Backend returned code ${o.status}, body was: ${o.error}`),(0,n._)("Something bad happened; please try again later.")}}return s.\u0275fac=function(o){return new(o||s)(t.LFG(l.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var g=e(3063),C=e(4527),S=e(42);function O(s,m){1&s&&t._UZ(0,"img",16)}function T(s,m){1&s&&t._UZ(0,"img",17)}function M(s,m){1&s&&t._UZ(0,"img",18)}function E(s,m){if(1&s&&(t.TgZ(0,"div",9)(1,"div",10),t.YNc(2,O,1,0,"img",11),t.YNc(3,T,1,0,"img",12),t.YNc(4,M,1,0,"img",13),t.qZA(),t.TgZ(5,"div",14)(6,"p",15),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA()()()),2&s){const o=m.$implicit;t.xp6(2),t.Q6J("ngIf",o.componentTradeName&&"MOVIL"==(null==o?null:o.consumptionEntityType)),t.xp6(1),t.Q6J("ngIf",o.componentTradeName&&"IFIXED"==(null==o?null:o.consumptionEntityType)),t.xp6(1),t.Q6J("ngIf",o.componentTradeName&&"TV"==(null==o?null:o.consumptionEntityType)),t.xp6(3),t.Oqu(null==o?null:o.consumptionEntityType),t.xp6(2),t.Oqu(null==o?null:o.componentOffer)}}function A(s,m){if(1&s){const o=t.EpF();t.TgZ(0,"div")(1,"app-button",19),t.NdJ("click",function(){t.CHM(o);const P=t.oxw();return t.KtG(P.onClick())}),t.qZA()()}2&s&&(t.xp6(1),t.Q6J("content","Comprar este plan"))}const I=[{path:"",component:(()=>{class s{constructor(o,d,P,y,b,B,R){this.clientService=o,this.tokenService=d,this.route=P,this.router=y,this.planListService=b,this.webstoreService=B,this.ordersService=R,this.totalOfferTariff=0,this.showButton=!1}ngOnInit(){this.webstoreService.clearWebStorePlanComposition(),this.route.queryParams.subscribe(o=>{this.planCompositionCode=o.code}),this.getToken()}getToken(){this.tokenService.gettoken().subscribe(o=>{this.autentication=o,this.getPlansList()})}getPlansList(){var o=this;this.planListService.getPlanList(this.autentication.data.token).subscribe(d=>{this.planesList=d;var y=this.planesList.data.data.filter(function(b){return b.planCompositionCode===o.planCompositionCode});this.planComposition=y[0],this.consumptionFormCode=this.planComposition?.consumptionFormCode,this.offerTariff=this.planComposition?.tariff,this.showButton=!0})}calculateTotalOfferTariff(){let o=0;if("CCOPOS"==this.consumptionFormCode&&(o=this.offerTariff?this.offerTariff:0,this.planListServices=this.planComposition?.planList,this.planListServices))for(let d=0;d<this.planListServices.length;d++)o+=this.planListServices[d].categoryData.tariff?this.planListServices[d].categoryData.tariff:0;console.log("calculate offerTotalTariff",o),this.webstoreService.saveDataInSession("offerTotalTariff",o)}onClick(){this.webstoreService.savePlanCompositionCode(this.planCompositionCode),this.webstoreService.savePlanComposition(this.planComposition),this.webstoreService.saveDataInSession("offerConsumptionFormCode",this.consumptionFormCode),this.calculateTotalOfferTariff(),this.router.navigate(["/client/validationClient"])}}return s.\u0275fac=function(o){return new(o||s)(t.Y36(f.y),t.Y36(v.B),t.Y36(p.gz),t.Y36(p.F0),t.Y36(u),t.Y36(g.f),t.Y36(C.N))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-offer"]],decls:11,vars:3,consts:[[1,"container"],[1,"row","pb-5"],[1,"section-header","col-12","py-3"],[1,""],["src","assets/images/logo-viva.png","alt","",1,"pb-2",2,"width","200px","height","auto"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],["class","row w-100 border-top pt-2",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row","w-100","border-top","pt-2"],[1,"col-1","text-end"],["src","assets/images/iconos/movil.png","alt","","style","width: 20px; height: auto;",4,"ngIf"],["src","assets/images/iconos/wifi.png","alt","","style","width: 25px; height: auto;",4,"ngIf"],["src","assets/images/iconos/tv.png","alt","","style","width: 25px; height: auto;",4,"ngIf"],[1,"col-11"],[1,"component-title","mb-0","fw-bold"],["src","assets/images/iconos/movil.png","alt","",2,"width","20px","height","auto"],["src","assets/images/iconos/wifi.png","alt","",2,"width","25px","height","auto"],["src","assets/images/iconos/tv.png","alt","",2,"width","25px","height","auto"],[3,"content","click"]],template:function(o,d){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3),t._UZ(4,"img",4),t.qZA()(),t.TgZ(5,"section",5)(6,"div",6)(7,"h3"),t._uU(8),t.qZA(),t.YNc(9,E,10,5,"div",7),t.YNc(10,A,2,1,"div",8),t.qZA()()()()),2&o&&(t.xp6(8),t.Oqu(null==d.planComposition?null:d.planComposition.groupTradeName),t.xp6(1),t.Q6J("ngForOf",null==d.planComposition?null:d.planComposition.planList),t.xp6(1),t.Q6J("ngIf",d.showButton))},dependencies:[i.sg,i.O5,S.r],styles:[".mat-card[_ngcontent-%COMP%]{padding:1px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white;color:#848484}.component-title[_ngcontent-%COMP%]{color:#5c339d}.section-header[_ngcontent-%COMP%]{background:linear-gradient(180deg,#D6F084 0%,rgba(214,240,132,0) 100%)}"]}),s})()}];let x=(()=>{class s{}return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[p.Bz.forChild(I),p.Bz]}),s})();var L=e(4466);let U=(()=>{class s{}return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[i.ez,x,L.m]}),s})()},42:(_,h,e)=>{e.d(h,{r:()=>v});var i=e(4650),p=e(4006),t=e(6895);function f(l,c){if(1&l&&(i.TgZ(0,"div",3),i._uU(1),i.qZA()),2&l){const a=i.oxw();i.xp6(1),i.Oqu(a.message)}}let v=(()=>{class l{constructor(){this.content="",this.styles="",this.disabled=!1,this.message=""}}return l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=i.Xpm({type:l,selectors:[["app-button"]],inputs:{content:"content",styles:"styles",disabled:"disabled",message:"message"},features:[i._Bn([{provide:p.JU,useExisting:(0,i.Gpc)(()=>l),multi:!0}])],decls:4,vars:4,consts:[[1,"button-wrap"],["class","button-message",4,"ngIf"],[1,"button-active",3,"ngClass","disabled"],[1,"button-message"]],template:function(a,n){1&a&&(i.TgZ(0,"div",0),i.YNc(1,f,2,1,"div",1),i.TgZ(2,"button",2),i._uU(3),i.qZA()()),2&a&&(i.xp6(1),i.Q6J("ngIf",n.message),i.xp6(1),i.Q6J("ngClass",n.disabled?"button-disactived":"button-active")("disabled",n.disabled),i.xp6(1),i.Oqu(n.content))},dependencies:[t.mk,t.O5],styles:[".button-active[_ngcontent-%COMP%]{background-color:#5c339d;font-size:1rem!important;padding:12px 10px;border-radius:20px;color:#fff;width:285px;height:44px!important;box-shadow:0 4px 15px #0000004d;font-family:MUSEO500-REGULAR}@media (max-width: 768px){.button-active[_ngcontent-%COMP%]{margin-right:0!important;font-size:.9em!important}}@media (max-width: 576px){.button-active[_ngcontent-%COMP%]{height:45px}}.button-wrap[_ngcontent-%COMP%]{margin-top:1.5vh}.button-disactived[_ngcontent-%COMP%]{background:#e0e0e0;font-size:1.1em;border-radius:20px;color:#000;margin-top:1.5vh;width:300px;height:40px;font-weight:700;border:2px solid #8260A5;font-family:MUSEO500-REGULAR;box-sizing:border-box}button[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:all .4s ease-in-out}.button-message[_ngcontent-%COMP%]{color:#fff;font-weight:900;font-size:small;font-family:MUSEO500-REGULAR;margin-bottom:4px}.button-active[_ngcontent-%COMP%]:hover{transform:scale(1.04,1.0000000099);-ms-transform:scale(1.04,1.0000000099);-webkit-transform:scale(1.04,1.0000000099)}button[_ngcontent-%COMP%]:focus{border-color:#0000;box-shadow:0 1px 1px #d0d0d0 inset,0 0 8px #dcdcdc;outline:0 none}"]}),l})()},1002:(_,h,e)=>{e.d(h,{bN:()=>t,cA:()=>f,z8:()=>p});var i=e(529);const p={headers:new i.WM({"Content-Type":"application/json",Accept:"application/json"})},t={headers:new i.WM({"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"})},f=[{valueField:"BEN",displayValue:"BENI",latitude:-14.831794,longitude:-64.901793},{valueField:"CBA",displayValue:"COCHABAMBA",latitude:-17.393688,longitude:-66.157119},{valueField:"LPZ",displayValue:"LA PAZ",latitude:-16.49564,longitude:-68.13368},{valueField:"ORU",displayValue:"ORURO",latitude:-17.96987,longitude:-67.114649},{valueField:"PAN",displayValue:"PANDO",latitude:-11.023511,longitude:-68.766225},{valueField:"POT",displayValue:"POTOSI",latitude:-19.57206,longitude:-65.755735},{valueField:"SCZ",displayValue:"SANTA CRUZ",latitude:-17.783558,longitude:-63.182115},{valueField:"SCR",displayValue:"SUCRE",latitude:-19.027878,longitude:-65.262753},{valueField:"TRJ",displayValue:"TARIJA",latitude:-21.538731,longitude:-64.722486}]},5625:(_,h,e)=>{e.d(h,{X:()=>l});var i=e(4482),p=e(5403),t=e(4671),f=e(5963),v=e(8421);function l(c=1/0){let a;a=c&&"object"==typeof c?c:{count:c};const{count:n=1/0,delay:r,resetOnSuccess:u=!1}=a;return n<=0?t.y:(0,i.e)((g,C)=>{let O,S=0;const T=()=>{let M=!1;O=g.subscribe((0,p.x)(C,E=>{u&&(S=0),C.next(E)},void 0,E=>{if(S++<n){const A=()=>{O?(O.unsubscribe(),O=null,T()):M=!0};if(null!=r){const D="number"==typeof r?(0,f.H)(r):(0,v.Xf)(r(E,S)),I=(0,p.x)(C,()=>{I.unsubscribe(),A()},()=>{C.complete()});D.subscribe(I)}else A()}else C.error(E)})),M&&(O.unsubscribe(),O=null,T())};T()})}}}]);