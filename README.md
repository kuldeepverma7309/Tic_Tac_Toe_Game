# Tic Tac Toe Game

## Overview
This is a simple Tic Tac Toe game built using React. The game allows two players to play against each other on a 3x3 grid. The first player to align three of their symbols (either 'X' or 'O') horizontally, vertically, or diagonally wins the game.

## Features
- Two-player mode
- Score tracking for both players
- Ability to continue playing after a game ends
- Visual indication of the current player
- Responsive design

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Vite**: A build tool that provides a fast development environment.

## Key Concepts
**State Management**
The game uses React's useState hook to manage the state of the game, including the game grid, current player, scores, and winner.

**Event Handling**
The game uses event handlers to manage user interactions, such as clicking on a cell to place a symbol and clicking the "continue" button to reset the game.

**Conditional Rendering**
The game uses conditional rendering to display the current player's turn and the winner of the game.

**useEffect Hook**
The useEffect hook is used to trigger side effects, such as displaying an alert when a player wins.


## How to Play

1. The game starts with Player X.
2. Players take turns clicking on an empty cell to place their symbol (X or O).
3. The first player to align three of their symbols horizontally, vertically, or diagonally wins the game.
4. The game displays an alert announcing the winner and updates the score.
5. Click the "continue" button to reset the game and play again.


## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.