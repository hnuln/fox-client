<!-- 只读的表格 -->
<template>
  <a-table :columns="columns" :data="data" :pagination="false"/>
</template>

<script setup>
const porops = defineProps({
  columns: Array,
  data: Array
})
</script>

<style>

</style>
