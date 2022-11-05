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
   backend: true,
   age: 21,
   about: "JavaScript rules the world"
}

app.get('/', (req, res) => {
   res.send(details)
})

app.post('/', (req, res) => {
   const obj = req.body;

   var oprt = obj.operation_type;
   var int1 = obj.x;
   var int2 = obj.y;
   obj.result;

   if (oprt == "addition") {
      obj.result = int1 + int2;
   } else if (oprt == "subtraction") {
      obj.result = int1 - int2;
   } else if (oprt == "multiplication") {
      obj.result = int1 * int2;
   }

   const xyz = {
      slackUsername: user,
      result: obj.result,
      operation_type: oprt,
   }

   res.send(xyz)
})

app.listen(PORT, () => {
   console.log('Server is running');
})