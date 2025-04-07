import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Theme from '@primeuix/themes/aura';

var app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Theme
    }
});
app.mount('#app');
