"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[931],{7393:(x,w,l)=>{l.d(w,{T:()=>p});var t=l(4650),I=l(1002),h=l(3063),z=l(6895),u=l(7705),y=l(3546),D=l(42),f=l(9336);function v(c,M){if(1&c&&(t.TgZ(0,"option",19),t._uU(1),t.qZA()),2&c){const a=M.$implicit;t.Q6J("value",a.valueField),t.xp6(1),t.Oqu(a.displayValue)}}function g(c,M){if(1&c&&t._UZ(0,"map-marker",20),2&c){const a=M.$implicit,o=t.oxw();t.Q6J("position",a)("options",o.markerOptions)}}function k(c,M){if(1&c&&t._UZ(0,"ax-lazy-element",21),2&c){const a=t.oxw();t.Q6J("microfrontParamIn",a.microfrontParamIn)("paramClass",a.addressParamClass)}}let p=(()=>{class c{constructor(a){this.webstoreService=a,this.zoom=118,this.center={lat:-17.393847,lng:-66.157328},this.options={zoomControl:!0,scrollwheel:!0,disableDoubleClickZoom:!0,maxZoom:18,minZoom:8},this.markerOptions={draggable:!1},this.markerPositions=[],this.cities=I.cA,this.addressParamClass={contentExistAddress:" spacer-form",contentAddress:" full-width bg-section padding-section",contentGroupBtn:{contentGroup:" content-group-btn",buttons:" section-group-buttons mr-5 ml-5 color-primary ",textButton:" icon-text-button mr-10",btnColor:" color-primary",finalBtnSave:" dialog-button color-accent",finalBtnCancel:" dialog-button",btnAction:" dialog-button"},section:{contentSubtitle:" dialog-subtitle ",inputSingleWidth:" input-single-width ",sectionFormInput:" section-form-input width-form-input  ",sectionFormCombo:" section-form-combobox width-form-input  ",sectionFormInput2:" section-form-input width-form-input  ",sectionFormCombo2:" section-form-combobox width-form-input  ",sectionFormGeneral:" section-form-general ",sectionFormPart2:" section-form-flex-90 ",closeFormButton:" close-form-button color-primary ",btnColor:" color-primary ",title:" dialog-title full-width ",subtitle:" dialog-subtitle ",divider:" divider-line ",content:" pending-section-content bg-section size-section space-element-right ",color:" blue-theme "},space:{spaceSmall:"spacer-form-small",spaceNormal:"spacer-form"},modal:{iconArrow:"arrow-circle-back",map:"full-width"},formGroup:{formContent:"space-element",formElement:"space-element-right"},contentHeader:"space-element"},this.microfrontParamIn={orderId:0,sequence:0,userId:21,microfrontId:"address-microfront-app"},this.microfrontUrl="https://view360.devnt.ssidevops.com/person-info-microfront-app/main.js",this.nextCoverageStep=new t.vpe}ngOnInit(){this.webstoreService.saveToken();const m=(window||{}).__env||{};console.log("browserWindowEnv: ",m),navigator.geolocation.getCurrentPosition(C=>{console.log(typeof C.coords.latitude),this.center={lat:C.coords.latitude,lng:C.coords.longitude}})}verificarCobertura(){}addMarker(a){console.log("click en el mapa",a.latLng?.toJSON()),null!=a.latLng&&(this.markerPositions=[],this.markerPositions.push(a.latLng.toJSON()))}onSubmit(){}changeCity(a){console.log(a.target.value);let o=this.cities.find(m=>m.valueField==a.target.value);o?.longitude&&o?.latitude&&(this.markerPositions=[],this.center={lat:o?.latitude,lng:o?.longitude})}locateCurrentLocation(){navigator.geolocation.getCurrentPosition(a=>{console.log(a),this.markerPositions=[],this.center={lat:a.coords.latitude,lng:a.coords.longitude}})}next(){this.nextCoverageStep.emit(!0)}}return c.\u0275fac=function(a){return new(a||c)(t.Y36(h.f))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-check-coverage"]],outputs:{nextCoverageStep:"nextCoverageStep"},decls:28,vars:10,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],["novalidate","",1,""],[1,"input-group","mb-3"],["id","inputSelectCity",1,"form-select",3,"change"],["disabled","","selected","",2,"font-family","Trebuchet MS",3,"value"],["style","font-family: 'Trebuchet MS';",3,"value",4,"ngFor","ngForOf"],[3,"content","click"],[1,"my-3"],["height","400px","width","100%",3,"zoom","center","options","mapClick"],[3,"position","options",4,"ngFor","ngForOf"],[1,"coverage-status","p-2"],[1,"m-1","fw-bold"],[1,"m-0"],[1,"address","py-3"],[1,"py-2","text-center","p-2"],[3,"microfrontParamIn","paramClass",4,"axLazyElementDynamic","axLazyElementDynamicUrl"],[2,"font-family","Trebuchet MS",3,"value"],[3,"position","options"],[3,"microfrontParamIn","paramClass"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"form",4)(5,"h3"),t._uU(6,"Cobertura"),t.qZA(),t.TgZ(7,"p"),t._uU(8,"Verificaremos si tienes cobertura en la zona de instalaci\xf3n del servicio."),t.qZA(),t.TgZ(9,"div",5)(10,"select",6),t.NdJ("change",function(C){return o.changeCity(C)}),t.TgZ(11,"option",7),t._uU(12,"Selecciona tu ciudad."),t.qZA(),t.YNc(13,v,2,2,"option",8),t.qZA()()(),t.TgZ(14,"app-button",9),t.NdJ("click",function(){return o.locateCurrentLocation()}),t.qZA(),t.TgZ(15,"mat-card",10)(16,"mat-card-content")(17,"google-map",11),t.NdJ("mapClick",function(C){return o.addMarker(C)}),t.YNc(18,g,1,2,"map-marker",12),t.qZA(),t.TgZ(19,"div",13)(20,"span",14),t._uU(21,"Cobertura Media"),t.qZA(),t.TgZ(22,"p",15),t._uU(23,"El servicio puede tener dificultades de conexi\xf3n."),t.qZA()()()(),t.TgZ(24,"mat-card",16)(25,"mat-card-content",17),t.YNc(26,k,1,2,"ax-lazy-element",18),t.qZA()(),t.TgZ(27,"app-button",9),t.NdJ("click",function(){return o.next()}),t.qZA()()()()()),2&a&&(t.xp6(11),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",o.cities),t.xp6(1),t.Q6J("content","Detectar ubicacion"),t.xp6(3),t.Q6J("zoom",o.zoom)("center",o.center)("options",o.options),t.xp6(1),t.Q6J("ngForOf",o.markerPositions),t.xp6(8),t.Q6J("axLazyElementDynamic","address-microfront-app")("axLazyElementDynamicUrl","https://view360.devnt.ssidevops.com/person-info-microfront-app/main.js"),t.xp6(1),t.Q6J("content","Siguiente"))},dependencies:[z.sg,u.b6,u.O_,y.a8,y.dn,D.r,f.gG],styles:[".mat-toolbar[_ngcontent-%COMP%]{background-color:#5c349e;color:#fff}.mat-toolbar[_ngcontent-%COMP%]   .toolbar-logo[_ngcontent-%COMP%]{max-width:100px}map-container[_ngcontent-%COMP%]{border-radius:20px!important;border:1px solid #5c349e!important}.mat-card[_ngcontent-%COMP%]{padding:1px!important;width:100%;color:#7b7b7b}.address[_ngcontent-%COMP%]{background:#F5F5F5;border:1px solid #AC99CE;border-radius:10px}.detail[_ngcontent-%COMP%]{background:rgba(132,102,182,.1)}.section-body[_ngcontent-%COMP%]{background:white}.coverage-status[_ngcontent-%COMP%]{background:#D6F084;color:#5c349e;height:55px;border-radius:0 0 10px 10px}"]}),c})()},931:(x,w,l)=>{l.r(w),l.d(w,{CheckCoverageModule:()=>M});var t=l(6895),I=l(3060),h=l(7393),z=l(4650);const u=[{path:"",component:h.T}];let y=(()=>{class a{}return a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=z.oAB({type:a}),a.\u0275inj=z.cJS({imports:[I.Bz.forChild(u),I.Bz]}),a})();var D=l(7705),f=l(7392),v=l(3546),g=l(4859),k=l(9499),p=l(4466),c=l(9336);let M=(()=>{class a{}return a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=z.oAB({type:a}),a.\u0275inj=z.cJS({imports:[t.ez,y,D.Y4,f.Ps,v.QW,g.ot,k.O,p.m,c.zB]}),a})()},7705:(x,w,l)=>{l.d(w,{O_:()=>P,Y4:()=>re,b6:()=>o});var t=l(4650),I=l(6895),h=l(1135),z=l(9751),D=(l(7579),l(9841),l(3900));l(5698),l(4004),l(2722);const k=["*"];class p{constructor(s){this._ngZone=s,this._pending=[],this._listeners=[],this._targetStream=new h.X(void 0)}_clearListeners(){for(const s of this._listeners)s.remove();this._listeners=[]}getLazyEmitter(s){return this._targetStream.pipe((0,D.w)(e=>{const i=new z.y(r=>{if(!e)return void this._pending.push({observable:i,observer:r});const d=e.addListener(s,b=>{this._ngZone.run(()=>r.next(b))});return this._listeners.push(d),()=>d.remove()});return i}))}setTarget(s){const e=this._targetStream.value;s!==e&&(e&&(this._clearListeners(),this._pending=[]),this._targetStream.next(s),this._pending.forEach(i=>i.observable.subscribe(i.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}}const c={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"},M="500px",a="500px";let o=(()=>{class n{constructor(e,i,r){if(this._elementRef=e,this._ngZone=i,this._eventManager=new p(this._ngZone),this.height=M,this.width=a,this._options=c,this.mapInitialized=new t.vpe,this.authFailure=new t.vpe,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=(0,I.NF)(r),this._isBrowser){const d=window;this._existingAuthFailureCallback=d.gm_authFailure,d.gm_authFailure=()=>{this._existingAuthFailureCallback&&this._existingAuthFailureCallback(),this.authFailure.emit()}}}set center(e){this._center=e}set zoom(e){this._zoom=e}set options(e){this._options=e||c}ngOnChanges(e){(e.height||e.width)&&this._setSize();const i=this.googleMap;i&&(e.options&&i.setOptions(this._combineOptions()),e.center&&this._center&&i.setCenter(this._center),e.zoom&&null!=this._zoom&&i.setZoom(this._zoom),e.mapTypeId&&this.mapTypeId&&i.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._ngZone.runOutsideAngular(()=>{this.googleMap=new google.maps.Map(this._mapEl,this._combineOptions())}),this._eventManager.setTarget(this.googleMap),this.mapInitialized.emit(this.googleMap))}ngOnDestroy(){this._eventManager.destroy(),this._isBrowser&&(window.gm_authFailure=this._existingAuthFailureCallback)}fitBounds(e,i){this._assertInitialized(),this.googleMap.fitBounds(e,i)}panBy(e,i){this._assertInitialized(),this.googleMap.panBy(e,i)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,i){this._assertInitialized(),this.googleMap.panToBounds(e,i)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()||null}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){const e=this._mapEl.style;e.height=null===this.height?"":C(this.height)||M,e.width=null===this.width?"":C(this.width)||a}}_combineOptions(){const e=this._options||{};return{...e,center:this._center||e.center||c.center,zoom:this._zoom??e.zoom??c.zoom,mapTypeId:this.mapTypeId||e.mapTypeId||c.mapTypeId}}_assertInitialized(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(t.Lbi))},n.\u0275cmp=t.Xpm({type:n,selectors:[["google-map"]],inputs:{height:"height",width:"width",mapTypeId:"mapTypeId",center:"center",zoom:"zoom",options:"options"},outputs:{mapInitialized:"mapInitialized",authFailure:"authFailure",boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[t.TTD],ngContentSelectors:k,decls:2,vars:0,consts:[[1,"map-container"]],template:function(e,i){1&e&&(t.F$t(),t._UZ(0,"div",0),t.Hsn(1))},encapsulation:2,changeDetection:0}),n})();const m=/([A-Za-z%]+)$/;function C(n){return null==n?"":m.test(n)?n:`${n}px`}const V={position:{lat:37.421995,lng:-122.084092}};let P=(()=>{class n{constructor(e,i){this._googleMap=e,this._ngZone=i,this._eventManager=new p(this._ngZone),this.animationChanged=this._eventManager.getLazyEmitter("animation_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.clickableChanged=this._eventManager.getLazyEmitter("clickable_changed"),this.cursorChanged=this._eventManager.getLazyEmitter("cursor_changed"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.draggableChanged=this._eventManager.getLazyEmitter("draggable_changed"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.flatChanged=this._eventManager.getLazyEmitter("flat_changed"),this.iconChanged=this._eventManager.getLazyEmitter("icon_changed"),this.mapMousedown=this._eventManager.getLazyEmitter("mousedown"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.mapMouseup=this._eventManager.getLazyEmitter("mouseup"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.shapeChanged=this._eventManager.getLazyEmitter("shape_changed"),this.titleChanged=this._eventManager.getLazyEmitter("title_changed"),this.visibleChanged=this._eventManager.getLazyEmitter("visible_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}set title(e){this._title=e}set position(e){this._position=e}set label(e){this._label=e}set clickable(e){this._clickable=e}set options(e){this._options=e}set icon(e){this._icon=e}set visible(e){this._visible=e}ngOnInit(){this._googleMap._isBrowser&&(this._ngZone.runOutsideAngular(()=>{this.marker=new google.maps.Marker(this._combineOptions())}),this._assertInitialized(),this.marker.setMap(this._googleMap.googleMap),this._eventManager.setTarget(this.marker))}ngOnChanges(e){const{marker:i,_title:r,_position:d,_label:b,_clickable:_,_icon:E,_visible:L}=this;i&&(e.options&&i.setOptions(this._combineOptions()),e.title&&void 0!==r&&i.setTitle(r),e.position&&d&&i.setPosition(d),e.label&&void 0!==b&&i.setLabel(b),e.clickable&&void 0!==_&&i.setClickable(_),e.icon&&E&&i.setIcon(E),e.visible&&void 0!==L&&i.setVisible(L))}ngOnDestroy(){this._eventManager.destroy(),this.marker&&this.marker.setMap(null)}getAnimation(){return this._assertInitialized(),this.marker.getAnimation()||null}getClickable(){return this._assertInitialized(),this.marker.getClickable()}getCursor(){return this._assertInitialized(),this.marker.getCursor()||null}getDraggable(){return this._assertInitialized(),!!this.marker.getDraggable()}getIcon(){return this._assertInitialized(),this.marker.getIcon()||null}getLabel(){return this._assertInitialized(),this.marker.getLabel()||null}getOpacity(){return this._assertInitialized(),this.marker.getOpacity()||null}getPosition(){return this._assertInitialized(),this.marker.getPosition()||null}getShape(){return this._assertInitialized(),this.marker.getShape()||null}getTitle(){return this._assertInitialized(),this.marker.getTitle()||null}getVisible(){return this._assertInitialized(),this.marker.getVisible()}getZIndex(){return this._assertInitialized(),this.marker.getZIndex()||null}getAnchor(){return this._assertInitialized(),this.marker}_combineOptions(){const e=this._options||V;return{...e,title:this._title||e.title,position:this._position||e.position,label:this._label||e.label,clickable:this._clickable??e.clickable,map:this._googleMap.googleMap,icon:this._icon||e.icon,visible:this._visible??e.visible}}_assertInitialized(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o),t.Y36(t.R0b))},n.\u0275dir=t.lG2({type:n,selectors:[["map-marker"]],inputs:{title:"title",position:"position",label:"label",clickable:"clickable",options:"options",icon:"icon",visible:"visible"},outputs:{animationChanged:"animationChanged",mapClick:"mapClick",clickableChanged:"clickableChanged",cursorChanged:"cursorChanged",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",draggableChanged:"draggableChanged",mapDragstart:"mapDragstart",flatChanged:"flatChanged",iconChanged:"iconChanged",mapMousedown:"mapMousedown",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",mapMouseup:"mapMouseup",positionChanged:"positionChanged",mapRightclick:"mapRightclick",shapeChanged:"shapeChanged",titleChanged:"titleChanged",visibleChanged:"visibleChanged",zindexChanged:"zindexChanged"},exportAs:["mapMarker"],features:[t.TTD]}),n})(),re=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})()}}]);