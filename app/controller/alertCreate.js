var axios = require('axios')

// axios({
//   method: 'post',
//   url: 'http://localhost:3000/api/carousel',
//   data: 'hoge'
// })
// .then(response => {
//   console.log(response.data.data)
// })
// .catch(error => {
//   console.log(error)
// })

axios({
  method: 'post',
  url: 'https://loverduck.herokuapp.com/api/alert/create',
  data: {"unique_id"=>21, "alert"=>{}}
})
.then(response => {
  console.log(response.data)
})
.catch(error => {
  console.log(error)
})
