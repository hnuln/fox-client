<template>
  <div class="layout-demo" style="height: 100%" @click="saveBtn = false">
    <a-layout style="height: 100%">
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout class="contentBox">
        <a-layout-header>Header</a-layout-header>
        <a-layout class="expandBox">
          <a-layout-content class="scroll">
            <div class="interface">
              <div class="header">
                <div class="name">
                  <a href="#" class="collection-name">{{
                    interfaceStore.collectionName
                  }}</a>
                  <span class="pilter">/</span>
                  <fileInput :name="interfaceStore.name" class="interface-name" @rename="interfaceStore.updateName">
                  </fileInput>
                </div>
                <div class="save">
                  <div class="saveButton">
                    <a-space>
                      <a-button type="secondary">
                        <template #icon>
                          <icon-save />
                        </template>
                        <template #default>Save</template>
                      </a-button>
                    </a-space>
                  </div>
                  <div class="select">
                    <a-space>
                      <a-button type="secondary" @click.stop="saveBtn = true">
                        <template #icon>
                          <icon-down />
                        </template>
                      </a-button>
                    </a-space>
                  </div>
                  <div class="saveAs" v-if="saveBtn">
                    <a-button type="secondary" class="saveAsBtn" @click="visible = true">Save As...</a-button>
                  </div>
                  <a-modal v-model:visible="visible" :closable="false" @ok="handleOk" @cancel="handleCancel">
                    <template #title> SAVE REQUEST </template>
                    <SaveInterface></SaveInterface>
                  </a-modal>
                </div>
              </div>
              <div class="body-url">
                <div class="axios">
                  <a-space>
                    <a-select :style="{ width: '110px', height: '40px' }" v-model="interfaceStore.method">
                      <a-option value="GET" >GET</a-option>
                      <a-option value="POST">POST</a-option>
                      <a-option value="DELETE">DELETE</a-option>
                      <a-option value="PUT">PUT</a-option>
                    </a-select>
                  </a-space>
                </div>
                <div class="urlInput">
                  <a-input :style="{ height: '40px' }" placeholder="Enter URL or paste text" v-model="interfaceStore.url"
                    class="URL" @input="interfaceStore.updateParams" />
                  <a-input placeholder="Query Params" v-model="interfaceStore.queryURL" disabled class="queryInput" />
                </div>
                <div class="send">
                  <a-space>
                    <a-button type="secondary" class="sendButton" :style="{ height: '40px' }">
                      <template #default>Send</template>
                    </a-button>
                    <div class="select">
                      <a-button type="secondary" :style="{ height: '40px' }" class="download">
                        <template #icon>
                          <icon-down />
                        </template>
                      </a-button>
                    </div>
                  </a-space>
                </div>
              </div>
              <div class="body-config">
                <a-tabs default-active-key="1">
                  <a-tab-pane key="1" title="Params">
                    <div class="tab1">
                      <config-table :columns="queryCol" :data="interfaceStore.queryParams" @addRow="interfaceStore.addRow"
                        @deleteRow="interfaceStore.deleteRow" @updateRowKeys="interfaceStore.updateRowKeys">Query
                        Params</config-table>
                    </div>
                  </a-tab-pane>
                  <a-tab-pane key="2" title="Headers">
                    <config-table>Headers</config-table>
                  </a-tab-pane>
                  <a-tab-pane key="3" title="Body">
                    Content of Tab Panel 3
                  </a-tab-pane>
                  <a-tab-pane key="4" title="Settings">
                    Content of Tab Panel 4
                  </a-tab-pane>
                </a-tabs>
              </div>
            </div>
          </a-layout-content>
          <div class="response">
            <response-box></response-box>
          </div>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import ConfigTable from './cpns/config-table.vue'
import ResponseBox from './cpns/response-box.vue'
import SaveInterface from './cpns/save-interface.vue'
import fileInput from './cpns/file-input.vue'
import useInterfaceStore from '@/store/modules/interface.js'
import { IconSave, IconDown } from '@arco-design/web-vue/es/icon'
import request from '@/server/request.js'

const visible = ref(false)
const saveBtn = ref(false)
const queryCol = ref([
  {
    title: 'Key',
    dataIndex: 'key',
    slotName: 'key'
  },
  {
    title: 'Value',
    dataIndex: 'value',
    slotName: 'value'
  },
  {
    title: '',
    dataIndex: 'delete',
    slotName: 'delete'
  }
])

const interfaceStore = useInterfaceStore()

onMounted(async () => {
  // 还少一个获取连接名的请求
  const { result } = await request.post({
    url: '/api/interface/show',
    data: {
      interfaceID: 1,
    }
  })
  interfaceStore.render(result[0])
}),

watch(
  () => interfaceStore.queryParams,
  () => {
    interfaceStore.makeURL()
  },
  { deep: true }
)
</script>

<style lang="less" scoped>
.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.layout-demo :deep(.arco-layout-header) {
  height: 32px;
  background-color: var(--color-primary-light-4);
}

.layout-demo :deep(.arco-layout-sider) {
  width: 200px;
  background-color: var(--color-primary-light-3);
}

.contentBox {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.contentBox::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
  color: transparent;
}

.expandBox {
  height: 100%;
}

.interface {
  display: flex;
  width: 100%;
  flex-direction: column;

  .header {
    display: flex;
    width: 100%;
    height: 32px;
    // padding: 0 16px;
    margin: 8px 0;

    .name {
      display: flex;
      justify-content: start;
      flex-basis: 70%;
      height: 32px;
      line-height: 32px;
      align-items: center;
      padding-left: 16px;
      width: max-content;

      .collection-name,
      .pilter {
        color: #9f9898;
      }

      .pilter {
        margin: 0 3px;
      }

      .interface-name {
        color: black;
      }

      .collection-name,
      .interface-name {
        border-radius: 3px;
        padding: 0 3px;
      }

      .collection-name:hover,
      .interface-name:hover {
        background-color: #eaeaea;
      }
    }

    .save {
      display: flex;
      justify-content: end;
      text-align: right;
      flex-basis: 30%;
      min-width: 130px;
      padding-right: 16px;
      position: relative;

      .saveAs {
        // display: none;
        position: absolute;
        z-index: 1;
        bottom: -45px;
        width: 145px;
        height: 40px;

        // background-color: #9f9898;
        .saveAsBtn {
          width: 100%;
          height: 90%;
          background-color: #63aef9;
          color: white;
        }
      }

      .select {
        width: 32px;
        height: 32px;
      }
    }
  }

  .body-url {
    display: flex;
    width: 100%;
    height: 40px;

    // margin: 8px 0;
    .axios {
      display: flex;
      flex-basis: 110px;
      padding-left: 16px;
    }

    .urlInput {
      display: flex;
      flex-basis: 80%;
    }

    .send {
      flex-basis: 110px;
      display: flex;
      justify-content: end;
      padding-right: 16px;

      .sendButton {
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
      }

      .download {
        border-top-left-radius: 0 !important;
        border-bottom-left-radius: 0 !important;
      }
    }
  }

  .body-config {
    padding: 0 16px;

  }
}

.response {
  width: 100%;
}

.saveButton :deep(.arco-space-item) {
  margin-right: 3px;
}

.select :deep(.arco-space-item) {
  margin: 0;
}

.send :deep(.arco-space-item) {
  margin-right: 0 !important;
}

.send :deep(.arco-btn-secondary) {
  color: white;
  background-color: #097bed;
}
</style>
