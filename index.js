const express = require('express');
const app = express();
const cors = require('cors'); //middle ware
const port = process.env.PORT || 5000;

app.use(cors());  // middele ware 



//💥💥💥💥💥💥💥💥💥💥💥💥💥
//data send --ui***
const categories = require('./data/category.json');
//data send --ui@@@
const news = require('./data/news.json');
//💥💥💥💥💥💥💥💥💥💥💥💥💥




//default
app.get('/', (req, res) => {
  res.send('News Api Running') 
  //ata Ui te dekhabe
});





//💥💥💥💥💥💥💥💥💥💥💥💥💥
//data send --ui***
app.get('/news-categories', (req, res) => {
  res.send(categories)
});
//💥💥💥💥💥💥💥💥💥💥💥💥💥






//💥💥💥💥💥💥💥💥💥💥💥💥💥
//category wise data
app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if (id === '08') {
      res.send(news);
  }
  else {
      const category_news = news.filter(n => n.category_id === id);
      res.send(category_news);
  }
})
//💥💥💥💥💥💥💥💥💥💥💥💥💥









//💥💥💥💥💥💥💥💥💥💥💥💥💥
// Link ar jonno ata lagbe only 8 non category nai tai amra all news neye nchhi
app.get('/news', (req, res) =>{
  res.send(news);
});
//💥💥💥💥💥💥💥💥💥💥💥💥💥










//💥💥💥💥💥💥💥💥💥💥💥💥💥
//params--- only for one news item call single news@@@
app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find(n => n._id === id); 
  //*news ke find */
  res.send(selectedNews);
});
//💥💥💥💥💥💥💥💥💥💥💥💥💥







//default
app.listen(port, () => {
  console.log(`Dragon News Server Running on port ${port}`)
});

//ata cmd server a dekhabe
// Dragon News Server Running on port