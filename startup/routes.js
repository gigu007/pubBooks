const express=require('express');
const genres=require('../routes/genres');
const children=require('../routes/childrenStories');
const action=require('../routes/actionStories');
const romance=require('../routes/romance');
const sciFi=require('../routes/sciFi');
const user=require('../routes/user')
const logins=require('../routes/logins');
const horrors=require('../routes/horrors');
const actionBooks=require('../routes/actionBooks');
const error=require('../middleware/error');
module.exports=function(app){
    app.use('/api/actionBooks',actionBooks);
app.use(express.json());
app.use('/api/genres',genres);
app.use('/api/sciFi',sciFi);
app.use('api/logins',logins);
app.use('/api/horrors',horrors)
app.use('/api/children',children);
app.use('/api/romance',romance);
app.use('/api/action',action);
app.use('/api/user',user);
app.use(error)

}