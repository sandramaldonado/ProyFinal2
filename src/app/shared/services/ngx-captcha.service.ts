import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export declare class NgxCaptchaService {
    captchSource: BehaviorSubject<any>;
    captchStatus: import("rxjs").Observable<any>;
    constructor();
    setCaptchaStatus(code: any): void;
}