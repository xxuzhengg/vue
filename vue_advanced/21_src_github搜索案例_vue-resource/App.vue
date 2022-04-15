<template>
  <div class="container">
    <AppSearch/>
    <AppList/>
  </div>
</template>

<script>
import AppSearch from './components/AppSearch'
import AppList from './components/AppList'

export default {
  name: 'App',
  components: {AppSearch, AppList}
}
</script>
