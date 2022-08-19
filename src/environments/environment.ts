// @ts-ignore
import {EnvServiceFactory} from '../builder';
const vars = EnvServiceFactory();
export const environment = {
  production: false,

  url_api_jsonplaceholder: vars.url_api_jsonplaceholder,
  url_api_simplekart: vars.url_api_simplekart,
  url_api_simplekart_mock_server: vars.url_api_simplekart_mock_server,

  AVLTokenKey : vars.AVLTokenKey ,
  AVLTokenValue : vars.AVLTokenValue ,
  AVLApiUrl : vars.AVLApiUrl ,

  SSITokenUsername: vars.SSITokenUsername,
  SSITokenPassword: vars.SSITokenPassword,

  EmailApiUrl: vars.EmailApiUrl,
  ClientValidationUrl: vars.ClientValidationUrl,

  endPoint: vars.endPoint,
  urlPersonInfoMicrofront: vars.urlPersonInfoMicrofront,
  urlCardPayMicrofrontApp: vars.urlCardPayMicrofrontApp,
  urlMgd: vars.urlMgd,

};
