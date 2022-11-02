import { createApp } from 'vue'
import App from './App.vue'
// import components from "./components/UI"
import MyButton from "./components/UI/MyButton"
import MyInput from "./components/UI/MyInput"
import MySelect from "./components/UI/MySelect"
import ModalWindow from "./components/UI/ModalWindow"
import router from "./router/router"

const app = createApp(App);
app.component('my-button', MyButton)
app.component('my-input', MyInput)
app.component('my-select', MySelect)
app.component('modal-window', ModalWindow)
app.use(router)
// components.forEach(component => app.component(component.name, component))
app.mount('#app')
