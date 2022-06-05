<template>
  <div class="app">
    <h3>我是App组件</h3>
    <AppChild/>
  </div>
</template>

<script>
import AppChild from './components/AppChild'

export default {
  name: 'App',
  components: {AppChild},
}
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>