namespace Aufgabe06 {
    //Emissionswerte zuweisen
    //Europa
    let europe2008: number = 4965.7;
    let europe2018: number = 4209.3;

    //Nordamerika
    let northamerica2008: number = 6600.4;
    let northamerica2018: number = 6036.6;

    //Südamerika
    let southamerica2008: number = 1132.6;
    let southamerica2018: number = 1261.5;

    //Afrika
    let africa2008: number = 1028;
    let africa2018: number = 1235.5;

    //Asien
    let asia2008: number = 12954.7;
    let asia2018: number = 16274.1;

    //Australien
    let australia2008: number = 1993;
    let australia2018: number = 2100.5;


    // Augelagerte Berechnung
    //Gesamtemission
    let gesamt: number = europe2018 + northamerica2018 + southamerica2018 + africa2018 + asia2018 + australia2018;

    // Europa
    let totalEurope: number = (100 / (gesamt / europe2018));
    let PcomparisonEurope: number = (((europe2018 / europe2008) - 1) * 100);
    let compEurope: number = (europe2018 - europe2008);

    //Nordamerika
    let totalNorthamerica: number = (100 / (gesamt / northamerica2018));
    let PcomparisonNorthamerica: number = (((northamerica2018 / northamerica2008) - 1) * 100);
    let compNorthamerica: number = (northamerica2018 - northamerica2008);

    //Südamerika
    let totalSouthamerica: number = (100 / (gesamt / southamerica2018));
    let PcomparisonSouthamerica: number = (((southamerica2018 / southamerica2008) - 1) * 100);
    let compSouthamerica: number = (southamerica2018 - southamerica2008);

    //Afrika
    let totalAfrica: number = (100 / (gesamt / africa2018));
    let PcomparisonAfrica: number = (((africa2018 / africa2008) - 1) * 100);
    let compAfrica: number = (africa2018 - africa2008);

    //Asien
    let totalAsia: number = (100 / (gesamt / asia2018));
    let PcomparisonAsia: number = (((asia2018 / asia2008) - 1) * 100);
    let compAsia: number = (asia2018 - asia2008);

    //Australien
    let totalAustralia: number = (100 / (gesamt / australia2018));
    let PcomparisonAustralia: number = (((australia2018 / australia2008) - 1) * 100);
    let compAustralia: number = (australia2018 - australia2008);

    //HTML DOM Manipulation 
    //Europa
    function europe() {
        document.querySelector(".titleRegion").innerHTML = "Europe"; //greift nicht auf alle class titleRegion elemente zu?
        document.querySelector(".absoluteEmission").innerHTML = europe2018 + "kg CO2"; //wenn kg co2 weg ist ist da ein Fehler, wieso?
        document.querySelector(".relativeEmission").innerHTML = totalEurope.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonEurope.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compEurope.toFixed(1) + "kg CO2";
        
        document.querySelector(".chart").setAttribute("style", "height:" + totalEurope + "%")
    }

    window.addEventListener("load", function() {
        document.querySelector(".europe").addEventListener("click", europe);
    });

    //Nordamerika
    function northamerica() {
        document.querySelector(".titleRegion").innerHTML = "North America";
        document.querySelector(".absoluteEmission").innerHTML = northamerica2008 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalNorthamerica.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonNorthamerica.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compNorthamerica.toFixed(1) + "kg CO2";

        document.querySelector(".chart").setAttribute("style", "height:" + totalNorthamerica + "%")
    }

    window.addEventListener("load", function() {
        document.querySelector(".northamerica").addEventListener("click", northamerica);
    });

    //Südamerika
    function southamerica() {
        document.querySelector(".titleRegion").innerHTML = "South America";
        document.querySelector(".absoluteEmission").innerHTML = southamerica2018 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalSouthamerica.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonSouthamerica.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compSouthamerica.toFixed(1) + "kg CO2";

        document.querySelector(".chart").setAttribute("style", "height:" + totalSouthamerica + "%")
    }

    window.addEventListener("load", function() {
        document.querySelector(".southamerica").addEventListener("click", southamerica);
    });

    //Afrika
    function africa() {
        document.querySelector(".titleRegion").innerHTML = "Africa";
        document.querySelector(".absoluteEmission").innerHTML = africa2018 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalAfrica.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonAfrica.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compAfrica.toFixed(1) + "kg CO2";

        document.querySelector(".chart").setAttribute("style", "height:" + totalAfrica + "%")
    }

    window.addEventListener("load", function() {
        document.querySelector(".africa").addEventListener("click", africa);
    });

    //Asien
    function asia() {
        document.querySelector(".titleRegion").innerHTML = "Asia";
        document.querySelector(".absoluteEmission").innerHTML = asia2018 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalAsia.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonAfrica.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compAsia.toFixed(1) + "kg CO2";

        document.querySelector(".chart").setAttribute("style", "height:" + totalAsia + "%")
    }

    window.addEventListener("load", function() {
        document.querySelector(".asia").addEventListener("click", asia);
    });

    //Australien
    function australia() {
        document.querySelector(".titleRegion").innerHTML = "Australia";
        document.querySelector(".absoluteEmission").innerHTML = australia2018 + "kg CO2";
        document.querySelector(".relativeEmission").innerHTML = totalAustralia.toFixed(1) + "%";
        document.querySelector(".growthEmission").innerHTML = PcomparisonAustralia.toFixed(1) + "%";
        document.querySelector(".growthEmissionAbs").innerHTML = compAustralia.toFixed(1) + "kg CO2";

        document.querySelector(".chart").setAttribute("style", "height:" + totalAustralia + "%")
    }

    window.addEventListener("load", function() {
        document.querySelector(".australia").addEventListener("click", australia);
    });

}