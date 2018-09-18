<template>
  <div class="container">
    <div id="header">
      <h1>My Github Favourites</h1>
    </div>
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

   body, .container {
     margin: 0;
     height: 100%;
     font-family: 'Roboto', sans-serif;
}
  h1 {
    color: white;
    text-align: center;
    margin: 0;
    padding-top: 40px;

  }
  #header {
    background-color: #7433F1;
    width: 100%;
    height: 120px;
  }
</style>
