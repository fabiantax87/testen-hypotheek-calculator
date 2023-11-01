class Persoon {
  totaalJaarlijksInkomen;
  leeftijd;
  studieschuld;

  constructor(totaalJaarlijksInkomen, leeftijd, studieschuld) {
    this.totaalJaarlijksInkomen = totaalJaarlijksInkomen;
    this.leeftijd = leeftijd;
    this.studieschuld = studieschuld;
  }

  getInkomen = () => {
    return this.totaalJaarlijksInkomen;
  }

  getStudieschuld = () => {
    return this.studieschuld;
  }
}

export default Persoon;