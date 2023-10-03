const client = require("../db/client");

const accounts = {
  findAll: () =>
    new Promise((resolve, reject) => {
      client.connect();

      client.query("Select * from accounts", (err, res) => {
        if (err) {
            reject(err.message);
        } else {
            resolve(res.rows);
        }
        client.end;
      });
    }),

//   findByEmail: (email) =>
//     new Promise((resolve, reject) => {
//       pool.getConnection((err, connection) => {
//         if (err) {
//           return reject(err);
//         }
//         connection.query(
//           "SELECT * FROM users WHERE email LIKE ?;",
//           email,
//           (err, result) => {
//             connection.release();
//             if (err) {
//               return reject(err);
//             }
//             resolve(result);
//           }
//         );
//       });
//     }),
//   findById: (id) =>
//     new Promise((resolve, reject) => {
//       pool.getConnection((err, connection) => {
//         if (err) {
//           return reject(err);
//         }
//         connection.query(
//           "SELECT name, email FROM users WHERE id LIKE ?;",
//           id,
//           (err, result) => {
//             connection.release();
//             if (err) {
//               return reject(err);
//             }
//             resolve(result);
//           }
//         );
//       });
//     }),
};

module.exports = accounts;
