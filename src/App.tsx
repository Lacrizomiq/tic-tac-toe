import { GameProvider } from "./context/GameProvider";
import { Game } from "./components/Game";

function App() {
  return (
    <GameProvider>
      <div>
        <h2>Tic Tac Toe</h2>
        <Game />
      </div>
    </GameProvider>
  );
}

export default App;
