import { HttpHeaders } from '@angular/common/http';
export const httpPostOptions = {
    headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    })
};

export const httpGetOptions = {
    headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Access-Control-Allow-Origin':'*'
    })
};