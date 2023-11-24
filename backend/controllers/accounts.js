const bcrypt = require("bcryptjs");
const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { AccountSchema } = require("../schemas/accounts");
const accounts = require("../models/accounts");
require("dotenv").config();

const signUpUser = async (req, res) => {
  // Extract necessary information from the request body
  const { email, password, username } = req.body;

  // Validate the request body against a predefined schema
  const { error } = AccountSchema.validate(req.body);
  if (error) {
    console.log(error);
    res.status(400).send(error.details[0].message);
    return;
  }

  // Hash the user's password using bcrypt with a salt factor of 12
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return res.status(500).send("Could not create user, try again please");
  }

  // Create a new user object with hashed password and other details
  const newUser = {
    user_id: v4(),
    username,
    password: hashedPassword,
    email,
    created_on: new Date().toISOString(),
  };

  // Check if a user with the same email already exists
  try {
    const exist = await accounts.findByEmail(newUser.email);
    if (exist.length > 0) {
      return res.status(422).send("Could not create user, user exists");
    }

    // Create the new user in the database
    const result = await accounts.create(newUser);
    if (!result) {
      console.log(result);
      return res.status(500).send("Could not account user, try again please");
    }

    // Generate a JWT token for the new user
    const token = jwt.sign(
      {
        id: newUser.user_id,
        email: newUser.email,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );

    // Return user information and token in the response
    res.status(201).json({
      id: newUser.user_id,
      email: newUser.email,
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Could not create user, try again please");
  }
};

const loginUser = async (req, res) => {
  // Extract email and password from the request body
  const { email, password } = req.body;
  let identifiedUser;

  // Find user by email in the database
  try {
    const result = await accounts.findByEmail(email);
    if (!result[0]) {
      return res.status(401).send("No user found - Check your credentials");
    }
    identifiedUser = result[0];
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }

  let isValidPassword;

  // Compare provided password with the hashed password in the database
  try {
    isValidPassword = await bcrypt.compare(password, identifiedUser.password);
    if (!isValidPassword) {
      return res.status(401).send("No user found - Check your credentials");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }

  // Generate a new JWT token for the authenticated user
  try {
    const token = jwt.sign(
      {
        id: identifiedUser.user_id,
        email: identifiedUser.email,
      },
      process.env.JWT_KEY,
      { expiresIn: "24h" }
    );
    const account = {
      id: identifiedUser.user_id,
      last_login: new Date().toISOString(),
    };

    // Update the last login timestamp in the database
    const result = await accounts.updateLastLogin(account);

    // Return user information and token in the response
    res.status(201).json({
      id: identifiedUser.user_id,
      email: identifiedUser.email,
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
};

const getUserById = async (req, res) => {
  try {
    const { uid } = req.params;

    // Find user by ID in the database
    const response = await accounts.findById(uid);
    const account = {
      id: response[0].user_id,
      email: response[0].email,
      username: response[0].username,
      created_on: response[0].created_on,
      last_login: response[0].last_login,
    };

    // Return user information in the response
    res.status(200).send(account);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
};

const getAccounts = async (req, res) => {
  try {
    // Retrieve all user accounts from the database
    const response = await accounts.findAll();
    
    // Return the list of user accounts in the response
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
};

module.exports = {
  loginUser,
  signUpUser,
  getUserById,
  getAccounts,
};
