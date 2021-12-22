<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 16:15:40
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-01 15:54:03
 * @FilePath: \notejse:\Demo\vue3_note\src\App.vue
-->
<template>
  <!-- Vue3组件里面可以没有根标签 -->
  <div class="child">
    <vue3_14></vue3_14>
  </div>
</template>

<script>
  import vue3_14 from "./components/vue3_14.vue"
  export default {
    name: 'App',
    components: {
      vue3_14,
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>