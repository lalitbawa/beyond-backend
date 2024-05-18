//necessary imports
const fs = require('fs');
const mongoose = require('mongoose');
const connectDatabase = require('./config/database');
const Product = require('./models/productModel');

// Read the JSON file
const jsonData = JSON.parse(fs.readFileSync('exampleData.json', 'utf-8'));

// Function to populate the database
async function populateDatabase() {
  try {
    // Connect to the database
    await connectDatabase();

    // Insert users

    await Product.insertMany(jsonData.products);
    console.log('Products inserted successfully');

    // Disconnect from the database
    await mongoose.disconnect();
    console.log('Disconnected from the database');
  } catch (error) {
    console.error('Error populating the database:', error);
  }
}

// Run the populate function
populateDatabase();