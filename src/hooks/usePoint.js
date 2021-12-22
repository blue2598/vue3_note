/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-11-30 15:50:15
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-30 16:09:38
 * @FilePath: \notejse:\Demo\vue3_note\src\hooks\usePoint.js
 */
import { reactive, onBeforeMount, onUnmounted } from 'vue'
export default function () {
    let point = reactive({
        x: 0,
        y: 0
    })
    onBeforeMount(() => {
        window.addEventListener('click', showPoint)
    })
    onUnmounted(() => {
        window.removeEventListener('click', showPoint)
    })

    function showPoint(event) {
        point.x = event.pageX;
        point.y = event.pageY;
    }
    return point
}