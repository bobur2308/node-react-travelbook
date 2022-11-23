const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000;
require('dotenv').config()
const connectDB = require('./config/db')

connectDB()
// body parserr
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use('/api/travel',require('./routes/travelRoutes'))

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})
