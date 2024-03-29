//Emissionswerte zuweisen
//Europa
const europe2008: number = 4965.7;
const europe2018: number = 4209.3;

//Nordamerika
const northamerica2008: number = 6600.4;
const northamerica2018: number = 6036.6;

//Südamerika
const southamerica2008: number = 1132.6;
const southamerica2018: number = 1261.5;

//Afrika
const africa2008: number = 1028;
const africa2018: number = 1235.5;

//Asien
const asia2008: number = 12954.7;
const asia2018: number = 16274.1;

//Australien
const australia2008: number = 1993;
const australia2018: number = 2100.5;


// Augelagerte Berechnung (weil Herr Rausch gesagt hat, dass das die eleganter Methode wäre :) )
//Gesamtemission
const gesamt: number = europe2018 + northamerica2018 + southamerica2018 + africa2018 + asia2018 + australia2018;

// Europa
const totalEurope: number = (100 / (gesamt / europe2018));
const PcomparisonEurope: number = (((europe2018 / europe2008)-1) * 100);
const compEurope: number = (europe2018 - europe2008);

//Nordamerika
const totalNorthamerica: number = (100 / (gesamt / northamerica2018));
const PcomparisonNorthamerica: number = (((northamerica2018 / northamerica2008)-1) * 100);
const compNorthamerica: number = (northamerica2018 - northamerica2008);

//Südamerika
const totalSouthamerica: number = (100 / (gesamt / southamerica2018));
const PcomparisonSouthamerica: number = (((southamerica2018 / southamerica2008)-1) * 100);
const compSouthamerica: number = (southamerica2018 - southamerica2008);

//Afrika
const totalAfrica: number = (100 / (gesamt / africa2018));
const PcomparisonAfrica: number = (((africa2018 / africa2008)-1) * 100);
const compAfrica: number = (africa2018 - africa2008);

//Asien
const totalAsia: number = (100 / (gesamt / asia2018));
const PcomparisonAsia: number = (((asia2018 / asia2008)-1) * 100);
const compAsia: number = (asia2018 - asia2008);

//Australien
const totalAustralia: number = (100 / (gesamt / australia2018));
const PcomparisonAustralia: number = (((australia2018 / australia2008)-1) * 100);
const compAustralia: number = (australia2018 - australia2008);

// Konsolenausgabe
//Europa
console.log("Emmissionswerte von Europa");
console.log("Die Emisson von Europa ist: " + europe2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + totalEurope.toFixed(2) + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + PcomparisonEurope.toFixed(2) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + compEurope.toFixed(2) + "kg CO2");
console.log("");

//Nordamerika
console.log("Emmissionswerte von Nordamerika");
console.log("Die Emisson von Nordamerika ist: " + northamerica2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + totalNorthamerica.toFixed(2) + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + PcomparisonNorthamerica.toFixed(2) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + compNorthamerica.toFixed(2) + "kg CO2");
console.log("");

//Südamerika
console.log("Emmissionswerte von Südamerika");
console.log("Die Emisson von Südamerika ist: " + southamerica2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + totalSouthamerica.toFixed(2) + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + PcomparisonSouthamerica.toFixed(2) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + compSouthamerica.toFixed(2) + "kg CO2");
console.log("");

//Afrika
console.log("Emmissionswerte von Afrika");
console.log("Die Emisson von Afrika ist: " + africa2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + totalAfrica.toFixed(2) + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + PcomparisonAfrica.toFixed(2) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + compAfrica.toFixed(2) + "kg CO2");
console.log("");

//Asien
console.log("Emmissionswerte von Asien");
console.log("Die Emisson von Asien ist: " + asia2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + totalAsia.toFixed(2) + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + PcomparisonAsia.toFixed(2) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + compAsia.toFixed(2) + "kg CO2");
console.log("");

//Australien
console.log("Emmissionswerte von Australien");
console.log("Die Emisson von Australien ist: " + australia2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + totalAustralia.toFixed(2) + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + PcomparisonAustralia.toFixed(2) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + compAustralia.toFixed(2) + "kg CO2");