// 引入状态管理方法
import { defineStore } from 'pinia'
import request from '@/server/request.js'

// 创建状态管理对象
const useInterfaceStore = defineStore('interfaceStore', {
  // 选项式API写法
  // 数据存储
  state: () => {
    return {
      // 接口名
      name: '',
      // 连接名
      collectionName: 'new collection',
      // 接口路径URL
      url: '',
      // 参数的URL
      queryURL: '',
      // 请求方法
      method: 'GET',
      // json数据
      jsonData: '',
      // body数据的索引
      bodyIndex: '1',
      queryParams: [
        {
          id: 1,
          key: '',
          value: '',
          isChecked: false,
        }
      ],
      // query params
      selectedKeys: [],
      
    }
  },
  // 操作数据的方法函数
  actions: {
    // 接口请求函数
    async interfaceRequest(interfaceID) {
      const { result } = await request.post({
        url: '/api/interface/show',
        data: {
          interfaceID,
        }
      })
      this.render(result[0])
      sessionStorage.setItem('interface', JSON.stringify(result[0]))
      // console.log(sessionStorage.getItem('interface'));
    },
    // 渲染页面
    render(result) {
      this.name = result.interface_name
      this.url = result.url
      this.method = result.method
      this.queryParams = JSON.parse(result.params)
      this.jsonData = result.json
      this.bodyIndex = result.bodyIndex
      this.getSelectedKeys()
      this.makeURL()
    },
    // 保存接口
    async saveInterface() {
      if (this.isUpdate()) {
        const obj = JSON.parse(sessionStorage.getItem('interface'))
        // console.log('需要更新');
        const result = await request.post({
          url: 'api/interface/store',
          data: {
            obj,
          }
        })
        if (result.code >= 200 && result.code < 300) {
          const { insertId } = result
          this.interfaceRequest(insertId)
          return true
        } else {
          return false
        }
      } else {
        return true
      }
    },
    // 修改接口名称
    async updateName(newValue) {
      let oldValue = this.name
      this.name = newValue
      const result = await request.post({
        url: '/api/interface/updateName',
        data: {
          interfaceID: 25,
          newName: newValue,
        }
      })
      if (result.code !== 200) {
        this.name = oldValue
      }
    },
    // 参数表格新增一行
    addRow() {
      let id = +new Date()
      this.queryParams.push({
        id: id,
        key: '',
        value: '',
        isChecked: false
      })
    },
    // 删除参数
    deleteRow(id) {
      console.log(id);
      this.queryParams = this.queryParams.filter((item) => item.id !== id)
    },
    // 修改选中状态
    updateRowKeys(rowKeys) {
      // console.log(rowKeys);
      this.queryParams.forEach((element) => {
        if (rowKeys.includes(element.id)) {
          element.isChecked = true
        } else {
          element.isChecked = false
        }
      })
      this.getSelectedKeys()
    },
    // 拼接参数URL
    makeURL() {
      // console.log(111);
      let str = []
      this.queryParams.forEach((element) => {
        if (element.isChecked) {
          if (element.key.trim().length !== 0 || element.value.trim().length !== 0) {
            str.push(element.key.trim() + '=' + element.value.trim())
          }
        }
      })
      if (str.length === 0) {
        this.queryURL = ''
      } else {
        this.queryURL = '?' + str.join('&')
      }
    },
    // 存储选中的参数项
    getSelectedKeys() {
      const res = []
      this.queryParams.forEach((element) => {
        if (element.isChecked) {
          res.push(element.id)
        }
      })
      this.selectedKeys = res
    },
    // 判断接口是否更改
    isUpdate() {
      const oldInterface = JSON.parse(sessionStorage.getItem('interface'))
      // console.log(oldInterface);
      const { method, url, json, bodyIndex } = oldInterface
      // console.log(method, url);
      console.log(bodyIndex, this.bodyIndex);
      const params = JSON.parse(oldInterface.params)
      // console.log(JSON.stringify(params)===JSON.stringify(this.queryParams));
      // console.log(json, this.jsonData);
      if (method === this.method && url === this.url && JSON.stringify(params) === JSON.stringify(this.queryParams) && json === this.jsonData && bodyIndex === this.bodyIndex) {
        return false
      } else {
        oldInterface.method = this.method
        oldInterface.url = this.url
        oldInterface.params = JSON.stringify(this.queryParams)
        oldInterface.json = this.jsonData
        oldInterface.bodyIndex = this.bodyIndex
        sessionStorage.setItem('interface', JSON.stringify(oldInterface))
        return true
      }
    }
  },
  // 数据获取方法
  getters: {

  }
  // 看示例操作数据方法和获取都是封装函数计算，个人理解不同的应该是获取方法有返回值
})
// 暴露接口
export default useInterfaceStore
