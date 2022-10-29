const express = require('express');
const app = express();

require('dotenv/config');
const api = process.env.API_URL;

app.use(express.json())

app.get('/', (req, res) => {
   const products = {
      slackUsername: 'Ernesto',
      backend: true,
      age: 21,
      bio: 'We worship angular'
   }
   res.send(products)
})

app.listen(3000, () => {
   console.log('Server is running');
})