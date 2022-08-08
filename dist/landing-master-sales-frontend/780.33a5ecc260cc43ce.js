"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[780,625],{2671:(w,v,i)=>{i.d(v,{y:()=>f});var e=i(529),t=i(5625),_=i(262),c=i(2843),C=i(4650);let f=(()=>{class p{constructor(l){this.httpClient=l,this.apiUrl="https://omega.devnt.ssidevops.com/crm360/client/person/search",this.headers=new e.WM,this.httpOptions={}}getClientByMovil(l,x){return this.headers={"Content-Type":"application/json",Authorization:"Bearer "+x},this.httpClient.get(`${this.apiUrl}/${l}`,{headers:this.headers})}getClientByDNI(l,x){const N={headers:{"Content-Type":"application/json",Authorization:"Bearer "+x}},A=JSON.stringify({documentId:l,documentType:""});return this.httpClient.post(`${this.apiUrl}`,A,N).pipe((0,t.X)(1),(0,_.K)(this.handleError))}handleError(l){return l.error instanceof ErrorEvent?console.error("An error occurred:",l.error.message):console.error(`Backend returned code ${l.status}, body was: ${l.error}`),(0,c._)("Something bad happened; please try again later.")}}return p.\u0275fac=function(l){return new(l||p)(C.LFG(e.eN))},p.\u0275prov=C.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},2241:(w,v,i)=>{i.d(v,{r:()=>K});var e=i(4650),t=i(4006),_=i(3060),c=i(2671),C=i(3063),f=i(6895),p=i(3546),h=i(9549),l=i(4385),x=i(3238),T=i(1014),N=i(42);function A(s,u){1&s&&(e.TgZ(0,"mat-error",29),e._uU(1," El primer Nombre es Requerido (Solo acepta de 2 a 50 caracteres) "),e.qZA())}function b(s,u){1&s&&(e.TgZ(0,"mat-error",29),e._uU(1," El Primer Apellido es Requerido (Solo acepta de 2 a 50 caracteres) "),e.qZA())}function E(s,u){if(1&s&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&s){const d=u.$implicit;e.Q6J("value",d.value),e.xp6(1),e.hij(" ",d.description," ")}}function y(s,u){1&s&&(e.TgZ(0,"mat-error",29),e._uU(1," El tipo de Documento es Requerido "),e.qZA())}function m(s,u){1&s&&(e.TgZ(0,"mat-error",29),e._uU(1," El Carnet de Identidad es Requerido (Acepta de 4 a 10 Caracteres) "),e.qZA())}function D(s,u){if(1&s&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&s){const d=u.$implicit;e.Q6J("value",d.value),e.xp6(1),e.hij(" ",d.description," ")}}function R(s,u){1&s&&(e.TgZ(0,"mat-error",29),e._uU(1," El Expedido de Documento es Requerido "),e.qZA())}function Z(s,u){1&s&&(e.TgZ(0,"mat-error",29),e._uU(1," El N\xfamero Referencia es Requerido (Acepta solo 8 N\xfameros) "),e.qZA())}function F(s,u){1&s&&(e.TgZ(0,"mat-error",29),e._uU(1," El Correo es Requerido "),e.qZA())}function Q(s,u){1&s&&(e.TgZ(0,"mat-error",29),e._uU(1," Raz\xf3n Social es Requerida (Solo acepta de 2 a 50 caracteres) "),e.qZA())}function J(s,u){1&s&&(e.TgZ(0,"mat-error",29),e._uU(1," El n\xfamero NIT es Requerido (Acepta solamente N\xfameros) "),e.qZA())}let K=(()=>{class s{constructor(d,n,M,I){this.router=d,this.activatedRoute=n,this.clientService=M,this.webstoreservice=I,this.title="Tus datos de registro",this.message="Llena o revisa los datos del siguiente formulario, cuando termines presiona en Continuar.",this.tipoDoc=[{value:"CI",description:"CI"},{value:"NIT",description:"NIT"},{value:"LIBRETA",description:"LIB. MILITAR"}],this.expedido=[{value:"CBEN",description:"Beni"},{value:"CCBA",description:"Cochabamba"},{value:"CLPZ",description:"La Paz"},{value:"CORU",description:"Oruro"},{value:"CPAN",description:"Pando"},{value:"CPOT",description:"Potosi"},{value:"CSCR",description:"Sucre"},{value:"CSCZ",description:"Santa Cruz"},{value:"CTRJ",description:"Tarija"}],this.dniClientPattern=/^[A-Za-z0-9]+$/,this.nameClient=/^[A-Za-z]+$/,this.surNameClient=/^[A-Za-z\s]+$/,this.mobilNumPattern=/^[0-9]+$/,this.emailtext="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$",this.panelOpenState=!1,this.submitted=!1,this.validationForm=new t.cw({firstName:new t.NI("",[t.kI.required,t.kI.minLength(2),t.kI.maxLength(50),t.kI.pattern(this.nameClient)]),secondName:new t.NI(null,[t.kI.minLength(2),t.kI.maxLength(50),t.kI.pattern(this.nameClient)]),sureName:new t.NI(null,[t.kI.required,t.kI.minLength(2),t.kI.maxLength(50),t.kI.pattern(this.surNameClient)]),secondSurName:new t.NI(null,[t.kI.minLength(2),t.kI.maxLength(50),t.kI.pattern(this.surNameClient)]),tipo:new t.NI(null,[t.kI.required]),nroDoc:new t.NI(null,[t.kI.required,t.kI.minLength(4),t.kI.maxLength(10),t.kI.pattern(this.dniClientPattern)]),expDoc:new t.NI(null,[t.kI.required]),nroRef:new t.NI(null,[t.kI.required,t.kI.minLength(8),t.kI.maxLength(8),t.kI.pattern(this.mobilNumPattern)]),email:new t.NI(null,[t.kI.required,t.kI.minLength(2),t.kI.maxLength(50),t.kI.pattern(this.emailtext)]),razonS:new t.NI(null,[t.kI.required,t.kI.minLength(2),t.kI.maxLength(50),t.kI.pattern(this.surNameClient)]),nit:new t.NI(null,[t.kI.required,t.kI.minLength(7),t.kI.maxLength(15),t.kI.pattern(this.mobilNumPattern)])}),this.nextAdminClientStep=new e.vpe,this.key=sessionStorage.getItem("key"),this.clientInfo=this.webstoreservice.getClientInformation(),this.stateScorin=this.webstoreservice.getStatusScoring()}ngOnInit(){this.loadForm()}loadcontents(){this.clientService.getClientByMovil(this.subscriberId,this.key).subscribe(d=>{this.infoClient=d,this.loadForm()},d=>{console.log(d)})}loadForm(){this.validationForm.setValue({firstName:this.clientInfo.name,secondName:this.clientInfo.middleName,sureName:this.clientInfo.lastName1,secondSurName:this.clientInfo.lastName2,tipo:this.clientInfo.documentType,nroDoc:this.clientInfo.documentNumber,expDoc:this.clientInfo.documentCity,nroRef:null,email:this.clientInfo.email,razonS:this.clientInfo.fullName,nit:this.clientInfo.nit},{emitEvent:!0,onlySelf:!0})}next(){let d=this.validationForm.value.firstName,n=this.validationForm.value.secondName,M=this.validationForm.value.sureName,I=this.validationForm.value.secondSurName,O="";O=d,(""!=n||null!=n)&&(O+=" "+n),(""!=M||null!=M)&&(O+=" "+M),(""!=I||null!=I)&&(O+=" "+I);const z={birthday:this.clientInfo.birthday,clientId:this.clientInfo.clientId,documentCity:this.validationForm.value.expDoc,documentCityDesc:this.clientInfo.documentCityDesc,documentNumber:this.validationForm.value.nroDoc,documentType:this.validationForm.value.tipo,documentTypeDesc:this.clientInfo.documentTypeDesc,email:this.validationForm.value.email,fullName:O,gender:null,lastName1:M,lastName2:I,middleName:n,name:d,rSocial:this.validationForm.value.razonS,nroRef:this.validationForm.value.nroRef,nit:this.validationForm.value.nit,personId:this.clientInfo.personId,personTypeCode:this.clientInfo.personTypeCode};this.loadInfoClien(z),console.log("inica"),console.log(z),console.log("finaliza"),this.nextAdminClientStep.emit(!0)}loadInfoClien(d){this.webstoreservice.saveClientInformation(d)}onSubmit(){}get firstName(){return this.validationForm.get("firstName")}get sureName(){return this.validationForm.get("sureName")}get tipo(){return this.validationForm.get("tipo")}get nroDoc(){return this.validationForm.get("nroDoc")}get expDoc(){return this.validationForm.get("expDoc")}get nroRef(){return this.validationForm.get("nroRef")}get email(){return this.validationForm.get("email")}get razonS(){return this.validationForm.get("razonS")}get nit(){return this.validationForm.get("nit")}}return s.\u0275fac=function(d){return new(d||s)(e.Y36(_.F0),e.Y36(_.gz),e.Y36(c.y),e.Y36(C.f))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-admin-client"]],outputs:{nextAdminClientStep:"nextAdminClientStep"},decls:62,vars:25,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],["novalidate","","id","validationForm",1,"form",2,"background-color","white",3,"formGroup"],[1,"row"],[1,"form-group","col-md-6","col-sm-12"],["controlName","firstName","identifier","firstName","message","Primer Nombre","description","Primer Nombre",3,"submitted"],["style","text-align:right; margin-top: -7px;","class","text-danger",4,"ngIf"],["controlName","secondName","identifier","secondName","message","Segundo Nombre","description","Segundo Nombre",3,"submitted"],["controlName","sureName","identifier","sureName","message","Primer Apellido","description","Primer Apellido",3,"submitted"],["controlName","secondSurName","identifier","secondSurName","message","Segundo Apellido","description","Segundo Apellido",3,"submitted"],[1,"row","d-flex","flex-row","align-items-start","justify-content-center"],[1,"form-group","col-md-3","col-sm-12"],[1,"d-flex","flex-row","align-items-start","d-flex","justify-content-between"],["appearance","outline"],["placeholder","Tipo Documento","disableOptionCentering","","formControlName","tipo","id","tipo","name","tipo"],[3,"value",4,"ngFor","ngForOf"],["controlName","nroDoc","identifier","nroDoc","message","N\xfamero Documento","description","N\xfamero Doc.",3,"submitted"],[1,"col-md-3","col-sm-12"],["placeholder","Elija Expedido","disableOptionCentering","","formControlName","expDoc","id","expDoc","name","expDoc"],[1,"form-group","col-md-12","col-sm-12"],["controlName","nroRef","identifier","nroRef","message","N\xfamero Referencia","description","N\xfamero Ref.",3,"submitted"],["controlName","email","identifier","email","message","Correo Electr\xf3nico","description","email",3,"submitted"],[1,"form-group","col-12"],[1,"row","contenido"],["controlName","razonS","identifier","razonS","message","Ingresa la Raz\xf3n Social","description","Raz\xf3n Social",3,"submitted"],["controlName","nit","identifier","nit","message","Ingresa N\xfamero de NIT","description","NIT",3,"submitted"],[1,"text-center"],[3,"disabled","content","click"],[1,"text-danger",2,"text-align","right","margin-top","-7px"],[3,"value"]],template:function(d,n){1&d&&(e.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"h3"),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA(),e.TgZ(7,"mat-card")(8,"mat-card-content")(9,"form",3)(10,"div",4)(11,"h4"),e._uU(12,"Datos Generales"),e.qZA(),e.TgZ(13,"div",5),e._UZ(14,"app-input-text",6),e.YNc(15,A,2,0,"mat-error",7),e.qZA(),e.TgZ(16,"div",5),e._UZ(17,"app-input-text",8),e.qZA()(),e.TgZ(18,"div",4)(19,"div",5),e._UZ(20,"app-input-text",9),e.YNc(21,b,2,0,"mat-error",7),e.qZA(),e.TgZ(22,"div",5),e._UZ(23,"app-input-text",10),e.qZA()(),e.TgZ(24,"div",11)(25,"div",12)(26,"div",13)(27,"mat-form-field",14)(28,"mat-select",15),e.YNc(29,E,2,2,"mat-option",16),e.qZA()(),e.YNc(30,y,2,0,"mat-error",7),e.qZA()(),e.TgZ(31,"div",5),e._UZ(32,"app-input-text",17),e.YNc(33,m,2,0,"mat-error",7),e.qZA(),e.TgZ(34,"div",18)(35,"div",13)(36,"mat-form-field",14)(37,"mat-select",19),e.YNc(38,D,2,2,"mat-option",16),e.qZA()(),e.YNc(39,R,2,0,"mat-error",7),e.qZA()()(),e.TgZ(40,"div",4)(41,"div",20),e._UZ(42,"app-input-text",21),e.YNc(43,Z,2,0,"mat-error",7),e.qZA()(),e.TgZ(44,"div",4)(45,"div",20),e._UZ(46,"app-input-text",22),e.YNc(47,F,2,0,"mat-error",7),e.qZA()(),e.TgZ(48,"div",23),e._UZ(49,"hr"),e.TgZ(50,"div",24)(51,"h4"),e._uU(52,"Datos de Facturaci\xf3n"),e.qZA(),e.TgZ(53,"div",20),e._UZ(54,"app-input-text",25),e.YNc(55,Q,2,0,"mat-error",7),e.qZA(),e.TgZ(56,"div",20),e._UZ(57,"app-input-text",26),e.YNc(58,J,2,0,"mat-error",7),e.qZA()(),e._UZ(59,"br"),e.TgZ(60,"div",27)(61,"app-button",28),e.NdJ("click",function(){return n.next()}),e.qZA()()()()()()()()()),2&d&&(e.xp6(4),e.Oqu(n.title),e.xp6(2),e.Oqu(n.message),e.xp6(3),e.Q6J("formGroup",n.validationForm),e.xp6(5),e.Q6J("submitted",n.submitted),e.xp6(1),e.Q6J("ngIf",(null==n.firstName?null:n.firstName.invalid)&&(null==n.firstName?null:n.firstName.touched)),e.xp6(2),e.Q6J("submitted",n.submitted),e.xp6(3),e.Q6J("submitted",n.submitted),e.xp6(1),e.Q6J("ngIf",(null==n.sureName?null:n.sureName.invalid)&&(null==n.sureName?null:n.sureName.touched)),e.xp6(2),e.Q6J("submitted",n.submitted),e.xp6(6),e.Q6J("ngForOf",n.tipoDoc),e.xp6(1),e.Q6J("ngIf",(null==n.tipo?null:n.tipo.invalid)&&(null==n.tipo?null:n.tipo.touched)),e.xp6(2),e.Q6J("submitted",n.submitted),e.xp6(1),e.Q6J("ngIf",(null==n.nroDoc?null:n.nroDoc.invalid)&&(null==n.nroDoc?null:n.nroDoc.touched)),e.xp6(5),e.Q6J("ngForOf",n.expedido),e.xp6(1),e.Q6J("ngIf",(null==n.expDoc?null:n.expDoc.invalid)&&(null==n.expDoc?null:n.expDoc.touched)),e.xp6(3),e.Q6J("submitted",n.submitted),e.xp6(1),e.Q6J("ngIf",(null==n.nroRef?null:n.nroRef.invalid)&&(null==n.nroRef?null:n.nroRef.touched)),e.xp6(3),e.Q6J("submitted",n.submitted),e.xp6(1),e.Q6J("ngIf",(null==n.email?null:n.email.invalid)&&(null==n.email?null:n.email.touched)),e.xp6(7),e.Q6J("submitted",n.submitted),e.xp6(1),e.Q6J("ngIf",(null==n.razonS?null:n.razonS.invalid)&&(null==n.razonS?null:n.razonS.touched)),e.xp6(2),e.Q6J("submitted",n.submitted),e.xp6(1),e.Q6J("ngIf",(null==n.nit?null:n.nit.invalid)&&(null==n.nit?null:n.nit.touched)),e.xp6(3),e.Q6J("disabled",n.validationForm.invalid)("content","Siguiente"))},dependencies:[f.sg,f.O5,t._Y,t.JJ,t.JL,t.sg,t.u,p.a8,p.dn,h.TO,h.KE,l.gD,x.ey,T.m,N.r],styles:["mat-card-header[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%]{font-size:2.5vh;text-align:left;color:purple;font-family:MUSEO900-REGULAR;margin:0}mat-card-header[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%]{font-size:1.8vh;text-align:left;color:#000;font-family:MUSEO600-REGULAR}mat-card-title[_ngcontent-%COMP%]{margin-bottom:.5vh}.mat-icon-button[_ngcontent-%COMP%]{width:4vh!important;height:auto!important;margin-top:-6px;margin-right:-3px}mat-card-content[_ngcontent-%COMP%]{background:#F0F0F0;color:purple;border-radius:0 0 25px 25px}.link-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:right;font-weight:700;text-decoration:none;color:#b302a7}.mat-card[_ngcontent-%COMP%]{padding:10px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white}mat-form-field[_ngcontent-%COMP%]{width:100%}  .mat-form-field-outline-start{color:purple!important;border-color:purple!important;border-radius:18px 0 0 18px!important;min-width:18px!important;width:90%}  .mat-form-field-outline-end{color:purple!important;border-color:purple!important;border-radius:0 18px 18px 0!important}"]}),s})()},5780:(w,v,i)=>{i.r(v),i.d(v,{AdminClientModule:()=>de});var e=i(6895),t=i(3060),_=i(2241),c=i(4650);const C=[{path:"",component:_.r}];let f=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[t.Bz.forChild(C),t.Bz]}),a})();var p=i(9499),h=i(4859);let b=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({}),a})();var E=i(4080),y=i(3238);i(7340);let V=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[e.ez,y.BQ,b,E.eL]}),a})();var G=i(931),$=i(4006),ee=i(3546),te=i(529),ne=i(5412),ie=i(671),oe=i(4144),ae=i(9549),re=i(1948),se=i(4385),le=i(4466);let de=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[e.ez,f,$.u5,p.O,G.CheckCoverageModule,V,h.ot,$.UX,ee.QW,te.JF,ne.Is,ie.p0,oe.c,re.Fk,ae.lN,se.LD,le.m]}),a})()},1014:(w,v,i)=>{i.d(v,{m:()=>C});var e=i(4006),t=i(4650),_=i(9549),c=i(4144);let C=(()=>{class f{constructor(h){this.cc=h,this.identifier="",this.message="",this.method="",this.description="",this.errormessage="",this.controlName="",this.submitted=!1}get hasError(){return this.submitted&&null!=this.cc.control.controls[this.controlName].errors}}return f.\u0275fac=function(h){return new(h||f)(t.Y36(e.gN))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-input-text"]],inputs:{identifier:"identifier",message:"message",method:"method",description:"description",ngIf:"ngIf",errormessage:"errormessage",controlName:"controlName",validationForm:"validationForm",submitted:"submitted"},features:[t._Bn([],[{provide:e.gN,useExisting:e.sg}])],decls:5,vars:6,consts:[[1,"col-12","col-md-12","d-flex","flex-row","align-items-start","d-flex","justify-content-between"],["appearance","outline",1,"tama\xf1odiv"],["type","text","matInput","",3,"formControlName","id","name","placeholder"],[1,"has-events",3,"for"]],template:function(h,l){1&h&&(t.TgZ(0,"div",0)(1,"mat-form-field",1),t._UZ(2,"input",2),t.TgZ(3,"mat-label",3),t._uU(4),t.qZA()()()),2&h&&(t.xp6(2),t.s9C("id",l.identifier),t.s9C("name",l.identifier),t.MGl("placeholder","\xa0",l.message,""),t.Q6J("formControlName",l.controlName),t.xp6(1),t.s9C("for",l.identifier),t.xp6(1),t.hij("\xa0\xa0\xa0\xa0",l.description,""))},dependencies:[e.Fj,e.JJ,_.KE,_.hX,e.u,c.Nt],styles:['@charset "UTF-8";mat-label.has-events[_ngcontent-%COMP%]{pointer-events:auto;color:purple}mat-form-field[_ngcontent-%COMP%]{width:100%}  .mat-form-field-outline-start{color:purple!important;border-color:purple!important;border-radius:9px 0 0 9px!important;min-width:9x!important;width:100%}  .mat-form-field-outline-end{color:purple!important;border-color:purple!important;border-radius:0 9px 9px 0!important}.tama\\f1odiv[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}  .mat-form-field-appearance-outline .mat-form-field-outline{color:purple!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:purple!important}']}),f})()},5625:(w,v,i)=>{i.d(v,{X:()=>f});var e=i(4482),t=i(5403),_=i(4671),c=i(5963),C=i(8421);function f(p=1/0){let h;h=p&&"object"==typeof p?p:{count:p};const{count:l=1/0,delay:x,resetOnSuccess:T=!1}=h;return l<=0?_.y:(0,e.e)((N,A)=>{let E,b=0;const y=()=>{let m=!1;E=N.subscribe((0,t.x)(A,D=>{T&&(b=0),A.next(D)},void 0,D=>{if(b++<l){const R=()=>{E?(E.unsubscribe(),E=null,y()):m=!0};if(null!=x){const Z="number"==typeof x?(0,c.H)(x):(0,C.Xf)(x(D,b)),F=(0,t.x)(A,()=>{F.unsubscribe(),R()},()=>{A.complete()});Z.subscribe(F)}else R()}else A.error(D)})),m&&(E.unsubscribe(),E=null,y())};y()})}}}]);