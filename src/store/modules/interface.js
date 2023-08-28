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
      queryParams: [
        {
          id: 1,
          key: '',
          value: '',
          isChecked: false,
        }
      ],
      selectedKeys:[],

    }
  },
  // 操作数据的方法函数
  actions: {
    // 渲染页面
    render(result) {
      this.name = result.interface_name
      this.url = result.url
      this.method = result.method
      this.queryParams = JSON.parse(result.params)
      this.getSelectedKeys()
      this.makeURL()
    },
    async updateName(newValue) {
      let oldValue = this.name
      this.name = newValue
      const result = await request.post({
        url: '/api/interface/updateName',
        data: {
          interfaceID: 1,
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
      this.queryParams = this.queryParams.filter((item) => item.id !== id)
    },
    // 修改选中状态
    updateRowKeys(rowKeys) {
      this.queryParams.forEach((element) => {
        if (rowKeys.includes(element.id)) {
          element.isChecked = true
        } else {
          element.isChecked = false
        }
      })
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

  },
  // 数据获取方法
  getters: {
    
  }
  // 看示例操作数据方法和获取都是封装函数计算，个人理解不同的应该是获取方法有返回值
})
// 暴露接口
export default useInterfaceStore
