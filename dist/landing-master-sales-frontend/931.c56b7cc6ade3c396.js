"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[931,527],{4527:(Z,E,o)=>{o.d(E,{N:()=>y});var t=o(7065),I=o(4004),g=o(4650),w=o(529);let y=(()=>{class p{constructor(c){this.http=c,this.endPoint=t.N.endPoint,this.endPointMgd=t.N.urlMgd}createOrder(c,u){return this.http.post(this.endPoint+"/order/create/orderMain",c,{headers:{Authorization:"Bearer "+u}}).pipe((0,I.U)(m=>m))}registerOrderView(c,u){return this.http.post(this.endPoint+"/order/registers/orderView",c,{headers:{Authorization:"Bearer "+u}}).pipe((0,I.U)(m=>m))}createPerson(c,u){return this.http.post(this.endPoint+"/sales/creates/client/person",c,{headers:{Authorization:"Bearer "+u}}).pipe((0,I.U)(m=>m))}uploadDocuments(c,u){return this.http.post(this.endPointMgd+"/documents/upload",c,{headers:{Authorization:"Bearer "+u}}).pipe((0,I.U)(m=>m))}}return p.\u0275fac=function(c){return new(c||p)(g.LFG(w.eN))},p.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},7141:(Z,E,o)=>{o.d(E,{T:()=>B});var t=o(4650),I=o(1002),g=o(7065),w=o(3063),y=o(529);let p=(()=>{class h{constructor(s,l){this.httpClient=s,this.webstoreservice=l}checkGISCovarge(s){const S={headers:{"Content-Type":"application/json","x-access-token":g.N.AVLTokenValue}};return this.httpClient.post(`${g.N.AVLApiUrl}`,JSON.stringify(s),S)}saveCoverageData(s){this.webstoreservice.saveDataInSession("coverage",s)}}return h.\u0275fac=function(s){return new(s||h)(t.LFG(y.eN),t.LFG(w.f))},h.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})();var O=o(4527),c=o(6895),u=o(7705),d=o(3546),C=o(42),m=o(9336);function L(h,b){if(1&h&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&h){const s=b.$implicit;t.Q6J("value",s.valueField),t.xp6(1),t.Oqu(s.displayValue)}}function P(h,b){if(1&h&&t._UZ(0,"map-marker",19),2&h){const s=b.$implicit,l=t.oxw();t.Q6J("position",s)("options",l.markerOptions)}}function M(h,b){1&h&&(t.TgZ(0,"div",23)(1,"div",24)(2,"div",25),t._UZ(3,"img",26),t.TgZ(4,"div")(5,"span",27),t._uU(6,"Cobertura Alta"),t.qZA(),t.TgZ(7,"p",28),t._uU(8,"El servicio tiene una cobertura excelente en la zona."),t.qZA()()()()())}function _(h,b){1&h&&(t.TgZ(0,"div",29)(1,"div",24)(2,"div",25),t._UZ(3,"img",30),t.TgZ(4,"div")(5,"span",27),t._uU(6,"Cobertura Baja"),t.qZA(),t.TgZ(7,"p",28),t._uU(8,"El servicio no tiene cobertura en la zona."),t.qZA()()()()())}function x(h,b){if(1&h&&(t.TgZ(0,"div",20),t.YNc(1,M,9,0,"div",21),t.YNc(2,_,9,0,"div",22),t.qZA()),2&h){const s=t.oxw();t.xp6(1),t.Q6J("ngIf",s.hasCoverage),t.xp6(1),t.Q6J("ngIf",!s.hasCoverage)}}function F(h,b){if(1&h){const s=t.EpF();t.TgZ(0,"address-microfront-app",31),t.NdJ("updateComplete",function(v){t.CHM(s);const k=t.oxw();return t.KtG(k.updateAddressComplete(v))}),t.qZA()}if(2&h){const s=t.oxw();t.Q6J("paramClass",s.addressParamClass)("addressList",s.addressList)("microfrontParamIn",s.microfrontParamIn)("clientId",null==s.client?null:s.client.clientId)}}function A(h,b){if(1&h){const s=t.EpF();t.TgZ(0,"app-button",32),t.NdJ("click",function(){t.CHM(s);const v=t.oxw();return t.KtG(v.next())}),t.qZA()}if(2&h){const s=t.oxw();t.Q6J("disabled",!s.hasCoverage||!s.addressSelected)("content","Siguiente")}}let B=(()=>{class h{constructor(s,l,v){this.webstoreService=s,this.coverageService=l,this.ordersService=v,this.zoom=118,this.center={lat:-17.393847,lng:-66.157328},this.options={zoomControl:!0,scrollwheel:!0,disableDoubleClickZoom:!0,maxZoom:18,minZoom:8},this.markerOptions={draggable:!1},this.markerPositions=[],this.cities=I.cA,this.addressList=[],this.urlPersonInfoMicrofront=g.N.urlPersonInfoMicrofront,this.addressParamClass={contentExistAddress:" spacer-form",contentAddress:" full-width bg-section padding-section",contentGroupBtn:{contentGroup:" content-group-btn",buttons:" section-group-buttons mr-5 ml-5 color-primary ",textButton:" icon-text-button mr-10",btnColor:" color-primary",finalBtnSave:" dialog-button color-accent",finalBtnCancel:" dialog-button",btnAction:" dialog-button"},section:{contentSubtitle:" dialog-subtitle ",inputSingleWidth:" input-single-width ",sectionFormInput:" section-form-input width-form-input  ",sectionFormCombo:" section-form-combobox width-form-input  ",sectionFormInput2:" section-form-input width-form-input  ",sectionFormCombo2:" section-form-combobox width-form-input  ",sectionFormGeneral:" section-form-general ",sectionFormPart2:" section-form-flex-90 ",closeFormButton:" close-form-button color-primary ",btnColor:" color-primary ",title:" dialog-title full-width ",subtitle:" dialog-subtitle ",divider:" divider-line ",content:" pending-section-content bg-section size-section space-element-right ",color:" blue-theme "},space:{spaceSmall:"spacer-form-small",spaceNormal:"spacer-form"},modal:{iconArrow:"arrow-circle-back",map:"full-width"},formGroup:{formContent:"space-element",formElement:"space-element-right"},contentHeader:"space-element"},this.microfrontParamIn={orderId:0,sequence:0,userId:5,microfrontId:"address-microfront-app"},this.microfrontUrl="https://view360.devnt.ssidevops.com/person-info-microfront-app/main.js",this.hasCoverage=!1,this.visited=!1,this.addressSelected=!1,this.selfLoaded=!0,this.nextCoverageStep=new t.vpe,this.addresses=[]}ngOnInit(){this.selfLoaded&&(this.load(),this.client=this.webstoreService.getClientInformation(),this.orderId=this.webstoreService.getDataInSession("orderMainId"),this.userId=this.webstoreService.getDataInSession("userId"),this.microfrontParamIn={orderId:this.orderId,sequence:0,userId:this.userId,microfrontId:"address-microfront-app"})}load(){this.webstoreService.saveToken();const v=(window||{}).__env||{};console.log("browserWindowEnv: ",v),navigator.geolocation.getCurrentPosition(k=>{console.log(typeof k.coords.latitude),this.center={lat:k.coords.latitude,lng:k.coords.longitude}})}verificarCobertura(){var s={lng:this.markerPositions[0].lng,lat:this.markerPositions[0].lat,verificationTAC:"47626",maxVel:null,formId:534077243,processId:46537322758};console.log(s),this.coverageService.checkGISCovarge(s).subscribe(l=>{console.log(l),"OK"==l.errorCode&&"OK"==l.hasCoverage?(this.hasCoverage=!0,this.validDataCoverage=s):this.hasCoverage=!1})}addMarker(s){console.log("click en el mapa",s.latLng?.toJSON()),null!=s.latLng&&(this.markerPositions=[],this.markerPositions.push(s.latLng.toJSON())),this.verificarCobertura()}onSubmit(){}changeCity(s){console.log(s.target.value);let l=this.cities.find(v=>v.valueField==s.target.value);l?.longitude&&l?.latitude&&(this.markerPositions=[],this.center={lat:l?.latitude,lng:l?.longitude})}locateCurrentLocation(){navigator.geolocation.getCurrentPosition(s=>{console.log(s),this.markerPositions=[],this.center={lat:s.coords.latitude,lng:s.coords.longitude}})}next(){this.coverageService.saveCoverageData(this.validDataCoverage),this.visited=!0,this.nextCoverageStep.emit(!0),this.registerAddress()}updateAddressComplete(s){console.log(s),this.addresses=s.detail.microfrontData,this.addresses.forEach(l=>{this.addressSelected=l.selected})}registerAddress(){if(!this.addresses||0===this.addresses.length)return;const s={orderId:this.orderId,sequence:1,userId:this.userId,microFrontendId:"address-microfront-app",microFrontendData:JSON.stringify(this.addresses),statusCode:"INI"};this.ordersService.registerOrderView(s,this.webstoreService.getDataInSession("token")).subscribe(l=>{console.log(l),this.webstoreService.saveDataInSession("addressData",this.addresses)})}}return h.\u0275fac=function(s){return new(s||h)(t.Y36(w.f),t.Y36(p),t.Y36(O.N))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-check-coverage"]],inputs:{selfLoaded:"selfLoaded"},outputs:{nextCoverageStep:"nextCoverageStep"},decls:24,vars:10,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],["novalidate","",1,""],[1,"input-group","mb-3"],["id","inputSelectCity",1,"form-select",3,"change"],["disabled","","selected","",2,"font-family","Trebuchet MS",3,"value"],["style","font-family: 'Trebuchet MS';",3,"value",4,"ngFor","ngForOf"],[3,"content","click"],[1,"my-3"],["height","400px","width","100%",3,"zoom","center","options","mapClick"],[3,"position","options",4,"ngFor","ngForOf"],["class","coverage-result",4,"ngIf"],[1,"address","py-3"],[1,"py-2","text-center","p-2"],[3,"paramClass","addressList","microfrontParamIn","clientId","updateComplete",4,"axLazyElement"],[3,"disabled","content","click",4,"ngIf"],[2,"font-family","Trebuchet MS",3,"value"],[3,"position","options"],[1,"coverage-result"],["class","coverage-status-ok p-2",4,"ngIf"],["class","coverage-status-nok p-2",4,"ngIf"],[1,"coverage-status-ok","p-2"],[1,"row"],[1,"d-flex","flex-row","justify-content-start","align-items-center"],["src","assets/images/iconos/atention-green.png","alt","",1,"m-2"],[1,"fw-bold"],[1,"my-0"],[1,"coverage-status-nok","p-2"],["src","assets/images/iconos/atention-red.png","alt","",1,"m-2"],[3,"paramClass","addressList","microfrontParamIn","clientId","updateComplete"],[3,"disabled","content","click"]],template:function(s,l){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"form",4)(5,"h3"),t._uU(6,"Cobertura"),t.qZA(),t.TgZ(7,"p"),t._uU(8,"Verificaremos si tienes cobertura en la zona de instalaci\xf3n del servicio."),t.qZA(),t.TgZ(9,"div",5)(10,"select",6),t.NdJ("change",function(k){return l.changeCity(k)}),t.TgZ(11,"option",7),t._uU(12,"Selecciona tu ciudad."),t.qZA(),t.YNc(13,L,2,2,"option",8),t.qZA()()(),t.TgZ(14,"app-button",9),t.NdJ("click",function(){return l.locateCurrentLocation()}),t.qZA(),t.TgZ(15,"mat-card",10)(16,"mat-card-content")(17,"google-map",11),t.NdJ("mapClick",function(k){return l.addMarker(k)}),t.YNc(18,P,1,2,"map-marker",12),t.qZA(),t.YNc(19,x,3,2,"div",13),t.qZA()(),t.TgZ(20,"mat-card",14)(21,"mat-card-content",15),t.YNc(22,F,1,4,"address-microfront-app",16),t.qZA()(),t.YNc(23,A,1,2,"app-button",17),t.qZA()()()()),2&s&&(t.xp6(11),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",l.cities),t.xp6(1),t.Q6J("content","Detectar ubicacion"),t.xp6(3),t.Q6J("zoom",l.zoom)("center",l.center)("options",l.options),t.xp6(1),t.Q6J("ngForOf",l.markerPositions),t.xp6(1),t.Q6J("ngIf",l.markerPositions.length>0),t.xp6(3),t.Q6J("axLazyElement",l.urlPersonInfoMicrofront),t.xp6(1),t.Q6J("ngIf",!l.visited))},dependencies:[c.sg,c.O5,u.b6,u.O_,d.a8,d.dn,C.r,m.xY],styles:[".mat-toolbar[_ngcontent-%COMP%]{background-color:#5c349e;color:#fff}.mat-toolbar[_ngcontent-%COMP%]   .toolbar-logo[_ngcontent-%COMP%]{max-width:100px}map-container[_ngcontent-%COMP%]{border-radius:20px!important;border:1px solid #5c349e!important}.mat-card[_ngcontent-%COMP%]{padding:1px!important;width:100%;color:#7b7b7b}.address[_ngcontent-%COMP%]{background:#F5F5F5;border:1px solid #AC99CE;border-radius:10px;overflow:auto}.detail[_ngcontent-%COMP%]{background:rgba(132,102,182,.1)}.section-body[_ngcontent-%COMP%]{background:white}.coverage-result[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:36px;height:36px}.coverage-status-ok[_ngcontent-%COMP%], .coverage-status-nok[_ngcontent-%COMP%]{background:#D6F084;color:#5c349e;border-radius:0 0 10px 10px}"]}),h})()},931:(Z,E,o)=>{o.r(E),o.d(E,{CheckCoverageModule:()=>P});var t=o(6895),I=o(3060),g=o(7141),w=o(4650);const y=[{path:"",component:g.T}];let p=(()=>{class M{}return M.\u0275fac=function(x){return new(x||M)},M.\u0275mod=w.oAB({type:M}),M.\u0275inj=w.cJS({imports:[I.Bz.forChild(y),I.Bz]}),M})();var O=o(7705),c=o(7392),u=o(3546),d=o(4859),C=o(3720),m=o(4466),L=o(9336);let P=(()=>{class M{}return M.\u0275fac=function(x){return new(x||M)},M.\u0275mod=w.oAB({type:M}),M.\u0275inj=w.cJS({imports:[t.ez,p,O.Y4,c.Ps,u.QW,d.ot,C.O,m.m,L.zB]}),M})()},42:(Z,E,o)=>{o.d(E,{r:()=>y});var t=o(4650),I=o(4006),g=o(6895);function w(p,O){if(1&p&&(t.TgZ(0,"div",3),t._uU(1),t.qZA()),2&p){const c=t.oxw();t.xp6(1),t.Oqu(c.message)}}let y=(()=>{class p{constructor(){this.content="",this.styles="",this.disabled=!1,this.message=""}}return p.\u0275fac=function(c){return new(c||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-button"]],inputs:{content:"content",styles:"styles",disabled:"disabled",message:"message"},features:[t._Bn([{provide:I.JU,useExisting:(0,t.Gpc)(()=>p),multi:!0}])],decls:4,vars:4,consts:[[1,"button-wrap"],["class","button-message",4,"ngIf"],[1,"button-active",3,"ngClass","disabled"],[1,"button-message"]],template:function(c,u){1&c&&(t.TgZ(0,"div",0),t.YNc(1,w,2,1,"div",1),t.TgZ(2,"button",2),t._uU(3),t.qZA()()),2&c&&(t.xp6(1),t.Q6J("ngIf",u.message),t.xp6(1),t.Q6J("ngClass",u.disabled?"button-disactived":"button-active")("disabled",u.disabled),t.xp6(1),t.Oqu(u.content))},dependencies:[g.mk,g.O5],styles:[".button-active[_ngcontent-%COMP%]{background-color:#5c339d;font-size:1rem!important;padding:12px 10px;border-radius:20px;color:#fff;width:285px;height:44px!important;box-shadow:0 4px 15px #0000004d;font-family:MUSEO500-REGULAR}@media (max-width: 768px){.button-active[_ngcontent-%COMP%]{margin-right:0!important;font-size:.9em!important}}@media (max-width: 576px){.button-active[_ngcontent-%COMP%]{height:45px}}.button-wrap[_ngcontent-%COMP%]{margin-top:1.5vh}.button-disactived[_ngcontent-%COMP%]{background:#e0e0e0;font-size:1.1em;border-radius:20px;color:#000;margin-top:1.5vh;width:300px;height:40px;font-weight:700;border:2px solid #8260A5;font-family:MUSEO500-REGULAR;box-sizing:border-box}button[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:all .4s ease-in-out}.button-message[_ngcontent-%COMP%]{color:#fff;font-weight:900;font-size:small;font-family:MUSEO500-REGULAR;margin-bottom:4px}.button-active[_ngcontent-%COMP%]:hover{transform:scale(1.04,1.0000000099);-ms-transform:scale(1.04,1.0000000099);-webkit-transform:scale(1.04,1.0000000099)}button[_ngcontent-%COMP%]:focus{border-color:#0000;box-shadow:0 1px 1px #d0d0d0 inset,0 0 8px #dcdcdc;outline:0 none}"]}),p})()},7705:(Z,E,o)=>{o.d(E,{O_:()=>S,Y4:()=>oe,b6:()=>_});var t=o(4650),I=o(6895),g=o(1135),w=o(9751),O=(o(7579),o(9841),o(3900));o(5698),o(4004),o(2722);const C=["*"];class m{constructor(a){this._ngZone=a,this._pending=[],this._listeners=[],this._targetStream=new g.X(void 0)}_clearListeners(){for(const a of this._listeners)a.remove();this._listeners=[]}getLazyEmitter(a){return this._targetStream.pipe((0,O.w)(e=>{const i=new w.y(r=>{if(!e)return void this._pending.push({observable:i,observer:r});const f=e.addListener(a,D=>{this._ngZone.run(()=>r.next(D))});return this._listeners.push(f),()=>f.remove()});return i}))}setTarget(a){const e=this._targetStream.value;a!==e&&(e&&(this._clearListeners(),this._pending=[]),this._targetStream.next(a),this._pending.forEach(i=>i.observable.subscribe(i.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}}const L={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"},P="500px",M="500px";let _=(()=>{class n{constructor(e,i,r){if(this._elementRef=e,this._ngZone=i,this._eventManager=new m(this._ngZone),this.height=P,this.width=M,this._options=L,this.mapInitialized=new t.vpe,this.authFailure=new t.vpe,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=(0,I.NF)(r),this._isBrowser){const f=window;this._existingAuthFailureCallback=f.gm_authFailure,f.gm_authFailure=()=>{this._existingAuthFailureCallback&&this._existingAuthFailureCallback(),this.authFailure.emit()}}}set center(e){this._center=e}set zoom(e){this._zoom=e}set options(e){this._options=e||L}ngOnChanges(e){(e.height||e.width)&&this._setSize();const i=this.googleMap;i&&(e.options&&i.setOptions(this._combineOptions()),e.center&&this._center&&i.setCenter(this._center),e.zoom&&null!=this._zoom&&i.setZoom(this._zoom),e.mapTypeId&&this.mapTypeId&&i.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._ngZone.runOutsideAngular(()=>{this.googleMap=new google.maps.Map(this._mapEl,this._combineOptions())}),this._eventManager.setTarget(this.googleMap),this.mapInitialized.emit(this.googleMap))}ngOnDestroy(){this._eventManager.destroy(),this._isBrowser&&(window.gm_authFailure=this._existingAuthFailureCallback)}fitBounds(e,i){this._assertInitialized(),this.googleMap.fitBounds(e,i)}panBy(e,i){this._assertInitialized(),this.googleMap.panBy(e,i)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,i){this._assertInitialized(),this.googleMap.panToBounds(e,i)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()||null}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){const e=this._mapEl.style;e.height=null===this.height?"":F(this.height)||P,e.width=null===this.width?"":F(this.width)||M}}_combineOptions(){const e=this._options||{};return{...e,center:this._center||e.center||L.center,zoom:this._zoom??e.zoom??L.zoom,mapTypeId:this.mapTypeId||e.mapTypeId||L.mapTypeId}}_assertInitialized(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(t.Lbi))},n.\u0275cmp=t.Xpm({type:n,selectors:[["google-map"]],inputs:{height:"height",width:"width",mapTypeId:"mapTypeId",center:"center",zoom:"zoom",options:"options"},outputs:{mapInitialized:"mapInitialized",authFailure:"authFailure",boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[t.TTD],ngContentSelectors:C,decls:2,vars:0,consts:[[1,"map-container"]],template:function(e,i){1&e&&(t.F$t(),t._UZ(0,"div",0),t.Hsn(1))},encapsulation:2,changeDetection:0}),n})();const x=/([A-Za-z%]+)$/;function F(n){return null==n?"":x.test(n)?n:`${n}px`}const k={position:{lat:37.421995,lng:-122.084092}};let S=(()=>{class n{constructor(e,i){this._googleMap=e,this._ngZone=i,this._eventManager=new m(this._ngZone),this.animationChanged=this._eventManager.getLazyEmitter("animation_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.clickableChanged=this._eventManager.getLazyEmitter("clickable_changed"),this.cursorChanged=this._eventManager.getLazyEmitter("cursor_changed"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.draggableChanged=this._eventManager.getLazyEmitter("draggable_changed"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.flatChanged=this._eventManager.getLazyEmitter("flat_changed"),this.iconChanged=this._eventManager.getLazyEmitter("icon_changed"),this.mapMousedown=this._eventManager.getLazyEmitter("mousedown"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.mapMouseup=this._eventManager.getLazyEmitter("mouseup"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.shapeChanged=this._eventManager.getLazyEmitter("shape_changed"),this.titleChanged=this._eventManager.getLazyEmitter("title_changed"),this.visibleChanged=this._eventManager.getLazyEmitter("visible_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}set title(e){this._title=e}set position(e){this._position=e}set label(e){this._label=e}set clickable(e){this._clickable=e}set options(e){this._options=e}set icon(e){this._icon=e}set visible(e){this._visible=e}ngOnInit(){this._googleMap._isBrowser&&(this._ngZone.runOutsideAngular(()=>{this.marker=new google.maps.Marker(this._combineOptions())}),this._assertInitialized(),this.marker.setMap(this._googleMap.googleMap),this._eventManager.setTarget(this.marker))}ngOnChanges(e){const{marker:i,_title:r,_position:f,_label:D,_clickable:z,_icon:T,_visible:R}=this;i&&(e.options&&i.setOptions(this._combineOptions()),e.title&&void 0!==r&&i.setTitle(r),e.position&&f&&i.setPosition(f),e.label&&void 0!==D&&i.setLabel(D),e.clickable&&void 0!==z&&i.setClickable(z),e.icon&&T&&i.setIcon(T),e.visible&&void 0!==R&&i.setVisible(R))}ngOnDestroy(){this._eventManager.destroy(),this.marker&&this.marker.setMap(null)}getAnimation(){return this._assertInitialized(),this.marker.getAnimation()||null}getClickable(){return this._assertInitialized(),this.marker.getClickable()}getCursor(){return this._assertInitialized(),this.marker.getCursor()||null}getDraggable(){return this._assertInitialized(),!!this.marker.getDraggable()}getIcon(){return this._assertInitialized(),this.marker.getIcon()||null}getLabel(){return this._assertInitialized(),this.marker.getLabel()||null}getOpacity(){return this._assertInitialized(),this.marker.getOpacity()||null}getPosition(){return this._assertInitialized(),this.marker.getPosition()||null}getShape(){return this._assertInitialized(),this.marker.getShape()||null}getTitle(){return this._assertInitialized(),this.marker.getTitle()||null}getVisible(){return this._assertInitialized(),this.marker.getVisible()}getZIndex(){return this._assertInitialized(),this.marker.getZIndex()||null}getAnchor(){return this._assertInitialized(),this.marker}_combineOptions(){const e=this._options||k;return{...e,title:this._title||e.title,position:this._position||e.position,label:this._label||e.label,clickable:this._clickable??e.clickable,map:this._googleMap.googleMap,icon:this._icon||e.icon,visible:this._visible??e.visible}}_assertInitialized(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_),t.Y36(t.R0b))},n.\u0275dir=t.lG2({type:n,selectors:[["map-marker"]],inputs:{title:"title",position:"position",label:"label",clickable:"clickable",options:"options",icon:"icon",visible:"visible"},outputs:{animationChanged:"animationChanged",mapClick:"mapClick",clickableChanged:"clickableChanged",cursorChanged:"cursorChanged",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",draggableChanged:"draggableChanged",mapDragstart:"mapDragstart",flatChanged:"flatChanged",iconChanged:"iconChanged",mapMousedown:"mapMousedown",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",mapMouseup:"mapMouseup",positionChanged:"positionChanged",mapRightclick:"mapRightclick",shapeChanged:"shapeChanged",titleChanged:"titleChanged",visibleChanged:"visibleChanged",zindexChanged:"zindexChanged"},exportAs:["mapMarker"],features:[t.TTD]}),n})(),oe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})()}}]);