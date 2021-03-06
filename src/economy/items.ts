export interface Item {
  type: "item";
  name: string;
  image?: string;
  inShopFromLevel: number;
  price: {
    buy: number;
    sell: number;
  };
}

export interface Machine {
  type: "machine";
  name: string;
  image?: string;

  inShopFromLevel: number;
  price: {
    buy: number;
    sell: number;
  };
  craftingSpeedMultiplier: number;
}

export type BaseItem = Item | Machine;

export function isMachine(i: BaseItem): i is Machine {
  return i.type === "machine";
}

export const items: Item[] = [
  {
    type: "item",
    name: "Iron Ore",
    image: require("../images/bethan_iron.png").default,
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
    image: require("../images/bethan_copper.png").default,
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
    price: { buy: 15, sell: 13 }
  },
  {
    type: "item",
    name: "Stone Brick",
    inShopFromLevel: 4,
    price: { buy: 47, sell: 31 }
  },
  {
    type: "item",
    name: "Hard Oil",
    inShopFromLevel: 5,
    price: { buy: 63, sell: 47 }
  },
  {
    type: "item",
    name: "Oil",
    inShopFromLevel: 7,
    price: { buy: 234, sell: 191 }
  },
  {
    type: "item",
    name: "Uranium Ore",
    inShopFromLevel: 5,
    price: { buy: 191, sell: 127 }
  },
  {
    type: "item",
    name: "Processed Uranium",
    inShopFromLevel: 7,
    price: { buy: 547, sell: 255 }
  },
  {
    type: "item",
    name: "Rare Uranium",
    inShopFromLevel: 8,
    price: { buy: 8191, sell: 4095 }
  },
  {
    type: "item",
    name: "Cake",
    inShopFromLevel: 5,
    price: { buy: 1023, sell: 255 }
  },
  {
    type: "item",
    name: "Egg",
    inShopFromLevel: 5,
    price: { buy: 31, sell: 23 }
  },
  {
    type: "item",
    name: "Flour",
    inShopFromLevel: 5,
    price: { buy: 31, sell: 1 }
  },
  {
    type: "item",
    name: "Wheat",
    inShopFromLevel: 9,
    price: { buy: 31, sell: 1 }
  },
  {
    type: "item",
    name: "Copper Coin",
    inShopFromLevel: 5,
    price: { buy: 7, sell: 3 }
  },
  {
    type: "item",
    name: "Solar Panel",
    inShopFromLevel: 7,
    price: { buy: 511, sell: 255 }
  },
  {
    type: "item",
    name: "Battery",
    inShopFromLevel: 6,
    price: { buy: 383, sell: 233 }
  },
  {
    type: "item",
    name: "Simple Circit",
    inShopFromLevel: 3,
    price: { buy: 31, sell: 27 }
  },
  {
    type: "item",
    name: "Iron Copper Alloy",
    inShopFromLevel: 4,
    price: { buy: 47, sell: 31 }
  }
];

export const machines: Machine[] = [
  {
    type: "machine",
    name: "Furnace",
    image: require("../images/bethan_furnace.png").default,
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
    name: "Furnace 3",
    inShopFromLevel: 5,
    price: { buy: 255, sell: 191 },
    craftingSpeedMultiplier: 5
  },
  {
    type: "machine",
    name: "Liquid Handler",
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
  },
  {
    type: "machine",
    name: "Maker",
    inShopFromLevel: 2,
    price: { buy: 23, sell: 15 },
    craftingSpeedMultiplier: 1
  },
  {
    type: "machine",
    name: "Maker 2",
    inShopFromLevel: 3,
    price: { buy: 95, sell: 63 },
    craftingSpeedMultiplier: 2
  },
  {
    type: "machine",
    name: "Maker 3",
    inShopFromLevel: 4,
    price: { buy: 223, sell: 127 },
    craftingSpeedMultiplier: 4
  },
  {
    type: "machine",
    name: "Maker 4",
    inShopFromLevel: 6,
    price: { buy: 767, sell: 255 },
    craftingSpeedMultiplier: 6
  },
  {
    type: "machine",
    name: "Uranium Processer",
    inShopFromLevel: 5,
    price: { buy: 1023, sell: 511 },
    craftingSpeedMultiplier: 1
  },
  {
    type: "machine",
    name: "Uranium Processer 2",
    inShopFromLevel: 7,
    price: { buy: 8191, sell: 4095 },
    craftingSpeedMultiplier: 3
  },
  {
    type: "machine",
    name: "Farm",
    inShopFromLevel: 2,
    price: { buy: 95, sell: 63 },
    craftingSpeedMultiplier: 1
  },
  {
    type: "machine",
    name: "Mechanized Farm",
    inShopFromLevel: 8,
    price: { buy: 1023, sell: 895 },
    craftingSpeedMultiplier: 3
  },
  {
    type: "machine",
    name: "Baker",
    inShopFromLevel: 2,
    price: { buy: 195, sell: 127 },
    craftingSpeedMultiplier: 1
  },
  {
    type: "machine",
    name: "Baker 2",
    inShopFromLevel: 4,
    price: { buy: 383, sell: 255 },
    craftingSpeedMultiplier: 4
  }
];

export function getShopContentsForLevel(
  level: number
): {
  items: Item[];
  machines: Machine[];
} {
  return {
    items: items.filter(i => i.inShopFromLevel <= level),
    machines: machines.filter(i => i.inShopFromLevel <= level)
  };
}

export function findItemByName(name: string): Item {
  const i = items.find(i => i.name === name);
  if (!i) throw new Error("cannot find item with name " + name);
  return i;
}
