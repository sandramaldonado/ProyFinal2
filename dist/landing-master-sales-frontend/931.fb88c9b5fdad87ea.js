"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[931,387],{3063:(S,w,a)=>{a.d(w,{f:()=>p});var t=a(7065),I=a(1002),g=a(4650),M=a(5219),y=a(529);let p=(()=>{class v{constructor(r,c,L){this.sessionStorageService=r,this.localStorageService=c,this.httpClient=L,this.httpPostOptions=I.z8,this.httpGetOptions=I.bN,this.apiUrl=`${t.N.SSIAuthApiUrl}`}saveToken(){this.httpClient.post(`${t.N.SSIAuthApiUrl}`,JSON.stringify({username:t.N.SSITokenUsername,password:t.N.SSITokenPassword}),this.httpPostOptions).subscribe(c=>{c.data?.token&&localStorage.setItem("TOKEN",c.data.token),this.localStorageService.store("TOKEN",c.data?.token)})}saveAuthenticateInformation(r){this.sessionStorageService.store("authenticateInformation",r)}getAuthenticateInformation(){return this.sessionStorageService.retrieve("authenticateInformation")}saveClientInformation(r){this.sessionStorageService.store("clientInformation",r)}getClientInformation(){return this.sessionStorageService.retrieve("clientInformation")}saveSelfie(r){this.sessionStorageService.store("photoFace",r)}getSelfie(){return console.log(this.sessionStorageService.retrieve("photoFace")),this.sessionStorageService.retrieve("photoFace")}saveDocument(r,c){this.sessionStorageService.store(r,c)}getDocument(r){return this.sessionStorageService.retrieve(r)}savePlanCompositionCode(r){this.sessionStorageService.store("planCompositionCode",r)}getPlanCompositionCode(){return this.sessionStorageService.retrieve("planCompositionCode")}savePlanComposition(r){this.sessionStorageService.store("planComposition",r)}getPlanComposition(){return this.sessionStorageService.retrieve("planComposition")}clearWebStorePlanComposition(){this.sessionStorageService.clear(),this.sessionStorageService.clear("planCompositionCode"),this.sessionStorageService.clear("planComposition")}saveStatusScoring(r){this.sessionStorageService.store("statusScoring",r)}getStatusScoring(){return this.sessionStorageService.retrieve("statusScoring")}saveDataInSession(r,c){this.sessionStorageService.store(r,c)}getDataInSession(r){return this.sessionStorageService.retrieve(r)}}return v.\u0275fac=function(r){return new(r||v)(g.LFG(M.uR),g.LFG(M.n2),g.LFG(y.eN))},v.\u0275prov=g.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},7141:(S,w,a)=>{a.d(w,{T:()=>A});var t=a(4650),I=a(1002),g=a(3063),M=a(7065),y=a(529);let p=(()=>{class h{constructor(o,d){this.httpClient=o,this.webstoreservice=d}checkGISCovarge(o){const Z={headers:{"Content-Type":"application/json","x-access-token":M.N.AVLTokenValue}};return this.httpClient.post(`${M.N.AVLApiUrl}`,JSON.stringify(o),Z)}saveCoverageData(o){this.webstoreservice.saveDataInSession("coverage",o)}}return h.\u0275fac=function(o){return new(o||h)(t.LFG(y.eN),t.LFG(g.f))},h.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})();var v=a(6895),u=a(7705),r=a(3546),c=a(42),L=a(9336);function b(h,C){if(1&h&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&h){const o=C.$implicit;t.Q6J("value",o.valueField),t.xp6(1),t.Oqu(o.displayValue)}}function D(h,C){if(1&h&&t._UZ(0,"map-marker",19),2&h){const o=C.$implicit,d=t.oxw();t.Q6J("position",o)("options",d.markerOptions)}}function P(h,C){1&h&&(t.TgZ(0,"div",22)(1,"span",23),t._uU(2,"Con Cobertura"),t.qZA(),t.TgZ(3,"p",24),t._uU(4,"El servicio tiene cobertura en la zona."),t.qZA()())}function f(h,C){1&h&&(t.TgZ(0,"div",25)(1,"span",23),t._uU(2,"Sin Cobertura"),t.qZA(),t.TgZ(3,"p",24),t._uU(4,"El servicio no tiene cobertura en la zona."),t.qZA()())}function m(h,C){if(1&h&&(t.TgZ(0,"div"),t.YNc(1,P,5,0,"div",20),t.YNc(2,f,5,0,"div",21),t.qZA()),2&h){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.hasCoverage),t.xp6(1),t.Q6J("ngIf",!o.hasCoverage)}}function x(h,C){if(1&h&&t._UZ(0,"ax-lazy-element",26),2&h){const o=t.oxw();t.Q6J("microfrontParamIn",o.microfrontParamIn)("paramClass",o.addressParamClass)}}function F(h,C){if(1&h){const o=t.EpF();t.TgZ(0,"app-button",27),t.NdJ("click",function(){t.CHM(o);const k=t.oxw();return t.KtG(k.next())}),t.qZA()}if(2&h){const o=t.oxw();t.Q6J("disabled",!o.hasCoverage)("content","Siguiente")}}let A=(()=>{class h{constructor(o,d){this.webstoreService=o,this.coverageService=d,this.zoom=118,this.center={lat:-17.393847,lng:-66.157328},this.options={zoomControl:!0,scrollwheel:!0,disableDoubleClickZoom:!0,maxZoom:18,minZoom:8},this.markerOptions={draggable:!1},this.markerPositions=[],this.cities=I.cA,this.addressParamClass={contentExistAddress:" spacer-form",contentAddress:" full-width bg-section padding-section",contentGroupBtn:{contentGroup:" content-group-btn",buttons:" section-group-buttons mr-5 ml-5 color-primary ",textButton:" icon-text-button mr-10",btnColor:" color-primary",finalBtnSave:" dialog-button color-accent",finalBtnCancel:" dialog-button",btnAction:" dialog-button"},section:{contentSubtitle:" dialog-subtitle ",inputSingleWidth:" input-single-width ",sectionFormInput:" section-form-input width-form-input  ",sectionFormCombo:" section-form-combobox width-form-input  ",sectionFormInput2:" section-form-input width-form-input  ",sectionFormCombo2:" section-form-combobox width-form-input  ",sectionFormGeneral:" section-form-general ",sectionFormPart2:" section-form-flex-90 ",closeFormButton:" close-form-button color-primary ",btnColor:" color-primary ",title:" dialog-title full-width ",subtitle:" dialog-subtitle ",divider:" divider-line ",content:" pending-section-content bg-section size-section space-element-right ",color:" blue-theme "},space:{spaceSmall:"spacer-form-small",spaceNormal:"spacer-form"},modal:{iconArrow:"arrow-circle-back",map:"full-width"},formGroup:{formContent:"space-element",formElement:"space-element-right"},contentHeader:"space-element"},this.microfrontParamIn={orderId:0,sequence:0,userId:21,microfrontId:"address-microfront-app"},this.microfrontUrl="https://view360.devnt.ssidevops.com/person-info-microfront-app/main.js",this.hasCoverage=!1,this.visited=!1,this.selfLoaded=!0,this.nextCoverageStep=new t.vpe}ngOnInit(){this.selfLoaded&&this.load()}load(){this.webstoreService.saveToken();const k=(window||{}).__env||{};console.log("browserWindowEnv: ",k),navigator.geolocation.getCurrentPosition(O=>{console.log(typeof O.coords.latitude),this.center={lat:O.coords.latitude,lng:O.coords.longitude}})}verificarCobertura(){var o={lng:this.markerPositions[0].lng,lat:this.markerPositions[0].lat,verificationTAC:"47626",maxVel:null,formId:534077243,processId:46537322758};console.log(o),this.coverageService.checkGISCovarge(o).subscribe(d=>{console.log(d),"OK"==d.errorCode&&"OK"==d.hasCoverage?(this.hasCoverage=!0,this.validDataCoverage=o):this.hasCoverage=!1})}addMarker(o){console.log("click en el mapa",o.latLng?.toJSON()),null!=o.latLng&&(this.markerPositions=[],this.markerPositions.push(o.latLng.toJSON())),this.verificarCobertura()}onSubmit(){}changeCity(o){console.log(o.target.value);let d=this.cities.find(k=>k.valueField==o.target.value);d?.longitude&&d?.latitude&&(this.markerPositions=[],this.center={lat:d?.latitude,lng:d?.longitude})}locateCurrentLocation(){navigator.geolocation.getCurrentPosition(o=>{console.log(o),this.markerPositions=[],this.center={lat:o.coords.latitude,lng:o.coords.longitude}})}next(){this.coverageService.saveCoverageData(this.validDataCoverage),this.visited=!0,this.nextCoverageStep.emit(!0)}}return h.\u0275fac=function(o){return new(o||h)(t.Y36(g.f),t.Y36(p))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-check-coverage"]],inputs:{selfLoaded:"selfLoaded"},outputs:{nextCoverageStep:"nextCoverageStep"},decls:24,vars:11,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],["novalidate","",1,""],[1,"input-group","mb-3"],["id","inputSelectCity",1,"form-select",3,"change"],["disabled","","selected","",2,"font-family","Trebuchet MS",3,"value"],["style","font-family: 'Trebuchet MS';",3,"value",4,"ngFor","ngForOf"],[3,"content","click"],[1,"my-3"],["height","400px","width","100%",3,"zoom","center","options","mapClick"],[3,"position","options",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"address","py-3"],[1,"py-2","text-center","p-2"],[3,"microfrontParamIn","paramClass",4,"axLazyElementDynamic","axLazyElementDynamicUrl"],[3,"disabled","content","click",4,"ngIf"],[2,"font-family","Trebuchet MS",3,"value"],[3,"position","options"],["class","coverage-status-ok p-2",4,"ngIf"],["class","coverage-status-nok p-2",4,"ngIf"],[1,"coverage-status-ok","p-2"],[1,"m-1","fw-bold"],[1,"m-0"],[1,"coverage-status-nok","p-2"],[3,"microfrontParamIn","paramClass"],[3,"disabled","content","click"]],template:function(o,d){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"form",4)(5,"h3"),t._uU(6,"Cobertura"),t.qZA(),t.TgZ(7,"p"),t._uU(8,"Verificaremos si tienes cobertura en la zona de instalaci\xf3n del servicio."),t.qZA(),t.TgZ(9,"div",5)(10,"select",6),t.NdJ("change",function(O){return d.changeCity(O)}),t.TgZ(11,"option",7),t._uU(12,"Selecciona tu ciudad."),t.qZA(),t.YNc(13,b,2,2,"option",8),t.qZA()()(),t.TgZ(14,"app-button",9),t.NdJ("click",function(){return d.locateCurrentLocation()}),t.qZA(),t.TgZ(15,"mat-card",10)(16,"mat-card-content")(17,"google-map",11),t.NdJ("mapClick",function(O){return d.addMarker(O)}),t.YNc(18,D,1,2,"map-marker",12),t.qZA(),t.YNc(19,m,3,2,"div",13),t.qZA()(),t.TgZ(20,"mat-card",14)(21,"mat-card-content",15),t.YNc(22,x,1,2,"ax-lazy-element",16),t.qZA()(),t.YNc(23,F,1,2,"app-button",17),t.qZA()()()()),2&o&&(t.xp6(11),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",d.cities),t.xp6(1),t.Q6J("content","Detectar ubicacion"),t.xp6(3),t.Q6J("zoom",d.zoom)("center",d.center)("options",d.options),t.xp6(1),t.Q6J("ngForOf",d.markerPositions),t.xp6(1),t.Q6J("ngIf",d.markerPositions.length>0),t.xp6(3),t.Q6J("axLazyElementDynamic","address-microfront-app")("axLazyElementDynamicUrl","https://view360.devnt.ssidevops.com/person-info-microfront-app/main.js"),t.xp6(1),t.Q6J("ngIf",!d.visited))},dependencies:[v.sg,v.O5,u.b6,u.O_,r.a8,r.dn,c.r,L.gG],styles:[".mat-toolbar[_ngcontent-%COMP%]{background-color:#5c349e;color:#fff}.mat-toolbar[_ngcontent-%COMP%]   .toolbar-logo[_ngcontent-%COMP%]{max-width:100px}map-container[_ngcontent-%COMP%]{border-radius:20px!important;border:1px solid #5c349e!important}.mat-card[_ngcontent-%COMP%]{padding:1px!important;width:100%;color:#7b7b7b}.address[_ngcontent-%COMP%]{background:#F5F5F5;border:1px solid #AC99CE;border-radius:10px}.detail[_ngcontent-%COMP%]{background:rgba(132,102,182,.1)}.section-body[_ngcontent-%COMP%]{background:white}.coverage-status-ok[_ngcontent-%COMP%]{background:#D6F084;color:#5c349e;height:55px;border-radius:0 0 10px 10px}.coverage-status-nok[_ngcontent-%COMP%]{background:#f82020;color:#fff;height:55px;border-radius:0 0 10px 10px}"]}),h})()},931:(S,w,a)=>{a.r(w),a.d(w,{CheckCoverageModule:()=>P});var t=a(6895),I=a(3060),g=a(7141),M=a(4650);const y=[{path:"",component:g.T}];let p=(()=>{class f{}return f.\u0275fac=function(x){return new(x||f)},f.\u0275mod=M.oAB({type:f}),f.\u0275inj=M.cJS({imports:[I.Bz.forChild(y),I.Bz]}),f})();var v=a(7705),u=a(7392),r=a(3546),c=a(4859),L=a(9499),b=a(4466),D=a(9336);let P=(()=>{class f{}return f.\u0275fac=function(x){return new(x||f)},f.\u0275mod=M.oAB({type:f}),f.\u0275inj=M.cJS({imports:[t.ez,p,v.Y4,u.Ps,r.QW,c.ot,L.O,b.m,D.zB]}),f})()},42:(S,w,a)=>{a.d(w,{r:()=>y});var t=a(4650),I=a(4006),g=a(6895);function M(p,v){if(1&p&&(t.TgZ(0,"div",3),t._uU(1),t.qZA()),2&p){const u=t.oxw();t.xp6(1),t.Oqu(u.message)}}let y=(()=>{class p{constructor(){this.content="",this.styles="",this.disabled=!1,this.message=""}}return p.\u0275fac=function(u){return new(u||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-button"]],inputs:{content:"content",styles:"styles",disabled:"disabled",message:"message"},features:[t._Bn([{provide:I.JU,useExisting:(0,t.Gpc)(()=>p),multi:!0}])],decls:4,vars:4,consts:[[1,"button-wrap"],["class","button-message",4,"ngIf"],[1,"button-active",3,"ngClass","disabled"],[1,"button-message"]],template:function(u,r){1&u&&(t.TgZ(0,"div",0),t.YNc(1,M,2,1,"div",1),t.TgZ(2,"button",2),t._uU(3),t.qZA()()),2&u&&(t.xp6(1),t.Q6J("ngIf",r.message),t.xp6(1),t.Q6J("ngClass",r.disabled?"button-disactived":"button-active")("disabled",r.disabled),t.xp6(1),t.Oqu(r.content))},dependencies:[g.mk,g.O5],styles:[".button-active[_ngcontent-%COMP%]{background-color:#5c339d;font-size:1rem!important;padding:12px 10px;border-radius:20px;color:#fff;width:285px;height:44px!important;box-shadow:0 4px 15px #0000004d;font-family:MUSEO500-REGULAR}@media (max-width: 768px){.button-active[_ngcontent-%COMP%]{margin-right:0!important;font-size:.9em!important}}@media (max-width: 576px){.button-active[_ngcontent-%COMP%]{height:45px}}.button-wrap[_ngcontent-%COMP%]{margin-top:1.5vh}.button-disactived[_ngcontent-%COMP%]{background:#e0e0e0;font-size:1.1em;border-radius:20px;color:#000;margin-top:1.5vh;width:300px;height:40px;font-weight:700;border:2px solid #8260A5;font-family:MUSEO500-REGULAR;box-sizing:border-box}button[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;position:relative;transition:all .4s ease-in-out}.button-message[_ngcontent-%COMP%]{color:#fff;font-weight:900;font-size:small;font-family:MUSEO500-REGULAR;margin-bottom:4px}.button-active[_ngcontent-%COMP%]:hover{transform:scale(1.04,1.0000000099);-ms-transform:scale(1.04,1.0000000099);-webkit-transform:scale(1.04,1.0000000099)}button[_ngcontent-%COMP%]:focus{border-color:#0000;box-shadow:0 1px 1px #d0d0d0 inset,0 0 8px #dcdcdc;outline:0 none}"]}),p})()},1002:(S,w,a)=>{a.d(w,{bN:()=>g,cA:()=>M,z8:()=>I});var t=a(529);const I={headers:new t.WM({"Content-Type":"application/json",Accept:"application/json"})},g={headers:new t.WM({"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"})},M=[{valueField:"BEN",displayValue:"BENI",latitude:-14.831794,longitude:-64.901793},{valueField:"CBA",displayValue:"COCHABAMBA",latitude:-17.393688,longitude:-66.157119},{valueField:"LPZ",displayValue:"LA PAZ",latitude:-16.49564,longitude:-68.13368},{valueField:"ORU",displayValue:"ORURO",latitude:-17.96987,longitude:-67.114649},{valueField:"PAN",displayValue:"PANDO",latitude:-11.023511,longitude:-68.766225},{valueField:"POT",displayValue:"POTOSI",latitude:-19.57206,longitude:-65.755735},{valueField:"SCZ",displayValue:"SANTA CRUZ",latitude:-17.783558,longitude:-63.182115},{valueField:"SCR",displayValue:"SUCRE",latitude:-19.027878,longitude:-65.262753},{valueField:"TRJ",displayValue:"TARIJA",latitude:-21.538731,longitude:-64.722486}]},7705:(S,w,a)=>{a.d(w,{O_:()=>B,Y4:()=>oe,b6:()=>m});var t=a(4650),I=a(6895),g=a(1135),M=a(9751),v=(a(7579),a(9841),a(3900));a(5698),a(4004),a(2722);const L=["*"];class b{constructor(s){this._ngZone=s,this._pending=[],this._listeners=[],this._targetStream=new g.X(void 0)}_clearListeners(){for(const s of this._listeners)s.remove();this._listeners=[]}getLazyEmitter(s){return this._targetStream.pipe((0,v.w)(e=>{const i=new M.y(l=>{if(!e)return void this._pending.push({observable:i,observer:l});const _=e.addListener(s,E=>{this._ngZone.run(()=>l.next(E))});return this._listeners.push(_),()=>_.remove()});return i}))}setTarget(s){const e=this._targetStream.value;s!==e&&(e&&(this._clearListeners(),this._pending=[]),this._targetStream.next(s),this._pending.forEach(i=>i.observable.subscribe(i.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}}const D={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"},P="500px",f="500px";let m=(()=>{class n{constructor(e,i,l){if(this._elementRef=e,this._ngZone=i,this._eventManager=new b(this._ngZone),this.height=P,this.width=f,this._options=D,this.mapInitialized=new t.vpe,this.authFailure=new t.vpe,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=(0,I.NF)(l),this._isBrowser){const _=window;this._existingAuthFailureCallback=_.gm_authFailure,_.gm_authFailure=()=>{this._existingAuthFailureCallback&&this._existingAuthFailureCallback(),this.authFailure.emit()}}}set center(e){this._center=e}set zoom(e){this._zoom=e}set options(e){this._options=e||D}ngOnChanges(e){(e.height||e.width)&&this._setSize();const i=this.googleMap;i&&(e.options&&i.setOptions(this._combineOptions()),e.center&&this._center&&i.setCenter(this._center),e.zoom&&null!=this._zoom&&i.setZoom(this._zoom),e.mapTypeId&&this.mapTypeId&&i.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._ngZone.runOutsideAngular(()=>{this.googleMap=new google.maps.Map(this._mapEl,this._combineOptions())}),this._eventManager.setTarget(this.googleMap),this.mapInitialized.emit(this.googleMap))}ngOnDestroy(){this._eventManager.destroy(),this._isBrowser&&(window.gm_authFailure=this._existingAuthFailureCallback)}fitBounds(e,i){this._assertInitialized(),this.googleMap.fitBounds(e,i)}panBy(e,i){this._assertInitialized(),this.googleMap.panBy(e,i)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,i){this._assertInitialized(),this.googleMap.panToBounds(e,i)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()||null}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){const e=this._mapEl.style;e.height=null===this.height?"":F(this.height)||P,e.width=null===this.width?"":F(this.width)||f}}_combineOptions(){const e=this._options||{};return{...e,center:this._center||e.center||D.center,zoom:this._zoom??e.zoom??D.zoom,mapTypeId:this.mapTypeId||e.mapTypeId||D.mapTypeId}}_assertInitialized(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(t.Lbi))},n.\u0275cmp=t.Xpm({type:n,selectors:[["google-map"]],inputs:{height:"height",width:"width",mapTypeId:"mapTypeId",center:"center",zoom:"zoom",options:"options"},outputs:{mapInitialized:"mapInitialized",authFailure:"authFailure",boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[t.TTD],ngContentSelectors:L,decls:2,vars:0,consts:[[1,"map-container"]],template:function(e,i){1&e&&(t.F$t(),t._UZ(0,"div",0),t.Hsn(1))},encapsulation:2,changeDetection:0}),n})();const x=/([A-Za-z%]+)$/;function F(n){return null==n?"":x.test(n)?n:`${n}px`}const Z={position:{lat:37.421995,lng:-122.084092}};let B=(()=>{class n{constructor(e,i){this._googleMap=e,this._ngZone=i,this._eventManager=new b(this._ngZone),this.animationChanged=this._eventManager.getLazyEmitter("animation_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.clickableChanged=this._eventManager.getLazyEmitter("clickable_changed"),this.cursorChanged=this._eventManager.getLazyEmitter("cursor_changed"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.draggableChanged=this._eventManager.getLazyEmitter("draggable_changed"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.flatChanged=this._eventManager.getLazyEmitter("flat_changed"),this.iconChanged=this._eventManager.getLazyEmitter("icon_changed"),this.mapMousedown=this._eventManager.getLazyEmitter("mousedown"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.mapMouseup=this._eventManager.getLazyEmitter("mouseup"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.shapeChanged=this._eventManager.getLazyEmitter("shape_changed"),this.titleChanged=this._eventManager.getLazyEmitter("title_changed"),this.visibleChanged=this._eventManager.getLazyEmitter("visible_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}set title(e){this._title=e}set position(e){this._position=e}set label(e){this._label=e}set clickable(e){this._clickable=e}set options(e){this._options=e}set icon(e){this._icon=e}set visible(e){this._visible=e}ngOnInit(){this._googleMap._isBrowser&&(this._ngZone.runOutsideAngular(()=>{this.marker=new google.maps.Marker(this._combineOptions())}),this._assertInitialized(),this.marker.setMap(this._googleMap.googleMap),this._eventManager.setTarget(this.marker))}ngOnChanges(e){const{marker:i,_title:l,_position:_,_label:E,_clickable:z,_icon:T,_visible:R}=this;i&&(e.options&&i.setOptions(this._combineOptions()),e.title&&void 0!==l&&i.setTitle(l),e.position&&_&&i.setPosition(_),e.label&&void 0!==E&&i.setLabel(E),e.clickable&&void 0!==z&&i.setClickable(z),e.icon&&T&&i.setIcon(T),e.visible&&void 0!==R&&i.setVisible(R))}ngOnDestroy(){this._eventManager.destroy(),this.marker&&this.marker.setMap(null)}getAnimation(){return this._assertInitialized(),this.marker.getAnimation()||null}getClickable(){return this._assertInitialized(),this.marker.getClickable()}getCursor(){return this._assertInitialized(),this.marker.getCursor()||null}getDraggable(){return this._assertInitialized(),!!this.marker.getDraggable()}getIcon(){return this._assertInitialized(),this.marker.getIcon()||null}getLabel(){return this._assertInitialized(),this.marker.getLabel()||null}getOpacity(){return this._assertInitialized(),this.marker.getOpacity()||null}getPosition(){return this._assertInitialized(),this.marker.getPosition()||null}getShape(){return this._assertInitialized(),this.marker.getShape()||null}getTitle(){return this._assertInitialized(),this.marker.getTitle()||null}getVisible(){return this._assertInitialized(),this.marker.getVisible()}getZIndex(){return this._assertInitialized(),this.marker.getZIndex()||null}getAnchor(){return this._assertInitialized(),this.marker}_combineOptions(){const e=this._options||Z;return{...e,title:this._title||e.title,position:this._position||e.position,label:this._label||e.label,clickable:this._clickable??e.clickable,map:this._googleMap.googleMap,icon:this._icon||e.icon,visible:this._visible??e.visible}}_assertInitialized(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m),t.Y36(t.R0b))},n.\u0275dir=t.lG2({type:n,selectors:[["map-marker"]],inputs:{title:"title",position:"position",label:"label",clickable:"clickable",options:"options",icon:"icon",visible:"visible"},outputs:{animationChanged:"animationChanged",mapClick:"mapClick",clickableChanged:"clickableChanged",cursorChanged:"cursorChanged",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",draggableChanged:"draggableChanged",mapDragstart:"mapDragstart",flatChanged:"flatChanged",iconChanged:"iconChanged",mapMousedown:"mapMousedown",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",mapMouseup:"mapMouseup",positionChanged:"positionChanged",mapRightclick:"mapRightclick",shapeChanged:"shapeChanged",titleChanged:"titleChanged",visibleChanged:"visibleChanged",zindexChanged:"zindexChanged"},exportAs:["mapMarker"],features:[t.TTD]}),n})(),oe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})()}}]);