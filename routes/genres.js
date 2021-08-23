// const validateObjectId=require('../middleware/validateObjectid');
// const asyncMiddleware=require('../middleware/async');
// const auth=require('../middleware/auth');
// const admin=require('../middleware/admin');
const Joi=require('joi');
const mongoose=require('mongoose');

const express=require('express');
const { Genre, validate } = require('../models/genres');
const router=express.Router();
// const author=require('./authors');

router.get('/', async(req,res)=>{
     
    const genres = await Genre.find().sort('name');
    res.send(genres);
});
router.get('/:id', async(req,res)=>{
    
    const genre=await Genre.findById(req.params.id);
    if(!genre)res.status(404).send('the genre with the given id was not found');
    res.send(genre);
});
router.post('/', async (req,res)=>{
    const{error}=validate(req.body);
    if(error) { 
        res.status(400).send(error.details[0].message);
        return;
    }
    let genre= new Genre({ name:req.body.name 
                           
    },
             
        
        
        
        );
        
       

   
    genre=await genre.save();
    res.send(genre);
});
router.put('/:id', async (req, res) => {
    const{error} = validate(req.body);
    if(error) return  res.status(400).send(error.details[0].message);
    
    

    const genre = await Genre.findByIdAndUpdate(req.params.id,{name: req.body.name,author:req.body.author
      
    },{
        new:true
    });
    if(!genre)return res.status(404).send('The genre with the given ID was not found');
    res.send(genre);
});
router.delete('/:id',async(req,res)=>{
   const genre=await Genre.findByIdAndRemove(req.params.id);
    if(!genre)res.status(404).send('the genre with the given id was not found');
    res.send(genre);
});


module.exports=router;   
 