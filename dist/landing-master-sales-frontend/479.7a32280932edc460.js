"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[479,625],{9479:(E,b,r)=>{r.r(b),r.d(b,{ValidationModule:()=>v});var F=r(6895),l=r(3060),o=r(4006),e=r(4650),N=r(5412),p=r(529),d=r(262),g=r(5625),y=r(2843);let h=(()=>{class n{constructor(t){this.httpClient=t,this.apiUrl="http://localhost:3000/client",this.headers=(new p.WM).set("Content-Type","application/json"),this.httpOptions={headers:new p.WM({"Content-Type":"application/json"})}}getClient(t,i){return this.httpClient.get(`${this.apiUrl}?dni=${t}&subscriberId=${i}`).pipe((0,d.K)(this.handleError))}getClientList(){return this.httpClient.get(`${this.apiUrl}`).pipe((0,d.K)(this.handleError))}setClient(t){return this.httpClient.post(`${this.apiUrl}`,JSON.stringify(t),this.httpOptions).pipe((0,g.X)(1),(0,d.K)(this.handleError))}handleError(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`Backend returned code ${t.status}, body was: ${t.error}`),(0,y._)("Something bad happened; please try again later.")}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(p.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=r(3546),C=r(4859);const f=[{path:"",component:(()=>{class n{constructor(t,i,a,I,U){this.dialog=t,this.validationService=i,this.rutaActiva=a,this.router=I,this.route=U,this.hasError=!0,this.gropuForm=new o.cw({dniNumber:new o.NI(""),phoneNumber:new o.NI("")}),this.resultDni=!1,this.resultPhone=!1}ngOnInit(){this.setupValidations(),this.setupForm(),this.loadForm()}loadForm(){this.gropuForm.setValue({dniNumber:"",phoneNumber:""})}setupForm(){this.gropuForm=new o.cw({phoneNumber:new o.NI("",[o.kI.required,o.kI.minLength(this.validations.phoneNumber.minLength),o.kI.maxLength(this.validations.phoneNumber.maxLength)]),dniNumber:new o.NI("",[o.kI.required,o.kI.minLength(this.validations.dniNumber.minLength),o.kI.maxLength(this.validations.dniNumber.maxLength)])})}setupValidations(){this.validations={phoneNumber:{minLength:0,maxLength:8},dniNumber:{minLength:0,maxLength:19}}}ngOnChanges(){}saveForm(){let t=this.gropuForm.controls.dniNumber.value,i=this.gropuForm.controls.phoneNumber.value;this.validationNumbers(i)&&t.length>3?this.validationService.getClient(t,i).subscribe(a=>{this.clientPhone=a,console.log(this.clientPhone),a.length>0?this.router.navigate(["/oferta"]):confirm("Los datos ingresados son incorrectos!!! \n\xbfDesea realizar nuevamente el intento de validaci\xf3n?")||this.router.navigate(["/home"])},a=>{console.log(a)}):console.log("La variable no es entera")}validationNumbers(t){var a=!1;return t.match(/^[0-9]+$/)&&8==t.length&&(a=!0),a}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(N.uw),e.Y36(h),e.Y36(l.gz),e.Y36(l.F0),e.Y36(l.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-validation"]],features:[e.TTD],decls:29,vars:1,consts:[[1,"container"],[1,"row","d-flex","flex-column","justify-content-center","align-items-center","pt-5","px-1"],[2,"width","26rem"],["novalidate","",3,"formGroup","ngSubmit"],[1,"col-12"],["type","text","id","dniNumber","formControlName","dniNumber","placeholder","Numero de CI","maxlength","19","required","",1,"form-control"],[1,"valid-feedback"],["type","text","id","phoneNumber","formControlName","phoneNumber","placeholder","N\xfamero de Telefono","maxlength","8","required","",1,"form-control"],[1,"invalid-feedback"],["mat-raised-button","","color","primary",1,"w-100"],[1,"link-back"],["href","/home",2,"color","#5c349e"],["href","/registro",2,"color","green"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-header")(4,"mat-card-title"),e._uU(5,"VIVA"),e.qZA(),e.TgZ(6,"mat-card-subtitle"),e._uU(7,"Formulario de Validacion de Datos "),e._UZ(8,"br"),e._uU(9," Ingresa tu N\xfamero de Carnet de Identidad y N\xfamero Telef\xf3nico"),e.qZA()(),e.TgZ(10,"mat-card-content")(11,"form",3),e.NdJ("ngSubmit",function(){return i.saveForm()}),e.TgZ(12,"div",4),e._UZ(13,"input",5),e.TgZ(14,"div",6),e._uU(15," El numero de CI es requerido "),e.qZA()(),e.TgZ(16,"div",4),e._UZ(17,"input",7),e.TgZ(18,"div",8),e._uU(19," El numero de Telefono es requerido "),e.qZA()(),e.TgZ(20,"div",4)(21,"button",9),e._uU(22,"Ingresar"),e.qZA()()()(),e.TgZ(23,"div",10)(24,"a",11),e._uU(25,"Volver Atras"),e.qZA(),e._UZ(26,"br"),e.TgZ(27,"a",12),e._uU(28,"Crea tu cuenta"),e.qZA()()()()()),2&t&&(e.xp6(11),e.Q6J("formGroup",i.gropuForm))},dependencies:[u.a8,u.dk,u.dn,u.n5,u.$j,C.lW,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.nD,o.sg,o.u],styles:[".link-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:right;font-weight:700;text-decoration:none}"]}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(f),l.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[F.ez,m,u.QW,C.ot,N.Is,o.u5,o.UX]}),n})()},5625:(E,b,r)=>{r.d(b,{X:()=>p});var F=r(4482),l=r(5403),o=r(4671),e=r(5963),N=r(8421);function p(d=1/0){let g;g=d&&"object"==typeof d?d:{count:d};const{count:y=1/0,delay:h,resetOnSuccess:u=!1}=g;return y<=0?o.y:(0,F.e)((C,c)=>{let m,f=0;const v=()=>{let n=!1;m=C.subscribe((0,l.x)(c,s=>{u&&(f=0),c.next(s)},void 0,s=>{if(f++<y){const t=()=>{m?(m.unsubscribe(),m=null,v()):n=!0};if(null!=h){const i="number"==typeof h?(0,e.H)(h):(0,N.Xf)(h(s,f)),a=(0,l.x)(c,()=>{a.unsubscribe(),t()},()=>{c.complete()});i.subscribe(a)}else t()}else c.error(s)})),n&&(m.unsubscribe(),m=null,v())};v()})}}}]);