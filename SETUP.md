# Canadian Aircheck - Setup Guide

## Full-Stack Application Setup

This guide will walk you through setting up the complete Canadian Aircheck application on your local machine.

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/papicef463-afk/canadian-aircheck.git
   cd canadian-aircheck
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Open your browser and navigate to: `http://localhost:5000`
   - The app will automatically load channels and sample data

### Project Structure

```
canadian-aircheck/
├── server.js              # Main Express server
├── db.js                  # SQLite database initialization
├── package.json           # Project dependencies
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── routes/
│   ├── channels.js        # Channel management endpoints
│   ├── recordings.js      # Recording query endpoints
│   └── upload.js          # Video upload endpoints
├── public/
│   └── index.html         # Frontend application
├── uploads/               # Video file storage
└── aircheck.db            # SQLite database (auto-created)
```

### API Endpoints

#### Channels
- `GET /api/channels` - Get all channels
- `GET /api/channels/:id` - Get channel by ID
- `GET /api/channels/:id/recordings` - Get channel's recordings
- `POST /api/channels` - Create new channel (admin)

#### Recordings
- `GET /api/recordings` - Get all recordings with filters
  - Query params: `?channelId=X&date=YYYY-MM-DD&time=HH:MM`
- `GET /api/recordings/:id` - Get recording by ID
- `GET /api/recordings/search` - Search recordings by title/description
  - Query params: `?query=text&channelId=X&date=YYYY-MM-DD&time=HH:MM`
- `DELETE /api/recordings/:id` - Delete recording

#### Upload
- `POST /api/upload/recording` - Upload new broadcast recording
  - Multipart form data with video file
  - Required fields: title, channelId, date, time, duration, crtcCert

### Features

**User Features:**
- Browse CRTC-certified Canadian TV channels
- Search for archived broadcasts by date and time
- Watch recorded programs with HTML5 video player
- View complete broadcast metadata
- Keyboard shortcuts (spacebar to play/pause)

**Admin Features:**
- Upload new recorded broadcasts
- Assign recordings to channels
- Add broadcast metadata
- Delete old recordings

### Database

The app uses SQLite for simplicity. The database is automatically created on first run with:
- `channels` table - TV channel information
- `recordings` table - Broadcast archive records

Database is stored in `aircheck.db` in the project root.

### Sample Data

The app comes pre-populated with 8 CRTC-certified Canadian TV channels:
1. TSN - Sports
2. CTV News Network - News
3. BBC Canada - Entertainment
4. Showcase - Drama
5. Space - Sci-Fi
6. Discovery Channel - Documentary
7. History Channel - Documentary
8. APTN - Indigenous Content

### Upload a Recording

1. Scroll to the "Admin Panel - Upload New Recording" section
2. Fill in the recording details:
   - Program title
   - Select channel from dropdown
   - Broadcast date and time
   - Duration in minutes
   - CRTC certification code
3. Select video file (MP4, MOV, AVI, MKV supported)
4. Click "Upload Recording"
5. Video will be stored in `uploads/` directory

### Production Deployment

For production deployment:

1. **Use a real database** (PostgreSQL recommended):
   ```bash
   npm install pg pg-promise
   ```
   Update `db.js` to use PostgreSQL

2. **Use cloud storage** for video files (AWS S3, Google Cloud Storage):
   ```bash
   npm install aws-sdk
   ```

3. **Set up environment variables**:
   ```bash
   PORT=5000
   NODE_ENV=production
   DATABASE_URL=postgresql://...
   AWS_ACCESS_KEY_ID=...
   AWS_SECRET_ACCESS_KEY=...
   ```

4. **Add authentication**:
   ```bash
   npm install jsonwebtoken bcrypt
   ```

5. **Use a process manager** (PM2):
   ```bash
   npm install -g pm2
   pm2 start server.js --name "aircheck"
   ```

### Troubleshooting

**Port already in use:**
```bash
PORT=3000 npm start
```

**Database errors:**
- Delete `aircheck.db` and restart to recreate

**Video upload fails:**
- Check file size (max 5GB)
- Verify file format (MP4/MOV/AVI/MKV)
- Check `uploads/` directory permissions

**CORS errors:**
- Update `FRONTEND_URL` in `.env`

### Support

For issues or feature requests, please open an issue on GitHub.

### License

MIT - See LICENSE file for details
