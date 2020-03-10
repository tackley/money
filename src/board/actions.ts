import { Board, InventoryItemBag, InventoryItem } from ".";
import { BaseItem, isMachine } from "../economy/items";
import produce from "immer";
import { bank } from "../economy/bank";

export type BoardAction = (b: Readonly<Board>) => Board;

function addItemToInventoryBag(
  bag: InventoryItemBag,
  inventoryItem: InventoryItem
) {
  // if there's an entry for this item in inventory, update the quantity. Otherwise add a new entry.
  const existingInventory = bag.find(i => i.item === inventoryItem.item);
  if (existingInventory) {
    existingInventory.quantity += inventoryItem.quantity;
  } else {
    bag.push({ ...inventoryItem });
  }
}

function addItemsToInventoryBag(
  bag: InventoryItemBag,
  inventoryItems: InventoryItem[]
) {
  inventoryItems.forEach(i => addItemToInventoryBag(bag, i));
}

function getCountForItem(bag: InventoryItemBag, item: string): number {
  const existingInventory = bag.find(i => i.item === item);

  return existingInventory?.quantity ?? 0;
}

function removeFromInventoryBag(
  bag: InventoryItemBag,
  inventoryItem: InventoryItem
): InventoryItem | undefined {
  const existingInventory = bag.find(i => i.item === inventoryItem.item);

  if (!existingInventory || existingInventory.quantity < inventoryItem.quantity)
    return undefined;

  existingInventory.quantity -= inventoryItem.quantity;

  return inventoryItem;
}

export function buyItem(item: BaseItem, quantity: number): BoardAction {
  return produce((draft: Board) => {
    const value = item.price.buy * quantity;
    draft.money -= value;

    if (isMachine(item)) {
      draft.machines.push({
        inHopper: [],
        machine: item,
        percentComplete: 0,
        hopperFull: false
      });
    } else {
      addItemToInventoryBag(draft.inventory, { item: item.name, quantity });
    }
  });
}

function level(soldCoins: number) {
  return Math.max(Math.floor(Math.log2(soldCoins + 1) - Math.log2(64)), 1);
}

function levelPercent(soldCoins: number) {
  return Math.max(1, ((Math.log2(soldCoins + 1) - Math.log2(128)) % 1) * 100);
}

export function sellItem(item: BaseItem, quantity: number): BoardAction {
  return produce((draft: Board) => {
    const value = item.price.sell * quantity;
    draft.money += value;
    draft.amountSold += value;
    draft.level = level(draft.amountSold);
    draft.levelPercentComplete = levelPercent(draft.amountSold);

    if (isMachine(item)) {
      // draft.machines;
      alert("Cannot sell machines yet!");
    } else {
      removeFromInventoryBag(draft.inventory, { item: item.name, quantity });
    }
  });
}

export function addMoreMoney(amount: number): BoardAction {
  return produce((draft: Board) => {
    draft.money += amount;
  });
}

function fillHoppers(board: Board) {
  board.machines.forEach(m => {
    const inputs: InventoryItemBag = m.currentRecipe?.input ?? [];

    let hasAllInputs = true;

    // first iterate through what we have in inputs
    inputs.forEach(ii => {
      const h = getCountForItem(m.inHopper, ii.item);
      const r = ii.quantity;
      const req = r - h;

      if (req !== 0) {
        m.percentComplete = 0;
        const fromInv = removeFromInventoryBag(board.inventory, ii);

        if (fromInv) {
          addItemToInventoryBag(m.inHopper, fromInv);
        } else {
          hasAllInputs = false;
        }
      }
    });

    m.hopperFull = hasAllInputs;

    // and now remove any extras unneeded items
    const neededItems = inputs.map(i => i.item);
    const extraItems = m.inHopper.filter(h => !neededItems.includes(h.item));

    extraItems.forEach(ii => {
      addItemToInventoryBag(board.inventory, { ...ii });
      ii.quantity = 0;
    });
  });
}

function doProduction(board: Board) {
  board.machines.forEach(m => {
    if (m.hopperFull && m.currentRecipe) {
      const baseDuration = m.currentRecipe.baseCraftingTime;
      const multiplier = m.machine.craftingSpeedMultiplier;

      const ticksPerRecipe = baseDuration / multiplier;
      const percentPerTick = 100 / ticksPerRecipe;

      m.percentComplete += percentPerTick;

      if (m.percentComplete >= 100) {
        addItemsToInventoryBag(board.inventory, m.currentRecipe.output);
        m.inHopper = [];
      }
    }
  });
}

export function gameTick(): BoardAction {
  return produce((draft: Board) => {
    // interest on bank balance
    draft.money += draft.money * bank.interestRatePerTick;

    // fill hoppers if needs be
    fillHoppers(draft);

    // produce machines
    doProduction(draft);
  });
}
