"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[780],{2671:(R,v,n)=>{n.d(v,{y:()=>g});var e=n(529),t=n(5625),_=n(262),d=n(2843),A=n(4650);let g=(()=>{class c{constructor(l){this.httpClient=l,this.apiUrl="https://omega.devnt.ssidevops.com/crm360/client/person/search",this.headers=new e.WM,this.httpOptions={}}getClientByMovil(l,x){return this.headers={"Content-Type":"application/json",Authorization:"Bearer "+x},this.httpClient.get(`${this.apiUrl}/${l}`,{headers:this.headers})}getClientByDNI(l,x){const D={headers:{"Content-Type":"application/json",Authorization:"Bearer "+x}},C=JSON.stringify({documentId:l,documentType:""});return this.httpClient.post(`${this.apiUrl}`,C,D).pipe((0,t.X)(1),(0,_.K)(this.handleError))}handleError(l){return l.error instanceof ErrorEvent?console.error("An error occurred:",l.error.message):console.error(`Backend returned code ${l.status}, body was: ${l.error}`),(0,d._)("Something bad happened; please try again later.")}}return c.\u0275fac=function(l){return new(l||c)(A.LFG(e.eN))},c.\u0275prov=A.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},2241:(R,v,n)=>{n.d(v,{r:()=>L});var e=n(4650),t=n(4006),_=n(3060),d=n(2671),A=n(3063),g=n(6895),c=n(3546),h=n(9549),l=n(4385),x=n(3238),y=n(1014),D=n(42);function C(s,u){if(1&s&&(e.TgZ(0,"mat-option",28),e._uU(1),e.qZA()),2&s){const m=u.$implicit;e.Q6J("value",m.value),e.xp6(1),e.hij(" ",m.description," ")}}function P(s,u){if(1&s&&(e.TgZ(0,"mat-option",28),e._uU(1),e.qZA()),2&s){const m=u.$implicit;e.Q6J("value",m.value),e.xp6(1),e.hij(" ",m.description," ")}}function E(s,u){1&s&&(e.TgZ(0,"small",29),e._uU(1,"El primer Nombre es Requerido (Solo acepta texto sin caracteres especiales entre 2 y 50 Caracteres)"),e.qZA())}function b(s,u){1&s&&(e.TgZ(0,"small",29),e._UZ(1,"br"),e._uU(2,"El Apellido Paterno es Requerido (Solo acepta texto sin caracteres especiales entre 2 y 50 Caracteres)"),e.qZA())}function p(s,u){1&s&&(e.TgZ(0,"small",29),e._UZ(1,"br"),e._uU(2,"El tipo de Documento es Requerido"),e.qZA())}function I(s,u){1&s&&(e.TgZ(0,"small",29),e._UZ(1,"br"),e._uU(2,"El Carnet de Identidad es Requerido (Acepta Numeros y Letras entre 4 y 10 Caracteres)"),e.qZA())}function N(s,u){1&s&&(e.TgZ(0,"small",29),e._UZ(1,"br"),e._uU(2,"El lugar de expedido es Requerido"),e.qZA())}function F(s,u){1&s&&(e.TgZ(0,"small",29),e._UZ(1,"br"),e._uU(2,"El n\xfamero de referencia es Requerido (Acepta solamente 8 N\xfameros)"),e.qZA())}function O(s,u){1&s&&(e.TgZ(0,"small",29),e._UZ(1,"br"),e._uU(2,"El email es Requerido "),e.qZA())}function U(s,u){1&s&&(e.TgZ(0,"small",29),e._UZ(1,"br"),e._uU(2,"La Raz\xf3n Social es Requerida (Solo acepta texto sin caracteres especiales entre 2 y 50 Caracteres)"),e.qZA())}function Z(s,u){1&s&&(e.TgZ(0,"small",29),e._UZ(1,"br"),e._uU(2,"El n\xfamero NIT es Requerido (Acepta solamente N\xfameros)"),e.qZA())}let L=(()=>{class s{constructor(m,i,S,w){this.router=m,this.activatedRoute=i,this.clientService=S,this.webstoreservice=w,this.title="Tus datos de registro",this.message="Llena o revisa los datos del siguiente formulario, cuando termines presiona en Continuar.",this.tipoDoc=[{value:"CI",description:"CI"},{value:"NIT",description:"NIT"},{value:"LIBRETA",description:"LIB. MILITAR"}],this.expedido=[{value:"CBEN",description:"Beni"},{value:"CCBA",description:"Cochabamba"},{value:"CLPZ",description:"La Paz"},{value:"CORU",description:"Oruro"},{value:"CPAN",description:"Pando"},{value:"CPOT",description:"Potosi"},{value:"CSCR",description:"Sucre"},{value:"CSCZ",description:"Santa Cruz"},{value:"CTRJ",description:"Tarija"}],this.dniClientPattern=/^[A-Za-z0-9]+$/,this.nameClient=/^[A-Za-z]+$/,this.surNameClient=/^[A-Za-z\s]+$/,this.mobilNumPattern=/^[0-9]+$/,this.emailtext="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$",this.panelOpenState=!1,this.submitted=!1,this.validationForm=new t.cw({firstName:new t.NI("",[t.kI.required,t.kI.minLength(2),t.kI.maxLength(50),t.kI.pattern(this.nameClient)]),secondName:new t.NI(null,[t.kI.minLength(2),t.kI.maxLength(50),t.kI.pattern(this.nameClient)]),sureName:new t.NI(null,[t.kI.required,t.kI.minLength(2),t.kI.maxLength(50),t.kI.pattern(this.surNameClient)]),secondSurName:new t.NI(null,[t.kI.minLength(2),t.kI.maxLength(50),t.kI.pattern(this.surNameClient)]),tipo:new t.NI(null,[t.kI.required]),nroDoc:new t.NI(null,[t.kI.required,t.kI.minLength(4),t.kI.maxLength(10),t.kI.pattern(this.dniClientPattern)]),expDoc:new t.NI(null,[t.kI.required]),nroRef:new t.NI(null,[t.kI.required,t.kI.minLength(8),t.kI.maxLength(8),t.kI.pattern(this.mobilNumPattern)]),email:new t.NI(null,[t.kI.required,t.kI.minLength(2),t.kI.maxLength(50),t.kI.pattern(this.emailtext)]),razonS:new t.NI(null,[t.kI.required,t.kI.minLength(8),t.kI.maxLength(8),t.kI.pattern(this.surNameClient)]),nit:new t.NI(null,[t.kI.required,t.kI.minLength(7),t.kI.maxLength(15),t.kI.pattern(this.mobilNumPattern)])}),this.nextAdminClientStep=new e.vpe,this.key=sessionStorage.getItem("key"),this.clientInfo=this.webstoreservice.getClientInformation(),this.stateScorin=this.webstoreservice.getStatusScoring()}ngOnInit(){this.loadForm()}loadcontents(){this.clientService.getClientByMovil(this.subscriberId,this.key).subscribe(m=>{this.infoClient=m,this.loadForm()},m=>{console.log(m)})}loadForm(){this.validationForm.setValue({firstName:this.clientInfo.name,secondName:this.clientInfo.middleName,sureName:this.clientInfo.lastName1,secondSurName:this.clientInfo.lastName2,tipo:this.clientInfo.documentType,nroDoc:this.clientInfo.documentNumber,expDoc:this.clientInfo.documentCity,nroRef:null,email:this.clientInfo.email,razonS:this.clientInfo.fullName,nit:this.clientInfo.nit},{emitEvent:!0,onlySelf:!0})}next(){this.nextAdminClientStep.emit(!0)}onSubmit(){}get firstName(){return this.validationForm.get("firstName")}get sureName(){return this.validationForm.get("sureName")}get tipo(){return this.validationForm.get("tipo")}get nroDoc(){return this.validationForm.get("nroDoc")}get expDoc(){return this.validationForm.get("expDoc")}get nroRef(){return this.validationForm.get("nroRef")}get email(){return this.validationForm.get("email")}get razonS(){return this.validationForm.get("razonS")}get nit(){return this.validationForm.get("nit")}}return s.\u0275fac=function(m){return new(m||s)(e.Y36(_.F0),e.Y36(_.gz),e.Y36(d.y),e.Y36(A.f))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-admin-client"]],outputs:{nextAdminClientStep:"nextAdminClientStep"},decls:59,vars:24,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],["novalidate","","id","validationForm",1,"form",2,"background-color","white",3,"formGroup"],[1,"row"],[1,"form-group","col-md-6","col-sm-12"],["controlName","firstName","identifier","firstName","message","Primer Nombre","description","Primer Nombre",3,"submitted"],["controlName","secondName","identifier","secondName","message","Segundo Nombre","description","Segundo Nombre",3,"submitted"],["controlName","sureName","identifier","sureName","message","Primer Apellido","description","Primer Apellido",3,"submitted"],["controlName","secondSurName","identifier","secondSurName","message","Segundo Apellido","description","Segundo Apellido",3,"submitted"],[1,"row","d-flex","flex-row","align-items-start","justify-content-center"],[1,"form-group","col-md-3","col-sm-12"],[1,"d-flex","flex-row","align-items-start","d-flex","justify-content-between"],["appearance","outline"],["placeholder","Tipo Documento","disableOptionCentering","","formControlName","tipo","id","tipo","name","tipo"],[3,"value",4,"ngFor","ngForOf"],["controlName","nroDoc","identifier","nroDoc","message","N\xfamero Documento","description","N\xfamero Doc.",3,"submitted"],[1,"col-md-3","col-sm-12"],["placeholder","Elija Expedido","disableOptionCentering","","formControlName","expDoc","id","expDoc","name","expDoc"],[1,"form-group","col-md-12","col-sm-12"],["controlName","nroRef","identifier","nroRef","message","N\xfamero Referencia","description","N\xfamero Ref.",3,"submitted"],[1,"form-group","col-12"],["class","text-danger",4,"ngIf"],[1,"row","contenido"],["controlName","razonS","identifier","razonS","message","Ingresa la Raz\xf3n Social","description","Raz\xf3n Social",3,"submitted"],["controlName","nit","identifier","nit","message","Ingresa N\xfamero de NIT","description","NIT",3,"submitted"],[1,"text-center"],[3,"disabled","content","click"],[3,"value"],[1,"text-danger"]],template:function(m,i){1&m&&(e.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"h3"),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA(),e.TgZ(7,"mat-card")(8,"mat-card-content")(9,"form",3)(10,"div",4)(11,"h4"),e._uU(12,"Datos de Generales"),e.qZA(),e.TgZ(13,"div",5),e._UZ(14,"app-input-text",6),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"app-input-text",7),e.qZA()(),e.TgZ(17,"div",4)(18,"div",5),e._UZ(19,"app-input-text",8),e.qZA(),e.TgZ(20,"div",5),e._UZ(21,"app-input-text",9),e.qZA()(),e.TgZ(22,"div",10)(23,"div",11)(24,"div",12)(25,"mat-form-field",13)(26,"mat-select",14),e.YNc(27,C,2,2,"mat-option",15),e.qZA()()()(),e.TgZ(28,"div",5),e._UZ(29,"app-input-text",16),e.qZA(),e.TgZ(30,"div",17)(31,"div",12)(32,"mat-form-field",13)(33,"mat-select",18),e.YNc(34,P,2,2,"mat-option",15),e.qZA()()()()(),e.TgZ(35,"div",4)(36,"div",19),e._UZ(37,"app-input-text",20),e.qZA()(),e.TgZ(38,"div",21),e.YNc(39,E,2,0,"small",22),e.YNc(40,b,3,0,"small",22),e.YNc(41,p,3,0,"small",22),e.YNc(42,I,3,0,"small",22),e.YNc(43,N,3,0,"small",22),e.YNc(44,F,3,0,"small",22),e.YNc(45,O,3,0,"small",22),e._UZ(46,"hr"),e.TgZ(47,"div",23)(48,"h4"),e._uU(49,"Datos de Facturaci\xf3n"),e.qZA(),e.TgZ(50,"div",19),e._UZ(51,"app-input-text",24),e.qZA(),e.TgZ(52,"div",19),e._UZ(53,"app-input-text",25),e.qZA(),e.YNc(54,U,3,0,"small",22),e.YNc(55,Z,3,0,"small",22),e.qZA(),e._UZ(56,"br"),e.TgZ(57,"div",26)(58,"app-button",27),e.NdJ("click",function(){return i.next()}),e.qZA()()()()()()()()()),2&m&&(e.xp6(4),e.Oqu(i.title),e.xp6(2),e.Oqu(i.message),e.xp6(3),e.Q6J("formGroup",i.validationForm),e.xp6(5),e.Q6J("submitted",i.submitted),e.xp6(2),e.Q6J("submitted",i.submitted),e.xp6(3),e.Q6J("submitted",i.submitted),e.xp6(2),e.Q6J("submitted",i.submitted),e.xp6(6),e.Q6J("ngForOf",i.tipoDoc),e.xp6(2),e.Q6J("submitted",i.submitted),e.xp6(5),e.Q6J("ngForOf",i.expedido),e.xp6(3),e.Q6J("submitted",i.submitted),e.xp6(2),e.Q6J("ngIf",(null==i.firstName?null:i.firstName.invalid)&&(null==i.firstName?null:i.firstName.touched)),e.xp6(1),e.Q6J("ngIf",(null==i.sureName?null:i.sureName.invalid)&&(null==i.sureName?null:i.sureName.touched)),e.xp6(1),e.Q6J("ngIf",(null==i.tipo?null:i.tipo.invalid)&&(null==i.tipo?null:i.tipo.touched)),e.xp6(1),e.Q6J("ngIf",(null==i.nroDoc?null:i.nroDoc.invalid)&&(null==i.nroDoc?null:i.nroDoc.touched)),e.xp6(1),e.Q6J("ngIf",(null==i.expDoc?null:i.expDoc.invalid)&&(null==i.expDoc?null:i.expDoc.touched)),e.xp6(1),e.Q6J("ngIf",(null==i.nroRef?null:i.nroRef.invalid)&&(null==i.nroRef?null:i.nroRef.touched)),e.xp6(1),e.Q6J("ngIf",(null==i.email?null:i.email.invalid)&&(null==i.email?null:i.email.touched)),e.xp6(6),e.Q6J("submitted",i.submitted),e.xp6(2),e.Q6J("submitted",i.submitted),e.xp6(1),e.Q6J("ngIf",(null==i.razonS?null:i.razonS.invalid)&&(null==i.razonS?null:i.razonS.touched)),e.xp6(1),e.Q6J("ngIf",(null==i.nit?null:i.nit.invalid)&&(null==i.nit?null:i.nit.touched)),e.xp6(3),e.Q6J("disabled",i.validationForm.invalid)("content","Siguiente"))},dependencies:[g.sg,g.O5,t._Y,t.JJ,t.JL,t.sg,t.u,c.a8,c.dn,h.KE,l.gD,x.ey,y.m,D.r],styles:["mat-card-header[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%]{font-size:2.5vh;text-align:left;color:purple;font-family:MUSEO900-REGULAR;margin:0}mat-card-header[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%]{font-size:1.8vh;text-align:left;color:#000;font-family:MUSEO600-REGULAR}mat-card-title[_ngcontent-%COMP%]{margin-bottom:.5vh}.mat-icon-button[_ngcontent-%COMP%]{width:4vh!important;height:auto!important;margin-top:-6px;margin-right:-3px}mat-card-content[_ngcontent-%COMP%]{background:#F0F0F0;color:purple;border-radius:0 0 25px 25px}.link-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:right;font-weight:700;text-decoration:none;color:#b302a7}.mat-card[_ngcontent-%COMP%]{padding:10px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white}mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),s})()},5780:(R,v,n)=>{n.r(v),n.d(v,{AdminClientModule:()=>re});var e=n(6895),t=n(3060),_=n(2241),d=n(4650);const A=[{path:"",component:_.r}];let g=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=d.oAB({type:a}),a.\u0275inj=d.cJS({imports:[t.Bz.forChild(A),t.Bz]}),a})();var c=n(9499),h=n(4859);let P=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=d.oAB({type:a}),a.\u0275inj=d.cJS({}),a})();var E=n(4080),b=n(3238);n(7340);let $=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=d.oAB({type:a}),a.\u0275inj=d.cJS({imports:[e.ez,b.BQ,P,E.eL]}),a})();var X=n(931),K=n(4006),q=n(3546),V=n(529),G=n(5412),ee=n(671),te=n(4144),ne=n(9549),ie=n(1948),oe=n(4385),ae=n(4466);let re=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=d.oAB({type:a}),a.\u0275inj=d.cJS({imports:[e.ez,g,K.u5,c.O,X.CheckCoverageModule,$,h.ot,K.UX,q.QW,V.JF,G.Is,ee.p0,te.c,ie.Fk,ne.lN,oe.LD,ae.m]}),a})()},1014:(R,v,n)=>{n.d(v,{m:()=>A});var e=n(4006),t=n(4650),_=n(9549),d=n(4144);let A=(()=>{class g{constructor(h){this.cc=h,this.identifier="",this.message="",this.method="",this.description="",this.controlName="",this.submitted=!1}get hasError(){return this.submitted&&null!=this.cc.control.controls[this.controlName].errors}}return g.\u0275fac=function(h){return new(h||g)(t.Y36(e.gN))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-input-text"]],inputs:{identifier:"identifier",message:"message",method:"method",description:"description",controlName:"controlName",validationForm:"validationForm",submitted:"submitted"},features:[t._Bn([],[{provide:e.gN,useExisting:e.sg}])],decls:5,vars:6,consts:[[1,"col-12","col-md-12","d-flex","flex-row","align-items-start","d-flex","justify-content-between"],["appearance","outline"],["type","text","matInput","",3,"formControlName","id","name","placeholder"],[1,"has-events",3,"for"]],template:function(h,l){1&h&&(t.TgZ(0,"div",0)(1,"mat-form-field",1),t._UZ(2,"input",2),t.TgZ(3,"mat-label",3),t._uU(4),t.qZA()()()),2&h&&(t.xp6(2),t.s9C("id",l.identifier),t.s9C("name",l.identifier),t.MGl("placeholder","\xa0",l.message,""),t.Q6J("formControlName",l.controlName),t.xp6(1),t.s9C("for",l.identifier),t.xp6(1),t.hij("\xa0\xa0\xa0\xa0",l.description,""))},dependencies:[e.Fj,e.JJ,_.KE,_.hX,e.u,d.Nt],styles:["mat-label.has-events[_ngcontent-%COMP%]{pointer-events:auto;color:purple}mat-form-field[_ngcontent-%COMP%]{width:100%}  .mat-form-field-outline-start{color:purple!important;border-color:purple!important;border-radius:18px 0 0 18px!important;min-width:18px!important;width:100%}  .mat-form-field-outline-end{color:purple!important;border-color:purple!important;border-radius:0 18px 18px 0!important}  .mat-form-field-flex>.mat-form-field-infix{padding:.4em 0!important}  .mat-form-field-label-wrapper{top:-1.5em}  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-1.1em) scale(.85);width:100%}  .mat-form-field-appearance-outline .mat-form-field-outline{color:purple!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:purple!important}"]}),g})()},5625:(R,v,n)=>{n.d(v,{X:()=>g});var e=n(4482),t=n(5403),_=n(4671),d=n(5963),A=n(8421);function g(c=1/0){let h;h=c&&"object"==typeof c?c:{count:c};const{count:l=1/0,delay:x,resetOnSuccess:y=!1}=h;return l<=0?_.y:(0,e.e)((D,C)=>{let E,P=0;const b=()=>{let p=!1;E=D.subscribe((0,t.x)(C,I=>{y&&(P=0),C.next(I)},void 0,I=>{if(P++<l){const N=()=>{E?(E.unsubscribe(),E=null,b()):p=!0};if(null!=x){const F="number"==typeof x?(0,d.H)(x):(0,A.Xf)(x(I,P)),O=(0,t.x)(C,()=>{O.unsubscribe(),N()},()=>{C.complete()});F.subscribe(O)}else N()}else C.error(I)})),p&&(E.unsubscribe(),E=null,b())};b()})}}}]);