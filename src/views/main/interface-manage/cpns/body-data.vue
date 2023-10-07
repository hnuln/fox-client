<template>
  <div class="body-data">
    <div class="select-box">
      <a-tabs size="mini" @tab-click="tabChange" :active-key="interfaceStore.bodyIndex">
        <a-tab-pane key="1" title="none">
          <div class="tab1">
            This request does not have a body
          </div>
        </a-tab-pane>
        <!-- <a-tab-pane key="2" title="form-data">
          <config-table>form-data</config-table>
        </a-tab-pane>
        <a-tab-pane key="3" title="x-www-form-unlencoded">
          <config-table>x-www-form-unlencoded</config-table>
        </a-tab-pane> -->
        <a-tab-pane key="2" title="json">
          <a-textarea v-model="interfaceStore.jsonData" :auto-size="{
            minRows: 1,
            maxRows: 7
          }" style="margin-top: 20px"/>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import configTable from './config-table.vue';
import useInterfaceStore from '../../../../store/modules/interface';

const interfaceStore = useInterfaceStore()

const tabChange = (key) => {
  interfaceStore.bodyIndex = key
}
</script>
<style scoped>
.tab1 {
  width: 100%;
  height: 100%;
  text-align: center;
  color: darkgray;
}
</style>
