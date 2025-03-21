import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';

// Global styles
import '@/assets/styles/app.scss';
import '@/assets/styles/expand.scss';
import '@/assets/styles/svg.scss';

// Setup @vueuse/head for meta management
const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);

app.mount('#app');
