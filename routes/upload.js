const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const db = require('../db');

// Configure multer for video uploads
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `aircheck-${timestamp}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 * 1024 }, // 5GB
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/x-matroska'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only video files are allowed.'));
    }
  }
});

// Upload recording
router.post('/recording', upload.single('video'), (req, res) => {
  const { title, channelId, date, time, duration, description, program, crtcCert } = req.body;

  if (!title || !channelId || !date || !time || !req.file) {
    // Clean up uploaded file if validation fails
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const videoUrl = `/uploads/${req.file.filename}`;
  const fileSize = req.file.size;

  db.run(
    `INSERT INTO recordings (channelId, title, date, time, duration, videoUrl, description, program, crtcCert, fileSize)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [channelId, title, date, time, duration || 60, videoUrl, description || '', program || 'Recorded Program', crtcCert || 'CRTC-2024', fileSize],
    function(err) {
      if (err) {
        // Clean up file on database error
        fs.unlinkSync(req.file.path);
        return res.status(400).json({ error: err.message });
      }
      res.status(201).json({
        id: this.lastID,
        title,
        channelId,
        date,
        time,
        duration,
        videoUrl,
        description,
        program,
        crtcCert,
        fileSize
      });
    }
  );
});

module.exports = router;
