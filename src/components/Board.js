import React, { useState } from 'react';
import { calculateWinner } from './gameUtils';
import Square from './Square';

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) return;

        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {squares.map((value, index) => (
                    <Square key={index} value={value} onClick={() => handleClick(index)} />
                ))}
            </div>
        </div>
    );
}

export default Board;