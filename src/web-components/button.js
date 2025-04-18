import { defineCustomElement } from 'vue'
import MyButton from '../components/MyButton.ce.vue'

const MyButtonElement = defineCustomElement(MyButton)
customElements.define('vue-button', MyButtonElement)
