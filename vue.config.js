const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    externals: {
      '@achrinza/node-ipc': 'commonjs @achrinza/node-ipc'  // or 'false' to completely exclude
    }
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/my-vue-app/' // Replace 'REPO_NAME' with your repository name
  : '/'
})
