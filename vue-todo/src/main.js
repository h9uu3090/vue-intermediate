import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/store' 

createApp(App).use(store).mount('#app')

/* 강의 내용..
createApp(App).mount('#app')
new Vue({
    el : '#app',
    store,
    render: h => h(App)
})
*/