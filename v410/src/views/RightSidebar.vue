<template>
    <div class="right-sidebar">
        <h2>右侧边栏</h2>
        <p>这是一个简单的右侧边栏示例。</p>
        <div class="sidebar-content">
            <p>这里是一些内容...</p>
            <p>这里是一些内容...</p>
            <p>这里是一些内容...</p>
        </div>
    </div>
</template>

<style scoped>
.right-sidebar {
    background-color: green;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    height: auto;
}

.sidebar-content {
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
}
.sidebar-content p {
    margin: 10px 0;
    font-size: 1.2em;
    line-height: 1.5;
}
.sidebar-content h2 {
    font-size: 2em;
    margin-bottom: 10px;
}

</style>