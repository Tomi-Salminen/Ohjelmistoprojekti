const pool = require('../db/pool');

// Object representing CRUD operations for the 'plants' table
const plants = {
  // retrieve all plants from the database
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

  // retrieve a specific plant by ID from the database
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

  // create a new plant in the database
  create: (plant) =>
    new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO plants (name, description, price, image) VALUES ($1, $2, $3, $4) RETURNING id",
        [
          plant.name,
          plant.description,
          plant.price,
          plant.image
        ],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    }),

  // update an existing plant in the database by ID
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

  // delete a plant from the database by ID
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