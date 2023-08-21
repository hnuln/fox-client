<template>
  <div class="sider-demo" style="height:100%">
    <a-layout style="height:100%">
      <!--侧边栏-->
      <a-layout-sider>
        <MockSider></MockSider>
      </a-layout-sider>
      <!--Mock的标题栏-->
      <a-layout-header>
        header
      </a-layout-header>
      <!--主要内容栏-->
      <a-layout-content>
        <create-mock></create-mock>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script setup>
import MockSider from './cpns/mock-sider.vue'
import CreateMock from './cpns/create-mock.vue'
import MockHeader from './cpns/mock-header.vue'
</script>

<style lang="less" scoped>
.sider-demo :deep(.my-sider) {
  width: 200px;
  height: 100%;
  background-color: var(--color-primary-light-3);
}
</style>
