const express = require('express')
const app = express()
const port =5000
//  db.js will connected and all element of food_items will return in terminal
const mongoDB =require("./db")
mongoDB();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3500");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json ())
app.use('https://go-food-24rg.onrender.com/api', require("./Routes/CreatUser"));
app.use('https://go-food-24rg.onrender.com/api', require("./Routes/DisplayData"));
app.use('https://go-food-24rg.onrender.com/api', require("./Routes/OrderData"));

app.get('/', (req, res ) => {
  res.send('Hello World -->')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})