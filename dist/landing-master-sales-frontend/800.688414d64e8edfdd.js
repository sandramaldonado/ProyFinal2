"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[800],{3063:(O,M,s)=>{s.d(M,{f:()=>E});var p=s(7065),o=s(1002),h=s(4650),g=s(5219),S=s(529);let E=(()=>{class d{constructor(r,l,u){this.sessionStorageService=r,this.localStorageService=l,this.httpClient=u,this.httpPostOptions=o.z8,this.httpGetOptions=o.bN,this.apiUrl=`${p.N.SSIAuthApiUrl}`}saveToken(){this.httpClient.post(`${p.N.SSIAuthApiUrl}`,JSON.stringify({username:p.N.SSITokenUsername,password:p.N.SSITokenPassword}),this.httpPostOptions).subscribe(l=>{l.data?.token&&localStorage.setItem("TOKEN",l.data.token),this.localStorageService.store("TOKEN",l.data?.token),this.sessionStorageService.store("token",l.data?.token),this.sessionStorageService.store("userId",l.data?.userId)})}saveAuthenticateInformation(r){this.sessionStorageService.store("authenticateInformation",r)}getAuthenticateInformation(){return this.sessionStorageService.retrieve("authenticateInformation")}saveClientInformation(r){this.sessionStorageService.store("clientInformation",r)}getClientInformation(){return this.sessionStorageService.retrieve("clientInformation")}saveDeliveryStoreMethod(r){this.sessionStorageService.store("storeInfo",r)}getDeliveryStoreMethod(){return this.sessionStorageService.retrieve("storeInfo")}saveSelfie(r){this.sessionStorageService.store("photoFace",r)}saveMovilListinformation(r){this.sessionStorageService.store("movilListInfo",r)}getMovilListInformation(){return this.sessionStorageService.retrieve("movilListInfo")}getSelfie(){return console.log(this.sessionStorageService.retrieve("photoFace")),this.sessionStorageService.retrieve("photoFace")}saveDocument(r,l){this.sessionStorageService.store(r,l)}getDocument(r){return this.sessionStorageService.retrieve(r)}savePlanCompositionCode(r){this.sessionStorageService.store("planCompositionCode",r)}getPlanCompositionCode(){return this.sessionStorageService.retrieve("planCompositionCode")}savePlanComposition(r){this.sessionStorageService.store("planComposition",r)}getPlanComposition(){return this.sessionStorageService.retrieve("planComposition")}clearWebStorePlanComposition(){this.sessionStorageService.clear(),this.sessionStorageService.clear("planCompositionCode"),this.sessionStorageService.clear("planComposition")}saveStatusScoring(r){this.sessionStorageService.store("statusScoring",r)}getStatusScoring(){return this.sessionStorageService.retrieve("statusScoring")}saveDataInSession(r,l){this.sessionStorageService.store(r,l)}getDataInSession(r){return this.sessionStorageService.retrieve(r)}getScoring(){return this.sessionStorageService.retrieve("scoring")}getOfferConsuptioncode(){return this.sessionStorageService.retrieve("offerconsumptionformcode")}getOfferTotaldetail(){return this.sessionStorageService.retrieve("offertotaltariff")}saveAutomaticPayment(r){this.sessionStorageService.store("automaticPayment",r)}}return d.\u0275fac=function(r){return new(r||d)(h.LFG(g.uR),h.LFG(g.n2),h.LFG(S.eN))},d.\u0275prov=h.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},9336:(O,M,s)=>{s.d(M,{xY:()=>U,zB:()=>$});var p=s(5861),o=s(4650),h=s(6895),g=s(727),S=s(1135),E=s(8372),d=s(6406),_=s(3900),r=s(2076),l=s(262),u=s(515),D=s(5577);const C=new o.OlP("LAZY_ELEMENT_CONFIGS"),R=new o.OlP("LAZY_ELEMENT_ROOT_OPTIONS"),T=new o.OlP("LAZY_ELEMENT_ROOT_GUARD"),A=new o.OlP("LAZY_ELEMENTS_REGISTRY",{providedIn:"root",factory:()=>new Map});let I=(()=>{class i{constructor(e,t,n){this.errorHandler=e,this.registry=t,this.options=n,this.configs=[],n||(this.options={})}addConfigs(e){e.forEach(t=>{this.getElementConfig(t.tag)||(t.isAdded=!0,this.configs.push(t),(void 0!==t.preload?t.preload:this.options.preload)&&this.loadElement(t.url,t.tag,t.isModule,t.importMap,t.hooks))})}getElementConfig(e){return this.configs.find(t=>t.tag===e)}preload(e){let t=this.configs;e&&(t=this.configs.filter(n=>e.includes(n.tag))),t.forEach(n=>this.loadElement(n.url,n.tag,n.isModule,n.importMap,n.hooks))}loadElement(e,t,n,c,f){var a=this;return(0,p.Z)(function*(){const m=a.getElementConfig(t);if(n??(n=m?.isModule??a.options.isModule),c??(c=m?.importMap??a.options.importMap),e||(e=c?t:m.url),!a.hasElement(e)){let x=function(){L.removeEventListener("load",z),L.removeEventListener("error",F)};const v=a.addElement(e),P=f?.beforeLoad??m?.hooks?.beforeLoad??a.options?.hooks?.beforeLoad,w=f?.afterLoad??m?.hooks?.afterLoad??a.options?.hooks?.afterLoad;c&&(e=yield a.resolveImportMap(e));const L=document.createElement("script");n&&(L.type="module"),L.src=e;const z=()=>{w?a.handleHook(w,t).then(v.resolve).catch(v.reject):v.resolve(),x()},F=b=>{v.reject(b),x(),a.errorHandler.handleError(b)};L.addEventListener("load",z),L.addEventListener("error",F),P?a.handleHook(P,t).then(()=>document.body.appendChild(L)).catch(v.reject):document.body.appendChild(L)}return a.registry.get(a.stripUrlProtocol(e))})()}addElement(e){let t;return this.registry.set(this.stripUrlProtocol(e),new Promise((n,c)=>t={resolve:n,reject:c})),t}hasElement(e){return this.registry.has(this.stripUrlProtocol(e))}stripUrlProtocol(e){return e.replace(/https?:\/\//,"")}handleHook(e,t){try{return Promise.resolve(e(t))}catch(n){return Promise.reject(n)}}resolveImportMap(e){return(0,p.Z)(function*(){const t=window.System;return t&&(yield t.prepareImport(),e=t.resolve(e)),e})()}}return i.\u0275fac=function(e){return new(e||i)(o.LFG(o.qLn),o.LFG(A),o.LFG(R,8))},i.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),U=(()=>{class i{constructor(e,t,n,c,f,a){this.platformId=e,this.vcr=t,this.template=n,this.elementsLoaderService=c,this.cfr=f,this.cdr=a,this.url=null,this.loadingTemplateRef=null,this.errorTemplateRef=null,this.isModule=!1,this.importMap=!1,this.viewRef=null,this.subscription=g.w0.EMPTY,this.url$=new S.X(null)}ngOnChanges(e){e.url&&this.url$.next(this.url)}ngOnInit(){(0,h.PM)(this.platformId)||this.setupUrlListener()}ngOnDestroy(){this.subscription.unsubscribe()}destroyEmbeddedView(){this.viewRef&&!this.viewRef.destroyed&&(this.viewRef.detach(),this.viewRef.destroy(),this.viewRef=null)}setupUrlListener(){const e=this.template,t=e._declarationTContainer?e._declarationTContainer.tagName||e._declarationTContainer.value:e._def.element.template.nodes[0].element.name,n=this.elementsLoaderService.getElementConfig(t)||{},c=this.elementsLoaderService.options,f=n.loadingComponent||c.loadingComponent;this.subscription=this.url$.pipe((0,E.b)(0,d.Z),(0,_.w)(a=>{if(this.loadingTemplateRef)this.vcr.createEmbeddedView(this.loadingTemplateRef);else if(f){const m=this.cfr.resolveComponentFactory(f);this.vcr.createComponent(m)}return(0,r.D)(this.elementsLoaderService.loadElement(a,t,this.isModule,this.importMap,n?.hooks)).pipe((0,l.K)(()=>{this.vcr.clear();const m=n.errorComponent||c.errorComponent;if(this.errorTemplateRef)this.vcr.createEmbeddedView(this.errorTemplateRef),this.cdr.markForCheck();else if(m){const v=this.cfr.resolveComponentFactory(m);this.vcr.createComponent(v),this.cdr.markForCheck()}return u.E}))}),(0,D.z)(()=>customElements.whenDefined(t))).subscribe({next:()=>{this.vcr.clear(),this.viewRef=this.vcr.createEmbeddedView(this.template),this.cdr.markForCheck()}})}}return i.\u0275fac=function(e){return new(e||i)(o.Y36(o.Lbi),o.Y36(o.s_b),o.Y36(o.Rgc),o.Y36(I),o.Y36(o._Vd),o.Y36(o.sBO))},i.\u0275dir=o.lG2({type:i,selectors:[["","axLazyElement",""]],inputs:{url:["axLazyElement","url"],loadingTemplateRef:["axLazyElementLoadingTemplate","loadingTemplateRef"],errorTemplateRef:["axLazyElementErrorTemplate","errorTemplateRef"],isModule:["axLazyElementModule","isModule"],importMap:["axLazyElementImportMap","importMap"]},features:[o.TTD]}),i})();function G(i){return"LazyElementsModule.forRoot() multiple execution guard"}let $=(()=>{class i{constructor(e,t,n){t&&t.length&&t.filter(c=>c.some(f=>!f.isAdded)).forEach(c=>e.addConfigs(c))}static forRoot(e){return{ngModule:i,providers:[{provide:C,useValue:e&&e.elementConfigs?e.elementConfigs:[],multi:!0},{provide:R,useValue:e.rootOptions?e.rootOptions:{}},{provide:T,useFactory:G,deps:[[R,new o.FiY,new o.tp0]]}]}}static forFeature(e){return{ngModule:i,providers:[{provide:C,useValue:e&&e.elementConfigs?e.elementConfigs:[],multi:!0}]}}}return i.\u0275fac=function(e){return new(e||i)(o.LFG(I),o.LFG(C,8),o.LFG(T,8))},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[h.ez]}),i})()},5861:(O,M,s)=>{function p(h,g,S,E,d,_,r){try{var l=h[_](r),u=l.value}catch(D){return void S(D)}l.done?g(u):Promise.resolve(u).then(E,d)}function o(h){return function(){var g=this,S=arguments;return new Promise(function(E,d){var _=h.apply(g,S);function r(u){p(_,E,d,r,l,"next",u)}function l(u){p(_,E,d,r,l,"throw",u)}r(void 0)})}}s.d(M,{Z:()=>o})}}]);