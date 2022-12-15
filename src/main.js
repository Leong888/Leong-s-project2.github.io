// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import BaiduMap from "vue-baidu-map";
import axios from "axios";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
import gifshot from "gifshot";

Vue.prototype.$ajax = axios;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

Vue.use(router);
Vue.use(gifshot);
Vue.use(ElementUI);
Vue.use(BaiduMap, {
  ak: "WbMC9qc2QtiyHFX8XCmZCO80WBOWuHQ0"
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
  
});



