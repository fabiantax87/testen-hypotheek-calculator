import Hypotheek from "./Hypotheek.mjs";

const hypotheek = new Hypotheek(5, 8888);

test("Bereken rente percentage", () => {
  expect(hypotheek.berekenRentePercentage(5)).toBe(3);
});

test("Bereken max hypotheek", () => {
  expect(hypotheek.berekenMaxHypotheek(false, 30000)).toBe(127500);
});

test("Bereken max hypotheek met rente", () => {
  expect(hypotheek.berekenMaxHypotheekMetRente(3, 127500, 5)).toBe(146625);
});

test("Bereken totale maand kosten", () => {
  expect(hypotheek.berekenTotaleMaandKosten(146625, 5)).toBe(2443.75);
});

/*
  @TODO is dit genoeg code coverage?? integratie testen??
*/