const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'aircheck.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to SQLite database at', dbPath);
    initializeDatabase();
  }
});

function initializeDatabase() {
  db.serialize(() => {
    // Create channels table
    db.run(`
      CREATE TABLE IF NOT EXISTS channels (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        fullName TEXT NOT NULL,
        category TEXT NOT NULL,
        callSign TEXT NOT NULL,
        crtcCert TEXT NOT NULL UNIQUE,
        description TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create recordings table
    db.run(`
      CREATE TABLE IF NOT EXISTS recordings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        channelId INTEGER NOT NULL,
        title TEXT NOT NULL,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        duration INTEGER NOT NULL,
        videoUrl TEXT NOT NULL,
        description TEXT,
        program TEXT,
        crtcCert TEXT NOT NULL,
        fileSize INTEGER,
        uploadedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (channelId) REFERENCES channels(id)
      )
    `);

    // Create indexes for faster queries
    db.run(`CREATE INDEX IF NOT EXISTS idx_recordings_channel ON recordings(channelId)`);
    db.run(`CREATE INDEX IF NOT EXISTS idx_recordings_date ON recordings(date)`);
    db.run(`CREATE INDEX IF NOT EXISTS idx_recordings_time ON recordings(time)`);

    // Seed default channels if empty
    db.get('SELECT COUNT(*) as count FROM channels', (err, row) => {
      if (row && row.count === 0) {
        seedDefaultChannels();
      }
    });
  });
}

function seedDefaultChannels() {
  const defaultChannels = [
    {
      name: 'TSN',
      fullName: 'The Sports Network',
      category: 'Sports',
      callSign: 'TSN',
      crtcCert: 'CRTC-TSN-2024',
      description: "Canada's premier sports channel featuring live games, analysis, and sports news"
    },
    {
      name: 'CTV News Network',
      fullName: 'CTV News Network',
      category: 'News',
      callSign: 'CTV-N',
      crtcCert: 'CRTC-CTV-2024',
      description: '24/7 Canadian and international news coverage'
    },
    {
      name: 'BBC Canada',
      fullName: 'BBC Canada',
      category: 'Entertainment',
      callSign: 'BBC-CA',
      crtcCert: 'CRTC-BBC-2024',
      description: 'British entertainment, drama, and documentaries for Canadian audiences'
    },
    {
      name: 'Showcase',
      fullName: 'Showcase',
      category: 'Drama',
      callSign: 'SHO',
      crtcCert: 'CRTC-SHO-2024',
      description: 'Premiere drama series and original Canadian programming'
    },
    {
      name: 'Space',
      fullName: 'Space: The Imagination Station',
      category: 'Sci-Fi',
      callSign: 'SPACE',
      crtcCert: 'CRTC-SPACE-2024',
      description: 'Science fiction, fantasy, and futuristic entertainment'
    },
    {
      name: 'Discovery Channel',
      fullName: 'Discovery Channel Canada',
      category: 'Documentary',
      callSign: 'DISC',
      crtcCert: 'CRTC-DISC-2024',
      description: 'Documentaries, natural sciences, and factual programming'
    },
    {
      name: 'History Channel',
      fullName: 'History Television',
      category: 'Documentary',
      callSign: 'HIST',
      crtcCert: 'CRTC-HIST-2024',
      description: 'Historical documentaries and educational content'
    },
    {
      name: 'APTN',
      fullName: 'Aboriginal Peoples Television Network',
      category: 'Indigenous',
      callSign: 'APTN',
      crtcCert: 'CRTC-APTN-2024',
      description: 'Canadian Indigenous programming and cultural content'
    }
  ];

  defaultChannels.forEach((channel) => {
    db.run(
      `INSERT INTO channels (name, fullName, category, callSign, crtcCert, description)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [channel.name, channel.fullName, channel.category, channel.callSign, channel.crtcCert, channel.description],
      (err) => {
        if (err) {
          console.error('Error seeding channel:', err);
        } else {
          console.log(`Seeded channel: ${channel.name}`);
        }
      }
    );
  });
}

module.exports = db;
