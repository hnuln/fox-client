<template>
  <a-form :model="form" layout="vertical">
    <a-form-item field="requestName" label="Request name">
      <a-input v-model="form.requestName" placeholder="please enter your username..." />
    </a-form-item>
    <a-form-item field="section" label="Save to">
        <a-select v-model="form.saveTo" placeholder="Please select ...">
          <a-option value="section one">collection 1</a-option>
          <a-option value="section two">collection 2</a-option>
          <a-option value="section three">collection 3</a-option>
        </a-select>
      </a-form-item>
  </a-form>
</template>
<script setup>
import {reactive} from 'vue'
const form = reactive({
  requestName: '',
  saveTo: ''
})
</script>
<style scoped lang="less"></style>
