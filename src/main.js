import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import { auth } from './firebase';

auth.onAuthStateChanged((user) => {
    if (user) {
        const userDetectado = {
            email: user.email,
            uid: user.uid,
        };
        store.dispatch('getDetectarUsuario', userDetectado);
    } else {
        store.dispatch('getDetectarUsuario', user);
    }
    new Vue({
        router,
        store,
        render: (h) => h(App),
    }).$mount('#app');

});

