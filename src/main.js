import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/app.scss';
import './assets/botoes.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

app.use(router).mount('#app');
