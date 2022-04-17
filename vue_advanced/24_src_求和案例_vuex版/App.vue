<template>
  <div>
    <AppCount/>
  </div>
</template>

<script>
import AppCount from './components/AppCount'

export default {
  name: 'App',
  components: {AppCount},
  mounted() {
    // console.log('App',this)
  },
}
</script>
