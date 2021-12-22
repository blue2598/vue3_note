<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:09:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-01 14:11:32
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_11.vue
-->
<template>
    <h1>readonly与shallowReadonly</h1>
    <ol>
        <li>readonly：只读</li>
        <li>shallowReadonly::浅层次只读</li>
    </ol>
    {{person.name}}--{{person}}
    <br>
    {{info.job}}--{{info.salary}}-{{info.a.b.c}}-{{info}}
    <button @click="changeInfo">更改信息</button>
</template>

<script>
    import {
        reactive,
        readonly,
        shallowReadonly
    } from 'vue';
    export default {
        name: 'App',
        setup() {
            let person = reactive({
                name: "ysl",
                age: 18,
            })
            person = readonly(person);
            let info = reactive({
                job: "前端开发",
                salary: 3000,
                a: {
                    b: {
                        c: 1,
                        d: "这是d"
                    }
                }
            });
            info = shallowReadonly(info);

            function changeInfo() {
                // 直接输出Proxy的实例对象
                alert("用shallowReadonly定义的info，可以更改深层次的属性")
                alert("用readonly定义的person，只读，更改不生效")
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