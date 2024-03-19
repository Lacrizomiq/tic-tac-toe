import { useContext } from "react";
import { GameContextOutput, GameContext } from "../context/GameProvider";

export const useGame = (): GameContextOutput => {
  const context = useContext(GameContext);
  if (context === null) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
