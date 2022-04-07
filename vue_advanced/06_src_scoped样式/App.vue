<template>
  <div>
    <h1 class="title">你好啊</h1>
    <AppSchool/>
    <AppStudent/>
  </div>
</template>

<script>
import AppStudent from './components/AppStudent'
import AppSchool from './components/AppSchool'

export default {
  name: 'App',
  components: {AppSchool, AppStudent}
}
</script>

<style scoped>
.title {
  color: red;
}
</style>
