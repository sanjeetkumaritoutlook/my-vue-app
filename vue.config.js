const { defineConfig } = require('@vue/cli-service');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const isAnalyzeMode = process.env.ANALYZE === 'true';
module.exports = defineConfig({
  parallel: true,
  pages: {
    // Main Vue app
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },

    // Web Component entry
    'vue-web-component': {
      entry: 'src/web-components/button.js',
      filename: 'vue-web-component.html',
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .uses.delete('cache-loader'); // Removes the cache-loader for Vue files
  },
  configureWebpack: {
    output: {
      filename: '[name].js', // important to avoid filename conflict
    },
    plugins: isAnalyzeMode ? [new BundleAnalyzerPlugin()] : [],
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? './' // Replace 'REPO_NAME' with your repository name
  : './'
})
