import { recipes } from "./recipes";
import { items, machines } from "./items";

const allItemNames = items.map(i => i.name);
const allMachineNames = machines.map(m => m.name);

recipes.forEach(r => {
  test(`${r.name} is uses valid machines`, () => {
    r.craftableIn.forEach(m => expect(allMachineNames).toContain(m));
  })

  test(`${r.name} is has valid inputs`, () => {
    r.input.forEach(i => expect(allItemNames).toContain(i.item));
  })

  test(`${r.name} is has valid outputs`, () => {
    r.output.forEach(o => expect(allItemNames).toContain(o.item));
  })
})
