<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <AppSon/>
  </div>
</template>

<script>
import AppSon from './AppSon'

export default {
  name: 'AppChild',
  components: {AppSon},
}
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>