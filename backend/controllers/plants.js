const Joi = require('joi');
const plants = require('../models/plants');

//get all plants
const getPlants = async (req, res) => {
  try {
    // Fetch all plants from the database
    const response = await plants.findAll();
    res.send(response);
  } catch (err) {
    // Handle errors
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

//get plants by id
const getPlantsById = async (req, res) => {
  const id  = req.params.id;
  try {
    // Fetch plant by ID from the database
    const response = await plants.findPlantsById(id);
    // Check if plant with the specified ID exists and send the response if the plant is found
    if(response.length >= 1) {
      res.send(response);
    } else {
      // Send a 404 Not Found response if the plant is not found
      res.status(404).send('Not Found');
    }
  } catch (err) {
    // Handle errors
    res.status(500).send("Something went wrong");
  }
};

//create a plant
const createPlant = async (req, res) => {
  // Validate the information using Joi schema
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.string().required(),
    image: Joi.string()
  });
  // Validate the request body against the schema
  const {error} = schema.validate(req.body);
  if(error){
    // Send a 400 Bad Request response if validation fails
    res.status(400).send(error.details[0].message);
    return;
  }

  // Create a new plant object from the request body
  const plant = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  };

  try {
    // Create the new plant in the database
    const response = await plants.create(plant);
    if (response) {
      const newPlantId = response.rows[0].id;
      const plantWithId = { id: newPlantId, ...plant };
      res.status(201).send(plantWithId);
    }
  } catch (err) {
    // Handle errors
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
    // Check if the plant with the specified ID exists
    const result = await plants.findPlantsById(id);
    if (result.length === 0) {
      // Send a 404 Not Found response if the plant is not found
      res.status(404).send('Not Found');
      return;
    }
    // Delete the plant from the database
    const response = await plants.deleteById(id);
    if(response) {
      // Send a 200 OK response if the deletion is successful
      res.status(200).send("Plant deleted");
    }
  } catch (err) {
    // Handle errors
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