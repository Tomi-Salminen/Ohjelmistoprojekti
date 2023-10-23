const { Pool } = require('pg')

// TODO: siirrä nämä .env tiedostoon ja tee tarvitavat muutokset workflow tiedosotihin
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

module.exports = pool;
//