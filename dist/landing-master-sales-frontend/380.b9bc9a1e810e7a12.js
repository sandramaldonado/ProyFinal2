"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[380],{5428:(T,u,n)=>{n.d(u,{h:()=>E});var t=n(4650),v=n(529),M=n(5625),h=n(262),x=n(2843),C=n(7065);let S=(()=>{class o{constructor(i){this.httpClient=i,this.apiUrl=`${C.N.MovilNumberListApiUrl}`,this.headers=new v.WM,this.httpOptions={}}getMovilList(i,e){return this.httpClient.post(`${this.apiUrl}`,i,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}).pipe((0,M.X)(1),(0,h.K)(this.handleError))}handleError(i){return i.error instanceof ErrorEvent?console.error("An error occurred:",i.error.message):console.error(`Backend returned code ${i.status}, body was: ${i.error}`),(0,x._)("Something bad happened; please try again later.")}}return o.\u0275fac=function(i){return new(i||o)(t.LFG(v.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var b=n(3063),I=n(4527),c=n(4006),g=n(6895),f=n(3546),y=n(1948),O=n(42);function l(o,d){if(1&o){const i=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"mat-radio-button",13),t.NdJ("change",function(r){t.CHM(i);const s=t.oxw(2);return t.KtG(s.radioChange(r))}),t.TgZ(3,"span"),t._uU(4),t.qZA()()()()}if(2&o){const i=d.$implicit;t.xp6(1),t.Akn(i.style),t.Tol(i.description),t.xp6(1),t.Q6J("value",i.value)("checked",i.checked),t.xp6(2),t.hij("\xa0",i.name,"")}}function m(o,d){if(1&o){const i=t.EpF();t.TgZ(0,"div",11)(1,"div",14)(2,"a",15),t.NdJ("click",function(){t.CHM(i);const r=t.oxw(2);return t.KtG(r.clickme())}),t._uU(3," Mas opciones.."),t.qZA()()()}}function p(o,d){if(1&o&&(t.TgZ(0,"div")(1,"div",8)(2,"h4")(3,"b"),t._uU(4,"MOVIL"),t.qZA()(),t.TgZ(5,"p"),t._uU(6,"Elige un N\xfamero"),t.qZA(),t.YNc(7,l,5,7,"div",9),t.YNc(8,m,4,0,"div",10),t.qZA()()),2&o){const i=t.oxw();t.xp6(7),t.Q6J("ngForOf",i.linesList),t.xp6(1),t.Q6J("ngIf",5===i.limitLine)}}function A(o,d){if(1&o&&(t.TgZ(0,"div",8)(1,"div",0)(2,"h4"),t._uU(3,"Internet"),t.qZA(),t.TgZ(4,"p",17),t._uU(5),t.qZA()()()),2&o){const i=t.oxw(2);t.xp6(5),t.hij("Se asigno de manera directa la linea ",i.wanLine,"")}}function F(o,d){if(1&o&&(t.TgZ(0,"div",8)(1,"div",0)(2,"h4"),t._uU(3,"Entretenimiento - TV"),t.qZA(),t.TgZ(4,"p",17),t._uU(5),t.qZA()()()),2&o){const i=t.oxw(2);t.xp6(5),t.hij("Se asigno de manera directa la linea ",i.tvLine,"")}}function k(o,d){if(1&o&&(t.YNc(0,A,6,1,"div",16),t.YNc(1,F,6,1,"div",16)),2&o){const i=t.oxw();t.Q6J("ngIf",i.internetState),t.xp6(1),t.Q6J("ngIf",i.entertainmentState)}}let E=(()=>{class o{constructor(i,e,r,s){this.movilListService=i,this.webstoreservice=e,this.ordersService=r,this.formBuilder=s,this.linesList=[],this.internetList=[],this.tvList=[],this.movilState=!1,this.internetState=!1,this.entertainmentState=!1,this.movilLine="",this.wanLine="",this.tvLine="",this.limitLine=5,this.movilCounter=0,this.nextMovilListStep=new t.vpe,this.title="Elige tu N\xfamero",this.message="Te damos algunas opciones de l\xedneas telef\xf3nicas para que puedas tener tu nuevo plan con un n\xfamero telef\xf3nico que te agrade.",this.visited=!1,this.key=sessionStorage.getItem("key"),this.orderId=this.webstoreservice.getDataInSession("orderMainId"),this.userId=this.webstoreservice.getDataInSession("userId")}ngOnInit(){this.armadoJsonScoring(),this.searchList()}armadoJsonScoring(){this.planComposition=this.webstoreservice.getPlanComposition(),this.planList=this.planComposition?.planList,console.log(this.planComposition),console.log(this.planList),this.productTypeCode=[];for(let i=0;i<this.planList.length;i++)this.productTypeCode.push(this.planList[i].consumptionEntityType);this.planService=JSON.stringify({userCode:"14",ceTypeCodeList:this.productTypeCode,processId:this.orderId})}searchList(){let i="",e="",r="";this.listagroup=[],this.movilListService.getMovilList(this.planService,this.key).subscribe(s=>{if(this.numberList=s,console.log(this.numberList),null!=this.numberList.data.data.movil&&(i=this.numberList.data.data.movil),i.length>0){this.movilState=!0,this.listagroup.push("movil_control");for(let a=0;a<this.limitLine;a++)this.movilCounter=a,a<this.limitLine&&(0==a?(this.movilLine=i[a],this.linesList.push({id:a.toString(),name:i[a],value:i[a],description:"alert alert-info divOption",style:"background-color: #AC99CE; color: white; border: 2px solid #5C349D; border-radius:15px;",checked:!0})):this.linesList.push({id:a.toString(),name:i[a],value:i[a],description:"alert alert-secondary divOption",style:"background-color: #F1F1F1; color: black; border-radius:15px;",checked:!1}))}null!=this.numberList.data.data.ifixed&&(e=this.numberList.data.data.ifixed),null!=this.numberList.data.data.tv&&(r=this.numberList.data.data.tv),console.log(e),e.length>0&&(this.internetState=!0,this.wanLine=e[0]),console.log(r),r.length>0&&(this.entertainmentState=!0,this.tvLine=r[0])},s=>{console.log(s)})}next(){let i={},e={},r={},s={};""!=this.movilLine&&(i={movil:[this.movilLine]}),""!=this.wanLine&&(e={ifixed:[this.wanLine]}),""!=this.tvLine&&(r={tv:[this.tvLine]}),s=Object.assign(i,e,r);let a=JSON.stringify({data:{transactionId:this.numberList.data.transactionId,data:s}});this.webstoreservice.saveMovilListinformation(a),this.visited=!0,this.registerAactivation(s),this.nextMovilListStep.emit(!0)}radioChange(i){var e=i.source.value;const r=this.numberList.data.data.movil;this.linesList=[],this.movilLine=i.source.value;for(let s=0;s<this.limitLine;s++)this.linesList.push(e==r[s]?{id:s.toString(),name:r[s],value:r[s],description:"alert alert-info divOption",style:"background-color: #AC99CE; color: white; border: 2px solid #5C349D; border-radius:15px;",checked:!0}:{id:s.toString(),name:r[s],value:r[s],description:"alert alert-secondary divOption",style:"background-color: #F1F1F1; color: black; border-radius:15px;",checked:!1})}clickme(){this.limitLine=10,this.linesList=[];const i=this.numberList.data.data.movil;if(i.length>0){this.movilState=!0,this.listagroup.push("movil_control");for(let e=0;e<i.length;e++)e<this.limitLine&&this.linesList.push(0==e?{id:e.toString(),name:i[e],value:i[e],description:"alert alert-info divOption",style:"background-color: #AC99CE; color: white; border: 2px solid #5C349D; border-radius:15px;",checked:!0}:{id:e.toString(),name:i[e],value:i[e],description:"alert alert-secondary divOption",style:"background-color: #F1F1F1; color: black; border-radius:15px;",checked:!1})}}registerAactivation(i){if(console.log(i),!i)return;let r;this.webstoreservice.getDataInSession("addressData").forEach(L=>{L.selected&&(r=L)});let s=[];i.movil&&i.movil.length>0&&s.push({planType:"MOVIL",serviceIdentifier:i.movil[0]}),i.ifixed&&i.ifixed.length>0&&s.push({planType:"IFIXED",serviceIdentifier:i.ifixed[0],address:{addressId:r?.addressId,addressTypeCode:"INS_ADDR"}}),i.tv&&i.tv.length>0&&s.push({planType:"TV",serviceIdentifier:i.tv[0]});const a={orderId:this.webstoreservice.getDataInSession("orderMainId"),sequence:5,userId:this.webstoreservice.getDataInSession("userId"),microFrontendId:"activation-data-microfront-app",microFrontendData:JSON.stringify(s),statusCode:"INI"};this.ordersService.registerOrderView(a,this.webstoreservice.getDataInSession("token")).subscribe(L=>{console.log(L)})}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(S),t.Y36(b.f),t.Y36(I.N),t.Y36(c.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-movil-list"]],outputs:{nextMovilListStep:"nextMovilListStep"},decls:15,vars:5,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],["novalidate","","id","validationForm",1,"form",2,"background-color","white"],[4,"ngIf","ngIfElse"],["FALSEMOVIL",""],[1,"text-center"],[3,"content","click"],[1,"row"],["class","col-6 col-md-6 col-sm-6",4,"ngFor","ngForOf"],["class","col-6 col-md-6 col-sm-6",4,"ngIf"],[1,"col-6","col-md-6","col-sm-6"],["role","alert"],["name","movil",3,"value","checked","change"],["role","alert",1,"alert","alert-light","divOption",2,"text-align","center"],["href","javascript: void(0);",1,"linkMore",3,"click"],["class","row",4,"ngIf"],[2,"color","#848484"]],template:function(i,e){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"h3"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card")(8,"mat-card-content")(9,"form",3),t.YNc(10,p,9,2,"div",4),t.YNc(11,k,2,2,"ng-template",null,5,t.W1O),t.TgZ(13,"div",6)(14,"app-button",7),t.NdJ("click",function(){return e.next()}),t.qZA()()()()()()()()),2&i){const r=t.MAs(12);t.xp6(4),t.Oqu(e.title),t.xp6(2),t.Oqu(e.message),t.xp6(4),t.Q6J("ngIf",e.movilState)("ngIfElse",r),t.xp6(4),t.Q6J("content","Continuar")}},dependencies:[g.sg,g.O5,c._Y,c.JL,c.F,f.a8,f.dn,y.U0,O.r],styles:["mat-card-header[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%]{font-size:2.5vh;text-align:left;color:purple;font-family:MUSEO900-REGULAR;margin:0}mat-card-header[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%]{font-size:1.8vh;text-align:left;color:#000;font-family:MUSEO600-REGULAR}mat-card-title[_ngcontent-%COMP%]{margin-bottom:.5vh}.mat-icon-button[_ngcontent-%COMP%]{width:4vh!important;height:auto!important;margin-top:-6px;margin-right:-3px}mat-card-content[_ngcontent-%COMP%]{background:#F0F0F0;color:purple;border-radius:0 0 25px 25px}.link-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:right;font-weight:700;text-decoration:none;color:#b302a7}.mat-card[_ngcontent-%COMP%]{padding:10px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white}mat-form-field[_ngcontent-%COMP%]{width:100%}.divOption[_ngcontent-%COMP%]{margin:5px}.linkMore[_ngcontent-%COMP%]{text-align:right;font-weight:700;text-decoration:none;color:#00008b}  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#fff!important;border-color:#fff!important;border-radius:8px}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#5c339d!important;border-color:#fff!important;border-radius:8px}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{background-color:#fff!important;border-color:#fff!important;border-radius:8px}"]}),o})()},5380:(T,u,n)=>{n.r(u),n.d(u,{MovilListModule:()=>O});var t=n(6895),v=n(3060),M=n(5428),h=n(4650);const x=[{path:"",component:M.h}];let C=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[v.Bz.forChild(x),v.Bz]}),l})();var S=n(3720),b=n(1948),I=n(4859),c=n(4006),g=n(3546),f=n(4466),y=n(9336);let O=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[t.ez,C,S.O,c.u5,c.UX,g.QW,I.ot,b.Fk,f.m,y.zB]}),l})()}}]);