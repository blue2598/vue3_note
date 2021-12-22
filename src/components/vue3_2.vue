<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:09:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-26 14:40:17
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_2.vue
-->
<template>
    <h1>使用ref函数创建响应式数据</h1>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <button @click="changeInfo">更改信息</button>
    <ul>
        <li v-for="(item,index) in goods" :key="index">
            <p>商品名称:{{item.name}}</p>
            <p>商品价格:{{item.price}}</p>
        </li>
    </ul>
</template>

<script>
    import {
        ref
    } from 'vue';
    export default {
        name: 'App',
        setup() {
            let a = 14;
            // 需要引入ref
            // 使用ref实现数据响应式，原理也是defineProperty(getter,setter)
            let name = ref("ysl");
            let age = ref(18);
            let info = ref({
                job: "前端开发",
                salary: 3000
            });
            let goods = ref([{
                name: "手套",
                price: 56
            }, {
                name: "围巾",
                price: 109
            }])

            function changeInfo() {
                // 数据劫持是实现响应式的根基
                // 基本类型数据响应式仍然是靠Object.defineProperty()de get set 完成的
                // name RefImpl的实例化对象 （getter setter） 
                // info RefImpl 实例对象 （getter setter）;value是Proxy(ES6)代理对象
                console.log(info);
                console.log(name.value);
                name.value = "yyy";
                age.value = 19;
                // name = "yyy";
                // age = 23;
                // 改变数组
                console.log(goods);
                goods.value[0].price = 66;
            }
            // 返回一个对象(常用)
            return {
                name,
                age,
                changeInfo,
                goods,
                info
            }
        }
    }
</script>

<style>
</style>