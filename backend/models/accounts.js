const pool = require("../db/pool");

const accounts = {
  create: (account) =>
    new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO accounts VALUES ($1, $2, $3, $4, $5)",
        [
          account.user_id,
          account.username,
          account.password,
          account.email,
          account.created_on
        ],
        (err, res) => {
          if (err) {
            reject(err.message);
          } else {
            resolve(res.rows);
          }
        }
      );
    }),
  findAll: () =>
    new Promise((resolve, reject) => {
      pool.query("SELECT * from accounts", (err, res) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(res.rows);
        }
      });
    }),
  findByEmail: (email) =>
    new Promise((resolve, reject) => {
      pool.query(
        "SELECT * FROM accounts WHERE email = $1",
        [email],
        (err, res) => {
          if (err) {
            reject(err.message);
          } else {
            resolve(res.rows);
          }
        }
      );
    }),

  findById: (id) =>
    new Promise((resolve, reject) => {
      pool.query(
        "SELECT * FROM accounts WHERE user_id = $1",
        [id],
        (err, res) => {
          if (err) {
            reject(err.message);
          } else {
            resolve(res.rows);
          }
        }
      );
    }),
};

module.exports = accounts;
