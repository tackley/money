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
    craftableIn: ["Furnace", "Furnace 2", "Furnace 3"],
  },

  {
    name: "Smelt Iron Plate",
    availableFromLevel: 2,
    input: [{ item: "Iron Plate", quantity: 5 }],
    output: [{ item: "Steel Plate", quantity: 1 }],
    baseCraftingTime: 15,
    craftableIn: ["Furnace", "Furnace 2", "Furnace 3"],
  },
  {
    name: "Smelt Copper Ore",
    availableFromLevel: 1,
    input: [{ item: "Copper Ore", quantity: 1 }],
    output: [{ item: "Copper Plate", quantity: 1 }],
    baseCraftingTime: 7,
    craftableIn: ["Furnace", "Furnace 2", "Furnace 3"],
  },
  {
    name: "Smelt Stone",
    availableFromLevel: 2,
    input: [{ item: "Stone", quantity: 3 }],
    output: [{ item: "Stone Brick", quantity: 2 }],
    baseCraftingTime: 15,
    craftableIn: ["Furnace", "Furnace 2", "Furnace 3"],
  },
  {
    name: "Liquify Oil",
    availableFromLevel: 5,
    input: [{ item: "Hard Oil", quantity: 2 }],
    output: [{ item: "Oil", quantity: 1 }],
    baseCraftingTime: 27,
    craftableIn: ["Liquid Handler", "Liquid Handler 2"],
  },
  {
    name: "Process Uranium",
    availableFromLevel: 5,
    input: [{ item: "Uranium Ore", quantity: 7 }],
    output: [{ item: "Processed Uranium", quantity: 7 }],
    baseCraftingTime: 63,
    craftableIn: ["Uranium Processer", "Uranium Processer 2"],
  },
  {
    name: "Process Uranium (2)",
    availableFromLevel: 5,
    input: [{ item: "Uranium Ore", quantity: 127 }],
    output: [
      {
        item: "Processed Uranium",
        quantity: 127,
      },
      { item: "Rare Uranium", quantity: 1 },
    ],
    baseCraftingTime: 1023,
    craftableIn: ["Uranium Processer", "Uranium Processer 2"],
  },
  /*  {
    name: "",
    availableFromLevel: ,
    input: [{ item: "", quantity:  }],
    output: [ { item: "", quantity:  }],
    baseCraftingTime: ,
    craftableIn: ["", ""]
  },
  */
  {
    name: "Plant Wheat",
    availableFromLevel: 2,
    input: [],
    output: [{ item: "Wheat", quantity: 1 }],
    baseCraftingTime: 31,
    craftableIn: ["Farm", "Mechanized Farm"],
  },
  {
    name: "Farm Chicken",
    availableFromLevel: 2,
    input: [],
    output: [{ item: "Egg", quantity: 1 }],
    baseCraftingTime: 63,
    craftableIn: ["Farm", "Mechanized Farm"],
  },
  {
    name: "Make Flour",
    availableFromLevel: 2,
    input: [],
    output: [{ item: "Flour", quantity: 1 }],
    baseCraftingTime: 31,
    craftableIn: ["Farm", "Mechanized Farm"],
  },
  {
    name: "Bake A Cake!",
    availableFromLevel: 3,
    input: [
      { item: "Flour", quantity: 5 },
      { item: "Egg", quantity: 5 },
      { item: "Wheat", quantity: 10 },
    ],
    output: [{ item: "Cake", quantity: 1 }],
    baseCraftingTime: 127,
    craftableIn: ["Baker", "Baker 2"],
  },
  {
    name: "Make Coins",
    availableFromLevel: 2,
    input: [{ item: "Copper Plate", quantity: 2 }],
    output: [{ item: "Copper Coin", quantity: 15 }],
    baseCraftingTime: 11,
    craftableIn: ["Maker", "Maker 2", "Maker 3", "Maker 4"],
  },
  {
    name: "Make Batteries",
    availableFromLevel: 2,
    input: [
      { item: "Copper Coin", quantity: 20 },
      { item: "Iron Copper Alloy", quantity: 5 },
    ],
    output: [{ item: "Battery", quantity: 1 }],
    baseCraftingTime: 15,
    craftableIn: ["Maker", "Maker 2", "Maker 3", "Maker 4"],
  },
  {
    name: "Make Iron Copper Alloy",
    availableFromLevel: 1,
    input: [
      { item: "Copper Plate", quantity: 3 },
      { item: "Iron Plate", quantity: 3 },
    ],
    output: [{ item: "Iron Copper Alloy", quantity: 4 }],
    baseCraftingTime: 11,
    craftableIn: ["Maker", "Maker 2", "Maker 3", "Maker 4"],
  },
  {
    name: "Make Solar Panel",
    availableFromLevel: 2,
    input: [
      { item: "Copper Plate", quantity: 7 },
      { item: "Iron Copper Alloy", quantity: 3 },
    ],
    output: [{ item: "Solar Panel", quantity: 1 }],
    baseCraftingTime: 23,
    craftableIn: ["Maker", "Maker 2", "Maker 3", "Maker 4"],
  },
  {
    name: "Make Simple Circit",
    availableFromLevel: 2,
    input: [
      { item: "Iron Plate", quantity: 2 },
      { item: "Copper Plate", quantity: 2 },
      { item: "Iron Copper Alloy", quantity: 1 },
    ],
    output: [{ item: "Simple Circit", quantity: 11 }],
    baseCraftingTime: 23,
    craftableIn: ["Maker", "Maker 2", "Maker 3", "Maker 4"],
  },
];
