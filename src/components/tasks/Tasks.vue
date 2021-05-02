<template lang="pug">
  div
    el-row
      el-col
        el-button(
          type="success"
          @click="openDialog") {{ $t( 'application.openDialog' )}}

    el-dialog(
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose")
      span(
        slot="title"
        class="dialog-title") {{ $t( 'application.comments' )}}
      tasks-delivery

</template>

<script>

import TasksDelivery from '@/components/tasks/TasksDelivery'

export default {
  name: 'Tasks',
  components: {
    TasksDelivery
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    openDialog () {
      this.dialogVisible = true
    },
    closeDialog () {
      this.dialogVisible = false
    },
    handleClose () {
      this.closeDialog()
    }
  }
}
</script>

<style lang="scss" scoped>
  .dialog-title {
    font-size: 1.2rem;
    font-weight: 700;
  }
  /deep/ .el-dialog__header {
    border-bottom: 2px solid black;
  }
</style>
