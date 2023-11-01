import Persoon from "../classes/Persoon.mjs";
import Stel from "../classes/Stel.mjs";
import Hypotheek from "../classes/Hypotheek.mjs";

const persoon1 = new Persoon(30000, 30, false);
const persoon2 = new Persoon(20000, 30, false);

const stel = new Stel(persoon1, persoon2);

test("Kijk of er een studieschuld aanwezig is", () => {
  expect(stel.studieschuldAanwezig()).toBe(false);
});

test("Kijk of je de hypotheek van een stel kan ophalen", () => {
  expect(stel.getHypotheek()).toBeInstanceOf(Hypotheek);
});

test("Kijk of je een inkomen kan ophalen van een stel", () => {
  expect(stel.getInkomen()).toBe(50000);
});