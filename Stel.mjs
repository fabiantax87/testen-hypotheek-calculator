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
    this.hypotheek = new Hypotheek(30, 8989, this.studieschuldAanwezig(), this.totaalJaarlijksInkomen);
  }

  studieschuldAanwezig = () => {
    if(this.persoon1.getStudieschuld() || this.persoon2.getStudieschuld()) return true;
  }

  getHypotheek = () => {
    return this.hypotheek;
  }

  getInkomen = () => {
    return this.totaalJaarlijksInkomen;
  }
}

export default Stel;