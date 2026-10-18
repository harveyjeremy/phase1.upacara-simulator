# Upacara Simulator

**A Browser-Based 3D School Simulation**

Developed by **Stargaze Interactives**  
Created by **Harvey Jeremy**

## Preview

Want to try the game? You can access the temporary preview here:

**https://harveyjeremy.github.io/phase1.upacara-simulator**

> Note: This is a temporary preview of Phase 1. Features and gameplay may change as development continues.

## About the Project

**Upacara Simulator** is a browser-based 3D simulation project inspired by Indonesian school flag ceremonies.

The goal is to create an interactive virtual environment where players can explore a school courtyard and eventually participate in a simulated flag ceremony with other players.

This repository contains **Phase 1** of development, focusing on the initial 3D prototype.

## Current Features

- Browser-based 3D environment
- 3D rendering powered by Three.js
- Lightweight, low-poly visual style
- Basic player movement and camera controls
- Initial school environment
- Project branding by Stargaze Interactives

*Update this list to match the features actually implemented in Phase 1.*

## Planned Features

- Real-time multiplayer using Socket.IO
- Synchronized player movement
- Player usernames displayed above characters
- School flag ceremony sequence
- Ceremony roles and role assignment
- Session-based usernames without permanent player profiles
- Deployment of the multiplayer version

## Technology Stack

- **JavaScript** — Core game logic
- **Three.js** — 3D rendering
- **Vite** — Development server and build tooling
- **HTML & CSS** — Interface and styling
- **Node.js, Express & Socket.IO** — Planned multiplayer backend

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/harveyjhs/phase1.upacara-simulator.git
cd phase1.upacara-simulator
```

Install dependencies and start the development server using the commands appropriate for the project structure.

For a typical Vite project:

```bash
npm install
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

## Development Roadmap

- **Phase 1 — 3D Prototype:** Establish the initial environment, rendering, and player controls.
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
