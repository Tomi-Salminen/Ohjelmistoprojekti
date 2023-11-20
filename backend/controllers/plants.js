const Joi = require('joi');
const plants = require('../models/plants');

//get all the plants
const getPlants = async (req, res) => {
  try {
    const response = await plants.findAll();
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

//get plants by id
const getPlantsById = async (req, res) => {
    const id  = req.params.id;
    try {
      const response = await plants.findPlantsById(id);
      if(response.length >= 1) {
      res.send(response);
      }
      else {
        res.status(404).send('Not Found');
      }
    } catch (err) {
      res.status(500).send("Something went wrong");
    }
  };

//create a plant
const createPlant = async (req, res) => {
  //validate the information using Joi
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.string().required(),
    image: Joi.string()
  });
  //console.log(req.body);
  
  const {error} = schema.validate(req.body);
  if(error){
    res.status(400).send(error.details[0].message);
    return;
  }

  const plant = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  };

  try {
    const response = await plants.create(plant);
    if (response) {
      const newPlantId = response.rows[0].id;
      const plantWithId = { id: newPlantId, ...plant };

      res.status(201).send(plantWithId);
    }

  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};


//update existing plant
const updatePlant = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  //validate information
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.string().required(),
    image: Joi.string()
  });
  //console.log(req.body);
  
  const {error} = schema.validate(req.body);
  if(error){
    res.status(400).send(error.details[0].message);
    return;
  }

  const plant = {
    id: id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  };
  
  try {
    const result = await plants.findPlantsById(id);
    if (result.length === 0) {
      res.status(404).send('Not Found');
      return;
    }
    const response = await plants.updateById(plant);
    if (response) {  
      res.status(200).send("Plant information updated");
    }
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};

//delete plant by id
const deletePlant = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const result = await plants.findPlantsById(id);
    if (result.length === 0) {
      res.status(404).send('Not Found');
      return;
    }
    const response = await plants.deleteById(id);
    if(response) {
      res.status(200).send("Plant deleted");
    }
    
  } catch (err) {
    res.status(500).send("Something went wrong");
  } 
};


module.exports = {
    getPlants,
    getPlantsById,
    createPlant,
    updatePlant,
    deletePlant,
  };