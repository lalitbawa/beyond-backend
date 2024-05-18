//necessary importss
const express = require('express');
const server = express();
const connectDatabase = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cors = require('cors');

// Connect to MongoDB
connectDatabase();

// Middleware
server.use(express.json());
server.use(cors());

// Routes
server.use('/users', userRoutes);
server.use('/products', productRoutes);
server.use('/cart', cartRoutes);
server.use('/orders', orderRoutes);

// Error handling middleware
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log('Server started at http://localhost:8080/');
});