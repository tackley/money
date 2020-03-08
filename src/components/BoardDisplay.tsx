import React from "react";
import { Board } from "../board";
import { Grid, Toolbar, Typography, AppBar } from "@material-ui/core";
import { BankDisplay } from "./BankDisplay";

interface BoardDisplayProps {
  board: Board;
}

export const BoardDisplay: React.FC<BoardDisplayProps> = ({ board }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <BankDisplay balance={board.money} />
      </Grid>
      <Grid item xs={3}>
        <AppBar position="relative">
          <Toolbar variant="dense">
            <Typography variant="subtitle2">Your Machines</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={3}>
        <AppBar position="relative">
          <Toolbar variant="dense">
            <Typography variant="subtitle2">Your Inventory</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={3}>
        <AppBar position="relative">
          <Toolbar variant="dense">
            <Typography variant="subtitle2">Shop</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};
