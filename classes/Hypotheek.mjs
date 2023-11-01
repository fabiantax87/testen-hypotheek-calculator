class Hypotheek {
  rentevastePeriode = 0;
  rentePercentage = 0;
  maxHypotheek = 0;
  maxHypotheekMetRente = 0;
  totaleMaandKosten = 0;

  constructor(rentevastePeriode, gekozenPostcode, studieschuld, totaalJaarlijksInkomen) {
    this.rentevastePeriode = rentevastePeriode;

    !this.checkPostcodeToegestaan(gekozenPostcode) && process.exit();

    this.rentePercentage = this.berekenRentePercentage(rentevastePeriode);
    this.maxHypotheek = this.berekenMaxHypotheek(studieschuld, totaalJaarlijksInkomen);
    this.maxHypotheekMetRente = this.berekenMaxHypotheekMetRente(this.rentePercentage, this.maxHypotheek, rentevastePeriode);
    this.totaleMaandKosten = this.berekenTotaleMaandKosten(this.maxHypotheekMetRente, rentevastePeriode);
  }

  checkPostcodeToegestaan = (postcode) => {
    if(postcode == 9679 || postcode == 9681 || postcode == 9682) {
      console.error("Hypotheek aanvraag is niet geaccepteerd, wij ondersteunen deze postcode gebieden niet wegens aarbevingsgevaar.");
      return false;
    }

    return true;
  }

  berekenRentePercentage = (rentevastePeriodetest) => {
    switch (rentevastePeriodetest) {
      case 1:
        return 2;
      case 5:
        return 3;
      case 10:
        return 3.5;
      case 20:
        return 4.5;
      case 30:
        return 5;
      default:
        break;
    }
  };

  berekenMaxHypotheek = (studieschuld, totaalJaarlijksInkomen) => {
    if (studieschuld) {
      return totaalJaarlijksInkomen * 4.25 * 0.75;
    }
  
    return totaalJaarlijksInkomen * 4.25;
  };

  berekenMaxHypotheekMetRente = (rentePercentage, maxHypotheek, rentevastePeriode) => {
    const maandRente = rentePercentage / 100 / 12;
    const maandBedragRente = maxHypotheek * maandRente;

    return maandBedragRente * 12 * rentevastePeriode + maxHypotheek;
  };

  berekenTotaleMaandKosten = (maxHypotheekMetRente, rentevastePeriode) => {
    return maxHypotheekMetRente / rentevastePeriode / 12;
  };

  getRentePercentage = () => {
    this.berekenRentePercentage(this.rentevastePeriode);
    return this.rentePercentage;
  }

  getMaxHypotheek = (studieschuld, totaalJaarlijksInkomen) => {
    this.berekenMaxHypotheek(studieschuld, totaalJaarlijksInkomen);
    return this.maxHypotheek;
  }

  getMaxHypotheekMetRente = () => {
    this.berekenMaxHypotheekMetRente(this.rentePercentage, this.maxHypotheek, this.rentevastePeriode);
    return this.maxHypotheekMetRente;
  }

  getTotaleMaandKosten = () => {
    this.berekenTotaleMaandKosten(this.maxHypotheekMetRente, this.rentevastePeriode);
    return this.totaleMaandKosten;
  }
}

export default Hypotheek;