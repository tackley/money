import { Item, Machine } from "../economy/items";
import { Recipe } from "../economy/recipes";

export interface InventoryItem {
  item: string;
  quantity: number;
}

export type InventoryItemBag = InventoryItem[];

export interface ActiveMachine {
  machine: Machine;
  currentRecipe?: Recipe;
  inHopper: InventoryItem[];
  percentComplete: number; // 0 to 100
}

export interface Board {
  level: number;
  money: number;
  inventory: InventoryItem[];
  machines: ActiveMachine[];
}

export function createNewBoard(): Board {
  return {
    level: 1,
    money: 100,
    inventory: [],
    machines: []
  };
}
