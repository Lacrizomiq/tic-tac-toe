import { Square } from "./Square";

type SquareValue = "X" | "O" | null;

type BoardProps = {
  squares: SquareValue[];
  winningSquares?: number[];
  onClick: (index: number) => void;
};

export const Board = ({ squares, onClick, winningSquares }: BoardProps) => {
  return (
    <div className="game-board">
      {squares.map((square, index) => (
        <Square
          onClick={() => onClick?.(index)}
          isWinningSquare={winningSquares?.includes(index)}
          key={index}
        >
          {square}
        </Square>
      ))}
    </div>
  );
};
