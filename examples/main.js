import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import iView from 'iview';

import Index from '../src/index';
Vue.use(iView);
// import locale from '../src/locale/lang/zh-CN';

Vue.use(VueRouter);
Vue.use(Index);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    esModule: false,
    routes: [{
            path: '/cart',
            component: (resolve) => require(['./routers/cart.vue'], resolve)
        }
    ]
});

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
