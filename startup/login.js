const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');
const logger =winston.createLogger({
  level:'info',
  format:winston.format.json(),
  // defaultMeta:{service:'user-service'},
  transport:[new winston.transports.File({filename:'error.log',level:'error'}),
  new winston.transports.File({filename:'combined.log'})
]

});
if(process.env.NODE_ENV !=='production'){
  logger.add(new winston.transports.Console({
   format:winston.format.simple() 
  }));
}
winston.add(logger);
module.exports=logger; 