const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

// CORS
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// ✅ MUST come BEFORE routes
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/plantRoutes'));
app.use('/api', require('./routes/addToCartRoutes'));
app.use('/api', require('./routes/authRouts'));

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
