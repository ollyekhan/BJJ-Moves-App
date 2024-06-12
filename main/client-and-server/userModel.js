require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
});

//create a new user record in the databsse
const registerUser = (body) => {
    return new Promise(function (resolve, reject) {
        const { email, password } = body;
        pool.query(
        "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
        [email, password],
        (error, results) => {
        if (error) {
            reject(error);
        }
        if (results && results.rows) {
            resolve(
            `A new merchant has been added: ${JSON.stringify(results.rows[0])}`
            );
        } else {
            reject(new Error("No results found"));
        }
        }
    );
    });
};

module.exports = {
    registerUser,
  };