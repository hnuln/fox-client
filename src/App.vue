<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style lang="less" scoped>
.app {
  body {
    width: 100%;
    height: 100%;
  }
}
</style>
