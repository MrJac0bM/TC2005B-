const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'usuarios',
    password: 'Jac0b05981.',
});

module.exports = pool.promise();