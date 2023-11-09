const Joi = require("joi");
const orders = require("../models/orders");
const plants = require("../models/plants");

const createOrder = async (req, res) => {
  // order muoto:
  // [
  //    { plant_id, quantity }
  // ]

  let { order } = req.body;
  const { userId } = req.userData;
  try {
    
    const response = await orders.createOrder(userId);
    
    if (!response) {
        res.status(500).send("Could not make an order");
    }
    const orderId = response.order_id;

    // Maps order to right format, so that it's easy to insert
    order = order.map(plant => `(${orderId}, ${plant.plant_id}, ${plant.quantity})`).join(',');

    if (detailsResponse) {
        res.status(200).send("Order created succesfully!");
    }
    else {
        res.status(500).send("Something went wrong");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

const getOrderByUserId = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await plants.findPlantsById(id);
    if (response.length >= 1) {
      res.send(response);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};


module.exports = {
    createOrder
}
  