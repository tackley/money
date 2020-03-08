export interface BaseItem {
    type: 'item' | 'machine';
    name: string,
    inShopFromLevel: number,
    price: {
        buy: number,
        sell: number,
    },
}

export interface Item extends BaseItem {
    type: 'item',
}

export interface Machine extends BaseItem {
    type: 'machine',
    craftingSpeedMultiplier: number
}

export const items = [
    {
        type: "item",
        name: "Iron Plate",
        inShopFromLevel: 1,
        price: { buy: 12, sell: 10}
    }, 
    {
        type: "item",
        name: "Iron Ore",
        inShopFromLevel: 3,
        price: { buy: 8, sell: 6}
    }, 
    {
        type: "machine",
        name: "Furnace 1",
        inShopFromLevel: 1,
        price: { buy: 20, sell: 15},
        craftingSpeedMultiplier: 1
    }, 
    {
        type: "machine",
        name: "Furnace 2",
        inShopFromLevel: 3,
        price: { buy: 60, sell: 50},
        craftingSpeedMultiplier: 2
    } 
]