<template>
  <div class="app-container">
    <div class="left">
      <form class="form-search">
        <div class="input-append">
          <input type="text" v-model="search" class="span2 search-query">
          <button type="submit" class="btn btn-search" @click="updateSearch(search)">Search</button>
        </div>
      </form>
      <table>
        <tr class="labels">
          <th>Name</th>
          <th>Language</th>
          <th>Latest tag</th>
          <th></th>
        </tr>
        <tr v-for="item in results">
          <td> <a :href="item['html_url']" target="_blank">{{item['full_name']}}</a></td>
          <td>{{item['language']}}</td>
          <td>{{item['latest_tag']}}</td>
          <td>
            <button v-if="!isSelected(item['id'])" class="btn btn-link"
                    v-on:click="addToSelection(item)">Add</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="right">
      <table>
        <tr class="labels">
          <th>Name</th>
          <th>Language</th>
          <th>Latest tag</th>
          <th></th>
        </tr>
        <tr v-for="item in selected">
          <td><a :href="item['html_url']" target="_blank">{{item['full_name']}}</a></td>
          <td>{{item['language']}}</td>
          <td>{{item['latest_tag']}}</td>
          <td>
            <button v-if="isSelected(item['id'])" class="btn btn-link"
                    v-on:click="removeFromSelection(item)">Remove</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'main-page',
    data () {
      return {
        results: [],
        selected: [],
        search: 'test'
      }
    },
    watch: {
      search: function() {
        if (this.search === '') this.results = []
      }
    },
    methods: {
      getRepos () {
        let self = this
        this.results = axios.get('https://api.github.com/search/repositories', {params: {q: this.search, page: 1, per_page: 10}})
          .then(function (response) {
            console.log("successful fetch")
            self.results = response.data.items
            for (let i = 0; i < self.results.length; i++) {
              self.getTag(i)
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      },
      getTag (index) {
        var self = this
        axios.get(self.results[index]['tags_url'])
          .then(function (response) {
            console.log("successful get tag")
            if (response.data[0]) {
              self.$set(self.results[index], 'latest_tag', response.data[0]['name'])
            }
            else self.$set(self.results[index], 'latest_tag', '')
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      },
      updateSearch(search) {
        this.getRepos()
      },
      addToSelection (item) {
        this.selected.push(item)
      },
      removeFromSelection(item) {
        let index = 0
        for (let i = 0; i < this.selected.length; i++) {
          if (this.selected[i] === item) index = i
        }
        this.selected.splice(index, 1)
      },
      isSelected (id) {
        for (let i = 0; i < this.selected.length; i++) {
          if (this.selected[i]['id'] === id) return true
        }
        return false
      }
    },
    mounted () {
      this.getRepos()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app-container {
    height: 100%;
    position: relative;
  }
  .left {
    width: 50%;
    float: left;
    height: 100%;
    padding: 3% 4%;
  }
  .right {
    width: 50%;
    float: right;
    background-color: #F3ECFE;
    height: 100%;
    padding: 3% 4%;
  }
  table {
    font-size: 11px;
    width: 100%;
  }
  .input-append {
    margin-bottom: 30px;
  }
  .search-query {
    width: 70%;
    height: 2rem;
    border: 0.8px solid #3b3b3b;
    padding: 0 10px;
    font-size: 11px;
  }
  .btn-search {
    color: white;
    width: 100px;
    height: 2rem;
    background-color: #7433F1;
    font-size: 11px;
    margin-left: 10px;
  }
  .btn-link {
    color: #7433F1;
    font-size: 11px;
    padding: 0;
  }
  .labels {
    vertical-align: top;
    height: 25px;
  }
</style>
