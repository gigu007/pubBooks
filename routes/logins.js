const Joi=require('joi');
const bcrypt=require('bcrypt');
const _ =require('lodash');
const {validate}=require('../models/logins');
const {User}=require('../models/user');
const mongoose =require('mongoose');
const express=require('express');
const router=express.Router();

router.post('/', async (req,res)=>{
  const{error}=validate(req.body);
  if(error)return res.status(400).send(error.details[0].message);

  let user = await User.findOne({email:req.body.email});
  if(!user)return res.status(400).send('invalid email or password');

  const validPassword=await bcrypt.compare(req.body.password, user.password)
  if(!validPassword)return res.status(400).send('invalid email or password');

  res.send(true);
});
module.exports=router;