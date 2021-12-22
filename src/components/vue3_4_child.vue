<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-26 17:03:58
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-26 17:14:45
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_4_child.vue
-->
<template>
    <div class="child">
        父组件传过来的值：{{name}}
        <button @click="clickThis">触发事件</button>
    </div>
</template>

<script>
    export default {
        props: ['name'],
        setup(props, context) {
            function clickThis() {
                context.emit('childEmit', "子组件传的值")
            }
            return {
                clickThis
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