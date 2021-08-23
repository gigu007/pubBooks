const { Children, validate} = require('../models/childrenStories'); 
const {Genre} = require('../models/genres');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const children= await Children.find().sort('name')
  res.send(children);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  let children = new Children({ 
    title: req.body.title,
    author:req.body.author,
    language:req.body.language,
    country:req.body.country,
    datePublished:req.body.datePublished,
    genre: {
      _id: genre._id,
      name: genre.name
    }
  });
  children = await children.save();
  
  res.send(children);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  const children = await Children.findByIdAndUpdate(req.params.id,
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

  if (!children) return res.status(404).send('The children story with the given ID was not found.');
  
  res.send(children);
});

router.delete('/:id', async (req, res) => {
  const children = await Children.findByIdAndRemove(req.params.id);

  if (!children) return res.status(404).send('The children story  with the given ID was not found.');

  res.send(children);
});

router.get('/:id', async (req, res) => {
  
  const children = await Children.findById(req.params.id);

  if (!children) return res.status(404).send('The children story with the given ID was not found.');

  res.send(children);
});

module.exports = router; 