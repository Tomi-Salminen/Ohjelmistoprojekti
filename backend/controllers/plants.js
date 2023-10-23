//const Joi = require('joi');
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


module.exports = {
    getPlants,
    getPlantsById,
  };