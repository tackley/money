import React, { Dispatch } from "react";
import { Board, BoardAction } from "../board";
import { Grid, Toolbar, Typography, AppBar, Button } from "@material-ui/core";
import { BankDisplay } from "./BankDisplay";
import { ShopDisplay } from "./ShopDisplay";
import { addMoreMoney } from "../board/actions";

interface BoardDisplayProps {
  board: Board;
  applyAction: Dispatch<BoardAction>;
}

export const BoardDisplay: React.FC<BoardDisplayProps> = ({
  board,
  applyAction
}) => {
  const moreMoney = () => {
    applyAction(addMoreMoney(10));
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <BankDisplay balance={board.money} level={board.level} />

        <Button size="small" color="primary" onClick={moreMoney}>
          More Money
        </Button>
      </Grid>
      <Grid item xs={3}>
        <AppBar position="relative">
          <Toolbar variant="dense">
            <Typography variant="subtitle2">Your Machines</Typography>
          </Toolbar>
        </AppBar>
        <pre>{JSON.stringify(board.machines, null, 2)}</pre>
      </Grid>
      <Grid item xs={3}>
        <AppBar position="relative">
          <Toolbar variant="dense">
            <Typography variant="subtitle2">Your Inventory</Typography>
          </Toolbar>
        </AppBar>
        <pre>{JSON.stringify(board.inventory, null, 2)}</pre>
      </Grid>
      <Grid item xs={3}>
        <AppBar position="relative">
          <Toolbar variant="dense">
            <Typography variant="subtitle2">Shop</Typography>
          </Toolbar>
        </AppBar>

        <ShopDisplay board={board} applyAction={applyAction} />
      </Grid>
    </Grid>
  );
};
