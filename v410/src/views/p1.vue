<script setup>
import { ref } from 'vue'

const c = ref(0)
const f = ref(32)

function setC(e, celsius = +e.target.value) {
  c.value = celsius
  f.value = celsius * (9 / 5) + 32
}

function setF(e, fahrenheit = +e.target.value) {
  f.value = fahrenheit
  c.value = (fahrenheit - 32) * (5 / 9)
}
</script>

<template>
  <div class="temperature-converter">
    <h2>温度转换器</h2>
    <div class="converter-inputs">
      <div class="input-group">
        <input type="number" :value="c" @change="setC">
        <span>°C</span>
      </div>
      <span class="equals">=</span>
      <div class="input-group">
        <input type="number" :value="f" @change="setF">
        <span>°F</span>
      </div>
    </div>
  </div>
</template>

<style>
.temperature-converter {
  text-align: center;
  padding: 20px;
}

.converter-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.input-group {
  display: flex;
  align-items: center;
  gap: 5px;
}

.input-group input {
  width: 100px;
  padding: 8px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 16px;
}

.equals {
  font-size: 20px;
  margin: 0 10px;
  color: #666;
}

.input-group span {
  font-size: 16px;
  color: #666;
}
</style>
