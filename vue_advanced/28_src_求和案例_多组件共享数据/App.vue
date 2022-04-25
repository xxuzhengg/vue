<template>
  <div>
    <AppCount/>
    <hr>
    <AppPerson/>
  </div>
</template>

<script>
import AppCount from './components/AppCount'
import AppPerson from './components/AppPerson'

export default {
  name: 'App',
  components: {AppCount, AppPerson},
  mounted() {
    // console.log('App',this)
  },
}
</script>
