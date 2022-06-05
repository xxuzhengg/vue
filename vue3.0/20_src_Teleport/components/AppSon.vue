<template>
  <div class="son">
    <h3>我是Son组件</h3>
    <AppDialog/>
  </div>
</template>

<script>
import AppDialog from './AppDialog.vue'

export default {
  name: 'AppSon',
  components: {AppDialog}
}
</script>

<style>
.son {
  background-color: orange;
  padding: 10px;
}
</style>