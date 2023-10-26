const pool = require('../db/pool');

const plants = {
  findAll: () =>
    new Promise((resolve, reject) => {
      pool.query("SELECT * from plants", (err, res) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(res.rows);
        }
      });
    }),
  findPlantsById: (id) =>
    new Promise((resolve, reject) => {
      pool.query(
        "SELECT * FROM plants WHERE id = $1",
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
  create: (plant) =>
    new Promise((resolve, reject)=> {
      pool.query(
        "INSERT INTO plants (name, description, price, image) VALUES ($1, $2, $3, $4)",
        [
          plant.name,
          plant.description,
          plant.price,
          plant.image
        ],
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.rows);
          }
        }
      );
    }),
  updateById: (plant) =>
    new Promise((resolve, reject) => {
      pool.query(
        "UPDATE plants SET name = $1, description = $2, price = $3, image = $4 WHERE id = $5",
        [
          plant.name,
          plant.description,
          plant.price,
          plant.image,
          plant.id
        ],
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.rows);
          }
        }
      );
    }),
  deleteById: (id) => 
    new Promise((resolve, reject) => {
      pool.query(
        "DELETE FROM plants WHERE id = $1",
        [id],
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.rows);
        }
      }
    );
  }),
};

module.exports = plants;