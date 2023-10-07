<template>
  <div class="responseBox">
    <a-space size="large" class="spin" v-if="isSpin">
      <a-spin :size="32" />
    </a-space>
    <div class="emptyBox" v-else-if="!isSended">
      <a-empty />
    </div>
    <div class="senedBox" v-else>
      <a-tabs default-active-key="1">
        <template #extra>
          <div class="reponse-all">
            <span class="state">{{ responseAll.state }}</span>
            <span class="message">{{ responseAll.message }}</span>
          </div>
          <a-button class="saveExample">
            <template #icon>
              <icon-save />
            </template>
            Save As Example
          </a-button>
        </template>
        <a-tab-pane key="1" title="Body">
          <div class="codeView" contenteditable="true">
            {{ response }}
          </div>
        </a-tab-pane>
        <!-- <a-tab-pane key="2" title="Cookie">
          <ResponseTable :columns="cookieCol" :data="cookieData"></ResponseTable>
        </a-tab-pane>
        <a-tab-pane key="3" title="Headers">
          <ResponseTable :columns="headersCol" :data="headersData"></ResponseTable>
        </a-tab-pane> -->
      </a-tabs>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref , watch} from 'vue'
import ResponseTable from './response-table.vue'
import { IconSave } from '@arco-design/web-vue/es/icon'
const props = defineProps({
  isSpin: Boolean,
  isSended: Boolean,
  responseAll: Object,
  response: Object,
})
</script>

<style scoped lang="less">
.senedBox :deep(.arco-tabs-pane) {
  flex-grow: 1;
  height: 100%;
}

.senedBox :deep(.arco-tabs) {
  display: flex;
  flex-direction: column;
  height: 80%;
}

.senedBox :deep(.arco-tabs-content) {
  display: flex;
  flex-grow: 1;
  padding-top: 0;
}

.emptyBox :deep(.arco-empty) {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.spin {
  height: 100%;
  width: 100%;
  justify-content: center;
}


.red {
  color: rgb(245, 62, 62);
}

.green {
  color: rgb(8, 174, 8);
}

.responseBox {
  // min-height: 0;
  display: flex;
  height: 100%;
  width: 100%;

  .emptyBox {
    height: 100%;
    width: 100%;
    // background-color: salmon;
  }

  .senedBox {
    width: 100%;
    height: 100%;

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
      margin: 10px;
      padding: 0 5px;
      height: 85%;
      overflow-y: auto;
      border: 1px solid #cbc5c5;
      white-space: pre-wrap;
    }
    .codeView:hover {
      cursor: text;
    }
    .codeView:focus {

      border: 1px solid #cc7356;
      box-shadow: 1px 1px 3px #cc7356;
    }
  }
}</style>
