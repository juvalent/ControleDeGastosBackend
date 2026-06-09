const Database = require('better-sqlite3');

const db = new Database('gastos.db');

module.exports = db;