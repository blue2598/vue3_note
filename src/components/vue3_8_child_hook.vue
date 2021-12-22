<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-26 17:03:58
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-30 16:09:52
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_8_child_hook.vue
-->
<template>
    <div class="child">
        <p>这里的页面显示时监听点击，组件销毁的时候移出监听，可以使用自定义hook函数</p>
        <div>当前点击的鼠标坐标：{{point.x}}--{{point.y}}</div>
    </div>
</template>

<script>
    import {
        ref,
    } from 'vue';
    import usePoint from '../hooks/usePoint'
    export default {
        setup(props, context) {
            let point = usePoint();
            return {
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