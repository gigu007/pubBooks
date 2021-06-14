const mongoose=require('mongoose');
const Joi=require('joi');
const { genreSchema } = require('./genres');

const SciFi= mongoose.model('sciFi',new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    country:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    datePublished:{
        type:Date,
        required:true

    },
    language:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    author:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    url:{
        type:String,
        required:true
    },
    genre:{
        type:genreSchema,
        required:true
    }
    
    }));
    function validateSciFi(sciFi){
        const schema=Joi.object({
            title:Joi.string().min(2).max(50).required(),
            genreId:Joi.string().required(),
            datePublished:Joi.number().required(),
            country:Joi.string().min(3).max(30).required(),
            language:Joi.string().min(4).max(24).required(),
            author:Joi.string().min(2).max(50).required(),
            url:Joi.string().min(9).max(150)
            
           });
        return schema.validate(sciFi);
    }
exports.SciFi=SciFi;
    exports.validate=validateSciFi;

