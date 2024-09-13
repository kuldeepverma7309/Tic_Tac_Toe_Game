import React, { useState, useEffect } from 'react';

const GRID_SIZE = 3;
const GRID = Array.from({ length: GRID_SIZE }, () => new Array(GRID_SIZE).fill(null));

const App = () => {
  const [player1, setPlayer1] = useState('X');
  const [player2, setPlayer2] = useState('O');
  const [game, setGame] = useState(GRID);
  const [currentPlayer, setCurrentPlayer] = useState(player1);
  const [winner, setWinner] = useState(null);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [isContinuing, setIsContinuing] = useState(true);

  const checkWinner = (game) => {
    // Check rows, columns, and diagonals for a winner
    for (let i = 0; i < GRID_SIZE; i++) {
      if (game[i][0] && game[i][0] === game[i][1] && game[i][1] === game[i][2]) return game[i][0];
      if (game[0][i] && game[0][i] === game[1][i] && game[1][i] === game[2][i]) return game[0][i];
    }
    if (game[0][0] && game[0][0] === game[1][1] && game[1][1] === game[2][2]) return game[0][0];
    if (game[0][2] && game[0][2] === game[1][1] && game[1][1] === game[2][0]) return game[0][2];
    return null;
  };

  const handleGame = (rowIndex, colIndex) => {
    if (isContinuing) {
      if (game[rowIndex][colIndex] || winner) return;

      // Create a copy of the current game state
      const newGame = game.map((row, rIdx) =>
        row.map((col, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? currentPlayer : col))
      );

      // Update the state with the new game state
      setGame(newGame);

      // Check for a winner
      const gameWinner = checkWinner(newGame);
      if (gameWinner) {
        setWinner(gameWinner);
        setCurrentPlayer(currentPlayer === player1 ? player2 : player1);
        if (gameWinner === 'X') {
          setScore1(score1 + 1);
        } else {
          setScore2(score2 + 1);
        }
        setIsContinuing(false);
      } else {
        // Update the current player
        setCurrentPlayer(currentPlayer === player1 ? player2 : player1);
      }
    }
  };

  useEffect(() => {
    let intervalId
    if (winner) {
     intervalId =  setTimeout(() => {
        alert(`Player ${winner} wins!`);
        setWinner(null);
      }, 1);
    }
    return () => {
      clearTimeout(intervalId);
    }
  }, [winner]);

  const handleContinue = () => {
    setIsContinuing(true);
    setGame(GRID);
    setWinner(null);
  };

  return (
    <div className='w-[100vw] min-h-[100vh] bg-slate-600 flex justify-center items-center flex-col'>
      <h1 className='text-center text-4xl text-white pt-10 font-semibold'>Tic Tac Toe</h1>
      <div className='flex justify-center items-center mt-10'>
        <div className='flex justify-center items-center gap-20'>
          <h2 className={`${currentPlayer === player1 ? "font-semibold text-gray-900 bg-white py-4 pl-3 pr-3 rounded-lg " : "text-white bg-green-700 py-4 pl-3 pr-3 rounded-lg"}`}>Player X: {score1}</h2>
          <h2 className={`${currentPlayer === player2 ? "font-semibold text-gray-900 bg-white py-4 pl-3 pr-3 rounded-lg " : "text-white bg-green-700 py-4 pl-3 pr-3 rounded-lg"}`}>Player O: {score2}</h2>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-2 mt-10'>
        {game.map((row, rowIndex) => (
          row.map((col, colIndex) => (
            <button key={colIndex} className='bg-slate-500 text-white text-4xl font-semibold flex justify-center items-center h-24 w-24 game cursor-pointer' onClick={() => handleGame(rowIndex, colIndex)}>
              {col}
            </button>
          ))
        ))}
      </div>
      <button className='mt-10 bg-green-700 text-white text-2xl font-semibold py-2 px-4 rounded-lg' onClick={handleContinue}>continue</button>
    </div>
  );
};

export default App;