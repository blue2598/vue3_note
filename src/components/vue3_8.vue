<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:09:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-30 15:53:58
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_8.vue
-->
<template>
    <h1>生命周期</h1>
    <ul>
        <li>按vue2的写法但是beforeDestory=>beforeUnmount;destoryed=>beforeUnmounted</li>
        <li>组合式api的写法,写在setup里面</li>
    </ul>
    <!--  -->
    <vue3_8_child v-if="isShowChild"></vue3_8_child>
    <button @click="isShowChild=!isShowChild">切换子组件显示隐藏</button>
    <br>
    <vue3_8_child_hook></vue3_8_child_hook>
</template>

<script>
    import vue3_8_child from './vue3_8_child.vue'
    import vue3_8_child_hook from './vue3_8_child_hook.vue'
    import {
        ref,
    } from 'vue';
    export default {
        name: 'App',
        components: {
            vue3_8_child,
            vue3_8_child_hook
        },
        setup() {
            let num = ref(0);
            let isShowChild = ref(true);
            return {
                num,
                isShowChild
            }
        }
    }
</script>

<style>
</style>