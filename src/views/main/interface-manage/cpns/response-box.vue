<template>
  <div class="responseBox">
    <a-resize-box
      :directions="['top']"
      :style="{ width: '100%', height: '0', maxHeight: '250px' }"
    >
      <div class="emptyBox" v-if="!isSended">
        <a-empty />
      </div>
      <div class="senedBox" v-else>
        <a-tabs default-active-key="1">
          <template #extra>
            <div class="reponse-all">
              <span class="state">{{ responseAll.state }}</span>
              <span class="message">{{ responseAll.message }}</span>
              <span class="time">{{ responseAll.time }}</span>
              <span class="size">{{ responseAll.size }}</span>
            </div>
            <a-button class="saveExample">
              <template #icon>
                <icon-save />
              </template>
              Save As Example
            </a-button>
          </template>
          <a-tab-pane key="1" title="Body">
            <div class="codeView">
              <a-radio-group v-model="type" type="button">
                <a-radio value="Pretty">Pretty</a-radio>
                <a-radio value="Raw">Raw</a-radio>
                <a-radio value="Preview">Preview</a-radio>
                <a-radio value="Visualize">Visualize</a-radio>
              </a-radio-group>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" title="Cookie">
            <ResponseTable
              :columns="cookieCol"
              :data="cookieData"
            ></ResponseTable>
          </a-tab-pane>
          <a-tab-pane key="3" title="Headers">
            <ResponseTable
              :columns="headersCol"
              :data="headersData"
            ></ResponseTable>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-resize-box>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import ResponseTable from './response-table.vue'
import { IconSave } from '@arco-design/web-vue/es/icon'
const isSended = ref(true)
const type = ref('Pretty')
const cookieCol = ref([
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Value',
    dataIndex: 'value'
  },
  {
    title: 'Domain',
    dataIndex: 'domain'
  },
  {
    title: 'Path',
    dataIndex: 'path'
  },
  {
    title: 'Expires',
    dataIndex: 'expires'
  },
  {
    title: 'HttpOnly',
    dataIndex: 'httpOnly'
  },
  {
    title: 'Secure',
    dataIndex: 'secure'
  }
])
const cookieData = reactive([
  {
    key: '1',
    name: 'acw_tc',
    value: '2f612f2751691a',
    domain: 'hmajax',
    path: '/',
    expires: 'Sun, 13 Aug',
    httpOnly: 'true',
    secure: 'false'
  }
])
const headersCol = ref([
  {
    title: 'Key',
    dataIndex: 'Key'
  },
  {
    title: 'Value',
    dataIndex: 'value'
  }
])
const headersData = reactive([
  {
    key: '1',
    Key: 'Connection',
    value: 'close'
  }
])
const responseAll = ref({
  state: 200,
  message: 'OK',
  time: '213ms',
  size: '524kb'
})
</script>

<style scoped lang="less">
.responseBox {
  // min-height: 0;
  .emptyBox {
    height: 100%;
    width: 100%;
    // background-color: salmon;
  }

  .senedBox {
    .saveExample {
      margin-right: 7px;
    }
    .reponse-all {
      display: flex;
      height: 100%;
      width: max-content;

      // background-color: pink;
      span {
        padding: 0 7px;
        font-size: 12px;
        color: black;
      }
    }

    .codeView {
      display: flex;
      justify-content: start;
      padding-left: 8px;
    }
  }
}
.senedBox :deep(.arco-tabs-content){
  padding-top: 0;
}
</style>
