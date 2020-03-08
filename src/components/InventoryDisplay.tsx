import React, { Dispatch } from "react";
import { Board } from "../board";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { BoardAction } from "../board/actions";

interface Props {
  board: Pick<Board, "inventory">;
  applyAction: Dispatch<BoardAction>;
}

export const InventoryDisplay: React.FC<Props> = ({ board, applyAction }) => (
  <List>
    {board.inventory.map(i => (
      <ListItem key={i.item.name} button>
        <ListItemText primary={`${i.quantity} ${i.item.name}`} />
      </ListItem>
    ))}
  </List>
);
