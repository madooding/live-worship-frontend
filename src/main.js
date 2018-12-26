/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRx from 'vue-rx'
import rxjs from 'rxjs'
import store from '@/store'
// import firebase from 'firebase'

Vue.config.productionTip = false

// import '!script-loader!jquery/dist/jquery.min.js'
import '!style-loader!css-loader!./assets/css/ionicons.min.css'
import '!style-loader!css-loader!sass-loader!./assets/scss/default.scss'

// var config = {
//   apiKey: "AIzaSyDP0dHF88UYhGhaTnEzLVWN9-C2MdKh_Js",
//   authDomain: "easiest-live-worship.firebaseapp.com",
//   databaseURL: "https://easiest-live-worship.firebaseio.com",
//   projectId: "easiest-live-worship",
//   storageBucket: "",
//   messagingSenderId: "8116667628"
// };

// firebase.initializeApp(config);

Vue.use(VueRx, rxjs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
