<script setup>
// 导入布局样式
import './assets/layout.css'
</script>

<template>
  <div class="layout-wrapper">
    <div class="layout-container">
      <aside class="view left-sidebar">
        <router-view name="LeftSidebar" />
      </aside>
      <main class="view main-content">
        <router-view />
      </main>
      <aside class="view right-sidebar">
        <router-view name="RightSidebar" />
      </aside>
    </div>
  </div>
</template>

<style scoped>
.layout-wrapper {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

/* 确保子元素样式不被覆盖 */
:deep(.left-sidebar),
:deep(.right-sidebar),
:deep(.main-content) {
  height: 100%;
  overflow: auto;
}
</style>
