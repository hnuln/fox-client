<template>
  <!--侧边栏  +号、输入框、面板+跳转文字-->
  <!-- +号、跳转文字都跳转到create Mock Server -->
  <div name="MockSider" style="height:100%">
    <a-space class="slider-head">
      <!--按钮和输入框-->
      <a-button type="secondary" class="sider-button" @click="addserver">
        <template #icon>
          <icon-plus />
        </template>
      </a-button>
      <a-input class="sider-search" allow-clear>
        <template #prefix>
          <icon-search />
        </template>
      </a-input>
    </a-space>
    <!--文字部分-->
    <a-space direction="vertical" class="slider-content">
      <a-typography-title :heading="6">
        You don't have any mock servers.
      </a-typography-title>
      <a-typography-text class="sider-content-text">
        Mock servers let you simulate endpoints and their corresponding responses in a collection without actually
        setting up a back end.
      </a-typography-text>
      <!--这里要设置路由跳转-->
      <a-link href="#">
        Create Mock Server
      </a-link>
    </a-space>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.slider-head {
  background-color: var(--color-primary-light-3);
}

.sider-button {
  border: 1px solid var(--color-border);
  background-color: var(--color-primary-light-3);
}

.sider-search {
  border: 1px solid var(--color-border);
  background-color: var(--color-primary-light-3);
}

.slider-content {
  background-color: var(--color-primary-light-3);
  text-align: center;
  height: 100%;
}

.sider-content-text {
  size: 10px;
  text-align: center;
}
</style>
