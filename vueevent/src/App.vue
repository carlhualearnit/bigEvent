<template>
  <div>App 根组件
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import { testAPI } from './api'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  created () {
    this.testAPIFn()
  },
  methods: {
    async testAPIFn () {
      const res = await testAPI()
      console.log(res)
    }
  }
}
</script>

<style lang="less" ></style>
