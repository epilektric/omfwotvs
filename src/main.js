// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)


// Directives
Vue.directive('focus', { // use like v-focus
    inserted: function (el) {
        el.readOnly = true;
        el.focus();
        el.readOnly = false;
    }
})

// Accepts a percent to reduce the element down to.
// For example, v-autoheight="80" will display it at 80% width, or, 20% smaller.
Vue.directive('autoheight', {
    bind: function (el, binding, vnode) {
        var s = JSON.stringify

        // Other available bindings
        // s(binding.name)
        // s(binding.value)
        // s(binding.expression)
        // s(binding.arg)
        // s(binding.modifiers)
        // Object.keys(vnode).join(', ')

        Vue.nextTick(function () { // Wait for DOM
            el.style.height = Math.round((9/16) * el.offsetWidth) + 'px'
            console.log(el.offsetWidth);
            if(typeof s(binding.value) !== 'undefined') {
                var w = Math.round(el.offsetWidth * (s(binding.value)/100));
                var h = Math.round(el.offsetHeight * (s(binding.value)/100));
                el.style.width = w + 'px';
                el.style.height = h + 'px';

                /* The .player class in the Television.vue component should
                handle this but it isn't. So we'll just do it this way. */
                if(el.className == 'player') el.style.margin = '1em';
            }

        })
    }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
