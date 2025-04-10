<template>

    <div class="left-sidebar">
        <h2>左侧边栏</h2>
        <p>这是一个简单的左侧边栏示例。</p>
        <div class="sidebar-content">
            <!-- 写一首李白的《静夜思》作为内容吧 -->
            <p>床前明月光，</p>
            <p>疑是地上霜。</p>
            <p>举头望明月，</p>
            <p>低头思故乡。</p>
        </div>
    </div>
</template>

<style scoped>

.left-sidebar {
    background-color: #f00;
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