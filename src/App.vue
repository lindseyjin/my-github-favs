<template>
  <div id="app">
    <content/>
  </div>
</template>

<script>
import Content from './components/content'

export default {
  name: 'App',
  components: {Content}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
