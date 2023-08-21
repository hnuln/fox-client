<template>
    <div name="select-collection">
        <a-tabs default-active-key="1">
            <a-tab-pane key="1" title="Create a new collection">
                <NewColl :columns="columns" :data="data"></NewColl>
            </a-tab-pane>
            <a-tab-pane key="2" title="Select an existing collection">
                <ExistingColl></ExistingColl>
            </a-tab-pane>
        </a-tabs>

        <!-- 两个按钮切换不同的创建方式
        <a-button-group class="twobutton">
            <a-button @click="click1">Create a new collection</a-button>
            <a-button @click="click2">Select an existing collection</a-button>
        </a-button-group>

     -->

        <a-space>
            <a-button type="primary">Cancel</a-button>
            <a-button type="primary">Next</a-button>
        </a-space>

    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import NewColl from './select/new-coll.vue'
import ExistingColl from './select/exisiting-coll.vue'

const show = ref(true)
const methods = ['GET', 'POST', 'PUT', 'DELETE']
const columns = [
    {
        title: 'RequestMethod',
        dataIndex: 'reqmethod',
        slotName: 'reqmethod'
    },
    {
        title: 'RequstURL',
        dataIndex: 'requrl',
        slotName: 'requrl'
    },
    {
        title: 'RequestBody',
        dataIndex: 'reqbody',
        slotName: 'reqbody'
    }, {
        title: 'Description',
        dataIndex: 'de',
        slotName: 'de'
    }, {
        title: 'ResponseCode',
        dataIndex: 'rescode',
        slotName: 'rescode'
    }, {
        title: 'ResponseBody',
        dataIndex: 'resbody',
        slotName: 'resbody'
    }
]
const data = reactive([
    {
        reqmethod: 'GET',
        requrl: '',
        reqbody: '',
        de: '',
        rescode: '200',
        resbody: ''
    }
])
// const active1 = true;
// const active2 = false;
// function click1() {
//     this.active1 = true;
//     this.active2 = false;

//     console.log('click1')
// }
// function click2() {
//     this.active1 = false;
//     this.active2 = true;
//     console.log('click2')
// }
</script>

<style lang="less" scoped>
.info-text {
    size: 5px;
}

.info-text {
    display: flex,

}

.info-text2 {
    display: flex
}

.searchtype {
    display: flex
}
</style>
