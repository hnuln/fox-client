import { defineStore } from 'pinia'

const useUserStore = defineStore('userStore', {
  state: () => ({
    token: ''
  })
})

export default useUserStore
