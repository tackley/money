import { Item, Machine } from "../economy/items";
import { Recipe } from "../economy/recipies";

export interface InventoryItem {
    item: Item,
    quantity: number;
}

export interface ActiveMachine {
    machine: Machine,
    currentRecipe?: Recipe,
    inHopper: InventoryItem[],
    percentComplete: number; // 0 to 100
}

export interface Board {
    money: number;
    inventory: InventoryItem[];
    machines: ActiveMachine[];
}


export function createNewBoard(): Board {
    return {
        money: 100,
        inventory: [],
        machines:[]
    }
}

