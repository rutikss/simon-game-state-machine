# Simon Game (State Machine Implementation)

This project is a browser-based implementation of the classic Simon memory game, built using vanilla JavaScript.

The main focus of this project is **correct game logic and predictable state management**, rather than visual complexity or external libraries.

---

## Why this project exists

Many simple games work fine at small scale but become hard to maintain as features grow.  
In this project, the game logic is designed as a **finite state machine** to ensure that:

- user input is accepted only at valid times
- async behavior (animations, delays) is predictable
- game flow is easy to reason about and extend

This approach avoids race conditions and accidental state mutations.

---

## Core concepts used

- Finite State Machine (FSM)
- Async / Await for sequential playback
- Explicit state transitions
- Guarded user input
- Separation of logic and UI behavior

---

## Game States

The game operates using the following states:

- **IDLE** – waiting for the user to start the game  
- **PLAYING_SEQUENCE** – the game is showing the sequence  
- **WAITING_FOR_USER** – the game is waiting for user input  
- **GAME_OVER** – the user made a mistake and the game has ended  

All transitions between these states are handled explicitly.

---

## How the game works

1. Press any key to start the game
2. The game plays a sequence of colors
3. The user must repeat the sequence correctly
4. Each level adds one new color
5. The game ends immediately on incorrect input

---

## Tech stack

- HTML
- CSS
- Vanilla JavaScript (no frameworks, no libraries)

---

## Project goal

This project was built to practice **clean async control flow**, **state-based design**, and **defensive event handling**, similar to what is expected in real-world frontend codebases.

---

## Possible future improvements

- Persist high scores using localStorage
- Add keyboard-only controls
- Convert logic into a pure reducer-based state machine
- Add automated tests for game logic

---

## Author

Built by **Rutik Shelke** as a learning-focused project to strengthen JavaScript fundamentals and software design thinking.
