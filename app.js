const express = require('express');
const app = express();

require('dotenv/config');
const api = process.env.API_URL;

app.get(`${api}/products`, (req, res) => {
   const products = {
      id: 1,
      name: 'Ernest',
      age: 12,
   }
   res.send(products)
})
app.post(`${api}/products`, (req, res) => {
   const newProd = req.body;
   console.log(newProd);
   res.send(newProd)
})

app.listen(3000, () => {
   console.log(api)
   console.log('Server is running')
})