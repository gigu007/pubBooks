const express=require('express');
const genres=require('../routes/genres');
const romance=require('../routes/romance');
const horrors=require('../routes/horrors');
const children=require('../routes/childrenStories');
const action=require('../routes/actionStories');
const sciFi=require('../routes/sciFi');
module.exports=function(app){
app.use(express.json());
app.use('/api/genres',genres);
app.use('/api/romance',romance);
app.use('/api/horrors',horrors)
app.use('/api/children',children);
app.use('/api/action',action);
app.use('/api/sciFi',sciFi);
}