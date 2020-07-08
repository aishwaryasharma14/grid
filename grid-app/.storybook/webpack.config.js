const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = async ({ config }) => {
  const mainFields = [
    'es2015',
    'browser',
    'module',
    'main',
  ];

  config.resolve.plugins = [new TsconfigPathsPlugin({
    configFile: 'tsconfig.app.json',
    mainFields
  })];

  config.resolve.mainFields = mainFields;

  return config;
};
