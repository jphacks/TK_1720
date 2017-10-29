var axios = require('axios')

axios.get('http://localhost:3000/api')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

axios.post('http://localhost:3000/api/users/create', {
  email: 'hoge@gmail.com',
  password: 'hugahuga'
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
