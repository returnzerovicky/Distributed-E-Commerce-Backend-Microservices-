require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const notificationRoutes = require("./routes/notificationRoutes");
const {
    createNotificationTable,
} = require("./models/Notification");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {

    res.json({
        success: true,
        service: "Notification Service",
        version: "1.0.0"
    });

});

app.use("/api/notifications", notificationRoutes);

const PORT = process.env.PORT || 4005;

(async () => {

    await createNotificationTable();

    app.listen(PORT, () => {

        console.log(`📨 Notification Service running on ${PORT}`);

    });

})();
