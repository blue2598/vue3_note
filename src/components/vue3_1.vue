<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:07:03
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-25 17:20:18
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_1.vue
-->

<template>
    <!-- Vue3组件里面可以没有根标签 -->
    <h1>setup配置</h1>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <button @click="sayName">显示</button>
    <button @click="test">测试一下在vue2配置读setup配置</button>
    <button @click="testVue">测试一下在setup里面读vue2配置</button>
</template>

<script>
    export default {
        name: 'App',
        // 不建议混合使用配置
        data() {
            sex: "女"
        },
        methods: {
            test() {
                console.log("读setup里面的配置" + this.name);
            }
        },
        setup() {
            // 是个函数（不能是async函数）,data,methods配置项都放在这里面

            /*setup的两种返回值 1、对象；2、函数*/
            console.log(this);
            let name = "ysl";
            let age = 18;

            function sayName() {
                alert(name + ":" + age + "岁");
            }

            function testVue() {
                console.log(this.test);
                console.log("读data里面的配置" + this.sex);
            }
            // 返回一个对象(常用)
            return {
                name,
                age,
                sayName,
                testVue,
            }
            // 需要引入h函数：import {h} from 'vue
            // 返回一个渲染函数：替换掉页面上内容
            // return () => h('h1', '返回值')
        }
    }
</script>

<style>
</style>