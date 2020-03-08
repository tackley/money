import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";

export const BankDisplay: React.FC<{ balance: number; level: number }> = ({
  balance,
  level
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Bank"
          height="200"
          image={require("../images/640px-FirstBankofUS00_crop.jpg")}
          title="Bank"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            You have{" "}
            {balance.toLocaleString("en-GB", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true
            })}{" "}
            coins
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            Level {level}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
