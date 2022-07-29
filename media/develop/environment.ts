// @ts-ignore
import {EnvServiceFactory} from '../builder';
const vars = EnvServiceFactory();
export const environment = {
  production: false,
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
