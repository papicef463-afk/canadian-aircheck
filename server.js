const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 * 1024 }, // 5GB limit
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['video/mp4', 'video/quicktime', 'video/x-msvideo'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only video files are allowed.'));
    }
  }
});

// In-memory database (replace with MongoDB/PostgreSQL for production)
let channels = [
  {
    id: 1,
    name: 'TSN',
    fullName: 'The Sports Network',
    category: 'Sports',
    callSign: 'TSN',
    crtcCert: 'CRTC-TSN-2024',
    description: "Canada's premier sports channel"
  },
  {
    id: 2,
    name: 'CTV News Network',
    fullName: 'CTV News Network',
    category: 'News',
    callSign: 'CTV-N',
    crtcCert: 'CRTC-CTV-2024',
    description: '24/7 Canadian and international news'
  },
  {
    id: 3,
    name: 'BBC Canada',
    fullName: 'BBC Canada',
    category: 'Entertainment',
    callSign: 'BBC-CA',
    crtcCert: 'CRTC-BBC-2024',
    description: 'British entertainment and documentaries'
  },
  {
    id: 4,
    name: 'Showcase',
    fullName: 'Showcase',
    category: 'Drama',
    callSign: 'SHO',
    crtcCert: 'CRTC-SHO-2024',
    description: 'Canadian drama series and originals'
  },
  {
    id: 5,
    name: 'Space',
    fullName: 'Space: The Imagination Station',
    category: 'Sci-Fi',
    callSign: 'SPACE',
    crtcCert: 'CRTC-SPACE-2024',
    description: 'Science fiction and fantasy entertainment'
  }
];

let recordings = [
  {
    id: 101,
    channelId: 1,
    title: 'Toronto Raptors vs Boston Celtics',
    date: '2024-09-28',
    time: '19:00',
    duration: 180,
    videoUrl: '/uploads/sample-1.mp4',
    description: 'NBA regular season game',
    program: 'TSN Sports',
    crtcCert: 'CRTC-TSN-2024'
  },
  {
    id: 102,
    channelId: 2,
    title: 'CTV News at 6',
    date: '2024-09-30',
    time: '18:00',
    duration: 30,
    videoUrl: '/uploads/sample-2.mp4',
    description: 'National news broadcast',
    program: 'CTV News',
    crtcCert: 'CRTC-CTV-2024'
  }
];

// Routes

// Get all channels
app.get('/api/channels', (req, res) => {
  res.json(channels);
});

// Get channel by ID
app.get('/api/channels/:id', (req, res) => {
  const channel = channels.find(c => c.id === parseInt(req.params.id));
  if (!channel) return res.status(404).json({ error: 'Channel not found' });
  res.json(channel);
});

// Create new channel (admin)
app.post('/api/channels', (req, res) => {
  const { name, fullName, category, callSign, crtcCert, description } = req.body;
  
  if (!name || !category || !crtcCert) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newChannel = {
    id: Math.max(...channels.map(c => c.id), 0) + 1,
    name,
    fullName: fullName || name,
    category,
    callSign: callSign || name,
    crtcCert,
    description: description || ''
  };

  channels.push(newChannel);
  res.status(201).json(newChannel);
});

// Get all recordings
app.get('/api/recordings', (req, res) => {
  const { channelId, date, time } = req.query;
  
  let filtered = recordings;

  if (channelId) {
    filtered = filtered.filter(r => r.channelId === parseInt(channelId));
  }

  if (date) {
    filtered = filtered.filter(r => r.date === date);
  }

  if (time) {
    const searchHour = time.split(':')[0];
    filtered = filtered.filter(r => r.time.split(':')[0] === searchHour);
  }

  res.json(filtered.sort((a, b) => a.time.localeCompare(b.time)));
});

// Get recording by ID
app.get('/api/recordings/:id', (req, res) => {
  const recording = recordings.find(r => r.id === parseInt(req.params.id));
  if (!recording) return res.status(404).json({ error: 'Recording not found' });
  res.json(recording);
});

// Get recordings for a channel
app.get('/api/channels/:channelId/recordings', (req, res) => {
  const channelId = parseInt(req.params.channelId);
  const channelRecordings = recordings.filter(r => r.channelId === channelId);
  res.json(channelRecordings);
});

// Upload new recording (admin)
app.post('/api/recordings/upload', upload.single('video'), (req, res) => {
  const { title, channelId, date, time, duration, description, program, crtcCert } = req.body;

  if (!title || !channelId || !date || !time || !req.file) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newRecording = {
    id: Math.max(...recordings.map(r => r.id), 0) + 1,
    channelId: parseInt(channelId),
    title,
    date,
    time,
    duration: parseInt(duration) || 60,
    videoUrl: `/uploads/${req.file.filename}`,
    description: description || '',
    program: program || 'Recorded Program',
    crtcCert: crtcCert || 'CRTC-2024'
  };

  recordings.push(newRecording);
  res.status(201).json(newRecording);
});

// Search recordings
app.get('/api/search', (req, res) => {
  const { query, date, time, channelId } = req.query;
  
  let results = recordings;

  if (query) {
    const lowerQuery = query.toLowerCase();
    results = results.filter(r =>
      r.title.toLowerCase().includes(lowerQuery) ||
      r.description.toLowerCase().includes(lowerQuery) ||
      r.program.toLowerCase().includes(lowerQuery)
    );
  }

  if (channelId) {
    results = results.filter(r => r.channelId === parseInt(channelId));
  }

  if (date) {
    results = results.filter(r => r.date === date);
  }

  if (time) {
    const searchHour = time.split(':')[0];
    results = results.filter(r => r.time.split(':')[0] === searchHour);
  }

  res.json(results.sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)));
});

// Delete recording (admin)
app.delete('/api/recordings/:id', (req, res) => {
  const index = recordings.findIndex(r => r.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Recording not found' });
  
  const recording = recordings[index];
  recordings.splice(index, 1);
  
  // Delete video file
  const filePath = path.join(__dirname, 'public', recording.videoUrl);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  res.json({ message: 'Recording deleted' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Canadian Aircheck API running on http://localhost:${PORT}`);
});
