const orders = require("../models/orders");

const createOrder = async (req, res) => {
  // order muoto:
  // [
  //    { plant_id, quantity }
  // ]

  // Extract the 'order' and 'userId' from the request body and user data
  let { order } = req.body;
  const { userId } = req.userData;

  try {
    // Create an order using the 'orders' model
    const response = await orders.createOrder(userId, order);

    // Check if the order creation was successful
    if (!response) {
      res.status(400).send("Could not make an order");
    }

    // Send a success response if the order was created successfully
    res.status(201).send("Order successfully created");
  } catch (err) {
    // Handle any errors that occur during the order creation process
    res.status(500).send("Something went wrong");
  }
};

const getOrdersByUserId = async (req, res) => {
  // Extract the 'userId' from user data and the given user ID from the request parameters
  const { userId } = req.userData;
  const givenUid = req.params.uid;

  // Check if the authenticated user has the same ID as the requested user ID
  if (userId != givenUid) {
    console.log(userId + "  " + givenUid);
    res.status(401).send("Unauthorized");
  }

  try {
    // Retrieve orders for the specified user ID using the 'orders' model
    const response = await orders.findOrdersByUid(userId);

    // Check if orders were found for the user
    if (response.length >= 1) {
      // Send the orders in the response
      res.send(response);
    } else {
      // Send a 404 response if no orders were found for the user
      res.status(404).send("Not Found");
    }
  } catch (err) {
    // Handle any errors that occur during the retrieval of orders
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports = {
  createOrder,
  getOrdersByUserId,
};
