import React, { Dispatch } from "react";
import { Board } from "../board";
import { getShopContentsForLevel, BaseItem } from "../economy/items";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  CardMedia
} from "@material-ui/core";
import { buyItem, BoardAction } from "../board/actions";

interface Props {
  board: Pick<Board, "money" | "level">;
  applyAction: Dispatch<BoardAction>;
}

const ShopItemDisplay: React.FC<{
  item: BaseItem;
  balance: number;
  applyAction: Dispatch<BoardAction>;
}> = ({ item, balance, applyAction }) => {
  return (
    <Card>
      <CardActionArea>
        {item.image && (
          <CardMedia component="img" height="200" image={item.image} />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {item.price.buy} coins
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          disabled={item.price.buy > balance}
          onClick={() => applyAction(buyItem(item, 1))}
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export const ShopDisplay: React.FC<Props> = ({ board, applyAction }) => {
  const shopContents = getShopContentsForLevel(board.level);

  const items = [...shopContents.items, ...shopContents.machines];

  return (
    <React.Fragment>
      {items.map(i => (
        <Box key={i.name} padding={1} maxWidth={200}>
          <ShopItemDisplay
            item={i}
            balance={board.money}
            applyAction={applyAction}
          ></ShopItemDisplay>
        </Box>
      ))}
    </React.Fragment>
  );
};
