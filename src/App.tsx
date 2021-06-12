import React from "react";
import {
  Button,
  ThemeProvider,
  createMuiTheme,
  CssBaseline,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { Board, createNewBoard } from "./board";
import { BoardDisplay } from "./components/BoardDisplay";
import { gameTick } from "./board/actions";
import { pink, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: pink,
    secondary: grey,
  },
});

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      marginTop: spacing(1),
    },
  })
);

function App() {
  const [board, setBoard] = React.useState<Board>(createNewBoard());

  const classes = useStyles();

  React.useEffect(() => {
    const tickTimer = setInterval(() => setBoard(gameTick()), 1000);
    return () => clearInterval(tickTimer);
  }, []);

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={classes.root} maxWidth="xl">
        <BoardDisplay board={board} applyAction={setBoard} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
