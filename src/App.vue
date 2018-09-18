<template>
  <div class="container">
    <div id="header">
      <h1>My Github Favourites</h1>
    </div>
    <Content></Content>
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

   html, body, .container {
     margin: 0;
     height: 100%;
     font-family: 'Roboto', sans-serif;
}
  h1 {
    color: white;
    text-align: center;
    margin: 0;
    padding-top: 45px;
    line-height: 1.4rem;
  }
  #header {
    background-color: #7433F1;
    width: 100%;
    height: 110px;
  }
</style>
