<!-- 修改命名的组件 -->
<!-- 点击元素触发输入框，输入框失去焦点即修改结束 -->
<template>
  <div class="fileInput">
    <a href="#" v-if="!fileInput.isClick" @click="handleClick">{{name}}</a>
    <input class="input" type="text" ref="input" :value="name" @blur="handleEdit" v-else>
  </div>
</template>

<script setup>
import {ref, nextTick} from 'vue'
import useFileInput from '@/store/modules/fileInput'
const fileInput = useFileInput()
// input元素
const input = ref(null)
const props = defineProps({
  name: String,
})
const emit = defineEmits(['rename'])
// 获取文本框焦点
const handleClick = () => {
  fileInput.updateIsClick()
  nextTick(() => {
    input.value.focus()
  })
}
// 修改值
const handleEdit = () => {
  fileInput.updateIsClick()
  const newValue = input.value.value.trim()
  if (newValue.length !== 0) {
    emit('rename', newValue)
  }
}
</script>

<style lang="less" scoped>
.fileInput {
  min-width: 80px;
  a{
    color: black;
  }
  .input {
    border-radius: 5px;
  }
}
</style>
