const config=require('config'); 
const jwt=require('jsonwebtoken');



module.exports=function(){
    if(!config.get('jwtPrivateKey')){
        throw new Error('FATAL ERROR:jwtPrivateKey is not defined.');
        
    }
    
}