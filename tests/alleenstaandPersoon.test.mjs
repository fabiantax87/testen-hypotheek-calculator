import AlleenstaandPersoon from "../classes/AlleenstaandPersoon.mjs";
import Hypotheek from "../classes/Hypotheek.mjs";

const alleenstaandPersoon = new AlleenstaandPersoon(30000, 30, false);

test("Kijk of je de hypotheek van een alleenstaand persoon kan ophalen", () => {
  expect(alleenstaandPersoon.getHypotheek()).toBeInstanceOf(Hypotheek);
});