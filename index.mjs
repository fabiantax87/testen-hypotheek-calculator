import AlleenstaandPersoon from "./AlleenstaandPersoon.mjs";
import Persoon from "./Persoon.mjs";
import Stel from "./Stel.mjs";

const alleenstaandPersoon = new AlleenstaandPersoon(30000, 30, false);

console.log("----- Alleenstaand persoon ------");
console.log("Rente percentage:", alleenstaandPersoon.getRentePercentage());
console.log("Max hypotheek:", alleenstaandPersoon.getMaxHypotheek());
console.log("Max hypotheek met rente:", alleenstaandPersoon.getMaxHypotheekMetRente());
console.log("Maand kosten:", alleenstaandPersoon.getTotaleMaandKosten());

const persoon1 = new Persoon(30000, 30, true);
const persoon2 = new Persoon(20000, 30, false);
const stel = new Stel(persoon1, persoon2);

console.log("\n----- Stel ------");
console.log("Rente percentage:", stel.getRentePercentage());
console.log("Max hypotheek:", stel.getMaxHypotheek());
console.log("Max hypotheek met rente:", stel.getMaxHypotheekMetRente());
console.log("Maand kosten:", stel.getTotaleMaandKosten());
