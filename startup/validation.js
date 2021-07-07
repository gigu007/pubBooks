const Joi = require('joi')


module.exports=function(){
  Joi.objectedId=require('joi-objectid')(Joi);
}