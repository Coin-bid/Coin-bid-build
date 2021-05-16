import devConfig from './config.dev';
import testConfig from './config.test';
import prodConfig from './config.prod';

const config = {
  storeVersion: '1.0.0',
};

if (process.env.BUILD_ENV === 'development') {
  Object.assign(config, devConfig);
} else if (process.env.BUILD_ENV === 'test') {
  Object.assign(config, testConfig);
} else {
  Object.assign(config, prodConfig);
}

export default config;
