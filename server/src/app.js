const express = require("express");
const morgan = require("morgan");

// Initializations
const app = express();
require("./database")

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Router
app.use("/api", require("./routes/api.routes"))
app.use("/mtga", require("./routes/mtga.routes"))
app.use("/", require("./routes/user.routes"))

module.exports = app;