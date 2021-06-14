const Joi =require('joi');
const mongoose=require('mongoose');
const {genreSchema}=require('./genres');
const actionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
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
});
const Action =mongoose.model('Action',actionSchema);

function validateAction(action){
            const schema=Joi.object({
                title:Joi.string().min(2).max(50).required(),
                genreId:Joi.string().required(),
                datePublished:Joi.number().required(),
             country:Joi.string().min(3).max(30).required(),
             language:Joi.string().min(4).max(24).required(),
             author:Joi.string().min(2).max(50).required(),
             url:Joi.string().min(9).max(150)
               });
            return schema.validate(action);
        }

        exports.validate=validateAction;
        exports.Action=Action;
        exports.actionSchema=actionSchema;
        