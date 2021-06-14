const mongoose=require('mongoose');
const Joi = require('joi');
const express=require('express');
const genres=require('./routes/genres');
const children=require('./routes/childrenStories');
const action=require('./routes/actionStories');
const romance=require('./routes/romance');
const sciFi=require('./routes/sciFi');
const user=require('./routes/user')
const auth=require('./routes/auth');
const horrors=require('./routes/horrors');
const actionBooks=require('./routes/actionBooks');

const app=express();
mongoose.connect('mongodb://localhost/pubBooks')
.then(()=>console.log('connected to the database'))
.catch(err => console.error('could not connect to the database...',err));
app.use('/api/actionBooks',actionBooks);
app.use(express.json());
app.use('/api/genres',genres);
app.use('/api/sciFi',sciFi);
app.use('api/auth',auth);
app.use('/api/horrors',horrors)
app.use('/api/children',children);
app.use('/api/romance',romance);
app.use('/api/action',action);
app.use('/api/user',user);
const port=process.env.PORT || 2678;
app.listen(port,()=>console.log(`Listening on port ${port}....`));