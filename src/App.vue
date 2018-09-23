<template>
  <div class="app-container">
    <div id="header">
      <h1>My Github Favourites</h1>
    </div>
    <MainPage></MainPage>
  </div>
</template>

<script>
  import MainPage from './components/main-page'

  export default {
    name: 'App',
    components: {MainPage}
  }
</script>

<style>

  html, body, .app-container {
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
