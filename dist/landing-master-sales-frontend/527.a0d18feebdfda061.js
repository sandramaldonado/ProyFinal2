"use strict";(self.webpackChunklanding_master_sales_frontend=self.webpackChunklanding_master_sales_frontend||[]).push([[527],{4527:(O,p,a)=>{a.d(p,{N:()=>c});var d=a(7065),i=a(4004),h=a(4650),_=a(529);let c=(()=>{class o{constructor(t){this.http=t,this.endPoint=d.N.endPoint,this.endPointMgd=d.N.urlMgd}createOrder(t,e){return this.http.post(this.endPoint+"/order/create/orderMain",t,{headers:{Authorization:"Bearer "+e}}).pipe((0,i.U)(s=>s))}registerOrderView(t,e){return this.http.post(this.endPoint+"/order/registers/orderView",t,{headers:{Authorization:"Bearer "+e}}).pipe((0,i.U)(s=>s))}createPerson(t,e){return this.http.post(this.endPoint+"/sales/creates/client/person",t,{headers:{Authorization:"Bearer "+e}}).pipe((0,i.U)(s=>s))}uploadDocuments(t,e){return this.http.post(this.endPointMgd+"/documents/upload",t,{headers:{Authorization:"Bearer "+e}}).pipe((0,i.U)(s=>s))}}return o.\u0275fac=function(t){return new(t||o)(h.LFG(_.eN))},o.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);