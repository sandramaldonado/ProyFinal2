"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[262],{1196:(M,m,o)=>{o.d(m,{A:()=>c});var e=o(4650),t=o(3060),g=o(3063);let c=(()=>{class s{constructor(l,u){this.router=l,this.webstoreService=u,this.stateLocation=!1,this.locationInfo=this.webstoreService.getDeliveryStoreMethod(),console.log(this.locationInfo)}ngOnInit(){this.stateLocation=this.locationInfo?.state,console.log(this.stateLocation),console.log("need implementation?")}detalle(){console.log("asda"),this.router.navigate(["/","detalle-compra"])}}return s.\u0275fac=function(l){return new(l||s)(e.Y36(t.F0),e.Y36(g.f))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-almost-done"]],decls:13,vars:0,consts:[["id","padre",1,"d-flex","flex-column","justify-content-around","align-items-center"],["id","banner"],["id","presiona"],["src","../../../../assets/images/iconos/down.png"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],[1,"button-active",3,"click"],["id","moto","src","../../../../assets/images/iconos/moto.png"],["id","linea"]],template:function(l,u){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3"),e._uU(3," Ya casi terminamos "),e.qZA(),e.TgZ(4,"p",2),e._uU(5," Presiona en tu detalle de compra para revisar el estado y terminar tu compra. "),e.qZA(),e._UZ(6,"img",3),e.qZA()(),e.TgZ(7,"div",4)(8,"button",5),e.NdJ("click",function(){return u.detalle()}),e._UZ(9,"img",6),e._uU(10," Detalle De Compra "),e.TgZ(11,"p",7),e._uU(12,"Linea Movil"),e.qZA()()())},styles:["#banner[_ngcontent-%COMP%]{text-align:center;position:relative;padding:5%}#padre[_ngcontent-%COMP%]{justify-content:center;align-items:center;display:block;background:linear-gradient(180deg,rgba(214,240,132,0) 0%,#D6F084 100%);border-radius:10px}#moto[_ngcontent-%COMP%]{float:left;padding:10px}#presiona[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:16px;text-align:center;color:#5c339d}#linea[_ngcontent-%COMP%]{width:241px;height:16px;font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:16px;color:#fff}.button-active[_ngcontent-%COMP%]{background-color:#5c339d;padding:12px 10px;border-radius:20px;width:285px;height:60px!important;box-shadow:0 4px 15px #0000004d;font-family:MUSEO500-REGULAR;text-align:left;font-style:normal;font-weight:900;font-size:20px;line-height:24px;color:#fff}@media (max-width: 768px){.button-active[_ngcontent-%COMP%]{margin-right:0!important;font-size:.9em!important}}@media (max-width: 576px){.button-active[_ngcontent-%COMP%]{height:45px}}.button-wrap[_ngcontent-%COMP%]{margin-top:1.5vh}.button-disactived[_ngcontent-%COMP%]{background:#e0e0e0;font-size:1.1em;border-radius:20px;color:#000;margin-top:1.5vh;width:300px;height:40px;font-weight:700;border:2px solid #8260A5;font-family:MUSEO500-REGULAR;box-sizing:border-box}button[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:all .4s ease-in-out}.button-message[_ngcontent-%COMP%]{color:#fff;font-weight:900;font-size:small;font-family:MUSEO500-REGULAR;margin-bottom:4px}.button-active[_ngcontent-%COMP%]:hover{transform:scale(1.04,1.0000000099);-ms-transform:scale(1.04,1.0000000099);-webkit-transform:scale(1.04,1.0000000099)}button[_ngcontent-%COMP%]:focus{border-color:#0000;box-shadow:0 1px 1px #d0d0d0 inset,0 0 8px #dcdcdc;outline:0 none}"]}),s})()},635:(M,m,o)=>{o.r(m),o.d(m,{AlmostDoneModule:()=>T});var e=o(6895),t=o(3546),g=o(4006),c=o(4466),s=o(3060),f=o(1196),l=o(4650);const u=[{path:"",component:f.A}];let h=(()=>{class r{}return r.\u0275fac=function(C){return new(C||r)},r.\u0275mod=l.oAB({type:r}),r.\u0275inj=l.cJS({imports:[s.Bz.forChild(u),s.Bz]}),r})(),T=(()=>{class r{}return r.\u0275fac=function(C){return new(C||r)},r.\u0275mod=l.oAB({type:r}),r.\u0275inj=l.cJS({imports:[e.ez,h,t.QW,c.m,g.u5,g.UX]}),r})()},5001:(M,m,o)=>{o.d(m,{h:()=>_});var e=o(4006),t=o(4650),g=o(3063),c=o(6895),s=o(9549),f=o(4385),l=o(3238),u=o(1196);function h(a,d){if(1&a&&(t.TgZ(0,"mat-option",12),t._uU(1),t.qZA()),2&a){const n=d.$implicit;t.Q6J("value",n.value),t.xp6(1),t.hij(" ",n.description," ")}}function T(a,d){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Por favor elija una opci\xf3n "),t.qZA())}function r(a,d){if(1&a&&(t.TgZ(0,"mat-option",12),t._uU(1),t.qZA()),2&a){const n=d.$implicit;t.Q6J("value",n.value),t.xp6(1),t.hij(" ",n.description," ")}}function v(a,d){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Por favor elija una opci\xf3n "),t.qZA())}function C(a,d){1&a&&(t.TgZ(0,"div",13)(1,"div",14)(2,"div",15),t._UZ(3,"br"),t.TgZ(4,"span")(5,"i",16),t._uU(6,"qr_code"),t.qZA()()(),t.TgZ(7,"div",17),t._UZ(8,"br"),t.TgZ(9,"h5"),t._uU(10,"\xa1Recojo habilitado!"),t.qZA(),t.TgZ(11,"p")(12,"b"),t._uU(13,"Enviamos un QR a tu correo electr\xf3nico"),t.qZA(),t._uU(14," para que recojas tus art\xedculos en la sucursal de tu preferencia"),t.qZA()()(),t.TgZ(15,"div",18),t._UZ(16,"app-almost-done"),t.qZA()())}let _=(()=>{class a{constructor(n){this.webstoreService=n,this.cityLocation={},this.storeLocation={},this.stateLocation=!1,this.cityList=[{value:"CBEN",description:"Beni"},{value:"CCBA",description:"Cochabamba"},{value:"CLPZ",description:"La Paz"},{value:"CORU",description:"Oruro"},{value:"CPAN",description:"Pando"},{value:"CPOT",description:"Potosi"},{value:"CSCR",description:"Sucre"},{value:"CSCZ",description:"Santa Cruz"},{value:"CTRJ",description:"Tarija"}],this.storesList=[],this.storeGroup=[{CCBA:[{value:"Tienda 1",description:"Tienda 1"},{value:"Tienda 2",description:"Tienda 2"}],CLPZ:[{value:"Tienda 3",description:"Tienda 3"},{value:"Tienda 4",description:"Tienda 4"}],CBEN:[{value:"Tienda 5",description:"Tienda 5"},{value:"Tienda 6",description:"Tienda 6"}],CORU:[{value:"Tienda 7",description:"Tienda 7"},{value:"Tienda 8",description:"Tienda 8"}],CPAN:[{value:"Tienda 9",description:"Tienda 9"},{value:"Tienda 10",description:"Tienda 10"}],CPOT:[{value:"Tienda 11",description:"Tienda 11"},{value:"Tienda 12",description:"Tienda 12"}],CSCR:[{value:"Tienda 13",description:"Tienda 13"},{value:"Tienda 14",description:"Tienda 14"}],CSCZ:[{value:"Tienda 15",description:"Tienda 15"},{value:"Tienda 16",description:"Tienda 16"}],CTRJ:[{value:"Tienda 17",description:"Tienda 17"},{value:"Tienda 18",description:"Tienda 18"}]}],this.validationForm=new e.cw({store:new e.NI(null,[e.kI.required]),city:new e.NI(null,[e.kI.required])})}ngOnInit(){this.webstoreService.saveDeliveryStoreMethod(JSON.stringify({})),console.log("init store-city")}someMethod(n){this.cityLocation={},this.cityLocation={city:n},this.stateLocation=!1,console.log(n),this.storesList=this.storeGroup[0][n]}someMethodStore(n){this.storeLocation={},this.storeLocation={storage:n},this.stateLocation=!0;let i={},p={};this.stateLocation&&(i=Object.assign(this.cityLocation,this.storeLocation),p=JSON.stringify({data:i,state:this.stateLocation}),console.log(p),this.webstoreService.saveDeliveryStoreMethod(p))}get city(){return this.validationForm.get("city")}get store(){return this.validationForm.get("store")}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(g.f))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-store-city"]],decls:38,vars:6,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],["novalidate","","id","validationForm",2,"background-color","white",3,"formGroup"],[1,"row"],[1,"container","text-left","textTittle","textParrafo"],["appearance","outline",2,"width","99%","margin-right","2px","margin-left","2px"],["placeholder","Ciudad","formControlName","city","id","city","name","city",3,"selectionChange"],["style","color:#5C349D;",3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["placeholder","Elija un Tienda","formControlName","store","id","store","name","store",3,"selectionChange"],["class","col-12",4,"ngIf"],[2,"color","#5C349D",3,"value"],[1,"col-12"],[1,"row",2,"background-color","#FBFAFC","border","1px solid #5C349D","border-radius","10px","margin-left","2px","margin-right","2px"],[1,"col-2","col-md-2","col-sm-2","text-center"],[1,"material-icons","md-36",2,"color","#5C349D"],[1,"col-10","col-md-10","col-sm-10","textTittle","textParrafo"],[1,"col-12",2,"margin-top","27px"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"form",3)(4,"div",4)(5,"div",5)(6,"h5")(7,"b"),t._uU(8,"Recojo en Tienda"),t.qZA()(),t.TgZ(9,"p"),t._uU(10,"Te enviaremos un correo electr\xf3nico con las instrucciones de instalaci\xf3n y un c\xf3digo QR."),t._UZ(11,"br"),t._uU(12,"Bastar\xe1 con mostrar el c\xf3digo QR en la tienda de tu preferencia para recoger tus equipos. "),t.qZA()()(),t.TgZ(13,"div",4)(14,"div",5)(15,"h5")(16,"b"),t._uU(17,"Elija Ciudad"),t.qZA()(),t.TgZ(18,"p"),t._uU(19,"Elige la ciudad en la cu\xe1l recoger\xe1s el equipo."),t.qZA()()(),t.TgZ(20,"div",4)(21,"mat-form-field",6)(22,"mat-select",7),t.NdJ("selectionChange",function(y){return i.someMethod(y.value)}),t.YNc(23,h,2,2,"mat-option",8),t.qZA()(),t.YNc(24,T,2,0,"mat-error",9),t.qZA(),t.TgZ(25,"div",4)(26,"div",5)(27,"h5")(28,"b"),t._uU(29,"Elija Tienda"),t.qZA()(),t.TgZ(30,"p"),t._uU(31,"Elige la tienda de la cu\xe1l recoger\xe1s el equipo."),t.qZA()()(),t.TgZ(32,"div",4)(33,"mat-form-field",6)(34,"mat-select",10),t.NdJ("selectionChange",function(y){return i.someMethodStore(y.value)}),t.YNc(35,r,2,2,"mat-option",8),t.qZA()(),t.YNc(36,v,2,0,"mat-error",9),t.qZA(),t.YNc(37,C,17,0,"div",11),t.qZA()()()()),2&n&&(t.xp6(3),t.Q6J("formGroup",i.validationForm),t.xp6(20),t.Q6J("ngForOf",i.cityList),t.xp6(1),t.Q6J("ngIf",(null==i.city?null:i.city.invalid)&&(null==i.city?null:i.city.touched)),t.xp6(11),t.Q6J("ngForOf",i.storesList),t.xp6(1),t.Q6J("ngIf",(null==i.store?null:i.store.invalid)&&(null==i.store?null:i.store.touched)),t.xp6(1),t.Q6J("ngIf",i.stateLocation))},dependencies:[c.sg,c.O5,e._Y,e.JJ,e.JL,e.sg,e.u,s.TO,s.KE,f.gD,l.ey,u.A],styles:[".textTittle[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#5c349d}.textParrafo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#676767}.material-icons.md-36[_ngcontent-%COMP%]{font-size:36px}mat-label.has-events[_ngcontent-%COMP%]{pointer-events:auto;color:#5c349d}mat-card-header[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%]{font-size:2.5vh;text-align:left;color:purple;font-family:MUSEO900-REGULAR;margin:0}mat-card-header[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%]{font-size:1.8vh;text-align:left;color:#000;font-family:MUSEO600-REGULAR}mat-card-title[_ngcontent-%COMP%]{margin-bottom:.5vh}.mat-icon-button[_ngcontent-%COMP%]{width:4vh!important;height:auto!important;margin-top:-6px;margin-right:-3px}mat-card-content[_ngcontent-%COMP%]{background:#F0F0F0;color:purple;border-radius:0 0 25px 25px}.link-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:right;font-weight:700;text-decoration:none;color:#b302a7}.mat-card[_ngcontent-%COMP%]{padding:10px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-error[_ngcontent-%COMP%]{text-align:right;margin-top:-17px}  .mat-form-field-outline-start{border-radius:12px 0 0 12px!important;min-width:12px!important}  .mat-form-field-outline-end{border-radius:0 12px 12px 0!important}  .mat-step-header .mat-step-icon-selected, .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%]{background-color:#5c349d}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#5c349d!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#5c349d!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:red!important;opacity:.8!important}  .two .mat-select-value-text{color:#5c349d}.readonly-wrapper[_ngcontent-%COMP%]{cursor:not-allowed}.readonly-wrapper[_ngcontent-%COMP%]   .readonly-block[_ngcontent-%COMP%]{pointer-events:none}"]}),a})()},1262:(M,m,o)=>{o.r(m),o.d(m,{StoreCityModule:()=>d});var e=o(6895),t=o(3060),g=o(5001),c=o(4650);const s=[{path:"",component:g.h}];let f=(()=>{class n{}return n.\u0275fac=function(p){return new(p||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[t.Bz.forChild(s),t.Bz]}),n})();var l=o(4006),u=o(3546),h=o(4859),T=o(1948),r=o(4466),v=o(9336),C=o(9549),_=o(4385),a=o(635);let d=(()=>{class n{}return n.\u0275fac=function(p){return new(p||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[e.ez,f,l.u5,l.UX,u.QW,h.ot,T.Fk,C.lN,_.LD,r.m,v.zB,a.AlmostDoneModule]}),n})()}}]);