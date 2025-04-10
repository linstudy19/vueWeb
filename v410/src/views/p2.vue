
<script setup>
import { ref } from 'vue'

// 实现自定义的shuffle方法
function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const getInitialItems = () => [1, 2, 3, 4, 5]
let id = ref(getInitialItems().length + 1)
const items = ref(getInitialItems())

function insert() {
  const i = Math.round(Math.random() * items.value.length)
  items.value.splice(i, 0, id.value++)
}

function reset() {
  items.value = getInitialItems()
  id.value = getInitialItems().length + 1
}

function shuffleItems() {
  items.value = shuffle(items.value)
}

function remove(item) {
  const i = items.value.indexOf(item)
  if (i > -1) {
    items.value.splice(i, 1)
  }
}
</script>

<template>
  <div class="list-demo">
    <div class="buttons">
      <button @click="insert">插入随机数</button>
      <button @click="reset">重置</button>
      <button @click="shuffleItems">打乱顺序</button>
    </div>

    <TransitionGroup tag="ul" name="fade" class="container">
      <li v-for="item in items" class="item" :key="item">
        {{ item }}
        <button class="remove-btn" @click="remove(item)">x</button>
      </li>
    </TransitionGroup>
  </div>
</template>

<style>
.list-demo {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
}

.buttons {
  margin-bottom: 20px;
}

.buttons button {
  margin-right: 10px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.buttons button:hover {
  background-color: #45a049;
}

.container {
  position: relative;
  padding: 0;
  list-style-type: none;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
}

.remove-btn {
  padding: 2px 8px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #c82333;
}

/* 过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>
