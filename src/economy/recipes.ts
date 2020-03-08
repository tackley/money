export interface Recipe {
  name: string;
  availableFromLevel: number;
  input: {
    item: string;
    quantity: number;
  }[];
  output: {
    item: string;
    quantity: number;
  }[];
  baseCraftingTime: number;
  craftableIn: string[];
}

export const recipes: Recipe[] = [
  {
    name: "Smelt Iron Ore",
    availableFromLevel: 1,
    input: [{ item: "Iron Ore", quantity: 1 }],
    output: [{ item: "Iron Plate", quantity: 1 }],
    baseCraftingTime: 7,
    craftableIn: ["Furnace", "Furnace 2"]
  },

  {
    name: "Smelt Iron Plate",
    availableFromLevel: 2,
    input: [{ item: "Iron Plate", quantity: 5 }],
    output: [{ item: "Steel Plate", quantity: 1 }],
    baseCraftingTime: 23,
    craftableIn: ["Furnace", "Furnace 2"]
  },
  {
    name: "Smelt Copper Ore",
    availableFromLevel: 1,
    input: [{ item: "Copper Ore", quantity: 5 }],
    output: [{ item: "Copper Plate", quantity: 1 }],
    baseCraftingTime: 7,
    craftableIn: ["Furnace", "Furnace 2"]
  },
  {
    name: "Smelt Stone",
    availableFromLevel: 2,
    input: [{ item: "Stone", quantity: 3 }],
    output: [{ item: "Stone Brick", quantity: 2 }],
    baseCraftingTime: 15,
    craftableIn: ["Furnace", "Furnace 2"]
  },
  {
    name: "Liquify Oil",
    availableFromLevel: 5,
    input: [{ item: "Hard Oil", quantity: 2 }],
    output: [{ item: "Oil", quantity: 1 }],
    baseCraftingTime: 27,
    craftableIn: ["Liquid Handler", "Liquid Handler 2"]
  }
];
