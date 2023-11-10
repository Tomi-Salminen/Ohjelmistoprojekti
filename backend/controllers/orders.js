const orders = require("../models/orders");

const createOrder = async (req, res) => {
  // order muoto:
  // [
  //    { plant_id, quantity }
  // ]

  let { order } = req.body;
  const { userId } = req.userData;
  try {
    const response = await orders.createOrder(userId, order);
    if (!response) {
      res.status(400).send("Could not make an order");
    }

    res.status(201).send("Offer succesfully created");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};

const getOrdersByUserId = async (req, res) => {
  const { userId } = req.userData;
  const givenUid = req.params.uid;

  if (userId != givenUid) {
    console.log(userId + "  " + givenUid);
    res.status(401).send("Unauthorized");
  }

  try {
    const response = await orders.findOrdersByUid(userId);
    console.log(response);
    if (response.length >= 1) {
      res.send(response);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports = {
  createOrder,
  getOrdersByUserId,
};
