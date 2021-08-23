const { Action, validate} = require('../models/actionStories'); 
const {Genre} = require('../models/genres');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const action= await Action.find().sort('name')
  res.send(action);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  let action = new Action({ 
    title: req.body.title,
    language:req.body.language,
    country:req.body.country,
    url:req.body.url,
    datePublished:req.body.datePublished,
    author:req.body.author,
    genre: {
      _id: genre._id,
      name: genre.name
    }
  });
  action = await action.save();
  
  res.send(action);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  const action = await Action.findByIdAndUpdate(req.params.id,
    { 
      title: req.body.title,
      language:req.body.language,
    country:req.body.country,
    url:req.body.url,
    datePublished:req.body.datePublished,
    author:req.body.author,
      genre: {
        _id: genre._id,
        name: genre.name
      }
      
    }, { new: true });

  if (!action) return res.status(404).send('The action story with the given ID was not found.');
  
  res.send(action);
});

router.delete('/:id', async (req, res) => {
  const action = await Action.findByIdAndRemove(req.params.id);

  if (!action) return res.status(404).send('The action story with the given ID was not found.');

  res.send(action);
});

router.get('/:id', async (req, res) => {
  
  const action = await Action.findById(req.params.id);

  if (!action) return res.status(404).send('The action story with the given ID was not found.');

  res.send(action);
});

module.exports = router; 