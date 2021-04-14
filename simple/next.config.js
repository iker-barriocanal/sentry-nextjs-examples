const {
  VERCEL_GITHUB_COMMIT_SHA,
  VERCEL_GITLAB_COMMIT_SHA,
  VERCEL_BITBUCKET_COMMIT_SHA,
  SENTRY_URL,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
} = process.env;

const COMMIT_SHA =
  VERCEL_GITHUB_COMMIT_SHA ||
  VERCEL_GITLAB_COMMIT_SHA ||
  VERCEL_BITBUCKET_COMMIT_SHA;

const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const fs = require('fs');

// We require this to fake that our plugin matches the next version
function replaceVersion() {
  const package = require('./package.json');
  if (package && package.dependencies && package.dependencies.next) {
    const packagePluginPath = `./node_modules/@sentry/next-plugin-sentry/package.json`;
    const packagePlugin = require(packagePluginPath);
    packagePlugin.version = package.dependencies.next;
    fs.writeFileSync(packagePluginPath, JSON.stringify(packagePlugin));
  } else {
    console.error(`Can't find 'next' dependency`);
  }
}
replaceVersion();

const basePath = '';

module.exports = {
  experimental: { plugins: true },
  plugins: ['@sentry/next-plugin-sentry'],
  productionBrowserSourceMaps: true,
  webpack: (config, { dev }) => {
    config.devtool = 'source-map';
    config.plugins.push(
      new SentryWebpackPlugin({
        release: COMMIT_SHA,
        url: SENTRY_URL,
        org: SENTRY_ORG,
        project: SENTRY_PROJECT,
        authToken: SENTRY_AUTH_TOKEN,
        configFile: 'sentry.properties',
        // Webpack specific configuration
        stripPrefix: ['webpack://_N_E/'],
        urlPrefix: `~${basePath}/_next`,
        include: '.next/',
        ignore: ['node_modules', 'webpack.config.js'],
        dryRun: dev,
      }),
    );
    return config;
  },
  basePath,
};
