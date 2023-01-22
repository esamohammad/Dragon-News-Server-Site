const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('News Api Running') //ata Ui te dekhabe
})

app.listen(port, () => {
  console.log(`Dragon News Server Running on port ${port}`)
})

//ata cmd server a dekhabe
// Dragon News Server Running on port