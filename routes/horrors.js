const { Horror, validate} = require('../models/horror'); 
const {Genre} = require('../models/genres');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const horrors= await Horror.find().sort('name')
  res.send(horrors);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  let horror = new Horror({ 
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
  horror = await horror.save();
  
  res.send(horror);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  const horror = await Horror.findByIdAndUpdate(req.params.id,
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

  if (!horror) return res.status(404).send('The horror with the given ID was not found.');
  
  res.send(horror);
});

router.delete('/:id', async (req, res) => {
  const horror = await Horror.findByIdAndRemove(req.params.id);

  if (!horror) return res.status(404).send('The horror with the given ID was not found.');

  res.send(horror);
});

router.get('/:id', async (req, res) => {
  const horror = await Horror.findById(req.params.id);

  if (!horror) return res.status(404).send('The movie with the given ID was not found.');

  res.send(horror);
});

module.exports = router; 