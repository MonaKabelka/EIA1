//Emissionswerte zuweisen
//Europa
var europe2008 = 4965.7;
var europe2018 = 4209.3;
//Nordamerika
var northamerica2008 = 6600.4;
var northamerica2018 = 6036.6;
//Südamerika
var southamerica2008 = 1132.6;
var southamerica2018 = 1261.5;
//Afrika
var africa2008 = 1028;
var africa2018 = 1235.5;
//Asien
var asia2008 = 12954.7;
var asia2018 = 16274.1;
//Australien
var australia2008 = 1993;
var australia2018 = 2100.5;
// Augelagerte Berechnung (weil Herr Rausch gesagt hat, dass das die eleganter Methode wäre :) )
//Gesamtemission
var gesamt = europe2018 + northamerica2018 + southamerica2018 + africa2018 + asia2018 + australia2018;
// Europa
var totalEurope = (100 / (gesamt / europe2018));
var PcomparisonEurope = (100 / (europe2018 / europe2008));
var compEurope = (europe2018 - europe2008);
//Nordamerika
var totalNorthamerica = (100 / (gesamt / northamerica2018));
var PcomparisonNorthamerica = (100 / (northamerica2018 / northamerica2008));
var compNorthamerica = (northamerica2018 - northamerica2008);
//Südamerika
var totalSouthamerica = (100 / (gesamt / southamerica2018));
var PcomparisonSouthamerica = (100 / (southamerica2018 / southamerica2008));
var compSouthamerica = (southamerica2018 - southamerica2008);
//Afrika
var totalAfrica = (100 / (gesamt / africa2018));
var PcomparisonAfrica = (100 / (africa2018 / africa2008));
var compAfrica = (africa2018 - africa2008);
//Asien
var totalAsia = (100 / (gesamt / asia2018));
var PcomparisonAsia = (100 / (asia2018 / asia2008));
var compAsia = (asia2018 - asia2008);
//Australien
var totalAustralia = (100 / (gesamt / australia2018));
var PcomparisonAustralia = (100 / (australia2018 / australia2008));
var compAustralia = (australia2018 - australia2008);
// Konsolenausgabe
//Europa
console.log("Emmissionswerte von Europa");
console.log("Die Emisson von Europa ist: " + europe2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + totalEurope.toFixed(1) + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + PcomparisonEurope.toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + compEurope.toFixed(1) + "kg CO2");
console.log("");
//Nordamerika
console.log("Emmissionswerte von Nordamerika");
console.log("Die Emisson von Nordamerika ist: " + northamerica2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + totalNorthamerica.toFixed(1) + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + PcomparisonNorthamerica.toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + compNorthamerica.toFixed(1) + "kg CO2");
console.log("");
//Südamerika
console.log("Emmissionswerte von Südamerika");
console.log("Die Emisson von Südamerika ist: " + southamerica2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + totalSouthamerica.toFixed(1) + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + PcomparisonSouthamerica.toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + compSouthamerica.toFixed(1) + "kg CO2");
console.log("");
//Afrika
console.log("Emmissionswerte von Afrika");
console.log("Die Emisson von Afrika ist: " + africa2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + totalAfrica.toFixed(1) + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + PcomparisonAfrica.toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + compAfrica.toFixed(1) + "kg CO2");
console.log("");
//Asien
console.log("Emmissionswerte von Asien");
console.log("Die Emisson von Asien ist: " + asia2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + totalAsia.toFixed(1) + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + PcomparisonAsia.toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + compAsia.toFixed(1) + "kg CO2");
console.log("");
//Australien
console.log("Emmissionswerte von Australien");
console.log("Die Emisson von Australien ist: " + australia2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + totalAustralia.toFixed(1) + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + PcomparisonAustralia.toFixed(1) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + compAustralia.toFixed(1) + "kg CO2");
//# sourceMappingURL=script.js.map