// @ts-ignore
export function EnvServiceFactory() {

  (window as any).__env  = {
    production: true,
    domain: '',
    endPoint: 'https://omega.devnt.ssidevops.com',
    urlClientInfoMicrofront: 'https://view360.devnt.ssidevops.com/client-info-microfront-app/main.js',
    urlPersonInfoMicrofront: 'https://view360.devnt.ssidevops.com/person-info-microfront-app/main.js',
    urlOrderManagementMicrofrontApp: 'https://view360.devnt.ssidevops.com/order-management-microfront-app/main.js',
    urlCommonsMicrofront: 'https://view360.devnt.ssidevops.com/commons-microfront-app/main.js',
    sessionHub: 'https://session-hub-web.devnt.ssidevops.com',
    urlVasMicrofront: 'https://view360.devnt.ssidevops.com/vas-microfront-app/main.js',
    urlDashboardMicrofront: 'https://view360.devnt.ssidevops.com/dashboard-microfront-app/main.js',
    urlMgd: 'https://view360.salamancasolutions.com/mgdv2/mgd'
  };

    const env : any = {};
    const browserWindow : any = window || {};
   
    const browserWindowEnv : any = browserWindow['__env'] || {};
    for (const key in browserWindowEnv) {
      if (browserWindowEnv.hasOwnProperty(key)) {
  
        env[key] = (window as any)['__env'][key];
      }
    }
    return env;
  }