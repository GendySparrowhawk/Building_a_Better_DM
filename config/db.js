const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      newUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb");
  } catch (err) {
    console.error("Failed to connect to mongoDB", error);
    process.exit(1);
  }
}

module.exports = connectDB;
