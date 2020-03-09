import React, { Dispatch } from "react";
import { Board } from "../board";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  ListItemSecondaryAction
} from "@material-ui/core";
import { BoardAction, sellItem } from "../board/actions";
import { findItemByName } from "../economy/items";

interface Props {
  board: Pick<Board, "inventory">;
  applyAction: Dispatch<BoardAction>;
}

export const InventoryDisplay: React.FC<Props> = ({ board, applyAction }) => (
  <List>
    {board.inventory
      .filter(i => i.quantity > 0)
      .map(i => {
        const item = findItemByName(i.item);
        return (
          <ListItem key={i.item} button>
            <ListItemText
              primary={`${i.quantity} ${i.item}`}
              secondary={`Sell for ${item.price.sell} coins each`}
            />
            <ListItemSecondaryAction>
              <Button
                size="small"
                color="primary"
                onClick={() => applyAction(sellItem(item, 1))}
              >
                Sell {item.price.sell}c
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
  </List>
);
