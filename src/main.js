/*
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 16:15:40
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-25 16:21:03
 * @FilePath: \notejse:\Demo\vue3_note\src\main.js
 */
// 引入的不再是Vue构造函数，引入的是名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
// 创建应用实例对象--app(类似于之前Vue2中的vm,，但是比vm更轻);
// 挂载
const app = createApp(App)
app.mount('#app');
console.log(app);

// const vm = new Vue({
//     render:h=>h()
// }).mount("#app")
