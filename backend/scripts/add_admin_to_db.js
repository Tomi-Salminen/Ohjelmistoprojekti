const bcrypt = require("bcryptjs");
const hashedPassword = bcrypt.hashSync("admin", 12);
const pool = require("../db/pool");

const admin = {
  user_id: "1",
  username: "admin",
  email: "admin@gmail.com",
  password: hashedPassword,
  created_on: new Date().toISOString(),
};

pool
  .query(
    "INSERT INTO accounts (user_id, username, email, password, created_on) VALUES ($1, $2, $3, $4, $5 ) ON CONFLICT (user_id) DO NOTHING",
    [admin.user_id, admin.username, admin.email, admin.password, admin.created_on]
  )
  .catch((err) => console.log(err));