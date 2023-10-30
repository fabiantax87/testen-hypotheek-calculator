import Hypotheek from "./Hypotheek.mjs";

class Stel {
  totaalJaarlijksInkomen;
  persoon1;
  persoon2;
  hypotheek;

  constructor(persoon1, persoon2) {
    this.persoon1 = persoon1;
    this.persoon2 = persoon2;

    this.totaalJaarlijksInkomen = this.persoon1.getInkomen() + this.persoon2.getInkomen();
    this.hypotheek = new Hypotheek(30, 8989);
  }

  getInkomen = () => {
    return this.totaalJaarlijksInkomen;
  }

  getRentePercentage = () => {
    return this.hypotheek.getRentePercentage();
  }

  getMaxHypotheek = () => {
    let studieschuld = false;

    if(this.persoon1.getStudieschuld() || this.persoon2.getStudieschuld()){
      studieschuld = true;
    }

    return this.hypotheek.getMaxHypotheek(studieschuld, this.getInkomen());
  }

  getMaxHypotheekMetRente = () => {
    return this.hypotheek.getMaxHypotheekMetRente();
  }

  getTotaleMaandKosten = () => {
    return this.hypotheek.getTotaleMaandKosten();
  }
}

export default Stel;