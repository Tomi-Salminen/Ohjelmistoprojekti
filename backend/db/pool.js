const { Pool } = require('pg')
require("dotenv").config();


const pool = new Pool({
  user: process.env.POSTGRESQL_USER,
  host: process.env.POSTGRESQL_HOST,
  database: process.env.POSTGRESQL_DB,
  password: process.env.POSTGRESQL_PASSWORD,
  port: process.env.POSTGRESQL_PORT,
  max: 20,
  ssl: process.env.ENABLE_SSL || false,
  poolIdleTimeout: 60000,
  idleTimeoutMillis: 60000,
  connectionTimeoutMillis: 10000
})

module.exports = pool;