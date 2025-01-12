import { createApp } from 'vue'
import App from './App.vue'
// Only works if using in-browser compilation.
// If using build tools, see config examples below.
//app.config.compilerOptions.isCustomElement = (tag) => tag.includes('-');
createApp(App).config.compilerOptions.isCustomElement = (tag) => tag.includes('-');

createApp(App).mount('#app')
