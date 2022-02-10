<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
 margin: 1em;
 border: 2px solid lightgrey;
}

html,body{
  font-family: 'Montserrat', sans-serif;

}
</style>
