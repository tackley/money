import { Machine } from "../economy/items";
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
  hopperFull: boolean;
  percentComplete: number; // 0 to 100
}

export interface Board {
  level: number;
  levelPercentComplete: number;
  money: number;
  inventory: InventoryItem[];
  machines: ActiveMachine[];
  amountSold: number;
}

export function createNewBoard(): Board {
  return {
    level: 1,
    levelPercentComplete: 0,
    money: 100,
    inventory: [],
    machines: [],
    amountSold: 0,
  };
}
