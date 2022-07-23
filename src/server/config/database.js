const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
    host: "techconnect-1st-instance.chp39gjnhakx.ap-southeast-2.rds.amazonaws.com",
    user: "admin",
    password:"techconnect1",
    port: 3306,
    database: "externalproject"
})


const database = {
    "databasename": "techconnect",
    "username": "admin",
    "password": "rootpassword"
}
module.exports = connection 