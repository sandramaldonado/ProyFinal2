"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[182],{6182:(te,d,s)=>{s.r(d),s.d(d,{OrderModule:()=>$});var a=s(6895),c=s(3060),e=s(4650),m=s(3063),p=s(2584),g=s(6616),h=s(4527),v=s(7141),f=s(2241),C=s(3517),_=s(3861),x=s(42),b=s(9717);function S(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"app-button",7),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.next())}),e.qZA()}2&o&&e.Q6J("content","Continuar")}let u=(()=>{class o{constructor(t){this.webstoreservice=t,this.nextScoringStep=new e.vpe,this.acceptRecurrentPayment=!1}ngOnInit(){}next(){this.webstoreservice.saveDataInSession("scoring",{acceptRecurrentPayment:!0}),this.acceptRecurrentPayment=!0,this.nextScoringStep.emit(!0)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.f))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-result-scoring"]],outputs:{nextScoringStep:"nextScoringStep"},decls:13,vars:2,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],[1,"d-flex","flex-column"],[3,"content","click",4,"ngIf"],[3,"content"],[3,"content","click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"h3"),e._uU(5,"Antes de continuar"),e.qZA(),e.TgZ(6,"p"),e._uU(7,"Debido a tu capacidad de endeudamiento, para continuar el proceso de compra por este canal deber\xe1s habilitar el pago autom\xe1tico de tu servicio de manera mensual mediante una tarjeta de d\xe9bito o cr\xe9dito que te pediremos antes de concluir tu compra. Es un proceso sencillo que te asegurar\xe1 que puedas adquirir este plan."),e.qZA(),e.TgZ(8,"p"),e._uU(9,"\xbfDeseas continuar?"),e.qZA(),e.TgZ(10,"div",4),e.YNc(11,S,1,1,"app-button",5),e.qZA(),e._UZ(12,"app-button-outline",6),e.qZA()()()()),2&t&&(e.xp6(11),e.Q6J("ngIf",!n.acceptRecurrentPayment),e.xp6(1),e.Q6J("content","Ver otros planes"))},dependencies:[a.O5,x.r,b.Y],styles:[".mat-card[_ngcontent-%COMP%]{padding:1px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white;color:#848484}"]}),o})();var T=s(7876),y=s(5428),M=s(5830),O=s(1196);function I(o,l){1&o&&e._UZ(0,"img",23)}function A(o,l){1&o&&e._UZ(0,"img",24)}function k(o,l){1&o&&e._UZ(0,"img",25)}function Z(o,l){if(1&o&&(e.TgZ(0,"div",16)(1,"div",17),e.YNc(2,I,1,0,"img",18),e.YNc(3,A,1,0,"img",19),e.YNc(4,k,1,0,"img",20),e.qZA(),e.TgZ(5,"div",21)(6,"p",22),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA()()()),2&o){const t=l.$implicit;e.xp6(2),e.Q6J("ngIf",t.componentTradeName&&"MOVIL"==(null==t?null:t.consumptionEntityType)),e.xp6(1),e.Q6J("ngIf",t.componentTradeName&&"IFIXED"==(null==t?null:t.consumptionEntityType)),e.xp6(1),e.Q6J("ngIf",t.componentTradeName&&"TV"==(null==t?null:t.consumptionEntityType)),e.xp6(3),e.Oqu(null==t?null:t.consumptionEntityType),e.xp6(2),e.Oqu(null==t?null:t.componentOffer)}}function E(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"app-check-coverage",26),e.NdJ("nextCoverageStep",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.changeModule(i.modules.checkCoverage.alias))}),e.qZA()}if(2&o){const t=e.oxw();e.s9C("id",t.modules.checkCoverage.alias)}}function N(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"app-result-scoring",27),e.NdJ("nextScoringStep",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.changeModule(i.modules.scoring.alias))}),e.qZA()}if(2&o){const t=e.oxw();e.s9C("id",t.modules.scoring.alias)}}function w(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"app-admin-client",28),e.NdJ("nextAdminClientStep",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.changeModule(i.modules.adminClient.alias))}),e.qZA()}if(2&o){const t=e.oxw();e.s9C("id",t.modules.adminClient.alias)}}function J(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"app-check-email",29),e.NdJ("nextCheckEmailStep",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.changeModule(i.modules.checkEmail.alias))}),e.qZA()}if(2&o){const t=e.oxw();e.s9C("id",t.modules.checkEmail.alias)}}function R(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"app-documents",30),e.NdJ("nextDocumentStep",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.changeModule(i.modules.documents.alias))}),e.qZA()}if(2&o){const t=e.oxw();e.s9C("id",t.modules.documents.alias)}}function F(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"app-movil-list",31),e.NdJ("nextMovilListStep",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.changeModule(i.modules.movilList.alias))}),e.qZA()}if(2&o){const t=e.oxw();e.s9C("id",t.modules.movilList.alias)}}function L(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"app-delivery-method",32),e.NdJ("nextDeliveryMethodStep",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.changeModule(i.modules.deliverymethod.alias))}),e.qZA()}if(2&o){const t=e.oxw();e.s9C("id",t.modules.deliverymethod.alias)}}function D(o,l){if(1&o&&e._UZ(0,"app-almost-done",33),2&o){const t=e.oxw();e.Q6J("id",t.modules.almostdone.alias)}}const Y=[{path:"",component:(()=>{class o{constructor(t,n,i,r,ee){this.webstoreservice=t,this.breservices=n,this.tokenService=i,this.scroller=r,this.ordersService=ee,this.showCoverage=!0,this.showScoring=!0,this.orderTabs=[],this.modules={checkCoverage:{visible:!1,active:!1,enabled:!0,alias:"checkcoverage"},scoring:{visible:!1,active:!1,enabled:!0,alias:"scoring"},adminClient:{visible:!1,active:!1,enabled:!0,alias:"adminclient"},checkEmail:{visible:!1,active:!1,enabled:!0,alias:"checkemail"},documents:{visible:!1,active:!1,enabled:!0,alias:"documents"},movilList:{visible:!1,active:!1,enabled:!0,alias:"movilList"},detailsale:{visible:!1,active:!1,enabled:!0,alias:"detailsale"},deliverymethod:{visible:!1,active:!1,enabled:!0,alias:"deliverymethod"},almostdone:{visible:!1,active:!1,enabled:!0,alias:"almostdone"}}}ngOnInit(){this.planCompositionCode=this.webstoreservice.getPlanCompositionCode(),this.planComposition=this.webstoreservice.getPlanComposition(),this.getToken()}loadBussinesRules(){this.breservices.coverageEvaluation(this.autentication.data.token).subscribe(t=>{this.coverageData=t,this.scoringStatus=this.webstoreservice.getStatusScoring(),this.initializeComponents()})}initializeComponents(){this.planList=this.planComposition?.planList,"OK"==this.coverageData.data.requireCoverageVerification?this.modules.checkCoverage.visible=!0:this.modules.checkCoverage.enabled=!1,this.modules.scoring.enabled="NORMAL"==this.scoringStatus,this.modules.scoring.visible=this.modules.scoring.enabled&&!this.modules.checkCoverage.visible,this.modules.adminClient.visible=!this.modules.scoring.visible&&!this.modules.checkCoverage.visible}getToken(){this.tokenService.gettoken().subscribe(t=>{this.autentication=t,this.webstoreservice.saveDataInSession("userId",t.data?.userId),this.createOrder()})}changeModule(t){console.log(t);var n=this;switch(t){case"checkcoverage":this.modules.scoring.enabled?(this.modules.scoring.visible=!0,setTimeout(function(){n.scroller.scrollToAnchor("scoring")},1e3)):this.changeModule("scoring");break;case"scoring":this.modules.adminClient.enabled?(this.modules.adminClient.visible=!0,setTimeout(function(){n.scroller.scrollToAnchor("adminclient")},1e3)):this.changeModule("adminclient");break;case"adminclient":this.modules.checkEmail.enabled?(this.modules.checkEmail.visible=!0,setTimeout(function(){n.scroller.scrollToAnchor("checkemail")},1e3)):this.changeModule("checkemail");break;case"checkemail":this.modules.documents.enabled?(this.modules.documents.visible=!0,setTimeout(function(){n.scroller.scrollToAnchor("documents")},1e3)):this.changeModule("documents");break;case"documents":this.modules.movilList.enabled?(this.modules.movilList.visible=!0,setTimeout(function(){n.scroller.scrollToAnchor("movillist")},1e3)):this.changeModule("movillist");break;case"movilList":this.modules.payment.enabled?(this.modules.payment.visible=!0,setTimeout(function(){n.scroller.scrollToAnchor("payment")},1e3)):this.changeModule("payment")}}createOrder(){const t=this.webstoreservice.getClientInformation();this.ordersService.createOrder({orderType:"PTFSALE",orderTypeName:"VENTAS",partyId:t.personId,fullName:t.fullName,customerId:t.clientId,channelCode:"CAATCL",channelName:"ATENCION AL CLIENTE",workplaceCode:"TIEEDISSA",workplaceName:"Tienda Edificio Issa",cityCode:t.documentCity,cityName:t.documentCityDesc,userId:this.autentication.data.userId,userName:"landing",userFullName:"landing",userRoleCode:"ROL_ASESOR_3"},this.autentication.data.token).subscribe(i=>{console.log(i),this.webstoreservice.saveDataInSession("orderMainId",i.data.data.orderMainId),this.registerCommercialOffer(i.data.data.orderMainId),this.loadBussinesRules()})}registerCommercialOffer(t){const n=this.webstoreservice.getPlanComposition(),i={orderId:t,sequence:0,userId:this.autentication.data.userId,microFrontendId:"commercial-offers-microfront-app",microFrontendData:JSON.stringify(n),statusCode:"INI"};this.ordersService.registerOrderView(i,this.autentication.data.token).subscribe(r=>{console.log(r),this.loadBussinesRules()})}submitOrder(){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.f),e.Y36(p.Y),e.Y36(g.B),e.Y36(a.EM),e.Y36(h.N))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-order"]],decls:19,vars:10,consts:[[1,"container"],[1,"row"],[1,"d-none","d-md-block","col-5","bg","bg-light","bg-gradient","border","py-5","px-5","my-1"],[1,"sticky-top"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],["class","row w-100 border-top pt-2",4,"ngFor","ngForOf"],[1,"col-12","col-md-7"],[3,"id","nextCoverageStep",4,"ngIf"],[3,"id","nextScoringStep",4,"ngIf"],[3,"id","nextAdminClientStep",4,"ngIf"],[3,"id","nextCheckEmailStep",4,"ngIf"],[3,"id","nextDocumentStep",4,"ngIf"],[3,"id","nextMovilListStep",4,"ngIf"],[3,"id","nextDeliveryMethodStep",4,"ngIf"],[3,"id",4,"ngIf"],[1,"row","w-100","border-top","pt-2"],[1,"col-1","text-end"],["src","assets/images/iconos/movil.png","alt","","style","width: 20px; height: auto;",4,"ngIf"],["src","assets/images/iconos/wifi.png","alt","","style","width: 25px; height: auto;",4,"ngIf"],["src","assets/images/iconos/tv.png","alt","","style","width: 25px; height: auto;",4,"ngIf"],[1,"col-11"],[1,"component-title","mb-0","fw-bold"],["src","assets/images/iconos/movil.png","alt","",2,"width","20px","height","auto"],["src","assets/images/iconos/wifi.png","alt","",2,"width","25px","height","auto"],["src","assets/images/iconos/tv.png","alt","",2,"width","25px","height","auto"],[3,"id","nextCoverageStep"],[3,"id","nextScoringStep"],[3,"id","nextAdminClientStep"],[3,"id","nextCheckEmailStep"],[3,"id","nextDocumentStep"],[3,"id","nextMovilListStep"],[3,"id","nextDeliveryMethodStep"],[3,"id"]],template:function(t,n){1&t&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"section",4)(6,"div",5)(7,"h3"),e._uU(8),e.qZA(),e.YNc(9,Z,10,5,"div",6),e.qZA()()()(),e.TgZ(10,"div",7),e.YNc(11,E,1,1,"app-check-coverage",8),e.YNc(12,N,1,1,"app-result-scoring",9),e.YNc(13,w,1,1,"app-admin-client",10),e.YNc(14,J,1,1,"app-check-email",11),e.YNc(15,R,1,1,"app-documents",12),e.YNc(16,F,1,1,"app-movil-list",13),e.YNc(17,L,1,1,"app-delivery-method",14),e.YNc(18,D,1,1,"app-almost-done",15),e.qZA()()()),2&t&&(e.xp6(8),e.Oqu(null==n.planComposition?null:n.planComposition.groupTradeName),e.xp6(1),e.Q6J("ngForOf",null==n.planComposition?null:n.planComposition.planList),e.xp6(2),e.Q6J("ngIf",n.modules.checkCoverage.visible),e.xp6(1),e.Q6J("ngIf",n.modules.scoring.visible),e.xp6(1),e.Q6J("ngIf",n.modules.adminClient.visible),e.xp6(1),e.Q6J("ngIf",n.modules.checkEmail.visible),e.xp6(1),e.Q6J("ngIf",n.modules.documents.visible),e.xp6(1),e.Q6J("ngIf",n.modules.movilList.visible),e.xp6(1),e.Q6J("ngIf",n.modules.deliverymethod.visible),e.xp6(1),e.Q6J("ngIf",n.modules.almostdone.visible))},dependencies:[a.sg,a.O5,v.T,f.r,C.W,_.A,u,T.G,y.h,M.M,O.A]}),o})()}];let Q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(Y),c.Bz]}),o})();var B=s(931),U=s(5780),P=s(3434),G=s(605);const K=[{path:"",component:u}];let z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(K),c.Bz]}),o})();var H=s(4466);let j=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.ez,z,H.m]}),o})();var V=s(3720),X=s(5380),q=s(1083),W=s(635);let $=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.ez,Q,B.CheckCoverageModule,U.AdminClientModule,P.CheckEmailModule,G.DocumentsModule,j,V.O,X.MovilListModule,q.DeliveryMethodModule,W.AlmostDoneModule]}),o})()}}]);