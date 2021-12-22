<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:09:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-29 16:11:32
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_6.vue
-->
<template>
    <h1>监听属性watch</h1>
    <ul>
        <li>可以像vue2那样直接写配置项</li>
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
        watch
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
            // 情况一：监视ref所定义的响应式数据
            watch(num, (newV, oldV) => {
                console.log("监听num", newV, oldV);
            })
            // 情况二：监视多个(也可以写多个watch函数)
            // 第一个配置项是监视的数据数组，第二个是回调，第三个是配置项
            watch([num, msg], (newV, oldV) => {
                // 这里是数组
                console.log("监听多个值", newV, oldV);
            }, {
                immediate: true,
                deep: true
            })

            // 情况三：监视reactive定义的对象,此处无法正确获得oldV
            // 并且强制开启deep监视(无法通过deep:false改变)(坑)
            watch(person, (newV, oldV) => {
                // 这里的newV和oldV一样(坑)
                console.log("监听person", newV, oldV);
            })
            // 情况四，监视reactive定义的响应式数据中的单个属性值=>写成函数形式
            watch(() => person.name, (newV, oldV) => {
                // 
                console.log("监听person里面的name属性", newV, oldV);
            })
            // 情况五，监视reactive定义的响应式数据中的多个属性值=>写成函数形式数组
            watch([() => person.job.name, () => person.job.salary], (newV, oldV) => {
                //
                console.log("监听person里面的job属性中name和salary", newV, oldV);
            })
            // 特殊情况，监听的某个属性仍然是对象,需要配置deep:true
            watch([() => person.job.school, () => person.job.salary], (newV, oldV) => {
                //
                console.log("监听person里面的school", newV, oldV);
            }, {
                deep: true
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