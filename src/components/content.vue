<template>
  <div class="content">
    <div class="left">
      <div v-for="item in data">
        <!--add search bar-->
        {{item}}
      </div>
    </div>
    <div class="right">
      <p>aa</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'content',
    data () {
      return {
        data: [{'name': 'sample', 'language': 'aaaa', 'latest_tag': 'eg'},
          {'name': 'sample2', 'language': 'ssssss', 'latest_tag': 'eggg'},
          {'name': 'pears github project', 'language': 'pear screms', 'latest_tag': 'AAAAA'}]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    height: 100%;
    position: relative;
  }
  .left {
    width: 44%;
    float: left;
    height: 100%;
    padding: 3%;
  }
  .right {
    width: 44%;
    float: right;
    background-color: #F3ECFE;
    height: 100%;
    padding: 3%;
  }
</style>
