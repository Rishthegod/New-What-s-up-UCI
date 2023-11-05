const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url =
      "mongodb+srv://rajsanghavi9:rajsanghavi9@cluster0.mmmaqhs.mongodb.net/?retryWrites=true&w=majority";
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database Successfully Connected");
      });
  } catch (error) {
    console.log("Error connecting to Database");
    process.exit(1);
  }
};

module.exports = connectDB;
