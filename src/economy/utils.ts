import { Machine } from "./items";
import { Recipe, recipes } from "./recipes";

export function getPossibleRecipes(m: Machine, level: number): Recipe[] {
  return recipes
    .filter((r) => r.craftableIn.includes(m.name))
    .filter((r) => r.availableFromLevel <= level);
}
