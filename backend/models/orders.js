const pool = require("../db/pool");
const orders = {
  findPlantsByUserId: (uid) =>
    new Promise((resolve, reject) => {
      pool.query("SELECT * FROM plants WHERE id = $1", [id], (err, res) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(res.rows);
        }
      });
    }),
  createOrder: (uid) =>
    new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO orders (user_id) VALUES ($1) RETURNING order_id",
        [uid],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.rows[0]);
          }
        }
      );
    }),
  createOrderDetails: (order) =>
    new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO order_details (order_id, plant_id, quantity) VALUES ${order}`,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    }),
};

module.exports = orders;
