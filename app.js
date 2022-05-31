const express = require('express');
const app = express();


//routes


const port=3000;
app.get('/hello', (req, res) => {
  res.send('Task Manager app')
})

app.listen(port,console.log(`server is listening on port ${port}...`))