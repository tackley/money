import React from "react";
import { Board } from "../board";
import { getShopContentsForLevel, BaseItem } from "../economy/items";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box
} from "@material-ui/core";

interface Props {
  board: Pick<Board, "money" | "level">;
}

const ShopItemDisplay: React.FC<{ item: BaseItem }> = ({ item }) => (
  <Card>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {item.price.buy} coins
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Buy
        </Button>
      </CardActions>
    </CardActionArea>
  </Card>
);

export const ShopDisplay: React.FC<Props> = ({ board }) => {
  const shopContents = getShopContentsForLevel(board.level);

  const items = [...shopContents.items, ...shopContents.machines];

  return (
    <React.Fragment>
      {items.map(i => (
        <Box padding={1}>
          <ShopItemDisplay item={i}></ShopItemDisplay>
        </Box>
      ))}
    </React.Fragment>
  );
};
