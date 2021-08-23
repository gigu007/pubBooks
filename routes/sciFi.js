const { SciFi, validate} = require('../models/sciFi'); 
const {Genre} = require('../models/genres');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const sciFis= await SciFi.find().sort('name')
  res.send(sciFis);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  let sciFi = new SciFi({ 
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
  sciFi = await sciFi.save();
  
  res.send(sciFi);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  const sciFi = await SciFi.findByIdAndUpdate(req.params.id,
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

  if (!sciFi) return res.status(404).send('The sciFi with the given ID was not found.');
  
  res.send(sciFi);
});

router.delete('/:id', async (req, res) => {
  const sciFi = await SCiFi.findByIdAndRemove(req.params.id);

  if (!sciFi) return res.status(404).send('The sciFi with the given ID was not found.');

  res.send(sciFi);
});

router.get('/:id', async (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(404).send('Invalid ID')
  const sciFi = await SciFi.findById(req.params.id);

  if (!sciFi) return res.status(404).send('The sciFi with the given ID was not found.');

  res.send(sciFi);
});

module.exports = router; 