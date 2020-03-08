
export interface Recipe {
    name: string,
    availableFromLevel: number,
    input: {
        item: string,
        quantity: number 
    }[],
    output: {
        item: string,
        quantity: number
    }[],
    baseCraftingTime: number,
    craftableIn: string[]
}

export const recipies: Recipe[] = [
    {
        name: "Smelt Iron",
        availableFromLevel: 1,
        input: [
            { item: "Iron Ore", quantity: 1}
        ],
        output: [
            { item: "Iron Plate", quantity: 1}
        ],
        baseCraftingTime: 8,
        craftableIn: [
            "Furnace 1",
            "Furnace 2"
        ]

    }
]