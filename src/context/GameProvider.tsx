import { createContext, PropsWithChildren, useState } from "react";
import {
  calculateNextValue,
  calculateStatus,
  getDefaultSquares,
  SquareValue,
  UserNames,
  calculateWinner,
} from "../lib/lib";

export type GameContextOutput = {
  squares: SquareValue[];
  xUserName: string | null;
  oUserName: string | null;
  status: string;
  setUserNames: (userNames: UserNames) => void;
  onSquareClick: (index: number) => void;
  winningSquares: number[];
};

type GameContextType = GameContextOutput | null;

export const GameContext = createContext<GameContextType>(null);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [squares, setSquares] = useState<SquareValue[]>(() =>
    getDefaultSquares()
  );

  const [userNames, setUserNames] = useState<UserNames>({
    X: null,
    O: null,
  });

  const nextValue = calculateNextValue(squares);
  const { winner, winningSquares } = calculateWinner(squares);

  const xUserName = userNames.X;
  const oUserName = userNames.O;

  const status = calculateStatus(
    squares,
    `${userNames[nextValue]}'s turn (${nextValue})`,
    winner ? userNames[winner] : null
  );

  const onSquareClick = (index: number) => {
    if (squares[index] || winner) {
      return;
    }

    setSquares((prevSquares) => {
      const newSquares = [...prevSquares];
      newSquares[index] = nextValue;
      return newSquares;
    });
  };

  const value: GameContextOutput = {
    squares,
    xUserName,
    oUserName,
    status,
    setUserNames,
    onSquareClick,
    winningSquares,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
