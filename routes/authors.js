// const mongoose=require('mongoose');
// const Joi=require('joi');

// const Genre= mongoose.model('genre',new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         minlength:5,
//         maxlength:50
//     },
//     author:{
//         type:String,
//         required:true,
//         minlength:2,
//         maxlength:50
//     },
//     tags:{
//         type:String,
//         required:true,
//         minlength:4,
//         maxlength:24
//     },
//     yearPublished:{
//         type:Number,
//         required:true
//     },
//     country:{
// type:String,
// required:true,
// minlength:3,
// maxlength:30,
//     },
//     language:{
//         type:String,
//         required:true,
//         minlength:4,
//         maxlength:25,
//     }
// }));
//     function validateGenre(genre){
//         const schema=Joi.object({
//             name:Joi.string().min(2).max(65).required(),
//             tags:Joi.string().min(4).max(24).required(),
//              yearPublished:Joi.number().required(),
//              country:Joi.string().min(3).max(30).required(),
//              language:Joi.string().min(4).max(24).required(),
//              author:Joi.string().min(2).max(50).required()
//            });
//         return schema.validate(genre);
//     }
// exports.Genre=Genre;
//     exports.validate=validateGenre;