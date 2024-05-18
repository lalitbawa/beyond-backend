const mongoose = require('mongoose');
// load environment variables
const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB
//contains credentials for connecting to the MongoDB database
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.SECRET_LINK, {
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;