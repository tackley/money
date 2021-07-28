import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import { Board } from "../board";
import Image from "next/image";

export const BankDisplay: React.FC<{ board: Board }> = ({ board }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia style={{ height: 200 }}>
          <Image
            src="/images/640px-FirstBankofUS00_crop.jpg"
            alt="Bank"
            // image={require("../images/640px-FirstBankofUS00_crop.jpg").default}
            title="Bank"
            layout="fill"
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            You have{" "}
            {board.money.toLocaleString("en-GB", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })}{" "}
            coins
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            Level {board.level}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={board.levelPercentComplete}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
