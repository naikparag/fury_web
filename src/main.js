// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Buefy)

let myMixin = {
  methods: {
    show_toast: function (msg) {
      this.$buefy.toast.open('things went crazy. try again later.')
    }
  }
}

Vue.mixin(myMixin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
