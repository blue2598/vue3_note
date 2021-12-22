<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:09:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-29 15:26:56
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_5.vue
-->
<template>
    <h1>计算属性computed的使用</h1>
    <ul>
        <li>可以像vue2那样直接写配置项</li>
    </ul>
    <input type="text" v-model="person.firstName">
    <br>
    <br>
    <input type="text" v-model="person.lastName">
    <br>
    <br>
    <!-- <span>全名：{{fullName}}</span> -->
    <span>全名：{{person.fullName}}</span>
</template>

<script>
    import {
        reactive,
        computed
    } from 'vue';
    export default {
        name: 'App',
        setup() {
            let person = reactive({
                firstName: "杨",
                lastName: "双林"
            });
            // let fullName = computed(() => {
            //     return person.firstName + "--" + person.lastName
            // })
            // definproperty只能监测到改查
            // Proxy可以监测到对数据的增删改查
            person.fullName = computed(() => {
                return person.firstName + "--" + person.lastName
            })
            return {
                person
            }
        }
    }
</script>

<style>
</style>