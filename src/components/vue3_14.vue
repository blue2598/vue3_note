<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-25 17:09:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-01 15:54:13
 * @FilePath: \notejse:\Demo\vue3_note\src\components\vue3_14.vue
-->
<template>
    <h1>teleport组件</h1>
    <ol>
        <li>将引入的组件放入任何你想放的位置</li>
        <li>比如body里,html里</li>
    </ol>
    <Dialog></Dialog>
</template>

<script>
    import Dialog from './Dialog.vue';
    export default {
        name: '',
        components: {
            Dialog
        },
        setup() {
            return {}
        }
    }
</script>

<style>
</style>