const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all channels
router.get('/', (req, res) => {
  db.all('SELECT * FROM channels ORDER BY name', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows || []);
  });
});

// Get channel by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM channels WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Channel not found' });
    }
    res.json(row);
  });
});

// Get recordings for a channel
router.get('/:id/recordings', (req, res) => {
  const { id } = req.params;
  db.all(
    'SELECT * FROM recordings WHERE channelId = ? ORDER BY date DESC, time DESC',
    [id],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows || []);
    }
  );
});

// Create a new channel (admin only)
router.post('/', (req, res) => {
  const { name, fullName, category, callSign, crtcCert, description } = req.body;

  if (!name || !category || !crtcCert) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  db.run(
    `INSERT INTO channels (name, fullName, category, callSign, crtcCert, description)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [name, fullName || name, category, callSign || name, crtcCert, description || ''],
    function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID, name, fullName, category, callSign, crtcCert, description });
    }
  );
});

module.exports = router;
