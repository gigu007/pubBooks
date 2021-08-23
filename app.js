const express=require('express');
// const config=require('config');

const app=express();
require('./startup/db')();
require('./startup/routes')(app);
const port=process.env.PORT ||3000;
app.listen(port,()=>console.log(`listening on port ${port}`)); 