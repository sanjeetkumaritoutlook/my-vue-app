//this file is not used,
//instead src/web-components folder is used to split the web component build into its own script with unique output  to make webpack work
import { defineCustomElement } from 'vue'
import MyButton from './components/MyButton.ce.vue'

// Convert Vue component to Web Component
const MyButtonWC = defineCustomElement(MyButton)

// Register it
customElements.define('vue-button', MyButtonWC)
