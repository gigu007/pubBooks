const helmet=require('compression');
const compression=require('compression');  
module.exports=function(app)  {
    app.use(helmet());
    app.use(compression());
}