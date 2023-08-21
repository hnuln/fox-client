<template>
  <div class="main">
    <!-- <main-header></main-header>
    <main-siderbar></main-siderbar> -->
    <a-layout>
      <a-layout-header class="header">Header</a-layout-header>
      <a-layout>
        <a-layout-sider class="sider">
          <div
            class="sider-bar-item"
            v-for="item in siderBarDate"
            :key="item.id"
            @click="onSiderBar(item.path)"
          >
            <div class="sider-bar-icon"></div>
            <div class="text">{{ item.text }}</div>
          </div>
        </a-layout-sider>
        <a-layout-content class="content">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup>
import { IconEdit } from '@arco-design/web-vue/es/icon'
import { useRouter } from 'vue-router'
import { RouterView } from 'vue-router'

const siderBarDate = [
  {
    id: 1,
    icon: IconEdit,
    text: 'Collections',
    path: '/main/interface'
  },
  {
    id: 2,
    icon: IconEdit,
    text: 'Mock',
    path: '/main/imock'
  },
  {
    id: 3,
    icon: IconEdit,
    text: 'History',
    path: '/main/history'
  }
]

const router = useRouter()

const onSiderBar = (path) => {
  router.push(path)
}
</script>

<style lang="less" scoped>
.header {
  height: 48px;
  border-bottom: 1px solid var(--color-neutral-3);
}

.sider {
  width: 82px !important;
  height: calc(100vh - 48px);
  .sider-bar-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 72px;
  }
}

.content {
  height: calc(100vh - 48px);
}
</style>
