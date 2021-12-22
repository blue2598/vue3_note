<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:09:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-01 14:06:43
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_10.vue
-->
<template>
    <h1>shallowRef与shallowReactive</h1>
    <p>toRef:</p>
    <ol>
        <li>shallowReactive：只处理对象最外层属性的响应式（浅响应式）</li>
        <li>shallowRef：只处理基本类型数据的响应式，不进行对象的响应式处理</li>
    </ol>
    {{person.name}}--{{person}}
    <br>
    {{info.job}}--{{info.salary}}-{{info.a.b.c}}-{{info}}
    <button @click="changeInfo">更改信息</button>
</template>

<script>
    import {
        shallowRef,
        shallowReactive
    } from 'vue';
    export default {
        name: 'App',
        setup() {
            let person = shallowRef({
                name: "ysl",
                age: 18,
            })
            let info = shallowReactive({
                job: "前端开发",
                salary: 3000,
                a: {
                    b: {
                        c: 1,
                        d: "这是d"
                    }
                }
            });

            function changeInfo() {
                // 直接输出Proxy的实例对象
                alert("内部属性数据更改了，但是不是响应式的")
                info.a.b.c = 666;
                info.a.b.d = "更改了d";
                person.name = "yyy";
            }
            return {
                info,
                person,
                changeInfo,
            }
        }
    }
</script>

<style>
</style>