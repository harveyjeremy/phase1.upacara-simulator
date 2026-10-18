# Upacara Simulator

**A Browser-Based 3D School Simulation**

Developed by **Stargaze Interactives**  
Created by **Harvey Jeremy**

## Preview

A live preview is not available yet. The game can currently be run locally by downloading the project ZIP archive, extracting it, and following the installation instructions below.

## About the Project

**Upacara Simulator** is a browser-based 3D simulation project inspired by Indonesian school flag ceremonies.

The goal is to create an interactive virtual environment where players can explore a school courtyard and eventually participate in a simulated flag ceremony with other players.

This repository contains **Phase 1** of development, focusing on the initial 3D prototype.

## Download and Installation

The project source code is provided as a ZIP archive.

### 1. Download the Project

1. Open this repository on GitHub.
2. Download the ZIP archive containing the project files.
3. Extract the ZIP archive to a folder on your computer.

Make sure you extract the archive before continuing.

### 2. Install the Requirements

Install the following software if you have not already:

- [Node.js](https://nodejs.org/) — LTS version recommended
- npm — included with Node.js

### 3. Open the Project Folder

Open the extracted project folder. Make sure it contains `package.json` and the `src` folder.

Open a terminal in that folder.

On Windows, you can open the folder in File Explorer, click the address bar, type `cmd`, and press Enter.

### 4. Install Dependencies

Run:

```bash
npm install
```

Wait for the installation to finish.

### 5. Start the Development Server

Run:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

`http://localhost:5173`

The game should now open in your browser.

To stop the development server, press `Ctrl + C` in the terminal.

## Current Features

The following list should reflect the features implemented in the current Phase 1 build:

- Browser-based 3D game prototype
- Three.js rendering
- Lightweight, low-poly visual style
- Initial school environment
- Basic player movement and camera controls

## Planned Features

- Real-time multiplayer using Socket.IO
- Synchronized player movement
- Player usernames displayed above characters
- School flag ceremony sequence
- Ceremony roles and role assignment
- Session-based usernames without permanent player profiles
- Online multiplayer deployment

## Technology Stack

- **JavaScript** — Core game logic
- **Three.js** — 3D rendering
- **Vite** — Development server and build tooling
- **HTML & CSS** — Interface and styling
- **Node.js, Express & Socket.IO** — Planned multiplayer backend

## Development Roadmap

- **Phase 1 — 3D Prototype:** Build the initial environment, rendering, and player controls.
- **Phase 2 — Multiplayer:** Implement real-time connections and player synchronization.
- **Phase 3 — Ceremony Gameplay:** Add ceremony stages, roles, and host controls.
- **Phase 4 — Deployment & Testing:** Optimize performance and prepare the multiplayer experience for wider testing.

## Performance Goals

The project aims to remain lightweight and accessible on a range of computers, including devices with limited graphics performance.

## Privacy

The planned multiplayer experience uses session-based usernames. Permanent player profiles and account passwords are not part of the current design.

## Credits

**Studio:** Stargaze Interactives  
**Creator:** Harvey Jeremy

## License

This project is intended to use the MIT License. See the `LICENSE` file for details.
