var Aufgabe06;
(function (Aufgabe06) {
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
    // Augelagerte Berechnung
    //Gesamtemission
    var gesamt = europe2018 + northamerica2018 + southamerica2018 + africa2018 + asia2018 + australia2018;
    // Europa
    var totalEurope = (100 / (gesamt / europe2018));
    var PcomparisonEurope = (((europe2018 / europe2008) - 1) * 100);
    var compEurope = (europe2018 - europe2008);
    //Nordamerika
    var totalNorthamerica = (100 / (gesamt / northamerica2018));
    var PcomparisonNorthamerica = (((northamerica2018 / northamerica2008) - 1) * 100);
    var compNorthamerica = (northamerica2018 - northamerica2008);
    //Südamerika
    var totalSouthamerica = (100 / (gesamt / southamerica2018));
    var PcomparisonSouthamerica = (((southamerica2018 / southamerica2008) - 1) * 100);
    var compSouthamerica = (southamerica2018 - southamerica2008);
    //Afrika
    var totalAfrica = (100 / (gesamt / africa2018));
    var PcomparisonAfrica = (((africa2018 / africa2008) - 1) * 100);
    var compAfrica = (africa2018 - africa2008);
    //Asien
    var totalAsia = (100 / (gesamt / asia2018));
    var PcomparisonAsia = (((asia2018 / asia2008) - 1) * 100);
    var compAsia = (asia2018 - asia2008);
    //Australien
    var totalAustralia = (100 / (gesamt / australia2018));
    var PcomparisonAustralia = (((australia2018 / australia2008) - 1) * 100);
    var compAustralia = (australia2018 - australia2008);
    //HTML DOM Manipulation 
    //Europa
    function europe() {
        document.querySelector(".titleRegion").innerHTML = "Europe"; //Greift nicht auf alle class="titleRegion" Elemente zu: wieso?
        document.querySelector(".titleRegion1").innerHTML = "Europe";
        document.querySelector(".absoluteEmission").innerHTML = europe2018 + "kg CO2"; //Wenn kg CO2 weg ist, ist da ein Fehler, wieso?
        document.querySelector(".relativeEmission").innerHTML = totalEurope.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonEurope.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compEurope.toFixed(1) + "kg CO2";
        document.querySelector(".chart").setAttribute("style", "height:" + totalEurope + "%");
    }
    window.addEventListener("load", function () {
        document.querySelector(".europe").addEventListener("click", europe);
    });
    //Nordamerika
    function northamerica() {
        document.querySelector(".titleRegion").innerHTML = "North America";
        document.querySelector(".titleRegion1").innerHTML = "North America";
        document.querySelector(".absoluteEmission").innerHTML = northamerica2008 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalNorthamerica.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonNorthamerica.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compNorthamerica.toFixed(1) + "kg CO2";
        document.querySelector(".chart").setAttribute("style", "height:" + totalNorthamerica + "%");
    }
    window.addEventListener("load", function () {
        document.querySelector(".northamerica").addEventListener("click", northamerica);
    });
    //Südamerika
    function southamerica() {
        document.querySelector(".titleRegion").innerHTML = "South America";
        document.querySelector(".titleRegion1").innerHTML = "South America";
        document.querySelector(".absoluteEmission").innerHTML = southamerica2018 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalSouthamerica.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonSouthamerica.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compSouthamerica.toFixed(1) + "kg CO2";
        document.querySelector(".chart").setAttribute("style", "height:" + totalSouthamerica + "%");
    }
    window.addEventListener("load", function () {
        document.querySelector(".southamerica").addEventListener("click", southamerica);
    });
    //Afrika
    function africa() {
        document.querySelector(".titleRegion").innerHTML = "Africa";
        document.querySelector(".titleRegion1").innerHTML = "Africa";
        document.querySelector(".absoluteEmission").innerHTML = africa2018 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalAfrica.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonAfrica.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compAfrica.toFixed(1) + "kg CO2";
        document.querySelector(".chart").setAttribute("style", "height:" + totalAfrica + "%");
    }
    window.addEventListener("load", function () {
        document.querySelector(".africa").addEventListener("click", africa);
    });
    //Asien
    function asia() {
        document.querySelector(".titleRegion").innerHTML = "Asia";
        document.querySelector(".titleRegion1").innerHTML = "Asia";
        document.querySelector(".absoluteEmission").innerHTML = asia2018 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalAsia.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonAfrica.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compAsia.toFixed(1) + "kg CO2";
        document.querySelector(".chart").setAttribute("style", "height:" + totalAsia + "%");
    }
    window.addEventListener("load", function () {
        document.querySelector(".asia").addEventListener("click", asia);
    });
    //Australien
    function australia() {
        document.querySelector(".titleRegion").innerHTML = "Australia";
        document.querySelector(".titleRegion1").innerHTML = "Australia";
        document.querySelector(".absoluteEmission").innerHTML = australia2018 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalAustralia.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonAustralia.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compAustralia.toFixed(1) + "kg CO2";
        document.querySelector(".chart").setAttribute("style", "height:" + totalAustralia + "%");
    }
    window.addEventListener("load", function () {
        document.querySelector(".australia").addEventListener("click", australia);
    });
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map