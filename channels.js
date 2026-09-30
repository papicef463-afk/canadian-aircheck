// Canadian Specialty TV Channels Database
// CRTC Certified Channels

const CANADIAN_CHANNELS = [
    {
        id: 1,
        name: 'TSN',
        fullName: 'The Sports Network',
        callSign: 'TSN',
        category: 'Sports',
        crtcCert: 'CRTC-TSN-2024',
        description: 'Canada\'s premier sports channel featuring live games, analysis, and sports news',
        color: '#DC143C'
    },
    {
        id: 2,
        name: 'CTV News Network',
        fullName: 'CTV News Network',
        callSign: 'CTV-N',
        category: 'News',
        crtcCert: 'CRTC-CTV-2024',
        description: '24/7 Canadian and international news coverage',
        color: '#1e3c72'
    },
    {
        id: 3,
        name: 'BBC Canada',
        fullName: 'BBC Canada',
        callSign: 'BBC-CA',
        category: 'Entertainment',
        crtcCert: 'CRTC-BBC-2024',
        description: 'British entertainment, drama, and documentaries for Canadian audiences',
        color: '#003366'
    },
    {
        id: 4,
        name: 'Showcase',
        fullName: 'Showcase',
        callSign: 'SHO',
        category: 'Drama',
        crtcCert: 'CRTC-SHO-2024',
        description: 'Premiere drama series and original Canadian programming',
        color: '#8B0000'
    },
    {
        id: 5,
        name: 'Space',
        fullName: 'Space: The Imagination Station',
        callSign: 'SPACE',
        category: 'Sci-Fi',
        crtcCert: 'CRTC-SPACE-2024',
        description: 'Science fiction, fantasy, and futuristic entertainment',
        color: '#4B0082'
    },
    {
        id: 6,
        name: 'Discovery Channel',
        fullName: 'Discovery Channel Canada',
        callSign: 'DISC',
        category: 'Documentary',
        crtcCert: 'CRTC-DISC-2024',
        description: 'Documentaries, natural sciences, and factual programming',
        color: '#FF6600'
    },
    {
        id: 7,
        name: 'History Channel',
        fullName: 'History Television',
        callSign: 'HIST',
        category: 'Documentary',
        crtcCert: 'CRTC-HIST-2024',
        description: 'Historical documentaries and educational content',
        color: '#8B4513'
    },
    {
        id: 8,
        name: 'Movie Central',
        fullName: 'Movie Central',
        callSign: 'MOXC',
        category: 'Movies',
        crtcCert: 'CRTC-MOXC-2024',
        description: 'Premium Canadian movie channel featuring films and classics',
        color: '#FF1493'
    },
    {
        id: 9,
        name: 'APTN',
        fullName: 'Aboriginal Peoples Television Network',
        callSign: 'APTN',
        category: 'Indigenous',
        crtcCert: 'CRTC-APTN-2024',
        description: 'Canadian Indigenous programming and cultural content',
        color: '#228B22'
    },
    {
        id: 10,
        name: 'TVO',
        fullName: 'TV Ontario',
        callSign: 'TVO',
        category: 'Educational',
        crtcCert: 'CRTC-TVO-2024',
        description: 'Educational and cultural programming from Ontario',
        color: '#4169E1'
    }
];

// Sample Broadcast Archive Data
const BROADCAST_ARCHIVE = [
    {
        id: 101,
        channelId: 1,
        title: 'Toronto Raptors vs Boston Celtics',
        date: '2024-09-28',
        time: '19:00',
        duration: 180,
        videoUrl: 'sample-videos/tsn-raptors-game.mp4',
        description: 'NBA regular season matchup featuring the Toronto Raptors',
        program: 'TSN Sports',
        crtcCert: 'CRTC-TSN-2024'
    },
    {
        id: 102,
        channelId: 1,
        title: 'CFL: Hamilton Tiger-Cats vs Calgary Stampeders',
        date: '2024-09-29',
        time: '19:30',
        duration: 150,
        videoUrl: 'sample-videos/tsn-cfl-game.mp4',
        description: 'Canadian Football League action from Hamilton',
        program: 'TSN Sports',
        crtcCert: 'CRTC-TSN-2024'
    },
    {
        id: 103,
        channelId: 2,
        title: 'CTV News at 6',
        date: '2024-09-30',
        time: '18:00',
        duration: 30,
        videoUrl: 'sample-videos/ctv-news-6pm.mp4',
        description: 'Top stories from across Canada and the world',
        program: 'CTV News',
        crtcCert: 'CRTC-CTV-2024'
    },
    {
        id: 104,
        channelId: 2,
        title: 'CTV News at 11',
        date: '2024-09-30',
        time: '23:00',
        duration: 30,
        videoUrl: 'sample-videos/ctv-news-11pm.mp4',
        description: 'Late night news roundup',
        program: 'CTV News',
        crtcCert: 'CRTC-CTV-2024'
    },
    {
        id: 105,
        channelId: 3,
        title: 'Planet Earth III: Episode 2',
        date: '2024-09-28',
        time: '20:00',
        duration: 60,
        videoUrl: 'sample-videos/bbc-planet-earth.mp4',
        description: 'Extraordinary wildlife and ecosystems documentary series',
        program: 'BBC Documentary',
        crtcCert: 'CRTC-BBC-2024'
    },
    {
        id: 106,
        channelId: 4,
        title: 'Degrassi: Next Class - Season 2 Premiere',
        date: '2024-09-27',
        time: '20:00',
        duration: 44,
        videoUrl: 'sample-videos/showcase-degrassi.mp4',
        description: 'Canadian teen drama series premiere',
        program: 'Showcase Drama',
        crtcCert: 'CRTC-SHO-2024'
    },
    {
        id: 107,
        channelId: 5,
        title: 'The Expanse: Season 5 Finale',
        date: '2024-09-29',
        time: '21:00',
        duration: 60,
        videoUrl: 'sample-videos/space-expanse.mp4',
        description: 'Sci-fi series finale with epic space battles',
        program: 'Space Original',
        crtcCert: 'CRTC-SPACE-2024'
    },
    {
        id: 108,
        channelId: 6,
        title: 'MythBusters: Build Workshop',
        date: '2024-09-30',
        time: '19:00',
        duration: 44,
        videoUrl: 'sample-videos/discovery-mythbusters.mp4',
        description: 'Science and engineering demonstrations',
        program: 'Discovery Science',
        crtcCert: 'CRTC-DISC-2024'
    },
    {
        id: 109,
        channelId: 7,
        title: 'Canada: A History - The First Nations',
        date: '2024-09-28',
        time: '21:00',
        duration: 60,
        videoUrl: 'sample-videos/history-canada.mp4',
        description: 'Documentary exploring Canadian Indigenous history',
        program: 'History Documentary',
        crtcCert: 'CRTC-HIST-2024'
    },
    {
        id: 110,
        channelId: 8,
        title: 'The Red Violin',
        date: '2024-09-29',
        time: '20:00',
        duration: 128,
        videoUrl: 'sample-videos/moviecentral-red-violin.mp4',
        description: 'Canadian acclaimed drama film',
        program: 'Movie Central',
        crtcCert: 'CRTC-MOXC-2024'
    },
    {
        id: 111,
        channelId: 9,
        title: 'Stories from the Heart - Indigenous Voices',
        date: '2024-09-30',
        time: '20:00',
        duration: 30,
        videoUrl: 'sample-videos/aptn-stories.mp4',
        description: 'Authentic Indigenous perspectives and storytelling',
        program: 'APTN Originals',
        crtcCert: 'CRTC-APTN-2024'
    },
    {
        id: 112,
        channelId: 10,
        title: 'TVO Learning: Canadian Literature',
        date: '2024-09-27',
        time: '19:00',
        duration: 50,
        videoUrl: 'sample-videos/tvo-literature.mp4',
        description: 'Educational series on Canadian literary heritage',
        program: 'TVO Learning',
        crtcCert: 'CRTC-TVO-2024'
    }
];

/**
 * Get all available channels
 */
function getChannels() {
    return CANADIAN_CHANNELS;
}

/**
 * Get channel by ID
 */
function getChannelById(channelId) {
    return CANADIAN_CHANNELS.find(ch => ch.id === channelId);
}

/**
 * Search for recordings by date and time
 * Returns recordings that aired on or near the specified time
 */
function searchRecordings(date, time, channelId = null) {
    let results = BROADCAST_ARCHIVE;

    if (date) {
        results = results.filter(rec => rec.date === date);
    }

    if (time) {
        const [searchHour] = time.split(':');
        results = results.filter(rec => {
            const [recHour] = rec.time.split(':');
            return recHour === searchHour;
        });
    }

    if (channelId) {
        results = results.filter(rec => rec.channelId === channelId);
    }

    return results.sort((a, b) => a.time.localeCompare(b.time));
}

/**
 * Get all recordings for a specific channel
 */
function getChannelRecordings(channelId) {
    return BROADCAST_ARCHIVE.filter(rec => rec.channelId === channelId);
}

/**
 * Get recording details by ID
 */
function getRecordingById(recordingId) {
    return BROADCAST_ARCHIVE.find(rec => rec.id === recordingId);
}

/**
 * Format date for display
 */
function formatDate(dateStr) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-CA', options);
}

/**
 * Format time for display
 */
function formatTime(timeStr) {
    const [hours, minutes] = timeStr.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
}

/**
 * Format duration in minutes to readable time
 */
function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins} min`;
    if (mins === 0) return `${hours} hr`;
    return `${hours} hr ${mins} min`;
}
