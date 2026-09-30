const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Expose uploads directory for video playback
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database connection
const db = require('./db');

// Route imports
const channelsRoutes = require('./routes/channels');
const recordingsRoutes = require('./routes/recordings');
const uploadRoutes = require('./routes/upload');

app.use('/api/channels', channelsRoutes);
app.use('/api/recordings', recordingsRoutes);
app.use('/api', uploadRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Canadian Aircheck API is running' });
});

// Serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Canadian Aircheck server running on http://localhost:${PORT}`);
});
