<template>
    <div class="firstmethod">
        <div class="info-text">
            <p>Enter the request you want to mock. Optionally, add a request body by clicking on (...) icon</p>
        </div>
        <!--请求表格 添加行、删除行、列属性选择、参数填写与传递-->
        <div class="mockTable">
            <a-table :columns="columns" :data="data" column-resizable :bordered="{ cell: true }">
                <template #reqmethod="{ rowIndex }">
                    <a-select v-model="data[rowIndex].reqmethod" placeholder="GET">
                        <a-option>GET</a-option>
                        <a-option>POST</a-option>
                        <a-option>PUT</a-option>
                        <a-option>DELETE</a-option>
                    </a-select>
                </template>
                <template #requrl="{ rowIndex }">
                    <a-input v-model="data[rowIndex].requrl" placeholder="path"></a-input>
                </template>
                <template #reqbody="{ rowIndex }">
                    <a-input v-model="data[rowIndex].reqbody" placeholder="Request Body"></a-input>
                </template>
                <template #de="{ rowIndex }">
                    <a-input v-model="data[rowIndex].de" placeholder="Description"></a-input>
                </template>
                <template #rescode="{ rowIndex }">
                    <a-input v-model="data[rowIndex].rescode" placeholder="Response Code"></a-input>
                </template>
                <template #resbody="{ rowIndex }">
                    <a-input v-model="data[rowIndex].resbody" placeholder="Response Body"></a-input>
                </template>
            </a-table>

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    columns: Array,
    data: Array
})
</script>

<style></style>