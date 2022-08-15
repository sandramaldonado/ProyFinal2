"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[592],{7139:(T,f,e)=>{e.d(f,{n:()=>C});var t=e(1135),d=e(4650);let C=(()=>{class o{constructor(){this.captchSource=new t.X(null),this.captchStatus=this.captchSource.asObservable()}setCaptchaStatus(g){this.captchSource.next(g)}}return o.\u0275fac=function(g){return new(g||o)},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},5231:(T,f,e)=>{e.d(f,{N:()=>C});var t=e(7579),d=e(4650);let C=(()=>{class o{constructor(){this.products=[],this.listSizeSubject=new t.x,this._listSize=this.listSizeSubject.asObservable()}addToCart(g){this.products.push(g),this.listSizeSubject.next(this.products.length)}getItems(){return this.listSizeSubject.next(this.products.length),this.products}getSize(){return this._listSize}clearCart(){return this.products=[],this.products}}return o.\u0275fac=function(g){return new(g||o)},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},3560:(T,f,e)=>{e.d(f,{M:()=>M});var t=e(404),d=e(2843),C=e(262),o=e(7065),m=e(1002),g=e(4650),x=e(529);let M=(()=>{class E{constructor(l){this.http=l,this.products=[],this.product=new t.x,this.httpPostOptions=m.z8,this.httpGetOptions=m.bN}getProducts(){return this.http.get(o.N.url_api_simplekart_mock_server+"/items",this.httpGetOptions)}getProductDetail(l){return this.http.get(o.N.url_api_simplekart_mock_server+"/items/"+l).pipe((0,C.K)(L=>(console.log("error caught in service"),(0,d._)(L))))}}return E.\u0275fac=function(l){return new(l||E)(g.LFG(x.eN))},E.\u0275prov=g.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()},6616:(T,f,e)=>{e.d(f,{B:()=>x});var t=e(529),d=e(5625),C=e(262),o=e(2843),m=e(7065),g=e(4650);let x=(()=>{class M{constructor(p){this.httpClient=p,this.urToken=`${m.N.SSIAuthApiUrl}`,this.httpOptions={headers:new t.WM({"Content-Type":"application/json"})}}gettoken(){return this.httpClient.post(`${this.urToken}`,JSON.stringify({username:"landing",password:"3X4E+U7d1m1XprRamjfaRg=="}),this.httpOptions).pipe((0,d.X)(1),(0,C.K)(this.handleError))}handleError(p){return p.error instanceof ErrorEvent?console.error("An error occurred:",p.error.message):console.error(`Backend returned code ${p.status}, body was: ${p.error}`),(0,o._)("Something bad happened; please try again later.")}}return M.\u0275fac=function(p){return new(p||M)(g.LFG(t.eN))},M.\u0275prov=g.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"}),M})()},404:(T,f,e)=>{e.d(f,{x:()=>t});class t{}},7876:(T,f,e)=>{e.d(f,{G:()=>p});var t=e(4650),d=e(3060),C=e(5231),o=e(7392),m=e(3683),g=e(4859),x=e(1561),M=e(2673),E=e(6895);let p=(()=>{class l{constructor(O,n){this.router=O,this.cartService=n,this.totalItems$=this.cartService.getSize()}ngOnInit(){this.totalItems$=this.cartService.getSize()}}return l.\u0275fac=function(O){return new(O||l)(t.Y36(d.F0),t.Y36(C.N))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-header"]],decls:35,vars:4,consts:[[1,"container-fluid"],[1,"row"],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon"],[3,"matMenuTriggerFor"],["src","../../../assets/images/pages/header/logo-viva.png","alt","",1,"toolbar-logo"],[1,"toolbar-spacer"],["mat-icon-button","","aria-label","Example icon-button with share icon","routerLink","/detalle-compra",1,"example-icon"],["matBadgeColor","warn",3,"matBadge"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon"],["menu","matMenu"],["mat-menu-item","","routerLink","/oferta/orden-compra/"],["mat-menu-item","","routerLink","/detalle-compra/"],["mat-menu-item","","routerLink","/cobertura"],["mat-menu-item","","routerLink","/documentos"],["mat-menu-item","","routerLink","/tomar-foto"],["mat-menu-item","","routerLink","/en-construccion"]],template:function(O,n){if(1&O&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-toolbar")(3,"button",2)(4,"mat-icon",3),t._uU(5,"menu"),t.qZA()(),t._UZ(6,"img",4)(7,"span",5),t.TgZ(8,"button",6)(9,"mat-icon",7),t.ALo(10,"async"),t._uU(11,"shopping_cart"),t.qZA()(),t.TgZ(12,"button",8)(13,"mat-icon"),t._uU(14,"account_circle"),t.qZA()()(),t.TgZ(15,"mat-menu",null,9)(17,"button",10)(18,"span"),t._uU(19,"Oferta - Orden de Compra"),t.qZA()(),t.TgZ(20,"button",11)(21,"span"),t._uU(22,"Detalle de Compra"),t.qZA()(),t.TgZ(23,"button",12)(24,"span"),t._uU(25,"Cobertura"),t.qZA()(),t.TgZ(26,"button",13)(27,"span"),t._uU(28,"Documentos"),t.qZA()(),t.TgZ(29,"button",14)(30,"span"),t._uU(31,"Tomar foto"),t.qZA()(),t.TgZ(32,"button",15)(33,"span"),t._uU(34,"En Construccion"),t.qZA()()()()()),2&O){const c=t.MAs(16);t.xp6(4),t.Q6J("matMenuTriggerFor",c),t.xp6(5),t.Q6J("matBadge",t.lcZ(10,2,n.totalItems$))}},dependencies:[o.Hw,m.Ye,g.lW,x.VK,x.OP,x.p6,M.k,d.rH,E.Ov],styles:[".toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar[_ngcontent-%COMP%]{background:linear-gradient(180deg,#D6F084 0%,rgba(214,240,132,0) 100%);color:#5c339d}.mat-toolbar[_ngcontent-%COMP%]   .toolbar-logo[_ngcontent-%COMP%]{max-width:100px}"]}),l})()},3517:(T,f,e)=>{e.d(f,{W:()=>O});var t=e(4650),d=e(4006),C=e(529),o=e(7065),m=e(3063);let g=(()=>{class n{constructor(a,r){this.httpClient=a,this.webstoreservice=r,this.url=`${o.N.EmailApiUrl}`,this.httpOptions={headers:new C.WM({"Content-Type":"application/json",Accept:"application/json"})}}sendValidationEmail(a){var r=this.webstoreservice.getClientInformation();return this.httpClient.post(`${this.url}`,JSON.stringify({email:r.email&&""!=r.email?r.email:"cristhian.valencia@nuevatel.com",code:a}),this.httpOptions)}}return n.\u0275fac=function(a){return new(a||n)(t.LFG(C.eN),t.LFG(m.f))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var x=e(6895),M=e(3546),E=e(42);function p(n,c){1&n&&(t.TgZ(0,"small",23),t._uU(1,"El codigo es obligatorio"),t.qZA())}function l(n,c){1&n&&(t.TgZ(0,"small",23),t._uU(1,"El codigo no es valido"),t.qZA())}function L(n,c){1&n&&(t.TgZ(0,"small",24),t._uU(1,"El codigo es valido"),t.qZA())}let O=(()=>{class n{constructor(a,r){this.emailService=a,this.webstoreservice=r,this.validCode=!1,this.disabled=!0,this.emailValidationForm=new d.cw({codeValidationEmail:new d.NI("",[d.kI.required])}),this.nextCheckEmailStep=new t.vpe}get emailCode(){return this.emailValidationForm.get("codeValidationEmail")}ngOnInit(){console.log("check email"),this.sendValidationCode()}validateEmail(){console.log("emailcode input",this.emailCode?.value),console.log("randomemailcode",this.randomEmailCode),this.emailCode?.value==this.randomEmailCode&&(this.disabled=!1,this.validCode=!0,this.next())}sendValidationCode(){this.randomEmailCode=this.randomNumber(),this.emailService.sendValidationEmail(this.randomEmailCode).subscribe(r=>{console.log(r)})}randomNumber(){const a="0123456789",b=[];for(let P=0;P<4;P++){let v=Math.floor(Math.random()*a.length+1);-1===b.indexOf(a[v])?b.push(a[v]):P--}return b.join("")}next(){this.webstoreservice.saveDataInSession("checkemail",{validationCode:this.randomEmailCode}),this.nextCheckEmailStep.emit(!0)}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(g),t.Y36(m.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-check-email"]],outputs:{nextCheckEmailStep:"nextCheckEmailStep"},decls:35,vars:7,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],[1,"my-3","border"],[1,"text-center"],["action","",3,"formGroup"],["formEmail","ngForm"],[1,"d-flex","flex-column","justify-content-between","align-items-center","py-5"],["src","assets/images/iconos/email.png","alt","",1,"pb-2"],[1,"mb-3"],["for","codeValidationEmail",1,"form-label"],[1,"form-outline"],["id","codeValidationEmail","name","codeValidationEmail","formControlName","codeValidationEmail","type","text","value","Codigo de validaci\xf3n","aria-label","readonly input example","my-1","",1,"form-control"],[1,"d-flex","flex-column"],["class","text-danger",4,"ngIf"],["class","text-success",4,"ngIf"],["id","emailHelp",1,"form-text"],[1,"form-text",3,"click"],[1,"form-text"],[1,""],[1,"row","d-flex","flex-column","justify-content-between","align-items-center"],[3,"disabled","content","click"],[1,"text-danger"],[1,"text-success"]],template:function(a,r){if(1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"h3"),t._uU(5,"Validaci\xf3n de email"),t.qZA(),t.TgZ(6,"p"),t._uU(7,"Es necesario validar tu correo electr\xf3nico para el env\xedo de facturas electr\xf3nicas y otras notificaciones."),t.qZA(),t.TgZ(8,"mat-card",4)(9,"mat-card-content",5)(10,"form",6,7)(12,"div",8),t._UZ(13,"img",9),t.TgZ(14,"p"),t._uU(15,"No olvides que ser\xe1 utilizado como m\xe9todo de contacto oficial "),t.qZA(),t.TgZ(16,"div",10)(17,"label",11),t._uU(18,"Codigo de validaci\xf3n"),t.qZA(),t.TgZ(19,"div",12),t._UZ(20,"input",13),t.TgZ(21,"div",14),t.YNc(22,p,2,0,"small",15),t.YNc(23,l,2,0,"small",15),t.YNc(24,L,2,0,"small",16),t.qZA()(),t.TgZ(25,"div",17),t._uU(26,"Introduce el codigo recibido"),t.qZA(),t.TgZ(27,"a",18),t.NdJ("click",function(){return r.sendValidationCode()}),t._uU(28,"Reenviar codigo"),t.qZA(),t.TgZ(29,"div",19),t._uU(30),t.qZA()(),t.TgZ(31,"p",20),t._uU(32,"Te llegar\xe1 un correo de confirmaci\xf3n a tu correo electr\xf3nico para validarlo."),t.qZA(),t.TgZ(33,"div",21)(34,"app-button",22),t.NdJ("click",function(){return r.validateEmail()}),t.qZA()()()()()()()()()()),2&a){const b=t.MAs(11);t.xp6(10),t.Q6J("formGroup",r.emailValidationForm),t.xp6(12),t.Q6J("ngIf",(null==r.emailCode?null:r.emailCode.invalid)&&(null==r.emailCode?null:r.emailCode.touched)),t.xp6(1),t.Q6J("ngIf",!r.validCode&&b.submitted),t.xp6(1),t.Q6J("ngIf",r.validCode&&b.submitted),t.xp6(6),t.hij(" ",r.randomEmailCode,""),t.xp6(4),t.Q6J("disabled",r.emailValidationForm.invalid)("content","Validar correo electronico")}},dependencies:[x.O5,M.a8,M.dn,E.r,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u],styles:[".mat-card[_ngcontent-%COMP%]{padding:1px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white;color:#848484}"]}),n})()},3434:(T,f,e)=>{e.r(f),e.d(f,{CheckEmailModule:()=>p});var t=e(6895),d=e(3546),C=e(3060),o=e(3517),m=e(4650);const g=[{path:"",component:o.W}];let x=(()=>{class l{}return l.\u0275fac=function(O){return new(O||l)},l.\u0275mod=m.oAB({type:l}),l.\u0275inj=m.cJS({imports:[C.Bz.forChild(g),C.Bz]}),l})();var M=e(4006),E=e(4466);let p=(()=>{class l{}return l.\u0275fac=function(O){return new(O||l)},l.\u0275mod=m.oAB({type:l}),l.\u0275inj=m.cJS({imports:[t.ez,d.QW,x,E.m,M.u5,M.UX]}),l})()},2593:(T,f,e)=>{e.r(f),e.d(f,{DetailSaleModule:()=>O});var t=e(6895),d=e(3546),C=e(3060),o=e(4650),m=e(4006),g=e(3063),x=e(42);function M(n,c){if(1&n&&(o.TgZ(0,"li",6)(1,"div",10),o._uU(2),o.qZA()()),2&n){const a=c.$implicit;o.xp6(2),o.hij(" ",a," ")}}const p=[{path:"",component:(()=>{class n{constructor(a){this.webStorage=a,this.disabled=!0,this.DetailForm=new m.cw({DetailForm:new m.NI("",[m.kI.required])}),this.nextCheckEmailStep=new o.vpe,this.total=20,this.data1=[],this.data2=[]}ngOnInit(){this.getProduct()}getProduct(){this.product=this.webStorage.getPlanComposition(),console.log("aqui:"+JSON.stringify(this.product)),this.producto=this.product.groupTradeName,console.log(this.producto),this.precio=this.product.tariff,this.currency=this.product.currencyCode,this.planList=this.product.planList,this.articulo=this.planList.categoryData,this.planList.forEach(a=>{this.articulo=a.componentOffer,this.data1.push(a.componentOffer),console.log(a.componentOffer)}),this.articulo.forEach(a=>{this.data2.push(a.tariff)})}next(){this.nextCheckEmailStep.emit(!0)}}return n.\u0275fac=function(a){return new(a||n)(o.Y36(g.f))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-detail-sale"]],outputs:{nextCheckEmailStep:"nextCheckEmailStep"},decls:38,vars:6,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around"],["id","title"],["id","matservicios",1,"my-3","border"],[1,""],["id","servicios"],["id","icono","src","assets/images/iconos/Vector.png"],["id","fecha"],[1,"productname"],[1,"price"],["class","",4,"ngFor","ngForOf"],["id","total"],["id","icono","src","assets/images/iconos/carrito.png"],["id","totalnumero"],["id","comprar",3,"content","click"]],template:function(a,r){1&a&&(o._UZ(0,"app-header"),o.TgZ(1,"div",0)(2,"div",1)(3,"section",2)(4,"div",3)(5,"h3",4),o._uU(6,"Detalle de Compra"),o.qZA(),o.TgZ(7,"mat-card",5)(8,"mat-card-content",6)(9,"div",6)(10,"h3",7),o._uU(11,"Servicios Adquiridos "),o._UZ(12,"img",8),o.TgZ(13,"p",9),o._uU(14,"Se paga a partir del 1 de agosto"),o.qZA(),o.TgZ(15,"ul",6)(16,"li",6)(17,"div",10),o._uU(18),o.qZA(),o.TgZ(19,"div",11),o._uU(20),o.qZA()()()()()()(),o.TgZ(21,"mat-card",5)(22,"mat-card-content",6)(23,"div",6)(24,"h3",7),o._uU(25,"Articulos Adquiridos: "),o._UZ(26,"img",8),o.TgZ(27,"p",9),o._uU(28,"Se paga a partir del 1 de agosto"),o.qZA(),o.TgZ(29,"ul",6),o.YNc(30,M,3,1,"li",12),o.qZA()()()()(),o.TgZ(31,"div")(32,"h3",13),o._uU(33,"Total Compra: "),o._UZ(34,"img",14),o.qZA(),o.TgZ(35,"h3",15),o._uU(36),o.qZA()(),o.TgZ(37,"app-button",16),o.NdJ("click",function(){return r.next()}),o.qZA()()()()()),2&a&&(o.xp6(18),o.hij(" ",r.producto," "),o.xp6(2),o.AsE(" ",r.currency,"",r.precio," "),o.xp6(10),o.Q6J("ngForOf",r.data1),o.xp6(6),o.hij(" Bs ",r.total," "),o.xp6(1),o.Q6J("content","Comprar"))},dependencies:[t.sg,d.a8,d.dn,x.r],styles:['.mat-card[_ngcontent-%COMP%]{padding:1px!important;width:100%;color:#7b7b7b;display:block}#matservicios[_ngcontent-%COMP%]{display:block}#title[_ngcontent-%COMP%]{text-align:left;float:left;position:relative;display:block;left:0%}#icono[_ngcontent-%COMP%]{float:left;left:2%;top:2%}#servicios[_ngcontent-%COMP%]{position:relative;float:left;left:10%;font-size:12px;color:#5c349d}#total[_ngcontent-%COMP%]{position:relative;float:left;text-align:left;left:0%;font-size:12px;color:#000;display:block}#fecha[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:12px;line-height:14px;color:#676767}#totalnumero[_ngcontent-%COMP%]{display:block;position:relative;float:right;text-align:right;right:0%;font-size:12px;color:#000}.productname[_ngcontent-%COMP%]{width:261px;height:16px;font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:16px;color:#333;float:left;flex:none;order:0;flex-grow:1}.price[_ngcontent-%COMP%]{float:right;font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:16px;text-align:right;color:#333}.section-body[_ngcontent-%COMP%]{background:white}#comprar[_ngcontent-%COMP%]{align-self:center;text-align:center}.switch[_ngcontent-%COMP%]{display:block;width:60px;left:0%;height:34px;float:left;position:relative}#pago[_ngcontent-%COMP%]{float:r;position:absolute;text-align:right;display:block}#s[_ngcontent-%COMP%]{float:left;position:absolute;text-align:left;display:block}#activa[_ngcontent-%COMP%]{display:block}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#bae23d}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #bae23d}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(26px)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}']}),n})()}];let l=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[C.Bz.forChild(p),C.Bz]}),n})();var L=e(4466);let O=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[t.ez,l,d.QW,L.m,m.u5,m.UX]}),n})()},5428:(T,f,e)=>{e.d(f,{h:()=>P});var t=e(4650),d=e(529),C=e(5625),o=e(262),m=e(2843),g=e(7065);let x=(()=>{class v{constructor(i){this.httpClient=i,this.apiUrl=`${g.N.MovilNumberListApiUrl}`,this.headers=new d.WM,this.httpOptions={}}getMovilList(i,s){return this.httpClient.post(`${this.apiUrl}`,i,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+s}}).pipe((0,C.X)(1),(0,o.K)(this.handleError))}handleError(i){return i.error instanceof ErrorEvent?console.error("An error occurred:",i.error.message):console.error(`Backend returned code ${i.status}, body was: ${i.error}`),(0,m._)("Something bad happened; please try again later.")}}return v.\u0275fac=function(i){return new(i||v)(t.LFG(d.eN))},v.\u0275prov=t.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})();var M=e(3063),E=e(4527),p=e(4006),l=e(6895),L=e(3546),O=e(1948),n=e(42);function c(v,y){1&v&&t._UZ(0,"div")}function a(v,y){if(1&v){const i=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"mat-radio-button",14),t.NdJ("change",function(h){t.CHM(i);const u=t.oxw(2);return t.KtG(u.radioChange(h))}),t.TgZ(3,"span"),t._uU(4),t.qZA()()()()}if(2&v){const i=y.$implicit;t.xp6(1),t.Akn(i.style),t.Tol(i.description),t.xp6(1),t.Q6J("value",i.value)("checked",i.checked),t.xp6(2),t.hij("\xa0",i.name,"")}}function r(v,y){if(1&v){const i=t.EpF();t.TgZ(0,"div",12)(1,"div",15)(2,"a",16),t.NdJ("click",function(){t.CHM(i);const h=t.oxw(2);return t.KtG(h.clickme())}),t._uU(3," Mas opciones.."),t.qZA()()()}}function b(v,y){if(1&v&&(t.TgZ(0,"div",8)(1,"h4",9)(2,"b"),t._uU(3,"MOVIL"),t.qZA()(),t.TgZ(4,"p"),t._uU(5,"Elije un N\xfamero"),t.qZA(),t.YNc(6,a,5,7,"div",10),t.YNc(7,r,4,0,"div",11),t.qZA()),2&v){const i=t.oxw();t.xp6(6),t.Q6J("ngForOf",i.linesList),t.xp6(1),t.Q6J("ngIf",5==i.limitLine)}}let P=(()=>{class v{constructor(i,s,h,u){this.movilListService=i,this.webstoreservice=s,this.ordersService=h,this.formBuilder=u,this.linesList=[],this.internetList=[],this.tvList=[],this.movilState=!1,this.internetState=!1,this.entertainmentState=!1,this.movilLine="",this.wanLine="",this.tvLine="",this.limitLine=5,this.nextMovilListStep=new t.vpe,this.title="Elije tu N\xfamero",this.message="Te damos algunas opciones de l\xedneas telef\xf3nicas para que puedas tener tu nuevo plan con un n\xfamero telef\xf3nico que te agrade.",this.visited=!1,this.key=sessionStorage.getItem("key")}ngOnInit(){this.armadoJsonScoring(),this.searchList()}armadoJsonScoring(){this.planComposition=this.webstoreservice.getPlanComposition(),this.planList=this.planComposition?.planList,console.log(this.planComposition),console.log(this.planList),this.productTypeCode=[];for(let i=0;i<this.planList.length;i++)this.productTypeCode.push(this.planList[i].consumptionEntityType);this.planService=JSON.stringify({userCode:"14",ceTypeCodeList:this.productTypeCode,processId:165435435})}searchList(){this.listagroup=[],this.movilListService.getMovilList(this.planService,this.key).subscribe(i=>{this.numberList=i;const s=this.numberList.data.data.movil;if(s.length>0){this.movilState=!0,this.listagroup.push("movil_control");for(let _=0;_<this.limitLine;_++)_<this.limitLine&&(0==_?(this.movilLine=s[_],this.linesList.push({id:_.toString(),name:s[_],value:s[_],description:"alert alert-info divOption",style:"background-color: #d3a1f9; color: white; border: 4px solid #5C339D; border-radius:12px;",checked:!0})):this.linesList.push({id:_.toString(),name:s[_],value:s[_],description:"alert alert-secondary divOption",style:"color: black; border-radius:12px;",checked:!1}))}const h=this.numberList.data.data.ifixed,u=this.numberList.data.data.tv;console.log(h),h.length>0&&(this.wanLine=h[0]),console.log(u),u.length>0&&(this.tvLine=u[0]),console.log(this.listagroup),console.log(this.linesList)},i=>{console.log(i)})}next(){let i={},s={},h={},u={};""!=this.movilLine&&(i={movil:[this.movilLine]}),""!=this.wanLine&&(s={ifixed:[this.wanLine]}),""!=this.tvLine&&(h={tv:[this.tvLine]}),u=Object.assign(i,s,h);let _=JSON.stringify({data:{transactionId:this.numberList.data.transactionId,data:u}});this.webstoreservice.saveMovilListinformation(_);let S=this.webstoreservice.getMovilListInformation();console.log(S),this.visited=!0,this.registerAactivation(u),this.nextMovilListStep.emit(!0)}radioChange(i){var s=i.source.value;const h=this.numberList.data.data.movil;this.linesList=[],this.movilLine=i.source.value;for(let u=0;u<this.limitLine;u++)this.linesList.push(s==h[u]?{id:u.toString(),name:h[u],value:h[u],description:"alert alert-info divOption",style:"background-color: #d3a1f9; color: white; border: 4px solid #5C339D; border-radius:12px;",checked:!0}:{id:u.toString(),name:h[u],value:h[u],description:"alert alert-secondary divOption",style:"color: black; border-radius:12px;",checked:!1})}clickme(){this.limitLine=10,this.linesList=[];const i=this.numberList.data.data.movil;if(i.length>0){this.movilState=!0,this.listagroup.push("movil_control");for(let s=0;s<i.length;s++)s<this.limitLine&&this.linesList.push(0==s?{id:s.toString(),name:i[s],value:i[s],description:"alert alert-info divOption",style:"background-color: #d3a1f9; color: white; border: 4px solid #5C339D; border-radius:12px;",checked:!0}:{id:s.toString(),name:i[s],value:i[s],description:"alert alert-secondary divOption",style:"color: black; border-radius:12px;",checked:!1})}}registerAactivation(i){if(console.log(i),!i)return;let h;this.webstoreservice.getDataInSession("addressData").forEach(S=>{S.selected&&(h=S)});let u=[];i.movil&&i.movil.length>0&&u.push({planType:"MOVIL",serviceIdentifier:i.movil[0]}),i.ifixed&&i.ifixed.length>0&&u.push({planType:"IFIXED",serviceIdentifier:i.ifixed[0],address:{addressId:h?.addressId,addressTypeCode:"INS_ADDR"}}),i.tv&&i.tv.length>0&&u.push({planType:"TV",serviceIdentifier:i.tv[0]});const _={orderId:this.webstoreservice.getDataInSession("orderMainId"),sequence:4,userId:this.webstoreservice.getDataInSession("userId"),microFrontendId:"activation-data-microfront-app",microFrontendData:JSON.stringify(u),statusCode:"INI"};this.ordersService.registerOrderView(_,this.webstoreservice.getDataInSession("token")).subscribe(S=>{console.log(S)})}}return v.\u0275fac=function(i){return new(i||v)(t.Y36(x),t.Y36(M.f),t.Y36(E.N),t.Y36(p.qu))},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-movil-list"]],outputs:{nextMovilListStep:"nextMovilListStep"},decls:15,vars:5,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],["novalidate","","id","validationForm",1,"form",2,"background-color","white"],[4,"ngIf","ngIfThen"],["trueMovil",""],[1,"text-center"],[3,"content","click"],[1,"row",2,"color","black"],[2,"color","black"],["class","col-6 col-md-6 col-sm-6",4,"ngFor","ngForOf"],["class","col-6 col-md-6 col-sm-6",4,"ngIf"],[1,"col-6","col-md-6","col-sm-6"],["role","alert"],["name","movil",3,"value","checked","change"],["role","alert",1,"alert","alert-light","divOption",2,"text-align","center"],["href","javascript: void(0);",1,"linkMore",3,"click"]],template:function(i,s){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"h3"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card")(8,"mat-card-content")(9,"form",3),t.YNc(10,c,1,0,"div",4),t.YNc(11,b,8,2,"ng-template",null,5,t.W1O),t.TgZ(13,"div",6)(14,"app-button",7),t.NdJ("click",function(){return s.next()}),t.qZA()()()()()()()()),2&i){const h=t.MAs(12);t.xp6(4),t.Oqu(s.title),t.xp6(2),t.Oqu(s.message),t.xp6(4),t.Q6J("ngIf",1==s.movilState)("ngIfThen",h),t.xp6(4),t.Q6J("content","Continuar")}},dependencies:[l.sg,l.O5,p._Y,p.JL,p.F,L.a8,L.dn,O.U0,n.r],styles:["mat-card-header[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%]{font-size:2.5vh;text-align:left;color:purple;font-family:MUSEO900-REGULAR;margin:0}mat-card-header[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%]{font-size:1.8vh;text-align:left;color:#000;font-family:MUSEO600-REGULAR}mat-card-title[_ngcontent-%COMP%]{margin-bottom:.5vh}.mat-icon-button[_ngcontent-%COMP%]{width:4vh!important;height:auto!important;margin-top:-6px;margin-right:-3px}mat-card-content[_ngcontent-%COMP%]{background:#F0F0F0;color:purple;border-radius:0 0 25px 25px}.link-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:right;font-weight:700;text-decoration:none;color:#b302a7}.mat-card[_ngcontent-%COMP%]{padding:10px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white}mat-form-field[_ngcontent-%COMP%]{width:100%}.divOption[_ngcontent-%COMP%]{margin:5px}.linkMore[_ngcontent-%COMP%]{text-align:right;font-weight:700;text-decoration:none;color:#00008b}  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#fff!important;border-color:#fff!important;border-radius:8px}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#5c339d!important;border-color:#fff!important;border-radius:8px}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{background-color:#fff!important;border-color:#fff!important;border-radius:8px}"]}),v})()},5380:(T,f,e)=>{e.r(f),e.d(f,{MovilListModule:()=>n});var t=e(6895),d=e(3060),C=e(5428),o=e(4650);const m=[{path:"",component:C.h}];let g=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=o.oAB({type:c}),c.\u0275inj=o.cJS({imports:[d.Bz.forChild(m),d.Bz]}),c})();var x=e(9499),M=e(1948),E=e(4859),p=e(4006),l=e(3546),L=e(4466),O=e(9336);let n=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=o.oAB({type:c}),c.\u0275inj=o.cJS({imports:[t.ez,g,x.O,p.u5,p.UX,l.QW,E.ot,M.Fk,L.m,O.zB]}),c})()}}]);