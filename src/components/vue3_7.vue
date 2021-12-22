<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:09:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-29 16:54:37
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_7.vue
-->
<template>
    <h1>监听属性watchEffect</h1>
    <ul>
        <li>函数内用到谁，监听谁</li>
    </ul>
    <span>{{num}}</span>
    <button @click="num++">加一</button>
    <br>
    <span>{{msg}}</span>
    <button @click="msg+='!'">msg+!</button>
    <br>
    <span>姓名：{{person.name}}</span>
    <span>年龄：{{person.age}}</span>
    <span>工作：{{person.job.name}}</span>
    <span>薪资：{{person.job.salary}}</span>
    <span>学校：{{person.job.school.name}}</span>
    <br>
    <button @click="person.name+='*'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.salary++">涨薪吧</button>
    <button @click="person.job.school.name+='edu'">改变学校名</button>
</template>

<script>
    import {
        ref,
        reactive,
        watch,
        watchEffect
    } from 'vue';
    export default {
        name: 'App',
        setup() {
            let num = ref(0);
            let msg = ref("你好");
            let person = reactive({
                name: "ysl",
                age: 18,
                job: {
                    name: "前端开发",
                    salary: 3000,
                    school: {
                        name: "AHXH"
                    }
                }
            })
            watch(person, (newV, oldV) => {
                // 这里的newV和oldV一样(坑)
                console.log("监听person", newV, oldV);
            })

            watchEffect(() => {
                const x = person.name;
                console.log("监听到了person.name");
            })
            return {
                num,
                msg,
                person,
            }
        }
    }
</script>

<style>
</style>