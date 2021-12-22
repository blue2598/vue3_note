<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:09:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-01 14:30:09
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_12.vue
-->
<template>
    <h1>toRaw与markRaw</h1>
    <ol>
        <li>toRaw：将一个由reactive生成的<b>响应式对象</b>转为<b>普通对象</b></li>
        <li>markRaw：标记一个属性为非响应式的</li>
    </ol>
    {{person.name}}--{{person}}
    <br>
    {{person.habit}}
    <br>
    <button @click="showRaw">显示最原始的数据</button>
    <button @click="add">person加habit属性</button>
    <button @click="update">修改habit属性</button>
</template>

<script>
    import {
        markRaw,
        reactive,
        toRaw,
    } from 'vue';
    export default {
        name: 'App',
        setup() {
            let person = reactive({
                name: "ysl",
                age: 18,
            })

            function showRaw() {
                let p = toRaw(person);
                console.log(person);
                console.log(p);
            }

            function add() {
                let habit = ["学习", "学习"];
                person.habit = markRaw(habit);
            }

            function update() {
                person.habit[1] = "玩游戏";
                alert("数据被改了但不是响应式的", person.habit)
            }
            return {
                person,
                showRaw,
                add,
                update
            }
        }
    }
</script>

<style>
</style>