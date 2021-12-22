<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:09:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-01 15:00:10
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_13.vue
-->
<template>
    <h1>customRef自定义ref</h1>
    <ol>
        <li>实现举例(延迟一秒展示输入的数据)：</li>
        <li>并防抖</li>
    </ol>
    <input type="text" v-model="keyword">
    <h3>{{keyword}}</h3>
</template>

<script>
    import {
        customRef
    } from 'vue';
    export default {
        name: 'App',
        setup() {
            let keyword = myRef("hello");

            function myRef(value) {
                let timer;
                return customRef((track, trigger) => {
                    return {
                        get() {
                            console.log("有人读取了属性");
                            track(); //第三步捕获并重新渲染模板
                            return value;
                        },
                        set(val) {
                            // 防抖
                            clearTimeout(timer);
                            console.log("有人修改了属性");
                            // 延迟一秒显示修改后的
                            timer = setTimeout(() => {
                                value = val; //第一步：将修改后的值赋值给原来属性\
                                trigger(); //第二步通知vue重新解析模板
                            }, 500)
                        }
                    }
                })
            }

            return {
                keyword
            }
        }
    }
</script>

<style>
</style>