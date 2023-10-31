import Hypotheek from "./Hypotheek.mjs";
import Persoon from "./Persoon.mjs";

class AlleenstaandPersoon extends Persoon {
  hypotheek;
  
  constructor(totaalJaarlijksInkomen, leeftijd, studieschuld) {
    super(totaalJaarlijksInkomen, leeftijd, studieschuld);
    this.hypotheek = new Hypotheek(30, 8787, studieschuld, totaalJaarlijksInkomen);
  }

  getRentePercentage = () => {
    return this.hypotheek.getRentePercentage();
  }

  getMaxHypotheek = () => {
    return this.hypotheek.getMaxHypotheek(this.studieschuld, this.getInkomen());
  }

  getMaxHypotheekMetRente = () => {
    return this.hypotheek.getMaxHypotheekMetRente();
  }

  getTotaleMaandKosten = () => {
    return this.hypotheek.getTotaleMaandKosten();
  }
}

export default AlleenstaandPersoon;