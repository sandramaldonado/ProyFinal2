// @ts-ignore
export function EnvServiceFactory() {
  const env = {};
  const browserWindow = window || {};
  const browserWindowEnv = browserWindow['__env'] || {};
  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty(key)) {
      env[key] = window['__env'][key];
    }
  }
  return env;
}
