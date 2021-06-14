const mongoose=require('mongoose');
const Joi=require('joi');
const User= mongoose.model('User',new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255,
        unique:true
    } ,
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:255,
        
    }
 }));

    function validateUser(user){
        const schema=Joi.object({
            name:Joi.string().min(2).max(50).required(),
            email:Joi.string().min(5).max(255).email(),
            password:Joi.string().min(8).max(255)
           });
        return schema.validate(user);
    }
exports.User=User;

    exports.validate=validateUser;