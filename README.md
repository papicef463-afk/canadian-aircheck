# Canadian Aircheck

Canadian Aircheck is a Canadian-made web app for browsing CRTC-certified specialty television stations and reviewing archived broadcast recordings. It focuses on Canadian channel identity, broadcast metadata, and HTML5 video playback for recorded archives.

## Features

- Browse Canadian specialty stations such as TSN, CTV News, BBC Canada, Showcase, Space, Discovery, History, APTN, TVO, and Movie Central.
- Search by station, date, time, and keyword.
- View broadcast metadata including exact air date, time, duration, CRTC certificate, and archived recording note.
- Play a recorded copy through the browser's HTML5 video player.
- Built with a real broadcast archive interface and Canadian branding.

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app:
   ```bash
   npm start
   ```
3. Open the app in a browser at:
   ```text
   http://localhost:5000
   ```

## Project structure

```text
canadian-aircheck/
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── server.js
├── package.json
├── README.md
└── .env.example
```

## Notes

This app is built as a front-end broadcast archive experience and includes a Node/Express server for serving the application. The project is designed with Canadian content, station metadata, and a durable archive-style interface.

## Made in Canada

This project is built and branded for Canadian broadcasting access, archive review, and specialty TV discovery.
