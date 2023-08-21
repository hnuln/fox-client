// 引入状态管理方法
import { defineStore } from 'pinia'

// 创建状态管理对象
const useInterfaceStore = defineStore('interfaceStore', {
  // 选项式API写法
  // 数据存储
  state: () => {
    return {
      // 接口名
      name: 'interface name',
      // 连接名
      collectionName: 'new collection',
      // 接口路径URL
      url: '',
      // 参数的URL
      queryURL: '',
      queryParams: [
        {
          id: 1,
          key: '',
          value: '',
          isChecked: false,
        }
      ],

    }
  },
  // 操作数据的方法函数
  actions: {
    updateName(newValue) {
      this.name = newValue
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
    }

  },
  // 数据获取方法
  getters: {}
  // 看示例操作数据方法和获取都是封装函数计算，个人理解不同的应该是获取方法有返回值
})
// 暴露接口
export default useInterfaceStore
