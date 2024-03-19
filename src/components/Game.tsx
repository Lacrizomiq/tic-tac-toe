import { useGame } from "../hooks/useGame";
import { Board } from "./Board";
import { GameInfo } from "./GameInfo";
import { UserNameForm } from "./UserNameForm";

export const Game = () => {
  const {
    squares,
    xUserName,
    oUserName,
    status,
    onSquareClick,
    winningSquares,
  } = useGame();

  if (!xUserName || !oUserName) {
    return <UserNameForm />;
  }

  return (
    <div className="game">
      <GameInfo status={status} userNames={{ X: xUserName, O: oUserName }} />
      <Board
        squares={squares}
        onClick={onSquareClick}
        winningSquares={winningSquares}
      />
    </div>
  );
};
