const {  Romance, validate} = require('../models/romance'); 
const {Genre} = require('../models/genres');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const romance= await Romance.find().sort('name')
  res.send(romance);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  let romance = new Romance({ 
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
  romance = await romance.save();
  
  res.send(romance);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send('Invalid genre.');

  const romance = await Romance.findByIdAndUpdate(req.params.id,
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

  if (!romance) return res.status(404).send('The romance with the given ID was not found.');
  
  res.send(romance);
});

router.delete('/:id', async (req, res) => {
  const romance = await Romance.findByIdAndRemove(req.params.id);

  if (!romance) return res.status(404).send('The romance with the given ID was not found.');

  res.send(romance);
});

router.get('/:id', async (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(404).send('Invalid ID')
  const romance = await Romance.findById(req.params.id);

  if (!romance) return res.status(404).send('The romance with the given ID was not found.');

  res.send(romance);
});

module.exports = router; 