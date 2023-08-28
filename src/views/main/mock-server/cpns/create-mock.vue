<template>
  <div name="CreateMock" class="createmock">
    <!--标题和创建的两个步骤名称-->
    <div class="content1">
      <a-typography class="heading">
        <a-typography-title :heading="5">
          Create a mock server
        </a-typography-title>
      </a-typography>
      <div class="content-step">
        <div class="step">
          <div class="step1">1.Select collection to mock</div>
          <div class="step2">2. Configuration</div>
        </div>
      </div>
      <!--划分线-->
      <a-divider></a-divider>
      <!--这里需要根据进行到哪个步骤，显示不同路由-->
      <MockCollection></MockCollection>
    </div>

  </div>
</template>

<script setup>
import MockCollection from './mock-collection.vue'
</script>

<style lang="less" scoped>
.content1 .heading {
  text-align: left;
}


.step1 {
  display: inline;
}

.step2 {
  display: inline;
}
</style>
