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

export const cities = [
    { valueField: 'BEN', displayValue: 'BENI', latitude : -14.831794,  longitude : -64.901793 },//-14.831794, -64.901793
    { valueField: 'CBA', displayValue: 'COCHABAMBA', latitude : -17.393688,  longitude : -66.157119 },//-17.393688, -66.157119
    { valueField: 'LPZ', displayValue: 'LA PAZ', latitude : -16.495640,  longitude : -68.133680 },//-16.495640, -68.133680
    { valueField: 'ORU', displayValue: 'ORURO', latitude : -17.969870,  longitude : -67.114649 },//-17.969870, -67.114649
    { valueField: 'PAN', displayValue: 'PANDO', latitude : -11.023511,  longitude : -68.766225 },//-11.023511, -68.766225
    { valueField: 'POT', displayValue: 'POTOSI', latitude : -19.572060,  longitude :  -65.755735 }, //-19.572060, -65.755735
    { valueField: 'SCZ', displayValue: 'SANTA CRUZ', latitude : -17.783558,  longitude : -63.182115 }, //-17.783558, -63.182115
    { valueField: 'SCR', displayValue: 'SUCRE', latitude : -19.027878,  longitude : -65.262753 },//-19.027878, -65.262753
    { valueField: 'TRJ', displayValue: 'TARIJA', latitude : -21.538731,  longitude : -64.722486 }//-21.538731, -64.722486
  ];