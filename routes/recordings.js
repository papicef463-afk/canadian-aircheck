const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all recordings with optional filters
router.get('/', (req, res) => {
  const { channelId, date, time } = req.query;
  let query = 'SELECT * FROM recordings WHERE 1=1';
  const params = [];

  if (channelId) {
    query += ' AND channelId = ?';
    params.push(channelId);
  }

  if (date) {
    query += ' AND date = ?';
    params.push(date);
  }

  if (time) {
    const hour = time.split(':')[0];
    query += ' AND SUBSTR(time, 1, 2) = ?';
    params.push(hour.padStart(2, '0'));
  }

  query += ' ORDER BY date DESC, time DESC';

  db.all(query, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows || []);
  });
});

// Search recordings
router.get('/search', (req, res) => {
  const { query, channelId, date, time } = req.query;
  let sql = 'SELECT * FROM recordings WHERE 1=1';
  const params = [];

  if (query) {
    sql += ' AND (title LIKE ? OR description LIKE ? OR program LIKE ?)';
    const searchTerm = `%${query}%`;
    params.push(searchTerm, searchTerm, searchTerm);
  }

  if (channelId) {
    sql += ' AND channelId = ?';
    params.push(channelId);
  }

  if (date) {
    sql += ' AND date = ?';
    params.push(date);
  }

  if (time) {
    const hour = time.split(':')[0];
    sql += ' AND SUBSTR(time, 1, 2) = ?';
    params.push(hour.padStart(2, '0'));
  }

  sql += ' ORDER BY date DESC, time DESC';

  db.all(sql, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows || []);
  });
});

// Get recording by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM recordings WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Recording not found' });
    }
    res.json(row);
  });
});

// Delete recording
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM recordings WHERE id = ?', [id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Recording deleted successfully' });
  });
});

module.exports = router;
