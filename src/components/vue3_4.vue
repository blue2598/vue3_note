<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:09:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-26 17:11:15
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_4.vue
-->
<template>
    <h1>setup函数注意事项</h1>
    <ul>
        <li>setup()在beforeCreate之前调用,并且只调用一次</li>
        <li>this指向是undefined</li>
        <li>setup()接收两个参数props和context上下文</li>
    </ul>
    <vue3_4_child name="ysl" @childEmit="handleClick"></vue3_4_child>
</template>

<script>
    import
    vue3_4_child
    from './vue3_4_child.vue'
    export default {
        name: 'App',
        components: {
            vue3_4_child
        },
        beforeCreate() {
            console.log("beforeCreate");
        },
        setup() {
            console.log("setup");

            function handleClick(value) {
                console.log("父组件接收到了值：", value);
            }
            return {
                handleClick
            }
        }
    }
</script>

<style>
</style>