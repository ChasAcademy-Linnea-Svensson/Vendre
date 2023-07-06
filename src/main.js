import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGlobe, faBars, faX } from '@fortawesome/free-solid-svg-icons';

library.add(faGlobe, faBars, faX);

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount('#app');
