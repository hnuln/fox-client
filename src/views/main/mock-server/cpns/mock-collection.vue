<template>
    <div name="select-collection">
        <a-button-group class="twobutton">
            <a-button>Create a new collection</a-button>
            <a-button>Select an existing collection</a-button>
        </a-button-group>
        <div class="info-text">
            <p>Enter the request you want to mock. Optionally, add a request body by clicking on (...) icon</p>
        </div>

        <!--请求表格 添加行、删除行、列属性选择、参数填写与传递-->
        <div>
            <a-table :columns="columns" :data="data"></a-table>
        </div>


    </div>
</template>

<script setup>
import { reactive } from 'vue'
const columns = [
    {
        title: 'Request Method',
        dataIndex: 'reqmethod',
    },
    {
        title: 'Request URL',
        dataIndex: 'reqURL',
    },
    {
        title: 'Request Body',
        dataIndex: 'reqbody',
    },
    {
        title: 'Description',
        dataIndex: 'descri',
    },
    {
        title: 'Response Code',
        dataIndex: 'rescode',
    },
    {
        title: 'Response Body',
        dataIndex: 'resbody'
    },
]
</script>

<style lang="less" scoped>
.info-text {
    size: 5px;
}
</style>
