import {EnvServiceFactory} from '../builder';
const vars = EnvServiceFactory();
export const environment = {
  production: false,

  url_api_jsonplaceholder: 'https://jsonplaceholder.typicode.com',
  url_api_simplekart:'https://simplekart.postman.com',
  url_api_simplekart_mock_server:'https://f0be739e-4263-42e4-b8a5-c00ed2e46fc6.mock.pstmn.io',

  AVLTokenKey :'x-access-token',
  AVLTokenValue :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDhhNGRlNmM1OTgwYTI5MzRjNTVmZDMiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IlNVUEVSQURNSU4iLCJpYXQiOjE1NjkzNDc5NzZ9.ac-KlxXxEijwGtI141jp6bA1_8CUFrFcdvysur8mz9Y',
  AVLApiUrl : 'http://gis.nuevatel.com/backcustomersite/api/customersite',

  SSITokenUsername : 'landing',
  SSITokenPassword : '3X4E+U7d1m1XprRamjfaRg==',
  SSIAuthApiUrl : 'https://omega.devnt.ssidevops.com/auth/login',

  EmailApiUrl :  'http://localhost:3800/api/mastersales/sendEmail',

  ClientValidationUrl : 'http://localhost:3000/client',

  ScoringApiUrl : 'https://omega.devnt.ssidevops.com/rules/scoring/scoringEvaluation',

  CatalogProductApiUrl : 'https://omega.devnt.ssidevops.com/product/plans',

  MovilNumberListApiUrl : 'https://omega.devnt.ssidevops.com/sales/find/phone/numbers' ,

  ClientSearchApiUrl : 'https://omega.devnt.ssidevops.com/crm360/client/person/search',

  BreApiUrl  : 'https://omega.devnt.ssidevops.com/rules',

  domain: vars.domain,
  endPoint: vars.endPoint,
  urlClientInfoMicrofront: vars.urlClientInfoMicrofront,
  urlPersonInfoMicrofront: vars.urlPersonInfoMicrofront,
  urlOrderManagementMicrofrontApp: vars.urlOrderManagementMicrofrontApp,
  urlCommonsMicrofront: vars.urlCommonsMicrofront,
  sessionHub: vars.sessionHub,
  urlVasMicrofront: vars.urlVasMicrofront,
  urlDashboardMicrofront: vars.urlDashboardMicrofront,
  urlCardPayMicrofrontApp: vars.urlCardPayMicrofrontApp,
  urlMgd: vars.urlMgd,
  applicationId: 0

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
