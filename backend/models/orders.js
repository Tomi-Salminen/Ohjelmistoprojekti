const pool = require("../db/pool");
const orders = {
  findOrdersByUid: (uid) =>
    new Promise((resolve, reject) => {
      const query =
      `
        SELECT
          o.order_id,
          o.created,
          od.plant_id,
          p.name,
          od.quantity
        FROM
          orders o
          JOIN order_details od ON o.order_id = od.order_id
          JOIN plants p ON od.plant_id = p.id
        WHERE
          o.user_id = $1
      `
      pool.query(query, [uid], (err, res) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(res.rows);
        }
      });
    }),
  createOrder: (uid, order) =>
    new Promise((resolve, reject) => {
      const query =
      `
        WITH new_order AS (
          INSERT INTO orders (user_id) VALUES ($1) RETURNING order_id
        )
        INSERT INTO order_details (order_id, plant_id, quantity)
        SELECT no.order_id, unnest($2::int[]) AS plant_id, unnest($3::int[]) AS quantity
        FROM new_order no
      `
      pool.query(
        query,
        [uid, order.map(p => +p.plant_id), order.map(p => +p.quantity)],
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
