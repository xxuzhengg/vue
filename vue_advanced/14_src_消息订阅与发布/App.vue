<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <AppSchool/>
    <AppStudent/>
  </div>
</template>

<script>
import AppStudent from './components/AppStudent'
import AppSchool from './components/AppSchool'

export default {
  name: 'App',
  components: {AppSchool, AppStudent},
  data() {
    return {
      msg: '你好啊！',
    }
  }
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
