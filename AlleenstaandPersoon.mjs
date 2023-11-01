import Hypotheek from "./Hypotheek.mjs";
import Persoon from "./Persoon.mjs";

class AlleenstaandPersoon extends Persoon {
  hypotheek;
  
  constructor(totaalJaarlijksInkomen, leeftijd, studieschuld) {
    super(totaalJaarlijksInkomen, leeftijd, studieschuld);
    this.hypotheek = new Hypotheek(30, 8787, studieschuld, totaalJaarlijksInkomen);
  }

  getHypotheek() {
    return this.hypotheek;
  }
}

export default AlleenstaandPersoon;