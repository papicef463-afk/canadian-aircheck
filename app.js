// Canadian Aircheck Web App - Main Application Logic

let selectedChannel = null;
let selectedRecording = null;

/**
 * Initialize the application
 */
function initApp() {
    renderChannels();
    setupEventListeners();
    setDateInputDefault();
}

/**
 * Set default date to today
 */
function setDateInputDefault() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('dateInput').value = today;
}

/**
 * Render all available channels
 */
function renderChannels() {
    const channelGrid = document.getElementById('channelGrid');
    channelGrid.innerHTML = '';

    const channels = getChannels();
    channels.forEach(channel => {
        const channelCard = document.createElement('div');
        channelCard.className = 'channel-card';
        channelCard.innerHTML = `
            <h3>${channel.name}</h3>
            <p>${channel.category}</p>
            <div class="channel-cert">${channel.callSign}</div>
        `;

        channelCard.addEventListener('click', () => selectChannel(channel));
        channelGrid.appendChild(channelCard);
    });
}

/**
 * Handle channel selection
 */
function selectChannel(channel) {
    selectedChannel = channel;
    selectedRecording = null;

    // Update UI to show selected channel
    document.querySelectorAll('.channel-card').forEach(card => {
        card.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // Update channel name and info
    document.getElementById('channelName').textContent = channel.name;
    document.getElementById('broadcastInfo').textContent = `${channel.fullName} - ${channel.description}`;

    // Load recordings for this channel
    loadChannelRecordings(channel.id);

    // Scroll to player section
    document.querySelector('.player-section').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Load and display recordings for selected channel
 */
function loadChannelRecordings(channelId) {
    const recordings = getChannelRecordings(channelId);
    displayRecordings(recordings);
}

/**
 * Display search results
 */
function displayRecordings(recordings) {
    const recordingsList = document.getElementById('recordingsList');
    recordingsList.innerHTML = '';

    if (recordings.length === 0) {
        recordingsList.innerHTML = '<p class="placeholder">No recordings found for this channel.</p>';
        return;
    }

    recordings.forEach(recording => {
        const recordingItem = document.createElement('div');
        recordingItem.className = 'recording-item';
        if (selectedRecording && selectedRecording.id === recording.id) {
            recordingItem.classList.add('active');
        }

        const channel = getChannelById(recording.channelId);
        recordingItem.innerHTML = `
            <div class="recording-info">
                <h4>${recording.title}</h4>
                <p>📅 ${formatDate(recording.date)} at ${formatTime(recording.time)}</p>
                <p>📺 ${recording.program}</p>
            </div>
            <span class="recording-duration">${formatDuration(recording.duration)}</span>
        `;

        recordingItem.addEventListener('click', () => playRecording(recording));
        recordingsList.appendChild(recordingItem);
    });
}

/**
 * Play selected recording
 */
function playRecording(recording) {
    selectedRecording = recording;

    // Update active state in list
    document.querySelectorAll('.recording-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // Set video source (using placeholder video URL)
    // In a real app, this would load actual video files
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = recording.videoUrl || 'https://www.w3schools.com/html/mov_bbb.mp4';

    // Update recording info
    const channel = getChannelById(recording.channelId);
    document.getElementById('channelName').textContent = `${channel.name} - ${recording.title}`;
    document.getElementById('broadcastInfo').textContent = 
        `Aired on ${formatDate(recording.date)} at ${formatTime(recording.time)}`;

    // Update and show details section
    updateDetailsSection(recording, channel);
    document.getElementById('detailsSection').style.display = 'block';

    // Play video
    videoPlayer.play();
}

/**
 * Update the details section with recording information
 */
function updateDetailsSection(recording, channel) {
    document.getElementById('detailChannel').textContent = channel.name;
    document.getElementById('detailDate').textContent = formatDate(recording.date);
    document.getElementById('detailTime').textContent = formatTime(recording.time);
    document.getElementById('detailDuration').textContent = formatDuration(recording.duration);
    document.getElementById('detailCertification').textContent = recording.crtcCert;
    document.getElementById('detailDescription').textContent = recording.description;
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    const searchButton = document.getElementById('searchButton');
    const dateInput = document.getElementById('dateInput');
    const timeInput = document.getElementById('timeInput');

    searchButton.addEventListener('click', performSearch);
    dateInput.addEventListener('change', performSearch);
    timeInput.addEventListener('change', performSearch);
}

/**
 * Perform search based on date/time filters
 */
function performSearch() {
    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('timeInput').value;

    if (!selectedChannel && (!date && !time)) {
        document.getElementById('recordingsList').innerHTML = 
            '<p class="placeholder">Select a channel and/or date/time to search.</p>';
        return;
    }

    const channelId = selectedChannel ? selectedChannel.id : null;
    const recordings = searchRecordings(date, time, channelId);

    if (recordings.length === 0) {
        const dateStr = date ? formatDate(date) : 'any date';
        const timeStr = time ? `at ${formatTime(time)}` : '';
        document.getElementById('recordingsList').innerHTML = 
            `<p class="placeholder">No recordings found for ${dateStr} ${timeStr}. Try adjusting your search.</p>`;
    } else {
        displayRecordings(recordings);
    }
}

/**
 * Initialize app when DOM is ready
 */
document.addEventListener('DOMContentLoaded', initApp);

/**
 * Keyboard shortcuts
 */
document.addEventListener('keydown', (e) => {
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (e.key === ' ') {
        e.preventDefault();
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    }
    
    if (e.key === 'ArrowRight') {
        videoPlayer.currentTime = Math.min(videoPlayer.currentTime + 5, videoPlayer.duration);
    }
    
    if (e.key === 'ArrowLeft') {
        videoPlayer.currentTime = Math.max(videoPlayer.currentTime - 5, 0);
    }
});
