<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-26 17:03:58
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-30 15:49:14
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_8_child.vue
-->
<template>
    <div class="child">
        <p>{{num}}</p>
        <button @click="num++">num++</button>
        <div>打开控制台</div>
        <hr>
        <p>这里的页面显示时监听点击，组件销毁的时候移出监听，可以使用自定义hook函数</p>
        <div>当前点击的鼠标坐标：{{point.x}}--{{point.y}}</div>
    </div>
</template>

<script>
    import {
        ref,
        reactive,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted,
    } from 'vue';
    export default {
        setup(props, context) {
            console.log("***setup***");
            // 这里面没有beforeCreate和created
            let num = ref(1);
            let point = reactive({
                x: 0,
                y: 0
            })
            onBeforeMount(() => {
                console.log("***onBeforeMount***");
                window.addEventListener('click', showPoint)
            })
            onMounted(() => {
                console.log("***onMounted***");
            })
            onBeforeUpdate(() => {
                console.log("***onBeforeUpdate***");
            })
            onUpdated(() => {
                console.log("***onUpdated***");
            })
            onBeforeUnmount(() => {
                console.log("***onBeforeUnmount***");
            })
            onUnmounted(() => {
                console.log("***onUnmounted***");
                window.removeEventListener('click', showPoint)
            })

            function showPoint(event) {
                point.x = event.pageX;
                point.y = event.pageY;
                console.log(point);
            }
            return {
                num,
                point
            }
        }
    }
</script>

<style>
    .child {
        padding: 10px;
        background-color: rgb(218, 204, 12);
    }
</style>