const express = require('express')
const app = express()
const port = process.env.PORT || 5000;


//data send --
const categories = require('./data/category.json');


app.get('/', (req, res) => {
  res.send('News Api Running') //ata Ui te dekhabe
});

app.get('/news-categories', (req, res) => {
  res.send(categories)
});


app.listen(port, () => {
  console.log(`Dragon News Server Running on port ${port}`)
});

//ata cmd server a dekhabe
// Dragon News Server Running on port