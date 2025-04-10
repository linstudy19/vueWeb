<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="counter">
    <h2>当前计数：{{ count }}</h2>
    <button @click="count++">增加计数</button>
  </div>
</template>

<style>
.counter {
  text-align: center;
  padding: 20px;
}

.counter button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.counter button:hover {
  background-color: #45a049;
}
</style>
