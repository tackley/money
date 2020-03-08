export interface BaseItem {
  type: "item" | "machine";
  name: string;
  inShopFromLevel: number;
  price: {
    buy: number;
    sell: number;
  };
}

export interface Item extends BaseItem {
  type: "item";
}

export interface Machine extends BaseItem {
  type: "machine";
  craftingSpeedMultiplier: number;
}

const items: Item[] = [
  {
    type: "item",
    name: "Iron Ore",
    inShopFromLevel: 1,
    price: { buy: 8, sell: 6 }
  },
  {
    type: "item",
    name: "Iron Plate",
    inShopFromLevel: 3,
    price: { buy: 14, sell: 10 }
  },
  {
    type: "item",
    name: "Copper Ore",
    inShopFromLevel: 1,
    price: { buy: 10, sell: 9 }
  },
  {
    type: "item",
    name: "Copper Plate",
    inShopFromLevel: 2,
    price: { buy: 17, sell: 13 }
  },
  {
    type: "item",
    name: "Steel Plate",
    inShopFromLevel: 4,
    price: { buy: 127, sell: 95 }
  },
  {
    type: "item",
    name: "Stone",
    inShopFromLevel: 2,
    price: { buy: 19, sell: 13 }
  },
  {
    type: "item",
    name: "Stone Brick",
    inShopFromLevel: 4,
    price: { buy: 43, sell: 27 }
  },
  {
    type: "item",
    name: "Hard Oil",
    inShopFromLevel: 5,
    price: { buy: 78, sell: 65 }
  },
  {
    type: "item",
    name: "Oil",
    inShopFromLevel: 7,
    price: { buy: 234, sell: 141 }
  }
];

const machines: Machine[] = [
  {
    type: "machine",
    name: "Furnace 1",
    inShopFromLevel: 1,
    price: { buy: 20, sell: 15 },
    craftingSpeedMultiplier: 1
  },
  {
    type: "machine",
    name: "Furnace 2",
    inShopFromLevel: 3,
    price: { buy: 60, sell: 50 },
    craftingSpeedMultiplier: 2
  },
  {
    type: "machine",
    name: "Liquid Handler 1",
    inShopFromLevel: 5,
    price: { buy: 450, sell: 200 },
    craftingSpeedMultiplier: 1
  },
  {
    type: "machine",
    name: "Liquid Handler 2",
    inShopFromLevel: 6,
    price: { buy: 1023, sell: 383 },
    craftingSpeedMultiplier: 2
  }
];
export function getShopContentsForLevel(
  level: number
): { items: Item[]; machines: Machine[] } {
  return {
    items: items.filter(i => i.inShopFromLevel <= level),
    machines: machines.filter(i => i.inShopFromLevel <= level)
  };
}
