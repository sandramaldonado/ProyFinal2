"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[207],{9207:(he,M,m)=>{m.r(M),m.d(M,{OrderModule:()=>de});var C=m(6895),b=m(3060),e=m(4650),_=m(3063),J=m(529);let U=(()=>{class t{constructor(n,o){this.webstoreservice=n,this.httpClient=o,this.apiUrl="https://omega.devnt.ssidevops.com/rules"}coverageEvaluation(n){console.log(n);const i={headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}};var c=this.webstoreservice.getPlanComposition(),s={productTypeCode:[],compositionPlanCode:c.planCompositionCode,channelCode:"landing"};let l=[];for(let u=0;u<c.planList.length;u++)l.push(c.planList[u].consumptionEntityType);return s.productTypeCode=l,this.httpClient.post(`${this.apiUrl}/productCatalog/coverageEvaluation`,JSON.stringify(s),i)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(_.f),e.LFG(J.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var A=m(6616),R=m(7141),L=m(2241),B=m(3517),x=m(6748),E=m(9886),P=m(5861),f=(()=>{return(t=f||(f={}))[t.Up=1]="Up",t[t.Down=3]="Down",t[t.Right=6]="Right",t[t.Left=8]="Left",t[t.UpMirrored=2]="UpMirrored",t[t.DownMirrored=4]="DownMirrored",t[t.LeftMirrored=5]="LeftMirrored",t[t.RightMirrored=7]="RightMirrored",t[t.Default=0]="Default",t[t.NotJpeg=-1]="NotJpeg",t[t.NotDefined=-2]="NotDefined",f;var t})();class p{}p.getOrientation=t=>new Promise((r,n)=>{try{const o=new FileReader;o.onload=()=>{const i=new DataView(o.result);if(!i.byteLength||65496!==i.getUint16(0,!1))return r(f.NotDefined);const c=i.byteLength;let s=2;for(;s<c;){const l=i.getUint16(s,!1);if(s+=2,65505===l){if(1165519206!==i.getUint32(s+=2,!1))return r(f.NotJpeg);const u=18761===i.getUint16(s+=6,!1);s+=i.getUint32(s+4,u);const g=i.getUint16(s,u);s+=2;for(let a=0;a<g;a++)if(274===i.getUint16(s+12*a,u))return r(i.getUint16(s+12*a+8,u))}else{if(65280!=(65280&l))break;s+=i.getUint16(s,!1)}}return r(f.NotJpeg)},o.readAsArrayBuffer(t)}catch{return n(f.Default)}}),p.uploadFile=(t,r=!0,n=!1)=>new Promise(function(o,i){const c=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);Promise.resolve(c).then(s=>s?p.generateUploadInputNative(window.document,r,n):p.generateUploadInputRenderer(t,r,n)).then(s=>{const l=s?Array.from(s):[],u=l.map(d=>p.getOrientation(d)),g=l.map(d=>p.fileToDataURL(d));let a=[];Promise.all(u).then(d=>(a=d,Promise.all(g))).then(d=>{const h=d.map((v,y)=>({image:v.dataUrl,orientation:a[y],fileName:v.fileName}));o(r?h:h[0])})}).catch(s=>i(s))}),p.fileToDataURL=t=>new Promise((r,n)=>{const o=new FileReader;o.onload=i=>{r({dataUrl:i.target.result,fileName:t.name})};try{o.readAsDataURL(t)}catch(i){n(`ngx-image-compress - probably no file have been selected: ${i}`)}}),p.generateUploadInputRenderer=(t,r=!0,n=!1)=>{let o=!1;return new Promise((i,c)=>{const s=t.createElement("input");t.setStyle(s,"display","none"),t.setProperty(s,"type","file"),t.setProperty(s,"accept","image/*"),r&&t.setProperty(s,"multiple","true"),t.listen(s,"click",l=>{l.target.value=""}),t.listen(s,"change",l=>{o=!0,i(l.target.files)}),n&&window.addEventListener("focus",()=>{setTimeout(()=>{o||c(new Error("file upload on blur - no file selected"))},300)},{once:!0}),s.click()})},p.generateUploadInputNative=(t,r=!0,n=!1)=>{let o=!1;return new Promise((i,c)=>{const s=t.createElement("input");s.id="upload-input"+new Date,s.style.display="none",s.setAttribute("type","file"),r&&s.setAttribute("multiple","true"),t.body.appendChild(s),s.addEventListener("change",()=>{o=!0,i(s.files),t.body.removeChild(t.getElementById(s.id))},{once:!0}),n&&window.addEventListener("focus",()=>{setTimeout(()=>{!o&&t.getElementById(s.id)&&(c(new Error("file upload on blur - no file selected")),t.body.removeChild(t.getElementById(s.id)))},300)},{once:!0}),s.click()})},p.compress=(t,r,n,o=50,i=50,c=0,s=0)=>new Promise(function(l,u){i/=100,o/=100;const g=new Image;g.onload=()=>{const a=n.createElement("canvas"),d=a.getContext("2d");if(!d)return u("No canvas context available");let h=g.naturalWidth,v=g.naturalHeight;if(!CSS.supports("image-orientation","from-image")&&(r===f.Right||r===f.Left)){const fe=h;h=v,v=fe}o=Math.min(o,c?c/h:1,s?s/v:1),a.width=h*o,a.height=v*o;const w=Math.PI/180;CSS.supports("image-orientation","from-image")||r===f.Up?d.drawImage(g,0,0,a.width,a.height):r===f.Right?(d.save(),d.rotate(90*w),d.translate(0,-a.width),d.drawImage(g,0,0,a.height,a.width),d.restore()):r===f.Left?(d.save(),d.rotate(-90*w),d.translate(-a.width,0),d.drawImage(g,0,0,a.height,a.width),d.restore()):r===f.Down?(d.save(),d.rotate(180*w),d.translate(-a.width,-a.height),d.drawImage(g,0,0,a.width,a.height),d.restore()):d.drawImage(g,0,0,a.width,a.height);const me=t.substr(5,t.split(";")[0].length-5),ge=a.toDataURL(me,i);l(ge)},g.onerror=a=>u(a),g.src=t}),p.byteCount=t=>encodeURI(t).split(/%..|./).length-1,p.getImageMaxSize=function(){var t=(0,P.Z)(function*(r,n,o){const c=u=>(u/1024/1024).toFixed(2);n&&console.debug("NgxImageCompress - Opening upload window");let l,s=yield p.uploadFile(o,!1);for(let u=0;u<10;u++){const g=p.byteCount(s.image);l=yield p.compress(s.image,s.orientation,o,50,100);const a=p.byteCount(l);if(console.debug("NgxImageCompress -","Compression from",c(g),"MB to",c(a),"MB"),a>=g)throw 0===u?(n&&console.debug("NgxImageCompress -","File can't be reduced at all - returning the original",c(g),"MB large"),s.image):(n&&console.debug("NgxImageCompress -","File can't be reduced more - returning the best we can, which is ",c(g),"MB large"),s.image);if(a<1024*r*1024)return n&&console.debug("NgxImageCompress -","Here your file",c(a),"MB large"),l;if(9===u)throw n&&console.debug("NgxImageCompress -","File can't reach the desired size after",10,"tries. Returning file ",c(g),"MB large"),s.image;n&&console.debug("NgxImageCompress -","Reached",c(a),"MB large. Trying another time after",u+1,"times"),s.image=l}throw n&&console.debug("NgxImageCompress - Unexpected error"),""});return function(r,n,o){return t.apply(this,arguments)}}();let z=(()=>{class t{constructor(n){this.DOC_ORIENTATION=f,this.render=n.createRenderer(null,null)}byteCount(n){return p.byteCount(n)}getOrientation(n){return p.getOrientation(n)}uploadFile(){return p.uploadFile(this.render,!1)}uploadMultipleFiles(){return p.uploadFile(this.render,!0)}uploadFileOrReject(){return p.uploadFile(this.render,!1,!0)}uploadMultipleFilesOrReject(){return p.uploadFile(this.render,!0,!0)}compressFile(n,o,i=50,c=50,s=0,l=0){return p.compress(n,o,this.render,i,c,s,l)}uploadAndGetImageWithMaxSize(n=1,o=!1){return p.getImageMaxSize(n,o,this.render)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(e.FYo))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var S=m(3546),k=m(42),Z=m(9717);let T=(()=>{class t{constructor(n,o,i){this.modalService=n,this.imageCompress=o,this.webstoreService=i,this.nextDocumentStep=new e.vpe}ngOnInit(){}openModalWithComponent(){}uploadFirstDocument(){this.uploadAndCompress("firstDocument")}takePictureFirstDocument(){this.bsModalRef=this.modalService.show(x.Q,{initialState:{source:"firstDocument"}}),this.bsModalRef.content.closeBtnName="Close"}uploadSecondDocument(){this.uploadAndCompress("secondDocument")}takePictureSecondDocument(){this.bsModalRef=this.modalService.show(x.Q,{initialState:{source:"secondDocument"}}),this.bsModalRef.content.closeBtnName="Close"}uploadFacePicture(){this.uploadAndCompress("facePicture")}takeFacePicture(){this.bsModalRef=this.modalService.show(x.Q,{initialState:{source:"facePicture"}}),this.bsModalRef.content.closeBtnName="Close"}uploadAndCompress(n){let o=this;this.imageCompress.uploadFile().then(({image:i,orientation:c})=>{let s=this.imageCompress.byteCount(i);if(s>4e5){console.log("Size in bytes was:",this.imageCompress.byteCount(i));let l=100;l=s<=5e5?80:s<1e6?70:s<2e6?60:s<5e6?40:s<7e6?30:s<1e7?20:10,this.imageCompress.compressFile(i,c,l,90).then(u=>{o.webstoreService.saveDocument(n,u),console.log("(>400000)Size in bytes is now:",this.imageCompress.byteCount(u))})}else this.imageCompress.compressFile(i,c,90,90).then(l=>{o.webstoreService.saveDocument(n,l),console.log("(<400000)Size in bytes after compression is now:",this.imageCompress.byteCount(l))})}).catch(i=>{})}next(){this.nextDocumentStep.emit(!0)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(E.tT),e.Y36(z),e.Y36(_.f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-documents"]],outputs:{nextDocumentStep:"nextDocumentStep"},decls:33,vars:7,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],[1,"my-3","border"],[1,"text-center"],[1,"d-flex","flex-column","justify-content-between","align-items-center","py-5"],["src","assets/images/iconos/picture.png","alt","",1,"pb-2"],[3,"content","click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"h3"),e._uU(5,"Documentos de identidad"),e.qZA(),e.TgZ(6,"p"),e._uU(7,"Necesitamos verificar tu identidad con tus documentos legales."),e.qZA(),e.TgZ(8,"mat-card",4)(9,"mat-card-content",5)(10,"div",6),e._UZ(11,"img",7),e.TgZ(12,"p"),e._uU(13,"Sube la fotograf\xeda de CI (anverso) "),e.qZA(),e.TgZ(14,"app-button",8),e.NdJ("click",function(){return o.uploadFirstDocument()}),e.qZA(),e.TgZ(15,"app-button-outline",8),e.NdJ("click",function(){return o.takePictureFirstDocument()}),e.qZA()()()(),e.TgZ(16,"mat-card",4)(17,"mat-card-content",5)(18,"div",6),e._UZ(19,"img",7),e.TgZ(20,"p"),e._uU(21,"Sube la fotograf\xeda de CI (reverso)"),e.qZA(),e.TgZ(22,"app-button",8),e.NdJ("click",function(){return o.uploadSecondDocument()}),e.qZA(),e.TgZ(23,"app-button-outline",8),e.NdJ("click",function(){return o.takePictureSecondDocument()}),e.qZA()()()(),e.TgZ(24,"mat-card",4)(25,"mat-card-content",5)(26,"div",6),e._UZ(27,"img",7),e.TgZ(28,"p"),e._uU(29,"Sube la fotograf\xeda de ti sin gorra o algo q tape tu rostro"),e.qZA(),e.TgZ(30,"app-button",8),e.NdJ("click",function(){return o.uploadFacePicture()}),e.qZA(),e.TgZ(31,"app-button-outline",8),e.NdJ("click",function(){return o.takeFacePicture()}),e.qZA()()()(),e.TgZ(32,"app-button",8),e.NdJ("click",function(){return o.next()}),e.qZA()()()()()),2&n&&(e.xp6(14),e.Q6J("content","Subir imagen"),e.xp6(1),e.Q6J("content","Tomar fotografia"),e.xp6(7),e.Q6J("content","Subir imagen"),e.xp6(1),e.Q6J("content","Tomar fotografia"),e.xp6(7),e.Q6J("content","Subir imagen"),e.xp6(1),e.Q6J("content","Tomar fotografia"),e.xp6(1),e.Q6J("content","Siguiente"))},dependencies:[S.a8,S.dn,k.r,Z.Y],styles:[".mat-card[_ngcontent-%COMP%]{padding:1px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white;color:#848484}"]}),t})(),F=(()=>{class t{constructor(){this.nextScoringStep=new e.vpe}ngOnInit(){}next(){this.nextScoringStep.emit(!0)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-result-scoring"]],outputs:{nextScoringStep:"nextScoringStep"},decls:12,vars:2,consts:[[1,"container"],[1,"row","pb-3"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],[3,"content","click"],[3,"content"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"h3"),e._uU(5,"Antes de continuar"),e.qZA(),e.TgZ(6,"p"),e._uU(7,"Debido a tu capacidad de endeudamiento, para continuar el proceso de compra por este canal deber\xe1s habilitar el pago autom\xe1tico de tu servicio de manera mensual mediante una tarjeta de d\xe9bito o cr\xe9dito que te pediremos antes de concluir tu compra. Es un proceso sencillo que te asegurar\xe1 que puedas adquirir este plan."),e.qZA(),e.TgZ(8,"p"),e._uU(9,"\xbfDeseas continuar?"),e.qZA(),e.TgZ(10,"app-button",4),e.NdJ("click",function(){return o.next()}),e.qZA(),e._UZ(11,"app-button-outline",5),e.qZA()()()()),2&n&&(e.xp6(10),e.Q6J("content","Continuar"),e.xp6(1),e.Q6J("content","Ver otros planes"))},dependencies:[k.r,Z.Y],styles:[".mat-card[_ngcontent-%COMP%]{padding:1px!important;width:100%;color:#7b7b7b}.section-body[_ngcontent-%COMP%]{background:white;color:#848484}"]}),t})();var Q=m(5428);function Y(t,r){1&t&&e._UZ(0,"img",21)}function N(t,r){1&t&&e._UZ(0,"img",22)}function q(t,r){1&t&&e._UZ(0,"img",23)}function j(t,r){if(1&t&&(e.TgZ(0,"div",14)(1,"div",15),e.YNc(2,Y,1,0,"img",16),e.YNc(3,N,1,0,"img",17),e.YNc(4,q,1,0,"img",18),e.qZA(),e.TgZ(5,"div",19)(6,"p",20),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA()()()),2&t){const n=r.$implicit;e.xp6(2),e.Q6J("ngIf",n.componentTradeName&&"MOVIL"==(null==n?null:n.consumptionEntityType)),e.xp6(1),e.Q6J("ngIf",n.componentTradeName&&"IFIXED"==(null==n?null:n.consumptionEntityType)),e.xp6(1),e.Q6J("ngIf",n.componentTradeName&&"TV"==(null==n?null:n.consumptionEntityType)),e.xp6(3),e.Oqu(null==n?null:n.consumptionEntityType),e.xp6(2),e.Oqu(null==n?null:n.componentOffer)}}function G(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-check-coverage",24),e.NdJ("nextCoverageStep",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.changeModule(i.modules.checkCoverage.alias))}),e.qZA()}if(2&t){const n=e.oxw();e.s9C("id",n.modules.checkCoverage.alias)}}function H(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-result-scoring",25),e.NdJ("nextScoringStep",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.changeModule(i.modules.scoring.alias))}),e.qZA()}if(2&t){const n=e.oxw();e.s9C("id",n.modules.scoring.alias)}}function K(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-admin-client",26),e.NdJ("nextAdminClientStep",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.changeModule(i.modules.adminClient.alias))}),e.qZA()}if(2&t){const n=e.oxw();e.s9C("id",n.modules.adminClient.alias)}}function X(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-check-email",27),e.NdJ("nextCheckEmailStep",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.changeModule(i.modules.checkEmail.alias))}),e.qZA()}if(2&t){const n=e.oxw();e.s9C("id",n.modules.checkEmail.alias)}}function V(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-documents",28),e.NdJ("nextDocumentStep",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.changeModule(i.modules.documents.alias))}),e.qZA()}if(2&t){const n=e.oxw();e.s9C("id",n.modules.documents.alias)}}function W(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-movil-list",29),e.NdJ("nextMovilListStep",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.changeModule(i.modules.movilList.alias))}),e.qZA()}if(2&t){const n=e.oxw();e.s9C("id",n.modules.movilList.alias)}}const $=[{path:"",component:(()=>{class t{constructor(n,o,i,c){this.webstoreservice=n,this.breservices=o,this.tokenService=i,this.scroller=c,this.showCoverage=!0,this.showScoring=!0,this.orderTabs=[],this.modules={checkCoverage:{visible:!1,active:!1,enabled:!0,alias:"checkcoverage"},scoring:{visible:!1,active:!1,enabled:!0,alias:"scoring"},adminClient:{visible:!1,active:!1,enabled:!0,alias:"adminclient"},checkEmail:{visible:!1,active:!1,enabled:!0,alias:"checkemail"},documents:{visible:!1,active:!1,enabled:!0,alias:"documents"},movilList:{visible:!1,active:!1,enabled:!0,alias:"movilList"}}}ngOnInit(){this.planCompositionCode=this.webstoreservice.getPlanCompositionCode(),this.planComposition=this.webstoreservice.getPlanComposition(),this.getToken()}loadBussinesRules(){this.breservices.coverageEvaluation(this.autentication.data.token).subscribe(n=>{this.coverageData=n,this.scoringStatus=this.webstoreservice.getStatusScoring(),this.initializeComponents()})}initializeComponents(){this.planList=this.planComposition?.planList,"OK"==this.coverageData.data.requireCoverageVerification?this.modules.checkCoverage.visible=!0:this.modules.checkCoverage.enabled=!1,this.modules.scoring.enabled="NORMAL"==this.scoringStatus,this.modules.scoring.visible=this.modules.scoring.enabled&&!this.modules.checkCoverage.visible,this.modules.adminClient.visible=!this.modules.scoring.visible&&!this.modules.checkCoverage.visible}getToken(){this.tokenService.gettoken().subscribe(n=>{this.autentication=n,this.loadBussinesRules()})}changeModule(n){console.log(n);var o=this;switch(n){case"checkcoverage":this.modules.scoring.enabled?(this.modules.scoring.visible=!0,setTimeout(function(){o.scroller.scrollToAnchor("scoring")},1e3)):this.changeModule("scoring");break;case"scoring":this.modules.adminClient.enabled?(this.modules.adminClient.visible=!0,setTimeout(function(){o.scroller.scrollToAnchor("adminclient")},1e3)):this.changeModule("adminclient");break;case"adminclient":this.modules.checkEmail.enabled?(this.modules.checkEmail.visible=!0,setTimeout(function(){o.scroller.scrollToAnchor("checkemail")},1e3)):this.changeModule("checkemail");break;case"checkemail":this.modules.documents.enabled?(this.modules.documents.visible=!0,setTimeout(function(){o.scroller.scrollToAnchor("documents")},1e3)):this.changeModule("documents")}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_.f),e.Y36(U),e.Y36(A.B),e.Y36(C.EM))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-order"]],decls:16,vars:8,consts:[[1,"container"],[1,"row"],[1,"d-none","d-md-block","col-5","bg","bg-light","bg-gradient","border","py-5","px-5","my-1"],[1,"sticky-top"],[1,"section-body","col-12","py-3"],[1,"d-flex","flex-column","justify-content-around","align-items-center"],["class","row w-100 border-top pt-2",4,"ngFor","ngForOf"],[1,"col-12","col-md-7"],[3,"id","nextCoverageStep",4,"ngIf"],[3,"id","nextScoringStep",4,"ngIf"],[3,"id","nextAdminClientStep",4,"ngIf"],[3,"id","nextCheckEmailStep",4,"ngIf"],[3,"id","nextDocumentStep",4,"ngIf"],[3,"id","nextMovilListStep",4,"ngIf"],[1,"row","w-100","border-top","pt-2"],[1,"col-1","text-end"],["src","assets/images/iconos/movil.png","alt","","style","width: 20px; height: auto;",4,"ngIf"],["src","assets/images/iconos/wifi.png","alt","","style","width: 25px; height: auto;",4,"ngIf"],["src","assets/images/iconos/tv.png","alt","","style","width: 25px; height: auto;",4,"ngIf"],[1,"col-11"],[1,"component-title","mb-0","fw-bold"],["src","assets/images/iconos/movil.png","alt","",2,"width","20px","height","auto"],["src","assets/images/iconos/wifi.png","alt","",2,"width","25px","height","auto"],["src","assets/images/iconos/tv.png","alt","",2,"width","25px","height","auto"],[3,"id","nextCoverageStep"],[3,"id","nextScoringStep"],[3,"id","nextAdminClientStep"],[3,"id","nextCheckEmailStep"],[3,"id","nextDocumentStep"],[3,"id","nextMovilListStep"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"section",4)(5,"div",5)(6,"h3"),e._uU(7),e.qZA(),e.YNc(8,j,10,5,"div",6),e.qZA()()()(),e.TgZ(9,"div",7),e.YNc(10,G,1,1,"app-check-coverage",8),e.YNc(11,H,1,1,"app-result-scoring",9),e.YNc(12,K,1,1,"app-admin-client",10),e.YNc(13,X,1,1,"app-check-email",11),e.YNc(14,V,1,1,"app-documents",12),e.YNc(15,W,1,1,"app-movil-list",13),e.qZA()()()),2&n&&(e.xp6(7),e.Oqu(null==o.planComposition?null:o.planComposition.groupTradeName),e.xp6(1),e.Q6J("ngForOf",null==o.planComposition?null:o.planComposition.planList),e.xp6(2),e.Q6J("ngIf",o.modules.checkCoverage.visible),e.xp6(1),e.Q6J("ngIf",o.modules.scoring.visible),e.xp6(1),e.Q6J("ngIf",o.modules.adminClient.visible),e.xp6(1),e.Q6J("ngIf",o.modules.checkEmail.visible),e.xp6(1),e.Q6J("ngIf",o.modules.documents.visible),e.xp6(1),e.Q6J("ngIf",o.modules.movilList.visible))},dependencies:[C.sg,C.O5,R.T,L.r,B.W,T,F,Q.h]}),t})()}];let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[b.Bz.forChild($),b.Bz]}),t})();var ee=m(931),te=m(5780),ne=m(3434);const oe=[{path:"",component:T}];let ie=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[b.Bz.forChild(oe),b.Bz]}),t})();var D=m(4466);let se=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[C.ez,ie,S.QW,D.m]}),t})();const re=[{path:"",component:F}];let ae=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[b.Bz.forChild(re),b.Bz]}),t})(),le=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[C.ez,ae,D.m]}),t})();var ce=m(9499),ue=m(5380);let de=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[C.ez,O,ee.CheckCoverageModule,te.AdminClientModule,ne.CheckEmailModule,se,le,ce.O,ue.MovilListModule]}),t})()}}]);