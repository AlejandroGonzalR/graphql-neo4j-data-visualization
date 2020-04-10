import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import apolloProvider from "./graphql/apollo/apolloProvider";
import router from './router';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false;

Vue.use(Loading, {
  color: '#f2ab3b',
  loader: 'spinner',
  width: 80,
  height: 80,
  title: "Cargando..."
});

new Vue({
  vuetify,
  apolloProvider,
  router,
  render: h => h(App)
}).$mount('#app');
