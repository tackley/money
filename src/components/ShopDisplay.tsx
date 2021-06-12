import React, { Dispatch } from "react";
import { Board } from "../board";
import { getShopContentsForLevel, BaseItem } from "../economy/items";
import {
  Card,
  CardActionArea,
  Typography,
  Box,
  Avatar,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { buyItem, BoardAction } from "../board/actions";
import clsx from "clsx";
import { grey } from "@material-ui/core/colors";

interface Props {
  board: Pick<Board, "money" | "level">;
  applyAction: Dispatch<BoardAction>;
}

type ItemDisplayProps = {
  item: BaseItem;
  balance: number;
  applyAction: Dispatch<BoardAction>;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(1),
    },
    caption: {
      lineHeight: "normal",
    },
    disabled: {
      backgroundColor: grey[900],
    },
  })
);

const ShopItemDisplay: React.FC<ItemDisplayProps> = ({
  item,
  balance,
  applyAction,
}) => {
  const classes = useStyles();
  const disabled = item.price.buy > balance;

  return (
    <Card>
      <CardActionArea
        disabled={disabled}
        onClick={() => applyAction(buyItem(item, 1))}
        className={clsx({ [classes.disabled]: disabled })}
      >
        <Box display="flex" alignItems="center" margin={1}>
          <Avatar src={item.image} />
          <Box marginLeft={1}>
            <Typography variant="h6" className={classes.caption}>
              {item.name}
            </Typography>
            <Typography variant="caption">{item.price.buy} coins</Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export const ShopDisplay: React.FC<Props> = ({ board, applyAction }) => {
  const shopContents = getShopContentsForLevel(board.level);

  const items = [...shopContents.items, ...shopContents.machines];

  return (
    <Box display="flex" flexWrap="wrap">
      {items.map((i) => (
        <Box key={i.name} padding={1} minWidth="16rem" flex="1">
          <ShopItemDisplay
            item={i}
            balance={board.money}
            applyAction={applyAction}
          ></ShopItemDisplay>
        </Box>
      ))}
    </Box>
  );
};
