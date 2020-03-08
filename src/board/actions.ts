import { Board } from ".";
import { BaseItem, isMachine } from "../economy/items";
import produce from "immer";

export function buyItem(
  item: BaseItem,
  quantity: number
): (b: Readonly<Board>) => Board {
  return produce((draft: Board) => {
    const value = item.price.buy * quantity;
    draft.money -= value;

    if (isMachine(item)) {
      draft.machines.push({ inHopper: [], machine: item, percentComplete: 0 });
    } else {
      // if there's an entry for this item in inventory, update the quantity. Otherwise add a new entry.
      const existingInventory = draft.inventory.find(
        i => i.item.name === item.name
      );
      if (existingInventory) {
        existingInventory.quantity += quantity;
      } else {
        draft.inventory.push({ item, quantity });
      }
    }
  });
}

export function addMoreMoney(amount: number): (b: Board) => Board {
  return produce((draft: Board) => {
    draft.money += amount;
  });
}
