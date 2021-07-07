const {ActionBooks,validate}=require('../models/actionBooks');
const {Action} = require('../models/actionStories');
// const  {Genre}=require('../models/genres');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/:id', async (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(404).send('Invalid ID')
  const actionBooks= await ActionBooks.findById();
  res.send(actionBooks);
});


router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  // const genre=await Genre.findById(req.body.genreId);
  // if(!genre)res.status(400).send('invalid genre.');
 
  const action = await Action.findById(req.body.actionId);
  if (!action) return res.status(400).send('Invalid actionStory id.');
  let actionBooks = new ActionBooks({ 
    country: req.body.country,
    language:req.body.country,
    author:req.body.author,
    url:req.body.url,
    datePublished:req.body.datePublished,
    
    // genre:{
    //   _id:genre._id,
    //   name:genre.name
    // },
      action: {
      _id: action._id,
      title: action.title
    }
  });
  actionBooks= await actionBooks.save();
  
  res.send(actionBooks);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const action = await Action.findById(req.body.id);
  if (!action) return res.status(400).send('Invalid action story.');

  const actionBooks = await ActionBooks.findByIdAndUpdate(req.params.actionId,
    { 
      language: req.body.language,
      action: {
        _id: action._id,
        name: action.name
      },
      // genre:{
      //   _id:genre.id,
      //   name:genre.name
      // }
      country:req.body.country,
      author:req.body.author
      
    }, { new: true });

  if (!ctionBooks) return res.status(404).send('The Book with the given name is not found');
  
  res.send(actionBooks);
});

router.delete('/:id', async (req, res) => {
  const action = await Action.findByIdAndRemove(req.params.actionId);

  if (!action) return res.status(404).send('The action story with the given ID was not found.');

  res.send(action);
});


module.exports = router; 