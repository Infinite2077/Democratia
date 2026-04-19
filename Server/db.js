import { createPool } from "mysql2"

export default createPool ({
    host:"localhost",
    password:"root",
    user: "root",
    database:"igogorious",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})