<template lang="pug">
  div(class="delivery")
    div(
      v-for="(taskDeliverie, index) in deliveries"
      :key="'task-deliverie'+index")
      el-row(
        type="flex"
        align="middle"
        :gutter="50"
        class="delivery__header")
        el-col(
          :span="20"
          align="left")
          p(class="delivery__title") {{ $t( 'application.version' )}} {{ taskDeliverie.version }}
          p(class="delivery__subtitle") {{ taskDeliverie.nameFile }}
          p(class="delivery__description") {{ taskDeliverie.uploadDate }}
        el-col(:span="4")
          div(class="delivery__icon")
            el-tooltip(
              class="item"
              effect="dark"
              content="Descargar"
              placement="top")
              el-button(
                @click="downloadFile(taskDeliverie.nameFile)"
                icon="el-icon-download"
                :round="false"
                type="text")
      hr
      div(
        v-for="(taskDeliverieComment, index) in taskDeliverie.comments"
        :key="'task-deliverie-comment'+index")
        el-row(
          v-if="!taskDeliverieComment.isProfesor"
          key="is-teacher")
          el-col(:span="24" class="delivery__body-user")
            div(class="delivery__commentary-user")
              p(class="delivery__description-user") {{ taskDeliverieComment.comment }}
              p(class="delivery__date-user") {{ taskDeliverieComment.date }}
            div(class="delivery__avatar-user")
              el-avatar(:src="require(`./../../assets/img/${taskDeliverieComment.user.avatar}.png`)")

        el-row(
          v-else
          key="is-teacher")
          el-col(:span="24" class="delivery__body-teacher")
            div(class="delivery__avatar-teacher")
              el-avatar(:src="require(`./../../assets/img/${taskDeliverieComment.user.avatar}.png`)")
            div(class="delivery__commentary-teacher")
              p(class="delivery__description-teacher") {{ taskDeliverieComment.comment }}
              p(class="delivery__date-teacher") {{ taskDeliverieComment.date }}

      hr(class="delivery__delimitation")

    el-row(
      type="flex"
      align="middle"
      class="delivery__footer")
      el-col
        el-input(
          v-model="msg"
          class="delivery__input-msg")
      el-col(
        :xs="6"
        :sm="6"
        :md="6"
        :lg="3"
        :xl="3"
        class="delivery__input-button")
        el-button(
          :disabled="msg===''"
          @click="addComment"
          icon="el-icon-position"
          circle
          :round="false"
          type="primary")

</template>

<script>

import task from '@/components/tasks/task.json'

export default {
  name: 'TasksDelivery',
  data () {
    return {
      msg: '',
      taskModel: {}
    }
  },
  computed: {
    deliveries () {
      return this.taskModel ? this.taskModel.deliveries || [] : []
    }
  },
  methods: {
    addComment () {
      if (this.msg) {
        // User data must be retrieved from axios ...
        const newComment = {
          user: {
            name: 'María',
            surnames: 'García Muñoz',
            username: 'mgarciam',
            avatar: 'avatar01'
          },
          isProfesor: false,
          comment: this.msg,
          date: this.$moment().format('l h:mm')
        }
        this.taskModel.deliveries[this.taskModel.deliveries.length - 1].comments.push(newComment)
        this.msg = ''
      }
    },
    downloadFile (fileName) {
      // Api call ...
      const linkDownload = document.createElement('a')
      linkDownload.href = ''
      linkDownload.target = '_blank'
      linkDownload.download = fileName + '.pdf'
      linkDownload.click()
    }
  },
  created () {
    // simulate api...
    this.taskModel = { ...task }
  }
}
</script>

<style scoped lang="scss">
  .delivery {
    &__header {
      line-height: 1.5rem;
    }
    &__title {
      text-transform: uppercase;
      font-weight: 700;
      color: black;
    }
    &__subtitle {
      color: blue;
      font-weight: 700;
    }
    &__icon {
      /deep/ .el-button {
        font-size: 30px;
      }
    }
    &__body-user {
      display: flex;
      justify-content: flex-end;
      padding-top: 12px;
    }
    &__commentary-user {
      margin-right: 0px;
      padding: 10px;
      max-width: 80%;
      background-color: blue;
      color: white;
    }
    &__avatar-user {
      padding-left: 10px;
      padding-top: 13px;
    }
    &__avatar-user::before {
      content: '';
      border-style: solid;
      border-width: 15px 15px 15px 15px;
      border-color: transparent transparent transparent blue;
      position: absolute;
      margin-top: 7px;
      margin-left: -10px;
    }
    &__description-user {
      word-break: break-word;
      line-height: 2rem;
      text-align: left;
    }
    &__date-user {
      text-align: left;
    }
    &__body-teacher {
      display: flex;
      justify-content: flex-start;
      padding-top: 12px;
    }
    &__commentary-teacher {
      white-space: normal;
      margin-right: 0px;
      padding: 10px;
      max-width: 80%;
      background-color: #C0C4CC;
      color: black;
    }
    &__avatar-teacher {
      padding-right: 15px;
      padding-top: 13px;
    }
    &__avatar-teacher::after {
      content: '';
      border-style: solid;
      border-width: 15px 15px 15px 0px;
      border-color: transparent #C0C4CC transparent transparent;
      position: absolute;
      margin-top: 7px;
      margin-right: -5px;
    }
    &__description-teacher {
      word-break: break-word;
      line-height: 2rem;
      text-align: left;
    }
    &__date-teacher {
      text-align: left;
    }
    &__delimitation {
      margin-top: 20px;
    }
    &__input-msg {
      /deep/ .el-input__inner {
        border-radius: 100px;
      }
    }
    &__input-button {
      /deep/ .el-button {
        font-size: 20px;
        transform: rotate(45deg);
      }
    }
  }
</style>
