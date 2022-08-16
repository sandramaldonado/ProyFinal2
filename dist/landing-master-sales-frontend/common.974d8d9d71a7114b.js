"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[592],{2584:(_,p,e)=>{e.d(p,{Y:()=>d});var t=e(7065),s=e(4650),h=e(3063),l=e(529);let d=(()=>{class r{constructor(m,a){this.webstoreservice=m,this.httpClient=a,this.apiUrl=`${t.N.BreApiUrl}`}coverageEvaluation(m){console.log(m);const i={headers:{"Content-Type":"application/json",Authorization:"Bearer "+m}};var n=this.webstoreservice.getPlanComposition(),f={productTypeCode:[],compositionPlanCode:n.planCompositionCode,channelCode:"landing"};let y=[];for(let C=0;C<n.planList.length;C++)y.push(n.planList[C].consumptionEntityType);return f.productTypeCode=y,this.httpClient.post(`${this.apiUrl}/productCatalog/coverageEvaluation`,JSON.stringify(f),i)}}return r.\u0275fac=function(m){return new(m||r)(s.LFG(h.f),s.LFG(l.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},7139:(_,p,e)=>{e.d(p,{n:()=>h});var t=e(1135),s=e(4650);let h=(()=>{class l{constructor(){this.captchSource=new t.X(null),this.captchStatus=this.captchSource.asObservable()}setCaptchaStatus(r){this.captchSource.next(r)}}return l.\u0275fac=function(r){return new(r||l)},l.\u0275prov=s.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},5231:(_,p,e)=>{e.d(p,{N:()=>h});var t=e(7579),s=e(4650);let h=(()=>{class l{constructor(){this.products=[],this.listSizeSubject=new t.x,this._listSize=this.listSizeSubject.asObservable()}addToCart(r){this.products.push(r),this.listSizeSubject.next(this.products.length)}getItems(){return this.listSizeSubject.next(this.products.length),this.products}getSize(){return this._listSize}clearCart(){return this.products=[],this.products}}return l.\u0275fac=function(r){return new(r||l)},l.\u0275prov=s.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},3560:(_,p,e)=>{e.d(p,{M:()=>m});var t=e(404),s=e(2843),h=e(262),l=e(7065),d=e(1002),r=e(4650),c=e(529);let m=(()=>{class a{constructor(n){this.http=n,this.products=[],this.product=new t.x,this.httpPostOptions=d.z8,this.httpGetOptions=d.bN}getProducts(){return this.http.get(l.N.url_api_simplekart_mock_server+"/items",this.httpGetOptions)}getProductDetail(n){return this.http.get(l.N.url_api_simplekart_mock_server+"/items/"+n).pipe((0,h.K)(f=>(console.log("error caught in service"),(0,s._)(f))))}}return a.\u0275fac=function(n){return new(n||a)(r.LFG(c.eN))},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},6616:(_,p,e)=>{e.d(p,{B:()=>c});var t=e(529),s=e(5625),h=e(262),l=e(2843),d=e(7065),r=e(4650);let c=(()=>{class m{constructor(i){this.httpClient=i,this.urToken=`${d.N.SSIAuthApiUrl}`,this.httpOptions={headers:new t.WM({"Content-Type":"application/json"})}}gettoken(){return this.httpClient.post(`${this.urToken}`,JSON.stringify({username:"landing",password:"3X4E+U7d1m1XprRamjfaRg=="}),this.httpOptions).pipe((0,s.X)(1),(0,h.K)(this.handleError))}handleError(i){return i.error instanceof ErrorEvent?console.error("An error occurred:",i.error.message):console.error(`Backend returned code ${i.status}, body was: ${i.error}`),(0,l._)("Something bad happened; please try again later.")}}return m.\u0275fac=function(i){return new(i||m)(r.LFG(t.eN))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},404:(_,p,e)=>{e.d(p,{x:()=>t});class t{}},7876:(_,p,e)=>{e.d(p,{G:()=>m});var t=e(4650),s=e(3060),h=e(5231),l=e(7392),d=e(3683),r=e(4859),c=e(1561);let m=(()=>{class a{constructor(n,f){this.router=n,this.cartService=f,this.totalItems$=this.cartService.getSize()}ngOnInit(){this.totalItems$=this.cartService.getSize()}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(s.F0),t.Y36(h.N))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-header"]],decls:31,vars:1,consts:[[1,"container-fluid"],[1,"row"],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon"],[3,"matMenuTriggerFor"],["src","../../../assets/images/pages/header/logo-viva.png","alt","",1,"toolbar-logo"],[1,"toolbar-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon"],["menu","matMenu"],["mat-menu-item","","routerLink","/oferta/orden-compra/"],["mat-menu-item","","routerLink","/detalle-compra/"],["mat-menu-item","","routerLink","/cobertura"],["mat-menu-item","","routerLink","/documentos"],["mat-menu-item","","routerLink","/tomar-foto"],["mat-menu-item","","routerLink","/en-construccion"]],template:function(n,f){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-toolbar")(3,"button",2)(4,"mat-icon",3),t._uU(5,"menu"),t.qZA()(),t._UZ(6,"img",4)(7,"span",5),t.TgZ(8,"button",6)(9,"mat-icon"),t._uU(10,"account_circle"),t.qZA()()(),t.TgZ(11,"mat-menu",null,7)(13,"button",8)(14,"span"),t._uU(15,"Oferta - Orden de Compra"),t.qZA()(),t.TgZ(16,"button",9)(17,"span"),t._uU(18,"Detalle de Compra"),t.qZA()(),t.TgZ(19,"button",10)(20,"span"),t._uU(21,"Cobertura"),t.qZA()(),t.TgZ(22,"button",11)(23,"span"),t._uU(24,"Documentos"),t.qZA()(),t.TgZ(25,"button",12)(26,"span"),t._uU(27,"Tomar foto"),t.qZA()(),t.TgZ(28,"button",13)(29,"span"),t._uU(30,"En Construccion"),t.qZA()()()()()),2&n){const y=t.MAs(12);t.xp6(4),t.Q6J("matMenuTriggerFor",y)}},dependencies:[l.Hw,d.Ye,r.lW,c.VK,c.OP,c.p6,s.rH],styles:[".toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(180deg,#D6F084 0%,rgba(214,240,132,0) 100%);color:#5c339d}.mat-toolbar[_ngcontent-%COMP%]   .toolbar-logo[_ngcontent-%COMP%]{max-width:100px}"]}),a})()},1196:(_,p,e)=>{e.d(p,{A:()=>l});var t=e(4650),s=e(3060),h=e(42);let l=(()=>{class d{constructor(c){this.router=c}ngOnInit(){}detalle(){console.log("asda"),this.router.navigate(["/","detalle-compra"])}}return d.\u0275fac=function(c){return new(c||d)(t.Y36(s.F0))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-almost-done"]],decls:9,vars:1,consts:[["id","padre",1,"d-flex","flex-column","justify-content-around","align-items-center"],["id","banner"],["id","presiona"],["src","../../../../assets/images/iconos/down.png"],["id","boton",3,"content","click"],["src","../../../../assets/images/iconos/moto.png"]],template:function(c,m){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3," Ya casi terminamos "),t.qZA(),t.TgZ(4,"p",2),t._uU(5," Presiona en tu detalle de compra para revisar el estado y terminar tu compra. "),t.qZA(),t._UZ(6,"img",3),t.qZA(),t.TgZ(7,"app-button",4),t.NdJ("click",function(){return m.detalle()}),t._UZ(8,"span",5),t.qZA()()),2&c&&(t.xp6(7),t.Q6J("content","Detalle de Compra"))},dependencies:[h.r],styles:["#banner[_ngcontent-%COMP%]{display:block;text-align:center;position:relative;width:341px;padding:5%;height:138px;background:linear-gradient(180deg,rgba(214,240,132,0) 0%,#D6F084 100%);border-radius:10px}#padre[_ngcontent-%COMP%]{justify-content:center;align-items:center;display:block}#boton[_ngcontent-%COMP%]{position:relative;display:block}#presiona[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:16px;text-align:center;color:#5c339d}"]}),d})()},635:(_,p,e)=>{e.r(p),e.d(p,{AlmostDoneModule:()=>i});var t=e(6895),s=e(3546),h=e(4006),l=e(4466),d=e(3060),r=e(1196),c=e(4650);const m=[{path:"",component:r.A}];let a=(()=>{class n{}return n.\u0275fac=function(y){return new(y||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[d.Bz.forChild(m),d.Bz]}),n})(),i=(()=>{class n{}return n.\u0275fac=function(y){return new(y||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[t.ez,a,s.QW,l.m,h.u5,h.UX]}),n})()},8887:(_,p,e)=>{e.d(p,{$:()=>r});var t=e(4650),s=e(7065),h=e(3063),l=e(9336);function d(c,m){if(1&c&&t._UZ(0,"ax-lazy-element",4),2&c){const a=t.oxw();t.s9C("paramIn",a.toSendString(a.microFrontParamIn)),t.s9C("paramClass",a.toSendString(a.paramClass))}}let r=(()=>{class c{constructor(a){this.webstoreService=a,this.microFrontParamIn={theme:"light-green",orderType:"SALES",orderId:"1000000568",channel:"LANDING",entityType:"customerId",entityId:"1098757",language:"es",termsOfService:"{'mode':'optional','url':'www.google.com'}",amount:"150.90",currency:"150.90",cart:"[{'sellerId':'NT', 'sellerDesc':'Viva', 'detail':[{'code':'HU-P20','desc':'HUAWEI P20 Pro', 'amount':120.90', 'currency':'Bs'},{'code':'HF120','desc':'Hands free', 'amount':30.00'', 'currency':'Bs'}]]",recurring:"required",user:{},microfrontId:"card-pay-microfront-app"},this.paramClass={rowItem:"row",containerInput:"col-12",containerInputMiddle:"col-6",containerField:"d-flex flex-column justify-content-around align-items-center",sizeForm:"tama\xf1odiv form-field",labelInput:"has-events",labelAlert:"matError text-danger",txtCenter:"text-center",customBtn:"custom-button",appearance:"outline",floatLabel:"always"},this.nextCoverageStep=new t.vpe,this.title="Configura tu tarjeta de cr\xe9dito o d\xe9bito",this.message="Introduce tu tarjeta de d\xe9bito o cr\xe9dito para que puedas pagar tus servicios VIVA cada mes.",console.log("########environment"),console.log(s.N)}ngOnInit(){console.log("*******getAuthenticateInformation"),console.log(this.webstoreService.getClientInformation()),this.microFrontParamIn.user=this.webstoreService.getClientInformation(),console.log(this.microFrontParamIn.user),console.log("*******getAuthenticateInformation"),console.log(this.webstoreService.getAuthenticateInformation()),console.log("*******getMovilListInformation"),console.log(this.webstoreService.getMovilListInformation())}toSendString(a){return JSON.stringify(a)}next(){this.nextCoverageStep.emit(!0)}}return c.\u0275fac=function(a){return new(a||c)(t.Y36(h.f))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-card-payment"]],outputs:{nextCoverageStep:"nextCoverageStep"},decls:9,vars:4,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[3,"paramIn","paramClass",4,"axLazyElementDynamic","axLazyElementDynamicUrl"],[3,"paramIn","paramClass"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"h3"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card"),t.YNc(8,d,1,2,"ax-lazy-element",3),t.qZA()()()()),2&a&&(t.xp6(4),t.Oqu(i.title),t.xp6(2),t.Oqu(i.message),t.xp6(2),t.Q6J("axLazyElementDynamic","card-pay-microfront-app")("axLazyElementDynamicUrl","https://view360.devnt.ssidevops.com/card-pay-microfront-app/main.js"))},dependencies:[l.gG],styles:['@charset "UTF-8";mat-label[_ngcontent-%COMP%]{background:white}mat-label.has-events[_ngcontent-%COMP%]{pointer-events:auto;color:purple}mat-form-field[_ngcontent-%COMP%]{width:100%}  .mat-form-field-outline-start{color:purple!important;border-color:purple!important;border-radius:9px 0 0 9px!important;min-width:9px!important}  .mat-form-field-outline-end{color:purple!important;border-color:purple!important;border-radius:0 9px 9px 0!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:purple!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:purple!important}.tama\\f1odiv[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}.button-active[_ngcontent-%COMP%]{background-color:#5c339d;font-size:1rem!important;padding:12px 10px;border-radius:20px;color:#fff;width:285px;height:44px!important;box-shadow:0 4px 15px #0000004d;font-family:MUSEO500-REGULAR}@media (max-width: 768px){.button-active[_ngcontent-%COMP%]{margin-right:0!important;font-size:.9em!important}}@media (max-width: 576px){.button-active[_ngcontent-%COMP%]{height:45px}}.button-wrap[_ngcontent-%COMP%]{margin-top:1.5vh}.button-disactived[_ngcontent-%COMP%]{background:#e0e0e0;font-size:1.1em;border-radius:20px;color:#000;margin-top:1.5vh;width:300px;height:40px;font-weight:700;border:2px solid #8260A5;font-family:MUSEO500-REGULAR;box-sizing:border-box}button[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:all .4s ease-in-out}.button-message[_ngcontent-%COMP%]{color:#fff;font-weight:900;font-size:small;font-family:MUSEO500-REGULAR;margin-bottom:4px}.button-active[_ngcontent-%COMP%]:hover{transform:scale(1.04,1.0000000099);-ms-transform:scale(1.04,1.0000000099);-webkit-transform:scale(1.04,1.0000000099)}button[_ngcontent-%COMP%]:focus{border-color:#0000;box-shadow:0 1px 1px #d0d0d0 inset,0 0 8px #dcdcdc;outline:0 none}']}),c})()},5943:(_,p,e)=>{e.r(p),e.d(p,{CardPaymentModule:()=>a});var t=e(9336),s=e(6895),h=e(4466),l=e(8887),d=e(3060),r=e(4650);const c=[{path:"",component:l.$}];let m=(()=>{class i{}return i.\u0275fac=function(f){return new(f||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[d.Bz.forChild(c),d.Bz]}),i})(),a=(()=>{class i{}return i.\u0275fac=function(f){return new(f||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[s.ez,m,h.m,t.zB]}),i})()},3517:(_,p,e)=>{e.d(p,{W:()=>y});var t=e(4650),s=e(4006),h=e(529),l=e(7065),d=e(3063);let r=(()=>{class C{constructor(O,v){this.httpClient=O,this.webstoreservice=v,this.url=`${l.N.EmailApiUrl}`,this.httpOptions={headers:new h.WM({"Content-Type":"application/json",Accept:"application/json"})}}sendValidationEmail(O){var v=this.webstoreservice.getClientInformation();return this.httpClient.post(`${this.url}`,JSON.stringify({email:v.email&&""!=v.email?v.email:"cristhian.valencia@nuevatel.com",code:O}),this.httpOptions)}}return C.\u0275fac=function(O){return new(O||C)(t.LFG(h.eN),t.LFG(d.f))},C.\u0275prov=t.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();var c=e(6895),m=e(3546),a=e(42);function i(C,M){1&C&&(t.TgZ(0,"small",23),t._uU(1,"El codigo es obligatorio"),t.qZA())}function n(C,M){1&C&&(t.TgZ(0,"small",23),t._uU(1,"El codigo no es valido"),t.qZA())}function f(C,M){1&C&&(t.TgZ(0,"small",24),t._uU(1,"El codigo es valido"),t.qZA())}let y=(()=>{class C{constructor(O,v){this.emailService=O,this.webstoreservice=v,this.validCode=!1,this.disabled=!0,this.emailValidationForm=new s.cw({codeValidationEmail:new s.NI("",[s.kI.required])}),this.nextCheckEmailStep=new t.vpe}get emailCode(){return this.emailValidationForm.get("codeValidationEmail")}ngOnInit(){console.log("check email"),this.sendValidationCode()}validateEmail(){console.log("emailcode input",this.emailCode?.value),console.log("randomemailcode",this.randomEmailCode),this.emailCode?.value==this.randomEmailCode&&(this.disabled=!1,this.validCode=!0,this.next())}sendValidationCode(){this.randomEmailCode=this.randomNumber(),this.emailService.sendValidationEmail(this.randomEmailCode).subscribe(v=>{console.log(v)})}randomNumber(){const O="0123456789",P=[];for(let b=0;b<4;b++){let x=Math.floor(Math.random()*O.length+1);-1===P.indexOf(O[x])?P.push(O[x]):b--}return P.join("")}next(){this.webstoreservice.saveDataInSession("checkemail",{validationCode:this.randomEmailCode}),this.nextCheckEmailStep.emit(!0)}}return C.\u0275fac=function(O){return new(O||C)(t.Y36(r),t.Y36(d.f))},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-check-email"]],outputs:{nextCheckEmailStep:"nextCheckEmailStep"},decls:35,vars:7,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],[1,"my-3","border"],[1,"text-center"],["action","",3,"formGroup"],["formEmail","ngForm"],[1,"d-flex","flex-column","justify-content-between","align-items-center","py-5"],["src","assets/images/iconos/email.png","alt","",1,"pb-2"],[1,"mb-3"],["for","codeValidationEmail",1,"form-label"],[1,"form-outline"],["id","codeValidationEmail","name","codeValidationEmail","formControlName","codeValidationEmail","type","text","value","Codigo de validaci\xf3n","aria-label","readonly input example","my-1","",1,"form-control"],[1,"d-flex","flex-column"],["class","text-danger",4,"ngIf"],["class","text-success",4,"ngIf"],["id","emailHelp",1,"form-text"],[1,"form-text",3,"click"],[1,"form-text"],[1,""],[1,"row","d-flex","flex-column","justify-content-between","align-items-center"],[3,"disabled","content","click"],[1,"text-danger"],[1,"text-success"]],template:function(O,v){if(1&O&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"h3"),t._uU(5,"Validaci\xf3n de email"),t.qZA(),t.TgZ(6,"p"),t._uU(7,"Es necesario validar tu correo electr\xf3nico para el env\xedo de facturas electr\xf3nicas y otras notificaciones."),t.qZA(),t.TgZ(8,"mat-card",4)(9,"mat-card-content",5)(10,"form",6,7)(12,"div",8),t._UZ(13,"img",9),t.TgZ(14,"p"),t._uU(15,"No olvides que ser\xe1 utilizado como m\xe9todo de contacto oficial "),t.qZA(),t.TgZ(16,"div",10)(17,"label",11),t._uU(18,"Codigo de validaci\xf3n"),t.qZA(),t.TgZ(19,"div",12),t._UZ(20,"input",13),t.TgZ(21,"div",14),t.YNc(22,i,2,0,"small",15),t.YNc(23,n,2,0,"small",15),t.YNc(24,f,2,0,"small",16),t.qZA()(),t.TgZ(25,"div",17),t._uU(26,"Introduce el codigo recibido"),t.qZA(),t.TgZ(27,"a",18),t.NdJ("click",function(){return v.sendValidationCode()}),t._uU(28,"Reenviar codigo"),t.qZA(),t.TgZ(29,"div",19),t._uU(30),t.qZA()(),t.TgZ(31,"p",20),t._uU(32,"Te llegar\xe1 un correo de confirmaci\xf3n a tu correo electr\xf3nico para validarlo."),t.qZA(),t.TgZ(33,"div",21)(34,"app-button",22),t.NdJ("click",function(){return v.validateEmail()}),t.qZA()()()()()()()()()()),2&O){const P=t.MAs(11);t.xp6(10),t.Q6J("formGroup",v.emailValidationForm),t.xp6(12),t.Q6J("ngIf",(null==v.emailCode?null:v.emailCode.invalid)&&(null==v.emailCode?null:v.emailCode.touched)),t.xp6(1),t.Q6J("ngIf",!v.validCode&&P.submitted),t.xp6(1),t.Q6J("ngIf",v.validCode&&P.submitted),t.xp6(6),t.hij(" ",v.randomEmailCode,""),t.xp6(4),t.Q6J("disabled",v.emailValidationForm.invalid)("content","Validar correo electronico")}},dependencies:[c.O5,m.a8,m.dn,a.r,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:[".mat-card[_ngcontent-%COMP%]{padding:1px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white;color:#848484}"]}),C})()},3434:(_,p,e)=>{e.r(p),e.d(p,{CheckEmailModule:()=>i});var t=e(6895),s=e(3546),h=e(3060),l=e(3517),d=e(4650);const r=[{path:"",component:l.W}];let c=(()=>{class n{}return n.\u0275fac=function(y){return new(y||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[h.Bz.forChild(r),h.Bz]}),n})();var m=e(4006),a=e(4466);let i=(()=>{class n{}return n.\u0275fac=function(y){return new(y||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[t.ez,s.QW,c,a.m,m.u5,m.UX]}),n})()},5428:(_,p,e)=>{e.d(p,{h:()=>b});var t=e(4650),s=e(529),h=e(5625),l=e(262),d=e(2843),r=e(7065);let c=(()=>{class x{constructor(o){this.httpClient=o,this.apiUrl=`${r.N.MovilNumberListApiUrl}`,this.headers=new s.WM,this.httpOptions={}}getMovilList(o,u){return this.httpClient.post(`${this.apiUrl}`,o,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+u}}).pipe((0,h.X)(1),(0,l.K)(this.handleError))}handleError(o){return o.error instanceof ErrorEvent?console.error("An error occurred:",o.error.message):console.error(`Backend returned code ${o.status}, body was: ${o.error}`),(0,d._)("Something bad happened; please try again later.")}}return x.\u0275fac=function(o){return new(o||x)(t.LFG(s.eN))},x.\u0275prov=t.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"}),x})();var m=e(3063),a=e(4527),i=e(4006),n=e(6895),f=e(3546),y=e(1948),C=e(42);function M(x,A){1&x&&t._UZ(0,"div")}function O(x,A){if(1&x){const o=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"mat-radio-button",14),t.NdJ("change",function(E){t.CHM(o);const g=t.oxw(2);return t.KtG(g.radioChange(E))}),t.TgZ(3,"span"),t._uU(4),t.qZA()()()()}if(2&x){const o=A.$implicit;t.xp6(1),t.Akn(o.style),t.Tol(o.description),t.xp6(1),t.Q6J("value",o.value)("checked",o.checked),t.xp6(2),t.hij("\xa0",o.name,"")}}function v(x,A){if(1&x){const o=t.EpF();t.TgZ(0,"div",12)(1,"div",15)(2,"a",16),t.NdJ("click",function(){t.CHM(o);const E=t.oxw(2);return t.KtG(E.clickme())}),t._uU(3," Mas opciones.."),t.qZA()()()}}function P(x,A){if(1&x&&(t.TgZ(0,"div",8)(1,"h4",9)(2,"b"),t._uU(3,"MOVIL"),t.qZA()(),t.TgZ(4,"p"),t._uU(5,"Elije un N\xfamero"),t.qZA(),t.YNc(6,O,5,7,"div",10),t.YNc(7,v,4,0,"div",11),t.qZA()),2&x){const o=t.oxw();t.xp6(6),t.Q6J("ngForOf",o.linesList),t.xp6(1),t.Q6J("ngIf",5==o.limitLine)}}let b=(()=>{class x{constructor(o,u,E,g){this.movilListService=o,this.webstoreservice=u,this.ordersService=E,this.formBuilder=g,this.linesList=[],this.internetList=[],this.tvList=[],this.movilState=!1,this.internetState=!1,this.entertainmentState=!1,this.movilLine="",this.wanLine="",this.tvLine="",this.limitLine=5,this.nextMovilListStep=new t.vpe,this.title="Elije tu N\xfamero",this.message="Te damos algunas opciones de l\xedneas telef\xf3nicas para que puedas tener tu nuevo plan con un n\xfamero telef\xf3nico que te agrade.",this.visited=!1,this.key=sessionStorage.getItem("key")}ngOnInit(){this.armadoJsonScoring(),this.searchList()}armadoJsonScoring(){this.planComposition=this.webstoreservice.getPlanComposition(),this.planList=this.planComposition?.planList,console.log(this.planComposition),console.log(this.planList),this.productTypeCode=[];for(let o=0;o<this.planList.length;o++)this.productTypeCode.push(this.planList[o].consumptionEntityType);this.planService=JSON.stringify({userCode:"14",ceTypeCodeList:this.productTypeCode,processId:165435435})}searchList(){this.listagroup=[],this.movilListService.getMovilList(this.planService,this.key).subscribe(o=>{this.numberList=o;const u=this.numberList.data.data.movil;if(u.length>0){this.movilState=!0,this.listagroup.push("movil_control");for(let L=0;L<this.limitLine;L++)L<this.limitLine&&(0==L?(this.movilLine=u[L],this.linesList.push({id:L.toString(),name:u[L],value:u[L],description:"alert alert-info divOption",style:"background-color: #d3a1f9; color: white; border: 4px solid #5C339D; border-radius:12px;",checked:!0})):this.linesList.push({id:L.toString(),name:u[L],value:u[L],description:"alert alert-secondary divOption",style:"color: black; border-radius:12px;",checked:!1}))}const E=this.numberList.data.data.ifixed,g=this.numberList.data.data.tv;console.log(E),E.length>0&&(this.wanLine=E[0]),console.log(g),g.length>0&&(this.tvLine=g[0]),console.log(this.listagroup),console.log(this.linesList)},o=>{console.log(o)})}next(){let o={},u={},E={},g={};""!=this.movilLine&&(o={movil:[this.movilLine]}),""!=this.wanLine&&(u={ifixed:[this.wanLine]}),""!=this.tvLine&&(E={tv:[this.tvLine]}),g=Object.assign(o,u,E);let L=JSON.stringify({data:{transactionId:this.numberList.data.transactionId,data:g}});this.webstoreservice.saveMovilListinformation(L);let T=this.webstoreservice.getMovilListInformation();console.log(T),this.visited=!0,this.registerAactivation(g),this.nextMovilListStep.emit(!0)}radioChange(o){var u=o.source.value;const E=this.numberList.data.data.movil;this.linesList=[],this.movilLine=o.source.value;for(let g=0;g<this.limitLine;g++)this.linesList.push(u==E[g]?{id:g.toString(),name:E[g],value:E[g],description:"alert alert-info divOption",style:"background-color: #d3a1f9; color: white; border: 4px solid #5C339D; border-radius:12px;",checked:!0}:{id:g.toString(),name:E[g],value:E[g],description:"alert alert-secondary divOption",style:"color: black; border-radius:12px;",checked:!1})}clickme(){this.limitLine=10,this.linesList=[];const o=this.numberList.data.data.movil;if(o.length>0){this.movilState=!0,this.listagroup.push("movil_control");for(let u=0;u<o.length;u++)u<this.limitLine&&this.linesList.push(0==u?{id:u.toString(),name:o[u],value:o[u],description:"alert alert-info divOption",style:"background-color: #AC99CE; color: white; border: 4px solid #5C339D; border-radius:12px;",checked:!0}:{id:u.toString(),name:o[u],value:o[u],description:"alert alert-secondary divOption",style:"color: black; border-radius:12px;",checked:!1})}}registerAactivation(o){if(console.log(o),!o)return;let E;this.webstoreservice.getDataInSession("addressData").forEach(T=>{T.selected&&(E=T)});let g=[];o.movil&&o.movil.length>0&&g.push({planType:"MOVIL",serviceIdentifier:o.movil[0]}),o.ifixed&&o.ifixed.length>0&&g.push({planType:"IFIXED",serviceIdentifier:o.ifixed[0],address:{addressId:E?.addressId,addressTypeCode:"INS_ADDR"}}),o.tv&&o.tv.length>0&&g.push({planType:"TV",serviceIdentifier:o.tv[0]});const L={orderId:this.webstoreservice.getDataInSession("orderMainId"),sequence:4,userId:this.webstoreservice.getDataInSession("userId"),microFrontendId:"activation-data-microfront-app",microFrontendData:JSON.stringify(g),statusCode:"INI"};this.ordersService.registerOrderView(L,this.webstoreservice.getDataInSession("token")).subscribe(T=>{console.log(T)})}}return x.\u0275fac=function(o){return new(o||x)(t.Y36(c),t.Y36(m.f),t.Y36(a.N),t.Y36(i.qu))},x.\u0275cmp=t.Xpm({type:x,selectors:[["app-movil-list"]],outputs:{nextMovilListStep:"nextMovilListStep"},decls:15,vars:5,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],["novalidate","","id","validationForm",1,"form",2,"background-color","white"],[4,"ngIf","ngIfThen"],["trueMovil",""],[1,"text-center"],[3,"content","click"],[1,"row",2,"color","black"],[2,"color","black"],["class","col-6 col-md-6 col-sm-6",4,"ngFor","ngForOf"],["class","col-6 col-md-6 col-sm-6",4,"ngIf"],[1,"col-6","col-md-6","col-sm-6"],["role","alert"],["name","movil",3,"value","checked","change"],["role","alert",1,"alert","alert-light","divOption",2,"text-align","center"],["href","javascript: void(0);",1,"linkMore",3,"click"]],template:function(o,u){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"h3"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card")(8,"mat-card-content")(9,"form",3),t.YNc(10,M,1,0,"div",4),t.YNc(11,P,8,2,"ng-template",null,5,t.W1O),t.TgZ(13,"div",6)(14,"app-button",7),t.NdJ("click",function(){return u.next()}),t.qZA()()()()()()()()),2&o){const E=t.MAs(12);t.xp6(4),t.Oqu(u.title),t.xp6(2),t.Oqu(u.message),t.xp6(4),t.Q6J("ngIf",1==u.movilState)("ngIfThen",E),t.xp6(4),t.Q6J("content","Continuar")}},dependencies:[n.sg,n.O5,i._Y,i.JL,i.F,f.a8,f.dn,y.U0,C.r],styles:["mat-card-header[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%]{font-size:2.5vh;text-align:left;color:purple;font-family:MUSEO900-REGULAR;margin:0}mat-card-header[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%]{font-size:1.8vh;text-align:left;color:#000;font-family:MUSEO600-REGULAR}mat-card-title[_ngcontent-%COMP%]{margin-bottom:.5vh}.mat-icon-button[_ngcontent-%COMP%]{width:4vh!important;height:auto!important;margin-top:-6px;margin-right:-3px}mat-card-content[_ngcontent-%COMP%]{background:#F0F0F0;color:purple;border-radius:0 0 25px 25px}.link-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:right;font-weight:700;text-decoration:none;color:#b302a7}.mat-card[_ngcontent-%COMP%]{padding:10px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white}mat-form-field[_ngcontent-%COMP%]{width:100%}.divOption[_ngcontent-%COMP%]{margin:5px}.linkMore[_ngcontent-%COMP%]{text-align:right;font-weight:700;text-decoration:none;color:#00008b}  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#fff!important;border-color:#fff!important;border-radius:8px}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#5c339d!important;border-color:#fff!important;border-radius:8px}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{background-color:#fff!important;border-color:#fff!important;border-radius:8px}"]}),x})()},5380:(_,p,e)=>{e.r(p),e.d(p,{MovilListModule:()=>C});var t=e(6895),s=e(3060),h=e(5428),l=e(4650);const d=[{path:"",component:h.h}];let r=(()=>{class M{}return M.\u0275fac=function(v){return new(v||M)},M.\u0275mod=l.oAB({type:M}),M.\u0275inj=l.cJS({imports:[s.Bz.forChild(d),s.Bz]}),M})();var c=e(3720),m=e(1948),a=e(4859),i=e(4006),n=e(3546),f=e(4466),y=e(9336);let C=(()=>{class M{}return M.\u0275fac=function(v){return new(v||M)},M.\u0275mod=l.oAB({type:M}),M.\u0275inj=l.cJS({imports:[t.ez,r,c.O,i.u5,i.UX,n.QW,a.ot,m.Fk,f.m,y.zB]}),M})()}}]);