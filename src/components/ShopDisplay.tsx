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
  CardMedia,
  Avatar,
  makeStyles,
  createStyles,
  Paper
} from "@material-ui/core";
import { buyItem, BoardAction } from "../board/actions";

interface Props {
  board: Pick<Board, "money" | "level">;
  applyAction: Dispatch<BoardAction>;
}

type ItemDisplayProps = {
  item: BaseItem;
  balance: number;
  applyAction: Dispatch<BoardAction>;
};

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      paddingTop: theme.spacing(1)
    },
    price: {}
  })
);

const ShopItemDisplay: React.FC<ItemDisplayProps> = ({
  item,
  balance,
  applyAction
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <Box display="flex" alignItems="center" margin={1}>
          <Avatar src={item.image} />
          <Box marginLeft={1}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="caption">{item.price.buy} coins</Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
    // <Card>
    //   <CardActionArea>
    //     {item.image && (
    //       <CardMedia component="img" height="200" image={item.image} />
    //     )}
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {item.name}
    //       </Typography>
    //       <Typography gutterBottom variant="subtitle1">
    //         {item.price.buy} coins
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button
    //       size="small"
    //       color="primary"
    //       disabled={item.price.buy > balance}
    //       onClick={() => applyAction(buyItem(item, 1))}
    //     >
    //       Buy
    //     </Button>
    //   </CardActions>
    // </Card>
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
