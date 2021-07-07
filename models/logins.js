const Joi=require('joi');

module.exports=function  validate(req) {
    const schema=Joi.object({
      email:Joi.string().min(5).max(255).email(),
      password:Joi.string().min(8).max(255)
    });
    return schema.validate(req);
 }
 