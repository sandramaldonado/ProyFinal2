"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[412],{5412:(lt,Y,c)=>{c.d(Y,{uw:()=>w,Is:()=>st});var g=c(7253),u=c(8184),M=c(3353),f=c(4080),C=c(6895),i=c(4650),v=c(9521),_=c(7579),L=c(9770),V=c(9646),x=c(445),F=c(8675);function G(n,a){}class y{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0}}let k=(()=>{class n extends f.en{constructor(t,e,o,s,r,l,h,p){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=s,this._interactivityChecker=r,this._ngZone=l,this._overlayRef=h,this._focusMonitor=p,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=D=>{this._portalOutlet.hasAttached();const P=this._portalOutlet.attachDomPortal(D);return this._contentAttached(),P},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=o}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const o=()=>{t.removeEventListener("blur",o),t.removeEventListener("mousedown",o),t.removeAttribute("tabindex")};t.addEventListener("blur",o),t.addEventListener("mousedown",o)})),t.focus(e)}_focusByCssSelector(t,e){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,e)}_trapFocus(){const t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(e=>{e||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const t=this._config.restoreFocus;let e=null;if("string"==typeof t?e=this._document.querySelector(t):"boolean"==typeof t?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&"function"==typeof e.focus){const o=(0,M.ht)(),s=this._elementRef.nativeElement;(!o||o===this._document.body||o===s||s.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=(0,M.ht)();return t===e||t.contains(e)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,M.ht)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return n.\u0275fac=function(t){return new(t||n)(i.Y36(i.SBq),i.Y36(g.qV),i.Y36(C.K0,8),i.Y36(y),i.Y36(g.ic),i.Y36(i.R0b),i.Y36(u.Iu),i.Y36(g.tE))},n.\u0275cmp=i.Xpm({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,e){if(1&t&&i.Gf(f.Pl,7),2&t){let o;i.iGM(o=i.CRH())&&(e._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,e){2&t&&i.uIk("id",e._config.id||null)("role",e._config.role)("aria-modal",e._config.ariaModal)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null)},features:[i.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&i.YNc(0,G,0,0,"ng-template",0)},dependencies:[f.Pl],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),n})();class O{constructor(a,t){this.overlayRef=a,this.config=t,this.closed=new _.x,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===v.hY&&!this.disableClose&&!(0,v.Vb)(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})})}close(a,t){if(this.containerInstance){const e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",t=""){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}}const I=new i.OlP("DialogScrollStrategy"),j=new i.OlP("DialogData"),H=new i.OlP("DefaultDialogConfig"),N={provide:I,deps:[u.aV],useFactory:function z(n){return()=>n.scrollStrategies.block()}};let W=0,E=(()=>{class n{constructor(t,e,o,s,r,l){this._overlay=t,this._injector=e,this._defaultOptions=o,this._parentDialog=s,this._overlayContainer=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new _.x,this._afterOpenedAtThisLevel=new _.x,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,L.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,F.O)(void 0))),this._scrollStrategy=l}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}open(t,e){(e={...this._defaultOptions||new y,...e}).id=e.id||"cdk-dialog-"+W++,e.id&&this.getDialogById(e.id);const s=this._getOverlayConfig(e),r=this._overlay.create(s),l=new O(r,e),h=this._attachContainer(r,l,e);return l.containerInstance=h,this._attachDialogContent(t,l,h,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){T(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){T(this._openDialogsAtThisLevel,t=>{!1===t.config.closeOnDestroy&&this._removeOpenDialog(t,!1)}),T(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){const e=new u.X_({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,o){const s=o.injector??o.viewContainerRef?.injector,r=[{provide:y,useValue:o},{provide:O,useValue:e},{provide:u.Iu,useValue:t}];let l;o.container?"function"==typeof o.container?l=o.container:(l=o.container.type,r.push(...o.container.providers(o))):l=k;const h=new f.C5(l,o.viewContainerRef,i.zs3.create({parent:s||this._injector,providers:r}),o.componentFactoryResolver);return t.attach(h).instance}_attachDialogContent(t,e,o,s){const r=this._createInjector(s,e,o);if(t instanceof i.Rgc){let l={$implicit:s.data,dialogRef:e};s.templateContext&&(l={...l,..."function"==typeof s.templateContext?s.templateContext():s.templateContext}),o.attachTemplatePortal(new f.UE(t,null,l,r))}else{const l=o.attachComponentPortal(new f.C5(t,s.viewContainerRef,r,s.componentFactoryResolver));e.componentInstance=l.instance}}_createInjector(t,e,o){const s=t&&t.viewContainerRef&&t.viewContainerRef.injector,r=[{provide:j,useValue:t.data},{provide:O,useValue:e}];return t.providers&&("function"==typeof t.providers?r.push(...t.providers(e,t,o)):r.push(...t.providers)),t.direction&&(!s||!s.get(x.Is,null,i.XFs.Optional))&&r.push({provide:x.Is,useValue:{value:t.direction,change:(0,V.of)()}}),i.zs3.create({parent:t.injector||s||this._injector,providers:r})}_removeOpenDialog(t,e){const o=this.openDialogs.indexOf(t);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((s,r)=>{s?r.setAttribute("aria-hidden",s):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let o=e.length-1;o>-1;o--){const s=e[o];s!==t&&"SCRIPT"!==s.nodeName&&"STYLE"!==s.nodeName&&!s.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return n.\u0275fac=function(t){return new(t||n)(i.LFG(u.aV),i.LFG(i.zs3),i.LFG(H,8),i.LFG(n,12),i.LFG(u.Xj),i.LFG(I))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})();function T(n,a){let t=n.length;for(;t--;)a(n[t])}let $=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({providers:[E,N],imports:[u.U8,f.eL,g.rt,f.eL]}),n})();var B=c(3238),X=c(6451),b=c(9300),R=c(5698),d=c(7340);function U(n,a){}const m={params:{enterAnimationDuration:"150ms",exitAnimationDuration:"75ms"}},Q={dialogContainer:(0,d.X$)("dialogContainer",[(0,d.SB)("void, exit",(0,d.oB)({opacity:0,transform:"scale(0.7)"})),(0,d.SB)("enter",(0,d.oB)({transform:"none"})),(0,d.eR)("* => enter",(0,d.ru)([(0,d.jt)("{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)",(0,d.oB)({transform:"none",opacity:1})),(0,d.IO)("@*",(0,d.pV)(),{optional:!0})]),m),(0,d.eR)("* => void, * => exit",(0,d.ru)([(0,d.jt)("{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)",(0,d.oB)({opacity:0})),(0,d.IO)("@*",(0,d.pV)(),{optional:!0})]),m)])};class A{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0,this.enterAnimationDuration=m.params.enterAnimationDuration,this.exitAnimationDuration=m.params.exitAnimationDuration}}let K=(()=>{class n extends k{constructor(t,e,o,s,r,l,h,p){super(t,e,o,s,r,l,h,p),this._animationStateChanged=new i.vpe}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}}return n.\u0275fac=function(t){return new(t||n)(i.Y36(i.SBq),i.Y36(g.qV),i.Y36(C.K0,8),i.Y36(A),i.Y36(g.ic),i.Y36(i.R0b),i.Y36(u.Iu),i.Y36(g.tE))},n.\u0275cmp=i.Xpm({type:n,selectors:[["ng-component"]],features:[i.qOj],decls:0,vars:0,template:function(t,e){},encapsulation:2}),n})(),Z=(()=>{class n extends K{constructor(t,e,o,s,r,l,h,p,D){super(t,e,o,s,r,l,h,D),this._changeDetectorRef=p,this._state="enter"}_onAnimationDone({toState:t,totalTime:e}){"enter"===t?this._openAnimationDone(e):"exit"===t&&this._animationStateChanged.next({state:"closed",totalTime:e})}_onAnimationStart({toState:t,totalTime:e}){"enter"===t?this._animationStateChanged.next({state:"opening",totalTime:e}):("exit"===t||"void"===t)&&this._animationStateChanged.next({state:"closing",totalTime:e})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}_getAnimationState(){return{value:this._state,params:{enterAnimationDuration:this._config.enterAnimationDuration||m.params.enterAnimationDuration,exitAnimationDuration:this._config.exitAnimationDuration||m.params.exitAnimationDuration}}}}return n.\u0275fac=function(t){return new(t||n)(i.Y36(i.SBq),i.Y36(g.qV),i.Y36(C.K0,8),i.Y36(A),i.Y36(g.ic),i.Y36(i.R0b),i.Y36(u.Iu),i.Y36(i.sBO),i.Y36(g.tE))},n.\u0275cmp=i.Xpm({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-dialog-container"],hostVars:7,hostBindings:function(t,e){1&t&&i.WFA("@dialogContainer.start",function(s){return e._onAnimationStart(s)})("@dialogContainer.done",function(s){return e._onAnimationDone(s)}),2&t&&(i.Ikx("id",e._config.id),i.uIk("aria-modal",e._config.ariaModal)("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),i.d8E("@dialogContainer",e._getAnimationState()))},features:[i.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&i.YNc(0,U,0,0,"ng-template",0)},dependencies:[f.Pl],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions.mat-dialog-actions-align-center,.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions.mat-dialog-actions-align-end,.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],encapsulation:2,data:{animation:[Q.dialogContainer]}}),n})();class J{constructor(a,t,e){this._ref=a,this._containerInstance=e,this._afterOpened=new _.x,this._beforeClosed=new _.x,this._state=0,this.disableClose=t.disableClose,this.id=a.id,e._animationStateChanged.pipe((0,b.h)(o=>"opened"===o.state),(0,R.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe((0,b.h)(o=>"closed"===o.state),(0,R.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,X.T)(this.backdropClick(),this.keydownEvents().pipe((0,b.h)(o=>o.keyCode===v.hY&&!this.disableClose&&!(0,v.Vb)(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),function q(n,a,t){n._closeInteractionType=a,n.close(t)}(this,"keydown"===o.type?"keyboard":"mouse"))})}close(a){this._result=a,this._containerInstance._animationStateChanged.pipe((0,b.h)(t=>"closing"===t.state),(0,R.q)(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}const tt=new i.OlP("MatDialogData"),et=new i.OlP("mat-dialog-default-options"),S=new i.OlP("mat-dialog-scroll-strategy"),at={provide:S,deps:[u.aV],useFactory:function it(n){return()=>n.scrollStrategies.block()}};let ot=0,nt=(()=>{class n{constructor(t,e,o,s,r,l,h,p,D,P){this._overlay=t,this._defaultOptions=o,this._parentDialog=s,this._dialogRefConstructor=h,this._dialogContainerType=p,this._dialogDataToken=D,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new _.x,this._afterOpenedAtThisLevel=new _.x,this._idPrefix="mat-dialog-",this.afterAllClosed=(0,L.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,F.O)(void 0))),this._scrollStrategy=l,this._dialog=e.get(E)}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(t,e){let o;(e={...this._defaultOptions||new A,...e}).id=e.id||`${this._idPrefix}${ot++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();const s=this._dialog.open(t,{...e,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:A,useValue:e},{provide:y,useValue:e}]},templateContext:()=>({dialogRef:o}),providers:(r,l,h)=>(o=new this._dialogRefConstructor(r,e,h),o.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:o}])});return o.componentInstance=s.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{const r=this.openDialogs.indexOf(o);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}}return n.\u0275fac=function(t){i.$Z()},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})(),w=(()=>{class n extends nt{constructor(t,e,o,s,r,l,h,p){super(t,e,s,l,h,r,J,Z,tt,p)}}return n.\u0275fac=function(t){return new(t||n)(i.LFG(u.aV),i.LFG(i.zs3),i.LFG(C.Ye,8),i.LFG(et,8),i.LFG(S),i.LFG(n,12),i.LFG(u.Xj),i.LFG(i.QbO,8))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})(),st=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({providers:[w,at],imports:[$,u.U8,f.eL,B.BQ,B.BQ]}),n})()}}]);