
const mongoose=require('mongoose');
const Joi=require('joi');

const{actionSchema}=require('./actionStories');
// const { genreSchema } = require('../models/genres');


const ActionBooks= mongoose.model('ActionBooks',new mongoose.Schema({
    //  genre:{
    //      type:genreSchema,
    //      required:true
    //  },
    actionId:{
         type:actionSchema,
         required:true
     },
     
        country:{
         type:String,
         minlength:3,
         maxlength:30,
         required:true
     },
     language:{
         type:String,
         minlength:3,
         maxlength:30,
         required:true
     },
     author:{
         type:String,
         minlength:2,
         maxlength:30,
         required:true
     }
    }));
    
    function validateActionBooks(actionBooks){
        const schema=Joi.object({
            country:Joi.string().min(3).max(30).required(),
            
            actionId:Joi.string().required(),
            language:Joi.string().min(3).max(30),
            author:Joi.string().min(3).max(30).required()
            
           });
        return schema.validate(actionBooks);
    }
exports.ActionBooks=ActionBooks;

    exports.validate=validateActionBooks;

