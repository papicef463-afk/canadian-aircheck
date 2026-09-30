const channels = [
  {
    id: "tsn",
    name: "TSN",
    callSign: "TSN",
    category: "Sports",
    fullName: "The Sports Network",
    description: "Live sports, analysis, and Canadian league coverage for hockey, football, and basketball fans."
  },
  {
    id: "ctv-news",
    name: "CTV News",
    callSign: "CTV-N",
    category: "News",
    fullName: "CTV News Network",
    description: "24/7 Canadian and international journalism, headline updates, and public affairs programming."
  },
  {
    id: "bbc-canada",
    name: "BBC Canada",
    callSign: "BBC-CA",
    category: "Entertainment",
    fullName: "BBC Canada",
    description: "British drama, documentaries, and lifestyle programming for Canadian audiences."
  },
  {
    id: "showcase",
    name: "Showcase",
    callSign: "SHO",
    category: "Drama",
    fullName: "Showcase",
    description: "Canadian and international drama, prestige series, and critically acclaimed storytelling."
  },
  {
    id: "space",
    name: "Space",
    callSign: "SPACE",
    category: "Sci-Fi",
    fullName: "Space: The Imagination Station",
    description: "Sci-fi, fantasy, and cult hits with immersive genre storytelling."
  },
  {
    id: "discovery",
    name: "Discovery",
    callSign: "DISC",
    category: "Documentary",
    fullName: "Discovery Channel Canada",
    description: "Documentaries, science, and nature programming with a focus on discovery and exploration."
  },
  {
    id: "history",
    name: "History",
    callSign: "HIST",
    category: "History",
    fullName: "History Television",
    description: "Historical programming, military stories, and documentary storytelling from Canada and abroad."
  },
  {
    id: "aptn",
    name: "APTN",
    callSign: "APTN",
    category: "Indigenous",
    fullName: "Aboriginal Peoples Television Network",
    description: "Indigenous storytelling, culture, language, and community-focused public affairs."
  },
  {
    id: "tvo",
    name: "TVO",
    callSign: "TVO",
    category: "Education",
    fullName: "TV Ontario",
    description: "Educational and culture-rich programming that reflects public service values in Ontario."
  },
  {
    id: "movie-central",
    name: "Movie Central",
    callSign: "MC",
    category: "Movies",
    fullName: "Movie Central",
    description: "Feature films, classics, and premium cinema presented on a Canadian specialty platform."
  }
];

const recordings = [
  {
    id: "rc-1001",
    stationId: "tsn",
    title: "Leafs Live: Toronto at Montréal",
    date: "2026-09-12",
    time: "19:30",
    duration: 180,
    cert: "CRTC-TSN-2026",
    program: "TSN Sports",
    description: "A live Canadian hockey broadcast captured from the TSN signal with exact air time logging for the evening matchup.",
    source: "Recorded copy from station master record carried on the original transmission stream.",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: "rc-1002",
    stationId: "ctv-news",
    title: "CTV News at 6",
    date: "2026-09-12",
    time: "18:00",
    duration: 30,
    cert: "CRTC-CTVN-2026",
    program: "CTV News",
    description: "National and international news updates from the CTV News Network evening bulletin.",
    source: "Original network feed recorded at exact broadcast time and saved as an aircheck copy.",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: "rc-1003",
    stationId: "bbc-canada",
    title: "The Nature of Canada",
    date: "2026-09-12",
    time: "20:00",
    duration: 60,
    cert: "CRTC-BBC-2026",
    program: "BBC Canada Documentary",
    description: "A documentary episode exploring wildlife and Canadian ecological systems for the BBC Canada schedule.",
    source: "Aircheck recording made from the BBC Canada feed and matched to the station time grid.",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: "rc-1004",
    stationId: "showcase",
    title: "Northern Lights",
    date: "2026-09-13",
    time: "21:00",
    duration: 48,
    cert: "CRTC-SHOWCASE-2026",
    program: "Showcase Drama",
    description: "A prestige drama airing on Showcase during the evening prime time block, recorded as a sealed broadcast archive copy.",
    source: "Recorded from the original station transmission at the listed date and time.",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: "rc-1005",
    stationId: "space",
    title: "Deep Orbit",
    date: "2026-09-14",
    time: "22:00",
    duration: 52,
    cert: "CRTC-SPACE-2026",
    program: "Space Original",
    description: "A speculative fiction program appearing on Space with original broadcast timing preserved in the recording metadata.",
    source: "Broadcast capture recorded on the exact station master with time-stamp verification.",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: "rc-1006",
    stationId: "discovery",
    title: "Wild Canada",
    date: "2026-09-12",
    time: "19:00",
    duration: 42,
    cert: "CRTC-DISC-2026",
    program: "Discovery Channel",
    description: "A natural history documentary selected for the Discovery channel archive with precise origination time logging.",
    source: "Recorded copy from the scheduled transmission window preserving the original air date and clock time.",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: "rc-1007",
    stationId: "history",
    title: "Canada at War",
    date: "2026-09-13",
    time: "20:30",
    duration: 62,
    cert: "CRTC-HISTORY-2026",
    program: "History Television",
    description: "A documentary tracing a major chapter in Canadian military and social history, archived from the television signal.",
    source: "Time-coded aircheck captured from the original station distribution feed.",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: "rc-1008",
    stationId: "aptn",
    title: "Stories of the Land",
    date: "2026-09-14",
    time: "20:00",
    duration: 30,
    cert: "CRTC-APTN-2026",
    program: "APTN Originals",
    description: "A community storytelling program documenting Indigenous perspectives and lived experience on the APTN schedule.",
    source: "Original broadcast capture recorded from the APTN signal at the exact feed time.",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: "rc-1009",
    stationId: "tvo",
    title: "TVO Learning: Literature",
    date: "2026-09-12",
    time: "18:30",
    duration: 50,
    cert: "CRTC-TVO-2026",
    program: "TVO Learning",
    description: "An educational broadcast covering Canadian literature, archived as a public service access recording.",
    source: "Station capture logged to preserve the original educational broadcast entry and runtime.",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: "rc-1010",
    stationId: "movie-central",
    title: "Cinema Atlantic",
    date: "2026-09-15",
    time: "21:30",
    duration: 120,
    cert: "CRTC-MC-2026",
    program: "Movie Central",
    description: "A premium film presentation with a Canadian broadcast archive entry for movie programming preservation.",
    source: "Recorded from the Movie Central channel feed preserving the original date, time, and program continuity.",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  }
];

const elements = {
  channelList: document.getElementById("channelList"),
  selectedStationTitle: document.getElementById("selectedStationTitle"),
  selectedStationMeta: document.getElementById("selectedStationMeta"),
  programTitle: document.getElementById("programTitle"),
  broadcastTime: document.getElementById("broadcastTime"),
  channelTag: document.getElementById("channelTag"),
  recordingList: document.getElementById("recordingList"),
  resultCount: document.getElementById("resultCount"),
  dateFilter: document.getElementById("dateFilter"),
  timeFilter: document.getElementById("timeFilter"),
  keywordFilter: document.getElementById("keywordFilter"),
  detailStation: document.getElementById("detailStation"),
  detailDate: document.getElementById("detailDate"),
  detailTime: document.getElementById("detailTime"),
  detailDuration: document.getElementById("detailDuration"),
  detailCert: document.getElementById("detailCert"),
  detailCopy: document.getElementById("detailCopy"),
  detailDescription: document.getElementById("detailDescription"),
  videoPlayer: document.getElementById("videoPlayer"),
  videoSource: document.getElementById("videoSource"),
  stationCount: document.getElementById("stationCount")
};

let selectedStationId = channels[0].id;
let selectedRecordingId = recordings[0].id;

function init() {
  setDefaultFilters();
  renderChannels();
  renderRecordings();
  selectRecording(selectedRecordingId, true);
}

function setDefaultFilters() {
  const today = new Date();
  const isoDate = today.toISOString().split("T")[0];
  elements.dateFilter.value = isoDate;
}

function renderChannels() {
  elements.channelList.innerHTML = "";
  elements.stationCount.textContent = `${channels.length} channels`;

  channels.forEach((channel) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `channel-card ${channel.id === selectedStationId ? "active" : ""}`;
    button.innerHTML = `
      <div class="channel-top">
        <span class="channel-name">${channel.name}</span>
        <span class="channel-call">${channel.callSign}</span>
      </div>
      <div class="channel-meta">${channel.category}</div>
    `;

    button.addEventListener("click", () => {
      selectedStationId = channel.id;
      selectedRecordingId = null;
      renderChannels();
      renderRecordings();
      updateStationHeader();
    });

    elements.channelList.appendChild(button);
  });

  updateStationHeader();
}

function updateStationHeader() {
  const channel = getChannel(selectedStationId);
  elements.selectedStationTitle.textContent = channel?.name || "Select a station";
  elements.selectedStationMeta.textContent = channel
    ? `${channel.fullName} • ${channel.description}`
    : "Choose a Canadian specialty channel to browse its recorded airchecks.";
  elements.channelTag.textContent = channel ? channel.callSign : "Station";
}

function renderRecordings() {
  const channel = getChannel(selectedStationId);
  const filtered = getFilteredRecordings();

  if (!filtered.length) {
    elements.recordingList.innerHTML = `
      <div class="empty-state">
        No recordings match your search for <strong>${channel ? channel.name : "this station"}</strong> on the selected date and time.
      </div>
    `;
    elements.resultCount.textContent = "0 results";
    return;
  }

  elements.resultCount.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;
  elements.recordingList.innerHTML = "";

  filtered.forEach((recording) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `recording-item ${recording.id === selectedRecordingId ? "active" : ""}`;
    item.innerHTML = `
      <div class="recording-main">
        <span class="recording-title">${recording.title}</span>
        <span class="recording-sub">${formatDate(recording.date)} • ${formatTime(recording.time)} • ${getChannel(recording.stationId)?.name || "Station"}</span>
      </div>
      <span class="recording-badge">${formatDuration(recording.duration)}</span>
    `;

    item.addEventListener("click", () => selectRecording(recording.id));
    elements.recordingList.appendChild(item);
  });
}

function selectRecording(recordingId, skipRender = false) {
  const recording = recordings.find((item) => item.id === recordingId) || recordings[0];
  if (!recording) return;

  selectedRecordingId = recording.id;
  selectedStationId = recording.stationId;

  if (!skipRender) {
    renderChannels();
    renderRecordings();
  }

  updatePlayer(recording);
  updateDetails(recording);
}

function updatePlayer(recording) {
  const channel = getChannel(recording.stationId);
  elements.programTitle.textContent = recording.title;
  elements.broadcastTime.textContent = `${formatDate(recording.date)} • ${formatTime(recording.time)}`;
  elements.channelTag.textContent = channel ? channel.name : "Station";

  elements.videoSource.src = recording.videoUrl;
  elements.videoPlayer.load();
  elements.videoPlayer.play().catch(() => {
    // Autoplay may be blocked until user interaction.
  });
}

function updateDetails(recording) {
  const channel = getChannel(recording.stationId);
  elements.detailStation.textContent = channel ? `${channel.name} (${channel.callSign})` : "—";
  elements.detailDate.textContent = formatDate(recording.date);
  elements.detailTime.textContent = formatTime(recording.time);
  elements.detailDuration.textContent = formatDuration(recording.duration);
  elements.detailCert.textContent = recording.cert;
  elements.detailCopy.textContent = recording.source;
  elements.detailDescription.textContent = recording.description;
}

function getFilteredRecordings() {
  const date = elements.dateFilter.value;
  const time = elements.timeFilter.value;
  const keyword = elements.keywordFilter.value.trim().toLowerCase();

  return recordings
    .filter((recording) => recording.stationId === selectedStationId)
    .filter((recording) => (date ? recording.date === date : true))
    .filter((recording) => (time ? recording.time.startsWith(time.slice(0, 2)) : true))
    .filter((recording) => {
      if (!keyword) return true;
      const haystack = `${recording.title} ${recording.program} ${recording.description}`.toLowerCase();
      return haystack.includes(keyword);
    })
    .sort((a, b) => a.time.localeCompare(b.time));
}

function getChannel(channelId) {
  return channels.find((channel) => channel.id === channelId) || channels[0];
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat("en-CA", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":");
  const hourValue = Number(hours);
  const suffix = hourValue >= 12 ? "PM" : "AM";
  const hour12 = hourValue % 12 || 12;
  return `${hour12}:${minutes} ${suffix}`;
}

function formatDuration(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours && minutes) return `${hours}h ${minutes}m`;
  if (hours) return `${hours}h`;
  return `${minutes}m`;
}

function attachListeners() {
  [elements.dateFilter, elements.timeFilter, elements.keywordFilter].forEach((input) => {
    input.addEventListener("input", () => {
      renderRecordings();
    });
  });
}

attachListeners();
init();
