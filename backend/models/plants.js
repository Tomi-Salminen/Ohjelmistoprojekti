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
};

module.exports = plants;