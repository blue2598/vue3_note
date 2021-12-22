<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-12-01 15:42:33
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-01 15:56:29
 * @FilePath: \notejse:\Demo\vue3_note\src\components\dialog.vue
-->
<template>
    <teleport to="body">
        <button @click="showDialog">显示弹框</button>
        <div v-if="isShow" class="dialog">
            这是个弹框,打开控制台看文档结构
        </div>
    </teleport>
</template>

<script>
    import {
        ref
    } from 'vue'
    export default {
        setup() {
            let isShow = ref(false);

            function showDialog() {
                this.isShow = true;
            }
            return {
                isShow,
                showDialog
            }
        }
    }
</script>

<style scoped>
    .dialog {
        width: 200px;
        height: 200px;
        background: orange;
    }
</style>