const { defineConfig } = require('@vue/cli-service');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const isAnalyzeMode = process.env.ANALYZE === 'true';
module.exports = defineConfig({
  parallel: true,
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('cache-loader')
      .loader('cache-loader')
      .end();
  },
  configureWebpack: {
    plugins: isAnalyzeMode ? [new BundleAnalyzerPlugin()] : [],
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/my-vue-app/' // Replace 'REPO_NAME' with your repository name
  : '/'
})
