var NGXSTORE_CONFIG = {
    prefix: 'nvt_',      // default: 'ngx_'
    clearType: 'prefix', // default: 'prefix'
    mutateObjects: true, // default: true
    debugMode: false,    // you can enable debug logs if you ever meet any bug to localize its source
    cookiesScope: '',    // what you pass here will prepend base domain e.g. "." => .domain.com (all subdomains)
    cookiesCheckInterval: 0, // number in ms describing how often cookies should be checked for changes, 0 = disabled
    previousPrefix: 'angular2ws_', // you have to set it only if you were using custom prefix in old version ('angular2ws_' is a default value)
  };