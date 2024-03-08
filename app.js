const express = require("express");
const mongoose = require('mongoose')
const { mongodbURI } = require('./config/config')
const { spellRoutes, featRoutes, itemRoutes} = require('./routes/');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use('/api', spellRoutes);
app.use('/api', featRoutes);
app.use('/api', itemRoutes);




mongoose.connect(mongodbURI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });