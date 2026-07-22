require("./src/server");

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const PORT = process.env.PORT || 4001;

// Health Check
app.get("/", (req, res) => {
    res.json({
        service: "Authentication Service",
        status: "Running"
    });
});

// Register
app.post("/register", async (req, res) => {

    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    res.status(201).json({
        success: true,
        user: {
            name,
            email,
            password: hashedPassword
        }
    });

});

// Login
app.post("/login", async (req, res) => {

    const { email } = req.body;

    const token = jwt.sign(
        { email },
        process.env.JWT_SECRET || "secretkey",
        { expiresIn: "7d" }
    );

    res.json({
        success: true,
        accessToken: token
    });

});

// Verify Token
app.get("/verify", (req, res) => {

    const token = req.headers.authorization?.split(" ")[1];

    if (!token)
        return res.status(401).json({
            message: "Token Missing"
        });

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET || "secretkey"
        );

        res.json(decoded);

    } catch {

        res.status(401).json({
            message: "Invalid Token"
        });

    }

});

app.listen(PORT, () => {

    console.log(`Authentication Service running on ${PORT}`);

});
