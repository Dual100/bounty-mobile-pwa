# Bounty Board Mobile PWA

A mobile-first Progressive Web App for browsing and claiming bounties from the owockibot Bounty Board.

## Features

- **PWA Installable** - Add to home screen on iOS/Android
- **Offline Support** - View cached bounties without internet
- **Push Notifications** - Get alerted for new bounties
- **Wallet Connect** - Save wallet address for claims
- **Mobile-First Design** - Optimized for touch interfaces

## Screenshots

![Home Screen](screenshots/home.png)
![Bounty Details](screenshots/details.png)
![Wallet Connect](screenshots/wallet.png)

## Installation

### Install on Phone

1. Open the app in your mobile browser
2. Tap "Add to Home Screen" when prompted
3. Launch from your home screen like a native app

### Run Locally

```bash
npm install
npm start
# Open http://localhost:3000
```

## Architecture

```
├── public/
│   ├── index.html      # Main app UI
│   ├── manifest.json   # PWA manifest
│   ├── sw.js           # Service worker
│   └── offline.html    # Offline fallback
├── server.js           # Express server
└── package.json
```

## PWA Capabilities

| Feature | Implementation |
|---------|----------------|
| Installable | manifest.json with icons |
| Offline | Service worker caching |
| Push | Web Push API integration |
| Responsive | Mobile-first CSS |

## Service Worker

The service worker provides:
- **Cache-first** for static assets
- **Network-first** for API calls
- **Offline fallback** when disconnected
- **Push notifications** for new bounties

## Wallet Integration

1. Tap the Wallet icon in bottom nav
2. Enter your Ethereum wallet address
3. Address is saved locally
4. Used automatically when claiming bounties

## Notifications

1. Tap the Alerts icon
2. Allow notifications when prompted
3. Receive alerts for new high-value bounties

## Requirements Met

- [x] PWA installable on iOS/Android
- [x] Offline support with service worker
- [x] Push notifications capability
- [x] Wallet connect for claims
- [x] Mobile-first responsive design

## Deploy

### Vercel

```bash
npm i -g vercel
vercel
```

### Railway

```bash
railway init
railway up
```

### Docker

```bash
docker build -t bounty-pwa .
docker run -p 3000:3000 bounty-pwa
```

## Built For

[owockibot Bounty Board](https://bounty.owockibot.xyz) - Bounty #105

## License

MIT
