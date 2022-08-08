"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[592],{5231:(Z,p,o)=>{o.d(p,{N:()=>g});var t=o(7579),l=o(4650);let g=(()=>{class d{constructor(){this.products=[],this.listSizeSubject=new t.x,this._listSize=this.listSizeSubject.asObservable()}addToCart(f){this.products.push(f),this.listSizeSubject.next(this.products.length)}getItems(){return this.listSizeSubject.next(this.products.length),this.products}getSize(){return this._listSize}clearCart(){return this.products=[],this.products}}return d.\u0275fac=function(f){return new(f||d)},d.\u0275prov=l.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},3560:(Z,p,o)=>{o.d(p,{M:()=>E});var t=o(404),l=o(2843),g=o(262),d=o(7065),m=o(1002),f=o(4650),u=o(529);let E=(()=>{class s{constructor(a){this.http=a,this.products=[],this.product=new t.x,this.httpPostOptions=m.z8,this.httpGetOptions=m.bN}getProducts(){return this.http.get(d.N.url_api_simplekart_mock_server+"/items",this.httpGetOptions)}getProductDetail(a){return this.http.get(d.N.url_api_simplekart_mock_server+"/items/"+a).pipe((0,g.K)(M=>(console.log("error caught in service"),(0,l._)(M))))}}return s.\u0275fac=function(a){return new(a||s)(f.LFG(u.eN))},s.\u0275prov=f.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},6616:(Z,p,o)=>{o.d(p,{B:()=>f});var t=o(529),l=o(5625),g=o(262),d=o(2843),m=o(4650);let f=(()=>{class u{constructor(s){this.httpClient=s,this.urToken="http://omega.10.45.57.104.sslip.io/auth/login",this.httpOptions={headers:new t.WM({"Content-Type":"application/json"})}}gettoken(){return this.httpClient.post(`${this.urToken}`,JSON.stringify({username:"landing",password:"3X4E+U7d1m1XprRamjfaRg=="}),this.httpOptions).pipe((0,l.X)(1),(0,g.K)(this.handleError))}handleError(s){return s.error instanceof ErrorEvent?console.error("An error occurred:",s.error.message):console.error(`Backend returned code ${s.status}, body was: ${s.error}`),(0,d._)("Something bad happened; please try again later.")}}return u.\u0275fac=function(s){return new(s||u)(m.LFG(t.eN))},u.\u0275prov=m.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},404:(Z,p,o)=>{o.d(p,{x:()=>t});class t{}},7876:(Z,p,o)=>{o.d(p,{G:()=>T});var t=o(4650),l=o(3060),g=o(5231),d=o(7392),m=o(3683),f=o(4859),u=o(1561),E=o(2673),s=o(6895);let T=(()=>{class a{constructor(r,L){this.router=r,this.cartService=L,this.totalItems$=this.cartService.getSize()}ngOnInit(){this.totalItems$=this.cartService.getSize()}}return a.\u0275fac=function(r){return new(r||a)(t.Y36(l.F0),t.Y36(g.N))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-header"]],decls:50,vars:4,consts:[[1,"container-fluid"],[1,"row"],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon"],[3,"matMenuTriggerFor"],["src","../../../assets/images/pages/header/logo-viva.png","alt","",1,"toolbar-logo"],[1,"toolbar-spacer"],["mat-icon-button","","aria-label","Example icon-button with heart icon",1,"example-icon","favorite-icon"],["mat-icon-button","","aria-label","Example icon-button with share icon","routerLink","/compras",1,"example-icon"],["matBadgeColor","warn",3,"matBadge"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon"],["menu","matMenu"],["mat-menu-item","","routerLink","/home"],["mat-menu-item","","routerLink","['/oferta', { code: TIPBATVF }]"],["mat-menu-item","","routerLink","/oferta?code=PMBAEP"],["mat-menu-item","","routerLink","/oferta/orden-compra/"],["mat-menu-item","","routerLink","/lista-productos"],["mat-menu-item","","routerLink","/cobertura"],["mat-menu-item","","routerLink","/tomar-foto"],["mat-menu-item","","routerLink","/compras"],["mat-menu-item","","routerLink","/en-construccion"]],template:function(r,L){if(1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-toolbar")(3,"button",2)(4,"mat-icon",3),t._uU(5,"menu"),t.qZA()(),t._UZ(6,"img",4)(7,"span",5),t.TgZ(8,"button",6)(9,"mat-icon"),t._uU(10,"favorite"),t.qZA()(),t.TgZ(11,"button",7)(12,"mat-icon",8),t.ALo(13,"async"),t._uU(14,"shopping_cart"),t.qZA()(),t.TgZ(15,"button",9)(16,"mat-icon"),t._uU(17,"account_circle"),t.qZA()()(),t.TgZ(18,"mat-menu",null,10)(20,"button",11)(21,"span"),t._uU(22,"Inicio"),t.qZA()(),t.TgZ(23,"button",12)(24,"span"),t._uU(25,"Oferta: TRIPLE PLAY"),t.qZA()(),t.TgZ(26,"button",12)(27,"span"),t._uU(28,"Oferta: DUO PLAY"),t.qZA()(),t.TgZ(29,"button",13)(30,"span"),t._uU(31,"Oferta: STAND ALONE (MOVIL)"),t.qZA()(),t.TgZ(32,"button",14)(33,"span"),t._uU(34,"Oferta - Orden de Compra"),t.qZA()(),t.TgZ(35,"button",15)(36,"span"),t._uU(37,"Listado de Productos"),t.qZA()(),t.TgZ(38,"button",16)(39,"span"),t._uU(40,"Cobertura"),t.qZA()(),t.TgZ(41,"button",17)(42,"span"),t._uU(43,"Tomar foto"),t.qZA()(),t.TgZ(44,"button",18)(45,"span"),t._uU(46,"Carro de Compras"),t.qZA()(),t.TgZ(47,"button",19)(48,"span"),t._uU(49,"En Construccion"),t.qZA()()()()()),2&r){const i=t.MAs(19);t.xp6(4),t.Q6J("matMenuTriggerFor",i),t.xp6(8),t.Q6J("matBadge",t.lcZ(13,2,L.totalItems$))}},dependencies:[d.Hw,m.Ye,f.lW,u.VK,u.OP,u.p6,E.k,l.rH,s.Ov],styles:[".toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(180deg,#D6F084 0%,rgba(214,240,132,0) 100%);color:#5c339d}.mat-toolbar[_ngcontent-%COMP%]   .toolbar-logo[_ngcontent-%COMP%]{max-width:100px}"]}),a})()},3517:(Z,p,o)=>{o.d(p,{W:()=>M});var t=o(4650),l=o(4006),g=o(529),d=o(7065),m=o(3063);let f=(()=>{class r{constructor(i,c){this.httpClient=i,this.webstoreservice=c,this.url=`${d.N.EmailApiUrl}`,this.headers=(new g.WM).set("Content-Type","application/json"),this.httpOptions={headers:new g.WM({"Content-Type":"application/json"})}}sendValidationEmail(i){var c=this.webstoreservice.getClientInformation();return this.httpClient.post(`${this.url}`,JSON.stringify({email:c.email&&""!=c.email?c.email:"cristhian.valencia@nuevatel.com",code:i}),this.httpOptions)}}return r.\u0275fac=function(i){return new(i||r)(t.LFG(g.eN),t.LFG(m.f))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var u=o(6895),E=o(3546),s=o(42),T=o(9717);function a(r,L){1&r&&(t.TgZ(0,"small",20),t._uU(1,"El codigo es obligatorio"),t.qZA())}let M=(()=>{class r{constructor(i){this.emailService=i,this.validCode=!1,this.disabled=!0,this.emailValidationForm=new l.cw({codeValidationEmail:new l.NI("",[l.kI.required])}),this.nextCheckEmailStep=new t.vpe}get emailCode(){return this.emailValidationForm.get("codeValidationEmail")}ngOnInit(){}validateEmail(){console.log("emailcode input",this.emailCode?.value),console.log("randomemailcode",this.randomEmailCode),this.emailCode?.value==this.randomEmailCode&&(this.disabled=!1)}sendValidationCode(){this.randomEmailCode=this.randomNumber(),this.emailService.sendValidationEmail(this.randomEmailCode).subscribe(c=>{console.log(c)})}randomNumber(){const i="0123456789",O=[];for(let S=0;S<4;S++){let b=Math.floor(Math.random()*i.length+1);-1===O.indexOf(i[b])?O.push(i[b]):S--}return O.join("")}next(){this.nextCheckEmailStep.emit(!0)}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(f))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-check-email"]],outputs:{nextCheckEmailStep:"nextCheckEmailStep"},decls:31,vars:8,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],[1,"my-3","border"],[1,"text-center"],["action","",3,"formGroup"],[1,"d-flex","flex-column","justify-content-between","align-items-center","py-5"],["src","assets/images/iconos/email.png","alt","",1,"pb-2"],[1,"mb-3"],["for","codeValidationEmail",1,"form-label"],[1,"form-outline"],["id","codeValidationEmail","name","codeValidationEmail","formControlName","codeValidationEmail","type","text","value","Codigo de validaci\xf3n","aria-label","readonly input example",1,"form-control"],["class","text-danger",4,"ngIf"],["id","emailHelp",1,"form-text"],[1,"form-text"],[1,"pt-2"],[1,"row","d-flex","flex-column","justify-content-between","align-items-center"],[3,"content","click"],[3,"disabled","content","click"],[1,"text-danger"]],template:function(i,c){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"h3"),t._uU(5,"Validaci\xf3n de email"),t.qZA(),t.TgZ(6,"p"),t._uU(7,"Es necesario validar tu correo electr\xf3nico para el env\xedo de facturas electr\xf3nicas y otras notificaciones."),t.qZA(),t.TgZ(8,"mat-card",4)(9,"mat-card-content",5)(10,"form",6)(11,"div",7),t._UZ(12,"img",8),t.TgZ(13,"p"),t._uU(14,"No olvides que ser\xe1 utilizado como m\xe9todo de contacto oficial "),t.qZA(),t.TgZ(15,"div",9)(16,"label",10),t._uU(17,"Codigo de validaci\xf3n"),t.qZA(),t.TgZ(18,"div",11),t._UZ(19,"input",12),t.YNc(20,a,2,0,"small",13),t.qZA(),t.TgZ(21,"div",14),t._uU(22,"Introduce el codigo recibido"),t.qZA(),t.TgZ(23,"div",15),t._uU(24),t.qZA()(),t.TgZ(25,"p",16),t._uU(26,"Te llegar\xe1 un correo de confirmaci\xf3n a tu correo electr\xf3nico para validarlo."),t.qZA(),t.TgZ(27,"div",17)(28,"app-button-outline",18),t.NdJ("click",function(){return c.sendValidationCode()}),t.qZA(),t.TgZ(29,"app-button",19),t.NdJ("click",function(){return c.validateEmail()}),t.qZA()(),t.TgZ(30,"app-button",19),t.NdJ("click",function(){return c.next()}),t.qZA()()()()()()()()()),2&i&&(t.xp6(10),t.Q6J("formGroup",c.emailValidationForm),t.xp6(10),t.Q6J("ngIf",(null==c.emailCode?null:c.emailCode.invalid)&&(null==c.emailCode?null:c.emailCode.touched)),t.xp6(4),t.hij(" ",c.randomEmailCode,""),t.xp6(4),t.Q6J("content","Enviar Codigo"),t.xp6(1),t.Q6J("disabled",c.emailValidationForm.invalid)("content","Validar correo electronico"),t.xp6(1),t.Q6J("disabled",c.disabled)("content","Siguiente"))},dependencies:[u.O5,E.a8,E.dn,s.r,T.Y,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],styles:[".mat-card[_ngcontent-%COMP%]{padding:1px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white;color:#848484}"]}),r})()},3434:(Z,p,o)=>{o.r(p),o.d(p,{CheckEmailModule:()=>T});var t=o(6895),l=o(3546),g=o(3060),d=o(3517),m=o(4650);const f=[{path:"",component:d.W}];let u=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=m.oAB({type:a}),a.\u0275inj=m.cJS({imports:[g.Bz.forChild(f),g.Bz]}),a})();var E=o(4006),s=o(4466);let T=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=m.oAB({type:a}),a.\u0275inj=m.cJS({imports:[t.ez,l.QW,u,s.m,E.u5,E.UX]}),a})()},5428:(Z,p,o)=>{o.d(p,{h:()=>F});var t=o(4650),l=o(529),g=o(5625),d=o(262),m=o(2843);let f=(()=>{class n{constructor(e){this.httpClient=e,this.apiUrl="http://omega.10.45.57.104.sslip.io/sales/find/phone/numbers",this.headers=new l.WM,this.httpOptions={}}getMovilList(e,h){return this.httpClient.post(`${this.apiUrl}`,e,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+h}}).pipe((0,g.X)(1),(0,d.K)(this.handleError))}handleError(e){return e.error instanceof ErrorEvent?console.error("An error occurred:",e.error.message):console.error(`Backend returned code ${e.status}, body was: ${e.error}`),(0,m._)("Something bad happened; please try again later.")}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(l.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=o(3063),E=o(4006),s=o(6895),T=o(3546),a=o(1948),M=o(42);function r(n,C){1&n&&t._UZ(0,"div")}function L(n,C){if(1&n&&(t.TgZ(0,"div",13)(1,"div",14)(2,"mat-radio-button",15),t._uU(3),t.qZA()()()),2&n){const e=C.$implicit;t.Q6J("id",e.id),t.xp6(1),t.Tol(e.description),t.xp6(1),t.Q6J("value",e.name),t.xp6(1),t.Oqu(e.name)}}function i(n,C){if(1&n&&(t.TgZ(0,"div",10)(1,"h4",11)(2,"b"),t._uU(3,"MOVIL"),t.qZA()(),t.TgZ(4,"p"),t._uU(5,"Elije un N\xfamero"),t.qZA(),t.YNc(6,L,4,5,"div",12),t.qZA()),2&n){const e=t.oxw();t.xp6(6),t.Q6J("ngForOf",e.linesList)}}function c(n,C){1&n&&t._UZ(0,"div")}function O(n,C){if(1&n&&(t.TgZ(0,"div",13)(1,"div",14)(2,"mat-radio-button",15),t._uU(3),t.qZA()()()),2&n){const e=C.$implicit;t.Q6J("id",e.id),t.xp6(1),t.Tol(e.description),t.xp6(1),t.Q6J("value",e.name),t.xp6(1),t.Oqu(e.name)}}function S(n,C){if(1&n&&(t.TgZ(0,"div",10)(1,"h4",11)(2,"b"),t._uU(3,"INTERNET"),t.qZA()(),t.YNc(4,O,4,5,"div",12),t.qZA()),2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.internetList)}}function b(n,C){1&n&&t._UZ(0,"div")}function y(n,C){if(1&n&&(t.TgZ(0,"div",13)(1,"div",14)(2,"mat-radio-button",15),t._uU(3),t.qZA()()()),2&n){const e=C.$implicit;t.Q6J("id",e.id),t.xp6(1),t.Tol(e.description),t.xp6(1),t.Q6J("value",e.name),t.xp6(1),t.Oqu(e.name)}}function I(n,C){if(1&n&&(t.TgZ(0,"div",10)(1,"h4",11)(2,"b"),t._uU(3,"ENTRETENIMIENTO"),t.qZA()(),t.YNc(4,y,4,5,"div",12),t.qZA()),2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.tvList)}}let F=(()=>{class n{constructor(e,h,x){this.movilListService=e,this.webstoreservice=h,this.formBuilder=x,this.linesList=[],this.internetList=[],this.tvList=[],this.movilState=!1,this.internetState=!1,this.entertainmentState=!1,this.nextMovilListStep=new t.vpe,this.title="Elije tu N\xfamero",this.message="Te damos algunas opciones de l\xedneas telef\xf3nicas para que puedas tener tu nuevo plan con un n\xfamero telef\xf3nico que te agrade.",this.key=sessionStorage.getItem("key")}ngOnInit(){this.armadoJsonScoring(),this.loadForm()}armadoJsonScoring(){this.planComposition=this.webstoreservice.getPlanComposition(),this.planList=this.planComposition?.planList,console.log(this.planComposition),console.log(this.planList),this.productTypeCode=[];for(let e=0;e<this.planList.length;e++)this.productTypeCode.push(this.planList[e].consumptionEntityType);this.planService=JSON.stringify({userCode:"14",ceTypeCodeList:this.productTypeCode,processId:165435435})}loadForm(){var e=0;this.listagroup=[];var h="{";this.movilListService.getMovilList(this.planService,this.key).subscribe(x=>{this.numberList=x;const A=this.numberList.data.data.movil,P=this.numberList.data.data.ifixed,U=this.numberList.data.data.tv;if(console.log(A.length),A.length>0){this.movilState=!0,h+="'movil_control': new FormControl(null, [Validators.required]),",this.listagroup.push("movil_control");for(let v=e;v<A.length;v++)this.linesList.push(0==v?{id:v.toString(),name:A[v],description:"alert alert-info divOption"}:{id:v.toString(),name:A[v],description:"alert alert-secondary divOption"}),e+=1}if(console.log(P),P.length>0){this.listagroup.push("internet_control"),h+="'internet_control': new FormControl(null, [Validators.required]),";let v=e;console.log(v),this.internetState=!0;for(let _=0;_<P.length;_++)v+=_,this.internetList.push(0==_?{id:v.toString(),name:P[_],description:"alert alert-info divOption"}:{id:v.toString(),name:P[_],description:"alert alert-secondary divOption"}),e+=1;console.log("internetdata"),console.log(this.internetList)}if(console.log(U),U.length>0){this.listagroup.push("tv_control"),h+="'tv_control': new FormControl(null, [Validators.required])";let v=e;this.entertainmentState=!0;for(let _=0;_<U.length;_++)v+=_,console.log("internet "+_),this.tvList.push(_==v?{id:v.toString(),name:U[_],description:"alert alert-info divOption"}:{id:v.toString(),name:U[_],description:"alert alert-secondary divOption"}),e+=1}console.log(this.listagroup),h+="}",JSON.stringify(h),console.log(this.linesList)},x=>{console.log(x)})}next(){this.nextMovilListStep.emit(!0)}get movil_control(){return this.validationForm.get("movil_control")}get internet_control(){return this.validationForm.get("internet_control")}get tv_control(){return this.validationForm.get("tv_control")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(u.f),t.Y36(E.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-movil-list"]],outputs:{nextMovilListStep:"nextMovilListStep"},decls:21,vars:9,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],["novalidate","","id","validationForm",1,"form",2,"background-color","white"],[4,"ngIf","ngIfThen"],["trueMovil",""],["trueInternet",""],["trueTv",""],[1,"text-center"],[3,"content"],[1,"row",2,"color","black"],[2,"color","black"],["class","col-6 col-md-6 col-sm-6",3,"id",4,"ngFor","ngForOf"],[1,"col-6","col-md-6","col-sm-6",3,"id"],["role","alert"],[3,"value"]],template:function(e,h){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"h3"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card")(8,"mat-card-content")(9,"form",3),t.YNc(10,r,1,0,"div",4),t.YNc(11,i,7,1,"ng-template",null,5,t.W1O),t.YNc(13,c,1,0,"div",4),t.YNc(14,S,5,1,"ng-template",null,6,t.W1O),t.YNc(16,b,1,0,"div",4),t.YNc(17,I,5,1,"ng-template",null,7,t.W1O),t.TgZ(19,"div",8),t._UZ(20,"app-button",9),t.qZA()()()()()()()),2&e){const x=t.MAs(12),A=t.MAs(15),P=t.MAs(18);t.xp6(4),t.Oqu(h.title),t.xp6(2),t.Oqu(h.message),t.xp6(4),t.Q6J("ngIf",1==h.movilState)("ngIfThen",x),t.xp6(3),t.Q6J("ngIf",1==h.internetState)("ngIfThen",A),t.xp6(3),t.Q6J("ngIf",1==h.entertainmentState)("ngIfThen",P),t.xp6(4),t.Q6J("content","Continuar")}},dependencies:[s.sg,s.O5,E._Y,E.JL,E.F,T.a8,T.dn,a.U0,M.r],styles:["mat-card-header[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%]{font-size:2.5vh;text-align:left;color:purple;font-family:MUSEO900-REGULAR;margin:0}mat-card-header[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%]{font-size:1.8vh;text-align:left;color:#000;font-family:MUSEO600-REGULAR}mat-card-title[_ngcontent-%COMP%]{margin-bottom:.5vh}.mat-icon-button[_ngcontent-%COMP%]{width:4vh!important;height:auto!important;margin-top:-6px;margin-right:-3px}mat-card-content[_ngcontent-%COMP%]{background:#F0F0F0;color:purple;border-radius:0 0 25px 25px}.link-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:right;font-weight:700;text-decoration:none;color:#b302a7}.mat-card[_ngcontent-%COMP%]{padding:10px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white}mat-form-field[_ngcontent-%COMP%]{width:100%}.divOption[_ngcontent-%COMP%]{margin:5px}"]}),n})()},5380:(Z,p,o)=>{o.r(p),o.d(p,{MovilListModule:()=>L});var t=o(6895),l=o(3060),g=o(5428),d=o(4650);const m=[{path:"",component:g.h}];let f=(()=>{class i{}return i.\u0275fac=function(O){return new(O||i)},i.\u0275mod=d.oAB({type:i}),i.\u0275inj=d.cJS({imports:[l.Bz.forChild(m),l.Bz]}),i})();var u=o(9499),E=o(1948),s=o(4859),T=o(4006),a=o(3546),M=o(4466),r=o(9336);let L=(()=>{class i{}return i.\u0275fac=function(O){return new(O||i)},i.\u0275mod=d.oAB({type:i}),i.\u0275inj=d.cJS({imports:[t.ez,f,u.O,T.u5,T.UX,a.QW,s.ot,E.Fk,M.m,r.zB]}),i})()}}]);