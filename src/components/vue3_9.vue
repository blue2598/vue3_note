<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:09:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-01 13:50:32
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_9.vue
-->
<template>
    <h1>toRef和toRefs</h1>
    <p>toRef:</p>
    <ol>
        <li>作用：创建一个ref对象，其value值指向另一个对象中的某个属性</li>
        <li>语法：const name = toRef(person,'name')</li>
        <li>应用：要将响应式对象中的某个属性单独提供给外部使用时</li>
        <li>toRefs与toRef功能一致，但是refs可以批量创建多个ref对象，语法toRefs(person)</li>
    </ol>
    <p>{{name}}</p>
    <p>{{age}}</p>
    {{job}}--{{salary}}-{{a.b.c}}-{{info}}
    <br>
    {{d}}
    <button @click="changeInfo">更改信息</button>
</template>

<script>
    import {
        ref,
        toRef,
        toRefs,
        reactive
    } from 'vue';
    export default {
        name: 'App',
        setup() {
            // 不能用reactive函数创建一个基本类型数据
            let info = reactive({
                name: "ysl",
                age: 18,
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
                name = "yyy";
                info.a.b.c = 666;
                info.a.b.d = "更改了d"
            }
            return {
                info,
                ...toRefs(info),
                d: toRef(info.a.b, "d"),
                changeInfo,
            }
        }
    }
</script>

<style>
</style>