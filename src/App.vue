<template lang="pug">
  div(id="app")
    tasks
</template>

<script>

import Tasks from '@/components/tasks/Tasks'

export default {
  name: 'app',
  components: {
    Tasks
  }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 12px;
  font-weight: 500;
  /* line-height: rem(56); */
  line-height: 20px
}
</style>
