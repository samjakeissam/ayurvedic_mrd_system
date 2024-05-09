const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
  };
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors(corsOptions));

app.get('/test/api/select',(req,res)=>{
    let options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
    res.json(options);
})


app.post('/test/post/', (req, res) => {
  const formData = req.body;
  res.send(`<h1>Form Data Submitted:</h1><pre>${JSON.stringify(formData, null, 2)}</pre>`);
});

app.get('/test/api/fetchform',(req,res)=>{
  let options = {
    text : 'Text 2',
    textarea : 'Textarea 1',
    date : '2024-05-15',
    time: "01:00",
    tel: "9876543210",
    number: "12",
    select: "Option 1",
    MultiSelect: [
      "Option 1",
      "Option 2"
    ],
    checkbox: "true",
    Radio: "Option 3" 
  }
  res.json(options);
})



app.listen(5000);