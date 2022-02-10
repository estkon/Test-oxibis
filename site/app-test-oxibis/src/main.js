import Vue from 'vue'
import App from './App.vue' 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Importer les fichiers CSS Bootstrap et BootstrapVue (l'ordre est important) 
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'

// Rendre BootstrapVue disponible tout au long de votre projet
Vue.use(BootstrapVue)
// Installez éventuellement le plugin de composants d'icônes BootstrapVue 
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
