const { defineConfig } = require('@vue/cli-service');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/my-vue-app/' // Replace 'REPO_NAME' with your repository name
  : '/'
})
