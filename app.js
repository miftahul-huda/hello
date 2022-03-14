const express = require('express')
const app = express()
const port = process.env.APP_PORT ? process.env.APP_PORT : 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://:${port}`)
})
