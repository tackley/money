import React, { Dispatch } from "react";
import { Board } from "../board";
import {
  List,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  createStyles
} from "@material-ui/core";
import { BoardAction } from "../board/actions";
import { getPossibleRecipes } from "../economy/utils";
import { Recipe } from "../economy/recipes";
import produce from "immer";

interface Props {
  board: Pick<Board, "machines" | "level">;
  applyAction: Dispatch<BoardAction>;
}

interface DropDownProps {
  recipes: Recipe[];
  selected?: Recipe;
  onChange: Dispatch<Recipe | undefined>;
}

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      width: "100%"
    }
  })
);

export const RecipeDropDown: React.FC<DropDownProps> = ({
  recipes,
  selected,
  onChange
}) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const name = event.target.value;
    const recipe = recipes.find(r => r.name === name);
    onChange(recipe);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Recipe</InputLabel>
      <Select value={selected?.name || ""} onChange={handleChange}>
        <MenuItem value="">
          <em>Idle</em>
        </MenuItem>
        {recipes.map(r => (
          <MenuItem key={r.name} value={r.name}>
            {r.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const MachineDisplay: React.FC<Props> = ({ board, applyAction }) => {
  const handleChange = (machineIdx: number) => (recipe: Recipe | undefined) => {
    applyAction(
      produce((b: Board) => {
        b.machines[machineIdx].currentRecipe = recipe;
      })
    );
  };

  return (
    <List>
      {board.machines.map((m, idx) => {
        const possibleRecipes = getPossibleRecipes(m.machine, board.level);

        return (
          <li key={idx}>
            <Typography variant="h5" component="span">
              {m.machine.name}
            </Typography>
            <RecipeDropDown
              recipes={possibleRecipes}
              selected={m.currentRecipe}
              onChange={handleChange(idx)}
            />
            <Typography variant="body2" component="span">
              Hopper: {JSON.stringify(m.inHopper)}
            </Typography>
          </li>
        );
      })}
    </List>
  );
};
