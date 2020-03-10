import React, { Dispatch } from "react";
import { Board } from "../board";
import { Grid, Toolbar, Typography, AppBar } from "@material-ui/core";
import { BankDisplay } from "./BankDisplay";
import { ShopDisplay } from "./ShopDisplay";
import { InventoryDisplay } from "./InventoryDisplay";
import { MachineDisplay } from "./MachineDisplay";
import { BoardAction } from "../board/actions";

interface BoardDisplayProps {
  board: Board;
  applyAction: Dispatch<BoardAction>;
}

export const BoardDisplay: React.FC<BoardDisplayProps> = ({
  board,
  applyAction
}) => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <BankDisplay board={board} />
        </Grid>
        <Grid item xs={4}>
          <AppBar position="relative">
            <Toolbar variant="dense">
              <Typography variant="subtitle1">Your Machines</Typography>
            </Toolbar>
          </AppBar>
          <MachineDisplay board={board} applyAction={applyAction} />
        </Grid>
        <Grid item xs={4}>
          <AppBar position="relative">
            <Toolbar variant="dense">
              <Typography variant="subtitle1">Your Inventory</Typography>
            </Toolbar>
          </AppBar>

          <InventoryDisplay board={board} applyAction={applyAction} />
        </Grid>
        <Grid item xs={12}>
          <AppBar position="relative">
            <Toolbar variant="dense">
              <Typography variant="subtitle1">Shop</Typography>
            </Toolbar>
          </AppBar>

          <ShopDisplay board={board} applyAction={applyAction} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
