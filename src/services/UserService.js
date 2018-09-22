import axios from 'axios'

export default{
  getRepos() {
    axios.get('https://api.github.com/search/repositories', {params: {q: 'Shopify', page: 1, per_page: 10}})
      .then(function (response) {
        console.log(response.data)
        console.log("successful fetch")
        return response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return error.data
      })
  }
}


