
import {EnvServiceFactory} from '../builder';
const vars = EnvServiceFactory();
console.log("vars",vars)
export const environment = {
  production: false,
 
  url_api_jsonplaceholder: 'https://jsonplaceholder.typicode.com',
  url_api_simplekart:'https://simplekart.postman.com',
  url_api_simplekart_mock_server:'https://f0be739e-4263-42e4-b8a5-c00ed2e46fc6.mock.pstmn.io',
  
  domain: vars.domain,
  endPoint: vars.endPoint,
  urlClientInfoMicrofront: vars.urlClientInfoMicrofront,
  urlPersonInfoMicrofront: vars.urlPersonInfoMicrofront,
  urlOrderManagementMicrofrontApp: vars.urlOrderManagementMicrofrontApp,
  urlCommonsMicrofront: vars.urlCommonsMicrofront,
  sessionHub: vars.sessionHub,
  urlVasMicrofront: vars.urlVasMicrofront,
  urlDashboardMicrofront: vars.urlDashboardMicrofront,
  applicationId: 2
 
};
