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
  SSIAuthApiUrl         : 'https://omega.devnt.ssidevops.com/auth/login',

  CheckCoverageApiUrl : 'https://omega.devnt.ssidevops.com/order/address/customerSite',
  EmailApiUrl           : 'http://10.45.56.62:3800/api/mastersales/sendEmail',
  ClientValidationUrl   : 'http://localhost:3000/client',
  ScoringApiUrl         : 'https://omega.devnt.ssidevops.com/rules/scoring/scoringEvaluation',
  CatalogProductApiUrl  : 'https://omega.devnt.ssidevops.com/product/plans',
  MovilNumberListApiUrl : 'https://omega.devnt.ssidevops.com/sales/find/phone/numbers' ,
  ClientSearchApiUrl    : 'https://omega.devnt.ssidevops.com/crm360/client/person/search',
  BreApiUrl             : 'https://omega.devnt.ssidevops.com/rules',

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
