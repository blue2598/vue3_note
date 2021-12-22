<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:09:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-26 16:58:55
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_3.vue
-->
<template>
    <h1>使用reactive函数创建响应式数据(对象类)</h1>
    <p>{{name}}</p>
    <p>{{age}}</p>
    {{info.job}}--{{info.salary}}-{{info.a.b.c}}
    <button @click="changeInfo">更改信息</button>
    <ul>
        <li v-for="(item,index) in goods" :key="index">
            <p>商品名称:{{item.name}}</p>
            <p>商品价格:{{item.price}}</p>
        </li>
    </ul>
    <ul>
        <li v-for="(item,index) in hobby" :key="index">
            <p>{{item}}</p>--
        </li>
    </ul>
</template>

<script>
    import {
        ref,
        reactive
    } from 'vue';
    export default {
        name: 'App',
        setup() {
            let age = ref(18);
            // 不能用reactive函数创建一个基本类型数据
            let name = reactive("ysl"); //value cannot be made reactive: ysl;
            let info = reactive({
                job: "前端开发",
                salary: 3000,
                a: {
                    b: {
                        c: 1
                    }
                }
            });
            let hobby = reactive(["抽烟", "喝酒", "烫头"])
            let goods = reactive([{
                name: "手套",
                price: 56
            }, {
                name: "围巾",
                price: 109
            }])

            function changeInfo() {
                // 直接输出Proxy的实例对象
                name = "yyy";
                goods[0].name = "拖鞋";
                info.a.b.c = 666
                console.log(name);
                console.log(info);
                console.log(goods);
                // 可以通过下标直接改数组
                hobby[0] = "学习"
            }
            return {
                name,
                age,
                changeInfo,
                goods,
                info,
                hobby
            }
        }
    }
</script>

<style>
</style>