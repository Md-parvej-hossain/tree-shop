const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// user routes
app.use('/api', require('./routes/userRoutes'));

// plant routes
app.use('/api', require('./routes/plantRoutes'));
// Routes
app.use('/api', require('./routes/addToCartRoutes'));
// Health check
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Server Error',
  });
});

module.exports = app;
