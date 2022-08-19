"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[592],{2584:(L,g,e)=>{e.d(g,{Y:()=>f});var t=e(7065),i=e(4650),M=e(3063),l=e(529);let f=(()=>{class p{constructor(v,d){this.webstoreservice=v,this.httpClient=d,this.apiUrl=`${t.N.BreApiUrl}`}coverageEvaluation(v){console.log(v);const c={headers:{"Content-Type":"application/json",Authorization:"Bearer "+v}};var s=this.webstoreservice.getPlanComposition(),h={productTypeCode:[],compositionPlanCode:s.planCompositionCode,channelCode:"landing"};let u=[];for(let a=0;a<s.planList.length;a++)u.push(s.planList[a].consumptionEntityType);return h.productTypeCode=u,this.httpClient.post(`${this.apiUrl}/productCatalog/coverageEvaluation`,JSON.stringify(h),c)}}return p.\u0275fac=function(v){return new(v||p)(i.LFG(M.f),i.LFG(l.eN))},p.\u0275prov=i.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},7139:(L,g,e)=>{e.d(g,{n:()=>M});var t=e(1135),i=e(4650);let M=(()=>{class l{constructor(){this.captchSource=new t.X(null),this.captchStatus=this.captchSource.asObservable()}setCaptchaStatus(p){this.captchSource.next(p)}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275prov=i.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},5231:(L,g,e)=>{e.d(g,{N:()=>M});var t=e(7579),i=e(4650);let M=(()=>{class l{constructor(){this.products=[],this.listSizeSubject=new t.x,this._listSize=this.listSizeSubject.asObservable()}addToCart(p){this.products.push(p),this.listSizeSubject.next(this.products.length)}getItems(){return this.listSizeSubject.next(this.products.length),this.products}getSize(){return this._listSize}clearCart(){return this.products=[],this.products}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275prov=i.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},3560:(L,g,e)=>{e.d(g,{M:()=>v});var t=e(404),i=e(2843),M=e(262),l=e(7065),f=e(1002),p=e(4650),S=e(529);let v=(()=>{class d{constructor(s){this.http=s,this.products=[],this.product=new t.x,this.httpPostOptions=f.z8,this.httpGetOptions=f.bN}getProducts(){return this.http.get(l.N.url_api_simplekart_mock_server+"/items",this.httpGetOptions)}getProductDetail(s){return this.http.get(l.N.url_api_simplekart_mock_server+"/items/"+s).pipe((0,M.K)(h=>(console.log("error caught in service"),(0,i._)(h))))}}return d.\u0275fac=function(s){return new(s||d)(p.LFG(S.eN))},d.\u0275prov=p.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},404:(L,g,e)=>{e.d(g,{x:()=>t});class t{}},7876:(L,g,e)=>{e.d(g,{G:()=>v});var t=e(4650),i=e(3060),M=e(5231),l=e(7392),f=e(3683),p=e(4859),S=e(1561);let v=(()=>{class d{constructor(s,h){this.router=s,this.cartService=h,this.totalItems$=this.cartService.getSize()}ngOnInit(){this.totalItems$=this.cartService.getSize()}}return d.\u0275fac=function(s){return new(s||d)(t.Y36(i.F0),t.Y36(M.N))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-header"]],decls:31,vars:1,consts:[[1,"container-fluid"],[1,"row"],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon"],[3,"matMenuTriggerFor"],["src","../../../assets/images/pages/header/logo-viva.png","alt","",1,"toolbar-logo"],[1,"toolbar-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon"],["menu","matMenu"],["mat-menu-item","","routerLink","/oferta/orden-compra/"],["mat-menu-item","","routerLink","/detalle-compra/"],["mat-menu-item","","routerLink","/cobertura"],["mat-menu-item","","routerLink","/documentos"],["mat-menu-item","","routerLink","/tomar-foto"],["mat-menu-item","","routerLink","/en-construccion"]],template:function(s,h){if(1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-toolbar")(3,"button",2)(4,"mat-icon",3),t._uU(5,"menu"),t.qZA()(),t._UZ(6,"img",4)(7,"span",5),t.TgZ(8,"button",6)(9,"mat-icon"),t._uU(10,"account_circle"),t.qZA()()(),t.TgZ(11,"mat-menu",null,7)(13,"button",8)(14,"span"),t._uU(15,"Oferta - Orden de Compra"),t.qZA()(),t.TgZ(16,"button",9)(17,"span"),t._uU(18,"Detalle de Compra"),t.qZA()(),t.TgZ(19,"button",10)(20,"span"),t._uU(21,"Cobertura"),t.qZA()(),t.TgZ(22,"button",11)(23,"span"),t._uU(24,"Documentos"),t.qZA()(),t.TgZ(25,"button",12)(26,"span"),t._uU(27,"Tomar foto"),t.qZA()(),t.TgZ(28,"button",13)(29,"span"),t._uU(30,"En Construccion"),t.qZA()()()()()),2&s){const u=t.MAs(12);t.xp6(4),t.Q6J("matMenuTriggerFor",u)}},dependencies:[l.Hw,f.Ye,p.lW,S.VK,S.OP,S.p6,i.rH],styles:[".toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(180deg,#D6F084 0%,rgba(214,240,132,0) 100%);color:#5c339d}.mat-toolbar[_ngcontent-%COMP%]   .toolbar-logo[_ngcontent-%COMP%]{max-width:100px}"]}),d})()},4021:(L,g,e)=>{e.d(g,{$:()=>h});var t=e(7065),i=e(4650),M=e(3063),l=e(529),f=e(262);let p=(()=>{class u{constructor(o){this.http=o}post(o,n,m){return this.http.post(this.getURL(o),n,this.getOptions(o,!0,null,m)).pipe((0,f.K)(C=>this.handleErrorConnection(C)))}handleErrorConnection(o){throw console.log(o.error.message),new Error(o&&o.error?o.error.message:"Method not implemented.")}getOptions(o,n,m,C){let b;if(b={headers:new l.WM},b.headers=b.headers.append("Accept","application/json"),C&&(b.headers=b.headers.append("Authorization",`Bearer ${C.token}`)),o&&n){const E=new l.LE({fromObject:o});b.params=E}return m&&(b.responseType=m),b}getURL(o){let n=`${t.N.endPoint}${o}`;return console.log(n),n}}return u.\u0275fac=function(o){return new(o||u)(i.LFG(l.eN))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})(),S=(()=>{class u{constructor(o){this.api=o}startOrder(o,n){return this.api.post("/workflow/sales/startOrder",n,{token:o}).pipe()}}return u.\u0275fac=function(o){return new(o||u)(i.LFG(p))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})();var v=e(3060),d=e(8423),c=e(9336);function s(u,a){if(1&u){const o=i.EpF();i.TgZ(0,"card-pay-microfront-app",5),i.NdJ("dataPayMent",function(m){i.CHM(o);const C=i.oxw();return i.KtG(C.dataPayMent(m))}),i.qZA()}if(2&u){const o=i.oxw();i.s9C("paramIn",o.toSendString(o.microFrontParamIn)),i.s9C("paramClass",o.toSendString(o.paramClass))}}let h=(()=>{class u{constructor(o,n,m,C){this.webstoreService=o,this.salesService=n,this.router=m,this.spinner=C,this.title="Configura tu tarjeta de cr\xe9dito o d\xe9bito",this.message="Introduce tu tarjeta de d\xe9bito o cr\xe9dito, si activas tus pagos autom\xe1ticos podr\xe1s pagar tus servicios VIVA cada mes.",this.microFrontKeys={url:t.N.urlCardPayMicrofrontApp,id:"card-pay-microfront-app"},this.microFrontParamIn={},this.paramClass={rowItem:"row",col1:"col-1",col11:"col-11",col12:"col-12",col6:"col-6",sizeForm:"tama\xf1odiv form-field",labelInput:"hasEvents",labelAlert:"matError text-danger",txtCenter:"text-center",customBtn:"custom-button",appearance:"outline",floatLabel:"always",backgroundgreend:"backgroundgreend",p15:"padding15",aCenter:"align-items-center",txtEnd:"text-end"},this.paymentMethod=!1}ngOnInit(){const o=this.webstoreService.getDataInSession("orderMainId");this.person=this.webstoreService.getClientInformation(),console.log("*****TOKEN");const m=this.webstoreService.getDataInSession("token");console.log(m),this.offertotaltariff=this.webstoreService.getDataInSession("offertotaltariff"),console.log("****this.offertotaltariff"),console.log(this.offertotaltariff),this.fullNames=this.getNames(),this.fullLastNames=this.getLastNames(),this.statusscoring=this.webstoreService.getDataInSession("statusscoring"),console.log("******statusscoring"),console.log(this.statusscoring);const C=this.getRecurring(this.statusscoring);console.log("*******descRecurring"),console.log(C),this.code=this.webstoreService.getOfferConsuptioncode(),console.log("******code OfferConsuptioncode");const b=this.webstoreService.getDataInSession("automaticpayment");console.log(this.code);const E=this.webstoreService.getDataInSession("paymentMethod");this.microFrontParamIn={theme:"light-green",orderType:"SALES",orderId:o||null,channel:"LANDING",entityType:"partyId",entityId:this.person&&this.person.personId?this.person.personId:null,language:"es",termsOfService:{mode:"required",url:"https://www.viva.com.bo/"},currency:"BOB",cart:[{sellerId:"NT",sellerDesc:"Viva"}],recurring:{mode:C,show:this.visible(),checked:b},fullNames:this.fullNames,fullLastNames:this.fullLastNames,uniqueId:null,payAmountMode:"required",user:this.person,amount:this.offertotaltariff,paymentMethod:E,token:m}}visible(){console.log(this.code);let o=!1;return"CCOPOS"==this.code&&(o=!0),o}getRecurring(o){var n="preselected";return"NORMAL"==o&&(n="required"),"CCOPOS"==this.code&&"EXPRESS"==o&&(n="optional"),n}getNames(){const o=this.person;let n=o.name;return null!=o.middleName&&(n=n+" "+o.middleName),n.trim()}getLastNames(){const o=this.person;let n=o.lastName1;return null!=o.lastName2&&(n=n+" "+o.lastName2),n.trim()}toSendString(o){return JSON.stringify(o)}dataPayMent(o){if(o){this.spinner.show(),console.log(o);const n=this.webstoreService.getDataInSession("offernumberofentities"),m=this.webstoreService.getDataInSession("ordermainid"),C=this.webstoreService.getDataInSession("plancompositioncode"),b={orderNumber:m,saleType:this.statusscoring,processType:"PTFSALE",planCodeList:[C],rawData:"",totalPrice:"0",totalItems:n,deliveryMethod:"MANUAL",requiresCashbox:"0",requiresBonification:"0",requiresCustomerApproval:"0",requiresValidateCustomerData:"0",system:"LANDING"};console.log(b),this.salesService.startOrder(this.webstoreService.getDataInSession("token"),b).subscribe(E=>{console.log(E),this.spinner.hide(),this.router.navigate(["/payment-done"])})}}}return u.\u0275fac=function(o){return new(o||u)(i.Y36(M.f),i.Y36(S),i.Y36(v.F0),i.Y36(d.t2))},u.\u0275cmp=i.Xpm({type:u,selectors:[["app-card-payment"]],decls:9,vars:3,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[1,"pFont"],[3,"paramIn","paramClass","dataPayMent",4,"axLazyElement"],[3,"paramIn","paramClass","dataPayMent"]],template:function(o,n){1&o&&(i.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"h3"),i._uU(4),i.qZA(),i.TgZ(5,"p",3),i._uU(6),i.qZA(),i._UZ(7,"mat-card"),i.YNc(8,s,1,2,"card-pay-microfront-app",4),i.qZA()()()),2&o&&(i.xp6(4),i.Oqu(n.title),i.xp6(2),i.Oqu(n.message),i.xp6(2),i.Q6J("axLazyElement",n.microFrontKeys.url))},dependencies:[c.xY],styles:['@charset "UTF-8";  .pFont{font-family:Roboto;color:#8c8c8d}  .backgroundgreend{background:#DFF39F;border-radius:15px;padding:15px}  .padding15{padding:15px}mat-label.hasEvents[_ngcontent-%COMP%]{pointer-events:auto;color:#5c349d}mat-form-field[_ngcontent-%COMP%]{width:95%}input[_ngcontent-%COMP%]{color:#5c349d}#icon[_ngcontent-%COMP%]{position:absolute;display:block;bottom:.5rem;right:.1rem;opacity:.5!important;-webkit-user-select:none;user-select:none;cursor:pointer}  .tama\\f1odiv{margin-left:5px;margin-right:5px}  .matError{text-align:right;margin-top:-7px}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{opacity:.3}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#0009!important}  .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#0009!important}  .mat-slide-toggle.mat-disabled{opacity:1!important}']}),u})()},5943:(L,g,e)=>{e.r(g),e.d(g,{CardPaymentModule:()=>d});var t=e(9336),i=e(6895),M=e(4466),l=e(4021),f=e(3060),p=e(4650);const S=[{path:"",component:l.$}];let v=(()=>{class c{}return c.\u0275fac=function(h){return new(h||c)},c.\u0275mod=p.oAB({type:c}),c.\u0275inj=p.cJS({imports:[f.Bz.forChild(S),f.Bz]}),c})(),d=(()=>{class c{}return c.\u0275fac=function(h){return new(h||c)},c.\u0275mod=p.oAB({type:c}),c.\u0275inj=p.cJS({imports:[i.ez,v,M.m,t.zB]}),c})()},3517:(L,g,e)=>{e.d(g,{W:()=>u});var t=e(4650),i=e(4006),M=e(529),l=e(7065),f=e(3063);let p=(()=>{class a{constructor(n,m){this.httpClient=n,this.webstoreservice=m,this.url=`${l.N.EmailApiUrl}`,this.httpOptions={headers:new M.WM({"Content-Type":"application/json",Accept:"application/json"})}}sendValidationEmail(n){var m=this.webstoreservice.getClientInformation();return this.httpClient.post(`${this.url}`,JSON.stringify({email:m.email&&""!=m.email?m.email:"cristhian.valencia@nuevatel.com",code:n}),this.httpOptions)}}return a.\u0275fac=function(n){return new(n||a)(t.LFG(M.eN),t.LFG(f.f))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var S=e(6895),v=e(3546),d=e(42);function c(a,o){1&a&&(t.TgZ(0,"small",23),t._uU(1,"El codigo es obligatorio"),t.qZA())}function s(a,o){1&a&&(t.TgZ(0,"small",23),t._uU(1,"El codigo no es valido"),t.qZA())}function h(a,o){1&a&&(t.TgZ(0,"small",24),t._uU(1,"El codigo es valido"),t.qZA())}let u=(()=>{class a{constructor(n,m){this.emailService=n,this.webstoreservice=m,this.validCode=!1,this.disabled=!0,this.emailValidationForm=new i.cw({codeValidationEmail:new i.NI("",[i.kI.required])}),this.nextCheckEmailStep=new t.vpe}get emailCode(){return this.emailValidationForm.get("codeValidationEmail")}ngOnInit(){console.log("check email"),this.sendValidationCode()}validateEmail(){console.log("emailcode input",this.emailCode?.value),console.log("randomemailcode",this.randomEmailCode),this.emailCode?.value==this.randomEmailCode&&(this.disabled=!1,this.validCode=!0,this.next())}sendValidationCode(){this.randomEmailCode=this.randomNumber(),this.emailService.sendValidationEmail(this.randomEmailCode).subscribe(m=>{console.log(m)})}randomNumber(){const n="0123456789",C=[];for(let b=0;b<4;b++){let E=Math.floor(Math.random()*n.length+1);-1===C.indexOf(n[E])?C.push(n[E]):b--}return C.join("")}next(){this.webstoreservice.saveDataInSession("checkemail",{validationCode:this.randomEmailCode}),this.nextCheckEmailStep.emit(!0)}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(p),t.Y36(f.f))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-check-email"]],outputs:{nextCheckEmailStep:"nextCheckEmailStep"},decls:35,vars:7,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],[1,"my-3","border"],[1,"text-center"],["action","",3,"formGroup"],["formEmail","ngForm"],[1,"d-flex","flex-column","justify-content-between","align-items-center","py-5"],["src","assets/images/iconos/email.png","alt","",1,"pb-2"],[1,"mb-3"],["for","codeValidationEmail",1,"form-label"],[1,"form-outline"],["id","codeValidationEmail","name","codeValidationEmail","formControlName","codeValidationEmail","type","text","value","Codigo de validaci\xf3n","aria-label","readonly input example","my-1","","autocomplete","off",1,"form-control","text-center"],[1,"d-flex","flex-column"],["class","text-danger",4,"ngIf"],["class","text-success",4,"ngIf"],["id","emailHelp",1,"form-text"],[1,"form-text",3,"click"],[1,"form-text"],[1,""],[1,"row","d-flex","flex-column","justify-content-between","align-items-center"],[3,"disabled","content","click"],[1,"text-danger"],[1,"text-success"]],template:function(n,m){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"h3"),t._uU(5,"Validaci\xf3n de email"),t.qZA(),t.TgZ(6,"p"),t._uU(7,"Es necesario validar tu correo electr\xf3nico para el env\xedo de facturas electr\xf3nicas y otras notificaciones."),t.qZA(),t.TgZ(8,"mat-card",4)(9,"mat-card-content",5)(10,"form",6,7)(12,"div",8),t._UZ(13,"img",9),t.TgZ(14,"p"),t._uU(15,"No olvides que ser\xe1 utilizado como m\xe9todo de contacto oficial "),t.qZA(),t.TgZ(16,"div",10)(17,"label",11),t._uU(18,"Codigo de validaci\xf3n"),t.qZA(),t.TgZ(19,"div",12),t._UZ(20,"input",13),t.TgZ(21,"div",14),t.YNc(22,c,2,0,"small",15),t.YNc(23,s,2,0,"small",15),t.YNc(24,h,2,0,"small",16),t.qZA()(),t.TgZ(25,"div",17),t._uU(26,"Introduce el codigo recibido"),t.qZA(),t.TgZ(27,"a",18),t.NdJ("click",function(){return m.sendValidationCode()}),t._uU(28,"Reenviar codigo"),t.qZA(),t.TgZ(29,"div",19),t._uU(30),t.qZA()(),t.TgZ(31,"p",20),t._uU(32,"Te llegar\xe1 un correo de confirmaci\xf3n a tu correo electr\xf3nico para validarlo."),t.qZA(),t.TgZ(33,"div",21)(34,"app-button",22),t.NdJ("click",function(){return m.validateEmail()}),t.qZA()()()()()()()()()()),2&n){const C=t.MAs(11);t.xp6(10),t.Q6J("formGroup",m.emailValidationForm),t.xp6(12),t.Q6J("ngIf",(null==m.emailCode?null:m.emailCode.invalid)&&(null==m.emailCode?null:m.emailCode.touched)),t.xp6(1),t.Q6J("ngIf",!m.validCode&&C.submitted),t.xp6(1),t.Q6J("ngIf",m.validCode&&C.submitted),t.xp6(6),t.hij(" ",m.randomEmailCode,""),t.xp6(4),t.Q6J("disabled",m.emailValidationForm.invalid)("content","Validar correo electronico")}},dependencies:[S.O5,v.a8,v.dn,d.r,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".mat-card[_ngcontent-%COMP%]{padding:1px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white;color:#848484}"]}),a})()},3434:(L,g,e)=>{e.r(g),e.d(g,{CheckEmailModule:()=>c});var t=e(6895),i=e(3546),M=e(3060),l=e(3517),f=e(4650);const p=[{path:"",component:l.W}];let S=(()=>{class s{}return s.\u0275fac=function(u){return new(u||s)},s.\u0275mod=f.oAB({type:s}),s.\u0275inj=f.cJS({imports:[M.Bz.forChild(p),M.Bz]}),s})();var v=e(4006),d=e(4466);let c=(()=>{class s{}return s.\u0275fac=function(u){return new(u||s)},s.\u0275mod=f.oAB({type:s}),s.\u0275inj=f.cJS({imports:[t.ez,i.QW,S,d.m,v.u5,v.UX]}),s})()},5830:(L,g,e)=>{e.d(g,{M:()=>s});var t=e(4650),i=e(4006),M=e(3063),l=e(4527),f=e(6895),p=e(1948),S=e(5001);function v(h,u){if(1&h&&(t.TgZ(0,"div",11)(1,"mat-radio-button",12)(2,"span")(3,"i",13),t._uU(4),t.qZA(),t._uU(5),t.qZA()()()),2&h){const a=u.$implicit;t.Akn(a.style),t.xp6(1),t.Q6J("value",a.value)("checked",a.checked),t.xp6(3),t.Oqu(a.design),t.xp6(1),t.hij("\xa0",a.name,"")}}function d(h,u){1&h&&t._UZ(0,"app-store-city")}function c(h,u){1&h&&t._UZ(0,"app-almost-done")}let s=(()=>{class h{constructor(a,o){this.webstoreService=a,this.ordersService=o,this.title="\xbfC\xf3mo prefieres recibir tus equipos?",this.message="El servicio contratado tiene art\xedculos que debemos entregarte.",this.listOfOptions=[{value:"storesInfo",design:"storefront",style:"background-color: #5C349D; color: white; border: 1px solid #5C349D; border-radius:16px;",name:"Recoja en Tienda",id:"1",checked:!0}],this.validationForm=new i.cw({entregaData:new i.NI("",[i.kI.required])}),this.nextDeliveryMethodStep=new t.vpe,this.methods={storesInfo:{active:!1,visited:!1},deliveriesInfo:{active:!1,visited:!1}}}ngOnChanges(a){alert("Existi\xf3 un error en ejecuci\xf3n")}ngOnInit(){this.changeOptions("storesInfo")}resetDivs(){this.methods.storesInfo.active=!1,this.methods.deliveriesInfo.active=!1}changeOptions(a){switch(this.resetDivs(),this.methods[a].active=!0,a){case"storesInfo"==a:this.methods.storesInfo.visited||(this.methods.storesInfo.visited=!0);break;case"delivery"==a:this.methods.deliveriesInfo.visited||(this.methods.deliveriesInfo.visited=!0)}}radioChange(a){"storesInfo"===a.source.value?(console.log(a.source.value),this.changeOptions(a.source.value)):(alert("Servicio no disponible Temporalmente"),this.resetDivs())}next(){this.nextDeliveryMethodStep.emit(!0),this.registerDeliveryType()}registerDeliveryType(){const o={orderId:this.webstoreService.getDataInSession("orderMainId"),sequence:6,userId:this.webstoreService.getDataInSession("userId"),microFrontendId:"delivery-type-microfront-app",microFrontendData:JSON.stringify({deliveryTypeId:"authorizedPointTypeId",deliveryTypeDesc:"authorizedPoint",paymentTypeId:"paymentCashId",paymentTypeDesc:"paymentCash"}),statusCode:"INI"};this.ordersService.registerOrderView(o,this.webstoreService.getDataInSession("token")).subscribe(n=>{console.log(n)})}}return h.\u0275fac=function(a){return new(a||h)(t.Y36(M.f),t.Y36(l.N))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-delivery-method"]],outputs:{nextDeliveryMethodStep:"nextDeliveryMethodStep"},features:[t.TTD],decls:24,vars:5,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],["href","#"],[1,"row"],[1,"col-12"],[1,"container",2,"color","#5C349D"],[1,"row",2,"margin-left","2px","margin-right","2px"],["name","entregaData","fxLayout","column",3,"change"],["class","alert alert-info","role","alert",3,"style",4,"ngFor","ngForOf"],[4,"ngIf"],["role","alert",1,"alert","alert-info"],["name","entregaData",3,"value","checked"],[1,"material-icons",2,"color","white"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"h3"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.TgZ(7,"a",3),t._uU(8,"Ver detallle de art\xedculos"),t.qZA()(),t.TgZ(9,"div",4)(10,"div",5)(11,"div",6)(12,"h5")(13,"b"),t._uU(14,"Elija el metodo de entrega"),t.qZA()(),t._UZ(15,"br"),t.qZA()(),t.TgZ(16,"div",5)(17,"div",7)(18,"mat-radio-group",8),t.NdJ("change",function(m){return o.radioChange(m)}),t.YNc(19,v,6,6,"div",9),t.qZA()()(),t.TgZ(20,"div",5),t.YNc(21,d,1,0,"app-store-city",10),t.qZA(),t.TgZ(22,"div",5),t.YNc(23,c,1,0,"app-almost-done",10),t.qZA()()()()()),2&a&&(t.xp6(4),t.Oqu(o.title),t.xp6(2),t.hij("",o.message," "),t.xp6(13),t.Q6J("ngForOf",o.listOfOptions),t.xp6(2),t.Q6J("ngIf",o.methods.storesInfo.active),t.xp6(2),t.Q6J("ngIf",o.methods.storesInfo.active))},dependencies:[f.sg,f.O5,p.VQ,p.U0,S.h],styles:[".mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#fff!important;border-color:#fff!important;border-radius:8px}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#5c339d!important;border-color:#fff!important;border-radius:8px}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{background-color:#fff!important;border-color:#fff!important;border-radius:8px}"]}),h})()},1083:(L,g,e)=>{e.r(g),e.d(g,{DeliveryMethodModule:()=>o});var t=e(6895),i=e(3060),M=e(5830),l=e(4650);const f=[{path:"",component:M.M}];let p=(()=>{class n{}return n.\u0275fac=function(C){return new(C||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[i.Bz.forChild(f),i.Bz]}),n})();var S=e(3720),v=e(4006),d=e(3546),c=e(4859),s=e(4466),h=e(1948),u=e(9336),a=e(1262);let o=(()=>{class n{}return n.\u0275fac=function(C){return new(C||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[t.ez,p,S.O,v.u5,v.UX,d.QW,c.ot,h.Fk,s.m,u.zB,a.StoreCityModule]}),n})()},5428:(L,g,e)=>{e.d(g,{h:()=>b});var t=e(4650),i=e(529),M=e(5625),l=e(262),f=e(2843),p=e(7065);let S=(()=>{class E{constructor(r){this.httpClient=r,this.apiUrl=`${p.N.MovilNumberListApiUrl}`,this.headers=new i.WM,this.httpOptions={}}getMovilList(r,y){return this.httpClient.post(`${this.apiUrl}`,r,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+y}}).pipe((0,M.X)(1),(0,l.K)(this.handleError))}handleError(r){return r.error instanceof ErrorEvent?console.error("An error occurred:",r.error.message):console.error(`Backend returned code ${r.status}, body was: ${r.error}`),(0,f._)("Something bad happened; please try again later.")}}return E.\u0275fac=function(r){return new(r||E)(t.LFG(i.eN))},E.\u0275prov=t.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})();var v=e(3063),d=e(4527),c=e(4006),s=e(8423),h=e(6895),u=e(3546),a=e(1948),o=e(42);function n(E,T){if(1&E){const r=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"mat-radio-button",13),t.NdJ("change",function(O){t.CHM(r);const x=t.oxw(2);return t.KtG(x.radioChange(O))}),t.TgZ(3,"span"),t._uU(4),t.qZA()()()()}if(2&E){const r=T.$implicit;t.xp6(1),t.Akn(r.style),t.Tol(r.description),t.xp6(1),t.Q6J("value",r.value)("checked",r.checked),t.xp6(2),t.hij("\xa0",r.name,"")}}function m(E,T){if(1&E){const r=t.EpF();t.TgZ(0,"div",11)(1,"div",14)(2,"a",15),t.NdJ("click",function(){t.CHM(r);const O=t.oxw(2);return t.KtG(O.clickme())}),t._uU(3," Mas opciones.."),t.qZA()()()}}function C(E,T){if(1&E){const r=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"section",4)(3,"h3"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card")(8,"mat-card-content")(9,"form",5)(10,"div")(11,"div",6),t.YNc(12,n,5,7,"div",7),t.YNc(13,m,4,0,"div",8),t.qZA()(),t.TgZ(14,"div",9)(15,"app-button",10),t.NdJ("click",function(){t.CHM(r);const O=t.oxw();return t.KtG(O.next())}),t.qZA()()()()()()()()}if(2&E){const r=t.oxw();t.xp6(4),t.Oqu(r.title),t.xp6(2),t.Oqu(r.message),t.xp6(6),t.Q6J("ngForOf",r.linesList),t.xp6(1),t.Q6J("ngIf",5===r.limitLine),t.xp6(2),t.Q6J("content","Continuar")}}let b=(()=>{class E{constructor(r,y,O,x,I){this.movilListService=r,this.webstoreService=y,this.ordersService=O,this.formBuilder=x,this.spinnerService=I,this.linesList=[],this.internetList=[],this.tvList=[],this.movilState=!1,this.internetState=!1,this.entertainmentState=!1,this.movilLine="",this.wanLine="",this.tvLine="",this.limitLine=5,this.movilCounter=0,this.nextMovilListStep=new t.vpe,this.title="Elige tu N\xfamero",this.message="Te damos algunas opciones de l\xedneas telef\xf3nicas para que puedas tener tu nuevo plan con un n\xfamero telef\xf3nico que te agrade.",this.visited=!1,this.key=sessionStorage.getItem("key"),this.orderId=this.webstoreService.getDataInSession("orderMainId"),this.userId=this.webstoreService.getDataInSession("userId")}ngOnInit(){this.spinnerService.show(),setTimeout(()=>{this.spinnerService.hide()},1e4),this.armadoJsonScoring(),this.searchList()}armadoJsonScoring(){this.planComposition=this.webstoreService.getPlanComposition(),this.planList=this.planComposition?.planList,console.log(this.planComposition),console.log(this.planList),this.productTypeCode=[];for(let r=0;r<this.planList.length;r++)this.productTypeCode.push(this.planList[r].consumptionEntityType);this.planService=JSON.stringify({userCode:"14",ceTypeCodeList:this.productTypeCode,processId:this.orderId})}searchList(){let r="",y="",O="";this.listagroup=[],this.movilListService.getMovilList(this.planService,this.key).subscribe(x=>{if(this.numberList=x,console.log(this.numberList),null!=this.numberList.data.data.movil&&(r=this.numberList.data.data.movil),r.length>0){this.movilState=!0,this.listagroup.push("movil_control");for(let I=0;I<this.limitLine;I++)this.movilCounter=I,I<this.limitLine&&(0==I?(this.movilLine=r[I],this.linesList.push({id:I.toString(),name:r[I],value:r[I],description:"alert alert-info divOption",style:"background-color: #AC99CE; color: white; border: 2px solid #5C349D; border-radius:15px;",checked:!0})):this.linesList.push({id:I.toString(),name:r[I],value:r[I],description:"alert alert-secondary divOption",style:"background-color: #F1F1F1; color: black; border-radius:15px;",checked:!1}))}null!=this.numberList.data.data.ifixed&&(y=this.numberList.data.data.ifixed),null!=this.numberList.data.data.tv&&(O=this.numberList.data.data.tv),console.log(y),y.length>0&&(this.internetState=!0,this.wanLine=y[0]),console.log(O),O.length>0&&(this.entertainmentState=!0,this.tvLine=O[0]),""==this.movilLine&&this.next()},x=>{console.log(x)})}next(){let r={},y={},O={},x={};""!=this.movilLine&&(r={movil:[this.movilLine]}),""!=this.wanLine&&(y={ifixed:[this.wanLine]}),""!=this.tvLine&&(O={tv:[this.tvLine]}),x=Object.assign(r,y,O);let I=JSON.stringify({data:{transactionId:this.numberList.data.transactionId,data:x}});this.webstoreService.saveMovilListinformation(I),this.visited=!0,this.registerAactivation(x),this.nextMovilListStep.emit(!0)}radioChange(r){var y=r.source.value;const O=this.numberList.data.data.movil;this.linesList=[],this.movilLine=r.source.value;for(let x=0;x<this.limitLine;x++)this.linesList.push(y==O[x]?{id:x.toString(),name:O[x],value:O[x],description:"alert alert-info divOption",style:"background-color: #AC99CE; color: white; border: 2px solid #5C349D; border-radius:15px;",checked:!0}:{id:x.toString(),name:O[x],value:O[x],description:"alert alert-secondary divOption",style:"background-color: #F1F1F1; color: black; border-radius:15px;",checked:!1})}clickme(){this.limitLine=10,this.linesList=[];const r=this.numberList.data.data.movil;if(r.length>0){this.movilState=!0,this.listagroup.push("movil_control");for(let y=0;y<r.length;y++)y<this.limitLine&&this.linesList.push(0==y?{id:y.toString(),name:r[y],value:r[y],description:"alert alert-info divOption",style:"background-color: #AC99CE; color: white; border: 2px solid #5C349D; border-radius:15px;",checked:!0}:{id:y.toString(),name:r[y],value:r[y],description:"alert alert-secondary divOption",style:"background-color: #F1F1F1; color: black; border-radius:15px;",checked:!1})}}registerAactivation(r){if(console.log(r),!r)return;const y=this.webstoreService.getDataInSession("addressData");let O,x=0;y&&y.forEach(D=>{D.selected&&(O=D),x=O?.addressId});let I=[];r.movil&&r.movil.length>0&&I.push({planType:"MOVIL",serviceIdentifier:r.movil[0]}),r.ifixed&&r.ifixed.length>0&&I.push({planType:"IFIXED",serviceIdentifier:r.ifixed[0],address:{addressId:x,addressTypeCode:"INS_ADDR"}}),r.tv&&r.tv.length>0&&I.push({planType:"TV",serviceIdentifier:r.tv[0]});const P={orderId:this.webstoreService.getDataInSession("orderMainId"),sequence:5,userId:this.webstoreService.getDataInSession("userId"),microFrontendId:"activation-data-microfront-app",microFrontendData:JSON.stringify(I),statusCode:"INI"};this.ordersService.registerOrderView(P,this.webstoreService.getDataInSession("token")).subscribe(D=>{console.log(D)})}}return E.\u0275fac=function(r){return new(r||E)(t.Y36(S),t.Y36(v.f),t.Y36(d.N),t.Y36(c.qu),t.Y36(s.t2))},E.\u0275cmp=t.Xpm({type:E,selectors:[["app-movil-list"]],outputs:{nextMovilListStep:"nextMovilListStep"},decls:2,vars:2,consts:[["class","container",4,"ngIf"],["bdColor","rgba(51, 51, 51, 0.8)","size","large","color","#D6F084","type","ball-8bits",3,"fullScreen"],[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],["novalidate","","id","validationForm",1,"form",2,"background-color","white"],[1,"row"],["class","col-6 col-md-6 col-sm-6",4,"ngFor","ngForOf"],["class","col-6 col-md-6 col-sm-6",4,"ngIf"],[1,"text-center"],[3,"content","click"],[1,"col-6","col-md-6","col-sm-6"],["role","alert"],["name","movil",3,"value","checked","change"],["role","alert",1,"alert","alert-light","divOption",2,"text-align","center"],["href","javascript: void(0);",1,"linkMore",3,"click"]],template:function(r,y){1&r&&(t.YNc(0,C,16,5,"div",0),t._UZ(1,"ngx-spinner",1)),2&r&&(t.Q6J("ngIf",y.movilState),t.xp6(1),t.Q6J("fullScreen",!1))},dependencies:[h.sg,h.O5,c._Y,c.JL,c.F,u.a8,u.dn,a.U0,o.r,s.Ro],styles:["mat-card-header[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%]{font-size:2.5vh;text-align:left;color:purple;font-family:MUSEO900-REGULAR;margin:0}mat-card-header[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%]{font-size:1.8vh;text-align:left;color:#000;font-family:MUSEO600-REGULAR}mat-card-title[_ngcontent-%COMP%]{margin-bottom:.5vh}.mat-icon-button[_ngcontent-%COMP%]{width:4vh!important;height:auto!important;margin-top:-6px;margin-right:-3px}mat-card-content[_ngcontent-%COMP%]{background:#F0F0F0;color:purple;border-radius:0 0 25px 25px}.link-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:right;font-weight:700;text-decoration:none;color:#b302a7}.mat-card[_ngcontent-%COMP%]{padding:10px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white}mat-form-field[_ngcontent-%COMP%]{width:100%}.divOption[_ngcontent-%COMP%]{margin:5px}.linkMore[_ngcontent-%COMP%]{text-align:right;font-weight:700;text-decoration:none;color:#00008b}  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#fff!important;border-color:#fff!important;border-radius:8px}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#5c339d!important;border-color:#fff!important;border-radius:8px}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{background-color:#fff!important;border-color:#fff!important;border-radius:8px}"]}),E})()},5380:(L,g,e)=>{e.r(g),e.d(g,{MovilListModule:()=>o});var t=e(6895),i=e(3060),M=e(5428),l=e(4650);const f=[{path:"",component:M.h}];let p=(()=>{class n{}return n.\u0275fac=function(C){return new(C||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[i.Bz.forChild(f),i.Bz]}),n})();var S=e(3720),v=e(1948),d=e(4859),c=e(4006),s=e(3546),h=e(4466),u=e(9336),a=e(8423);let o=(()=>{class n{}return n.\u0275fac=function(C){return new(C||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[t.ez,p,S.O,c.u5,c.UX,s.QW,d.ot,v.Fk,h.m,u.zB,a.ef]}),n})()},2663:(L,g,e)=>{e.d(g,{A:()=>S});var t=e(4650),i=e(3063),M=e(6895),l=e(42),f=e(9717);function p(v,d){if(1&v){const c=t.EpF();t.TgZ(0,"app-button",7),t.NdJ("click",function(){t.CHM(c);const h=t.oxw();return t.KtG(h.next())}),t.qZA()}2&v&&t.Q6J("content","Continuar")}let S=(()=>{class v{constructor(c){this.webstoreservice=c,this.nextScoringStep=new t.vpe,this.acceptRecurrentPayment=!1}ngOnInit(){console.log("init scoring")}next(){this.webstoreservice.saveDataInSession("scoring",{acceptRecurrentPayment:!0}),this.acceptRecurrentPayment=!0,this.nextScoringStep.emit(!0)}}return v.\u0275fac=function(c){return new(c||v)(t.Y36(i.f))},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-result-scoring"]],outputs:{nextScoringStep:"nextScoringStep"},decls:19,vars:2,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[1,"divMain","d-flex","flex-column","justify-content-around"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],[3,"content","click",4,"ngIf"],[3,"content"],[3,"content","click"]],template:function(c,s){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"h3"),t._uU(5,"Antes de continuar"),t.qZA(),t.TgZ(6,"p"),t._uU(7,"Debido a tu capacidad de endeudamiento, para continuar el proceso de compra por este canal "),t.TgZ(8,"b"),t._uU(9,"deber\xe1s habilitar el pago autom\xe1tico de tu servicio de manera mensual"),t.qZA(),t._uU(10," mediante una tarjeta de d\xe9bito o cr\xe9dito que te pediremos antes de concluir tu compra. "),t._UZ(11,"br"),t._uU(12," Es un proceso sencillo que te asegurar\xe1 que puedas adquirir este plan. "),t._UZ(13,"br")(14,"br"),t._uU(15," \xbfDeseas continuar?"),t.qZA(),t.TgZ(16,"div",4),t.YNc(17,p,1,1,"app-button",5),t._UZ(18,"app-button-outline",6),t.qZA()()()()()),2&c&&(t.xp6(17),t.Q6J("ngIf",!s.acceptRecurrentPayment),t.xp6(1),t.Q6J("content","Ver otros planes"))},dependencies:[M.O5,l.r,f.Y],styles:[".mat-card[_ngcontent-%COMP%]{padding:1px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white;color:#848484}.divMain[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;color:#5c349d}.divMain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;color:#777}"]}),v})()},1102:(L,g,e)=>{e.r(g),e.d(g,{ResultScoringModule:()=>v});var t=e(6895),i=e(3060),M=e(2663),l=e(4650);const f=[{path:"",component:M.A}];let p=(()=>{class d{}return d.\u0275fac=function(s){return new(s||d)},d.\u0275mod=l.oAB({type:d}),d.\u0275inj=l.cJS({imports:[i.Bz.forChild(f),i.Bz]}),d})();var S=e(4466);let v=(()=>{class d{}return d.\u0275fac=function(s){return new(s||d)},d.\u0275mod=l.oAB({type:d}),d.\u0275inj=l.cJS({imports:[t.ez,p,S.m]}),d})()}}]);