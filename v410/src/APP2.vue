<script setup>
// 导入 Vue Router 的相关功能
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

// 编程式导航到页面2
function goto2() {
    router.push({ name: 'p2' })
}

// 编程式导航到页面3
function goto3() {
    router.push({ name: 'p3' })
}

// 返回上一页
// router.back() 不需要参数，它会返回到历史记录中的上一页
function back() {
    router.back()
}
</script>

<template>
    <div class="navigation-demo">
        <nav class="nav-buttons">
            <button @click="goto2">跳转到列表页面</button>
            <button @click="goto3">跳转到计数器</button>
            <button @click="back" class="back-btn">返回上一页</button>
        </nav>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style>
.navigation-demo {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.nav-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 8px;
}

.nav-buttons button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.nav-buttons button:hover {
    background-color: #0056b3;
}

.nav-buttons .back-btn {
    background-color: #6c757d;
}

.nav-buttons .back-btn:hover {
    background-color: #545b62;
}

/* 路由过渡效果 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
