const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [];

app.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    users.push({
        username,
        email,
        password
    });

    res.json({
        message: "Registration Successful"
    });
});

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const user = users.find(
        u => u.email === email &&
             u.password === password
    );

    if(user){
        res.json({
            message: "Login Successful",
            user
        });
    } else {
        res.status(401).json({
            message: "Invalid Email or Password"
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});