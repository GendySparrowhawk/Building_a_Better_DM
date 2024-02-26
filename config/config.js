require("dotenv").config();

module.exports = {
  mongodbURI:
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/fifth_edition",
};
