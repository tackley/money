import React, { Dispatch } from "react";
import { Board } from "../board";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { BoardAction } from "../board/actions";

interface Props {
  board: Pick<Board, "machines">;
  applyAction: Dispatch<BoardAction>;
}

export const MachineDisplay: React.FC<Props> = ({ board, applyAction }) => (
  <List>
    {board.machines.map((m, idx) => {
      const recipe = m.currentRecipe?.name ?? "idle";
      return (
        <ListItem key={idx} button>
          <ListItemText primary={`${m.machine.name}`} secondary={recipe} />
        </ListItem>
      );
    })}
  </List>
);
