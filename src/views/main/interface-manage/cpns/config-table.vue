<!-- eslint-disable vue/no-mutating-props -->
<!-- 请求参数配置表格组件 -->
<template>
  <div>
    <div class="tab-header">
      <span class="config-name">
        <slot></slot>
      </span>
      <span class="config-add">
        <a-space>
          <a-button type="secondary" :style="{ width: '27px', height: '27px' }" @click="handleAdd">
            <template #icon>
              <icon-plus />
            </template>
          </a-button>
        </a-space>
      </span>
    </div>
    <div class="configTable">
      <a-space direction="vertical" size="large" fill>
        <a-table row-key="id" :columns="columns" :row-selection="rowSelection" :data="data" :pagination="false"
          class="table" @select="handleSelect">
          <template #key="{ rowIndex }">
            <a-input v-model="data[rowIndex].key" />
          </template>
          <template #value="{ rowIndex }">
            <a-input v-model="data[rowIndex].value" />
          </template>
          <template #delete="{ record }" v-if="interfaceStore.queryParams.length > 1">
            <a-button type="text" @click="handleDelete(record.id)" class="deleteButton">
              <template #icon>
                <icon-delete />
              </template>
            </a-button>
          </template>
        </a-table>
      </a-space>
    </div>
  </div>>
</template>

<script setup>
import { reactive } from 'vue'
import { IconPlus, IconDelete } from '@arco-design/web-vue/es/icon'
import useInterfaceStore from '@/store/modules/interface.js'

const interfaceStore = useInterfaceStore()
const rowSelection = reactive({
  type: 'checkbox',
  onlyCurrent: false
})
const props = defineProps({
  columns: Array,
  data: Array,
})

const emit = defineEmits(['addRow', 'deleteRow', 'updateRowKeys'])

// 参数表格新增一行
const handleAdd = () => {
  emit('addRow')
}

const handleDelete = (id) => {
  emit('deleteRow', id)
}

const handleSelect = (rowKeys) => {
  emit('updateRowKeys', rowKeys)
}


</script>

<style lang="less" scoped>
.tab-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  line-height: 27px;
}

.table :deep(.arco-table-td) {
  text-align: right;
}
</style>
