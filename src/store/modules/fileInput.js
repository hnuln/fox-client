import { defineStore } from "pinia"

const useFileInputStore = defineStore('fileInput', {
  state: () => {
    return {
      isClick: false,
    }
  },
  actions: {
    updateIsClick() {
      this.isClick = !this.isClick
    }
  },
  getters: {

  }
})
export default useFileInputStore
