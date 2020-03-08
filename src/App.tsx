import React from "react";
import { Button } from "@material-ui/core";
import { Board, createNewBoard } from "./board";
import { BoardDisplay } from "./components/BoardDisplay";

function App() {
  const [board, setBoard] = React.useState<Board>(createNewBoard());

  if (!board) {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => setBoard(createNewBoard())}
      >
        Start New Game
      </Button>
    );
  }

  return <BoardDisplay board={board} applyAction={setBoard} />;
}

export default App;
