const bcrypt = require("bcryptjs");
const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { AccountSchema } = require("../schemas/accounts");
const accounts = require("../models/accounts");
require('dotenv').config();

const signUpUser = async (req, res) => {
  const { email, password, username } = req.body;
  const { error } = AccountSchema.validate(req.body);
  if (error) {
    console.log(error);
    res.status(400).send(error.details[0].message);
    return;
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return res.status(500).send("Could not create user, try again please");
  }

  const newUser = {
    user_id: v4(),
    username,
    password: hashedPassword,
    email,
    created_on: new Date().toISOString(),
  };

  try {
    const exist = await accounts.findByEmail(newUser.email);
    if (exist.length > 0) {
      return res.status(422).send("Could not create user, user exists");
    }

    const result = await accounts.create(newUser);
    if (!result) {
      console.log(result);
      return res.status(500).send("Could not account user, try again please");
    }

    const token = jwt.sign(
      {
          id: newUser.user_id,
          email: newUser.email
      },
      process.env.JWT_KEY,
      { expiresIn: '1h'}
  )

    res.status(201).json({
      id: newUser.user_id,
      email: newUser.email,
      token
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Could not create user, try again please");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  let identifiedUser;
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
  try {
    isValidPassword = await bcrypt.compare(password, identifiedUser.password);
    if (!isValidPassword) {
      return res.status(401).send("No user found - Check your credentials");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }

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
    }
    const result = await accounts.updateLastLogin(account);

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
    const response = await accounts.findById(uid);
    const account = {
      id: response[0].user_id,
      email: response[0].email,
      username: response[0].username,
      created_on: response[0].created_on,
      last_login: response[0].last_login,
    };
    res.status(200).send(account);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
};

const getAccounts = async (req, res) => {
  try {
    const response = await accounts.findAll();
    res.status(200).send(response);
  } catch(err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
}

module.exports = {
  loginUser,
  signUpUser,
  getUserById,
  getAccounts,
};
