import Persoon from "../classes/Persoon.mjs";

const persoon = new Persoon(30000, 30, false);

test("Kijk of je een inkomen kan ophalen van een persoon", () => {
  expect(persoon.getInkomen()).toBe(30000);
});

test("Kijk of een persoon een studieshuld heeft", () => {
  expect(persoon.getStudieschuld()).toBe(false);
});