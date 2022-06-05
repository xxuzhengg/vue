<template>
  <div class="app">
    <h3>我是App组件（祖），{{ name }}--{{ price }}</h3>
    <AppChild/>
  </div>
</template>

<script>
import {reactive, toRefs, provide} from 'vue'
import AppChild from './components/AppChild.vue'

export default {
  name: 'App',
  components: {AppChild},
  setup() {
    let car = reactive({name: '奔驰', price: '40W'})
    provide('car', car) //给自己的后代组件传递数据
    return {...toRefs(car)}
  }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>