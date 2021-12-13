const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "dbfinanciera",
    password: "saus3022",
    port: 5432,
});

module.exports = pool;