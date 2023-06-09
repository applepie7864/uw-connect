const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "cy70ag04C&C",
    database: "uwConnect",
    port: 3306
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users (name, email, pwd) VALUES (?)";
    const values = [req.body.name.toString(), req.body.email.toString(), req.body.password.toString()];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.log(err);
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ? AND pwd = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.log(err);
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failure");
        }
    });
});

app.listen(8081, () => {
    console.log("listening");
})
