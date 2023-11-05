const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/config");
// const Pusher = require('pusher');
// const generatePDF = require("./generatePdf");
var axios = require("axios");
const bodyParser = require("body-parser");

const EventRoutes = require("./routes/EventRoutes");

dotenv.config();

// Connecting to mongodb server
connectDB();

// express application
const app = express();

// Body Parser middleware, no need to install body-parser package
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// allow CORS
app.use(cors());

//Port
const PORT = 8080;

app.use("/event", EventRoutes);

const server = app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}.`);
});
