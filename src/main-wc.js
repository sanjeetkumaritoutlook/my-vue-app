import { defineCustomElement } from 'vue'
import MyButton from './components/MyButton.ce.vue'

// Convert Vue component to Web Component
const MyButtonWC = defineCustomElement(MyButton)

// Register it
customElements.define('vue-button', MyButtonWC)
