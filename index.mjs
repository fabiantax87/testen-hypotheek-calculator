import AlleenstaandPersoon from "./AlleenstaandPersoon.mjs";
import Persoon from "./Persoon.mjs";
import Stel from "./Stel.mjs";

const alleenstaandPersoon = new AlleenstaandPersoon(30000, 30, false);
const hypotheekAlleenstaandPersoon = alleenstaandPersoon.getHypotheek();

console.log("----- Alleenstaand persoon ------");
console.log("Rente percentage:", hypotheekAlleenstaandPersoon.getRentePercentage());
console.log("Max hypotheek:", hypotheekAlleenstaandPersoon.getMaxHypotheek());
console.log("Max hypotheek met rente:", hypotheekAlleenstaandPersoon.getMaxHypotheekMetRente());
console.log("Maand kosten:", hypotheekAlleenstaandPersoon.getTotaleMaandKosten());

const persoon1 = new Persoon(30000, 30, true);
const persoon2 = new Persoon(20000, 30, false);

const stel = new Stel(persoon1, persoon2);
const hypotheekStel = stel.getHypotheek();

console.log("\n----- Stel ------");
console.log("Rente percentage:", hypotheekStel.getRentePercentage());
console.log("Max hypotheek:", hypotheekStel.getMaxHypotheek(stel.studieschuldAanwezig(), stel.getInkomen()));
console.log("Max hypotheek met rente:", hypotheekStel.getMaxHypotheekMetRente());
console.log("Maand kosten:", hypotheekStel.getTotaleMaandKosten());
