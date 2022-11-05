const express = require('express');
const app = express();

const morgan = require('morgan');

require('dotenv/config');
const PORT = process.env.PORT || 3000;
const user = process.env.USER;

app.use(express.json());
app.use(morgan('tiny'));

const details = {
   slackUsername: user,
}

app.get('/', (req, res) => {
   res.send(details)
})

app.post('/', (req, res) => {
   const newProd = req.body;

   var oprt = newProd.operation_type;
   var int1 = newProd.x;
   var int2 = newProd.y;
   newProd.result;

   if (oprt == "addition") {
      newProd.result = int1 + int2;
   } else if (oprt == "subtraction") {
      newProd.result = int1 - int2;
   } else if (oprt == "multiplication") {
      newProd.result = int1 * int2;
   }

   const xyz = {
      slackUsername: user,
      result: newProd.result,
      operation_type: oprt,
   }

   res.send(xyz)
})

app.listen(PORT, () => {
   console.log('Server is running');
})